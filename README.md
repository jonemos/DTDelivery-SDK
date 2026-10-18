# DT Delivery SDK 0.3.13

DT Web Editor에서 게시한 통합레벨을 웹에서 표시하는 SDK입니다. 기본 저장소의 모델을 이름으로 선택해 열고, 점진 로딩·액터 선택·카메라·표시 옵션·스크립트 공개 속성을 제어합니다. 테스트 페이지와 개발용 클래스·함수를 함께 제공합니다.

## 바로 실행하기

1. [최신 SDK ZIP](https://github.com/jonemos/DTDelivery-SDK/archive/refs/heads/main.zip)을 받아 **전체 압축 해제**합니다.
2. `examples/test-server.cmd`를 실행합니다.
3. Chrome 또는 Edge에서 열린 페이지의 모델 목록을 확인합니다. 모델이 하나면 자동으로 열리고, 여러 개면 이름을 선택한 뒤 **게시본 열기**를 누릅니다.

Windows 10/11의 기본 PowerShell로 미리 빌드한 페이지를 실행합니다. **Node.js·pnpm·Python 설치나 시작 시 다운로드가 필요 없습니다.** 기본 주소는 `http://127.0.0.1:5183/`입니다. SDK 전체 폴더와 실행 창을 유지하세요. 서버 종료는 실행 창에서 `Ctrl+C`입니다.

Git 사용자는 다음 명령으로 받은 폴더에서 같은 CMD를 실행합니다.

```powershell
git clone https://github.com/jonemos/DTDelivery-SDK.git
cd DTDelivery-SDK
.\examples\test-server.cmd
```

## 모델 연결

기본 저장소는 첫 실행 시 자동 연결됩니다. 제작자가 편집기에서 통합레벨을 게시하면 사용자는 별도 주소나 통합레벨 ID 입력 없이 모델 이름으로 열 수 있습니다. 목록이 비어 있으면 게시 완료 여부를 확인하고 **목록 조회**를 누르세요.

다른 위치의 청크를 읽을 때는 다음 연결을 사용합니다.

| 청크 위치 | 연결 방법 |
| --- | --- |
| 원격 게시 저장소 | 제작자가 제공한 **SDK 연결 주소**를 입력하고 **목록 조회**를 누릅니다. 같은 저장소의 새 게시본에도 같은 주소를 사용합니다. |
| 로컬 청크 폴더 | **청크 폴더 선택**으로 폴더를 고르고 읽기 권한을 허용합니다. 일반 청크는 `delivery-head.json`·`objects`·`releases`가 있는 루트, 게시 저장소는 `levels`가 있는 루트 또는 `levels` 자체를 선택하고 게시 구역을 맞춥니다. |
| 정적 청크 주소 | 일반 청크 내보내기 폴더의 HTTP 주소를 입력합니다. 예: `https://example.com/chunks/`. |

테스트 페이지는 새 모델 목록을 기본 10초마다, 열린 모델의 새 게시본을 기본 5초마다 확인합니다. 새 게시본은 검증과 준비를 마친 뒤 자동 반영하며 카메라·표시 설정을 유지합니다. 갱신에 실패하면 현재 화면을 유지하고 재시도합니다.

마지막 원격 연결과 모델 선택은 브라우저에 저장합니다. **연결 해제**는 저장한 연결을 지우고 다음 실행의 기본 자동 연결도 해제합니다. 다시 연결하려면 청크 위치와 주소를 지정해 목록을 조회하세요. 다른 도메인의 저장소는 공개 읽기와 CORS를 허용해야 합니다. 접속 키는 테스트 페이지·SDK·공개 Git에 넣지 마세요.

페이지 왼쪽에서 액터를 검색·선택하고 오른쪽에서 로드 진행·선택 정보·스크립트 공개 속성을 확인할 수 있습니다. 기능별 실행 예제에서는 코드·입력값·결과를 함께 확인합니다.

## 재질과 텍스처

기본 PBR의 Base Color·Normal·Roughness·Metallic·Opacity·Emissive를 표시합니다. SDK는 편집기가 청크에 저장한 변환·베이크 결과를 읽으며, 원본 Unreal 재질 그래프를 실행하지 않습니다.

마스크 컷아웃과 반투명을 지원합니다. 뷰포트 **표시** 메뉴에서 텍스처 표시를 조정할 수 있고, 색상 텍스처를 꺼도 Opacity에 필요한 알파와 투명도는 유지합니다. 굴절·WPO 등 원본 효과와 Unreal 조명까지 동일한 외형을 보장하지는 않습니다.

## SDK 업데이트

1. 테스트 서버를 `Ctrl+C`로 종료합니다.
2. SDK 루트의 `update.cmd`를 실행합니다.
3. 완료 후 `examples/test-server.cmd`를 다시 실행하고 브라우저 페이지를 새로고침합니다.

공식 `main`의 배포 파일 해시를 확인하고 백업한 뒤 교체합니다. ZIP 사본은 Git·Node.js·pnpm 설치 없이 업데이트하고, Git 사본은 설치된 Git을 사용합니다. 직접 수정한 배포 파일이 있으면 업데이트를 중단합니다. 모델과 개인 설정은 SDK 배포 파일과 분리해 보관하세요. 자세한 절차는 [업데이트·복구 안내](docs/UPDATING.md)를 참고하세요.

## 개발 프로젝트에서 사용하기

직접 웹페이지를 만드는 개발자는 Node.js와 pnpm이 있는 프로젝트에 설치합니다. 미리 빌드한 테스트 페이지를 쓰는 경우에는 이 설치가 필요 없습니다.

```powershell
pnpm add '@dt/delivery-sdk@github:jonemos/DTDelivery-SDK#v0.3.13'
```

```ts
import { DeliveryClient } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export async function mountDelivery(canvas: HTMLCanvasElement) {
  const sdk = new DeliveryClient({ canvas });
  const models = await sdk.listModels();
  if (models.length) await sdk.open(models[0]!.id, { progressive: true });
  return sdk;
}

// 페이지나 컴포넌트를 제거할 때 반환된 SDK의 await sdk.dispose()를 호출합니다.
```

canvas와 부모 요소에 실제 폭·높이를 지정하세요. `source`를 생략하면 기본 저장소를 사용합니다. 다른 연결은 `HttpChunkSource` 또는 `LocalChunkSource`로 지정하고, 앱에서 모델 목록을 제공해 선택한 ID로 `sdk.open(modelId)`를 호출합니다. 열린 모델의 자동 갱신을 끄려면 생성 옵션에 `autoUpdate: false`를 전달합니다.

| 기능 | 주요 호출 |
| --- | --- |
| 모델 목록·열기 | `sdk.listModels()`, `sdk.open(modelId)` |
| 진행 상태 | `sdk.progress`, `sdk.subscribeProgress(listener)` |
| 액터 검색·선택·포커스 | `sdk.actors(query)`, `sdk.selectActor(target)`, `sdk.focusActor(target)` |
| 화면 모드·바운드 | `sdk.setViewMode(mode)`, `sdk.viewport.setBounds(enabled)` |
| 스크립트 공개 속성 | `sdk.scripts.list()`, `sdk.scripts.get(target)` |
| 취소·종료 | `sdk.cancel()`, `await sdk.dispose()` |

[API 명세](docs/API.md), [기능별 개발 가이드](docs/guides/README.md), [페이지 구성 가이드](docs/guides/14_PAGE_LAYOUT.md), [예제 소스 개발](examples/web/README.md)에서 상세한 사용법을 확인할 수 있습니다.

## 문제 해결

| 증상 | 확인할 내용 |
| --- | --- |
| 모델 목록이 비어 있음 | 편집기의 게시 완료 여부, 선택한 저장소·게시 구역과 네트워크를 확인한 뒤 **목록 조회**를 누릅니다. |
| 원격 파일을 읽지 못함 | SDK 연결 주소, 공개 읽기 권한, CORS와 페이지·청크 주소의 HTTPS 구성을 확인합니다. |
| 로컬 폴더를 읽지 못함 | Chrome/Edge에서 올바른 루트를 다시 선택하고 읽기 권한을 허용합니다. |
| 해시·참조 검증 실패 | 제작자가 게시본을 복구한 뒤 다시 엽니다. 검증을 우회하거나 청크 파일을 직접 고치지 않습니다. |
| 서버 실행·업데이트 실패 | SDK 전체 압축 해제 여부와 실행 중인 테스트 서버를 확인합니다. 포트 5183을 쓰는 기존 서버를 종료하고 다시 실행합니다. |
