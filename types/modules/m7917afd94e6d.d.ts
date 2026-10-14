import { type ByteProvider } from './m5e6f4f6908c1.js';
export interface DeliveryModel {
    readonly id: string;
    readonly name: string;
    readonly releaseHash: string;
}
export interface DeliveryRelease {
    readonly model: DeliveryModel;
    readonly provider: ByteProvider;
}
/** A trusted host supplies storage access. Published data cannot supply executable source adapters. */
export interface DeliverySource {
    listModels(signal: AbortSignal): Promise<readonly DeliveryModel[]>;
    resolve(modelId: string, signal: AbortSignal): Promise<DeliveryRelease>;
}
export interface DeliveryFileHandle {
    getFile(): Promise<Blob>;
}
/** Structurally compatible with FileSystemDirectoryHandle; no write methods are required. */
export interface DeliveryDirectoryHandle {
    readonly name: string;
    readonly kind: 'directory';
    getFileHandle(name: string): Promise<DeliveryFileHandle>;
    getDirectoryHandle(name: string): Promise<DeliveryDirectoryHandle>;
    values?(): AsyncIterable<{
        readonly name: string;
        readonly kind: 'file' | 'directory';
    }>;
    queryPermission?(options: {
        mode: 'read';
    }): Promise<string>;
}
/** Read-only plain export or local publication folder. No localhost query API is used. */
export declare class LocalChunkSource implements DeliverySource {
    readonly directory: DeliveryDirectoryHandle;
    readonly scope: string;
    constructor(directory: DeliveryDirectoryHandle, options?: {
        scope?: string;
    });
    private authorize;
    private plain;
    private publication;
    listModels(signal?: AbortSignal): Promise<readonly DeliveryModel[]>;
    resolve(modelId: string, signal?: AbortSignal): Promise<DeliveryRelease>;
}
/** One plain export served as static files. This is not an authenticated S3 catalog adapter. */
export declare class HttpChunkSource implements DeliverySource {
    readonly base: URL;
    private readonly provider;
    constructor(base: URL);
    private current;
    listModels(signal?: AbortSignal): Promise<DeliveryModel[]>;
    resolve(modelId: string, signal?: AbortSignal): Promise<DeliveryRelease>;
}
