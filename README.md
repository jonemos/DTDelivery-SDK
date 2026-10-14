# DT Delivery SDK 0.3.1

브라우저에서 제작된 청크를 검증하고 3D 모델을 보여주는 SDK입니다. **0.3.0부터 별도의 Delivery API 서버를 실행하지 않습니다.** 클래스와 함수로 모델 목록, 점진 로딩, 액터 선택, 스크립트 공개 속성을 제어합니다. 기존 청크 계약1–5와 Atlas는 유지됩니다.

0.3.1은 통합레벨과 같은 뷰포트 메뉴 간격·입력 스타일을 적용합니다. 표시 메뉴의 아이콘·아이콘 크기 항목을 제거하고 실제 액터의 **바운드** 표시를 제공합니다. 원본 청크와 Actor 선택은 유지됩니다.

## 1. 0.3.0에서 달라진 연결 방식

| 항목 | 0.3.0 사용 방법 |
|---|---|
| 모델 목록·열기 | `DeliveryClient`의 `listModels()`·`open()` 직접 호출 |
| 로컬 청크 | `LocalChunkSource`와 브라우저의 읽기 전용 폴더 선택 |
| 정적 웹 청크 | `HttpChunkSource`로 일반 청크 폴더의 HTTP/HTTPS 파일 읽기 |
| 스크립트 공개 속성 | `sdk.scripts`로 현재 로드된 인스턴스 조회·실행 중 변경 |
| 기존 청크 | 계약 1–5와 Atlas 지원 유지. SDK 업데이트가 청크를 재제작하지 않음 |

`DeliveryApiClient`, `AddonPropertiesClient`, 서버 subpath와 CLI는 공개 패키지에서 제거했습니다. 0.2.x 프로젝트는 [API 명세](docs/API.md)와 [업데이트 안내](docs/UPDATING.md)에 따라 연결 코드를 바꿔야 합니다.

`local-server.cmd`, `remote-server.cmd`, `delivery-api.config.json`, API 토큰, `.env`는 이 버전에서 사용하지 않습니다. 테스트 서버는 웹페이지 파일만 제공합니다. 로컬 청크 읽기는 브라우저가 직접 수행하며 파일을 생성하거나 수정하지 않습니다.

## 2. SDK 받기와 테스트 페이지 실행

SDK와 모델 청크는 별도로 준비합니다. 이 Git 저장소에는 사용자 모델이 들어 있지 않습니다.

1. Windows에 [Node.js](https://nodejs.org/en/download) 24.16 이상을 설치합니다. 이 문서의 확인 환경은 Node 24.16.0·pnpm 11.9.0입니다. SDK를 사용하는 배포 웹페이지에는 Node 설치가 필요하지 않습니다.
2. PowerShell에서 아래 명령으로 pnpm을 준비합니다. 이미 11.9.0이 있다면 설치 명령을 생략합니다. `.cmd` 명령은 PowerShell 실행 정책을 바꾸지 않고 사용할 수 있습니다.

   ```powershell
   node --version
   npm.cmd install --global pnpm@11.9.0
   pnpm.cmd --version
   ```

3. Git이 설치되어 있다면 고정된 0.3.1 버전을 받습니다.

   ```powershell
   git clone --branch v0.3.1 https://github.com/jonemos/DTDelivery-SDK.git
   Set-Location DTDelivery-SDK
   ```

   Git이 없다면 [v0.3.1 페이지](https://github.com/jonemos/DTDelivery-SDK/tree/v0.3.1)의 **Code → Download ZIP**을 받아 압축을 풉니다. `README.md`와 `examples`가 있는 폴더가 SDK 루트입니다. 새 버전은 이전 SDK와 별도 폴더에 받습니다.
4. SDK 루트에서 `examples/test-server.cmd`를 더블 클릭하거나 PowerShell에서 실행합니다.

   ```powershell
   .\examples\test-server.cmd
   ```

   의존성을 설치한 뒤 `http://127.0.0.1:5183/`을 엽니다. 첫 실행에는 의존성 다운로드가 필요합니다. 창을 유지하고 Chrome/Edge에서 페이지 상단의 **SDK 0.3.1**을 확인합니다. 다른 브라우저가 자동으로 열렸다면 같은 주소를 Chrome/Edge로 엽니다.
5. 아래 순서로 청크를 연결합니다. 종료할 때는 페이지의 **연결 해제**, 실행 창의 **Ctrl+C**를 차례로 사용합니다.

`index.html`을 파일로 직접 열지 않습니다. 실행 창에 설치 오류가 있으면 그 오류부터 해결합니다. 5183 포트가 사용 중이면 기존 테스트 서버를 종료한 뒤 다시 실행합니다.

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
pnpm.cmd add '@dt/delivery-sdk@github:jonemos/DTDelivery-SDK#v0.3.1'
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
