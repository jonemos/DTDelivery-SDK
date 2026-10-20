import type { AssetRegistryStorage } from './m5e4e772c2f57.js';
import { type CompositionRequest, type LevelPin, type LevelSourceData } from './mf0f7647466ef.js';
export interface CompositionSourceSession {
    data: LevelSourceData;
    storage: AssetRegistryStorage;
    readonly totalSourceBytes: number;
    readonly retainedBytes: number;
    dispose(): void;
}
export declare function openLazyCompositionSource(read: (request: CompositionRequest) => Promise<unknown>, pin: LevelPin, signal: AbortSignal, progress?: (completed: number, total: number) => void): Promise<CompositionSourceSession>;
