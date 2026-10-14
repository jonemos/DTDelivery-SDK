# 13 · 취소·source 전환·페이지 종료

[목차](README.md) · 조립: [전체 페이지](14_PAGE_LAYOUT.md)

외부 프로젝트의 route/탭 변경에서 renderer·DOM 구독·진행 요청을 남기지 않게 정리합니다. DOM을 숨기거나 sdk 변수만 undefined로 만드는 것은 종료가 아닙니다.

## 함수별 책임

| 동작 | 호출 | 남는 것 |
|---|---|---|
| 한 목록 요청 취소 | listModels에 전달한 controller.abort() | client·현재 화면 |
| 진행 중 모델 열기 취소 | sdk.cancel() 또는 open의 signal abort | 준비된 화면이 남을 수 있음. 정상 완료로 표시하지 않음 |
| 텍스처 적용 취소 | textureDisplay.apply에 준 controller.abort() | 기존 텍스처 적용 표시 |
| UI mount 해제 | mount 함수의 cleanup() | client는 아직 활성 |
| 구독 해제 | subscribe 함수의 unsubscribe() | client는 아직 활성 |
| 연결 전체 종료 | await sdk.dispose() | 다른 메서드 호출 불가. 다시 만들기 필요 |

dispose는 진행 open/list를 취소하고 renderer·navigation·session·애드온·listener를 정리합니다. 중복 호출은 허용되지만 host가 정리 작업의 완료를 기다리도록 첫 Promise를 보관하면 좋습니다. 마지막 disposed progress 이벤트에 의존하지 말고 host 종료 상태를 직접 표시합니다.

## source 교체용 작은 연결 소유자

한 canvas를 재사용할 때 이전 viewer 종료 후 새 viewer를 만듭니다. 이 소유자는 로컬/HTTP 연결 버튼의 connect 함수에 사용할 수 있습니다. SDK 내부의 generation과 별도로 **호스트의 늦은 UI 작업**을 관리합니다.

```ts
import { DeliveryClient, type DeliverySource } from '@dt/delivery-sdk';

export class ViewerConnection {
  private generation = 0;
  private current?: DeliveryClient;
  private cleanups: (() => void)[] = [];
  private stopping: Promise<void> = Promise.resolve();
  constructor(private readonly canvas: HTMLCanvasElement) {}
  get sdk() { return this.current; }
  private releaseCurrent() {
    const old = this.current;
    this.current = undefined;
    for (const cleanup of this.cleanups.splice(0)) cleanup();
    const previous = this.stopping;
    this.stopping = previous.then(() => old?.dispose());
    return this.stopping;
  }
  async connect(source: DeliverySource, mount: (sdk: DeliveryClient) => readonly (() => void)[]) {
    const ticket = ++this.generation;
    await this.releaseCurrent();
    if (ticket !== this.generation) return undefined;
    const sdk = new DeliveryClient({ canvas: this.canvas, source });
    this.current = sdk;
    try { this.cleanups = [...mount(sdk)]; }
    catch (error) { await this.disconnect(); throw error; }
    return sdk;
  }
  async disconnect() {
    this.generation++;
    await this.releaseCurrent();
  }
}
```

`mount`가 반환하는 배열에는 `mountActorPanel`, `mountDeliveryViewportTools`, `subscribeProgress` 등으로 받은 cleanup을 넣습니다. mount 자체가 중간에 실패할 수 있는 복잡한 호스트 함수라면 이미 만든 cleanup도 그 함수 안에서 정리한 후 오류를 다시 던지세요.

connect가 undefined를 반환하면 더 새로운 연결 요청에 대체된 것입니다. DOM을 갱신하지 않습니다. 반환 client로 목록을 조회한 뒤에도 `connection.sdk === sdk`인지 확인해서 다른 연결이 된 후 늦은 응답으로 select/status를 덮지 않게 합니다. 열린 세션이 바뀌면 기존 Actor snapshot/ScriptHandle도 새 목록에서 다시 얻습니다.

## 종료 순서

1. host 버튼/input 이벤트를 해제하고 별도 목록/텍스처/업무 요청 AbortController를 취소합니다.
2. 메뉴·아웃라이너·속성폼·상태 구독의 cleanup을 호출합니다.
3. `await sdk.dispose()` 또는 위 `connection.disconnect()`를 기다립니다.
4. canvas/모델 목록/상태 UI를 host에서 정리합니다. 새 source는 새 client로 연결합니다.

SPA에서는 component/route unmount를 정리 지점으로 사용합니다. window pagehide는 최종 보조 지점이며 비동기 dispose의 완료를 브라우저가 기다려주지는 않습니다. pagehide에서 종료한 페이지가 BFCache로 복귀하면 host pageshow/route 재진입에서 새 연결을 만들도록 설계합니다. 사용자 폴더 권한이 자동 복구된다고 가정하지 않습니다.

React/Vue state에 scene 전체를 매 프레임 복사하지 않습니다. progress·selection·script snapshot 변화만 필요한 UI에 전달하고 canvas DOM은 mount 수명 동안 유지합니다. React 개발 모드의 effect 재실행에서도 이전 cleanup/dispose와 새 연결의 순서를 지키세요.
