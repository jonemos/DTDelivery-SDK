import type { SceneDocument } from './mcec497bf55e6.js';
export interface StoredSceneEnvelope {
    readonly documentId: string;
    readonly revision: number;
    readonly payload: SceneDocument;
    readonly savedAt: number;
}
export declare class RevisionConflictError extends Error {
}
export interface SceneDocumentStorage {
    saveCopy?(payload: SceneDocument): Promise<string>;
    /** Capture associated assets at the same call boundary as the queued scene snapshot. */
    captureSave?(): SceneDocumentStorage;
    /** Metadata-only writer reuses the persisted asset registry without capturing live blob bytes. */
    captureAutomaticSave?(): SceneDocumentStorage;
    hasExternalChanges?(): boolean;
    subscribeChanges?(listener: () => void): () => void;
    discardChanges?(): void;
    load(documentId: string): Promise<StoredSceneEnvelope | null>;
    save(documentId: string, expectedRevision: number | null, payload: SceneDocument): Promise<StoredSceneEnvelope>;
}
export declare class IndexedDbSceneDocumentStorage implements SceneDocumentStorage {
    private readonly databaseName;
    private readonly injectedFailure;
    constructor(databaseName?: string, injectedFailure?: InjectedStorageFailure);
    assetReferences(assetId: string, minimumTintIndex?: number): Promise<import("./m5e4e772c2f57.js").AssetReferenceUsage[]>;
    load(documentId: string, revision?: number): Promise<StoredSceneEnvelope | null>;
    save(documentId: string, expectedRevision: number | null, payload: SceneDocument): Promise<StoredSceneEnvelope>;
    private open;
}
export type InjectedStorageFailure = 'quota' | 'abort' | null;
export declare class MemorySceneDocumentStorage implements SceneDocumentStorage {
    private readonly values;
    private failure;
    private gate;
    injectFailure(failure: Exclude<InjectedStorageFailure, null>): void;
    delayNextSaveUntil(gate: Promise<void>): void;
    load(documentId: string): Promise<StoredSceneEnvelope | null>;
    save(documentId: string, expectedRevision: number | null, payload: SceneDocument): Promise<StoredSceneEnvelope>;
}
