import type { AddonTarget } from './m15cd22cd6bd7.js';
import type { DeliveryViewer } from './m566d2c035974.js';
import { AddonPropertiesClient } from './mf12bd6e990c7.js';
import { type AddonPropertyMode } from './mfc2efa75f19e.js';
/** Scoped to this viewer, including canonical mount IDs behind virtual spatial cells. */
export declare class DeliveryAddonController {
    private readonly viewer;
    private binding?;
    private pending?;
    private disposed;
    private bindingGeneration;
    private readonly listeners;
    private notified;
    error: string | null;
    constructor(viewer: DeliveryViewer);
    private hosts;
    list(): import("../index.js").AddonInstanceSnapshot[];
    subscribe(listener: () => void): () => void;
    private changed;
    changeBatch(updates: readonly {
        target: AddonTarget;
        values: unknown;
        expectedRevision: number;
    }[], mode?: AddonPropertyMode): Promise<import("../index.js").AddonInstanceSnapshot[]>;
    bind(remote: AddonPropertiesClient): Promise<{
        change: (updates: readonly import("./mec05efbb93a1.js").AddonControlChange[], mode: AddonPropertyMode) => Promise<void>;
        dispose: () => Promise<void>;
    }>;
    dispose(): Promise<void>;
}
