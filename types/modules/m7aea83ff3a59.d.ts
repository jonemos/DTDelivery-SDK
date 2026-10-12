import type { Transform } from './m69ba5f67c309.js';
export type Matrix4 = readonly [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
export declare const IDENTITY_MATRIX4: Matrix4;
export declare function composeTransformMatrix(transform: Transform): Matrix4;
export declare function multiplyMatrix4(left: Matrix4, right: Matrix4): Matrix4;
export declare function invertAffineMatrix4(matrix: Matrix4): Matrix4;
export declare function decomposeRepresentableTransform(matrix: Matrix4, tolerance?: number): Transform;
export declare function matrixRelativeResidual(left: Matrix4, right: Matrix4): number;
