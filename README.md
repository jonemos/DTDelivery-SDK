# DT Delivery SDK 0.3.10

브라우저에서 제작된 청크를 검증하고 3D 모델을 보여주는 SDK입니다. **0.3.0부터 별도의 Delivery API 서버를 실행하지 않습니다.** 클래스와 함수로 모델 목록, 점진 로딩, 액터 선택, 스크립트 공개 속성을 제어합니다. 기존 청크 계약1–5와 Atlas는 유지됩니다.

**0.3.10은 현재 저장소가 미리 연결된 배포본입니다. 첫 게시 때도 사용자에게 주소나 ID를 전달할 필요가 없습니다.** 테스트 페이지를 실행하면 기본 저장소의 모델 목록을 자동으로 읽고 이름으로 선택할 수 있습니다. 모델이 하나면 바로 열고, 마지막 연결·선택한 모델은 다음 실행 때 복원합니다. 같은 모델의 재게시에는 같은 주소를 사용하며 열린 화면은 자동 갱신합니다. **연결 해제**는 저장한 연결도 지웁니다. 브라우저 저장소가 비활성화되면 기억 기능은 사용할 수 없습니다. 구버전 편집기로만 게시한 모델은 최신 편집기에서 한 번 다시 게시하면 목록에 등록됩니다.

**0.3.9부터 열린 모델도 최신 게시본으로 자동 갱신합니다.** 기본 5초 간격으로 head를 확인하고 새 게시본 검증·준비 후 화면을 교체합니다. 카메라와 표시 설정은 유지하며 준비 실패 시 현재 화면을 유지하고 재시도합니다. 테스트 페이지의 로드 진행 영역에서 갱신 상태를 확인하세요. `new DeliveryClient({ canvas, source, autoUpdate: false })`로 끌 수 있습니다. 이전 SDK는 `update.cmd` 실행 후 페이지를 새로 열어야 이 기능이 적용됩니다. 실행 중 스크립트 상태는 새 게시본으로 초기화됩니다.

**0.3.4부터 Windows 테스트 서버는 Node.js·pnpm 설치 없이 실행합니다.** SDK 전체 ZIP을 압축 해제하고 `examples/test-server.cmd`를 실행하세요. 미리 빌드한 예제와 Windows 기본 PowerShell을 사용하며 첫 실행에도 패키지를 다운로드하지 않습니다. 예제 소스 개발은 `examples/dev-server.cmd`로 분리했습니다.

**0.3.6부터 SDK 루트의 `update.cmd`를 더블 클릭해 업데이트합니다.** 테스트 서버를 먼저 종료하세요. 공식 저장소의 최신 main을 정확한 커밋으로 고정해 받고 모든 파일 해시를 확인한 뒤 교체합니다. ZIP 사본은 Git·Node.js·pnpm 설치가 필요 없으며, Git으로 받은 사본은 기존 Git을 사용하고 브랜치·태그를 보존합니다. 직접 수정한 SDK 파일은 덮어쓰지 않습니다. 사용자 모델·설정·node_modules는 교체 대상이 아닙니다. [업데이트 방법과 백업](docs/UPDATING.md)을 참고하세요.

0.3.1은 통합레벨과 같은 뷰포트 메뉴 간격·입력 스타일을 적용합니다. 표시 메뉴의 아이콘·아이콘 크기 항목을 제거하고 실제 액터의 **바운드** 표시를 제공합니다. 원본 청크와 Actor 선택은 유지됩니다.

0.3.2는 예제 페이지의 상단을 로고·상태 메시지 / 연결 필드·버튼의 두 줄로 압축하고 좌우 패널의 검색·선택 정보·실제 로드 상태를 정리합니다. 뷰포트와 뷰포트 메뉴는 그대로입니다.

0.3.3은 예제 페이지 왼쪽에서 **기능별 예제21개를 선택·실행**하고 오른쪽에서 실제 코드·입력값·결과를 볼 수 있습니다. 코드 복사·줄바꿈·기능 문서 연결과 정지/복원도 제공합니다. 청크/액터/스크립트가 필요한 예제는 실제 준비 조건을 안내합니다. [실행 예제 사용법](docs/guides/16_FEATURE_PLAYGROUND.md)을 참고하세요. 뷰포트와 기본 메뉴의 코드·크기는 유지합니다.

