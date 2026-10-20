# DT Delivery SDK 0.3.21

DT Web Editor에서 게시한 통합레벨을 웹에서 보고, 액터·카메라·표시 설정을 제어하는 SDK입니다. **모델을 확인할 때는 설치 없는 테스트 페이지**, **내 앱에 붙일 때는 TypeScript API**를 사용합니다.

## 1. 처음 실행하기

1. [공식 저장소](https://github.com/jonemos/DTDelivery-SDK)의 ZIP을 다운로드하고 **폴더 전체를 압축 해제**합니다. Git으로 받은 폴더도 사용할 수 있습니다.
2. SDK 폴더의 **`examples/test-server.cmd`**를 더블클릭합니다.
3. 열린 Chrome/Edge에서 모델 이름을 선택하고 **게시본 열기**를 누릅니다. 기본 주소는 `http://127.0.0.1:5183/`입니다.
4. 모델이 하나면 자동으로 열립니다. 여러 개면 통합레벨 이름으로 선택합니다. 서버 창은 사용하는 동안 열어두세요.

Node.js·pnpm·Python을 설치하지 않아도 됩니다. Windows 기본 PowerShell이 미리 빌드한 페이지를 실행합니다. HTML 파일만 따로 열거나 SDK 일부만 복사하면 동작하지 않습니다. SDK에는 실제 모델이나 접속 키가 들어 있지 않으며, 모델은 제작자가 지정한 저장소에서 읽습니다.

## 2. 원하는 모델이 없을 때

상단에서 **원격 게시 저장소 → 연결 주소 → 연결 목록 조회 → 버킷·경로·게시 구역 선택 → 목록 조회 → 통합레벨 선택 → 게시본 열기** 순서로 진행합니다.

| 항목 | 뜻 | 예 |
| --- | --- | --- |
| 연결 주소 | 저장소 서버의 주소 | `http://호스트:9041` |
| 버킷 | 서버 안의 저장소 이름 | `twin-assets` |
| 경로 | 버킷 안의 폴더. 비우면 버킷 루트 | `test-upload` |
| 게시 구역(scope) | 같은 경로 안의 공개 목록 구분 | `development` |
| 통합레벨 | 편집기에서 게시한 모델 이름 | `새 통합 레벨`, `OP140` |

주소·버킷·경로는 직접 입력할 수 있습니다. **게시 구역은 등록된 전체 목록에서 클릭해 선택**하며 입력 글자로 후보를 거르는 자동완성을 사용하지 않습니다. `development`와 `develoment`처럼 철자가 다르면 다른 구역입니다. 원본 GY_Test를 넣어 게시한 통합레벨의 이름이 ‘새 통합 레벨’이면 그 이름으로 찾습니다.

처음 연결하는 서버는 제작자에게 받은 **전체 SDK 연결 주소**를 붙여넣거나 주소·버킷·경로를 한 번 입력합니다. 전체 주소는 각 칸으로 분리됩니다. 공개 연결 목록은 제작자의 편집기가 업로드 완료 시 자동 갱신하므로 파일을 매번 전달받지 않아도 됩니다. 기존 게시물은 편집기의 **SDK 연결 정보 → SDK 연결 목록 갱신**으로 등록합니다.

모델이 계속 보이지 않으면 제작자가 게시를 완료했는지와 버킷·경로·구역을 확인하세요. 저장소는 파일의 공개 읽기와 테스트 페이지 origin의 CORS를 허용해야 합니다. 버킷 전체 목록 권한은 필요하지 않습니다. 웹페이지에 업로드 키를 입력하지 않습니다.

로컬 저장본은 **로컬 청크 폴더**에서 읽기 권한으로 선택합니다. 일반 청크의 `delivery-head.json`·`objects`·`releases`가 있는 루트, 또는 게시 저장소의 루트/`levels`를 선택합니다. 일반 내보내기 폴더를 HTTP로 제공하는 경우 **정적 청크 주소**를 사용합니다.

## 3. 테스트 페이지에서 기능·클래스·함수 찾기

왼쪽 **기능 · API 찾기**에서 검색하거나 분류를 고릅니다. 예를 들어 `카메라`, `DeliveryClient`, `setScreenEffects`, `setSpatialStreaming`을 입력하면 관련 기능을 찾을 수 있습니다. 검색만으로 모델이나 표시 설정을 변경하지 않습니다.

1. 검색 결과 또는 **기능별 예제** 목록에서 항목을 선택합니다.
2. 기능 설명, **클래스·관련 API**, 준비 조건을 읽습니다. 연결이나 모델이 필요하면 이유가 표시되고 실행은 비활성화됩니다. 코드와 문서는 연결 없이 볼 수 있습니다.
3. 오른쪽의 대표 호출과 실제 TypeScript 코드를 확인하고 입력값을 바꾼 뒤 **실행**합니다.
4. 실제 입력값·결과 또는 오류를 확인합니다. **정지 · 복원**은 구독을 해제하고 복원 가능한 카메라·표시 설정을 돌려놓습니다.

**코드 복사**로 외부 프로젝트에 옮기거나 **기능 문서**에서 인수·단위·수명과 실패 처리를 확인하세요. 화면의 코드는 읽기 전용이며 실행은 미리 빌드한 함수로 처리합니다. 텍스처·스크립트 변경은 정지해도 원복되지 않으므로 예제 설명을 먼저 읽으세요.

| 하고 싶은 일 / 검색어 | 주요 클래스·타입 | 핵심 함수·속성 |
| --- | --- | --- |
| 저장소 연결 / `HttpChunkSource` | `HttpChunkSource`, `LocalChunkSource` | `storageConnectionUrl()`, `readStorageDirectory()` |
| 모델 목록·열기 / `listModels` | `DeliveryClient` | `listModels()`, `open()`, `model` |
| 진행 상태 / `subscribeProgress` | `DeliveryClient`, `DeliveryProgress` | `progress`, `subscribeProgress()` |
| 액터 찾기·선택 / `selectActor` | `DeliveryClient`, `ActorPlacement` | `actors()`, `selectActor()`, `focusActor()` |
| 카메라 / `setCameraSettings` | `DeliveryViewer` | `setProjection()`, `setCameraSettings()`, `fit()` |
| 품질 / `quality.apply` | `DeliveryViewer` | `quality.apply()`, `quality.snapshot()` |
| 환경광 / `environmentIntensity` | `DeliveryViewer` | `environment`, `environmentIntensity`, `invalidate()` |
| 톤 매핑·노출 / `setScreenEffects` | `DeliveryViewer` | `screenSettings`, `setScreenEffects()` |
| 그리드·도우미·바운드 / `setBounds` | `DeliveryViewer` | `grid.visible`, `helpers`, `setBounds()` |
| 텍스처 / `textureDisplay` | `DeliverySession` | `textureDisplay.estimate()`, `textureDisplay.apply()` |
| 공간 언로드 / `setSpatialStreaming` | `DeliveryViewer`, `DeliverySession` | `setSpatialStreaming()`, `spatialStreaming` |
| 스크립트 값 / `setProperties` | `DeliveryScripts`, `DeliveryScriptHandle` | `scripts.list()`, `scripts.get()`, `setProperties()` |
| 업무 데이터 키 / `actorServiceKey` | `ActorPlacement` | `actorServiceKey()`, `positionMeters`, `positionUeCm` |
| 취소·종료 / `dispose` | `DeliveryClient` | `cancel()`, `dispose()` |

현재 테스트 페이지에는 **26개 실행 예제**가 있습니다. 실제 애드온이 없는 모델에서는 스크립트 속성 변경을 실행할 수 없습니다. 이는 준비 조건이며 더미 스크립트를 만들지 않습니다.

## 4. 화면 조작과 기본값

| 설정 | SDK 기본값 |
| --- | --- |
| 렌더링 품질 | Normal |
| 환경광 / 강도 | 켜짐 / 1 |
| 톤 매핑 / 노출 | ACES Filmic / 1 |
| 그리드 / 에디터 도우미 | 꺼짐 / 꺼짐 |
| 공간 자동 언로드 | 꺼짐(기본 전체 로드) |

이 기본값은 테스트 페이지와 외부 앱에서 같습니다. 오른쪽 큐브 아이콘 또는 `F`로 선택에 초점을 맞춥니다. 옵션 메뉴의 중복 선택 초점·전체 맞춤 항목은 제거했습니다. 전체 맞춤은 기능 예제 또는 `viewer.fit()`으로 사용할 수 있습니다.

- **오른쪽 아래 → 공간 자동 언로드**: 사용 여부, 로드/언로드 반경(cm), 대기(초)를 설정합니다. 공간 경계가 있는 게시본에서 먼 표시 자원을 해제하며 선택·동적 자원과 의존성은 보호합니다.
- **뷰포트 옵션(☰) → UI 숨김**: 옵션 버튼만 남기고 뷰포트 UI를 숨깁니다. 같은 체크로 복원합니다. 카메라·선택·언로드 설정은 유지됩니다.
- **Render Quality**: 품질·환경광·톤 매핑을 설정합니다. GPU가 품질을 적용하지 못하면 실제 오류와 이전 표시 상태를 보여줍니다.
- **표시 → 텍스처**: 지원 맵과 최대 128/256/512px를 적용합니다. 원본 에셋은 바뀌지 않습니다. 예산 0은 자동입니다.

SDK는 필요한 에셋부터 읽고 청크·완성 파일의 해시를 확인합니다. 정지한 화면의 반복 렌더를 줄이며 정적 메시 배칭은 실험적 선택 기능입니다. 공간 언로드·표시 품질·텍스처는 서로 다른 설정입니다. 기기나 모델에 따른 성능을 보장하지 않으며 Unreal의 모든 재질·조명 표현을 재현하는 것은 아닙니다.

## 5. 내 웹 앱에 붙이기

앱 개발에만 Node.js·pnpm이 필요합니다. 프로젝트 옆의 SDK 폴더를 설치합니다.

```sh
pnpm add ../DTDelivery-SDK
```

```ts
import { DeliveryClient } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export async function mountModel(canvas: HTMLCanvasElement) {
  const sdk = new DeliveryClient({ canvas }); // source 생략: 기본 저장소
  const models = await sdk.listModels();
  if (models.length) await sdk.open(models[0]!.id, { progressive: true });
  return sdk; // 화면을 제거할 때 await sdk.dispose()
}
```

canvas와 부모에 실제 폭·높이를 지정하세요. 다른 저장소는 `HttpChunkSource`/`LocalChunkSource`를 `source`로 전달합니다. 모델 ID는 목록에서 받은 값을 사용합니다. 구독 함수가 반환한 해제 함수를 화면 종료 때 호출하고 마지막에 `dispose()`합니다. 게시본 자동 확인을 끄려면 `autoUpdate: false`를 지정합니다.

| 클래스·함수 | 역할 | 자세한 안내 |
| --- | --- | --- |
| `DeliveryClient` | 연결한 source의 목록·열기·진행·선택·종료 | [클라이언트](docs/guides/03_CLIENT.md) |
| `HttpChunkSource`, `LocalChunkSource` | 원격/로컬 읽기 경로 | [원격](docs/guides/02_HTTP_SOURCE.md), [로컬](docs/guides/01_LOCAL_SOURCE.md) |
| `DeliveryViewer` | 카메라·렌더·표시·공간 로드 | [뷰포트 도구](docs/guides/08_VIEWPORT_TOOLS.md), [카메라](docs/guides/09_CAMERA_DISPLAY.md) |
| `DeliverySession` | 준비된 레벨·셀·자원·텍스처 | [텍스처·메모리](docs/guides/10_TEXTURES_BUDGET.md) |
| `ChunkReader`, `MemoryChunkCache`, `BrowserChunkCache` | 검증된 파일 읽기·폐기 가능한 캐시 | [자원과 캐시](docs/guides/10_TEXTURES_BUDGET.md) |
| `mountActorPanel()`, `mountDeliveryViewportTools()` | 기본 아웃라이너·뷰포트 도구를 DOM에 부착 | [패널](docs/guides/07_PANELS.md), [도구](docs/guides/08_VIEWPORT_TOOLS.md) |
| `actorServiceKey()`, `bindHostData()` | 영구 액터 식별과 호스트 업무 데이터 연결 | [업무 데이터](docs/guides/12_HOST_DATA.md) |
| `DeliveryScripts`, `DeliveryScriptHandle` | 설치된 애드온의 공개 schema·값·revision | [스크립트](docs/guides/11_SCRIPTS.md) |
| `startDeliveryRuntime()` | 검증된 모델의 로컬 실행 세션 | [API 명세](docs/API.md) |

UI의 거리 입력은 cm/초, 공간 API는 **m/ms**, 카메라 API는 **m·degree·m/s**를 사용합니다. 영구 액터 식별은 `compositionId + mountId + actorId`이며 이름·배열 순서·renderer UUID로 대신하지 않습니다. 스크립트의 실행 중 값 변경은 원본 레벨의 영구 저장을 뜻하지 않습니다.

[기능 가이드 전체](docs/guides/README.md)에서 필요한 장을 고르세요. 정확한 공개 타입은 `types/index.d.ts`와 연결된 선언, 전체 API 안내는 [API 명세](docs/API.md)입니다. 예제 소스 수정은 [개발 안내](examples/web/README.md)를 따릅니다.

## 6. 업데이트와 문제 해결

1. 테스트 서버를 `Ctrl+C`로 종료합니다.
2. **사용하던 SDK 폴더**에서 `update.cmd`를 실행합니다.
3. `examples/test-server.cmd`를 다시 실행하고 페이지를 새로고침합니다.

다른 앱에 설치·복사한 SDK는 의존성을 갱신한 뒤 앱도 다시 빌드·배포해야 합니다. 모델 재게시와 SDK 프로그램 업데이트는 별개입니다. SDK는 모델 목록을 기본 10초, 열린 모델의 새 게시본을 기본 5초 간격으로 확인합니다. 브라우저는 마지막 연결을 기억하며 **연결 해제**는 다음 시작의 기본 자동 연결도 끕니다.

| 증상 | 확인할 것 |
| --- | --- |
| 모델이 없거나 이전 모델만 보임 | 제작자의 게시 완료, 버킷·경로·구역, 통합레벨 이름 |
| 연결 목록 조회 실패 | 편집기의 목록 갱신, 공개 GET, 페이지 origin의 CORS |
| 예제 실행이 비활성화됨 | 기능 설명 아래 준비 조건. 저장소 연결/모델 열기/실제 애드온 필요 여부 |
| 모델이 너무 어둡거나 일부가 안 보임 | 환경광·텍스처·표시 모드, 공간 언로드 반경 |
| 서버가 열리지 않음 | 전체 압축 해제 여부, 다른 테스트 서버의 5183 점유 |
| 해시·참조 오류 | 제작자가 게시본 복구 후 재열기. 검증 우회나 청크 수동 수정은 하지 않음 |

모델 삭제로 최신 게시 위치가 해제되면 이전 게시본으로 자동 전환하지 않습니다. SDK 라이선스는 MIT이며 모델의 배포 권한은 별도입니다. [변경 이력](CHANGELOG.md) · [업데이트 안내](docs/UPDATING.md) · [처음 전달할 때](docs/guides/18_FIRST_DELIVERY.md)
