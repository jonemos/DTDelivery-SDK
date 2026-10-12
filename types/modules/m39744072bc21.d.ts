import { ChunkReader, type ByteProvider } from './m5e6f4f6908c1.js';
import { type ApplicationManifest } from './m66fe03b4842c.js';
/** A derived render projection, never published as a modeling release. Asset IDs stay scoped to source levels. */
export declare function applicationReader(input: ApplicationManifest, provider: (release: string) => ByteProvider, signal?: AbortSignal): Promise<{
    reader: ChunkReader;
    hash: string;
    revision: string;
    aliases: Map<string, string>;
}>;
