# DT Delivery SDK 0.3.24

DT Web Editor에서 게시한 통합레벨을 브라우저에서 열고 액터·카메라·화면 설정과 애드온을 제어하는 SDK입니다. **모델 확인은 설치 없는 테스트 페이지**, **자체 앱 연결은 TypeScript API**로 시작하세요. 모델과 SDK 프로그램은 각각 갱신합니다.

## 1. 설치 없이 모델 확인하기

1. [공식 저장소](https://github.com/jonemos/DTDelivery-SDK)의 ZIP을 다운로드하고 **폴더 전체를 압축 해제**합니다. Git으로 받은 폴더도 사용할 수 있습니다.
2. SDK 폴더의 **`examples/test-server.cmd`**를 더블클릭합니다.
3. 열린 Chrome/Edge에서 기본 저장소의 모델 목록을 확인합니다. 모델이 하나면 자동으로 열리고, 여러 개면 이름을 선택한 뒤 **게시본 열기**를 누릅니다.
4. 서버 창은 사용하는 동안 열어두세요. 기본 테스트 주소는 `http://127.0.0.1:5183/`입니다.

Node.js·pnpm·Python을 설치하지 않아도 됩니다. Windows 기본 PowerShell이 미리 빌드한 페이지를 실행합니다. HTML 파일만 따로 열거나 SDK 일부만 복사하면 동작하지 않습니다. SDK에는 실제 모델이나 접속 키가 들어 있지 않으며, 모델은 제작자가 지정한 저장소에서 읽습니다.

## 2. 저장소와 통합레벨 선택하기

기본 저장소에 모델이 없거나 다른 제작자의 모델을 열 때는 상단에서 **원격 게시 저장소 → 연결 주소 → 연결 목록 조회 → 버킷·경로·게시 구역 선택 → 목록 조회 → 통합레벨 선택 → 게시본 열기** 순서로 진행합니다.

| 항목 | 뜻 | 예 |
| --- | --- | --- |
| 연결 주소 | 제작자가 제공한 저장소 서버 주소 | `http://호스트:9041` |
| 버킷 | 서버 안의 저장소 이름 | `twin-assets` |
| 경로 | 버킷 안의 폴더. 비우면 버킷 루트 | `test-upload` |
| 게시 구역(scope) | 같은 경로 안의 공개 목록 구분 | `development` |
| 통합레벨 | 편집기에서 게시한 모델 이름 | `새 통합 레벨`, `OP140` |

주소·버킷·경로는 직접 입력할 수 있습니다. **게시 구역은 등록된 전체 목록에서 클릭해 선택**합니다. 이름과 철자가 다른 구역은 별개의 목록이며, 모델은 원본 레벨명이 아닌 제작자가 게시한 통합레벨 이름으로 찾습니다.

처음 연결하는 서버는 제작자에게 받은 **전체 SDK 연결 주소**를 붙여넣거나 주소·버킷·경로를 한 번 입력합니다. 전체 주소는 각 칸으로 분리됩니다. 공개 연결 목록은 제작자의 편집기가 업로드 완료 시 자동 갱신하므로 파일을 매번 전달받지 않아도 됩니다. 기존 게시물은 편집기의 **SDK 연결 정보 → SDK 연결 목록 갱신**으로 등록합니다.

모델이 계속 보이지 않으면 제작자가 게시를 완료했는지와 버킷·경로·구역을 확인하세요. 저장소는 파일의 공개 읽기와 테스트 페이지 origin의 CORS를 허용해야 합니다. 버킷 전체 목록 권한은 필요하지 않습니다. 웹페이지에 업로드 키를 입력하지 않습니다.

로컬 저장본은 **로컬 청크 폴더**에서 읽기 권한으로 선택합니다. 일반 청크의 `delivery-head.json`·`objects`·`releases`가 있는 루트, 또는 게시 저장소의 루트/`levels`를 선택합니다. 일반 내보내기 폴더를 HTTP로 제공하는 경우 **정적 청크 주소**를 사용합니다.

## 3. 필요한 기능과 API 찾기

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
| 태양광·화면 / `setScreenEffects` | `DeliveryViewer`, `SunlightSettings` | `screenSettings`, `setScreenEffects()` |
| 그리드·도우미·바운드 / `setBounds` | `DeliveryViewer` | `grid.visible`, `helpers`, `setBounds()` |
| 텍스처 / `textureDisplay` | `DeliverySession` | `textureDisplay.estimate()`, `textureDisplay.apply()` |
| 공간 언로드 / `setSpatialStreaming` | `DeliveryViewer`, `DeliverySession` | `setSpatialStreaming()`, `spatialStreaming` |
| 스크립트 값 / `setProperties` | `DeliveryScripts`, `DeliveryScriptHandle` | `scripts.list()`, `scripts.get()`, `setProperties()` |
| 업무 데이터 키 / `actorServiceKey` | `ActorPlacement` | `actorServiceKey()`, `positionMeters`, `positionUeCm` |
| 취소·종료 / `dispose` | `DeliveryClient` | `cancel()`, `dispose()` |

현재 테스트 페이지에는 **26개 실행 예제**가 있습니다. 실제 애드온이 없는 모델에서는 스크립트 속성 변경을 실행할 수 없습니다. 설명·코드·문서는 연결 없이 볼 수 있으므로 필요한 기능과 준비 조건부터 확인하세요.

## 4. 카메라와 화면 기본값

| 설정 | SDK 기본값 |
| --- | --- |
| 렌더링 품질 | Normal |
| 환경광 / 강도 | 켜짐 / 1 |
| 톤 매핑 / 노출 | ACES Filmic / 1 |
| 태양광 | 켜짐 / 밝기 3 / 6500 K / 14시 / 방향 135° |
| 태양광 그림자 / 세기 | 켜짐 / 1 |
| 안티앨리어싱 | 꺼짐 (켜면 FXAA) |
| 카메라 Near | 0.1m (10cm) |
| 그리드 / 에디터 도우미 | 꺼짐 / 꺼짐 |
| 공간 자동 언로드 | 꺼짐(기본 전체 로드) |

테스트 페이지와 외부 앱은 같은 기본값을 사용합니다. 카메라 설정은 **뷰포트 옵션 → 카메라 설정**에서 조절합니다. Near 0.1m이면 카메라 앞 10cm 이내가 잘리며, API로 지정한 값은 유지됩니다. 오른쪽 큐브 아이콘 또는 `F`는 선택에 초점을 맞추고 `viewer.fit()`은 전체 경계에 맞춥니다.

지원 GPU에서는 **Reverse-Z와 32비트 부동소수 깊이 버퍼**로 원거리의 가까운 두 면을 구분합니다. `EXT_clip_control`이 없으면 일반 깊이를 사용하고, float 색상 버퍼가 없으면 기본 직접 표시를 유지합니다. 이 기능은 자동 적용되며 원본 메시·UV·재질을 변경하지 않습니다. 별도 색상·깊이 버퍼와 화면 합성 비용이 추가되며, 완전히 같은 면의 겹침을 해결하는 기능은 아닙니다. FXAA는 가장자리 처리를 별도로 켜는 옵션입니다.

- **오른쪽 아래 → 공간 자동 언로드**: 사용 여부, 로드/언로드 반경(cm), 대기(초)를 설정합니다. 공간 경계가 있는 게시본에서 먼 표시 자원을 해제하며 선택·동적 자원과 의존성은 보호합니다.
- **뷰포트 옵션(☰) → UI 숨김**: 옵션 버튼만 남기고 뷰포트 UI를 숨깁니다. 같은 체크로 복원합니다. 카메라·선택·언로드 설정은 유지됩니다.
- **Render Quality**: 품질·환경광·톤 매핑·노출·태양광을 설정하고 아래에서 안티앨리어싱을 켜고 끕니다. 태양광은 밝기·색온도·시간대·방향·그림자·그림자 세기를 조절합니다. 안개 조작 항목은 없습니다. GPU가 품질을 적용하지 못하면 실제 오류와 이전 표시 상태를 보여줍니다.
- **표시 → 텍스처**: 지원 맵과 최대 128/256/512px를 적용합니다. 원본 에셋은 바뀌지 않습니다. 예산 0은 자동입니다.

SDK는 필요한 에셋부터 읽고 청크·완성 파일의 해시를 확인합니다. 정지한 화면의 반복 렌더를 줄이며 정적 메시 배칭은 선택 가능한 실험 기능입니다. 공간 언로드·표시 품질·텍스처는 서로 다른 설정입니다. 실제 성능은 기기·모델에 따라 달라지며 Unreal 전체 재질·조명 표현과의 동일성을 보장하지 않습니다.

태양광 시간대는 위치·날짜 없이 06시 일출, 12시 남중, 18시 일몰인 간단한 경로입니다. 밤에는 태양광이 꺼지고 환경광은 별도로 유지됩니다. 색온도는 근사 색상이며 실제 지역의 일조 계산은 제공하지 않습니다.

## 5. TypeScript 앱에 연결하기

자체 앱 개발에는 Node.js·pnpm이 필요합니다. 현재 릴리스를 태그로 고정해 설치합니다.

```sh
pnpm add '@dt/delivery-sdk@github:jonemos/DTDelivery-SDK#v0.3.24'
```

SDK 폴더를 이미 받았다면 `pnpm add ../DTDelivery-SDK`로 설치할 수도 있습니다.

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

UI의 공간 거리·대기는 **cm/초**, 공간 API는 **m/ms**, 카메라 API는 **m·degree·m/s**를 사용합니다. 영구 액터 식별은 `compositionId + mountId + actorId`이며 이름·배열 순서·renderer UUID로 대신하지 않습니다. 같은 원본 Actor가 여러 mount에 있어도 각 실행 세션의 위치와 정지 복원을 분리합니다. 스크립트의 실행 중 값 변경은 원본 레벨의 영구 저장을 뜻하지 않습니다.

화면 설정은 복사본을 읽고 변경합니다. `sunlight`는 `enabled`, `intensity`(0–20), `temperatureKelvin`(1000–12000), `timeOfDay`(0–24), `azimuthDegrees`(0–360), `castShadow`, `shadowIntensity`(0–1)로 구성됩니다. `antialias`는 boolean입니다.

```ts
const screen = sdk.viewport.screenSettings;
sdk.viewport.setScreenEffects({
  ...screen,
  sunlight: { ...screen.sunlight!, timeOfDay: 16, temperatureKelvin: 4500, shadowIntensity: 0.6 },
  antialias: true,
});
```

[기능 가이드 전체](docs/guides/README.md)에서 필요한 장을 고르세요. 정확한 공개 타입은 `types/index.d.ts`와 연결된 선언, 전체 API 안내는 [API 명세](docs/API.md)입니다. 예제 소스 수정은 [개발 안내](examples/web/README.md)를 따릅니다.

## 6. 업데이트하기

1. 테스트 서버를 `Ctrl+C`로 종료합니다.
2. **사용하던 SDK 폴더**에서 `update.cmd`를 실행합니다.
3. `examples/test-server.cmd`를 다시 실행하고 페이지를 새로고침합니다. 상단 SDK 버전이 **0.3.24**인지 확인하세요.

다른 앱에 설치·복사한 SDK는 위 태그로 의존성을 갱신하고 앱도 다시 빌드·배포해야 합니다. SDK 폴더 업데이트가 다른 앱의 설치본을 자동으로 바꾸지는 않습니다. 모델은 제작자의 재게시로 갱신되며 목록은 기본 10초, 열린 모델의 새 게시본은 기본 5초 간격으로 확인합니다. 브라우저는 마지막 연결을 기억하고 **연결 해제**는 다음 시작의 기본 자동 연결도 끕니다.

SDK에는 Unreal 네이티브 베이커가 포함되지 않습니다. Unreal 연결 도구는 편집기가 별도로 제공하며, 베이커를 재빌드하는 작업과 외부 앱의 SDK 업데이트는 각각 진행합니다. 배포 이력은 CHANGELOG에서 확인하세요.

| 증상 | 확인할 것 |
| --- | --- |
| 모델이 없거나 이전 모델만 보임 | 제작자의 게시 완료, 버킷·경로·구역, 통합레벨 이름 |
| 연결 목록 조회 실패 | 편집기의 목록 갱신, 공개 GET, 페이지 origin의 CORS |
| 예제 실행이 비활성화됨 | 기능 설명 아래 준비 조건. 저장소 연결/모델 열기/실제 애드온 필요 여부 |
| 모델이 너무 어둡거나 일부가 안 보임 | 환경광·텍스처·표시 모드, 공간 언로드 반경 |
| 서버가 열리지 않음 | 전체 압축 해제 여부, 다른 테스트 서버의 5183 점유 |
| 해시·참조 오류 | 제작자가 게시본 복구 후 재열기. 검증 우회나 청크 수동 수정은 하지 않음 |

모델 삭제로 최신 게시 위치가 해제되면 이전 게시본으로 자동 전환하지 않습니다. SDK 라이선스는 MIT이며 모델의 배포 권한은 별도입니다. [변경 이력](CHANGELOG.md) · [업데이트 안내](docs/UPDATING.md) · [처음 전달할 때](docs/guides/18_FIRST_DELIVERY.md)
