export type AssetKind = 'StaticMesh' | 'SkeletalMesh' | 'Skeleton' | 'AnimationSequence' | 'Texture' | 'Material' | 'Level' | 'Prefab' | 'Widget' | 'Audio';
export interface AssetReference {
    readonly assetId: string;
}
export interface AssetRecord {
    readonly id: string;
    readonly name: string;
    readonly kind: AssetKind;
    readonly folderId: string | null;
    readonly currentRevisionId: string;
    readonly dependencies: readonly AssetReference[];
    readonly importSettings: Readonly<Record<string, unknown>>;
}
export interface AssetFolder {
    readonly id: string;
    readonly name: string;
    readonly parentId: string | null;
}
export interface AssetRevision {
    readonly id: string;
    readonly assetId: string;
    readonly contentHash: string;
    readonly blobKeys: readonly string[];
    readonly metadata: Readonly<Record<string, unknown>>;
    readonly createdAt: number;
}
export interface AssetBlob {
    readonly key: string;
    readonly bytes: Uint8Array;
}
export interface PreparedAssetImport {
    readonly asset: AssetRecord;
    readonly revision: AssetRevision;
    readonly blob: AssetBlob;
}
export interface AssetRegistrySnapshot {
    readonly assets: readonly AssetRecord[];
    readonly revisions: readonly AssetRevision[];
    readonly blobs: readonly AssetBlob[];
    readonly folders: readonly AssetFolder[];
}
/** Optional byte counts are metadata, never copied binary payloads. */
export interface AssetCatalogSnapshot extends Omit<AssetRegistrySnapshot, 'blobs'> {
    readonly blobSizes?: readonly {
        readonly key: string;
        readonly byteLength: number;
    }[];
}
export interface AssetRevisionEdit {
    readonly assetId: string;
    readonly revision: AssetRevision;
    readonly blob: AssetBlob;
    readonly dependencies?: readonly AssetReference[];
    readonly expectedRevisionId: string;
}
/** Capture and reject ambiguous batches before any storage mutation. */
export declare function captureRevisionEdits(edits: readonly AssetRevisionEdit[]): AssetRevisionEdit[];
export interface AssetRegistryStorage {
    commitImport(prepared: PreparedAssetImport): Promise<AssetRecord>;
    commitRevision(assetId: string, revision: AssetRevision, blob: AssetBlob, dependencies?: readonly AssetReference[], expectedRevisionId?: string): Promise<void>;
    /** All edits succeed in one transaction, or none are published. */
    commitRevisions?(edits: readonly AssetRevisionEdit[]): Promise<void>;
    setCurrentRevision(assetId: string, revisionId: string): Promise<void>;
    createFolder(folder: AssetFolder): Promise<void>;
    renameFolder(folderId: string, name: string, expectedName?: string): Promise<void>;
    renameAsset(assetId: string, name: string): Promise<AssetRecord>;
    moveAsset(assetId: string, folderId: string | null, expectedFolderId?: string | null, naming?: {
        expectedName: string;
        restoreName?: string;
    }): Promise<AssetRecord>;
    deleteAsset(assetId: string, externalReferences?: readonly AssetReferenceUsage[]): Promise<void>;
    deleteFolder(plan: import('./m974e7002e936.js').ContentFolderDeletion, checks: readonly import('./m974e7002e936.js').ContentFolderReferenceCheck[]): Promise<void>;
    importSnapshot(snapshot: AssetRegistrySnapshot): Promise<void>;
    snapshot(): Promise<AssetRegistrySnapshot>;
    /** Detached, atomic metadata capture without binary payloads. */
    snapshotCatalog?(): Promise<AssetCatalogSnapshot>;
    /** Current metadata token only; returns no mutable registry data or binary payloads. */
    currentRevisionId?(assetId: string): string | undefined;
    /** Detached data for one revision; avoids copying unrelated binary assets during rendering. */
    snapshotAsset?(assetId: string, revisionId?: string): Promise<AssetRegistrySnapshot>;
}
export declare function readAssetSnapshot(storage: AssetRegistryStorage, assetId: string, revisionId?: string): Promise<AssetRegistrySnapshot>;
export declare function assertAssetFolderExists(storage: AssetRegistryStorage, folderId: string | null): Promise<void>;
export interface AssetReferenceUsage {
    readonly ownerType: 'Scene' | 'Asset';
    readonly ownerId: string;
    readonly path: string;
}
export declare class AssetNotFoundError extends Error {
}
export declare class AssetReferencedError extends Error {
    readonly assetId: string;
    readonly references: readonly AssetReferenceUsage[];
    constructor(assetId: string, references: readonly AssetReferenceUsage[]);
}
export interface AssetImportRequest {
    readonly name: string;
    readonly kind: AssetKind;
    readonly bytes: Uint8Array;
    readonly folderId?: string | null;
    readonly dependencies?: readonly AssetReference[];
    readonly importSettings?: Readonly<Record<string, unknown>>;
}
export interface ValidatedAssetImport {
    readonly metadata: Readonly<Record<string, unknown>>;
}
export type AssetImportValidator = (request: AssetImportRequest, signal: AbortSignal) => Promise<ValidatedAssetImport>;
export interface AssetImportServiceOptions {
    readonly createId?: () => string;
    readonly now?: () => number;
    readonly singleImportBytes?: number;
}
export declare const DEFAULT_SINGLE_IMPORT_BYTES = 268435456;
export declare class InvalidAssetImportError extends Error {
}
export declare class AssetImportService {
    private readonly storage;
    private readonly createId;
    private readonly now;
    private readonly singleImportBytes;
    constructor(storage: AssetRegistryStorage, options?: AssetImportServiceOptions);
    import(request: AssetImportRequest, validate: AssetImportValidator, signal?: AbortSignal): Promise<PreparedAssetImport>;
}
export declare function sha256(bytes: Uint8Array): Promise<string>;
export declare function clonePreparedImport(value: PreparedAssetImport): PreparedAssetImport;
