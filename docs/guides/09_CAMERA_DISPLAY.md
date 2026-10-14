# 09 · 카메라와 표시 설정 직접 제어

[목차](README.md) · 기본 메뉴: [뷰포트 도구](08_VIEWPORT_TOOLS.md)

외부 프로젝트의 자체 button/select로 화면 모드·방향·카메라 값을 제어할 때 사용합니다. client의 간단한 API와 viewer의 저수준 설정을 구분합니다. 표시 설정은 원본 청크나 Actor 문서를 수정하지 않습니다.

## 허용값

| 호출·속성 | 값·의미 |
|---|---|
| sdk.setViewMode(mode) | `lit`, `unlit`, `wireframe` |
| sdk.setProjection(projection) | `perspective`, `top`, `bottom`, `front`, `back`, `left`, `right` |
| viewer.fit() | 전체 표시 경계로 카메라 맞춤 |
| sdk.focusActor(target) | 선택과 해당 액터 경계에 맞춤. 준비된 focusable 대상 필요 |
| viewer.focusSelection() | viewer에 선택이 있을 때 초점. 선택이 없으면 동작 없음 |
| viewer.navigation.speed / setSpeed(value) | m/s, 기본4,0.25–64. 잘못된 값은 setSpeed가 무시 |
| viewer.cameraSettings | 현재 값을 읽은 새 객체 |
| horizontalFovDegrees | 수평 FOV degree,1–179. 원근 화면에서 사용 |
| orthographicWidthMeters | 직교 화면 폭 m, 최소0.1 |
| nearMeters / farMeters | clip 거리 m, near≥0.001, far>near |
| viewer.setCameraSettings(partial) | 위 값을 부분 변경. 유효하지 않은 조합은 throw |

방향의 top/bottom은 내부Y축 위/아래이며 front/back은 내부Z축 ± 방향, left/right는 내부X축 ± 방향입니다. UI의 Unreal-facing 좌표 표기와 내부 좌표를 혼동하지 않습니다. 방향 변경은 viewer가 직교 카메라/회전 가능 여부/aspect를 처리합니다. 전체 맞춤/Actor 초점은 프레이밍을 위해 clip/직교 폭을 바꿀 수 있으므로 이후 설정을 다시 읽으세요.

## 카메라와 표시 버튼

```ts
import { DeliveryClient } from '@dt/delivery-sdk';

export function configureInspection(sdk: DeliveryClient) {
  sdk.setViewMode('lit');
  sdk.setProjection('perspective');
  sdk.viewport.navigation.setSpeed(4);
  sdk.viewport.setCameraSettings({
    horizontalFovDegrees: 70,
    nearMeters: 0.05,
    farMeters: 5000,
  });
  sdk.viewport.environment = true;
  sdk.viewport.environmentIntensity = 1;
  sdk.viewport.grid.visible = true;
  sdk.viewport.helpers = true;
  sdk.viewport.setBounds(false);
  sdk.viewport.invalidate();
  sdk.viewport.onViewChange?.(); // 이미 mount된 기본 도구가 있으면 표시를 갱신한다.
}
```

이 숫자는 외부 inspection 화면의 **예제 값**입니다. Unreal reference 측정값이 아닙니다. near/far 단위는 cm가 아니라 m입니다. grid/helpers/environment 같은 공개 필드를 직접 바꾸면 `invalidate()`로 redraw를 요청하고 기본 도구의 값 표시가 필요하면 기존 `onViewChange?.()`를 호출합니다. 새 callback으로 덮어쓰지 않습니다. setCameraSettings/setBounds 등 전용 메서드는 redraw/변화 알림을 자체 수행합니다.

## 바운드와 배칭

`viewer.setBounds(true)`는 준비된 액터의 실제 world bounds를 표시합니다. `viewer.bounds`가 현재 boolean이고 기본 false입니다. 숨김·로드 해제·off·dispose 시 helper를 정리하며 picking/Actor ID는 유지합니다.

`sdk.setStaticBatching(true)`는 실험적 표시 최적화입니다. 기본 false이고 실제 적용 여부·이유는 `viewer.staticBatchingStatus`를 읽습니다. 원근·lit·Viewport 품질·안정된 준비/선택 상태 등 조건이 있어 요청값 true가 항상 배칭 적용을 뜻하지 않습니다. 성능 이득을 보장하지 않습니다.

## Render Quality

기본 도구를 사용하면 품질 메뉴가 정확한 preset 타입을 전달합니다. 사용자 정의 select에서는 다음 함수를 사용할 수 있습니다. enum 자체는 package 루트에서 직접 export하지 않으므로 공개 메서드의 Parameter 타입을 가져오고 실제 허용 문자열만 전달합니다.

```ts
import type { DeliveryViewer } from '@dt/delivery-sdk';

export type QualityName = 'VIEWPORT' | 'ENHANCED' | 'NORMAL' | 'HIGH' | 'ULTRA';
export async function applyQuality(viewer: DeliveryViewer, value: QualityName) {
  const allowed: readonly string[] = ['VIEWPORT', 'ENHANCED', 'NORMAL', 'HIGH', 'ULTRA'];
  if (!allowed.includes(value)) throw new Error('지원하지 않는 품질입니다.');
  await viewer.quality.apply(value as Parameters<DeliveryViewer['quality']['apply']>[0]);
  const result = viewer.quality.snapshot();
  if (result.state === 'failed') throw new Error(result.message);
  return result;
}
```

snapshot의 `requested`는 요청 품질, `active`는 현재 품질, `state`는 ready/preparing/failed, `message`는 실제 상태 안내입니다. 내부 backend 준비 실패는 Promise가 resolve되면서 failed 상태가 남을 수 있으므로 위 예제처럼 snapshot을 확인합니다. 품질 변경은 자산 LOD/원본 재질 품질을 변경하는 함수가 아닙니다.
