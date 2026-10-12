# 외부 브라우저 예제

SDK 공개 저장소를 외부 개발용 폴더에 별도로 clone한 뒤 이 폴더에서 `pnpm --ignore-workspace install --ignore-scripts`, `pnpm dev -- --port 5183`를 실행합니다. SDK는 저장소 루트의 사전 빌드 패키지를 사용합니다. 앱에서 게시·버전 관리하는 SDK 폴더에 node_modules나 예제 빌드 결과를 만들지 않습니다. 필요한 경우 기존 프로젝트에는 루트 README의 Git 의존성 명령으로 설치합니다.

API 서버는 저장소 루트의 `server/`에 함께 있습니다. 먼저 루트에서 `pnpm api:init` → 설정 작성 → `pnpm api:register --job ./completed-job.json` → `pnpm api:start`를 실행하세요. [서버 안내](../../docs/SERVER.md)를 참고합니다. 기존 API가 있으면 그 주소를 사용해도 됩니다.

화면에 조회 API 주소·API 토큰·scope를 입력 → 목록 조회 → 통합레벨 선택 → 게시본 열기를 누릅니다. 기본 API는 `http://127.0.0.1:18849/`, 화면 origin은 `http://127.0.0.1:5183`입니다. S3 저장소 주소/업로드 키를 입력하는 화면이 아닙니다. 호스트 API에 이 화면의 origin을 허용해야 합니다. 사용자 모델은 별도 게시합니다. 페이지 목록은 첫 페이지이며 서비스의 전체 탐색 UI에서는 pagination을 연결합니다.

API 토큰은 입력란/메모리에만 보관하고 연결 해제/화면 종료에서 지웁니다. 운영 프로젝트에서는 조직 로그인·토큰 갱신과 권한 철회를 연결합니다.
