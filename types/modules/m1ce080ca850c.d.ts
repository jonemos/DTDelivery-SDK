import type { Actor, ActorComponent, BehaviorComponent, TestDataComponent, TestScriptComponent } from './mcec497bf55e6.js';
export declare function componentPropertyDescriptor(component: ActorComponent): import('./m6e6289f5d0d9.js').TypeDescriptor;
/** Only registered typed reference fields are remapped; ordinary string contents are untouched. */
export declare function remapBehaviorReferences<T extends ActorComponent>(component: T, ids: ReadonlyMap<string, string>): T;
export declare function validateBehaviorReferences(actor: Actor): void;
export interface BehaviorSettings {
    readonly scriptSettings?: import('./mcc06b6e568a7.js').ScriptSettings;
    readonly value?: number;
    readonly targetComponentId?: string;
    readonly ratePerSecond?: number;
    readonly scriptPackage?: import('./mcc06b6e568a7.js').ScriptPackageReference;
}
declare function create(type: 'TestData', ownerActorId: string, id: string, settings?: BehaviorSettings): TestDataComponent;
declare function create(type: 'TestScript', ownerActorId: string, id: string, settings: BehaviorSettings): TestScriptComponent;
declare function create(type: string, ownerActorId: string, id: string, settings?: BehaviorSettings): BehaviorComponent;
export declare const componentRegistry: {
    create: typeof create;
};
export {};
