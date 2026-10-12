# GitHub Desktop에서 공개 SDK 저장소 만들기

1. 에디터 통합레벨의 **SDK → 버전 관리**에서 **SDK Git 폴더 만들기**를 누르고 새 폴더를 선택합니다. 검증한 SDK 파일만 들어 있는 별도 Git 저장소를 만듭니다. 에디터 프로젝트 폴더를 선택하지 않습니다.
2. GitHub Desktop의 **File → Add Local Repository**로 준비한 SDK 폴더를 추가합니다. 에디터에서 **GitHub Desktop 열기**를 사용할 수도 있습니다. Desktop이 설치되지 않았다면 SDK 폴더 열기를 사용합니다.
3. GitHub Desktop의 **Publish repository**에서 이름과 소유 계정을 확인하고 **Keep this code private**를 해제하여 Public으로 게시합니다. 에디터 원본 저장소를 Public으로 전환하지 않습니다.
4. SDK Git 폴더의 README 설치 명령을 복사한 뒤 OWNER/REPOSITORY를 실제 주소로 바꿔 사용합니다. 설치 태그는 GitHub Desktop의 **Push origin** 또는 에디터의 **Git에 업데이트 (Push)**로 올립니다. GitHub 웹사이트의 Tags에서 해당 버전을 확인합니다.
5. 이후 에디터 **SDK → 버전 관리**에서 새 버전과 변경 설명 입력 → **업데이트 검사** → 변경 목록 확인 → **업데이트 커밋**을 누릅니다. 새 커밋과 버전 태그가 SDK 저장소에 만들어집니다.
6. GitHub Desktop에서 **Push origin**을 누르거나, Git 인증이 설정된 PC에서는 에디터의 **Git에 업데이트 (Push)**를 사용합니다. 저장소 주소와 버전을 확인한 뒤 전송합니다. 기존 태그를 덮어쓰거나 force push하지 않습니다.

GitHub Desktop에서 새로 만든 원격 주소는 origin 설정으로 에디터에 표시됩니다. 에디터는 GitHub 토큰을 입력받거나 보관하지 않습니다. CLI Git 인증이 없는 경우 GitHub Desktop에서 Push origin을 사용합니다.

SDK 저장소에 다른 프로젝트나 키/모델 파일을 추가하면 게시 검사가 실패합니다. 이 폴더는 앱이 생성한 사전 빌드 배포본입니다. 파일을 직접 수정하면 manifest 해시가 달라져 앱의 연결·업데이트 검사가 실패합니다. SDK 기능 수정은 원본 프로젝트에서 빌드한 새 앱을 사용합니다. 수정한 배포본을 보관해야 한다면 별도 사본으로 보관하고 SDK 메뉴에서 새 폴더를 만듭니다. 모델 게시와 Git SDK 업데이트는 각각 별도 작업입니다.

공식 안내: https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-an-existing-project-to-github-using-github-desktop
