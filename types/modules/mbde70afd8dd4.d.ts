import { S3Publication } from './medb548fa0d5d.js';
import { type PublicationProfile } from './mb7a9935c0a43.js';
export interface RemoteStorageInput {
    endpoint: string;
    bucket: string;
    scope: string;
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string;
}
export interface RemoteStorageDetails {
    profileId: string;
    endpoint: string;
    bucket: string;
    scope: string;
    region: string;
    credentialsSaved: boolean;
}
export interface SecretEncryption {
    available(): boolean;
    encrypt(value: string): Uint8Array;
    decrypt(value: Uint8Array): string;
}
/** Main-process only. The renderer never receives stored keys; encryption is provided by OS safeStorage. */
export declare class RemoteStorageConnections {
    private readonly encryption;
    private readonly request;
    private readonly path;
    private queue;
    constructor(root: string, encryption: SecretEncryption, request?: typeof fetch);
    private rows;
    profiles(): Promise<PublicationProfile[]>;
    details(): Promise<RemoteStorageDetails[]>;
    adapter(profile: PublicationProfile): Promise<S3Publication | undefined>;
    save(input: RemoteStorageInput): Promise<PublicationProfile>;
}
