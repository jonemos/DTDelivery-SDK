import type { SceneDocument } from './mcec497bf55e6.js';
import { AnimationPlaybackWorld } from './me7d8c6ea26b6.js';
import { ComponentRuntime, RuntimeComponentOwner, RuntimeComponentRegistry } from './m06a1a0c7aada.js';
import { RuntimeSpatialState } from './med78d31c7211.js';
export type RuntimeExecutionState = 'stopped' | 'starting' | 'running' | 'paused' | 'stopping' | 'failed';
export type RuntimeControlState = 'editor' | 'simulate' | 'player' | 'ejected';
export interface RuntimeActor {
    readonly id: string;
    readonly classId: string;
    beginPlayCount: number;
    endPlayCount: number;
}
export interface RuntimePawn extends RuntimeActor {
    position: [number, number, number];
    rotationXyzw?: [number, number, number, number];
}
export type RuntimeFactory = (id: string) => RuntimeActor;
export interface GameplayConfig {
    readonly defaultPawnClassId: string;
    readonly playerStartActorId?: string;
}
export declare class RuntimeClassRegistry {
    private readonly factories;
    register(classId: string, factory: RuntimeFactory): void;
    create(classId: string, id: string): RuntimeActor;
}
export declare class PlayerController {
    pawn: RuntimePawn | null;
    possess(actor: RuntimeActor): void;
    unpossess(): void;
}
export declare class RuntimeWorld {
    readonly snapshot: SceneDocument;
    private readonly registry;
    private readonly config;
    readonly sessionId: string;
    readonly sourceHash: string;
    readonly abortController: AbortController;
    readonly actors: Map<string, RuntimeActor & RuntimeComponentOwner>;
    readonly components: ComponentRuntime;
    readonly spatial: RuntimeSpatialState;
    readonly controller: PlayerController;
    readonly animationPlayback: AnimationPlaybackWorld;
    state: RuntimeExecutionState;
    controlState: RuntimeControlState;
    simulationTime: number;
    tickCount: number;
    private readonly timers;
    private readonly simulationTickListeners;
    private nextTimerId;
    private startRequested;
    constructor(snapshot: SceneDocument, registry: RuntimeClassRegistry, config: GameplayConfig, createId?: () => string, components?: RuntimeComponentRegistry);
    get configPlayerStartId(): string | undefined;
    prepareRendering(): void;
    start(options?: {
        readonly mode?: 'play' | 'simulate';
        readonly spawnPosition?: readonly [number, number, number];
        readonly canSpawn?: (position: readonly [number, number, number]) => boolean;
    }): void;
    pause(): void;
    resume(): void;
    tick(dt?: number): void;
    step(): void;
    setTimer(seconds: number, callback: () => void): number;
    onSimulationTick(listener: (dt: number) => void): () => void;
    guardAsync<T>(promise: Promise<T>, apply: (value: T) => void): void;
    eject(): void;
    possess(actorId: string): void;
    inspectActor(actorId: string): Readonly<RuntimeActor>;
    stop(): void;
    private advance;
}
export declare class GameInstance {
    private readonly values;
    set(key: string, value: string | number | boolean): void;
    get(key: string): string | number | boolean | undefined;
    clear(): void;
}
export declare class RuntimeSession {
    private readonly levels;
    private readonly registry;
    private readonly config;
    readonly gameInstance: GameInstance;
    private world;
    constructor(levels: ReadonlyMap<string, SceneDocument>, registry: RuntimeClassRegistry, config: GameplayConfig);
    openLevel(levelId: string): RuntimeWorld;
    stop(): void;
}
