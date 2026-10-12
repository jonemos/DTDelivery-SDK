# DTWebEditor SDK · API 서버와 웹페이지 연결 안내

DTWebEditor에서 제작한 통합레벨을 외부 웹프로젝트의 3D 화면에 표시하는 패키지입니다. **브라우저 SDK, Node.js 조회 API 서버, 설정 예제, 웹 화면 예제**가 함께 들어 있습니다. 실제 모델은 에디터에서 별도 저장소에 게시합니다.

처음에는 이 README의 **1 → 2 → 3 → 4 → 5 → 6 → 7** 순서로 진행하세요. 제작자가 SDK와 청크를 준비하고, 외부 개발자가 API 서버와 페이지를 연결합니다.

## 전체 연결 구조

```text
제작자: DTWebEditor → 청크 제작·업로드 → 외부 프로젝트의 S3 호환 저장소
                                                      ↓
개발자: 외부 웹페이지 ← 브라우저 SDK ← Node.js 조회 API 서버

GitHub 저장소 → SDK + API 서버 + 실행 안내 다운로드
```

| 구성 | 역할 |
|---|---|
| GitHub SDK 저장소 | SDK 코드와 API 서버 배포 |
| S3 호환 저장소 | 실제 레벨·모델·재질·청크 보관 |
| API 서버 | 인증, 게시 모델 목록, 청크 다운로드, 외부 제어 제공 |
| 외부 웹페이지 | SDK로 모델을 불러와 3D 화면 표시 |

**저장소 주소와 API 주소는 서로 다릅니다.** 웹페이지에는 조회 API 주소와 API 인증 정보를 사용합니다.

## 준비물과 용어

- Node.js **24.16 이상**, pnpm, Git
- S3 호환 저장소의 주소·버킷·읽기 권한
- 에디터에서 게시 완료한 통합레벨과 완료 작업 JSON

| 값 | 의미 |
|---|---|
| `scope` | 에디터와 API 서버가 함께 사용하는 게시 구역 이름 |
| `compositionId` | 통합레벨의 UUID. 표시 이름 대신 이 ID로 연결 |
| `releaseHash` | 모델의 특정 게시 버전. SDK/API에서 조회 |
| `origin` | 외부 웹페이지의 주소. 도메인과 포트까지 일치해야 함 |
| S3 Access/Secret Key | 에디터·서버에서 저장소 접근에 사용 |
| API 토큰 | 웹페이지에서 조회 API 인증에 사용 |

S3 키와 API 토큰은 별개입니다. 실제 키·설정·모델·API 토큰을 이 공개 저장소나 웹페이지 소스에 넣지 않습니다.

## 1. 제작자 — SDK 버전을 공개 Git에 반영

에디터의 **SDK → 버전 관리**에서 기존 SDK 전용 저장소를 연결한 뒤 **업데이트 검사 → 업데이트 커밋 → Git에 업데이트(Push)**를 진행합니다. GitHub Desktop의 Push origin도 사용할 수 있습니다.

GitHub의 Tags에서 사용할 버전이 올라왔는지 확인하고 그 버전을 개발자에게 전달하세요. 아래 설치 명령은 `v0.2.3` 태그 기준입니다. 버전 고정에는 실제 태그 또는 commit을 사용합니다. 자세한 방법은 [GitHub Desktop 안내](docs/GITHUB_DESKTOP.md)를 참고하세요.

## 2. 제작자 — 청크를 업로드하고 완료 정보를 전달

1. 변경한 원본 레벨을 저장합니다.
2. 통합레벨을 열고 필요한 원본 참조를 최신 저장 버전으로 갱신한 뒤 저장합니다.
3. 이름 옆 **청크 제작 및 업로드 → 원격 저장소**를 엽니다.
4. 저장소 주소·버킷·scope·업로드 키를 입력하고 **연결 확인 및 저장**을 누릅니다.
5. **업로드 및 게시**를 누르고 **게시 완료**를 확인합니다.

개발자에게 아래 자료를 전달하세요.

- SDK Git 주소와 사용할 버전
- 에디터 연결의 **공개 configuration**: 저장소 주소·버킷·scope·region·프로필 이름·환경변수 접두사·HTTP/조건부 쓰기 설정
- 실제 **게시 완료 작업 JSON**: `compositionId`, 게시 버전, 프로필 연결 정보 포함

