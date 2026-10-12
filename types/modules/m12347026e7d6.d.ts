import type { TwinDocument } from './mcacc1441dfab.js';
export interface TwinExportExtension {
    /** JSON Pointer into the assembled catalog; fields are retained outside twin.json. */
    readonly path: string;
    readonly fields: Readonly<Record<string, unknown>>;
}
/** Exchange fields follow the user-provided mock-twin-02.json, independently of editor storage. */
export declare function projectTwinForExport(source: TwinDocument): {
    twin: TwinDocument;
    extensions: readonly TwinExportExtension[];
};
