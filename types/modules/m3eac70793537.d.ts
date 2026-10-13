import type { ProcessingProgress } from './mbe16a57a11d3.js';
import { type TextureAdmission } from './m92c36c0360d4.js';
import { Group, type Camera, type Object3D } from 'three';
import type { AssetRegistrySnapshot, AssetRegistryStorage } from './m5e4e772c2f57.js';
import { type ProjectedActor } from './m631b06a7a1dc.js';
import { type SceneDocument } from './mcec497bf55e6.js';
import type { TextureImportOptions } from './mae043aea4362.js';
import type { TextureAppearanceLayout } from './m4c70f05441f4.js';
import { type LevelMount, type LevelSourceInfo } from './mf0f7647466ef.js';
import type { CompositionStorage } from './mb719d6b141c8.js';
export interface CompositionProjection {
    readonly root: Group;
    readonly projections: readonly ProjectedActor[];
    readonly document: SceneDocument;
    readonly info: LevelSourceInfo;
    update(mount: LevelMount): void;
    prepare(camera: Camera): () => void;
    readonly residentActorCount?: number;
    setResidentActors?(ids: ReadonlySet<string>, signal: AbortSignal, admit: (staged: Group) => void, beforeCommit: () => void): Promise<void>;
    dispose(): void;
}
/** One immutable source registry per exact pin; each mount owns its Actor/pose/material instances. */
export declare class CompositionResourcePool {
    private readonly storage;
    readonly textureOptions?: TextureImportOptions | undefined;
    private readonly cacheStaticMatrices;
    private sources;
    private reusable?;
    private addonContext;
    configureAddons(context: Partial<typeof this.addonContext>): void;
    constructor(storage: Pick<CompositionStorage, 'source'> & {
        resourceKey?(info: LevelSourceInfo): string;
        projectDocument?(document: SceneDocument, info: LevelSourceInfo): SceneDocument;
        prepared?(info: LevelSourceInfo, signal: AbortSignal, textureBudget: TextureAdmission, textureOptions?: TextureImportOptions): Promise<{
            document: SceneDocument;
            storage: AssetRegistryStorage & {
                readonly reservedTextureBytes?: number;
            };
            textureCatalog?: AssetRegistrySnapshot;
            layouts?: readonly TextureAppearanceLayout[];
        }>;
    }, textureOptions?: TextureImportOptions | undefined, cacheStaticMatrices?: boolean);
    private key;
    fork(options: TextureImportOptions): CompositionResourcePool;
    finishFork(): void;
    canReuse(info: LevelSourceInfo): boolean;
    /** Staging pools can share the exact immutable registry; count its encoded bytes once. */
    encodedBytesWith(other: {
        readonly encodedBytes: number;
    }): number;
    get textureLayouts(): TextureAppearanceLayout[];
    get reservedTextures(): number;
    get encodedBytes(): number;
    has(info: LevelSourceInfo): boolean;
    project(info: LevelSourceInfo, mount: LevelMount, signal: AbortSignal, textureBudget: TextureAdmission, progress?: (value: ProcessingProgress) => void): Promise<CompositionProjection>;
}
/** Account buffer/texture storage once by object identity; this is an estimate, not OS/GPU allocation. */
export declare function projectedResourceBytes(roots: readonly Object3D[]): {
    geometry: number;
    texture: number;
};
