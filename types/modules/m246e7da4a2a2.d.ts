import type { SkeletalRootMotionMode } from './mcec497bf55e6.js';
export type SkeletalSourceMotionKind = 'ordinary_bones' | 'baked_bones';
export type SupportedRootMotionStrategy = 'bone_pose_only' | 'source_verified_in_place';
export interface RootMotionPolicyInput {
    readonly motionKind: SkeletalSourceMotionKind;
    readonly rootMotionMode: SkeletalRootMotionMode;
    readonly actorMotionPayload: unknown;
}
export interface SupportedRootMotionPolicy {
    readonly motionKind: SkeletalSourceMotionKind;
    readonly rootMotionMode: Exclude<SkeletalRootMotionMode, 'baked_actor_track'>;
    readonly strategy: SupportedRootMotionStrategy;
    readonly appliesActorMotion: false;
}
export declare class RootMotionPolicyError extends Error {
    constructor(message: string);
}
/**
 * Resolves the exact root-motion path supported by the current bone-pose evaluator.
 * Actor trajectories are deliberately excluded until the physics-free snapshot
 * adapter can apply an absolute transform without competing with gameplay movement.
 */
export declare function resolveRootMotionPolicy(input: RootMotionPolicyInput): SupportedRootMotionPolicy;
