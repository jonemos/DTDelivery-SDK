import type { LevelMount, LevelSourceData } from './mf0f7647466ef.js';
export interface DeliveryBounds {
    min: [number, number, number];
    max: [number, number, number];
}
/** Cook actual render geometry, including payload calibration and instances; never infer bounds from Actor origins. */
export declare function cookDeliveryBounds(source: LevelSourceData, mount: LevelMount, signal: AbortSignal): Promise<DeliveryBounds | null>;
export declare function cookDeliverySpatial(source: LevelSourceData, mount: LevelMount, signal: AbortSignal): Promise<{
    bounds: DeliveryBounds | null;
    actors: Map<string, DeliveryBounds | null>;
}>;
