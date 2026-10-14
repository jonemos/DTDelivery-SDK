# 15 · 사용자 정의 저장소 adapter

[목차](README.md) · 기본 source: [로컬](01_LOCAL_SOURCE.md) / [HTTP](02_HTTP_SOURCE.md)

기본 HttpChunkSource는 일반 내보내기 폴더 하나만 조회합니다. 여러 정적 폴더의 목록이나 별도 인증 저장소가 필요하면 **호스트가 DeliverySource를 구현**합니다. source adapter는 외부 프로젝트의 신뢰된 코드이고 게시 데이터에서 실행 코드/URL을 읽어 구성하지 않습니다.

## 인터페이스

| API | 호스트가 지킬 계약 |
|---|---|
| source.listModels(signal) | `Promise<readonly DeliveryModel[]>`, 실제 모델 ID/name/releaseHash 목록 |
| source.resolve(modelId,signal) | `Promise<DeliveryRelease>`, 요청 ID의 실제 모델과 provider |
| release.model | 저장소의 manifest와 일치하는 ID/name/hash |
| release.provider | ByteProvider. 해당 고정 release의 files를 읽을 저장소 |
| provider.read(path,limit,signal) | `Promise<Uint8Array>`. SDK가 전달한 경로만 읽고 bytes≤limit, 취소 준수 |
| provider.authorize?(signal) | 읽기 권한 확인. 캐시 사용 시에도 SDK reader가 호출할 수 있음 |
| httpByteProvider(base,authorize?) | 정적 HTTP용 검증된 bytes reader. credential 생략, hash 경로·limit·취소 처리 |

`httpByteProvider`의 authorize callback은 읽기 전에 권한을 확인하는 hook입니다. fetch에 cookie/header/서명을 자동으로 추가하는 hook이 아닙니다. 인증된 저장소를 읽으려면 호스트가 별도 ByteProvider.read를 구현해야 합니다. 권한 오류를 무시하거나 검증되지 않은 bytes를 반환하지 않습니다.

## 여러 정적 export의 고정 카탈로그

아래 예제는 **호스트가 준비한 신뢰된 실제 게시 카탈로그**를 사용합니다. URL이나 hash를 임의로 생성하지 않습니다. 헤드 자동 discovery/인증 서비스 예제가 아닙니다. 각 model.releaseHash는 그 폴더의 실제 검증 가능한 release이고 name도 manifest와 같아야 합니다.

```ts
import {
  httpByteProvider,
  type DeliverySource, type DeliveryModel, type DeliveryRelease,
} from '@dt/delivery-sdk';

export interface StaticCatalogEntry { model: DeliveryModel; base: URL }
export class HostCatalogSource implements DeliverySource {
  private readonly entries: readonly StaticCatalogEntry[];
  constructor(entries: readonly StaticCatalogEntry[]) {
    this.entries = entries.map(entry => ({ model: { ...entry.model }, base: new URL(entry.base) }));
    // URL 조건은 SDK reader로 먼저 검사한다.
    for (const entry of this.entries) httpByteProvider(entry.base);
  }
  async listModels(signal: AbortSignal): Promise<readonly DeliveryModel[]> {
    signal.throwIfAborted();
    return this.entries.map(entry => ({ ...entry.model }));
  }
  async resolve(modelId: string, signal: AbortSignal): Promise<DeliveryRelease> {
    signal.throwIfAborted();
    const entry = this.entries.find(item => item.model.id === modelId);
    if (!entry) throw new Error('카탈로그에 해당 모델이 없습니다.');
    return { model: { ...entry.model }, provider: httpByteProvider(entry.base) };
  }
}
```

준비한 catalog 배열을 `new HostCatalogSource(entries)`에 전달하고03의 `new DeliveryClient({canvas,source})`에 연결합니다. SDK의 목록 검증과 open의 manifest/ID/name/hash 검증을 그대로 거칩니다. 모델을 새 게시 리비전으로 갱신할 때 호스트 카탈로그도 실제 값으로 갱신하고 새 source/열기 세션을 구성하세요. 이 예제는 release를 고정하므로 정적 head 변경만으로 자동 교체되지 않습니다.

## 인증된 provider 구현 시 입력값의 의미

허용 경로는 `objects/<64자리 hash>`와 `releases/<64자리 hash>.json`입니다. limit은 **이번 읽기에서 허용하는 최대 bytes**이며 서버의 Content-Length와 실제 스트림 누적 모두 확인합니다. signal은 응답 읽기 중에도 취소를 전달해야 합니다. response를 JSON으로 바꾸거나 텍스트 재인코딩하지 않고 원래 bytes를 반환합니다.

장기 접근 키·사용자 비밀번호를 공개 번들에 넣지 않습니다. 호스트의 인증/임시 권한/접근 범위를 유지하고 SDK의 hash 검사를 권한 검사로 대체하지 않습니다. arbitrary remote-code URL loader, API 승인/적용 서버, S3 discovery는 이 가이드나 기본 SDK에서 구현했다고 주장하지 않습니다.
