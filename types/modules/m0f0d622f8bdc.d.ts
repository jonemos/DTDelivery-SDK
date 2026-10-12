import { type AssetRegistrySnapshot, type AssetRegistryStorage } from './m5e4e772c2f57.js';
import type { SceneDocument } from './mcec497bf55e6.js';
import { type SceneDocumentStorage, type StoredSceneEnvelope } from './m3f7a37a09ea0.js';
import { type TextureImportOptions } from './mae043aea4362.js';
import type { CandidateRefreshBaseline } from './mb447e7ccbe60.js';
import { type AppearanceReviewRecord } from './m2e501185a8ea.js';
import { type CandidateVersionHistory } from './m84ea7acd5e11.js';
/** A provisional visualization recipe, NOT a calibrated UEWebPackage/import profile. */
export interface StaticPreviewRecipe {
    levelVersions?: CandidateVersionHistory;
    appearanceReview?: AppearanceReviewRecord;
    refreshBaseline?: CandidateRefreshBaseline;
    /** A new isolated refresh level retains one recoverable Scene command; assets are append-only. */
    refreshUndoScene?: SceneDocument;
    version: 1;
    profile: 'u01-gray-unverified-basis-v1';
    source: {
        projectId: string;
        inventoryHash: string;
        levelKey: string;
    };
    /** Original diagnostics retained verbatim, never executed or interpreted as instructions. */
    sourceDocuments?: {
        inventoryJson: string;
        exportReportJson: string;
    };
    /** Stored source policy; legacy candidates may contain reduced derivatives. Display preferences are transient. */
    textureOptions?: TextureImportOptions;
    bindings: readonly {
        webActorId: string;
        webComponentId?: string;
        sourceActorId: string;
        sourceComponentId: string;
        sourceIndex: number;
    }[];
    payloads: readonly {
        assetId: string;
        revisionId: string;
        blobKey: string;
        sourcePath: string;
    }[];
}
export interface StaticPreviewBundle {
    version: 1;
    envelope: StoredSceneEnvelope;
    recipe: StaticPreviewRecipe;
    assets: AssetRegistrySnapshot;
}
export declare const STATIC_PREVIEW_DATABASE = "dt-web-editor-u01-candidate-v1";
export declare function validateStaticPreviewBundle(bundle: StaticPreviewBundle): void;
/** Same IndexedDB storage family, isolated from normal projects. Blobs are content-addressed;
 * all committed scene/registry revisions remain recoverable, without duplicating 344 MB per save. */
export declare class StaticPreviewRepository {
    readonly databaseName: string;
    private readonly fault;
    constructor(databaseName?: string, fault?: 'abort' | 'quota' | null);
    read(revision?: number): Promise<StaticPreviewBundle | null>;
    compositionInfo(revision?: number): Promise<{
        revision: number;
        name: string;
        actors: number;
        bytes: number;
    }>;
    commit(bundle: StaticPreviewBundle, expectedRevision: number | null): Promise<void>;
    commitMetadata(scene: SceneDocument, expectedRevision: number): Promise<StoredSceneEnvelope>;
    private open;
}
export declare class StaticPreviewDocumentStorage implements SceneDocumentStorage {
    private readonly repository;
    private readonly assets;
    private readonly recipe;
    private readonly restored;
    private savedAssetGeneration;
    constructor(repository: StaticPreviewRepository, assets: AssetRegistryStorage, recipe: StaticPreviewRecipe, restored?: StoredSceneEnvelope | null);
    hasExternalChanges(): boolean;
    sourceRecipe(): StaticPreviewRecipe;
    commitVersion(current: StaticPreviewBundle, next: StaticPreviewBundle): Promise<void>;
    releaseAssetBytes(revision: number | null): boolean;
    exportSnapshot(documentId: string, revision: number): Promise<StaticPreviewBundle>;
    saveCopy(payload: SceneDocument): Promise<string>;
    subscribeChanges(listener: () => void): () => void;
    load(documentId: string): Promise<StoredSceneEnvelope | null>;
    captureSave(): SceneDocumentStorage;
    captureAutomaticSave(): SceneDocumentStorage;
    save(id: string, expected: number | null, payload: SceneDocument): Promise<StoredSceneEnvelope>;
    private saveSnapshot;
}
