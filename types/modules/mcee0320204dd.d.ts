import type { DeliveryViewer } from './m566d2c035974.js';
/** Host-side Actor browser. PM-owned information belongs in the host's DB, keyed by serviceKey. */
export declare function mountActorPanel(root: HTMLElement, viewer: DeliveryViewer, inspector?: HTMLElement): () => void;
