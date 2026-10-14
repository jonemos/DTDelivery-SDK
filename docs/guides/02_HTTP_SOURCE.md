# 02 · 정적 청크 주소 연결

[목차](README.md) · 앞: [설치](00_INSTALL.md) · 다음: [클라이언트 생성](03_CLIENT.md)

이 기능은 게시된 **일반 내보내기 폴더 한 개**를 HTTP/HTTPS로 읽습니다. `HttpChunkSource`는 청크 파일을 GET으로 읽으며0.2.x 조회 API 주소를 받지 않습니다.

## 입력과 실제 읽기

| 항목 | 계약 |
|---|---|
| `new HttpChunkSource(base: URL)` | URL 객체를 전달. 문자열은 `new URL(value)`로 변환 |
| `base` | HTTP/HTTPS 절대 주소, pathname 마지막 `/`, 사용자/비밀번호·query·fragment 없음 |
| `source.base` | 생성 시 복사한 공개 URL |
| `delivery-head.json` | 현재 release hash를 읽음. 미리 임의 모델 ID를 입력하지 않음 |
| `releases/<hash>.json` | 게시 manifest. ID·name·hash·canonical encoding 검증 |
| `objects/<hash>` | 로드하는 실제 청크. 크기 제한·hash 검사 |
| `listModels()` | 이 폴더의 모델1개. 여러 저장소 목록은15 가이드의 별도 source |

예를 들어 base가 `https://example.com/chunks/`이면 head 주소는 `https://example.com/chunks/delivery-head.json`입니다. 웹서버는 head/release/object 파일을 변경 없이 제공해야 합니다. head 요청은 `cache:'no-store'`, credential 생략, redirect 거부,30초 제한을 사용합니다. 다른 origin이면 해당 서버에서 실제 페이지 origin을 허용하는 CORS 설정이 필요합니다.

## 주소 필드 예제

```ts
import { HttpChunkSource } from '@dt/delivery-sdk';

export function sourceFromAddress(input: HTMLInputElement): HttpChunkSource {
  const address = input.value.trim();
  if (!address) throw new Error('청크 폴더 주소를 입력하세요.');
  return new HttpChunkSource(new URL(address));
}

export async function connectHttp(
  input: HTMLInputElement,
  connect: (source: HttpChunkSource) => Promise<void>,
) {
  await connect(sourceFromAddress(input));
}
```

`<input id="address" placeholder="https://example.com/chunks/">` 값을 읽어 조회 버튼에서 `connectHttp(input, connect)`를 호출합니다. Promise 오류를 상단 상태 라벨에 표시합니다. 클릭 한 번마다 기존 클라이언트를 버리지 않고 연결을 유지할 수도 있지만, base 주소를 바꿀 때는13 가이드처럼 이전 클라이언트를 종료합니다.

## 자주 구분할 주소

| 잘못 쓰기 쉬운 값 | 이유 |
|---|---|
| `http://127.0.0.1:5183/` | 기본 예제 페이지 주소. 같은 위치에 청크를 별도 제공한 경우만 source 주소로 사용 가능 |
| `.../delivery-head.json` | base 폴더가 아닌 파일 주소 |
| `.../levels/development/` | 로컬 게시 목록 구역. HttpChunkSource는 이 구역의 모델 discovery를 제공하지 않음 |
| `file:///...` 또는 디스크 경로 | 지원 protocol이 아님.01 가이드의 폴더 handle 사용 |
| 서명 query가 붙은 URL | 기본 source의 URL 계약 밖. 인증/서명은 호스트 adapter 책임 |

`credentials:'omit'`이므로 로그인 쿠키가 필요한 저장소의 인증을 기본 source가 대신하지 않습니다. 인증된 S3 목록 조회/서명·사용자별 접근 권한은 기본 구현에 없습니다. 외부 프로젝트가 [DeliverySource·ByteProvider](15_CUSTOM_SOURCE.md)를 구현해야 합니다.
