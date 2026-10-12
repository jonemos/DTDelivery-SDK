import type { Vec3 } from './m69ba5f67c309.js';
import { type SceneDocument, type AssetReference } from './mcec497bf55e6.js';
import { type Matrix4 } from './m7aea83ff3a59.js';
import { createTwinExports, type TwinObject } from './mcacc1441dfab.js';
import { type DeliveryManifest } from './m58f4c922e436.js';
export interface EquipmentTarget {
    releaseHash: string;
    mountId: string;
    objectId: string;
}
export interface EquipmentPlacement extends EquipmentTarget {
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
    object: TwinObject;
    componentIds: string[];
    meshes: {
        componentId: string;
        asset: AssetReference | null;
        shape: string | null;
    }[];
    spatialStatus: 'static' | 'instance-unsupported' | 'bone-socket-unsupported' | 'source-default-excluded';
    sourceWorldMatrix: Matrix4 | null;
    worldMatrix: Matrix4 | null;
    positionMeters: Vec3 | null;
    positionUeCm: {
        X: number;
        Y: number;
        Z: number;
    } | null;
    loaded: boolean;
    visible: boolean;
}
export interface EquipmentIndex {
    kind: 'dt-equipment';
    version: 1;
    releaseHash: string;
    compositionId: string;
    coordinateSystem: 'RH_Y_UP_METERS_V1';
    matrixLayout: 'row-major';
    capabilityExecution: 'declarations-only';
    catalogs: {
        levelHash: string;
        twin: ReturnType<typeof createTwinExports>['twin'];
        bindings: ReturnType<typeof createTwinExports>['bindings'];
    }[];
    placements: EquipmentPlacement[];
}
export declare function equipmentPath(hash: string): string;
/** Derived from frozen document IDs, never renderer UUIDs or mesh/display names. */
export declare function createEquipmentIndex(manifest: DeliveryManifest, releaseHash: string, scenes: ReadonlyMap<string, SceneDocument>): EquipmentIndex;
/** Mount controls update derived positions; the published release stays immutable. */
export declare function placeEquipmentIndex(index: EquipmentIndex, manifest: DeliveryManifest): EquipmentIndex;
