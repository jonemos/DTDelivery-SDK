import { type AssetRegistrySnapshot } from './m5e4e772c2f57.js';
import { type WebTextureEncoder } from './mae043aea4362.js';
export interface CandidateSkeletalBinding {
    skeletonAssetId: string;
    bindingSignature: string;
    hasAnimation: boolean;
    animationAssetId?: string;
    rate?: number;
    initialTimeSeconds?: number;
    loop?: 'once' | 'repeat';
    sourcePlaying?: boolean;
    referencePoseOnly?: true;
    unsupportedAnimation?: string;
    animationMode?: string;
    sourceAnimationClassPath?: string;
}
export interface CandidateAnimationBinding {
    sourceAnimationAssetId: string;
    animationIndex: number;
}
export interface CandidateSkeletalMaterialBindings {
    version: 1;
    entries: {
        primitiveIndex: number;
        sourceMaterialAssetId: string;
        materialIndex: number;
    }[];
}
export interface CandidateSkeletalStage extends AssetRegistrySnapshot {
    materialFailures: {
        primitiveIndex: number;
        sourceMaterialAssetId: string;
        reason: string;
    }[];
}
export declare const candidateAnimationAssetId: (sourceId: string, meshId: string) => string;
export declare function readCandidateSkeletalBinding(value: unknown): CandidateSkeletalBinding;
export declare function candidateSkeletalComponent(projectId: string, snapshotId: string, source: {
    id: string;
    sourcePath: string;
    meshAssetId: string | null;
    skeletalBinding?: CandidateSkeletalBinding;
}): {
    type: "SkeletalMesh";
    meshAsset: {
        kind: "asset";
        assetId: string;
        revisionPolicy: "pinned";
        revisionId: string;
    };
    materialOverrides: never[];
    skinBinding: {
        skeletonAsset: {
            kind: "asset";
            assetId: string;
            revisionPolicy: "live";
        };
        bindingSignature: string;
        skinIndex: number;
    };
    playback: {
        clipAsset: {
            kind: "asset";
            assetId: string;
            revisionPolicy: "live";
        } | null;
        rate: number;
        initialTimeSeconds: number;
        loop: "repeat" | "once";
        playing: false;
        rootMotionMode: "in_bone" | null;
    };
    sourceBinding: {
        unavailableAnimation?: {
            profile: "reference-pose-v1";
            mode: string;
            classPath: string;
            reason: string;
        } | undefined;
        packageId: string;
        sourceProjectId: string;
        sourceSnapshotId: string;
        sourceComponentId: string;
        sourceComponentKey: string;
        sourceMeshAssetId: string;
        sourceSkeletonAssetId: string;
        sourceAnimationAssetId: string | null;
    };
};
/** Preserve the actual skin GLB. Material-only views never enter storage as geometry. */
export declare function stageCandidateSkeletalMesh(data: Uint8Array, sourceAssets: readonly Record<string, unknown>[], payload: {
    assetId: string;
    materialSlotIndices?: number[];
    evaluatedMaterialAssetIds?: string[];
    animationBindings?: CandidateAnimationBinding[];
    skeletalMaterialBindings?: CandidateSkeletalMaterialBindings;
}, signal?: AbortSignal, encode?: WebTextureEncoder, materials?: boolean): Promise<CandidateSkeletalStage>;
