/** Editor display preferences only; never an Asset quality or LOD setting. */
export declare enum RenderQualityPreset {
    VIEWPORT = "VIEWPORT",
    ENHANCED = "ENHANCED",
    NORMAL = "NORMAL",
    HIGH = "HIGH",
    ULTRA = "ULTRA"
}
export interface ScreenSpaceLightingSettings {
    readonly maxPixels: number;
    readonly maxDimension: number;
    readonly giSamples: number;
    readonly raySteps: number;
    readonly giIntensity: number;
    readonly reflectionIntensity: number;
    readonly giDistance: number;
    readonly reflectionDistance: number;
}
export interface RenderQualitySettings {
    readonly label: string;
    readonly environmentSize: number;
    readonly exposureMultiplier: number;
    readonly shadowSize: number;
    readonly smaa: boolean;
    readonly maxPostProcessPixels: number;
    readonly ao: {
        readonly resolutionScale: number;
        readonly samples: number;
        readonly denoiseSamples: number;
        readonly radius: number;
        readonly intensity: number;
    } | null;
    readonly bloom: {
        readonly strength: number;
        readonly radius: number;
        readonly threshold: number;
    } | null;
    readonly screenSpaceLighting: ScreenSpaceLightingSettings | null;
}
export declare const RENDER_QUALITY_SETTINGS: Readonly<Record<RenderQualityPreset, RenderQualitySettings>>;
export declare const RENDER_QUALITY_PRESETS: RenderQualityPreset[];
export declare const RENDER_QUALITY_LIMITS: {
    readonly maxPostProcessDimension: 4096;
    readonly maxShadowLights: 4;
    readonly maxPointShadowSize: 1024;
};
export declare function isRenderQualityPreset(value: unknown): value is RenderQualityPreset;
export declare function postProcessSize(width: number, height: number, pixelRatio: number, pixelBudget: number, maxDimension: number): readonly [number, number];
