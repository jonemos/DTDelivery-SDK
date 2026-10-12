import { type Inventory } from './m52ceea7b635b.js';
import { type StaticPreviewBundle } from './m0f0d622f8bdc.js';
import { type TextureImportOptions, type WebTextureEncoder } from './mae043aea4362.js';
import { type CandidateMaterialAudit } from './md356ef9a3849.js';
import type { ImportProgress } from './m5389db5360c3.js';
import { type CompatibilityBake } from './m1fc4eeaffa28.js';
import { type AppearanceDecision } from './m2e501185a8ea.js';
export interface CandidateFile {
    readonly name: string;
    readonly webkitRelativePath: string;
    readonly size: number;
    arrayBuffer(): Promise<ArrayBuffer>;
}
interface Payload {
    assetId: string;
    name: string;
    folderId: string;
    sourcePath: string;
    path: string;
    sha256: string;
    byteLength: number;
    kind?: 'StaticMesh' | 'Material';
    materialSlotIndices?: number[];
    lod?: {
        version: 1;
        origin: 'existing' | 'generated-transient';
        sourceLodIndex: 1;
        distanceMeters: number;
        hysteresis: number;
        level1: {
            path: string;
            sha256: string;
            byteLength: number;
            materialSlotIndices: number[];
        };
    };
}
export interface CandidateSelection {
    inventory: Inventory;
    payloads: Payload[];
    files: ReadonlyMap<string, CandidateFile>;
    inventoryJson: string;
    exportReportJson: string;
    compatibility?: CompatibilityBake;
    summary: {
        level: string;
        placements: number;
        assets: number;
        skeletal: number;
        hidden: number;
        nonPositive: number;
        issues: number;
        hierarchy: 'preserved' | 'legacy-flat';
        materials?: CandidateMaterialAudit;
    };
}
/** Explicit file capabilities only (folder picker or authenticated bounded transfer). Never fetches report URLs. */
export declare function inspectCandidateFiles(selected: readonly CandidateFile[], signal: AbortSignal): Promise<CandidateSelection>;
export declare function stageCandidate(selection: CandidateSelection, signal: AbortSignal, progress: (message: string) => void, textureOptions?: TextureImportOptions, projectName?: string, onProgress?: (value: ImportProgress) => void, encode?: WebTextureEncoder, appearanceDecisions?: readonly AppearanceDecision[]): Promise<StaticPreviewBundle>;
export declare function saveNewCandidate(bundle: StaticPreviewBundle): Promise<string>;
export {};
