# 외부 프로젝트를 위한 기능별 예제 · SDK 0.3.2

이 문서는 제공된 예제 화면을 외부 웹 프로젝트에 구성하는 개발 가이드입니다. 각 문서는 한 기능의 목적, 준비할 DOM, 공개 클래스·함수, 입력값·반환값, 복사할 TypeScript 예제, 실행 순서와 실패 처리를 설명합니다. 현재 코드와 공개 선언 기준이며 화면의 버튼 이름을 API 이름으로 추측하지 않습니다.

SDK는 **검증된 게시 청크를 읽고 보여주는 브라우저 런타임**입니다. 웹페이지의 로고·입력폼·버튼·패널 배치·업무 데이터는 호스트가 만들고, 렌더링·카메라·선택·청크 로딩·실행 중 공개 속성은 SDK가 담당합니다. SDK0.3.0 이후 조회 API 서버는 필요하지 않습니다.

## 필요한 기능부터 찾기

| 번호 | 문서 | 만드는 기능 | 핵심 공개 API |
|---|---|---|---|
| 00 | [설치·프로젝트 준비](00_INSTALL.md) | 외부 Vite/TypeScript 프로젝트 | package import, viewport.css |
| 01 | [로컬 폴더 연결](01_LOCAL_SOURCE.md) | 청크 폴더 선택 버튼 | LocalChunkSource, DeliveryDirectoryHandle |
| 02 | [정적 HTTP 연결](02_HTTP_SOURCE.md) | 청크 주소 필드 | HttpChunkSource |
| 03 | [클라이언트·최소 뷰포트](03_CLIENT.md) | canvas에 SDK 생성 | DeliveryClient, DeliveryClientOptions |
| 04 | [모델 목록·게시본 열기](04_MODELS.md) | 모델 select·조회·열기 | listModels, open, model |
| 05 | [로드 진행·셀 상태](05_PROGRESS.md) | 상태 라벨·progress·셀 목록 | progress, subscribeProgress |
| 06 | [액터 검색·선택·초점](06_ACTORS.md) | 직접 만드는 액터 목록 | actors, selectActor, focusActor |
| 07 | [기본 아웃라이너·상세 패널](07_PANELS.md) | 예제와 같은 좌우 패널 | mountActorPanel |
| 08 | [기본 뷰포트 도구](08_VIEWPORT_TOOLS.md) | 원근·품질·표시 메뉴 | mountDeliveryViewportTools |
| 09 | [카메라·표시 제어](09_CAMERA_DISPLAY.md) | 사용자 정의 카메라/표시 버튼 | setProjection, setViewMode, setBounds |
| 10 | [텍스처·메모리·캐시](10_TEXTURES_BUDGET.md) | 텍스처 선택/적용·예산 | textureDisplay, displayBudget, ChunkCache |
| 11 | [스크립트 공개 속성](11_SCRIPTS.md) | schema 기반 입력폼 | scripts, DeliveryScriptHandle |
| 12 | [외부 업무 데이터 연결](12_HOST_DATA.md) | 설비·센서·설명 패널 | actorServiceKey, setDeviceState |
| 13 | [취소·전환·종료](13_LIFECYCLE.md) | 연결 해제·SPA 정리 | cancel, dispose, unsubscribe |
| 14 | [전체 페이지 구성](14_PAGE_LAYOUT.md) | 2행 상단·좌/중앙/우 배치 | 위 기능 조립·실제 예제 대응표 |
| 15 | [사용자 정의 저장소](15_CUSTOM_SOURCE.md) | 여러 정적 게시본/호스트 adapter | DeliverySource, ByteProvider |

처음 만드는 화면은 **00 → 01 또는 02 → 03 → 04 → 05 → 07 → 08 → 13 → 14** 순서로 구성하세요. 업무 데이터가 필요한 경우06/12, 스크립트가 포함된 게시본은11을 추가합니다. 이미 동작하는 화면에 한 기능만 추가한다면 해당 문서의 함수와 준비 조건을 확인하세요.

## 공통 약속

