import type { AddonTarget } from './m15cd22cd6bd7.js';
import type { ScriptSettings } from './mcc06b6e568a7.js';
import type { AddonControlCatalog, AddonControlChange } from './mec05efbb93a1.js';
import type { DeliveryApiClient } from './m19d0e2a84790.js';
export declare class AddonPropertiesClient {
    readonly client: DeliveryApiClient;
    readonly appId: string;
    readonly releaseHash: string;
    readonly executionId: `${string}-${string}-${string}-${string}-${string}`;
    private socket?;
    private closed;
    private connecting;
    private readonly listeners;
    constructor(client: DeliveryApiClient, appId: string, releaseHash: string);
    private path;
    list(): Promise<AddonControlCatalog>;
    schema(target: AddonTarget): Promise<{
        target: AddonTarget;
        reference: import('./mcc06b6e568a7.js').ScriptPackageReference;
        schema: readonly import('./mfc2efa75f19e.js').AddonPropertySchema[];
    }>;
    values(target: AddonTarget): Promise<{
        revision: number;
        values: ScriptSettings;
    }>;
    change(updates: readonly AddonControlChange[], mode: 'runtime' | 'persistent', expectedRevision: number): Promise<AddonControlCatalog>;
    subscribe(listener: () => void): () => void;
    connect(): Promise<void>;
    dispose(): Promise<void>;
}
