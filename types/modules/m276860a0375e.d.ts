import type { SceneDocument } from './mcec497bf55e6.js';
import type { Inventory } from './m52ceea7b635b.js';
import type { StaticPreviewRecipe } from './m0f0d622f8bdc.js';
import { type SourceTransform } from './m974bf2434b62.js';
export interface CandidateComponentHierarchy {
    parentComponentId: string | null;
    parentComponentPath: string | null;
    attachmentSocketName: string;
    localTransform: SourceTransform;
    absolute: {
        location: boolean;
        rotation: boolean;
        scale: boolean;
    };
}
/** Missing all fields is the legacy flat snapshot; partial metadata must never silently flatten. */
export declare function readCandidateHierarchy(value: object): CandidateComponentHierarchy | undefined;
export declare function hasCandidateHierarchy(inventory: Inventory): boolean;
/** Restore source ownership and attachment through existing scene types, never through GLB names. */
export declare function buildCandidateHierarchy(inventory: Inventory): SceneDocument;
export declare function candidateSourceBindings(inventory: Inventory, scene: SceneDocument): StaticPreviewRecipe['bindings'];
