import type { ActorPlacement, ActorTarget } from './mee8d76b34e4b.js';
import { DeliveryNavigation } from './m13fea72476c5.js';
import { RenderQualityController } from './ma031f5c2c822.js';
import type { ViewportProjection } from './m4b81f2a65714.js';
import { WebEffectsProjection } from './m38ad504316e8.js';
import type { ScreenSettings } from './m02427c9e162b.js';
import type { EquipmentPlacement, EquipmentTarget } from './mac96c8d05045.js';
import { Box3Helper, GridHelper, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DeliverySession } from './meecd7a56adec.js';
import type { ChunkReader } from './m5e6f4f6908c1.js';
import type { DisplayBudget } from './m915207263d86.js';
import { type SpatialStreamingOptions } from './me11583edf903.js';
import { DeliveryAddonController } from './me804e525e251.js';
/** Prebuilt viewer; exact hash-validated trusted addon modules travel with the publication. */
export declare class DeliveryViewer {
    readonly canvas: HTMLCanvasElement;
    readonly addons: DeliveryAddonController;
    readonly session: DeliverySession;
    readonly renderer: WebGLRenderer;
    private perspective;
    private orthographic;
    camera: PerspectiveCamera | OrthographicCamera;
    projection: ViewportProjection;
    mode: 'lit' | 'unlit' | 'wireframe';
    readonly grid: GridHelper;
    readonly selection: Box3Helper;
    readonly quality: RenderQualityController;
    readonly navigation: DeliveryNavigation;
    readonly effects: WebEffectsProjection;
    environment: boolean;
    environmentIntensity: number;
    icons: boolean;
    iconScale: number;
    helpers: boolean;
    private batchEnabled;
    private readonly drawOrder;
    private readonly batching;
    private readonly batchInstances;
    private readonly unsubscribeBatching;
    get staticBatchingEnabled(): boolean;
    get staticBatchingStatus(): {
        state: "off" | "preparing" | "active" | "fallback";
        message: string;
        geometryBytes: number;
        reservedBytes: number;
        savedDraws: number;
    };
    /** Display-only experimental optimization; never included in a publication or Actor identity. */
    setStaticBatching(enabled: boolean): void;
    private selected;
    private wire;
    private frameTime;
    private spatialTime;
    private addonFrame;
    private releaseSelection?;
    private frameListeners;
    private disposeListeners;
    subscribeFrame(listener: (dt: number) => void): () => void;
    subscribeDispose(listener: () => void): () => void;
    readonly scene: Scene<import("three").Object3DEventMap>;
    readonly controls: OrbitControls;
    onSelect?: (value: {
        mountId: string;
        actorId?: string;
    } | null) => void;
    onActorSelect?: (actor: ActorPlacement | null) => void;
    private actorListeners;
    subscribeActorSelection(listener: (actor: ActorPlacement | null) => void): () => void;
    private emitActorSelection;
    onEquipmentSelect?: (placements: EquipmentPlacement[]) => void;
    private resize;
    private disposed;
    private redraw;
    private renderedVersion;
    invalidate: () => void;
    private pick;
    constructor(canvas: HTMLCanvasElement, reader: ChunkReader, budget?: DisplayBudget);
    open(hash: string): Promise<void>;
    /** Frame verified release bounds once, then display each fully prepared level/cell as it arrives. */
    openProgressive(hash: string, priority?: readonly string[]): Promise<void>;
    /** Keep the host's initial camera; do not fit the entire release after prioritizing its nearby regions. */
    openSpatial(hash: string, options?: SpatialStreamingOptions): Promise<void>;
    setSpatialStreaming(options: SpatialStreamingOptions | null): void;
    /** Stable-ID lookup; no name guessing and no document/mesh mutation. */
    focusEquipment(target: EquipmentTarget): {
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
    fit(): void;
    onViewChange?: () => void;
    get cameraSettings(): {
        horizontalFovDegrees: number;
        orthographicWidthMeters: number;
        nearMeters: number;
        farMeters: number;
    };
    setCameraSettings(change: Partial<DeliveryViewer['cameraSettings']>): void;
    private pointerStart;
    private prepareOrbit;
    private resizeCamera;
    setProjection(value: ViewportProjection): void;
    setMode(value: 'lit' | 'unlit' | 'wireframe'): void;
    setScreenEffects(value: ScreenSettings): void;
    selectActor(value: {
        mountId: string | null;
        actorId: string;
    } | null): void;
    private selectedObject;
    private updateSelection;
    selectEquipment(target: EquipmentTarget): void;
    selectActorTarget(target: ActorTarget): {
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
    focusActor(target: ActorTarget): {
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
    focusSelection(): void;
    private frameBounds;
    dispose(): Promise<void>;
}
