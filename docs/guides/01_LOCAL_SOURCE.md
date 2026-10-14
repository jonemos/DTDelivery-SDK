# 01 · 로컬 청크 폴더 선택

[목차](README.md) · 앞: [설치](00_INSTALL.md) · 다음: [클라이언트 생성](03_CLIENT.md)

이 기능은 버튼 클릭으로 로컬 폴더를 읽기 전용으로 선택하고 `LocalChunkSource`를 만듭니다. 브라우저의 폴더 권한과 파일 읽기를 사용하므로 로컬 조회 API 서버를 실행하지 않습니다.

## 클래스·값

| API/값 | 타입·기본값 | 사용법 |
|---|---|---|
| `new LocalChunkSource(directory, options?)` | DeliverySource 구현 객체 | 선택한 폴더를 저장소로 연결 |
| `directory` | `DeliveryDirectoryHandle` | 브라우저가 반환한 directory handle. Windows 경로 문자열 아님 |
| `options.scope` | string, 기본 `development` | 로컬 게시 저장소의 구역명. 일반 내보내기 root에서는 head를 우선 사용 |
| `source.directory` / `.scope` | 읽기 전용 공개 속성 | 현재 연결 정보 표시 |
| `showDirectoryPicker({mode:'read'})` | 브라우저 함수 | SDK 함수가 아님. 사용자 클릭 처리 중 호출 |

scope와 모델 ID는1–128자의 영문/숫자로 시작하고 영문/숫자/`_`/`-`만 포함합니다. `objects`, `releases`, `equipment`, `deltas`는 예약 이름입니다. 화면의 구역 필드값을 전달하며 레벨 이름이나 디스크 경로를 scope에 넣지 않습니다.

## 선택할 폴더

| 폴더 형태 | 선택 위치 | 목록 |
|---|---|---|
| 일반 전체/변경분 내보내기 | head·objects·releases가 있는 root | 해당 통합레벨1개 |
| 로컬 게시 저장소 | `levels`가 포함된 저장소 root 또는 `levels` 자체 | 선택한 scope의 게시 완료 모델 |

일반 내보내기 root의 `delivery-head.json`이 있으면 그것을 우선합니다. 로컬 게시 목록은 최대256개이고 head가 없는 업로드 중 폴더는 제외합니다. 손상된 head/manifest·경로와 모델 ID 불일치는 오류입니다. 변경분 폴더는 [루트 README](../../README.md)의 이전 objects 병합 조건을 충족해야 합니다.

## 버튼 예제

HTML에 `<button id="folder">청크 폴더 선택</button>`과 오류/상태를 표시할 영역을 준비합니다. 아래 함수의 `connect`에는03 가이드의 클라이언트 생성 또는13 가이드의 source 교체 함수를 전달합니다.

```ts
import { LocalChunkSource, type DeliveryDirectoryHandle } from '@dt/delivery-sdk';

export function mountLocalPicker(
  button: HTMLButtonElement,
  readScope: () => string,
  connect: (source: LocalChunkSource) => Promise<void>,
  report: (message: string) => void,
) {
  const events = new AbortController();
  button.addEventListener('click', () => {
    const picker = (window as unknown as {
      showDirectoryPicker?: (options: { mode: 'read' }) => Promise<DeliveryDirectoryHandle>;
    }).showDirectoryPicker;
    if (!picker) { report('이 브라우저는 폴더 선택을 지원하지 않습니다.'); return; }
    // 사용자 클릭 중 호출한다. 앞에 네트워크 await를 넣지 않는다.
    void picker.call(window, { mode: 'read' }).then(async directory => {
      await connect(new LocalChunkSource(directory, { scope: readScope().trim() }));
    }).catch(error => {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      report(error instanceof Error ? error.message : String(error));
    });
  }, { signal: events.signal });
  return () => events.abort();
}
```

반환값은 **버튼 이벤트 해제 함수**입니다. 이미 시작된 연결을 종료하는 함수는 아닙니다. 페이지 종료 시 이것을 호출하고 활성 클라이언트는 `await sdk.dispose()`로 정리합니다.

순서는 버튼 클릭 → 권한/폴더 선택 → source 생성 → client 생성 → `listModels()` → `open(model.id)`입니다. 폴더 선택 취소는 정상적인 사용자 취소로 처리합니다. 선택한 handle을 보관하면 같은 페이지에서 다시 조회할 수 있지만, 브라우저 재시작 후 권한이 자동 유지된다고 가정하지 않습니다. HTTPS 또는 localhost의 폴더 선택 지원 브라우저에서 확인하세요.
