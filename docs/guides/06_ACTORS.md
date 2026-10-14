# 06 · 액터 검색·선택·카메라 초점

[목차](README.md) · 간편 UI: [기본 패널](07_PANELS.md) · 업무 정보: [외부 데이터](12_HOST_DATA.md)

외부 프로젝트가 자체 디자인의 액터 목록을 만들 때 client API를 사용합니다. 기본 SDK 목록·상세 UI를 그대로 쓰려면07을 먼저 읽으세요.

## 대상과 조회값

| API/필드 | 의미 |
|---|---|
| `sdk.actors(query='')` | 현재 Actor snapshot 배열. 이름에서 대소문자 구분 없는 부분 검색 |
| `DeliveryActorSelection` | `{mountId:string|null, actorId:string}` |
| `mountId` | 같은 레벨을 두 번 배치했을 때 서로 다른 인스턴스 ID. 통합 자체 객체는 null |
| `actorId` | 원본 액터의 durable ID. 표시 이름/renderer UUID 아님 |
| `serviceKey` | compositionId+mountId+actorId로 외부 데이터와 연결하는 키 |
| `loaded` | 실제 projection이 준비됐는지 |
| `visible` | 게시 표시 설정 |
| `available` | loaded·visible·원본 기본 객체 제외 조건을 반영한 선택 가능 상태 |
| `focusable` | available이고 static 공간 위치를 지원하는지 |
| `positionMeters` | RH/Y-up/미터의 `[x,y,z]` 또는 null |
| `positionUeCm` | Unreal-facing `{X,Y,Z}` cm 또는 null |
| `sdk.selectActor(target|null)` | 준비된 액터 선택/해제, 선택 snapshot 또는 null 반환 |
| `sdk.focusActor(target)` | 지원 액터를 선택하고 경계로 카메라 이동, snapshot 반환 |

`sdk.actors()`가 반환하는 항목에는 ActorPlacement에 더해 available/focusable이 있습니다. `onActorSelect`/`subscribeActorSelection`의 공개 callback 타입은 ActorPlacement|null이므로 현재 선택 가능 여부를 다시 확인할 때 `.actors()`의 최신 항목을 찾습니다.

## 간단한 사용자 정의 목록

아래는 이름 검색과 최대100개 표시를 위한 작은 예제입니다. 전체 페이지네이션과 레벨/ID/클래스/폴더 검색은07의 기본 패널을 사용하거나 호스트가 추가합니다.

```ts
import { DeliveryClient } from '@dt/delivery-sdk';

export function mountActorList(
  sdk: DeliveryClient, root: HTMLElement, report: (message: string) => void,
) {
  const search = document.createElement('input');
  search.type = 'search'; search.placeholder = '액터 이름 검색';
  search.setAttribute('aria-label', '액터 이름 검색');
  const summary = document.createElement('p'), list = document.createElement('div');
  root.append(search, summary, list);
  const render = () => {
    const rows = sdk.actors(search.value);
    summary.textContent = `${rows.length}개 검색 · 앞 ${Math.min(100, rows.length)}개 표시`;
    list.replaceChildren(...rows.slice(0, 100).map(row => {
      const button = document.createElement('button');
      const target = { mountId: row.mountId, actorId: row.actorId };
      button.textContent = `${row.actorName} · ${row.mountName}`;
      button.disabled = !row.available;
      button.setAttribute('aria-pressed', String(sdk.selectedActor?.serviceKey === row.serviceKey));
      button.onclick = () => {
        try { sdk.selectActor(target); }
        catch (error) { report(String(error)); }
      };
      button.ondblclick = () => {
        if (!row.focusable) return;
        try { sdk.focusActor(target); }
        catch (error) { report(String(error)); }
      };
      return button;
    }));
  };
  let frame = 0;
  const schedule = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; render(); }); };
  search.oninput = render;
  const offProgress = sdk.subscribeProgress(schedule);
  const offSelection = sdk.subscribeActorSelection(schedule);
  render();
  return () => {
    offProgress(); offSelection(); cancelAnimationFrame(frame);
    search.remove(); summary.remove(); list.remove();
  };
}
```

open 전에는 빈 배열입니다. 초기 로드/셀 변화로 항목의 available도 바뀌므로 이 코드는 progress 이벤트에서 다시 표시하도록 예약합니다. 반환된 cleanup은 SDK dispose 전에 호출합니다.

## 선택을 다른 패널에 알리기

```ts
import { DeliveryClient, type ActorPlacement } from '@dt/delivery-sdk';

export function observeSelection(sdk: DeliveryClient, render: (actor: ActorPlacement | null) => void) {
  render(sdk.selectedActor);
  return sdk.subscribeActorSelection(render);
}
```

뷰포트의 실제 클릭과 `sdk.selectActor()`/`sdk.focusActor()`를 통일된 업무 선택 경로로 사용할 때 이 구독을 연결합니다. `.subscribeActorSelection()`도 현재 값을 즉시 전달하지 않으므로 getter를 한 번 읽습니다. 선택 해제 버튼은 `sdk.selectActor(null)`을 호출합니다.

위치가 null인 액터에 임의 원점을 넣지 않습니다. `no-spatial-root`/`bone-socket-unsupported` 같은 공간 상태는 지원 여부를 표시하며 worldMatrix를 직접 수정하지 않습니다. 레벨 인스턴스가 다르면 같은 actorId도 다른 대상입니다.
