import type { Transform } from './m69ba5f67c309.js';
export type PhysicsBodyType = 'fixed' | 'dynamic' | 'kinematic';
export type PhysicsShape = {
    readonly kind: 'box';
    readonly halfExtents: readonly [number, number, number];
} | {
    readonly kind: 'sphere';
    readonly radius: number;
} | {
    readonly kind: 'capsule';
    readonly halfHeight: number;
    readonly radius: number;
} | {
    readonly kind: 'mesh';
    readonly profile: 'trimesh' | 'convex';
    readonly vertices: readonly number[];
    readonly indices?: readonly number[];
};
export interface CollisionGroups {
    readonly membership: number;
    readonly filter: number;
}
export interface PhysicsBodySpec {
    readonly actorId: string;
    readonly bodyType: PhysicsBodyType;
    readonly translation: readonly [number, number, number];
    readonly rotation?: readonly [number, number, number, number];
    readonly scale?: readonly [number, number, number];
    readonly shape: PhysicsShape;
    readonly sensor?: boolean;
    readonly groups?: CollisionGroups;
    readonly attachedToActorId?: string;
}
export interface PhysicsRayHit {
    readonly actorId: string;
    readonly distance: number;
    readonly point: readonly [number, number, number];
}
export interface PhysicsDebugGeometry {
    readonly vertices: Float32Array;
    readonly colors: Float32Array;
}
export interface PhysicsCollisionEvent {
    readonly actorA: string;
    readonly actorB: string;
    readonly started: boolean;
}
export interface CharacterControllerConfig {
    readonly offset: number;
    readonly maxSlopeAngle: number;
    readonly maxStepHeight: number;
    readonly groundSnapDistance: number;
}
export interface CharacterMoveResult {
    readonly movement: readonly [number, number, number];
    readonly grounded: boolean;
    readonly collisionNormals: readonly (readonly [number, number, number])[];
}
export interface PhysicsPose {
    readonly translation: readonly [number, number, number];
}
export declare class PhysicsWorld {
    private readonly world;
    private readonly bodiesByActor;
    private readonly collidersByActor;
    private readonly shapeSpecs;
    private readonly spatialQueryDirty;
    private readonly actorByCollider;
    private readonly bodyTypes;
    private readonly controllers;
    private readonly previousPose;
    private readonly currentPose;
    private readonly eventQueue;
    private collisionEvents;
    private destroyed;
    private simulationStarted;
    private constructor();
    static create(gravity?: readonly [number, number, number]): Promise<PhysicsWorld>;
    addBody(spec: PhysicsBodySpec): void;
    /** Validate/cook every changed collider before publishing a spatial edit.
     * Dynamic bodies remain physics-owned; this path is for authored fixed/kinematic poses. */
    prepareSpatialUpdate(updates: readonly {
        actorId: string;
        transform: Transform;
    }[]): () => void;
    step(dt?: number): readonly PhysicsCollisionEvent[];
    getTranslation(actorId: string): readonly [number, number, number];
    setKinematicTarget(actorId: string, target: readonly [number, number, number]): void;
    teleport(actorId: string, target: readonly [number, number, number]): void;
    interpolatedPose(actorId: string, alpha: number): PhysicsPose;
    setAuthoringPose(actorId: string, target: readonly [number, number, number]): void;
    createCharacterController(actorId: string, config: CharacterControllerConfig): void;
    prepareCharacterMove(actorId: string, desired: readonly [number, number, number]): CharacterMoveResult;
    raycast(origin: readonly [number, number, number], direction: readonly [number, number, number], maxDistance: number, options?: {
        readonly groups?: CollisionGroups;
        readonly includeSensors?: boolean;
    }): PhysicsRayHit | null;
    sensorOverlaps(actorId: string): readonly string[];
    debugGeometry(): PhysicsDebugGeometry;
    destroy(): void;
    private requireBody;
    private assertAlive;
}
