export interface CandidateMaterialAudit {
    readonly status: 'mesh-defaults-only' | 'baked-bindings' | 'unverified';
    readonly checkedComponents: number;
}
type Row = Record<string, unknown>;
/** The candidate exporter writes mesh assets, not component material overrides.
 * Detect known appearance loss before staging; equality is NOT editable-material certification.
 */
export declare function auditCandidateMaterials(assets: readonly Row[], components: readonly Row[], exportedMaterials?: ReadonlySet<string>, evaluatedSkeletalMaterials?: ReadonlyMap<string, readonly string[]>, skeletalVariants?: ReadonlyMap<string, readonly {
    sourceSlotIndex: number;
    sourceMaterialAssetId: string;
}[]>): CandidateMaterialAudit;
export {};
