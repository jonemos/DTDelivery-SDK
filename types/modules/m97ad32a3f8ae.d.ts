export interface ImportIssue {
    outcome: 'material-fallback' | 'excluded';
    actorIds: string[];
    sourceId: string;
    sourcePath: string;
    code: string;
    reason: string;
    /** v2: only these components failed; the owning actor and its siblings remain. */
    componentIds?: string[];
}
/** Complete source observation is independent of the admitted/renderable subset. */
export interface PartialImportRecord {
    version: 1 | 2;
    mode: 'full' | 'retry';
    observedActorIds: string[];
    requestedActorIds: string[];
    succeededActorIds: string[];
    issues: ImportIssue[];
    observedComponents?: {
        id: string;
        actorId: string;
    }[];
    requestedComponentIds?: string[];
    succeededComponentIds?: string[];
}
export declare function readPartialImport(value: unknown): PartialImportRecord;
export declare function retryImportComponentIds(record: PartialImportRecord): string[] | undefined;
export declare function retryImportActorIds(record: PartialImportRecord): string[];
export declare function mergePartialImport(current: PartialImportRecord | undefined, incoming: PartialImportRecord): PartialImportRecord;
