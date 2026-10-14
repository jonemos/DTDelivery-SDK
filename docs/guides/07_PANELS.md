# 07 · 기본 아웃라이너와 상세 패널

[목차](README.md) · 직접 UI: [액터 API](06_ACTORS.md) · 배치: [전체 페이지](14_PAGE_LAYOUT.md)

예제처럼 왼쪽 검색/목록과 오른쪽 선택 액터 상세를 구성하는 가장 짧은 방법은 `mountActorPanel()`입니다. 이 함수는 host DOM에 실제 검색·페이지·선택·초점 동작을 연결합니다.

## 시그니처

`mountActorPanel(root: HTMLElement, viewer: DeliveryViewer, inspector?: HTMLElement): () => void`

| 인수·결과 | 의미 |
|---|---|
| `root` | 검색·목록·페이지 버튼을 붙일 컨테이너 |
| `viewer` | 현재 클라이언트의 `sdk.viewport` |
| `inspector` | 상세 UI 컨테이너. 생략하면 root에 같이 표시 |
| 반환 함수 | session/선택 listener 해제, 이 함수가 만든 DOM 제거 |

한 root에는 한 번만 mount합니다. source/client를 바꾸면 반환 함수를 호출하고 새 viewer로 다시 mount합니다. 함수가 자체 SDK나 별도 모델을 만들지 않습니다.

## 좌우 분리 예제

```html
<aside class="viewer-outliner"><div id="actors"></div></aside>
<aside class="viewer-details"><div id="actor-details"></div></aside>
```

```ts
import { DeliveryClient, mountActorPanel } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export function mountPanels(sdk: DeliveryClient, actors: HTMLElement, details: HTMLElement) {
  const cleanup = mountActorPanel(actors, sdk.viewport, details);
  return cleanup;
}
```

기본 구조/색상은 SDK CSS를 읽고, 예제와 같은 압축된 페이지 테마는 [실제 style.css](../../examples/web/style.css)를 외부 프로젝트의 CSS로 복사해 조정합니다. runtime의 viewport.css를 직접 편집하지 않습니다. `.viewer-outliner`/`.viewer-details`를 사용하면 현재 예제의 외부 UI 범위를 재사용할 수 있습니다.

## 제공되는 기능과 값

- 이름·ID·레벨·클래스·폴더에서 부분 검색하며100개씩 페이지를 나눕니다. 검색 시 첫 페이지로 돌아갑니다.
- 목록에는 설비 메타데이터 유무와 관계없이 전체 액터를 표시합니다. 준비/표시 상태가 다른 항목도 메타데이터를 볼 수 있습니다.
- 한 번 클릭은 선택·상세 표시, 두 번 클릭은 지원 대상에 초점을 맞춥니다. 상세의 이동 버튼은 focusable일 때만 켜집니다.
- `actorName`, `classId`, `mountName`, `folder.path`, `attachmentParent.actorId`, meshes/components 수를 표시합니다.
- 위치는 `positionUeCm.X/Y/Z`입니다. cm값을 다시100배 하지 않습니다. null은 미지원으로 표시합니다.
- 업무 연결 키는 compositionId+mountId+actorId이고, 펼친 JSON은 최신 resolve된 snapshot입니다. 원본 Actor/문서를 수정하는 편집기가 아닙니다.

## 업무 선택 이벤트를 사용할 때

현재 기본 패널의 목록 클릭은 `DeliveryViewer.selectActorTarget()` 경로를 사용합니다. 이 패널 자체의 상세와 뷰포트 표시는 연결되지만 **목록 클릭이 항상 `DeliveryClient.subscribeActorSelection()`에 전달된다고 가정하지 않습니다.** viewport 실제 클릭과 client의 select/focus API는 client 구독으로 관찰할 수 있습니다.

목록 클릭마다 외부 센서/업무 패널을 갱신해야 한다면06 가이드처럼 목록에서 `sdk.selectActor(target)`를 호출하는 UI를 구성하고 그 client 구독을 통일된 업무 경로로 사용하세요. 기본 패널 내부 버튼 DOM을 찾아 임의로 이벤트를 덮거나 내부 selected 상태를 추측하지 않습니다. client의 프로그래밍 선택을 기본 패널의 모든 내부 상태와 자동 동기화한다고 가정하지도 않습니다.

## 정리

`cleanup()` → 외부 listener 해제 → `await sdk.dispose()` 순서를 사용합니다. DOM을 숨기는 것만으로 listener나 렌더러가 종료되지는 않습니다. React/Vue에서는 mount 시 연결하고 unmount 시 반환 함수를 호출하세요. 새 root를 만들어도 이전 root의 구독을 남기지 않습니다.
