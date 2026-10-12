import { type AssetRegistrySnapshot } from './m5e4e772c2f57.js';
import type { SceneDocument } from './mcec497bf55e6.js';
import { type MaterialDocument } from './mcf568d106c8d.js';
export interface CandidateRefreshBaseline {
    readonly version: 1;
    readonly sourceActorSignatures: Readonly<Record<string, string>>;
    readonly webActorSignatures: Readonly<Record<string, string>>;
    readonly webScene?: SceneDocument;
    readonly materials?: Readonly<Record<string, MaterialDocument>>;
}
/** Whole-actor conflict unit, including referenced asset contents and Outliner ancestry. */
export declare function candidateActorSignatures(scene: SceneDocument, snapshot: AssetRegistrySnapshot): Promise<Record<string, string>>;
export declare function createCandidateRefreshBaseline(scene: SceneDocument, assets: AssetRegistrySnapshot): Promise<CandidateRefreshBaseline>;
