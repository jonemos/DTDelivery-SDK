import sourceText from './featureExamples.ts?raw';

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
  if (value === '' || typeof value === 'boolean' || !Number.isFinite(Number(value))) throw new Error(`${key}: 유효한 숫자를 입력하세요.`);
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
    const start = `// example:${key}:start`, end = `// example:${key}:end`;
    const begin = sourceText.indexOf(start), finish = sourceText.indexOf(end, begin);
    if (begin < 0 || finish < 0) throw new Error('예제 코드 영역이 없습니다.');
    return sourceText.slice(begin + start.length, finish).trim();
  };
  return block(id) + '\n\n// 공통 타입·호스트 연결·복원 도우미\n' + block('common');
}
