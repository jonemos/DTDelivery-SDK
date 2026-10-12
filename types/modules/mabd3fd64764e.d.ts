import { AnimationMixer, SkinnedMesh, type AnimationClip, type Object3D } from 'three';
export interface SkeletalAnimationGlbMetadata {
    readonly profile: 'self-contained-skeletal-animation-glb-v1';
    readonly gltfVersion: '2.0';
    readonly skinCount: 1;
    readonly skinnedMeshNodeCount: number;
    readonly jointCount: number;
    readonly jointNodeIndices: readonly number[];
    readonly inverseBindMatrices: readonly (readonly number[])[];
    readonly vertexCount: number;
    readonly payloadMaxInfluences: number;
    readonly maxWeightSumError: number;
    readonly animationCount: number;
    readonly animationNames: readonly string[];
}
export interface ThreeSkinningPathEvidence {
    readonly maxInfluences: 4;
    readonly components: readonly ['x', 'y', 'z', 'w'];
    readonly rendererPath: 'ShaderChunk.skinbase_vertex+skinning_vertex';
}
export interface SkeletalDeformationSampleRequest {
    readonly animationIndex: number;
    readonly timeSeconds: number;
    readonly vertexIndices: readonly number[];
}
export interface SkeletalAnimationInstance {
    readonly root: Object3D;
    readonly mixer: AnimationMixer;
    readonly clips: readonly AnimationClip[];
    readonly skinnedMeshes: readonly SkinnedMesh[];
    dispose(): void;
}
export interface SkeletalAnimationAsset {
    readonly metadata: SkeletalAnimationGlbMetadata;
    instantiate(): SkeletalAnimationInstance;
    dispose(): void;
}
export declare function importSkeletalAnimationGlb(bytes: Uint8Array): Promise<SkeletalAnimationAsset>;
export declare function inspectInstalledThreeSkinningPath(): ThreeSkinningPathEvidence;
export declare function evaluateSkeletalDeformation(bytes: Uint8Array, request: SkeletalDeformationSampleRequest): Promise<readonly (readonly [number, number, number])[]>;
export declare function validateSkeletalAnimationGlb(bytes: Uint8Array): SkeletalAnimationGlbMetadata;
