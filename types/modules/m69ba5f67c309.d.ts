export type Vec3 = readonly [x: number, y: number, z: number];
export type QuaternionXyzw = readonly [x: number, y: number, z: number, w: number];
export interface Transform {
    readonly positionMeters: Vec3;
    readonly rotationXyzw: QuaternionXyzw;
    readonly scale: Vec3;
}
export declare const IDENTITY_TRANSFORM: Transform;