완료 JSON은 에디터 앱 채널의 `delivery-publication/jobs/` 아래에 있습니다. 예제의 `completed-job.json`은 전달받은 실제 파일을 가리킵니다. API 서버의 저장소 읽기 키는 운영 환경에 별도로 설정합니다. OS 암호화된 에디터 키 파일 전체를 복사하지 않습니다.

## 3. 개발자 — SDK와 API 서버 다운로드

### 먼저 제공 화면 예제로 확인하기

에디터가 버전 관리하는 배포 폴더와 별개로 개발용 사본을 만듭니다.

```sh
git clone --branch v0.2.3 https://github.com/jonemos/DTWebEditor_SDK.git
cd DTWebEditor_SDK
pnpm --ignore-workspace install --ignore-scripts
pnpm api:init
```

### 기존 외부 프로젝트에 직접 설치하기

외부 프로젝트 루트에서:

```sh
pnpm add "https://github.com/jonemos/DTWebEditor_SDK.git#v0.2.3"
pnpm exec dt-delivery-api init
```

API 서버와 웹 화면이 서로 다른 프로젝트라면 필요한 프로젝트에 각각 SDK를 설치합니다. 이 아래의 서버 명령은 **API 서버를 실행할 프로젝트 폴더**에서 사용하세요.

| 실행할 작업 | clone한 SDK 폴더 | SDK를 설치한 기존 프로젝트 |
|---|---|---|
| 개인 설정 생성 | `pnpm api:init` | `pnpm exec dt-delivery-api init` |
| 게시본 등록 | `pnpm api:register --job ./completed-job.json` | `pnpm exec dt-delivery-api register --job ./completed-job.json` |
| API 실행 | `pnpm api:start` | `pnpm exec dt-delivery-api start` |

## 4. 개발자 — 저장소와 화면 주소 설정

init 명령이 아래 파일을 만듭니다. 이미 있는 설정은 덮어쓰지 않습니다.

| 파일 | 작성할 내용 |
|---|---|
| `delivery-api.config.json` | API 포트, 화면 origin, scope, 데이터 경로 |
| `s3-profiles.json` | 에디터와 동일한 S3 공개 configuration |
| `.env` | 서버에서 사용할 실제 S3 키와 선택적인 API 토큰 |

기본 API 설정은 다음과 같습니다. `development`는 실제 게시한 scope로 바꾸세요.

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
  "s3Profiles": "./s3-profiles.json"
}
```

`s3-profiles.json`의 공개 configuration은 에디터와 정확히 같아야 합니다. 이름·주소·버킷·scope·region·접두사·조건부 쓰기 설정을 임의로 바꾸면 프로필 ID가 달라져 등록이 거부됩니다. 에디터에서 연결 검증한 값을 사용하세요.

기본 환경변수 접두사인 `DT_DELIVERY_REMOTE`를 사용하는 경우 `.env`의 아래 빈 항목에 서버용 키를 입력합니다. 기존 운영자 프로필은 그 프로필의 접두사를 사용합니다.

```text
DT_DELIVERY_REMOTE_ACCESS_KEY_ID=
DT_DELIVERY_REMOTE_SECRET_ACCESS_KEY=
```

**웹 origin에는 끝의 `/`를 붙이지 않고, 페이지에 입력할 API 주소에는 `/`를 붙입니다.** 기본값은 같은 PC 시험용입니다. 다른 PC 접속, HTTPS/WSS, 조직 로그인과 로컬 저장소 설정은 [서버 상세 안내](docs/SERVER.md)를 따르세요.

외부 프로젝트의 `.gitignore`에 실제 설정 파일·`.env`·완료 작업 JSON·`delivery-data/`를 추가합니다. `allowWrites: false`는 모델 조회용이며 검토·적용·애드온 변경을 사용하려면 별도 권한 설정이 필요합니다.

## 5. 개발자 — 업로드한 게시본을 API 목록에 등록

기존 프로젝트에서:

```sh
pnpm exec dt-delivery-api register --job ./completed-job.json
```

clone한 SDK 폴더에서는 `pnpm api:register --job ./completed-job.json`을 사용합니다.

**청크가 저장소에 올라가도 API 목록에는 자동 등록되지 않습니다.** 이 명령은 완료 상태·프로필·통합레벨 ID·현재 게시 버전·전체 참조 파일의 hash를 확인한 후 목록에 등록합니다. 실패하면 기존 목록을 유지합니다.

## 6. 개발자 — API 서버 실행

기존 프로젝트에서:

```sh
pnpm exec dt-delivery-api start
```

clone한 SDK 폴더에서는 `pnpm api:start`를 사용합니다. 실행 창을 유지하고 종료할 때 Ctrl+C를 누릅니다.

- 기본 조회 API 주소: `http://127.0.0.1:18849/`
- 기본 로컬 API 토큰 파일: `delivery-data/.api-token`

