# 08 · 기본 뷰포트 도구와 메뉴

[목차](README.md) · 직접 제어: [카메라/표시](09_CAMERA_DISPLAY.md) · 관련: [텍스처](10_TEXTURES_BUDGET.md)

예제의 뷰포트 위 아이콘·원근·라이팅·품질·표시 메뉴는 `mountDeliveryViewportTools()`로 생성합니다. 외부 프로젝트의 header 버튼과 별개로, viewer의 기존 동작을 제어하는 선택적 UI입니다.

## 시그니처와 인수

`mountDeliveryViewportTools(element, viewer, immersive, options?): () => void`

| 값 | 타입·기본값 | 사용 |
|---|---|---|
| `element` | HTMLElement | 메뉴를 붙일 전용 비어 있는 DOM |
| `viewer` | DeliveryViewer | 현재 sdk.viewport |
| `immersive` | `()=>void` | 호스트가 구현하는 최대화/전체화면 액션 |
| `options.leftOnly` | boolean, 기본 false | true면 오른쪽 선택 초점/최대화 버튼을 생략 |
| 반환값 | `()=>void` | 도구 UI의 React root와 viewer 관련 handler 정리 |

호스트 자체가 React를 사용할 필요는 없습니다. 패키지의 mount 함수가 UI root를 관리합니다. 이미 호스트 React가 소유한 자식 DOM과 같은 element를 동시에 관리하지 않습니다.

## DOM/CSS와 연결

```html
<section id="viewport">
  <div id="viewport-tools"></div>
  <canvas id="view"></canvas>
</section>
```

```css
#viewport { position: relative; min-width: 0; min-height: 320px; overflow: hidden; }
#view { display: block; width: 100%; height: 100%; }
#viewport-tools { position: absolute; top: 8px; left: 8px; right: 8px; z-index: 5; }
```

```ts
import { DeliveryClient, mountDeliveryViewportTools } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export function mountTools(
  sdk: DeliveryClient,
  tools: HTMLElement,
  viewport: HTMLElement,
  report: (message: string) => void,
) {
  return mountDeliveryViewportTools(tools, sdk.viewport, () => {
    void viewport.requestFullscreen().catch(error => report(String(error)));
  });
}
```

`immersive`는 사용자 메뉴 클릭/뷰포트 단축키에 반응합니다. 전체화면 대신 앱 내부 확대를 원하면 host CSS 클래스 토글 함수를 전달해도 됩니다. browser Fullscreen 요청의 Promise 거부를 처리하고, 호스트의 iframe/fullscreen 권한과 사용자의 브라우저 동작을 확인합니다.

## 메뉴가 호출하는 실제 기능

| 화면 메뉴 | 연결 |
|---|---|
| 선택에 초점 / 전체 맞춤 | viewer.focusSelection() / viewer.fit() |
| 카메라 속도·FOV·폭·clip | viewer.navigation.setSpeed() / viewer.setCameraSettings() |
| 원근/정면/상단 등 | viewer.setProjection() |
| 라이팅 포함/제외/와이어 | viewer.setMode() |
| Render Quality | viewer.quality.apply(), snapshot() |
| 환경광/강도 | viewer.environment / environmentIntensity + redraw |
| 그리드·에디터 도우미 | viewer.grid.visible / helpers |
| 바운드 | viewer.setBounds(), viewer.bounds |
| 정적 메시 배칭 | viewer.setStaticBatching(), 실제 status 안내 |
| 텍스처 | viewer.session.textureDisplay, 수동 적용 |

SDK0.3.1 이후 표시 메뉴에는 아이콘/아이콘 크기 컨트롤 대신 바운드를 제공합니다. 이번 외부 페이지 가이드는 뷰포트 메뉴 스타일을 새로 만들지 않습니다. host CSS를 `button`, `input` 전체에 강하게 적용하면 메뉴에 영향을 줄 수 있으므로 `.toolbar`/`.viewer-details` 같은 외부 컨테이너로 제한하세요.

이 도구는 viewer.onViewChange와 navigation.onAction의 단일 callback을 사용합니다. mount 후 그 callback을 호스트가 덮어쓰면 메뉴/단축키가 끊길 수 있습니다. 한 viewer에 도구를 중복 mount하지 않고 반환된 cleanup으로 정리합니다. F/게임 뷰/최대화 shortcut 연결도 이 도구가 담당하므로 도구를 쓰지 않는 경우에는 호스트가 필요한 액션 경로를 따로 구성합니다.
