import { type TextureImportOptions } from './mae043aea4362.js';
import { type TextureAppearanceLayout } from './m4c70f05441f4.js';
export interface PreparedTextureDisplay<T> {
    resources: T;
    reservedBytes: number;
    dispose(): void;
}
/** Display changes never write assets or documents. A complete replacement is staged before publication. */
export declare class TextureDisplaySession<T> {
    readonly layouts: readonly TextureAppearanceLayout[];
    private readonly prepare;
    private readonly publish;
    current: PreparedTextureDisplay<T> | null;
    options: TextureImportOptions;
    budgetBytes: number;
    private pending;
    private closed;
    private readonly memory;
    constructor(layouts: readonly TextureAppearanceLayout[], prepare: (options: TextureImportOptions, budget: number, signal: AbortSignal, progress: (message: string) => void, automatic?: boolean) => Promise<PreparedTextureDisplay<T>>, publish: () => void);
    estimate(options: TextureImportOptions): number;
    apply(options: TextureImportOptions, budget: number, signal: AbortSignal, progress: (message: string) => void): Promise<void>;
    dispose(): void;
}
