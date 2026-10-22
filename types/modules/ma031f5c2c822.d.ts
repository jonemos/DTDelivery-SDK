import type { Camera, Scene, WebGLRenderer } from 'three';
import { RenderQualityPreset } from './mcca2b868acda.js';
export interface RenderQualityViewOptions {
    readonly antialias?: boolean;
    readonly environmentLighting?: boolean;
    readonly environmentIntensity?: number;
    /** Opt-in light inventory cache; caller must bump after scene light add/remove/reparent. */
    readonly shadowLightGeneration?: number;
}
export interface RenderQualityBackend {
    render(camera: Camera, width: number, height: number, directRender: () => void, options?: RenderQualityViewOptions): void;
    dispose(): void;
}
export interface RenderQualityStatus {
    readonly requested: RenderQualityPreset;
    readonly active: RenderQualityPreset;
    readonly state: 'ready' | 'preparing' | 'failed';
    readonly message: string;
}
type Loader = (renderer: WebGLRenderer, scene: Scene, preset: RenderQualityPreset) => Promise<RenderQualityBackend>;
/** Does not recreate a renderer, scene, Asset cache or editor camera. No FPS policy. */
export declare class RenderQualityController {
    private readonly renderer;
    private readonly scene;
    private readonly invalidate;
    private readonly report;
    private readonly load;
    private readonly shadows;
    private backend;
    private generation;
    private disposed;
    private previewEnvironment;
    private environmentError;
    private antialias;
    private depthView;
    private status;
    constructor(renderer: WebGLRenderer, scene: Scene, invalidate: () => void, report: (status: RenderQualityStatus) => void, load?: Loader);
    snapshot(): RenderQualityStatus;
    apply(preset: RenderQualityPreset): Promise<void>;
    render(camera: Camera, width: number, height: number, lit: boolean, directRender: () => void, options?: RenderQualityViewOptions): void;
    dispose(): void;
    private publish;
}
export declare function applyRenderQualityPreset(controller: RenderQualityController, preset: RenderQualityPreset): Promise<void>;
export {};
