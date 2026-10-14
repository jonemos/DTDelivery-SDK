# 14 · 예제처럼 전체 페이지 구성하기

[목차](README.md) · 수명 관리: [종료 처리](13_LIFECYCLE.md)

예제 화면은 세 개의 파일로 구성됩니다. [index.html](../../examples/web/index.html)은 DOM, [style.css](../../examples/web/style.css)는 배치/외부 UI 스타일, [main.ts](../../examples/web/main.ts)는 SDK 연결과 이벤트입니다. 같은 화면이 필요하면 이 세 파일을 외부 프로젝트로 복사하고 기존 빌드 시스템의 entry/CSS 경로만 맞추세요. SDK runtime/viewport.css는 원본 그대로 import합니다.

## 제공 예제의 영역 → 함수 → 값

| 화면/DOM ID | SDK 호출·읽는 값 | 호스트 책임 |
|---|---|---|
| 로고·version | DELIVERY_SDK_VERSION | 로고·제목·라벨 배치 |
| status | onProgress 또는 subscribeProgress, ready/total/downloadedBytes | 실제 상태 문자열·오류 표시 |
| source / folder / scope | new LocalChunkSource(directory,{scope}) | 브라우저 picker, mode:'read', source 전환 |
| address / list | new HttpChunkSource(new URL(address)), listModels() | 폴더 URL 검증·조회 버튼 |
| models | DeliveryModel.id/name | option.value/id, textContent/name |
| open | sdk.open(models.value,{progressive:true}) | 처리 중 버튼 비활성·오류 표시 |
| close | SDK cleanup + await dispose() | 목록·상태·canvas 초기화 |
| actors / actor-details | mountActorPanel(root,sdk.viewport,inspector) | 좌우 컨테이너·섹션 제목 |
| viewport-tools | mountDeliveryViewportTools(root,sdk.viewport,immersive) | 위치·전체화면 함수 |
| view | new DeliveryClient({canvas,source}) | canvas 부모의 실제 가로/세로 크기 |
| load-progress / load-summary / load-states | DeliveryProgress cells/readyCells/totalCells | progress·카운터·셀 행 DOM |
| scripts | sdk.scripts.list/get/subscribe, schema/values/revision |11 가이드의 입력폼·revision 충돌/readonly |

`new DeliveryClient()`가 이 모든 외부 UI를 자동 생성하지는 않습니다. mount 함수로 제공하는 기본 아웃라이너·뷰포트 도구와 호스트가 생성하는 상단/로드/속성폼을 구분하세요.

## 작은 조립 예제의 HTML

아래는 이미 선택한 source를 받은 뒤 모델 조회/열기를 제공하는 최소 전체 레이아웃입니다. 로컬/HTTP source 입력은01/02로 앞단에 연결하고, 스크립트가 필요하면11의 폼을 오른쪽에 추가합니다. 완전한 source 선택 UI는 위의 실제 예제 세 파일에 있습니다.

```html
<div id="viewer-root" class="shell">
  <header class="toolbar">
    <div class="toolbar-heading">
      <strong>DT Delivery Viewer</strong><span id="version"></span>
      <span id="status" role="status" aria-live="polite">연결 대기</span>
    </div>
    <div class="toolbar-controls">
      <label>통합레벨 <select id="models" disabled></select></label>
      <button id="list">목록 조회</button><button id="open" disabled>게시본 열기</button>
      <button id="close">연결 해제</button>
    </div>
  </header>
  <main class="viewer-layout">
    <aside class="viewer-outliner"><h2>아웃라이너</h2><div id="actors"></div></aside>
    <section id="viewport"><div id="viewport-tools"></div><canvas id="view"></canvas></section>
    <aside class="viewer-details">
      <section><h2>로드 진행</h2><progress id="load-progress" max="1" value="0"></progress><ul id="load-states"></ul></section>
      <section><h2>선택 액터</h2><div id="actor-details"></div></section>
    </aside>
  </main>
</div>
```

