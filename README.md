# DT Delivery SDK 0.3.10

편집기에서 게시한 청크를 웹에서 불러와 3D 모델을 표시하는 SDK입니다. 모델 목록·점진 로딩·액터 선택·카메라·스크립트 공개 속성을 클래스와 함수로 제어합니다. 별도의 Delivery API 서버는 필요하지 않습니다.

## 바로 실행하기

1. [최신 SDK ZIP](https://github.com/jonemos/DTDelivery-SDK/archive/refs/heads/main.zip)을 받아 **전체 압축 해제**합니다.
2. `examples/test-server.cmd`를 실행합니다.
3. Chrome 또는 Edge에서 열린 테스트 페이지를 사용합니다. 기본 주소는 `http://127.0.0.1:5183/`입니다.

Windows 10/11의 기본 PowerShell을 사용합니다. 테스트 페이지 실행에는 **Node.js·pnpm·Python 설치와 첫 실행 다운로드가 필요 없습니다.** `examples`만 따로 복사하거나 HTML 파일을 직접 열지 마세요. 실행 창은 사용 중 열어 두고, 종료할 때 `Ctrl+C`를 누릅니다.

Git을 사용하는 개발자는 다음과 같이 받을 수도 있습니다.

```powershell
git clone https://github.com/jonemos/DTDelivery-SDK.git
Set-Location DTDelivery-SDK
.\examples\test-server.cmd
```

## 모델 불러오기

### 기본 저장소

현재 배포본에는 기본 원격 저장소가 연결되어 있습니다. **사용자에게 연결 주소·청크 경로·통합레벨 ID를 따로 전달할 필요가 없습니다.**

- 제작자가 최신 편집기에서 **청크 제작 및 업로드 → 원격 저장소 → 업로드 및 게시**를 완료합니다.
- SDK 테스트 페이지가 모델 목록을 자동으로 읽습니다. 모델이 하나면 자동으로 열리고, 여러 개면 이름으로 선택한 뒤 **게시본 열기**를 누릅니다.
- 아직 게시한 모델이 없으면 목록은 비어 있습니다. 처음 게시하거나 모델을 추가하면 기본 10초 간격의 목록 확인으로 나타납니다.

같은 모델을 다시 게시하면 열린 SDK 화면도 기본 5초 간격으로 새 게시본을 확인합니다. 검증·준비 후 전환하며 카메라와 표시 설정을 유지합니다. 준비에 실패하면 기존 화면을 유지하고 재시도합니다. 실행 중 스크립트 상태는 새 게시본으로 초기화됩니다. 네트워크·로딩 시간과 브라우저 백그라운드 상태에 따라 반영 시간이 더 걸릴 수 있습니다.

마지막 연결과 모델 선택은 브라우저에 저장됩니다. **연결 해제**를 누르면 저장한 연결도 지우며, 다시 연결하려면 **목록 조회**를 누릅니다. 브라우저 저장소를 사용할 수 없으면 연결 기억 기능은 동작하지 않습니다.

### 다른 원격 저장소

**청크 위치 → 원격 게시 저장소**를 선택하고 제작자가 제공한 **SDK 연결 주소**를 넣은 뒤 **목록 조회**를 누릅니다. 모델은 이름으로 선택합니다. 같은 저장소의 모델을 다시 게시할 때 주소를 바꿀 필요는 없습니다.

저장소는 브라우저의 공개 읽기와 CORS를 허용해야 합니다. 저장소 접속 키는 SDK나 공개 Git에 넣지 않습니다. 자세한 연결 방식은 [HTTP 연결 가이드](docs/guides/02_HTTP_SOURCE.md)를 참고하세요.

### 로컬 청크 또는 정적 파일

- **로컬 청크 폴더**: 청크 폴더 선택 → 읽기 권한 허용 → 모델 선택. 일반 내보내기는 `delivery-head.json`, `objects`, `releases`가 있는 루트를 선택합니다. 게시 저장소는 `levels`가 있는 루트 또는 `levels` 자체를 선택하고 게시 구역을 맞춥니다.
- **정적 청크 주소**: 일반 내보내기 폴더의 HTTP 주소를 넣습니다. 예: `https://example.com/chunks/`. 다른 도메인의 파일을 읽으려면 CORS가 필요합니다.

[로컬 연결 가이드](docs/guides/01_LOCAL_SOURCE.md)에서 폴더 구조와 사용 방법을 확인할 수 있습니다.

## SDK 업데이트

1. 실행 중인 테스트 서버를 `Ctrl+C`로 종료합니다.
2. SDK 루트의 **`update.cmd`**를 실행합니다.
3. 완료 후 **`examples/test-server.cmd`**를 다시 실행하고 페이지를 새로 엽니다.

공식 저장소의 최신 `main`을 받아 파일 해시를 검사하고 백업 후 교체합니다. ZIP 사본은 Git·Node.js·pnpm 설치 없이 업데이트할 수 있습니다. Git 사본은 기존 Git을 사용합니다. 직접 수정한 SDK 파일이 있으면 덮어쓰지 않고 중단합니다. 모델과 개인 설정은 SDK 배포 파일 밖에 보관하세요.

구버전 업데이트 오류와 백업·복구 방법은 [업데이트 안내](docs/UPDATING.md)를 참고하세요. 변경 이력은 [CHANGELOG](CHANGELOG.md)에 있습니다.

## 외부 웹 프로젝트에서 사용하기

개발 프로젝트에서는 원하는 버전으로 의존성을 고정합니다. 이 설치 명령은 개발 환경에서만 실행하며, 완성된 웹페이지의 사용자는 Node.js나 pnpm을 설치하지 않습니다.

```powershell
pnpm add '@dt/delivery-sdk@github:jonemos/DTDelivery-SDK#v0.3.10'
```

```ts
import { DeliveryClient } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export async function showModel(canvas: HTMLCanvasElement) {
  const sdk = new DeliveryClient({ canvas });
  try {
    const models = await sdk.listModels();
    if (!models.length) throw new Error('게시된 모델이 없습니다.');
    await sdk.open(models[0]!.id, { progressive: true });
    return sdk;
  } catch (error) {
    await sdk.dispose();
    throw error;
  }
}
```

canvas와 부모 영역에 실제 폭·높이를 지정하고, 페이지를 닫거나 컴포넌트를 제거할 때 `await sdk.dispose()`를 호출합니다. `source`를 생략하면 기본 저장소를 사용합니다. 자체 연결은 `HttpChunkSource` 또는 `LocalChunkSource`로 지정합니다. 자동 게시본 갱신을 끄려면 `autoUpdate: false`를 전달합니다.

| 기능 | 주요 호출 |
| --- | --- |
| 모델 목록·열기 | `sdk.listModels()`, `sdk.open(modelId)` |
| 진행 상태 | `sdk.progress`, `sdk.subscribeProgress(listener)` |
| 액터 검색·선택·포커스 | `sdk.actors(query)`, `sdk.selectActor(target)`, `sdk.focusActor(target)` |
| 화면·바운드 | `sdk.setViewMode(mode)`, `sdk.viewport.setBounds(enabled)` |
| 스크립트 공개 속성 | `sdk.scripts.list()`, `sdk.scripts.get(target)` |
| 취소·종료 | `sdk.cancel()`, `await sdk.dispose()` |

전체 계약은 [API 명세](docs/API.md), 단계별 코드는 [기능별 개발 가이드](docs/guides/README.md), 화면 구성은 [페이지 구성 가이드](docs/guides/14_PAGE_LAYOUT.md)에 있습니다. 테스트 페이지의 기능별 예제에서는 실행 코드·입력값·결과를 확인할 수 있습니다. 예제 소스 개발은 [개발용 예제 안내](examples/web/README.md)를 따릅니다.

## 문제가 있을 때

| 증상 | 확인할 항목 |
| --- | --- |
| 기본 모델 목록이 비어 있음 | 제작자의 게시 완료 여부, 네트워크, SDK 버전 확인 후 목록 조회 |
| 다른 저장소를 읽지 못함 | 연결 주소·공개 읽기 권한·CORS·HTTPS 확인 |
| 로컬 파일 권한 오류 | 사용자 클릭으로 청크 폴더를 다시 선택 |
| hash·ID·참조 오류 | 제작자가 누락·손상된 게시본을 복구한 후 재시도 |
| 스크립트 속성 변경 거부 | 공개 schema의 타입·범위·쓰기 권한·현재 revision 확인 |
| 포트 5183 시작 실패 | 기존 테스트 서버를 종료한 후 다시 실행 |
| 업데이트 중단 | 표시된 오류와 백업 경로를 확인하고 [업데이트 안내](docs/UPDATING.md) 참고 |

SDK 업데이트가 모델 청크를 자동 재제작하지는 않습니다. 지원하는 청크 계약은 1–5이며, 실행 중 스크립트 속성 변경은 원본 파일에 저장하거나 다른 사용자와 자동 공유하지 않습니다. SDK와 사용자 모델은 별도로 관리합니다.
