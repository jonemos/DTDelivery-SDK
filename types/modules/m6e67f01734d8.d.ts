import { type StaticPreviewBundle } from './m0f0d622f8bdc.js';
export interface CandidateRefreshRow {
    readonly actorId: string;
    readonly name: string;
    readonly sourceChange: 'added' | 'removed' | 'changed' | 'unchanged' | 'unavailable';
    readonly webChanged: boolean;
    readonly conflict: boolean;
    readonly resolution: 'web' | 'source' | 'merge';
    readonly sourceRestricted?: boolean;
}
export interface CandidateRefreshPlan {
    readonly current: StaticPreviewBundle;
    readonly incoming: StaticPreviewBundle;
    readonly rows: readonly CandidateRefreshRow[];
    readonly unchanged: boolean;
}
export declare function planCandidateRefresh(currentInput: StaticPreviewBundle, incomingInput: StaticPreviewBundle): Promise<CandidateRefreshPlan>;
/** Stage in a new namespace: never overwrite an asset held by the original level, Undo or Runtime. */
export declare function buildCandidateRefresh(plan: CandidateRefreshPlan, choices: Readonly<Record<string, 'web' | 'source'>>, createId?: () => `${string}-${string}-${string}-${string}-${string}`): Promise<StaticPreviewBundle>;
