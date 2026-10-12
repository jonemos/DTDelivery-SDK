import type { BakedMaterialBinding } from './m5c3ea43e8157.js';
import type { CandidateFile } from './m023a36aa6638.js';
export declare const COMPATIBILITY_RECIPE_HASH = "9b9c18a4927f92c7eeb886a15a62e39984016dd9678b3a4e601157ab2ae1436b";
export interface CompatibilityBake {
    version: 1;
    policy: 'bake-unsupported-opaque-v1';
    unsupported: {
        materialId: string;
        reason: string;
    }[];
    derived: {
        meshId: string;
        materialId: string;
        sourceSlotIndex: 0;
        materialPath: string;
        slotName: string;
        path: string;
        sha256: string;
        byteLength: number;
        inputs: Omit<BakedMaterialBinding['inputs'], 'bakedPayloadHash'>;
    }[];
}
/** Fixed native recipe and inventory identities only. Descriptors cannot redirect file transfers. */
export declare function inspectCompatibilityBake(value: unknown, sourceAssets: ReadonlyMap<string, Record<string, unknown>>, components: readonly Record<string, unknown>[], files: ReadonlyMap<string, CandidateFile>, exportedMaterialIds: ReadonlySet<string>): CompatibilityBake;
/** Independent web admission gate for generated UVs, even if a native exporter reports success. */
export declare function validateCompatibilityBakePayload(bytes: Uint8Array): void;
