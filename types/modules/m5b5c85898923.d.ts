import { type AssetRegistrySnapshot } from './m5e4e772c2f57.js';
import { type Actor } from './mcec497bf55e6.js';
import { type ActorPlacement } from './mee8d76b34e4b.js';
import { type DeliveryManifest } from './m58f4c922e436.js';
import { ChunkReader } from './m5e6f4f6908c1.js';
import type { LevelMetadata } from './m6493003339f1.js';
export interface ReviewActor {
    key: string;
    contentHash: string;
    placement: ActorPlacement;
    actor: Actor;
    assetIds: string[];
    dependencies: string[];
}
export interface ReviewSnapshot {
    releaseHash: string;
    manifest: DeliveryManifest;
    actors: ReviewActor[];
    levels: Map<string, LevelMetadata>;
}
export interface ActorDifference {
    key: string;
    kind: 'added' | 'changed' | 'removed' | 'unchanged';
    before?: ReviewActor;
    after?: ReviewActor;
    fields: string[];
}
export declare function actorAssetClosure(actor: Actor, assets: Omit<AssetRegistrySnapshot, 'blobs'>): {
    asset: import("./m5e4e772c2f57.js").AssetRecord;
    revision: import("./m5e4e772c2f57.js").AssetRevision;
}[];
/** Metadata only: shape, placement, Component settings and exact asset revision changes. */
export declare function readReviewSnapshot(reader: ChunkReader, hash: string, signal?: AbortSignal): Promise<ReviewSnapshot>;
export declare function diffActors(before: ReviewSnapshot | null, after: ReviewSnapshot): ActorDifference[];
