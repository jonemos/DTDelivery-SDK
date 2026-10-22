import type { Vec3 } from './m69ba5f67c309.js';
import { type SunlightSettings } from './me0dd20738df0.js';
export interface WebEffects {
    readonly schemaVersion: 1;
    readonly toneMapping: 'none' | 'aces';
    readonly exposure: number;
    readonly sunlight?: SunlightSettings;
    readonly antialias?: boolean;
    readonly fog: {
        readonly enabled: boolean;
        readonly color: number;
        readonly nearMeters: number;
        readonly farMeters: number;
    };
    readonly particles: {
        readonly enabled: boolean;
        readonly style: 'steam' | 'sparks' | 'beacon';
        readonly color: number;
        readonly count: number;
        readonly originMeters: Vec3;
        readonly spreadMeters: number;
        readonly speedMetersPerSecond: number;
        readonly lifetimeSeconds: number;
        readonly sizeMeters: number;
        readonly seed: number;
    };
}
export declare const DEFAULT_WEB_EFFECTS: WebEffects;
export declare function validateWebEffects(value: unknown): asserts value is WebEffects;
