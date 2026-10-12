import { type GenericScriptPackageManifest, type ScriptPackageReference, type ScriptSettingValue, type ScriptSettings } from './mcc06b6e568a7.js';
import type { AddonTarget } from './m15cd22cd6bd7.js';
export type AddonPropertyMode = 'runtime' | 'persistent';
export interface AddonPropertySchema {
    readonly name: string;
    readonly setting: string;
    readonly type: 'number' | 'boolean' | 'string';
    readonly access: 'read' | 'read-write';
    readonly storage: 'runtime' | 'persistent' | 'both';
    readonly min?: number;
    readonly max?: number;
    readonly maxLength?: number;
    readonly format?: 'color';
}
export interface AddonInstanceSnapshot {
    readonly target: AddonTarget;
    readonly reference: ScriptPackageReference;
    readonly environment: string;
    readonly schema: readonly AddonPropertySchema[];
    readonly values: ScriptSettings;
    readonly revision: number;
    readonly state: 'starting' | 'running' | 'faulted' | 'disposed';
    readonly error?: string;
}
export declare const addonTargetKey: (target: AddonTarget) => string;
export declare function validateAddonTarget(value: unknown): asserts value is AddonTarget;
export declare function addonPropertySchema(manifest: GenericScriptPackageManifest): readonly AddonPropertySchema[];
/** Validates the complete request before creating changed state. */
export declare function validateAddonPropertyChanges(manifest: GenericScriptPackageManifest, input: unknown, mode: AddonPropertyMode): ScriptSettings;
export declare function exposedAddonValues(manifest: GenericScriptPackageManifest, settings: ScriptSettings): ScriptSettings;
export declare class AddonPropertyState {
    readonly manifest: GenericScriptPackageManifest;
    private saved;
    private temporary;
    private remote;
    private readonly listeners;
    revision: number;
    constructor(manifest: GenericScriptPackageManifest, settings: ScriptSettings);
    get settings(): ScriptSettings;
    get values(): Readonly<Record<string, ScriptSettingValue>>;
    subscribe(listener: (names: readonly string[]) => void): () => void;
    private notify;
    apply(values: unknown, mode: AddonPropertyMode, expectedRevision: number, persist?: (settings: ScriptSettings) => void): void;
    restore(settings: ScriptSettings): void;
    mirror(settings: ScriptSettings): void;
    dispose(): void;
}
