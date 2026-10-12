import type { AddonTarget } from './m15cd22cd6bd7.js';
import type { ScriptPackageReference, ScriptSettings } from './mcc06b6e568a7.js';
export interface AddonControlRow {
    target: AddonTarget;
    reference: ScriptPackageReference;
    values: ScriptSettings;
}
export interface AddonControlEvent {
    appId: string;
    revision: number;
    mode: 'runtime' | 'persistent' | 'closed';
    executionId: string | null;
    rows: readonly AddonControlRow[];
}
export declare class AddonControlConflict extends Error {
    constructor();
}
/** Host-owned persistent overrides; transient values are never serialized or written into model releases. */
export declare class AddonControlStore {
    private readonly database;
    private readonly temporary;
    private readonly sessions;
    private readonly listeners;
    constructor(path: string);
    close(): void;
    subscribe(listener: (event: AddonControlEvent) => void): () => void;
    private key;
    register(appId: string, executionId: string): void;
    state(appId: string, executionId?: string): {
        revision: number;
        saved: AddonControlRow[];
        temporary: readonly AddonControlRow[];
    };
    change(appId: string, expectedRevision: number, rows: readonly AddonControlRow[], mode: 'runtime' | 'persistent', executionId: string | null): number;
    closeSession(appId: string, executionId: string): void;
}
