import type { AddonPropertySchema } from './mfc2efa75f19e.js';
import type { AddonTarget } from './m15cd22cd6bd7.js';
import type { ScriptPackageReference, ScriptSettings } from './mcc06b6e568a7.js';
export interface AddonControlInstance {
    readonly target: AddonTarget;
    readonly reference: ScriptPackageReference;
    readonly name: string;
    readonly schema: readonly AddonPropertySchema[];
    readonly values: ScriptSettings;
}
export interface AddonControlCatalog {
    readonly releaseHash: string;
    readonly revision: number;
    readonly instances: readonly AddonControlInstance[];
}
export interface AddonControlChange {
    readonly target: AddonTarget;
    readonly codeHash: string;
    readonly values: ScriptSettings;
}
