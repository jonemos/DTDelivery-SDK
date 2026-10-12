import { type SceneDocument } from './mcec497bf55e6.js';
import type { Transform } from './m69ba5f67c309.js';
import type { PhysicsWorld } from './m6279b18d6f5d.js';
/** Per-World poses. No renderer objects or writes to the frozen source document. */
export declare class RuntimeSpatialState {
    private readonly records;
    private readonly children;
    private readonly overrides;
    private readonly worldMatrices;
    private readonly sources;
    private physics?;
    private stopped;
    constructor(scene: SceneDocument);
    /** The render bridge reads only overrides and falls back to its own frozen scene. */
    localOverride: (id: string) => Transform | undefined;
    /** Read canonical runtime root poses without consulting renderer state. Bone/socket anchor poses require a separate provider. */
    readWorldTransform(id: string): Transform;
    /** Explicitly registered shapes only; no guessed collider generation from bounds. */
    bindPhysics(world: PhysicsWorld, bindings: readonly {
        componentId: string;
        bodyId: string;
    }[]): void;
    private worldMatrix;
    get(id: string): Transform;
    set(id: string, input: Transform): void;
    stop(): void;
}