## 배치 CSS

예제의 전체 테마를 사용할 때는 실제 style.css를 복사하세요. 아래는 필요한 배치/컨트롤 범위만 보여주는 작은 CSS입니다. 외부 input/button 규칙을 toolbar/좌우 패널에 제한해 뷰포트 메뉴의 크기를 바꾸지 않습니다.

```css
html, body { height: 100%; margin: 0; }
.shell { height: 100dvh; display: grid; grid-template-rows: auto minmax(0, 1fr); }
.toolbar { padding: 8px 12px; background: #141e26; color: #dce5ed; }
.toolbar-heading, .toolbar-controls { display: flex; align-items: center; gap: 8px; }
.toolbar-controls { margin-top: 8px; overflow-x: auto; white-space: nowrap; }
.toolbar-controls > * { flex-shrink: 0; }
#status { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.viewer-layout { display: grid; grid-template-columns: 200px minmax(0, 1fr) 240px; min-height: 0; }
.viewer-outliner, .viewer-details { padding: 10px; overflow: auto; background: #16212a; color: #dce5ed; font: 12px/1.5 system-ui; }
.viewer-details section + section { margin-top: 16px; }
:where(.toolbar, .viewer-outliner, .viewer-details) :is(input, select, button) { min-height: 28px; box-sizing: border-box; }
:where(.viewer-outliner, .viewer-details) h2 { margin: 0 0 8px; font-size: 12px; }
#viewport { position: relative; overflow: hidden; min-width: 0; min-height: 0; }
#view { display: block; width: 100%; height: 100%; }
#viewport-tools { position: absolute; top: 8px; left: 8px; right: 8px; z-index: 5; }
#load-progress { width: 100%; }
@media (max-width: 1100px) { .viewer-layout { grid-template-columns: 180px minmax(0, 1fr) 220px; } }
```

왼쪽/오른쪽 폭·외부 배경·상단 로고는 호스트 디자인 값입니다. 좁은 모바일 창까지 지원하려면 실제 예제 style.css의 responsive 규칙을 함께 사용하세요. canvas 픽셀 값을 직접 고정하지 않고 부모 공간을 SDK가 관찰하게 합니다.

## SDK와 DOM을 조립하는 TypeScript

이 모듈은 source 선택 뒤 `createInspectionPage(root, source)`로 호출합니다. root는 위 `#viewer-root` DOM입니다.01/02의 source를 전달하면 되며 아래 코드 안에 파일 경로나 사용자 모델 ID를 하드코딩하지 않습니다.

