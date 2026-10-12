import { defineConfig } from 'vite';
import { open } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { URL } from 'node:url';
import { parseEnv } from 'node:util';
import process from 'node:process';

const sdkRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const loopback = host => ['127.0.0.1', 'localhost', '[::1]'].includes(host);
async function textFile(path, limit) {
  const file = await open(path, 'r');
  try { const stat = await file.stat(); if (!stat.isFile() || stat.size > limit) throw new Error('File limit'); return await file.readFile('utf8'); }
  finally { await file.close(); }
}
async function optionalFile(path, limit) {
  try { return await textFile(path, limit); } catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}
/** Only the local example server reads operator-selected config/token files. No public API token endpoint. */
export function exampleConnectionPlugin(root = sdkRoot) {
  const install = server => {
    server.middlewares.use('/__dt-example/connection', async (req, res) => {
      const reply = (status, body) => { res.writeHead(status, { 'content-type': 'application/json', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' }); res.end(JSON.stringify(body)); };
      try {
        const host = new URL('http://' + req.headers.host), address = req.socket.remoteAddress;
        if (!loopback(host.hostname) || !['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(address) || req.headers.origin !== host.origin || req.headers['x-dt-example'] !== 'connection' || req.headers['content-type'] !== 'application/json') return reply(403, { error: '예제 페이지에서만 자동 연결 정보를 읽을 수 있습니다.' });
        if (req.method !== 'POST' || req.url !== '/') return reply(405, { error: '잘못된 연결 요청입니다.' });
        let body = ''; for await (const part of req) { body += part; if (body.length > 256) return reply(400, { error: '잘못된 연결 요청입니다.' }); }
        const input = JSON.parse(body);
        if (!input || Object.keys(input).join() !== 'source' || !['local', 'remote'].includes(input.source)) return reply(400, { error: '로컬 또는 원격을 선택하세요.' });
        const configText = await optionalFile(resolve(root, input.source === 'local' ? 'delivery-api.local.config.json' : 'delivery-api.config.json'), 16384);
        if (!configText) return reply(200, { token: null, message: '먼저 해당 API 서버 CMD를 실행한 뒤 목록 조회를 누르세요.' });
        const config = JSON.parse(configText), hostName = ['0.0.0.0', '::'].includes(config.host) ? '127.0.0.1' : config.host === '::1' ? '[::1]' : config.host;
        if (!loopback(hostName) || !Number.isInteger(config.port) || config.port < 1 || config.port > 65535 || !/^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/.test(config.scope) || typeof config.dataDirectory !== 'string' || !config.dataDirectory.trim()) throw new Error('Invalid local API config');
        const env = parseEnv(await optionalFile(resolve(root, '.env'), 65536) ?? '');
        const token = process.env.DT_DELIVERY_API_TOKEN ?? env.DT_DELIVERY_API_TOKEN ?? (await optionalFile(resolve(root, config.dataDirectory, '.api-token'), 1024))?.trim() ?? null;
        if (token !== null && !/^[A-Za-z0-9._~-]{32,512}$/.test(token)) throw new Error('Invalid token');
        reply(200, { apiURL: `http://${hostName}:${config.port}/`, scope: config.scope, token, message: token ? 'API 토큰을 자동으로 입력했습니다. 목록 조회를 누르세요.' : 'API 토큰 파일이 없습니다. 먼저 API를 실행하거나 운영자가 제공한 토큰을 입력하세요.' });
      } catch { reply(400, { error: '자동 연결 설정을 읽지 못했습니다. 해당 API CMD의 설정과 실행 상태를 확인하세요.' }); }
    });
  };
  return { name: 'dt-local-example-connection', configureServer: install, configurePreviewServer: install };
}
export default defineConfig({
  plugins: [exampleConnectionPlugin()],
  server: { host: '127.0.0.1', cors: false, fs: { deny: ['.env', '.env.*', '**/.api-token', '**/.git/**', '**/delivery-data*/**', '**/delivery-api*.json', '**/s3-profiles*.json', '*.{crt,pem}'] } },
  preview: { host: '127.0.0.1', cors: false },
});
