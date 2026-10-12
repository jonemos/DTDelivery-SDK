/** SDK 1: authored public declarations, independent of editor/renderer implementation. */
export interface TestDataHandle {
  readonly id: string;
  readonly typeId: 'TestData';
  value: number;
}
export interface ComponentOwner {
  readonly id: string;
  getComponent(type: 'TestData'): TestDataHandle | undefined;
  getComponents(type: 'TestData'): readonly TestDataHandle[];
  getComponentById(id: string): TestDataHandle | undefined;
}
export interface ScriptContext<S> {
  readonly id: string;
  readonly owner: ComponentOwner;
  readonly settings: Readonly<S>;
  setTickEnabled(enabled: boolean): void;
  guardAsync<T>(promise: Promise<T>, apply: (value: T) => void): void;
}
/** Hooks are called by the existing RuntimeWorld, never by an independent timer. */
export interface ScriptBehavior {
  onRegister?(): void;
  beginPlay?(): void;
  tick?(deltaTime: number): void;
  onEnable?(): void;
  onDisable?(): void;
  endPlay?(): void;
  onUnregister?(): void;
  onDestroy?(): void;
}
export interface TestDataScriptSettings {
  readonly targetComponentId: string;
  readonly ratePerSecond: number;
}
export type ScriptFactory<S> = (context: ScriptContext<S>) => ScriptBehavior;
/** SDK 2 resolves declared reference settings through the host's ownership/lifetime checks. */
export interface SchemaScriptContext<S> extends ScriptContext<S> {
  getReference(fieldKey: keyof S & string): TestDataHandle | undefined;
  requireReference(fieldKey: keyof S & string): TestDataHandle;
}
export type SchemaScriptFactory<S> = (context: SchemaScriptContext<S>) => ScriptBehavior;
/** Parent-relative canonical coordinates: right-handed Y-up, meters, quaternion XYZW. */
export interface MeshTransform {
  readonly positionMeters: readonly [number, number, number];
  readonly rotationXyzw: readonly [number, number, number, number];
  readonly scale: readonly [number, number, number];
}
export interface StaticMeshHandle {
  readonly id: string;
  readonly typeId: 'StaticMesh';
  getLocalTransform(): MeshTransform;
  setLocalTransform(value: MeshTransform): void;
  setLocalPosition(value: MeshTransform['positionMeters']): void;
  setLocalRotation(value: MeshTransform['rotationXyzw']): void;
  setLocalScale(value: MeshTransform['scale']): void;
}
/** SDK 3 adds only explicitly declared, same-owner StaticMesh references. */
export interface SpatialScriptContext<S> extends SchemaScriptContext<S> {
  getMeshReference(fieldKey: keyof S & string): StaticMeshHandle | undefined;
  requireMeshReference(fieldKey: keyof S & string): StaticMeshHandle;
}
export type SpatialScriptFactory<S> = (context: SpatialScriptContext<S>) => ScriptBehavior;
/** SDK 4: transient, simulation-clock samples. Saved numeric defaults are never fresh samples. */
export type SignalProducerState = 'none' | 'starting' | 'running' | 'idle' | 'disabled' | 'faulted' | 'removed';
export interface SignalSample {
  readonly value: number | null;
  readonly quality: 'uninitialized' | 'valid' | 'invalid' | 'stale' | 'unavailable';
  readonly updatedAtSeconds: number | null;
  readonly ageSeconds: number | null;
  readonly producerId: string | null;
  readonly producerState: SignalProducerState;
  readonly reason: string | null;
}
export interface SignalWriter {
  publish(value: number): void;
  invalidate(reason: string): void;
}
export interface SignalScriptContext<S> extends SpatialScriptContext<S> {
  claimSignalOutput(fieldKey: keyof S & string): SignalWriter;
  readSignal(fieldKey: keyof S & string, maxAgeSeconds: number): SignalSample;
}
export type SignalScriptFactory<S> = (context: SignalScriptContext<S>) => ScriptBehavior;

/** SDK 5. Environments: editor/play/composition/delivery. Canonical RH Y-up meters. */
export type AddonEnvironment = 'editor' | 'play' | 'composition' | 'delivery';
export interface AddonTarget {
  readonly compositionId: string;
  readonly mountId: string | null;
  readonly actorId: string;
  readonly componentId: string;
}
export interface AddonBounds { readonly min: readonly [number, number, number]; readonly max: readonly [number, number, number] }
export interface AddonActorHandle {
  readonly id: string;
  readonly name: string;
  readonly componentIds: readonly string[];
}
/** Read-only canonical hierarchy; bounds use loaded geometry projected into the owner coordinate frame. */
export interface AddonSceneAPI {
  actor(id: string): AddonActorHandle | undefined;
  actors(): readonly AddonActorHandle[];
  parent(id: string): AddonActorHandle | undefined;
  descendants(id: string): readonly AddonActorHandle[];
  components(id: string): readonly { readonly id: string; readonly type: string }[];
  component(actorId: string, componentId: string): Readonly<Record<string, unknown>> | undefined;
  transform(id: string): MeshTransform;
  bounds(id: string, descendants: boolean): AddonBounds | null;
}
export interface AddonDisplayHandle<T> { update(value: T): void; dispose(): void }
export interface AddonBox { readonly bounds: AddonBounds; readonly color: string; readonly opacity: number }
export interface AddonLine { readonly points: readonly (readonly [number, number, number])[]; readonly color: string; readonly opacity: number }
export interface AddonText { readonly text: string; readonly positionMeters: readonly [number, number, number]; readonly color: string; readonly heightMeters: number }
/** Runtime render objects, independently owned by this instance; no document edits. All four environments. */
export interface AddonDisplayAPI {
  box(value: AddonBox): AddonDisplayHandle<AddonBox>;
  line(value: AddonLine): AddonDisplayHandle<AddonLine>;
  text(value: AddonText): AddonDisplayHandle<AddonText>;
}
export interface AddonPropertiesAPI {
  current(): Readonly<Record<string, number | boolean | string | null>>;
  subscribe(listener: (names: readonly string[]) => void): () => void;
}
/** Explicit persistent settings batch. Editor/composition only; host commands and Undo, never direct mutation. */
export interface AddonDocumentAPI { edit(values: Readonly<Record<string, number | boolean | string | null>>): void }
export interface AddonCapabilityAPIs {
  'scene.read': AddonSceneAPI;
  'display.objects': AddonDisplayAPI;
  'properties.control': AddonPropertiesAPI;
  'document.edit': AddonDocumentAPI;
}
export interface AddonContext<S> {
  readonly id: string;
  readonly target: AddonTarget;
  readonly environment: AddonEnvironment;
  readonly settings: Readonly<S>;
  capability<K extends keyof AddonCapabilityAPIs>(id: K): AddonCapabilityAPIs[K];
  guardAsync<T>(promise: Promise<T>, apply: (value: T) => void): void;
}
export interface AddonBehavior {
  onRegister?(): void;
  tick?(deltaTime: number): void;
  onPropertiesChanged?(names: readonly string[]): void;
  onDestroy?(): void;
}
export type AddonFactory<S> = (context: AddonContext<S>) => AddonBehavior;
