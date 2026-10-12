import type { CompositionObject } from './m2c49f1915315.js';
import type { DeliveryBounds } from './m9c76b5194793.js';
import { type DeliveryCells } from './mc4aa5b373d3b.js';
import { type CompositionDocument, type LevelMount } from './mf0f7647466ef.js';
import { type AddonOverride } from './mb2c6243e72dc.js';
export declare const CHUNK_BYTES: number;
export declare const DELIVERY_CONTRACT = "dt-static-composition-1";
export declare const DELIVERY_OBJECT_CONTRACT = "dt-static-composition-2";
export declare const DELIVERY_SPATIAL_CONTRACT = "dt-static-composition-3";
export declare const DELIVERY_CELL_CONTRACT = "dt-static-composition-4";
export declare const DELIVERY_ADDON_CONTRACT = "dt-static-composition-5";
export declare const DELIVERY_LIMITS: {
    manifest: number;
    file: number;
    files: number;
    total: number;
};
export interface Chunk {
    hash: string;
    bytes: number;
}
export interface ChunkFile extends Chunk {
    chunks: Chunk[];
}
export interface DeliveryLevel {
    hash: string;
    actors: number;
    bytes: number;
}
export interface DeliveryMount extends Omit<LevelMount, 'pin'> {
    level: string;
}
export interface DeliveryManifest {
    kind: 'dt-chunks';
    version: 1 | 2 | 3 | 4 | 5;
    contract: typeof DELIVERY_CONTRACT | typeof DELIVERY_OBJECT_CONTRACT | typeof DELIVERY_SPATIAL_CONTRACT | typeof DELIVERY_CELL_CONTRACT | typeof DELIVERY_ADDON_CONTRACT;
    objects?: readonly CompositionObject[];
    spatial?: {
        level: string;
        bounds: DeliveryBounds | null;
    }[];
    cells?: DeliveryCells[];
    addonBundle?: string | null;
    addonOverrides?: readonly AddonOverride[];
    chunkBytes: typeof CHUNK_BYTES;
    id: string;
    name: string;
    levels: DeliveryLevel[];
    mounts: DeliveryMount[];
    files: ChunkFile[];
}
export interface DeliveryDelta {
    kind: 'dt-chunks-delta';
    version: 1;
    base: string;
    target: string;
    added: string[];
    reused: string[];
    removed: string[];
}
export declare const isHash: (value: unknown) => value is string;
export declare function canonicalBytes(value: unknown): Uint8Array;
export declare const objectPath: (hash: string) => string;
export declare const releasePath: (hash: string) => string;
export declare function validateDelivery(input: unknown): DeliveryManifest;
export declare function compositionForDelivery(m: DeliveryManifest): CompositionDocument;
export declare function deliveryChunks(m: DeliveryManifest): Map<string, number>;
export declare function deliveryDelta(base: DeliveryManifest, target: DeliveryManifest): Promise<DeliveryDelta>;
export declare function validateDelta(delta: unknown, base: DeliveryManifest, target: DeliveryManifest): Promise<DeliveryDelta>;
