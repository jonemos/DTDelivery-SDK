# 공개 함수·타입 명세 · SDK 0.3.20

API를 화면에 연결하는 순서와 기능별 실행 예제는 [개발 가이드 목차](guides/README.md)를 참고하세요. 이 문서는 함수 계약 요약이며 가이드의 코드도 공개 `@dt/delivery-sdk` import만 사용합니다.

0.3.3의 [기능별 실행 예제](guides/16_FEATURE_PLAYGROUND.md)는 아래 공개 API를 사용하는 호스트 페이지 코드입니다. SDK 루트에 새로운 gallery API를 추가하지 않습니다. 선택한 코드는 읽기 전용으로 표시하며 컴파일된 함수를 실행합니다.

0.3.0은 조회 API 서버가 없는 브라우저 SDK입니다. `DeliveryApiClient`, `AddonPropertiesClient`, 서버 subpath와 CLI를 공개 패키지에서 제거했습니다. 기존 청크 계약1–5는 유지합니다. 아래 선언은 실제 TypeScript API를 요약한 것이며 생성된 `types/index.d.ts`가 정확한 계약입니다.

0.3.1의 `viewport.setBounds(enabled: boolean)`은 준비된 액터의 실제 월드 바운드를 표시하며 `viewport.bounds`로 현재 설정을 읽습니다. 기본 꺼짐이고, 숨김/로드 해제/종료 시 helper를 정리합니다. 청크·Actor ID·선택용 picking을 변경하지 않습니다. 표시 메뉴에서는 아이콘·아이콘 크기 항목 대신 바운드를 제공합니다.

## 연결과 모델

`storageConnectionUrl({ endpoint, bucket, prefix, scope })`는 분리된 입력으로 모델 목록 URL을 만들고 `splitStorageConnection(url)`은 기존 전체 연결 URL을 분리합니다. `storageEndpoint(value)`는 http(s)://호스트:포트만 허용합니다. `readStorageDirectory(seed, signal)`은 seed의 버킷·경로 아래 `levels/delivery-connections.json` 한 파일을 공개 GET으로 읽습니다. 최대 64KiB, 100개 위치, 위치별 256개 scope이며 `{ version: 1, locations: [{ bucket, prefix, scopes }] }`의 추가 필드·중복·경로 이탈·URL은 거부합니다. 응답 안에 endpoint·접속 키·실행 코드는 허용하지 않습니다. 버킷 나열이나 다른 origin으로의 redirect는 하지 않습니다. 처음 연결하는 임의 서버는 host가 seed를 한 번 제공해야 합니다.

예제는 주소를 서버 origin으로 유지하고 버킷·경로·scope 선택 목록을 제공합니다. 편집기의 업로드 완료 또는 SDK 연결 목록 갱신으로 이 파일을 게시하며 수동 파일 전달은 필요 없습니다. 목록은 탐색용이고 모델은 기존 head·manifest·chunk 해시 검증을 계속 받습니다. **공간 자동 언로드**는 기존 `viewport.setSpatialStreaming(options | null)` UI이며 API 단위는 m/ms, 화면은 cm/초입니다. 정적 소스의 행렬·프레임 준비를 캐시하고 동적 소스는 매 프레임 갱신합니다.

0.3.10 배포본은 현재 저장소의 공개 모델 목록 주소를 기본 연결로 포함합니다. **첫 게시 때도 사용자에게 ID나 주소를 전달할 필요가 없습니다.** `const sdk = new DeliveryClient({ canvas }); const models = await sdk.listModels();`로 이름 목록을 읽고 선택한 항목의 ID를 내부적으로 `open()`에 전달합니다. `defaultDeliverySource()`는 같은 기본 source를 반환합니다. 다른 저장소나 로컬 파일은 기존 `source` 옵션으로 지정합니다. 기본 연결에는 인증키·비밀번호·게시본 해시가 없으며 네트워크 읽기는 list/open 후에만 수행합니다.

0.3.10부터 `new HttpChunkSource(new URL(sdkConnectionUrl))`에 편집기가 복사한 `.../levels/<scope>/delivery-models.json` 주소를 전달하면 게시 구역과 모델 ID를 자동으로 처리합니다. `listModels()`에서 읽은 이름으로 모델을 선택하고 반환된 `id`를 `open()`에 전달합니다. ID를 사용자에게 요구할 필요가 없습니다. 루트 주소를 알고 있다면 `new HttpChunkSource(baseURL, { scope })`도 같습니다. `source.connectionUrl`은 다시 공유할 수 있는 주소이며, `publicationConnectionUrl(baseURL, scope)`로 만들 수도 있습니다.

모델 목록은 `{ version: 1, scope, modelIds: string[] }`이며 64KiB·256모델 한도입니다. 이름과 게시 해시는 각 모델의 현재 head와 검증된 manifest에서 읽습니다. JSON 안의 URL·실행 코드·추가 필드는 거부합니다. 목록은 새 편집기로 **게시 완료한 뒤** 조건부 갱신하며, 중단된 등록은 게시 결과 재조회로 복구합니다. 구버전 게시본은 한 번 재게시하면 등록됩니다. 카탈로그는 모델 탐색용이며 이전 게시본 보관·삭제의 참조 루트가 아닙니다.

