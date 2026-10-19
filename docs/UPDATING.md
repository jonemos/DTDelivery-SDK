# SDK 업데이트·복구

`update.cmd`는 **지금 실행한 SDK 폴더를 공식 GitHub 저장소의 최신 main으로 갱신**합니다. 실행 파일·TypeScript 타입·문서·미리 빌드한 테스트 페이지를 함께 교체합니다. 모델 데이터는 제작자의 재게시로 갱신하며 별도입니다.

## 처음 받을 때: Git clone 한 번

Git이 설치된 Windows 10/11에서 쓰기 가능한 폴더를 열고 PowerShell로 실행합니다. 공개 저장소를 받는 데 GitHub 로그인은 필요 없습니다.

```powershell
git clone https://github.com/jonemos/DTDelivery-SDK.git
cd DTDelivery-SDK
.\examples\test-server.cmd
```

Chrome/Edge에서 테스트 페이지를 확인합니다. 기본 주소는 `http://127.0.0.1:5183/`입니다. 다음부터는 같은 폴더의 `examples/test-server.cmd`만 실행합니다. Node.js·pnpm·Python 설치는 필요 없습니다. 원격 모델 조회에는 해당 저장소의 네트워크 연결이 필요합니다.

## 다음부터: update.cmd 한 번

1. 해당 SDK의 테스트 서버와 개발 서버를 종료합니다. 테스트 서버 창에서 `Ctrl+C`를 누릅니다.
2. **SDK 루트의 `update.cmd`를 더블클릭**합니다. PowerShell에서 실행할 때는 받은 SDK 폴더에서 다음 명령을 입력합니다.

```powershell
.\update.cmd
```

3. `Updated SDK ...` 또는 `already up to date` 메시지를 확인합니다.
4. `examples/test-server.cmd`를 다시 실행하고 브라우저 페이지를 새로고침합니다. 페이지가 예전 화면을 유지하면 `Ctrl+F5`로 새로고침합니다.

업데이트에는 인터넷과 SDK 폴더 및 그 옆 폴더의 쓰기 권한이 필요합니다. SDK 전체 폴더와 숨김 `.git`을 유지하세요. **매번 다시 clone하거나 `git pull`을 추가로 실행하지 않습니다.**

Git 사본에서는 설치된 Git으로 검증한 정확한 커밋을 가져온 뒤 그 커밋으로 전환합니다. 이후 Git 도구가 `detached HEAD`라고 표시할 수 있으며 정상입니다. 다음 업데이트도 `update.cmd`를 사용합니다. 기존 브랜치·태그는 남기고 force push/reset/clean이나 전역 Git 설정 변경은 하지 않습니다.

