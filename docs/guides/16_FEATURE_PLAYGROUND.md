# 16 · 기능을 선택해서 실행하고 코드 보기 · SDK 0.3.3

[목차](README.md) · [전체 페이지 구조](14_PAGE_LAYOUT.md)

SDK 루트의 `examples/test-server.cmd`를 실행하고 왼쪽 **기능별 예제**를 사용하세요. 뷰포트와 기본 메뉴는 그대로이며 기존 좌우 패널에 실행 UI와 코드 보기를 추가했습니다. 연결이 없어도 SDK/연결 정보 코드는 실행할 수 있습니다. 모델이 필요한 예제는 실제 청크를 연결해야 합니다.

## 실행 순서

1. **로컬 폴더 연결** 또는 **정적 HTTP 연결**을 선택하고 구역/주소를 입력해 실행합니다. 상단의 기존 연결 버튼도 사용할 수 있습니다.
2. **모델 · 점진 로딩**에서 조회된 실제 모델을 선택하고 실행합니다. canvas에 준비된 셀부터 표시되고 완료 시 결과에 실제 모델/게시 hash가 나옵니다.
3. 검색·선택·카메라·표시·텍스처 등의 예제를 골라 입력값을 바꾼 뒤 실행합니다.
4. 오른쪽에서 실행 함수와 공통 context/도우미 코드, 실제 입력값·반환 결과를 확인합니다. **코드 복사**, **줄바꿈**, **기능 문서**를 사용할 수 있습니다.
5. **정지 · 복원**은 진행 요청을 취소하고 구독을 해제하며 복원 가능한 카메라/표시/선택을 되돌립니다. 예제를 바꿀 때도 앞선 실행을 정리합니다. 코드 패널의 **닫기** 또는 왼쪽 **상세 보기**로 기존 로드/Actor/스크립트 상세에 돌아갑니다.

## 예제와 호출

| 기능 | 실제 호출 |
|---|---|
| SDK/연결 정보 | DELIVERY_SDK_VERSION, client.model/progress |
| 로컬·정적 HTTP | LocalChunkSource/HttpChunkSource, 호스트 connect |
| 목록·모델 열기 | listModels(), open(id,{progressive,signal}) |
| 진행 상태 | 현재 progress + subscribeProgress(), 정지 시 unsubscribe |
| 이름 검색 | actors(query), 최대100개 snapshot 결과 표시 |
| 선택·초점·해제 | selectActor(target), focusActor(target), selectActor(null) |
| 방향·표시 모드 | setProjection(), setViewMode() |
| 카메라 수치 | setCameraSettings(), navigation.setSpeed() |
| 그리드·도우미·바운드 | grid.visible, helpers, setBounds() |
| 전체 맞춤 | viewport.fit() |
| 텍스처 | textureDisplay.estimate()/apply(), 지원 맵만 선택 가능 |
| 스크립트 목록·공개 속성 | scripts.list()/get(), handle.setProperties(expectedRevision) |
| 업무 key·좌표 | actorServiceKey(), positionMeters/positionUeCm |
| 로드 취소·연결 종료 | cancel(), 호스트 cleanup + dispose() |

총21개의 실행 항목입니다. 연결/로드 완료/지원 액터/실행 스크립트가 없으면 해당 실행 버튼을 비활성화하고 실제 이유를 표시합니다. 진행 중 로드 취소는 실제 loading일 때만 사용합니다. 실패한 API의 오류는 결과 영역에 표시하며 성공으로 바꾸지 않습니다.

## 코드와 값

[featureExamples.ts](../../examples/web/featureExamples.ts)는 공개 SDK를 사용하는 정적 실행 함수, 입력 정의, 조건과 코드 영역을 갖습니다. Vite의 `?raw`로 **동일한 소스**를 읽어 선택한 함수와 필요한 공통 타입/도우미를 표시합니다. 코드 영역은 읽기 전용이며 화면에 표시된 문자열을 평가하지 않습니다. 실행은 빌드된 함수 호출입니다.

[featurePanel.ts](../../examples/web/featurePanel.ts)는 함수 선택/입력/코드/결과/복사를 구성합니다. `main.ts`가 현재 client·catalog·source 연결·종료·canvas 표시를 host callback으로 제공합니다. 외부 프로젝트에 가져오려면 두 모듈과16 가이드의 UI 컨테이너/스타일을 복사하고 이 callback을 앱의 연결 수명에 맞게 제공하세요. 원본 root import `@dt/delivery-sdk`는 유지합니다.

입력값은 실행 순간 복사돼 오른쪽에 표시됩니다. 스크립트 폼은 사용자가 본 schema/values/revision을 보관하고 **현재값 읽기**를 누르면 다시 읽습니다. 읽기 전용/persistent 전용 속성은 실행하지 않으며 revision 충돌을 자동 덮어쓰지 않습니다. 성공한 runtime 속성 변경은 유지되고 영구 저장을 뜻하지 않습니다.

카메라의 FOV는 degree, 폭/near/far는m, 속도는m/s이고 텍스처 예산은MiB 입력을 bytes로 변환합니다. 텍스처의 적용 후/교체 중 값은 예약 추정이며 GPU 측정값이 아닙니다. 텍스처와 script 변경은 정지 시 원복하지 않으므로 원하는 다른 값/옵션을 다시 적용하세요. source 전환/새 모델 open/연결 종료도 원래 모델로 자동 되돌리지 않습니다.

결과는 읽기 쉽게65,536자까지만 표시하고 큰 액터 검색은 앞100개와 전체 검색 수를 함께 제공합니다. 임의 ID를 만들어 반환하거나 사용 가능한 컴포넌트가 없는데 가짜 스크립트를 보여주지 않습니다. 브라우저의 로컬 폴더/clipboard/fullscreen 권한과 실제 사용자 청크는 사용하는 환경에서 확인하세요.
