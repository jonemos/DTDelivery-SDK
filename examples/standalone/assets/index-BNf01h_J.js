import{DELIVERY_SDK_VERSION as e,DeliveryClient as t,HttpChunkSource as n,LocalChunkSource as r,actorServiceKey as i,defaultDeliverySource as a,mergeStorageDirectories as o,mountActorPanel as s,mountDeliveryViewportTools as c,readStorageDirectory as l,splitStorageConnection as u,storageConnectionUrl as d,storageEndpoint as f}from"/runtime/index.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var p=`import sourceText from './featureExamples.ts?raw';

// example:common:start
import { DELIVERY_SDK_VERSION, LocalChunkSource, HttpChunkSource, actorServiceKey, readStorageDirectory, splitStorageConnection, type DeliveryClient, type DeliveryModel, type DeliveryDirectoryHandle, type DeliverySource, type DeliveryScriptSnapshot } from '@dt/delivery-sdk';

export type ExampleValues = Record<string, string | number | boolean>;
export interface ExampleContext {
  client(): DeliveryClient | undefined;
  connect(source: DeliverySource, signal: AbortSignal): Promise<readonly DeliveryModel[]>;
  disconnect(): Promise<void>;
  showViewport(): void;
  script(): DeliveryScriptSnapshot | undefined;
  write(value: unknown): void;
  readonly signal: AbortSignal;
}
export interface ExampleResult { value: unknown; cleanup?: () => void }
function client(context: ExampleContext) {
  const sdk = context.client();
  if (!sdk) throw new Error('먼저 청크 폴더 또는 정적 청크 주소를 연결하세요.');
  return sdk;
}
function actor(context: ExampleContext, values: ExampleValues) {
  const row = client(context).actors().find(value => value.serviceKey === values.actor);
  if (!row?.available) throw new Error('선택한 액터가 아직 준비되지 않았습니다.');
  return row;
}
function number(values: ExampleValues, key: string) {
  const value = values[key];
  if (value === '' || typeof value === 'boolean' || !Number.isFinite(Number(value))) throw new Error(\`\${key}: 유효한 숫자를 입력하세요.\`);
  return Number(value);
}
function rememberCamera(context: ExampleContext, sdk: DeliveryClient) {
  const viewer = sdk.viewport;
  const saved = { projection: viewer.projection, settings: viewer.cameraSettings, position: viewer.camera.position.toArray(), quaternion: viewer.camera.quaternion.toArray(), target: viewer.controls.target.toArray(), speed: viewer.navigation.speed };
  return () => {
    if (context.client() !== sdk) return;
    sdk.setProjection(saved.projection); viewer.setCameraSettings(saved.settings);
    viewer.camera.position.fromArray(saved.position); viewer.camera.quaternion.fromArray(saved.quaternion);
    viewer.controls.target.fromArray(saved.target); viewer.controls.update();
    viewer.navigation.setSpeed(saved.speed); viewer.invalidate();
  };
}
function rememberSelection(context: ExampleContext, sdk: DeliveryClient) {
  const saved = sdk.selectedActor;
  return () => {
    if (context.client() !== sdk) return;
    const previous = saved && sdk.actors().find(row => row.serviceKey === saved.serviceKey && row.available);
    sdk.selectActor(previous ? { mountId: previous.mountId, actorId: previous.actorId } : null);
  };
}
// example:common:end

// example:info:start
export function sdkInfo(context: ExampleContext): ExampleResult {
  const sdk = context.client();
  return { value: { version: DELIVERY_SDK_VERSION, connected: Boolean(sdk), model: sdk?.model ?? null, status: sdk?.progress.status ?? 'idle' } };
}
// example:info:end

// example:local:start
export async function connectLocal(context: ExampleContext, values: ExampleValues): Promise<ExampleResult> {
  const picker = (window as unknown as { showDirectoryPicker?: (options: { mode: 'read' }) => Promise<DeliveryDirectoryHandle> }).showDirectoryPicker;
  if (!picker) throw new Error('이 브라우저는 폴더 선택을 지원하지 않습니다. Chrome/Edge를 사용하세요.');
  const directory = await picker.call(window, { mode: 'read' });
  context.signal.throwIfAborted();
  return { value: await context.connect(new LocalChunkSource(directory, { scope: String(values.scope).trim() }), context.signal) };
}
// example:local:end

// example:http:start
export async function connectHttp(context: ExampleContext, values: ExampleValues): Promise<ExampleResult> {
  const source = new HttpChunkSource(new URL(String(values.address).trim()));
  return { value: await context.connect(source, context.signal) };
}
// example:http:end

// example:models:start
export async function listModels(context: ExampleContext): Promise<ExampleResult> {
  return { value: await client(context).listModels(context.signal) };
}
// example:models:end

// example:open:start
export async function openModel(context: ExampleContext, values: ExampleValues): Promise<ExampleResult> {
  context.showViewport();
  return { value: await client(context).open(String(values.model), { progressive: values.progressive === true, signal: context.signal }) };
}
// example:open:end

// example:progress:start
export function observeProgress(context: ExampleContext): ExampleResult {
  const sdk = client(context);
  const cleanup = sdk.subscribeProgress(value => { if (!context.signal.aborted) context.write(value); });
  return { value: sdk.progress, cleanup };
}
// example:progress:end

// example:actors:start
export function searchActors(context: ExampleContext, values: ExampleValues): ExampleResult {
  const rows = client(context).actors(String(values.query));
  return { value: { matched: rows.length, actors: rows.slice(0, 100).map(row => ({ actorName: row.actorName, actorId: row.actorId, mountId: row.mountId, serviceKey: row.serviceKey, available: row.available, focusable: row.focusable })) } };
}
// example:actors:end

// example:select:start
export function selectActor(context: ExampleContext, values: ExampleValues): ExampleResult {
  const sdk = client(context), row = actor(context, values), cleanup = rememberSelection(context, sdk);
  return { value: sdk.selectActor({ mountId: row.mountId, actorId: row.actorId }), cleanup };
}
// example:select:end

// example:focus:start
export function focusActor(context: ExampleContext, values: ExampleValues): ExampleResult {
  const sdk = client(context), row = actor(context, values);
  if (!row.focusable) throw new Error('이 액터는 카메라 초점을 지원하지 않습니다.');
  const camera = rememberCamera(context, sdk), selection = rememberSelection(context, sdk);
  return { value: sdk.focusActor({ mountId: row.mountId, actorId: row.actorId }), cleanup: () => { camera(); selection(); } };
}
// example:focus:end

// example:clear:start
export function clearSelection(context: ExampleContext): ExampleResult {
  const sdk = client(context), cleanup = rememberSelection(context, sdk);
  return { value: sdk.selectActor(null), cleanup };
}
// example:clear:end

// example:projection:start
export function setProjection(context: ExampleContext, values: ExampleValues): ExampleResult {
  const sdk = client(context), cleanup = rememberCamera(context, sdk);
  sdk.setProjection(String(values.projection) as Parameters<DeliveryClient['setProjection']>[0]);
  return { value: { projection: sdk.viewport.projection, camera: sdk.viewport.cameraSettings }, cleanup };
}
// example:projection:end

// example:mode:start
export function setViewMode(context: ExampleContext, values: ExampleValues): ExampleResult {
  const sdk = client(context), previous = sdk.viewport.mode;
  sdk.setViewMode(String(values.mode) as Parameters<DeliveryClient['setViewMode']>[0]);
  return { value: { mode: sdk.viewport.mode }, cleanup: () => { if (context.client() === sdk) sdk.setViewMode(previous); } };
}
// example:mode:end

// example:camera:start
export function setCamera(context: ExampleContext, values: ExampleValues): ExampleResult {
  const sdk = client(context), speed = number(values, 'speed');
  if (speed < .25 || speed > 64) throw new Error('카메라 속도는 0.25–64 m/s입니다.');
  const cleanup = rememberCamera(context, sdk);
  sdk.viewport.setCameraSettings({ horizontalFovDegrees: number(values, 'fov'), orthographicWidthMeters: number(values, 'width'), nearMeters: number(values, 'near'), farMeters: number(values, 'far') });
  sdk.viewport.navigation.setSpeed(speed); sdk.viewport.onViewChange?.();
  return { value: { ...sdk.viewport.cameraSettings, speed: sdk.viewport.navigation.speed }, cleanup };
}
// example:camera:end

// example:display:start
export function setDisplay(context: ExampleContext, values: ExampleValues): ExampleResult {
  const sdk = client(context), viewer = sdk.viewport;
  const previous = { grid: viewer.grid.visible, helpers: viewer.helpers, bounds: viewer.bounds };
  const apply = (value: typeof previous) => { viewer.grid.visible = value.grid; viewer.helpers = value.helpers; viewer.setBounds(value.bounds); viewer.invalidate(); viewer.onViewChange?.(); };
  apply({ grid: values.grid === true, helpers: values.helpers === true, bounds: values.bounds === true });
  return { value: { grid: viewer.grid.visible, helpers: viewer.helpers, bounds: viewer.bounds }, cleanup: () => { if (context.client() === sdk) apply(previous); } };
}
// example:display:end

// example:fit:start
export function fitView(context: ExampleContext): ExampleResult {
  const sdk = client(context), cleanup = rememberCamera(context, sdk);
  sdk.viewport.fit();
  return { value: { positionMeters: sdk.viewport.camera.position.toArray(), targetMeters: sdk.viewport.controls.target.toArray() }, cleanup };
}
// example:fit:end

// example:textures:start
export async function applyTextures(context: ExampleContext, values: ExampleValues): Promise<ExampleResult> {
  const sdk = client(context), control = sdk.viewport.session.textureDisplay;
  const options: Parameters<typeof control.apply>[0] = { maxSize: number(values, 'size') as Parameters<typeof control.apply>[0]['maxSize'], maps: [] };
  for (const kind of ['baseColor', 'normal', 'metallicRoughness', 'occlusion', 'emissive', 'specular'] as const) if (values[kind] === true) options.maps = [...options.maps, kind];
  const estimatedBytes = control.estimate(options), swapPeakBytes = estimatedBytes + (control.current?.reservedBytes ?? 0);
  await control.apply(options, number(values, 'budget') * 1048576, context.signal, message => { if (!context.signal.aborted) context.write({ message }); });
  return { value: { options: control.options, estimatedBytes, swapPeakBytes, budgetBytes: control.budgetBytes, note: '예약 추정이며 실제 GPU 측정값이 아닙니다. 선택한 표시 설정은 적용 상태로 유지됩니다.' } };
}
// example:textures:end

// example:scripts:start
export function listScripts(context: ExampleContext): ExampleResult {
  return { value: client(context).scripts.list() };
}
// example:scripts:end

// example:property:start
export async function changeProperty(context: ExampleContext, values: ExampleValues): Promise<ExampleResult> {
  const sdk = client(context), shown = context.script();
  if (!shown || shown.state !== 'running') throw new Error('실행 준비된 스크립트를 선택하세요.');
  const property = shown.schema.find(row => row.name === values.property);
  if (!property || property.access !== 'read-write' || property.storage === 'persistent') throw new Error('이 속성은 실행 중 변경할 수 없습니다.');
  const value = property.type === 'boolean' ? values.value === true : property.type === 'number' ? number(values, 'value') : String(values.value);
  const handle = sdk.scripts.get(shown.target);
  return { value: await handle.setProperties({ [property.name]: value }, { expectedRevision: shown.revision }) };
}
// example:property:end

// example:host:start
export function hostKey(context: ExampleContext, values: ExampleValues): ExampleResult {
  const row = actor(context, values);
  return { value: { serviceKey: actorServiceKey(row), compositionId: row.compositionId, mountId: row.mountId, actorId: row.actorId, positionMeters: row.positionMeters, positionUeCm: row.positionUeCm } };
}
// example:host:end

// example:cancel:start
export function cancelLoading(context: ExampleContext): ExampleResult {
  const sdk = client(context);
  sdk.cancel();
  return { value: { message: '로드 취소를 요청했습니다.', progress: sdk.progress } };
}
// example:cancel:end

// example:disconnect:start
export async function disconnect(context: ExampleContext): Promise<ExampleResult> {
  await context.disconnect();
  return { value: { connected: Boolean(context.client()), message: '연결을 해제했습니다.' } };
}
// example:disconnect:end

// example:directory:start
export async function connectionDirectory(context: ExampleContext, values: ExampleValues): Promise<ExampleResult> {
  return { value: await readStorageDirectory(splitStorageConnection(new URL(String(values.address).trim())), context.signal) };
}
// example:directory:end

// example:quality:start
export async function renderQuality(context: ExampleContext, values: ExampleValues): Promise<ExampleResult> {
  const sdk = client(context), viewer = sdk.viewport, previous = viewer.quality.snapshot().requested, quality = String(values.quality);
  if (!['VIEWPORT', 'ENHANCED', 'NORMAL', 'HIGH', 'ULTRA'].includes(quality)) throw new Error('지원하는 품질을 선택하세요.');
  await viewer.quality.apply(quality as Parameters<typeof viewer.quality.apply>[0]);
  const status = viewer.quality.snapshot(); if (status.state !== 'ready') throw new Error(status.message);
  return { value: status, cleanup: () => { if (context.client() === sdk) void viewer.quality.apply(previous); } };
}
// example:quality:end

// example:lighting:start
export function environmentLighting(context: ExampleContext, values: ExampleValues): ExampleResult {
  const sdk = client(context), viewer = sdk.viewport, previous = { enabled: viewer.environment, intensity: viewer.environmentIntensity }, intensity = number(values, 'intensity');
  if (intensity < 0 || intensity > 4) throw new Error('환경광 강도는 0~4입니다.');
  const apply = (enabled: boolean, strength: number) => { viewer.environment = enabled; viewer.environmentIntensity = strength; viewer.invalidate(); viewer.onViewChange?.(); };
  apply(values.enabled === true, intensity);
  return { value: { enabled: viewer.environment, intensity: viewer.environmentIntensity }, cleanup: () => { if (context.client() === sdk) apply(previous.enabled, previous.intensity); } };
}
// example:lighting:end

// example:effects:start
export function screenEffects(context: ExampleContext, values: ExampleValues): ExampleResult {
  const sdk = client(context), viewer = sdk.viewport, previous = viewer.screenSettings, toneMapping = String(values.toneMapping);
  if (toneMapping !== 'aces' && toneMapping !== 'none') throw new Error('지원하는 톤 매핑을 선택하세요.');
  viewer.setScreenEffects({ ...previous, toneMapping, exposure: number(values, 'exposure') });
  return { value: viewer.screenSettings, cleanup: () => { if (context.client() === sdk) viewer.setScreenEffects(previous); } };
}
// example:effects:end

// example:spatial:start
export function spatialStreaming(context: ExampleContext, values: ExampleValues): ExampleResult {
  const sdk = client(context), viewer = sdk.viewport, previous = viewer.session.spatialStreaming?.options ?? null;
  viewer.setSpatialStreaming(values.enabled === true ? { loadDistance: number(values, 'load') / 100, unloadDistance: number(values, 'unload') / 100, unloadDelayMs: number(values, 'delay') * 1000 } : null);
  return { value: viewer.session.spatialStreaming ?? { enabled: false }, cleanup: () => { if (context.client() === sdk) viewer.setSpatialStreaming(previous); } };
}
// example:spatial:end

export interface ExampleField { key: string; label: string; kind: 'text' | 'number' | 'checkbox' | 'select' | 'models' | 'actors' | 'scripts' | 'property'; value?: string | number | boolean; options?: readonly string[] }
export interface FeatureExample { id: string; title: string; description: string; guide: string; needs?: 'connection' | 'ready' | 'loading'; fields?: readonly ExampleField[]; run(context: ExampleContext, values: ExampleValues): ExampleResult | Promise<ExampleResult> }
export const featureExamples: readonly FeatureExample[] = [
  { id: 'info', title: 'SDK · 연결 정보', description: '버전과 현재 연결·게시본 정보를 읽습니다.', guide: '03_CLIENT', run: sdkInfo },
  { id: 'local', title: '로컬 폴더 연결', description: '폴더를 읽기 전용으로 선택하고 모델 목록을 조회합니다.', guide: '01_LOCAL_SOURCE', fields: [{ key: 'scope', label: '게시 구역', kind: 'text', value: 'development' }], run: connectLocal },
  { id: 'http', title: '정적 HTTP 연결', description: 'head·objects·releases가 있는 일반 청크 폴더 주소입니다.', guide: '02_HTTP_SOURCE', fields: [{ key: 'address', label: '청크 폴더 주소', kind: 'text' }], run: connectHttp },
  { id: 'models', title: '모델 목록 조회', description: '연결된 source의 실제 모델 id·name·releaseHash를 읽습니다.', guide: '04_MODELS', needs: 'connection', run: listModels },
  { id: 'open', title: '모델 · 점진 로딩', description: '선택한 모델을 열고 초기 로드 완료를 기다립니다.', guide: '04_MODELS', needs: 'connection', fields: [{ key: 'model', label: '통합레벨', kind: 'models' }, { key: 'progressive', label: '점진 로딩', kind: 'checkbox', value: true }], run: openModel },
  { id: 'progress', title: '진행 상태 구독', description: '현재 값과 이후 progress를 표시합니다. 정지하면 구독을 해제합니다.', guide: '05_PROGRESS', needs: 'connection', run: observeProgress },
  { id: 'actors', title: '액터 이름 검색', description: '액터 snapshot에서 이름으로 검색합니다.', guide: '06_ACTORS', needs: 'ready', fields: [{ key: 'query', label: '액터 이름', kind: 'text', value: '' }], run: searchActors },
  { id: 'select', title: '액터 선택', description: 'mountId와 actorId로 준비된 액터를 선택합니다.', guide: '06_ACTORS', needs: 'ready', fields: [{ key: 'actor', label: '액터', kind: 'actors' }], run: selectActor },
  { id: 'focus', title: '선택 · 카메라 초점', description: '액터 경계에 카메라를 맞춥니다. 정지하면 이전 화면을 복원합니다.', guide: '06_ACTORS', needs: 'ready', fields: [{ key: 'actor', label: '액터', kind: 'actors' }], run: focusActor },
  { id: 'clear', title: '선택 해제', description: 'null target으로 선택을 해제합니다.', guide: '06_ACTORS', needs: 'ready', run: clearSelection },
  { id: 'projection', title: '카메라 방향', description: '원근 또는 직교 방향을 설정합니다.', guide: '09_CAMERA_DISPLAY', needs: 'ready', fields: [{ key: 'projection', label: '방향', kind: 'select', value: 'top', options: ['perspective', 'top', 'bottom', 'front', 'back', 'left', 'right'] }], run: setProjection },
  { id: 'mode', title: '표시 모드', description: 'lit·unlit·wireframe을 설정합니다.', guide: '09_CAMERA_DISPLAY', needs: 'ready', fields: [{ key: 'mode', label: '모드', kind: 'select', value: 'unlit', options: ['lit', 'unlit', 'wireframe'] }], run: setViewMode },
  { id: 'camera', title: '카메라 수치', description: 'FOV는 degree, 폭·clip은 m, 속도는 m/s입니다.', guide: '09_CAMERA_DISPLAY', needs: 'ready', fields: [{ key: 'fov', label: '수평 FOV (°)', kind: 'number', value: 70 }, { key: 'width', label: '직교 폭 (m)', kind: 'number', value: 20 }, { key: 'near', label: 'Near (m)', kind: 'number', value: .05 }, { key: 'far', label: 'Far (m)', kind: 'number', value: 5000 }, { key: 'speed', label: '속도 (m/s)', kind: 'number', value: 4 }], run: setCamera },
  { id: 'display', title: '그리드 · 도우미 · 바운드', description: '기존 뷰포트의 실제 표시 옵션을 제어합니다.', guide: '09_CAMERA_DISPLAY', needs: 'ready', fields: [{ key: 'grid', label: '그리드', kind: 'checkbox', value: true }, { key: 'helpers', label: '에디터 도우미', kind: 'checkbox', value: true }, { key: 'bounds', label: '바운드', kind: 'checkbox', value: true }], run: setDisplay },
  { id: 'fit', title: '전체 화면 맞춤', description: '현재 표시 경계에 카메라를 맞춥니다.', guide: '09_CAMERA_DISPLAY', needs: 'ready', run: fitView },
  { id: 'textures', title: '텍스처 표시 적용', description: '최대 512px로 실제 지원 맵을 적용합니다. 0 MiB는 자동 예산이며 적용 상태는 유지됩니다.', guide: '10_TEXTURES_BUDGET', needs: 'ready', fields: [{ key: 'size', label: '최대 크기 (px)', kind: 'select', value: '512', options: ['128', '256', '512'] }, { key: 'budget', label: '예산 (MiB)', kind: 'select', value: '0', options: ['0', '128', '256', '512', '1024', '2048', '4096', '8192'] }, ...['baseColor', 'normal', 'metallicRoughness', 'occlusion', 'emissive', 'specular'].map(key => ({ key, label: key, kind: 'checkbox' as const, value: key === 'baseColor' }))], run: applyTextures },
  { id: 'scripts', title: '스크립트 · 공개 schema', description: '로드된 인스턴스·공개 값·revision을 조회합니다.', guide: '11_SCRIPTS', needs: 'ready', run: listScripts },
  { id: 'property', title: '스크립트 속성 변경', description: '표시된 revision으로 실행 중 속성을 변경합니다. 충돌 시 현재값을 다시 읽으세요.', guide: '11_SCRIPTS', needs: 'ready', fields: [{ key: 'script', label: '컴포넌트', kind: 'scripts' }, { key: 'property', label: '공개 속성', kind: 'property' }, { key: 'value', label: '변경 값', kind: 'text' }], run: changeProperty },
  { id: 'host', title: '업무 연결 키 · 좌표', description: 'stable serviceKey와 m/cm 좌표를 읽습니다.', guide: '12_HOST_DATA', needs: 'ready', fields: [{ key: 'actor', label: '액터', kind: 'actors' }], run: hostKey },
  { id: 'cancel', title: '진행 중 로드 취소', description: '준비된 화면을 남기고 진행 중 로드를 취소합니다.', guide: '13_LIFECYCLE', needs: 'loading', run: cancelLoading },
  { id: 'disconnect', title: '연결 · 리소스 종료', description: '화면·구독·애드온·renderer를 정리합니다. 다시 연결해야 합니다.', guide: '13_LIFECYCLE', needs: 'connection', run: disconnect },
  { id: 'directory', title: '저장소 연결 목록', description: '전체 SDK 연결 주소로 등록된 버킷·경로·게시 구역을 읽습니다. 키는 사용하지 않습니다.', guide: '02_HTTP_SOURCE', fields: [{ key: 'address', label: 'SDK 연결 주소', kind: 'text' }], run: connectionDirectory },
  { id: 'quality', title: '렌더링 품질', description: 'Normal·High 등 품질을 적용합니다. 정지하면 이전 품질로 복원합니다.', guide: '08_VIEWPORT_TOOLS', needs: 'connection', fields: [{ key: 'quality', label: '품질', kind: 'select', value: 'NORMAL', options: ['VIEWPORT', 'ENHANCED', 'NORMAL', 'HIGH', 'ULTRA'] }], run: renderQuality },
  { id: 'lighting', title: '환경광 · 강도', description: '환경광과 강도(0~4)를 바꿉니다. 정지하면 이전 값으로 복원합니다.', guide: '08_VIEWPORT_TOOLS', needs: 'connection', fields: [{ key: 'enabled', label: '환경광', kind: 'checkbox', value: true }, { key: 'intensity', label: '강도', kind: 'number', value: 1 }], run: environmentLighting },
  { id: 'effects', title: '톤 매핑 · 노출', description: 'ACES·노출을 설정하고 현재 화면 설정을 읽습니다. 정지하면 복원합니다.', guide: '08_VIEWPORT_TOOLS', needs: 'connection', fields: [{ key: 'toneMapping', label: '톤 매핑', kind: 'select', value: 'aces', options: ['aces', 'none'] }, { key: 'exposure', label: '노출', kind: 'number', value: 1 }], run: screenEffects },
  { id: 'spatial', title: '공간 자동 언로드', description: '거리와 대기로 공간 로드를 제어합니다. 공간 경계가 있는 게시본이 필요합니다.', guide: '10_TEXTURES_BUDGET', needs: 'ready', fields: [{ key: 'enabled', label: '자동 언로드', kind: 'checkbox', value: false }, { key: 'load', label: '로드 반경 (cm)', kind: 'number', value: 5000 }, { key: 'unload', label: '언로드 반경 (cm)', kind: 'number', value: 7500 }, { key: 'delay', label: '대기 (초)', kind: 'number', value: 3 }], run: spatialStreaming },
];

export interface FeatureReference { category: string; owner: string; api: readonly string[]; call: string }
export const featureReference: Readonly<Record<string, FeatureReference>> = {
  info: { category: '시작·연결', owner: 'DeliveryClient', api: ['DELIVERY_SDK_VERSION', 'DeliveryClient.model', 'DeliveryClient.progress'], call: 'sdk.model; sdk.progress' },
  local: { category: '시작·연결', owner: 'LocalChunkSource', api: ['LocalChunkSource', 'DeliveryDirectoryHandle'], call: 'new LocalChunkSource(directory, { scope })' },
  http: { category: '시작·연결', owner: 'HttpChunkSource', api: ['HttpChunkSource', 'storageConnectionUrl', 'defaultDeliverySource'], call: 'new HttpChunkSource(connectionUrl)' },
  directory: { category: '시작·연결', owner: '저장소 연결 함수', api: ['readStorageDirectory', 'splitStorageConnection', 'storageConnectionUrl'], call: 'await readStorageDirectory(connection, signal)' },
  models: { category: '모델·로드', owner: 'DeliveryClient', api: ['DeliveryClient.listModels'], call: 'await sdk.listModels(signal)' },
  open: { category: '모델·로드', owner: 'DeliveryClient', api: ['DeliveryClient.open', 'DeliveryClient.model'], call: 'await sdk.open(modelId, { progressive: true })' },
  progress: { category: '모델·로드', owner: 'DeliveryClient', api: ['DeliveryClient.subscribeProgress', 'DeliveryClient.progress'], call: 'const unsubscribe = sdk.subscribeProgress(listener)' },
  actors: { category: '액터·업무', owner: 'DeliveryClient', api: ['DeliveryClient.actors', 'ActorPlacement'], call: 'sdk.actors(query)' },
  select: { category: '액터·업무', owner: 'DeliveryClient', api: ['DeliveryClient.selectActor', 'DeliveryClient.selectedActor'], call: 'sdk.selectActor({ mountId, actorId })' },
  focus: { category: '액터·업무', owner: 'DeliveryClient', api: ['DeliveryClient.focusActor', 'DeliveryViewer.focusSelection'], call: 'sdk.focusActor({ mountId, actorId })' },
  clear: { category: '액터·업무', owner: 'DeliveryClient', api: ['DeliveryClient.selectActor'], call: 'sdk.selectActor(null)' },
  host: { category: '액터·업무', owner: '업무 연결 함수', api: ['actorServiceKey', 'ActorPlacement.positionMeters', 'ActorPlacement.positionUeCm'], call: 'actorServiceKey(actor)' },
  projection: { category: '카메라·표시', owner: 'DeliveryClient', api: ['DeliveryClient.setProjection', 'DeliveryViewer.projection'], call: "sdk.setProjection('top')" },
  mode: { category: '카메라·표시', owner: 'DeliveryClient', api: ['DeliveryClient.setViewMode', 'DeliveryViewer.mode'], call: "sdk.setViewMode('unlit')" },
  camera: { category: '카메라·표시', owner: 'DeliveryViewer', api: ['DeliveryViewer.setCameraSettings', 'DeliveryViewer.cameraSettings', 'DeliveryViewer.navigation.setSpeed'], call: 'sdk.viewport.setCameraSettings({ horizontalFovDegrees: 70 })' },
  display: { category: '카메라·표시', owner: 'DeliveryViewer', api: ['DeliveryViewer.grid.visible', 'DeliveryViewer.helpers', 'DeliveryViewer.setBounds'], call: 'sdk.viewport.setBounds(true)' },
  fit: { category: '카메라·표시', owner: 'DeliveryViewer', api: ['DeliveryViewer.fit'], call: 'sdk.viewport.fit()' },
  quality: { category: '카메라·표시', owner: 'DeliveryViewer', api: ['DeliveryViewer.quality.apply', 'DeliveryViewer.quality.snapshot'], call: "await sdk.viewport.quality.apply(preset)" },
  lighting: { category: '카메라·표시', owner: 'DeliveryViewer', api: ['DeliveryViewer.environment', 'DeliveryViewer.environmentIntensity', 'DeliveryViewer.invalidate'], call: 'sdk.viewport.environmentIntensity = 1; sdk.viewport.invalidate()' },
  effects: { category: '카메라·표시', owner: 'DeliveryViewer', api: ['DeliveryViewer.setScreenEffects', 'DeliveryViewer.screenSettings'], call: 'sdk.viewport.setScreenEffects(settings)' },
  textures: { category: '텍스처·공간', owner: 'DeliverySession', api: ['DeliverySession.textureDisplay.estimate', 'DeliverySession.textureDisplay.apply', 'displayBudget'], call: 'await sdk.viewport.session.textureDisplay.apply(options, budgetBytes, signal)' },
  spatial: { category: '텍스처·공간', owner: 'DeliveryViewer / DeliverySession', api: ['DeliveryViewer.setSpatialStreaming', 'DeliverySession.spatialStreaming'], call: 'sdk.viewport.setSpatialStreaming(optionsOrNull)' },
  scripts: { category: '스크립트', owner: 'DeliveryScripts', api: ['DeliveryClient.scripts.list', 'DeliveryScriptSnapshot'], call: 'sdk.scripts.list()' },
  property: { category: '스크립트', owner: 'DeliveryScriptHandle', api: ['DeliveryClient.scripts.get', 'DeliveryScriptHandle.setProperties'], call: 'await sdk.scripts.get(target).setProperties(values, { expectedRevision })' },
  cancel: { category: '종료·정리', owner: 'DeliveryClient', api: ['DeliveryClient.cancel'], call: 'sdk.cancel()' },
  disconnect: { category: '종료·정리', owner: 'DeliveryClient', api: ['DeliveryClient.dispose'], call: 'await sdk.dispose()' },
};

export function exampleCode(id: string) {
  if (!featureExamples.some(example => example.id === id)) throw new Error('알 수 없는 예제입니다.');
  const block = (key: string) => {
    const start = \`// example:\${key}:start\`, end = \`// example:\${key}:end\`;
    const begin = sourceText.indexOf(start), finish = sourceText.indexOf(end, begin);
    if (begin < 0 || finish < 0) throw new Error('예제 코드 영역이 없습니다.');
    return sourceText.slice(begin + start.length, finish).trim();
  };
  return block(id) + '\\n\\n// 공통 타입·호스트 연결·복원 도우미\\n' + block('common');
}
`;function m(e){let t=e.client();if(!t)throw Error(`먼저 청크 폴더 또는 정적 청크 주소를 연결하세요.`);return t}function h(e,t){let n=m(e).actors().find(e=>e.serviceKey===t.actor);if(!n?.available)throw Error(`선택한 액터가 아직 준비되지 않았습니다.`);return n}function g(e,t){let n=e[t];if(n===``||typeof n==`boolean`||!Number.isFinite(Number(n)))throw Error(`${t}: 유효한 숫자를 입력하세요.`);return Number(n)}function _(e,t){let n=t.viewport,r={projection:n.projection,settings:n.cameraSettings,position:n.camera.position.toArray(),quaternion:n.camera.quaternion.toArray(),target:n.controls.target.toArray(),speed:n.navigation.speed};return()=>{e.client()===t&&(t.setProjection(r.projection),n.setCameraSettings(r.settings),n.camera.position.fromArray(r.position),n.camera.quaternion.fromArray(r.quaternion),n.controls.target.fromArray(r.target),n.controls.update(),n.navigation.setSpeed(r.speed),n.invalidate())}}function v(e,t){let n=t.selectedActor;return()=>{if(e.client()!==t)return;let r=n&&t.actors().find(e=>e.serviceKey===n.serviceKey&&e.available);t.selectActor(r?{mountId:r.mountId,actorId:r.actorId}:null)}}function ee(t){let n=t.client();return{value:{version:e,connected:!!n,model:n?.model??null,status:n?.progress.status??`idle`}}}async function te(e,t){let n=window.showDirectoryPicker;if(!n)throw Error(`이 브라우저는 폴더 선택을 지원하지 않습니다. Chrome/Edge를 사용하세요.`);let i=await n.call(window,{mode:`read`});return e.signal.throwIfAborted(),{value:await e.connect(new r(i,{scope:String(t.scope).trim()}),e.signal)}}async function ne(e,t){let r=new n(new URL(String(t.address).trim()));return{value:await e.connect(r,e.signal)}}async function re(e){return{value:await m(e).listModels(e.signal)}}async function ie(e,t){return e.showViewport(),{value:await m(e).open(String(t.model),{progressive:t.progressive===!0,signal:e.signal})}}function ae(e){let t=m(e),n=t.subscribeProgress(t=>{e.signal.aborted||e.write(t)});return{value:t.progress,cleanup:n}}function y(e,t){let n=m(e).actors(String(t.query));return{value:{matched:n.length,actors:n.slice(0,100).map(e=>({actorName:e.actorName,actorId:e.actorId,mountId:e.mountId,serviceKey:e.serviceKey,available:e.available,focusable:e.focusable}))}}}function oe(e,t){let n=m(e),r=h(e,t),i=v(e,n);return{value:n.selectActor({mountId:r.mountId,actorId:r.actorId}),cleanup:i}}function b(e,t){let n=m(e),r=h(e,t);if(!r.focusable)throw Error(`이 액터는 카메라 초점을 지원하지 않습니다.`);let i=_(e,n),a=v(e,n);return{value:n.focusActor({mountId:r.mountId,actorId:r.actorId}),cleanup:()=>{i(),a()}}}function x(e){let t=m(e),n=v(e,t);return{value:t.selectActor(null),cleanup:n}}function S(e,t){let n=m(e),r=_(e,n);return n.setProjection(String(t.projection)),{value:{projection:n.viewport.projection,camera:n.viewport.cameraSettings},cleanup:r}}function se(e,t){let n=m(e),r=n.viewport.mode;return n.setViewMode(String(t.mode)),{value:{mode:n.viewport.mode},cleanup:()=>{e.client()===n&&n.setViewMode(r)}}}function ce(e,t){let n=m(e),r=g(t,`speed`);if(r<.25||r>64)throw Error(`카메라 속도는 0.25–64 m/s입니다.`);let i=_(e,n);return n.viewport.setCameraSettings({horizontalFovDegrees:g(t,`fov`),orthographicWidthMeters:g(t,`width`),nearMeters:g(t,`near`),farMeters:g(t,`far`)}),n.viewport.navigation.setSpeed(r),n.viewport.onViewChange?.(),{value:{...n.viewport.cameraSettings,speed:n.viewport.navigation.speed},cleanup:i}}function le(e,t){let n=m(e),r=n.viewport,i={grid:r.grid.visible,helpers:r.helpers,bounds:r.bounds},a=e=>{r.grid.visible=e.grid,r.helpers=e.helpers,r.setBounds(e.bounds),r.invalidate(),r.onViewChange?.()};return a({grid:t.grid===!0,helpers:t.helpers===!0,bounds:t.bounds===!0}),{value:{grid:r.grid.visible,helpers:r.helpers,bounds:r.bounds},cleanup:()=>{e.client()===n&&a(i)}}}function ue(e){let t=m(e),n=_(e,t);return t.viewport.fit(),{value:{positionMeters:t.viewport.camera.position.toArray(),targetMeters:t.viewport.controls.target.toArray()},cleanup:n}}async function C(e,t){let n=m(e).viewport.session.textureDisplay,r={maxSize:g(t,`size`),maps:[]};for(let e of[`baseColor`,`normal`,`metallicRoughness`,`occlusion`,`emissive`,`specular`])t[e]===!0&&(r.maps=[...r.maps,e]);let i=n.estimate(r),a=i+(n.current?.reservedBytes??0);return await n.apply(r,g(t,`budget`)*1048576,e.signal,t=>{e.signal.aborted||e.write({message:t})}),{value:{options:n.options,estimatedBytes:i,swapPeakBytes:a,budgetBytes:n.budgetBytes,note:`예약 추정이며 실제 GPU 측정값이 아닙니다. 선택한 표시 설정은 적용 상태로 유지됩니다.`}}}function de(e){return{value:m(e).scripts.list()}}async function w(e,t){let n=m(e),r=e.script();if(!r||r.state!==`running`)throw Error(`실행 준비된 스크립트를 선택하세요.`);let i=r.schema.find(e=>e.name===t.property);if(!i||i.access!==`read-write`||i.storage===`persistent`)throw Error(`이 속성은 실행 중 변경할 수 없습니다.`);let a=i.type===`boolean`?t.value===!0:i.type===`number`?g(t,`value`):String(t.value);return{value:await n.scripts.get(r.target).setProperties({[i.name]:a},{expectedRevision:r.revision})}}function T(e,t){let n=h(e,t);return{value:{serviceKey:i(n),compositionId:n.compositionId,mountId:n.mountId,actorId:n.actorId,positionMeters:n.positionMeters,positionUeCm:n.positionUeCm}}}function fe(e){let t=m(e);return t.cancel(),{value:{message:`로드 취소를 요청했습니다.`,progress:t.progress}}}async function E(e){return await e.disconnect(),{value:{connected:!!e.client(),message:`연결을 해제했습니다.`}}}async function D(e,t){return{value:await l(u(new URL(String(t.address).trim())),e.signal)}}async function pe(e,t){let n=m(e),r=n.viewport,i=r.quality.snapshot().requested,a=String(t.quality);if(![`VIEWPORT`,`ENHANCED`,`NORMAL`,`HIGH`,`ULTRA`].includes(a))throw Error(`지원하는 품질을 선택하세요.`);await r.quality.apply(a);let o=r.quality.snapshot();if(o.state!==`ready`)throw Error(o.message);return{value:o,cleanup:()=>{e.client()===n&&r.quality.apply(i)}}}function O(e,t){let n=m(e),r=n.viewport,i={enabled:r.environment,intensity:r.environmentIntensity},a=g(t,`intensity`);if(a<0||a>4)throw Error(`환경광 강도는 0~4입니다.`);let o=(e,t)=>{r.environment=e,r.environmentIntensity=t,r.invalidate(),r.onViewChange?.()};return o(t.enabled===!0,a),{value:{enabled:r.environment,intensity:r.environmentIntensity},cleanup:()=>{e.client()===n&&o(i.enabled,i.intensity)}}}function k(e,t){let n=m(e),r=n.viewport,i=r.screenSettings,a=String(t.toneMapping);if(a!==`aces`&&a!==`none`)throw Error(`지원하는 톤 매핑을 선택하세요.`);return r.setScreenEffects({...i,toneMapping:a,exposure:g(t,`exposure`)}),{value:r.screenSettings,cleanup:()=>{e.client()===n&&r.setScreenEffects(i)}}}function A(e,t){let n=m(e),r=n.viewport,i=r.session.spatialStreaming?.options??null;return r.setSpatialStreaming(t.enabled===!0?{loadDistance:g(t,`load`)/100,unloadDistance:g(t,`unload`)/100,unloadDelayMs:g(t,`delay`)*1e3}:null),{value:r.session.spatialStreaming??{enabled:!1},cleanup:()=>{e.client()===n&&r.setSpatialStreaming(i)}}}var j=[{id:`info`,title:`SDK · 연결 정보`,description:`버전과 현재 연결·게시본 정보를 읽습니다.`,guide:`03_CLIENT`,run:ee},{id:`local`,title:`로컬 폴더 연결`,description:`폴더를 읽기 전용으로 선택하고 모델 목록을 조회합니다.`,guide:`01_LOCAL_SOURCE`,fields:[{key:`scope`,label:`게시 구역`,kind:`text`,value:`development`}],run:te},{id:`http`,title:`정적 HTTP 연결`,description:`head·objects·releases가 있는 일반 청크 폴더 주소입니다.`,guide:`02_HTTP_SOURCE`,fields:[{key:`address`,label:`청크 폴더 주소`,kind:`text`}],run:ne},{id:`models`,title:`모델 목록 조회`,description:`연결된 source의 실제 모델 id·name·releaseHash를 읽습니다.`,guide:`04_MODELS`,needs:`connection`,run:re},{id:`open`,title:`모델 · 점진 로딩`,description:`선택한 모델을 열고 초기 로드 완료를 기다립니다.`,guide:`04_MODELS`,needs:`connection`,fields:[{key:`model`,label:`통합레벨`,kind:`models`},{key:`progressive`,label:`점진 로딩`,kind:`checkbox`,value:!0}],run:ie},{id:`progress`,title:`진행 상태 구독`,description:`현재 값과 이후 progress를 표시합니다. 정지하면 구독을 해제합니다.`,guide:`05_PROGRESS`,needs:`connection`,run:ae},{id:`actors`,title:`액터 이름 검색`,description:`액터 snapshot에서 이름으로 검색합니다.`,guide:`06_ACTORS`,needs:`ready`,fields:[{key:`query`,label:`액터 이름`,kind:`text`,value:``}],run:y},{id:`select`,title:`액터 선택`,description:`mountId와 actorId로 준비된 액터를 선택합니다.`,guide:`06_ACTORS`,needs:`ready`,fields:[{key:`actor`,label:`액터`,kind:`actors`}],run:oe},{id:`focus`,title:`선택 · 카메라 초점`,description:`액터 경계에 카메라를 맞춥니다. 정지하면 이전 화면을 복원합니다.`,guide:`06_ACTORS`,needs:`ready`,fields:[{key:`actor`,label:`액터`,kind:`actors`}],run:b},{id:`clear`,title:`선택 해제`,description:`null target으로 선택을 해제합니다.`,guide:`06_ACTORS`,needs:`ready`,run:x},{id:`projection`,title:`카메라 방향`,description:`원근 또는 직교 방향을 설정합니다.`,guide:`09_CAMERA_DISPLAY`,needs:`ready`,fields:[{key:`projection`,label:`방향`,kind:`select`,value:`top`,options:[`perspective`,`top`,`bottom`,`front`,`back`,`left`,`right`]}],run:S},{id:`mode`,title:`표시 모드`,description:`lit·unlit·wireframe을 설정합니다.`,guide:`09_CAMERA_DISPLAY`,needs:`ready`,fields:[{key:`mode`,label:`모드`,kind:`select`,value:`unlit`,options:[`lit`,`unlit`,`wireframe`]}],run:se},{id:`camera`,title:`카메라 수치`,description:`FOV는 degree, 폭·clip은 m, 속도는 m/s입니다.`,guide:`09_CAMERA_DISPLAY`,needs:`ready`,fields:[{key:`fov`,label:`수평 FOV (°)`,kind:`number`,value:70},{key:`width`,label:`직교 폭 (m)`,kind:`number`,value:20},{key:`near`,label:`Near (m)`,kind:`number`,value:.05},{key:`far`,label:`Far (m)`,kind:`number`,value:5e3},{key:`speed`,label:`속도 (m/s)`,kind:`number`,value:4}],run:ce},{id:`display`,title:`그리드 · 도우미 · 바운드`,description:`기존 뷰포트의 실제 표시 옵션을 제어합니다.`,guide:`09_CAMERA_DISPLAY`,needs:`ready`,fields:[{key:`grid`,label:`그리드`,kind:`checkbox`,value:!0},{key:`helpers`,label:`에디터 도우미`,kind:`checkbox`,value:!0},{key:`bounds`,label:`바운드`,kind:`checkbox`,value:!0}],run:le},{id:`fit`,title:`전체 화면 맞춤`,description:`현재 표시 경계에 카메라를 맞춥니다.`,guide:`09_CAMERA_DISPLAY`,needs:`ready`,run:ue},{id:`textures`,title:`텍스처 표시 적용`,description:`최대 512px로 실제 지원 맵을 적용합니다. 0 MiB는 자동 예산이며 적용 상태는 유지됩니다.`,guide:`10_TEXTURES_BUDGET`,needs:`ready`,fields:[{key:`size`,label:`최대 크기 (px)`,kind:`select`,value:`512`,options:[`128`,`256`,`512`]},{key:`budget`,label:`예산 (MiB)`,kind:`select`,value:`0`,options:[`0`,`128`,`256`,`512`,`1024`,`2048`,`4096`,`8192`]},...[`baseColor`,`normal`,`metallicRoughness`,`occlusion`,`emissive`,`specular`].map(e=>({key:e,label:e,kind:`checkbox`,value:e===`baseColor`}))],run:C},{id:`scripts`,title:`스크립트 · 공개 schema`,description:`로드된 인스턴스·공개 값·revision을 조회합니다.`,guide:`11_SCRIPTS`,needs:`ready`,run:de},{id:`property`,title:`스크립트 속성 변경`,description:`표시된 revision으로 실행 중 속성을 변경합니다. 충돌 시 현재값을 다시 읽으세요.`,guide:`11_SCRIPTS`,needs:`ready`,fields:[{key:`script`,label:`컴포넌트`,kind:`scripts`},{key:`property`,label:`공개 속성`,kind:`property`},{key:`value`,label:`변경 값`,kind:`text`}],run:w},{id:`host`,title:`업무 연결 키 · 좌표`,description:`stable serviceKey와 m/cm 좌표를 읽습니다.`,guide:`12_HOST_DATA`,needs:`ready`,fields:[{key:`actor`,label:`액터`,kind:`actors`}],run:T},{id:`cancel`,title:`진행 중 로드 취소`,description:`준비된 화면을 남기고 진행 중 로드를 취소합니다.`,guide:`13_LIFECYCLE`,needs:`loading`,run:fe},{id:`disconnect`,title:`연결 · 리소스 종료`,description:`화면·구독·애드온·renderer를 정리합니다. 다시 연결해야 합니다.`,guide:`13_LIFECYCLE`,needs:`connection`,run:E},{id:`directory`,title:`저장소 연결 목록`,description:`전체 SDK 연결 주소로 등록된 버킷·경로·게시 구역을 읽습니다. 키는 사용하지 않습니다.`,guide:`02_HTTP_SOURCE`,fields:[{key:`address`,label:`SDK 연결 주소`,kind:`text`}],run:D},{id:`quality`,title:`렌더링 품질`,description:`Normal·High 등 품질을 적용합니다. 정지하면 이전 품질로 복원합니다.`,guide:`08_VIEWPORT_TOOLS`,needs:`connection`,fields:[{key:`quality`,label:`품질`,kind:`select`,value:`NORMAL`,options:[`VIEWPORT`,`ENHANCED`,`NORMAL`,`HIGH`,`ULTRA`]}],run:pe},{id:`lighting`,title:`환경광 · 강도`,description:`환경광과 강도(0~4)를 바꿉니다. 정지하면 이전 값으로 복원합니다.`,guide:`08_VIEWPORT_TOOLS`,needs:`connection`,fields:[{key:`enabled`,label:`환경광`,kind:`checkbox`,value:!0},{key:`intensity`,label:`강도`,kind:`number`,value:1}],run:O},{id:`effects`,title:`톤 매핑 · 노출`,description:`ACES·노출을 설정하고 현재 화면 설정을 읽습니다. 정지하면 복원합니다.`,guide:`08_VIEWPORT_TOOLS`,needs:`connection`,fields:[{key:`toneMapping`,label:`톤 매핑`,kind:`select`,value:`aces`,options:[`aces`,`none`]},{key:`exposure`,label:`노출`,kind:`number`,value:1}],run:k},{id:`spatial`,title:`공간 자동 언로드`,description:`거리와 대기로 공간 로드를 제어합니다. 공간 경계가 있는 게시본이 필요합니다.`,guide:`10_TEXTURES_BUDGET`,needs:`ready`,fields:[{key:`enabled`,label:`자동 언로드`,kind:`checkbox`,value:!1},{key:`load`,label:`로드 반경 (cm)`,kind:`number`,value:5e3},{key:`unload`,label:`언로드 반경 (cm)`,kind:`number`,value:7500},{key:`delay`,label:`대기 (초)`,kind:`number`,value:3}],run:A}],me={info:{category:`시작·연결`,owner:`DeliveryClient`,api:[`DELIVERY_SDK_VERSION`,`DeliveryClient.model`,`DeliveryClient.progress`],call:`sdk.model; sdk.progress`},local:{category:`시작·연결`,owner:`LocalChunkSource`,api:[`LocalChunkSource`,`DeliveryDirectoryHandle`],call:`new LocalChunkSource(directory, { scope })`},http:{category:`시작·연결`,owner:`HttpChunkSource`,api:[`HttpChunkSource`,`storageConnectionUrl`,`defaultDeliverySource`],call:`new HttpChunkSource(connectionUrl)`},directory:{category:`시작·연결`,owner:`저장소 연결 함수`,api:[`readStorageDirectory`,`splitStorageConnection`,`storageConnectionUrl`],call:`await readStorageDirectory(connection, signal)`},models:{category:`모델·로드`,owner:`DeliveryClient`,api:[`DeliveryClient.listModels`],call:`await sdk.listModels(signal)`},open:{category:`모델·로드`,owner:`DeliveryClient`,api:[`DeliveryClient.open`,`DeliveryClient.model`],call:`await sdk.open(modelId, { progressive: true })`},progress:{category:`모델·로드`,owner:`DeliveryClient`,api:[`DeliveryClient.subscribeProgress`,`DeliveryClient.progress`],call:`const unsubscribe = sdk.subscribeProgress(listener)`},actors:{category:`액터·업무`,owner:`DeliveryClient`,api:[`DeliveryClient.actors`,`ActorPlacement`],call:`sdk.actors(query)`},select:{category:`액터·업무`,owner:`DeliveryClient`,api:[`DeliveryClient.selectActor`,`DeliveryClient.selectedActor`],call:`sdk.selectActor({ mountId, actorId })`},focus:{category:`액터·업무`,owner:`DeliveryClient`,api:[`DeliveryClient.focusActor`,`DeliveryViewer.focusSelection`],call:`sdk.focusActor({ mountId, actorId })`},clear:{category:`액터·업무`,owner:`DeliveryClient`,api:[`DeliveryClient.selectActor`],call:`sdk.selectActor(null)`},host:{category:`액터·업무`,owner:`업무 연결 함수`,api:[`actorServiceKey`,`ActorPlacement.positionMeters`,`ActorPlacement.positionUeCm`],call:`actorServiceKey(actor)`},projection:{category:`카메라·표시`,owner:`DeliveryClient`,api:[`DeliveryClient.setProjection`,`DeliveryViewer.projection`],call:`sdk.setProjection('top')`},mode:{category:`카메라·표시`,owner:`DeliveryClient`,api:[`DeliveryClient.setViewMode`,`DeliveryViewer.mode`],call:`sdk.setViewMode('unlit')`},camera:{category:`카메라·표시`,owner:`DeliveryViewer`,api:[`DeliveryViewer.setCameraSettings`,`DeliveryViewer.cameraSettings`,`DeliveryViewer.navigation.setSpeed`],call:`sdk.viewport.setCameraSettings({ horizontalFovDegrees: 70 })`},display:{category:`카메라·표시`,owner:`DeliveryViewer`,api:[`DeliveryViewer.grid.visible`,`DeliveryViewer.helpers`,`DeliveryViewer.setBounds`],call:`sdk.viewport.setBounds(true)`},fit:{category:`카메라·표시`,owner:`DeliveryViewer`,api:[`DeliveryViewer.fit`],call:`sdk.viewport.fit()`},quality:{category:`카메라·표시`,owner:`DeliveryViewer`,api:[`DeliveryViewer.quality.apply`,`DeliveryViewer.quality.snapshot`],call:`await sdk.viewport.quality.apply(preset)`},lighting:{category:`카메라·표시`,owner:`DeliveryViewer`,api:[`DeliveryViewer.environment`,`DeliveryViewer.environmentIntensity`,`DeliveryViewer.invalidate`],call:`sdk.viewport.environmentIntensity = 1; sdk.viewport.invalidate()`},effects:{category:`카메라·표시`,owner:`DeliveryViewer`,api:[`DeliveryViewer.setScreenEffects`,`DeliveryViewer.screenSettings`],call:`sdk.viewport.setScreenEffects(settings)`},textures:{category:`텍스처·공간`,owner:`DeliverySession`,api:[`DeliverySession.textureDisplay.estimate`,`DeliverySession.textureDisplay.apply`,`displayBudget`],call:`await sdk.viewport.session.textureDisplay.apply(options, budgetBytes, signal)`},spatial:{category:`텍스처·공간`,owner:`DeliveryViewer / DeliverySession`,api:[`DeliveryViewer.setSpatialStreaming`,`DeliverySession.spatialStreaming`],call:`sdk.viewport.setSpatialStreaming(optionsOrNull)`},scripts:{category:`스크립트`,owner:`DeliveryScripts`,api:[`DeliveryClient.scripts.list`,`DeliveryScriptSnapshot`],call:`sdk.scripts.list()`},property:{category:`스크립트`,owner:`DeliveryScriptHandle`,api:[`DeliveryClient.scripts.get`,`DeliveryScriptHandle.setProperties`],call:`await sdk.scripts.get(target).setProperties(values, { expectedRevision })`},cancel:{category:`종료·정리`,owner:`DeliveryClient`,api:[`DeliveryClient.cancel`],call:`sdk.cancel()`},disconnect:{category:`종료·정리`,owner:`DeliveryClient`,api:[`DeliveryClient.dispose`],call:`await sdk.dispose()`}};function he(e){if(!j.some(t=>t.id===e))throw Error(`알 수 없는 예제입니다.`);let t=e=>{let t=`// example:${e}:start`,n=`// example:${e}:end`,r=p.indexOf(t),i=p.indexOf(n,r);if(r<0||i<0)throw Error(`예제 코드 영역이 없습니다.`);return p.slice(r+t.length,i).trim()};return t(e)+`

// 공통 타입·호스트 연결·복원 도우미
`+t(`common`)}function ge(t,n,r,i){let a=(e,t=``,n=``)=>{let r=document.createElement(e);return r.className=t,r.textContent=n,r},o=a(`div`,`section-heading`),s=a(`h2`,``,`기능 · API 찾기`),c=a(`span`,`count-label`,String(j.length));o.append(s,c);let l=a(`div`,`example-help-links`);for(let[t,n]of[[`처음 사용하기`,`README.md`],[`API 명세`,`docs/API.md`]]){let r=a(`a`,``,t);r.href=`https://github.com/jonemos/DTDelivery-SDK/blob/v${e}/${n}`,r.target=`_blank`,r.rel=`noopener noreferrer`,l.append(r)}let u=a(`input`);u.id=`example-search`,u.type=`search`,u.placeholder=`기능 · 클래스 · 함수 검색`,u.setAttribute(`aria-label`,`SDK 기능 검색`);let d=a(`select`);d.id=`example-category`,d.setAttribute(`aria-label`,`SDK 기능 분류`),d.append(...[`모든 기능`,...new Set(j.map(e=>me[e.id].category))].map(e=>{let t=a(`option`,``,e);return t.value=e===`모든 기능`?``:e,t}));let f=a(`div`,`example-search-results`),p=a(`p`,`example-search-state`);p.setAttribute(`role`,`status`),p.id=`example-search-state`;let m=a(`button`,`button-quiet`,`검색 초기화`);m.id=`example-search-reset`;let h=a(`div`,`example-search-items`);f.append(p,h,m),f.hidden=!0;let g=a(`select`);g.id=`example-select`,g.setAttribute(`aria-label`,`기능별 예제`),g.append(...j.map(e=>{let t=a(`option`,``,e.title);return t.value=e.id,t}));let _=a(`p`,`example-description`),v=a(`p`,`example-requirement`),ee=a(`div`,`example-reference`),te=a(`div`,`example-fields`);v.id=`example-requirement`,ee.id=`example-reference`;let ne=a(`strong`),re=a(`div`,`example-api-list`),ie=a(`a`,``,`기능 문서 ↗`);ie.target=`_blank`,ie.rel=`noopener noreferrer`,ee.append(ne,re,ie);let ae=a(`div`,`example-actions`),y=a(`button`,`button-primary`,`실행`),oe=a(`button`,`button-secondary`,`정지 · 복원`),b=a(`button`,`button-quiet`,`코드 보기`),x=a(`button`,`button-quiet`,`현재값 읽기`);y.id=`example-run`,oe.id=`example-stop`,b.id=`example-code-toggle`,x.id=`example-reload`,ae.append(y,oe,b);let S=a(`p`,`example-state`,`예제를 선택하고 실행하세요.`);S.id=`example-state`,S.setAttribute(`role`,`status`),t.append(o,l,u,d,f,g,_,ee,v,te,x,ae,S);let se=a(`div`,`section-heading`),ce=a(`h2`,``,`예제 코드`),le=a(`button`,`button-quiet`,`닫기`);le.setAttribute(`aria-label`,`예제 코드 닫기`),se.append(ce,le);let ue=a(`div`,`example-code-actions`),C=a(`button`,`button-secondary`,`코드 복사`),de=a(`label`),w=a(`input`);w.type=`checkbox`,w.checked=!0,w.setAttribute(`aria-label`,`코드 줄바꿈`),de.append(w,document.createTextNode(`줄바꿈`));let T=a(`a`,``,`기능 문서`);T.target=`_blank`,T.rel=`noopener noreferrer`,ue.append(C,de,T),C.disabled=!navigator.clipboard,C.disabled&&(C.title=`클립보드가 지원되는 HTTPS/localhost 환경이 필요합니다.`);let fe=a(`pre`,`example-call`),E=a(`pre`,`example-parameters`),D=a(`pre`,`example-code wrap`),pe=a(`h3`,``,`실행 결과`),O=a(`pre`,`example-result`);fe.id=`example-call`,D.id=`example-code`,E.id=`example-parameters`,O.id=`example-result`,O.textContent=`아직 실행하지 않았습니다.`,n.append(se,ue,fe,E,D,pe,O),b.setAttribute(`aria-controls`,n.id);let k=j[0],A=new Map,ge=!1,M=!1,N=0,P,F,I,L=i.client(),R=e=>{let t=typeof e==`string`?e:JSON.stringify(e,null,2)??String(e);return t.length>65536?t.slice(0,65536)+`
… 결과 표시를 65,536자로 제한했습니다.`:t},z=e=>{n.hidden=!e,r.hidden=e,b.setAttribute(`aria-expanded`,String(e)),b.textContent=e?`상세 보기`:`코드 보기`},B=e=>{S.dataset.state=`failed`,S.textContent=e instanceof Error?e.message:String(e),O.textContent=S.textContent},V=()=>Object.fromEntries([...A].map(([e,t])=>[e,t instanceof HTMLInputElement&&t.type===`checkbox`?t.checked:t.value])),H=(e,t)=>{let n=e.value;return e.dataset.entries!==JSON.stringify(t)&&(e.dataset.entries=JSON.stringify(t),e.replaceChildren(...t.map(e=>{let t=a(`option`,``,e.label);return t.value=e.value,t})),t.some(e=>e.value===n)&&(e.value=n),e.value!==n)},_e=()=>i.client()?.scripts.list().filter(e=>e.state===`running`)??[],U=e=>{let t=A.get(`script`),n=A.get(`property`),r=A.get(`value`);if(!(t instanceof HTMLSelectElement)||!(n instanceof HTMLSelectElement)||!(r instanceof HTMLInputElement))return;let a=_e(),o=H(t,a.map(e=>({value:JSON.stringify(e.target),label:`${e.target.componentId} · ${e.target.mountId??`통합`}`})));if(e||o||L!==i.client()||!I){I=a.find(e=>JSON.stringify(e.target)===t.value),L=i.client(),H(n,(I?.schema??[]).map(e=>({value:e.name,label:`${e.name} · ${e.type}`})));let e=I?.schema.find(e=>e.name===n.value);r.type=e?.type===`boolean`?`checkbox`:e?.format===`color`?`color`:e?.type===`number`?`number`:`text`,r.removeAttribute(`min`),r.removeAttribute(`max`),r.removeAttribute(`maxlength`),r.type===`checkbox`?r.checked=I?.values[n.value]===!0:r.value=String(I?.values[n.value]??``),e?.type===`number`&&(r.step=`any`,e.min!==void 0&&(r.min=String(e.min)),e.max!==void 0&&(r.max=String(e.max))),e?.maxLength!==void 0&&(r.maxLength=e.maxLength),r.disabled=!e||e.access!==`read-write`||e.storage===`persistent`,r.title=r.disabled?`실행 중 변경 가능한 공개 속성이 아닙니다.`:`표시 revision: ${I?.revision}`}},W=()=>{let e=i.client();if(k.needs&&!e)return`먼저 상단에서 저장소를 연결하세요.`;if(k.needs===`ready`&&e?.progress.status!==`ready`)return`게시본 열기를 완료한 뒤 실행하세요.`;if(k.needs===`loading`&&e?.progress.status!==`loading`)return`로드가 진행 중일 때 실행할 수 있습니다.`;if(k.id===`open`&&!A.get(`model`)?.value)return`조회된 모델이 없습니다.`;if(k.fields?.some(e=>e.kind===`actors`)&&!A.get(`actor`)?.value)return`준비된 액터가 없습니다.`;if(k.id===`property`){let e=I?.schema.find(e=>e.name===A.get(`property`)?.value);if(!I)return`로드된 실행 스크립트가 없습니다. 애드온 포함 게시본이 필요합니다.`;if(!e||e.access!==`read-write`||e.storage===`persistent`)return`선택 속성은 읽기 전용 또는 영구 저장 전용입니다.`}return``},G=()=>{if(M)return;for(let e of k.fields??[]){let t=A.get(e.key);t instanceof HTMLSelectElement&&(e.kind===`models`&&H(t,i.catalog().map(e=>({value:e.id,label:e.name}))),e.kind===`actors`&&H(t,(i.client()?.actors()??[]).filter(e=>e.available&&(k.id!==`focus`||e.focusable)).map(e=>({value:e.serviceKey,label:`${e.actorName} · ${e.mountName}`}))))}if(k.id===`property`&&U(!1),k.id===`textures`){let e=new Set(i.client()?.viewport.session.textureDisplay.layouts.flatMap(e=>e.uses.map(e=>e.kind))??[]);for(let t of[`baseColor`,`normal`,`metallicRoughness`,`occlusion`,`emissive`,`specular`]){let n=A.get(t);n instanceof HTMLInputElement&&(n.disabled=!e.has(t),n.disabled&&(n.checked=!1),n.title=n.disabled?`이 게시본에 지원 텍스처가 없습니다.`:``)}}let e=W();y.disabled=ge||!!e,y.title=e,oe.disabled=!P&&!F,_.textContent=k.description,v.textContent=e,v.hidden=!e},K=(e=!0)=>{N++,P?.abort(),P=void 0,ge=!1;let t=F;F=void 0;try{t?.(),e&&(S.textContent=`실행·구독을 정지하고 가능한 표시 설정을 복원했습니다.`,S.dataset.state=`idle`)}catch(e){B(e)}G()},q=e=>{let t=a(`label`,e.kind===`checkbox`?`example-check`:`example-field`),n=a(`span`,``,e.label),r;[`select`,`models`,`actors`,`scripts`,`property`].includes(e.kind)?(r=a(`select`),H(r,(e.options??[]).map(e=>({value:e,label:e})))):(r=a(`input`),r.type=e.kind===`checkbox`?`checkbox`:e.kind===`number`?`number`:`text`,r.type===`number`&&(r.step=`any`)),r.id=`example-input-`+e.key,r.setAttribute(`aria-label`,`예제 `+e.label),r instanceof HTMLInputElement&&r.type===`checkbox`?r.checked=e.value===!0:e.value!==void 0&&(r.value=String(e.value)),e.key===`address`&&(r.value=i.address()),e.key===`scope`&&(r.value=i.scope()),e.kind===`checkbox`?t.append(r,n):t.append(n,r),r.addEventListener(`change`,()=>{(e.kind===`scripts`||e.kind===`property`)&&U(!0),G()}),A.set(e.key,r),te.append(t)},J=()=>{K(!1),k=j.find(e=>e.id===g.value),A=new Map,I=void 0,te.replaceChildren();for(let e of k.fields??[])q(e);ce.textContent=k.title,D.textContent=he(k.id),T.href=`https://github.com/jonemos/DTDelivery-SDK/blob/v${e}/docs/guides/${k.guide}.md`;let t=me[k.id];ne.textContent=t.owner,re.replaceChildren(...t.api.map(e=>a(`code`,``,e))),fe.textContent=t.call,ie.href=T.href,E.textContent=`입력값은 실행 시 표시합니다.`,O.textContent=`아직 실행하지 않았습니다.`,S.textContent=`예제를 선택하고 실행하세요.`,S.dataset.state=`idle`,x.hidden=k.id!==`property`,G(),Y()},Y=()=>{let e=u.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean),t=e.length>0||d.value!==``;f.hidden=!t;let n=j.filter(t=>{let n=me[t.id],r=[t.title,t.description,n.owner,n.category,...n.api,n.call,...(t.fields??[]).flatMap(e=>[e.label,e.key,...e.options??[]])].join(` `).toLocaleLowerCase();return(!d.value||n.category===d.value)&&e.every(e=>r.includes(e)||r.replace(/\s/g,``).includes(e))});c.textContent=t?`${n.length}/${j.length}`:String(j.length),p.textContent=n.length?`${n.length}개 기능 · 선택하면 코드와 입력을 봅니다.`:`검색 결과가 없습니다. 검색어나 분류를 바꾸세요.`,h.replaceChildren(...n.map(e=>{let t=a(`button`,`example-search-result`);return t.type=`button`,t.dataset.example=e.id,t.setAttribute(`aria-pressed`,String(e.id===k.id)),t.append(a(`span`,``,e.title),a(`small`,``,me[e.id].api[0])),t.onclick=()=>{g.value=e.id,J(),z(!0)},t}))};return u.oninput=Y,d.onchange=Y,m.onclick=()=>{u.value=``,d.value=``,Y(),u.focus()},g.addEventListener(`change`,()=>{J(),z(!0)}),oe.onclick=()=>K(),b.onclick=()=>z(n.hidden===!0),le.onclick=()=>z(!1),x.onclick=()=>{U(!0),G()},w.onchange=()=>D.classList.toggle(`wrap`,w.checked),C.onclick=()=>{navigator.clipboard.writeText(D.textContent??``).then(()=>{S.textContent=`코드를 복사했습니다.`}).catch(e=>B(e))},y.onclick=()=>{let e=W();if(e){B(Error(e));return}K(!1);let t=++N,n=new AbortController,r=k,a=V(),o=I;P=n,ge=!0,z(!0),E.textContent=R({example:r.id,inputs:a,...r.id===`property`?{expectedRevision:o?.revision}:{}}),S.dataset.state=`loading`,S.textContent=`실행 중…`,O.textContent=`실행 중…`,G();let s=e=>{!M&&t===N&&!n.signal.aborted&&(O.textContent=R(e))},c={...i,script:()=>o,write:s,signal:n.signal},l;try{l=Promise.resolve(r.run(c,a))}catch(e){l=Promise.reject(e)}l.then(e=>{if(M||t!==N||n.signal.aborted){e.cleanup?.();return}F=e.cleanup,s(e.value),S.dataset.state=`ready`,S.textContent=e.cleanup?`실행 완료 · 정지하면 구독/표시를 복원합니다.`:`실행 완료`,r.id===`property`&&U(!0)}).catch(e=>{M||t!==N||(e instanceof DOMException&&e.name===`AbortError`?(S.dataset.state=`idle`,S.textContent=`폴더 선택을 취소했습니다.`,O.textContent=S.textContent):B(e))}).finally(()=>{!M&&t===N&&(ge=!1,F||(P=void 0),G())})},J(),z(!1),{refresh:G,stop:()=>K(),dispose:()=>{K(!1),M=!0,t.replaceChildren(),n.replaceChildren(),r.hidden=!1}}}var M=e=>document.getElementById(e),N=M(`source`),P=M(`models`),F=M(`view`),I=M(`status`),L=M(`scope`),R=M(`address`),z=M(`storage-scope`),B=M(`bucket`),V=M(`prefix`),H=[],_e=0,U,W=M(`open`),G=M(`folder`),K,q,J,Y=0,ve=[],ye,be,X=[],xe=`dt-delivery-connection-v1`,Se=`dt-delivery-default-disabled-v1`;function Ce(e,t){if(e instanceof n)try{localStorage.setItem(xe,JSON.stringify({version:1,url:e.connectionUrl.href,...t?{modelId:t}:{}})),localStorage.removeItem(Se)}catch{}}function Z(e=!1){try{localStorage.removeItem(xe),e&&localStorage.setItem(Se,`1`)}catch{}}var we=()=>({endpoint:R.value.trim(),bucket:B.value.trim(),prefix:V.value.trim(),scope:L.value.trim()});function Te(e,t=L.value){let n=[...new Set(e.length?e:[t])].filter(Boolean).sort();z.replaceChildren(...n.map(e=>{let t=document.createElement(`option`);return t.value=e,t.textContent=e,t})),n.includes(t)&&(z.value=t),L.value=z.value}function Ee(e){let t=u(e);R.value=t.endpoint,B.value=t.bucket,V.value=t.prefix,L.value=t.scope,Te([...H.find(e=>e.bucket===t.bucket&&e.prefix===t.prefix)?.scopes??[],t.scope],t.scope)}function De(){let e=(e,t)=>M(e).replaceChildren(...[...new Set(t)].sort().map(e=>{let t=document.createElement(`option`);return t.value=e,e||(t.label=`버킷 루트`),t}));e(`storage-buckets`,H.map(e=>e.bucket)),e(`storage-prefixes`,H.filter(e=>e.bucket===B.value).map(e=>e.prefix)),Te(H.filter(e=>e.bucket===B.value&&e.prefix===V.value).flatMap(e=>e.scopes))}async function Oe(){let e=f(R.value.trim()),t=++_e;U?.abort();let n=new AbortController;U=n;let r;try{r=u(a().connectionUrl)}catch{}let i=[r,B.value.trim()&&L.value.trim()?we():void 0].filter(t=>t&&t.endpoint===e),s=[...new Map(i.map(e=>[JSON.stringify([e.bucket,e.prefix]),e])).values()];if(!s.length)throw Error(`처음 연결하는 서버는 버킷·경로·scope 또는 편집기의 SDK 연결 주소를 한 번 입력하세요.`);H=[];let c=await Promise.allSettled(s.map(e=>l(e,n.signal)));if(n.signal.throwIfAborted(),t!==_e)return;let d=c.flatMap(e=>e.status===`fulfilled`?[e.value]:[]);if(!d.length)throw De(),c.find(e=>e.status===`rejected`).reason;H=o(...d).locations,H.some(e=>e.bucket===B.value)||(B.value=H[0]?.bucket??``,V.value=``);let p=H.filter(e=>e.bucket===B.value);p.some(e=>e.prefix===V.value)||(V.value=p[0]?.prefix??``);let m=p.find(e=>e.prefix===V.value)?.scopes??[];m.includes(L.value)||(L.value=m[0]??``),De(),Q(`공개 연결 목록을 읽었습니다. 버킷·경로·게시 구역을 고른 뒤 목록 조회를 누르세요.`)}var ke=()=>{Oe().catch(e=>{U?.signal.aborted||Q(String(e))})};M(`discover`).onclick=ke,R.addEventListener(`change`,()=>{if(N.value===`publication`)try{let e=new URL(R.value.trim());e.pathname!==`/`&&Ee(e),ke()}catch(e){Q(String(e))}}),B.addEventListener(`change`,()=>{let e=H.filter(e=>e.bucket===B.value);e.some(e=>e.prefix===V.value)||(V.value=e[0]?.prefix??``);let t=e.find(e=>e.prefix===V.value)?.scopes??[];t.includes(L.value)||(L.value=t[0]??``),De()}),V.addEventListener(`change`,()=>{let e=H.find(e=>e.bucket===B.value&&e.prefix===V.value)?.scopes??[];e.includes(L.value)||(L.value=e[0]??``),De()}),z.addEventListener(`change`,()=>{L.value=z.value}),M(`version`).textContent=e;var Q=(e,t=`idle`)=>{I.textContent=e,I.title=e,I.dataset.state=t};function Ae(){M(`storage-fields`).hidden=N.value!==`publication`,M(`scope-field`).hidden=N.value===`publication`,G.hidden=N.value!==`local`,M(`address-field`).hidden=N.value===`local`,L.disabled=N.value===`http`,M(`source-help`).textContent=N.value===`local`?`전체/변경분 저장 폴더 또는 로컬 게시 저장소를 선택하세요. 폴더는 읽기만 합니다.`:N.value===`publication`?`연결 주소는 서버 주소만 유지합니다. 연결 목록 조회 후 버킷·경로·게시 구역을 목록에서 선택하고 목록 조회를 누르세요. 처음 연결하는 서버는 편집기의 SDK 연결 주소를 한 번 붙여넣거나 각 칸에 직접 입력할 수 있습니다. 공개 연결 목록은 게시 완료 시 자동 갱신되며 접속 키는 필요 없습니다.`:`정적 폴더 주소 또는 SDK 연결 주소를 넣으세요. 파일 읽기 권한과 CORS 허용이 필요합니다.`}function je(){let e=M(`scripts`);if(e.replaceChildren(),!K)return;let t=K.scripts.list();if(!t.length){e.textContent=`로드된 스크립트가 없습니다.`;return}for(let n of t){let t=document.createElement(`fieldset`),r=document.createElement(`legend`);if(r.textContent=n.target.componentId,t.append(r),e.append(t),n.state!==`running`){t.append(document.createTextNode(n.state));continue}let i=K.scripts.get(n.target);for(let e of n.schema){let r=document.createElement(`label`),a=document.createElement(`input`);r.append(document.createTextNode(e.name),a),t.append(r),a.setAttribute(`aria-label`,e.name),a.type=e.type===`boolean`?`checkbox`:e.format===`color`?`color`:e.type===`number`?`number`:`text`;let o=n.values[e.name];e.type===`boolean`?a.checked=o===!0:a.value=String(o),e.type===`number`&&(a.step=`any`,e.min!==void 0&&(a.min=String(e.min)),e.max!==void 0&&(a.max=String(e.max))),e.maxLength!==void 0&&(a.maxLength=e.maxLength),a.disabled=e.access!==`read-write`||e.storage===`persistent`,a.disabled&&(a.title=e.access===`read-write`?`영구 저장 전용 속성입니다. 이 예제는 실행 중 변경을 지원합니다.`:`읽기 전용 속성입니다.`),a.onchange=()=>{let t=e.type===`boolean`?a.checked:e.type===`number`?Number(a.value):a.value;i.setProperties({[e.name]:t},{expectedRevision:n.revision}).catch(e=>Q(String(e))).finally(je)}}}}function Me(e){let t=M(`update-summary`);if(t.dataset.state=e.update.state,t.textContent={disabled:`자동 갱신 꺼짐`,stopped:`자동 갱신 대기`,watching:`최신 게시본 자동 확인 · 5초 간격`,checking:`최신 게시본 확인 중`,updating:`새 게시본 준비 중 · 현재 화면 유지`,retrying:`갱신 실패 · 현재 화면 유지, 자동 재시도`}[e.update.state],e.model){t.dataset.release=e.model.releaseHash,t.title=`${e.model.name} · ${e.model.releaseHash}`,X=X.map(t=>t.id===e.model.id?e.model:t);for(let t of P.options)t.value===e.model.id&&(t.textContent=e.model.name)}let n=M(`load-progress`);n.max=Math.max(1,e.totalCells),n.value=e.readyCells,e.status===`loading`&&e.totalCells===0&&n.removeAttribute(`value`),M(`load-summary`).textContent=e.totalCells?`${e.readyCells} / ${e.totalCells}`:`대기 중`,M(`load-states`).replaceChildren(...e.cells.map(e=>{let t=document.createElement(`li`),n=document.createElement(`span`),r=document.createElement(`span`);return t.dataset.state=e.status,t.title=e.message??`${e.name??e.id} · ${e.status}`,n.className=`cell-name`,n.textContent=e.name??e.id,r.className=`cell-status`,r.textContent={ready:`준비 완료`,loading:`읽는 중`,unloaded:`해제됨`,failed:`실패`,pending:`대기`,queued:`대기`,unavailable:`사용 불가`}[e.status]??e.status,t.append(n,r),t})),(e.status===`loading`||e.status===`ready`)&&Q(`${e.status===`ready`?`로드 완료`:`준비 중`} · 화면 ${e.readyCells}/${e.totalCells} · ${(e.downloadedBytes/1024**2).toFixed(1)} MiB`,e.status),je(),$?.refresh()}async function Ne(e=!0){e&&$?.stop(),clearTimeout(ye),ye=void 0,be?.abort(),be=void 0;let t=++Y,n=K;return K=void 0,ve.splice(0).forEach(e=>e()),await n?.dispose(),X=[],$?.refresh(),t===Y&&(F.hidden=!0,M(`scripts`).replaceChildren(),M(`update-summary`).textContent=`자동 갱신 대기`,delete M(`update-summary`).dataset.release),t}function Pe(e,t,r){if(!(e instanceof n)||!e.publication||e.publication.compositionId)return;let i=new AbortController;be=i;let a=JSON.stringify(X.map(e=>e.id).sort()),o=async()=>{try{let n=await e.listModelIds(i.signal);if(i.signal.throwIfAborted(),r!==Y||t!==K)return;let o=JSON.stringify([...n].sort());if(o!==a){let e=await t.listModels(i.signal);if(i.signal.throwIfAborted(),r!==Y||t!==K)return;let n=P.value;X=e,a=o,P.replaceChildren(...e.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.name,t})),e.some(e=>e.id===n)&&(P.value=n),P.disabled=!e.length,W.disabled=!e.length||t.progress.status===`loading`,$?.refresh(),!t.model&&e.length===1?await Ie(e[0].id):t.model||Q(e.length?`${e.length}개 모델 · 이름으로 선택하세요.`:`게시된 모델을 기다리고 있습니다.`)}}catch{}finally{!i.signal.aborted&&r===Y&&t===K&&(ye=setTimeout(()=>{o()},1e4))}};ye=setTimeout(()=>{o()},1e4)}async function Fe(e,i,a=!1){a||$?.stop(),i?.throwIfAborted();let o=await Ne(!1);if(i?.throwIfAborted(),o!==Y)return[];J=e,e instanceof r&&(q=e.directory,L.value=e.scope,N.value=`local`),e instanceof n&&(N.value=e.publication?`publication`:`http`,e.publication?Ee(e.connectionUrl):R.value=e.connectionUrl.href),Ae(),P.disabled=!0,W.disabled=!0,K=new t({canvas:F,source:e,onProgress:e=>{o===Y&&Me(e)}}),ve=[s(M(`actors`),K.viewport,M(`actor-details`)),c(M(`viewport-tools`),K.viewport,()=>{M(`viewport`).requestFullscreen().catch(e=>Q(String(e)))}),K.subscribeActorSelection(()=>$?.refresh()),K.scripts.subscribe(()=>{o===Y&&(je(),$?.refresh())})];let l=await K.listModels(i);return o===Y?(X=l,P.replaceChildren(...X.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.name,t})),P.disabled=!X.length,W.disabled=!X.length,Q(X.length?`${X.length}개 모델 · 게시본을 여세요.`:`게시 완료된 모델이 없습니다.`),Ce(e),Pe(e,K,o),$?.refresh(),X):[]}async function Ie(e){let t=K,n=Y;if(t){P.value=e,F.hidden=!1,W.disabled=!0;try{await t.open(e,{progressive:!0}),t===K&&n===Y&&J&&Ce(J,e)}finally{t===K&&n===Y&&(W.disabled=!1)}}}G.onclick=()=>{let e=window.showDirectoryPicker;if(!e){Q(`이 브라우저는 폴더 선택을 지원하지 않습니다. Chrome/Edge를 사용하세요.`);return}e.call(window,{mode:`read`}).then(e=>(q=e,Fe(new r(e,{scope:L.value.trim()})))).catch(e=>{e instanceof DOMException&&e.name===`AbortError`||Q(String(e))})},M(`list`).onclick=()=>{if(N.value===`local`&&!q){Q(`먼저 청크 폴더를 선택하세요.`);return}(async()=>{N.value===`publication`&&new URL(R.value.trim()).pathname!==`/`&&Ee(new URL(R.value.trim()));let e=N.value===`local`?void 0:N.value===`publication`?d(we()):new URL(R.value.trim()),t=e?new n(e):new r(q,{scope:L.value.trim()}),i=await Fe(t);t===J&&i.length===1&&await Ie(i[0].id)})().catch(e=>Q(e instanceof TypeError&&N.value!==`local`?`원격 파일 요청 실패 · 주소·읽기 권한·CORS 설정을 확인하세요.`:String(e)))},W.onclick=()=>{J&&P.value&&($?.stop(),(async()=>{K||await Fe(J),await Ie(P.value)})().catch(e=>Q(String(e))))},M(`close`).onclick=()=>{Z(!0),Ne().then(()=>Q(`연결을 해제했습니다.`)).catch(e=>Q(String(e)))},N.onchange=()=>{Z(!0),Ne(),P.replaceChildren(),P.disabled=!0,W.disabled=!0,Ae(),Q(`청크 연결을 선택하세요.`)};var $=ge(M(`examples`),M(`example-code-panel`),M(`viewer-information`),{client:()=>K,catalog:()=>X,address:()=>{try{return N.value===`publication`?d(we()).href:R.value}catch{return R.value}},scope:()=>L.value,connect:(e,t)=>Fe(e,t,!0),disconnect:async()=>{await Ne(!1),Q(`연결을 해제했습니다.`)},showViewport:()=>{F.hidden=!1}});window.addEventListener(`pagehide`,()=>{clearTimeout(ye),be?.abort(),U?.abort(),$?.dispose(),K?.dispose()}),F.hidden=!0,Ae();async function Le(){let e,t=null,r=!1;try{t=localStorage.getItem(xe),r=localStorage.getItem(Se)===`1`}catch{}try{if(!t&&r)return;if(t&&t.length>4096){Z();return}if(e=t?JSON.parse(t):{version:1,url:a().connectionUrl.href},!e||e.version!==1||typeof e.url!=`string`||e.modelId!==void 0&&(typeof e.modelId!=`string`||!/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/.test(e.modelId))||Object.keys(e).some(e=>![`version`,`url`,`modelId`].includes(e))){Z();return}}catch{Z();return}let i=-1;try{let t=new n(new URL(e.url)),r=Fe(t);i=Y;let a=await r;if(t!==J||i!==Y)return;t.publication&&ke();let o=e.modelId?a.find(t=>t.id===e.modelId):a.length===1?a[0]:void 0;o?await Ie(o.id):e.modelId&&Q(`마지막 모델이 목록에 없습니다. 연결된 모델을 선택하세요.`)}catch(e){i<0?Z():i===Y&&Q(`저장한 연결을 다시 열지 못했습니다. ${String(e)}`)}}Le();