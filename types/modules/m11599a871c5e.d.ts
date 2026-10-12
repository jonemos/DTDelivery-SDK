import { MemoryAssetRegistryStorage } from './ma29f9470efdf.js';
/** Track successful in-session registry edits without copying GLB bytes into React. */
export declare class PreviewAssetStorage extends MemoryAssetRegistryStorage {
    generation: number;
    private readonly listeners;
    subscribe(listener: () => void): () => void;
    private changed;
    commitImport(...args: Parameters<MemoryAssetRegistryStorage['commitImport']>): Promise<import("./m5e4e772c2f57.js").AssetRecord>;
    commitRevision(...args: Parameters<MemoryAssetRegistryStorage['commitRevision']>): Promise<void>;
    commitRevisions(...args: Parameters<MemoryAssetRegistryStorage['commitRevisions']>): Promise<void>;
    setCurrentRevision(...args: Parameters<MemoryAssetRegistryStorage['setCurrentRevision']>): Promise<void>;
    createFolder(...args: Parameters<MemoryAssetRegistryStorage['createFolder']>): Promise<void>;
    renameFolder(...args: Parameters<MemoryAssetRegistryStorage['renameFolder']>): Promise<void>;
    renameAsset(...args: Parameters<MemoryAssetRegistryStorage['renameAsset']>): Promise<import("./m5e4e772c2f57.js").AssetRecord>;
    moveAsset(...args: Parameters<MemoryAssetRegistryStorage['moveAsset']>): Promise<import("./m5e4e772c2f57.js").AssetRecord>;
    deleteAsset(...args: Parameters<MemoryAssetRegistryStorage['deleteAsset']>): Promise<void>;
    deleteFolder(...args: Parameters<MemoryAssetRegistryStorage['deleteFolder']>): Promise<void>;
}
