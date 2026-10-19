# DT Delivery SDK 0.3.17

DT Web Editor에서 게시한 통합레벨을 웹에서 표시하는 SDK입니다. 미리 빌드한 테스트 페이지로 바로 확인하거나 외부 웹 프로젝트에 연결할 수 있습니다. 모델 목록·점진 로딩·액터 검색과 선택·카메라·표시 옵션·스크립트 공개 속성을 제공합니다.

## 바로 실행하기

처음 받는 PC에서는 **Git으로 한 번만 복제한 뒤 사용하는 방식**을 권장합니다. Git이 설치된 Windows 10/11에서 PowerShell을 열고, SDK를 보관할 쓰기 가능한 폴더에서 다음 명령을 순서대로 실행하세요. Git이 없다면 [Git for Windows](https://git-scm.com/downloads/win)를 먼저 설치하고 PowerShell을 다시 엽니다. 공개 저장소이므로 다운로드에 GitHub 로그인은 필요 없습니다.

```powershell
git clone https://github.com/jonemos/DTDelivery-SDK.git
cd DTDelivery-SDK
.\examples\test-server.cmd
```

Chrome 또는 Edge에서 열린 테스트 페이지를 확인합니다. 기본 주소는 `http://127.0.0.1:5183/`입니다. 모델이 하나면 자동으로 열리고, 여러 개면 이름을 선택한 뒤 **게시본 열기**를 누릅니다. 테스트 서버 창은 사용하는 동안 유지하고, 종료할 때는 그 창에서 `Ctrl+C`를 누릅니다.

**테스트 페이지 실행에는 Node.js·pnpm·Python 설치나 패키지 다운로드가 필요 없습니다.** Windows 기본 PowerShell을 사용합니다. 최초 Git clone과 SDK 업데이트에는 인터넷이 필요하고, 원격 모델을 볼 때는 모델 저장소에도 연결되어야 합니다. 다음부터는 받은 폴더의 `examples/test-server.cmd`만 실행하면 됩니다.

Git을 설치하기 어려운 PC는 [최신 SDK ZIP](https://github.com/jonemos/DTDelivery-SDK/archive/refs/heads/main.zip)을 **전체 압축 해제**하고 같은 파일을 실행하세요. ZIP 사본도 `update.cmd`로 업데이트할 수 있습니다. SDK 폴더를 통째로 유지하고 테스트 페이지 HTML만 따로 실행하지 마세요.

## 모델 연결

제작자는 편집기에서 레벨을 저장하고 통합레벨에 추가한 다음 **청크 패키지**로 게시하거나 전체 패키지를 내보냅니다. SDK에는 게시된 청크와 연결 주소를 전달합니다. 에디터의 작업 폴더·Unreal 프로젝트·쓰기용 접속 키는 필요하지 않습니다. [처음 전달하는 순서와 준비물](docs/guides/18_FIRST_DELIVERY.md)을 참고하세요.

첫 실행은 기본 저장소에 자동 연결됩니다. 제작자가 편집기에서 통합레벨을 게시하면 사용자는 주소나 통합레벨 ID를 입력하지 않고 모델 이름으로 열 수 있습니다. 목록이 비어 있으면 게시 완료 여부를 확인하고 **목록 조회**를 누르세요.

다른 저장소나 로컬 청크는 **청크 위치**에서 연결 방법을 선택합니다.

| 청크 위치 | 연결 방법 |
| --- | --- |
| 원격 게시 저장소 | 제작자가 제공한 **SDK 연결 주소**를 입력하고 **목록 조회**를 누릅니다. 같은 저장소의 새 게시본에도 같은 주소를 사용합니다. |
| 로컬 청크 폴더 | **청크 폴더 선택**으로 폴더를 고르고 읽기 권한을 허용합니다. 일반 내보내기는 `delivery-head.json`·`objects`·`releases`가 있는 루트, 게시 저장소는 `levels`가 있는 루트 또는 `levels` 자체를 선택하고 게시 구역을 맞춥니다. |
| 정적 청크 주소 | 일반 청크 내보내기 폴더의 HTTP 주소를 입력합니다. 예: `https://example.com/chunks/`. |

테스트 페이지는 새 모델 목록을 기본 10초마다, 열린 모델의 새 게시본을 기본 5초마다 확인합니다. 새 게시본을 검증하고 표시 준비를 마친 뒤 전환하며 카메라·표시 설정을 유지합니다. 갱신에 실패하면 현재 화면을 유지하고 재시도합니다.

마지막 원격 연결과 모델 선택은 브라우저에 저장합니다. **연결 해제**는 저장한 연결과 다음 실행의 기본 자동 연결도 해제합니다. 다시 연결하려면 청크 위치와 주소를 지정해 목록을 조회하세요. 원격 저장소는 공개 읽기와 페이지 origin의 CORS를 허용해야 합니다. 접속 키를 페이지·SDK·공개 Git에 넣지 마세요.

## 화면과 표시 설정

왼쪽 아웃라이너에서 액터를 검색·선택하고, 오른쪽에서 로드 진행·선택 정보·스크립트 공개 속성을 확인합니다. 기능별 예제에서는 실제 코드·입력값·실행 결과를 함께 볼 수 있습니다.

뷰포트의 원근/직교·라이팅·표시 메뉴로 화면을 조정합니다. **바운드**는 원본 메시와 함께 액터의 경계 상자를 표시하는 보조선입니다. 개발 호스트는 공간 경계가 있는 게시본에 거리 기반 자동 언로드를 선택적으로 적용할 수 있습니다. 언로드는 표시 자원에 영향을 주고 가까워지면 복원 준비가 필요하므로, 실제 모델의 이동 범위와 메모리 예산에 맞춰 설정하세요.

기본 PBR의 Base Color·Normal·Roughness·Metallic·Opacity·Emissive와 편집기가 저장한 변환·베이크 결과를 표시합니다. **표시 → 텍스처**에서 사용할 맵과 표시 크기를 선택하고 적용합니다. 크기는 **128·256·512px**, 모든 맵의 최대 표시 크기는 **512px**입니다. 텍스처 표시 설정은 원본 에셋이나 저장 레벨을 변경하지 않습니다.

타일링 재질은 가져오기에서 보존한 원본 UV 반복·미러·배율·오프셋과 베이크 결과를 사용합니다. 텍스처 준비 완료를 확인한 뒤 비교하세요. 편집기·통합레벨·SDK의 같은 외형을 비교하려면 카메라·라이팅/언릿·환경광과 강도·Render Quality·텍스처 맵/크기를 맞춰야 합니다. 각 화면의 작업용 패널·기즈모와 선택 상태는 용도가 다르며, 뷰포트 환경설정 전체가 청크에 자동 저장되지는 않습니다.

SDK의 초기 수평 FOV는 90°, Near/Far는 0.01/2000m, 환경광 강도는 0.2입니다. 화면 크기를 바꿔도 수평 FOV는 유지됩니다. SDK API의 환경광은 기본 꺼짐이고, 제공된 테스트 페이지는 모델을 보기 쉽도록 환경광을 켜서 시작합니다. 편집기·통합레벨의 개인 설정과 비교할 때 이 상태도 맞추세요.

마스크 컷아웃과 반투명을 지원하며 색상 텍스처를 꺼도 Opacity에 필요한 알파는 유지합니다. 원본 Unreal 재질 그래프·굴절·WPO와 Unreal 조명 전체를 재현하지는 않습니다. 메모리 예산의 `0`은 자동 선택을 뜻합니다. [텍스처·메모리 가이드](docs/guides/10_TEXTURES_BUDGET.md)에서 표시 예산과 캐시의 차이, API 사용법을 확인하세요.

## SDK 업데이트

1. 실행 중인 테스트 서버를 `Ctrl+C`로 종료합니다.
2. **처음 받은 SDK 폴더 안의 `update.cmd`를 더블클릭**합니다. PowerShell에서는 아래 명령을 실행합니다.
3. 완료 후 `examples/test-server.cmd`를 다시 실행하고 브라우저 페이지를 새로고침합니다.

```powershell
.\update.cmd
```

이후 업데이트도 **같은 `update.cmd` 한 번**으로 SDK의 실행 파일·타입·문서·테스트 페이지를 함께 갱신합니다. 다시 clone하거나 별도로 `git pull`을 실행할 필요가 없습니다. `Updated SDK ...` 또는 `already up to date` 메시지를 확인하세요. 오류가 나면 실행 창의 메시지를 확인하고 [업데이트·복구 안내](docs/UPDATING.md)를 따릅니다.

공식 `main`의 파일 해시를 확인하고 백업한 뒤 교체합니다. Git 사본은 설치된 Git을 사용하고, ZIP 사본은 Git 없이 업데이트합니다. SDK 파일을 직접 수정했다면 덮어쓰지 않고 중단합니다. 모델·개인 설정·자체 앱 코드는 SDK 폴더 밖에 보관하세요.

**이 명령이 갱신하는 범위는 실행한 SDK 폴더입니다.** 다른 웹 프로젝트에 패키지로 설치했거나 파일을 복사해 넣었다면, 그 프로젝트의 SDK 의존성/사본을 갱신한 뒤 다시 빌드·배포해야 합니다. 모델 데이터는 제작자가 재게시하며 SDK 프로그램 업데이트와 별개입니다.

## 다른 사람에게 전달하기

공식 저장소 주소 `https://github.com/jonemos/DTDelivery-SDK.git`와 이 README를 전달하세요. 처음 사용하는 사람에게는 **모델 이름, 기본 저장소 사용 여부 또는 SDK 연결 주소/전체 청크 폴더, 실행 순서, 문의 담당자**도 알려줍니다. SDK Git에는 모델 데이터와 편집기 실행 파일이 포함되지 않습니다. 기본 저장소를 사용한다면 별도 주소 입력 없이 모델 이름으로 열 수 있습니다.

일반 조회 사용자는 위의 **바로 실행하기 → 모델 연결 → SDK 업데이트** 순서로 읽으면 됩니다. 외부 앱 개발자에게는 아래 개발 절차와 [호스트 적용 가이드](docs/guides/17_HOST_INTEGRATION.md)를 함께 전달하세요. 그대로 보낼 실행 안내와 전달 메모 양식은 [첫 전달 안내](docs/guides/18_FIRST_DELIVERY.md)에 있습니다.

## 개발 프로젝트에서 사용하기

직접 웹페이지를 만드는 개발자는 Node.js·pnpm 프로젝트에 다음 패키지를 연결합니다. 미리 빌드한 테스트 페이지를 실행할 때는 이 설치가 필요 없습니다.

```powershell
pnpm add '@dt/delivery-sdk@github:jonemos/DTDelivery-SDK#v0.3.17'
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

canvas와 부모 요소에 실제 폭·높이를 지정하세요. `source` 생략 시 기본 저장소를 사용하고, 다른 연결은 `HttpChunkSource` 또는 `LocalChunkSource`로 지정합니다. 앱에서 선택한 모델 ID로 `sdk.open(modelId)`를 호출하고 종료 시 `await sdk.dispose()`로 자원을 해제합니다. 열린 모델의 자동 갱신을 끄려면 생성 옵션에 `autoUpdate: false`를 전달합니다.

| 기능 | 주요 호출 |
| --- | --- |
| 모델 목록·열기 | `sdk.listModels()`, `sdk.open(modelId)` |
| 진행 상태 | `sdk.progress`, `sdk.subscribeProgress(listener)` |
| 액터 검색·선택·포커스 | `sdk.actors(query)`, `sdk.selectActor(target)`, `sdk.focusActor(target)` |
| 화면 모드·바운드 | `sdk.setViewMode(mode)`, `sdk.viewport.setBounds(enabled)` |
| 거리 기반 언로드 | `sdk.viewport.setSpatialStreaming(options)`, 해제는 `null` 전달 |
| 스크립트 공개 속성 | `sdk.scripts.list()`, `sdk.scripts.get(target)` |
| 취소·종료 | `sdk.cancel()`, `await sdk.dispose()` |

[외부 개발 도구에 포함하는 방법](docs/guides/17_HOST_INTEGRATION.md)은 Git 패키지 설치·정적 파일 포함·SPA 정리·배포 확인을 설명합니다. VS Code 같은 개발 도구에서 기존 웹 프로젝트에 적용할 때 이 문서부터 읽으세요. [API 명세](docs/API.md), [기능별 개발 가이드](docs/guides/README.md), [페이지 구성 가이드](docs/guides/14_PAGE_LAYOUT.md), [예제 소스 개발](examples/web/README.md)에서 상세한 계약과 사용법을 확인할 수 있습니다.

## 문제 해결

| 증상 | 확인할 내용 |
| --- | --- |
| 모델 목록이 비어 있음 | 편집기의 게시 완료 여부·저장소·게시 구역·네트워크를 확인하고 **목록 조회**를 누릅니다. |
| 원격 읽기 실패 | SDK 연결 주소·공개 읽기 권한·CORS·페이지와 청크의 HTTPS 구성을 확인합니다. |
| 로컬 폴더 권한 오류 | Chrome/Edge에서 올바른 루트를 다시 선택하고 읽기 권한을 허용합니다. |
| 흰색·회색 또는 어두운 모델 | 텍스처 적용 완료와 베이스 컬러 선택을 확인합니다. 언릿으로 색상을 확인하고 라이팅에서는 환경광·실제 조명·강도를 확인합니다. 가져오기 경고가 있으면 제작자가 실패 항목을 복구한 뒤 다시 게시합니다. |
| 원거리 객체가 보이지 않음 | 호스트가 설정한 공간 언로드 범위와 현재 로딩 상태를 확인합니다. |
| 해시·참조 오류 | 제작자가 게시본을 복구한 뒤 다시 엽니다. 청크 파일을 직접 고치거나 검증을 우회하지 않습니다. |
| 서버 실행·업데이트 실패 | 전체 압축 해제 여부를 확인하고, 포트5183을 사용하는 기존 테스트 서버를 종료한 뒤 다시 실행합니다. |
