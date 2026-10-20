import { type CompositionDocument, type CompositionEnvelope, type LevelLocator, type LevelPin, type LevelSourceInfo, type LevelSourceData } from './mf0f7647466ef.js';
import { type CompositionSourceSession } from './m1fb01f0a2ac0.js';
export interface CompositionStorage {
    list(): Promise<CompositionEnvelope[]>;
    read(id: string): Promise<CompositionEnvelope | null>;
    remove(envelope: CompositionEnvelope, currentId: string): Promise<void>;
    save(document: CompositionDocument, expected: number | null): Promise<CompositionEnvelope>;
    info(source: LevelLocator, pin?: LevelPin): Promise<LevelSourceInfo>;
    source(pin: LevelPin, signal?: AbortSignal, progress?: (completed: number, total: number) => void): Promise<LevelSourceData>;
    sourceForDisplay?(pin: LevelPin, signal: AbortSignal, progress?: (completed: number, total: number) => void): Promise<CompositionSourceSession>;
    close(): Promise<void>;
}
export declare function openCompositionStorage(): Promise<CompositionStorage>;
