import type { Server } from 'node:http';
import type { CollaborationApi } from './me9be7fced53f.js';
/** Authenticated notification-only socket. Changes use the same validated HTTP batch API. */
export declare function installAddonWebSocket(server: Server, api: CollaborationApi, allowedOrigin: string): void;
