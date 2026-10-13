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

## 8. 개발자가 기존 웹프로젝트에 연결하기

테스트 페이지에서 모델을 확인한 뒤 **기존 웹프로젝트 폴더**에서 설치합니다. 아래 명령은 버전 태그를 지정하여 설치합니다. 이전 버전 태그는 그대로 보존합니다.

```powershell
pnpm.cmd add "https://github.com/jonemos/DTWebEditor_SDK.git#v0.2.22"
```

API 서버는 웹프로젝트와 별도로 계속 실행합니다. 연결 코드·액터 조회·선택·텍스처·배칭 API는 [SDK API 안내](docs/API.md), 실행 가능한 전체 화면 코드는 [예제 코드](examples/web/main.ts)를 참고하세요. 자체 페이지의 모델 표시 영역에는 실제 너비와 높이가 있어야 합니다.

이 SDK는 점진 로딩과 원래 액터 선택을 유지합니다. 0.2.22에는 셀 재진입 시 그리기 순서를 유지하는 수정과 기존 예제 설치 의존성 갱신이 포함됩니다. 배칭의 기본값은 꺼짐입니다. 성능이나 픽셀 일치 여부는 모델·브라우저·GPU에 따라 직접 검증하세요.

추가 문서: [서버 설정](docs/SERVER.md) · [예제 상세 안내](examples/web/README.md) · [SDK 업데이트](docs/UPDATING.md) · [SDK Git 배포](docs/GITHUB_DESKTOP.md)

MIT 라이선스입니다. 제3자 라이선스는 [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt)에 있습니다.