```ts
import {
  DELIVERY_SDK_VERSION, DeliveryClient, mountActorPanel, mountDeliveryViewportTools,
  type DeliveryProgress, type DeliverySource,
} from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export function createInspectionPage(root: HTMLElement, source: DeliverySource) {
  const node = <T extends HTMLElement>(id: string): T => {
    const value = root.querySelector<T>(`#${id}`);
    if (!value) throw new Error(`필요한 DOM이 없습니다: ${id}`);
    return value;
  };
  const canvas = node<HTMLCanvasElement>('view'), stage = node('viewport');
  const status = node('status'), models = node<HTMLSelectElement>('models');
  const list = node<HTMLButtonElement>('list'), open = node<HTMLButtonElement>('open');
  const close = node<HTMLButtonElement>('close'), bar = node<HTMLProgressElement>('load-progress');
  const cells = node('load-states'), actors = node('actors'), details = node('actor-details');
  const tools = node('viewport-tools'), version = node('version');
  const events = new AbortController();
  let listing: AbortController | undefined;
  const report = (error: unknown) => { if (!events.signal.aborted) status.textContent = String(error); };
  const sdk = new DeliveryClient({ canvas, source });
  version.textContent = `SDK ${DELIVERY_SDK_VERSION}`;
  sdk.viewport.environment = true;
  sdk.viewport.invalidate();
  const showProgress = (value: DeliveryProgress) => {
    status.textContent = `${value.status} · 화면 ${value.readyCells}/${value.totalCells}`;
    bar.max = Math.max(1, value.totalCells); bar.value = value.readyCells;
    if (value.status === 'loading' && !value.totalCells) bar.removeAttribute('value');
    cells.replaceChildren(...value.cells.map(cell => {
      const row = document.createElement('li');
      row.textContent = `${cell.name ?? cell.id} · ${cell.status}`;
      row.title = cell.message ?? row.textContent;
      return row;
    }));
  };
  const cleanups = [
    mountActorPanel(actors, sdk.viewport, details),
    mountDeliveryViewportTools(tools, sdk.viewport, () => { void stage.requestFullscreen().catch(report); }),
    sdk.subscribeProgress(showProgress),
  ];
  showProgress(sdk.progress);
  const refresh = async () => {
    listing?.abort();
    const controller = new AbortController(); listing = controller;
    models.disabled = true; open.disabled = true;
    try {
      const catalog = await sdk.listModels(AbortSignal.any([events.signal, controller.signal]));
      if (events.signal.aborted || listing !== controller) return;
      models.replaceChildren(...catalog.map(model => {
        const option = document.createElement('option');
        option.value = model.id; option.textContent = model.name; return option;
      }));
      models.disabled = !catalog.length; open.disabled = !catalog.length;
      status.textContent = catalog.length ? `${catalog.length}개 모델 · 게시본을 여세요.` : '게시 완료된 모델이 없습니다.';
    } catch (error) { if (!controller.signal.aborted) report(error); }
  };
  list.addEventListener('click', () => { void refresh(); }, { signal: events.signal });
  open.addEventListener('click', () => {
    if (!models.value) return;
    open.disabled = true;
    void sdk.open(models.value, { progressive: true, signal: events.signal }).catch(report).finally(() => {
      if (!events.signal.aborted) open.disabled = !models.value;
    });
  }, { signal: events.signal });
  let closing: Promise<void> | undefined;
  const dispose = () => {
    if (closing) return closing;
    events.abort(); listing?.abort(); cleanups.forEach(cleanup => cleanup());
    closing = sdk.dispose().then(() => {
      models.replaceChildren(); models.disabled = true;
      open.disabled = true; list.disabled = true; close.disabled = true;
      canvas.hidden = true; cells.replaceChildren(); bar.value = 0;
      status.textContent = '연결을 해제했습니다.';
    });
    return closing;
  };
  close.addEventListener('click', () => { void dispose().catch(error => { status.textContent = String(error); }); }, { signal: events.signal });
  void refresh();
  return { sdk, dispose };
}
```

반환값의 `sdk`로 직접 선택/설정 기능을 추가하고 `dispose()`는 route 이탈 때 호출합니다. 같은 root/canvas에 새 source로 이 함수를 호출하려면 먼저 이전 반환 객체의 dispose를 기다리고 `canvas.hidden=false`, `list.disabled=false`, `close.disabled=false` 같은 host UI 상태를 초기화합니다. source 교체 소유자는13 가이드의 ViewerConnection 패턴을 참고하세요.

## 코드 연결 순서

1. DOM과 부모 크기를 준비하고 SDK/viewport.css/외부 style.css를 import합니다.
2. source 입력을 받아 LocalChunkSource 또는 HttpChunkSource를 만듭니다.
3. client를 만들고 기본 패널·뷰포트 도구·progress 구독을 붙입니다.
4. 목록을 조회해 id/name으로 select를 채우고 사용자가 id를 선택해 open합니다.
5. 액터 업무 UI는06/12의 경로로, 공개 속성폼은11의 경로로 추가합니다.
6. source 교체/페이지 종료 시 host 이벤트·UI 구독부터 정리하고 client dispose를 기다립니다.

이 조립 예제는 새로운 렌더러나 임의 source 데이터 형식을 만들지 않습니다. 실제 파일의 오류/변경분 병합/브라우저 권한은 각 기능 가이드와 루트 README에서 확인합니다.
