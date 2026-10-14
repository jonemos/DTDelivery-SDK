# 11 · 스크립트 컴포넌트의 공개 속성

[목차](README.md) · 관련: [로드 상태](05_PROGRESS.md), [종료·재연결](13_LIFECYCLE.md)

이 기능은 현재 열린 게시본에 포함된 신뢰된 애드온의 **공개 속성**을 읽고 실행 중 변경합니다. 임의 JavaScript URL을 입력하거나 외부 코드를 평가하는 기능이 아닙니다. 애드온은 제작 단계에서 정확한 version/hash로 설치·부착되고 Delivery 환경/capability와 공개 properties를 선언한 뒤 새 게시본에 포함돼야 합니다.

## 목록·핸들·대상

| API | 반환·동작 |
|---|---|
| sdk.scripts.list() | `readonly DeliveryScriptSnapshot[]`, 현재 로드된 인스턴스 목록 |
| sdk.scripts.get(target) | 실행 준비된 인스턴스의 DeliveryScriptHandle. 대상 미준비면 throw |
| target | `{mountId:string|null, actorId:string, componentId:string}` |
| sdk.scripts.subscribe(listener) | 목록/속성 변화 알림, cleanup 반환. 현재 값은 list로 먼저 읽기 |
| handle.snapshot() | schema/values/revision/state/reference/releaseHash 복사본, 관찰 revision 갱신 |
| handle.schema | readonly 공개 속성 schema, 관찰 revision을 따로 갱신하지 않음 |
| handle.getProperties() | 공개 값 복사본, 관찰 revision 갱신 |
| handle.setProperties(values, {expectedRevision?}) | `Promise<DeliveryScriptSnapshot>`, 실행 중 변경. 기본 revision은 마지막 관찰값 |
| handle.subscribe((values,snapshot)=>...) | 현재 값1회와 이후 변경 알림, cleanup 반환 |
| sdk.changeAddonProperties(change) | target·values·expectedRevision 명시, 핸들 없이 같은 runtime 변경 |

snapshot.state는 starting/running/faulted/disposed입니다. get은 running 대상에만 사용합니다. reference에는 정확한 설치 package/version/codeHash 바인딩이 있으며 호스트가 임의로 바꾸지 않습니다. componentId도 액터의 실제 컴포넌트 ID이며 화면의 컴포넌트 이름을 대신 넣지 않습니다.

## schema를 입력폼으로 바꾸기

| schema 필드 | 의미·화면 |
|---|---|
| name | 외부 공개 속성 이름. values/setProperties의 key |
| setting | 애드온 내부 설정 key. 외부 setter에는 name을 사용 |
| type | number → number input, boolean → checkbox, string → text |
| format:'color' | string 값 `#RRGGBB`, color input |
| access | read / read-write. read는 비활성 |
| storage | runtime / persistent / both. 이 client는 runtime 변경만 수행 |
| min/max/maxLength | 실제 값/문자열 제한. input hint와 SDK 최종 검증에 사용 |

사용자가 입력폼에서 봤던 revision을 expectedRevision으로 보냅니다. 변경 직전에 새 값을 읽어 revision만 몰래 갱신하면 다른 변경을 사용자가 확인하지 못한 채 덮는 결과가 될 수 있습니다. 충돌 시 최신 snapshot을 다시 보여주고 사용자가 재입력하도록 처리합니다.

## 동적 공개 속성 폼

`<div id="scripts"></div>`과 오류 라벨을 준비합니다. 아래 함수는 모든 로드된 인스턴스의 공개 schema를 표시합니다. 임의로 `color`/`speed`라는 속성이 있다고 가정하지 않습니다.

