import type { Transform } from './m69ba5f67c309.js';
export type ActorId = string;
export type ComponentId = string;
/** Persistent identity shared by spatial and non-spatial components. */
export interface ActorComponentBase {
    readonly id: ComponentId;
    readonly ownerActorId: ActorId;
    readonly typeVersion: 1;
}
/** Data-only fixture for component authoring; no sensor or runtime behavior. */
export interface TestDataComponent extends ActorComponentBase {
    readonly type: 'TestData';
    readonly value: number;
}
/** Trusted, prebuilt minimal Script: add ratePerSecond * game delta to one owned TestData. */
export interface LegacyTestScriptComponent extends Omit<ActorComponentBase, 'typeVersion'> {
    readonly type: 'TestScript';
    readonly typeVersion: 1 | 2;
    readonly scriptPackage?: import('./mcc06b6e568a7.js').ScriptPackageReference;
    readonly targetComponentId: ComponentId;
    readonly ratePerSecond: number;
}
export interface SchemaTestScriptComponent extends Omit<ActorComponentBase, 'typeVersion'> {
    readonly type: 'TestScript';
    readonly typeVersion: 3;
    readonly scriptPackage: import('./mcc06b6e568a7.js').ScriptPackageReference;
    readonly settings: import('./mcc06b6e568a7.js').ScriptSettings;
    /** One durable recovery point; never executed as part of the active Script. */
    readonly recovery?: {
        readonly scriptPackage: import('./mcc06b6e568a7.js').ScriptPackageReference;
        readonly settings: import('./mcc06b6e568a7.js').ScriptSettings;
    };
    readonly targetComponentId?: never;
    readonly ratePerSecond?: never;
}
export type TestScriptComponent = LegacyTestScriptComponent | SchemaTestScriptComponent;
export type BehaviorComponent = TestDataComponent | TestScriptComponent;
export interface SceneComponentReference {
    readonly actorId: ActorId;
    readonly componentId: ComponentId;
    readonly kind?: 'component';
}
export interface SkeletalAttachmentReference {
    readonly actorId: ActorId;
    readonly componentId: ComponentId;
    readonly kind: 'bone' | 'socket';
    readonly skeletonAssetId: string;
    readonly sourceSkeletonAssetId: string;
    readonly bindingSignature: string;
    readonly targetId: string;
}
export type SceneAttachmentReference = SceneComponentReference | SkeletalAttachmentReference;
export interface PrimitiveCubeComponent {
    readonly id: ComponentId;
    readonly ownerActorId: ActorId;
    readonly parentComponentId: ComponentId | null;
    readonly attachmentParent: SceneAttachmentReference | null;
    readonly type: 'PrimitiveCube';
    readonly typeVersion: 1;
    readonly localTransform: Transform;
    readonly color: number;
    /** Missing on older documents means Cube. */
    readonly shape?: PrimitiveShapeKind;
}
export type PrimitiveShapeKind = 'Cube' | 'Sphere' | 'Cylinder' | 'Cone' | 'Plane';
export declare const PRIMITIVE_SHAPES: readonly PrimitiveShapeKind[];
export declare function isPrimitiveShapeKind(kind: string): kind is PrimitiveShapeKind;
export interface AssetReference {
    readonly kind: 'asset';
    readonly assetId: string;
    readonly revisionPolicy: 'live' | 'pinned';
    readonly revisionId?: string;
}
interface SceneComponentBase extends ActorComponentBase {
    readonly parentComponentId: ComponentId | null;
    readonly attachmentParent: SceneAttachmentReference | null;
    readonly typeVersion: 1;
    readonly localTransform: Transform;
}
export interface SceneNodeComponent extends SceneComponentBase {
    readonly type: 'SceneNode';
}
export interface TwinMetadataComponent extends SceneComponentBase {
    readonly type: 'TwinMetadata';
    readonly metadata: import('./mcacc1441dfab.js').TwinComponentData;
}
export interface StaticMeshComponent extends SceneComponentBase {
    readonly type: 'StaticMesh';
    /** Web placement policy; absent on legacy levels, which retain movable behavior. */
    readonly mobility?: 'static' | 'movable';
    /** Built-in geometry retained when a basic shape receives mesh/material editing. */
    readonly shape?: PrimitiveShapeKind;
    readonly meshAsset: AssetReference | null;
    readonly materialOverrides: readonly MaterialSlotOverride[];
    readonly color: number;
}
export type SkeletalRootMotionMode = 'in_bone' | 'in_place' | 'baked_actor_track';
export interface SkeletalSkinBindingDocument {
    readonly skeletonAsset: AssetReference;
    readonly bindingSignature: string;
    readonly skinIndex: number;
}
export interface SkeletalAnimationPlaybackDocument {
    readonly clipAsset: AssetReference | null;
    readonly rate: number;
    readonly initialTimeSeconds: number;
    readonly loop: 'once' | 'repeat';
    readonly playing: boolean;
    readonly rootMotionMode: SkeletalRootMotionMode | null;
}
export interface ImportedSkeletalSourceBinding {
    readonly packageId: string;
    readonly sourceProjectId: string;
    readonly sourceSnapshotId: string;
    readonly sourceComponentId: string;
    readonly sourceComponentKey: string;
    readonly sourceMeshAssetId: string;
    readonly sourceSkeletonAssetId: string;
    readonly sourceAnimationAssetId: string | null;
    readonly unavailableAnimation?: {
        readonly profile: 'reference-pose-v1';
        readonly mode: string;
        readonly classPath: string;
        readonly reason: string;
    };
}
export interface SkeletalMeshComponent extends SceneComponentBase {
    readonly type: 'SkeletalMesh';
    readonly meshAsset: AssetReference;
    readonly skinBinding: SkeletalSkinBindingDocument;
    readonly playback: SkeletalAnimationPlaybackDocument;
    readonly sourceBinding: ImportedSkeletalSourceBinding;
    readonly materialOverrides: readonly MaterialSlotOverride[];
}
export interface MaterialSlotOverride {
    readonly slotId: string;
    readonly materialAsset: AssetReference;
    readonly tintOverrides: readonly MaterialTintOverride[];
}
export interface MaterialTintOverride {
    readonly layerIndex: number;
    readonly tintLinear: readonly [number, number, number];
    readonly strength: number;
}
export interface CameraComponent extends SceneComponentBase {
    readonly type: 'Camera';
    readonly horizontalFovDegrees: number;
}
export interface LightComponent extends SceneComponentBase {
    readonly type: 'DirectionalLight' | 'PointLight' | 'SpotLight';
    readonly color: number;
    readonly intensity: number;
    readonly rangeMeters: number;
    readonly innerConeDegrees: number;
    readonly outerConeDegrees: number;
    readonly castShadow: boolean;
}
export interface PlayerStartComponent extends SceneComponentBase {
    readonly type: 'PlayerStart';
}
export type SceneComponent = PrimitiveCubeComponent | SceneNodeComponent | StaticMeshComponent | SkeletalMeshComponent | CameraComponent | LightComponent | PlayerStartComponent | TwinMetadataComponent;
export type ActorComponent = SceneComponent | BehaviorComponent;
export declare function isSceneComponent(component: ActorComponent): component is SceneComponent;
export declare function rootSceneComponent(actor: Actor): SceneComponent;
export declare function requireSceneComponent(component: ActorComponent): SceneComponent;
export type BasicActorKind = 'Empty' | 'StaticMesh' | 'Camera' | 'DirectionalLight' | 'PointLight' | 'SpotLight' | 'PlayerStart' | PrimitiveShapeKind;
export interface Actor {
    readonly id: ActorId;
    readonly name: string;
    readonly classId: string;
    readonly rootComponentId: ComponentId;
    readonly components: readonly ActorComponent[];
    readonly tags: readonly string[];
}
export interface SceneDocument {
    readonly schemaVersion: 2;
    readonly kind: 'Scene';
    readonly coordinateSystem: 'RH_Y_UP_METERS_V1';
    readonly id: string;
    readonly actors: readonly Actor[];
    readonly authoring: SceneAuthoringMetadata;
}
export interface OutlinerFolder {
    readonly id: string;
    readonly name: string;
    readonly parentId: string | null;
}
export interface ActorFolderMembership {
    readonly actorId: ActorId;
    readonly folderId: string | null;
}
export interface SceneAuthoringMetadata {
    readonly digitalTwin?: import('./mcacc1441dfab.js').TwinDocument;
    readonly twinCatalogFiles?: readonly import('./mcacc1441dfab.js').TwinCatalogFile[];
    readonly buildSettings?: import('./ma4050e894135.js').BuildSettings;
    readonly webEffects?: import('./m4f9bb8de04da.js').WebEffects;
    /** User-authored display name, independent of source paths and persistent IDs. */
    readonly levelName?: string;
    readonly folders: readonly OutlinerFolder[];
    readonly actorFolders: readonly ActorFolderMembership[];
    readonly prefabInstances?: readonly PrefabInstanceMetadata[];
    readonly ueImport?: UEImportSceneMetadata;
}
export interface UEImportSceneMetadata {
    readonly packageId: string;
    readonly sourceProjectId: string;
    readonly sourceSnapshotId: string;
    readonly sourceLevelKey: string;
    readonly sourceActorIds: Readonly<Record<string, ActorId>>;
    readonly sourceComponentIds: Readonly<Record<string, ComponentId>>;
    readonly sourceFolderIds: Readonly<Record<string, string>>;
    readonly components: readonly {
        readonly sourceId: string;
        readonly webId: ComponentId;
        readonly sourceKind: string;
        readonly sourceKey: string;
        readonly visible: boolean;
        readonly hiddenInGame: boolean;
        readonly instances: readonly {
            readonly sourceId: string;
            readonly sourceIndex: number;
            readonly transform: Transform;
            readonly worldMatrix: readonly number[];
        }[];
    }[];
}
export interface PrefabPropertyOverride {
    readonly localComponentId: string;
    readonly fieldId: string;
    readonly value: unknown;
}
export interface PrefabInstanceMetadata {
    readonly inheritanceVersion?: 1;
    readonly removedComponentLocalIds?: readonly string[];
    readonly id: string;
    readonly prefabAssetId: string;
    readonly sourceRevisionId: string;
    readonly localActorIds: Readonly<Record<string, ActorId>>;
    readonly localComponentIds: Readonly<Record<string, ComponentId>>;
    readonly overrides: readonly PrefabPropertyOverride[];
}
export declare function createBasicActor(kind: BasicActorKind, actorId: ActorId, componentId: ComponentId): Omit<Actor, 'components'> & {
    readonly components: readonly SceneComponent[];
};
export declare function createBootstrapSceneDocument(): SceneDocument;
export {};
