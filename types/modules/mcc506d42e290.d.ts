import type { RemoteStorageConnections, RemoteStorageInput, RemoteStorageDetails } from './mbde70afd8dd4.js';
import { type PublicationAdapter, type PublicationJob, type PublicationProfile } from './mb7a9935c0a43.js';
export type PublicationRequest = {
    action: 'profiles' | 'jobs';
} | {
    action: 'localProfile';
    scope: string;
    name: string;
} | {
    action: 'remoteProfile';
    connection: RemoteStorageInput;
} | {
    action: 'prepare';
    profileId: string;
    compositionId: string;
} | {
    action: 'put';
    token: string;
    path: string;
    bytes: Uint8Array;
} | {
    action: 'complete';
    token: string;
    hash: string;
} | {
    action: 'status' | 'start' | 'cancel' | 'deleteJob' | 'disconnectLocal';
    id: string;
};
export interface PublicationReply {
    profiles?: PublicationProfile[];
    profileAliases?: Record<string, string>;
    locations?: Record<string, string>;
    remotes?: RemoteStorageDetails[];
    jobs?: PublicationJob[];
    token?: string;
    job?: PublicationJob;
    warning?: string;
}
/** Main-process service: persistent paths never come from renderer payloads. */
export declare class PublicationService {
    readonly root: string;
    private readonly adapterFactory?;
    private readonly remotes?;
    private active;
    private journal;
    private metadataQueue;
    private starting;
    constructor(root: string, adapterFactory?: ((profile: PublicationProfile) => Promise<PublicationAdapter>) | undefined, remotes?: RemoteStorageConnections | undefined);
    private configurations;
    private metadata;
    private listing;
    private profileListing;
    profiles(): Promise<PublicationProfile[]>;
    configureS3(profiles: PublicationProfile[]): Promise<void>;
    addLocalProfile(root: string, scope: string, name: string): Promise<PublicationProfile>;
    private configuration;
    disconnectLocal(id: string): Promise<void>;
    deleteJob(id: string): Promise<void>;
    private packagePath;
    prepare(profileId: string, compositionId: string): Promise<`${string}-${string}-${string}-${string}-${string}`>;
    private source;
    put(token: string, path: string, bytes: Uint8Array): Promise<void>;
    private exists;
    complete(token: string, hash: string): Promise<PublicationJob>;
    jobs(): Promise<PublicationJob[]>;
    status(id: string): Promise<PublicationJob>;
    cancel(id: string): void;
    start(id: string): Promise<PublicationJob>;
    private startJob;
    idle(id: string): Promise<PublicationJob>;
    request(input: unknown, selectDirectory: () => Promise<string | null>): Promise<PublicationReply>;
}
