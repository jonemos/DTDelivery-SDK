# API 서버 없는 테스트 페이지

0.3.3에서는 왼쪽 **기능별 예제**에서 항목을 선택해 입력값을 지정하고 **실행**합니다. 오른쪽에는 실제 함수 코드·입력값·반환 결과를 표시합니다. **상세 보기/닫기**로 기존 상세 패널을 다시 볼 수 있습니다. **정지 · 복원**은 진행 요청·구독을 정지하고 복원 가능한 선택/카메라/표시만 복원합니다. 텍스처·스크립트 변경은 적용 상태로 유지합니다. [예제 목록과 코드 구조](../../docs/guides/16_FEATURE_PLAYGROUND.md)를 확인하세요.

외부 프로젝트에서 필요한 기능만 구현하려면 [기능별 개발 가이드](../../docs/guides/README.md)를 읽으세요. [전체 화면 구성](../../docs/guides/14_PAGE_LAYOUT.md)은 이 예제의 DOM·필드·버튼과 SDK 호출을 대응시켜 설명합니다.

0.3.2의 상단 첫 줄은 로고·실제 상태 메시지, 둘째 줄은 연결 필드·모델 선택·버튼입니다. 연결 설명은 **연결 안내**를 펼쳐 확인합니다. 좌측은 검색/액터 목록, 우측은 로드 진행/선택 액터/스크립트 공개 속성을 표시하며 기존 뷰포트·메뉴는 유지합니다.

SDK0.3.4 전체 배포본에서 `examples/test-server.cmd`를 실행하세요. **Node.js·pnpm 설치나 인터넷 다운로드 없이** Windows 기본 PowerShell로 `examples/standalone`의 미리 빌드한 페이지를 제공합니다. `http://127.0.0.1:5183/`에서 Chrome/Edge의 **청크 폴더 선택 → 통합레벨 선택 → 게시본 열기**를 사용합니다. 공개 페이지 해시 불일치·누락은 서버 시작 전에 거부합니다. API CMD·주소·토큰·설정 파일은 없습니다.

0.3.5부터 SDK 루트의 `update.cmd`로 업데이트할 수 있습니다. 서버를 먼저 종료하고, 완료 후 이 테스트 서버를 다시 실행하세요. 업데이트 기능도 Node.js·pnpm을 설치하지 않습니다. Git 사본은 Git, ZIP 사본은 Windows 기본 PowerShell을 사용합니다.

폴더는 일반 청크 루트 또는 로컬 게시 저장소입니다. 게시 저장소는 scope를 실제 게시 구역과 맞춥니다. 폴더 선택은 사용자의 클릭과 읽기 권한이 필요하며 이 페이지는 원본을 수정하지 않습니다. 목록은 head/manifest를 검증하고 로드는 각 파일/hash를 검증합니다.

정적 청크 주소 모드는 한 일반 청크 폴더를 HTTP/HTTPS 파일로 제공할 때 사용합니다. 이 예제는 비공개 S3 로그인/버킷 목록 검색을 구현하지 않습니다. CORS·HTTPS·브라우저 네트워크 권한을 확인하세요.

뷰포트의 점진 로딩·Actor 선택·표시/텍스처 옵션을 제공하고 배칭은 기본 꺼짐입니다. 준비된 스크립트의 공개 속성을 우측에서 실행 중 변경할 수 있습니다. readonly 또는 영구 저장 전용 속성은 편집하지 않습니다. 함수 호출은 `main.ts`와 [API 명세](../../docs/API.md)를 참고하세요.

소스 개발은 Node.js24.16 이상·pnpm11.9.0을 설치하고 `examples/dev-server.cmd`를 실행합니다. 수동 개발 실행(`examples/web`에서):

```powershell
pnpm install --ignore-scripts
pnpm update @dt/delivery-sdk --no-save --ignore-scripts
node ../detach-sdk.mjs
pnpm exec vite --host 127.0.0.1 --port 5183 --strictPort
```

개발 빌드는 `pnpm build`입니다. 이 결과는 `web/dist`에 생성되며 기본 테스트 서버의 `examples/standalone`과 별개입니다. 공식 SDK 빌드는 같은 예제 소스를 미리 컴파일해 manifest에 포함합니다. 서버는 웹페이지 파일만 제공하며 로컬 SDK 읽기용 API나 token 자동 입력 endpoint가 없습니다. 페이지를 없앨 때 SDK dispose와 모든 listener 해제를 호출합니다.
