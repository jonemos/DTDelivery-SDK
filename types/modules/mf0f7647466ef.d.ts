import { type CompositionObject } from './m2c49f1915315.js';
import type { QuaternionXyzw, Vec3 } from './m69ba5f67c309.js';
import type { StoredSceneEnvelope } from './m3f7a37a09ea0.js';
import type { AssetRegistrySnapshot } from './m5e4e772c2f57.js';
import type { StaticPreviewRecipe } from './m0f0d622f8bdc.js';
import { type AddonOverride } from './mb2c6243e72dc.js';
export type LevelLocator = {
    kind: 'desktop';
    projectId: string;
    documentId: string;
} | {
    kind: 'candidate';
    candidateId: string;
} | {
    kind: 'web';
    documentId: string;
};
export interface LevelPin {
    source: LevelLocator;
    revision: number;
    assetRevision: string;
}
export interface LevelSourceInfo {
    pin: LevelPin;
    name: string;
    actors: number;
    bytes: number;
}
export interface LevelSourceData {
    envelope: StoredSceneEnvelope;
    assets: AssetRegistrySnapshot;
    recipe?: StaticPreviewRecipe;
}
export interface LevelMount {
    id: string;
    name: string;
    pin: LevelPin;
    position: Vec3;
    rotation: QuaternionXyzw;
    visible: boolean;
    loaded: boolean;
}
export interface CompositionDocument {
    kind: 'Composition';
    version: 1 | 2;
    id: string;
    name: string;
    mounts: readonly LevelMount[];
    objects?: readonly CompositionObject[];
    addonOverrides?: readonly AddonOverride[];
}
export interface CompositionEnvelope {
    revision: number;
    savedAt: number;
    document: CompositionDocument;
}
export type CompositionRequest = {
    op: 'list';
} | {
    op: 'read';
    id: string;
} | {
    op: 'delete';
    id: string;
    revision: number;
    savedAt: number;
    currentId: string;
} | {
    op: 'save';
    expectedRevision: number | null;
    document: CompositionDocument;
} | {
    op: 'info';
    source: LevelLocator;
    pin?: LevelPin;
} | {
    op: 'source';
    pin: LevelPin;
};
export declare function validateLocator(value: unknown): asserts value is LevelLocator;
export declare function validatePin(value: unknown): asserts value is LevelPin;
export declare function validateComposition(value: unknown): CompositionDocument;
export declare function validateCompositionRequest(value: unknown): asserts value is CompositionRequest;
export declare function sourceKey(s: LevelLocator): string;
export declare function pinKey(pin: LevelPin): string;
export declare function sourceURL(s: LevelLocator): string;
export declare function sourceFromURL(url: string): LevelLocator;
export declare function newComposition(): CompositionDocument;
