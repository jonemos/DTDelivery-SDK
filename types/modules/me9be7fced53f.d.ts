import { type PublicationJob } from './mb7a9935c0a43.js';
import { ChunkReader } from './m5e6f4f6908c1.js';
import { CollaborationStore } from './m8f4e11ff6c43.js';
import { AddonControlStore } from './m424529852f4d.js';
export interface CollaborationPrincipal {
    subject: string;
    scopes: readonly string[];
    canReview?: boolean;
    canApply?: boolean;
}
export type CollaborationAuthorization = (request: Request) => Promise<CollaborationPrincipal | null>;
export interface CollaborationBackend {
    root?: string;
    objects: {
        read(path: string): Promise<Uint8Array>;
    };
    readPublishedHead(job: PublicationJob): Promise<{
        hash: string | null;
        token: string | null;
    }>;
    /** Trusted host publication registry. Never populate from an unauthenticated browser declaration. */
    catalog?(scope: string): Promise<PublicationJob[]>;
}
export declare const apiJSON: (value: unknown, status?: number) => Response;
/** Reference local API. Production supplies authorization and a catalog backed by its own service. */
export declare class CollaborationApi {
    readonly repository: CollaborationBackend;
    readonly authorize: CollaborationAuthorization;
    readonly store?: CollaborationStore | undefined;
    readonly addonControls?: AddonControlStore | undefined;
    constructor(repository: CollaborationBackend, authorize: CollaborationAuthorization, store?: CollaborationStore | undefined, addonControls?: AddonControlStore | undefined);
    private addonCatalog;
    private addonRequest;
    private body;
    private apps;
    catalog(scope: string): Promise<PublicationJob[]>;
    release(scope: string, compositionId: string, hash: string): Promise<import("./m58f4c922e436.js").DeliveryManifest>;
    reader(): ChunkReader;
    handle(request: Request): Promise<Response>;
}
