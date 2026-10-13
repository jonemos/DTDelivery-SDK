export interface ProcessingProgress {
    message: string;
    detail?: string;
    completed?: number;
    total?: number;
}
export interface ProcessingTask extends ProcessingProgress {
    id: number;
    title: string;
    startedAt: number;
    endedAt?: number;
    revealed: boolean;
    state: 'running' | 'cancelling' | 'failed' | 'succeeded';
    error?: string;
    cancel?: () => void;
    retry?: () => void;
    retryLabel?: string;
}
export interface ProcessingHandle {
    update(progress: ProcessingProgress): void;
    setCancel(cancel?: () => void): void;
    paint(): Promise<void>;
    finish(): void;
    succeed(result: ProcessingProgress): void;
    fail(error: unknown, retry?: () => void, retryLabel?: string): void;
}
/** Transient, renderer-local activity. Never part of a scene, history or persisted preferences. */
export declare class ProcessingStore {
    enabled: boolean;
    private readonly now;
    private tasks;
    private nextId;
    private listeners;
    constructor(enabled?: boolean, now?: () => number);
    readonly snapshot: () => readonly ProcessingTask[];
    readonly subscribe: (listener: () => void) => () => void;
    private publish;
    private update;
    dismiss(id: number): void;
    retry(id: number): void;
    cancel(id: number): void;
    begin(title: string, message: string, cancel?: () => void): ProcessingHandle;
}
export declare const processing: ProcessingStore;
export declare function processOperation<T>(title: string, message: string, operation: (task: ProcessingHandle) => Promise<T>, cancel?: () => void): Promise<T>;
