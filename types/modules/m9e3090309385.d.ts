import { type ChunkCache } from './m5e6f4f6908c1.js';
import { DeliveryViewer } from './m566d2c035974.js';
import type { DeliveryModel, DeliverySource } from './m7917afd94e6d.js';
import type { ActorPlacement, ActorTarget } from './mee8d76b34e4b.js';
import type { DisplayBudget } from './m915207263d86.js';
import type { AddonInstanceSnapshot, AddonPropertySchema } from './mfc2efa75f19e.js';
import type { ScriptSettings } from './mcc06b6e568a7.js';
import type { ViewportProjection } from './m4b81f2a65714.js';
export type DeliveryActorSelection = Pick<ActorTarget, 'mountId' | 'actorId'>;
export type DeliveryScriptTarget = DeliveryActorSelection & {
    readonly componentId: string;
};
export interface DeliveryProgress {
    readonly status: 'idle' | 'loading' | 'ready' | 'cancelled' | 'failed' | 'disposed';
    readonly model: DeliveryModel | null;
    readonly downloadedBytes: number;
    readonly requests: number;
    readonly cacheHits: number;
    readonly readyCells: number;
    readonly totalCells: number;
    readonly cells: readonly {
        id: string;
        mountId: string;
        name?: string;
        status: string;
        message?: string;
    }[];
}
export interface DeliveryClientOptions {
    readonly canvas: HTMLCanvasElement;
    readonly source: DeliverySource;
    readonly cache?: ChunkCache;
    readonly budget?: DisplayBudget;
    readonly onProgress?: (progress: DeliveryProgress) => void;
    readonly onActorSelect?: (actor: ActorPlacement | null) => void;
}
export interface DeliveryOpenOptions {
    readonly progressive?: boolean;
    readonly priority?: readonly string[];
    readonly signal?: AbortSignal;
}
export interface DeliveryScriptSnapshot {
    readonly target: DeliveryScriptTarget;
    readonly releaseHash: string;
    readonly reference: AddonInstanceSnapshot['reference'];
    readonly schema: readonly AddonPropertySchema[];
    readonly values: ScriptSettings;
    readonly revision: number;
    readonly state: AddonInstanceSnapshot['state'];
    readonly error?: string;
}
export interface DeliveryScriptHandle {
    readonly target: DeliveryScriptTarget;
    readonly schema: readonly AddonPropertySchema[];
    snapshot(): DeliveryScriptSnapshot;
    getProperties(): ScriptSettings;
    setProperties(values: ScriptSettings, options?: {
        readonly expectedRevision?: number;
    }): Promise<DeliveryScriptSnapshot>;
    subscribe(listener: (values: ScriptSettings, snapshot: DeliveryScriptSnapshot) => void): () => void;
}
export interface DeliveryScripts {
    list(): readonly DeliveryScriptSnapshot[];
    get(target: DeliveryScriptTarget): DeliveryScriptHandle;
    subscribe(listener: (instances: readonly DeliveryScriptSnapshot[]) => void): () => void;
}
/** Public browser facade: direct source -> verified reader -> existing progressive viewer. */
export declare class DeliveryClient {
    readonly options: DeliveryClientOptions;
    readonly viewport: DeliveryViewer;
    readonly scripts: DeliveryScripts;
    private readonly reader;
    private binding?;
    private generation;
    private operation?;
    private readonly listings;
    private disposed;
    private status;
    private readonly progressListeners;
    private readonly actorListeners;
    private readonly scriptListeners;
    private selected;
    private readonly cleanup;
    constructor(options: DeliveryClientOptions);
    private live;
    get model(): DeliveryModel | null;
    get progress(): DeliveryProgress;
    private emitProgress;
    private emitActor;
    private emitScripts;
    subscribeProgress(listener: (value: DeliveryProgress) => void): () => void;
    subscribeActorSelection(listener: (value: ActorPlacement | null) => void): () => void;
    private subscribeScripts;
    listModels(signal?: AbortSignal): Promise<readonly DeliveryModel[]>;
    open(modelId: string, options?: DeliveryOpenOptions): Promise<DeliveryModel>;
    private ready;
    cancel(): void;
    actors(query?: string): {
        loaded: boolean;
        available: boolean;
        focusable: boolean;
        serviceKey: string;
        origin: "level" | "composition";
        actorName: string;
        classId: string;
        tags: readonly string[];
        mountName: string;
        levelHash: string | null;
        levelId: string | null;
        sourceActorIds: string[];
        folder: {
            id: string;
            path: string[];
        } | null;
        rootComponentId: string;
        attachmentParent: import("./mcec497bf55e6.js").SceneAttachmentReference | null;
        components: {
            id: string;
            type: string;
            parentComponentId: string | null;
        }[];
        meshes: {
            componentId: string;
            asset: import("./mcec497bf55e6.js").AssetReference | null;
            shape: string | null;
        }[];
        sourceWorldMatrix: import("./m7aea83ff3a59.js").Matrix4 | null;
        worldMatrix: import("./m7aea83ff3a59.js").Matrix4 | null;
        positionMeters: import("./m69ba5f67c309.js").Vec3 | null;
        positionUeCm: {
            X: number;
            Y: number;
            Z: number;
        } | null;
        spatialStatus: "static" | "bone-socket-unsupported" | "no-spatial-root";
        excludedSourceDefault: boolean;
        visible: boolean;
        releaseHash: string;
        compositionId: string;
        mountId: string | null;
        actorId: string;
    }[];
    selectActor(target: DeliveryActorSelection | null): {
        loaded: boolean;
        available: boolean;
        focusable: boolean;
        serviceKey: string;
        origin: "level" | "composition";
        actorName: string;
        classId: string;
        tags: readonly string[];
        mountName: string;
        levelHash: string | null;
        levelId: string | null;
        sourceActorIds: string[];
        folder: {
            id: string;
            path: string[];
        } | null;
        rootComponentId: string;
        attachmentParent: import("./mcec497bf55e6.js").SceneAttachmentReference | null;
        components: {
            id: string;
            type: string;
            parentComponentId: string | null;
        }[];
        meshes: {
            componentId: string;
            asset: import("./mcec497bf55e6.js").AssetReference | null;
            shape: string | null;
        }[];
        sourceWorldMatrix: import("./m7aea83ff3a59.js").Matrix4 | null;
        worldMatrix: import("./m7aea83ff3a59.js").Matrix4 | null;
        positionMeters: import("./m69ba5f67c309.js").Vec3 | null;
        positionUeCm: {
            X: number;
            Y: number;
            Z: number;
        } | null;
        spatialStatus: "static" | "bone-socket-unsupported" | "no-spatial-root";
        excludedSourceDefault: boolean;
        visible: boolean;
        releaseHash: string;
        compositionId: string;
        mountId: string | null;
        actorId: string;
    } | null;
    get selectedActor(): ActorPlacement | null;
    focusActor(target: DeliveryActorSelection): {
        loaded: boolean;
        available: boolean;
        focusable: boolean;
        serviceKey: string;
        origin: "level" | "composition";
        actorName: string;
        classId: string;
        tags: readonly string[];
        mountName: string;
        levelHash: string | null;
        levelId: string | null;
        sourceActorIds: string[];
        folder: {
            id: string;
            path: string[];
        } | null;
        rootComponentId: string;
        attachmentParent: import("./mcec497bf55e6.js").SceneAttachmentReference | null;
        components: {
            id: string;
            type: string;
            parentComponentId: string | null;
        }[];
        meshes: {
            componentId: string;
            asset: import("./mcec497bf55e6.js").AssetReference | null;
            shape: string | null;
        }[];
        sourceWorldMatrix: import("./m7aea83ff3a59.js").Matrix4 | null;
        worldMatrix: import("./m7aea83ff3a59.js").Matrix4 | null;
        positionMeters: import("./m69ba5f67c309.js").Vec3 | null;
        positionUeCm: {
            X: number;
            Y: number;
            Z: number;
        } | null;
        spatialStatus: "static" | "bone-socket-unsupported" | "no-spatial-root";
        excludedSourceDefault: boolean;
        visible: boolean;
        releaseHash: string;
        compositionId: string;
        mountId: string | null;
        actorId: string;
    };
    setViewMode(mode: 'lit' | 'unlit' | 'wireframe'): void;
    setProjection(projection: ViewportProjection): void;
    setStaticBatching(enabled: boolean): void;
    private scriptList;
    private scriptSnapshot;
    changeAddonProperties(change: {
        readonly target: DeliveryScriptTarget;
        readonly values: ScriptSettings;
        readonly expectedRevision: number;
    }): Promise<DeliveryScriptSnapshot>;
    private applyAddonProperties;
    dispose(): Promise<void>;
}
