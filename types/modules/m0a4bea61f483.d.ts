import { type ByteProvider } from './m5e6f4f6908c1.js';
import type { DeliveryApiClient } from './m19d0e2a84790.js';
import type { ReviewDocument } from './me723baf16c96.js';
import { type HostBindingSnapshot } from './m32707c8624d1.js';
import type { DisplayBudget } from './m915207263d86.js';
import type { ApplicationManifest } from './m66fe03b4842c.js';
export interface ReviewPanelOptions {
    client: DeliveryApiClient;
    review: ReviewDocument;
    host: HostBindingSnapshot;
    provider(hash: string): ByteProvider;
    previewBudget?: DisplayBudget;
    baseApplication?: ApplicationManifest;
    /** DC07 supplies this only after application resolution/commit is implemented. */
    apply?(review: ReviewDocument, keys: string[]): Promise<string>;
}
/** Optional review UI owns only the appended subtree and a separate preview World. */
export declare function mountReviewPanel(container: HTMLElement, options: ReviewPanelOptions): {
    readonly review: ReviewDocument;
    dispose(): Promise<void>;
};
