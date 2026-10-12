import type { QuaternionXyzw, Vec3 } from './m69ba5f67c309.js';
export type ViewportProjection = 'perspective' | 'top' | 'bottom' | 'front' | 'back' | 'left' | 'right';
export interface ViewportCameraState {
    readonly projection: ViewportProjection;
    readonly positionMeters: Vec3;
    readonly rotationXyzw: QuaternionXyzw;
    readonly focusPivotMeters: Vec3;
    readonly horizontalFovDegrees: number;
    readonly nearMeters: number;
    readonly farMeters: number;
    readonly orthographicWidthMeters: number;
}
export declare function horizontalToVerticalFov(horizontalDegrees: number, aspect: number): number;
export declare class ViewportCameraStateStore {
    private readonly states;
    private active;
    constructor();
    activeProjection(): ViewportProjection;
    read(projection?: ViewportProjection): ViewportCameraState;
    switchTo(projection: ViewportProjection): ViewportCameraState;
    update(change: Partial<Omit<ViewportCameraState, 'projection'>>, projection?: ViewportProjection): ViewportCameraState;
}
