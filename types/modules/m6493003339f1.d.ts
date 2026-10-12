import { type AssetRegistrySnapshot } from './m5e4e772c2f57.js';
import { type CompositionDocument, type LevelSourceData } from './mf0f7647466ef.js';
import type { CompositionStorage } from './mb719d6b141c8.js';
import { type DeliveryManifest } from './m58f4c922e436.js';
export interface PackageSink {
    /** Must atomically create/verify immutable bytes. A failed write must not replace an existing object. */
    put(path: string, bytes: Uint8Array, signal?: AbortSignal): Promise<void>;
}
export interface LevelMetadata {
    version: 1;
    envelope: LevelSourceData['envelope'];
    assets: Omit<AssetRegistrySnapshot, 'blobs'>;
    blobs: {
        key: string;
        hash: string;
    }[];
    /** Source audit data, not executed and not an editable history/backup. */
    provenance?: {
        kind: 'static-preview-v1';
        file: string;
    };
}
export interface PackageProgress {
    phase: 'source' | 'chunk' | 'complete';
    completed: number;
    total: number;
    writtenBytes: number;
}
/** Export snapshot and fixed per-file chunk boundaries; no ZIP or whole-package buffer. */
export declare function packComposition(input: CompositionDocument, storage: Pick<CompositionStorage, 'source'>, sink: PackageSink, options?: {
    base?: DeliveryManifest;
    signal?: AbortSignal;
    spatialIndex?: boolean;
    cellSize?: number;
    progress?(event: PackageProgress): void;
}): Promise<{
    manifest: DeliveryManifest;
    hash: string;
    delta: import("./m58f4c922e436.js").DeliveryDelta | undefined;
    writtenBytes: number;
    equipment: import("./mac96c8d05045.js").EquipmentIndex;
}>;
