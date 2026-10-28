import { type ShortcutBinding } from './m81610f2f6cdd.js';
export type InputOwner = 'native' | 'interaction-capture' | 'viewport-navigation' | 'document-shortcut' | 'unhandled';
export type InputTargetKind = 'canvas' | 'content' | 'outliner' | 'details' | 'widget' | 'button' | 'text' | 'control' | 'other';
export type EditorShortcutAction = 'select-tool' | 'translate-tool' | 'rotate-tool' | 'scale-tool' | 'focus-selection' | 'save-document' | 'new-level' | 'open-level' | 'save-as-level' | 'save-all-documents' | 'cycle-tool' | 'toggle-game-view' | 'toggle-realtime' | 'toggle-immersive' | 'toggle-content-drawer' | 'copy-selection' | 'cut-selection' | 'paste-selection' | 'delete-selection' | 'duplicate-selection' | 'browse-selection-asset' | 'undo' | 'redo';
export type CameraAction = 'move-forward' | 'move-backward' | 'move-left' | 'move-right' | 'move-up-world' | 'move-down-world' | 'move-up-local' | 'move-down-local' | 'increase-fov' | 'decrease-fov';
export type PointerGesture = 'fly-look' | 'pan' | 'orbit' | 'dolly' | 'ground-drag';
export type PointerLockStatus = 'idle' | 'requesting' | 'locked' | 'fallback';
export type PointerLockFailure = 'unsupported' | 'request-rejected' | 'pointerlockerror' | 'unexpected-loss';
export type PointerLockOutcome = 'locked' | 'expected-unlock' | 'unexpected-loss' | 'request-error';
export interface PointerGestureInput {
    altKey: boolean;
    button: number;
    buttons: number;
}
export interface KeyInput {
    code: string;
    isComposing: boolean;
    captureActive?: boolean;
    ctrlKey?: boolean;
    altKey?: boolean;
    runtimeActive?: boolean;
    enabledEditorActions?: ReadonlySet<EditorShortcutAction>;
    modalOpen: boolean;
    navigationActive: boolean;
    repeat?: boolean;
    shiftKey?: boolean;
    targetKind: InputTargetKind;
}
export type InputCancellationReason = 'escape' | 'blur' | 'hidden' | 'pointer-cancel' | 'lost-pointer-capture' | 'pointer-lock-loss';
export interface InputSnapshot {
    epoch: number;
    navigationActive: boolean;
    navigationGesture: PointerGesture | null;
    navigationPointerId: number | null;
    pointerLocked: boolean;
    pointerLockStatus: PointerLockStatus;
    pointerLockFailure: PointerLockFailure | null;
    lastPointerLockOutcome: PointerLockOutcome | null;
    heldCameraActions: readonly CameraAction[];
    lastCancellation: InputCancellationReason | null;
}
export type RouteResult = {
    owner: 'native';
    action: null;
    consumed: false;
} | {
    owner: 'interaction-capture';
    action: null;
    consumed: true;
} | {
    owner: 'viewport-navigation';
    action: CameraAction | 'cancel-navigation';
    consumed: true;
} | {
    owner: 'document-shortcut';
    action: EditorShortcutAction;
    consumed: true;
} | {
    owner: 'unhandled';
    action: null;
    consumed: false;
};
export declare const DEFAULT_EDITOR_SHORTCUTS: readonly ShortcutBinding[];
export declare function resolvePointerGesture(input: PointerGestureInput): PointerGesture | null;
export declare function isRotationGesture(gesture: PointerGesture | null): boolean;
export declare function classifyInputTarget(target: EventTarget | null): InputTargetKind;
export declare class InputRouter {
    private editorShortcuts;
    setShortcuts(bindings: readonly ShortcutBinding[]): void;
    shortcutLabel(actionId: string): string;
    private epoch;
    private navigationGesture;
    private navigationPointerId;
    private pointerLocked;
    private pointerLockStatus;
    private pointerLockFailure;
    private lastPointerLockOutcome;
    private expectedPointerUnlock;
    private readonly heldCameraKeys;
    private lastCancellation;
    beginNavigation(pointerId: number): InputSnapshot;
    beginGesture(pointerId: number, gesture: PointerGesture): InputSnapshot;
    endNavigation(pointerId: number): InputSnapshot;
    handleKeyDown(input: Omit<KeyInput, 'navigationActive'>): RouteResult;
    handleKeyUp(code: string): InputSnapshot;
    beginPointerLockRequest(): InputSnapshot;
    observePointerLockError(failure: Exclude<PointerLockFailure, 'unexpected-loss'>): InputSnapshot;
    expectPointerUnlock(): InputSnapshot;
    observePointerLock(locked: boolean): InputSnapshot;
    cancel(reason: InputCancellationReason): InputSnapshot;
    snapshot(): InputSnapshot;
    routeKey(input: KeyInput): RouteResult;
    private pointerLockSnapshot;
}
