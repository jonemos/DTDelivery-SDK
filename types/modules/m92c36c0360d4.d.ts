/** Runtime estimates, never saved into model documents or trusted from imported data. */
export declare const MiB: number;
export declare const GiB: number;
export declare const AUTO_MEMORY_BUDGET = 0;
export declare const MAX_RUNTIME_MEMORY: number;
export interface MemoryCapacity {
    total: number;
    available: number;
}
export declare function refreshMemoryCapacity(): Promise<void>;
/** RAM is a hint, not free VRAM or a promise that a driver allocation will succeed. */
export declare function automaticMemoryCeiling(resident?: number, capacity?: MemoryCapacity | undefined): number;
export declare function assertAutomaticMemory(required: number, resident?: number, label?: string): void;
export declare function roundedMemoryBudget(required: number): number;
/** Loaders use a supported tier; admission checks the requested peak, not this ceiling. */
export declare function automaticTextureBudget(required: number, resident?: number): number;
export type TextureAdmission = number | ((required: number, alreadyReserved: number) => number);
export declare function textureAllowance(budget: TextureAdmission, required: number, alreadyReserved?: number): number;
/** All viewers using this runtime module share admission, including old/new and review views. */
export declare class MemoryReservation {
    private closed;
    update(peak: number, resident: number, automatic: boolean, retainPeak?: boolean): void;
    dispose(): void;
}
