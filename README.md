# DTWebEditor SDK — 처음 실행하는 분을 위한 안내

DTWebEditor에서 제작한 3D 모델을 웹브라우저에서 보고 선택할 수 있는 SDK입니다. 이 저장소에는 **SDK, 모델을 읽는 API 서버, 테스트 웹페이지**가 들어 있습니다. **실제 모델 데이터는 별도로 받아야 합니다.**

Windows에서 처음 테스트한다면 아래 1~4번을 순서대로 진행하세요. 에디터나 Unreal Engine을 테스트 PC에 설치할 필요는 없습니다.

```text
모델 데이터 → API 서버(18849번 포트) → 테스트 웹페이지(5183번 포트)
```

API 서버와 테스트 웹페이지는 서로 다른 창에서 실행하며, 모델을 보는 동안 두 창을 모두 켜 둡니다.

## 1. 필요한 프로그램 설치

| 프로그램 | 역할 | 준비 방법 |
|---|---|---|
| Node.js | API와 테스트 서버 실행 | [공식 다운로드](https://nodejs.org/en/download)에서 Windows용 Node.js 24 LTS 설치. 최소 24.16.0 필요 |
| pnpm | 테스트 페이지 의존성 설치 | Node.js 설치 후 아래 명령 실행 |
| Git | GitHub에서 SDK 받기 | [Git for Windows](https://git-scm.com/downloads/win) 설치. ZIP으로 받으면 생략 가능 |
| Chrome 또는 Edge | 3D 화면 표시 | WebGL을 사용할 수 있는 브라우저 |

Node.js 설치 후 **PowerShell 창을 새로 열고** 아래 명령을 한 줄씩 실행합니다. `PS C:\...>` 같은 프롬프트는 입력하지 않습니다.

```powershell
node --version
npm.cmd install --global pnpm@11.9.0
pnpm.cmd --version
```

이 SDK의 설치·빌드는 Node.js 24.19.0 / pnpm 11.9.0으로 확인했습니다. 이미 pnpm 11.9.0이 설치되어 있다면 설치 명령은 생략하세요. pnpm 설치 방법은 [공식 설치 안내](https://pnpm.io/installation)를 참고하세요.

## 2. SDK 다운로드

### Git으로 받기

저장할 폴더에서 PowerShell을 열고 실행합니다. 현재 SDK와 최신 README를 함께 받습니다.

```powershell
git clone https://github.com/jonemos/DTWebEditor_SDK.git
cd DTWebEditor_SDK
Get-Content package.json -TotalCount 6
```

`package.json`의 `version`으로 받은 SDK 버전을 확인합니다. 이미 같은 이름의 폴더가 있다면 새 빈 위치에서 clone하세요.

### Git 없이 ZIP으로 받기

[저장소 페이지](https://github.com/jonemos/DTWebEditor_SDK)에서 **Code → Download ZIP**을 누르고 압축을 풉니다. 압축 파일 안에서 바로 실행하지 마세요.

준비가 끝나면 다음 파일들이 보여야 합니다.

```text
DTWebEditor_SDK/
├─ local-server.cmd          로컬 모델 데이터를 읽는 API 실행
├─ remote-server.cmd         원격 저장소를 읽는 API 실행
├─ delivery-api.config.json  원격 API 설정 예제
├─ s3-profiles.json          원격 저장소 설정 예제
├─ examples/
│  └─ test-server.cmd        브라우저 테스트 페이지 실행
├─ docs/                    상세 설명
└─ package.json             SDK 버전 정보
```

처음에는 SDK 루트에서 별도로 `pnpm install`할 필요가 없습니다. 테스트 실행기가 필요한 의존성을 설치합니다.

## 3. 테스트할 모델 데이터 준비

**SDK를 clone하는 것만으로 모델이 생기지는 않습니다.** 모델 제작자에게 DTWebEditor의 **청크 제작 및 업로드**에서 저장한 청크 폴더를 받으세요.

| 데이터 위치 | 사용할 실행 파일 | 필요한 준비 |
|---|---|---|
| 이 PC의 폴더 | `local-server.cmd` | 모델의 청크 폴더 전체를 이 PC에 복사 |
| S3 호환 원격 저장소 | `remote-server.cmd` | 제작자·운영자가 제공한 원격 설정. 아래 5번 참고 |

로컬 테스트용 일반 청크 폴더는 다음 구조입니다. `objects`와 `releases` 안의 파일을 함께 복사해야 합니다.

```text
D:\DTTest\model-chunks\
├─ delivery-head.json
├─ objects\
└─ releases\
```

API에 입력할 경로는 **`D:\DTTest\model-chunks`**입니다. `objects`나 `releases` 하위 폴더를 입력하지 마세요. 변경분 저장으로 생긴 `deltas` 폴더가 있다면 함께 보관합니다. 기존 `levels`·`receipts` 구조의 로컬 게시 저장소도 지원합니다.

청크 폴더는 SDK 폴더 밖에 두어도 됩니다. 모델·개인 설정·접속 키는 공개 Git에 추가하지 않습니다.

## 4. 로컬 모델 실행하기

### ① API 서버 실행

SDK 폴더에서 **`local-server.cmd`를 더블클릭**합니다. 청크 폴더를 물으면 3번에서 준비한 경로를 입력합니다.

```text
로컬 청크 폴더: D:\DTTest\model-chunks
```

첫 실행은 모델 파일을 검증하므로 큰 모델은 시간이 걸립니다. 아래 문구가 나오면 준비 완료입니다. **이 창을 켜 두세요.**

```text
Delivery API listening: http://127.0.0.1:18849/
```

입력한 경로는 `delivery-api.local.config.json`에 저장됩니다. 다음 실행에서 Enter를 누르면 이전 경로를 사용합니다. 모델 원본은 읽기만 하며, API의 검증 정보와 토큰은 `delivery-data-local`에 생성됩니다.

### ② 테스트 웹페이지 실행

API 창을 켜 둔 상태에서 **`examples/test-server.cmd`를 더블클릭**합니다. 첫 실행에는 인터넷 연결이 필요합니다. 설치가 끝나면 브라우저가 자동으로 열립니다.

```text
http://127.0.0.1:5183/
```

브라우저가 열리지 않으면 위 주소를 직접 입력하세요. **테스트 서버 창도 켜 두세요.**

PowerShell로 실행하려면 SDK 폴더에서 첫 번째 명령을 실행하고, **다른 PowerShell 창**에서 같은 SDK 폴더로 이동한 뒤 두 번째 명령을 실행합니다.

```powershell
.\local-server.cmd
```

```powershell
.\examples\test-server.cmd
```

### ③ 모델 열기

1. 화면에서 **청크 위치 → 로컬 폴더**를 선택합니다.
2. 같은 PC에서 API를 실행했다면 API 주소·scope·토큰이 자동 입력됩니다.
3. **목록 조회**를 누릅니다.
4. **통합레벨** 목록에서 모델을 선택합니다.
5. **게시본 열기**를 누릅니다.

토큰이 비어 있으면 API의 준비 완료 문구를 확인하고 **목록 조회**를 다시 누르세요. `scope`는 게시 구역 이름이며 로컬 기본값은 `development`입니다.

### ④ 정상 실행 확인

- 상단 SDK 버전과 3D 모델이 표시됩니다.
- **실시간 로드 진행**에서 실제 청크 준비 상태를 확인할 수 있습니다. 큰 모델은 준비된 부분부터 표시됩니다.
- 모델이나 **통합레벨 아웃라이너**의 액터를 선택하면 선택 정보가 표시됩니다.
- 뷰포트 **표시** 메뉴 맨 아래에서 텍스처 옵션을 조절할 수 있습니다.
- 정적 메시 배칭은 기본 꺼짐입니다. 성능 실험이 필요한 경우에만 개발자가 API로 켤 수 있습니다.

테스트가 끝나면 API 창과 테스트 서버 창에서 각각 **Ctrl+C**를 누릅니다. `일괄 작업을 끝내시겠습니까?`가 나오면 `Y`를 입력합니다.

## 5. 원격 저장소로 테스트하기

제작자가 원격 저장소에 청크를 업로드하고 **게시 완료**한 뒤 진행합니다. 운영자에게 다음 정보를 받아 설정하세요.

| 파일·정보 | 준비할 내용 |
|---|---|
| `delivery-api.config.json` | 실제 `scope`와 통합레벨 ID를 `compositionIds`에 지정 |
| `s3-profiles.json` | 실제 저장소 주소·버킷·region과 연결 설정 |
| `.env` 또는 서버 환경변수 | 저장소 읽기에 사용하는 접속 키 |

저장소에 포함된 설정은 예제입니다. `storage.example.com`과 빈 `compositionIds: []`를 그대로 사용하면 실제 모델을 조회할 수 없습니다. 구체적인 설정과 수동 등록은 [서버 설정 안내](docs/SERVER.md)를 참고하세요.

1. 같은 PC에서 실행 중인 로컬 API가 있다면 Ctrl+C로 종료합니다.
2. SDK 폴더의 **`remote-server.cmd`**를 실행합니다. 설정을 질문하지 않고 위 파일을 읽습니다.
3. `Delivery API listening` 문구가 나오면 **`examples/test-server.cmd`**를 실행합니다.
4. 웹페이지에서 **청크 위치 → 원격 저장소 → 목록 조회 → 모델 선택 → 게시본 열기** 순서로 진행합니다.

원격 데이터를 읽더라도 API를 이 PC에서 실행하면 API 주소는 `http://127.0.0.1:18849/`입니다. 같은 SDK 폴더의 설정·토큰은 자동 입력됩니다. 웹페이지에서 위치를 바꾸는 것만으로 API 설정이 바뀌지는 않습니다. 먼저 해당 API 실행 파일을 실행해야 합니다.

API가 다른 PC에서 실행 중이라면 운영자가 제공한 **API 주소·scope·토큰**을 직접 입력하세요. `127.0.0.1`은 항상 현재 PC를 가리킵니다. 다른 PC 접속에는 서버의 접속 허용 설정도 필요합니다. [다른 PC·서버 운영 안내](docs/SERVER.md)를 따르세요.

## 6. 모델 변경과 SDK 업데이트

| 바뀐 항목 | 진행 순서 |
|---|---|
| 모델 내용 | 제작자가 청크 저장/게시 완료 → API 종료·재실행 → 웹페이지에서 목록 조회·게시본 다시 열기 |
| SDK 기능·버그 수정 | 서버 두 개 종료 → SDK 업데이트 → API·테스트 서버 재실행 → 브라우저 새로고침 |

모델 내용만 바뀌었을 때는 SDK를 다시 설치하지 않습니다. API는 시작할 때 게시본을 검증하며 실행 중에 주기적으로 새 버전을 감시하지 않습니다.

Git으로 `main`을 받은 사본은 SDK 폴더에서 다음 명령으로 업데이트합니다. 로컬 변경이 있거나 Git 오류가 나오면 강제로 덮어쓰지 말고 [업데이트 안내](docs/UPDATING.md)를 확인하세요.

```powershell
git pull --ff-only origin main
```

ZIP으로 받은 경우에는 새 ZIP을 **새 폴더**에 풉니다. 모델 청크는 계속 같은 폴더를 사용하고, API 설정은 기존 값을 확인해 새 SDK에서 다시 준비합니다.

## 7. 실행이 안 될 때

| 증상 | 해결 방법 |
|---|---|
| `node` 또는 `pnpm`을 찾을 수 없음 | 1번 설치 후 PowerShell·실행 창을 새로 열기 |
| PowerShell에서 `.ps1` 실행이 차단됨 | 설치·버전 확인 명령에 `npm.cmd`, `pnpm.cmd` 사용. 실행 정책을 바꿀 필요 없음 |
| 청크 폴더가 거부됨 | `delivery-head.json`·`objects`·`releases`를 함께 가진 상위 폴더인지 확인. 복사가 모두 완료됐는지 확인 |
| 모델 목록이 비어 있음 | API 검증 로그·scope 확인. 원격은 실제 설정과 `compositionIds`·게시 완료 여부도 확인 |
| API 연결 실패 | API 창이 켜져 있고 `Delivery API listening`이 나왔는지 확인 |
| 토큰이 비어 있거나 `401` 오류 | 같은 SDK의 API를 실행한 뒤 목록 재조회. 다른 PC의 API는 운영자에게 토큰 확인 |
| `403` 오류 | 웹페이지 주소와 API 설정의 `origin`, scope/권한 확인 |
| 포트 `18849` 또는 `5183` 사용 중 | 이전 API/테스트 서버 창에서 Ctrl+C 후 재실행 |
| 새 모델 내용이 보이지 않음 | 게시 완료 확인 → API 재실행 → 목록 조회·다시 열기 |
| 화면이 비거나 검게 보임 | 로드 실패 메시지 확인. 브라우저 WebGL 사용 여부와 뷰포트 조명/표시 옵션 확인 |

기본 웹페이지 주소는 **`http://127.0.0.1:5183/`**입니다. `localhost`로 바꾸면 API의 허용 origin과 달라질 수 있습니다. API 주소에는 끝의 `/`를 붙이고, config의 `origin`에는 붙이지 않습니다.

예제 설치는 짧은 의존성 경로와 파일 복사를 사용합니다. SDK 폴더를 정리하기 전에는 두 서버를 종료하고 해당 폴더를 사용하는 터미널도 닫으세요.

## 8. SDK API로 웹프로젝트에 모델 연결하기

테스트 페이지에서 모델을 확인한 뒤 **기존 웹프로젝트 폴더**에서 설치합니다. 아래 명령은 버전 태그를 지정하여 설치합니다. 이전 버전 태그는 그대로 보존합니다.

```powershell
pnpm.cmd add "https://github.com/jonemos/DTWebEditor_SDK.git#v0.2.23"
```

API 서버는 웹프로젝트와 별도로 계속 실행합니다. SDK는 브라우저용 JavaScript/TypeScript API이고, API 서버는 모델과 공개 속성을 HTTP로 제공하는 Node.js 프로그램입니다.

### 연결에 필요한 값

| 값 | 의미 | 얻는 방법 |
|---|---|---|
| `apiURL` | 모델을 읽는 API 주소 | 로컬 기본 `http://127.0.0.1:18849/`. 다른 PC는 운영자가 제공한 주소 |
| `scope` | 게시 구역 이름 | API 설정과 같은 값. 로컬 기본 `development` |
| `compositionId` | 표시할 통합레벨 ID | `api.compositions(scope)`로 조회한 항목의 `id` |
| API 토큰 | API 접속 인증 | 테스트 페이지의 자동 연결 또는 운영자가 제공한 값 |
| `releaseHash` | 정확한 게시 버전 | `api.publication(scope, compositionId)`의 응답 |

SDK는 요청할 때마다 `getToken`을 호출합니다. 브라우저에는 **API 토큰**을 공급하며, S3 접속 키는 API 서버에서 사용합니다.

### 점진 로딩과 액터 선택 연결 예제

먼저 페이지에 표시 영역을 만듭니다. 부모와 canvas에 실제 크기가 있어야 합니다.

```html
<div style="width:100%;height:600px">
  <canvas id="model-view" style="width:100%;height:100%"></canvas>
</div>
```

아래 함수에 생성된 canvas와 연결 정보를 전달합니다. 준비된 청크부터 표시하고 클릭한 액터를 알려줍니다.

```ts
import { DeliveryApiClient, ChunkReader, DeliveryViewer } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export async function openSdkModel(
  canvas: HTMLCanvasElement,
  apiURL: string,
  scope: string,
  compositionId: string,
  getToken: () => Promise<string>,
) {
  const api = new DeliveryApiClient(new URL(apiURL), async () => `Bearer ${await getToken()}`);
  const { releaseHash } = await api.publication(scope, compositionId);
  if (!releaseHash) throw new Error('게시된 모델이 없습니다.');

  const reader = new ChunkReader(api.provider(scope, compositionId, releaseHash));
  const viewer = new DeliveryViewer(canvas, reader);
  viewer.setStaticBatching(false);
  const unsubscribe = viewer.subscribeActorSelection(actor => {
    console.log('선택 액터:', actor?.actorName, actor?.serviceKey);
  });
  try {
    await viewer.openProgressive(releaseHash);
  } catch (error) {
    unsubscribe();
    await viewer.dispose();
    throw error;
  }
  return {
    api, viewer, releaseHash,
    async dispose() { unsubscribe(); await viewer.dispose(); },
  };
}
```

페이지·컴포넌트를 닫거나 모델을 교체할 때 반환된 `dispose()`를 호출합니다. 레벨을 편집하는 에디터 API와 SDK의 실행 화면 변경은 서로 다른 작업입니다. SDK 변경이 에디터 원본에 자동 저장되지는 않습니다.

### 자주 사용하는 SDK API

| 호출 | 하는 일 |
|---|---|
| `api.compositions(scope, page)` | 게시된 모델 목록. 첫 페이지는 `0`, 응답은 `items`·`total`·`page`·`limit` |
| `api.publication(scope, compositionId)` | 현재 게시 버전의 `releaseHash` 조회 |
| `api.releases(scope, compositionId)` | 검증된 이전 버전 목록 |
| `api.actors(scope, compositionId, releaseHash, query, page)` | 액터 검색. 검색하지 않으면 `query`에 빈 문자열 사용 |
| `api.provider(scope, compositionId, releaseHash)` | 인증된 청크 공급자. `ChunkReader`가 크기와 해시 검증 |
| `viewer.openProgressive(releaseHash)` | 검증·준비된 부분부터 표시 |
| `viewer.subscribeActorSelection(callback)` | 화면에서 액터 선택 시 알림. 반환 함수로 구독 해제 |
| `viewer.selectActorTarget(actor)` | 로드된 액터 검색 결과를 안정 ID로 선택 |
| `viewer.selectActor(null)` | 선택 해제 |
| `mountDeliveryViewportTools(element, viewer, immersive, { leftOnly: true })` | 예제와 같은 왼쪽 뷰포트 메뉴부터 표시 메뉴까지 연결 |
| `viewer.setStaticBatching(false)` / `viewer.staticBatchingStatus` | 배칭 설정 / 마지막 상태. 기본 꺼짐 |
| `viewer.dispose()` | 모델·GPU·이벤트·애드온 연결 자원 해제 |

액터는 화면 이름 대신 `compositionId`·`mountId`·`actorId`로 식별합니다. 같은 원본을 두 번 배치해도 `mountId`가 달라 서로 구분됩니다. SDK의 좌표는 오른손/Y-up/미터/quaternion XYZW입니다.

## 9. HTTP API로 모델 조회하기

SDK를 사용하는 경우 위 메서드가 HTTP 요청을 처리합니다. Python·C# 등에서 직접 호출할 때는 **모든 요청에 `Authorization: Bearer <API 토큰>`**을 넣습니다.

| 메서드 / 경로 | 응답·용도 |
|---|---|
| `GET /api/scopes/<scope>/compositions?page=0` | 통합레벨 목록 |
| `GET /api/scopes/<scope>/compositions/<id>/publication` | 현재 `releaseHash` |
| `GET /api/scopes/<scope>/compositions/<id>/releases` | 이전 게시 버전 목록 |
| `GET /api/scopes/<scope>/compositions/<id>/releases/<hash>/actors?q=&page=0` | 액터 목록·검색 |
| `GET /api/delivery/<scope>/<id>/<hash>/authorize` | 해당 버전 읽기 권한 확인 |
| `GET /api/delivery/<scope>/<id>/<hash>/releases/<hash>.json` | 청크 구성표 |
| `GET /api/delivery/<scope>/<id>/<hash>/objects/<chunkHash>` | 청크 바이트 |

`<id>`는 통합레벨 ID이고 `<hash>`는 전체 게시 해시입니다. 모델 표시에는 SDK의 `ChunkReader`를 사용하면 청크 검증을 함께 처리할 수 있습니다.

## 10. 편집기에서 추가한 애드온 스크립트도 제어할 수 있나요?

**SDK 5의 공개 속성을 API로 조회·변경할 수 있습니다.** SDK 0.2.22에는 `DeliveryAddonController`, `AddonPropertiesClient`와 서버의 애드온 HTTP/WebSocket 처리가 포함됩니다.

### 게시본에 포함되는 조건

1. 신뢰한 ZIP 애드온을 편집기에 설치하고 실제 액터의 컴포넌트로 부착합니다.
2. 애드온의 `sdkVersion`은 `5`이고 `environments`에 **`delivery`**가 있어야 합니다. 선언한 capability도 Delivery에서 지원해야 합니다.
3. 애드온 설정을 저장하고 해당 원본을 참조하는 통합레벨의 **청크를 새로 제작·게시**합니다.
4. 새 게시본에는 필요한 설치 모듈과 정확한 `packageId`·`version`·`codeHash`가 `addonBundle`로 들어갑니다. SDK는 이를 검증하고 실행합니다. 외부 소비자 PC에 에디터나 제작 ZIP을 다시 설치할 필요는 없습니다.
5. 외부에서 제어할 값은 애드온 manifest의 **`properties`**에 선언해야 합니다. 허용된 속성의 타입·범위·`access`·`storage`에 따라 제어합니다.

설치 목록에만 있는 미사용 애드온은 모델에 포함되지 않습니다. 예전 게시본에는 새로 설치한 스크립트가 자동으로 추가되지 않습니다. `editor` 전용 애드온은 Delivery 지원을 추가해야 사용할 수 있습니다. 일반 내부 함수 호출을 HTTP API로 자동 노출하는 기능은 제공하지 않습니다.

### 화면 안에서 조회·임시 변경

`viewer.addons.list()`는 **현재 로드된 실행 인스턴스**를 반환합니다. 점진 로딩 중에는 목록이 늘어날 수 있습니다. 각 항목의 `target`, `reference`, `schema`, `values`, `revision`, `state`, `error`를 확인하세요.

```ts
import {
  addonTargetKey,
  type AddonTarget,
  type DeliveryViewer,
} from '@dt/delivery-sdk';

export async function changeAddonValue(
  viewer: DeliveryViewer,
  target: AddonTarget,
  propertyName: string,
  value: string | number | boolean,
) {
  const instance = viewer.addons.list().find(i => addonTargetKey(i.target) === addonTargetKey(target));
  if (!instance || instance.state !== 'running') throw new Error('먼저 대상 애드온을 로드하세요.');
  await viewer.addons.changeBatch([{
    target: instance.target,
    expectedRevision: instance.revision,
    values: { [propertyName]: value },
  }], 'runtime');
}
```

`target`은 `compositionId`·`mountId`·`actorId`·`componentId` 전체를 사용합니다. `propertyName`은 `schema`에 공개된 이름이어야 하고, `access: read-write`와 `storage: runtime` 또는 `both`가 필요합니다. 타입·범위 위반이나 오래된 revision은 거부됩니다. HTTP 연결을 bind하기 전의 runtime 변경은 이 화면에만 적용되며 종료하면 사라집니다.

### HTTP 연결·영구 저장

| 준비·API | 설명 |
|---|---|
| API 설정의 `allowWrites: true` | 운영자가 쓰기 권한을 허용한 경우 설정하고 API 재시작. 기본값 `false`에서는 서버 속성 변경 거부 |
| `api.registerApp(appId, scope, compositionId, releaseHash)` | 최초 한 번 외부 제어용 app 등록. 등록 권한 필요. 기존 app은 같은 ID로 사용 |
| `new AddonPropertiesClient(api, appId, releaseHash)` | 등록한 app과 정확한 게시 버전에 연결 |
| `await viewer.addons.bind(client)` | 실행 세션과 WebSocket 변경 알림 연결 |
| `client.list()` / `schema(target)` / `values(target)` | 서버의 애드온 목록·공개 속성·값 조회. 목록은 미로드 인스턴스도 포함 |
| `viewer.addons.changeBatch(updates, 'runtime')` | bind 후에는 서버를 통해 이 실행 세션의 임시값 변경 |
| `viewer.addons.changeBatch(updates, 'persistent')` | 쓰기 권한과 persistent/both 속성 필요. 서버 DB에 저장 |
| `viewer.addons.subscribe(callback)` / `viewer.addons.error` | 실행 목록·값 변경 관찰 / 동기화 오류 확인 |

서버 연결 예제입니다. `appId`는 먼저 등록된 값을 전달합니다.

```ts
import { AddonPropertiesClient, type DeliveryApiClient, type DeliveryViewer } from '@dt/delivery-sdk';

export async function connectAddonApi(
  api: DeliveryApiClient,
  viewer: DeliveryViewer,
  appId: string,
  releaseHash: string,
) {
  const client = new AddonPropertiesClient(api, appId, releaseHash);
  await viewer.addons.bind(client);
  return { executionId: client.executionId, instances: viewer.addons.list() };
}
```

영구값은 API 서버의 DB override에 저장됩니다. 게시 청크나 편집기·Unreal 원본은 자동으로 덮어쓰지 않습니다. `viewer.dispose()`가 연결과 임시 실행 상태도 정리합니다.

| HTTP / WebSocket 경로 | 용도 |
|---|---|
| `POST /api/apps/<app>` | app 등록 |
| `GET /api/apps/<app>/addons?releaseHash=<hash>` | 애드온 목록 |
| `GET /api/apps/<app>/addons/schema` / `/values` | `releaseHash`·URL 인코딩한 `target` query로 한 인스턴스 조회 |
| `POST /api/apps/<app>/addons/sessions` | `executionId` 세션 등록·종료 |
| `POST /api/apps/<app>/addons/properties` | 버전·속성·revision을 검증한 일괄 변경 |
| `WS /api/apps/<app>/addons/events?executionId=<id>` | 변경 알림 |

임시값 조회에는 `executionId`도 지정합니다. 세션·WebSocket 인증과 변경 요청 본문은 `AddonPropertiesClient`가 처리합니다. 쓰기 권한 오류는 `403`, revision 충돌은 `409`이므로 최신 목록을 다시 확인하세요. 전체 HTTP 경로와 타입은 [API 상세 안내](docs/API.md), 서버 권한 설정은 [서버 안내](docs/SERVER.md)에 있습니다.

## 11. 추가 문서와 버전 안내

실행 가능한 전체 화면 코드는 [예제 코드](examples/web/main.ts)에 있습니다.

이 SDK는 점진 로딩과 원래 액터 선택을 유지합니다. 0.2.23은 SmartCube 자동 Atlas와 UPB의 SCQO·Painter 결합 재질을 지원합니다. 새 편집기에서 가져온 색 개수·마스크·ID 처리·Painter 텍스처가 청크에 포함되어야 합니다. SDK 업데이트만으로 기존 청크의 재질이 바뀌지는 않습니다. 지원 범위 안의 색 개수·색상·텍스처 변경은 이후 청크 재생성으로 반영합니다. 셀 재진입 그리기 순서와 예제 설치 의존성 갱신을 유지하며 배칭의 기본값은 꺼짐입니다. 성능이나 픽셀 일치 여부는 모델·브라우저·GPU에 따라 직접 검증하세요.

추가 문서: [서버 설정](docs/SERVER.md) · [예제 상세 안내](examples/web/README.md) · [SDK 업데이트](docs/UPDATING.md) · [SDK Git 배포](docs/GITHUB_DESKTOP.md)

MIT 라이선스입니다. 제3자 라이선스는 [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt)에 있습니다.
