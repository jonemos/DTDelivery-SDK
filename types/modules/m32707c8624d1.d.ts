import { type Object3D } from 'three';
import type { Vec3 } from './m69ba5f67c309.js';
import type { ActorIndex } from './mee8d76b34e4b.js';
import type { DeliveryViewer } from './m566d2c035974.js';
export interface HostBinding {
    key: string;
    componentId: string | null;
    /** Opaque host-owned JSON; SDK does not migrate, reset or write it. */
    data: Record<string, unknown>;
    presentation?: {
        policy: 'host-wins';
        positionMeters?: Vec3;
        visible?: boolean;
        color?: number;
    };
}
export interface HostBindingSnapshot {
    version: 1;
    revision: string;
    bindings: HostBinding[];
}
export interface BindingImpact {
    key: string;
    componentId: string | null;
    status: 'bound' | 'orphan_actor' | 'orphan_component';
}
export declare function validateHostBindings(value: HostBindingSnapshot): HostBindingSnapshot;
export declare function bindingImpacts(index: ActorIndex, input: HostBindingSnapshot): BindingImpact[];
export declare function assertPresentationOwnership(index: ActorIndex, snapshot: HostBindingSnapshot): void;
/** Presentation coordinates are parent-local RH Y-up meters. Original materials remain immutable. */
export declare function applyHostPresentation(target: Object3D, presentation: NonNullable<HostBinding['presentation']>): () => void;
export declare function bindHostData(viewer: DeliveryViewer, input: HostBindingSnapshot): {
    readonly impacts: BindingImpact[];
    update(next: HostBindingSnapshot): void;
    dispose(): void;
};
