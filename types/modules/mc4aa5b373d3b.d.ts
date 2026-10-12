import { type Actor, type SceneDocument } from './mcec497bf55e6.js';
import type { DeliveryBounds } from './m9c76b5194793.js';
export interface DeliveryCell {
    id: string;
    actors: string[];
    bounds: DeliveryBounds | null;
}
export interface DeliveryCells {
    level: string;
    size: number;
    entries: DeliveryCell[];
}
export declare const DEFAULT_DELIVERY_CELL_SIZE = 10;
export declare function validateCellSize(size: number): void;
export declare function actorNeedsResidency(actor: Actor): boolean;
/** Undirected dependency islands: neither endpoint may disappear independently. */
export declare function actorIslands(scene: SceneDocument): Actor[][];
export declare function partitionActors(scene: SceneDocument, bounds: ReadonlyMap<string, DeliveryBounds | null>, size: number): DeliveryCell[];
/** Validate the entire partition against canonical metadata before exposing any cell. */
export declare function validateCellActors(scene: SceneDocument, entries: readonly DeliveryCell[]): void;
export declare function cellDocument(scene: SceneDocument, actors: readonly string[]): SceneDocument;
