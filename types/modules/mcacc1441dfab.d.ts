import type { SceneDocument, TwinMetadataComponent } from './mcec497bf55e6.js';
export declare const TWIN_JSON_LIMIT: number;
export interface TwinObject {
    readonly objectId: string;
    readonly displayName: Readonly<Record<string, string>>;
    readonly description: string;
    readonly purpose?: string;
    readonly aliases: Readonly<Record<string, unknown>>;
    /** Legacy 1.0 catalogs may omit type/relations; preserve the omitted fields. */
    readonly equipmentType?: string;
    readonly capabilityIds: readonly string[];
    readonly relations?: readonly {
        readonly targetObjectId: string;
        readonly kind: string;
        readonly description: string;
    }[];
}
export interface TwinGroup {
    readonly groupId: string;
    readonly displayName: Readonly<Record<string, string>>;
    readonly description: string;
    readonly aliases: Readonly<Record<string, unknown>>;
    readonly memberObjectIds: readonly string[];
    readonly capabilityIds: readonly string[];
}
export interface TwinDocument {
    readonly schemaVersion: '1.0';
    readonly twinDescription: string;
    readonly objects: readonly TwinObject[];
    readonly semanticGroups: readonly TwinGroup[];
    readonly capabilities: readonly {
        readonly capabilityId: string;
        readonly description: string;
        readonly supportedTargetTypes: readonly string[];
        readonly arguments: readonly {
            readonly name: string;
            readonly type: string;
            readonly required: boolean;
            readonly enumSource?: string;
        }[];
    }[];
    readonly presentationTemplates: readonly {
        readonly key: string;
        readonly description: string;
    }[];
    readonly presentationSlots: readonly {
        readonly name: string;
        readonly description: string;
    }[];
}
export interface TwinCatalogFile {
    readonly id: string;
    readonly name: string;
    readonly document: TwinDocument;
    readonly idRemaps?: readonly {
        readonly kind: string;
        readonly from: string;
        readonly to: string;
    }[];
}
/** Old scenes appear as one recoverable registration without mutating them on load. */
export declare function twinCatalogFiles(scene: SceneDocument): readonly TwinCatalogFile[];
export declare function sameTwinJson(a: unknown, b: unknown): boolean;
/** Combine compatible IDs; source documents retain their own descriptions and extensions. */
export declare function combineTwinCatalogFiles(files: readonly TwinCatalogFile[]): TwinDocument;
export declare function validateTwinCatalogFiles(value: unknown): asserts value is readonly TwinCatalogFile[];
export interface TwinComponentData {
    readonly object: TwinObject;
    readonly groupIds: readonly string[];
    /** Owner-scoped persistent Component reference; null binds the entire Actor. */
    readonly targetComponentId: string | null;
    readonly instanceSourceId: string | null;
}
export declare const emptyTwinDocument: () => TwinDocument;
export declare function validateTwinObject(value: unknown): asserts value is TwinObject;
export declare function validateTwinDocument(value: unknown): asserts value is TwinDocument;
export declare function parseTwinJson(text: string): unknown;
export declare function parseTwinDocument(text: string): TwinDocument;
export declare function validateTwinComponentData(value: unknown): asserts value is TwinComponentData;
export declare function twinComponents(scene: SceneDocument): TwinMetadataComponent[];
export declare function validateTwinScene(scene: SceneDocument): void;
/** Lossless editor catalog; exchange projection must never be used for copy or reimport storage. */
export declare function assembleTwinDocument(scene: SceneDocument): TwinDocument;
export declare function createTwinExports(scene: SceneDocument, candidate?: {
    source: {
        projectId: string;
        levelKey: string;
    };
    bindings: readonly {
        webActorId: string;
        webComponentId?: string;
        sourceActorId: string;
        sourceComponentId: string;
    }[];
}): {
    twin: TwinDocument;
    bindings: {
        metadataExtensions?: readonly import("./m12347026e7d6.js").TwinExportExtension[] | undefined;
        catalogIdRemaps?: {
            fileId: string;
            fileName: string;
            entries: readonly {
                readonly kind: string;
                readonly from: string;
                readonly to: string;
            }[] | undefined;
        }[] | undefined;
        objects: {
            objectId: string;
            actorId: string;
            metadataComponentId: string;
            targetComponentId: string | null;
            instanceSourceId: string | null;
            sourceActorId: string | null;
            sourceComponentId: string | null;
        }[];
        unboundObjectIds: string[];
        capabilityExecution: string;
        sourceProjectId?: string | undefined;
        sourceLevelKey?: string | undefined;
        sourceSnapshotId?: string | undefined;
        schemaVersion: number;
        levelId: string;
        levelName: string;
    };
};
