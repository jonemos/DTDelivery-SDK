# 17 · 외부 개발 도구와 웹 프로젝트에 SDK 포함하기

SDK 0.3.17는 미리 빌드된 브라우저 모듈과 TypeScript 선언을 제공합니다. VS Code·WebStorm 같은 개발 도구의 기존 Vite/React/Vue/일반 TypeScript 프로젝트에서 사용할 수 있습니다. 개발 도구 자체에 플러그인을 설치하는 방식이 아니라, 그 도구로 만드는 웹 애플리케이션에 패키지를 포함합니다. 데스크톱 호스트는 WebGL을 지원하는 웹 화면을 준비하고 같은 모듈을 사용합니다. 모델은 별도의 검증된 게시 청크로 연결합니다.

## 1. 패키지로 설치하기

프로젝트 루트의 터미널에서 실행합니다. Git 주소로 설치하므로 개발 PC에 Git과 프로젝트의 Node.js·패키지 관리자가 필요합니다. 수신자가 미리 빌드한 테스트 페이지만 실행한다면 이 설치는 필요 없습니다.

```powershell
pnpm add '@dt/delivery-sdk@github:jonemos/DTDelivery-SDK#v0.3.25'
```

생성된 package.json과 lockfile을 함께 버전 관리합니다. 운영 배포는 검증한 태그에 고정하고 SDK 업데이트와 모델 게시본 업데이트를 별도로 관리하세요. 기존 프레임워크·개발 서버를 유지하며 SDK 예제 프로젝트를 앱 전체 위에 덮어쓰지 않습니다.

SDK 테스트 폴더는 공식 저장소를 `git clone`하고 이후 `update.cmd` 한 번으로 갱신할 수 있습니다. **외부 앱의 패키지 의존성은 별도**이므로 새 버전을 적용할 때 그 앱에서 위 `pnpm add`의 태그를 새 릴리스로 바꾸고 타입 검사·빌드·배포를 다시 실행합니다. 정적 파일을 복사해서 포함한 앱도 갱신한 파일을 앱에 반영해야 합니다. [업데이트되는 범위와 복구](../UPDATING.md)를 참고하세요.

다음처럼 DOM을 준비합니다. 부모 요소에도 높이가 있어야 합니다.

```html
<section class="twin-view">
  <div id="twin-tools"></div>
  <canvas id="twin-canvas"></canvas>
  <p id="twin-status" role="status"></p>
</section>
```

```css
.twin-view { position: relative; width: 100%; height: 600px; min-height: 300px; }
#twin-canvas { display: block; width: 100%; height: calc(100% - 80px); }
```

다음 함수는 번들러가 처리하는 TypeScript 소스입니다. 기본 메뉴는 선택 사항이며, 업무 UI는 호스트가 구성합니다.

```ts
import { DeliveryClient, HttpChunkSource, mountDeliveryViewportTools } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export function attachTwin(
  canvas: HTMLCanvasElement,
  toolbar: HTMLElement,
  status: HTMLElement,
  connectionUrl: string,
) {
  const sdk = new DeliveryClient({ canvas, source: new HttpChunkSource(new URL(connectionUrl)) });
  const stopProgress = sdk.subscribeProgress(value => {
    status.textContent = `${value.status} · ${value.readyCells}/${value.totalCells}`;
  });
  const removeTools = mountDeliveryViewportTools(toolbar, sdk.viewport, () => {
    void canvas.parentElement?.requestFullscreen().catch(error => {
      status.textContent = String(error);
    });
  });
  let closed = false;
  const ready = (async () => {
    const models = await sdk.listModels();
    if (closed) return;
    if (!models.length) { status.textContent = '게시된 모델이 없습니다.'; return; }
    // 최소 예제는 첫 모델을 엽니다. 업무 화면은 목록에서 선택한 ID를 사용합니다.
    await sdk.open(models[0]!.id, { progressive: true });
  })().catch(error => {
    if (!closed) status.textContent = String(error);
  });
  return {
    sdk, ready,
    async dispose() {
      if (closed) return;
      closed = true; stopProgress(); removeTools();
      await sdk.dispose();
    },
  };
}
```

호스트에서 실제 DOM이 생긴 뒤 한 번 호출하고 페이지·탭·컴포넌트를 제거할 때 반환된 `dispose()`를 호출합니다. React는 effect의 mount/cleanup, Vue는 mounted/unmounted, 일반 JS는 화면의 생성/제거 수명에 연결하세요. 같은 canvas에 활성 SDK를 두 개 만들지 않습니다. 클라이언트가 살아 있는 동안의 모델 전환은 `sdk.open(selectedId)`로 처리하며, 진행·선택·스크립트 구독은 각각 해제합니다. 읽기 연결이 없는 최초 실행은 [README](../../README.md)의 기본 연결 예제를 사용할 수 있습니다.

