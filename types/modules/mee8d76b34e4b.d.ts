import { type SceneDocument, type AssetReference, type SceneAttachmentReference } from './mcec497bf55e6.js';
import { type Matrix4 } from './m7aea83ff3a59.js';
import type { Vec3 } from './m69ba5f67c309.js';
import { type DeliveryManifest } from './m58f4c922e436.js';
export interface ActorTarget {
    releaseHash: string;
    compositionId: string;
    mountId: string | null;
    actorId: string;
}
export interface ActorPlacement extends ActorTarget {
    serviceKey: string;
    origin: 'level' | 'composition';
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
    attachmentParent: SceneAttachmentReference | null;
    components: {
        id: string;
        type: string;
        parentComponentId: string | null;
    }[];
    meshes: {
        componentId: string;
        asset: AssetReference | null;
        shape: string | null;
    }[];
    sourceWorldMatrix: Matrix4 | null;
    worldMatrix: Matrix4 | null;
    positionMeters: Vec3 | null;
    positionUeCm: {
        X: number;
        Y: number;
        Z: number;
    } | null;
    spatialStatus: 'static' | 'bone-socket-unsupported' | 'no-spatial-root';
    excludedSourceDefault: boolean;
    loaded: boolean;
    visible: boolean;
}
export interface ActorIndex {
    kind: 'dt-actors';
    version: 1;
    releaseHash: string;
    compositionId: string;
    coordinateSystem: 'RH_Y_UP_METERS_V1';
    matrixLayout: 'row-major';
    actors: ActorPlacement[];
}
/** Identity independent of names, list order, renderer UUIDs and release hashes. */
export declare function actorServiceKey(target: Pick<ActorTarget, 'compositionId' | 'mountId' | 'actorId'>): string;
export declare function createActorIndex(manifest: DeliveryManifest, releaseHash: string, scenes: ReadonlyMap<string, SceneDocument>): ActorIndex;
export declare function placeActorIndex(index: ActorIndex, manifest: DeliveryManifest): ActorIndex;
