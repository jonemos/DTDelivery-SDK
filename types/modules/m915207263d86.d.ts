export declare const DISPLAY_BUDGET_MIB: readonly [0, 512, 1024, 2048, 4096, 8192];
export type DisplayBudgetMiB = typeof DISPLAY_BUDGET_MIB[number];
export type DisplayBudget = Readonly<{
    geometry: number;
    texture: number;
}>;
export declare function displayBudget(mib: number): DisplayBudget;
export declare function checkedDisplayBudget(value: DisplayBudget, usage: DisplayBudget): DisplayBudget;
export declare function readDisplayBudgetPreference(): DisplayBudgetMiB;
export declare function saveDisplayBudgetPreference(mib: number): boolean;
