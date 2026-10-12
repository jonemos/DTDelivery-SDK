import type { ChunkCache } from './m5e6f4f6908c1.js';
/** Optional origin-scoped disposable cache. Authorization remains the host's responsibility on every read. */
export declare class BrowserChunkCache implements ChunkCache {
    private readonly namespace;
    readonly budget: number;
    private entries;
    private bytes;
    private stamp;
    constructor(namespace: string, budget?: number);
    private open;
    private key;
    get(hash: string): Promise<Uint8Array<ArrayBuffer> | undefined>;
    remove(hash: string): Promise<void>;
    put(hash: string, bytes: Uint8Array): Promise<void>;
}
