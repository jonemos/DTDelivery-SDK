import type { DeliveryViewer } from './m566d2c035974.js';
import { RuntimeWorld } from './m7bc2b0fd1630.js';
import type { HostBindingSnapshot } from './m32707c8624d1.js';
/** Explicit local simulation only. No external adapters, imported code loading, or document writes. */
export declare function startDeliveryRuntime(viewer: DeliveryViewer, host?: HostBindingSnapshot, onError?: (message: string) => void): {
    mode: "local-simulation";
    error: string | null;
    readonly running: boolean;
    readonly worlds: RuntimeWorld[];
    tick: (dt: number) => void;
    pause(): void;
    resume(): void;
    stop: () => void;
};
