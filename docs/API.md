# SDK와 HTTP 연결

모든 브라우저 API는 `@dt/delivery-sdk`에서 import합니다. CSS는 `@dt/delivery-sdk/viewport.css`입니다. 공개 타입 선언도 패키지에 포함됩니다.

| SDK | 역할 |
|---|---|
| DeliveryApiClient.compositions(scope, page) | 게시된 통합레벨 목록 |
| publication(scope, compositionId) / releases(scope, compositionId) | 현재 게시 버전 / 이전 버전 목록 |
| actors(scope, compositionId, releaseHash, query, page) | 안정 ID의 배치/액터 검색 |
| provider(scope, compositionId, releaseHash) | 매 요청을 인증하는 청크 공급자 |
| ChunkReader / BrowserChunkCache | 바이트 크기/hash 검증과 선택적인 캐시 |
| DeliveryViewer.open(hash) / dispose() | 표시 / 화면과 실행 자원 정리 |
| viewer.session.control(mountId, values) | 실행 중 배치/표시/로드 상태 변경 |
| viewer.addons.list() / changeBatch() / subscribe() | 로드된 애드온과 공개 속성 제어 |
| AddonPropertiesClient / viewer.addons.bind(client) | HTTP 세션과 WebSocket 변경 알림 연결 |

좌표는 오른손·Y-up·미터·quaternion XYZW입니다. 같은 원본의 중복 배치는 mountId로 구분하고 애드온은 compositionId/mountId/actorId/componentId를 모두 사용합니다. 임시 runtime 변경과 host에 보관하는 persistent override를 구분합니다. 외부 변경을 에디터 원본에 자동으로 역기록하지 않습니다.

호스트의 기본 HTTP 계약:

- GET `/api/scopes/<scope>/compositions?page=0`
- GET `/api/scopes/<scope>/compositions/<id>/publication`
- GET `/api/scopes/<scope>/compositions/<id>/releases`
- GET `/api/scopes/<scope>/compositions/<id>/releases/<hash>/actors?q=...&page=0`
- GET `/api/delivery/<scope>/<id>/<hash>/authorize`
- GET `/api/delivery/<scope>/<id>/<hash>/releases/<hash>.json`
- GET `/api/delivery/<scope>/<id>/<hash>/objects/<chunkHash>`

애드온 제어에는 등록된 appId와 release pin이 필요합니다. GET `/api/apps/<app>/addons`, `/schema`, `/values`; POST `/sessions`, `/properties`; WS `/events`를 사용합니다. 목록/스키마/현재값은 releaseHash query, 실행 임시값은 executionId, 한 인스턴스는 URL 인코딩한 target JSON을 사용합니다. AddonPropertiesClient가 인증과 알림 세션을 처리합니다. WebSocket 토큰을 URL에 넣지 않습니다.

필요한 호스트 설정은 API 주소, 로그인/테스트 인증, scope, compositionId, 애드온 제어용 appId입니다. scope는 게시 구역 이름이며 S3 access key와 다릅니다. Node 조회 API 서버는 같은 패키지의 `server/`에 포함됩니다. SDK0.2.5의 원격 연결은 `pnpm exec dt-delivery-api init` → 실제 설정·키 작성 → config의 compositionIds에 실제 통합레벨 ID 설정 → `start`입니다. 시작할 때 새 게시본을 검증·자동 등록하고 주기 감시는 하지 않습니다. 재업로드 후 API를 재시작하고 화면의 목록 갱신·게시본 다시 열기를 진행합니다. JSON 수동 register도 유지됩니다. [서버 안내](SERVER.md)를 참고하세요. 실제 모델·키·운영 로그인/HTTPS 설정은 외부 프로젝트에서 공급합니다.
