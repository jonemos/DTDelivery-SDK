import { type Actor } from './mcec497bf55e6.js';
import type { QuaternionXyzw, Vec3 } from './m69ba5f67c309.js';
import './mb23ebdb9d1d9.js';
import type { CompositionDocument, LevelMount } from './mf0f7647466ef.js';
export declare const COMPOSITION_OBJECT_KINDS: readonly ["Empty", "Camera", "PlayerStart", "DirectionalLight", "PointLight", "SpotLight", "Cube", "Sphere", "Cylinder", "Cone", "Plane"];
export type CompositionObjectKind = typeof COMPOSITION_OBJECT_KINDS[number];
export interface CompositionObject {
    id: string;
    componentId: string;
    kind: CompositionObjectKind;
    name: string;
    visible: boolean;
    position: Vec3;
    rotation: QuaternionXyzw;
    scale: Vec3;
    properties: Record<string, number | boolean>;
}
export type CompositionTarget = LevelMount | CompositionObject;
export declare function newCompositionObject(kind: CompositionObjectKind, name: string, position?: Vec3): CompositionObject;
export declare function compositionObjectActor(object: CompositionObject): Actor;
export declare function validateCompositionObject(input: unknown): asserts input is CompositionObject;
export declare function findCompositionTarget(document: CompositionDocument, id: string | null): CompositionTarget | undefined;
export declare function editCompositionTarget(document: CompositionDocument, next: CompositionTarget): CompositionDocument;
