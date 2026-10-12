import type { CollaborationBackend } from './me9be7fced53f.js';
import { S3Publication } from './medb548fa0d5d.js';
import type { PublicationJob } from './mb7a9935c0a43.js';
/** The service owns catalog/ACLs. S3 credentials and signed reads never enter the browser SDK. */
export declare class S3CollaborationBackend implements CollaborationBackend {
    readonly storage: S3Publication;
    readonly catalog: (scope: string) => Promise<PublicationJob[]>;
    readonly objects: {
        read: (path: string) => Promise<Uint8Array<ArrayBuffer>>;
    };
    constructor(storage: S3Publication, catalog: (scope: string) => Promise<PublicationJob[]>);
    readPublishedHead(job: PublicationJob): Promise<{
        hash: null;
        token: null;
    } | {
        hash: string;
        token: string;
    }>;
}
