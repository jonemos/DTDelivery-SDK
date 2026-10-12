import { type Object3D } from 'three';
import type { AssetReference } from './mcec497bf55e6.js';
import { type AssetRegistryStorage } from './m5e4e772c2f57.js';
export interface StaticMeshResourceLease {
    readonly assetId: string;
    readonly revisionId: string;
    instantiate(): Object3D;
    release(): void;
}
type TemplateLoader = (bytes: Uint8Array) => Promise<Object3D>;
export declare class StaticMeshResourceCache {
    private readonly storage;
    private readonly loadTemplate;
    private readonly typedMaterialGeometry;
    private readonly entries;
    private readonly aliases;
    private readonly pendingResolutions;
    constructor(storage: AssetRegistryStorage, loadTemplate?: TemplateLoader, typedMaterialGeometry?: boolean);
    acquire(reference: AssetReference): Promise<StaticMeshResourceLease>;
    entryCount(): number;
    /** Ordinary entries release at the last lease; prepared previews also evict rebuildable caches. */
    trimUnusedGeometry(): void;
    /** Transient representation changes, not document/asset revision edits. */
    subscribeInvalidation(listener: (assetId: string) => void): () => void;
    private resolve;
    private acquireEntry;
    private loadLodTemplate;
    private release;
}
export declare function cloneTemplateInstance(template: Object3D): Object3D;
export declare function disposeStaticMeshInstance(instance: Object3D): void;
export {};