외부 프로젝트에 같은 화면을 구성하려면 **[기능별 개발 가이드](docs/guides/README.md)**를 읽으세요. 설치부터 로컬/HTTP 연결, 모델 목록·열기, 진행 상태, 액터 검색·선택·상세, 뷰포트 도구·카메라·텍스처, 스크립트 속성, 외부 업무 데이터와 종료 처리까지 각각 클래스·함수·값·복사 가능한 예제로 설명합니다. [전체 화면 구성](docs/guides/14_PAGE_LAYOUT.md)은 예제 DOM과 SDK 호출의 대응표를 제공합니다. 가이드는 SDK0.3.2 API 기준의 문서 보강이며 기존 버전 태그를 변경하지 않습니다.

## 1. 0.3.0에서 달라진 연결 방식

| 항목 | 0.3.0 사용 방법 |
|---|---|
| 모델 목록·열기 | `DeliveryClient`의 `listModels()`·`open()` 직접 호출 |
| 로컬 청크 | `LocalChunkSource`와 브라우저의 읽기 전용 폴더 선택 |
| 원격 웹 청크 | `HttpChunkSource`로 일반 내보내기 폴더 또는 scope·통합레벨 ID를 지정한 원격 게시 저장소 읽기. 공개 GET·CORS 필요 |
| 스크립트 공개 속성 | `sdk.scripts`로 현재 로드된 인스턴스 조회·실행 중 변경 |
| 기존 청크 | 계약 1–5와 Atlas 지원 유지. SDK 업데이트가 청크를 재제작하지 않음 |

`DeliveryApiClient`, `AddonPropertiesClient`, 서버 subpath와 CLI는 공개 패키지에서 제거했습니다. 0.2.x 프로젝트는 [API 명세](docs/API.md)와 [업데이트 안내](docs/UPDATING.md)에 따라 연결 코드를 바꿔야 합니다.

`local-server.cmd`, `remote-server.cmd`, `delivery-api.config.json`, API 토큰, `.env`는 이 버전에서 사용하지 않습니다. 테스트 서버는 웹페이지 파일만 제공합니다. 로컬 청크 읽기는 브라우저가 직접 수행하며 파일을 생성하거나 수정하지 않습니다.

## 2. SDK 받기와 테스트 페이지 실행

SDK와 모델 청크는 별도로 준비합니다. 이 Git 저장소에는 사용자 모델이 들어 있지 않습니다.

1. Windows 10/11과 Chrome 또는 Edge를 준비합니다. Windows 기본 PowerShell 5.1로 실행하므로 Node.js·pnpm·Python·관리자 설치는 필요하지 않습니다.
2. 전달받은 SDK ZIP을 **전체 압축 해제**합니다. `README.md`, `sdk-manifest.json`, `runtime`, `types`, `examples/standalone` 등이 함께 있어야 합니다. `examples`만 따로 복사하지 않습니다. `node_modules`를 전달할 필요는 없습니다.
3. Git으로 받는 개발자는 고정된 0.3.6 버전을 사용할 수 있습니다. Git도 일반 테스트 PC에는 필요하지 않습니다.

   ```powershell
   git clone --branch v0.3.6 https://github.com/jonemos/DTDelivery-SDK.git
   Set-Location DTDelivery-SDK
   ```

   처음 받을 때는 전체 SDK를 압축 해제합니다. 이후 업데이트는 루트의 `update.cmd`를 사용합니다. `examples/standalone/index.html`이 없으면 완전한 배포본을 다시 받으세요. `test-server.cmd`만 따로 복사하지 않습니다.
4. SDK 루트에서 `examples/test-server.cmd`를 더블 클릭하거나 PowerShell에서 실행합니다.

   ```powershell
   .\examples\test-server.cmd
   ```

   공개 manifest의 페이지 해시를 검사한 뒤 `http://127.0.0.1:5183/`을 엽니다. 설치·빌드·자동 다운로드는 실행하지 않습니다. 창을 유지하고 Chrome/Edge에서 페이지 상단의 **SDK 0.3.7**를 확인합니다. 다른 브라우저가 자동으로 열렸다면 같은 주소를 Chrome/Edge로 엽니다.
5. 아래 순서로 청크를 연결합니다. 종료할 때는 페이지의 **연결 해제**, 실행 창의 **Ctrl+C**를 차례로 사용합니다.

