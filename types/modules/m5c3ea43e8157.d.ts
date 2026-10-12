/** Versioned data only. Source identities are opaque persistent IDs, never renderer UUIDs or names. */
export interface BakedMaterialBinding {
    readonly version: 1;
    readonly source: {
        readonly projectId: string;
        readonly meshId: string;
        readonly materialId: string;
        readonly slotId: string;
        /** null means mesh/slot scope; otherwise a project+level-scoped source placement key. */
        readonly placementId: string | null;
    };
    readonly inputs: {
        readonly sourceMeshHash: string;
        readonly effectiveMaterialHash: string;
        readonly recipeHash: string;
        readonly bakedPayloadHash: string;
    };
    readonly target: {
        readonly meshAssetId: string;
        readonly meshRevisionId: string;
        readonly meshPayloadHash: string;
        readonly slotId: string;
        readonly placement: {
            readonly componentId: string;
        } | null;
    };
}
export declare function validateBakedMaterialBinding(value: unknown): BakedMaterialBinding;
export declare function assertBakedMaterialTarget(binding: BakedMaterialBinding, target: {
    meshAssetId: string;
    meshRevisionId: string;
    meshPayloadHash: string;
    slotId: string;
    componentId: string;
}): void;
