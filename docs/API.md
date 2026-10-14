# 공개 함수·타입 명세 · SDK 0.3.0

0.3.0은 조회 API 서버가 없는 브라우저 SDK입니다. `DeliveryApiClient`, `AddonPropertiesClient`, 서버 subpath와 CLI를 공개 패키지에서 제거했습니다. 기존 청크 계약1–5는 유지합니다. 아래 선언은 실제 TypeScript API를 요약한 것이며 생성된 `types/index.d.ts`가 정확한 계약입니다.

## 연결과 모델

```ts
interface DeliveryModel { readonly id: string; readonly name: string; readonly releaseHash: string }
interface DeliveryRelease { readonly model: DeliveryModel; readonly provider: ByteProvider }
interface DeliverySource {
  listModels(signal: AbortSignal): Promise<readonly DeliveryModel[]>;
  resolve(modelId: string, signal: AbortSignal): Promise<DeliveryRelease>;
}
interface ByteProvider {
  read(path: string, limit: number, signal: AbortSignal): Promise<Uint8Array>;
  authorize?(signal: AbortSignal): Promise<void>;
}
```

`LocalChunkSource(directory, { scope? })`는 읽기 전용 DirectoryHandle을 사용합니다. 일반 내보내기 루트의 head 또는 로컬 게시 저장소의 선택한 구역을 조회합니다. 목록 최대256개이며 손상된 게시본을 성공으로 숨기지 않습니다. 게시 head가 없는 업로드 중 폴더는 목록에 넣지 않습니다.

`HttpChunkSource(baseURL)`는 한 일반 내보내기 폴더의 head와 정적 파일을 GET으로 읽습니다. 주소는 HTTP/HTTPS, 끝의 `/`, 사용자/비밀번호·query·fragment 없음이 필요합니다. 인증된 S3 목록·서명은 구현하지 않습니다.

외부 호스트는 DeliverySource를 구현할 수 있습니다. adapter는 전달된 경로·크기 제한·AbortSignal을 지키고 인증을 유지해야 합니다. SDK는 manifest ID·canonical encoding·해시와 로드한 청크/파일의 크기·해시를 검사합니다. 이 검사가 저장소 사용자 권한을 대신하지 않습니다. package 데이터에서 저장소 주소나 실행 코드를 가져오지 않습니다.

## DeliveryClient

| 메서드/속성 | 결과·계약 |
|---|---|
| `new DeliveryClient(options)` | canvas, source 필수. cache, budget, onProgress, onActorSelect 선택 |
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

같은 연결에서 open은 이전 열기 요청을 취소합니다. 늦게 끝난 이전 요청이 새 연결을 덮어쓰지 않습니다. 이미 열린 화면은 목록 갱신만으로 자동 교체하지 않습니다. 실패·취소는 Promise 거부와 progress status로 확인합니다. 요청 교체·dispose 이후 이전 스크립트 핸들은 무효입니다.

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
