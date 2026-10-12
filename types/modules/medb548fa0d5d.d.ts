import { type PublicationAdapter, type PublicationJob } from './mb7a9935c0a43.js';
export interface S3PublicationConfig {
    endpoint: string;
    bucket: string;
    region: string;
    allowHttp: boolean;
    /** Operator evidence is required; sending conditional headers alone proves no product capability. */
    conditionalWritesVerified: boolean;
}
export interface S3Credentials {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
}
export declare function signS3Request(url: URL, method: string, bytes: Uint8Array, region: string, credentials: S3Credentials, headers?: Record<string, string>, now?: Date): {
    authorization: string;
};
export declare function validateS3Config(config: S3PublicationConfig): S3PublicationConfig;
/** Main/server only. Bounded GET/HEAD/PUT, path-style SigV4; never List/Delete or remote code. */
export declare class S3Publication implements PublicationAdapter {
    private readonly credentials;
    private readonly request;
    private config;
    constructor(config: S3PublicationConfig, credentials: () => Promise<S3Credentials>, request?: typeof fetch);
    /** A unique small probe within the authorized levels prefix; never touches a release/head or deletes data. */
    verifyConnection(scope: string): Promise<void>;
    readObject(path: string, signal?: AbortSignal): Promise<Uint8Array<ArrayBuffer>>;
    private call;
    private read;
    readPublishedHead(job: PublicationJob, signal: AbortSignal): Promise<{
        hash: null;
        token: null;
    } | {
        hash: string;
        token: string;
    }>;
    inspectObject(path: string, length: number, hash: string, signal: AbortSignal): Promise<"present" | "absent">;
    putImmutable(path: string, bytes: Uint8Array, signal: AbortSignal): Promise<void>;
    verifyClosure(hash: string, signal: AbortSignal): Promise<void>;
    publish(job: PublicationJob): Promise<void>;
    resolveOutcome(job: PublicationJob): Promise<"published" | "unknown">;
}
