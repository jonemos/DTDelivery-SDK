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
    /** Lightweight head check; custom adapters may omit it and fall back to resolve. */
    latestRelease?(modelId: string, signal: AbortSignal): Promise<string>;
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
    latestRelease(modelId: string, signal?: AbortSignal): Promise<string>;
}
/** One plain export or an explicitly selected published model. Anonymous HTTP reads only. */
export declare class HttpChunkSource implements DeliverySource {
    readonly base: URL;
    readonly publication?: Readonly<{
        scope: string;
        compositionId: string;
    }>;
    private readonly headBase;
    private readonly provider;
    constructor(base: URL, publication?: {
        scope: string;
        compositionId: string;
    });
    private currentHash;
    private current;
    latestRelease(modelId: string, signal?: AbortSignal): Promise<string>;
    listModels(signal?: AbortSignal): Promise<DeliveryModel[]>;
    resolve(modelId: string, signal?: AbortSignal): Promise<DeliveryRelease>;
}
