# DT Delivery SDK 0.3.12

편집기에서 게시한 청크를 웹에서 불러오는 SDK입니다. 모델 목록·점진 로딩·액터 선택·카메라·스크립트 공개 속성을 클래스와 함수로 제어합니다. 별도 Delivery API 서버는 필요하지 않습니다.

## 바로 실행하기

1. [최신 SDK ZIP](https://github.com/jonemos/DTDelivery-SDK/archive/refs/heads/main.zip)을 받아 **전체 압축 해제**합니다.
2. `examples/test-server.cmd`를 실행합니다.
3. Chrome 또는 Edge에서 **목록 조회 → 모델 선택 → 모델 불러오기**를 누릅니다.

Windows 10/11 기본 PowerShell을 사용합니다. **Node.js·pnpm·Python 설치와 첫 실행 다운로드가 필요 없습니다.** 기본 주소는 `http://127.0.0.1:5183/`입니다. SDK 전체 폴더를 유지하고 실행 창을 열어 두세요. 종료는 `Ctrl+C`입니다.

Git 사용자는 `git clone https://github.com/jonemos/DTDelivery-SDK.git` 실행 후 받은 폴더에서 같은 CMD를 실행합니다.

## 모델 연결

- **기본 저장소**: 기본 선택 상태로 목록을 조회하고 모델 이름을 선택합니다. 제작자가 게시하면 사용자가 주소나 통합레벨 ID를 입력할 필요가 없습니다. 모델이 하나면 자동 선택합니다.
- **원격 게시 저장소**: 제작자가 제공한 **SDK 연결 주소**로 목록을 조회합니다. 같은 저장소에 다시 게시할 때 주소를 바꾸지 않습니다.
- **로컬 청크 폴더**: 폴더를 선택하고 읽기 권한을 허용합니다. 일반 청크는 `delivery-head.json`, `objects`, `releases`가 있는 루트, 게시 저장소는 `levels`가 있는 루트 또는 `levels` 자체를 선택합니다.
- **정적 청크 주소**: 일반 청크 폴더의 HTTP 주소를 입력합니다. 예: `https://example.com/chunks/`.

마지막 연결과 모델 선택을 브라우저에 저장합니다. **연결 해제**는 저장한 연결도 지웁니다. 새 게시본은 기본적으로 5초마다 확인해 자동 갱신합니다. 다른 도메인의 저장소에는 공개 읽기와 CORS가 필요합니다. 접속 키는 SDK나 공개 Git에 넣지 마세요.

## 재질과 텍스처

기본 PBR의 Base Color·Normal·Roughness·Metallic·Opacity·Emissive를 표시합니다. 편집기는 가져오기 시 모든 재질을 기본 PBR로 변환하며 SDK는 베이크 결과를 읽습니다. Unreal 노드 그래프·굴절·WPO 등 원본 효과는 실행하지 않습니다.

마스크 컷아웃과 반투명을 지원합니다. 텍스처 색상 표시를 꺼도 Opacity에 필요한 알파 텍스처와 투명도는 유지합니다. 새 반투명 베이크 게시본은 SDK 0.3.12 이상을 사용하세요. Unreal 조명과의 동일한 외형을 보장하는 것은 아닙니다.

## SDK 업데이트

1. 테스트 서버를 `Ctrl+C`로 종료합니다.
2. SDK 루트의 `update.cmd`를 실행합니다.
3. 완료 후 `examples/test-server.cmd`를 다시 실행하고 페이지를 새로 엽니다.

공식 `main`의 파일 해시를 검사하고 백업 후 교체합니다. ZIP 사본은 Git·Node.js·pnpm 설치 없이 업데이트하며 Git 사본은 기존 Git을 사용합니다. 직접 수정한 배포 파일이 있으면 중단합니다. 모델과 개인 설정은 SDK 배포 파일 밖에 보관하세요. [업데이트·복구 안내](docs/UPDATING.md), [변경 이력](CHANGELOG.md)을 참고하세요.

## 개발 프로젝트에서 사용하기

개발 환경에서만 패키지를 설치합니다. 완성된 웹페이지 사용자는 Node.js나 pnpm을 설치하지 않습니다.

```powershell
pnpm add '@dt/delivery-sdk@github:jonemos/DTDelivery-SDK#v0.3.12'
```

```ts
import { DeliveryClient } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

const sdk = new DeliveryClient({ canvas });
const models = await sdk.listModels();
if (models.length) await sdk.open(models[0]!.id, { progressive: true });
// 페이지나 컴포넌트를 제거할 때: await sdk.dispose();
```

canvas와 부모에 실제 폭·높이를 지정하세요. `source` 생략 시 기본 저장소를 사용하며 자체 연결은 `HttpChunkSource` 또는 `LocalChunkSource`로 지정합니다. 자동 갱신을 끄려면 `autoUpdate: false`를 전달합니다.

| 기능 | 주요 호출 |
| --- | --- |
| 모델 목록·열기 | `sdk.listModels()`, `sdk.open(modelId)` |
| 진행 상태 | `sdk.progress`, `sdk.subscribeProgress(listener)` |
| 액터 검색·선택·포커스 | `sdk.actors(query)`, `sdk.selectActor(target)`, `sdk.focusActor(target)` |
| 화면·바운드 | `sdk.setViewMode(mode)`, `sdk.viewport.setBounds(enabled)` |
| 스크립트 공개 속성 | `sdk.scripts.list()`, `sdk.scripts.get(target)` |
| 취소·종료 | `sdk.cancel()`, `await sdk.dispose()` |

[API 명세](docs/API.md), [기능별 개발 가이드](docs/guides/README.md), [페이지 구성 가이드](docs/guides/14_PAGE_LAYOUT.md), [예제 소스 개발](examples/web/README.md)을 참고하세요. 테스트 페이지의 기능별 예제에서 코드·입력값·결과를 확인할 수 있습니다.

## 문제 해결

목록이 비어 있으면 게시 완료 여부·네트워크·SDK 버전을 확인하고 목록을 다시 조회하세요. 원격 읽기 실패는 연결 주소·공개 읽기·CORS·HTTPS를 확인합니다. 로컬 권한 오류는 폴더를 다시 선택하고 hash·참조 오류는 제작자가 게시본을 복구한 후 재시도합니다. 포트 5183 오류는 기존 테스트 서버 종료 후 다시 실행하세요.
