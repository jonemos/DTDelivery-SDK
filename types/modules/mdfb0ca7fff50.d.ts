import { Material, type Camera, type Scene, type WebGLRenderer } from 'three';
export type ViewMode = 'lit' | 'unlit' | 'wireframe' | 'bounds' | 'collision';
export interface ShowFlags {
    grid: boolean;
    helpers: boolean;
    bounds: boolean;
    collision: boolean;
    runtimeActors: boolean;
}
export declare function createViewMaterial(source: Material, mode: Exclude<ViewMode, 'bounds' | 'collision'>): Material;
/** Render actors without light-dependent shaders, then draw helpers without painting over the first pass. */
export declare function renderViewportPasses(renderer: WebGLRenderer, scene: Scene, camera: Camera, override: Material | null, unlit?: boolean): void;
export declare function requireCollisionGeometry(hasCookedCollision: boolean): void;
export declare class ViewportShowFlagState {
    private flags;
    private beforeGame;
    read(): ShowFlags;
    update(change: Partial<ShowFlags>): ShowFlags;
    enterGameView(): ShowFlags;
    leaveGameView(): ShowFlags;
}
export declare class ViewportRenderInvalidation {
    private realtime;
    private dirty;
    constructor(realtime?: boolean);
    setRealtime(value: boolean): void;
    invalidate(): void;
    consumeRenderRequest(): boolean;
}
