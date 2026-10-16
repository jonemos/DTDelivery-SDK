import type { BakedMaterialBinding } from './m5c3ea43e8157.js';
import type { CandidateFile } from './m023a36aa6638.js';
export declare const COMPATIBILITY_RECIPE_HASH = "9b9c18a4927f92c7eeb886a15a62e39984016dd9678b3a4e601157ab2ae1436b";
export declare const PBR_COMPATIBILITY_RECIPE_HASH = "d784dd66bd2bf499d9122f2c06ab4be484622f2ebad8e7b783bc737c155c6c66";
export declare const BASIC_PBR_RECIPE_HASH = "45e70032ab631bcc5d891942e86444a87e9fc33621ef610c2b72228dac6e4d85";
export interface CompatibilityBake {
    version: 1 | 2 | 3;
    policy: 'bake-unsupported-opaque-v1' | 'bake-static-pbr-alpha-v2' | 'basic-pbr-v1';
    unsupported: {
        materialId: string;
        reason: string;
    }[];
    derived: {
        meshId: string;
        materialId: string;
        sourceSlotIndex: number;
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
export declare function validateCompatibilityBakePayload(bytes: Uint8Array, preserveAlpha?: boolean, basicOnly?: boolean): void;
