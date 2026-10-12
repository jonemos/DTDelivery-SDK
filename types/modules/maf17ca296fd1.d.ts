import { type SceneDocument } from './mcec497bf55e6.js';
import type { HostBindingSnapshot } from './m32707c8624d1.js';
/** Legacy reference retained for consumers; runtime acceptance is determined by the SDK contract. */
export declare const DELIVERY_MESH_MOTION: Readonly<{
    packageId: "dt.mesh-motion";
    version: "1.0.0";
    codeHash: "c6b8244101f48f5c489d8da3edaa1f852a59612e3138c952c94c86aa9adfbd4d";
}>;
export declare function validateDeliveryRuntime(scene: SceneDocument, host?: HostBindingSnapshot, compositionId?: string, mountId?: string | null): {
    actorId: string;
    componentId: string;
    targetComponentId: string | null;
    reference: import("./mcc06b6e568a7.js").ScriptPackageReference;
}[];
