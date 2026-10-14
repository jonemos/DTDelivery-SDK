# 10 · 텍스처 표시·메모리 예산·캐시

[목차](README.md) · 기본 적용 UI: [뷰포트 도구](08_VIEWPORT_TOOLS.md)

세 가지 숫자를 구분합니다. **encoded 청크 캐시**, **geometry/texture 표시 예산**, **텍스처 교체 예약 추정**은 서로 다른 값입니다. 다운로드 bytes를 GPU 메모리 사용량으로 표시하지 않습니다.

## 표시 예산

| API | 입력·반환 |
|---|---|
| displayBudget(mib) | 허용0/512/1024/2048/4096/8192 MiB → `{geometry,texture}` bytes |
| displayBudget(0) | 양쪽0을 반환. 자동 표시 예산 선택 의미 |
| new DeliveryClient({budget}) | 초기 표시 예산. 생략하면 자동 |
| viewer.session.setDisplayBudget(value) | 로딩이 끝나거나 취소된 후 예산 변경 |
| viewer.session.usage | actors/encoded/geometry/texture의 내부 사용량 |
| readDisplayBudgetPreference() | localStorage 공통 preference 또는0 |
| saveDisplayBudgetPreference(mib) | 검증 후 저장 성공 boolean. 저장한 값을 자동 적용하지는 않음 |

수동 예산은 geometry와 texture 각각에 적용하는 상한이며 양쪽 합계 하나가 아닙니다. 현재 사용량보다 낮게 줄이려 하면 거부됩니다. 저장소/장치별 자동 admission은 실제 코드의 정책이며 무제한 RAM을 뜻하지 않습니다.

```ts
import { DeliveryClient, displayBudget, type DeliverySource } from '@dt/delivery-sdk';

export function createBudgetedClient(canvas: HTMLCanvasElement, source: DeliverySource) {
  return new DeliveryClient({ canvas, source, budget: displayBudget(1024) });
}
export function useAutomaticBudget(sdk: DeliveryClient) {
  sdk.viewport.session.setDisplayBudget(displayBudget(0));
}
```

## 텍스처 제어 객체

`const control = sdk.viewport.session.textureDisplay`를 사용합니다. 게시본 로드가 완료돼 runtime이 준비된 뒤 적용합니다. 기본 도구는 자동 적용하지 않고 사용자가 **적용**을 누르게 합니다.

| 값·함수 | 의미 |
|---|---|
| control.layouts | 현재 runtime이 제공하는 텍스처 layout. 사용 가능 map kind 판단 |
| control.options | 적용한 maxSize/maps 설정. 미준비 기본값128/maps[] |
| control.estimate(options) | 필요한 예약 bytes 추정. 실제 GPU 측정치 아님 |
| control.current?.reservedBytes | 현재 적용 세트의 예약 추정. 없으면0 |
| control.budgetBytes | 마지막 텍스처 적용 예산 bytes |
| control.apply(options,budget,signal,progress) | `Promise<void>`, 준비한 세트를 교체 적용 |
| session.textureApplying | 현재 텍스처 준비 중인지 |

options.maxSize는0(원본 크기)/128/256/512/1024/2048 px, maps는 baseColor/normal/metallicRoughness/occlusion/emissive/specular 배열입니다. maps[]는 텍스처 없이 표시합니다. mapMaxSizes는 각 map의128–2048 제한, compactBaseColor는 선택적인 베이스 컬러 압축 정책입니다. 공개 루트에 별도 TextureImportOptions export가 없으므로 아래처럼 메서드에서 타입을 얻습니다.

```ts
import type { DeliveryClient, DeliveryViewer } from '@dt/delivery-sdk';

type TextureOptions = Parameters<DeliveryViewer['session']['textureDisplay']['apply']>[0];
export async function applyBaseColor(
  sdk: DeliveryClient,
  signal: AbortSignal,
  report: (message: string) => void,
) {
  const control = sdk.viewport.session.textureDisplay;
  const options: TextureOptions = { maxSize: 512, maps: ['baseColor'] };
  const estimate = control.estimate(options);
  const swapPeak = estimate + (control.current?.reservedBytes ?? 0);
  report(`적용 후 추정 ${(estimate / 1048576).toFixed(1)} MiB · 교체 중 ${(swapPeak / 1048576).toFixed(1)} MiB`);
  await control.apply(options, 0, signal, report); // 0은 자동 텍스처 예산
  return control.options;
}
```

텍스처 수동 예산은0 또는128/256/512/1024/2048/4096/8192MiB를 **bytes로 전달**합니다. 교체 중에는 이전 세트와 신규 세트 예약이 겹치므로 적용 후 추정만 비교하지 않습니다. 처리 중 재적용은 거부하며 취소 버튼의 별도 AbortController로 signal을 abort합니다. 준비 실패/취소 시 기존 적용 표시를 유지합니다. sdk.cancel()을 별도 텍스처 AbortController의 대체로 사용하지 않습니다.

맵 선택은 없는 텍스처를 만들어내지 않습니다. `layouts.flatMap(layout=>layout.uses.map(use=>use.kind))`에서 가능한 map을 읽으세요. apply는 외형 보기 변경이며 원본 asset/청크/게시본의 영구 수정이 아닙니다.

## encoded 캐시

```ts
import { DeliveryClient, MemoryChunkCache, BrowserChunkCache, type DeliverySource } from '@dt/delivery-sdk';

export function createCachedClient(
  canvas: HTMLCanvasElement, source: DeliverySource, persistentCache: boolean,
) {
  const cache = persistentCache
    ? new BrowserChunkCache('external-viewer', 256 * 1048576)
    : new MemoryChunkCache(64 * 1048576);
  return new DeliveryClient({ canvas, source, cache });
}
```

MemoryChunkCache는 객체 수명 동안 encoded bytes를 보관하며 budget은0 이상 정수 bytes입니다. BrowserChunkCache는 origin의 CacheStorage를 사용하고 namespace는1–80자의 영문/숫자/`_`/`-`, budget은 적어도 최대 chunk 크기 이상이어야 합니다. 캐시는 폐기 가능한 재사용 데이터이며 사용자 모델의 백업이 아닙니다. Browser 캐시는 client 종료와 별개로 남을 수 있고 같은 origin 정책을 따릅니다.

reader는 cache hit도 크기/hash를 검사하고 손상 cache를 제거합니다. cache 실패가 저장소 권한·청크 무결성 검사를 우회시키지 않습니다. 기본 source 외 인증이 필요하면15의 호스트 adapter를 사용합니다.
