import { Box3, Mesh, Object3D, Raycaster, type Camera, type Intersection } from 'three';
import type { Actor, SkeletalAttachmentReference } from './mcec497bf55e6.js';
import { type StaticMeshResourceCache } from './mf9caaacbc8b5.js';
import type { SkeletalMeshResourceCache } from './m39abef5069c6.js';
import { AnimationPlaybackWorld } from './me7d8c6ea26b6.js';
import type { AnimationClipResolver } from './m8230ac8a635f.js';
import './mb23ebdb9d1d9.js';
import { type MaterialResolver } from './m4f696d79727f.js';
import { AddonHost, type AddonHostOptions } from './mbc0212f31474.js';
export interface ProjectedActor {
    readonly addons?: AddonHost;
    readonly viewDependentInstancing: boolean;
    readonly actorId: string;
    readonly object: Object3D;
    update(actor: Actor): void;
    /** Refresh live slots using this material while keeping geometry, pose and other slots. */
    refreshMaterial?(assetId: string | readonly string[]): Promise<boolean>;
    setSelected(selected: boolean): void;
    setHelpersVisible?(visible: boolean): void;
    setIconPresentation?(visible: boolean, scale: number): void;
    prepareHelperView?(camera: Camera): void;
    prepareFrame(frameId: number, deltaSeconds: number): void;
    prepareView(camera: Camera): () => void;
    instancingMeshes(includeInactiveLods?: boolean): readonly Mesh[];
    /** Owned render content, including primitives/selected/skinned meshes; excludes helpers/addon displays. */
    contentMeshes?(): readonly Mesh[];
    getBounds(): Box3;
    intersect(raycaster: Raycaster): readonly Intersection[];
    readonly ready: Promise<void>;
    attachmentAnchor(reference: SkeletalAttachmentReference): Object3D | null;
    dispose(): void;
}
export declare class ThreeRenderAdapter {
    private readonly staticMeshResources?;
    private readonly resolveMaterial?;
    private readonly skeletalMeshResources?;
    private readonly resolveAnimationClip?;
    private readonly addonOptions?;
    private readonly animationWorld;
    private readonly componentRoots;
    private readonly projectedActors;
    private nextProjection;
    constructor(staticMeshResources?: StaticMeshResourceCache | undefined, resolveMaterial?: MaterialResolver | undefined, skeletalMeshResources?: SkeletalMeshResourceCache | undefined, resolveAnimationClip?: AnimationClipResolver | undefined, animationWorld?: AnimationPlaybackWorld, addonOptions?: AddonHostOptions | undefined);
    projectActor(actor: Actor, prefabActor?: boolean, addonOwner?: boolean): ProjectedActor;
    private projectActorContent;
    private projectSingleComponent;
}
