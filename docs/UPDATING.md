# SDK 업데이트와 호환성

0.2.22는 예제 CMD가 로컬 SDK 의존성 그래프도 갱신하도록 보완합니다. SDK 사본을 업데이트할 때 이전 예제 lockfile 때문에 새 타입 의존성이 누락되지 않습니다.0.2.20/0.2.21 태그는 유지하며 재진입 수정·React 타입·복사 설치·배칭 기본 꺼짐은 그대로입니다.

0.2.21은 공개 뷰포트 UI 선언에 필요한 React 타입 의존성을 포함합니다. 에디터가 설치되지 않은 독립 SDK 폴더에서도 `examples/test-server.cmd`의 설치와 타입 빌드가 가능합니다.0.2.20의 재진입 수정과 배칭 기본 꺼짐은 유지합니다.

0.2.20은 셀 해제/재진입 때 재질 ID가 새로 생성되며 불투명 면의 그리기 순서가 달라지던 문제를 수정합니다. 점진 로딩·액터 선택을 유지하며 정적 메시 배칭은 기본 꺼짐입니다. 로컬 SDK 커밋을 테스트할 때는 실행 중인 API/예제 서버를 Ctrl+C로 종료하고 SDK 루트의 `local-server.cmd` 또는 `remote-server.cmd`, 이어서 `examples/test-server.cmd`를 다시 실행하세요. 예제 CMD는 새 SDK 의존성을 설치합니다. 기존 모델과 설치 폴더 밖의 업무 데이터·개인 설정을 유지하세요.

SDK 버전, 청크 계약 버전, 애드온 버전은 다릅니다. package.json/sdk-manifest.json/DELIVERY_SDK_VERSION은 SDK 배포 버전을 나타냅니다. sdk-manifest.json의 contracts는 읽을 수 있는 청크 계약 목록이고 addonSdkVersion은 애드온 API 계약입니다. 애드온의 packageId/version/codeHash는 게시 데이터가 결정하며 SDK 업데이트로 교체하지 않습니다.

Git에 새 버전을 올려도 외부 프로그램은 자동으로 바뀌지 않습니다. 새 태그가 게시되면 외부 프로젝트에서 다음처럼 변경하고 검사·재빌드·배포합니다. 예시 태그는 실제로 게시한 값으로 바꾸세요.

```sh
pnpm add "https://github.com/jonemos/DTWebEditor_SDK.git#v0.2.14"
pnpm build
```

package.json과 pnpm-lock.yaml을 함께 커밋합니다. 문제가 있으면 이전 태그로 다시 설치하고 재빌드합니다. 태그를 같은 이름으로 이동/삭제하지 않습니다. 최신 main을 매번 자동 다운로드하는 방식을 운영 버전 고정의 대체로 사용하지 않습니다.

공개 SDK 폴더는 사전 빌드 결과입니다. 에디터의 새 기능을 SDK에 반영하려면 최신 앱 빌드를 사용해야 합니다. 앱의 버전 관리 화면에서 번호만 올려도 새 기능이 생기지는 않습니다. sdk-manifest.json의 baseVersion은 실제 앱이 제공한 SDK 기본 버전이며 배포 version과 구분됩니다.

업데이트 후 확인: 타입 검사·앱 빌드, API 인증/권한, 실제 모델 표시, 동일 원본의 중복 배치, 청크 해제/재진입, 애드온 정확한 버전/외부 속성 변경, 화면 종료/로그아웃 정리. 기존 모델과 host 저장 데이터를 유지합니다.

0.2.3부터 Node 조회 API가 패키지에 포함됩니다. 서버 설정과 delivery-data는 설치 폴더 밖에 보관하세요. SDK 교체 후 서버 프로세스를 다시 실행하며 기존 catalog·업무 DB를 초기화하지 않습니다. 새 원격 게시본은 제작자로부터 실제 게시 완료 JSON을 받은 뒤 `dt-delivery-api register --job`로 검증·등록합니다.

0.2.4는 완료 JSON을 받기 전에 등록을 실행하게 했던 안내를 수정하고, 파일 누락·저장소 검증 오류를 구체적으로 표시합니다. **SDK 업데이트가 게시 완료 JSON을 생성하지는 않습니다.** 제작자의 최신 에디터에서 작업 이력의 게시 완료 JSON 받기를 사용합니다. 기존 개인 설정을 보관하고 업데이트 후에도 유지하세요. init을 다시 실행할 필요는 없습니다.

0.2.5는 API 시작 시 새 게시본을 확인·검증하고 자동 등록합니다. 신규 연결은 config의 compositionIds에 실제 통합레벨 ID를 한 번 작성합니다. 기존 수동 등록 catalog의 ID는 그대로 재사용합니다. 재업로드마다 JSON을 받을 필요가 없으며, 게시 완료 후 API 재시작·화면 다시 열기로 반영합니다. 주기 감시는 없습니다. 이 기능을 적용할 때 SDK/API를0.2.5로 한 번 갱신하고 이후 모델 변경만으로 SDK를 계속 업데이트하지 않습니다.

0.2.6은 함께 제공하는 PublicationService의 로컬 연결 재사용·연결 해제·작업 이력 정리를 추가합니다. 기존 프로필 ID와 게시된 청크/receipt를 보존합니다. 에디터의 경로 표시와 이력 삭제 버튼은 최신 에디터에서 사용할 수 있습니다. 이력 삭제는 앱의 표시 목록을 정리하며 원본 journal과 게시 파일은 내부에 보관합니다.

0.2.7은 local-server.cmd·remote-server.cmd·examples/test-server.cmd와 공개 설정 파일2개를 포함합니다. clone/ZIP에서는 init을 생략합니다. 원격 CMD는 루트 delivery-api.config.json을 그대로 사용하고 로컬 CMD는 폴더만 입력받아 별도 delivery-api.local.config.json을 저장합니다. 키 입력이나 .env 변경은 없습니다. 기존 개인 설정을 사용 중인 clone을 갱신할 때는 해당 설정을 보관하고 실제 저장소 값·ID를 유지하세요. 의존성으로 설치한 프로젝트의 루트 개인 설정은 SDK 설치로 변경되지 않습니다.

0.2.8은 일반 청크 출력 폴더를 local-server.cmd/API에서 직접 읽습니다. delivery-head.json·objects·releases가 있으면 receipts 없이 연결되며, 시작 시 전체 hash/레벨 검증과 head 재확인 후 API 자체 catalog에 등록합니다. 원본 폴더는 읽기만 합니다. 청크 변경 후 API 재시작으로 반영하며 기존 게시 저장소·원격 동작은 유지합니다. 이 수정 이전의 receipts 필수 안내는 일반 청크에 적용되지 않습니다.
