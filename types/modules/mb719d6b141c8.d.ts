import { type CompositionDocument, type CompositionEnvelope, type LevelLocator, type LevelPin, type LevelSourceInfo, type LevelSourceData } from './mf0f7647466ef.js';
export interface CompositionStorage {
    list(): Promise<CompositionEnvelope[]>;
    read(id: string): Promise<CompositionEnvelope | null>;
    remove(envelope: CompositionEnvelope, currentId: string): Promise<void>;
    save(document: CompositionDocument, expected: number | null): Promise<CompositionEnvelope>;
    info(source: LevelLocator, pin?: LevelPin): Promise<LevelSourceInfo>;
    source(pin: LevelPin): Promise<LevelSourceData>;
    close(): Promise<void>;
}
export declare function openCompositionStorage(): Promise<CompositionStorage>;
