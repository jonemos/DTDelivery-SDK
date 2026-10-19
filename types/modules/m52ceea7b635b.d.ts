import { type Object3D } from 'three';
import { StaticMeshResourceCache, type StaticMeshResourceLease } from './mf9caaacbc8b5.js';
import { type AssetRegistryStorage } from './m5e4e772c2f57.js';
import { type AssetReference, type MaterialSlotOverride, type SceneDocument } from './mcec497bf55e6.js';
import { type SourceTransform } from './m974bf2434b62.js';
import { StaticPreviewDocumentStorage, StaticPreviewRepository, type StaticPreviewBundle } from './m0f0d622f8bdc.js';
import { PreviewAssetStorage } from './m11599a871c5e.js';
import { loadPreviewAppearance, type TextureAppearanceLayout } from './m4c70f05441f4.js';
import { type TextureImportOptions } from './mae043aea4362.js';
import { type CandidateComponentHierarchy } from './m276860a0375e.js';
import { type MaterialResolver } from './m4f696d79727f.js';
import { TextureDisplaySession } from './m629d7ac5d41a.js';
export declare class PreviewTextureBudgetError extends Error {
    readonly requiredBytes: number;
    readonly budgetBytes: number;
    textureLayouts?: readonly TextureAppearanceLayout[];
    constructor(requiredBytes: number, budgetBytes?: number);
}
export declare class PreviewTextureLoadError extends Error {
    textureLayouts?: readonly TextureAppearanceLayout[];
    constructor(message: string);
}
export declare function planPreviewTextures(payloads: ReadonlyMap<string, Uint8Array>): {
    textured: string[];
    reservedBytes: number;
};
export declare function admitPreviewTextures(payloads: ReadonlyMap<string, Uint8Array>, budgetBytes?: number): {
    textured: string[];
    reservedBytes: number;
};
export declare function applyPreviewTextures(resources: Pick<PreviewResources, 'enableAppearance' | 'clearAppearances'>, assetIds: readonly string[], progress: (message: string) => void, signal?: AbortSignal): Promise<void>;
export interface Inventory {
    projectId: string;
    inventoryHash: string;
    levelKey: string;
    contentFolders: {
        id: string;
        name: string;
        parentId: string | null;
    }[];
    actors: {
        id: string;
        label: string;
        outlinerFolderPath: string;
        rootComponentPath?: string | null;
    }[];
    components: ({
        id: string;
        ownerActorId: string;
        sourcePath: string;
        sourceClass: string;
        meshAssetId: string | null;
        visible: boolean;
        worldTransform: SourceTransform;
        instances: {
            sourceIndex: number;
            worldTransform: SourceTransform;
            localTransform?: SourceTransform;
        }[];
    } & Partial<CandidateComponentHierarchy>)[];
}
export declare function buildStaticPreviewDocument(inventory: Inventory): SceneDocument;
export declare class PreviewResources extends StaticMeshResourceCache {
    private readonly previewStorage;
    private readonly templates;
    private readonly payloads;
    private readonly loadAppearance;
    private readonly budgetBytes;
    private readonly defaultMaterials;
    materialResolver?: MaterialResolver;
    textureDisplay?: TextureDisplaySession<PreviewResources>;
    private readonly retainedMaterials;
    private readonly appearances;
    private readonly wantedAppearances;
    private readonly restoringAppearances;
    private readonly acquiring;
    private disposed;
    private readonly appearanceListeners;
    private readonly invalidationListeners;
    constructor(previewStorage: AssetRegistryStorage, templates: Map<string, Object3D>, payloads?: Map<string, Uint8Array<ArrayBufferLike>>, loadAppearance?: typeof loadPreviewAppearance, budgetBytes?: number, defaultMaterials?: ReadonlyMap<string, readonly MaterialSlotOverride[]>);
    supportsAppearance(reference: AssetReference | null): boolean;
    appearanceStatus(): {
        reservedBytes: number;
        limitBytes: number;
        entries: {
            assetId: string;
            state: "ready" | "releasing" | "loading";
        }[];
    };
    subscribeAppearance(listener: () => void): () => void;
    subscribeInvalidation(listener: (assetId: string) => void): () => void;
    private notifyAppearance;
    enableAppearance(reference: AssetReference): Promise<void>;
    private loadAppearanceFor;
    disableAppearance(assetId: string): void;
    clearAppearances(): void;
    private collectAppearance;
    acquire(reference: AssetReference): Promise<StaticMeshResourceLease>;
    disposeDisplay(): void;
    trimUnusedGeometry(): void;
    /** Called only when the owning editor projection has been retired. */
    disposeAll(): void;
    retainedState(): {
        templates: number;
        payloadBytes: number;
        appearanceBytes: number;
        warmMaterials: number;
        dormantAppearances: number;
    };
    warmMaterials(snapshot: import('./m5e4e772c2f57.js').AssetRegistrySnapshot, signal?: AbortSignal, progress?: (message: string) => void): Promise<void>;
    publishDisplay(): void;
}
export type PreviewOpenOptions = {
    readonly optimize?: TextureImportOptions;
    readonly showTextures?: boolean;
    readonly signal?: AbortSignal;
    readonly budgetBytes?: number;
};
export declare function prepareCandidateResources(restored: StaticPreviewBundle, storage: AssetRegistryStorage, progress: (message: string) => void, appearance?: PreviewOpenOptions, sharedTemplates?: Map<string, Object3D>, configureDisplay?: boolean): Promise<PreviewResources>;
export declare function prepareStaticEditorPreview(progress: (message: string) => void, repository?: StaticPreviewRepository, revision?: number, restore?: boolean, appearance?: {
    readonly optimize?: TextureImportOptions;
    readonly showTextures?: boolean;
    readonly signal?: AbortSignal;
    readonly budgetBytes?: number;
}): Promise<{
    label: string;
    scene: SceneDocument;
    storage: PreviewAssetStorage;
    resources: PreviewResources;
    documents: StaticPreviewDocumentStorage;
}>;
export declare function createPreviewTemplate(bytes: Uint8Array): Promise<Object3D>;
