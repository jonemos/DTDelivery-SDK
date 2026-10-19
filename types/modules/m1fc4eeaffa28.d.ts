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
/** Exact native 512 recipes; keep the historical 1024 bindings above readable. */
export declare const WEB_512_RECIPE_HASHES: {
    readonly COMPAT_RECIPE: "ca89bd30925a4027e08fd32d5c07a23b9444fcd26bc5e8eda472e5d60f68b0a3";
    readonly PBR_COMPAT_RECIPE: "27bd805c4a6cd685c6a96dc4f6c65fe05c417368c58a1a54deac88bf3939073c";
    readonly BASIC_PBR_RECIPE: "70fba6ea8cba1043c7f545db8185430969e1ee4ea086f433915f96bd834693a5";
    readonly BASIC_PBR_UV_REPAIR_RECIPE: "2e77d0ad11c7fffb53204d94a98ba8a708573df572a52f1bf1b282bdf3cbb7d5";
    readonly BASIC_PBR_NATIVE_UV_RECIPE: "bf4bfd2d89191bb4825549a5988c17120bd6ecd092973b5705a552a877393071";
    readonly BASIC_PBR_RENDER_UV_RECIPE: "0ec71d53e44c140bd6d8c284180f9f31d0c869a59bb9e14fc1911f52e126c71c";
    readonly RESILIENT_PBR_RECIPE: "c18890faf86a225142f010f2595ea9ecd9847ef89bcb5922d14a5c6dfc5828eb";
    readonly FALLBACK_PBR_RECIPE: "595162680de8a28f3e7277e247edcc26add21c405096c26c1b78c9f6df15197d";
};
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
