# SDK 업데이트와 호환성

SDK 버전, 청크 계약 버전, 애드온 버전은 다릅니다. package.json/sdk-manifest.json/DELIVERY_SDK_VERSION은 SDK 배포 버전을 나타냅니다. sdk-manifest.json의 contracts는 읽을 수 있는 청크 계약 목록이고 addonSdkVersion은 애드온 API 계약입니다. 애드온의 packageId/version/codeHash는 게시 데이터가 결정하며 SDK 업데이트로 교체하지 않습니다.

Git에 새 버전을 올려도 외부 프로그램은 자동으로 바뀌지 않습니다. 새 태그가 게시되면 외부 프로젝트에서 다음처럼 변경하고 검사·재빌드·배포합니다. 예시 태그는 실제로 게시한 값으로 바꾸세요.

```sh
pnpm add "https://github.com/jonemos/DTWebEditor_SDK.git#v0.2.3"
pnpm build
```

package.json과 pnpm-lock.yaml을 함께 커밋합니다. 문제가 있으면 이전 태그로 다시 설치하고 재빌드합니다. 태그를 같은 이름으로 이동/삭제하지 않습니다. 최신 main을 매번 자동 다운로드하는 방식을 운영 버전 고정의 대체로 사용하지 않습니다.

공개 SDK 폴더는 사전 빌드 결과입니다. 에디터의 새 기능을 SDK에 반영하려면 최신 앱 빌드를 사용해야 합니다. 앱의 버전 관리 화면에서 번호만 올려도 새 기능이 생기지는 않습니다. sdk-manifest.json의 baseVersion은 실제 앱이 제공한 SDK 기본 버전이며 배포 version과 구분됩니다.

업데이트 후 확인: 타입 검사·앱 빌드, API 인증/권한, 실제 모델 표시, 동일 원본의 중복 배치, 청크 해제/재진입, 애드온 정확한 버전/외부 속성 변경, 화면 종료/로그아웃 정리. 기존 모델과 host 저장 데이터를 유지합니다.

0.2.3부터 Node 조회 API가 패키지에 포함됩니다. 서버 설정과 delivery-data는 설치 폴더 밖에 보관하세요. SDK 교체 후 서버 프로세스를 다시 실행하며 기존 catalog·업무 DB를 초기화하지 않습니다. 새 게시본은 `dt-delivery-api register --job`로 검증·등록합니다.
