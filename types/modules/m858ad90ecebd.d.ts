import type { SkeletalAnimationAsset, SkeletalAnimationInstance } from './mabd3fd64764e.js';
export interface AnimationPlaybackKey {
    readonly worldSessionId: string;
    readonly componentId: string;
}
export interface AnimationPlaybackOptions {
    readonly clipIndex?: number;
    readonly rate?: number;
    readonly initialTimeSeconds?: number;
    readonly loop?: 'once' | 'repeat';
    readonly playing?: boolean;
    readonly tintLinear?: readonly [number, number, number];
}
export interface AnimationPlaybackSnapshot {
    readonly clipIndex: number;
    readonly rate: number;
    readonly initialTimeSeconds: number;
    readonly timeSeconds: number;
    readonly loop: 'once' | 'repeat';
    readonly playing: boolean;
    readonly ended: boolean;
    readonly tintLinear: readonly [number, number, number];
}
export declare class AnimationPlaybackService {
    private readonly asset;
    private readonly records;
    private disposed;
    constructor(asset: SkeletalAnimationAsset);
    create(key: AnimationPlaybackKey, options?: AnimationPlaybackOptions): SkeletalAnimationInstance;
    clone(sourceKey: AnimationPlaybackKey, targetKey: AnimationPlaybackKey): SkeletalAnimationInstance;
    play(key: AnimationPlaybackKey): void;
    pause(key: AnimationPlaybackKey): void;
    stop(key: AnimationPlaybackKey): void;
    seek(key: AnimationPlaybackKey, timeSeconds: number): void;
    setRate(key: AnimationPlaybackKey, rate: number): void;
    setLoop(key: AnimationPlaybackKey, loop: 'once' | 'repeat'): void;
    setTint(key: AnimationPlaybackKey, tintLinear: readonly [number, number, number]): void;
    advanceWorld(worldSessionId: string, deltaSeconds: number): void;
    instance(key: AnimationPlaybackKey): SkeletalAnimationInstance;
    snapshot(key: AnimationPlaybackKey): AnimationPlaybackSnapshot;
    delete(key: AnimationPlaybackKey): boolean;
    get size(): number;
    dispose(): void;
    private require;
    private requireActive;
}
