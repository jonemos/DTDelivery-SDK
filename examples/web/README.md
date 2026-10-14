# API 서버 없는 테스트 페이지

외부 프로젝트에서 필요한 기능만 구현하려면 [기능별 개발 가이드](../../docs/guides/README.md)를 읽으세요. [전체 화면 구성](../../docs/guides/14_PAGE_LAYOUT.md)은 이 예제의 DOM·필드·버튼과 SDK 호출을 대응시켜 설명합니다.

0.3.2의 상단 첫 줄은 로고·실제 상태 메시지, 둘째 줄은 연결 필드·모델 선택·버튼입니다. 연결 설명은 **연결 안내**를 펼쳐 확인합니다. 좌측은 검색/액터 목록, 우측은 로드 진행/선택 액터/스크립트 공개 속성을 표시하며 기존 뷰포트·메뉴는 유지합니다.

루트 README의 설치 안내를 따른 뒤 `examples/test-server.cmd`를 실행하세요. `http://127.0.0.1:5183/`에서 Chrome/Edge의 **청크 폴더 선택 → 통합레벨 선택 → 게시본 열기**를 사용합니다. API CMD·주소·토큰·설정 파일은 없습니다.

폴더는 일반 청크 루트 또는 로컬 게시 저장소입니다. 게시 저장소는 scope를 실제 게시 구역과 맞춥니다. 폴더 선택은 사용자의 클릭과 읽기 권한이 필요하며 이 페이지는 원본을 수정하지 않습니다. 목록은 head/manifest를 검증하고 로드는 각 파일/hash를 검증합니다.

정적 청크 주소 모드는 한 일반 청크 폴더를 HTTP/HTTPS 파일로 제공할 때 사용합니다. 이 예제는 비공개 S3 로그인/버킷 목록 검색을 구현하지 않습니다. CORS·HTTPS·브라우저 네트워크 권한을 확인하세요.

뷰포트의 점진 로딩·Actor 선택·표시/텍스처 옵션을 제공하고 배칭은 기본 꺼짐입니다. 준비된 스크립트의 공개 속성을 우측에서 실행 중 변경할 수 있습니다. readonly 또는 영구 저장 전용 속성은 편집하지 않습니다. 함수 호출은 `main.ts`와 [API 명세](../../docs/API.md)를 참고하세요.

수동 실행:

```powershell
pnpm install --ignore-scripts
pnpm update @dt/delivery-sdk --no-save --ignore-scripts
node ../detach-sdk.mjs
pnpm exec vite --host 127.0.0.1 --port 5183 --strictPort
```

배포 빌드는 `pnpm build`입니다. Vite는 웹페이지 파일만 제공하며 로컬 SDK 읽기용 API나 token 자동 입력 endpoint가 없습니다. 페이지를 없앨 때 SDK dispose와 모든 listener 해제를 호출합니다.
