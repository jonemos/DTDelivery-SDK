import type { ActorDifference } from './m5b5c85898923.js';
import type { HostBindingSnapshot } from './m32707c8624d1.js';
export interface CollaborationApp {
    id: string;
    scope: string;
    compositionId: string;
    baselineRelease: string | null;
    appliedRevision: string | null;
    host: HostBindingSnapshot;
}
export interface ReviewChange {
    key: string;
    kind: ActorDifference['kind'];
    beforeHash: string | null;
    afterHash: string | null;
    name: string;
    fields: string[];
    dependencies: string[];
}
export interface ReviewDecision {
    decision: 'approved' | 'held' | 'unreviewed';
    reason: string;
    reviewer: string;
    at: number;
    contentHash: string;
}
export interface ReviewDocument {
    version: 1;
    id: string;
    appId: string;
    compositionId: string;
    baseApplication: string | null;
    baseRelease: string | null;
    candidateRelease: string;
    overrideRevision: string;
    revision: number;
    changes: ReviewChange[];
    decisions: Record<string, ReviewDecision>;
}
export declare function reviewChanges(differences: ActorDifference[]): ReviewChange[];
export declare function validateReview(value: ReviewDocument): ReviewDocument;
