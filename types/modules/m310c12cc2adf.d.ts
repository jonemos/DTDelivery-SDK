import type { SignalProducerState, SignalSample, SignalWriter } from './m15cd22cd6bd7.js';
/** Metadata is World-local, never serialized into TestData or the editor document. */
export declare class RuntimeSignalState {
    private readonly producerState;
    private readonly records;
    private time;
    constructor(producerState: (id: string) => SignalProducerState);
    advance(dt: number): void;
    claimed(id: string): boolean;
    claim(id: string, producerId: string, guard: () => void, write: (value: number) => void): SignalWriter;
    invalidateProducer(producerId: string, reason: string): void;
    untrackedWrite(id: string): void;
    read(id: string, maxAgeSeconds: number): SignalSample;
    clear(): void;
}
