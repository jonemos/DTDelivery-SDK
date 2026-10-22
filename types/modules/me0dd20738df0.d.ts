/** Product sun path: 06:00 sunrise, 12:00 zenith, 18:00 sunset; no location/weather model. */
export interface SunlightSettings {
    readonly enabled: boolean;
    readonly intensity: number;
    readonly temperatureKelvin: number;
    readonly timeOfDay: number;
    readonly azimuthDegrees: number;
    readonly castShadow: boolean;
    readonly shadowIntensity: number;
}
export declare const DEFAULT_SUNLIGHT: SunlightSettings;
export declare function validateSunlight(value: unknown): asserts value is SunlightSettings;
