/// <reference types="node" />
import { CollaborationApi, type CollaborationAuthorization } from './modules/me9be7fced53f.js';
import { type PublicationErrorCode } from './modules/mb7a9935c0a43.js';
export * from './modules/m4a6e328669ee.js';
export interface DeliveryApiConfiguration {
    version: 1;
    host: string;
    port: number;
    origin: string;
    scope: string;
    allowWrites: boolean;
    dataDirectory: string;
    localStore: string | null;
    s3Profiles: string | null;
    /** Operator-selected IDs; previously registered IDs are also followed. No bucket listing. */
    compositionIds?: string[];
}
/** Paths belong to the config file's directory, independent of the caller's working directory. */
export declare function loadDeliveryApiConfiguration(path: string): Promise<DeliveryApiConfiguration>;
/** Operator-only CLI registration. No HTTP route trusts a submitted job or arbitrary release hash. */
export declare function registerDeliveryPublication(c: DeliveryApiConfiguration, jobPath: string): Promise<{
    registered: boolean;
    compositionId: string;
    releaseHash: string;
}>;
export interface DeliveryPublicationSyncStatus {
    enabled: boolean;
    checking: boolean;
    lastCheckedAt: string | null;
    checked: number;
    registered: number;
    failures: {
        compositionId: string | null;
        code: PublicationErrorCode;
    }[];
}
export interface DeliveryApiHostOptions {
    token?: string;
    authorize?: CollaborationAuthorization;
    onPublicationSync?: (status: DeliveryPublicationSyncStatus) => void;
}
/** Standalone starter, or replace authorization with the external project's own login adapter. */
export declare function startDeliveryApi(c: DeliveryApiConfiguration, options?: DeliveryApiHostOptions): Promise<{
    server: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
    api: CollaborationApi;
    tokenFile: string | null;
    publicationSyncStatus: () => DeliveryPublicationSyncStatus;
    synchronizePublications: () => Promise<DeliveryPublicationSyncStatus>;
    close: () => Promise<void>;
}>;