기존 `{ scope, compositionId }` 연결과 `.../levels/<scope>/<id>/delivery-head.json` 직접 주소도 지원합니다. 일반 내보내기 폴더는 그대로 동작합니다. 테스트 페이지의 마지막 연결 복원은 호스트 페이지 기능이며 `DeliveryClient` 자체는 localStorage를 사용하거나 임의의 연결을 자동 생성하지 않습니다.

```ts
interface DeliveryModel { readonly id: string; readonly name: string; readonly releaseHash: string }
interface DeliveryRelease { readonly model: DeliveryModel; readonly provider: ByteProvider }
interface DeliverySource {
  listModels(signal: AbortSignal): Promise<readonly DeliveryModel[]>;
  resolve(modelId: string, signal: AbortSignal): Promise<DeliveryRelease>;
  latestRelease?(modelId: string, signal: AbortSignal): Promise<string>;
}
interface ByteProvider {
  read(path: string, limit: number, signal: AbortSignal): Promise<Uint8Array>;
  authorize?(signal: AbortSignal): Promise<void>;
}
```

`LocalChunkSource(directory, { scope? })`는 읽기 전용 DirectoryHandle을 사용합니다. 일반 내보내기 루트의 head 또는 로컬 게시 저장소의 선택한 구역을 조회합니다. 목록 최대256개이며 손상된 게시본을 성공으로 숨기지 않습니다. 게시 head가 없는 업로드 중 폴더는 목록에 넣지 않습니다.

`HttpChunkSource(baseURL)`는 한 일반 내보내기 폴더의 head와 정적 파일을 GET으로 읽습니다. `HttpChunkSource(baseURL, { scope, compositionId })`는 버킷/접두사 루트에서 `levels/<scope>/<compositionId>/delivery-head.json`과 공유 `levels/objects`, `levels/releases`를 읽고 실제 manifest ID를 검증합니다. 주소는 HTTP/HTTPS, 끝의 `/`, 사용자/비밀번호·query·fragment 없음이 필요합니다. 익명 HTTP 읽기와 페이지 origin의 CORS 허용이 필요하며 인증된 S3 목록·서명은 구현하지 않습니다.

외부 호스트는 DeliverySource를 구현할 수 있습니다. adapter는 전달된 경로·크기 제한·AbortSignal을 지키고 인증을 유지해야 합니다. SDK는 manifest ID·canonical encoding·해시와 로드한 청크/파일의 크기·해시를 검사합니다. 이 검사가 저장소 사용자 권한을 대신하지 않습니다. package 데이터에서 저장소 주소나 실행 코드를 가져오지 않습니다.

## DeliveryClient

| 메서드/속성 | 결과·계약 |
|---|---|
| `new DeliveryClient(options)` | canvas 필수. source 생략 시 배포본 기본 저장소 사용. cache, budget, onProgress, onActorSelect, autoUpdate 선택 |
| `listModels(signal?)` | 복사된 모델 목록. source를 다시 읽으며 ID·중복·해시·이름 검증 |
| `open(modelId, options?)` | 기본 progressive true. 모델 확인 뒤 새 게시 해시를 고정하고 전체 초기 로드를 기다림 |
| `open` options | progressive, 원본 mount ID인 priority, AbortSignal |
| `cancel()` | 진행 중 해석/로드 취소. 이미 준비된 화면은 완료로 표시하지 않음 |
| `dispose()` | 진행 요청 취소, 이벤트/애드온/renderer 리소스 해제. 여러 번 호출 가능 |
| `model` | 현재 연결한 모델의 복사본 또는 null |
| `progress` | 실제 누적 다운로드 bytes/요청/cacheHits와 현재 셀 상태 |
| `subscribeProgress(listener)` | 해제 함수 반환. 관찰자 예외가 로드를 중단하지 않음 |
| `actors(query?)` | 이름으로 검색한 actor snapshots와 실제 loaded/available/focusable |
| `selectActor(target|null)` | 준비된 액터만 선택. null로 해제. 선택 셀 residency 보호 유지 |
| `focusActor(target)` | focusable 액터에 카메라 이동·선택 |
| `selectedActor` | 현재 선택의 복사본 또는 null |
| `subscribeActorSelection(listener)` | 실제 클릭과 함수 선택 알림, 해제 함수 반환 |
| `setViewMode(mode)` | lit, unlit, wireframe |
| `setProjection(projection)` | perspective, top, bottom, front, back, left, right |
| `setStaticBatching(enabled)` | 기본 false. 표시 최적화이며 Actor ID를 변경하지 않음 |
| `viewport` | 기존 DeliveryViewer의 저수준 화면/텍스처/환경광/예산 제어 |

