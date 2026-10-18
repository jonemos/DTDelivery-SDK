import type { BakedMaterialBinding } from './m5c3ea43e8157.js';
import type { CandidateFile } from './m023a36aa6638.js';
export declare const COMPATIBILITY_RECIPE_HASH = "9b9c18a4927f92c7eeb886a15a62e39984016dd9678b3a4e601157ab2ae1436b";
export declare const PBR_COMPATIBILITY_RECIPE_HASH = "d784dd66bd2bf499d9122f2c06ab4be484622f2ebad8e7b783bc737c155c6c66";
export declare const BASIC_PBR_RECIPE_HASH = "45e70032ab631bcc5d891942e86444a87e9fc33621ef610c2b72228dac6e4d85";
export declare const BASIC_PBR_UV_REPAIR_RECIPE_HASH = "246776ee8a56b227954ed0b4d8991a82f24d6f0df2cd3da99cd82acf066e5b85";
export declare const BASIC_PBR_NATIVE_UV_RECIPE_HASH = "7c4bb176af1f59985d31be12b5ef215230fb45a85184ab9c269ffb259d7cd23e";
export declare const BASIC_PBR_RENDER_UV_RECIPE_HASH = "dfac617c30b2a6e6ee3ad58dd2bcd773ab5e65f2f33c601ce2debdd660b42068";
export declare const RESILIENT_PBR_RECIPE_HASH = "0ac9026ea91ca259115bffe8c63650648a76446bc71893b50220d0c04b48e87c";
export declare const FALLBACK_PBR_RECIPE_HASH = "7449fdcf776fb91e6dc2283565e4d42ef53251c21c242968bf8e37f0bce0c5ed";
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
export declare function inspectCompatibilityBake(value: unknown, sourceAssets: ReadonlyMap<string, Record<string, unknown>>, components: readonly Record<string, unknown>[], files: ReadonlyMap<string, CandidateFile>, exportedMaterialIds: ReadonlySet<string>, meshSlots?: ReadonlyMap<string, readonly number[]>): CompatibilityBake;
/** Independent web admission gate for generated UVs, even if a native exporter reports success. */
export declare function validateCompatibilityBakePayload(bytes: Uint8Array, preserveAlpha?: boolean, basicOnly?: boolean): void;
