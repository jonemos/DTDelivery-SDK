# API 서버 시작하기

## 1. 준비

SDK는 웹페이지에서 3D를 표시하고 API 서버는 S3 또는 로컬 게시 저장소에서 목록과 청크를 제공합니다. 둘 다 같은 패키지에 들어 있지만 서버는 별도 Node 프로세스로 실행합니다. Node.js 24.16 이상, pnpm을 사용하세요. 에디터 설치나 소스 빌드는 필요하지 않습니다.

Windows의 SDK clone/ZIP 사본에서는 루트의 `local-server.cmd`(폴더만 입력) 또는 `remote-server.cmd`(질문 없이 루트 `delivery-api.config.json` 사용)를 실행합니다. `examples/test-server.cmd`가 테스트 웹 서버와 브라우저를 엽니다. 로컬 설정은 별도 `delivery-api.local.config.json`과 `delivery-data-local`에 저장되어 원격 설정을 바꾸지 않습니다. 접속 키는 질문하거나 수정하지 않습니다. [CMD 실행 안내](../README.md#windows에서-cmd로-실행하기).

clone/ZIP에는 공개 원격 설정 파일2개가 이미 있어 init을 생략합니다. 실제 S3 설정·통합레벨 ID는 배포 담당자가 준비하며 키는 기존 `.env`/환경변수에서 공급합니다. 공개 배포의 주소는 예제값입니다. 기존 프로젝트에 의존성으로 설치했으면 프로젝트 루트에서 `pnpm exec dt-delivery-api …`를 사용합니다. 아래 init 절은 **기존 프로젝트 기준**입니다.

## 2. 설정 파일 만들기

```sh
pnpm exec dt-delivery-api init
```

현재 폴더에 세 파일이 생깁니다. 기존 파일이 하나라도 있으면 덮어쓰지 않습니다.

SDK0.2.5부터 실제 통합레벨 ID를 config의 `compositionIds`에 한 번 설정하고 start를 실행하면 서버가 시작 시 게시 상태를 확인·검증하여 자동 등록합니다. 주기 감시는 없습니다. **JSON 전달/register는 선택적인 수동 방식**입니다. init은 `completed-job.json`을 만들지 않습니다. 로컬 게시 저장소는 6절을 따릅니다.

| 파일 | 작성할 내용 |
|---|---|
| delivery-api.config.json | 화면 origin, scope, API 포트, 저장소 설정 파일 위치 |
| s3-profiles.json | 에디터와 동일한 S3 공개 configuration |
| .env | 서버의 실제 S3 키, 필요한 경우 별도의 API 인증 토큰 |

기본 origin은 `http://127.0.0.1:5183`입니다. 실제 웹페이지가 다른 주소라면 바꾸세요. origin은 도메인·포트까지 정확히 일치하며 끝에 `/`를 붙이지 않습니다. 웹페이지에 입력하는 **API 주소**는 `/`로 끝납니다. scope는 에디터에서 게시한 구역 이름입니다. `development`는 예시이므로 실제 값을 사용합니다.

상대 경로는 설정 파일이 있는 폴더를 기준으로 계산합니다. 다른 설정은 `--config ./private/delivery-api.config.json`으로 선택합니다. `allowWrites: false`는 모델 표시용입니다. 검토/적용·애드온 속성 변경이 필요하면 권한을 확인하고 true로 바꿉니다. 기본 인증은 한 scope의 공유 토큰이며 사용자별 로그인은 7절로 연결합니다.

## 3. S3 저장소 연결

`s3-profiles.json`에 에디터와 **동일한 공개 configuration**을 넣으세요. 화면에서 저장한 연결의 이름은 보통 `<버킷> · <저장소 host:port>`, 환경변수 접두사는 `DT_DELIVERY_REMOTE`입니다. scope뿐 아니라 이름·주소·버킷·region·접두사·HTTP/조건부 쓰기 설정까지 프로필 ID에 포함됩니다.

에디터의 OS 암호화 키 파일 전체를 전달하지 않습니다. configuration 부분만 복사하고 서버용 읽기 키는 따로 공급합니다. 예제의 `conditionalWritesVerified: false`는 미검증 값입니다. 실제 에디터의 **연결 확인 및 저장**에 성공한 configuration을 복사하면 확인된 값도 그대로 가져옵니다. 단순히 false를 true로 바꿔 검증을 대신하지 않습니다.

`.env`의 `DT_DELIVERY_REMOTE_ACCESS_KEY_ID`, `DT_DELIVERY_REMOTE_SECRET_ACCESS_KEY`에 실제 서버용 저장소 키를 작성합니다. 임시 인증은 `DT_DELIVERY_REMOTE_SESSION_TOKEN`도 사용합니다. 기존 운영자 프로필의 다른 접두사를 유지하면 그 접두사의 환경변수 이름을 사용합니다. 등록/조회는 GET/HEAD만 사용하며 저장소에 모델을 업로드·삭제하지 않습니다.

## 4. 시작 시 게시본 자동 등록

최신 에디터 **청크 제작 및 업로드 → 원격 저장소 → API 연결용 통합레벨 ID**에서 실제 ID를 복사합니다. `delivery-api.config.json`의 `compositionIds: []` 안에 큰따옴표로 감싸 넣습니다. 여러 ID는 쉼표로 구분하며 최대256개입니다. 같은 통합레벨의 재업로드에서는 ID가 유지됩니다. 기존에 JSON으로 등록한 레벨도 기존 catalog의 ID로 함께 확인합니다.

API는 시작할 때 정확한 저장소·scope·ID의 `delivery-head.json`을 읽고 새 게시 버전이면 전체 참조 파일/hash·레벨 ID를 검증합니다. 검증 후 현재 head를 다시 확인하고 catalog를 원자적으로 갱신합니다. 업로드 중인 청크만으로는 게시로 처리하지 않습니다. 잘못된 새 게시본/누락/손상/접속 실패면 이전 검증된 게시본을 유지하며 시작 로그의 실패 ID/코드를 확인합니다.

기존 catalog와 업무 DB·API 토큰은 유지합니다. 과거 게시본도 보존하며 과거 버전으로 게시 상태를 되돌렸을 때 그 검증된 버전을 다시 선택할 수 있습니다. 버전이 같으면 작은 head 파일만 읽고 전체 청크를 다시 검증하지 않습니다. 버킷 목록 조회 없이 설정·기존 catalog의 ID만 확인하므로 새 통합레벨은 ID를 추가해야 합니다. 새 ID를 원격 데이터가 임의로 지정하지 못합니다.

### 선택 사항: 게시 완료 JSON으로 수동 등록

제작자는 최신 에디터의 **청크 제작 및 업로드 → 원격 저장소 → 업로드 및 게시**에서 게시 완료를 확인한 뒤 **작업 이력 → 해당 게시 완료 작업 → 게시 완료 JSON 받기**로 실제 파일을 받습니다. 이 기능이 없는 기존 에디터는 최신 앱으로 업데이트하거나 해당 앱 채널의 `delivery-publication/jobs/`에 있는 실제 published 작업 파일을 전달합니다. 실패하거나 진행 중인 작업은 등록할 수 없습니다. 파일 속 `compositionId`가 통합레벨의 연결 ID입니다.

API 운영자는 전달받은 파일을 서버 실행 폴더에 `completed-job.json`으로 두고 실제 S3 설정과 읽기 키를 작성합니다. PowerShell의 `Test-Path ./completed-job.json`이 True인지 확인한 후 실행하세요. 다른 경로에 받았다면 `--job`에 실제 파일 경로를 지정합니다. 파일을 직접 만들거나 청크 폴더를 지정하지 않습니다.

```sh
pnpm exec dt-delivery-api register --job ./completed-job.json
```

수동 명령은 published 상태, 정확한 프로필, release hash, 통합레벨 ID, 전체 파일 참조·hash와 현재 저장소 head를 확인한 뒤 `delivery-data/catalog.json`을 원자적으로 갱신합니다. 실패하면 기존 목록을 유지합니다. 대형 레벨의 전체 파일 검증에는 시간이 걸릴 수 있습니다. 같은 게시본은 중복 등록하지 않습니다. 이 선택적인 수동 등록은 실행 중 API에서도 목록에 반영됩니다.

등록은 운영자의 CLI 명령입니다. 브라우저에서 임의 job/hash를 등록하는 HTTP 기능은 제공하지 않습니다. 동시 등록은 거부하므로 한 번에 하나씩 실행하세요. 강제 종료 후 catalog.lock이 남으면 다른 등록 프로세스가 없는지 확인하고 그 잠금 파일만 제거한 후 재시도합니다.

## 5. API와 화면 실행

```sh
pnpm exec dt-delivery-api start
```

기본 API는 `http://127.0.0.1:18849/`입니다. 실행 창을 유지하세요. 로컬 API 토큰은 `delivery-data/.api-token`에서 확인해 화면에 입력합니다. API 토큰은 S3 키와 별개이며 로그에 출력하지 않습니다. 종료는 Ctrl+C입니다.

원격 저장소는 시작 시 검증이 끝난 뒤 `Delivery API listening`을 표시합니다. **실행 중에 새 게시본을 주기적으로 확인하지 않습니다.** 청크를 재업로드하고 게시 완료를 확인하면 API를 Ctrl+C로 종료한 뒤 같은 start 명령을 다시 실행합니다. JSON 수령·수동 register·SDK 갱신 없이 새 게시본을 검증·반영합니다. 그 후 화면의 목록 갱신·게시본 다시 열기를 진행합니다. 승인/업무 적용 버전은 기존 계약대로 별도 관리합니다.

SDK 저장소의 별도 터미널에서 `examples/web`으로 이동한 후:

```sh
pnpm --ignore-workspace install --ignore-scripts
pnpm dev -- --port 5183
```

`http://127.0.0.1:5183/`에서 API 주소·토큰·scope 입력 → 목록 조회 → 통합레벨 선택 → 게시본 열기를 누릅니다. 목록이 비면 scope/등록, 401은 API 토큰, 403은 origin/권한, 연결 오류는 프로세스·주소·네트워크를 확인하세요. profile 불일치는 공개 configuration의 모든 필드가 에디터와 같은지 확인합니다.

실제 설정·.env·완료 작업·delivery-data는 외부 프로젝트의 .gitignore에 추가하세요. 공개 SDK 폴더에는 이 개인 설정을 만들지 않고 별도 개발용 사본에서 실행합니다.

## 6. 로컬 저장소 / 다른 PC

같은 PC의 로컬 시험은 config의 s3Profiles를 null로, localStore를 에디터에 등록한 **로컬 게시 저장소** 폴더로 바꿉니다. scope도 일치해야 합니다. 청크 출력 폴더와 게시 저장소는 다릅니다. 로컬 게시본은 검증된 receipt를 사용하므로 register 명령이 필요하지 않습니다.

다른 PC에서는 그 PC가 접근할 수 있는 서버에서 실행하세요. 기본 127.0.0.1은 같은 PC만 접속합니다. 권장 구성은 API 앞에 HTTPS 역방향 프록시를 두고 HTTP와 애드온 WebSocket을 함께 전달하는 것입니다. origin은 실제 웹페이지 주소로 설정합니다. host를 외부 수신 주소로 지정하면 `DT_DELIVERY_API_TOKEN`을 별도로 설정해야 합니다(32–512자의 영문·숫자·`.`·`_`·`~`·`-`). HTTPS/WSS·조직 로그인·방화벽은 외부 프로젝트 운영 환경에 맞게 배치합니다.

## 7. 기존 서버의 로그인 연결

Node 전용 타입/구현은 브라우저 entry point와 분리되어 있습니다.

```ts
import { loadDeliveryApiConfiguration, startDeliveryApi } from '@dt/delivery-sdk/server';

const config = await loadDeliveryApiConfiguration('./private/delivery-api.config.json');
const host = await startDeliveryApi(config, {
  authorize: async request => organizationLogin(request),
});
// On server shutdown: await host.close();
```

organizationLogin은 외부 프로젝트가 제공하는 함수입니다. 실패면 null, 성공이면 `{ subject, scopes, canReview, canApply }`를 반환합니다. 기존 HTTP 라우터에 직접 붙일 때는 같은 Node entry의 CollaborationApi/저장소 adapter와 `host.api.handle(request)` 계약을 사용할 수 있습니다. 정확한 origin과 인증된 WebSocket 경계도 유지하세요.

현재 게시본 표시와 승인된 서비스 적용본은 별도 계약입니다. register 명령은 외부 업무 DB나 서비스 적용 버전을 자동 변경하지 않습니다.
