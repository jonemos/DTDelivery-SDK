# SDK 업데이트

0.3.0은 API 서버를 제거한 공개 인터페이스 변경입니다. 기존 0.2.x 프로젝트를 자동으로 같은 함수 이름으로 전환하지 않습니다. 청크 데이터 계약과 저장소 원본은 그대로 사용합니다.

1. 현재 외부 프로젝트와 사용자 모델·설정을 보존합니다.
2. 새 SDK를 별도 폴더에 풀고 외부 프로젝트의 의존성을 새 버전으로 변경합니다.
3. DeliveryApiClient/API URL/token 대신 DeliveryClient와 LocalChunkSource 또는 HttpChunkSource를 사용합니다. [API 명세](API.md)를 확인하세요.
4. 테스트 예제는 `examples/test-server.cmd`만 실행합니다. 이전 local/remote-server CMD와 API 설정은 새 SDK가 사용하지 않습니다.
5. 로컬 청크의 목록·점진 로딩·선택·스크립트 공개 속성과 오류/취소를 확인합니다.
6. 새 웹페이지 배포 전에 `dispose()`와 이벤트 해제, 실제 사용하는 브라우저의 폴더/CORS/네트워크 권한을 확인합니다.

설치·빌드 결과와 개발자 설정은 공개 SDK 파일 밖에 둡니다. SDK의 불변 파일 해시 검증은 유지하며 pnpm 하드 링크는 설치 후 byte 동일한 파일로 분리합니다. 모델이 바뀌어도 통합레벨 ID를 API JSON에 입력하는 단계는 없습니다.

원격 S3 인증은 서버에 CORS와 임시 인증·정확한 저장소 권한을 준비한 뒤 호스트 source adapter를 연결해야 합니다. 공개 SDK에 장기 접속 키를 넣지 않습니다. 원격 설정을 바꾸거나 Git에 push하는 작업은 로컬 SDK 테스트와 별개입니다.
