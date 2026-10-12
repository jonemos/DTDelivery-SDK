/** Product lighting controls, not measured Unreal defaults. No texture asset changes. */
export interface EnvironmentLightingSettings {
    readonly enabled: boolean;
    readonly intensity: number;
}
export declare const DEFAULT_ENVIRONMENT_LIGHTING: EnvironmentLightingSettings;
export declare function isEnvironmentIntensity(value: unknown): value is number;
export declare function validateEnvironmentLighting(value: unknown): asserts value is EnvironmentLightingSettings;
