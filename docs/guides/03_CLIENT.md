# 03 · 클라이언트 생성과 최소 뷰포트

[목차](README.md) · 준비: [로컬 source](01_LOCAL_SOURCE.md) / [HTTP source](02_HTTP_SOURCE.md) · 다음: [모델 열기](04_MODELS.md)

`DeliveryClient`는 source를 검증된 reader와 기존 viewer에 연결하는 공개 진입점입니다. 외부 페이지에서 보통 이 클래스 하나를 만들고 `sdk.viewport`를 통해 화면을 제어합니다. client와 저수준 `DeliveryViewer`를 같은 canvas에 따로 생성하지 않습니다.

## 생성 인수

| DeliveryClientOptions 필드 | 타입 | 필수·기본 동작 |
|---|---|---|
| `canvas` | HTMLCanvasElement | 필수. 실제 DOM canvas |
| `source` | DeliverySource | 필수. LocalChunkSource/HttpChunkSource/호스트 source |
| `cache` | ChunkCache | 선택. 기본 MemoryChunkCache,64MiB의 encoded chunk 데이터 |
| `budget` | DisplayBudget `{geometry,texture}` | 선택. bytes 단위. 생략 또는 양쪽0이면 자동 표시 예산 |
| `onProgress` | `(DeliveryProgress)=>void` | 선택. 실제 로딩 상태 알림. 현재 초기값은 직접 `.progress`로 읽기 |
| `onActorSelect` | `(ActorPlacement|null)=>void` | 선택. 실제 viewport 클릭/클라이언트 선택 API 알림 |

생성하면 렌더러·입력·resize 관찰을 준비합니다. 모델을 읽으려면 `listModels()`와 `open()`을 호출합니다. `new DeliveryClient()`의 반환값은 연결 객체이며 Promise가 아닙니다.

## 최소 HTML/CSS

```html
<p id="status" role="status"></p>
<div class="viewport-host"><canvas id="view"></canvas></div>
<script type="module" src="/src/main.ts"></script>
```

```css
.viewport-host { position: relative; width: 100%; height: 70vh; min-height: 320px; }
#view { display: block; width: 100%; height: 100%; }
```

canvas 부모에 실제 높이를 지정합니다. 부모 높이가0이면 3D 영역도 보이지 않습니다. SDK가 부모/container resize를 관찰하고 카메라 aspect와 렌더러 크기를 맞추므로 별도 `setInterval`이나 호스트 render loop를 만들 필요가 없습니다.

## 생성 → 조회 → 첫 모델 표시

```ts
import { DeliveryClient, type DeliverySource } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export async function showFirstModel(
  canvas: HTMLCanvasElement,
  source: DeliverySource,
  report: (message: string) => void,
): Promise<DeliveryClient> {
  const sdk = new DeliveryClient({
    canvas, source,
    onProgress: progress => report(`${progress.status} · ${progress.readyCells}/${progress.totalCells}`),
  });
  // 예제 페이지의 보조 환경광. 기본 environment는 false다.
  sdk.viewport.environment = true;
  sdk.viewport.invalidate();
  try {
    const models = await sdk.listModels();
    if (!models.length) throw new Error('게시 완료된 모델이 없습니다.');
    await sdk.open(models[0].id, { progressive: true });
    return sdk;
  } catch (error) {
    await sdk.dispose();
    throw error;
  }
}
```

01 또는02에서 얻은 source와 `document.querySelector<HTMLCanvasElement>('#view')`로 찾은 canvas를 전달하세요. DOM이 없으면 초기화 전에 오류를 표시합니다. `report`는 상단 상태 라벨의 `textContent`를 갱신하는 호스트 함수입니다. 사용자 데이터는 innerHTML에 넣지 않습니다.

첫 모델 자동 열기는 최소 예제의 선택입니다. 제공 페이지처럼 사용자가 통합레벨을 선택하게 하려면04 가이드를 사용합니다. Promise 완료 후 받은 `sdk`는 페이지가 소유하며 이탈할 때 `await sdk.dispose()`를 호출합니다. 실패한 SDK는 재사용하지 않고 새 연결을 만들도록 이 예제가 정리합니다.

## 저수준 viewer와 구분

`sdk.viewport`의 실제 타입은 `DeliveryViewer`입니다. 카메라·기본 도구·환경광·텍스처·session에 접근할 때 사용합니다. `DeliveryViewer.open(hash)`를 직접 호출하면 client의 model/progress/session 핸들 관리 경로를 거치지 않습니다. 이 가이드의 화면은 모델 열기에 `sdk.open(model.id)`를 일관되게 사용합니다. 별도 ChunkReader/DeliveryViewer를 직접 조립하는 고급 경로는 같은 canvas의 client와 혼용하지 않습니다.
