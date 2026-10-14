# 04 · 모델 목록과 게시본 열기

[목차](README.md) · 앞: [클라이언트](03_CLIENT.md) · 관련: [진행 상태](05_PROGRESS.md), [취소·전환](13_LIFECYCLE.md)

상단 통합레벨 select와 **목록 조회/게시본 열기** 버튼을 연결합니다. 모델 이름은 표시용, `model.id`는 함수 호출용입니다.

## 함수와 반환값

| API | 인수 | 반환·효과 |
|---|---|---|
| `sdk.listModels(signal?)` | 선택 AbortSignal | `Promise<readonly DeliveryModel[]>`, 모델 목록의 복사본 |
| `DeliveryModel.id` | string | 통합레벨 식별자. select option.value |
| `.name` | string | 표시 이름. option.textContent |
| `.releaseHash` |64자리 소문자 SHA256 hex | 목록을 조회한 시점의 게시 리비전 |
| `sdk.open(modelId, options?)` | 목록의 id | `Promise<DeliveryModel>`, 실제 열린 모델/게시 hash |
| `sdk.model` | getter | 현재 연결된 모델 복사본 또는 null |
| `options.progressive` | boolean, 기본 true | 준비된 셀/레벨부터 점진 표시. false는 일반 열기 |
| `options.priority` | readonly string[] | 먼저 준비할 **원본 mount ID** 목록. cell ID/actor ID/이름 아님 |
| `options.signal` | AbortSignal | 호스트가 해당 열기를 취소할 때 사용 |

`open()`은 최신 source를 다시 resolve하므로 목록의 releaseHash와 실제 반환 hash가 다를 수 있습니다. 열린 hash는 해당 세션에 고정됩니다. 목록 조회나 게시 파일 갱신만으로 현재 화면을 자동 교체하지 않습니다. `open()`의 resolve는 초기 열기 작업 완료이며 향후 모든 공간 스트리밍/텍스처 적용까지 끝났다는 뜻은 아닙니다.

## select를 채우고 열기

```ts
import { DeliveryClient } from '@dt/delivery-sdk';

export async function populateModels(
  sdk: DeliveryClient,
  select: HTMLSelectElement,
  openButton: HTMLButtonElement,
  signal?: AbortSignal,
) {
  select.disabled = true;
  openButton.disabled = true;
  const models = await sdk.listModels(signal);
  select.replaceChildren(...models.map(model => {
    const option = document.createElement('option');
    option.value = model.id;
    option.textContent = model.name;
    return option;
  }));
  select.disabled = models.length === 0;
  openButton.disabled = models.length === 0;
  return models;
}

export async function openSelected(
  sdk: DeliveryClient,
  select: HTMLSelectElement,
  button: HTMLButtonElement,
  signal?: AbortSignal,
) {
  if (!select.value) throw new Error('먼저 모델 목록에서 통합레벨을 선택하세요.');
  button.disabled = true;
  try {
    return await sdk.open(select.value, { progressive: true, signal });
  } finally {
    if (!signal?.aborted) button.disabled = !select.value;
  }
}
```

준비할 HTML은 `<select id="models" disabled></select>`와 조회/열기 button입니다. source 연결 직후 또는 조회 버튼에서 `populateModels`를, 열기 버튼에서 `openSelected`를 호출합니다. 클릭 처리에서는 `void ...catch(report)`로 오류를 화면에 표시합니다. 연결 교체 중 이전 요청이 늦게 완료되는 경우의 DOM 보호는13 가이드의 generation/AbortSignal을 함께 사용합니다.

priority가 필요하면 `sdk.viewport.session.document?.mounts`에서 검증된 원본 mount의 `id`를 읽습니다. 처음부터 임의 priority를 구성할 필요는 없습니다. 공간 청크의 실제 셀 ID는 progress.cells[].id이고 이를 원본 mount ID로 취급하지 않습니다.

## 오류와 취소

- 목록이 비면 select·열기 버튼을 비활성화하고 아직 게시 완료된 모델이 없다는 메시지를 표시합니다.
- 손상된 hash/head·중복 ID·잘못된 manifest·준비 실패는 Promise reject입니다. 계속 진행해 성공 배지를 표시하지 않습니다.
- 같은 client에서 새 `open()`은 앞선 열기 요청을 취소합니다. 이전 스크립트 핸들도 새 세션에 사용할 수 없습니다.
- `sdk.cancel()`은 진행 중 열기/준비를 취소합니다. `listModels()` 취소에는 전달한 AbortController를 사용합니다. SDK 전체 종료는 `dispose()`입니다.
