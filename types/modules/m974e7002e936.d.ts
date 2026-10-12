import { type AssetFolder, type AssetRecord, type AssetReferenceUsage, type AssetRegistrySnapshot } from './m5e4e772c2f57.js';
export interface ContentFolderDeletion {
    readonly folderId: string;
    readonly folders: readonly AssetFolder[];
    readonly assets: readonly AssetRecord[];
}
export interface ContentFolderReferenceCheck {
    readonly assetId: string;
    readonly references: readonly AssetReferenceUsage[];
}
/** Freeze precisely the subtree shown by the confirmation, including empty descendants. */
export declare function planContentFolderDeletion(snapshot: Pick<AssetRegistrySnapshot, 'folders' | 'assets'>, folderId: string): ContentFolderDeletion;
/** Called inside the storage transaction before any delete is issued. */
export declare function validateContentFolderDeletion(snapshot: Omit<AssetRegistrySnapshot, 'blobs'>, expected: ContentFolderDeletion, checks: readonly ContentFolderReferenceCheck[]): {
    assetIds: string[];
    folderIds: string[];
    revisionIds: string[];
    blobKeys: string[];
};