0.3.9부터 `open()` 완료 후 기본 5초 간격으로 현재 모델의 최신 head를 확인합니다. 해시가 바뀌면 manifest·청크를 검증하고 새 화면 준비가 끝난 뒤 교체하며 카메라·투영·표시 설정을 유지합니다. 준비 실패 시 기존 화면을 유지하고 최대 60초 간격으로 재시도합니다. 네트워크 시간과 브라우저의 백그라운드 타이머 지연이 있어 반영은 즉시가 아닙니다. 자동 전환 시 실행 중 스크립트·속성은 새 게시본으로 재생성되며 이전 핸들은 다시 얻어야 합니다.

`autoUpdate: false`로 고정 게시본을 유지하거나 `autoUpdate: { intervalMs: 10000 }`으로 간격을 정합니다(1000~300000ms). `progress.update.state`는 disabled/stopped/watching/checking/updating/retrying이고 준비 중에는 `targetHash`를 제공합니다. Http/Local source는 작은 head만 확인합니다. 외부 source는 선택적 `latestRelease()`를 구현하면 같은 방식으로 확인하며, 생략하면 `resolve()`로 확인합니다. head는 신뢰 검증을 대신하지 않습니다.

같은 연결에서 open은 이전 열기·자동 갱신 요청을 취소합니다. 늦게 끝난 이전 요청이 새 연결을 덮어쓰지 않습니다. `cancel()`은 자동 확인도 중단하며 다시 `open()`하면 재개합니다. `dispose()`는 확인 타이머와 요청을 해제합니다. 수동 열기의 실패·취소는 Promise 거부와 progress status로 확인합니다. 요청 교체·dispose 이후 이전 스크립트 핸들은 무효입니다. 구버전 SDK나 아직 전환 중인 화면이 있으므로 새 게시 직후 이전 게시본을 즉시 삭제해도 안전하다는 의미는 아닙니다.

Actor target은 `{ mountId: string | null, actorId: string }`입니다. source UUID와 인스턴스 mount ID를 사용하며 표시 이름은 식별자가 아닙니다. full ActorPlacement에는 compositionId, releaseHash, serviceKey, 원본 metadata, 읽기 전용 component 목록과 위치가 있습니다. SDK 위치는 RH/Y-up/미터, Unreal-facing 위치는 별도 positionUeCm입니다.

## 스크립트 컴포넌트

| 함수 | 계약 |
|---|---|
| `sdk.scripts.list()` | 현재 로드된 스크립트 snapshot 목록. 점진 로딩 중 늘어남 |
| `sdk.scripts.get(target)` | mountId·actorId·componentId로 실행 준비된 인스턴스 핸들 |
| `sdk.scripts.subscribe(listener)` | 인스턴스/속성 변화 알림, 해제 함수 |
| `handle.snapshot()` | 공개 schema·values·revision·state·정확한 package reference와 releaseHash |
| `handle.schema` | 읽기 전용 타입·범위·access·storage·color format |
| `handle.getProperties()` | 공개 속성 값의 복사본, 마지막 관찰 revision 갱신 |
| `handle.setProperties(values, { expectedRevision? })` | 실행 중 변경. 기본값은 핸들이 마지막 관찰한 revision |
| `handle.subscribe(listener)` | 현재 값 한 번과 이후 변경 알림. values와 snapshot 전달 |
| `sdk.changeAddonProperties(change)` | 핸들 없이 target·values·expectedRevision을 명시해 실행 중 변경 |

숫자·boolean·문자열과 `#RRGGBB` 색상 형식을 지원합니다. 애드온 manifest의 properties 공개 선언과 Delivery capability가 필요합니다. 읽기 전용·storage persistent 전용·알 수 없는 속성·잘못된 타입/범위·revision 충돌·로드되지 않은 대상·다른 세션/코드 버전 핸들은 거부합니다.

이 기능은 현재 열린 화면의 실행 상태를 바꿉니다. 영구 저장과 다른 사용자 동기화는 기본 제공하지 않습니다. 호스트 연동이 필요한 고급 사용자는 `viewport.addons.bind(connection)`의 `AddonPropertyConnection`을 구현합니다. 인터페이스의 connect/list/change/subscribe/dispose는 호스트 책임이며 API 서버를 기본 실행하지 않습니다.

## 저수준·기존 공개 API

ChunkReader, MemoryChunkCache, BrowserChunkCache, httpByteProvider, DeliveryViewer, DeliverySession, Actor/Equipment indices, mountActorPanel, mountEquipmentPanel, mountDeliveryViewportTools, viewport.css와 검증된 Runtime/애드온 capability 타입은 유지합니다. 데이터 상태·renderer·호스트 저장은 분리되어 있습니다. 캐시는 폐기 가능한 데이터이며 인증·해시 검사를 우회하지 않습니다.

## 범위와 미지원

0.3.0의 첫 대상은 로컬 폴더와 정적 HTTP 파일입니다. 기본 S3 인증/discovery, shared/persistent 속성 저장, HTTP 승인·적용 서비스는 이 패키지에서 제공하지 않습니다. 브라우저 로컬 폴더 선택의 지원·권한은 호스트가 확인합니다. 기존 0.2.x API 사용 프로젝트는 위 연결 클래스와 직접 함수 호출로 이관해야 합니다.
