import type { BehaviorComponent, StaticMeshComponent, TestDataComponent, TestScriptComponent } from './mcec497bf55e6.js';
import type { Transform } from './m69ba5f67c309.js';
import type { RuntimeSpatialState } from './med78d31c7211.js';
import { type BehaviorSettings } from './m1ce080ca850c.js';
import type { ScriptFactory, TestDataScriptSettings } from './m15cd22cd6bd7.js';
import { RuntimeSignalState } from './m310c12cc2adf.js';
import type { ScriptPackageReference } from './mcc06b6e568a7.js';
export interface ComponentDiagnostic {
    readonly actorId: string;
    readonly componentId: string;
    readonly typeId: string;
    readonly hook: string;
    readonly message: string;
}
export type RuntimeScriptState = 'starting' | 'running' | 'idle' | 'disabled' | 'faulted' | 'removed' | 'stopped';
export interface RuntimeScriptDiagnostic {
    readonly id: string;
    readonly actorId: string;
    readonly scriptPackage: ScriptPackageReference;
    readonly state: RuntimeScriptState;
    readonly errors: readonly ComponentDiagnostic[];
}
type Token = string | {
    readonly typeId: string;
};
interface RuntimeTypes {
    TestData: RuntimeTestDataComponent;
    TestScript: RuntimeTestScriptComponent;
    StaticMesh: RuntimeStaticMeshComponent;
}
type RuntimeComponent = RuntimeTypes[keyof RuntimeTypes];
/** Common runtime lifecycle; no Transform, renderer object, or editor document reference. */
export declare abstract class RuntimeActorComponent {
    readonly owner: RuntimeComponentOwner;
    abstract readonly typeId: string;
    readonly id: string;
    private wantsEnabled;
    private wantsTick;
    constructor(owner: RuntimeComponentOwner, settings: {
        readonly id: string;
    });
    get alive(): boolean;
    get enabled(): boolean;
    set enabled(value: boolean);
    get tickEnabled(): boolean;
    set tickEnabled(value: boolean);
    get requiredComponentIds(): readonly string[];
    onRegister(): void;
    beginPlay(): void;
    onEnable(): void;
    onDisable(): void;
    tick(deltaTime: number): void;
    endPlay(): void;
    onUnregister(): void;
    onDestroy(): void;
    guardAsync<T>(promise: Promise<T>, apply: (value: T) => void): void;
}
/** The only concrete behavior type in AC2; ticks remain opt-in and do nothing by default. */
export declare class RuntimeTestDataComponent extends RuntimeActorComponent {
    static readonly typeId = "TestData";
    readonly typeId = "TestData";
    private currentValue;
    get value(): number;
    set value(value: number);
    setSignalValue(value: number): void;
    constructor(owner: RuntimeComponentOwner, settings: TestDataComponent);
}
export declare class RuntimeStaticMeshComponent extends RuntimeActorComponent {
    static readonly typeId = "StaticMesh";
    readonly typeId = "StaticMesh";
    getLocalTransform(): Transform;
    setLocalTransform(value: Transform): void;
}
/** A Script is an Actor Component with the same owner and lifetime, never an imported source string. */
export declare abstract class ScriptComponent extends RuntimeActorComponent {
    onRegister(): void;
}
export declare class RuntimeTestScriptComponent extends ScriptComponent {
    static readonly typeId = "TestScript";
    readonly typeId = "TestScript";
    readonly targetComponentId: string | undefined;
    readonly ratePerSecond: number | undefined;
    readonly scriptPackage: import('./mcc06b6e568a7.js').ScriptPackageReference;
    private behavior;
    private readonly createBehavior;
    private readonly settings;
    private readonly schemaVersion;
    private readonly references;
    constructor(owner: RuntimeComponentOwner, settings: TestScriptComponent, createBehavior?: ScriptFactory<TestDataScriptSettings>);
    get requiredComponentIds(): readonly string[];
    onRegister(): void;
    beginPlay(): void;
    tick(dt: number): void;
    onEnable(): void;
    onDisable(): void;
    endPlay(): void;
    onUnregister(): void;
    onDestroy(): void;
    private sdkOwner;
}
/** Explicit trusted-code registration. Serialized strings are never executable. */
export declare class RuntimeComponentRegistry {
    private readonly testDataFactory;
    private readonly scriptFactory;
    constructor(testDataFactory?: (owner: RuntimeComponentOwner, data: TestDataComponent) => RuntimeTestDataComponent, scriptFactory?: (owner: RuntimeComponentOwner, data: TestScriptComponent) => RuntimeTestScriptComponent);
    create(owner: RuntimeComponentOwner, data: BehaviorComponent | StaticMeshComponent): RuntimeComponent;
}
/** Mixed into the existing RuntimeWorld Actor map; this is not a second Actor store. */
export declare class RuntimeComponentOwner {
    readonly id: string;
    readonly componentRuntime: ComponentRuntime;
    constructor(id: string, componentRuntime: ComponentRuntime);
    getComponent<K extends keyof RuntimeTypes>(type: K | {
        readonly typeId: K;
    }): RuntimeTypes[K] | undefined;
    getComponent(type: Token): RuntimeComponent | undefined;
    getComponents<K extends keyof RuntimeTypes>(type: K | {
        readonly typeId: K;
    }): readonly RuntimeTypes[K][];
    getComponents(type: Token): readonly RuntimeComponent[];
    getComponentById(id: string): RuntimeComponent | undefined;
    addComponent(type: 'TestData', settings?: {
        readonly value?: number;
    }): RuntimeTestDataComponent;
    addComponent(type: 'TestScript', settings: BehaviorSettings): RuntimeTestScriptComponent;
    removeComponent(id: string): void;
}
export declare class ComponentRuntime {
    readonly sessionId: string;
    private readonly registry;
    private readonly hasOwner;
    readonly spatial?: RuntimeSpatialState | undefined;
    readonly diagnostics: ComponentDiagnostic[];
    readonly signals: RuntimeSignalState;
    private readonly entries;
    private readonly scriptIdentities;
    private readonly reservedIds;
    private depth;
    private flushing;
    private dirty;
    private stopped;
    private started;
    private serial;
    constructor(sessionId: string, registry: RuntimeComponentRegistry, hasOwner: (owner: RuntimeComponentOwner) => boolean, spatial?: RuntimeSpatialState | undefined);
    reserve(ids: readonly string[]): void;
    private assertOwner;
    components(owner: RuntimeComponentOwner): RuntimeComponent[];
    scriptDiagnostics(): readonly RuntimeScriptDiagnostic[];
    construct(owner: RuntimeComponentOwner, data: BehaviorComponent | StaticMeshComponent): RuntimeComponent;
    start(): void;
    add(owner: RuntimeComponentOwner, type: 'TestData' | 'TestScript', settings: BehaviorSettings): RuntimeComponent;
    remove(owner: RuntimeComponentOwner, id: string): void;
    isAlive(component: RuntimeActorComponent): boolean;
    assertAlive(component: RuntimeActorComponent): void;
    reconcile(component: RuntimeActorComponent): void;
    tick(dt: number): void;
    stop(): void;
    callback(component: RuntimeActorComponent, hook: string, run: () => void): void;
    report(component: RuntimeActorComponent, hook: string, error: unknown): void;
    private batch;
    /** Stable IDs break ties; dependencies always register, begin and tick before their consumers. */
    private executionOrder;
    private hook;
    private initialize;
    private failedDependency;
    private activate;
    private flush;
}
export {};
