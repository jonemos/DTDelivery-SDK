import type { AssetRegistrySnapshot } from './m5e4e772c2f57.js';
import type { SceneDocument } from './mcec497bf55e6.js';
import { type StaticPreviewBundle, type StaticPreviewRecipe } from './m0f0d622f8bdc.js';
import { type CandidateRefreshPlan } from './m6e67f01734d8.js';
type VersionRecipe = Omit<StaticPreviewRecipe, 'levelVersions' | 'refreshUndoScene'>;
export interface CandidateVersion {
    number: number;
    savedAt: number;
    scene: SceneDocument;
    recipe: VersionRecipe;
    assets: Omit<AssetRegistrySnapshot, 'blobs'>;
    blobKeys: string[];
}
export interface CandidateVersionHistory {
    version: 1;
    current: number;
    action: 'update' | 'restore';
    restoredFrom?: number;
    previous: CandidateVersion[];
}
/** Validate every checkpoint against its own asset heads, while retaining immutable bytes once. */
export declare function validateCandidateVersions(bundle: StaticPreviewBundle): void;
export declare function buildCandidateVersionUpdate(plan: CandidateRefreshPlan, choices: Readonly<Record<string, 'web' | 'source'>>): Promise<StaticPreviewBundle>;
export declare function restoreCandidateVersion(current: StaticPreviewBundle, number: number): StaticPreviewBundle;
export declare function assertCandidateVersionWrite(current: StaticPreviewBundle, next: StaticPreviewBundle): void;
export {};
