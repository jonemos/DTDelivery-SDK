import type { OrthographicCamera, PerspectiveCamera } from 'three';
import type { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { type EditorShortcutAction } from './mdd2a7674d593.js';
interface CameraView {
    readonly canvas: HTMLCanvasElement;
    readonly camera: PerspectiveCamera | OrthographicCamera;
    readonly controls: Pick<OrbitControls, 'enabled' | 'target' | 'enableDamping' | 'update'>;
    invalidate(): void;
    onViewChange?: () => void;
}
/** SDK and read-only previews share the editor's camera math and pointer sampling. */
export declare class ViewportCameraNavigation {
    private readonly viewer;
    private readonly router;
    private readonly samples;
    private readonly listeners;
    private controller;
    private pointer;
    private gesture;
    private damping;
    private title;
    private frame;
    speed: number;
    onAction?: (action: EditorShortcutAction) => void;
    get pointerLockStatus(): import("./mdd2a7674d593.js").PointerLockStatus;
    constructor(viewer: CameraView, orbitWithoutAlt?: boolean, autoStep?: boolean);
    private apply;
    step(deltaSeconds: number): void;
    stop(): void;
    setSpeed(value: number): void;
    dispose(): void;
}
export {};
