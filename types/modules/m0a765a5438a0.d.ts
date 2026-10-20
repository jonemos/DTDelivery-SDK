export declare const STORAGE_DIRECTORY_PATH = "levels/delivery-connections.json";
export interface StorageLocation {
    bucket: string;
    prefix: string;
    scopes: string[];
}
export interface StorageDirectory {
    version: 1;
    locations: StorageLocation[];
}
export interface StorageConnection {
    endpoint: string;
    bucket: string;
    prefix: string;
    scope: string;
}
export declare function storageEndpoint(value: string): string;
export declare function validateStorageLocation(value: StorageLocation): StorageLocation;
export declare function validateStorageDirectory(input: unknown): StorageDirectory;
export declare function mergeStorageDirectories(...values: StorageDirectory[]): StorageDirectory;
export declare function storageConnectionUrl(value: StorageConnection): URL;
export declare function splitStorageConnection(url: URL): StorageConnection;
export declare function storageConnectionLabel(value: StorageConnection): string;
/** Read a single public directory at a host-supplied seed. No bucket listing, credentials or cross-origin redirects. */
export declare function readStorageDirectory(seed: StorageConnection, signal: AbortSignal): Promise<StorageDirectory>;
