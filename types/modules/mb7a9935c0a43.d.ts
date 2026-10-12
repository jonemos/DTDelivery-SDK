/** Configuration is chosen by the host, never by imported release data. No credentials. */
export interface PublicationProfile {
    id: string;
    name: string;
    kind: 'local' | 's3';
    scope: string;
}
export type PublicationState = 'local_verified' | 'probing' | 'uploading' | 'remote_verified' | 'publishing' | 'published' | 'failed' | 'cancelled' | 'conflict' | 'outcome_unknown';
export type PublicationErrorCode = 'invalid' | 'missing' | 'corrupt' | 'denied' | 'unavailable' | 'conflict' | 'cancelled' | 'outcome_unknown';
export declare class PublicationError extends Error {
    readonly code: PublicationErrorCode;
    constructor(code: PublicationErrorCode);
}
export interface PublicationHead {
    hash: string | null;
    token: string | null;
}
export interface PublicationJob {
    version: 1;
    id: string;
    profile: PublicationProfile;
    compositionId: string;
    target: string;
    expected: PublicationHead | null;
    state: PublicationState;
    completed: string[];
    error: PublicationErrorCode | null;
}
export interface PublicationSource {
    read(path: string): Promise<Uint8Array>;
    verify(hash: string): Promise<unknown>;
}
export interface PublicationAdapter {
    readPublishedHead(job: PublicationJob, signal: AbortSignal): Promise<PublicationHead>;
    inspectObject(path: string, bytes: number, hash: string, signal: AbortSignal): Promise<'present' | 'absent'>;
    putImmutable(path: string, bytes: Uint8Array, signal: AbortSignal): Promise<void>;
    verifyClosure(hash: string, signal: AbortSignal): Promise<void>;
    publish(job: PublicationJob): Promise<void>;
    resolveOutcome(job: PublicationJob): Promise<'published' | 'not_published' | 'unknown'>;
}
export declare function publicationSegment(value: unknown): asserts value is string;
export declare function validatePublicationProfile(value: PublicationProfile): PublicationProfile;
export declare function validatePublicationJob(value: PublicationJob): PublicationJob;
export declare function createPublicationJob(profile: PublicationProfile, compositionId: string, target: string): PublicationJob;
/** Journal writes precede publishing. Resuming always checks bytes, never trusts completed[] alone. */
export declare function runPublication(input: PublicationJob, source: PublicationSource, adapter: PublicationAdapter, save: (job: PublicationJob) => Promise<void>, signal?: AbortSignal): Promise<PublicationJob>;
export declare function publicationKey(scope: string, compositionId: string, path: string): string;
export declare const publicationIdentity: (job: PublicationJob) => string;