`index.html`을 파일로 직접 열지 않습니다. 해시 불일치·파일 누락 오류이면 전체 SDK를 새 폴더에 다시 압축 해제합니다. 5183 포트가 사용 중이면 기존 테스트 서버를 종료한 뒤 다시 실행합니다. 기존 서버를 자동으로 종료하거나 다른 포트로 바꾸지 않습니다. 로컬 청크는 인터넷 없이 사용할 수 있으며, HTTP 청크·온라인 기능 문서는 해당 주소의 네트워크 연결이 필요합니다.

예제 소스를 고치는 개발자만 [Node.js](https://nodejs.org/en/download) 24.16 이상과 `npm.cmd install --global pnpm@11.9.0`을 준비하고 `examples/dev-server.cmd`를 실행합니다. 개발 서버는 패키지를 설치·갱신합니다. 변경한 소스는 기본 테스트 서버의 미리 빌드된 페이지에 즉시 반영되지 않습니다.

## 3. 편집기에서 청크 준비하고 연결하기

처음 테스트한다면 최신 편집기에서 통합레벨을 저장하고 **청크 제작 및 업로드 → 로컬 폴더 → 전체 저장**을 실행합니다. 완료 메시지가 나온 출력 폴더를 사용합니다. 같은 폴더를 갱신할 때는 **변경분 저장**을 사용하며, 기존 `objects`·`releases`를 함께 보존합니다. 변경분의 새 파일만 따로 옮긴 폴더는 완전한 게시본이 아닐 수 있습니다.

이미 제작된 청크가 있다면 새로 제작할 필요 없이 다음 구조를 확인합니다.

일반 전체/변경분 저장 결과:

```text
내 청크 폴더/
  delivery-head.json
  objects/
  releases/
```

로컬 게시 저장소:

```text
내 게시 저장소/
  levels/
    objects/
    releases/
    development/
      통합레벨-ID/delivery-head.json
```

두 번째 구조는 페이지의 **게시 구역**과 실제 구역이 같아야 합니다. API용 ID 설정 파일은 필요 없습니다. 현재 head와 manifest의 해시·ID를 검증해 목록을 만들고, 로딩할 때 각 청크와 파일의 크기·해시를 검사합니다. 목록 조회만으로 미로드 파일 전체를 검증했다고 간주하지 않습니다. 재저장 후 **목록 조회 → 게시본 열기**를 실행합니다. 이미 열린 게시본은 자동 교체하지 않습니다.

연결 순서:

1. 테스트 페이지의 **청크 위치**를 **로컬 청크 폴더**로 둡니다.
2. 게시 저장소라면 **게시 구역**을 실제 구역 이름으로 설정합니다. 위 예시는 `development`입니다. 일반 전체/변경분 저장 폴더에서는 이 값으로 모델을 거르지 않습니다.
3. **청크 폴더 선택**을 눌러 `delivery-head.json`이 있는 일반 청크 루트 또는 `levels`가 있는 게시 저장소 루트를 선택합니다. `levels` 폴더 자체도 지원합니다. `objects`만 선택하거나 `development/통합레벨-ID`만 선택하지 않습니다.
4. Chrome/Edge에서 읽기 권한을 허용합니다. 목록이 표시되면 원하는 **통합레벨 → 게시본 열기**를 선택합니다. **목록 조회**로 다시 읽을 수도 있습니다.

### 테스트할 항목과 통과 기준

| 순서 | 확인할 결과 |
|---|---|
| 1. 목록 | 게시 완료된 통합레벨 이름이 표시됨. 빈 목록이면 루트·게시 구역·head 확인 |
| 2. 점진 로딩 | 여러 셀인 모델은 준비된 셀부터 표시되고 실제 셀 상태·다운로드 용량이 갱신됨 |
| 3. 완료 | 상태가 **로드 완료**, 준비된 셀 수가 전체 셀 수와 일치함 |
| 4. 표시·선택 | 메시·재질·텍스처를 확인하고 캔버스 클릭/Outliner 검색·선택의 Actor 디테일을 대조함. 배칭 기본 꺼짐 |
| 5. 재열기 | **연결 해제 → 목록 조회 → 게시본 열기** 후 같은 모델의 외형과 같은 Actor 선택을 확인함 |
| 6. 갱신 | 편집기에서 같은 폴더에 변경분 저장 완료 후 **목록 조회 → 게시본 열기**로 새 게시본을 확인함 |
| 7. 스크립트 | Delivery 지원 애드온이 포함된 모델에서 공개 속성 변경을 확인함. 스크립트가 없는 모델에는 비해당 |

이 목록은 사용자의 실제 청크로 수행할 인수 절차입니다. SDK 설치·빌드 성공만으로 모델 표시나 Unreal 외형 비교가 통과한 것은 아닙니다. 오류가 발생하면 오류 메시지, SDK 버전, 선택한 폴더 구조·게시 구역, 실패 단계를 기록합니다.

## 4. 정적 파일로 읽기

웹서버가 `delivery-head.json`, `objects`, `releases`를 그대로 제공한다면 페이지에서 **정적 청크 주소**를 선택하고 그 폴더 주소를 입력합니다. 예: `https://example.com/chunks/`. 이 기능은 한 일반 청크 폴더를 읽으며 S3 버킷 자동 검색이나 로그인 기능은 아닙니다. 다른 도메인은 CORS가 필요합니다.

인증된 S3 직접 연결은 호스트의 읽기·목록 권한, CORS, 임시 인증을 준비한 후 별도 source adapter로 연결해야 합니다. 현재 패키지에는 S3 로그인·서명·목록 구현이 없습니다. 장기 Secret Key를 웹 코드나 공개 Git에 넣지 않습니다.

테스트 페이지에서는 **청크 위치 → 정적 청크 주소**를 선택하고 폴더 주소 입력 → **목록 조회 → 통합레벨 선택 → 게시본 열기**를 실행합니다. 주소는 끝에 `/`가 있어야 하며 사용자/비밀번호, query, fragment를 포함하지 않습니다. 이 모드는 로컬 게시 저장소의 `levels` 전체를 자동 검색하지 않습니다.

## 5. 외부 프로젝트에 설치

Git 태그로 버전을 고정하려면 프로젝트에서 실행합니다.

```powershell
pnpm.cmd add '@dt/delivery-sdk@github:jonemos/DTDelivery-SDK#v0.3.10'
```

또는 SDK 폴더를 프로젝트의 `vendor/delivery-sdk`에 복사한 뒤 프로젝트에서 실행합니다.

```powershell
pnpm add @dt/delivery-sdk@file:./vendor/delivery-sdk
```

이 패키지는 ESM과 TypeScript 타입을 제공합니다. React/Vue 등 호스트는 canvas와 연결 수명만 관리합니다. 에디터 설치나 에디터 DB는 필요하지 않습니다. 페이지 해제 시 `dispose()`를 호출하고 진행 중 열기에는 AbortSignal 또는 `cancel()`을 사용합니다.

```ts
import { DeliveryClient, LocalChunkSource } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export async function showLocal(canvas: HTMLCanvasElement, directory: FileSystemDirectoryHandle) {
  const sdk = new DeliveryClient({
    canvas,
    source: new LocalChunkSource(directory, { scope: 'development' }),
    onProgress: progress => console.log(progress.readyCells, progress.totalCells),
    onActorSelect: actor => console.log(actor?.serviceKey),
  });
  try {
    const models = await sdk.listModels();
    if (!models.length) throw new Error('게시된 모델이 없습니다.');
    await sdk.open(models[0]!.id, { progressive: true });
    return sdk;
  } catch (error) {
    await sdk.dispose();
    throw error;
  }
}
```

canvas와 부모 영역에 실제 폭·높이를 지정하세요. 폴더 선택은 사용자의 클릭에서 `showDirectoryPicker({ mode: 'read' })`로 실행합니다. SDK가 폴더 선택창을 자동으로 열거나 읽기 권한을 임의로 얻지 않습니다.

## 6. 클래스와 함수

전체 함수·타입 계약은 [API 명세](docs/API.md)에 있습니다.

| 기능 | 호출 |
|---|---|
| 목록 | `sdk.listModels()` |
| 게시본 열기 | `sdk.open(modelId, { progressive: true })` |
| 실제 진행 상태 | `sdk.progress`, `sdk.subscribeProgress(listener)` |
| 액터 검색·선택 | `sdk.actors(query)`, `sdk.selectActor({ mountId, actorId })` |
| 선택 액터·포커스 | `sdk.selectedActor`, `sdk.focusActor(target)` |
| 화면·배칭 | `sdk.setViewMode(mode)`, `sdk.setProjection(projection)`, `sdk.setStaticBatching(enabled)` |
| 액터 바운드 표시 | `sdk.viewport.setBounds(enabled)`, `sdk.viewport.bounds` |
| 스크립트 목록·핸들 | `sdk.scripts.list()`, `sdk.scripts.get(target)` |
| 해제 | `sdk.cancel()`, `await sdk.dispose()` |

배칭은 기본 꺼짐입니다. 선택은 액터 이름이나 renderer UUID가 아닌 mountId·actorId로 구분합니다. null mountId는 통합레벨 자체 액터입니다. 진행 값은 실제 요청·다운로드·캐시·셀 상태이며 시간이 지나서 증가하는 모의 수치가 아닙니다.

## 7. 스크립트 컴포넌트 속성 제어

편집기에 설치되어 액터에 붙은 신뢰한 애드온이 `sdkVersion: 5`, `environments: ["delivery", ...]`를 지원하고 `properties`에 공개 속성을 선언해야 합니다. 해당 설정을 저장한 뒤 청크를 새로 제작해야 모듈·packageId·version·codeHash가 청크에 포함됩니다. SDK는 정확한 모듈을 검증하고 실행합니다.

```ts
import type { DeliveryClient, DeliveryScriptTarget } from '@dt/delivery-sdk';

export async function changeScriptColor(sdk: DeliveryClient, target: DeliveryScriptTarget) {
  const script = sdk.scripts.get(target);
  const snapshot = script.snapshot();
  const color = snapshot.schema.find(p => p.format === 'color' && p.access === 'read-write' && p.storage !== 'persistent');
  if (!color) throw new Error('실행 중 변경 가능한 색상 속성이 없습니다.');
  await script.setProperties({ [color.name]: '#20b870' }, { expectedRevision: snapshot.revision });
  return script.subscribe((values, current) => console.log(values, current.revision));
}
```

`target`은 mountId·actorId·componentId입니다. 현재 통합레벨 ID는 SDK가 결합합니다. 핸들은 열린 세션과 정확한 코드 해시에 묶이며, 재열기나 해제 후 이전 핸들은 거부됩니다. 점진 로딩 중 준비된 인스턴스만 제어합니다. 읽기 전용·잘못된 타입/범위·오래된 revision은 거부됩니다.

`setProperties()`는 실행 중 변경입니다. 원본 청크·에디터 문서에 저장하거나 다른 사람의 화면에 전송하지 않습니다. 영구 저장·공유 동기화는 호스트가 별도로 구현해야 합니다. 저수준 `viewport.addons.bind()`의 `AddonPropertyConnection` 타입은 자체 호스트 연동을 위한 확장점이며, 이 패키지에 기본 서버 구현은 없습니다.

## 8. 오류 확인

| 증상 | 확인 |
|---|---|
| 모델이 없음 | 올바른 청크 루트·게시 구역·게시 완료 head 확인 |
| 읽기 권한 필요 | 사용자의 클릭으로 폴더 다시 선택 |
| hash/ID/참조 오류 | 손상·누락된 게시본 사용 중단, 제작자가 정상 게시본 복구 |
| 속성 변경 거부 | schema의 access/storage/type/range와 현재 revision 확인 |
| 핸들 만료 | 현재 열린 모델에서 scripts.get으로 다시 얻기 |
| 정적 주소 fetch 오류 | 폴더 주소·CORS·HTTPS·브라우저 네트워크 권한 확인 |
| Changed SDK public file | 수정된 파일 이름을 확인. 개발자 설정·모델은 SDK 패키지 밖에 둠 |

설치 때 pnpm의 로컬 의존성이 만든 하드 링크는 해시 검증 후 byte 동일한 독립 파일로 분리합니다. 실행 코드 검증을 끄지 않습니다. 현재 ZIP은 사용자별 API 설정 파일을 포함하지 않으므로 그 설정 수정 때문에 설치 검사가 실패하지 않습니다.

업데이트는 [업데이트 안내](docs/UPDATING.md), 공개 Git 관리는 [GitHub Desktop 안내](docs/GITHUB_DESKTOP.md)를 참고하세요.
