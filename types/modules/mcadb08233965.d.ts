export type DeliverySetupPrompt = (question: string) => Promise<string>;
/** Input remains data, never shell command text. Only the separate local configuration is written. */
export declare function configureDeliveryApi(path: string, templates: string, prompt: DeliverySetupPrompt, output?: (message: string) => void): Promise<void>;
