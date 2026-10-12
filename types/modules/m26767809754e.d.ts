import { ChunkExportDirectory } from './m9defb2476ead.js';
import { type PublicationAdapter, type PublicationJob } from './mb7a9935c0a43.js';
export declare function atomicPublicationJSON(path: string, value: unknown): Promise<void>;
/** Controlled local publisher only. SQLite's OS lock is released on process exit. */
export declare class PublicationRepository implements PublicationAdapter {
    readonly root: string;
    readonly objects: ChunkExportDirectory;
    private constructor();
    static create(root: string): Promise<PublicationRepository>;
    private path;
    private headPath;
    readPublishedHead(job: PublicationJob): Promise<{
        hash: string;
        token: string;
    } | {
        hash: null;
        token: null;
    }>;
    inspectObject(path: string, length: number, hash: string): Promise<"present" | "absent">;
    putImmutable(path: string, bytes: Uint8Array, signal: AbortSignal): Promise<void>;
    verifyClosure(hash: string, signal: AbortSignal): Promise<void>;
    private locked;
    private receipt;
    private recover;
    publish(job: PublicationJob): Promise<void>;
    resolveOutcome(job: PublicationJob): Promise<"published" | "not_published">;
}
/** Local journal is separate from packages and host business data. */
export declare class PublicationJournal {
    readonly root: string;
    constructor(root: string);
    save(job: PublicationJob): Promise<void>;
    read(id: string): Promise<PublicationJob>;
}