- 코드 블록은 `@dt/delivery-sdk`의 공개 import만 사용합니다. 에디터 소스 경로나 `types/modules`의 hash 파일을 import하지 않습니다. 정확한 선언은 설치 패키지의 `types/index.d.ts`와 그 참조 선언, 요약은 [API 명세](../API.md)입니다.
- 각 TypeScript 블록은 독립 모듈입니다. `export function` 예제는 외부 프로젝트의 파일에 복사한 뒤 표시된 DOM과 현재 `sdk`를 인수로 전달합니다. 같은 변수명을 가진 서로 다른 문서를 한 파일에 통째로 이어 붙이지 않습니다.
- `sdk`는 `DeliveryClient`, `viewer`는 `sdk.viewport`인 `DeliveryViewer`입니다. 한 canvas에는 한 활성 클라이언트를 두고 source 교체 시 이전 클라이언트를 종료합니다.
- `model.id`는 목록에서 얻은 통합레벨 ID, `releaseHash`는 고정 게시 리비전, `mountId`는 레벨 인스턴스 ID, `actorId`는 액터 ID입니다. 이름으로 대상을 식별하지 않습니다.
- 모델 데이터는 SDK와 별도입니다. 일반 내보내기 폴더의 `delivery-head.json`, `releases`, `objects` 또는 로컬 게시 저장소를 준비합니다. [청크 준비 절차](../../README.md#3-편집기에서-청크-준비하고-연결하기)를 따르세요.
- 상태·선택·schema는 받은 snapshot으로 표시하며 이벤트 구독은 반환된 함수로 해제합니다. `dispose()`는 비동기입니다. `open()`과 속성 변경의 Promise 오류를 처리합니다.
- 이 가이드는 SDK0.3.2 API를 사용하는 문서 보강입니다. Git의 기존 `v0.3.2` 태그는 불변이며 최신 가이드와 README는 저장소의 **main**에서 읽을 수 있습니다. 태그로 설치한0.3.2 런타임에서도 같은 API를 사용합니다.

## SDK가 담당하는 것과 호스트가 담당하는 것

| 영역 | SDK | 외부 프로젝트 |
|---|---|---|
| 청크 읽기 | 크기·hash·manifest 검증, 로딩/캐시 | 사용자 선택·정적 주소·저장소 접근 권한 |
| 3D 화면 | 렌더러·카메라·원본 Actor 선택 | canvas 크기·부모 레이아웃 |
| 기본 메뉴/목록 | 선택적인 mount 함수 | DOM 컨테이너·CSS 배치·정리 |
| 상단 UI | progress/model 정보 | 로고·필드·버튼·한글 메시지 |
| 액터 업무 정보 | stable serviceKey/위치/구조 | 설비명·센서 API·DB·사용자 권한 |
| 스크립트 속성 | 공개 schema 검증·실행 중 변경 | 입력폼·오류/충돌 안내·별도 영구 저장 |

합성 청크를 이용한 문서 예제 검증과 실제 사용자 모델의 인수 확인은 구분합니다. 실제 폴더 권한·모델 외형·배포 서버의 CORS는 사용하는 환경에서 확인하세요.

## 이 문서의 확인 범위

문서17개/기능16개/독립 TypeScript 코드21개와 로컬 연결72개를 검사했습니다. 에디터 밖의 별도 프로젝트에서 SDK0.3.2 공개 타입만 사용한 strict TypeScript·Vite 빌드를 통과했고, Chrome155의 합성 청크로 조립 페이지·모델 목록/열기·셀 진행·액터 패널/선택·업무 key·카메라/바운드·Viewport 품질·텍스처 옵션·source 교체/dispose를 확인했습니다. 조회 API 요청은 없었습니다.

실제 사용자 모델·OS 폴더 chooser·배포 CORS/인증·다른 PC/GPU·실제 애드온 공개 속성 변경/충돌은 이번 문서 검증에서 실행하지 않았습니다. 스크립트 코드는 공개 타입 검사와 스크립트 없는 게시본의 빈 상태 UI를 확인했으며, 실제 애드온 포함 게시본에서11의 schema·revision·권한 조건을 별도로 인수 확인해야 합니다.
