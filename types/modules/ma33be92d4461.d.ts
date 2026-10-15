export declare const PUBLICATION_CATALOG_LIMIT: number;
export interface PublicationCatalog {
    readonly version: 1;
    readonly scope: string;
    readonly modelIds: readonly string[];
}
export interface DefaultDeliveryConnection {
    readonly version: 1;
    readonly url: string | null;
    readonly modelIds?: readonly string[];
}
export declare function validateDefaultDeliveryConnection(value: unknown): DefaultDeliveryConnection;
/** Identities only: the current verified head, rather than this discovery index, owns the release pin. */
export declare function validatePublicationCatalog(value: unknown, scope: string): PublicationCatalog;
export declare function publicationCatalogPath(scope: string): string;
export declare function publicationConnectionUrl(base: URL, scope: string): URL;
/** A user/host supplied URL; published JSON can never redirect storage or supply executable adapters. */
export declare function parsePublicationConnectionUrl(input: URL): {
    base: URL;
    publication: {
        compositionId?: string | undefined;
        scope: string;
    };
};
