import type { SceneDocument } from './mcec497bf55e6.js';
import type { TextureDisplayControl } from './mc2d8265ec683.js';
import { type ProjectedActor } from './m631b06a7a1dc.js';
import { type CompositionTarget } from './m2c49f1915315.js';
import { Group } from 'three';
import { type CompositionDocument, type LevelPin } from './mf0f7647466ef.js';
import { CompositionResourcePool, type CompositionProjection } from './m3eac70793537.js';
import type { CompositionStorage } from './mb719d6b141c8.js';
import { type DisplayBudget } from './m915207263d86.js';
export declare const COMPOSITION_BUDGET: Readonly<{
    encodedPeak: number;
    geometry: number;
    texture: number;
    actors: 100000;
}>;
export type CompositionBudget = Readonly<{
    encodedPeak: number;
    geometry: number;
    texture: number;
    actors: number;
    automatic?: boolean;
}>;
export type MountStatus = 'unloaded' | 'queued' | 'loading' | 'ready' | 'failed' | 'cancelled';
export interface MountState {
    status: MountStatus;
    message?: string;
    view?: CompositionProjection;
    attempted?: string;
}
type ResourcePool = Pick<CompositionResourcePool, 'encodedBytes' | 'has' | 'project'> & Partial<Pick<CompositionResourcePool, 'fork' | 'textureLayouts' | 'reservedTextures' | 'textureOptions' | 'canReuse' | 'encodedBytesWith' | 'finishFork' | 'configureAddons'>>;
export declare class CompositionRuntime {
    private readonly storage;
    private pool;
    readonly root: Group<import("three").Object3DEventMap>;
    readonly objectViews: Map<string, ProjectedActor>;
    private readonly objectKinds;
    private readonly objectAdapter;
    updateTarget(value: CompositionTarget): void;
    targetRoot(id: string | null): import("three").Object3D<import("three").Object3DEventMap> | undefined;
    private reconcileObjects;
    readonly states: Map<string, MountState>;
    private readonly sourceDocuments;
    /** Metadata survives render eviction so Outliner search and host identity remain available. */
    sourceDocument(id: string): SceneDocument | undefined;
    private desired;
    private jobs;
    private current?;
    private disposed;
    private version;
    private listeners;
    private limits;
    private automatic;
    private readonly memory;
    constructor(storage: Pick<CompositionStorage, 'info'>, pool: ResourcePool, budget?: CompositionBudget);
    get automaticBudget(): boolean;
    /** Before decoding, account current, staged and externally retained resources together. */
    private admitMemory;
    private textureAdmission;
    private combinedEncoded;
    private textureJob?;
    private residencyJob?;
    setActorResidency(membership: ReadonlyMap<string, ReadonlySet<string>>): Promise<void>;
    private textureBudget;
    setInitialTextureBudget(budget: number): void;
    get textureApplying(): boolean;
    textureControl(): TextureDisplayControl;
    /** Stage every loaded mount under the same settings, then publish in one synchronous swap. */
    private applyTextures;
    get budget(): Readonly<{
        encodedPeak: number;
        geometry: number;
        texture: number;
        actors: number;
        automatic?: boolean;
    }>;
    setDisplayBudget(value: DisplayBudget): void;
    readonly subscribe: (listener: () => void) => () => void;
    readonly snapshot: () => number;
    private changed;
    get busy(): boolean;
    get views(): CompositionProjection[];
    get residentActors(): number;
    get usage(): {
        encoded: number;
        actors: number;
        geometry: number;
        texture: number;
    };
    reconcile(document: CompositionDocument): void;
    retry(id: string): void;
    /** Reorder pending complete-level jobs; never interrupt an already decoded unit. */
    prioritize(ids: readonly string[]): void;
    private schedule;
    replace(id: string, pin: LevelPin, commit: () => void): Promise<void>;
    /** Prepare all changed saved sources before publishing one document/history entry. */
    refresh(document: CompositionDocument, commit: () => void): Promise<void>;
    private enqueue;
    cancel(id?: string): void;
    private pump;
    idle(): Promise<void>;
    /** A transient numeric preview changed a projection, not the saved document. */
    private readonly viewListeners;
    onViewInvalidated(listener: () => void): () => void;
    invalidateView(): void;
    dispose(): void;
}
export {};
