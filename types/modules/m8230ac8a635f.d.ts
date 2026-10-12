import type { AssetReference, SkeletalMeshComponent, SkeletalRootMotionMode } from './mcec497bf55e6.js';
import { type AssetRegistrySnapshot, type AssetRegistryStorage } from './m5e4e772c2f57.js';
import { type SkeletalSourceMotionKind, type SupportedRootMotionStrategy } from './m246e7da4a2a2.js';
export interface ResolvedAnimationClipBinding {
    readonly animationAssetId: string;
    readonly animationRevisionId: string;
    readonly animationBlobKeys: readonly string[];
    readonly clipIndex: number;
    readonly clipName: string;
    readonly durationSeconds: number;
    readonly rootMotionMode: SkeletalRootMotionMode;
    readonly sourceMotionKind: SkeletalSourceMotionKind;
    readonly rootMotionStrategy: SupportedRootMotionStrategy;
    readonly appliesActorMotion: false;
    readonly targetMeshAssetId: string;
    readonly bindingSignature: string;
}
export type AnimationClipResolver = (component: SkeletalMeshComponent) => Promise<ResolvedAnimationClipBinding | null>;
export declare function createAnimationClipResolver(storage: AssetRegistryStorage): AnimationClipResolver;
export declare function resolveAnimationClipBinding(snapshot: AssetRegistrySnapshot, component: SkeletalMeshComponent, reference: AssetReference): ResolvedAnimationClipBinding;
