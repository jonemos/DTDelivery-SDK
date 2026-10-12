import { type ReviewSnapshot } from './m5b5c85898923.js';
import type { ChunkReader } from './m5e6f4f6908c1.js';
import type { ReviewDocument } from './me723baf16c96.js';
export interface AppliedActor {
    key: string;
    sourceRelease: string;
    contentHash: string;
}
export interface ApplicationManifest {
    kind: 'dt-application';
    version: 1;
    compositionId: string;
    previous: string | null;
    candidateRelease: string;
    reviewId: string | null;
    reviewRevision: number | null;
    overrideRevision: string;
    actors: AppliedActor[];
    removed: string[];
    rollbackOf: string | null;
}
export declare function validateApplication(input: unknown): ApplicationManifest;
export declare const applicationHash: (a: ApplicationManifest) => Promise<string>;
export declare function applicationSnapshot(reader: ChunkReader, input: ApplicationManifest, signal?: AbortSignal): Promise<ReviewSnapshot>;
/** Dependency groups are rebound only to a published release containing exactly the chosen content. */
export declare function resolveApplication(reader: ChunkReader, before: ReviewSnapshot | null, candidate: ReviewSnapshot, review: ReviewDocument, selected: string[]): Promise<ApplicationManifest>;
