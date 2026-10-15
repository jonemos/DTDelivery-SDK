import { type ActorIndex, type ActorTarget } from './mee8d76b34e4b.js';
import { type EquipmentIndex, type EquipmentTarget } from './mac96c8d05045.js';
import { Box3, Group } from 'three';
import { type CompositionBudget } from './m1e5876a60071.js';
import { type DisplayBudget } from './m915207263d86.js';
import { type DeliveryManifest, type DeliveryMount } from './m58f4c922e436.js';
import { ChunkReader } from './m5e6f4f6908c1.js';
import { type SpatialStreamingOptions, type SpatialResidentState } from './me11583edf903.js';
import type { TextureDisplayControl } from './mc2d8265ec683.js';
export interface DeviceState {
    status: 'normal' | 'warning' | 'alarm' | 'offline';
    values: Record<string, string | number | boolean | null>;
}
/** Shared host API. Only a fully prepared target replaces the displayed immutable release. */
export declare class DeliverySession {
    readonly reader: ChunkReader;
    readonly root: Group<import("three").Object3DEventMap>;
    private runtime?;
    private pending?;
    private disposed;
    private equipmentIndex?;
    private actorIndex?;
    private sequence;
    private manifest?;
    private hash?;
    private queue;
    private applied?;
    private displayManifest?;
    private aliases;
    private memberships;
    private streamUnsubscribe?;
    private streamAbort?;
    private spatialOptions?;
    private spatial?;
    private spatialCamera;
    private wanted?;
    private spatialStates;
    private spatialPaused;
    private activeReader;
    private spatialOpening?;
    private spatialHolds;
    private mountHolds;
    private actorHolds;
    private protectedMounts;
    /** Keep only the selected dependency island/cell resident; stable host IDs survive re-entry. */
    retainActor(target: ActorTarget): () => void;
    private boxes;
    readonly loadTiming: {
        started?: number;
        bounds?: number;
        firstMesh?: number;
        complete?: number;
    };
    get loadStates(): {
        id: string;
        mountId: string;
        name: string | undefined;
        status: import("./m1e5876a60071.js").MountStatus;
        message: string | undefined;
    }[];
    get placeholderBounds(): Box3;
    private clearBoxes;
    private showBoxes;
    get spatialStreaming(): {
        options: {
            loadDistance: number;
            unloadDistance: number;
            unloadDelayMs: number;
        };
        paused: boolean;
        protected: boolean;
        states: SpatialResidentState[];
    } | undefined;
    /** Presentation residency never edits the published manifest, Actor index, or host bindings. */
    setSpatialStreaming(options: SpatialStreamingOptions | null): void;
    /** Hosts retain a currently used region; releasing the last hold starts the normal grace period. */
    retainMount(id: string): () => void;
    /** Local simulation/host editing pauses automatic residency until its mutable resources are released. */
    suspendSpatialStreaming(): () => void;
    resumeSpatialStreaming(): void;
    updateSpatialStreaming(position: readonly number[], now?: number): void;
    private observeRuntime;
    prioritize(ids: readonly string[]): void;
    retryMount(id: string): void;
    private deviceStates;
    onChange?: () => void;
    private listeners;
    subscribe(listener: () => void): () => void;
    private changed;
    private limits;
    private automatic;
    private operations;
    private serial;
    get busy(): boolean;
    get version(): number;
    constructor(reader: ChunkReader, budget?: CompositionBudget);
    get budget(): Readonly<{
        encodedPeak: number;
        geometry: number;
        texture: number;
        actors: number;
        automatic?: boolean;
    }>;
    get automaticBudget(): boolean;
    get textureApplying(): boolean;
    /** Transient presentation only; all loaded cells swap atomically through the shared runtime. */
    readonly textureDisplay: TextureDisplayControl;
    setDisplayBudget(value: DisplayBudget): void;
    /** Detached values: hosts cannot mutate the canonical scene or SDK index. */
    get actors(): ActorIndex | undefined;
    findActors(actorId: string, mountId?: string | null): import("./mee8d76b34e4b.js").ActorPlacement[];
    resolveActor(target: ActorTarget): {
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
    get equipment(): EquipmentIndex | undefined;
    findEquipment(objectId: string, mountId?: string): import("./mac96c8d05045.js").EquipmentPlacement[];
    resolveEquipment(target: EquipmentTarget): {
        loaded: boolean;
        available: boolean;
        levelHash: string;
        levelId: string;
        mountName: string;
        actorId: string;
        actorName: string;
        metadataComponentId: string;
        targetComponentId: string | null;
        instanceSourceId: string | null;
        sourceActorId: string | null;
        sourceComponentId: string | null;
        object: import("./mcacc1441dfab.js").TwinObject;
        componentIds: string[];
        meshes: {
            componentId: string;
            asset: import("./mcec497bf55e6.js").AssetReference | null;
            shape: string | null;
        }[];
        spatialStatus: "static" | "instance-unsupported" | "bone-socket-unsupported" | "source-default-excluded";
        sourceWorldMatrix: import("./m7aea83ff3a59.js").Matrix4 | null;
        worldMatrix: import("./m7aea83ff3a59.js").Matrix4 | null;
        positionMeters: import("./m69ba5f67c309.js").Vec3 | null;
        positionUeCm: {
            X: number;
            Y: number;
            Z: number;
        } | null;
        visible: boolean;
        releaseHash: string;
        mountId: string;
        objectId: string;
    };
    equipmentForHit(mountId: string, actorId: string, componentId: string): import("./mac96c8d05045.js").EquipmentPlacement[];
    get release(): string | undefined;
    get applicationRevision(): string | undefined;
    get document(): DeliveryManifest | undefined;
    get objectViews(): import("./m631b06a7a1dc.js").ProjectedActor[];
    get views(): import("./m3eac70793537.js").CompositionProjection[];
    get usage(): {
        encoded: number;
        actors: number;
        geometry: number;
        texture: number;
    };
    /** Transient host data, never written to the level, asset revision, or package. */
    setDeviceState(mountId: string, actorId: string, state: DeviceState): void;
    deviceState(mountId: string, actorId: string): DeviceState | undefined;
    cancel(): void;
    open(hash: string, reader?: ChunkReader): Promise<void>;
    /** First load may expose ready complete levels. Replacement still commits atomically. */
    openProgressive(hash: string, priority?: readonly string[], reader?: ChunkReader): Promise<void>;
    openApplication(resolved: {
        reader: ChunkReader;
        hash: string;
        revision: string;
        aliases: Map<string, string>;
    }): Promise<void>;
    control(id: string, change: Partial<Pick<DeliveryMount, 'position' | 'rotation' | 'visible' | 'loaded'>>): Promise<void>;
    private enqueue;
    dispose(): Promise<void>;
}
