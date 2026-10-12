import { type EditorShortcutAction } from './mdd2a7674d593.js';
import type { DeliveryViewer } from './m566d2c035974.js';
/** Same camera math and key routing as the editor, with bounded pointer capture. */
export declare class DeliveryNavigation {
    private readonly viewer;
    private readonly router;
    private controller;
    private readonly listeners;
    private pointer;
    private last;
    speed: number;
    onAction?: (action: EditorShortcutAction) => void;
    constructor(viewer: DeliveryViewer);
    private apply;
    step(deltaSeconds: number): void;
    stop(): void;
    setSpeed(value: number): void;
    dispose(): void;
}
