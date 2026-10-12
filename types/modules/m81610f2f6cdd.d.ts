export type ShortcutContext = 'global' | 'viewport' | 'outliner' | 'details' | 'content' | 'widget' | 'widget-hierarchy';
export interface ShortcutBinding {
    readonly actionId: string;
    readonly context: ShortcutContext;
    readonly chord: string;
}
export interface ShortcutEventLike {
    readonly key: string;
    readonly ctrlKey?: boolean;
    readonly altKey?: boolean;
    readonly shiftKey?: boolean;
    readonly metaKey?: boolean;
    readonly isComposing?: boolean;
    readonly target?: EventTarget | null;
}
export declare function eventChord(event: ShortcutEventLike): string;
export declare function isNativeTextShortcut(event: ShortcutEventLike): boolean;
export declare class ShortcutRegistry {
    private bindings;
    constructor(bindings: readonly ShortcutBinding[]);
    list(context?: ShortcutContext): readonly ShortcutBinding[];
    remap(actionId: string, chord: string): void;
    resolve(event: ShortcutEventLike, context: ShortcutContext): string | null;
    private assertNoConflicts;
}
export declare function serializeActorClipboard(actorIds: readonly string[]): string;
export declare function parseActorClipboard(value: string): readonly string[];
export interface ContextMenuAction {
    readonly id: string;
    readonly label: string;
    readonly enabled: boolean;
    readonly run: () => void;
}
export declare function invokeContextMenuAction(actions: readonly ContextMenuAction[], actionId: string): boolean;
