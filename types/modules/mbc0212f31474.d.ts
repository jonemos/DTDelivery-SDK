import { Group, type Object3D } from 'three';
import type { AddonBehavior, AddonCapabilityAPIs, AddonTarget } from './m15cd22cd6bd7.js';
import { type SceneDocument } from './mcec497bf55e6.js';
import type { ProjectedActor } from './m631b06a7a1dc.js';
import { type AddonEnvironment } from './mb568993ef448.js';
import { AddonPropertyState, type AddonInstanceSnapshot, type AddonPropertyMode } from './mfc2efa75f19e.js';
import type { ScriptSettings } from './mcc06b6e568a7.js';
export interface AddonHostOptions {
    readonly environment: AddonEnvironment;
    readonly compositionId?: string;
    readonly mountId?: string | null;
    readonly document: () => SceneDocument;
    readonly transform?: (actorId: string) => import('./m15cd22cd6bd7.js').MeshTransform;
    readonly persist?: (target: AddonTarget, settings: ScriptSettings, reference: import('./mcc06b6e568a7.js').ScriptPackageReference) => void;
    readonly overrides?: (target: AddonTarget, reference: import('./mcc06b6e568a7.js').ScriptPackageReference, projectionMountId?: string) => ScriptSettings | undefined;
}
interface Instance {
    readonly reference: import('./mcc06b6e568a7.js').ScriptPackageReference;
    readonly target: AddonTarget;
    readonly properties: AddonPropertyState;
    readonly group: Group;
    readonly cleanups: (() => void)[];
    behavior?: AddonBehavior;
    state: AddonInstanceSnapshot['state'];
    error?: string;
}
type CapabilityFactory = (host: AddonHost, instance: Instance) => unknown;
/** Extend a host feature without changing the addon lifecycle/module loader. */
export declare function registerAddonCapabilityProvider(id: string, create: CapabilityFactory): void;
export declare const addonHostSnapshots: () => AddonInstanceSnapshot[];
/** One Actor projection in one host/mount. Only immutable module factories are shared. */
export declare class AddonHost {
    readonly options: AddonHostOptions;
    readonly actorId: string;
    readonly object: Object3D;
    private readonly projections;
    private readonly instances;
    private disposed;
    private lastFrame;
    private lastDelta;
    readonly ready: Promise<void>;
    constructor(options: AddonHostOptions, actorId: string, object: Object3D, projections: () => ReadonlyMap<string, ReadonlyMap<string, ProjectedActor>>);
    get active(): boolean;
    private actor;
    private assertLive;
    private release;
    private fault;
    private sync;
    update(): void;
    frame(frame: number, dt: number): void;
    list(): AddonInstanceSnapshot[];
    change(target: AddonTarget, values: unknown, mode: AddonPropertyMode, expectedRevision: number): AddonInstanceSnapshot;
    synchronize(target: AddonTarget, values: ScriptSettings): void;
    clearSynchronization(): void;
    propertiesAPI(instance: Instance): AddonCapabilityAPIs['properties.control'];
    dispose(): void;
    sceneAPI(instance: Instance): AddonCapabilityAPIs['scene.read'];
    displayAPI(instance: Instance): AddonCapabilityAPIs['display.objects'];
}
export {};
