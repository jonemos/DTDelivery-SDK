import{DELIVERY_SDK_VERSION as e,DeliveryClient as t,HttpChunkSource as n,LocalChunkSource as r,actorServiceKey as i,defaultDeliverySource as a,mergeStorageDirectories as o,mountActorPanel as s,mountDeliveryViewportTools as c,readStorageDirectory as l,splitStorageConnection as u,storageConnectionUrl as d,storageEndpoint as ee}from"/runtime/index.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=`import sourceText from './featureExamples.ts?raw';

// example:common:start
import { DELIVERY_SDK_VERSION, LocalChunkSource, HttpChunkSource, actorServiceKey, type DeliveryClient, type DeliveryModel, type DeliveryDirectoryHandle, type DeliverySource, type DeliveryScriptSnapshot } from '@dt/delivery-sdk';

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
];

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
`;function p(e){let t=e.client();if(!t)throw Error(`먼저 청크 폴더 또는 정적 청크 주소를 연결하세요.`);return t}function m(e,t){let n=p(e).actors().find(e=>e.serviceKey===t.actor);if(!n?.available)throw Error(`선택한 액터가 아직 준비되지 않았습니다.`);return n}function h(e,t){let n=e[t];if(n===``||typeof n==`boolean`||!Number.isFinite(Number(n)))throw Error(`${t}: 유효한 숫자를 입력하세요.`);return Number(n)}function g(e,t){let n=t.viewport,r={projection:n.projection,settings:n.cameraSettings,position:n.camera.position.toArray(),quaternion:n.camera.quaternion.toArray(),target:n.controls.target.toArray(),speed:n.navigation.speed};return()=>{e.client()===t&&(t.setProjection(r.projection),n.setCameraSettings(r.settings),n.camera.position.fromArray(r.position),n.camera.quaternion.fromArray(r.quaternion),n.controls.target.fromArray(r.target),n.controls.update(),n.navigation.setSpeed(r.speed),n.invalidate())}}function _(e,t){let n=t.selectedActor;return()=>{if(e.client()!==t)return;let r=n&&t.actors().find(e=>e.serviceKey===n.serviceKey&&e.available);t.selectActor(r?{mountId:r.mountId,actorId:r.actorId}:null)}}function te(t){let n=t.client();return{value:{version:e,connected:!!n,model:n?.model??null,status:n?.progress.status??`idle`}}}async function ne(e,t){let n=window.showDirectoryPicker;if(!n)throw Error(`이 브라우저는 폴더 선택을 지원하지 않습니다. Chrome/Edge를 사용하세요.`);let i=await n.call(window,{mode:`read`});return e.signal.throwIfAborted(),{value:await e.connect(new r(i,{scope:String(t.scope).trim()}),e.signal)}}async function re(e,t){let r=new n(new URL(String(t.address).trim()));return{value:await e.connect(r,e.signal)}}async function v(e){return{value:await p(e).listModels(e.signal)}}async function ie(e,t){return e.showViewport(),{value:await p(e).open(String(t.model),{progressive:t.progressive===!0,signal:e.signal})}}function y(e){let t=p(e),n=t.subscribeProgress(t=>{e.signal.aborted||e.write(t)});return{value:t.progress,cleanup:n}}function b(e,t){let n=p(e).actors(String(t.query));return{value:{matched:n.length,actors:n.slice(0,100).map(e=>({actorName:e.actorName,actorId:e.actorId,mountId:e.mountId,serviceKey:e.serviceKey,available:e.available,focusable:e.focusable}))}}}function x(e,t){let n=p(e),r=m(e,t),i=_(e,n);return{value:n.selectActor({mountId:r.mountId,actorId:r.actorId}),cleanup:i}}function S(e,t){let n=p(e),r=m(e,t);if(!r.focusable)throw Error(`이 액터는 카메라 초점을 지원하지 않습니다.`);let i=g(e,n),a=_(e,n);return{value:n.focusActor({mountId:r.mountId,actorId:r.actorId}),cleanup:()=>{i(),a()}}}function ae(e){let t=p(e),n=_(e,t);return{value:t.selectActor(null),cleanup:n}}function C(e,t){let n=p(e),r=g(e,n);return n.setProjection(String(t.projection)),{value:{projection:n.viewport.projection,camera:n.viewport.cameraSettings},cleanup:r}}function w(e,t){let n=p(e),r=n.viewport.mode;return n.setViewMode(String(t.mode)),{value:{mode:n.viewport.mode},cleanup:()=>{e.client()===n&&n.setViewMode(r)}}}function T(e,t){let n=p(e),r=h(t,`speed`);if(r<.25||r>64)throw Error(`카메라 속도는 0.25–64 m/s입니다.`);let i=g(e,n);return n.viewport.setCameraSettings({horizontalFovDegrees:h(t,`fov`),orthographicWidthMeters:h(t,`width`),nearMeters:h(t,`near`),farMeters:h(t,`far`)}),n.viewport.navigation.setSpeed(r),n.viewport.onViewChange?.(),{value:{...n.viewport.cameraSettings,speed:n.viewport.navigation.speed},cleanup:i}}function E(e,t){let n=p(e),r=n.viewport,i={grid:r.grid.visible,helpers:r.helpers,bounds:r.bounds},a=e=>{r.grid.visible=e.grid,r.helpers=e.helpers,r.setBounds(e.bounds),r.invalidate(),r.onViewChange?.()};return a({grid:t.grid===!0,helpers:t.helpers===!0,bounds:t.bounds===!0}),{value:{grid:r.grid.visible,helpers:r.helpers,bounds:r.bounds},cleanup:()=>{e.client()===n&&a(i)}}}function D(e){let t=p(e),n=g(e,t);return t.viewport.fit(),{value:{positionMeters:t.viewport.camera.position.toArray(),targetMeters:t.viewport.controls.target.toArray()},cleanup:n}}async function O(e,t){let n=p(e).viewport.session.textureDisplay,r={maxSize:h(t,`size`),maps:[]};for(let e of[`baseColor`,`normal`,`metallicRoughness`,`occlusion`,`emissive`,`specular`])t[e]===!0&&(r.maps=[...r.maps,e]);let i=n.estimate(r),a=i+(n.current?.reservedBytes??0);return await n.apply(r,h(t,`budget`)*1048576,e.signal,t=>{e.signal.aborted||e.write({message:t})}),{value:{options:n.options,estimatedBytes:i,swapPeakBytes:a,budgetBytes:n.budgetBytes,note:`예약 추정이며 실제 GPU 측정값이 아닙니다. 선택한 표시 설정은 적용 상태로 유지됩니다.`}}}function k(e){return{value:p(e).scripts.list()}}async function A(e,t){let n=p(e),r=e.script();if(!r||r.state!==`running`)throw Error(`실행 준비된 스크립트를 선택하세요.`);let i=r.schema.find(e=>e.name===t.property);if(!i||i.access!==`read-write`||i.storage===`persistent`)throw Error(`이 속성은 실행 중 변경할 수 없습니다.`);let a=i.type===`boolean`?t.value===!0:i.type===`number`?h(t,`value`):String(t.value);return{value:await n.scripts.get(r.target).setProperties({[i.name]:a},{expectedRevision:r.revision})}}function j(e,t){let n=m(e,t);return{value:{serviceKey:i(n),compositionId:n.compositionId,mountId:n.mountId,actorId:n.actorId,positionMeters:n.positionMeters,positionUeCm:n.positionUeCm}}}function oe(e){let t=p(e);return t.cancel(),{value:{message:`로드 취소를 요청했습니다.`,progress:t.progress}}}async function se(e){return await e.disconnect(),{value:{connected:!!e.client(),message:`연결을 해제했습니다.`}}}var M=[{id:`info`,title:`SDK · 연결 정보`,description:`버전과 현재 연결·게시본 정보를 읽습니다.`,guide:`03_CLIENT`,run:te},{id:`local`,title:`로컬 폴더 연결`,description:`폴더를 읽기 전용으로 선택하고 모델 목록을 조회합니다.`,guide:`01_LOCAL_SOURCE`,fields:[{key:`scope`,label:`게시 구역`,kind:`text`,value:`development`}],run:ne},{id:`http`,title:`정적 HTTP 연결`,description:`head·objects·releases가 있는 일반 청크 폴더 주소입니다.`,guide:`02_HTTP_SOURCE`,fields:[{key:`address`,label:`청크 폴더 주소`,kind:`text`}],run:re},{id:`models`,title:`모델 목록 조회`,description:`연결된 source의 실제 모델 id·name·releaseHash를 읽습니다.`,guide:`04_MODELS`,needs:`connection`,run:v},{id:`open`,title:`모델 · 점진 로딩`,description:`선택한 모델을 열고 초기 로드 완료를 기다립니다.`,guide:`04_MODELS`,needs:`connection`,fields:[{key:`model`,label:`통합레벨`,kind:`models`},{key:`progressive`,label:`점진 로딩`,kind:`checkbox`,value:!0}],run:ie},{id:`progress`,title:`진행 상태 구독`,description:`현재 값과 이후 progress를 표시합니다. 정지하면 구독을 해제합니다.`,guide:`05_PROGRESS`,needs:`connection`,run:y},{id:`actors`,title:`액터 이름 검색`,description:`액터 snapshot에서 이름으로 검색합니다.`,guide:`06_ACTORS`,needs:`ready`,fields:[{key:`query`,label:`액터 이름`,kind:`text`,value:``}],run:b},{id:`select`,title:`액터 선택`,description:`mountId와 actorId로 준비된 액터를 선택합니다.`,guide:`06_ACTORS`,needs:`ready`,fields:[{key:`actor`,label:`액터`,kind:`actors`}],run:x},{id:`focus`,title:`선택 · 카메라 초점`,description:`액터 경계에 카메라를 맞춥니다. 정지하면 이전 화면을 복원합니다.`,guide:`06_ACTORS`,needs:`ready`,fields:[{key:`actor`,label:`액터`,kind:`actors`}],run:S},{id:`clear`,title:`선택 해제`,description:`null target으로 선택을 해제합니다.`,guide:`06_ACTORS`,needs:`ready`,run:ae},{id:`projection`,title:`카메라 방향`,description:`원근 또는 직교 방향을 설정합니다.`,guide:`09_CAMERA_DISPLAY`,needs:`ready`,fields:[{key:`projection`,label:`방향`,kind:`select`,value:`top`,options:[`perspective`,`top`,`bottom`,`front`,`back`,`left`,`right`]}],run:C},{id:`mode`,title:`표시 모드`,description:`lit·unlit·wireframe을 설정합니다.`,guide:`09_CAMERA_DISPLAY`,needs:`ready`,fields:[{key:`mode`,label:`모드`,kind:`select`,value:`unlit`,options:[`lit`,`unlit`,`wireframe`]}],run:w},{id:`camera`,title:`카메라 수치`,description:`FOV는 degree, 폭·clip은 m, 속도는 m/s입니다.`,guide:`09_CAMERA_DISPLAY`,needs:`ready`,fields:[{key:`fov`,label:`수평 FOV (°)`,kind:`number`,value:70},{key:`width`,label:`직교 폭 (m)`,kind:`number`,value:20},{key:`near`,label:`Near (m)`,kind:`number`,value:.05},{key:`far`,label:`Far (m)`,kind:`number`,value:5e3},{key:`speed`,label:`속도 (m/s)`,kind:`number`,value:4}],run:T},{id:`display`,title:`그리드 · 도우미 · 바운드`,description:`기존 뷰포트의 실제 표시 옵션을 제어합니다.`,guide:`09_CAMERA_DISPLAY`,needs:`ready`,fields:[{key:`grid`,label:`그리드`,kind:`checkbox`,value:!0},{key:`helpers`,label:`에디터 도우미`,kind:`checkbox`,value:!0},{key:`bounds`,label:`바운드`,kind:`checkbox`,value:!0}],run:E},{id:`fit`,title:`전체 화면 맞춤`,description:`현재 표시 경계에 카메라를 맞춥니다.`,guide:`09_CAMERA_DISPLAY`,needs:`ready`,run:D},{id:`textures`,title:`텍스처 표시 적용`,description:`최대 512px로 실제 지원 맵을 적용합니다. 0 MiB는 자동 예산이며 적용 상태는 유지됩니다.`,guide:`10_TEXTURES_BUDGET`,needs:`ready`,fields:[{key:`size`,label:`최대 크기 (px)`,kind:`select`,value:`512`,options:[`128`,`256`,`512`]},{key:`budget`,label:`예산 (MiB)`,kind:`select`,value:`0`,options:[`0`,`128`,`256`,`512`,`1024`,`2048`,`4096`,`8192`]},...[`baseColor`,`normal`,`metallicRoughness`,`occlusion`,`emissive`,`specular`].map(e=>({key:e,label:e,kind:`checkbox`,value:e===`baseColor`}))],run:O},{id:`scripts`,title:`스크립트 · 공개 schema`,description:`로드된 인스턴스·공개 값·revision을 조회합니다.`,guide:`11_SCRIPTS`,needs:`ready`,run:k},{id:`property`,title:`스크립트 속성 변경`,description:`표시된 revision으로 실행 중 속성을 변경합니다. 충돌 시 현재값을 다시 읽으세요.`,guide:`11_SCRIPTS`,needs:`ready`,fields:[{key:`script`,label:`컴포넌트`,kind:`scripts`},{key:`property`,label:`공개 속성`,kind:`property`},{key:`value`,label:`변경 값`,kind:`text`}],run:A},{id:`host`,title:`업무 연결 키 · 좌표`,description:`stable serviceKey와 m/cm 좌표를 읽습니다.`,guide:`12_HOST_DATA`,needs:`ready`,fields:[{key:`actor`,label:`액터`,kind:`actors`}],run:j},{id:`cancel`,title:`진행 중 로드 취소`,description:`준비된 화면을 남기고 진행 중 로드를 취소합니다.`,guide:`13_LIFECYCLE`,needs:`loading`,run:oe},{id:`disconnect`,title:`연결 · 리소스 종료`,description:`화면·구독·애드온·renderer를 정리합니다. 다시 연결해야 합니다.`,guide:`13_LIFECYCLE`,needs:`connection`,run:se}];function ce(e){if(!M.some(t=>t.id===e))throw Error(`알 수 없는 예제입니다.`);let t=e=>{let t=`// example:${e}:start`,n=`// example:${e}:end`,r=f.indexOf(t),i=f.indexOf(n,r);if(r<0||i<0)throw Error(`예제 코드 영역이 없습니다.`);return f.slice(r+t.length,i).trim()};return t(e)+`

