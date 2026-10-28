export type TextureMapKind = 'baseColor' | 'normal' | 'metallicRoughness' | 'occlusion' | 'emissive' | 'specular' | 'clearcoat' | 'transmission' | 'sheen';
export interface TextureImportOptions {
    maxSize: 0 | 128 | 256 | 512 | 1024 | 2048;
    maps: readonly TextureMapKind[];
    mapMaxSizes?: Partial<Record<TextureMapKind, 128 | 256 | 512 | 1024 | 2048>>;
    compactBaseColor?: boolean;
}
export declare const DEFAULT_TEXTURE_IMPORT_OPTIONS: TextureImportOptions;
export declare const SOURCE_TEXTURE_OPTIONS: TextureImportOptions;
export declare const WEB_TEXTURE_OPTIONS: TextureImportOptions;
export declare const WEB_TEXTURE_PROFILE = "u01-web-textures-512-jpeg-png-v2";
export declare function validateTextureImportOptions(options: TextureImportOptions): void;
export declare function textureMapLimit(options: TextureImportOptions, kind: TextureMapKind): number;
/** Display-only ceiling; legacy recipes and original source image bytes stay intact. */
export declare function boundedTextureDisplayOptions(options: TextureImportOptions): TextureImportOptions;
export interface EncodedWebTexture {
    bytes: Uint8Array;
    mimeType: 'image/png' | 'image/jpeg';
}
export type WebTextureEncoder = (bytes: Uint8Array, mimeType: string, width: number, height: number, colorOnly: boolean, signal: AbortSignal) => Promise<EncodedWebTexture>;
/** Only image decode/resize/encode failures may exclude an individual mesh. */
export declare class TextureConversionError extends Error {
    constructor(cause: unknown);
}
export declare function convertWebTexture(encode: WebTextureEncoder, ...args: Parameters<WebTextureEncoder>): Promise<EncodedWebTexture>;
/** PNG preserves data channels/alpha after resize. Only opaque color-only input may use JPEG. */
export declare const encodeWebTexture: WebTextureEncoder;
export declare function resizeImportedImage(bytes: Uint8Array, mimeType: string, width: number, height: number, signal: AbortSignal): Promise<Uint8Array>;
/** Repack a verified self-contained GLB. Source bytes/report stay untouched; only the saved candidate uses this derivative. */
export declare function optimizeStaticTextures(source: Uint8Array, options: TextureImportOptions, signal: AbortSignal, resize?: typeof resizeImportedImage, encode?: WebTextureEncoder): Promise<Uint8Array>;
