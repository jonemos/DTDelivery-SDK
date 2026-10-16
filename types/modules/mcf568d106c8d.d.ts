import { type AssetReference, type AssetRegistryStorage, type PreparedAssetImport } from './m5e4e772c2f57.js';
import type { AssetReference as SceneAssetReference } from './mcec497bf55e6.js';
import { type BakedMaterialBinding } from './m5c3ea43e8157.js';
export declare const MAX_EMISSIVE_INTENSITY = 100;
export type MaterialAlphaMode = 'OPAQUE' | 'MASK' | 'BLEND';
export type TextureSemantic = 'baseColor-srgb' | 'emissive-srgb' | 'normal-linear' | 'metallicRoughness-linear' | 'occlusion-linear';
export type WebMaskOperation = 'TintMultiply' | 'ReplaceColor';
export type WebMaskChannel = 'r' | 'g' | 'b' | 'a';
export type WebMaskWrap = 'repeat' | 'clamp' | 'mirror';
export type WebMaskMinFilter = 'nearest' | 'linear' | 'linear-mipmap-linear';
export type WebMaskMagFilter = 'nearest' | 'linear';
export type TextureViewColorSpace = 'srgb' | 'linear';
export type TextureViewChannel = WebMaskChannel | 'rgb' | 'rgba';
export type MaterialTextureInput = 'baseColor' | 'normal' | 'metallic' | 'roughness' | 'occlusion' | 'emissive';
export interface PbrMaterialDocument {
    readonly schemaVersion: 1;
    readonly kind: 'PbrMaterial';
    readonly baseColorFactor: readonly [number, number, number, number];
    readonly metallic: number;
    readonly roughness: number;
    readonly emissiveFactor: readonly [number, number, number];
    readonly emissiveIntensity?: number;
    readonly normalScale: number;
    /** Optional additive field: absence preserves legacy AO intensity 1. */
    readonly occlusionStrength?: number;
    readonly alphaMode: MaterialAlphaMode;
    readonly alphaCutoff: number;
    readonly doubleSided: boolean;
    readonly textures: Readonly<Partial<Record<TextureSemantic, AssetReference>>>;
}
export interface TextureViewDocument {
    readonly texture: AssetReference;
    readonly texCoord: 0 | 1 | 2;
    readonly uvScale: readonly [number, number];
    readonly uvOffset: readonly [number, number];
    readonly colorSpace: TextureViewColorSpace;
    readonly channel: TextureViewChannel;
    readonly wrapS: WebMaskWrap;
    readonly wrapT: WebMaskWrap;
    readonly minFilter: WebMaskMinFilter;
    readonly magFilter: WebMaskMagFilter;
    readonly flipY: boolean;
    readonly normalGreen: 'preserve' | 'invert';
    /** Explicit sampling in v4; legacy views use Three defaults (true / 1). */
    readonly generateMipmaps?: boolean;
    readonly anisotropy?: number;
}
export interface WebMaskLayerDocument {
    readonly mask: TextureViewDocument & {
        readonly channel: WebMaskChannel;
    };
    readonly operation: WebMaskOperation;
    readonly tintLinear: readonly [number, number, number];
    readonly strength: number;
    readonly invert: boolean;
}
export interface WebMaskPbrMaterialDocument {
    readonly schemaVersion: 3 | 4 | 5 | 6 | 7;
    readonly kind: 'WebMaskPbrMaterial';
    readonly mappingProfileId: string;
    readonly unlit?: boolean;
    /** v6 preserves explicit dielectric IOR and bound MASK bakes; older readers reject it. */
    readonly ior?: number;
    readonly baseColorFactor: readonly [number, number, number, number];
    readonly metallic: number;
    readonly roughness: number;
    readonly emissiveFactor: readonly [number, number, number];
    readonly emissiveIntensity?: number;
    readonly normalScale: number;
    /** Optional additive field: absence preserves legacy AO intensity 1. */
    readonly occlusionStrength?: number;
    readonly alphaMode: MaterialAlphaMode;
    readonly alphaCutoff: number;
    readonly doubleSided: boolean;
    readonly textureViews: Readonly<Partial<Record<MaterialTextureInput, TextureViewDocument>>>;
    readonly maskLayers: readonly WebMaskLayerDocument[];
    /** Versioned, measured vertex-ID Atlas formula; never interpreted as sequential RGBA layers. */
    readonly vertexAtlas?: VertexAtlasDocument;
    readonly bakeBinding?: BakedMaterialBinding;
}
export declare const VERTEX_ATLAS_PROFILE = "ue-painter-vertex-atlas-v1";
export declare const KIND_ATLAS_PROFILE = "ue-kind-single-atlas-v1";
export declare const MULTI_KIND_ATLAS_PROFILE = "ue-kind-multi-atlas-v1";
export declare const SCQO_KIND_ATLAS_PROFILE = "ue-scqo-kind-atlas-v1";
export declare const SCQO_PAINTER_ATLAS_PROFILE = "ue-scqo-painter-atlas-v1";
export declare const KIND_ATLAS_STRUCTURE = "a22feb3d2ddaa4f970c4edc785b1dbf6687c0426582245efcf7c9f007bcb4acc";
export declare const MAX_VERTEX_ATLAS_COLORS = 32;
export declare const VERTEX_ATLAS_GRAPH = "a6035e7dab82c73de6057006bbc3e8f496feec6f6328ed76c4930bdfaa20c899";
export interface VertexAtlasDocument {
    readonly version: 1 | 2 | 3 | 4;
    /** v3/v4 preserve SmartCube's valid-ID/preview fallback and enabled kinds. */
    readonly kindIdFallback?: {
        readonly previewKind: number;
        readonly useVertexMaterialIds: boolean;
        readonly enabled: readonly boolean[];
    };
    /** Versions 2/4 preserve measured Painter RGB detail; version 1 uses luminance. */
    readonly colorDetailMode?: 'color';
    /** Single-kind source also gates roughness and metallic by the vertex ID. */
    readonly surfaceGated?: true;
    readonly surfaces?: readonly {
        readonly roughness: number;
        readonly metallic: number;
    }[];
    readonly colors: readonly (readonly [number, number, number])[];
    readonly masks: readonly TextureViewDocument[];
    readonly colorDetail: number;
    readonly roughnessOffset: number;
    readonly metallicReduction: number;
}
export type MaterialDocument = PbrMaterialDocument | WebMaskPbrMaterialDocument;
export declare const DEFAULT_PBR_MATERIAL: PbrMaterialDocument;
export declare function validatePbrMaterial(value: unknown): PbrMaterialDocument;
export declare function validateWebMaskPbrMaterial(value: unknown): WebMaskPbrMaterialDocument;
export declare function validateVertexAtlas(value: unknown): VertexAtlasDocument;
export declare function validateMaterialDocument(value: unknown): MaterialDocument;
export declare function createMaterialAsset(storage: AssetRegistryStorage, name: string, createId?: () => string, material?: MaterialDocument, folderId?: string | null): Promise<PreparedAssetImport>;
export declare function createTextureAsset(storage: AssetRegistryStorage, name: string, mimeType: 'image/png' | 'image/jpeg' | 'image/webp', bytes: Uint8Array, createId?: () => string): Promise<PreparedAssetImport>;
export declare function loadMaterialAsset(storage: AssetRegistryStorage, reference: string | SceneAssetReference): Promise<MaterialDocument>;
/** String IDs are authoring reads of the current revision; render references retain their revision policy. */
export declare function materialFromSnapshot(snapshot: import('./m5e4e772c2f57.js').AssetRegistrySnapshot, reference: string | SceneAssetReference): MaterialDocument;
export declare function editMaterialAsset(storage: AssetRegistryStorage, assetId: string, material: MaterialDocument, createId?: () => string, expectedRevisionId?: string): Promise<string>;
export declare function textureDependencies(value: MaterialDocument): readonly AssetReference[];
export declare function encodeMaterialDocument(value: MaterialDocument): Uint8Array;
