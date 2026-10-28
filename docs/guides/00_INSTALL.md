# 00 · 외부 프로젝트 설치

[목차](README.md) · 다음: [로컬 연결](01_LOCAL_SOURCE.md) / [HTTP 연결](02_HTTP_SOURCE.md)

목표는 외부 웹 프로젝트에서 SDK 클래스와 예제 UI를 사용할 수 있게 준비하는 것입니다. SDK 예제 자체를 실행하려면 [루트 README](../../README.md)의 `examples/test-server.cmd`를 사용하세요. 아래는 별도 프로젝트를 만드는 방법입니다.

## 설치

검증에 사용한 도구 버전은 Node24.16.0·pnpm11.9.0·TypeScript6.0.2·Vite8.3.0입니다. 기존 프로젝트가 있다면 그 프로젝트의 도구 구성을 유지하고 SDK 의존성만 추가합니다.

```powershell
mkdir delivery-viewer
Set-Location delivery-viewer
pnpm.cmd init
pnpm.cmd add @dt/delivery-sdk@github:jonemos/DTDelivery-SDK#v0.3.25 --ignore-scripts
pnpm.cmd add -D typescript@6.0.2 vite@8.3.0 --ignore-scripts
```

개발자는 Git으로 고정 버전을 가져오고 Vite로 브라우저 파일을 제공합니다. 실제 배포 웹페이지 사용자에게 Node·pnpm·Git 설치를 요구하지 않습니다. 이 명령은 사용자 청크를 설치하거나 게시하지 않습니다.

`package.json`에 아래 항목을 넣습니다. 설치 명령이 만든 dependencies/devDependencies는 유지합니다.

```json
{
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1 --port 5183 --strictPort",
    "build": "tsc --noEmit && vite build"
  }
}
```

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "strict": true,
    "skipLibCheck": false,
    "noEmit": true,
    "types": ["vite/client"]
  },
  "include": ["src"]
}
```

## 공개 import

```ts
import { DELIVERY_SDK_VERSION, DeliveryClient, HttpChunkSource } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

export function initialize(canvas: HTMLCanvasElement, address: string) {
  const sdk = new DeliveryClient({
    canvas,
    source: new HttpChunkSource(new URL(address)),
  });
  return { version: DELIVERY_SDK_VERSION, sdk };
}
```

| 값 | 의미 |
|---|---|
| `DELIVERY_SDK_VERSION` | 설치된 런타임 버전 문자열. 상단 버전 라벨에 사용 |
| `canvas` | 실제 DOM의 HTMLCanvasElement. null 검사 후 전달 |
| `address` | 게시된 일반 청크 폴더의 HTTP/HTTPS 절대 주소, 끝 `/` 필요 |
| `viewport.css` | SDK 기본 뷰포트 UI 스타일. 외부 페이지 전체 테마와 배치는 별도 CSS |
| 반환된 `sdk` | 목록 조회·열기·선택·종료를 호출할 연결 객체 |

초기화만으로 모델은 열리지 않습니다. [목록 조회 후 열기](04_MODELS.md)가 필요합니다.

## 실행과 확인

`index.html`에서 `<script type="module" src="/src/main.ts"></script>`로 앱을 연결하고 `pnpm.cmd dev`로 실행합니다. `file://`로 HTML을 직접 열지 않습니다. 개발 서버의5183이 이미 사용 중이면 기존 서버 창을 Ctrl+C로 종료하거나 외부 프로젝트의 dev 명령을 다른 포트로 지정합니다. `--strictPort`는 자동으로 다른 포트에 뜨지 않도록 합니다.

원본 SDK clone을 `file:`로 설치해 개발한다면 clone의 [예제 README](../../examples/web/README.md)에 있는 install/update/detach 순서를 사용하세요. 공개 SDK의 runtime/types/manifest는 직접 편집하지 않습니다. CSS는 외부 프로젝트 파일에서 컨테이너 범위를 지정해 확장합니다.
