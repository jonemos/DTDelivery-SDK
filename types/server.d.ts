/// <reference types="node" />
import { CollaborationApi, type CollaborationAuthorization } from './modules/me9be7fced53f.js';
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
}
/** Paths belong to the config file's directory, independent of the caller's working directory. */
export declare function loadDeliveryApiConfiguration(path: string): Promise<DeliveryApiConfiguration>;
/** Operator-only CLI registration. No HTTP route trusts a submitted job or arbitrary release hash. */
export declare function registerDeliveryPublication(c: DeliveryApiConfiguration, jobPath: string): Promise<{
    registered: boolean;
    compositionId: string;
    releaseHash: string;
}>;
export interface DeliveryApiHostOptions {
    token?: string;
    authorize?: CollaborationAuthorization;
}
/** Standalone starter, or replace authorization with the external project's own login adapter. */
export declare function startDeliveryApi(c: DeliveryApiConfiguration, options?: DeliveryApiHostOptions): Promise<{
    server: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
    api: CollaborationApi;
    tokenFile: string | null;
    close: () => Promise<void>;
}>;
