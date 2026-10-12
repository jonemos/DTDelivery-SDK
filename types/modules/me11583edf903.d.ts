import type { DeliveryManifest } from './m58f4c922e436.js';
export interface SpatialStreamingOptions {
    loadDistance: number;
    unloadDistance: number;
    unloadDelayMs: number;
}
export declare const DEFAULT_SPATIAL_STREAMING: Readonly<SpatialStreamingOptions>;
export declare function validateSpatialStreaming(options: SpatialStreamingOptions): SpatialStreamingOptions;
export interface SpatialResidentState {
    id: string;
    wanted: boolean;
    distance: number | null;
    reason: 'near' | 'retained' | 'protected' | 'unknown-bounds' | 'deferred' | 'disabled';
}
/** Transient residency of complete projection units: original levels or validated Actor cells. Byte chunks are not spatial units. */
export declare class SpatialResidency {
    readonly options: SpatialStreamingOptions;
    private wanted;
    private outside;
    private lastTime;
    private entries;
    constructor(manifest: DeliveryManifest, options: SpatialStreamingOptions, resident?: readonly string[]);
    plan(position: readonly number[], time: number, protectedIds?: ReadonlySet<string>): {
        states: SpatialResidentState[];
        priority: string[];
    };
}
