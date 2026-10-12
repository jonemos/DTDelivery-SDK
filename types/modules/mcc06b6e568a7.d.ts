import { type AddonEnvironment } from './mb568993ef448.js';
/** Legacy SDK contracts are immutable. SDK 5 adds generic host capabilities. */
export interface LegacyScriptPackageManifest {
    readonly formatVersion: 1;
    readonly packageId: string;
    readonly version: string;
    readonly sdkVersion: 1;
    readonly typeId: 'TestScript';
    readonly typeVersion: 2;
    readonly displayName: string;
    readonly entry: 'src/index.ts';
    readonly capabilities: readonly ['owner.testData'];
    readonly settings: readonly [
        {
            readonly key: 'targetComponentId';
            readonly fieldId: 'script.target';
            readonly kind: 'component-reference';
            readonly componentType: 'TestData';
            readonly required: true;
            readonly label: string;
            readonly defaultValue: '';
        },
        {
            readonly key: 'ratePerSecond';
            readonly fieldId: 'script.rate';
            readonly kind: 'number';
            readonly label: string;
            readonly defaultValue: number;
        }
    ];
}
export type ScriptSettingValue = number | boolean | string | null;
export type ScriptSettings = Readonly<Record<string, ScriptSettingValue>>;
interface SettingBase {
    readonly key: string;
    readonly fieldId: string;
    readonly label: string;
}
export type ScriptSetting = (SettingBase & {
    readonly kind: 'number';
    readonly defaultValue: number;
    readonly min?: number;
    readonly max?: number;
}) | (SettingBase & {
    readonly kind: 'boolean';
    readonly defaultValue: boolean;
}) | (SettingBase & {
    readonly kind: 'string';
    readonly defaultValue: string;
    readonly maxLength: number;
}) | (SettingBase & {
    readonly kind: 'component-reference';
    readonly componentType: 'TestData' | 'StaticMesh';
    readonly required: boolean;
    readonly defaultValue: '' | null;
});
export interface SchemaScriptPackageManifest extends Omit<LegacyScriptPackageManifest, 'formatVersion' | 'sdkVersion' | 'typeVersion' | 'settings'> {
    readonly formatVersion: 2;
    readonly sdkVersion: 2;
    readonly typeVersion: 3;
    readonly settings: readonly ScriptSetting[];
}
export interface SpatialScriptPackageManifest extends Omit<SchemaScriptPackageManifest, 'formatVersion' | 'sdkVersion' | 'capabilities'> {
    readonly formatVersion: 3;
    readonly sdkVersion: 3;
    readonly capabilities: readonly ['owner.testData', 'owner.staticMesh'];
}
export interface SignalScriptPackageManifest extends Omit<SpatialScriptPackageManifest, 'formatVersion' | 'sdkVersion' | 'capabilities'> {
    readonly formatVersion: 4;
    readonly sdkVersion: 4;
    readonly capabilities: readonly ['owner.testData', 'owner.staticMesh', 'owner.signals'];
}
export interface AddonPropertyDeclaration {
    readonly name: string;
    readonly setting: string;
    readonly access: 'read' | 'read-write';
    readonly storage: 'runtime' | 'persistent' | 'both';
    readonly format?: 'color';
}
export interface GenericScriptPackageManifest extends Omit<SchemaScriptPackageManifest, 'formatVersion' | 'sdkVersion' | 'capabilities'> {
    readonly formatVersion: 5;
    readonly sdkVersion: 5;
    readonly capabilities: readonly string[];
    readonly environments: readonly AddonEnvironment[];
    readonly properties: readonly AddonPropertyDeclaration[];
}
export type ScriptPackageManifest = LegacyScriptPackageManifest | SchemaScriptPackageManifest | SpatialScriptPackageManifest | SignalScriptPackageManifest | GenericScriptPackageManifest;
export interface ScriptPackageReference {
    readonly packageId: string;
    readonly version: string;
    readonly codeHash: string;
}
export declare function validateScriptPackageManifest(input: unknown): ScriptPackageManifest;
export declare function validateScriptSetting(field: ScriptSetting, value: unknown): void;
export declare function validateScriptSettings(manifest: ScriptPackageManifest, value: unknown): asserts value is ScriptSettings;
export declare function validateScriptPackageReference(value: unknown, installed: ScriptPackageReference): void;
export {};
