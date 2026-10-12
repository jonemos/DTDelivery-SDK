import { Texture, type Object3D } from 'three';
import { type TextureImportOptions, type TextureMapKind } from './mae043aea4362.js';
export declare const PREVIEW_TEXTURE_BUDGET: number;
export declare const PREVIEW_TEXTURE_BUDGET_OPTIONS: number[];
export declare function validatePreviewTextureBudget(bytes: number): void;
export interface TextureAppearanceEstimate {
    readonly decodedBytes: number;
    readonly mipViewBytes: number;
    readonly reservedBytes: number;
    readonly imageCount: number;
    readonly textureViewCount: number;
}
export interface TextureAppearanceLayout {
    readonly dimensions: readonly {
        width: number;
        height: number;
    }[];
    readonly uses: readonly {
        source: number;
        kind: TextureMapKind;
    }[];
}
/** Validate all embedded image dimensions and every supported material texture use before decoding. */
export declare function inspectPreviewTextureLayout(bytes: Uint8Array): TextureAppearanceLayout;
/** Same rounding, retained images and slot reservations as optimization + admission; no image decode. */
export declare function estimatePreviewTextureLayout(layout: TextureAppearanceLayout, options?: TextureImportOptions): TextureAppearanceEstimate;
export declare function inspectPreviewAppearance(bytes: Uint8Array): TextureAppearanceEstimate;
/** Owned template only: instances must release their leases before this is called. */
export declare function disposePreviewAppearance(roots: readonly Object3D[], extraTextures?: readonly Texture[]): void;
export declare function loadPreviewAppearance(bytes: Uint8Array, budgetBytes?: number, applyPayloadBasis?: boolean): Promise<Object3D>;
