import { type ApplicationManifest } from './m66fe03b4842c.js';
import { type HostBindingSnapshot } from './m32707c8624d1.js';
import { type CollaborationApp, type ReviewChange, type ReviewDecision } from './me723baf16c96.js';
export declare class CollaborationConflict extends Error {
    constructor();
}
/** Example host-owned DB. Modeling publication has no handle to this database. */
export declare class CollaborationStore {
    private db;
    constructor(path: string);
    close(): void;
    private transaction;
    app(id: string): CollaborationApp;
    createApp(id: string, scope: string, compositionId: string, baselineRelease: string | null): CollaborationApp;
    /** Host-only edit entry point. Review/model apply never invokes this. */
    writeHostBindings(appId: string, expected: string, input: HostBindingSnapshot): void;
    createReview(appId: string, expectedApplication: string | null, overrideRevision: string, baseRelease: string | null, candidateRelease: string, changes: ReviewChange[]): import("./me723baf16c96.js").ReviewDocument;
    review(appId: string, id: string): import("./me723baf16c96.js").ReviewDocument;
    reviews(appId: string): import("./me723baf16c96.js").ReviewDocument[];
    application(appId: string, revision: string): ApplicationManifest;
    receipt(appId: string, requestId: string): {
        fingerprint: string;
        revision: string;
    } | null;
    commitApplication(appId: string, requestId: string, fingerprint: string, input: ApplicationManifest): {
        revision: string;
    };
    decide(appId: string, id: string, expected: number, updates: {
        key: string;
        decision: ReviewDecision['decision'];
        reason: string;
    }[], reviewer: string): import("./me723baf16c96.js").ReviewDocument;
}
