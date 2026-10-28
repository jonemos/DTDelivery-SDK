import type { AssetReference, MaterialSlotOverride } from './mcec497bf55e6.js';
import { type AssetRegistryStorage } from './m5e4e772c2f57.js';
import type { ResolvedAnimationClipBinding } from './m8230ac8a635f.js';
import { type SkeletalAnimationAsset } from './mabd3fd64764e.js';
import type { SkeletalAttachmentProfile } from './m5db64c0ef1c8.js';
export interface SkeletalMeshResourceLease {
    readonly assetId: string;
    readonly revisionId: string;
    readonly blobKey: string;
    readonly materialSlotIds: readonly string[];
    readonly defaultMaterialSlots: readonly MaterialSlotOverride[];
    readonly attachmentProfile: SkeletalAttachmentProfile | null;
    readonly asset: SkeletalAnimationAsset;
    release(): void;
}
type SkeletalLoader = (bytes: Uint8Array) => Promise<SkeletalAnimationAsset>;
export declare class SkeletalMeshResourceCache {
    private readonly storage;
    private readonly loadAsset;
    private readonly entries;
    private readonly aliases;
    private readonly pendingResolutions;
    constructor(storage: AssetRegistryStorage, loadAsset?: SkeletalLoader);
    acquire(reference: AssetReference): Promise<SkeletalMeshResourceLease>;
    entryCount(): number;
    playbackAsset(lease: SkeletalMeshResourceLease, binding: ResolvedAnimationClipBinding): Promise<SkeletalAnimationAsset>;
    private resolve;
    private acquireEntry;
    private release;
}
export {};