```ts
import { DeliveryClient } from '@dt/delivery-sdk';

export function mountScriptProperties(
  sdk: DeliveryClient, root: HTMLElement, report: (message: string) => void,
) {
  let live = true;
  const render = () => {
    if (!live) return;
    root.replaceChildren();
    const instances = sdk.scripts.list();
    if (!instances.length) { root.textContent = '로드된 스크립트가 없습니다.'; return; }
    for (const instance of instances) {
      const box = document.createElement('fieldset'), legend = document.createElement('legend');
      legend.textContent = `${instance.target.componentId} · ${instance.state}`;
      box.append(legend); root.append(box);
      if (instance.state !== 'running') {
        box.append(document.createTextNode(instance.error ?? instance.state)); continue;
      }
      let handle;
      try { handle = sdk.scripts.get(instance.target); }
      catch (error) { box.append(document.createTextNode(String(error))); continue; }
      const shown = handle.snapshot();
      for (const property of shown.schema) {
        const label = document.createElement('label'), input = document.createElement('input');
        label.append(document.createTextNode(property.name), input); box.append(label);
        input.setAttribute('aria-label', property.name);
        input.type = property.type === 'boolean' ? 'checkbox'
          : property.format === 'color' ? 'color' : property.type === 'number' ? 'number' : 'text';
        const value = shown.values[property.name];
        if (property.type === 'boolean') input.checked = value === true;
        else input.value = String(value);
        if (property.type === 'number') {
          input.step = 'any';
          if (property.min !== undefined) input.min = String(property.min);
          if (property.max !== undefined) input.max = String(property.max);
        }
        if (property.maxLength !== undefined) input.maxLength = property.maxLength;
        input.disabled = property.access !== 'read-write' || property.storage === 'persistent';
        if (input.disabled) input.title = property.access !== 'read-write' ? '읽기 전용' : '영구 저장 전용';
        input.onchange = () => {
          if (property.type === 'number' && (!input.value.trim() || !Number.isFinite(input.valueAsNumber))) {
            report('유효한 숫자를 입력하세요.'); return;
          }
          const next = property.type === 'boolean' ? input.checked
            : property.type === 'number' ? input.valueAsNumber : input.value;
          input.disabled = true;
          void handle.setProperties({ [property.name]: next }, { expectedRevision: shown.revision })
            .catch(error => { if (live) report(String(error)); }).finally(render);
        };
      }
    }
  };
  const unsubscribe = sdk.scripts.subscribe(render);
  render();
  return () => { live = false; unsubscribe(); root.replaceChildren(); };
}
```

초기 list가 빈 것은 그 게시본에 스크립트가 없거나 아직 셀이 준비되지 않았기 때문일 수 있습니다. 점진 로딩 중 subscribe로 갱신합니다. 소규모 폼 예제는 변화 때 전체 DOM을 갱신합니다. 실제 앱에서 긴 draft 입력을 유지하려면 target/name으로 필드를 유지하고 확정값과 draft를 별도 관리하되 revision 검사와 readonly 조건은 유지하세요.

## 영구 저장과 세션

값은 boolean/유한 number/string이고 SDK가 name·type·범위·access·storage·색상 형식을 최종 검증합니다. persistent 전용 값은 runtime setter로 변경할 수 없습니다. both도 이 경로에서 바꾸면 현재 런타임에 적용할 뿐 영구 저장되지 않습니다.

다른 open 요청, source 교체, dispose 또는 codeHash 변경 후 기존 handle은 무효입니다. 새 세션에서는 `scripts.list()`→`scripts.get()`으로 다시 얻습니다. 충돌/손상/미로드 대상 오류를 숨기거나 expectedRevision을 자동 증가시켜 재시도하지 않습니다.

다른 사용자 동기화·외부 영구 저장은 기본 제공하지 않습니다. 별도 호스트 연결이 필요한 고급 사용자는 `viewport.addons.bind(connection)`의 AddonPropertyConnection을 구현해야 하며 connect/list/change/subscribe/dispose와 저장 권한은 호스트 책임입니다. 이 가이드의 폼은 이 서비스가 없어도 현재 실행 값 변경에 사용할 수 있습니다.
