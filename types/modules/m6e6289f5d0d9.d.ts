export type PropertyValueType = 'number' | 'integer' | 'boolean' | 'string' | 'enum' | 'reference' | 'vec3' | 'quaternion' | 'json';
export type PropertyUnit = 'degrees' | 'meters' | 'unitless' | 'packed-srgb';
export type PropertyReferenceKind = 'asset' | 'scene-object' | 'widget-local' | null;
export type PropertyContext = 'details' | 'load' | 'runtime';
export interface PropertyValidationResult {
    readonly ok: boolean;
    readonly reason?: string;
}
export interface FieldDescriptor {
    readonly fieldId: string;
    readonly path: readonly string[];
    readonly valueType: PropertyValueType;
    readonly defaultValue: unknown;
    readonly units: PropertyUnit;
    readonly referenceKind: PropertyReferenceKind;
    readonly editableContexts: readonly PropertyContext[];
    validate(value: unknown): PropertyValidationResult;
}
export interface TypeDescriptor {
    readonly typeId: string;
    readonly typeVersion: number;
    readonly fields: readonly FieldDescriptor[];
}
export interface TypedAssetPickerRequest {
    readonly acceptedKinds: readonly string[];
    readonly value: unknown;
}
export interface PropertyValidationIssue {
    readonly fieldId: string;
    readonly reason: string;
}
export declare class PropertyRegistry {
    private readonly descriptors;
    register(descriptor: TypeDescriptor): void;
    get(typeId: string, typeVersion: number): TypeDescriptor;
    has(typeId: string, typeVersion: number): boolean;
    validate(typeId: string, typeVersion: number, value: unknown, context: PropertyContext): readonly PropertyValidationIssue[];
    private key;
}
