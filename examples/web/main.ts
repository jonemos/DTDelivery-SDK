import { DELIVERY_SDK_VERSION, DeliveryApiClient, ChunkReader, DeliveryViewer } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';
import './style.css';
const input = (id: string) => document.getElementById(id) as HTMLInputElement;
const models = document.getElementById('models') as HTMLSelectElement, status = document.getElementById('status')!;
const source = document.getElementById('source') as HTMLSelectElement, open = document.getElementById('open') as HTMLButtonElement;
const canvas = document.getElementById('view') as HTMLCanvasElement;
document.getElementById('version')!.textContent = DELIVERY_SDK_VERSION;
let client: DeliveryApiClient | undefined, viewer: DeliveryViewer | undefined, opening: DeliveryViewer | undefined, request = 0;
let connectedScope = '';
let catalog: { id: string; name: string; releaseHash: string }[] = [];
const message = (value: string) => { status.textContent = value; };
function close() {
  request++; canvas.hidden = true;
  const old = viewer, pending = opening; viewer = undefined; opening = undefined;
  return Promise.all([old?.dispose(), pending?.dispose()]).then(() => {});
}
function clearCatalog() {
  client = undefined; connectedScope = ''; catalog = []; models.replaceChildren(); models.disabled = true; open.disabled = true;
}
function errorMessage(error: unknown) {
  const value = error instanceof Error ? error.message : String(error);
  if (value.includes('Delivery API: 401')) return 'API 토큰이 일치하지 않습니다. API 실행 창에 표시된 토큰 파일을 확인하세요.';
  if (value.includes('Delivery API: 403')) return 'API에서 접근을 거부했습니다. 웹페이지 origin과 scope 설정을 확인하세요.';
  if (value.includes('Failed to fetch')) return 'API에 연결할 수 없습니다. 해당 서버 CMD가 실행 중인지, API 주소와 웹 origin이 맞는지 확인하세요.';
  return value;
}
function configureSource() {
  const local = source.value === 'local';
  clearCatalog(); input('token').value = ''; input('api').value = 'http://127.0.0.1:18849/'; input('scope').value = 'development';
  input('token').placeholder = local ? 'delivery-data-local/.api-token 내용' : 'delivery-data/.api-token 내용';
  document.getElementById('source-help')!.textContent = local
    ? '먼저 local-server.cmd를 실행하고 청크 폴더를 지정하세요. SDK 폴더의 delivery-data-local/.api-token 내용을 입력하세요.'
    : '먼저 remote-server.cmd를 실행하세요. SDK 폴더의 delivery-data/.api-token 내용을 입력하세요. 다른 PC의 API라면 주소를 변경하세요.';
  document.getElementById('source-help')!.textContent += ' 청크 위치는 실행한 API 서버의 설정으로 결정됩니다. 이 선택은 서버 설정을 바꾸지 않습니다. 주소·scope·토큰 경로를 변경했다면 API 실행 창의 값을 사용하세요.';
  message('API 토큰을 입력한 뒤 목록 조회를 누르세요.');
}
function connection() {
  const address = input('api').value.trim();
  if (!address) throw new Error('조회 API 주소를 입력하세요. 기본 주소는 http://127.0.0.1:18849/입니다.');
  let root: URL;
  try { root = new URL(address); } catch { throw new Error('조회 API 주소를 http:// 또는 https://로 시작하는 전체 주소로 입력하세요.'); }
  if (!['http:', 'https:'].includes(root.protocol) || root.username || root.password || root.search || root.hash) throw new Error('조회 API 주소에는 http:// 또는 https:// 주소만 입력하세요. 계정·쿼리·#은 포함하지 마세요.');
  if (!root.pathname.endsWith('/')) root.pathname += '/';
  const scope = input('scope').value.trim(), token = input('token').value.trim();
  if (!scope) throw new Error('게시 구역(scope)을 입력하세요. 기본값은 development입니다.');
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/.test(scope) || ['objects', 'releases', 'equipment', 'deltas'].includes(scope)) throw new Error('게시 구역(scope)을 확인하세요. 영문·숫자·밑줄·하이픈을 사용하는 API 설정값을 입력하세요.');
  if (!token) throw new Error('API 토큰을 입력하세요. 화면 안내에 표시된 .api-token 파일의 내용을 복사하세요.');
  return { client: new DeliveryApiClient(root, async () => `Bearer ${token}`), scope };
}
source.onchange = () => { void close(); configureSource(); };
for (const id of ['api', 'token', 'scope']) input(id).oninput = () => {
  void close(); clearCatalog(); message('연결 정보가 바뀌었습니다. 목록 조회를 다시 누르세요.');
};
canvas.hidden = true; configureSource();
document.getElementById('list')!.onclick = async () => {
  const closing = close(), generation = request;
  clearCatalog();
  try {
    await closing; if (generation !== request) return;
    const connected = connection(); message('모델 목록을 조회하고 있습니다…');
    const items = (await connected.client.compositions(connected.scope)).items;
    if (generation !== request) return;
    client = connected.client; connectedScope = connected.scope; catalog = items;
    models.replaceChildren(...catalog.map(item => new Option(item.name, item.id))); models.disabled = !catalog.length; open.disabled = !catalog.length;
    message(catalog.length ? `${catalog.length}개 게시본을 조회했습니다.` : '조회된 게시본이 없습니다. API 실행 창의 청크 검증 결과와 scope를 확인하세요.');
  } catch (error) { if (generation === request) message(errorMessage(error)); }
};
document.getElementById('open')!.onclick = async () => {
  let prepared: DeliveryViewer | undefined;
  const closing = close(), generation = request;
  try {
    await closing; if (generation !== request) return;
    const model = catalog.find(item => item.id === models.value); if (!client || !model) throw new Error('목록에서 게시본을 선택하세요.');
    canvas.hidden = false;
    prepared = new DeliveryViewer(canvas, new ChunkReader(client.provider(connectedScope, model.id, model.releaseHash))); opening = prepared;
    message('게시본을 준비하고 있습니다…'); await prepared.open(model.releaseHash);
    if (generation !== request) { await prepared.dispose(); return; } opening = undefined; viewer = prepared; message(`${model.name} · ${model.releaseHash}`);
  } catch (error) { await prepared?.dispose(); if (generation === request) { opening = undefined; canvas.hidden = true; message(errorMessage(error)); } }
};
document.getElementById('close')!.onclick = () => { void close(); clearCatalog(); input('token').value = ''; message('연결을 해제했습니다.'); };
window.addEventListener('pagehide', () => { input('token').value = ''; clearCatalog(); void close(); });
