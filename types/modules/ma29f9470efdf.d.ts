import { type AssetRevisionEdit } from './m5e4e772c2f57.js';
import { type ContentFolderDeletion, type ContentFolderReferenceCheck } from './m974e7002e936.js';
import { type AssetBlob, type AssetFolder, type AssetRecord, type AssetReferenceUsage, type AssetRegistrySnapshot, type AssetCatalogSnapshot, type AssetRegistryStorage, type AssetRevision, type PreparedAssetImport } from './m5e4e772c2f57.js';
export type InjectedAssetCommitFailure = 'after-blob' | 'after-revision' | null;
export declare class AssetIdentityConflictError extends Error {
}
export declare class AssetFolderConflictError extends Error {
}
export declare class AssetSnapshotConflictError extends Error {
}
export declare class IndexedDbAssetRegistryStorage implements AssetRegistryStorage {
    private readonly databaseName;
    private readonly injectedFailure;
    constructor(databaseName?: string, injectedFailure?: InjectedAssetCommitFailure);
    snapshotCatalog(): Promise<Omit<AssetRegistrySnapshot, 'blobs'>>;
    snapshotAsset(assetId: string, revisionId?: string): Promise<AssetRegistrySnapshot>;
    commitImport(prepared: PreparedAssetImport): Promise<AssetRecord>;
    commitRevision(assetId: string, revision: AssetRevision, blob: AssetBlob, dependencies?: readonly import('./m5e4e772c2f57.js').AssetReference[], expectedRevisionId?: string): Promise<void>;
    commitRevisions(edits: readonly AssetRevisionEdit[]): Promise<void>;
    setCurrentRevision(assetId: string, revisionId: string): Promise<void>;
    snapshot(): Promise<AssetRegistrySnapshot>;
    importSnapshot(snapshot: AssetRegistrySnapshot): Promise<void>;
    createFolder(folder: AssetFolder): Promise<void>;
    renameFolder(folderId: string, name: string, expectedName?: string): Promise<void>;
    renameAsset(assetId: string, name: string): Promise<AssetRecord>;
    moveAsset(assetId: string, folderId: string | null, expectedFolderId?: string | null, naming?: {
        expectedName: string;
        restoreName?: string;
    }): Promise<AssetRecord>;
    deleteAsset(assetId: string, externalReferences?: readonly AssetReferenceUsage[]): Promise<void>;
    private deleteAssetUnchecked;
    deleteFolder(plan: ContentFolderDeletion, checks: readonly ContentFolderReferenceCheck[]): Promise<void>;
    private deleteFolderUnchecked;
    private updateAsset;
    private failIfInjected;
    private open;
}
export declare class MemoryAssetRegistryStorage implements AssetRegistryStorage {
    private deferredBlobs;
    private deferredSizes;
    private restoringBlobs;
    /** The caller must first bind a durable immutable registry revision. */
    releaseBlobs(read: () => Promise<AssetRegistrySnapshot>): void;
    retainedBlobBytes(): number;
    protected hasDeferredBlobs(): boolean;
    protected restoreBlobs(): Promise<void>;
    snapshotCatalog(): Promise<AssetCatalogSnapshot>;
    snapshotAsset(assetId: string, revisionId?: string): Promise<AssetRegistrySnapshot>;
    /** Metadata-only lookup; placement must not clone every asset blob just to resolve a revision. */
    currentRevisionId(assetId: string): string;
    private assets;
    private revisions;
    private blobs;
    private folders;
    private failure;
    injectFailure(failure: Exclude<InjectedAssetCommitFailure, null>): void;
    commitImport(prepared: PreparedAssetImport): Promise<AssetRecord>;
    commitRevision(assetId: string, revision: AssetRevision, blob: AssetBlob, dependencies?: readonly import('./m5e4e772c2f57.js').AssetReference[], expectedRevisionId?: string): Promise<void>;
    commitRevisions(edits: readonly AssetRevisionEdit[]): Promise<void>;
    setCurrentRevision(assetId: string, revisionId: string): Promise<void>;
    snapshot(): Promise<AssetRegistrySnapshot>;
    importSnapshot(snapshot: AssetRegistrySnapshot): Promise<void>;
    createFolder(folder: AssetFolder): Promise<void>;
    renameFolder(folderId: string, name: string, expectedName?: string): Promise<void>;
    renameAsset(assetId: string, name: string): Promise<AssetRecord>;
    moveAsset(assetId: string, folderId: string | null, expectedFolderId?: string | null, naming?: {
        expectedName: string;
        restoreName?: string;
    }): Promise<AssetRecord>;
    deleteAsset(assetId: string, externalReferences?: readonly AssetReferenceUsage[]): Promise<void>;
    deleteFolder(plan: ContentFolderDeletion, checks: readonly ContentFolderReferenceCheck[]): Promise<void>;
    private requireAsset;
    private failIfInjected;
}
export declare function validateSnapshot(snapshot: AssetRegistrySnapshot): void;
