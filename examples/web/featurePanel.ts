import { exampleCode, featureExamples, featureReference, type ExampleContext, type ExampleValues, type ExampleField } from './featureExamples';
import type { DeliveryModel, DeliveryScriptSnapshot } from '@dt/delivery-sdk';
import { DELIVERY_SDK_VERSION } from '@dt/delivery-sdk';

export interface FeatureHost extends Pick<ExampleContext, 'client' | 'connect' | 'disconnect' | 'showViewport'> {
  catalog(): readonly DeliveryModel[];
  address(): string;
  scope(): string;
}
export function mountFeaturePanel(root: HTMLElement, codeRoot: HTMLElement, information: HTMLElement, host: FeatureHost) {
  const make = <T extends keyof HTMLElementTagNameMap>(tag: T, className = '', text = '') => {
    const element = document.createElement(tag); element.className = className; element.textContent = text; return element;
  };
  const heading = make('div', 'section-heading'), title = make('h2', '', '기능 · API 찾기'), badge = make('span', 'count-label', String(featureExamples.length)); heading.append(title, badge);
  const help = make('div', 'example-help-links');
  for (const [label, file] of [['처음 사용하기', 'README.md'], ['API 명세', 'docs/API.md']] as const) { const link = make('a', '', label); link.href = `https://github.com/jonemos/DTDelivery-SDK/blob/v${DELIVERY_SDK_VERSION}/${file}`; link.target = '_blank'; link.rel = 'noopener noreferrer'; help.append(link); }
  const search = make('input'); search.id = 'example-search'; search.type = 'search'; search.placeholder = '기능 · 클래스 · 함수 검색'; search.setAttribute('aria-label', 'SDK 기능 검색');
  const category = make('select'); category.id = 'example-category'; category.setAttribute('aria-label', 'SDK 기능 분류');
  category.append(...['모든 기능', ...new Set(featureExamples.map(example => featureReference[example.id]!.category))].map(value => { const option = make('option', '', value); option.value = value === '모든 기능' ? '' : value; return option; }));
  const searchResults = make('div', 'example-search-results'), searchState = make('p', 'example-search-state'); searchState.setAttribute('role', 'status'); searchState.id = 'example-search-state';
  const resetSearch = make('button', 'button-quiet', '검색 초기화'); resetSearch.id = 'example-search-reset';
  const results = make('div', 'example-search-items'); searchResults.append(searchState, results, resetSearch); searchResults.hidden = true;
  const select = make('select'); select.id = 'example-select'; select.setAttribute('aria-label', '기능별 예제');
  select.append(...featureExamples.map(example => { const option = make('option', '', example.title); option.value = example.id; return option; }));
  const description = make('p', 'example-description'), requirement = make('p', 'example-requirement'), reference = make('div', 'example-reference'), fields = make('div', 'example-fields');
  requirement.id = 'example-requirement'; reference.id = 'example-reference';
  const owner = make('strong'), api = make('div', 'example-api-list'), referenceGuide = make('a', '', '기능 문서 ↗'); referenceGuide.target = '_blank'; referenceGuide.rel = 'noopener noreferrer'; reference.append(owner, api, referenceGuide);
  const actions = make('div', 'example-actions'), run = make('button', 'button-primary', '실행'), stop = make('button', 'button-secondary', '정지 · 복원');
  const viewCode = make('button', 'button-quiet', '코드 보기'), reload = make('button', 'button-quiet', '현재값 읽기');
  run.id = 'example-run'; stop.id = 'example-stop'; viewCode.id = 'example-code-toggle'; reload.id = 'example-reload';
  actions.append(run, stop, viewCode);
  const state = make('p', 'example-state', '예제를 선택하고 실행하세요.'); state.id = 'example-state'; state.setAttribute('role', 'status');
  root.append(heading, help, search, category, searchResults, select, description, reference, requirement, fields, reload, actions, state);

  const codeHeading = make('div', 'section-heading'), codeTitle = make('h2', '', '예제 코드');
  const close = make('button', 'button-quiet', '닫기'); close.setAttribute('aria-label', '예제 코드 닫기'); codeHeading.append(codeTitle, close);
  const codeActions = make('div', 'example-code-actions'), copy = make('button', 'button-secondary', '코드 복사');
  const wrapLabel = make('label'), wrap = make('input'); wrap.type = 'checkbox'; wrap.checked = true; wrap.setAttribute('aria-label', '코드 줄바꿈'); wrapLabel.append(wrap, document.createTextNode('줄바꿈'));
  const guide = make('a', '', '기능 문서'); guide.target = '_blank'; guide.rel = 'noopener noreferrer';
  codeActions.append(copy, wrapLabel, guide);
  copy.disabled = !navigator.clipboard;
  if (copy.disabled) copy.title = '클립보드가 지원되는 HTTPS/localhost 환경이 필요합니다.';
  const call = make('pre', 'example-call'), parameters = make('pre', 'example-parameters'), code = make('pre', 'example-code wrap'), resultTitle = make('h3', '', '실행 결과'), result = make('pre', 'example-result'); call.id = 'example-call';
  code.id = 'example-code'; parameters.id = 'example-parameters'; result.id = 'example-result'; result.textContent = '아직 실행하지 않았습니다.';
  codeRoot.append(codeHeading, codeActions, call, parameters, code, resultTitle, result);
  viewCode.setAttribute('aria-controls', codeRoot.id);

  let current = featureExamples[0]!, controls = new Map<string, HTMLInputElement | HTMLSelectElement>();
  let active = false, disposed = false, ticket = 0, controller: AbortController | undefined, cleanup: (() => void) | undefined;
  let shownScript: DeliveryScriptSnapshot | undefined, scriptClient = host.client();
  const format = (value: unknown) => {
    const text = typeof value === 'string' ? value : JSON.stringify(value, null, 2) ?? String(value);
    return text.length > 65536 ? text.slice(0, 65536) + '\n… 결과 표시를 65,536자로 제한했습니다.' : text;
  };
  const showCode = (visible: boolean) => { codeRoot.hidden = !visible; information.hidden = visible; viewCode.setAttribute('aria-expanded', String(visible)); viewCode.textContent = visible ? '상세 보기' : '코드 보기'; };
  const fail = (error: unknown) => { state.dataset.state = 'failed'; state.textContent = error instanceof Error ? error.message : String(error); result.textContent = state.textContent; };
  const values = (): ExampleValues => Object.fromEntries([...controls].map(([key, input]) => [key, input instanceof HTMLInputElement && input.type === 'checkbox' ? input.checked : input.value]));
  const options = (input: HTMLSelectElement, entries: readonly { value: string; label: string }[]) => {
    const before = input.value;
    if (input.dataset.entries === JSON.stringify(entries)) return false;
    input.dataset.entries = JSON.stringify(entries);
    input.replaceChildren(...entries.map(entry => { const option = make('option', '', entry.label); option.value = entry.value; return option; }));
    if (entries.some(entry => entry.value === before)) input.value = before;
    return input.value !== before;
  };
  const scripts = () => host.client()?.scripts.list().filter(instance => instance.state === 'running') ?? [];
  const setScriptValue = (force: boolean) => {
    const scriptSelect = controls.get('script'), propertySelect = controls.get('property'), value = controls.get('value');
    if (!(scriptSelect instanceof HTMLSelectElement) || !(propertySelect instanceof HTMLSelectElement) || !(value instanceof HTMLInputElement)) return;
    const instances = scripts();
    const changed = options(scriptSelect, instances.map(instance => ({ value: JSON.stringify(instance.target), label: `${instance.target.componentId} · ${instance.target.mountId ?? '통합'}` })));
    if (force || changed || scriptClient !== host.client() || !shownScript) {
      shownScript = instances.find(instance => JSON.stringify(instance.target) === scriptSelect.value); scriptClient = host.client();
      options(propertySelect, (shownScript?.schema ?? []).map(property => ({ value: property.name, label: `${property.name} · ${property.type}` })));
      const property = shownScript?.schema.find(property => property.name === propertySelect.value);
      value.type = property?.type === 'boolean' ? 'checkbox' : property?.format === 'color' ? 'color' : property?.type === 'number' ? 'number' : 'text';
      value.removeAttribute('min'); value.removeAttribute('max'); value.removeAttribute('maxlength');
      if (value.type === 'checkbox') value.checked = shownScript?.values[propertySelect.value] === true;
      else value.value = String(shownScript?.values[propertySelect.value] ?? '');
      if (property?.type === 'number') { value.step = 'any'; if (property.min !== undefined) value.min = String(property.min); if (property.max !== undefined) value.max = String(property.max); }
      if (property?.maxLength !== undefined) value.maxLength = property.maxLength;
      value.disabled = !property || property.access !== 'read-write' || property.storage === 'persistent';
      value.title = value.disabled ? '실행 중 변경 가능한 공개 속성이 아닙니다.' : `표시 revision: ${shownScript?.revision}`;
    }
  };
  const reason = () => {
    const sdk = host.client();
    if (current.needs && !sdk) return '먼저 상단에서 저장소를 연결하세요.';
    if (current.needs === 'ready' && sdk?.progress.status !== 'ready') return '게시본 열기를 완료한 뒤 실행하세요.';
    if (current.needs === 'loading' && sdk?.progress.status !== 'loading') return '로드가 진행 중일 때 실행할 수 있습니다.';
    if (current.id === 'open' && !controls.get('model')?.value) return '조회된 모델이 없습니다.';
    if (current.fields?.some(field => field.kind === 'actors') && !controls.get('actor')?.value) return '준비된 액터가 없습니다.';
    if (current.id === 'property') {
      const property = shownScript?.schema.find(property => property.name === controls.get('property')?.value);
      if (!shownScript) return '로드된 실행 스크립트가 없습니다. 애드온 포함 게시본이 필요합니다.';
      if (!property || property.access !== 'read-write' || property.storage === 'persistent') return '선택 속성은 읽기 전용 또는 영구 저장 전용입니다.';
    }
    return '';
  };
  const refresh = () => {
    if (disposed) return;
    for (const field of current.fields ?? []) {
      const input = controls.get(field.key);
      if (!(input instanceof HTMLSelectElement)) continue;
      if (field.kind === 'models') options(input, host.catalog().map(model => ({ value: model.id, label: model.name })));
      if (field.kind === 'actors') options(input, (host.client()?.actors() ?? []).filter(row => row.available && (current.id !== 'focus' || row.focusable)).map(row => ({ value: row.serviceKey, label: `${row.actorName} · ${row.mountName}` })));
    }
    if (current.id === 'property') setScriptValue(false);
    if (current.id === 'textures') {
      const available = new Set(host.client()?.viewport.session.textureDisplay.layouts.flatMap(layout => layout.uses.map(use => use.kind)) ?? []);
      for (const kind of ['baseColor', 'normal', 'metallicRoughness', 'occlusion', 'emissive', 'specular'] as const) {
        const input = controls.get(kind);
        if (input instanceof HTMLInputElement) { input.disabled = !available.has(kind); if (input.disabled) input.checked = false; input.title = input.disabled ? '이 게시본에 지원 텍스처가 없습니다.' : ''; }
      }
    }
    const unavailable = reason();
    run.disabled = active || Boolean(unavailable); run.title = unavailable;
    stop.disabled = !controller && !cleanup;
    description.textContent = current.description;
    requirement.textContent = unavailable; requirement.hidden = !unavailable;
  };
  const stopCurrent = (announce = true) => {
    ticket++; controller?.abort(); controller = undefined; active = false;
    const previous = cleanup; cleanup = undefined;
    try { previous?.(); if (announce) { state.textContent = '실행·구독을 정지하고 가능한 표시 설정을 복원했습니다.'; state.dataset.state = 'idle'; } }
    catch (error) { fail(error); }
    refresh();
  };
  const createField = (field: ExampleField) => {
    const label = make('label', field.kind === 'checkbox' ? 'example-check' : 'example-field');
    const caption = make('span', '', field.label);
    let input: HTMLSelectElement | HTMLInputElement;
    if (['select', 'models', 'actors', 'scripts', 'property'].includes(field.kind)) {
      input = make('select'); options(input, (field.options ?? []).map(value => ({ value, label: value })));
    } else { input = make('input'); input.type = field.kind === 'checkbox' ? 'checkbox' : field.kind === 'number' ? 'number' : 'text'; if (input.type === 'number') input.step = 'any'; }
    input.id = 'example-input-' + field.key; input.setAttribute('aria-label', '예제 ' + field.label);
    if (input instanceof HTMLInputElement && input.type === 'checkbox') input.checked = field.value === true;
    else if (field.value !== undefined) input.value = String(field.value);
    if (field.key === 'address') input.value = host.address();
    if (field.key === 'scope') input.value = host.scope();
    if (field.kind === 'checkbox') label.append(input, caption); else label.append(caption, input);
    input.addEventListener('change', () => { if (field.kind === 'scripts' || field.kind === 'property') setScriptValue(true); refresh(); });
    controls.set(field.key, input); fields.append(label);
  };
  const choose = () => {
    stopCurrent(false); current = featureExamples.find(example => example.id === select.value)!;
    controls = new Map(); shownScript = undefined; fields.replaceChildren();
    for (const field of current.fields ?? []) createField(field);
    codeTitle.textContent = current.title; code.textContent = exampleCode(current.id);
    guide.href = `https://github.com/jonemos/DTDelivery-SDK/blob/v${DELIVERY_SDK_VERSION}/docs/guides/${current.guide}.md`;
    const data = featureReference[current.id]!; owner.textContent = data.owner; api.replaceChildren(...data.api.map(name => make('code', '', name))); call.textContent = data.call; referenceGuide.href = guide.href;
    parameters.textContent = '입력값은 실행 시 표시합니다.'; result.textContent = '아직 실행하지 않았습니다.';
    state.textContent = '예제를 선택하고 실행하세요.'; state.dataset.state = 'idle';
    reload.hidden = current.id !== 'property'; refresh(); renderSearch();
  };
  const renderSearch = () => {
    const terms = search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean), filtering = terms.length > 0 || category.value !== '';
    searchResults.hidden = !filtering;
    const matches = featureExamples.filter(example => {
      const data = featureReference[example.id]!, text = [example.title, example.description, data.owner, data.category, ...data.api, data.call, ...(example.fields ?? []).flatMap(field => [field.label, field.key, ...(field.options ?? [])])].join(' ').toLocaleLowerCase();
      return (!category.value || data.category === category.value) && terms.every(term => text.includes(term) || text.replace(/\s/g, '').includes(term));
    });
    badge.textContent = filtering ? `${matches.length}/${featureExamples.length}` : String(featureExamples.length);
    searchState.textContent = matches.length ? `${matches.length}개 기능 · 선택하면 코드와 입력을 봅니다.` : '검색 결과가 없습니다. 검색어나 분류를 바꾸세요.';
    results.replaceChildren(...matches.map(example => {
      const button = make('button', 'example-search-result'); button.type = 'button'; button.dataset.example = example.id; button.setAttribute('aria-pressed', String(example.id === current.id));
      button.append(make('span', '', example.title), make('small', '', featureReference[example.id]!.api[0]));
      button.onclick = () => { select.value = example.id; choose(); showCode(true); }; return button;
    }));
  };
  search.oninput = renderSearch; category.onchange = renderSearch;
  resetSearch.onclick = () => { search.value = ''; category.value = ''; renderSearch(); search.focus(); };
  select.addEventListener('change', () => { choose(); showCode(true); });
  stop.onclick = () => stopCurrent(); viewCode.onclick = () => showCode(codeRoot.hidden === true); close.onclick = () => showCode(false);
  reload.onclick = () => { setScriptValue(true); refresh(); };
  wrap.onchange = () => code.classList.toggle('wrap', wrap.checked);
  copy.onclick = () => { void navigator.clipboard.writeText(code.textContent ?? '').then(() => { state.textContent = '코드를 복사했습니다.'; }).catch(error => fail(error)); };
  run.onclick = () => {
    const unavailable = reason(); if (unavailable) { fail(new Error(unavailable)); return; }
    stopCurrent(false);
    const sequence = ++ticket, abort = new AbortController(), example = current, input = values(), capturedScript = shownScript;
    controller = abort; active = true; showCode(true); parameters.textContent = format({ example: example.id, inputs: input, ...(example.id === 'property' ? { expectedRevision: capturedScript?.revision } : {}) });
    state.dataset.state = 'loading'; state.textContent = '실행 중…'; result.textContent = '실행 중…'; refresh();
    const write = (value: unknown) => { if (!disposed && sequence === ticket && !abort.signal.aborted) result.textContent = format(value); };
    const context: ExampleContext = { ...host, script: () => capturedScript, write, signal: abort.signal };
    // Call compiled static functions. The read-only displayed source is never evaluated.
    let task;
    try { task = Promise.resolve(example.run(context, input)); }
    catch (error) { task = Promise.reject(error); }
    void task.then(outcome => {
      if (disposed || sequence !== ticket || abort.signal.aborted) { outcome.cleanup?.(); return; }
      cleanup = outcome.cleanup; write(outcome.value);
      state.dataset.state = 'ready'; state.textContent = outcome.cleanup ? '실행 완료 · 정지하면 구독/표시를 복원합니다.' : '실행 완료';
      if (example.id === 'property') setScriptValue(true);
    }).catch(error => {
      if (disposed || sequence !== ticket) return;
      if (error instanceof DOMException && error.name === 'AbortError') { state.dataset.state = 'idle'; state.textContent = '폴더 선택을 취소했습니다.'; result.textContent = state.textContent; }
      else fail(error);
    }).finally(() => {
      if (!disposed && sequence === ticket) { active = false; if (!cleanup) controller = undefined; refresh(); }
    });
  };
  choose(); showCode(false);
  return { refresh, stop: () => stopCurrent(), dispose: () => { stopCurrent(false); disposed = true; root.replaceChildren(); codeRoot.replaceChildren(); information.hidden = false; } };
}
