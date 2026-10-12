export interface ImportProgress {
    readonly stage: 'export' | 'transfer' | 'validate' | 'save' | 'complete' | 'review';
    readonly completed: number;
    readonly total: number | null;
    readonly message: string;
}
export declare function importStagePercent(progress: ImportProgress): number | null;
/** Four measured stages, equally weighted. This measures stage work, never elapsed/remaining time. */
export declare function importOverallPercent(progress: ImportProgress): number;
