import type { AddonTarget } from './m15cd22cd6bd7.js';
import type { ScriptPackageReference, ScriptSettings } from './mcc06b6e568a7.js';
export interface AddonOverride {
    readonly target: AddonTarget;
    readonly reference: ScriptPackageReference;
    readonly settings: ScriptSettings;
}
/** Structural validation before package metadata becomes available; actual schema is checked before use. */
export declare function validateAddonOverrides(value: unknown, compositionId: string, mounts: readonly string[]): asserts value is readonly AddonOverride[];
export declare function readAddonOverride(overrides: readonly AddonOverride[] | undefined, target: AddonTarget, reference: ScriptPackageReference): ScriptSettings | undefined;
