import { Matrix4 } from 'three';
import type { QuaternionXyzw, Vec3 } from './m69ba5f67c309.js';
export interface SourceTransform {
    translationCm: Vec3;
    rotationXyzw: QuaternionXyzw;
    scale: Vec3;
}
export declare function previewWorldMatrix(t: SourceTransform): Matrix4;
export declare const PROVISIONAL_PAYLOAD_BASIS: Matrix4;
