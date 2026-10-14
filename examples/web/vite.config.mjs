import { defineConfig } from 'vite';

// Only serves the web page. No query API, token-reading route or filesystem proxy.
export default defineConfig({
  server: { host: '127.0.0.1', cors: false, fs: { deny: ['.env', '.env.*', '**/.api-token', '**/.git/**', '**/delivery-data*/**', '*.{crt,pem}'] } },
  preview: { host: '127.0.0.1', cors: false },
});
