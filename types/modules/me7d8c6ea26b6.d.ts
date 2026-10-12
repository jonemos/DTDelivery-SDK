import type { SkeletalAnimationAsset, SkeletalAnimationInstance } from './mabd3fd64764e.js';
import { type AnimationPlaybackKey, type AnimationPlaybackOptions, type AnimationPlaybackSnapshot } from './m858ad90ecebd.js';
export type AnimationPlaybackWorldKind = 'asset-preview' | 'gameplay-runtime';
export type AnimationPlaybackWorldState = 'stopped' | 'running' | 'paused';
export interface AnimationWorldPlaybackHandle {
    readonly key: AnimationPlaybackKey;
    readonly instance: SkeletalAnimationInstance;
    snapshot(): AnimationPlaybackSnapshot;
    play(): void;
    pause(): void;
    seek(timeSeconds: number): void;
    stop(): void;
    dispose(): void;
}
export declare class AnimationPlaybackWorld {
    readonly kind: AnimationPlaybackWorldKind;
    readonly worldSessionId: string;
    state: AnimationPlaybackWorldState;
    timeSeconds: number;
    tickCount: number;
    private readonly records;
    private lastClockId;
    constructor(kind: AnimationPlaybackWorldKind, worldSessionId: string);
    start(): void;
    create(asset: SkeletalAnimationAsset, componentId: string, options?: AnimationPlaybackOptions): AnimationWorldPlaybackHandle;
    advanceRenderFrame(frameId: number, deltaSeconds: number): boolean;
    advanceSimulationTick(tickId: number, deltaSeconds: number): boolean;
    stepRenderFrame(frameId: number, deltaSeconds?: number): boolean;
    stepSimulation(tickId: number, deltaSeconds?: number): boolean;
    pause(): void;
    resume(): void;
    stop(): void;
    get size(): number;
    private advance;
    private requireLive;
}
