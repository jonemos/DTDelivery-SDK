import type { ViewMode } from './mdfb0ca7fff50.js';
export interface ViewportColorControls {
    readonly mode: ViewMode;
    readonly environment: boolean;
    readonly intensity: number;
    readonly inspect: () => void;
    readonly light: () => void;
}
/** Lighting controls are transient preferences; never rewrite imported material colors. */
export declare function ViewportColorGuidance({ controls, disabled }: {
    controls: ViewportColorControls;
    disabled: boolean;
}): import("react").JSX.Element | null;
