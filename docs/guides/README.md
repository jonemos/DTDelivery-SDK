# 필요한 기능부터 찾기 · SDK 0.3.21

처음 사용하는 분은 [SDK README](../../README.md)의 **처음 실행하기**부터 진행하세요. 테스트 페이지를 보려는 사용자에게 Node.js·pnpm 설치는 필요하지 않습니다. 이 가이드는 기능을 내 웹 앱에 붙일 때 사용하는 공개 클래스·함수와 예제 소스를 설명합니다.

테스트 페이지 왼쪽 **기능 · API 찾기**에서 기능명·클래스명·함수명을 검색하면 26개 실행 예제의 관련 API와 코드를 볼 수 있습니다. `DeliveryClient`, `카메라`, `setScreenEffects`, `setSpatialStreaming`으로 시작해 보세요. 준비 조건이 부족해 실행할 수 없어도 코드와 문서는 볼 수 있습니다.

| 문서 | 만드는 기능 | 주요 클래스·함수 |
| --- | --- | --- |
| [00 설치·프로젝트 준비](00_INSTALL.md) | 외부 Vite/TypeScript 앱 | package import, viewport.css |
| [01 로컬 폴더](01_LOCAL_SOURCE.md) | 읽기 전용 폴더 연결 | LocalChunkSource, DeliveryDirectoryHandle |
| [02 원격·정적 HTTP](02_HTTP_SOURCE.md) | 서버 주소와 source 연결 | HttpChunkSource |
| [03 클라이언트](03_CLIENT.md) | canvas에 뷰어 생성 | DeliveryClient |
| [04 모델 목록·열기](04_MODELS.md) | 모델 선택과 표시 | listModels, open, model |
| [05 로드 진행](05_PROGRESS.md) | 진행률·셀 상태 | progress, subscribeProgress |
| [06 액터](06_ACTORS.md) | 검색·선택·초점 | actors, selectActor, focusActor |
| [07 기본 패널](07_PANELS.md) | 아웃라이너·상세 | mountActorPanel |
| [08 뷰포트 도구](08_VIEWPORT_TOOLS.md) | 품질·환경광·화면 설정 | mountDeliveryViewportTools, setScreenEffects |
| [09 카메라·표시](09_CAMERA_DISPLAY.md) | 방향·수치·도우미 | setProjection, setCameraSettings, setBounds |
| [10 텍스처·메모리](10_TEXTURES_BUDGET.md) | 자원·표시 품질·캐시 | textureDisplay, displayBudget, ChunkCache |
| [11 스크립트](11_SCRIPTS.md) | 설치 애드온의 공개 값 | DeliveryScripts, DeliveryScriptHandle |
| [12 업무 데이터](12_HOST_DATA.md) | 영구 식별·설비 상태 | actorServiceKey, setDeviceState |
| [13 종료·정리](13_LIFECYCLE.md) | 취소·SPA 수명 | cancel, dispose, unsubscribe |
| [14 페이지 구성](14_PAGE_LAYOUT.md) | 상단·좌/중앙/우 조립 | client + panel + toolbar |
| [15 사용자 정의 저장소](15_CUSTOM_SOURCE.md) | 호스트 저장소 adapter | DeliverySource, ByteProvider |
| [16 기능·API 검색과 실행](16_FEATURE_PLAYGROUND.md) | 26개 예제·코드·결과 | 기능 분류, 클래스·함수 검색 |
| [17 호스트에 적용](17_HOST_INTEGRATION.md) | 패키지 설치·배포 | DeliveryClient, cleanup |
| [18 처음 전달할 때](18_FIRST_DELIVERY.md) | 사용자에게 준비물 안내 | 테스트 페이지·SDK 연결 |

처음 개발할 때는 **00 → 01 또는 02 → 03 → 04 → 05 → 07 → 08 → 13** 순서를 권장합니다. 이미 동작하는 앱에 한 기능만 추가한다면 해당 기능의 문서와 테스트 페이지 예제를 확인하세요.

## 코드 읽는 방법

- `@dt/delivery-sdk`의 공개 import만 사용합니다. 내부 hash 파일이나 편집기 소스 경로를 import하지 않습니다.
- 독립 예제의 함수를 앱 파일에 옮기고 문서에 표시된 DOM·현재 client·입력값을 전달합니다. 서로 다른 문서의 전체 코드를 한 파일에 그대로 합치지 않습니다.
- 비동기 함수는 완료/실패를 처리합니다. 구독이 돌려주는 해제 함수와 패널 mount의 cleanup은 화면 종료 때 실행하고 마지막에 `dispose()`합니다.
- API의 거리·속도는 m/m/s, 공간 지연은 ms입니다. 테스트 페이지의 cm/초 입력과 구분합니다.
- 실제 모델·폴더 chooser·GPU·CORS·실행 애드온의 지원 여부는 사용하는 환경에서 확인합니다. 예제 코드를 표시하는 것만으로 기능 실행이 검증된 것은 아닙니다.

정확한 타입·매개변수는 [API 명세](../API.md)와 SDK의 `types/index.d.ts`에서 확인하세요. 기본값은 **Normal · 환경광 켜짐/1 · ACES · 그리드·도우미 꺼짐**입니다. 예제는 값을 영구 저장하지 않으며 스크립트 공개 속성 변경은 원본 레벨 저장과 다릅니다.