토큰 파일을 열어 로컬 화면 예제에 입력합니다. 토큰 값은 서버 로그에 출력되지 않습니다. 직접 외부 주소에서 수신하도록 host를 지정하면 서버의 `DT_DELIVERY_API_TOKEN`도 별도로 설정해야 합니다. 실제 서비스는 조직 로그인·허용 origin·HTTPS/WSS를 연결하세요. **SDK 설치와 API 서버 실행은 별도 단계입니다.**

## 7. 개발자 — 제공 화면 예제 열기

clone한 SDK의 **별도 터미널**에서:

```sh
cd examples/web
pnpm --ignore-workspace install --ignore-scripts
pnpm dev -- --port 5183
```

브라우저에서 `http://127.0.0.1:5183/`를 엽니다.

1. 조회 API 주소를 입력합니다. 같은 PC 기본값은 `http://127.0.0.1:18849/`입니다.
2. **API 토큰**과 에디터에서 사용한 **scope**를 입력합니다.
3. **목록 조회 → 통합레벨 선택 → 게시본 열기**를 누릅니다.

여기서 실제 모델이 보이면 같은 SDK 연결을 기존 프로젝트의 원하는 페이지에 넣으면 됩니다. 다른 PC의 API를 사용하면 그 PC에서 접근 가능한 실제 API 주소를 입력하세요.

## 8. 기존 웹페이지에 3D 화면 넣기

SDK가 설치된 웹프로젝트에서 화면 영역을 만듭니다. canvas와 부모에 실제 크기가 있어야 합니다.

```html
<div style="width:100%; height:600px">
  <canvas id="model-view" style="width:100%; height:100%"></canvas>
</div>
```

