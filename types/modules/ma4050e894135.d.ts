import { RenderQualityPreset } from './mcca2b868acda.js';
import { type TextureImportOptions } from './mae043aea4362.js';
import { type EnvironmentLightingSettings } from './m2dcda8eef198.js';
/** Durable per-level execution settings. Editor viewport preferences are independent. */
export interface BuildSettings {
    readonly version: 1;
    readonly renderQuality: RenderQualityPreset;
    readonly environmentLighting?: EnvironmentLightingSettings;
    readonly platform: 'pc' | 'tablet' | 'mobile';
    readonly textures: TextureImportOptions;
    readonly resolution: {
        readonly mode: 'fit' | 'fixed';
        readonly width: number;
        readonly height: number;
        readonly scale: number;
    };
    readonly playerStartActorId: string | null;
    readonly showInstructions: boolean;
    readonly showFullscreen: boolean;
}
export declare const BUILD_RESOLUTIONS: readonly [readonly [1280, 720], readonly [1920, 1080], readonly [2560, 1440], readonly [3840, 2160]];
export declare const DEFAULT_BUILD_SETTINGS: BuildSettings;
export declare function validateBuildSettings(value: unknown): asserts value is BuildSettings;
export declare function buildSettings(value?: BuildSettings): BuildSettings & {
    readonly environmentLighting: EnvironmentLightingSettings;
};
export declare function playRenderSize(width: number, height: number, pixelRatio: number, resolution: BuildSettings['resolution']): number;
