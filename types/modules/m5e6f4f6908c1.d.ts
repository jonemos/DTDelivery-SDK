import type { TextureAdmission } from './m92c36c0360d4.js';
import type { SceneDocument } from './mcec497bf55e6.js';
import { type AssetRegistrySnapshot } from './m5e4e772c2f57.js';
import type { LevelPin, LevelSourceData, LevelSourceInfo } from './mf0f7647466ef.js';
import { type ChunkFile, type DeliveryManifest } from './m58f4c922e436.js';
export interface ByteProvider {
    read(path: string, limit: number, signal: AbortSignal): Promise<Uint8Array>;
    authorize?(signal: AbortSignal): Promise<void>;
}
export interface ChunkCache {
    get(hash: string): Promise<Uint8Array | undefined>;
    put(hash: string, bytes: Uint8Array): Promise<void>;
    remove(hash: string): Promise<void>;
}
export declare class MemoryChunkCache implements ChunkCache {
    readonly budget: number;
    private values;
    private bytes;
    constructor(budget?: number);
    get(hash: string): Promise<Uint8Array<ArrayBuffer> | undefined>;
    remove(hash: string): Promise<void>;
    put(hash: string, bytes: Uint8Array): Promise<void>;
}
/** Host supplies the base URL; no URL is ever read from package data. Independent objects need no Range support. */
export declare function httpByteProvider(base: URL, authorize?: ByteProvider['authorize']): ByteProvider;
export declare class ChunkReader {
    readonly provider: ByteProvider;
    readonly cache: ChunkCache;
    readonly stats: {
        requests: number;
        downloaded: number;
        cacheHits: number;
        corruptCache: number;
        cacheFailures: number;
    };
    onProgress?: (stats: Readonly<ChunkReader['stats']>) => void;
    private activeReads;
    private waiters;
    private hydrateAddons;
    constructor(provider: ByteProvider, cache?: ChunkCache);
    private read;
    manifest(hash: string, signal: AbortSignal): Promise<DeliveryManifest>;
    file(file: ChunkFile, signal: AbortSignal): Promise<Uint8Array>;
    /** Only metadata chunks are read; no mesh/texture payloads or unverified sidecar data. */
    catalogs(hash: string, signal: AbortSignal, verifiedManifest?: DeliveryManifest): Promise<{
        equipment: import("./mac96c8d05045.js").EquipmentIndex;
        actors: import("./mee8d76b34e4b.js").ActorIndex;
    }>;
    equipment(hash: string, signal: AbortSignal, verifiedManifest?: DeliveryManifest): Promise<import("./mac96c8d05045.js").EquipmentIndex>;
    actors(hash: string, signal: AbortSignal, verifiedManifest?: DeliveryManifest): Promise<import("./mee8d76b34e4b.js").ActorIndex>;
    source(manifest: DeliveryManifest, signal: AbortSignal): {
        info: (_source: LevelPin["source"], pin?: LevelPin) => Promise<LevelSourceInfo>;
        source: (pin: LevelPin) => Promise<LevelSourceData>;
        prepared: (info: LevelSourceInfo, requestSignal: AbortSignal, textureBudget: TextureAdmission, textureOptions?: import("./mae043aea4362.js").TextureImportOptions) => Promise<{
            document: SceneDocument;
            textureCatalog: AssetRegistrySnapshot;
            layouts: import("./m4c70f05441f4.js").TextureAppearanceLayout[];
            storage: import("./m5e4e772c2f57.js").AssetRegistryStorage & {
                readonly reservedTextureBytes: number;
            };
        }>;
    };
}