아래 함수의 주소·scope·통합레벨 ID·로그인 토큰은 외부 프로젝트에서 공급합니다.

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
  const api = new DeliveryApiClient(
    new URL(apiURL),
    async () => `Bearer ${await getToken()}`,
  );
  const { releaseHash } = await api.publication(scope, compositionId);
  if (!releaseHash) throw new Error('게시된 모델이 없습니다.');

  const viewer = new DeliveryViewer(
    canvas,
    new ChunkReader(api.provider(scope, compositionId, releaseHash)),
  );
  try {
    await viewer.open(releaseHash);
  } catch (error) {
    await viewer.dispose();
    throw error;
  }
  return () => viewer.dispose();
}
```

페이지의 canvas 생성 후 openModel을 호출하고, 반환된 정리 함수는 페이지 종료·로그아웃·React 컴포넌트 해제 때 호출합니다. 브라우저 import는 API 서버 코드를 로드하지 않습니다. Node 서버를 기존 인증에 연결하려면 `@dt/delivery-sdk/server`와 [서버 안내](docs/SERVER.md)를 사용합니다. Python/C#은 HTTP API를 호출할 수 있고 3D 표시는 브라우저/WebView를 사용합니다.

## 주요 API 사용 정보

모든 HTTP 요청은 `Authorization: Bearer <API 토큰>`으로 인증합니다. 아래 메서드의 `api`는 위 코드의 DeliveryApiClient입니다.

| SDK 메서드 | 역할 |
|---|---|
| `api.compositions(scope, page)` | 게시된 통합레벨 목록. 첫 페이지는 0 |
| `api.publication(scope, compositionId)` | 현재 게시 버전 조회 |
| `api.releases(scope, compositionId)` | 등록된 이전 버전 목록 |
| `api.actors(scope, compositionId, releaseHash, query, page)` | 액터·배치·컴포넌트 ID 검색 |
| `api.provider(scope, compositionId, releaseHash)` | 인증된 청크 다운로드 공급자 생성 |
| `viewer.open(releaseHash)` / `viewer.dispose()` | 특정 게시본 표시 / 화면·실행 자원 정리 |

HTTP에서 직접 호출할 때는 다음 경로를 사용합니다. 아래는 origin 기준 경로이며 API가 하위 경로에 배치되면 해당 API base 아래에 연결합니다.

```text
GET /api/scopes/<scope>/compositions?page=0
GET /api/scopes/<scope>/compositions/<id>/publication
GET /api/scopes/<scope>/compositions/<id>/releases
GET /api/scopes/<scope>/compositions/<id>/releases/<hash>/actors?q=...&page=0
GET /api/delivery/<scope>/<id>/<hash>/authorize
GET /api/delivery/<scope>/<id>/<hash>/releases/<hash>.json
GET /api/delivery/<scope>/<id>/<hash>/objects/<chunkHash>
```

청크의 hash 검증과 다운로드는 ChunkReader를 사용하는 것이 편리합니다. 같은 원본의 중복 배치는 mountId로 구분합니다. 애드온 목록·속성·HTTP/WebSocket 제어는 [API 상세 문서](docs/API.md)를 참고하세요.

## 모델이 조금씩 바뀌면?

**모델 데이터가 바뀔 때마다 SDK를 업데이트할 필요는 없습니다.**

```text
제작자: 원본 저장 → 통합 참조 갱신·저장 → 청크 재업로드 → 새 완료 작업 전달
개발자: 새 완료 작업을 register로 등록 → 화면에서 목록 갱신·모델 다시 열기
```

에디터의 청크 제작·업로드 코드가 내용의 hash를 확인하여 동일한 청크는 재사용하고 새 청크를 추가합니다. 등록 후 API 서버를 재시작할 필요는 없습니다. 이미 열린 화면은 이전 releaseHash에 고정되므로 다시 열어 새 버전을 선택합니다. 검토·승인 방식 서비스는 새 게시본의 승인·적용도 별도로 진행합니다.

| 변경 내용 | 필요한 작업 |
|---|---|
| 모델·배치·재질·레벨 내용·지원되는 애드온 설정 | 청크 재업로드 → 새 게시본 등록 → 화면 다시 열기 |
| SDK/API 기능·버그 수정·지원 계약 | SDK/API 버전 갱신·검사·재배포 |

SDK 업데이트는 [업데이트 안내](docs/UPDATING.md)를 따르세요. 외부 프로젝트의 package.json과 pnpm-lock.yaml을 함께 저장하고 배포에는 `pnpm install --frozen-lockfile`을 사용합니다.

## 문제가 생겼을 때

| 증상 | 먼저 확인할 것 |
|---|---|
| 설치할 태그가 없거나 서버 명령이 없음 | GitHub의 실제 SDK 버전·태그와 설치 버전 |
| API 연결 실패 | 서버 실행 여부, API 주소, 사내망/VPN·방화벽 |
| 목록이 비어 있음 | 동일 scope 사용 여부와 완료 작업 register 여부 |
| 401 | API 토큰·로그인 상태 |
| 403 | 웹 origin과 scope/쓰기 권한 |
| 프로필 불일치 | 에디터와 서버의 공개 configuration 전체 필드 |
| 새 모델이 보이지 않음 | 새 작업 등록, 목록 갱신·게시본 재열기, 서비스 승인·적용 |
| 화면이 비거나 크기가 없음 | canvas·부모 영역의 실제 크기와 로딩 오류 |

## 패키지 구성과 참고 문서

| 위치 | 내용 |
|---|---|
| `runtime/` | 사전 빌드 브라우저 SDK와 CSS |
| `server/` | 사전 빌드 Node API, CLI, 공개 설정 예제 |
| `types/` | 브라우저·Node TypeScript 선언 |
| `examples/web/` | API를 연결해 모델을 여는 웹 화면 |
| `sdk-manifest.json` | SDK 버전·지원 계약·배포 파일 hash |

MIT 라이선스입니다. 포함된 제3자 라이선스는 [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt)에 있습니다. 이 Git에는 에디터 원본·사용자 모델·실제 설정·비밀키가 포함되지 않습니다.

- [API 서버 설정·운영 연결](docs/SERVER.md)
- [SDK/HTTP/애드온 API](docs/API.md)
- [화면 예제](examples/web/README.md)
- [GitHub Desktop 게시 방법](docs/GITHUB_DESKTOP.md)
- [SDK 업데이트](docs/UPDATING.md)
