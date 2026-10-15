import { DELIVERY_SDK_VERSION, DeliveryClient, LocalChunkSource, HttpChunkSource, mountActorPanel, mountDeliveryViewportTools, type DeliveryDirectoryHandle, type DeliveryModel, type DeliveryProgress, type DeliverySource } from '@dt/delivery-sdk';
import { mountFeaturePanel } from './featurePanel';
import '@dt/delivery-sdk/viewport.css';
import './style.css';

const element = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const source = element<HTMLSelectElement>('source'), models = element<HTMLSelectElement>('models'), canvas = element<HTMLCanvasElement>('view');
const status = element('status'), scope = element<HTMLInputElement>('scope'), address = element<HTMLInputElement>('address');
const publicationId = element<HTMLInputElement>('publication-id');
const open = element<HTMLButtonElement>('open'), folder = element<HTMLButtonElement>('folder');
let sdk: DeliveryClient | undefined, directory: DeliveryDirectoryHandle | undefined, currentSource: DeliverySource | undefined, generation = 0;
let cleanups: (() => void)[] = [];
let catalog: readonly DeliveryModel[] = [];
element('version').textContent = DELIVERY_SDK_VERSION;
const message = (value: string, state = 'idle') => { status.textContent = value; status.title = value; status.dataset.state = state; };
function fields() {
  folder.hidden = source.value !== 'local'; element('address-field').hidden = source.value === 'local'; element('publication-field').hidden = source.value !== 'publication'; scope.disabled = source.value === 'http';
  element('source-help').textContent = source.value === 'local' ? '전체/변경분 저장 폴더 또는 로컬 게시 저장소를 선택하세요. 폴더는 읽기만 합니다.' : source.value === 'publication' ? '버킷/경로 접두사까지의 주소와 게시 구역·통합레벨 ID를 입력하세요. levels 아래의 게시본을 읽습니다. 파일 읽기 권한과 이 페이지 origin의 CORS 허용이 필요합니다.' : 'delivery-head.json·objects·releases가 있는 정적 폴더 주소입니다. 파일 읽기 권한과 CORS 허용이 필요합니다.';
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
  const ticket = ++generation, old = sdk; sdk = undefined; cleanups.splice(0).forEach(dispose => dispose()); await old?.dispose();
  catalog = []; examples?.refresh();
  if (ticket === generation) { canvas.hidden = true; element('scripts').replaceChildren(); element('update-summary').textContent = '자동 갱신 대기'; delete element('update-summary').dataset.release; }
  return ticket;
}
async function connect(value: DeliverySource, signal?: AbortSignal, fromExample = false): Promise<readonly DeliveryModel[]> {
  if (!fromExample) examples?.stop();
  signal?.throwIfAborted();
  const ticket = await disconnect(false); signal?.throwIfAborted(); if (ticket !== generation) return []; currentSource = value;
  if (value instanceof LocalChunkSource) { directory = value.directory; scope.value = value.scope; source.value = 'local'; }
  if (value instanceof HttpChunkSource) { address.value = value.base.href; source.value = value.publication ? 'publication' : 'http'; publicationId.value = value.publication?.compositionId ?? ''; if (value.publication) scope.value = value.publication.scope; }
  fields();
  models.disabled = true; open.disabled = true;
  sdk = new DeliveryClient({ canvas, source: value, onProgress: value => { if (ticket === generation) progress(value); } });
  // A standalone inspection page needs fill light even when the source contains no lights.
  sdk.viewport.environment = true;
  cleanups = [mountActorPanel(element('actors'), sdk.viewport, element('actor-details')), mountDeliveryViewportTools(element('viewport-tools'), sdk.viewport, () => { void element('viewport').requestFullscreen().catch(error => message(String(error))); }), sdk.subscribeActorSelection(() => examples?.refresh()), sdk.scripts.subscribe(() => { if (ticket === generation) { scripts(); examples?.refresh(); } })];
  const listed = await sdk.listModels(signal); if (ticket !== generation) return []; catalog = listed;
  models.replaceChildren(...catalog.map(model => { const option = document.createElement('option'); option.value = model.id; option.textContent = model.name; return option; }));
  models.disabled = !catalog.length; open.disabled = !catalog.length; message(catalog.length ? `${catalog.length}개 모델 · 게시본을 여세요.` : '게시 완료된 모델이 없습니다.');
  examples?.refresh(); return catalog;
}
folder.onclick = () => {
  const picker = (window as unknown as { showDirectoryPicker?: (options: { mode: 'read' }) => Promise<DeliveryDirectoryHandle> }).showDirectoryPicker;
  if (!picker) { message('이 브라우저는 폴더 선택을 지원하지 않습니다. Chrome/Edge를 사용하세요.'); return; }
  void picker.call(window, { mode: 'read' }).then(handle => { directory = handle; return connect(new LocalChunkSource(handle, { scope: scope.value.trim() })); }).catch(error => { if (error instanceof DOMException && error.name === 'AbortError') return; message(String(error)); });
};
element<HTMLButtonElement>('list').onclick = () => {
  if (source.value === 'local' && !directory) { message('먼저 청크 폴더를 선택하세요.'); return; }
  void (async () => { const value = source.value === 'local' ? new LocalChunkSource(directory!, { scope: scope.value.trim() }) : new HttpChunkSource(new URL(address.value.trim()), source.value === 'publication' ? { scope: scope.value.trim(), compositionId: publicationId.value.trim() } : undefined); await connect(value); })().catch(error => message(error instanceof TypeError && source.value !== 'local' ? '원격 파일 요청 실패 · 주소·읽기 권한·CORS 설정을 확인하세요.' : String(error)));
};
open.onclick = () => {
  if (!currentSource || !models.value) return;
  examples?.stop();
  void (async () => { if (!sdk) await connect(currentSource!); const client = sdk!; canvas.hidden = false; open.disabled = true; try { await client.open(models.value, { progressive: true }); } finally { if (client === sdk) open.disabled = false; } })().catch(error => message(String(error)));
};
element<HTMLButtonElement>('close').onclick = () => { void disconnect().then(() => message('연결을 해제했습니다.')).catch(error => message(String(error))); };
source.onchange = () => { void disconnect(); models.replaceChildren(); models.disabled = true; open.disabled = true; fields(); message('청크 연결을 선택하세요.'); };
const examples = mountFeaturePanel(element('examples'), element('example-code-panel'), element('viewer-information'), {
  client: () => sdk, catalog: () => catalog, address: () => address.value, scope: () => scope.value,
  connect: (value, signal) => connect(value, signal, true),
  disconnect: async () => { await disconnect(false); message('연결을 해제했습니다.'); },
  showViewport: () => { canvas.hidden = false; },
});
window.addEventListener('pagehide', () => { examples?.dispose(); void sdk?.dispose(); });
canvas.hidden = true; fields();