// 공통 타입·호스트 연결·복원 도우미
`+t(`common`)}function N(t,n,r,i){let a=(e,t=``,n=``)=>{let r=document.createElement(e);return r.className=t,r.textContent=n,r},o=a(`div`,`section-heading`),s=a(`h2`,``,`기능별 예제`),c=a(`span`,`count-label`,String(M.length));o.append(s,c);let l=a(`select`);l.id=`example-select`,l.setAttribute(`aria-label`,`기능별 예제`),l.append(...M.map(e=>{let t=a(`option`,``,e.title);return t.value=e.id,t}));let u=a(`p`,`example-description`),d=a(`div`,`example-fields`),ee=a(`div`,`example-actions`),f=a(`button`,`button-primary`,`실행`),p=a(`button`,`button-secondary`,`정지 · 복원`),m=a(`button`,`button-quiet`,`코드 보기`),h=a(`button`,`button-quiet`,`현재값 읽기`);f.id=`example-run`,p.id=`example-stop`,m.id=`example-code-toggle`,h.id=`example-reload`,ee.append(f,p,m);let g=a(`p`,`example-state`,`예제를 선택하고 실행하세요.`);g.id=`example-state`,g.setAttribute(`role`,`status`),t.append(o,l,u,d,h,ee,g);let _=a(`div`,`section-heading`),te=a(`h2`,``,`예제 코드`),ne=a(`button`,`button-quiet`,`닫기`);ne.setAttribute(`aria-label`,`예제 코드 닫기`),_.append(te,ne);let re=a(`div`,`example-code-actions`),v=a(`button`,`button-secondary`,`코드 복사`),ie=a(`label`),y=a(`input`);y.type=`checkbox`,y.checked=!0,y.setAttribute(`aria-label`,`코드 줄바꿈`),ie.append(y,document.createTextNode(`줄바꿈`));let b=a(`a`,``,`기능 문서`);b.target=`_blank`,b.rel=`noopener noreferrer`,re.append(v,ie,b),v.disabled=!navigator.clipboard,v.disabled&&(v.title=`클립보드가 지원되는 HTTPS/localhost 환경이 필요합니다.`);let x=a(`pre`,`example-parameters`),S=a(`pre`,`example-code wrap`),ae=a(`h3`,``,`실행 결과`),C=a(`pre`,`example-result`);S.id=`example-code`,x.id=`example-parameters`,C.id=`example-result`,C.textContent=`아직 실행하지 않았습니다.`,n.append(_,re,x,S,ae,C),m.setAttribute(`aria-controls`,n.id);let w=M[0],T=new Map,E=!1,D=!1,O=0,k,A,j,oe=i.client(),se=e=>{let t=typeof e==`string`?e:JSON.stringify(e,null,2)??String(e);return t.length>65536?t.slice(0,65536)+`
… 결과 표시를 65,536자로 제한했습니다.`:t},N=e=>{n.hidden=!e,r.hidden=e,m.setAttribute(`aria-expanded`,String(e)),m.textContent=e?`상세 보기`:`코드 보기`},P=e=>{g.dataset.state=`failed`,g.textContent=e instanceof Error?e.message:String(e),C.textContent=g.textContent},F=()=>Object.fromEntries([...T].map(([e,t])=>[e,t instanceof HTMLInputElement&&t.type===`checkbox`?t.checked:t.value])),I=(e,t)=>{let n=e.value;return e.dataset.entries!==JSON.stringify(t)&&(e.dataset.entries=JSON.stringify(t),e.replaceChildren(...t.map(e=>{let t=a(`option`,``,e.label);return t.value=e.value,t})),t.some(e=>e.value===n)&&(e.value=n),e.value!==n)},L=()=>i.client()?.scripts.list().filter(e=>e.state===`running`)??[],R=e=>{let t=T.get(`script`),n=T.get(`property`),r=T.get(`value`);if(!(t instanceof HTMLSelectElement)||!(n instanceof HTMLSelectElement)||!(r instanceof HTMLInputElement))return;let a=L(),o=I(t,a.map(e=>({value:JSON.stringify(e.target),label:`${e.target.componentId} · ${e.target.mountId??`통합`}`})));if(e||o||oe!==i.client()||!j){j=a.find(e=>JSON.stringify(e.target)===t.value),oe=i.client(),I(n,(j?.schema??[]).map(e=>({value:e.name,label:`${e.name} · ${e.type}`})));let e=j?.schema.find(e=>e.name===n.value);r.type=e?.type===`boolean`?`checkbox`:e?.format===`color`?`color`:e?.type===`number`?`number`:`text`,r.removeAttribute(`min`),r.removeAttribute(`max`),r.removeAttribute(`maxlength`),r.type===`checkbox`?r.checked=j?.values[n.value]===!0:r.value=String(j?.values[n.value]??``),e?.type===`number`&&(r.step=`any`,e.min!==void 0&&(r.min=String(e.min)),e.max!==void 0&&(r.max=String(e.max))),e?.maxLength!==void 0&&(r.maxLength=e.maxLength),r.disabled=!e||e.access!==`read-write`||e.storage===`persistent`,r.title=r.disabled?`실행 중 변경 가능한 공개 속성이 아닙니다.`:`표시 revision: ${j?.revision}`}},z=()=>{let e=i.client();if(w.needs&&!e)return`먼저 청크 폴더 또는 정적 주소를 연결하세요.`;if(w.needs===`ready`&&e?.progress.status!==`ready`)return`게시본 열기를 완료한 뒤 실행하세요.`;if(w.needs===`loading`&&e?.progress.status!==`loading`)return`로드가 진행 중일 때 실행할 수 있습니다.`;if(w.id===`open`&&!T.get(`model`)?.value)return`조회된 모델이 없습니다.`;if(w.fields?.some(e=>e.kind===`actors`)&&!T.get(`actor`)?.value)return`준비된 액터가 없습니다.`;if(w.id===`property`){let e=j?.schema.find(e=>e.name===T.get(`property`)?.value);if(!j)return`로드된 실행 스크립트가 없습니다. 애드온 포함 게시본이 필요합니다.`;if(!e||e.access!==`read-write`||e.storage===`persistent`)return`선택 속성은 읽기 전용 또는 영구 저장 전용입니다.`}return``},B=()=>{if(D)return;for(let e of w.fields??[]){let t=T.get(e.key);t instanceof HTMLSelectElement&&(e.kind===`models`&&I(t,i.catalog().map(e=>({value:e.id,label:e.name}))),e.kind===`actors`&&I(t,(i.client()?.actors()??[]).filter(e=>e.available&&(w.id!==`focus`||e.focusable)).map(e=>({value:e.serviceKey,label:`${e.actorName} · ${e.mountName}`}))))}if(w.id===`property`&&R(!1),w.id===`textures`){let e=new Set(i.client()?.viewport.session.textureDisplay.layouts.flatMap(e=>e.uses.map(e=>e.kind))??[]);for(let t of[`baseColor`,`normal`,`metallicRoughness`,`occlusion`,`emissive`,`specular`]){let n=T.get(t);n instanceof HTMLInputElement&&(n.disabled=!e.has(t),n.disabled&&(n.checked=!1),n.title=n.disabled?`이 게시본에 지원 텍스처가 없습니다.`:``)}}let e=z();f.disabled=E||!!e,f.title=e,p.disabled=!k&&!A,u.textContent=e||w.description},V=(e=!0)=>{O++,k?.abort(),k=void 0,E=!1;let t=A;A=void 0;try{t?.(),e&&(g.textContent=`실행·구독을 정지하고 가능한 표시 설정을 복원했습니다.`,g.dataset.state=`idle`)}catch(e){P(e)}B()},H=e=>{let t=a(`label`,e.kind===`checkbox`?`example-check`:`example-field`),n=a(`span`,``,e.label),r;[`select`,`models`,`actors`,`scripts`,`property`].includes(e.kind)?(r=a(`select`),I(r,(e.options??[]).map(e=>({value:e,label:e})))):(r=a(`input`),r.type=e.kind===`checkbox`?`checkbox`:e.kind===`number`?`number`:`text`,r.type===`number`&&(r.step=`any`)),r.id=`example-input-`+e.key,r.setAttribute(`aria-label`,`예제 `+e.label),r instanceof HTMLInputElement&&r.type===`checkbox`?r.checked=e.value===!0:e.value!==void 0&&(r.value=String(e.value)),e.key===`address`&&(r.value=i.address()),e.key===`scope`&&(r.value=i.scope()),e.kind===`checkbox`?t.append(r,n):t.append(n,r),r.addEventListener(`change`,()=>{(e.kind===`scripts`||e.kind===`property`)&&R(!0),B()}),T.set(e.key,r),d.append(t)},U=()=>{V(!1),w=M.find(e=>e.id===l.value),T=new Map,j=void 0,d.replaceChildren();for(let e of w.fields??[])H(e);te.textContent=w.title,S.textContent=ce(w.id),b.href=`https://github.com/jonemos/DTDelivery-SDK/blob/v${e}/docs/guides/${w.guide}.md`,x.textContent=`입력값은 실행 시 표시합니다.`,C.textContent=`아직 실행하지 않았습니다.`,g.textContent=`예제를 선택하고 실행하세요.`,g.dataset.state=`idle`,h.hidden=w.id!==`property`,B()};return l.addEventListener(`change`,()=>{U(),N(!0)}),p.onclick=()=>V(),m.onclick=()=>N(n.hidden===!0),ne.onclick=()=>N(!1),h.onclick=()=>{R(!0),B()},y.onchange=()=>S.classList.toggle(`wrap`,y.checked),v.onclick=()=>{navigator.clipboard.writeText(S.textContent??``).then(()=>{g.textContent=`코드를 복사했습니다.`}).catch(e=>P(e))},f.onclick=()=>{let e=z();if(e){P(Error(e));return}V(!1);let t=++O,n=new AbortController,r=w,a=F(),o=j;k=n,E=!0,N(!0),x.textContent=se({example:r.id,inputs:a,...r.id===`property`?{expectedRevision:o?.revision}:{}}),g.dataset.state=`loading`,g.textContent=`실행 중…`,C.textContent=`실행 중…`,B();let s=e=>{!D&&t===O&&!n.signal.aborted&&(C.textContent=se(e))},c={...i,script:()=>o,write:s,signal:n.signal},l;try{l=Promise.resolve(r.run(c,a))}catch(e){l=Promise.reject(e)}l.then(e=>{if(D||t!==O||n.signal.aborted){e.cleanup?.();return}A=e.cleanup,s(e.value),g.dataset.state=`ready`,g.textContent=e.cleanup?`실행 완료 · 정지하면 구독/표시를 복원합니다.`:`실행 완료`,r.id===`property`&&R(!0)}).catch(e=>{D||t!==O||(e instanceof DOMException&&e.name===`AbortError`?(g.dataset.state=`idle`,g.textContent=`폴더 선택을 취소했습니다.`,C.textContent=g.textContent):P(e))}).finally(()=>{!D&&t===O&&(E=!1,A||(k=void 0),B())})},U(),N(!1),{refresh:B,stop:()=>V(),dispose:()=>{V(!1),D=!0,t.replaceChildren(),n.replaceChildren(),r.hidden=!1}}}var P=e=>document.getElementById(e),F=P(`source`),I=P(`models`),L=P(`view`),R=P(`status`),z=P(`scope`),B=P(`address`),V=P(`bucket`),H=P(`prefix`),U=[],le=0,ue,W=P(`open`),de=P(`folder`),G,fe,K,q=0,pe=[],J,me,Y=[],he=`dt-delivery-connection-v1`,ge=`dt-delivery-default-disabled-v1`;function _e(e,t){if(e instanceof n)try{localStorage.setItem(he,JSON.stringify({version:1,url:e.connectionUrl.href,...t?{modelId:t}:{}})),localStorage.removeItem(ge)}catch{}}function X(e=!1){try{localStorage.removeItem(he),e&&localStorage.setItem(ge,`1`)}catch{}}var ve=()=>({endpoint:B.value.trim(),bucket:V.value.trim(),prefix:H.value.trim(),scope:z.value.trim()});function ye(e){let t=u(e);B.value=t.endpoint,V.value=t.bucket,H.value=t.prefix,z.value=t.scope}function be(){let e=(e,t)=>P(e).replaceChildren(...[...new Set(t)].sort().map(e=>{let t=document.createElement(`option`);return t.value=e,e||(t.label=`버킷 루트`),t}));e(`storage-buckets`,U.map(e=>e.bucket)),e(`storage-prefixes`,U.filter(e=>e.bucket===V.value).map(e=>e.prefix)),e(`storage-scopes`,U.filter(e=>e.bucket===V.value&&e.prefix===H.value).flatMap(e=>e.scopes))}async function xe(){let e=ee(B.value.trim()),t=++le;ue?.abort();let n=new AbortController;ue=n;let r;try{r=u(a().connectionUrl)}catch{}let i=[r,V.value.trim()&&z.value.trim()?ve():void 0].filter(t=>t&&t.endpoint===e),s=[...new Map(i.map(e=>[JSON.stringify([e.bucket,e.prefix]),e])).values()];if(!s.length)throw Error(`처음 연결하는 서버는 버킷·경로·scope 또는 편집기의 SDK 연결 주소를 한 번 입력하세요.`);U=[];let c=await Promise.allSettled(s.map(e=>l(e,n.signal)));if(n.signal.throwIfAborted(),t!==le)return;let d=c.flatMap(e=>e.status===`fulfilled`?[e.value]:[]);if(!d.length)throw be(),c.find(e=>e.status===`rejected`).reason;U=o(...d,...s.map(e=>({version:1,locations:[{bucket:e.bucket,prefix:e.prefix,scopes:[e.scope]}]}))).locations,U.some(e=>e.bucket===V.value)||(V.value=U[0]?.bucket??``,H.value=``);let f=U.filter(e=>e.bucket===V.value);f.some(e=>e.prefix===H.value)||(H.value=f[0]?.prefix??``);let p=f.find(e=>e.prefix===H.value)?.scopes??[];p.includes(z.value)||(z.value=p[0]??``),be(),Z(`공개 연결 목록을 읽었습니다. 버킷·경로·게시 구역을 고른 뒤 목록 조회를 누르세요.`)}var Se=()=>{xe().catch(e=>{ue?.signal.aborted||Z(String(e))})};P(`discover`).onclick=Se,B.addEventListener(`change`,()=>{if(F.value===`publication`)try{let e=new URL(B.value.trim());e.pathname!==`/`&&ye(e),Se()}catch(e){Z(String(e))}}),V.addEventListener(`change`,()=>{let e=U.filter(e=>e.bucket===V.value);e.some(e=>e.prefix===H.value)||(H.value=e[0]?.prefix??``);let t=e.find(e=>e.prefix===H.value)?.scopes??[];t.includes(z.value)||(z.value=t[0]??``),be()}),H.addEventListener(`change`,()=>{let e=U.find(e=>e.bucket===V.value&&e.prefix===H.value)?.scopes??[];e.includes(z.value)||(z.value=e[0]??``),be()}),P(`version`).textContent=e;var Z=(e,t=`idle`)=>{R.textContent=e,R.title=e,R.dataset.state=t};function Ce(){P(`storage-fields`).hidden=F.value!==`publication`,de.hidden=F.value!==`local`,P(`address-field`).hidden=F.value===`local`,z.disabled=F.value===`http`,P(`source-help`).textContent=F.value===`local`?`전체/변경분 저장 폴더 또는 로컬 게시 저장소를 선택하세요. 폴더는 읽기만 합니다.`:F.value===`publication`?`연결 주소는 서버 주소만 유지합니다. 연결 목록 조회 후 버킷·경로·게시 구역을 목록에서 선택하고 목록 조회를 누르세요. 처음 연결하는 서버는 편집기의 SDK 연결 주소를 한 번 붙여넣거나 각 칸에 직접 입력할 수 있습니다. 공개 연결 목록은 게시 완료 시 자동 갱신되며 접속 키는 필요 없습니다.`:`정적 폴더 주소 또는 SDK 연결 주소를 넣으세요. 파일 읽기 권한과 CORS 허용이 필요합니다.`}function we(){let e=P(`scripts`);if(e.replaceChildren(),!G)return;let t=G.scripts.list();if(!t.length){e.textContent=`로드된 스크립트가 없습니다.`;return}for(let n of t){let t=document.createElement(`fieldset`),r=document.createElement(`legend`);if(r.textContent=n.target.componentId,t.append(r),e.append(t),n.state!==`running`){t.append(document.createTextNode(n.state));continue}let i=G.scripts.get(n.target);for(let e of n.schema){let r=document.createElement(`label`),a=document.createElement(`input`);r.append(document.createTextNode(e.name),a),t.append(r),a.setAttribute(`aria-label`,e.name),a.type=e.type===`boolean`?`checkbox`:e.format===`color`?`color`:e.type===`number`?`number`:`text`;let o=n.values[e.name];e.type===`boolean`?a.checked=o===!0:a.value=String(o),e.type===`number`&&(a.step=`any`,e.min!==void 0&&(a.min=String(e.min)),e.max!==void 0&&(a.max=String(e.max))),e.maxLength!==void 0&&(a.maxLength=e.maxLength),a.disabled=e.access!==`read-write`||e.storage===`persistent`,a.disabled&&(a.title=e.access===`read-write`?`영구 저장 전용 속성입니다. 이 예제는 실행 중 변경을 지원합니다.`:`읽기 전용 속성입니다.`),a.onchange=()=>{let t=e.type===`boolean`?a.checked:e.type===`number`?Number(a.value):a.value;i.setProperties({[e.name]:t},{expectedRevision:n.revision}).catch(e=>Z(String(e))).finally(we)}}}}function Te(e){let t=P(`update-summary`);if(t.dataset.state=e.update.state,t.textContent={disabled:`자동 갱신 꺼짐`,stopped:`자동 갱신 대기`,watching:`최신 게시본 자동 확인 · 5초 간격`,checking:`최신 게시본 확인 중`,updating:`새 게시본 준비 중 · 현재 화면 유지`,retrying:`갱신 실패 · 현재 화면 유지, 자동 재시도`}[e.update.state],e.model){t.dataset.release=e.model.releaseHash,t.title=`${e.model.name} · ${e.model.releaseHash}`,Y=Y.map(t=>t.id===e.model.id?e.model:t);for(let t of I.options)t.value===e.model.id&&(t.textContent=e.model.name)}let n=P(`load-progress`);n.max=Math.max(1,e.totalCells),n.value=e.readyCells,e.status===`loading`&&e.totalCells===0&&n.removeAttribute(`value`),P(`load-summary`).textContent=e.totalCells?`${e.readyCells} / ${e.totalCells}`:`대기 중`,P(`load-states`).replaceChildren(...e.cells.map(e=>{let t=document.createElement(`li`),n=document.createElement(`span`),r=document.createElement(`span`);return t.dataset.state=e.status,t.title=e.message??`${e.name??e.id} · ${e.status}`,n.className=`cell-name`,n.textContent=e.name??e.id,r.className=`cell-status`,r.textContent={ready:`준비 완료`,loading:`읽는 중`,unloaded:`해제됨`,failed:`실패`,pending:`대기`,queued:`대기`,unavailable:`사용 불가`}[e.status]??e.status,t.append(n,r),t})),(e.status===`loading`||e.status===`ready`)&&Z(`${e.status===`ready`?`로드 완료`:`준비 중`} · 화면 ${e.readyCells}/${e.totalCells} · ${(e.downloadedBytes/1024**2).toFixed(1)} MiB`,e.status),we(),$?.refresh()}async function Ee(e=!0){e&&$?.stop(),clearTimeout(J),J=void 0,me?.abort(),me=void 0;let t=++q,n=G;return G=void 0,pe.splice(0).forEach(e=>e()),await n?.dispose(),Y=[],$?.refresh(),t===q&&(L.hidden=!0,P(`scripts`).replaceChildren(),P(`update-summary`).textContent=`자동 갱신 대기`,delete P(`update-summary`).dataset.release),t}function De(e,t,r){if(!(e instanceof n)||!e.publication||e.publication.compositionId)return;let i=new AbortController;me=i;let a=JSON.stringify(Y.map(e=>e.id).sort()),o=async()=>{try{let n=await e.listModelIds(i.signal);if(i.signal.throwIfAborted(),r!==q||t!==G)return;let o=JSON.stringify([...n].sort());if(o!==a){let e=await t.listModels(i.signal);if(i.signal.throwIfAborted(),r!==q||t!==G)return;let n=I.value;Y=e,a=o,I.replaceChildren(...e.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.name,t})),e.some(e=>e.id===n)&&(I.value=n),I.disabled=!e.length,W.disabled=!e.length||t.progress.status===`loading`,$?.refresh(),!t.model&&e.length===1?await Oe(e[0].id):t.model||Z(e.length?`${e.length}개 모델 · 이름으로 선택하세요.`:`게시된 모델을 기다리고 있습니다.`)}}catch{}finally{!i.signal.aborted&&r===q&&t===G&&(J=setTimeout(()=>{o()},1e4))}};J=setTimeout(()=>{o()},1e4)}async function Q(e,i,a=!1){a||$?.stop(),i?.throwIfAborted();let o=await Ee(!1);if(i?.throwIfAborted(),o!==q)return[];K=e,e instanceof r&&(fe=e.directory,z.value=e.scope,F.value=`local`),e instanceof n&&(F.value=e.publication?`publication`:`http`,e.publication?ye(e.connectionUrl):B.value=e.connectionUrl.href),Ce(),I.disabled=!0,W.disabled=!0,G=new t({canvas:L,source:e,onProgress:e=>{o===q&&Te(e)}}),G.viewport.environment=!0,pe=[s(P(`actors`),G.viewport,P(`actor-details`)),c(P(`viewport-tools`),G.viewport,()=>{P(`viewport`).requestFullscreen().catch(e=>Z(String(e)))}),G.subscribeActorSelection(()=>$?.refresh()),G.scripts.subscribe(()=>{o===q&&(we(),$?.refresh())})];let l=await G.listModels(i);return o===q?(Y=l,I.replaceChildren(...Y.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.name,t})),I.disabled=!Y.length,W.disabled=!Y.length,Z(Y.length?`${Y.length}개 모델 · 게시본을 여세요.`:`게시 완료된 모델이 없습니다.`),_e(e),De(e,G,o),$?.refresh(),Y):[]}async function Oe(e){let t=G,n=q;if(t){I.value=e,L.hidden=!1,W.disabled=!0;try{await t.open(e,{progressive:!0}),t===G&&n===q&&K&&_e(K,e)}finally{t===G&&n===q&&(W.disabled=!1)}}}de.onclick=()=>{let e=window.showDirectoryPicker;if(!e){Z(`이 브라우저는 폴더 선택을 지원하지 않습니다. Chrome/Edge를 사용하세요.`);return}e.call(window,{mode:`read`}).then(e=>(fe=e,Q(new r(e,{scope:z.value.trim()})))).catch(e=>{e instanceof DOMException&&e.name===`AbortError`||Z(String(e))})},P(`list`).onclick=()=>{if(F.value===`local`&&!fe){Z(`먼저 청크 폴더를 선택하세요.`);return}(async()=>{F.value===`publication`&&new URL(B.value.trim()).pathname!==`/`&&ye(new URL(B.value.trim()));let e=F.value===`local`?void 0:F.value===`publication`?d(ve()):new URL(B.value.trim()),t=e?new n(e):new r(fe,{scope:z.value.trim()}),i=await Q(t);t===K&&i.length===1&&await Oe(i[0].id)})().catch(e=>Z(e instanceof TypeError&&F.value!==`local`?`원격 파일 요청 실패 · 주소·읽기 권한·CORS 설정을 확인하세요.`:String(e)))},W.onclick=()=>{K&&I.value&&($?.stop(),(async()=>{G||await Q(K),await Oe(I.value)})().catch(e=>Z(String(e))))},P(`close`).onclick=()=>{X(!0),Ee().then(()=>Z(`연결을 해제했습니다.`)).catch(e=>Z(String(e)))},F.onchange=()=>{X(!0),Ee(),I.replaceChildren(),I.disabled=!0,W.disabled=!0,Ce(),Z(`청크 연결을 선택하세요.`)};var $=N(P(`examples`),P(`example-code-panel`),P(`viewer-information`),{client:()=>G,catalog:()=>Y,address:()=>B.value,scope:()=>z.value,connect:(e,t)=>Q(e,t,!0),disconnect:async()=>{await Ee(!1),Z(`연결을 해제했습니다.`)},showViewport:()=>{L.hidden=!1}});window.addEventListener(`pagehide`,()=>{clearTimeout(J),me?.abort(),ue?.abort(),$?.dispose(),G?.dispose()}),L.hidden=!0,Ce();async function ke(){let e,t=null,r=!1;try{t=localStorage.getItem(he),r=localStorage.getItem(ge)===`1`}catch{}try{if(!t&&r)return;if(t&&t.length>4096){X();return}if(e=t?JSON.parse(t):{version:1,url:a().connectionUrl.href},!e||e.version!==1||typeof e.url!=`string`||e.modelId!==void 0&&(typeof e.modelId!=`string`||!/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/.test(e.modelId))||Object.keys(e).some(e=>![`version`,`url`,`modelId`].includes(e))){X();return}}catch{X();return}let i=-1;try{let t=new n(new URL(e.url)),r=Q(t);i=q;let a=await r;if(t!==K||i!==q)return;t.publication&&Se();let o=e.modelId?a.find(t=>t.id===e.modelId):a.length===1?a[0]:void 0;o?await Oe(o.id):e.modelId&&Z(`마지막 모델이 목록에 없습니다. 연결된 모델을 선택하세요.`)}catch(e){i<0?X():i===q&&Z(`저장한 연결을 다시 열지 못했습니다. ${String(e)}`)}}ke();