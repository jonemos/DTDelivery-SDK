import { MeshStandardMaterial, type Mesh, type Texture } from 'three';
import type { AssetReference, MaterialTintOverride } from './mcec497bf55e6.js';
import { type MaterialDocument, type TextureSemantic, type TextureViewDocument, type WebMaskPbrMaterialDocument } from './mcf568d106c8d.js';
import type { AssetRegistryStorage } from './m5e4e772c2f57.js';
export interface MaterialInstanceOverrides {
    readonly tintOverrides: readonly MaterialTintOverride[];
}
export type MaterialResolver = (reference: AssetReference, overrides?: MaterialInstanceOverrides) => Promise<MeshStandardMaterial>;
export type TextureResolver = (reference: import('./m5e4e772c2f57.js').AssetReference, view?: TextureViewDocument) => Promise<Texture>;
/** Includes closure-owned mask/atlas textures that are not exposed as standard material maps. */
export declare function materialTextureResources(material: MeshStandardMaterial): ReadonlySet<Texture>;
export declare function createMaterialResolver(storage: AssetRegistryStorage, resolveTexture?: TextureResolver, options?: {
    textureMaxSize?: number;
    textureMapLimits?: ReadonlyMap<string, number>;
    transformDocument?: (document: MaterialDocument) => MaterialDocument;
    frozenInstancing?: boolean;
}): MaterialResolver;
export declare function applyMaterialTintOverrides(layers: WebMaskPbrMaterialDocument['maskLayers'], overrides: readonly MaterialTintOverride[]): WebMaskPbrMaterialDocument['maskLayers'];
export declare function createThreeMaterial(document: MaterialDocument): MeshStandardMaterial;
export declare function applyResolvedMaterial(mesh: Mesh, material: MeshStandardMaterial): void;
export declare function applyTextureSemantic(texture: Texture, semantic: TextureSemantic): void;
export declare function applyDirectXNormalConvention(material: MeshStandardMaterial, enabled: boolean): void;
