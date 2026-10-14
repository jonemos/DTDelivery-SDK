# 05 · 실제 로딩 상태와 청크 셀 목록

[목차](README.md) · 앞: [열기](04_MODELS.md) · 관련: [전체 페이지](14_PAGE_LAYOUT.md)

상단 메시지와 오른쪽 로드 패널은 `DeliveryProgress`를 표시합니다. 별도 시간 기반 진행률이나 가짜 다운로드 숫자를 만들지 않습니다.

## DeliveryProgress 필드

| 값 | 단위·의미 |
|---|---|
| `status` | idle / loading / ready / cancelled / failed / disposed |
| `model` | 현재 model 또는 null. source resolve 전에는 이전 모델 정보일 수도 있음 |
| `downloadedBytes` | client reader가 다운로드한 object chunk bytes의 누적값. 같은 client의 여러 open에 걸쳐 누적 |
| `requests` | reader의 실제 object 요청 수. head/manifest 조회 등 전체 네트워크 요청 수와 다름 |
| `cacheHits` | chunk cache에서 유효한 bytes를 재사용한 횟수 |
| `readyCells` | 현재 active 셀 중 ready인 수 |
| `totalCells` | unloaded를 제외한 현재 active 셀 수. 전체 자산 bytes나 GPU 사용량이 아님 |
| `cells[].id` | 실제 로딩 셀 ID |
| `cells[].mountId` | 연결된 원본 레벨 인스턴스 ID |
| `cells[].name` / `.message` | 선택 이름/실패 메시지. 없을 수 있음 |
| `cells[].status` | 현재 string 상태. 알려진 queued/loading/ready/failed/cancelled/unloaded 외 값은 그대로 표시 |

`readyCells/totalCells`는 **화면 셀 준비 비율**입니다. 모든 다운로드 bytes의 백분율로 설명하지 않습니다. 공간 로딩으로 분모가 바뀔 수 있고 unloaded 셀은 행 목록에는 있지만 active 합계에서는 빠집니다. MiB 변환은 bytes/1048576입니다.

## UI를 구독하기

```ts
import { DeliveryClient, type DeliveryProgress } from '@dt/delivery-sdk';

export function mountProgress(
  sdk: DeliveryClient,
  label: HTMLElement,
  bar: HTMLProgressElement,
  cells: HTMLUListElement,
) {
  const names: Record<string, string> = {
    idle: '대기', loading: '준비 중', ready: '로드 완료',
    failed: '실패', cancelled: '취소', disposed: '종료',
    queued: '대기', unloaded: '해제됨',
  };
  const render = (value: DeliveryProgress) => {
    label.textContent = `${names[value.status]} · 화면 ${value.readyCells}/${value.totalCells} · ${(value.downloadedBytes / 1048576).toFixed(1)} MiB`;
    label.dataset.state = value.status;
    bar.max = Math.max(1, value.totalCells);
    bar.value = value.readyCells;
    if (value.status === 'loading' && value.totalCells === 0) bar.removeAttribute('value');
    cells.replaceChildren(...value.cells.map(cell => {
      const row = document.createElement('li');
      row.dataset.state = cell.status;
      row.textContent = `${cell.name ?? cell.id} · ${names[cell.status] ?? cell.status}`;
      row.title = cell.message ?? row.textContent;
      return row;
    }));
  };
  render(sdk.progress); // subscribeProgress는 현재 값을 즉시 전달하지 않는다.
  const unsubscribe = sdk.subscribeProgress(render);
  return unsubscribe;
}
```

HTML은 `role="status"`인 label, `<progress max="1" value="0">`, `<ul>`을 준비합니다. 클래스 생성 후, **open 호출 전**에 구독하면 resolve 초기 상태부터 볼 수 있습니다. 이미 onProgress를 전달했다면 같은 DOM을 두 경로로 중복 렌더링하지 않습니다.

`subscribeProgress(listener)`의 반환값은 구독 해제 함수입니다. 현재 값은 `.progress`로 한 번 읽어 초기 표시합니다. dispose는 listener를 정리하지만 마지막 disposed 이벤트를 보내지 않으므로 연결 해제 버튼에서는 호스트가 종료 메시지와 DOM을 직접 갱신합니다.

로드 Promise의 reject를 `.catch(report)`로 처리하고 행의 `message`를 title/오류 영역에 제공합니다. ready 배지를 표시한 뒤에도 이후 셀 상태나 script 상태가 바뀔 수 있어 구독을 유지합니다. 큰 화면의 많은 진행 알림은 requestAnimationFrame 등으로 DOM 갱신을 모아도 되지만, 상태/bytes 수치를 임의로 보간하지 않습니다.