## 2. 설치 없이 정적 웹 화면에 포함하기

검증한 SDK 전체를 호스트의 `vendor/dt-sdk/` 같은 별도 정적 폴더에 복사합니다. `runtime`의 상대 모듈·CSS를 함께 유지하고 LICENSE·THIRD_PARTY_LICENSES.txt·sdk-manifest.json도 보존합니다. 하나의 sdk.js만 떼거나 파일을 편집하면 업데이트·무결성 검증의 기준을 잃습니다.

```html
<link rel="stylesheet" href="./vendor/dt-sdk/runtime/viewport.css">
<canvas id="model" style="display:block;width:100%;height:600px"></canvas>
<p id="status" role="status"></p>
<script type="module">
  import { DeliveryClient } from './vendor/dt-sdk/runtime/index.js';
  const sdk = new DeliveryClient({ canvas: document.querySelector('#model') });
  try {
    const models = await sdk.listModels();
    if (models.length) await sdk.open(models[0].id);
    else document.querySelector('#status').textContent = '게시된 모델이 없습니다.';
  } catch (error) {
    document.querySelector('#status').textContent = String(error);
  }
  window.addEventListener('pagehide', () => { void sdk.dispose(); }, { once: true });
</script>
```

호스트의 HTTP/HTTPS 서버로 제공합니다. HTML을 디스크에서 직접 더블클릭하는 `file://` 실행은 사용하지 않습니다. SDK의 `examples/test-server.cmd`는 제공된 테스트 페이지를 위한 서버입니다. 자체 앱은 그 앱의 서버·배포 도구를 사용하세요. React/Vue 등의 UI 프레임워크 사용은 선택 사항입니다.

## 3. 연결과 화면을 맞추기

| 준비 항목 | 적용 방법 |
|---|---|
| 모델 | 제작자가 전달한 SDK 연결 주소 또는 전체 청크 폴더. SDK 설치 폴더와 별도 보관 |
| 권한 | 원격은 공개 읽기·실제 웹 origin의 CORS, 로컬은 사용자가 폴더 읽기 권한 허용 |
| 카메라 | 같은 투영·위치/회전·수평 FOV·near/far·직교 폭 사용. 좌표 API는 RH/Y-up/m 기준 |
| 재질 | 텍스처 준비 완료 후 같은 맵·128/256/512px 표시 설정 비교 |
| 조명 | 같은 라이팅/언릿·환경광·강도·Render Quality·화면 효과 적용 |
| UI | 기즈모·편집 이력은 편집기의 기능. 조회 페이지는 카메라·선택·진행·업무 패널을 구성 |
| 종료 | 이벤트 구독·메뉴 mount 해제 후 비동기 dispose. 연결 실패는 화면에 실제 오류 표시 |

뷰포트 환경설정과 개인 카메라가 청크에 모두 포함되지는 않습니다. 호스트가 필요한 초기값을 [카메라·표시 API](09_CAMERA_DISPLAY.md)와 [텍스처 API](10_TEXTURES_BUDGET.md)로 적용하세요. 원본 Unreal 조명·재질 그래프 전체와 같은 화면을 보장하는 계약은 아닙니다. 표시 옵션 변경은 원본 레벨을 수정하지 않습니다.

## 4. 배포 전에 확인하기

자체 프로젝트에서 strict 타입 검사와 production build를 실행하고, 빌드한 정적 페이지에서 모델 목록 → 모델 열기 → 텍스처 준비 → 액터 선택 → 모델 전환 → 화면 제거/재진입을 확인합니다. 개발 서버에서만 성공한 결과와 배포 서버 결과를 구분하세요. 모델 파일의 크기·해시 검사를 끄거나 손상된 파일을 직접 고쳐 통과시키지 않습니다. 쓰기용 저장소 키는 SDK·HTML·브라우저 번들에 넣지 않습니다.

지원 문의에는 SDK 버전/태그, 모델 이름·release hash, 브라우저/OS, 재현 순서와 오류 메시지를 전달합니다. 키와 비공개 모델은 공개 이슈에 첨부하지 않습니다. 첫 사용자에게 줄 준비물은 [18 · 첫 전달 안내](18_FIRST_DELIVERY.md)를 참고하세요.
