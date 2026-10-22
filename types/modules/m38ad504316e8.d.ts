import { Scene, type WebGLRenderer } from 'three';
import { type WebEffects } from './m4f9bb8de04da.js';
export declare function sampleWebParticles(settings: WebEffects['particles'], time: number, output?: Float32Array): Float32Array;
export declare class WebEffectsProjection {
    private readonly scene;
    private readonly renderer;
    private signature;
    private settings;
    private points;
    private texture;
    private readonly originalFog;
    private readonly originalToneMapping;
    private readonly originalExposure;
    private sunlight;
    constructor(scene: Scene, renderer: Pick<WebGLRenderer, 'toneMapping' | 'toneMappingExposure'>);
    get animated(): boolean;
    configure(value: WebEffects | undefined): void;
    sample(time: number, visible?: boolean): void;
    private clearParticles;
    dispose(): void;
}
