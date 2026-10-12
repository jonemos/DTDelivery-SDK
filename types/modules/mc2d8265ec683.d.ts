import type { TextureDisplaySession } from './m629d7ac5d41a.js';
import { type ViewportColorControls } from './mc23dfce570bb.js';
export type TextureDisplayControl = Pick<TextureDisplaySession<unknown>, 'layouts' | 'options' | 'budgetBytes' | 'estimate' | 'apply'> & {
    readonly current: {
        readonly reservedBytes: number;
    } | null;
};
export declare function TextureOptionsMenu({ resources, disabled, onBusy, autoApply, colorControls }: {
    resources?: {
        textureDisplay?: TextureDisplayControl;
    };
    disabled?: boolean;
    onBusy: (busy: boolean) => void;
    autoApply?: boolean;
    colorControls?: ViewportColorControls;
}): import("react").JSX.Element;
