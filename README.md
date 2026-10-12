# DTWebEditor SDK 사용 안내

DTWebEditor에서 만든 청크를 외부 웹페이지의 3D 화면으로 표시하는 SDK입니다. **브라우저 SDK, API 서버, 실행용 CMD, 테스트 웹페이지**가 함께 들어 있습니다. 실제 모델의 청크는 별도로 준비합니다.

처음에는 자신의 청크 위치에 맞는 경로 하나를 선택하세요.

| 청크가 있는 곳 | 따라갈 안내 | API 실행 파일 |
|---|---|---|
| 내 PC 또는 API 실행 PC의 폴더 | [로컬 청크로 실행하기](#local) | `local-server.cmd` |
| 외부 프로젝트의 S3 호환 원격 저장소 | [원격 저장소로 실행하기](#remote) | `remote-server.cmd` |

[공통 준비](#prepare) · [기존 프로젝트에 연결](#project) · [변경된 모델 반영](#updates) · [문제 해결](#troubleshooting)

```text
로컬 청크 폴더 또는 원격 저장소
              ↓
         API 서버
              ↓
     SDK를 사용하는 웹페이지
```

**GitHub는 SDK를 받는 곳이고, 청크 저장소는 모델 데이터를 보관하는 곳입니다.** 웹페이지는 API 주소로 연결합니다.

<a id="prepare"></a>
## 1. 공통 준비

### PC에 필요한 프로그램

- Node.js **24.16 이상**: API 서버 실행에 사용합니다.
- pnpm: 테스트 웹페이지와 외부 프로젝트의 의존성 설치에 사용합니다.
- Git: clone할 때 사용합니다. ZIP으로 받으면 Git은 필요하지 않습니다.

PowerShell에서 설치 여부를 확인할 수 있습니다.

```powershell
node --version
pnpm --version
```

### SDK 받기

이 GitHub 페이지에서 **Code → Download ZIP**으로 받아 압축을 풀거나, 다음 명령으로 clone합니다.

```sh
git clone --branch v0.2.13 https://github.com/jonemos/DTWebEditor_SDK.git
cd DTWebEditor_SDK
```

실행에 사용하는 SDK 폴더는 에디터에서 SDK 게시·버전 관리용으로 연결한 폴더와 별도로 준비하세요.

```text
DTWebEditor_SDK/
├─ local-server.cmd             로컬 청크 API 실행
├─ remote-server.cmd            원격 저장소 API 실행
├─ delivery-api.config.json     원격 API 설정
├─ s3-profiles.json             원격 저장소 연결 정보
└─ examples/
   ├─ test-server.cmd           테스트 서버 실행 + 브라우저 열기
   └─ web/                     테스트 웹페이지
```

**clone/ZIP에는 설정 파일이 포함되어 있으므로 `api:init`을 실행하지 않습니다.** CMD로 API를 켤 때 별도의 SDK 소스 빌드도 필요 없습니다.

아래의 로컬 또는 원격 절차를 진행하세요. 기본 API 포트가 같으므로 둘 중 **하나의 API 서버**를 실행합니다.

<a id="local"></a>
## 2. 로컬 청크로 실행하기

**진행 순서: 청크 저장 → local-server.cmd → test-server.cmd → 모델 열기**

### ① 청크 폴더 준비

제작자는 에디터에서 원본 레벨과 통합레벨을 저장한 뒤, 청크 제작의 로컬 폴더 **전체 저장** 또는 **변경분 저장**을 완료합니다.

예를 들어 `D:\wxx`에 저장했다면 다음 항목이 있어야 합니다.

```text
D:\wxx/
├─ delivery-head.json
├─ objects/
└─ releases/
```

**일반 청크 폴더에는 `receipts`가 없어도 정상입니다.** `objects`나 `releases` 안으로 들어가지 말고, 세 항목을 포함하는 상위 폴더 `D:\wxx`를 사용합니다. 청크 폴더는 SDK 폴더 밖에 두어도 됩니다. API를 실행하는 PC에서 해당 폴더를 읽을 수 있어야 합니다.

현재 에디터의 청크 생성·게시에서는 `equipment/`를 만들거나 업로드하지 않습니다. 기존 폴더에 이미 있는 설비 파일은 자동 삭제하지 않으며, 최신 SDK/API는 그 파일 없이도 모델을 읽습니다. 예제 ZIP의 확인용 JSON에서도 `equipment.json`은 생성하지 않습니다.

| 항목 | 역할 |
|---|---|
| `objects/` | 모델·텍스처·레벨 정보 등을 나눈 실제 데이터 조각. 같은 내용은 재사용 |
| `releases/` | 저장 버전별 레벨 배치와 필요한 파일·청크의 구성표 |
| `deltas/` | 변경분 저장 시 추가·재사용·제외된 청크의 비교 정보 |
| `delivery-head.json` | 전체 검증·저장이 완료된 현재 버전을 가리키는 파일 |

`deltas/`는 변경분 저장 때 생깁니다. 기존 설비 메타데이터는 원본 저장본 안에 보존하며 호환 읽기 API로만 사용합니다. 새 구조를 확인하려면 최신 에디터에서 **새 빈 폴더에 전체 저장**하세요.

### ② 로컬 API 실행

SDK 루트의 **`local-server.cmd`**를 실행하고 청크 폴더 경로만 입력합니다.

```text
로컬 청크 폴더: D:\wxx
```

실행기가 `delivery-api.local.config.json`을 저장합니다. `localStore`는 `D:/wxx`, `s3Profiles`는 `null`이 됩니다. 원격용 `delivery-api.config.json`과 접속 키는 변경하지 않습니다. 다음 실행에서는 Enter를 눌러 이전 폴더를 사용할 수 있습니다.

API는 시작할 때 현재 청크와 레벨 정보를 검증합니다. 큰 모델은 시간이 걸릴 수 있습니다. 아래 문구가 나오면 실행이 완료된 것입니다. **이 창을 켜 둡니다.**

```text
Delivery API listening: http://127.0.0.1:18849/
```

원본 청크 폴더는 읽기만 합니다. API의 검증 목록과 기본 토큰은 SDK의 `delivery-data-local/`에 저장됩니다. 기존 `levels`·`receipts` 구조의 로컬 게시 저장소도 같은 실행기로 사용할 수 있습니다.

### ③ 테스트 웹페이지 실행

API 창을 유지한 채 **`examples/test-server.cmd`**를 실행합니다. 필요한 의존성을 설치하고 테스트 서버를 켠 뒤 브라우저가 자동으로 열립니다.

```text
http://127.0.0.1:5183/
```

이 테스트 서버 창도 켜 둡니다.

### ④ 화면에서 모델 열기

화면의 **청크 위치 → 로컬 폴더**를 선택합니다. 처음에는 로컬이 선택되어 있습니다. **같은 SDK의 로컬 설정에서 API 주소·scope·토큰을 자동으로 입력**하므로 파일을 열어 복사할 필요 없습니다.

| 화면 입력란 | 입력할 값 |
|---|---|
| 조회 API 주소 | 로컬 설정에서 자동 입력. 기본 `http://127.0.0.1:18849/` |
| API 토큰 | 로컬 설정의 dataDirectory 안 `.api-token`에서 자동 입력 |
| 게시 구역(scope) | 로컬 설정에서 자동 입력. 기본 `development` |

**목록 조회 → 통합레벨 선택 → 게시본 열기**를 누릅니다. 로컬 일반 청크의 통합레벨 ID는 API가 파일에서 읽으므로 별도로 입력할 필요 없습니다. 토큰이 비어 있으면 먼저 API를 실행한 뒤 **목록 조회**를 다시 누르세요. SDK 루트 `.env`나 테스트 서버에 지정된 `DT_DELIVERY_API_TOKEN`도 자동으로 읽습니다. 다른 터미널에만 지정한 환경변수 토큰은 직접 입력합니다.

큰 모델은 다운로드·검증·화면 준비에 시간이 걸립니다. 상태 문구에 실제 다운로드 용량·청크 요청 수·경과 시간이 표시됩니다. **로딩 취소**로 중단할 수 있고 실패하면 오류가 표시됩니다. 모델이 보이면 [기존 웹프로젝트에 SDK 연결](#project)로 진행하세요.

모델을 수정했을 때의 순서는 [변경된 모델 반영](#updates)을 참고하세요.

<a id="remote"></a>
## 3. 원격 저장소로 실행하기

**진행 순서: 원격 업로드·게시 완료 → 연결 설정 준비 → remote-server.cmd → test-server.cmd → 모델 열기**

### ① 제작자가 청크 업로드·게시

에디터의 **청크 제작 및 업로드 → 원격 저장소 → 업로드 및 게시**를 실행하고 **게시 완료**를 확인합니다. 제작자는 외부 프로젝트 개발자에게 다음 정보를 전달합니다.

- 에디터에서 사용하는 원격 저장소 연결 정보
- `scope`: 게시 구역 이름
- **API 연결용 통합레벨 ID**: 표시 이름 대신 사용하는 실제 ID

### ② 배포 담당자가 연결 설정 준비

SDK를 받아 실행하는 사람이 매번 설정을 입력하는 방식이 아닙니다. **배포 담당자가 설정 파일을 준비하고, 원격 CMD는 그 내용을 그대로 읽습니다.**

| 파일 | 준비할 내용 |
|---|---|
| `delivery-api.config.json` | API 포트·웹 origin·scope·통합레벨 ID |
| `s3-profiles.json` | 실제 S3 주소·버킷·region 등 에디터의 연결 정보 |
| 서버의 `.env` 또는 환경변수 | 저장소 읽기에 사용할 접속 키 |

Git에서 받은 공개 설정은 예제입니다. `storage.example.com`은 실제 저장소 주소가 아니고, `compositionIds: []`에는 아직 통합레벨 ID가 없습니다. **실제 저장소 정보와 ID를 준비해야 모델이 조회됩니다.**

원격 API 설정의 형태는 다음과 같습니다.

```json
{
  "version": 1,
  "host": "127.0.0.1",
  "port": 18849,
  "origin": "http://127.0.0.1:5183",
  "scope": "development",
  "allowWrites": false,
  "dataDirectory": "./delivery-data",
  "localStore": null,
  "s3Profiles": "./s3-profiles.json",
  "compositionIds": []
}
```

`scope`는 에디터에서 게시한 값과 같아야 합니다. `compositionIds`의 빈 `[]` 안에는 에디터에서 복사한 실제 통합레벨 ID를 큰따옴표로 감싸 넣습니다. 여러 ID는 쉼표로 구분합니다. 같은 레벨을 재업로드할 때는 ID가 유지되고, 새 통합레벨을 추가할 때만 그 ID를 설정에 추가합니다.

`s3-profiles.json`에는 에디터에서 확인한 연결 정보를 그대로 사용합니다. 이름·scope·주소·버킷·region·환경변수 접두사·HTTP/조건부 쓰기 설정도 함께 보존합니다. 상세 항목은 [서버 설정 안내](docs/SERVER.md)를 참고하세요.

**CMD는 접속 키를 질문하거나 수정하지 않습니다.** 운영자가 기존 `.env` 또는 서버 환경변수로 공급합니다. 기본 접두사라면 `DT_DELIVERY_REMOTE_ACCESS_KEY_ID`, `DT_DELIVERY_REMOTE_SECRET_ACCESS_KEY`, 필요한 경우 `DT_DELIVERY_REMOTE_SESSION_TOKEN`을 사용합니다. 실제 키는 공개 Git이나 브라우저 소스에 넣지 않습니다.

### ③ 원격 API 실행

설비 파일이 없는 새 청크를 원격으로 연결할 때는 **SDK/API 0.2.12 이상**을 사용합니다. 이전 API의 원격 검증은 `equipment/` 파일을 요구할 수 있습니다. 제작자도 최신 에디터를 사용해야 새 청크의 설비 파일 생성·업로드가 중단됩니다.

SDK 루트의 **`remote-server.cmd`**를 실행합니다. 질문 없이 **루트의 `delivery-api.config.json`**을 읽어 서버를 시작합니다.

서버는 시작할 때 현재 원격 게시본을 한 번 확인합니다. 새 게시본의 파일·hash·통합레벨 ID를 검증한 뒤 API 목록에 반영합니다. 검증이 실패하면 기존 검증된 게시본을 보존하고 로그에 실패를 표시합니다.

아래 문구가 나오면 API가 실행된 것입니다. **이 창을 켜 둡니다.**

```text
Delivery API listening: http://127.0.0.1:18849/
```

실행 중에 주기적으로 감시하지 않습니다. 자동 연결을 사용하면 매번 완료 JSON을 받거나 `api:register`를 실행할 필요 없습니다. 수동 등록이 필요한 경우에만 [서버 상세 안내](docs/SERVER.md)를 따릅니다.

### ④ 테스트 웹페이지 실행

API 창을 유지한 채 **`examples/test-server.cmd`**를 실행합니다. 브라우저에 `http://127.0.0.1:5183/`이 열립니다. 테스트 서버 창도 켜 둡니다.

### ⑤ 화면에서 모델 열기

화면의 **청크 위치 → 원격 저장소**를 선택합니다. **같은 SDK의 원격 설정에서 API 주소·scope·토큰을 자동 입력**합니다. 원격 청크를 읽는 API도 같은 PC에서 실행하면 기본 주소는 `http://127.0.0.1:18849/`입니다.

| 화면 입력란 | 입력할 값 |
|---|---|
| 조회 API 주소 | 원격 설정에서 자동 입력. 기본 `http://127.0.0.1:18849/` |
| API 토큰 | 원격 설정의 dataDirectory 안 `.api-token`에서 자동 입력 |
| 게시 구역(scope) | 원격 설정에서 자동 입력. 에디터에서 게시한 값과 같아야 함 |

**목록 조회 → 통합레벨 선택 → 게시본 열기**를 누릅니다. 토큰이 비어 있으면 API 실행 후 **목록 조회**를 다시 누르세요. S3 접속 키는 서버에서만 사용합니다. 큰 모델의 다운로드 진행 상태가 표시되고 **로딩 취소**로 중단할 수 있습니다.

화면의 청크 위치 선택은 실행 방법과 토큰 위치를 안내합니다. 실제 저장소는 먼저 실행한 `local-server.cmd` 또는 `remote-server.cmd`의 설정으로 결정됩니다. 방식을 바꾸려면 API를 종료하고 해당 CMD를 실행한 뒤 화면에서도 같은 위치를 선택하세요. 선택을 바꾸면 이전 목록·화면·토큰은 지워집니다.

자동 입력은 **같은 PC의 테스트 서버와 API**에서만 동작합니다. 다른 PC의 API를 사용할 때는 운영자가 제공한 API 주소·scope·토큰을 직접 입력합니다. 자동 입력된 토큰은 API 주소를 수정하면 지워집니다. 기본 `127.0.0.1`은 같은 PC에서만 접속하는 주소입니다. 외부 접속·HTTPS·조직 로그인은 [서버 운영 안내](docs/SERVER.md)를 따릅니다.

<a id="project"></a>
## 4. 기존 웹프로젝트에 SDK 연결

로컬 또는 원격 테스트 화면에서 모델 표시를 확인한 뒤, **외부 웹프로젝트 루트**에서 SDK를 설치합니다.

```sh
pnpm add "https://github.com/jonemos/DTWebEditor_SDK.git#v0.2.13"
```

API 서버는 계속 별도 프로세스로 실행합니다. 이미 실행 중인 API를 사용한다면 웹프로젝트에서 API 설정을 다시 만들 필요 없습니다.

기존 프로젝트 안에서 API까지 운영하려는 개발자는 **API 실행 프로젝트 루트**에서 다음 순서로 진행합니다.

| 방식 | 실행 순서 |
|---|---|
| 로컬 API | `pnpm exec dt-delivery-api local` → 청크 폴더 입력. init 생략 |
| 원격 API | 설정 파일이 없는 실행 폴더에서 `pnpm exec dt-delivery-api init` → 실제 저장소·ID·키 준비 → `pnpm exec dt-delivery-api start` |

init은 설정 파일을 만드는 명령이며 `completed-job.json`을 만들지 않습니다. 기존 파일이 있으면 덮어쓰지 않습니다. 자세한 설정은 [서버 안내](docs/SERVER.md)를 따르세요.

### 페이지에 모델 표시

먼저 표시 영역을 만듭니다. canvas와 부모에 실제 크기가 있어야 합니다.

```html
<div style="width:100%; height:600px">
  <canvas id="model-view" style="width:100%; height:100%"></canvas>
</div>
```

다음 함수에 API 주소·scope·통합레벨 ID·API 토큰을 공급하면 모델을 엽니다.

```ts
import { DeliveryApiClient, ChunkReader, DeliveryViewer } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export async function openModel(
  canvas: HTMLCanvasElement,
  apiURL: string,
  scope: string,
  compositionId: string,
  getToken: () => Promise<string>,
) {
  const api = new DeliveryApiClient(new URL(apiURL), async () => `Bearer ${await getToken()}`);
  const { releaseHash } = await api.publication(scope, compositionId);
  if (!releaseHash) throw new Error('모델을 조회할 수 없습니다.');
  const viewer = new DeliveryViewer(canvas, new ChunkReader(api.provider(scope, compositionId, releaseHash)));
  try {
    await viewer.open(releaseHash);
  } catch (error) {
    await viewer.dispose();
    throw error;
  }
  return () => viewer.dispose();
}
```

canvas 생성 후 `openModel`을 호출합니다. `compositionId`는 `api.compositions(scope)`로 조회한 모델의 ID를 사용하고, `getToken`은 입력받거나 로그인에서 제공받은 API 토큰을 반환합니다. 반환된 정리 함수는 페이지 종료·로그아웃·컴포넌트 해제 때 호출하세요. 완성된 화면 코드는 [examples/web/main.ts](examples/web/main.ts)에 있습니다.

### 자주 사용하는 API

| SDK 호출 | 용도 |
|---|---|
| `api.compositions(scope, page)` | 모델 목록 조회. 첫 페이지는 0 |
| `api.publication(scope, compositionId)` | 현재 모델 버전 조회 |
| `api.releases(scope, compositionId)` | 검증된 이전 버전 목록 조회 |
| `api.actors(scope, compositionId, releaseHash, query, page)` | 액터·컴포넌트 검색 |
| `api.provider(scope, compositionId, releaseHash)` | 인증된 청크 다운로드 연결 |
| `viewer.open(releaseHash)` / `viewer.dispose()` | 모델 열기 / 화면 자원 정리 |

HTTP로 직접 호출할 때는 `Authorization: Bearer <API 토큰>`을 사용합니다. 예를 들어 모델 목록은 `GET /api/scopes/<scope>/compositions?page=0`입니다. 전체 HTTP 경로와 애드온 제어는 [API 상세 문서](docs/API.md)에 있습니다. 청크 다운로드와 hash 검증은 `ChunkReader`를 사용합니다.

<a id="updates"></a>
## 5. 변경된 모델 반영

**청크 내용만 바뀌면 SDK를 다시 설치하거나 Git에 커밋할 필요 없습니다.**

| 사용 방식 | 제작자가 할 일 | API·화면 담당자가 할 일 |
|---|---|---|
| 로컬 | 원본·통합레벨 저장 → 같은 청크 폴더에 변경분 저장 | API 창에서 Ctrl+C → local-server.cmd 재실행·Enter → 목록 조회·게시본 다시 열기 |
| 원격 | 원본·통합레벨 저장 → 변경 청크 업로드·게시 완료 | API 창에서 Ctrl+C → remote-server.cmd 재실행 → 목록 조회·게시본 다시 열기 |

청크 제작·업로드가 내용의 hash를 비교해 기존 청크를 재사용하고 변경된 청크를 추가합니다. API는 **시작할 때** 변경 상태를 확인·검증합니다. 이미 열린 화면은 이전 버전을 보고 있으므로 모델을 다시 열어야 합니다. 원격 자동 연결에서는 완료 JSON을 매번 전달하지 않습니다.

SDK/API 기능이나 버그 수정이 있을 때만 [SDK 업데이트 안내](docs/UPDATING.md)에 따라 새 버전을 설치합니다. SDK 배포와 청크 준비 순서는 서로 독립적이며, 처음 화면을 열 때 SDK·청크·API 설정이 모두 준비되어 있어야 합니다.

<a id="troubleshooting"></a>
## 6. 문제가 생겼을 때

| 증상 | 확인 방법 |
|---|---|
| 로컬 폴더가 거부됨 | delivery-head.json·objects·releases를 포함한 상위 폴더인지, 읽기 권한이 있는지 확인 |
| 일반 청크에 receipts가 없음 | 정상입니다. 일반 청크 폴더를 직접 사용하세요 |
| API 연결 실패 | API 창에 Delivery API listening이 나왔는지, 주소·포트가 맞는지 확인 |
| 포트18849 또는5183이 이미 사용 중 | 이전 API/테스트 서버 창에서 Ctrl+C로 종료한 뒤 다시 실행 |
| 원격 목록이 비어 있음 | 실제 s3-profiles.json·scope·compositionIds·게시 완료 여부·시작 로그 확인 |
| 401 | API 토큰 파일의 내용 또는 운영자가 제공한 토큰 확인 |
| 403 | API의 origin과 실제 웹페이지 주소, scope/권한 확인 |
| 새 모델 내용이 보이지 않음 | 저장/게시 완료 → API 재시작 → 목록 조회·모델 다시 열기 |
| 화면이 비어 있음 | canvas 크기와 브라우저 로딩 오류 확인 |

API 주소는 기본 `http://127.0.0.1:18849/`, 웹 origin은 `http://127.0.0.1:5183`입니다. **API 주소는 끝에 `/`를 붙이고, config의 origin에는 붙이지 않습니다.** `localhost`와 `127.0.0.1`도 서로 다른 origin이므로 안내된 주소를 사용하세요.

API와 테스트 서버는 각각의 창에서 Ctrl+C로 종료합니다. 창을 닫으면 해당 서버도 사용할 수 없습니다.

## 7. 더 자세한 안내

- [API 서버 설정·다른 PC·운영 로그인·수동 등록](docs/SERVER.md)
- [SDK·HTTP·애드온 API](docs/API.md)
- [테스트 웹페이지](examples/web/README.md)
- [SDK 업데이트](docs/UPDATING.md)
- [제작자의 SDK GitHub 배포](docs/GITHUB_DESKTOP.md)

MIT 라이선스입니다. 포함된 제3자 라이선스는 [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt)에 있습니다. 사용자 모델과 실제 접속 키는 이 공개 SDK와 별도로 관리합니다.
