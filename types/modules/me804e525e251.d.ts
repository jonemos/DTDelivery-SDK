import type { AddonTarget } from './m15cd22cd6bd7.js';
import type { DeliveryViewer } from './m566d2c035974.js';
import type { AddonControlCatalog } from './mec05efbb93a1.js';
import { type AddonPropertyMode } from './mfc2efa75f19e.js';
/** Optional host transport; the browser SDK does not implement an HTTP control server. */
export interface AddonPropertyConnection {
    connect(): Promise<void>;
    list(): Promise<AddonControlCatalog>;
    change(updates: readonly import('./mec05efbb93a1.js').AddonControlChange[], mode: AddonPropertyMode, expectedRevision: number): Promise<AddonControlCatalog>;
    subscribe(listener: () => void): () => void;
    dispose(): Promise<void>;
}
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
    bind(remote: AddonPropertyConnection): Promise<{
        change: (updates: readonly import("./mec05efbb93a1.js").AddonControlChange[], mode: AddonPropertyMode) => Promise<void>;
        dispose: () => Promise<void>;
    }>;
    dispose(): Promise<void>;
}
