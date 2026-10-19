import type { SceneDocument } from './mcec497bf55e6.js';
import type { StaticPreviewRecipe } from './m0f0d622f8bdc.js';
export interface StoredFoliageExclusion {
    version: 1;
    sourceActorIds: string[];
    sourceComponentIds: string[];
    removedMeshPlacements: number;
}
/** Explicit saved-level edit only; loading a level never calls this migration. Assets stay append-only. */
export declare function excludeStoredFoliage(scene: SceneDocument, recipe: StaticPreviewRecipe): {
    scene: SceneDocument;
    recipe: StaticPreviewRecipe;
    record: StoredFoliageExclusion;
    removedActorIds: string[];
} | null;
