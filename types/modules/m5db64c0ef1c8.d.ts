import { Object3D } from 'three';
import type { SkeletalAnimationInstance } from './mabd3fd64764e.js';
export interface SkeletalAttachmentTransform {
    readonly position: readonly [number, number, number];
    readonly rotation: readonly [number, number, number, number];
    readonly scale: readonly [number, number, number];
}
export interface SkeletalAttachmentProfile {
    readonly skeletonAssetId: string;
    readonly sourceSkeletonAssetId: string;
    readonly bindingSignature: string;
    readonly skinIndex: number;
    readonly jointMappings: readonly {
        readonly sourceBoneId: string;
        readonly payloadNodeIndex: number;
    }[];
    readonly bones: readonly {
        readonly id: string;
        readonly parentId: string | null;
        readonly restLocal: SkeletalAttachmentTransform;
    }[];
    readonly sockets: readonly {
        readonly id: string;
        readonly boneId: string;
        readonly transform: SkeletalAttachmentTransform;
    }[];
}
export declare class SkeletalAttachmentRig {
    readonly profile: SkeletalAttachmentProfile;
    private readonly bones;
    private readonly sockets;
    constructor(instance: SkeletalAnimationInstance, profile: SkeletalAttachmentProfile);
    anchor(kind: 'bone' | 'socket', targetId: string): Object3D;
}
