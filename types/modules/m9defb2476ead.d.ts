/** Native export capability is bound to one user-selected directory; renderer never supplies filesystem paths. */
export declare class ChunkExportDirectory {
    private root;
    private queue;
    static create(path: string): Promise<ChunkExportDirectory>;
    private path;
    read(path: string): Promise<Uint8Array>;
    put(path: string, bytes: Uint8Array): Promise<void>;
    finish(hash: string, expected: string | null): Promise<void>;
    /** Checks the complete closure without changing the head or creating auxiliary files. Legacy sidecars are ignored. */
    verify(hash: string): Promise<import("./m58f4c922e436.js").DeliveryManifest>;
    private serial;
    private atomic;
}
