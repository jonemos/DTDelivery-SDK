import { DELIVERY_SDK_VERSION, DeliveryApiClient, ChunkReader, DeliveryViewer } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';
import './style.css';
const input = (id: string) => document.getElementById(id) as HTMLInputElement;
const models = document.getElementById('models') as HTMLSelectElement, status = document.getElementById('status')!;
document.getElementById('version')!.textContent = DELIVERY_SDK_VERSION;
let client: DeliveryApiClient | undefined, viewer: DeliveryViewer | undefined, request = 0;
let catalog: { id: string; name: string; releaseHash: string }[] = [];
const message = (value: string) => { status.textContent = value; };
async function close() { request++; const old = viewer; viewer = undefined; await old?.dispose(); }
document.getElementById('list')!.onclick = async () => {
  try {
    await close(); client = new DeliveryApiClient(new URL(input('api').value), async () => input('token').value ? `Bearer ${input('token').value}` : null);
    catalog = (await client.compositions(input('scope').value)).items; models.replaceChildren(...catalog.map(item => new Option(item.name, item.id)));
    message(`${catalog.length}개 게시본을 조회했습니다.`);
  } catch (error) { message(String(error)); }
};
document.getElementById('open')!.onclick = async () => {
  let prepared: DeliveryViewer | undefined;
  try {
    await close(); const generation = request, model = catalog.find(item => item.id === models.value); if (!client || !model) throw new Error('목록에서 게시본을 선택하세요.');
    prepared = new DeliveryViewer(document.getElementById('view') as HTMLCanvasElement, new ChunkReader(client.provider(input('scope').value, model.id, model.releaseHash)));
    message('게시본을 준비하고 있습니다…'); await prepared.open(model.releaseHash);
    if (generation !== request) { await prepared.dispose(); return; } viewer = prepared; message(`${model.name} · ${model.releaseHash}`);
  } catch (error) { await prepared?.dispose(); message(String(error)); }
};
document.getElementById('close')!.onclick = async () => { await close(); input('token').value = ''; message('연결을 해제했습니다.'); };
window.addEventListener('pagehide', () => { input('token').value = ''; void close(); });
