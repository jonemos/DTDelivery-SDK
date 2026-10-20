# DT Delivery SDK 0.3.20

게시 구역은 **연결 목록 조회** 후 해당 버킷·경로에 등록된 구역 전체가 펼쳐지는 선택 목록입니다. 입력한 글자로 후보를 거르는 자동완성 없이 클릭해서 고릅니다.

DT Web Editor가 게시한 통합레벨을 읽는 브라우저 SDK입니다. 설치 없는 테스트 페이지에서 모델을 확인하거나 외부 앱에 같은 뷰어를 연결합니다. 모델·접속 키·편집기 실행 파일은 SDK에 포함되지 않습니다. 편집기가 청크와 공개 연결 목록을 저장소에 게시하므로 파일을 매번 전달할 필요가 없습니다.

## 설치 없이 모델 보기

1. [공식 SDK 저장소](https://github.com/jonemos/DTDelivery-SDK)의 ZIP을 쓰기 가능한 폴더에 **전체 압축 해제**합니다. Git 사본도 같은 순서로 실행합니다.
2. `examples/test-server.cmd`를 더블클릭합니다. PowerShell에서는 SDK 루트에서 `.\examples\test-server.cmd`를 실행합니다.
3. 열린 Chrome/Edge 페이지를 확인합니다. 기본 주소는 `http://127.0.0.1:5183/`이며 서버 창은 사용하는 동안 유지합니다. 종료는 해당 창에서 `Ctrl+C`입니다.
4. 첫 실행은 기본 저장소에 자동 연결됩니다. 모델이 하나면 열리고, 여러 개면 이름을 고른 뒤 **게시본 열기**를 누릅니다.

Node.js·pnpm·Python 설치나 실행 중 패키지 다운로드가 필요 없습니다. Windows 기본 PowerShell을 사용합니다. HTML만 따로 열거나 SDK 일부만 복사하지 마세요.

## 저장소와 게시 구역 선택

**청크 위치 → 원격 게시 저장소**에서 연결 주소는 `http://서버:포트`만 유지합니다. **연결 목록 조회**를 누른 뒤 버킷·경로·게시 구역(scope)을 목록에서 선택하고 **목록 조회**를 누릅니다. 각 칸에 직접 입력할 수도 있습니다. 경로를 비우면 버킷 루트입니다.

처음 연결하는 다른 서버는 버킷·경로를 한 번 입력하거나 편집기의 전체 **SDK 연결 주소**를 붙여넣으세요. 전체 주소는 각 입력칸으로 분리됩니다. 이후 모델 조회 때 주소 칸을 긴 파일 경로로 바꾸지 않습니다. 기본 연결에 등록되지 않은 임의 서버의 모든 버킷을 자동 나열하지 않습니다.

편집기는 **업로드 및 게시** 완료 시 같은 버킷·경로 아래 `levels/delivery-connections.json`도 자동 갱신합니다. 이미 게시한 자료는 **SDK 연결 정보 → SDK 연결 목록 갱신**으로 목록만 게시할 수 있습니다. 조회 사용자에게 JSON 파일이나 업로드 키를 전달할 필요는 없습니다.

저장소는 연결 목록과 모델 파일의 공개 읽기 및 페이지 origin의 CORS를 허용해야 합니다. 버킷 전체 목록 조회 권한은 필요 없습니다. 특정 파일만 공개하는 정책이라면 새 연결 목록 파일의 GET도 허용하세요. 키를 웹페이지·SDK·공개 Git에 넣지 마세요.

scope는 철자를 구분합니다. `development`와 `develoment`는 서로 다른 구역입니다. 목록에는 원본 레벨 이름 대신 **통합레벨 이름**이 표시됩니다. 예를 들어 GY_Test를 넣은 통합레벨 이름이 ‘새 통합 레벨’이면 그 이름을 고릅니다.

로컬 자료는 **로컬 청크 폴더 → 청크 폴더 선택**을 사용합니다. 일반 내보내기는 `delivery-head.json`·`objects`·`releases`가 있는 루트, 게시 저장소는 `levels`가 있는 루트 또는 `levels` 자체를 고르고 scope를 맞춥니다. 정적 HTTP 폴더는 **정적 청크 주소**에 입력합니다.

브라우저는 마지막 원격 연결과 모델을 기억합니다. **연결 해제**는 다음 실행의 기본 자동 연결도 끕니다. 같은 구역의 모델 목록은 기본 10초마다, 열린 모델의 새 게시본은 기본 5초마다 확인합니다. 다른 경로나 scope를 추가했다면 연결 목록을 다시 조회하세요. 새 게시본의 검증·준비 후 카메라·표시 설정을 유지해 전환하며 일시 실패 시 현재 표시를 유지합니다.

## 로딩과 뷰포트 최적화

SDK는 실제 참조한 에셋을 요청할 때 읽습니다. 독립 청크는 최대 네 요청 범위에서 병렬 읽고 중복 청크를 재사용하며 청크와 완성 파일의 해시를 검증합니다. 지연 읽기는 미사용 데이터를 삭제하는 기능이 아닙니다.

뷰포트 **오른쪽 아래 → 공간 자동 언로드**에서 사용 여부·로드/언로드 반경(cm)·대기 시간(초)을 설정합니다. 기본은 전체 로드입니다. 공간 경계가 있는 게시본에서 원거리 표시 자원을 해제하고 가까워지면 다시 준비합니다. 선택 액터·동적/실행 중 자원과 의존성은 보호합니다. 오래된 경계 없는 게시본은 공간 인덱스를 포함해 다시 게시해야 합니다.

**뷰포트 옵션(☰) → UI 숨김**을 켜면 옵션 버튼만 남기고 뷰포트 도구막대·공간 자동 언로드 UI를 숨깁니다. 전체화면 항목 바로 아래에 있으며, 같은 옵션에서 끄면 다시 표시됩니다. 카메라·선택·언로드 설정은 유지됩니다. 페이지 바깥의 연결창·아웃라이너·상세 패널은 그대로 사용할 수 있습니다.

뷰어는 통합레벨과 같은 정적 행렬 캐시·프레임 준비 경로를 사용합니다. 정지한 정적 화면의 반복 렌더를 줄이고 카메라·게시본·표시 변경과 동적 애니메이션은 계속 갱신합니다. **표시 → 정적 메시 배칭**은 실험적 선택 기능이며 기본은 꺼짐입니다. 기기·모델·설정에 따른 성능을 보장하지 않습니다.

아웃라이너에서 액터를 검색·선택하고 **선택에 초점**으로 이동합니다. 원근/직교·라이팅·표시 메뉴를 사용할 수 있습니다. **표시 → 텍스처**는 최대 128·256·512px와 맵 사용 여부를 설정하며 원본 에셋을 바꾸지 않습니다. 메모리 예산 0은 자동입니다. 원거리 객체가 빠지면 언로드 범위를 조정하거나 끄세요.

외형 비교에는 텍스처 준비 후 같은 카메라·라이팅/언릿·환경광·Render Quality·텍스처 설정이 필요합니다. 수평 FOV 기본 90°, Near/Far 0.01/2000m, 환경광 강도 0.2입니다. API의 환경광은 기본 꺼짐이고 테스트 페이지는 켜서 시작합니다. Unreal 재질 그래프·굴절·WPO·조명 전체의 재현을 보장하지 않습니다.

## 외부 앱 개발

앱 개발에는 Node.js·pnpm이 필요합니다. 앱 폴더 옆의 SDK를 `pnpm add ../dt-delivery-sdk`로 설치합니다.

```ts
import { DeliveryClient } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export async function mountDelivery(canvas: HTMLCanvasElement) {
  const sdk = new DeliveryClient({ canvas });
  const models = await sdk.listModels();
  if (models.length) await sdk.open(models[0]!.id, { progressive: true });
  return sdk; // 화면을 제거할 때 await sdk.dispose()
}
```

canvas와 부모에 실제 폭·높이를 지정하세요. source 생략 시 기본 저장소를 사용합니다. 다른 연결은 `HttpChunkSource`/`LocalChunkSource`로 지정합니다. 자동 게시 갱신을 끄려면 `autoUpdate: false`를 전달합니다.

| 기능 | API |
| --- | --- |
| 목록·열기·진행 | `sdk.listModels()`, `sdk.open(id)`, `sdk.subscribeProgress(listener)` |
| 연결 분리·공개 목록 | `storageConnectionUrl(fields)`, `splitStorageConnection(url)`, `readStorageDirectory(seed, signal)` |
| 액터·스크립트 | `sdk.actors(query)`, `sdk.selectActor(target)`, `sdk.focusActor(target)`, `sdk.scripts` |
| 공간 언로드 | `sdk.viewport.setSpatialStreaming({ loadDistance, unloadDistance, unloadDelayMs })`; 해제는 `null`. API는 m/ms 단위 |
| 취소·정리 | `sdk.cancel()`, `await sdk.dispose()` |

[API 명세](docs/API.md), [호스트 적용](docs/guides/17_HOST_INTEGRATION.md), [기능 가이드](docs/guides/README.md), [예제 소스 개발](examples/web/README.md)을 참고하세요. Git 설치는 실제 공개된 릴리스 태그를 사용합니다.

## 업데이트와 문제 해결

서버 창을 Ctrl+C로 종료하고 **사용하던 SDK 폴더에서 `update.cmd`**를 실행한 뒤 `examples/test-server.cmd`를 다시 시작하고 브라우저를 새로고침합니다. runtime·타입·문서·페이지를 함께 갱신하며 Git 사본은 설치된 Git을, ZIP 사본은 Git 없이 업데이트합니다. 파일 해시와 백업을 확인하고 직접 수정된 SDK는 덮어쓰지 않습니다. [업데이트 안내](docs/UPDATING.md)를 참고하세요.

다른 앱에 설치·복사한 SDK는 해당 의존성을 갱신하고 앱을 다시 빌드·배포해야 합니다. 모델 갱신은 제작자의 재게시이며 SDK 프로그램 갱신과 별개입니다. 편집기에서 최신 게시본을 삭제하면 해당 scope의 SDK 공개도 해제되며 이전 게시본으로 자동 전환하지 않습니다.

| 증상 | 확인 |
| --- | --- |
| 이전 레벨만 보임 | 버킷·경로·scope와 게시 완료를 확인하고 목록 조회. 통합레벨 이름으로 선택 |
| 연결 목록 오류 | 편집기의 SDK 연결 목록 갱신, 새 목록 파일의 공개 GET·CORS |
| 원격 요청 오류 | 주소·읽기 권한·페이지 origin·HTTP/HTTPS 구성 |
| 어둡거나 회색 모델 | 텍스처 적용·Base Color·언릿·환경광 상태 |
| 해시·참조 오류 | 제작자가 게시본을 복구한 뒤 재열기. 검증 우회·청크 수동 변경 금지 |
| 로컬 폴더·서버 오류 | Chrome/Edge의 읽기 권한, 전체 압축 해제, 기존 서버 종료 여부 |

[첫 전달 안내](docs/guides/18_FIRST_DELIVERY.md)를 따라 모델 이름·저장소·실행 순서를 전달하세요. SDK는 MIT이며 모델 배포 권한은 별도입니다. 변경 이력은 [CHANGELOG](CHANGELOG.md)에 있습니다.
