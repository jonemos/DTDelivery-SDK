import { DELIVERY_SDK_VERSION, DeliveryClient, LocalChunkSource, HttpChunkSource, defaultDeliverySource, mountActorPanel, mountDeliveryViewportTools, type DeliveryDirectoryHandle, type DeliveryModel, type DeliveryProgress, type DeliverySource } from '@dt/delivery-sdk';
import { mountFeaturePanel } from './featurePanel';
import '@dt/delivery-sdk/viewport.css';
import './style.css';

const element = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const source = element<HTMLSelectElement>('source'), models = element<HTMLSelectElement>('models'), canvas = element<HTMLCanvasElement>('view');
const status = element('status'), scope = element<HTMLInputElement>('scope'), address = element<HTMLInputElement>('address');
const open = element<HTMLButtonElement>('open'), folder = element<HTMLButtonElement>('folder');
let sdk: DeliveryClient | undefined, directory: DeliveryDirectoryHandle | undefined, currentSource: DeliverySource | undefined, generation = 0;
let cleanups: (() => void)[] = [];
let catalogTimer: ReturnType<typeof setTimeout> | undefined, catalogWatcher: AbortController | undefined;
let catalog: readonly DeliveryModel[] = [];
const connectionKey = 'dt-delivery-connection-v1';
const disabledKey = 'dt-delivery-default-disabled-v1';
function remember(value: DeliverySource, modelId?: string) {
  if (!(value instanceof HttpChunkSource)) return;
  try { localStorage.setItem(connectionKey, JSON.stringify({ version: 1, url: value.connectionUrl.href, ...(modelId ? { modelId } : {}) })); localStorage.removeItem(disabledKey); } catch { /* Storage may be disabled by the host. */ }
}
function forget(disableDefault = false) { try { localStorage.removeItem(connectionKey); if (disableDefault) localStorage.setItem(disabledKey, '1'); } catch { /* Host storage is optional. */ } }
element('version').textContent = DELIVERY_SDK_VERSION;
const message = (value: string, state = 'idle') => { status.textContent = value; status.title = value; status.dataset.state = state; };
function fields() {
  folder.hidden = source.value !== 'local'; element('address-field').hidden = source.value === 'local'; scope.disabled = source.value === 'http';
  element('source-help').textContent = source.value === 'local' ? '전체/변경분 저장 폴더 또는 로컬 게시 저장소를 선택하세요. 폴더는 읽기만 합니다.' : source.value === 'publication' ? '편집기에서 복사한 SDK 연결 주소를 넣으면 게시 구역과 모델 목록을 자동으로 읽습니다. 버킷/접두사 루트 주소와 게시 구역으로도 연결할 수 있습니다. 마지막 연결·모델은 기억하며, 같은 모델의 새 게시본은 자동 반영합니다. 공개 읽기 권한·CORS가 필요합니다.' : '정적 폴더 주소 또는 SDK 연결 주소를 넣으세요. 파일 읽기 권한과 CORS 허용이 필요합니다.';
}
function scripts() {
  const root = element('scripts'); root.replaceChildren();
  if (!sdk) return;
  const instances = sdk.scripts.list();
  if (!instances.length) { root.textContent = '로드된 스크립트가 없습니다.'; return; }
  for (const instance of instances) {
    const box = document.createElement('fieldset'), legend = document.createElement('legend'); legend.textContent = instance.target.componentId; box.append(legend); root.append(box);
    if (instance.state !== 'running') { box.append(document.createTextNode(instance.state)); continue; }
    const handle = sdk.scripts.get(instance.target);
    for (const property of instance.schema) {
      const label = document.createElement('label'), input = document.createElement('input'); label.append(document.createTextNode(property.name), input); box.append(label);
      input.setAttribute('aria-label', property.name); input.type = property.type === 'boolean' ? 'checkbox' : property.format === 'color' ? 'color' : property.type === 'number' ? 'number' : 'text';
      const value = instance.values[property.name]; if (property.type === 'boolean') input.checked = value === true; else input.value = String(value);
      if (property.type === 'number') { input.step = 'any'; if (property.min !== undefined) input.min = String(property.min); if (property.max !== undefined) input.max = String(property.max); }
      if (property.maxLength !== undefined) input.maxLength = property.maxLength;
      input.disabled = property.access !== 'read-write' || property.storage === 'persistent';
      if (input.disabled) input.title = property.access !== 'read-write' ? '읽기 전용 속성입니다.' : '영구 저장 전용 속성입니다. 이 예제는 실행 중 변경을 지원합니다.';
      input.onchange = () => {
        const value = property.type === 'boolean' ? input.checked : property.type === 'number' ? Number(input.value) : input.value;
        void handle.setProperties({ [property.name]: value }, { expectedRevision: instance.revision }).catch(error => message(String(error))).finally(scripts);
      };
    }
  }
}
function progress(value: DeliveryProgress) {
  const update = element('update-summary'); update.dataset.state = value.update.state;
  const updateLabels = { disabled: '자동 갱신 꺼짐', stopped: '자동 갱신 대기', watching: '최신 게시본 자동 확인 · 5초 간격', checking: '최신 게시본 확인 중', updating: '새 게시본 준비 중 · 현재 화면 유지', retrying: '갱신 실패 · 현재 화면 유지, 자동 재시도' };
  update.textContent = updateLabels[value.update.state];
  if (value.model) {
    update.dataset.release = value.model.releaseHash; update.title = `${value.model.name} · ${value.model.releaseHash}`;
    catalog = catalog.map(model => model.id === value.model!.id ? value.model! : model);
    for (const option of models.options) if (option.value === value.model.id) option.textContent = value.model.name;
  }
  const bar = element<HTMLProgressElement>('load-progress'); bar.max = Math.max(1, value.totalCells); bar.value = value.readyCells;
  if (value.status === 'loading' && value.totalCells === 0) bar.removeAttribute('value');
  element('load-summary').textContent = value.totalCells ? `${value.readyCells} / ${value.totalCells}` : '대기 중';
  element('load-states').replaceChildren(...value.cells.map(cell => {
    const row = document.createElement('li'), name = document.createElement('span'), state = document.createElement('span');
    row.dataset.state = cell.status; row.title = cell.message ?? `${cell.name ?? cell.id} · ${cell.status}`;
    name.className = 'cell-name'; name.textContent = cell.name ?? cell.id; state.className = 'cell-status';
    const labels: Record<string, string> = { ready: '준비 완료', loading: '읽는 중', unloaded: '해제됨', failed: '실패', pending: '대기', queued: '대기', unavailable: '사용 불가' };
    state.textContent = labels[cell.status] ?? cell.status; row.append(name, state); return row;
  }));
  if (value.status === 'loading' || value.status === 'ready') message(`${value.status === 'ready' ? '로드 완료' : '준비 중'} · 화면 ${value.readyCells}/${value.totalCells} · ${(value.downloadedBytes / 1024 ** 2).toFixed(1)} MiB`, value.status);
  scripts();
  examples?.refresh();
}
async function disconnect(stopExamples = true) {
  if (stopExamples) examples?.stop();
  clearTimeout(catalogTimer); catalogTimer = undefined; catalogWatcher?.abort(); catalogWatcher = undefined;
  const ticket = ++generation, old = sdk; sdk = undefined; cleanups.splice(0).forEach(dispose => dispose()); await old?.dispose();
  catalog = []; examples?.refresh();
  if (ticket === generation) { canvas.hidden = true; element('scripts').replaceChildren(); element('update-summary').textContent = '자동 갱신 대기'; delete element('update-summary').dataset.release; }
  return ticket;
}
function watchCatalog(value: DeliverySource, client: DeliveryClient, ticket: number) {
  if (!(value instanceof HttpChunkSource) || !value.publication || value.publication.compositionId) return;
  const controller = new AbortController(); catalogWatcher = controller;
  let signature = JSON.stringify(catalog.map(model => model.id).sort());
  const check = async () => {
    try {
      const ids = await value.listModelIds(controller.signal); controller.signal.throwIfAborted();
      if (ticket !== generation || client !== sdk) return;
      const nextSignature = JSON.stringify([...ids].sort());
      if (nextSignature !== signature) {
        const listed = await client.listModels(controller.signal); controller.signal.throwIfAborted();
        if (ticket !== generation || client !== sdk) return;
        const selected = models.value; catalog = listed;
        signature = nextSignature;
        models.replaceChildren(...listed.map(model => { const option = document.createElement('option'); option.value = model.id; option.textContent = model.name; return option; }));
        if (listed.some(model => model.id === selected)) models.value = selected;
        models.disabled = !listed.length; open.disabled = !listed.length || client.progress.status === 'loading'; examples?.refresh();
        if (!client.model && listed.length === 1) await openModel(listed[0]!.id);
        else if (!client.model) message(listed.length ? `${listed.length}개 모델 · 이름으로 선택하세요.` : '게시된 모델을 기다리고 있습니다.');
      }
    } catch { /* Preserve the open model and retry discovery after a temporary storage failure. */ }
    finally { if (!controller.signal.aborted && ticket === generation && client === sdk) catalogTimer = setTimeout(() => { void check(); }, 10000); }
  };
  catalogTimer = setTimeout(() => { void check(); }, 10000);
}
async function connect(value: DeliverySource, signal?: AbortSignal, fromExample = false): Promise<readonly DeliveryModel[]> {
  if (!fromExample) examples?.stop();
  signal?.throwIfAborted();
  const ticket = await disconnect(false); signal?.throwIfAborted(); if (ticket !== generation) return []; currentSource = value;
  if (value instanceof LocalChunkSource) { directory = value.directory; scope.value = value.scope; source.value = 'local'; }
  if (value instanceof HttpChunkSource) { address.value = value.connectionUrl.href; source.value = value.publication ? 'publication' : 'http'; if (value.publication) scope.value = value.publication.scope; }
  fields();
  models.disabled = true; open.disabled = true;
  sdk = new DeliveryClient({ canvas, source: value, onProgress: value => { if (ticket === generation) progress(value); } });
  // A standalone inspection page needs fill light even when the source contains no lights.
  sdk.viewport.environment = true;
  cleanups = [mountActorPanel(element('actors'), sdk.viewport, element('actor-details')), mountDeliveryViewportTools(element('viewport-tools'), sdk.viewport, () => { void element('viewport').requestFullscreen().catch(error => message(String(error))); }), sdk.subscribeActorSelection(() => examples?.refresh()), sdk.scripts.subscribe(() => { if (ticket === generation) { scripts(); examples?.refresh(); } })];
  const listed = await sdk.listModels(signal); if (ticket !== generation) return []; catalog = listed;
  models.replaceChildren(...catalog.map(model => { const option = document.createElement('option'); option.value = model.id; option.textContent = model.name; return option; }));
  models.disabled = !catalog.length; open.disabled = !catalog.length; message(catalog.length ? `${catalog.length}개 모델 · 게시본을 여세요.` : '게시 완료된 모델이 없습니다.');
  remember(value);
  watchCatalog(value, sdk, ticket);
  examples?.refresh(); return catalog;
}
async function openModel(modelId: string) {
  const client = sdk, ticket = generation; if (!client) return;
  models.value = modelId; canvas.hidden = false; open.disabled = true;
  try { await client.open(modelId, { progressive: true }); if (client === sdk && ticket === generation && currentSource) remember(currentSource, modelId); }
  finally { if (client === sdk && ticket === generation) open.disabled = false; }
}
folder.onclick = () => {
  const picker = (window as unknown as { showDirectoryPicker?: (options: { mode: 'read' }) => Promise<DeliveryDirectoryHandle> }).showDirectoryPicker;
  if (!picker) { message('이 브라우저는 폴더 선택을 지원하지 않습니다. Chrome/Edge를 사용하세요.'); return; }
  void picker.call(window, { mode: 'read' }).then(handle => { directory = handle; return connect(new LocalChunkSource(handle, { scope: scope.value.trim() })); }).catch(error => { if (error instanceof DOMException && error.name === 'AbortError') return; message(String(error)); });
};
element<HTMLButtonElement>('list').onclick = () => {
  if (source.value === 'local' && !directory) { message('먼저 청크 폴더를 선택하세요.'); return; }
  void (async () => {
    const url = source.value === 'local' ? undefined : new URL(address.value.trim());
    const value = url ? new HttpChunkSource(url, source.value === 'publication' && !/\/(delivery-models|delivery-head)\.json$/.test(url.pathname) ? { scope: scope.value.trim() } : undefined) : new LocalChunkSource(directory!, { scope: scope.value.trim() });
    const listed = await connect(value); if (value === currentSource && listed.length === 1) await openModel(listed[0]!.id);
  })().catch(error => message(error instanceof TypeError && source.value !== 'local' ? '원격 파일 요청 실패 · 주소·읽기 권한·CORS 설정을 확인하세요.' : String(error)));
};
open.onclick = () => {
  if (!currentSource || !models.value) return;
  examples?.stop();
  void (async () => { if (!sdk) await connect(currentSource!); await openModel(models.value); })().catch(error => message(String(error)));
};
element<HTMLButtonElement>('close').onclick = () => { forget(true); void disconnect().then(() => message('연결을 해제했습니다.')).catch(error => message(String(error))); };
source.onchange = () => { forget(true); void disconnect(); models.replaceChildren(); models.disabled = true; open.disabled = true; fields(); message('청크 연결을 선택하세요.'); };
const examples = mountFeaturePanel(element('examples'), element('example-code-panel'), element('viewer-information'), {
  client: () => sdk, catalog: () => catalog, address: () => address.value, scope: () => scope.value,
  connect: (value, signal) => connect(value, signal, true),
  disconnect: async () => { await disconnect(false); message('연결을 해제했습니다.'); },
  showViewport: () => { canvas.hidden = false; },
});
window.addEventListener('pagehide', () => { clearTimeout(catalogTimer); catalogWatcher?.abort(); examples?.dispose(); void sdk?.dispose(); });
canvas.hidden = true; fields();
async function restoreConnection() {
  let saved: { version: number; url: string; modelId?: string };
  let raw: string | null = null, disabled = false;
  try { raw = localStorage.getItem(connectionKey); disabled = localStorage.getItem(disabledKey) === '1'; } catch { /* The built-in connection also works without browser storage. */ }
  try {
    if (!raw && disabled) return;
    if (raw && raw.length > 4096) { forget(); return; }
    saved = raw ? JSON.parse(raw) : { version: 1, url: defaultDeliverySource().connectionUrl.href };
    if (!saved || saved.version !== 1 || typeof saved.url !== 'string' || saved.modelId !== undefined && (typeof saved.modelId !== 'string' || !/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/.test(saved.modelId)) || Object.keys(saved).some(key => !['version', 'url', 'modelId'].includes(key))) { forget(); return; }
  } catch { forget(); return; }
  let ticket = -1;
  try {
    const value = new HttpChunkSource(new URL(saved.url)), pending = connect(value); ticket = generation;
    const listed = await pending; if (value !== currentSource || ticket !== generation) return;
    const model = saved.modelId ? listed.find(row => row.id === saved.modelId) : listed.length === 1 ? listed[0] : undefined;
    if (model) await openModel(model.id);
    else if (saved.modelId) message('마지막 모델이 목록에 없습니다. 연결된 모델을 선택하세요.');
  } catch (error) { if (ticket < 0) forget(); else if (ticket === generation) message(`저장한 연결을 다시 열지 못했습니다. ${String(error)}`); }
}
void restoreConnection();
