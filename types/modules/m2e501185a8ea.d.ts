import { type AssetRegistrySnapshot } from './m5e4e772c2f57.js';
import type { CandidateSelection } from './m023a36aa6638.js';
export type AppearanceAction = 'approximate' | 'basic';
export interface MaterialUvTarget {
    readonly assetId: string;
    readonly assetName: string;
    readonly payloadPath: string;
    readonly sourceHash: string;
    readonly primitiveIndex: number;
    readonly availableUvs: readonly number[];
}
export interface AppearanceIssue {
    readonly uvTargets?: readonly MaterialUvTarget[];
    readonly key: string;
    readonly assetId: string;
    readonly assetName: string;
    readonly sourcePath: string;
    readonly payloadPath: string;
    readonly sourceHash: string;
    readonly materialIndex: number;
    readonly materialName: string;
    readonly features: readonly string[];
    readonly approximation: string | null;
}
export interface AppearanceDecision extends AppearanceIssue {
    readonly action: AppearanceAction;
}
export interface AppearanceReviewRecord {
    readonly version: 1 | 2 | 3 | 4;
    readonly outcome: 'user-selected-approximation';
    readonly decisions: readonly AppearanceDecision[];
}
export declare class AppearanceReviewRequired extends Error {
    readonly issues: readonly AppearanceIssue[];
    constructor(issues: readonly AppearanceIssue[]);
}
interface SourcePayload {
    assetId: string;
    name: string;
    sourcePath: string;
    path: string;
    sha256: string;
    kind?: 'StaticMesh' | 'SkeletalMesh' | 'Material';
}
export declare function applyAppearanceDecisions(bytes: Uint8Array, p: SourcePayload, decisions: readonly AppearanceDecision[], uvTargets?: readonly MaterialUvTarget[]): Uint8Array;
/** Complete, hash-bound preflight. Reads only authenticated candidate files; no storage or image decode. */
export declare function inspectCandidateAppearance(selection: CandidateSelection, signal: AbortSignal, progress?: (message: string) => void, onFailure?: (assetId: string, error: unknown) => void): Promise<readonly AppearanceIssue[]>;
export declare function requireAppearanceDecisions(issues: readonly AppearanceIssue[], decisions: readonly AppearanceDecision[]): void;
/** Validate saved choices against the preserved source payload and original export report, including refresh namespaces. */
export declare function validateAppearanceReview(record: AppearanceReviewRecord, assets: AssetRegistrySnapshot, exportReportJson: string, requireRevisionReference?: boolean): void;
export {};