Git을 쓰지 않는 PC에서는 [최신 전체 ZIP](https://github.com/jonemos/DTDelivery-SDK/archive/refs/heads/main.zip)을 풀어 시작할 수도 있습니다. ZIP 사본은 Git 없이 같은 `update.cmd`로 업데이트합니다. Git으로 받은 사본에서는 Git 설치를 유지해야 합니다.

## 업데이트되는 범위

| 사용 방식 | 업데이트 후 할 일 |
|---|---|
| clone/ZIP 폴더의 기본 테스트 페이지 | `update.cmd` → 테스트 서버 재실행 → 브라우저 새로고침 |
| 자체 웹페이지가 SDK 폴더의 정적 모듈을 직접 제공 | `update.cmd` → 필요한 서버 재실행·캐시 새로고침 → 모델 확인 |
| 외부 프로젝트에 Git 태그 패키지로 설치 | 그 프로젝트에서 새 태그를 `pnpm add`로 설치 → lockfile 반영 → 빌드·배포 |
| 외부 프로젝트에 SDK 파일을 복사해 포함 | 갱신한 SDK 사본을 프로젝트에 반영 → 빌드·배포 |

**SDK 폴더를 업데이트해도 다른 프로젝트의 node_modules나 이미 배포한 앱이 자동으로 바뀌지는 않습니다.** 외부 프로젝트에 설치하는 현재 버전은 다음과 같습니다. 이후에는 전달받은 새 릴리스 태그로 바꿉니다.

```powershell
pnpm add '@dt/delivery-sdk@github:jonemos/DTDelivery-SDK#v0.3.17'
```

## 검사·백업·복구

현재 SDK와 내려받은 파일의 크기·경로·manifest SHA-256을 검사한 뒤 교체합니다. SDK 배포 파일을 직접 수정했거나 새 SDK 경로에 다른 파일이 있으면 덮어쓰기 전에 중단합니다. 자체 앱 코드·모델·설정은 SDK 폴더 밖에 보관하세요. manifest에 등록되지 않은 모델·`.env`·설치 결과는 업데이트로 전송하거나 덮어쓰지 않습니다. SDK에 개인 파일을 추가해 커밋한 사본도 변경 전에 중단합니다.

백업과 업데이트 기록은 **SDK 폴더 옆의 `.dt-sdk-update-...` 폴더**에 있습니다. 교체 중 오류가 나면 검증한 이전 SDK로 복구합니다. 중단된 작업은 다음 `update.cmd` 실행에서 복구한 뒤 재시도합니다. 그 사이 파일이 추가로 수정됐다면 자동으로 덮어쓰지 않고 백업 경로를 안내합니다. 복구를 마칠 때까지 이 폴더를 유지하세요.

설치 파일과 최신 커밋이 같으면 다시 교체하지 않습니다. 같은 커밋의 성공 기록이 있으면 ZIP을 다시 내려받지 않습니다. 로컬 SDK보다 낮은 버전으로 자동 변경하지 않습니다.

## 문제가 생겼을 때

| 메시지·증상 | 해결 순서 |
|---|---|
| 테스트 서버를 닫으라는 안내 | 같은 SDK의 서버 창을 `Ctrl+C`로 종료한 뒤 재실행 |
| SDK file changed / tracked SDK edits | 수정한 파일을 별도로 보관하고 깨끗한 SDK 사본으로 진행. 검사 우회나 강제 덮어쓰기를 하지 않음 |
| Git을 찾을 수 없음 | Git clone 사본은 Git을 설치한 뒤 PowerShell을 다시 열기. Git을 쓸 수 없으면 새 전체 ZIP 사본 사용 |
| 다운로드·네트워크 오류 | GitHub 연결과 프록시/방화벽을 확인한 뒤 같은 명령 재실행. 현재 SDK와 백업 유지 |
| 쓰기 권한·파일 잠금 오류 | 해당 폴더를 쓰는 서버·앱을 닫고 폴더 및 옆 폴더의 쓰기 권한 확인 |
| Git 소유자·오래된 updater 오류 | 기존 SDK와 사용자 파일을 유지하고 공식 저장소를 새 폴더에 clone해 사용 |
| update.cmd가 없음 | 공식 저장소를 새 폴더에 clone하거나 최신 전체 ZIP을 받기. 이후부터 받은 update.cmd 사용 |

지원 담당자에게 SDK 버전, 실행한 명령, 오류 메시지, OS와 폴더 경로를 전달합니다. 접속 키나 비공개 모델은 공개 이슈에 첨부하지 않습니다.

## API 서버형 외부 프로젝트를 옮길 때

기존 0.2.x의 API 서버 방식은 현재 `DeliveryClient`와 `LocalChunkSource`/`HttpChunkSource` 방식으로 개발자가 전환해야 합니다. `update.cmd`가 자체 앱 코드를 변환하지 않습니다. 현재 프로젝트와 모델·설정을 보존하고, [호스트 적용 가이드](guides/17_HOST_INTEGRATION.md)와 [API 명세](API.md)에 따라 새 SDK를 별도 적용한 뒤 로드·선택·취소·종료를 확인하세요.
