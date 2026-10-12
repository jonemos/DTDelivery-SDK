# API 서버 시작하기

## 1. 준비

SDK는 웹페이지에서 3D를 표시하고 API 서버는 S3 또는 로컬 게시 저장소에서 목록과 청크를 제공합니다. 둘 다 같은 패키지에 들어 있지만 서버는 별도 Node 프로세스로 실행합니다. Node.js 24.16 이상, pnpm을 사용하세요. 에디터 설치나 소스 빌드는 필요하지 않습니다.

기존 프로젝트에 설치했으면 `pnpm exec dt-delivery-api …`, SDK 저장소를 별도 clone했으면 `pnpm api:init`, `pnpm api:register`, `pnpm api:start`를 사용합니다. 아래는 기존 프로젝트 기준입니다.

## 2. 설정 파일 만들기

```sh
pnpm exec dt-delivery-api init
```

현재 폴더에 세 파일이 생깁니다. 기존 파일이 하나라도 있으면 덮어쓰지 않습니다.

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

## 4. 게시 완료 정보 등록

에디터에서 **업로드 및 게시 → 게시 완료**를 확인합니다. 완료 작업 JSON은 앱 채널의 `delivery-publication/jobs/` 아래에 있습니다. 그 실제 파일을 API 운영자에게 전달하세요. 파일 속 `compositionId`가 통합레벨의 연결 ID입니다.

```sh
pnpm exec dt-delivery-api register --job ./completed-job.json
```

등록 명령은 published 상태, 정확한 프로필, release hash, 통합레벨 ID, 전체 파일 참조·hash와 현재 저장소 head를 확인한 뒤 `delivery-data/catalog.json`을 원자적으로 갱신합니다. 실패하면 기존 목록을 유지합니다. 대형 레벨의 전체 파일 검증에는 시간이 걸릴 수 있습니다. 같은 게시본은 중복 등록하지 않고 새 게시본 등록 후 API 재시작도 필요하지 않습니다.

등록은 운영자의 CLI 명령입니다. 브라우저에서 임의 job/hash를 등록하는 HTTP 기능은 제공하지 않습니다. 동시 등록은 거부하므로 한 번에 하나씩 실행하세요. 강제 종료 후 catalog.lock이 남으면 다른 등록 프로세스가 없는지 확인하고 그 잠금 파일만 제거한 후 재시도합니다.

## 5. API와 화면 실행

```sh
pnpm exec dt-delivery-api start
```

기본 API는 `http://127.0.0.1:18849/`입니다. 실행 창을 유지하세요. 로컬 API 토큰은 `delivery-data/.api-token`에서 확인해 화면에 입력합니다. API 토큰은 S3 키와 별개이며 로그에 출력하지 않습니다. 종료는 Ctrl+C입니다.

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
