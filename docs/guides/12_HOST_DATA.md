# 12 · 외부 업무 데이터와 액터 연결

[목차](README.md) · 앞: [직접 액터 선택](06_ACTORS.md)

설비 번호·센서·작업 지시·설명은 외부 프로젝트의 DB/API에서 관리합니다. SDK 액터 구조를 바꾸거나 이름을 DB key로 쓰지 않고 stable ID로 연결합니다.

## 식별자와 좌표

| 값 | 의미 |
|---|---|
| compositionId | 통합레벨 ID |
| mountId | 원본 레벨의 배치 인스턴스. 통합 자체 객체는 null |
| actorId | 그 레벨의 액터 ID |
| actorServiceKey({compositionId,mountId,actorId}) | 세 값을 JSON 배열 문자열로 만든 stable key |
| releaseHash | 현재 게시 리비전. serviceKey 구성에는 포함하지 않음 |
| sourceActorIds | 보존된 원본 source 연결 목록. 있으면 원본 대조에 사용 |
| positionMeters | 내부 RH/Y-up/m. 위치 계산용 |
| positionUeCm | Unreal-facing cm. 상세 패널 표기용 |

같은 actorId가 다른 mount에 있으면 다른 key입니다. 이름을 바꿔도 세 ID가 유지되면 연결 key는 유지되며 게시 hash 변경도 key를 바꾸지 않습니다. 새 ID로 대상을 다시 만들거나 다른 통합레벨로 바꾸면 호스트가 재연결을 검토합니다. 폴더/Actor attachment/component ownership은 별개 데이터입니다.

## 선택한 액터의 업무 패널

아래 `lookup`은 호스트가 구현하는 DB/API 조회 함수입니다. SDK가 임의 API 경로나 인증값을 만들지 않습니다. 외부 조회가 늦게 끝나도 새 선택을 덮지 않도록 ticket을 사용합니다.

```ts
import { DeliveryClient, actorServiceKey, type ActorPlacement } from '@dt/delivery-sdk';

export interface BusinessInfo { equipmentName: string; note: string }
export function mountBusinessDetails(
  sdk: DeliveryClient,
  root: HTMLElement,
  lookup: (serviceKey: string) => Promise<BusinessInfo | undefined>,
) {
  let sequence = 0, live = true;
  const render = (actor: ActorPlacement | null) => {
    const ticket = ++sequence;
    root.textContent = actor ? `${actor.actorName} · 업무 정보 조회 중` : '액터를 선택하세요.';
    if (!actor) return;
    const key = actorServiceKey(actor);
    void lookup(key).then(info => {
      if (!live || ticket !== sequence) return;
      root.textContent = info ? `${info.equipmentName} · ${info.note}` : '연결된 업무 정보가 없습니다.';
    }).catch(error => {
      if (live && ticket === sequence) root.textContent = String(error);
    });
  };
  render(sdk.selectedActor);
  const unsubscribe = sdk.subscribeActorSelection(render);
  return () => { live = false; sequence++; unsubscribe(); root.replaceChildren(); };
}
```

viewport 클릭 또는06의 `sdk.selectActor()` UI와 함께 사용합니다. 기본 아웃라이너 목록 클릭과 client 알림의 차이는07에 설명했습니다. 많은 센서 요청은 호스트가 AbortSignal·캐시·권한을 추가하되 오래된 결과가 새 선택을 덮지 않도록 합니다.

## 현재 세션의 장치 상태

저수준 `viewer.session.setDeviceState(mountId, actorId, state)`는 로드된 레벨 액터의 transient 업무 상태를 저장합니다. 통합 자체 객체의 null mount에는 이 함수 경로를 사용하지 않고 호스트 Map/DB에 저장합니다.

```ts
import type { DeliveryClient, DeviceState } from '@dt/delivery-sdk';

export function updateDevice(sdk: DeliveryClient, mountId: string, actorId: string) {
  const state: DeviceState = {
    status: 'warning',
    values: { temperature: 42.5, online: true, label: '점검 필요' },
  };
  sdk.viewport.session.setDeviceState(mountId, actorId, state);
  return sdk.viewport.session.deviceState(mountId, actorId);
}
```

status는 normal/warning/alarm/offline이고 values는 key별 null/boolean/유한 number/string입니다. key 길이≤128, string≤2048, 직렬화 상태≤65536bytes, 대상 수≤10000 제한을 지킵니다. 대상 액터가 실제 로드되지 않았으면 거부합니다.

이 상태는 세션의 snapshot 저장과 알림이며 자동 메시 색 변경·센서 서버·영구 DB 저장을 제공하는 함수가 아닙니다. 현재 업무 UI는 읽은 상태를 호스트가 표시합니다. 원본 청크/자산·게시 hash·Actor 문서에 기록되지 않습니다.
