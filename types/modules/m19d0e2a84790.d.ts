import type { ByteProvider } from './m5e6f4f6908c1.js';
import type { ActorPlacement } from './mee8d76b34e4b.js';
import type { CollaborationApp, ReviewDecision, ReviewDocument } from './me723baf16c96.js';
import { type ApplicationManifest } from './m66fe03b4842c.js';
export { DELIVERY_SDK_VERSION } from './m2401b9bcc641.js';
export interface ApiPage<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
}
export interface CompositionListing {
    id: string;
    name: string;
    releaseHash: string;
    contract: string;
}
/** Token getter is evaluated for every request, including cache authorization. Tokens are never persisted. */
export declare class DeliveryApiClient {
    private readonly authorization;
    private readonly request;
    private root;
    constructor(root: URL, authorization: () => Promise<string | null>, request?: typeof fetch);
    private response;
    json<T>(path: string, signal?: AbortSignal): Promise<T>;
    write<T>(path: string, method: 'POST' | 'PATCH', body: unknown, signal?: AbortSignal): Promise<T>;
    releases(scope: string, id: string): Promise<ApiPage<{
        releaseHash: string;
    }>>;
    app(id: string): Promise<CollaborationApp>;
    application(id: string, revision: string): Promise<ApplicationManifest>;
    applicationReceipt(id: string, requestId: string): Promise<{
        fingerprint: string;
        revision: string;
    } | null>;
    apply(review: ReviewDocument, keys: string[], requestId: string): Promise<{
        revision: string;
    }>;
    rollback(app: CollaborationApp, rollbackTo: string, requestId: string): Promise<{
        revision: string;
    }>;
    registerApp(id: string, scope: string, compositionId: string, baselineRelease: string | null): Promise<CollaborationApp>;
    reviews(appId: string): Promise<ReviewDocument[]>;
    createReview(appId: string, candidateRelease: string): Promise<ReviewDocument>;
    decide(review: ReviewDocument, updates: {
        key: string;
        decision: ReviewDecision['decision'];
        reason: string;
    }[]): Promise<ReviewDocument>;
    private bytes;
    compositions(scope: string, page?: number): Promise<ApiPage<CompositionListing>>;
    publication(scope: string, id: string): Promise<{
        releaseHash: string | null;
        token: string | null;
    }>;
    actors(scope: string, id: string, hash: string, query?: string, page?: number): Promise<ApiPage<ActorPlacement>>;
    provider(scope: string, id: string, hash: string): ByteProvider;
    addonEvents(appId: string, executionId: string, listener: (event: unknown) => void): Promise<WebSocket>;
}
