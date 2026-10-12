export declare const ADDON_SDK_VERSION = 5;
export declare const ADDON_ENVIRONMENTS: readonly ["editor", "play", "composition", "delivery"];
export type AddonEnvironment = typeof ADDON_ENVIRONMENTS[number];
export type AddonScope = 'read' | 'runtime' | 'persistent';
export interface AddonCapabilityDescriptor {
    readonly id: string;
    readonly environments: readonly AddonEnvironment[];
    readonly scope: AddonScope;
    readonly description: string;
}
/** Host features register here; the module loader never branches on a package identity. */
export declare function registerAddonCapability(descriptor: AddonCapabilityDescriptor): void;
export declare const addonCapabilityDescriptors: () => AddonCapabilityDescriptor[];
export declare function requireAddonCapability(id: string, environment?: AddonEnvironment): AddonCapabilityDescriptor;
export declare function validateAddonCapabilities(capabilities: unknown, environments: unknown): void;
export declare function validateAddonExecutionEnvironment(manifest: {
    readonly environments: readonly AddonEnvironment[];
    readonly capabilities: readonly string[];
}, environment: AddonEnvironment): void;
