import { At as e, Bt as t, C as n, Cr as r, Er as i, Et as a, F as o, H as s, Jn as c, M as l, Mt as u, Nn as d, P as f, Pt as p, Rn as m, S as h, Sr as g, Tt as _, Y as v, en as y, fr as b, hr as x, i as S, lr as C, o as w, pr as T, r as E, t as D, wt as O, xr as k } from "./RenderQualityPreset-C-TDZc9R.js";
import { a as A, d as ee, i as j, l as te, n as M, r as N, s as P, t as ne, u as F } from "./FXAAShader-DmE2nSv5.js";
//#region node_modules/.pnpm/three@0.186.0/node_modules/three/examples/jsm/shaders/CopyShader.js
var I = {
	name: "CopyShader",
	uniforms: {
		tDiffuse: { value: null },
		opacity: { value: 1 }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n\n		uniform float opacity;\n\n		uniform sampler2D tDiffuse;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vec4 texel = texture2D( tDiffuse, vUv );\n			gl_FragColor = opacity * texel;\n\n\n		}"
}, L = class extends N {
	constructor(e, t = "tDiffuse") {
		super(), this.textureID = t, this.uniforms = null, this.material = null, e instanceof c ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = b.clone(e.uniforms), this.material = new c({
			name: e.name === void 0 ? "unspecified" : e.name,
			defines: Object.assign({}, e.defines),
			uniforms: this.uniforms,
			vertexShader: e.vertexShader,
			fragmentShader: e.fragmentShader
		})), this._fsQuad = new M(this.material);
	}
	render(e, t, n) {
		this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this._fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
	}
	dispose() {
		this.material.dispose(), this._fsQuad.dispose();
	}
}, R = class extends N {
	constructor(e, t) {
		super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
	}
	render(e, t, n) {
		let r = e.getContext(), i = e.state;
		i.buffers.color.setMask(!1), i.buffers.depth.setMask(!1), i.buffers.color.setLocked(!0), i.buffers.depth.setLocked(!0);
		let a, o;
		this.inverse ? (a = 0, o = 1) : (a = 1, o = 0), i.buffers.stencil.setTest(!0), i.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), i.buffers.stencil.setFunc(r.ALWAYS, a, 4294967295), i.buffers.stencil.setClear(o), i.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), i.buffers.color.setLocked(!1), i.buffers.depth.setLocked(!1), i.buffers.color.setMask(!0), i.buffers.depth.setMask(!0), i.buffers.stencil.setLocked(!1), i.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295), i.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), i.buffers.stencil.setLocked(!0);
	}
}, z = class extends N {
	constructor() {
		super(), this.needsSwap = !1;
	}
	render(e) {
		e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
	}
}, B = class {
	constructor(e, t) {
		if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
			let n = e.getSize(new k());
			this._width = n.width, this._height = n.height, t = new i(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: v }), t.texture.name = "EffectComposer.rt1";
		} else this._width = t.width, this._height = t.height;
		this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new L(I), this.copyPass.material.blending = 0, this.timer = new C();
	}
	swapBuffers() {
		let e = this.readBuffer;
		this.readBuffer = this.writeBuffer, this.writeBuffer = e;
	}
	addPass(e) {
		this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
	}
	insertPass(e, t) {
		this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
	}
	removePass(e) {
		let t = this.passes.indexOf(e);
		t !== -1 && this.passes.splice(t, 1);
	}
	isLastEnabledPass(e) {
		for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return !1;
		return !0;
	}
	render(e) {
		this.timer.update(), e === void 0 && (e = this.timer.getDelta());
		let t = this.renderer.getRenderTarget(), n = !1;
		for (let t = 0, r = this.passes.length; t < r; t++) {
			let r = this.passes[t];
			if (r.enabled !== !1) {
				if (r.renderToScreen = this.renderToScreen && this.isLastEnabledPass(t), r.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), r.needsSwap) {
					if (n) {
						let t = this.renderer.getContext(), n = this.renderer.state.buffers.stencil;
						n.setFunc(t.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), n.setFunc(t.EQUAL, 1, 4294967295);
					}
					this.swapBuffers();
				}
				R !== void 0 && (r instanceof R ? n = !0 : r instanceof z && (n = !1));
			}
		}
		this.renderer.setRenderTarget(t);
	}
	reset(e) {
		if (e === void 0) {
			let t = this.renderer.getSize(new k());
			this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
		}
		this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
	}
	setSize(e, t) {
		this._width = e, this._height = t;
		let n = this._width * this._pixelRatio, r = this._height * this._pixelRatio;
		this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r);
		for (let e = 0; e < this.passes.length; e++) this.passes[e].setSize(n, r);
	}
	setPixelRatio(e) {
		this._pixelRatio = e, this.setSize(this._width, this._height);
	}
	dispose() {
		this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
	}
}, V = class extends N {
	constructor(e, t = 1) {
		super();
		let n = I;
		this.map = e, this.opacity = t, this.needsSwap = !1, this.uniforms = b.clone(n.uniforms), this.material = new c({
			uniforms: this.uniforms,
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			depthTest: !1,
			depthWrite: !1,
			premultipliedAlpha: !0
		}), this._fsQuad = new M(null);
	}
	render(e, t, n) {
		let r = e.autoClear;
		e.autoClear = !1, this._fsQuad.material = this.material, this.uniforms.opacity.value = this.opacity, this.uniforms.tDiffuse.value = this.map, this.material.transparent = this.opacity < 1, e.setRenderTarget(this.renderToScreen ? null : n), this.clear && e.clear(), this._fsQuad.render(e), e.autoClear = r;
	}
	dispose() {
		this.material.dispose(), this._fsQuad.dispose();
	}
}, H = {
	name: "GTAOShader",
	defines: {
		PERSPECTIVE_CAMERA: 1,
		SAMPLES: 16,
		NORMAL_VECTOR_TYPE: 1,
		DEPTH_SWIZZLING: "x",
		SCREEN_SPACE_RADIUS: 0,
		SCREEN_SPACE_RADIUS_SCALE: 100,
		SCENE_CLIP_BOX: 0
	},
	uniforms: {
		tNormal: { value: null },
		tDepth: { value: null },
		tNoise: { value: null },
		resolution: { value: new k() },
		cameraNear: { value: null },
		cameraFar: { value: null },
		cameraProjectionMatrix: { value: new O() },
		cameraProjectionMatrixInverse: { value: new O() },
		cameraWorldMatrix: { value: new O() },
		radius: { value: .25 },
		distanceExponent: { value: 1 },
		thickness: { value: 1 },
		distanceFallOff: { value: 1 },
		scale: { value: 1 },
		sceneBoxMin: { value: new g(-1, -1, -1) },
		sceneBoxMax: { value: new g(1, 1, 1) }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n		}",
	fragmentShader: "\n		varying vec2 vUv;\n		uniform highp sampler2D tNormal;\n		uniform highp sampler2D tDepth;\n		uniform sampler2D tNoise;\n		uniform vec2 resolution;\n		uniform float cameraNear;\n		uniform float cameraFar;\n		uniform mat4 cameraProjectionMatrix;\n		uniform mat4 cameraProjectionMatrixInverse;\n		uniform mat4 cameraWorldMatrix;\n		uniform float radius;\n		uniform float distanceExponent;\n		uniform float thickness;\n		uniform float distanceFallOff;\n		uniform float scale;\n		#if SCENE_CLIP_BOX == 1\n			uniform vec3 sceneBoxMin;\n			uniform vec3 sceneBoxMax;\n		#endif\n\n		#include <common>\n		#include <packing>\n\n		#ifndef FRAGMENT_OUTPUT\n		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)\n		#endif\n\n		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );\n			#else\n				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );\n			#endif\n			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;\n			return viewSpacePosition.xyz / viewSpacePosition.w;\n		}\n\n		float getDepth(const vec2 uv) {\n			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;\n		}\n\n		float fetchDepth(const ivec2 uv) {\n			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;\n		}\n\n		float getViewZ(const in float depth) {\n			#if PERSPECTIVE_CAMERA == 1\n				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);\n			#else\n				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);\n			#endif\n		}\n\n		vec3 computeNormalFromDepth(const vec2 uv) {\n			vec2 size = vec2(textureSize(tDepth, 0));\n			ivec2 p = ivec2(uv * size);\n			float c0 = fetchDepth(p);\n			float l2 = fetchDepth(p - ivec2(2, 0));\n			float l1 = fetchDepth(p - ivec2(1, 0));\n			float r1 = fetchDepth(p + ivec2(1, 0));\n			float r2 = fetchDepth(p + ivec2(2, 0));\n			float b2 = fetchDepth(p - ivec2(0, 2));\n			float b1 = fetchDepth(p - ivec2(0, 1));\n			float t1 = fetchDepth(p + ivec2(0, 1));\n			float t2 = fetchDepth(p + ivec2(0, 2));\n			float dl = abs((2.0 * l1 - l2) - c0);\n			float dr = abs((2.0 * r1 - r2) - c0);\n			float db = abs((2.0 * b1 - b2) - c0);\n			float dt = abs((2.0 * t1 - t2) - c0);\n			vec3 ce = getViewPosition(uv, c0).xyz;\n			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;\n			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;\n			return normalize(cross(dpdx, dpdy));\n		}\n\n		vec3 getViewNormal(const vec2 uv) {\n			#if NORMAL_VECTOR_TYPE == 2\n				return normalize(textureLod(tNormal, uv, 0.).rgb);\n			#elif NORMAL_VECTOR_TYPE == 1\n				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);\n			#else\n				return computeNormalFromDepth(uv);\n			#endif\n		}\n\n		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {\n			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);\n			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;\n			float sampleSceneDepth = getDepth(sampleUv);\n			return vec3(sampleUv, sampleSceneDepth);\n		}\n\n		void main() {\n			float depth = getDepth(vUv.xy);\n\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				if (depth <= 0.0) {\n					discard;\n					return;\n				}\n			#else\n				if (depth >= 1.0) {\n					discard;\n					return;\n				}\n			#endif\n			\n			vec3 viewPos = getViewPosition(vUv, depth);\n			vec3 viewNormal = getViewNormal(vUv);\n\n			float radiusToUse = radius;\n			float distanceFalloffToUse = thickness;\n			#if SCREEN_SPACE_RADIUS == 1\n				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;\n				radiusToUse *= radiusScale;\n				distanceFalloffToUse *= radiusScale;\n			#endif\n\n			#if SCENE_CLIP_BOX == 1\n				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;\n				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));\n				if (boxDistance > radiusToUse) {\n					discard;\n					return;\n				}\n			#endif\n\n			vec2 noiseResolution = vec2(textureSize(tNoise, 0));\n			vec2 noiseUv = vUv * resolution / noiseResolution;\n			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);\n			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;\n			vec3 tangent = normalize(vec3(randomVec.xy, 0.));\n			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);\n			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));\n\n			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;\n			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;\n			float ao = 0.0;\n			for (int i = 0; i < DIRECTIONS; ++i) {\n\n				float angle = float(i) / float(DIRECTIONS) * PI;\n				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);\n				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);\n\n				vec3 viewDir = normalize(-viewPos.xyz);\n				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));\n				vec3 sliceTangent = cross(sliceBitangent, viewDir);\n				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));\n\n				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);\n				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));\n\n				for (int j = 0; j < STEPS; ++j) {\n					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);\n\n					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);\n					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);\n					vec3 viewDelta = sampleSceneViewPos - viewPos;\n					if (abs(viewDelta.z) < thickness) {\n						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));\n						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));\n					}\n\n					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);\n					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);\n					viewDelta = sampleSceneViewPos - viewPos;\n					if (abs(viewDelta.z) < thickness) {\n						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));\n						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));\n					}\n				}\n\n				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);\n				float nx = dot(normalInSlice, sliceTangent);\n				float ny = dot(normalInSlice, viewDir);\n				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);\n				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);\n				float occlusion = nx * nxb + ny * nyb;\n				ao += occlusion;\n			}\n\n			ao = clamp(ao / float(DIRECTIONS), 0., 1.);\n		#if SCENE_CLIP_BOX == 1\n			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));\n		#endif\n			ao = pow(ao, scale);\n\n			gl_FragColor = FRAGMENT_OUTPUT;\n		}"
}, U = {
	name: "GTAODepthShader",
	defines: { PERSPECTIVE_CAMERA: 1 },
	uniforms: {
		tDepth: { value: null },
		cameraNear: { value: null },
		cameraFar: { value: null }
	},
	vertexShader: "\n		varying vec2 vUv;\n\n		void main() {\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n		}",
	fragmentShader: "\n		uniform sampler2D tDepth;\n		uniform float cameraNear;\n		uniform float cameraFar;\n		varying vec2 vUv;\n\n		#include <packing>\n\n		float getLinearDepth( const in vec2 screenPosition ) {\n			#if PERSPECTIVE_CAMERA == 1\n				float fragCoordZ = texture2D( tDepth, screenPosition ).x;\n				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );\n				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );\n			#else\n				return texture2D( tDepth, screenPosition ).x;\n			#endif\n		}\n\n		void main() {\n			float depth = getLinearDepth( vUv );\n			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );\n\n		}"
}, W = {
	name: "GTAOBlendShader",
	uniforms: {
		tDiffuse: { value: null },
		intensity: { value: 1 }
	},
	vertexShader: "\n		varying vec2 vUv;\n\n		void main() {\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n		}",
	fragmentShader: "\n		uniform float intensity;\n		uniform sampler2D tDiffuse;\n		varying vec2 vUv;\n\n		void main() {\n			vec4 texel = texture2D( tDiffuse, vUv );\n			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);\n		}"
};
function re(e = 5) {
	let t = Math.floor(e) % 2 == 0 ? Math.floor(e) + 1 : Math.floor(e), n = ie(t), r = n.length, i = new Uint8Array(r * 4);
	for (let e = 0; e < r; ++e) {
		let t = n[e], a = 2 * Math.PI * t / r, o = new g(Math.cos(a), Math.sin(a), 0).normalize();
		i[e * 4] = (o.x * .5 + .5) * 255, i[e * 4 + 1] = (o.y * .5 + .5) * 255, i[e * 4 + 2] = 127, i[e * 4 + 3] = 255;
	}
	let a = new l(i, t, t);
	return a.wrapS = m, a.wrapT = m, a.needsUpdate = !0, a;
}
function ie(e) {
	let t = Math.floor(e) % 2 == 0 ? Math.floor(e) + 1 : Math.floor(e), n = t * t, r = Array(n).fill(0), i = Math.floor(t / 2), a = t - 1;
	for (let e = 1; e <= n;) {
		if (i === -1 && a === t ? (a = t - 2, i = 0) : (a === t && (a = 0), i < 0 && (i = t - 1)), r[i * t + a] !== 0) {
			a -= 2, i++;
			continue;
		}
		r[i * t + a] = e++, a++, i--;
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/three@0.186.0/node_modules/three/examples/jsm/shaders/PoissonDenoiseShader.js
var G = {
	name: "PoissonDenoiseShader",
	defines: {
		SAMPLES: 16,
		SAMPLE_VECTORS: K(16, 2, 1),
		NORMAL_VECTOR_TYPE: 1,
		DEPTH_VALUE_SOURCE: 0
	},
	uniforms: {
		tDiffuse: { value: null },
		tNormal: { value: null },
		tDepth: { value: null },
		tNoise: { value: null },
		resolution: { value: new k() },
		cameraProjectionMatrixInverse: { value: new O() },
		lumaPhi: { value: 5 },
		depthPhi: { value: 5 },
		normalPhi: { value: 5 },
		radius: { value: 4 },
		index: { value: 0 }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n		}",
	fragmentShader: "\n\n		varying vec2 vUv;\n\n		uniform sampler2D tDiffuse;\n		uniform sampler2D tNormal;\n		uniform sampler2D tDepth;\n		uniform sampler2D tNoise;\n		uniform vec2 resolution;\n		uniform mat4 cameraProjectionMatrixInverse;\n		uniform float lumaPhi;\n		uniform float depthPhi;\n		uniform float normalPhi;\n		uniform float radius;\n		uniform int index;\n\n		#include <common>\n		#include <packing>\n\n		#ifndef SAMPLE_LUMINANCE\n		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)\n		#endif\n\n		#ifndef FRAGMENT_OUTPUT\n		#define FRAGMENT_OUTPUT vec4(denoised, 1.)\n		#endif\n\n		float getLuminance(const in vec3 a) {\n			return SAMPLE_LUMINANCE;\n		}\n\n		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;\n\n		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );\n			#else\n				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );\n			#endif\n			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;\n			return viewSpacePosition.xyz / viewSpacePosition.w;\n		}\n\n		float getDepth(const vec2 uv) {\n		#if DEPTH_VALUE_SOURCE == 1\n			return textureLod(tDepth, uv.xy, 0.0).a;\n		#else\n			return textureLod(tDepth, uv.xy, 0.0).r;\n		#endif\n		}\n\n		float fetchDepth(const ivec2 uv) {\n			#if DEPTH_VALUE_SOURCE == 1\n				return texelFetch(tDepth, uv.xy, 0).a;\n			#else\n				return texelFetch(tDepth, uv.xy, 0).r;\n			#endif\n		}\n\n		vec3 computeNormalFromDepth(const vec2 uv) {\n			vec2 size = vec2(textureSize(tDepth, 0));\n			ivec2 p = ivec2(uv * size);\n			float c0 = fetchDepth(p);\n			float l2 = fetchDepth(p - ivec2(2, 0));\n			float l1 = fetchDepth(p - ivec2(1, 0));\n			float r1 = fetchDepth(p + ivec2(1, 0));\n			float r2 = fetchDepth(p + ivec2(2, 0));\n			float b2 = fetchDepth(p - ivec2(0, 2));\n			float b1 = fetchDepth(p - ivec2(0, 1));\n			float t1 = fetchDepth(p + ivec2(0, 1));\n			float t2 = fetchDepth(p + ivec2(0, 2));\n			float dl = abs((2.0 * l1 - l2) - c0);\n			float dr = abs((2.0 * r1 - r2) - c0);\n			float db = abs((2.0 * b1 - b2) - c0);\n			float dt = abs((2.0 * t1 - t2) - c0);\n			vec3 ce = getViewPosition(uv, c0).xyz;\n			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz\n									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;\n			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz\n									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;\n			return normalize(cross(dpdx, dpdy));\n		}\n\n		vec3 getViewNormal(const vec2 uv) {\n		#if NORMAL_VECTOR_TYPE == 2\n			return normalize(textureLod(tNormal, uv, 0.).rgb);\n		#elif NORMAL_VECTOR_TYPE == 1\n			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);\n		#else\n			return computeNormalFromDepth(uv);\n		#endif\n		}\n\n		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {\n			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);\n			float sampleDepth = getDepth(sampleUv);\n			vec3 sampleNormal = getViewNormal(sampleUv);\n			vec3 neighborColor = sampleTexel.rgb;\n			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);\n\n			float normalDiff = dot(viewNormal, sampleNormal);\n			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);\n			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));\n			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);\n			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));\n			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);\n			float w = lumaSimilarity * depthSimilarity * normalSimilarity;\n\n			denoised += w * neighborColor;\n			totalWeight += w;\n		}\n\n		void main() {\n			float depth = getDepth(vUv.xy);\n			vec3 viewNormal = getViewNormal(vUv);\n			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {\n				discard;\n				return;\n			}\n			vec4 texel = textureLod(tDiffuse, vUv, 0.0);\n			vec3 center = texel.rgb;\n			vec3 viewPos = getViewPosition(vUv, depth);\n\n			vec2 noiseResolution = vec2(textureSize(tNoise, 0));\n			vec2 noiseUv = vUv * resolution / noiseResolution;\n			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);\n      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));\n    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);\n\n			float totalWeight = 1.0;\n			vec3 denoised = texel.rgb;\n			for (int i = 0; i < SAMPLES; i++) {\n				vec3 sampleDir = poissonDisk[i];\n				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);\n				vec2 sampleUv = vUv + offset;\n				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);\n			}\n\n			if (totalWeight > 0.) {\n				denoised /= totalWeight;\n			}\n			gl_FragColor = FRAGMENT_OUTPUT;\n		}"
};
function K(e, t, n) {
	let r = ae(e, t, n), i = "vec3[SAMPLES](";
	for (let t = 0; t < e; t++) {
		let n = r[t];
		i += `vec3(${n.x}, ${n.y}, ${n.z})${t < e - 1 ? "," : ")"}`;
	}
	return i;
}
function ae(e, t, n) {
	let r = [];
	for (let i = 0; i < e; i++) {
		let a = 2 * Math.PI * t * i / e, o = (i / (e - 1)) ** n;
		r.push(new g(Math.cos(a), Math.sin(a), o));
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/three@0.186.0/node_modules/three/examples/jsm/math/SimplexNoise.js
var oe = class {
	constructor(e = Math) {
		this.grad3 = [
			[
				1,
				1,
				0
			],
			[
				-1,
				1,
				0
			],
			[
				1,
				-1,
				0
			],
			[
				-1,
				-1,
				0
			],
			[
				1,
				0,
				1
			],
			[
				-1,
				0,
				1
			],
			[
				1,
				0,
				-1
			],
			[
				-1,
				0,
				-1
			],
			[
				0,
				1,
				1
			],
			[
				0,
				-1,
				1
			],
			[
				0,
				1,
				-1
			],
			[
				0,
				-1,
				-1
			]
		], this.grad4 = [
			[
				0,
				1,
				1,
				1
			],
			[
				0,
				1,
				1,
				-1
			],
			[
				0,
				1,
				-1,
				1
			],
			[
				0,
				1,
				-1,
				-1
			],
			[
				0,
				-1,
				1,
				1
			],
			[
				0,
				-1,
				1,
				-1
			],
			[
				0,
				-1,
				-1,
				1
			],
			[
				0,
				-1,
				-1,
				-1
			],
			[
				1,
				0,
				1,
				1
			],
			[
				1,
				0,
				1,
				-1
			],
			[
				1,
				0,
				-1,
				1
			],
			[
				1,
				0,
				-1,
				-1
			],
			[
				-1,
				0,
				1,
				1
			],
			[
				-1,
				0,
				1,
				-1
			],
			[
				-1,
				0,
				-1,
				1
			],
			[
				-1,
				0,
				-1,
				-1
			],
			[
				1,
				1,
				0,
				1
			],
			[
				1,
				1,
				0,
				-1
			],
			[
				1,
				-1,
				0,
				1
			],
			[
				1,
				-1,
				0,
				-1
			],
			[
				-1,
				1,
				0,
				1
			],
			[
				-1,
				1,
				0,
				-1
			],
			[
				-1,
				-1,
				0,
				1
			],
			[
				-1,
				-1,
				0,
				-1
			],
			[
				1,
				1,
				1,
				0
			],
			[
				1,
				1,
				-1,
				0
			],
			[
				1,
				-1,
				1,
				0
			],
			[
				1,
				-1,
				-1,
				0
			],
			[
				-1,
				1,
				1,
				0
			],
			[
				-1,
				1,
				-1,
				0
			],
			[
				-1,
				-1,
				1,
				0
			],
			[
				-1,
				-1,
				-1,
				0
			]
		], this.p = [];
		for (let t = 0; t < 256; t++) this.p[t] = Math.floor(e.random() * 256);
		this.perm = [];
		for (let e = 0; e < 512; e++) this.perm[e] = this.p[e & 255];
		this.simplex = [
			[
				0,
				1,
				2,
				3
			],
			[
				0,
				1,
				3,
				2
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				2,
				3,
				1
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				1,
				2,
				3,
				0
			],
			[
				0,
				2,
				1,
				3
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				3,
				1,
				2
			],
			[
				0,
				3,
				2,
				1
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				1,
				3,
				2,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				1,
				2,
				0,
				3
			],
			[
				0,
				0,
				0,
				0
			],
			[
				1,
				3,
				0,
				2
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				2,
				3,
				0,
				1
			],
			[
				2,
				3,
				1,
				0
			],
			[
				1,
				0,
				2,
				3
			],
			[
				1,
				0,
				3,
				2
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				2,
				0,
				3,
				1
			],
			[
				0,
				0,
				0,
				0
			],
			[
				2,
				1,
				3,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				2,
				0,
				1,
				3
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				3,
				0,
				1,
				2
			],
			[
				3,
				0,
				2,
				1
			],
			[
				0,
				0,
				0,
				0
			],
			[
				3,
				1,
				2,
				0
			],
			[
				2,
				1,
				0,
				3
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				3,
				1,
				0,
				2
			],
			[
				0,
				0,
				0,
				0
			],
			[
				3,
				2,
				0,
				1
			],
			[
				3,
				2,
				1,
				0
			]
		];
	}
	noise(e, t) {
		let n, r, i, a = .5 * (Math.sqrt(3) - 1), o = (e + t) * a, s = Math.floor(e + o), c = Math.floor(t + o), l = (3 - Math.sqrt(3)) / 6, u = (s + c) * l, d = s - u, f = c - u, p = e - d, m = t - f, h, g;
		p > m ? (h = 1, g = 0) : (h = 0, g = 1);
		let _ = p - h + l, v = m - g + l, y = p - 1 + 2 * l, b = m - 1 + 2 * l, x = s & 255, S = c & 255, C = this.perm[x + this.perm[S]] % 12, w = this.perm[x + h + this.perm[S + g]] % 12, T = this.perm[x + 1 + this.perm[S + 1]] % 12, E = .5 - p * p - m * m;
		E < 0 ? n = 0 : (E *= E, n = E * E * this._dot(this.grad3[C], p, m));
		let D = .5 - _ * _ - v * v;
		D < 0 ? r = 0 : (D *= D, r = D * D * this._dot(this.grad3[w], _, v));
		let O = .5 - y * y - b * b;
		return O < 0 ? i = 0 : (O *= O, i = O * O * this._dot(this.grad3[T], y, b)), 70 * (n + r + i);
	}
	noise3d(e, t, n) {
		let r, i, a, o, s = (e + t + n) * (1 / 3), c = Math.floor(e + s), l = Math.floor(t + s), u = Math.floor(n + s), d = 1 / 6, f = (c + l + u) * d, p = c - f, m = l - f, h = u - f, g = e - p, _ = t - m, v = n - h, y, b, x, S, C, w;
		g >= _ ? _ >= v ? (y = 1, b = 0, x = 0, S = 1, C = 1, w = 0) : g >= v ? (y = 1, b = 0, x = 0, S = 1, C = 0, w = 1) : (y = 0, b = 0, x = 1, S = 1, C = 0, w = 1) : _ < v ? (y = 0, b = 0, x = 1, S = 0, C = 1, w = 1) : g < v ? (y = 0, b = 1, x = 0, S = 0, C = 1, w = 1) : (y = 0, b = 1, x = 0, S = 1, C = 1, w = 0);
		let T = g - y + d, E = _ - b + d, D = v - x + d, O = g - S + 2 * d, k = _ - C + 2 * d, A = v - w + 2 * d, ee = g - 1 + 3 * d, j = _ - 1 + 3 * d, te = v - 1 + 3 * d, M = c & 255, N = l & 255, P = u & 255, ne = this.perm[M + this.perm[N + this.perm[P]]] % 12, F = this.perm[M + y + this.perm[N + b + this.perm[P + x]]] % 12, I = this.perm[M + S + this.perm[N + C + this.perm[P + w]]] % 12, L = this.perm[M + 1 + this.perm[N + 1 + this.perm[P + 1]]] % 12, R = .6 - g * g - _ * _ - v * v;
		R < 0 ? r = 0 : (R *= R, r = R * R * this._dot3(this.grad3[ne], g, _, v));
		let z = .6 - T * T - E * E - D * D;
		z < 0 ? i = 0 : (z *= z, i = z * z * this._dot3(this.grad3[F], T, E, D));
		let B = .6 - O * O - k * k - A * A;
		B < 0 ? a = 0 : (B *= B, a = B * B * this._dot3(this.grad3[I], O, k, A));
		let V = .6 - ee * ee - j * j - te * te;
		return V < 0 ? o = 0 : (V *= V, o = V * V * this._dot3(this.grad3[L], ee, j, te)), 32 * (r + i + a + o);
	}
	noise4d(e, t, n, r) {
		let i = this.grad4, a = this.simplex, o = this.perm, s = (Math.sqrt(5) - 1) / 4, c = (5 - Math.sqrt(5)) / 20, l, u, d, f, p, m = (e + t + n + r) * s, h = Math.floor(e + m), g = Math.floor(t + m), _ = Math.floor(n + m), v = Math.floor(r + m), y = (h + g + _ + v) * c, b = h - y, x = g - y, S = _ - y, C = v - y, w = e - b, T = t - x, E = n - S, D = r - C, O = w > T ? 32 : 0, k = w > E ? 16 : 0, A = T > E ? 8 : 0, ee = w > D ? 4 : 0, j = T > D ? 2 : 0, te = +(E > D), M = O + k + A + ee + j + te, N = +(a[M][0] >= 3), P = +(a[M][1] >= 3), ne = +(a[M][2] >= 3), F = +(a[M][3] >= 3), I = +(a[M][0] >= 2), L = +(a[M][1] >= 2), R = +(a[M][2] >= 2), z = +(a[M][3] >= 2), B = +(a[M][0] >= 1), V = +(a[M][1] >= 1), H = +(a[M][2] >= 1), U = +(a[M][3] >= 1), W = w - N + c, re = T - P + c, ie = E - ne + c, G = D - F + c, K = w - I + 2 * c, ae = T - L + 2 * c, oe = E - R + 2 * c, q = D - z + 2 * c, se = w - B + 3 * c, J = T - V + 3 * c, Y = E - H + 3 * c, ce = D - U + 3 * c, le = w - 1 + 4 * c, ue = T - 1 + 4 * c, de = E - 1 + 4 * c, fe = D - 1 + 4 * c, X = h & 255, Z = g & 255, Q = _ & 255, $ = v & 255, pe = o[X + o[Z + o[Q + o[$]]]] % 32, me = o[X + N + o[Z + P + o[Q + ne + o[$ + F]]]] % 32, he = o[X + I + o[Z + L + o[Q + R + o[$ + z]]]] % 32, ge = o[X + B + o[Z + V + o[Q + H + o[$ + U]]]] % 32, _e = o[X + 1 + o[Z + 1 + o[Q + 1 + o[$ + 1]]]] % 32, ve = .6 - w * w - T * T - E * E - D * D;
		ve < 0 ? l = 0 : (ve *= ve, l = ve * ve * this._dot4(i[pe], w, T, E, D));
		let ye = .6 - W * W - re * re - ie * ie - G * G;
		ye < 0 ? u = 0 : (ye *= ye, u = ye * ye * this._dot4(i[me], W, re, ie, G));
		let be = .6 - K * K - ae * ae - oe * oe - q * q;
		be < 0 ? d = 0 : (be *= be, d = be * be * this._dot4(i[he], K, ae, oe, q));
		let xe = .6 - se * se - J * J - Y * Y - ce * ce;
		xe < 0 ? f = 0 : (xe *= xe, f = xe * xe * this._dot4(i[ge], se, J, Y, ce));
		let Se = .6 - le * le - ue * ue - de * de - fe * fe;
		return Se < 0 ? p = 0 : (Se *= Se, p = Se * Se * this._dot4(i[_e], le, ue, de, fe)), 27 * (l + u + d + f + p);
	}
	_dot(e, t, n) {
		return e[0] * t + e[1] * n;
	}
	_dot3(e, t, n, r) {
		return e[0] * t + e[1] * n + e[2] * r;
	}
	_dot4(e, t, n, r, i) {
		return e[0] * t + e[1] * n + e[2] * r + e[3] * i;
	}
}, q = class t extends N {
	constructor(t, n, r = 512, a = 512, o, s, l) {
		super(), this.width = r, this.height = a, this.clear = !0, this.camera = n, this.scene = t, this.output = 0, this._renderGBuffer = !0, this._visibilityCache = [], this.blendIntensity = 1, this.pdRings = 2, this.pdRadiusExponent = 2, this.pdSamples = 16, this.gtaoNoiseTexture = re(), this.pdNoiseTexture = this._generateNoise(), this.gtaoRenderTarget = new i(this.width, this.height, {
			type: v,
			depthBuffer: !1
		}), this.pdRenderTarget = this.gtaoRenderTarget.clone(), this.gtaoMaterial = new c({
			defines: Object.assign({}, H.defines),
			uniforms: b.clone(H.uniforms),
			vertexShader: H.vertexShader,
			fragmentShader: H.fragmentShader,
			blending: 0,
			depthTest: !1,
			depthWrite: !1
		}), this.gtaoMaterial.defines.PERSPECTIVE_CAMERA = +!!this.camera.isPerspectiveCamera, this.gtaoMaterial.uniforms.tNoise.value = this.gtaoNoiseTexture, this.gtaoMaterial.uniforms.resolution.value.set(this.width, this.height), this.gtaoMaterial.uniforms.cameraNear.value = this.camera.near, this.gtaoMaterial.uniforms.cameraFar.value = this.camera.far, this.normalMaterial = new e(), this.normalMaterial.blending = 0, this.pdMaterial = new c({
			defines: Object.assign({}, G.defines),
			uniforms: b.clone(G.uniforms),
			vertexShader: G.vertexShader,
			fragmentShader: G.fragmentShader,
			depthTest: !1,
			depthWrite: !1
		}), this.pdMaterial.uniforms.tDiffuse.value = this.gtaoRenderTarget.texture, this.pdMaterial.uniforms.tNoise.value = this.pdNoiseTexture, this.pdMaterial.uniforms.resolution.value.set(this.width, this.height), this.pdMaterial.uniforms.lumaPhi.value = 10, this.pdMaterial.uniforms.depthPhi.value = 2, this.pdMaterial.uniforms.normalPhi.value = 3, this.pdMaterial.uniforms.radius.value = 8, this.depthRenderMaterial = new c({
			defines: Object.assign({}, U.defines),
			uniforms: b.clone(U.uniforms),
			vertexShader: U.vertexShader,
			fragmentShader: U.fragmentShader,
			blending: 0
		}), this.depthRenderMaterial.uniforms.cameraNear.value = this.camera.near, this.depthRenderMaterial.uniforms.cameraFar.value = this.camera.far, this.copyMaterial = new c({
			uniforms: b.clone(I.uniforms),
			vertexShader: I.vertexShader,
			fragmentShader: I.fragmentShader,
			transparent: !0,
			depthTest: !1,
			depthWrite: !1,
			blendSrc: 208,
			blendDst: 200,
			blendEquation: 100,
			blendSrcAlpha: 206,
			blendDstAlpha: 200,
			blendEquationAlpha: 100
		}), this.blendMaterial = new c({
			uniforms: b.clone(W.uniforms),
			vertexShader: W.vertexShader,
			fragmentShader: W.fragmentShader,
			transparent: !0,
			depthTest: !1,
			depthWrite: !1,
			blending: 5,
			blendSrc: 208,
			blendDst: 200,
			blendEquation: 100,
			blendSrcAlpha: 206,
			blendDstAlpha: 200,
			blendEquationAlpha: 100
		}), this._fsQuad = new M(null), this._originalClearColor = new h(), this.setGBuffer(o ? o.depthTexture : void 0, o ? o.normalTexture : void 0), s !== void 0 && this.updateGtaoMaterial(s), l !== void 0 && this.updatePdMaterial(l);
	}
	setSize(e, t) {
		this.width = e, this.height = t, this.gtaoRenderTarget.setSize(e, t), this.normalRenderTarget.setSize(e, t), this.pdRenderTarget.setSize(e, t), this.gtaoMaterial.uniforms.resolution.value.set(e, t), this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix), this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse), this.pdMaterial.uniforms.resolution.value.set(e, t), this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse);
	}
	dispose() {
		this.gtaoNoiseTexture.dispose(), this.pdNoiseTexture.dispose(), this.normalRenderTarget.dispose(), this.gtaoRenderTarget.dispose(), this.pdRenderTarget.dispose(), this.normalMaterial.dispose(), this.pdMaterial.dispose(), this.copyMaterial.dispose(), this.depthRenderMaterial.dispose(), this._fsQuad.dispose();
	}
	get gtaoMap() {
		return this.pdRenderTarget.texture;
	}
	setGBuffer(e, t) {
		e === void 0 ? (this.depthTexture = new o(), this.depthTexture.format = f, this.depthTexture.type = x, this.normalRenderTarget = new i(this.width, this.height, {
			minFilter: p,
			magFilter: p,
			type: v,
			depthTexture: this.depthTexture
		}), this.normalTexture = this.normalRenderTarget.texture, this._renderGBuffer = !0) : (this.depthTexture = e, this.normalTexture = t, this._renderGBuffer = !1);
		let n = +!!this.normalTexture, r = this.depthTexture === this.normalTexture ? "w" : "x";
		this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE = n, this.gtaoMaterial.defines.DEPTH_SWIZZLING = r, this.gtaoMaterial.uniforms.tNormal.value = this.normalTexture, this.gtaoMaterial.uniforms.tDepth.value = this.depthTexture, this.pdMaterial.defines.NORMAL_VECTOR_TYPE = n, this.pdMaterial.defines.DEPTH_SWIZZLING = r, this.pdMaterial.uniforms.tNormal.value = this.normalTexture, this.pdMaterial.uniforms.tDepth.value = this.depthTexture, this.depthRenderMaterial.uniforms.tDepth.value = this.normalRenderTarget.depthTexture;
	}
	setSceneClipBox(e) {
		e ? (this.gtaoMaterial.needsUpdate = this.gtaoMaterial.defines.SCENE_CLIP_BOX !== 1, this.gtaoMaterial.defines.SCENE_CLIP_BOX = 1, this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min), this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)) : (this.gtaoMaterial.needsUpdate = this.gtaoMaterial.defines.SCENE_CLIP_BOX === 0, this.gtaoMaterial.defines.SCENE_CLIP_BOX = 0);
	}
	updateGtaoMaterial(e) {
		e.radius !== void 0 && (this.gtaoMaterial.uniforms.radius.value = e.radius), e.distanceExponent !== void 0 && (this.gtaoMaterial.uniforms.distanceExponent.value = e.distanceExponent), e.thickness !== void 0 && (this.gtaoMaterial.uniforms.thickness.value = e.thickness), e.distanceFallOff !== void 0 && (this.gtaoMaterial.uniforms.distanceFallOff.value = e.distanceFallOff, this.gtaoMaterial.needsUpdate = !0), e.scale !== void 0 && (this.gtaoMaterial.uniforms.scale.value = e.scale), e.samples !== void 0 && e.samples !== this.gtaoMaterial.defines.SAMPLES && (this.gtaoMaterial.defines.SAMPLES = e.samples, this.gtaoMaterial.needsUpdate = !0), e.screenSpaceRadius !== void 0 && +!!e.screenSpaceRadius !== this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS && (this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS = +!!e.screenSpaceRadius, this.gtaoMaterial.needsUpdate = !0);
	}
	updatePdMaterial(e) {
		let t = !1;
		e.lumaPhi !== void 0 && (this.pdMaterial.uniforms.lumaPhi.value = e.lumaPhi), e.depthPhi !== void 0 && (this.pdMaterial.uniforms.depthPhi.value = e.depthPhi), e.normalPhi !== void 0 && (this.pdMaterial.uniforms.normalPhi.value = e.normalPhi), e.radius !== void 0 && e.radius !== this.radius && (this.pdMaterial.uniforms.radius.value = e.radius), e.radiusExponent !== void 0 && e.radiusExponent !== this.pdRadiusExponent && (this.pdRadiusExponent = e.radiusExponent, t = !0), e.rings !== void 0 && e.rings !== this.pdRings && (this.pdRings = e.rings, t = !0), e.samples !== void 0 && e.samples !== this.pdSamples && (this.pdSamples = e.samples, t = !0), t && (this.pdMaterial.defines.SAMPLES = this.pdSamples, this.pdMaterial.defines.SAMPLE_VECTORS = K(this.pdSamples, this.pdRings, this.pdRadiusExponent), this.pdMaterial.needsUpdate = !0);
	}
	render(e, n, r) {
		switch (this._renderGBuffer && (this._overrideVisibility(), this._renderOverride(e, this.normalMaterial, this.normalRenderTarget, 7829503, 1), this._restoreVisibility()), this.gtaoMaterial.uniforms.cameraNear.value = this.camera.near, this.gtaoMaterial.uniforms.cameraFar.value = this.camera.far, this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix), this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse), this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld), this._renderPass(e, this.gtaoMaterial, this.gtaoRenderTarget, 16777215, 1), this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse), this._renderPass(e, this.pdMaterial, this.pdRenderTarget, 16777215, 1), this.output) {
			case t.OUTPUT.Off: break;
			case t.OUTPUT.Diffuse:
				this.copyMaterial.uniforms.tDiffuse.value = r.texture, this.copyMaterial.blending = 0, this._renderPass(e, this.copyMaterial, this.renderToScreen ? null : n);
				break;
			case t.OUTPUT.AO:
				this.copyMaterial.uniforms.tDiffuse.value = this.gtaoRenderTarget.texture, this.copyMaterial.blending = 0, this._renderPass(e, this.copyMaterial, this.renderToScreen ? null : n);
				break;
			case t.OUTPUT.Denoise:
				this.copyMaterial.uniforms.tDiffuse.value = this.pdRenderTarget.texture, this.copyMaterial.blending = 0, this._renderPass(e, this.copyMaterial, this.renderToScreen ? null : n);
				break;
			case t.OUTPUT.Depth:
				this.depthRenderMaterial.uniforms.cameraNear.value = this.camera.near, this.depthRenderMaterial.uniforms.cameraFar.value = this.camera.far, this._renderPass(e, this.depthRenderMaterial, this.renderToScreen ? null : n);
				break;
			case t.OUTPUT.Normal:
				this.copyMaterial.uniforms.tDiffuse.value = this.normalRenderTarget.texture, this.copyMaterial.blending = 0, this._renderPass(e, this.copyMaterial, this.renderToScreen ? null : n);
				break;
			case t.OUTPUT.Default:
				this.copyMaterial.uniforms.tDiffuse.value = r.texture, this.copyMaterial.blending = 0, this._renderPass(e, this.copyMaterial, this.renderToScreen ? null : n), this.blendMaterial.uniforms.intensity.value = this.blendIntensity, this.blendMaterial.uniforms.tDiffuse.value = this.pdRenderTarget.texture, this._renderPass(e, this.blendMaterial, this.renderToScreen ? null : n);
				break;
			default: console.warn("THREE.GTAOPass: Unknown output type.");
		}
	}
	_renderPass(e, t, n, r, i) {
		e.getClearColor(this._originalClearColor);
		let a = e.getClearAlpha(), o = e.autoClear;
		e.setRenderTarget(n), e.autoClear = !1, r != null && (e.setClearColor(r), e.setClearAlpha(i || 0), e.clear()), this._fsQuad.material = t, this._fsQuad.render(e), e.autoClear = o, e.setClearColor(this._originalClearColor), e.setClearAlpha(a);
	}
	_renderOverride(e, t, n, r, i) {
		e.getClearColor(this._originalClearColor);
		let a = e.getClearAlpha(), o = e.autoClear;
		e.setRenderTarget(n), e.autoClear = !1, r = t.clearColor || r, i = t.clearAlpha || i, r != null && (e.setClearColor(r), e.setClearAlpha(i || 0), e.clear()), this.scene.overrideMaterial = t, e.render(this.scene, this.camera), this.scene.overrideMaterial = null, e.autoClear = o, e.setClearColor(this._originalClearColor), e.setClearAlpha(a);
	}
	_overrideVisibility() {
		let e = this.scene, t = this._visibilityCache;
		e.traverse(function(e) {
			(e.isPoints || e.isLine || e.isLine2) && e.visible && (e.visible = !1, t.push(e));
		});
	}
	_restoreVisibility() {
		let e = this._visibilityCache;
		for (let t = 0; t < e.length; t++) e[t].visible = !0;
		e.length = 0;
	}
	_generateNoise(e = 64) {
		let t = new oe(), n = e * e * 4, r = new Uint8Array(n);
		for (let n = 0; n < e; n++) for (let i = 0; i < e; i++) {
			let a = n, o = i;
			r[(n * e + i) * 4] = (t.noise(a, o) * .5 + .5) * 255, r[(n * e + i) * 4 + 1] = (t.noise(a + e, o) * .5 + .5) * 255, r[(n * e + i) * 4 + 2] = (t.noise(a, o + e) * .5 + .5) * 255, r[(n * e + i) * 4 + 3] = (t.noise(a + e, o + e) * .5 + .5) * 255;
		}
		let i = new l(r, e, e, y, T);
		return i.wrapS = m, i.wrapT = m, i.needsUpdate = !0, i;
	}
};
q.OUTPUT = {
	Off: -1,
	Default: 0,
	Diffuse: 1,
	Depth: 2,
	Normal: 3,
	AO: 4,
	Denoise: 5
};
//#endregion
//#region node_modules/.pnpm/three@0.186.0/node_modules/three/examples/jsm/shaders/LuminosityHighPassShader.js
var se = {
	name: "LuminosityHighPassShader",
	uniforms: {
		tDiffuse: { value: null },
		luminosityThreshold: { value: 1 },
		smoothWidth: { value: 1 },
		defaultColor: { value: new h(0) },
		defaultOpacity: { value: 0 }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n\n		uniform sampler2D tDiffuse;\n		uniform vec3 defaultColor;\n		uniform float defaultOpacity;\n		uniform float luminosityThreshold;\n		uniform float smoothWidth;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vec4 texel = texture2D( tDiffuse, vUv );\n\n			float v = luminance( texel.xyz );\n\n			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );\n\n			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );\n\n			gl_FragColor = mix( outputColor, texel, alpha );\n\n		}"
}, J = class e extends N {
	constructor(e, t = 1, n, r) {
		super(), this.strength = t, this.radius = n, this.threshold = r, this.resolution = e === void 0 ? new k(256, 256) : new k(e.x, e.y), this.clearColor = new h(0, 0, 0), this.needsSwap = !1, this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
		let o = Math.round(this.resolution.x / 2), s = Math.round(this.resolution.y / 2);
		this.renderTargetBright = new i(o, s, {
			type: v,
			depthBuffer: !1
		}), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
		for (let e = 0; e < this.nMips; e++) {
			let t = new i(o, s, {
				type: v,
				depthBuffer: !1
			});
			t.texture.name = "UnrealBloomPass.h" + e, t.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(t);
			let n = new i(o, s, {
				type: v,
				depthBuffer: !1
			});
			n.texture.name = "UnrealBloomPass.v" + e, n.texture.generateMipmaps = !1, this.renderTargetsVertical.push(n), o = Math.round(o / 2), s = Math.round(s / 2);
		}
		let l = se;
		this.highPassUniforms = b.clone(l.uniforms), this.highPassUniforms.luminosityThreshold.value = r, this.highPassUniforms.smoothWidth.value = .01, this.materialHighPassFilter = new c({
			uniforms: this.highPassUniforms,
			vertexShader: l.vertexShader,
			fragmentShader: l.fragmentShader
		}), this.separableBlurMaterials = [];
		let u = [
			6,
			10,
			14,
			18,
			22
		];
		o = Math.round(this.resolution.x / 2), s = Math.round(this.resolution.y / 2);
		for (let e = 0; e < this.nMips; e++) this.separableBlurMaterials.push(this._getSeparableBlurMaterial(u[e])), this.separableBlurMaterials[e].uniforms.invSize.value = new k(1 / o, 1 / s), o = Math.round(o / 2), s = Math.round(s / 2);
		this.compositeMaterial = this._getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = .1;
		let d = [
			1,
			.8,
			.6,
			.4,
			.2
		];
		this.compositeMaterial.uniforms.bloomFactors.value = d, this.bloomTintColors = [
			new g(1, 1, 1),
			new g(1, 1, 1),
			new g(1, 1, 1),
			new g(1, 1, 1),
			new g(1, 1, 1)
		], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, this.copyUniforms = b.clone(I.uniforms), this.blendMaterial = new c({
			uniforms: this.copyUniforms,
			vertexShader: I.vertexShader,
			fragmentShader: I.fragmentShader,
			premultipliedAlpha: !0,
			blending: 2,
			depthTest: !1,
			depthWrite: !1,
			transparent: !0
		}), this._oldClearColor = new h(), this._oldClearAlpha = 1, this._basic = new a(), this._fsQuad = new M(null);
	}
	dispose() {
		for (let e = 0; e < this.renderTargetsHorizontal.length; e++) this.renderTargetsHorizontal[e].dispose();
		for (let e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
		this.renderTargetBright.dispose();
		for (let e = 0; e < this.separableBlurMaterials.length; e++) this.separableBlurMaterials[e].dispose();
		this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this._basic.dispose(), this._fsQuad.dispose();
	}
	setSize(e, t) {
		let n = Math.round(e / 2), r = Math.round(t / 2);
		this.renderTargetBright.setSize(n, r);
		for (let e = 0; e < this.nMips; e++) this.renderTargetsHorizontal[e].setSize(n, r), this.renderTargetsVertical[e].setSize(n, r), this.separableBlurMaterials[e].uniforms.invSize.value = new k(1 / n, 1 / r), n = Math.round(n / 2), r = Math.round(r / 2);
	}
	render(t, n, r, i, a) {
		t.getClearColor(this._oldClearColor), this._oldClearAlpha = t.getClearAlpha();
		let o = t.autoClear;
		t.autoClear = !1, t.setClearColor(this.clearColor, 0), a && t.state.buffers.stencil.setTest(!1), this.renderToScreen && (this._fsQuad.material = this._basic, this._basic.map = r.texture, t.setRenderTarget(null), t.clear(), this._fsQuad.render(t)), this.highPassUniforms.tDiffuse.value = r.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this._fsQuad.material = this.materialHighPassFilter, t.setRenderTarget(this.renderTargetBright), t.clear(), this._fsQuad.render(t);
		let s = this.renderTargetBright;
		for (let n = 0; n < this.nMips; n++) this._fsQuad.material = this.separableBlurMaterials[n], this.separableBlurMaterials[n].uniforms.colorTexture.value = s.texture, this.separableBlurMaterials[n].uniforms.direction.value = e.BlurDirectionX, t.setRenderTarget(this.renderTargetsHorizontal[n]), t.clear(), this._fsQuad.render(t), this.separableBlurMaterials[n].uniforms.colorTexture.value = this.renderTargetsHorizontal[n].texture, this.separableBlurMaterials[n].uniforms.direction.value = e.BlurDirectionY, t.setRenderTarget(this.renderTargetsVertical[n]), t.clear(), this._fsQuad.render(t), s = this.renderTargetsVertical[n];
		this._fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, t.setRenderTarget(this.renderTargetsHorizontal[0]), t.clear(), this._fsQuad.render(t), this._fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, a && t.state.buffers.stencil.setTest(!0), this.renderToScreen ? (t.setRenderTarget(null), this._fsQuad.render(t)) : (t.setRenderTarget(r), this._fsQuad.render(t)), t.setClearColor(this._oldClearColor, this._oldClearAlpha), t.autoClear = o;
	}
	_getSeparableBlurMaterial(e) {
		let t = [], n = e / 3;
		for (let r = 0; r < e; r++) t.push(.39894 * Math.exp(-.5 * r * r / (n * n)) / n);
		let r = [], i = [];
		for (let n = 1; n < e; n += 2) {
			let a = t[n], o = n + 1 < e ? t[n + 1] : 0, s = a + o;
			r.push((n * a + (n + 1) * o) / s), i.push(s);
		}
		return new c({
			defines: { KERNEL_PAIRS: r.length },
			uniforms: {
				colorTexture: { value: null },
				invSize: { value: new k(.5, .5) },
				direction: { value: new k(.5, .5) },
				centerWeight: { value: t[0] },
				gaussianOffsets: { value: r },
				gaussianWeights: { value: i }
			},
			vertexShader: "\n\n				varying vec2 vUv;\n\n				void main() {\n\n					vUv = uv;\n					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n				}",
			fragmentShader: "\n\n				#include <common>\n\n				varying vec2 vUv;\n\n				uniform sampler2D colorTexture;\n				uniform vec2 invSize;\n				uniform vec2 direction;\n				uniform float centerWeight;\n				uniform float gaussianOffsets[KERNEL_PAIRS];\n				uniform float gaussianWeights[KERNEL_PAIRS];\n\n				void main() {\n\n					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;\n\n					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {\n\n						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];\n						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;\n						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;\n						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];\n\n					}\n\n					gl_FragColor = vec4( diffuseSum, 1.0 );\n\n				}"
		});
	}
	_getCompositeMaterial(e) {
		return new c({
			defines: { NUM_MIPS: e },
			uniforms: {
				blurTexture1: { value: null },
				blurTexture2: { value: null },
				blurTexture3: { value: null },
				blurTexture4: { value: null },
				blurTexture5: { value: null },
				bloomStrength: { value: 1 },
				bloomFactors: { value: null },
				bloomTintColors: { value: null },
				bloomRadius: { value: 0 }
			},
			vertexShader: "\n\n				varying vec2 vUv;\n\n				void main() {\n\n					vUv = uv;\n					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n				}",
			fragmentShader: "\n\n				varying vec2 vUv;\n\n				uniform sampler2D blurTexture1;\n				uniform sampler2D blurTexture2;\n				uniform sampler2D blurTexture3;\n				uniform sampler2D blurTexture4;\n				uniform sampler2D blurTexture5;\n				uniform float bloomStrength;\n				uniform float bloomRadius;\n				uniform float bloomFactors[NUM_MIPS];\n				uniform vec3 bloomTintColors[NUM_MIPS];\n\n				float lerpBloomFactor( const in float factor ) {\n\n					float mirrorFactor = 1.2 - factor;\n					return mix( factor, mirrorFactor, bloomRadius );\n\n				}\n\n				void main() {\n\n					// 3.0 for backwards compatibility with previous alpha-based intensity\n					vec3 bloom = 3.0 * bloomStrength * (\n						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb\n					);\n\n					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );\n					gl_FragColor = vec4( bloom, bloomAlpha );\n\n				}"
		});
	}
};
J.BlurDirectionX = new k(1, 0), J.BlurDirectionY = new k(0, 1);
//#endregion
//#region node_modules/.pnpm/three@0.186.0/node_modules/three/examples/jsm/shaders/OutputShader.js
var Y = {
	name: "OutputShader",
	uniforms: {
		tDiffuse: { value: null },
		toneMappingExposure: { value: 1 }
	},
	vertexShader: "\n		precision highp float;\n\n		uniform mat4 modelViewMatrix;\n		uniform mat4 projectionMatrix;\n\n		attribute vec3 position;\n		attribute vec2 uv;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n\n		precision highp float;\n\n		uniform sampler2D tDiffuse;\n\n		#include <tonemapping_pars_fragment>\n		#include <colorspace_pars_fragment>\n\n		varying vec2 vUv;\n\n		void main() {\n\n			gl_FragColor = texture2D( tDiffuse, vUv );\n\n			// tone mapping\n\n			#ifdef LINEAR_TONE_MAPPING\n\n				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n\n			#elif defined( REINHARD_TONE_MAPPING )\n\n				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n\n			#elif defined( CINEON_TONE_MAPPING )\n\n				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n\n			#elif defined( ACES_FILMIC_TONE_MAPPING )\n\n				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n\n			#elif defined( AGX_TONE_MAPPING )\n\n				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n\n			#elif defined( NEUTRAL_TONE_MAPPING )\n\n				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n\n			#elif defined( CUSTOM_TONE_MAPPING )\n\n				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n\n			#endif\n\n			// color space\n\n			#ifdef SRGB_TRANSFER\n\n				gl_FragColor = sRGBTransferOETF( gl_FragColor );\n\n			#endif\n\n		}"
}, ce = class extends N {
	constructor() {
		super(), this.isOutputPass = !0, this.uniforms = b.clone(Y.uniforms), this.material = new d({
			name: Y.name,
			uniforms: this.uniforms,
			vertexShader: Y.vertexShader,
			fragmentShader: Y.fragmentShader
		}), this._fsQuad = new M(this.material), this._outputColorSpace = null, this._toneMapping = null;
	}
	render(e, t, r) {
		this.uniforms.tDiffuse.value = r.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, n.getTransfer(this._outputColorSpace) === "srgb" && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === 1 ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === 2 ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === 3 ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === 4 ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === 6 ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === 7 ? this.material.defines.NEUTRAL_TONE_MAPPING = "" : this._toneMapping === 5 && (this.material.defines.CUSTOM_TONE_MAPPING = ""), this.material.needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
	}
	dispose() {
		this.material.dispose(), this._fsQuad.dispose();
	}
};
//#endregion
//#region src/render/ScreenSpaceSurfaceBuffer.ts
function le(e) {
	return e instanceof u && !e.transparent && !e.userData.unlit && !("transmission" in e && Number(e.transmission) > 0);
}
function ue(e, t = le(e)) {
	let n = e.clone();
	return n.toneMapped = !1, n.fog = !1, n.transparent = !1, n.depthWrite = !0, !t && "transmission" in n && (n.transmission = 0), n.onBeforeRender = e.onBeforeRender, n.customProgramCacheKey = () => `screen-space-surface-v1:${t}:${e.customProgramCacheKey()}`, n.onBeforeCompile = (n, r) => {
		if (e.onBeforeCompile(n, r), !n.fragmentShader.includes("#include <opaque_fragment>")) throw Error("PBR surface shader layout is incompatible.");
		n.fragmentShader = "layout(location = 1) out highp vec4 webSurface;\n" + n.fragmentShader.replace("#include <opaque_fragment>", t ? "gl_FragColor = vec4(normal * 0.5 + 0.5, roughnessFactor);\nwebSurface = vec4(diffuseColor.rgb, metalnessFactor);" : "if (diffuseColor.a <= 0.0001) discard;\ngl_FragColor = vec4(0.0);\nwebSurface = vec4(0.0, 0.0, 0.0, -1.0);");
		for (let e of [
			"tonemapping_fragment",
			"colorspace_fragment",
			"fog_fragment",
			"premultiplied_alpha_fragment",
			"dithering_fragment"
		]) n.fragmentShader = n.fragmentShader.replace(`#include <${e}>`, "");
	}, n;
}
var de = class {
	target;
	materials = /* @__PURE__ */ new Map();
	disposed = !1;
	constructor(e = !1) {
		this.target = new i(1, 1, {
			count: 2,
			type: v,
			minFilter: p,
			magFilter: p,
			depthTexture: P(e)
		});
	}
	setSize(e, t) {
		this.target.setSize(e, t);
	}
	capture(e, t, n) {
		if (this.disposed) throw Error("Surface buffer was disposed.");
		let r = [], i = /* @__PURE__ */ new Set(), a = {
			target: e.getRenderTarget(),
			background: t.background,
			override: t.overrideMaterial,
			clear: e.getClearColor(new h()),
			alpha: e.getClearAlpha(),
			autoClear: e.autoClear,
			shadow: e.shadowMap.enabled
		};
		try {
			t.traverseVisible((e) => {
				if (!(e instanceof _)) return;
				let t = e.material, n = (Array.isArray(t) ? t : [t]).map((t) => {
					if (!A(e) || !(t instanceof u)) return null;
					i.add(t);
					let n = le(t), r = this.materials.get(t);
					(!r || r.version !== t.version || r.receivesLighting !== n) && (r?.material.dispose(), r = {
						version: t.version,
						receivesLighting: n,
						material: ue(t, n)
					}, this.materials.set(t, r));
					let a = r.material;
					return a.color.copy(t.color), a.roughness = t.roughness, a.metalness = t.metalness, a.normalScale.copy(t.normalScale), a.opacity = t.opacity, a.alphaTest = t.alphaTest, a;
				});
				if (n.every((e) => e === null)) {
					let t = e.visible;
					e.visible = !1, r.push(() => {
						e.visible = t;
					});
				} else e.material = Array.isArray(t) ? n.map((e) => e ?? this.hiddenMaterial) : n[0], r.push(() => {
					e.material = t;
				});
			}), t.background = null, t.overrideMaterial = null, e.autoClear = !0, e.shadowMap.enabled = !1, e.setClearColor(0, 0), e.setRenderTarget(this.target), e.clear(), e.render(t, n);
		} finally {
			r.reverse().forEach((e) => e()), t.background = a.background, t.overrideMaterial = a.override, e.setClearColor(a.clear, a.alpha), e.autoClear = a.autoClear, e.shadowMap.enabled = a.shadow, e.setRenderTarget(a.target);
			for (let [e, t] of this.materials) i.has(e) || (t.material.dispose(), this.materials.delete(e));
		}
	}
	hiddenMaterial = Object.assign(new u(), { visible: !1 });
	dispose() {
		this.disposed || (this.disposed = !0, this.materials.forEach((e) => e.material.dispose()), this.materials.clear(), this.hiddenMaterial.dispose(), this.target.dispose());
	}
}, fe = "varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }", X = `
precision highp float;
varying vec2 vUv;
uniform sampler2D tBeauty, tSceneDepth, tDepth, tNormal, tSurface;
uniform mat4 cameraProjection, cameraInverseProjection;
uniform vec2 texelSize;
uniform float giIntensity, reflectionIntensity, giDistance, reflectionDistance;
uniform bool orthographicCamera;
vec4 bufferSample(sampler2D buffer, vec2 uv) { return textureLod(buffer, uv, 0.0); }
${F}
vec3 viewPosition(vec2 uv, float depth) {
  vec4 p = cameraInverseProjection * vec4(uv * 2.0 - 1.0, webDepthClipZ(depth), 1.0);
  return p.xyz / p.w;
}
float edgeFade(vec2 uv) { return smoothstep(0.0, 0.06, min(min(uv.x, uv.y), min(1.0-uv.x, 1.0-uv.y))); }
bool traceRay(vec3 origin, vec3 direction, float distanceLimit, out vec2 hitUv, out float confidence) {
  float previous = -1.0, previousTravel = 0.0;
  for (int step = 1; step <= RAY_STEPS; step++) {
    float fraction = float(step) / float(RAY_STEPS);
    float travel = 0.025 + distanceLimit * fraction * fraction;
    vec3 p = origin + direction * travel;
    vec4 clip = cameraProjection * vec4(p, 1.0);
    if (clip.w <= 0.0) break;
    vec3 ndc = clip.xyz / clip.w;
    vec2 uv = ndc.xy * 0.5 + 0.5;
    if (any(lessThan(uv, texelSize)) || any(greaterThan(uv, vec2(1.0)-texelSize)) || webDepthClipOutside(ndc.z)) break;
    float sceneDepth = bufferSample(tSceneDepth, uv).r;
    float depth = bufferSample(tDepth, uv).r;
    // Unsupported opaque shaders still block rays through the untouched beauty depth.
    if (!webDepthBackground(sceneDepth) && webDepthCloser(sceneDepth, depth) && viewPosition(uv,sceneDepth).z-p.z > 0.02) break;
    if (webDepthBackground(depth)) { previous = -1.0; previousTravel = travel; continue; }
    vec3 surface = viewPosition(uv, depth);
    float delta = surface.z - p.z;
    float thickness = min(0.3, 0.035 + distanceLimit * fraction / float(RAY_STEPS));
    if (delta > 0.0 && previous <= 0.0) {
      // Refine a depth crossing instead of discarding coarse steps (which produces striped reflections).
      float low = previousTravel, high = travel;
      for (int refine = 0; refine < 6; refine++) {
        float middle = (low + high) * 0.5;
        vec3 probe = origin + direction * middle;
        vec4 projected = cameraProjection * vec4(probe, 1.0);
        vec2 probeUv = projected.xy / projected.w * 0.5 + 0.5;
        float probeDepth = bufferSample(tDepth, probeUv).r;
        float probeDelta = viewPosition(probeUv, probeDepth).z - probe.z;
        if (!webDepthBackground(probeDepth) && probeDelta > 0.0) high = middle; else low = middle;
      }
      p = origin + direction * high;
      clip = cameraProjection * vec4(p, 1.0); uv = clip.xy / clip.w * 0.5 + 0.5;
      surface = viewPosition(uv, bufferSample(tDepth, uv).r);
      if (surface.z-p.z > thickness || surface.z-p.z < 0.0) break;
      if (bufferSample(tSurface, uv).a < 0.0) break;
      // Reject self hits and receivers hidden behind unsupported/transparent geometry.
      float sceneZ = viewPosition(uv, bufferSample(tSceneDepth, uv).r).z;
      if (sceneZ - surface.z > thickness || length(surface-origin) < 0.04) break;
      vec3 normal = normalize(bufferSample(tNormal, uv).rgb * 2.0 - 1.0);
      if (dot(normal, -direction) <= 0.02) break;
      hitUv = uv; confidence = edgeFade(uv) * (1.0 - fraction * fraction); return true;
    }
    previous = delta; previousTravel = travel;
  }
  confidence = 0.0; return false;
}
void main() {
  float depth = bufferSample(tDepth, vUv).r;
  if (webDepthBackground(depth)) { gl_FragColor = vec4(0.0); return; }
  vec3 position = viewPosition(vUv, depth);
  if (abs(viewPosition(vUv, bufferSample(tSceneDepth, vUv).r).z-position.z) > 0.03 + abs(position.z)*0.001) { gl_FragColor=vec4(0.0); return; }
  vec4 normalRoughness = bufferSample(tNormal, vUv), surface = bufferSample(tSurface, vUv);
  if (surface.a < 0.0) { gl_FragColor=vec4(0.0); return; }
  vec3 normal = normalize(normalRoughness.rgb * 2.0 - 1.0), view = orthographicCamera ? vec3(0.0,0.0,1.0) : normalize(-position);
  vec3 origin = position + normal * (0.015 + min(0.03, abs(position.z)*0.0005));
  vec3 tangent = normalize(cross(normal, abs(normal.z) < 0.9 ? vec3(0,0,1) : vec3(0,1,0)));
  vec3 bitangent = cross(normal, tangent), indirect = vec3(0.0);
  // Fixed spatial sampling: no temporal history to leak between quad views, edits or Play sessions.
  float rotation = fract(sin(dot(floor(vUv/texelSize), vec2(12.9898,78.233))) * 43758.5453) * 6.283185;
  for (int sampleIndex = 0; sampleIndex < GI_SAMPLES; sampleIndex++) {
    float f = (float(sampleIndex)+0.5) / float(GI_SAMPLES);
    float angle = float(sampleIndex) * 2.399963 + rotation;
    vec3 direction = tangent*cos(angle)*sqrt(f) + bitangent*sin(angle)*sqrt(f) + normal*sqrt(1.0-f);
    vec2 hit; float confidence;
    if (traceRay(origin, direction, giDistance, hit, confidence)) indirect += min(bufferSample(tBeauty, hit).rgb, vec3(8.0)) * confidence;
  }
  indirect *= surface.rgb * (1.0-surface.a) * giIntensity / float(GI_SAMPLES);
  vec3 reflection = vec3(0.0);
  float roughness = normalRoughness.a;
  float gloss = 1.0 - smoothstep(0.25, 0.65, roughness);
  if (gloss > 0.0) {
    vec2 hit; float confidence;
    if (traceRay(origin, reflect(-view, normal), reflectionDistance, hit, confidence)) {
      vec2 blur = texelSize * roughness * 5.0;
      vec3 radiance = (bufferSample(tBeauty,hit).rgb*2.0 + bufferSample(tBeauty,hit+vec2(blur.x,0)).rgb
        + bufferSample(tBeauty,hit-vec2(blur.x,0)).rgb + bufferSample(tBeauty,hit+vec2(0,blur.y)).rgb + bufferSample(tBeauty,hit-vec2(0,blur.y)).rgb)/6.0;
      vec3 f0 = mix(vec3(0.04), surface.rgb, surface.a);
      vec3 fresnel = f0 + (1.0-f0)*pow(1.0-max(dot(normal,view),0.0),5.0);
      reflection = min(radiance,vec3(16.0)) * fresnel * confidence * gloss * reflectionIntensity;
    }
  }
  gl_FragColor = vec4(indirect + reflection, 1.0);
}`, Z = `
precision highp float;
varying vec2 vUv;
uniform sampler2D tDiffuse, tLighting, tDepth, tNormal, tSurface, tSceneDepth;
uniform mat4 cameraInverseProjection;
uniform vec2 texelSize;
${F}
vec3 viewPosition(vec2 uv, float depth) {
  vec4 p = cameraInverseProjection * vec4(uv*2.0-1.0, webDepthClipZ(depth), 1.0); return p.xyz/p.w;
}
void main() {
  vec4 beauty = texture2D(tDiffuse,vUv);
  float depth = texture2D(tDepth,vUv).r;
  if (webDepthBackground(depth)) { gl_FragColor=beauty; return; }
  vec4 surface=texture2D(tSurface,vUv);
  if (surface.a < 0.0) { gl_FragColor=beauty; return; }
  float z = viewPosition(vUv,depth).z, sceneZ = viewPosition(vUv,texture2D(tSceneDepth,vUv).r).z;
  if (abs(sceneZ-z)>0.03+abs(z)*0.001) { gl_FragColor=beauty; return; }
  vec3 normal = normalize(texture2D(tNormal,vUv).rgb*2.0-1.0), light=vec3(0.0);
  float total=0.0;
  for (int x=-1;x<=1;x++) for (int y=-1;y<=1;y++) {
    vec2 uv=clamp(vUv+vec2(float(x),float(y))*texelSize,texelSize*0.5,vec2(1.0)-texelSize*0.5);
    float sampleDepth=texture2D(tDepth,uv).r;
    if (webDepthBackground(sampleDepth)) continue;
    vec3 sampleNormal=normalize(texture2D(tNormal,uv).rgb*2.0-1.0);
    vec4 sampleSurface=texture2D(tSurface,uv);
    if (sampleSurface.a < 0.0) continue;
    float delta=abs(viewPosition(uv,sampleDepth).z-z);
    float weight=pow(max(dot(normal,sampleNormal),0.0),16.0)*exp(-delta/max(0.015,abs(z)*0.005));
    weight*=exp(-length(sampleSurface.rgb-surface.rgb)*8.0-abs(sampleSurface.a-surface.a)*8.0);
    vec4 sampleLight=texture2D(tLighting,uv); weight*=sampleLight.a;
    light+=sampleLight.rgb*weight; total+=weight;
  }
  gl_FragColor=vec4(beauty.rgb+light/max(total,0.0001),beauty.a);
}`, Q = class extends N {
	scene;
	settings;
	camera;
	surface;
	lighting = new i(1, 1, {
		type: v,
		depthBuffer: !1
	});
	gather;
	composite;
	gatherQuad;
	compositeQuad;
	disposed = !1;
	constructor(e, t, n, r, i, a = !1) {
		super(), this.scene = e, this.settings = n, this.camera = t, this.surface = new de(a);
		let o = {
			tBeauty: { value: r },
			tSceneDepth: { value: i },
			tDepth: { value: this.surface.target.depthTexture },
			tNormal: { value: this.surface.target.textures[0] },
			tSurface: { value: this.surface.target.textures[1] },
			cameraProjection: { value: new O() },
			cameraInverseProjection: { value: new O() },
			texelSize: { value: new k(1, 1) },
			giIntensity: { value: n.giIntensity },
			reflectionIntensity: { value: n.reflectionIntensity },
			giDistance: { value: n.giDistance },
			reflectionDistance: { value: n.reflectionDistance },
			orthographicCamera: { value: !1 }
		};
		this.gather = new c({
			uniforms: o,
			defines: {
				GI_SAMPLES: n.giSamples,
				RAY_STEPS: n.raySteps
			},
			vertexShader: fe,
			fragmentShader: X,
			toneMapped: !1,
			depthTest: !1,
			depthWrite: !1
		}), this.composite = new c({
			uniforms: {
				tDiffuse: { value: null },
				tLighting: { value: this.lighting.texture },
				tDepth: o.tDepth,
				tNormal: o.tNormal,
				tSurface: o.tSurface,
				tSceneDepth: o.tSceneDepth,
				cameraInverseProjection: o.cameraInverseProjection,
				texelSize: o.texelSize
			},
			vertexShader: fe,
			fragmentShader: Z,
			toneMapped: !1,
			depthTest: !1,
			depthWrite: !1
		}), this.gatherQuad = new M(this.gather), this.compositeQuad = new M(this.composite);
	}
	setSize(e, t) {
		let [n, r] = w(e, t, 1, this.settings.maxPixels, this.settings.maxDimension);
		this.surface.setSize(n, r), this.lighting.setSize(n, r), this.gather.uniforms.texelSize.value.set(1 / n, 1 / r);
	}
	render(e, t, n) {
		if (this.disposed) throw Error("Screen-space lighting resources were disposed.");
		let r = e.getRenderTarget();
		try {
			this.surface.capture(e, this.scene, this.camera), this.gather.uniforms.cameraProjection.value.copy(this.camera.projectionMatrix), this.gather.uniforms.cameraInverseProjection.value.copy(this.camera.projectionMatrixInverse), this.gather.uniforms.orthographicCamera.value = this.camera.projectionMatrix.elements[15] === 1, e.setRenderTarget(this.lighting), this.gatherQuad.render(e), this.composite.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(this.renderToScreen ? null : t), this.compositeQuad.render(e);
		} finally {
			e.setRenderTarget(r);
		}
	}
	dispose() {
		this.disposed || (this.disposed = !0, this.surface.dispose(), this.lighting.dispose(), this.gather.dispose(), this.composite.dispose(), this.gatherQuad.dispose(), this.compositeQuad.dispose());
	}
}, $ = class {
	renderer;
	scene;
	settings;
	environment = null;
	beauty = null;
	composer = null;
	ao = null;
	screenSpaceLighting = null;
	bloom = null;
	fxaa = null;
	output = null;
	texturePass = null;
	copy = null;
	copyMaterial = null;
	width = 0;
	height = 0;
	disposed = !1;
	constructor(e, n, r) {
		if (this.renderer = e, this.scene = n, this.settings = E[r], r === S.VIEWPORT) throw Error("Viewport must use the original direct renderer.");
		if (!e.extensions.has("EXT_color_buffer_float")) throw Error("이 GPU는 고급 렌더링에 필요한 HDR 버퍼를 지원하지 않습니다");
		let a = new j(), o = new ee(e);
		try {
			if (this.environment = o.fromScene(a, .04, .1, 100, { size: this.settings.environmentSize }), !this.settings.postProcessing) return;
			let r = e.capabilities.reversedDepthBuffer;
			this.beauty = new i(1, 1, {
				type: v,
				depthTexture: P(r),
				samples: 0
			});
			let l = new i(1, 1, {
				type: v,
				depthBuffer: !1,
				samples: 0
			});
			if (this.composer = new B(e, l), this.composer.setPixelRatio(1), this.composer.renderToScreen = !1, this.texturePass = new V(this.beauty.texture), this.composer.addPass(this.texturePass), this.settings.screenSpaceLighting) {
				let i = e.getContext();
				if (i.getParameter(i.MAX_DRAW_BUFFERS) < 2) throw Error("이 GPU는 재질 기반 간접광/반사 버퍼를 지원하지 않습니다");
				this.screenSpaceLighting = new Q(n, new t(), this.settings.screenSpaceLighting, this.beauty.texture, this.beauty.depthTexture, r), this.composer.addPass(this.screenSpaceLighting);
			}
			if (this.settings.ao) {
				if (this.ao = new q(n, new t(), 1, 1), r && (this.ao.depthTexture.type = s), !this.ao.pdMaterial.fragmentShader.includes("depth == 1.")) throw Error("AO depth shader layout is incompatible.");
				this.ao.pdMaterial.fragmentShader = F + this.ao.pdMaterial.fragmentShader.replace("depth == 1.", "webDepthBackground(depth)"), this.ao.blendIntensity = this.settings.ao.intensity, this.ao.updateGtaoMaterial({
					radius: this.settings.ao.radius,
					samples: this.settings.ao.samples,
					screenSpaceRadius: !1
				}), this.ao.updatePdMaterial({ samples: this.settings.ao.denoiseSamples }), this.composer.addPass(this.ao);
			}
			if (this.settings.bloom) {
				let e = this.settings.bloom;
				this.bloom = new J(new k(1, 1), e.strength, e.radius, e.threshold), this.composer.addPass(this.bloom);
			}
			this.output = new ce(), this.composer.addPass(this.output), this.fxaa = new L(ne), this.fxaa.enabled = !1, this.composer.addPass(this.fxaa), this.copyMaterial = new c({
				toneMapped: !1,
				depthTest: !0,
				depthFunc: te(r),
				depthWrite: !0,
				uniforms: {
					tDiffuse: { value: null },
					tDepth: { value: this.beauty.depthTexture }
				},
				vertexShader: "varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",
				fragmentShader: "uniform sampler2D tDiffuse; uniform sampler2D tDepth; varying vec2 vUv; void main(){ gl_FragColor=texture2D(tDiffuse,vUv); gl_FragDepth=texture2D(tDepth,vUv).r; }"
			}), this.copy = new M(this.copyMaterial);
		} catch (e) {
			throw this.dispose(), e;
		} finally {
			a.dispose(), o.dispose();
		}
	}
	render(e, t, n, i, a = {}) {
		if (this.disposed) throw Error("Render Quality resources were disposed.");
		let o = this.renderer, s = this.scene, c = {
			tone: o.toneMapping,
			exposure: o.toneMappingExposure,
			environment: s.environment,
			environmentIntensity: s.environmentIntensity,
			shadow: o.shadowMap.enabled,
			shadowType: o.shadowMap.type,
			autoClear: o.autoClear,
			target: o.getRenderTarget(),
			viewport: o.getViewport(new r()),
			scissor: o.getScissor(new r()),
			scissorTest: o.getScissorTest(),
			layers: e.layers.mask,
			background: s.background
		}, l = [];
		try {
			if (this.composer && s.traverse((e) => {
				if (e instanceof _ && !A(e)) {
					let t = e.layers.mask;
					e.layers.set(1), l.push(() => {
						e.layers.mask = t;
					});
				}
			}), o.toneMapping = 4, o.toneMappingExposure = c.exposure * this.settings.exposureMultiplier, s.environment = a.environmentLighting === !1 ? null : c.environment ?? this.environment.texture, s.environmentIntensity = a.environmentIntensity ?? c.environmentIntensity, !this.composer) {
				i();
				return;
			}
			if (this.resize(t, n), this.fxaa.enabled = a.antialias === !0, e.layers.set(0), o.setScissorTest(!1), o.setRenderTarget(this.beauty), o.clear(), o.render(s, e), o.shadowMap.enabled = !1, this.screenSpaceLighting && (this.screenSpaceLighting.camera = e), this.ao) {
				this.ao.camera = e;
				let t = +!!e.isPerspectiveCamera;
				this.ao.gtaoMaterial.defines.PERSPECTIVE_CAMERA !== t && (this.ao.gtaoMaterial.defines.PERSPECTIVE_CAMERA = t, this.ao.gtaoMaterial.needsUpdate = !0);
			}
			this.composer.render(0), o.setRenderTarget(c.target), o.setViewport(c.viewport), o.setScissor(c.scissor), o.setScissorTest(c.scissorTest), o.autoClear = !1, this.copyMaterial.uniforms.tDiffuse.value = this.composer.readBuffer.texture, this.copy.render(o), o.toneMapping = c.tone, o.toneMappingExposure = c.exposure, e.layers.set(1), s.background = null, o.render(s, e);
		} finally {
			l.reverse().forEach((e) => e()), e.layers.mask = c.layers, s.environment = c.environment, s.background = c.background, s.environmentIntensity = c.environmentIntensity, o.toneMapping = c.tone, o.toneMappingExposure = c.exposure, o.shadowMap.enabled = c.shadow, o.shadowMap.type = c.shadowType, o.autoClear = c.autoClear, o.setRenderTarget(c.target), o.setViewport(c.viewport), o.setScissor(c.scissor), o.setScissorTest(c.scissorTest);
		}
	}
	dispose() {
		this.disposed || (this.disposed = !0, this.screenSpaceLighting?.dispose(), this.ao?.dispose(), this.bloom?.dispose(), this.fxaa?.dispose(), this.output?.dispose(), this.texturePass?.dispose(), this.copy?.dispose(), this.copyMaterial?.dispose(), this.composer?.dispose(), this.beauty?.dispose(), this.environment?.dispose());
	}
	resize(e, t) {
		let [n, r] = w(e, t, this.renderer.getPixelRatio(), this.settings.maxPostProcessPixels, Math.min(D.maxPostProcessDimension, this.renderer.capabilities.maxTextureSize));
		(this.width !== n || this.height !== r) && (this.width = n, this.height = r, this.beauty.setSize(n, r), this.composer.setSize(n, r), this.fxaa.uniforms.resolution.value.set(1 / n, 1 / r), this.ao && this.ao.setSize(Math.max(1, Math.floor(n * this.settings.ao.resolutionScale)), Math.max(1, Math.floor(r * this.settings.ao.resolutionScale))));
	}
};
//#endregion
export { $ as RenderQualityPipeline };
