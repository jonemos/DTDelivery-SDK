import { t as e } from "./rolldown-runtime-DF993M8W.js";
import { A as t, At as n, B as r, C as i, Ct as a, D as o, Dt as s, E as c, Et as l, F as u, Ft as d, G as f, H as p, I as m, It as h, J as g, K as _, L as v, Lt as y, M as b, N as ee, O as x, Ot as S, P as C, Pt as w, R as te, Rt as T, S as ne, St as re, T as ie, Tt as ae, U as oe, V as se, W as ce, Y as le, _ as ue, _t as de, a as fe, at as pe, b as me, bt as E, c as he, ct as ge, d as _e, dt as ve, f as ye, ft as be, g as D, gt as O, h as xe, ht as Se, i as Ce, it as we, j as Te, jt as k, k as Ee, kt as De, l as Oe, lt as ke, m as Ae, mt as je, n as Me, nt as Ne, o as Pe, ot as Fe, p as Ie, pt as Le, q as Re, r as ze, rt as Be, s as Ve, st as He, t as Ue, tt as We, u as Ge, ut as Ke, v as qe, vt as Je, w as Ye, wt as Xe, x as Ze, xt as Qe, y as $e, yt as et, z as tt, zt as nt } from "./StaticPreviewPersistence-BSmfWg2W.js";
import { a as rt, c as A, d as it, i as at, l as ot, o as st, r as ct, s as lt, t as ut, u as dt } from "./CompositionDocument-BzH8pad3.js";
import { $t as ft, Bt as pt, Ct as mt, Ht as ht, I as gt, Jn as _t, K as vt, Kn as yt, Kt as bt, L as xt, Lt as St, M as Ct, Nn as wt, Pn as Tt, Qn as Et, Rt as Dt, S as Ot, T as kt, Tt as At, U as jt, Ut as Mt, V as Nt, Vt as Pt, Wt as Ft, Yn as It, Z as Lt, _ as Rt, _t as zt, a as Bt, ar as Vt, at as Ht, b as Ut, br as Wt, d as Gt, er as Kt, g as qt, h as Jt, i as Yt, ir as Xt, jt as j, k as Zt, l as Qt, lt as $t, m as en, n as tn, nr as nn, or as rn, ot as an, p as on, q as sn, r as cn, rr as ln, st as un, t as dn, tr as fn, vt as pn, w as mn, wt as M, xr as N, xt as hn, y as gn, yt as _n, zn as vn, zt as yn } from "./RenderQualityPreset-BFl3kMLS.js";
import { a as bn, i as xn, n as Sn, o as Cn, r as wn, t as Tn } from "./RoomEnvironment-BlbXOJv5.js";
//#region src/domain/defaultScene.ts
var En = "00000000-0000-4000-8000-000000000000";
function Dn(e = En, t = () => crypto.randomUUID()) {
	let n = (e, n, r, i = [
		0,
		0,
		0
	], a = [
		1,
		1,
		1
	]) => {
		let o = y(e, t(), t());
		return {
			...o,
			name: n,
			components: o.components.map((e) => ({
				...e,
				...e.type === "DirectionalLight" ? { intensity: 3 } : {},
				...e.type === "PrimitiveCube" ? { color: 9607071 } : {},
				localTransform: {
					positionMeters: Je(r),
					rotationXyzw: et(i),
					scale: E(a)
				}
			}))
		};
	};
	return {
		schemaVersion: 2,
		kind: "Scene",
		coordinateSystem: "RH_Y_UP_METERS_V1",
		id: e,
		actors: [
			n("DirectionalLight", "DirectionalLight", [
				0,
				-150,
				200
			], [
				0,
				-45,
				-30
			]),
			n("Plane", "Floor", [
				0,
				0,
				0
			], [
				0,
				0,
				0
			], [
				10,
				10,
				10
			]),
			n("PlayerStart", "PlayerStart", [
				0,
				0,
				100
			])
		],
		authoring: {
			folders: [],
			actorFolders: [],
			prefabInstances: []
		}
	};
}
//#endregion
//#region src/composition/CompositionSourceDefaults.ts
var On = Dn(void 0, () => "template").actors;
function kn(e) {
	let t = (e) => Array.isArray(e) ? e.map(t) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t({
		name: e.name,
		classId: e.classId,
		tags: e.tags,
		components: e.components.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !["id", "ownerActorId"].includes(e))))
	}));
}
var An = new Set(On.map(kn));
function jn(e) {
	return On.some((t) => t.name === e.name && t.classId === e.classId) && An.has(kn(e));
}
var Mn = (e) => [
	"PlayerStart",
	"Camera",
	"DirectionalLight",
	"PointLight",
	"SpotLight"
].includes(e.type);
function Nn(e) {
	return jn(e) || e.components.some(Mn) && !e.components.some((e) => [
		"PrimitiveCube",
		"StaticMesh",
		"SkeletalMesh"
	].includes(e.type));
}
function Pn(e) {
	return e.components.some(Mn) ? {
		...e,
		components: e.components.map((e) => Mn(e) ? {
			id: e.id,
			ownerActorId: e.ownerActorId,
			type: "SceneNode",
			typeVersion: 1,
			parentComponentId: e.parentComponentId,
			attachmentParent: e.attachmentParent,
			localTransform: e.localTransform
		} : e)
	} : e;
}
var Fn = /* @__PURE__ */ new WeakMap();
function In(e) {
	let t = Fn.get(e);
	if (t) return t;
	let n = e.actors.filter((e) => !Nn(e)), r = new Set(n.map((e) => e.id)), i = n.map((t) => {
		let n = Pn(t);
		return {
			...n,
			components: n.components.map((n) => T(n) && n.attachmentParent && !r.has(n.attachmentParent.actorId) ? {
				...n,
				attachmentParent: null,
				localTransform: ke(e, t.id)
			} : n)
		};
	});
	return Fn.set(e, i), i;
}
//#endregion
//#region src/delivery/SpatialCells.ts
var Ln = 10;
function Rn(e) {
	if (!Number.isFinite(e) || e < 1 || e > 1e4) throw Error("공간 셀 크기는 1–10,000m입니다.");
}
function zn(e) {
	return e.components.some((e) => e.type === "TestScript" && s(e).manifest.sdkVersion === 5 ? !1 : ![
		"StaticMesh",
		"PrimitiveCube",
		"SceneNode",
		"TwinMetadata"
	].includes(e.type) || e.type === "StaticMesh" && e.mobility !== "static");
}
function Bn(e) {
	let t = new Map(e.actors.map((e) => [e.id, e])), n = new Map(e.actors.flatMap((e) => e.components.map((t) => [t.id, e.id]))), r = new Map(e.actors.map((e) => [e.id, e.id])), i = (e) => {
		let t = e;
		for (; r.get(t) !== t;) {
			let e = r.get(t);
			if (!e) throw Error("Missing spatial dependency");
			t = e;
		}
		for (; e !== t;) {
			let n = r.get(e);
			r.set(e, t), e = n;
		}
		return t;
	};
	for (let a of e.actors) for (let e of a.components) {
		let o = [];
		if (T(e) && e.attachmentParent && o.push(e.attachmentParent.actorId), e.type === "TestScript") for (let t of Xe(e)) {
			let e = n.get(t.id);
			if (!e) throw Error("Missing spatial Script target");
			o.push(e);
		}
		for (let e of o) {
			if (!t.has(e)) throw Error("Missing spatial Actor dependency");
			r.set(i(a.id), i(e));
		}
	}
	let a = /* @__PURE__ */ new Map();
	for (let t of e.actors) {
		let e = i(t.id), n = a.get(e) ?? [];
		n.push(t), a.set(e, n);
	}
	return [...a.values()];
}
function Vn(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let e of t) for (let t of e.actors) {
		if (n.has(t)) throw Error("Duplicate spatial Actor");
		n.set(t, e);
	}
	if (n.size !== e.actors.length || e.actors.some((e) => !n.has(e.id))) throw Error("Incomplete spatial Actor partition");
	for (let t of Bn(e)) {
		let e = n.get(t[0].id);
		if (t.some((t) => n.get(t.id) !== e)) throw Error("Split spatial dependency");
		if (t.some(zn) && e.bounds !== null) throw Error("Dynamic spatial Actor must remain resident");
	}
}
function Hn(e, t) {
	let n = new Set(t);
	return {
		...e,
		actors: e.actors.filter((e) => n.has(e.id)),
		...e.authoring ? { authoring: {
			...e.authoring,
			actorFolders: e.authoring.actorFolders.filter((e) => n.has(e.actorId))
		} } : {}
	};
}
//#endregion
//#region src/delivery/ChunkContract.ts
var Un = 4 * 1024 ** 2, Wn = "dt-static-composition-1", Gn = "dt-static-composition-2", Kn = "dt-static-composition-3", qn = "dt-static-composition-4", Jn = "dt-static-composition-5", Yn = {
	manifest: 16 * 1024 ** 2,
	file: 256 * 1024 ** 2,
	files: 1e5,
	total: 64 * 1024 ** 3
}, Xn = (e) => typeof e == "string" && /^[a-f0-9]{64}$/.test(e);
function P(e) {
	let t = (e) => {
		if (Array.isArray(e)) return e.map(t);
		if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0).sort(([e], [t]) => e < t ? -1 : +(e > t)).map(([e, n]) => [e, t(n)]));
		if (typeof e == "number" && !Number.isFinite(e)) throw Error("Non-finite package number");
		return e;
	};
	return new TextEncoder().encode(JSON.stringify(t(e)));
}
var Zn = (e) => {
	if (!Xn(e)) throw Error("Invalid content hash");
	return `objects/${e}`;
}, Qn = (e) => {
	if (!Xn(e)) throw Error("Invalid release hash");
	return `releases/${e}.json`;
};
function $n(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e) || Object.keys(e).some((e) => !t.includes(e)) || t.some((t) => !Object.hasOwn(e, t))) throw Error("Unsupported package fields");
}
function er(e, t) {
	if (!Number.isSafeInteger(e) || Number(e) < 0 || Number(e) > t) throw Error("Package byte/count limit");
}
function tr(e, t) {
	if ($n(e, ["hash", "bytes"]), !Xn(e.hash)) throw Error("Invalid hash");
	er(e.bytes, t);
}
function nr(e) {
	let t = !!(e && typeof e == "object" && e.version === 5), n = !!(e && typeof e == "object" && (e.version === 4 || t && Object.hasOwn(e, "cells"))), r = n || !!(e && typeof e == "object" && (e.version === 3 || t && Object.hasOwn(e, "spatial"))), i = t || r || !!(e && typeof e == "object" && e.version === 2);
	if ($n(e, [
		"kind",
		"version",
		"contract",
		"chunkBytes",
		"id",
		"name",
		"levels",
		"mounts",
		"files",
		...i ? ["objects"] : [],
		...r ? ["spatial"] : [],
		...n ? ["cells"] : [],
		...t ? ["addonBundle", "addonOverrides"] : []
	]), e.kind !== "dt-chunks" || e.version !== (t ? 5 : n ? 4 : r ? 3 : i ? 2 : 1) || e.contract !== (t ? "dt-static-composition-5" : n ? "dt-static-composition-4" : r ? "dt-static-composition-3" : i ? "dt-static-composition-2" : "dt-static-composition-1") || e.chunkBytes !== Un) throw Error("Unsupported delivery/runtime contract");
	if (!Array.isArray(e.files) || e.files.length > Yn.files || !Array.isArray(e.levels) || !Array.isArray(e.mounts) || P(e).length > Yn.manifest) throw Error("Package metadata limit");
	let a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = 0;
	for (let t of e.files) {
		if ($n(t, [
			"hash",
			"bytes",
			"chunks"
		]), !Xn(t.hash)) throw Error("Invalid file hash");
		if (er(t.bytes, Yn.file), a.has(t.hash) || !Array.isArray(t.chunks) || t.chunks.length !== Math.ceil(t.bytes / Un)) throw Error("Duplicate file or invalid chunk layout");
		let e = 0;
		for (let n = 0; n < t.chunks.length; n++) {
			let r = t.chunks[n];
			if (tr(r, Un), r.bytes !== Math.min(Un, t.bytes - e) || o.has(r.hash) && o.get(r.hash) !== r.bytes) throw Error("Conflicting chunk size/order");
			e += r.bytes, o.set(r.hash, r.bytes);
		}
		if (e !== t.bytes) throw Error("Incomplete file");
		s += e, a.set(t.hash, t);
	}
	if (s > Yn.total) throw Error("Package total byte limit");
	if (t && e.addonBundle !== null && (!Xn(e.addonBundle) || !a.has(e.addonBundle) || a.get(e.addonBundle).bytes > 4e7)) throw Error("Invalid addon bundle reference");
	let c = /* @__PURE__ */ new Set();
	for (let t of e.levels) {
		if ($n(t, [
			"hash",
			"actors",
			"bytes"
		]), !Xn(t.hash) || !a.has(t.hash) || c.has(t.hash) || a.get(t.hash).bytes > Yn.manifest) throw Error("Invalid level metadata reference");
		er(t.actors, 1e5), er(t.bytes, Yn.total), c.add(t.hash);
	}
	let l = e.mounts.map((t) => {
		if ($n(t, [
			"id",
			"name",
			"level",
			"position",
			"rotation",
			"visible",
			"loaded"
		]), !Xn(t.level) || !c.has(t.level)) throw Error("Missing mounted level");
		let { level: n, ...r } = t;
		return {
			...r,
			pin: {
				source: {
					kind: "web",
					documentId: e.id
				},
				revision: 1,
				assetRevision: n
			}
		};
	});
	if (t && rt(e.addonOverrides, e.id, e.mounts.map((e) => e.id)), r) {
		if (!Array.isArray(e.spatial) || e.spatial.length !== c.size) throw Error("Incomplete spatial index");
		let t = /* @__PURE__ */ new Set();
		for (let n of e.spatial) {
			if ($n(n, ["level", "bounds"]), typeof n.level != "string" || !c.has(n.level) || t.has(n.level)) throw Error("Invalid spatial level");
			if (t.add(n.level), n.bounds !== null) {
				$n(n.bounds, ["min", "max"]);
				let { min: e, max: t } = n.bounds;
				if (!Array.isArray(e) || !Array.isArray(t) || e.length !== 3 || t.length !== 3 || e.some((e, n) => !Number.isFinite(e) || !Number.isFinite(t[n]) || e > t[n])) throw Error("Invalid spatial bounds");
			}
		}
	}
	if (n) {
		if (!Array.isArray(e.cells) || e.cells.length !== c.size) throw Error("Incomplete cell index");
		let t = /* @__PURE__ */ new Set();
		for (let n of e.cells) {
			if ($n(n, [
				"level",
				"size",
				"entries"
			]), typeof n.level != "string" || !c.has(n.level) || t.has(n.level) || !Array.isArray(n.entries)) throw Error("Invalid cell level");
			t.add(n.level), Rn(n.size);
			let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
			for (let e of n.entries) {
				if ($n(e, [
					"id",
					"actors",
					"bounds"
				]), typeof e.id != "string" || e.id.length > 80 || !/^(always|-?\d+:-?\d+:-?\d+)$/.test(e.id) || r.has(e.id) || !Array.isArray(e.actors) || !e.actors.length) throw Error("Invalid spatial cell");
				r.add(e.id);
				for (let t of e.actors) {
					if (typeof t != "string" || !t.length || t.length > 256 || i.has(t)) throw Error("Invalid cell Actor");
					i.add(t);
				}
				if (e.bounds !== null) {
					$n(e.bounds, ["min", "max"]);
					let { min: t, max: n } = e.bounds;
					if (!Array.isArray(t) || !Array.isArray(n) || t.length !== 3 || n.length !== 3 || t.some((e, t) => !Number.isFinite(e) || !Number.isFinite(n[t]) || e > n[t])) throw Error("Invalid cell bounds");
				}
			}
			if (i.size !== e.levels.find((e) => e.hash === n.level)?.actors) throw Error("Cell Actor count mismatch");
		}
		let n = e.cells;
		if (e.mounts.reduce((e, t) => e + n.find((e) => e.level === t.level).entries.length, 0) > 1e4) throw Error("Spatial cell mount limit");
	}
	return ct({
		kind: "Composition",
		version: i ? 2 : 1,
		id: e.id,
		name: e.name,
		mounts: l,
		...i ? { objects: e.objects } : {}
	}), structuredClone(e);
}
function rr(e) {
	return ct({
		kind: "Composition",
		version: e.version >= 2 ? 2 : 1,
		id: e.id,
		name: e.name,
		...e.version >= 2 ? { objects: e.objects } : {},
		...e.addonOverrides ? { addonOverrides: e.addonOverrides } : {},
		mounts: e.mounts.map(({ level: t, ...n }) => ({
			...n,
			pin: {
				source: {
					kind: "web",
					documentId: e.id
				},
				revision: 1,
				assetRevision: t
			}
		}))
	});
}
function ir(e) {
	return new Map(e.files.flatMap((e) => e.chunks.map((e) => [e.hash, e.bytes])));
}
async function ar(e, t) {
	if (nr(e), nr(t), e.id !== t.id) throw Error("Delta belongs to another composition");
	let n = ir(e), r = ir(t);
	return {
		kind: "dt-chunks-delta",
		version: 1,
		base: await k(P(e)),
		target: await k(P(t)),
		added: [...r.keys()].filter((e) => !n.has(e)).sort(),
		reused: [...r.keys()].filter((e) => n.has(e)).sort(),
		removed: [...n.keys()].filter((e) => !r.has(e)).sort()
	};
}
async function or(e, t, n) {
	let r = await ar(t, n);
	if (new TextDecoder().decode(P(r)) !== new TextDecoder().decode(P(e))) throw Error("Delta base, target or closure mismatch");
	return r;
}
//#endregion
//#region src/delivery/ActorIndex.ts
function sr(e) {
	return JSON.stringify([
		e.compositionId,
		e.mountId,
		e.actorId
	]);
}
function cr(e, t) {
	let n = nt(t), r = /* @__PURE__ */ new Set();
	for (; n;) {
		if (r.has(n.id)) throw Error("Actor attachment cycle");
		r.add(n.id);
		let t = n.attachmentParent;
		if (!t) return !1;
		if (t.kind === "bone" || t.kind === "socket") return !0;
		let i = e.actors.find((e) => e.id === t.actorId), a = i?.components.find((e) => e.id === t.componentId);
		if (!a || !T(a)) throw Error("Actor parent missing");
		for (n = a; n.parentComponentId;) {
			let e = i?.components.find((e) => e.id === n.parentComponentId);
			if (!e || !T(e) || r.has(e.id)) throw Error("Actor component ancestry invalid");
			r.add(n.id), n = e;
		}
	}
	return !1;
}
function lr(e, t) {
	let n = e.authoring.actorFolders.find((e) => e.actorId === t.id)?.folderId;
	if (!n) return null;
	let r = [], i = /* @__PURE__ */ new Set(), a = n;
	for (; a;) {
		if (i.has(a)) throw Error("Actor folder cycle");
		i.add(a);
		let t = e.authoring.folders.find((e) => e.id === a);
		if (!t) throw Error("Actor folder missing");
		r.unshift(t.name), a = t.parentId;
	}
	return {
		id: n,
		path: r
	};
}
function ur(e, t, n) {
	if (!Xn(t)) throw Error("Invalid actor release");
	let r = [], i = (n, i) => {
		if (r.length >= 1e5) throw Error("Actor index count limit");
		let a = {
			releaseHash: t,
			compositionId: e.id,
			mountId: i.mountId,
			actorId: n.id
		};
		r.push({
			...a,
			...i,
			serviceKey: sr(a),
			actorName: n.name,
			classId: n.classId,
			tags: [...n.tags],
			rootComponentId: n.rootComponentId,
			attachmentParent: structuredClone(nt(n)?.attachmentParent ?? null),
			components: n.components.map((e) => ({
				id: e.id,
				type: e.type,
				parentComponentId: T(e) ? e.parentComponentId : null
			})),
			meshes: n.components.filter((e) => e.type === "StaticMesh" || e.type === "SkeletalMesh" || e.type === "PrimitiveCube").map((e) => ({
				componentId: e.id,
				asset: "meshAsset" in e ? structuredClone(e.meshAsset) : null,
				shape: e.type === "PrimitiveCube" ? e.shape ?? "Cube" : "shape" in e ? e.shape ?? null : null
			})),
			worldMatrix: null,
			positionMeters: null,
			positionUeCm: null
		});
	};
	for (let t of e.mounts) {
		let e = n.get(t.level);
		if (!e) throw Error("Missing actor level metadata");
		for (let n of e.actors) {
			let r = nt(n) ? cr(e, n) ? "bone-socket-unsupported" : "static" : "no-spatial-root";
			i(n, {
				mountId: t.id,
				mountName: t.name,
				levelHash: t.level,
				levelId: e.id,
				origin: "level",
				sourceActorIds: Object.entries(e.authoring.ueImport?.sourceActorIds ?? {}).filter(([, e]) => e === n.id).map(([e]) => e),
				folder: lr(e, n),
				sourceWorldMatrix: r === "static" ? ge(e, n.id) : null,
				spatialStatus: r,
				excludedSourceDefault: jn(n),
				visible: t.visible,
				loaded: t.loaded
			});
		}
	}
	for (let t of e.objects ?? []) {
		let e = it(t);
		i(e, {
			mountId: null,
			mountName: "통합레벨 자체 객체",
			levelHash: null,
			levelId: null,
			origin: "composition",
			sourceActorIds: [],
			folder: null,
			sourceWorldMatrix: be(nt(e).localTransform),
			spatialStatus: "static",
			excludedSourceDefault: !1,
			loaded: !0,
			visible: t.visible
		});
	}
	return dr({
		kind: "dt-actors",
		version: 1,
		releaseHash: t,
		compositionId: e.id,
		coordinateSystem: "RH_Y_UP_METERS_V1",
		matrixLayout: "row-major",
		actors: r
	}, e);
}
function dr(e, t) {
	if (e.compositionId !== t.id) throw Error("Actor composition mismatch");
	let n = {
		...e,
		actors: e.actors.map((e) => {
			let n = e.mountId === null ? null : t.mounts.find((t) => t.id === e.mountId && t.level === e.levelHash);
			if (e.mountId !== null && !n) throw Error("Actor mount mismatch");
			let r = e.sourceWorldMatrix ? n ? je(be({
				positionMeters: n.position,
				rotationXyzw: n.rotation,
				scale: [
					1,
					1,
					1
				]
			}), e.sourceWorldMatrix) : e.sourceWorldMatrix : null, i = r ? [
				r[3],
				r[7],
				r[11]
			] : null, a = i ? Se(i) : null;
			return {
				...e,
				mountName: n?.name ?? e.mountName,
				loaded: n?.loaded ?? e.loaded,
				visible: n?.visible ?? e.visible,
				worldMatrix: r,
				positionMeters: i,
				positionUeCm: a ? {
					X: a[0] === 0 ? 0 : a[0],
					Y: a[1] === 0 ? 0 : a[1],
					Z: a[2] === 0 ? 0 : a[2]
				} : null
			};
		})
	};
	if (P(n).length > 64 * 1024 ** 2) throw Error("Actor index exceeds 64 MiB");
	return n;
}
//#endregion
//#region src/delivery/ActorPanel.ts
function fr(e, t, n = e) {
	let r = (e, t = "", n = "") => {
		let r = document.createElement(e);
		return r.textContent = t, r.className = n, r;
	}, i = r("h3", "액터 목록"), a = r("input"), o = r("p"), s = r("div", "", "actor-list"), c = r("div", "", "actor-detail"), l = r("div", "", "actor-paging"), u = r("button", "이전"), d = r("button", "다음"), f = r("span");
	a.type = "search", a.placeholder = "액터 이름 / ID / 레벨 검색", a.setAttribute("aria-label", "액터 검색"), c.setAttribute("aria-label", "액터 상세"), l.append(u, f, d), e.append(i, a, o, s, l), n.append(c);
	let p, m = 0;
	function h(e, n = !1) {
		p = e, c.replaceChildren();
		for (let t of s.querySelectorAll("button")) t.setAttribute("aria-pressed", String(t.dataset.key === (e ? sr(e) : "")));
		if (!e) {
			t.selectActor(null), c.append(r("p", "목록 또는 뷰포트에서 액터를 선택하세요.", "empty"), r("p", "설비 정보가 없는 액터도 모두 표시합니다. PM 데이터는 액터 연결 키로 별도 관리합니다.", "notice"));
			return;
		}
		let i = t.selectActorTarget(e);
		c.append(r("h3", e.actorName), r("p", e.actorId, "identity"), r("span", e.excludedSourceDefault ? "원본 기본 객체 · 통합 표시 제외" : i.available ? "● 표시 중" : "○ 숨김 또는 로드 해제", "availability")), c.append(r("h4", "액터 원점 · Unreal 좌표 (cm)"));
		let a = r("div", "", "position");
		for (let t of [
			"X",
			"Y",
			"Z"
		]) {
			let n = r("span");
			n.append(r("b", t, "axis-" + t.toLowerCase()), document.createTextNode(e.positionUeCm?.[t].toLocaleString("ko-KR", { maximumFractionDigits: 2 }) ?? "미지원")), a.append(n);
		}
		c.append(a, r("h4", "액터 구조"));
		let o = r("dl");
		for (let [t, n] of [
			["레벨", e.mountName],
			["클래스", e.classId],
			["폴더", e.folder?.path.join(" / ") ?? "없음"],
			["부모 액터", e.attachmentParent?.actorId ?? "없음"],
			["메시", `${e.meshes.length}개`],
			["컴포넌트", `${e.components.length}개`]
		]) o.append(r("dt", t), r("dd", n));
		let l = r("button", "선택 액터 위치로 이동");
		l.disabled = !i.focusable;
		let u = () => {
			try {
				t.focusActor(e);
			} catch (e) {
				c.append(r("p", String(e), "notice"));
			}
		};
		l.onclick = u, c.append(o, l, r("h4", "PM 서비스 연결 키"));
		let d = r("dl");
		for (let [t, n] of [
			["actorId", e.actorId],
			["mountId", e.mountId ?? "null · 통합 자체 객체"],
			["통합 ID", e.compositionId]
		]) d.append(r("dt", t), r("dd", n));
		c.append(d);
		let f = r("details");
		f.append(r("summary", "▸ 액터 연결 데이터 / JSON 보기"), r("pre", JSON.stringify(i, null, 2))), c.append(f, r("p", "PM의 설비명·센서·부가기능 정보는 compositionId + mountId + actorId로 연결하세요. 내보낸 레벨을 수정할 필요가 없습니다.", "notice")), n && i.focusable && u();
	}
	function g() {
		let e = t.session.actors?.actors ?? [], n = a.value.trim().toLocaleLowerCase(), i = e.filter((e) => `${e.actorName} ${e.actorId} ${e.mountName} ${e.classId} ${e.folder?.path.join(" ") ?? ""}`.toLocaleLowerCase().includes(n)), c = Math.max(1, Math.ceil(i.length / 100));
		m = Math.min(m, c - 1), o.textContent = `${i.length} / ${e.length}개 액터`, f.textContent = `${m + 1} / ${c}`, u.disabled = m === 0, d.disabled = m >= c - 1, s.replaceChildren();
		for (let e of i.slice(m * 100, (m + 1) * 100)) {
			let t = r("button");
			t.dataset.key = e.serviceKey, t.dataset.actorId = e.actorId, t.title = `${e.mountName} / ${e.actorId}`, t.append(r("strong", e.actorName), r("small", `${e.mountName} · ${e.classId}`)), t.onclick = () => h(e), t.ondblclick = () => h(e, !0), s.append(t);
		}
		h(p ? e.find((e) => e.serviceKey === sr(p) && e.releaseHash === p.releaseHash) : void 0);
	}
	a.oninput = () => {
		m = 0, g();
	}, u.onclick = () => {
		m--, g();
	}, d.onclick = () => {
		m++, g();
	};
	let _ = t.session.subscribe(g), v = t.subscribeActorSelection((e) => h(e ?? void 0));
	return g(), () => {
		_(), v();
		for (let e of [
			i,
			a,
			o,
			s,
			l,
			c
		]) e.remove();
	};
}
//#endregion
//#region src/delivery/SdkVersion.ts
var pr = typeof __DT_DELIVERY_SDK_VERSION__ > "u" ? {
	name: "@dt/delivery-sdk",
	version: "0.3.17",
	license: "MIT",
	addonSdkVersion: 5,
	contracts: [
		1,
		2,
		3,
		4,
		5
	]
}.version : __DT_DELIVERY_SDK_VERSION__, mr = /* @__PURE__ */ new Map(), hr = /* @__PURE__ */ new Map(), gr = (e) => mr.get(e);
async function _r(e, t = {}) {
	let n = new Set(e.actors.flatMap((e) => e.components.flatMap((e) => e.type === "TestScript" && e.scriptPackage ? [e.scriptPackage.codeHash] : [])));
	for (let e of S()) {
		if (e.manifest.sdkVersion === 5 && !t.includeGeneric) continue;
		let r = e.reference.codeHash;
		if (!n.has(r) || mr.has(r)) continue;
		if (hr.has(r)) {
			await hr.get(r);
			continue;
		}
		let i = (async () => {
			let t = URL.createObjectURL(new Blob([e.code], { type: "text/javascript" }));
			try {
				let n = await import(
					/* @vite-ignore */
					t
);
				if (!n || typeof n != "object" || !("createScript" in n) || typeof n.createScript != "function") throw Error(`${e.manifest.displayName}: createScript export가 없습니다.`);
				mr.set(r, n.createScript);
			} finally {
				URL.revokeObjectURL(t);
			}
		})();
		hr.set(r, i);
		try {
			await i;
		} finally {
			hr.delete(r);
		}
	}
}
//#endregion
//#region src/delivery/EquipmentIndex.ts
function vr(e) {
	if (!Xn(e)) throw Error("Invalid equipment release");
	return `equipment/${e}.json`;
}
function yr(e, t, n) {
	vr(t);
	let r = e.levels.map((e) => {
		let t = n.get(e.hash);
		if (!t) throw Error("Missing equipment level metadata");
		return {
			levelHash: e.hash,
			...He(t)
		};
	}), i = P(r).length;
	if (i > Yn.manifest) throw Error("Equipment index exceeds 16 MiB");
	let a = [];
	for (let o of e.mounts) {
		let e = n.get(o.level), s = r.find((e) => e.levelHash === o.level);
		for (let n of s.bindings.objects) {
			if (a.length >= 1e5) throw Error("Equipment placement count limit");
			let r = e.actors.find((e) => e.id === n.actorId), c = n.targetComponentId ?? r.rootComponentId, l = new Set(n.targetComponentId === null ? r.components.filter(T).map((e) => e.id) : [c]);
			for (let e = !0; e;) {
				e = !1;
				for (let t of r.components.filter(T)) t.parentComponentId && l.has(t.parentComponentId) && !l.has(t.id) && (l.add(t.id), e = !0);
			}
			let u = r, d = r.components.find((e) => e.id === c), f = !1, p = /* @__PURE__ */ new Set();
			for (; d && T(d);) {
				let t = JSON.stringify([u.id, d.id]);
				if (p.has(t)) throw Error("Equipment attachment cycle");
				p.add(t);
				let n = d.attachmentParent, r = d.parentComponentId;
				if (n) {
					if (n.kind === "bone" || n.kind === "socket") {
						f = !0;
						break;
					}
					u = e.actors.find((e) => e.id === n.actorId), d = u.components.find((e) => e.id === n.componentId);
				} else d = u.components.find((e) => e.id === r);
			}
			let m = jn(r) ? "source-default-excluded" : n.instanceSourceId !== null || e.authoring.ueImport?.components.some((e) => l.has(e.webId) && e.sourceKind === "InstancedStaticMesh") ? "instance-unsupported" : f ? "bone-socket-unsupported" : "static", h = m === "static" ? Ke(e, {
				actorId: r.id,
				componentId: c
			}) : null;
			if (a.push({
				...n,
				releaseHash: t,
				mountId: o.id,
				mountName: o.name,
				levelHash: o.level,
				levelId: e.id,
				actorName: r.name,
				object: structuredClone(s.twin.objects.find((e) => e.objectId === n.objectId)),
				componentIds: [...l].filter((e) => r.components.find((t) => t.id === e)?.type !== "TwinMetadata"),
				meshes: r.components.filter((e) => l.has(e.id) && (e.type === "StaticMesh" || e.type === "SkeletalMesh")).map((e) => ({
					componentId: e.id,
					asset: "meshAsset" in e ? e.meshAsset : null,
					shape: "shape" in e ? e.shape ?? null : null
				})),
				spatialStatus: m,
				sourceWorldMatrix: h,
				worldMatrix: null,
				positionMeters: null,
				positionUeCm: null,
				loaded: o.loaded,
				visible: o.visible
			}), i += P(a[a.length - 1]).length, i > Yn.manifest) throw Error("Equipment index exceeds 16 MiB");
		}
	}
	return br({
		kind: "dt-equipment",
		version: 1,
		releaseHash: t,
		compositionId: e.id,
		coordinateSystem: "RH_Y_UP_METERS_V1",
		matrixLayout: "row-major",
		capabilityExecution: "declarations-only",
		catalogs: r,
		placements: a
	}, e);
}
function br(e, t) {
	let n = {
		...e,
		placements: e.placements.map((e) => {
			let n = t.mounts.find((t) => t.id === e.mountId && t.level === e.levelHash);
			if (!n) throw Error("Equipment mount mismatch");
			let r = e.sourceWorldMatrix ? je(be({
				positionMeters: n.position,
				rotationXyzw: n.rotation,
				scale: [
					1,
					1,
					1
				]
			}), e.sourceWorldMatrix) : null, i = r ? [
				r[3],
				r[7],
				r[11]
			] : null, a = i ? Se(i) : null;
			return {
				...e,
				mountName: n.name,
				worldMatrix: r,
				positionMeters: i,
				positionUeCm: a ? {
					X: a[0],
					Y: a[1],
					Z: a[2]
				} : null,
				loaded: n.loaded,
				visible: n.visible
			};
		})
	};
	if (P(n).length > Yn.manifest) throw Error("Equipment index exceeds 16 MiB");
	return n;
}
//#endregion
//#region src/assets/SkeletalAnimationAsset.ts
var xr = 1179937895, Sr = 1313821514, Cr = 5130562;
async function wr(e) {
	let t = Er(e), n = await new te().parseAsync(e.slice().buffer, ""), r = Ir(n.scene);
	(r.length !== t.skinnedMeshNodeCount || n.animations.length !== t.animationCount) && F("invalid-container", "Decoded skeletal resources do not match the validated GLB profile.");
	let i = !1;
	return {
		metadata: t,
		instantiate: () => {
			if (i) throw Error("Cannot instantiate a disposed skeletal animation asset.");
			let e = tt(n.scene);
			Lr(e);
			let t = Ir(e);
			if (t.length !== r.length) throw Error("Skeleton clone did not preserve every skinned mesh.");
			let a = new Qt(e), o = !1;
			return {
				root: e,
				mixer: a,
				clips: n.animations,
				skinnedMeshes: t,
				dispose: () => {
					o || (o = !0, a.stopAllAction(), a.uncacheRoot(e), Rr(e));
				}
			};
		},
		dispose: () => {
			i || (i = !0, zr(n.scene));
		}
	};
}
function Tr() {
	let e = [
		"x",
		"y",
		"z",
		"w"
	], t = bn.skinbase_vertex, n = bn.skinning_vertex;
	if (!e.every((e) => t.includes(`skinIndex.${e}`) && n.includes(`skinWeight.${e}`))) throw Error("The installed Three skinning shader is not the validated four-component path.");
	return {
		maxInfluences: 4,
		components: e,
		rendererPath: "ShaderChunk.skinbase_vertex+skinning_vertex"
	};
}
function Er(e) {
	Tr();
	let { document: t, binaryBytes: n } = Ar(e);
	t.asset?.version !== "2.0" && F("unsupported-profile", "glTF asset.version must be 2.0.");
	let r = Wr(t.extensionsRequired, "extensionsRequired");
	r.length > 0 && F("unsupported-extension", `Unsupported required extension: ${r.join(", ")}.`);
	let i = Br(t.buffers);
	i.length !== 1 && F("missing-data", "A self-contained skeletal GLB must declare exactly one buffer."), typeof i[0].uri == "string" && F("security-uri", "buffer.uri is not allowed in a self-contained skeletal GLB.");
	let a = Hr(i[0].byteLength, "buffer.byteLength");
	a > n.byteLength && F("missing-data", "The embedded binary chunk is shorter than buffer.byteLength.");
	for (let [e, n] of Br(t.images).entries()) typeof n.uri == "string" && F("security-uri", `Image ${e} uses an external URI.`);
	let o = Br(t.nodes), s = Br(t.meshes), c = Br(t.accessors), l = Br(t.bufferViews);
	Nr(l, a), c.forEach((e) => Pr(e, l));
	let u = Br(t.skins);
	u.length !== 1 && F("unsupported-profile", "The initial skeletal profile requires exactly one skin.");
	let d = u[0], f = Ur(d.joints, "skin.joints");
	(f.length === 0 || f.some((e) => !o[e])) && F("missing-data", "Skin joints must reference existing nodes."), d.skeleton !== void 0 && (!Number.isInteger(d.skeleton) || !o[d.skeleton] || !Dr(o, d.skeleton, f)) && F("unsupported-profile", "The skin skeleton root must contain every joint.");
	let p = Fr(c, d.inverseBindMatrices, "skin.inverseBindMatrices");
	(p.componentType !== 5126 || p.type !== "MAT4" || p.count !== f.length) && F("unsupported-profile", "Inverse bind matrices must be FLOAT MAT4 values matching the joint count.");
	let m = jr(n, l, p, f.length), h = 0, g = 0, _ = 0, v = 0;
	for (let [e, t] of o.entries()) {
		if (t.skin === void 0) continue;
		(t.skin !== 0 || !Number.isInteger(t.mesh) || !s[t.mesh]) && F("missing-data", `Skinned node ${e} has an invalid skin or mesh reference.`);
		let r = Or(s[t.mesh], c, l, n, f.length, t.mesh);
		g += r.vertexCount, _ = Math.max(_, r.payloadMaxInfluences), v = Math.max(v, r.maxWeightSumError), h += 1;
	}
	h === 0 && F("missing-data", "The GLB has no node that binds a mesh to its skin.");
	let y = Br(t.animations);
	y.length === 0 && F("missing-data", "The initial skeletal profile requires at least one animation clip.");
	let b = y.map((e, t) => kr(e, t, f, c));
	return {
		profile: "self-contained-skeletal-animation-glb-v1",
		gltfVersion: "2.0",
		skinCount: 1,
		skinnedMeshNodeCount: h,
		jointCount: f.length,
		jointNodeIndices: f,
		inverseBindMatrices: m,
		vertexCount: g,
		payloadMaxInfluences: _,
		maxWeightSumError: v,
		animationCount: y.length,
		animationNames: b
	};
}
function Dr(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = [t];
	for (; i.length > 0;) {
		let t = i.pop();
		if (r.has(t)) continue;
		r.add(t);
		let n = e[t]?.children;
		if (n !== void 0) {
			if (!Array.isArray(n) || n.some((t) => !Number.isInteger(t) || !e[t])) return !1;
			i.push(...n);
		}
	}
	return n.every((e) => r.has(e));
}
function Or(e, t, n, r, i, a) {
	let o = Br(e.primitives);
	o.length === 0 && F("missing-data", `Mesh ${a} has no primitives.`);
	let s = 0, c = 0, l = 0;
	for (let [e, u] of o.entries()) {
		Array.isArray(u.targets) && u.targets.length > 0 && F("unsupported-profile", "Morph targets are outside the initial skeletal profile.");
		let o = Vr(u.attributes, `mesh ${a} primitive ${e}.attributes`);
		(o.JOINTS_1 !== void 0 || o.WEIGHTS_1 !== void 0) && F("unsupported-profile", "More than four bone influences are not supported and will not be truncated.");
		let d = Fr(t, o.POSITION, "POSITION"), f = Fr(t, o.JOINTS_0, "JOINTS_0"), p = Fr(t, o.WEIGHTS_0, "WEIGHTS_0");
		(d.componentType !== 5126 || d.type !== "VEC3") && F("unsupported-profile", "POSITION must be FLOAT VEC3."), (![5121, 5123].includes(f.componentType) || f.type !== "VEC4") && F("unsupported-profile", "JOINTS_0 must be unsigned VEC4.");
		let m = p.componentType === 5126, h = (p.componentType === 5121 || p.componentType === 5123) && p.normalized === !0;
		(!m && !h || p.type !== "VEC4") && F("unsupported-profile", "WEIGHTS_0 must be FLOAT or normalized unsigned VEC4.");
		let g = Hr(d.count, "POSITION.count");
		(g !== Hr(f.count, "JOINTS_0.count") || g !== Hr(p.count, "WEIGHTS_0.count")) && F("missing-data", "Skin attributes must have matching vertex counts.");
		let _ = Mr(r, n, f, g, 4, f.componentType === 5121 ? "uint8" : "uint16"), v = Mr(r, n, p, g, 4, p.componentType === 5121 ? "uint8" : p.componentType === 5123 ? "uint16" : "float32", h);
		for (let e = 0; e < g; e += 1) {
			let t = v[e], n = _[e], r = t.reduce((e, t) => e + t, 0), a = Math.abs(1 - r);
			(t.some((e) => e < 0 || e > 1) || a > 1e-4) && F("unsupported-profile", `Vertex ${e} skin weights are outside the normalized profile.`);
			let o = t.filter((e) => e > 1e-8).length;
			o === 0 && F("unsupported-profile", `Vertex ${e} has no effective bone influence.`);
			for (let r = 0; r < 4; r += 1) t[r] > 1e-8 && n[r] >= i && F("missing-data", `Vertex ${e} references a joint outside the skin.`);
			c = Math.max(c, o), l = Math.max(l, a);
		}
		s += g;
	}
	return {
		vertexCount: s,
		payloadMaxInfluences: c,
		maxWeightSumError: l
	};
}
function kr(e, t, n, r) {
	let i = Br(e.samplers), a = Br(e.channels);
	(i.length === 0 || a.length === 0) && F("missing-data", `Animation ${t} has no samplers or channels.`);
	for (let [e, o] of a.entries()) {
		let a = i[Hr(o.sampler, `animation ${t} channel ${e}.sampler`)];
		a || F("missing-data", `Animation ${t} channel ${e} has an invalid sampler.`);
		let s = a.interpolation ?? "LINEAR";
		s !== "LINEAR" && s !== "STEP" && F("unsupported-profile", "Only LINEAR and STEP skeletal animation are supported.");
		let c = Fr(r, a.input, "animation input"), l = Fr(r, a.output, "animation output");
		(c.componentType !== 5126 || c.type !== "SCALAR" || Hr(c.count, "animation input.count") !== Hr(l.count, "animation output.count")) && F("unsupported-profile", "Animation input/output samples must be matching FLOAT accessors.");
		let u = Vr(o.target, `animation ${t} channel ${e}.target`);
		(!Number.isInteger(u.node) || !n.includes(u.node)) && F("unsupported-profile", "Animation channels may target skin joints only.");
		let d = u.path === "rotation" ? "VEC4" : u.path === "translation" || u.path === "scale" ? "VEC3" : null;
		(!d || l.componentType !== 5126 || l.type !== d) && F("unsupported-profile", "Animation channels must contain ordinary bone TRS tracks.");
	}
	return typeof e.name == "string" && e.name.trim() ? e.name : `Animation_${t}`;
}
function Ar(e) {
	e.byteLength < 20 && F("invalid-container", "GLB header or JSON chunk is incomplete.");
	let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
	(t.getUint32(0, !0) !== xr || t.getUint32(4, !0) !== 2 || t.getUint32(8, !0) !== e.byteLength) && F("invalid-container", "Invalid GLB 2 container header.");
	let n = 12, r = null, i = null;
	for (; n < e.byteLength;) {
		n + 8 > e.byteLength && F("invalid-container", "GLB chunk header is truncated.");
		let a = t.getUint32(n, !0), o = t.getUint32(n + 4, !0);
		n += 8, (a % 4 != 0 || n + a > e.byteLength) && F("invalid-container", "GLB chunk length is invalid."), o === Sr ? (r && F("invalid-container", "GLB contains more than one JSON chunk."), r = e.subarray(n, n + a)) : o === Cr && (i && F("invalid-container", "GLB contains more than one binary chunk."), i = e.subarray(n, n + a)), n += a;
	}
	(!r || !i || i.byteLength === 0) && F("missing-data", "A self-contained skeletal GLB requires JSON and binary chunks.");
	try {
		let e = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(r).trim());
		return Gr(e) || F("invalid-container", "GLB JSON root must be an object."), {
			document: e,
			binaryBytes: i
		};
	} catch (e) {
		if (e instanceof we) throw e;
		F("invalid-container", "GLB JSON chunk is not valid UTF-8 JSON.");
	}
}
function jr(e, t, n, r) {
	let i = t[Hr(n.bufferView, "inverseBindMatrices.bufferView")], a = i.byteOffset === void 0 ? 0 : Hr(i.byteOffset, "inverseBindMatrices bufferView.byteOffset"), o = n.byteOffset === void 0 ? 0 : Hr(n.byteOffset, "inverseBindMatrices accessor.byteOffset"), s = i.byteStride === void 0 ? 64 : Hr(i.byteStride, "inverseBindMatrices bufferView.byteStride");
	(s < 64 || a + o + Math.max(0, r - 1) * s + 64 > e.byteLength) && F("missing-data", "Inverse bind matrix bytes exceed the embedded buffer.");
	let c = new DataView(e.buffer, e.byteOffset, e.byteLength);
	return Array.from({ length: r }, (e, t) => Array.from({ length: 16 }, (e, n) => {
		let r = c.getFloat32(a + o + t * s + n * 4, !0);
		return Number.isFinite(r) || F("invalid-container", "Inverse bind matrices contain a non-finite value."), r;
	}));
}
function Mr(e, t, n, r, i, a, o = !1) {
	let s = t[Hr(n.bufferView, "skin accessor.bufferView")], c = s.byteOffset === void 0 ? 0 : Hr(s.byteOffset, "skin bufferView.byteOffset"), l = n.byteOffset === void 0 ? 0 : Hr(n.byteOffset, "skin accessor.byteOffset"), u = a === "uint8" ? 1 : a === "uint16" ? 2 : 4, d = u * i, f = s.byteStride === void 0 ? d : Hr(s.byteStride, "skin bufferView.byteStride");
	(f < d || c + l + Math.max(0, r - 1) * f + d > e.byteLength) && F("missing-data", "Skin attribute bytes exceed the embedded buffer.");
	let p = new DataView(e.buffer, e.byteOffset, e.byteLength);
	return Array.from({ length: r }, (e, t) => Array.from({ length: i }, (e, n) => {
		let r = c + l + t * f + n * u, i = a === "uint8" ? p.getUint8(r) : a === "uint16" ? p.getUint16(r, !0) : p.getFloat32(r, !0);
		return o ? i / (a === "uint8" ? 255 : 65535) : i;
	}));
}
function Nr(e, t) {
	for (let [n, r] of e.entries()) r.buffer !== 0 && F("missing-data", `bufferView ${n} does not reference the embedded buffer.`), (r.byteOffset === void 0 ? 0 : Hr(r.byteOffset, `bufferView ${n}.byteOffset`)) + Hr(r.byteLength, `bufferView ${n}.byteLength`) > t && F("missing-data", `bufferView ${n} exceeds the embedded buffer.`);
}
function Pr(e, t) {
	(!Number.isInteger(e.bufferView) || !t[e.bufferView]) && F("missing-data", "Accessor has no valid embedded bufferView.");
}
function Fr(e, t, n) {
	let r = e[Hr(t, n)];
	return r || F("missing-data", `${n} does not reference an accessor.`), r;
}
function Ir(e) {
	let t = [];
	return e.traverse((e) => {
		e instanceof Et && t.push(e);
	}), t;
}
function Lr(e) {
	e.traverse((e) => {
		e instanceof M && (e.material = Array.isArray(e.material) ? e.material.map((e) => e.clone()) : e.material.clone());
	});
}
function Rr(e) {
	let t = /* @__PURE__ */ new Set();
	e.traverse((e) => {
		e instanceof M && (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => t.add(e));
	}), t.forEach((e) => e.dispose());
}
function zr(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
	e.traverse((e) => {
		e instanceof M && (t.add(e.geometry), (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
			n.add(e), Object.values(e).forEach((e) => {
				Gr(e) && "isTexture" in e && r.add(e);
			});
		}));
	}), r.forEach((e) => e.dispose()), n.forEach((e) => e.dispose()), t.forEach((e) => e.dispose());
}
function Br(e) {
	return Array.isArray(e) && e.every(Gr) ? e : [];
}
function Vr(e, t) {
	return Gr(e) || F("invalid-container", `${t} must be an object.`), e;
}
function Hr(e, t) {
	return (!Number.isInteger(e) || e < 0) && F("invalid-container", `${t} must be a non-negative integer.`), e;
}
function Ur(e, t) {
	return (!Array.isArray(e) || e.some((e) => !Number.isInteger(e) || e < 0)) && F("invalid-container", `${t} must be an array of non-negative integers.`), e;
}
function Wr(e, t) {
	return e === void 0 ? [] : ((!Array.isArray(e) || e.some((e) => typeof e != "string")) && F("invalid-container", `${t} must be an array of strings.`), e);
}
function Gr(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function F(e, t) {
	throw new we(e, t);
}
//#endregion
//#region src/assets/RootMotionPolicy.ts
var Kr = class extends Error {
	constructor(e) {
		super(e), this.name = "RootMotionPolicyError";
	}
};
function qr(e) {
	let { motionKind: t, rootMotionMode: n, actorMotionPayload: r } = e;
	if (t !== "ordinary_bones" && t !== "baked_bones") throw new Kr(`Unsupported source motion kind ${String(t)}.`);
	if (n === "baked_actor_track") throw r == null ? new Kr("baked_actor_track requires an Actor motion payload.") : new Kr("baked_actor_track requires the unavailable physics-free snapshot Actor-track adapter.");
	if (r !== null) throw new Kr(`${n} must not include an Actor motion payload.`);
	if (n === "in_place") return {
		motionKind: t,
		rootMotionMode: n,
		strategy: "source_verified_in_place",
		appliesActorMotion: !1
	};
	if (n !== "in_bone") throw new Kr(`Unsupported root motion mode ${String(n)}.`);
	return {
		motionKind: t,
		rootMotionMode: n,
		strategy: "bone_pose_only",
		appliesActorMotion: !1
	};
}
var Jr = [{
	id: "synthetic-mask-v1",
	sourceKind: "synthetic",
	materialProfile: "WebMaskPBR-v1",
	sourceMasterPath: "/Game/Fixture/M_WebMaskPBR.M_WebMaskPBR",
	graphFingerprint: "c49e78d2833815ed1ec98db08478b36b546587d55d65fc0967859e2d2b357659",
	expressionSignature: "web-mask-pbr-v1/base-plus-ordered-mask-layers",
	parameterBindings: [
		{
			sourceName: "BaseColor",
			target: "baseColorLinear"
		},
		{
			sourceName: "Metallic",
			target: "metallic"
		},
		{
			sourceName: "Roughness",
			target: "roughness"
		},
		{
			sourceName: "EmissiveColor",
			target: "emissiveLinear"
		},
		{
			sourceName: "OpacityMaskClipValue",
			target: "alphaCutoff"
		},
		{
			sourceName: "TwoSided",
			target: "doubleSided"
		},
		{
			sourceName: "UseVertexColor",
			target: "vertexColorMultiply"
		}
	]
}];
//#endregion
//#region src/assets/AnimationClipBinding.ts
function Yr(e) {
	return async (t) => {
		if (t.playback.clipAsset === null) return null;
		let r = t.playback.clipAsset;
		return Xr(await n(e, r.assetId, r.revisionPolicy === "pinned" ? r.revisionId : void 0), t, r);
	};
}
function Xr(e, t, n) {
	let r = e.assets.find((e) => e.id === n.assetId);
	if (!r || r.kind !== "AnimationSequence") throw Error(`Unknown AnimationSequence asset ${n.assetId}.`);
	let i = n.revisionPolicy === "pinned" ? n.revisionId : r.currentRevisionId;
	if (!i) throw Error(`AnimationSequence ${r.id} has no resolvable revision.`);
	let a = e.revisions.find((e) => e.id === i && e.assetId === r.id);
	if (!a) throw Error(`Unknown revision ${i} for AnimationSequence ${r.id}.`);
	if (a.blobKeys.length === 0 || a.blobKeys.some((t) => !e.blobs.some((e) => e.key === t))) throw Error(`AnimationSequence ${r.id} has missing payload bytes.`);
	let o = Zr(a.metadata.animation, `AnimationSequence ${r.id} metadata`), s = $r(o.skeletonAssetId, "animation.skeletonAssetId");
	if (s !== t.skinBinding.skeletonAsset.assetId) throw Error(`AnimationSequence ${r.id} targets Skeleton ${s}, not ${t.skinBinding.skeletonAsset.assetId}.`);
	let c = Qr(o.targets, "animation.targets").filter((e) => e.meshAssetId === t.meshAsset.assetId);
	if (c.length !== 1) throw Error(`AnimationSequence ${r.id} has no unique target for SkeletalMesh ${t.meshAsset.assetId}.`);
	let l = c[0], u = $r(l.bindingSignature, "animation.target.bindingSignature");
	if (u !== t.skinBinding.bindingSignature) throw Error(`AnimationSequence ${r.id} binding signature does not match ${t.meshAsset.assetId}.`);
	let d = ei(Zr(l.payload, "animation.target.payload").animationIndex, "animation.target.payload.animationIndex"), f = $r(l.clipName, "animation.target.clipName"), p = ti(o.durationSeconds, "animation.durationSeconds"), m = ni(o.rootMotionMode, [
		"in_bone",
		"in_place",
		"baked_actor_track"
	], "animation.rootMotionMode"), h = ni(o.motionKind, ["ordinary_bones", "baked_bones"], "animation.motionKind"), g = qr({
		motionKind: h,
		rootMotionMode: m,
		actorMotionPayload: o.actorMotionPayload
	});
	if (t.playback.rootMotionMode !== m) throw Error(`AnimationSequence ${r.id} root motion ${m} does not match Component ${t.id} mode ${t.playback.rootMotionMode}.`);
	if (!r.dependencies.some((e) => e.assetId === t.meshAsset.assetId) || !r.dependencies.some((e) => e.assetId === t.skinBinding.skeletonAsset.assetId)) throw Error(`AnimationSequence ${r.id} is missing exact mesh or Skeleton dependencies.`);
	return {
		animationAssetId: r.id,
		animationRevisionId: a.id,
		animationBlobKeys: [...a.blobKeys],
		clipIndex: d,
		clipName: f,
		durationSeconds: p,
		rootMotionMode: m,
		sourceMotionKind: h,
		rootMotionStrategy: g.strategy,
		appliesActorMotion: g.appliesActorMotion,
		targetMeshAssetId: t.meshAsset.assetId,
		bindingSignature: u
	};
}
function Zr(e, t) {
	if (typeof e != "object" || !e || Array.isArray(e)) throw Error(`${t} must be an object.`);
	return e;
}
function Qr(e, t) {
	if (!Array.isArray(e) || e.some((e) => typeof e != "object" || !e || Array.isArray(e))) throw Error(`${t} must be an object array.`);
	return e;
}
function $r(e, t) {
	if (typeof e != "string" || e.length === 0) throw Error(`${t} must be a non-empty string.`);
	return e;
}
function ei(e, t) {
	if (!Number.isInteger(e) || Number(e) < 0) throw Error(`${t} must be a non-negative integer.`);
	return Number(e);
}
function ti(e, t) {
	if (typeof e != "number" || !Number.isFinite(e) || e < 0) throw Error(`${t} must be finite and non-negative.`);
	return e;
}
function ni(e, t, n) {
	if (typeof e != "string" || !t.includes(e)) throw Error(`${n} is unsupported.`);
	return e;
}
//#endregion
//#region src/assets/SeparateAnimationPayload.ts
async function ri(e, t, n, r) {
	let i = await wr(n);
	try {
		let a = (e) => {
			let t = new DataView(e.buffer, e.byteOffset, e.byteLength).getUint32(12, !0), n = JSON.parse(new TextDecoder().decode(e.subarray(20, 20 + t)));
			return JSON.stringify({
				nodes: n.nodes,
				skins: n.skins
			});
		};
		if (a(t) !== a(n) || JSON.stringify(e.metadata.inverseBindMatrices) !== JSON.stringify(i.metadata.inverseBindMatrices)) throw Error("Separate Animation payload requires identical node/skin bindings and inverse bind matrices.");
		let o = i.instantiate();
		try {
			let t = o.clips[r.clipIndex];
			if (!t || t.name !== r.clipName || Math.abs(t.duration - r.durationSeconds) > 1e-5) throw Error("Player clip payload/name/duration mismatch.");
			let n = e.instantiate();
			try {
				for (let e of t.tracks) {
					let t = e.name.slice(0, e.name.lastIndexOf(".")), r = 0;
					if (n.root.traverse((e) => {
						e.name === t && (r += 1);
					}), r !== 1) throw Error("Separate Animation track has no unique named target.");
				}
			} finally {
				n.dispose();
			}
			let i = o.clips.map((e) => e.clone());
			return {
				metadata: e.metadata,
				instantiate: () => ({
					...e.instantiate(),
					clips: i
				}),
				dispose: () => {}
			};
		} finally {
			o.dispose();
		}
	} finally {
		i.dispose();
	}
}
//#endregion
//#region src/assets/SkeletalMeshResourceCache.ts
var ii = class {
	storage;
	loadAsset;
	entries = /* @__PURE__ */ new Map();
	aliases = /* @__PURE__ */ new Map();
	pendingResolutions = /* @__PURE__ */ new Map();
	constructor(e, t = wr) {
		this.storage = e, this.loadAsset = t;
	}
	async acquire(e) {
		let t = `${e.assetId}@${e.revisionPolicy === "pinned" ? e.revisionId : "live"}`, n = this.aliases.get(t);
		if (n) return this.acquireEntry(n);
		let r = this.pendingResolutions.get(t);
		r || (r = this.resolve(e), this.pendingResolutions.set(t, r));
		let i;
		try {
			i = await r;
		} finally {
			this.pendingResolutions.delete(t);
		}
		let a = `${i.assetId}@${i.revisionId}`;
		return this.aliases.set(t, a), this.acquireEntry(a, i);
	}
	entryCount() {
		return this.entries.size;
	}
	async playbackAsset(e, t) {
		if (t.animationBlobKeys.length !== 1) throw Error("Animation playback requires exactly one payload.");
		if (t.animationBlobKeys[0] === e.blobKey) {
			let n = e.asset.instantiate();
			try {
				let e = n.clips[t.clipIndex];
				if (!e || e.name !== t.clipName || Math.abs(e.duration - t.durationSeconds) > 1e-5) throw Error("Player clip payload/name/duration mismatch.");
			} finally {
				n.dispose();
			}
			return e.asset;
		}
		let r = await n(this.storage, e.assetId, e.revisionId), i = await n(this.storage, t.animationAssetId, t.animationRevisionId), a = r.blobs.find((t) => t.key === e.blobKey), o = i.blobs.find((e) => e.key === t.animationBlobKeys[0]);
		if (!a || !o) throw Error("Missing separate Animation payload.");
		return ri(e.asset, a.bytes, o.bytes, t);
	}
	async resolve(e) {
		let t = await n(this.storage, e.assetId, e.revisionPolicy === "pinned" ? e.revisionId : void 0), r = this.storage.snapshotCatalog ? {
			...await this.storage.snapshotCatalog(),
			blobs: t.blobs
		} : t, i = r.assets.find((t) => t.id === e.assetId);
		if (!i || i.kind !== "SkeletalMesh") throw Error(`Unknown SkeletalMesh asset ${e.assetId}.`);
		let a = e.revisionPolicy === "pinned" ? e.revisionId : i.currentRevisionId;
		if (!a) throw Error(`Asset ${e.assetId} has no resolvable revision.`);
		let o = r.revisions.find((e) => e.id === a && e.assetId === i.id);
		if (!o) throw Error(`Unknown revision ${a} for asset ${i.id}.`);
		let s = r.blobs.find((e) => e.key === o.blobKeys[0]);
		if (!s) throw Error(`Missing blob for asset ${i.id} revision ${o.id}.`);
		return {
			assetId: i.id,
			revisionId: o.id,
			blobKey: s.key,
			bytes: s.bytes,
			materialSlotIds: ai(o.metadata.materialSlots),
			attachmentProfile: oi(r, o.metadata.skeletalMesh)
		};
	}
	async acquireEntry(e, t) {
		let n = this.entries.get(e);
		if (!n) {
			if (!t) throw Error(`Skeletal resource cache alias ${e} has no live entry.`);
			let r = this.loadAsset(t.bytes).then((t) => {
				let n = this.entries.get(e);
				return n && (n.asset = t), (!n || n.leases === 0) && (t.dispose(), this.entries.delete(e)), t;
			}).catch((t) => {
				throw this.entries.delete(e), t;
			});
			n = {
				leases: 0,
				asset: null,
				blobKey: t.blobKey,
				materialSlotIds: t.materialSlotIds,
				attachmentProfile: t.attachmentProfile,
				promise: r
			}, this.entries.set(e, n);
		}
		n.leases += 1;
		let r = await n.promise, i = e.lastIndexOf("@"), a = !1;
		return {
			assetId: e.slice(0, i),
			revisionId: e.slice(i + 1),
			blobKey: n.blobKey,
			materialSlotIds: n.materialSlotIds,
			attachmentProfile: n.attachmentProfile,
			asset: r,
			release: () => {
				a || (a = !0, this.release(e));
			}
		};
	}
	release(e) {
		let t = this.entries.get(e);
		if (t && (t.leases = Math.max(0, t.leases - 1), t.leases === 0 && t.asset)) {
			t.asset.dispose(), this.entries.delete(e);
			for (let [t, n] of this.aliases) n === e && this.aliases.delete(t);
		}
	}
};
function ai(e) {
	return Array.isArray(e) ? e.flatMap((e) => typeof e == "object" && e && typeof e.slotId == "string" ? [e.slotId] : []) : [];
}
function oi(e, t) {
	if (typeof t != "object" || !t || Array.isArray(t)) return null;
	let n = ci(t, "SkeletalMesh attachment metadata");
	if (typeof n.skeletonAssetId != "string" || typeof n.sourceSkeletonAssetId != "string" || typeof n.bindingSignature != "string" || !Array.isArray(n.jointMappings)) return null;
	let r = ui(n.skeletonAssetId, "skeletonAssetId"), i = e.assets.find((e) => e.id === r && e.kind === "Skeleton"), a = e.revisions.find((e) => e.id === i?.currentRevisionId && e.assetId === r);
	if (!a) return null;
	let o = ci(a.metadata.skeleton, "Skeleton attachment metadata");
	return {
		skeletonAssetId: r,
		sourceSkeletonAssetId: ui(n.sourceSkeletonAssetId, "sourceSkeletonAssetId"),
		bindingSignature: di(n.bindingSignature, "bindingSignature"),
		skinIndex: fi(n.skinIndex, "skinIndex"),
		jointMappings: li(n.jointMappings, "jointMappings").map((e) => {
			let t = ci(e, "jointMapping");
			return {
				sourceBoneId: ui(t.sourceBoneId, "jointMapping.sourceBoneId"),
				payloadNodeIndex: fi(t.payloadNodeIndex, "jointMapping.payloadNodeIndex")
			};
		}),
		bones: li(o.bones, "skeleton.bones").map((e) => {
			let t = ci(e, "bone");
			return {
				id: ui(t.id, "bone.id"),
				parentId: t.parentId === null ? null : ui(t.parentId, "bone.parentId"),
				restLocal: si(t.restLocal, "bone.restLocal")
			};
		}),
		sockets: li(o.sockets, "skeleton.sockets").map((e) => {
			let t = ci(e, "socket");
			return {
				id: ui(t.id, "socket.id"),
				boneId: ui(t.boneId, "socket.boneId"),
				transform: si(t.transform, "socket.transform")
			};
		})
	};
}
function si(e, t) {
	let n = ci(e, t), r = pi(n.position, 3, `${t}.position`), i = pi(n.rotation, 4, `${t}.rotation`), a = pi(n.scale, 3, `${t}.scale`);
	return {
		position: [
			r[0],
			r[1],
			r[2]
		],
		rotation: [
			i[0],
			i[1],
			i[2],
			i[3]
		],
		scale: [
			a[0],
			a[1],
			a[2]
		]
	};
}
function ci(e, t) {
	if (typeof e != "object" || !e || Array.isArray(e)) throw Error(`${t} must be an object.`);
	return e;
}
function li(e, t) {
	if (!Array.isArray(e)) throw Error(`${t} must be an array.`);
	return e;
}
function ui(e, t) {
	if (typeof e != "string" || !e) throw Error(`${t} must be a non-empty string.`);
	return e;
}
function di(e, t) {
	let n = ui(e, t);
	if (!/^[0-9a-f]{64}$/u.test(n)) throw Error(`${t} must be a SHA-256 value.`);
	return n;
}
function fi(e, t) {
	if (!Number.isInteger(e) || Number(e) < 0) throw Error(`${t} must be a non-negative integer.`);
	return Number(e);
}
function pi(e, t, n) {
	if (!Array.isArray(e) || e.length !== t || e.some((e) => typeof e != "number" || !Number.isFinite(e))) throw Error(`${n} must contain ${t} finite numbers.`);
	return e;
}
//#endregion
//#region src/assets/SkeletalAttachmentRig.ts
var mi = class {
	profile;
	bones = /* @__PURE__ */ new Map();
	sockets = /* @__PURE__ */ new Map();
	constructor(e, t) {
		if (this.profile = t, t.skinIndex !== 0) throw Error(`Unsupported skeletal attachment skin index ${t.skinIndex}.`);
		let n = new Set(t.bones.map(({ id: e }) => e));
		if (n.size !== t.bones.length) throw Error("Skeletal attachment profile has duplicate source bones.");
		if (t.jointMappings.some(({ sourceBoneId: e }) => !n.has(e))) throw Error("Skeletal attachment joint mapping references an unknown source bone.");
		let r = e.skinnedMeshes[0]?.skeleton.bones;
		if (!r) throw Error("Skeletal attachment rig requires a decoded skin.");
		t.jointMappings.forEach((e, t) => {
			let n = r[t];
			if (!n) throw Error(`Missing payload joint ${e.payloadNodeIndex} for source bone ${e.sourceBoneId}.`);
			if (this.bones.has(e.sourceBoneId)) throw Error(`Duplicate source bone mapping ${e.sourceBoneId}.`);
			this.bones.set(e.sourceBoneId, n), n.userData.sourceBoneId = e.sourceBoneId;
		});
		let i = t.bones.filter(({ id: e }) => !this.bones.has(e));
		for (; i.length > 0;) {
			let t = i.findIndex(({ parentId: e }) => e === null || this.bones.has(e));
			if (t < 0) throw Error("Skeletal attachment bone hierarchy cannot be resolved.");
			let [n] = i.splice(t, 1), r = new St();
			r.name = `BoneAnchor:${n.id}`, r.userData.sourceBoneId = n.id, hi(r, n.restLocal), (n.parentId === null ? e.root : this.bones.get(n.parentId)).add(r), this.bones.set(n.id, r);
		}
		for (let e of t.sockets) {
			let t = this.bones.get(e.boneId);
			if (!t) throw Error(`Socket ${e.id} references unavailable source bone ${e.boneId}.`);
			if (this.sockets.has(e.id)) throw Error(`Duplicate socket ${e.id}.`);
			let n = new St();
			n.name = `SocketAnchor:${e.id}`, n.userData.sourceSocketId = e.id, hi(n, e.transform), t.add(n), this.sockets.set(e.id, n);
		}
		e.root.updateWorldMatrix(!0, !0);
	}
	anchor(e, t) {
		let n = e === "bone" ? this.bones.get(t) : this.sockets.get(t);
		if (!n) throw Error(`Unknown ${e} attachment target ${t}.`);
		return n;
	}
};
function hi(e, t) {
	e.position.fromArray(t.position), e.quaternion.fromArray(t.rotation), e.scale.fromArray(t.scale);
}
//#endregion
//#region src/player/PlayerSkeletal.ts
async function gi(e, t) {
	let n = new Ae();
	await n.importSnapshot(t);
	let r = new ii(n);
	for (let n of e.actors) for (let i of n.components) {
		if (i.type !== "SkeletalMesh") continue;
		let a = await r.acquire(i.meshAsset);
		try {
			let o = a.attachmentProfile;
			if (!o || o.skeletonAssetId !== i.skinBinding.skeletonAsset.assetId || o.sourceSkeletonAssetId !== i.sourceBinding.sourceSkeletonAssetId || o.bindingSignature !== i.skinBinding.bindingSignature || o.skinIndex !== i.skinBinding.skinIndex) throw Error(`Player skeletal binding mismatch: ${i.id}`);
			let s = t.revisions.find((e) => e.assetId === o.skeletonAssetId)?.metadata.skeleton;
			if (o.skinIndex !== 0 || s?.sourceAssetId !== o.sourceSkeletonAssetId) throw Error("Player skin index/source Skeleton mismatch.");
			if (JSON.stringify(o.jointMappings.map((e) => e.payloadNodeIndex)) !== JSON.stringify(a.asset.metadata.jointNodeIndices)) throw Error("Player joint mapping differs from GLB skin.");
			let c = a.asset.instantiate();
			try {
				let s = new mi(c, o);
				for (let t of e.actors.flatMap((e) => e.components).filter(T)) {
					let e = t.attachmentParent;
					e?.actorId === n.id && e.componentId === i.id && (e.kind === "bone" || e.kind === "socket") && s.anchor(e.kind, e.targetId);
				}
				if (i.playback.clipAsset) {
					let e = Xr(t, i, i.playback.clipAsset);
					await r.playbackAsset(a, e);
				}
			} finally {
				c.dispose();
			}
		} finally {
			a.release();
		}
	}
}
//#endregion
//#region src/player/PlayerScene.ts
function _i(e, t = !1, n = !1) {
	let r = e.authoring.ueImport;
	if (r) {
		let t = new Set(e.actors.map((e) => e.id)), n = new Map(e.actors.flatMap((e) => e.components.map((e) => [e.id, e]))), i = new Set(e.authoring.folders.map((e) => e.id));
		for (let [e, a] of [
			[r.sourceActorIds, t],
			[r.sourceComponentIds, new Set(n.keys())],
			[r.sourceFolderIds, i]
		]) {
			let t = Object.values(e);
			if (new Set(t).size !== t.length || t.some((e) => !a.has(e))) throw Error("Invalid Player imported source map.");
		}
		let a = /* @__PURE__ */ new Set();
		for (let e of r.components) {
			let t = n.get(e.webId), i = e.sourceKind === "SceneContainer" ? "SceneNode" : e.sourceKind === "InstancedStaticMesh" ? "StaticMesh" : e.sourceKind;
			if (!t || t.type !== i || a.has(e.webId) || r.sourceComponentIds[e.sourceId] !== e.webId) throw Error("Unsupported or inconsistent Player imported Component.");
			if (e.instances.length && e.sourceKind !== "InstancedStaticMesh") throw Error("Player instance records require InstancedStaticMesh.");
			let o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
			for (let t of e.instances) {
				if (!t.sourceId || o.has(t.sourceId) || !Number.isSafeInteger(t.sourceIndex) || t.sourceIndex < 0 || s.has(t.sourceIndex) || t.worldMatrix.some((e) => !Number.isFinite(e))) throw Error("Invalid Player instance identity/index/matrix.");
				o.add(t.sourceId), s.add(t.sourceIndex), Le(be(t.transform));
			}
			a.add(e.webId);
		}
		if (Object.values(r.sourceComponentIds).some((e) => !a.has(e))) throw Error("Missing Player imported Component metadata.");
	}
	let i = [];
	for (let a of e.actors) {
		let o = nt(a), s = o.type === "SceneNode" ? [
			"EmptyActor",
			"UE:SceneContainer",
			"UE:StaticCandidate"
		] : o.type === "StaticMesh" ? [
			"StaticMeshActor",
			"UE:StaticMesh",
			"UE:InstancedStaticMesh",
			"UE:StaticCandidate"
		] : o.type === "SkeletalMesh" ? ["UE:SkeletalMesh"] : o.type.endsWith("Light") || o.type === "PlayerStart" ? [`${o.type}Actor`] : ["PrimitiveCubeActor"], c = [
			"EmptyActor",
			"PrimitiveCubeActor",
			"StaticMeshActor",
			"UE:StaticMesh",
			"UE:InstancedStaticMesh",
			"UE:StaticCandidate",
			"UE:SceneContainer"
		].includes(a.classId) && [
			"SceneNode",
			"StaticMesh",
			"PrimitiveCube"
		].includes(o.type);
		if (!s.includes(a.classId) && !c && !(n && o.type === "Camera" && a.classId === "CameraActor")) throw Error(`Player profile does not support ${a.classId}.`);
		for (let o of a.components.filter(T)) {
			if (o.id !== a.rootComponentId && !o.parentComponentId) throw Error("Player additional components must have an explicit parent.");
			if (![
				"SceneNode",
				"TwinMetadata",
				"StaticMesh",
				"SkeletalMesh",
				"PrimitiveCube",
				"DirectionalLight",
				"PointLight",
				"SpotLight",
				"PlayerStart"
			].includes(o.type) && !(n && o.type === "Camera")) throw Error(`Unsupported Player Component ${o.type}.`);
			let s = Le(Ke(e, {
				actorId: a.id,
				componentId: o.id
			})), c = r?.components.find((e) => e.webId === o.id);
			if (o.type === "TwinMetadata" || o.type === "SceneNode" || n && o.type === "Camera" || !t && c?.visible === !1) continue;
			let l = c?.sourceKind === "InstancedStaticMesh" ? c.instances : [void 0];
			for (let e of l) {
				let n = e ? Le(je(be(s), be(e.transform))) : s;
				i.push({
					...a,
					...e ? { playerInstance: {
						sourceId: e.sourceId,
						sourceIndex: e.sourceIndex,
						transform: e.transform
					} } : {},
					rootComponentId: o.id,
					components: [{
						...o,
						parentComponentId: null,
						attachmentParent: null,
						localTransform: t ? o.localTransform : n
					}]
				});
			}
			if (i.length > 1e4) throw Error("Player placement count exceeds 10000.");
		}
	}
	return i;
}
//#endregion
//#region src/ue-import/UEMaterialGoldenParity.ts
var vi = Object.freeze({
	id: "ue55-golden-mask-v1",
	sourceMasterPath: "/Game/UEQ002Golden/M_WebMaskPBR.M_WebMaskPBR",
	graphFingerprint: "ff7be11730eac587441e7e17a20e014fbd76815cc6fc4ba2721e4fda1a7000dd",
	expressionSignature: "web-mask-pbr-v1/base-plus-ordered-mask-layers",
	comparisonKind: "linear-base-color-arithmetic-not-lit-pixels"
}), yi = [...Jr.filter((e) => e.materialProfile === "WebMaskPBR-v1"), vi].map(({ id: e, graphFingerprint: t, expressionSignature: n }) => ({
	id: e,
	graphFingerprint: t,
	expressionSignature: n
}));
`${JSON.stringify(l.map((e) => e.reference))}${JSON.stringify(yi)}`;
//#endregion
//#region src/runtime/PlayerStart.ts
function bi(e, t) {
	let n = e.actors.flatMap((e) => e.components.filter((e) => e.type === "PlayerStart").map((t) => ({
		actor: e,
		component: t
	}))), r = t ? n.filter((e) => e.actor.id === t) : n;
	if (!r.length) throw Error("PlayerStart가 없습니다. 액터 배치에서 플레이어 스타트를 배치한 뒤 플레이하세요.");
	if (r.length !== 1) throw Error("PlayerStart가 여러 개입니다. 아웃라이너에서 사용할 시작점을 선택한 뒤 플레이하세요.");
	let { actor: i, component: a } = r[0], o = a, s = /* @__PURE__ */ new Set();
	for (; !s.has(o.id);) {
		if (s.add(o.id), o.attachmentParent?.kind === "bone" || o.attachmentParent?.kind === "socket") throw Error("본·소켓에 연결된 PlayerStart는 아직 지원하지 않습니다.");
		let t = o.attachmentParent?.componentId ?? o.parentComponentId, n = e.actors.flatMap((e) => e.components).filter(T).find((e) => e.id === t);
		if (!n) break;
		o = n;
	}
	return Le(Ke(e, {
		actorId: i.id,
		componentId: a.id
	}));
}
//#endregion
//#region src/player/WebLodDependencies.ts
async function xi(e, t, n, r) {
	if (t.metadata.webLod === void 0) return e.dependencies;
	let i = t.metadata.webLod;
	if (!i || i.profile !== "web-visual-lod-v1" || !r || typeof i.sourceAssetId != "string" || typeof i.sourceRevisionId != "string" || typeof i.sourceRevisionHash != "string" || await k(r.levels[0]) !== i.sourceHash || await k(r.levels[1]) !== i.farHash) throw Error("Player: invalid web LOD source/hash binding.");
	let a = e.dependencies.filter((e) => e.assetId !== i.sourceAssetId);
	if (a.length !== e.dependencies.length) {
		let e = n.assets.find((e) => e.id === i.sourceAssetId), t = n.revisions.find((e) => e.assetId === i.sourceAssetId && e.id === i.sourceRevisionId);
		if (e?.kind !== "StaticMesh" || !t || t.contentHash !== i.sourceRevisionHash || t.blobKeys.length !== 1 || ![i.sourceHash, `sha256:${String(i.sourceHash)}`].includes(t.blobKeys[0])) throw Error("Player: missing web LOD authoring source revision.");
	}
	return a;
}
new TextEncoder(), r.import.singlePayloadBytes, r.player.templateBytes, r.player.archiveBytes, r.player.archiveBytes, r.player.archiveBytes, r.backup.entries;
async function Si(e, t, n = {}) {
	return Ci(e, t, n);
}
async function Ci(e, n, r, i) {
	let a = new D(n).resolve(t(Te(e)));
	a.authoring.prefabInstances?.length && Object.assign(a.authoring, { prefabInstances: [] }), _i(a, !1, r.allowCameraMarkers);
	let o = /* @__PURE__ */ new Map(), s = (e, t) => {
		let r = n.assets.find((t) => t.id === e.assetId);
		if (!r || r.kind !== t) throw Error(`Missing or unsupported Player ${t}: ${e.assetId}`);
		let i = e.revisionPolicy === "pinned" ? e.revisionId : r.currentRevisionId;
		if (!i || o.has(r.id) && o.get(r.id) !== i) throw Error(`Conflicting Player revisions for ${r.id}.`);
		return o.set(r.id, i), i;
	};
	for (let e of a.actors) for (let t of e.components) {
		if (t.type === "SkeletalMesh") {
			for (let e of t.materialOverrides) Object.assign(e.materialAsset, {
				revisionPolicy: "pinned",
				revisionId: s(e.materialAsset, "Material")
			});
			for (let [e, n] of [
				[t.meshAsset, "SkeletalMesh"],
				[t.skinBinding.skeletonAsset, "Skeleton"],
				[t.playback.clipAsset, "AnimationSequence"]
			]) e && Object.assign(e, {
				revisionPolicy: "pinned",
				revisionId: s(e, n)
			});
			continue;
		}
		if (t.type !== "StaticMesh") continue;
		if (new Set(t.materialOverrides.map((e) => e.slotId)).size !== t.materialOverrides.length) throw Error("Player: duplicate material override slot.");
		if (!t.meshAsset) {
			if (!t.shape) throw Error(`Player: ${e.name} needs a StaticMesh.`);
			for (let e of t.materialOverrides) {
				if (e.slotId !== "mesh:0/primitive:0") throw Error("Player: invalid built-in material slot.");
				Object.assign(e.materialAsset, {
					revisionPolicy: "pinned",
					revisionId: s(e.materialAsset, "Material")
				});
			}
			continue;
		}
		let r = t.meshAsset, i = s(r, "StaticMesh");
		Object.assign(r, {
			revisionPolicy: "pinned",
			revisionId: i
		});
		let a = n.revisions.find((e) => e.id === i && e.assetId === r.assetId), o = Ce(a?.metadata.materialSlots);
		Object.assign(t, { materialOverrides: [...o.filter((e) => !t.materialOverrides.some((t) => t.slotId === e.slotId)), ...t.materialOverrides] });
		for (let e of t.materialOverrides) Object.assign(e.materialAsset, {
			revisionPolicy: "pinned",
			revisionId: s(e.materialAsset, "Material")
		});
	}
	let c = [], l = [], u = /* @__PURE__ */ new Map(), d = (e) => {
		u.has(e.key) || u.set(e.key, {
			key: e.key,
			bytes: i ? e.bytes : e.bytes.slice()
		});
	};
	for (let [e, t] of o) {
		r.signal?.throwIfAborted();
		let f = n.assets.find((t) => t.id === e), p = n.revisions.find((n) => n.id === t && n.assetId === e), m = i ? await i(e, t) : n.blobs;
		if (p && [
			"SkeletalMesh",
			"Skeleton",
			"AnimationSequence"
		].includes(f.kind)) {
			if (p.blobKeys.length !== (f.kind === "Skeleton" ? 0 : 1)) throw Error(`Unsupported Player skeletal payload count: ${e}`);
			for (let t of p.blobKeys) {
				let n = m.find((e) => e.key === t);
				if (!n || `sha256:${await k(n.bytes)}` !== t) throw Error(`Missing/corrupt Player skeletal blob: ${e}`);
				d(n);
			}
			let n, r = [];
			if (f.kind === "Skeleton") {
				let e = p.metadata.skeleton;
				if (!e || typeof e.sourceAssetId != "string") throw Error("Missing Player Skeleton descriptor.");
				n = { skeleton: Ee(e.sourceAssetId, e) };
			} else if (f.kind === "SkeletalMesh") {
				let e = p.metadata.skeletalMesh;
				if (!e || typeof e.skeletonAssetId != "string") throw Error("Missing Player skeletal binding.");
				if (!o.has(e.skeletonAssetId)) throw Error("Player mesh Skeleton is not referenced by the Component.");
				let t = p.metadata.payloadToAsset;
				if (t && JSON.stringify(t) !== JSON.stringify([
					1,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					1
				])) throw Error("Player non-identity skeletal payloadToAsset is not supported yet.");
				r = [{ assetId: e.skeletonAssetId }], n = {
					...Er(u.get(p.blobKeys[0]).bytes),
					skeletalMesh: structuredClone(e),
					materialSlots: structuredClone(p.metadata.materialSlots ?? [])
				};
			} else {
				let e = p.metadata.animation;
				if (!e?.skeletonAssetId || e.targets?.length !== 1) throw Error("Player clip requires one explicit mesh target.");
				if (r = [{ assetId: e.skeletonAssetId }, { assetId: e.targets[0].meshAssetId }], r.some((e) => !o.has(e.assetId))) throw Error("Player clip target is outside the frozen mesh/Skeleton closure.");
				n = { animation: structuredClone(e) };
			}
			c.push({
				...f,
				currentRevisionId: t,
				dependencies: r
			}), l.push({
				...p,
				metadata: {
					...p.metadata,
					...n
				}
			});
			continue;
		}
		if (!p || p.blobKeys.length !== 1 && (f.kind !== "Material" || p.blobKeys.length !== 2 || p.metadata.appearanceOutcome !== "user-selected-approximation" || p.metadata.sourceAppearanceHash !== p.blobKeys[1])) throw Error(`Missing/unsupported Player revision ${t}.`);
		if (p.blobKeys.length === 2) {
			let e = m.find((e) => e.key === p.blobKeys[1]);
			if (!e || await k(e.bytes) !== e.key) throw Error("Corrupt Player source appearance blob.");
			pe(e.bytes), d(e);
		}
		let h = m.find(({ key: e }) => e === p.blobKeys[0]);
		if (!h || (typeof p.metadata.ueSourceAssetId == "string" ? `sha256:${await k(h.bytes)}` !== h.key : await k(h.bytes) !== p.contentHash)) throw Error(`Missing/corrupt Player blob for ${e}.`);
		let _, v = [];
		if (f.kind === "StaticMesh") {
			let t = typeof p.metadata.ueSourceAssetId == "string" || p.metadata.candidateTypedMaterials === !0, r = le(h.bytes) ? g(h.bytes) : null, i = await xi(f, p, n, r?.payload ?? null);
			if (!t && i.length) throw Error(`Unsupported Player mesh dependencies: ${e}`);
			if (fe(p.metadata.payloadToAsset), _ = {
				...r?.metadata ?? pe(h.bytes),
				thumbnailDataUrl: ""
			}, t) {
				let e = p.metadata.materialSlots, t = _.materialSlots.length;
				if (!Array.isArray(e) || e.length !== t || e.some((e) => typeof e.slotId != "string") || new Set(e.map((e) => e.slotId)).size !== t) throw Error("Invalid Player imported material slots.");
				_.materialSlots = structuredClone(e), v = i;
				for (let e of v) s(e, "Material");
			}
			for (let t of a.actors) for (let n of t.components) {
				if (n.type !== "StaticMesh" || n.meshAsset?.assetId !== e) continue;
				let t = _.materialSlots.map((e) => e.slotId);
				for (let e of n.materialOverrides) if (!t.includes(e.slotId)) throw Error(`Missing Player material slot: ${e.slotId}`);
			}
		} else if (f.kind === "Material") {
			let e = Ne(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(h.bytes)));
			if (e.kind === "WebMaskPbrMaterial" && e.mappingProfileId !== "web-authored-mask-v1" && e.mappingProfileId !== "ue-painter-vertex-atlas-v1" && e.mappingProfileId !== "ue-kind-single-atlas-v1" && e.mappingProfileId !== "ue-kind-multi-atlas-v1" && e.mappingProfileId !== "ue-scqo-kind-atlas-v1" && e.mappingProfileId !== "ue-scqo-painter-atlas-v1" && !(["u01-baked-pbr-v1", "web-authored-pbr-v1"].includes(e.mappingProfileId) && e.maskLayers.length === 0) && !yi.some((t) => t.id === e.mappingProfileId)) throw Error(`Unregistered Player WebMaskPBR profile: ${e.mappingProfileId}`);
			v = We(e);
			for (let e of v) s(e, "Texture");
			_ = { material: e };
		} else if (f.kind === "Texture") {
			if (f.dependencies.length) throw Error(`Unsupported Player texture dependencies: ${e}`);
			let t = p.metadata.mimeType;
			if (t !== "image/png" && t !== "image/jpeg" && t !== "image/webp") throw Error(`Unsupported Player texture format: ${e}`);
			_ = {
				mimeType: t,
				...Fe(h.bytes, t)
			};
		} else throw Error(`Unsupported Player asset kind: ${f.kind}`);
		c.push({
			...f,
			currentRevisionId: t,
			dependencies: v
		}), l.push({
			...p,
			metadata: {
				...p.metadata,
				..._
			}
		}), d(h);
	}
	for (let e of a.actors) for (let t of e.components) {
		if (t.type === "StaticMesh" && t.shape && !t.meshAsset) {
			for (let e of t.materialOverrides) {
				let t = l.find((t) => t.assetId === e.materialAsset.assetId), n = Ne(t.metadata.material);
				if (n.kind === "WebMaskPbrMaterial") {
					if (n.vertexAtlas) throw Error("Player Atlas material requires original vertex IDs; built-in shapes are unsupported.");
					if (n.bakeBinding) throw Error("Player baked material requires its imported mesh; built-in shapes are unsupported.");
					if (Pe(n.maskLayers, e.tintOverrides), [...Object.values(n.textureViews).map((e) => e.texCoord), ...n.maskLayers.map((e) => e.mask.texCoord)].some((e) => e !== 0)) throw Error("Player built-in shape requires UV0 material.");
				} else if (e.tintOverrides.length) throw Error("Player PBR material has no tint layers.");
			}
			continue;
		}
		if (t.type !== "StaticMesh" && t.type !== "SkeletalMesh" || !t.meshAsset) continue;
		let e = l.find((e) => e.assetId === t.meshAsset.assetId), n = u.get(e.blobKeys[0]).bytes, r = le(n) ? g(n).payload.levels : [n];
		for (let n of r) {
			let r = new DataView(n.buffer, n.byteOffset, n.byteLength).getUint32(12, !0), i = JSON.parse(new TextDecoder().decode(n.subarray(20, 20 + r))), a = e.metadata.materialSlots, o = i.meshes.flatMap((e) => e.primitives);
			if (t.materialOverrides.length && (!Array.isArray(a) || a.length !== o.length || a.some((e) => !e || typeof e.slotId != "string") || new Set(a.map((e) => e.slotId)).size !== a.length)) throw Error("Invalid Player material slot mapping.");
			for (let n of t.materialOverrides) {
				let r = a.findIndex((e) => e.slotId === n.slotId);
				if (r < 0) throw Error(`Missing Player material slot: ${n.slotId}`);
				let s = c.find((e) => e.id === n.materialAsset.assetId), u = l.find((e) => e.assetId === s.id), d = Ne(u.metadata.material);
				if (d.kind === "WebMaskPbrMaterial" && d.bakeBinding) {
					if (t.type !== "StaticMesh") throw Error("Baked material requires its static mesh.");
					Be(d.bakeBinding, {
						meshAssetId: t.meshAsset.assetId,
						meshRevisionId: e.id,
						meshPayloadHash: e.contentHash,
						slotId: n.slotId,
						componentId: t.id
					});
				}
				if (d.kind === "WebMaskPbrMaterial") Pe(d.maskLayers, n.tintOverrides);
				else if (n.tintOverrides.length) throw Error("Player PBR material has no tint layers.");
				if (!s.dependencies.length) continue;
				let f = o[r].attributes;
				if (d.kind === "WebMaskPbrMaterial" && d.vertexAtlas && f.COLOR_0 === void 0) throw Error("Player Atlas material requires source vertex IDs.");
				let p = i.accessors[f.POSITION], m = d.kind === "PbrMaterial" ? [0] : [
					...Object.values(d.textureViews).map((e) => e.texCoord),
					...d.maskLayers.map((e) => e.mask.texCoord),
					...d.vertexAtlas ? [0] : []
				];
				for (let e of new Set(m)) {
					let t = i.accessors[f[`TEXCOORD_${e}`]];
					if (!t || t.type !== "VEC2" || t.count !== p?.count) throw Error(`Player textured material requires TEXCOORD_${e} at ${n.slotId}.`);
				}
			}
		}
	}
	let f = /* @__PURE__ */ new Set();
	for (let e of c) {
		let t = e.folderId, r = /* @__PURE__ */ new Set();
		for (; t !== null;) {
			if (r.has(t)) throw Error("Player content folder cycle.");
			r.add(t), f.add(t);
			let e = n.folders.find((e) => e.id === t);
			if (!e) throw Error("Missing Player content folder.");
			t = e.parentId;
		}
	}
	let p = {
		assets: c,
		revisions: l,
		blobs: [...u.values()],
		folders: n.folders.filter((e) => f.has(e.id))
	};
	return await gi(a, p), r.signal?.throwIfAborted(), {
		scene: a,
		assets: p
	};
}
//#endregion
//#region src/delivery/DeliveryAssets.ts
function wi(e, t, n, r, i, a) {
	let o = async () => {
		throw Error("Published assets are read-only");
	}, s = new Map(e.blobs.map((e) => [e.key, t.get(e.hash)])), c = p({
		...e.assets,
		blobs: []
	}, a), l = 0, u = /* @__PURE__ */ new Set(), d = {
		get reservedTextureBytes() {
			return l;
		},
		commitImport: o,
		commitRevision: o,
		commitRevisions: o,
		setCurrentRevision: o,
		createFolder: o,
		renameFolder: o,
		renameAsset: o,
		moveAsset: o,
		deleteAsset: o,
		deleteFolder: o,
		importSnapshot: o,
		snapshot: o,
		snapshotAsset: async (t, o) => {
			r.throwIfAborted();
			let d = e.assets.assets.find((e) => e.id === t), f = e.assets.revisions.find((e) => e.assetId === t && e.id === (o ?? d?.currentRevisionId));
			if (!d || !f) throw Error("Missing frozen asset revision");
			let p = [];
			for (let e of f.blobKeys) {
				let t = s.get(e);
				if (!t) throw Error("Missing asset file");
				p.push({
					key: e,
					bytes: await n.file(t, r)
				});
			}
			r.throwIfAborted();
			let m = 0;
			if (d.kind === "Skeleton") {
				let e = f.metadata.skeleton;
				if (!e?.sourceAssetId || p.length) throw Error("Invalid skeleton metadata");
				Ee(e.sourceAssetId, e);
			} else {
				let e = p[0];
				if (!e || p.length !== 1 && (d.kind !== "Material" || p.length !== 2)) throw Error("Unsupported asset payload count");
				if (d.kind === "StaticMesh") {
					fe(f.metadata.payloadToAsset);
					let t = le(e.bytes) ? g(e.bytes).payload.levels : [e.bytes];
					for (let e of t) {
						let t = pe(e), n = f.metadata.candidateTypedMaterials === !0 && Ce(f.metadata.materialSlots).length === t.materialSlots.length;
						if (f.metadata.candidateTypedMaterials === !0 && !n) throw Error("Incomplete typed material slots");
						n || (m += $e(me(e)).reservedBytes);
					}
				} else if (d.kind === "SkeletalMesh" || d.kind === "AnimationSequence") Er(e.bytes), m += $e(me(e.bytes)).reservedBytes;
				else if (d.kind === "Material") Ne(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(e.bytes))), p[1] && pe(p[1].bytes);
				else if (d.kind === "Texture") {
					let t = f.metadata.mimeType;
					if (t !== "image/png" && t !== "image/jpeg" && t !== "image/webp") throw Error("Unsupported image type");
					let n = Fe(e.bytes, t);
					if (f.metadata.width !== void 0 && f.metadata.width !== n.width || f.metadata.height !== void 0 && f.metadata.height !== n.height) throw Error("Published texture dimensions mismatch");
					let r = c.get(d.id) ?? (a?.maxSize || Infinity), i = Math.min(1, r / Math.max(n.width, n.height));
					m += Math.max(1, Math.round(n.width * i)) * Math.max(1, Math.round(n.height * i)) * 4 * (1 + 4 / 3);
				} else throw Error(`Unsupported published asset: ${d.kind}`);
			}
			if (!u.has(f.id)) {
				if (l + m > x(i, l + m, l)) throw Error("Published texture decode budget exceeded");
				l += m, u.add(f.id);
			}
			let h = d.kind === "SkeletalMesh" ? e.assets.assets.filter((e) => e.kind === "Skeleton" && d.dependencies.some((t) => t.assetId === e.id)) : [], _ = e.assets.revisions.filter((e) => h.some((t) => t.currentRevisionId === e.id));
			for (let e of _) {
				let t = e.metadata.skeleton;
				if (!t?.sourceAssetId) throw Error("Missing skeleton metadata");
				Ee(t.sourceAssetId, t);
			}
			return {
				...structuredClone({
					assets: [d, ...h],
					revisions: [f, ..._],
					folders: []
				}),
				blobs: p
			};
		},
		snapshotCatalog: async () => ({
			...structuredClone(e.assets),
			blobSizes: e.blobs.map((e) => ({
				key: e.key,
				byteLength: t.get(e.hash).bytes
			}))
		})
	};
	return _e(d, !1), d;
}
//#endregion
//#region src/delivery/LevelMetadata.ts
function Ti(e, n, r) {
	let i = e;
	if (!i || i.version !== 1 || Object.keys(i).some((e) => ![
		"assets",
		"blobs",
		"envelope",
		"version",
		"provenance"
	].includes(e)) || !Array.isArray(i.blobs) || i.blobs.length > Yn.files) throw Error("Invalid level metadata");
	let a = t(i.envelope.payload);
	if (a.actors.length !== n.actors || i.envelope.documentId !== a.id || !Number.isSafeInteger(i.envelope.revision) || i.envelope.revision < 1 || !Number.isFinite(i.envelope.savedAt)) throw Error("Level summary mismatch");
	let o = /* @__PURE__ */ new Set(), s = 0;
	for (let e of i.blobs) {
		if (!e || typeof e.key != "string" || e.key.replace(/^sha256:/, "") !== e.hash || o.has(e.key) || !r.has(e.hash) || Object.keys(e).sort().join() !== "hash,key") throw Error("Invalid blob reference");
		o.add(e.key), s += r.get(e.hash).bytes;
	}
	if (s !== n.bytes) throw Error("Level byte summary mismatch");
	if (i.provenance !== void 0 && (!i.provenance || i.provenance.kind !== "static-preview-v1" || Object.keys(i.provenance).sort().join() !== "file,kind" || !r.has(i.provenance.file))) throw Error("Invalid provenance reference");
	return xe({
		...i.assets,
		blobs: i.blobs.map((e) => ({
			key: e.key,
			bytes: /* @__PURE__ */ new Uint8Array()
		}))
	}), _i(a), {
		...i,
		envelope: {
			...i.envelope,
			payload: a
		}
	};
}
//#endregion
//#region src/delivery/ChunkReader.ts
var Ei = class {
	budget;
	values = /* @__PURE__ */ new Map();
	bytes = 0;
	constructor(e = 64 * 1024 ** 2) {
		if (this.budget = e, !Number.isSafeInteger(e) || e < 0) throw Error("Invalid cache budget");
	}
	async get(e) {
		let t = this.values.get(e);
		return t && (this.values.delete(e), this.values.set(e, t)), t?.slice();
	}
	async remove(e) {
		let t = this.values.get(e);
		t && (this.bytes -= t.length), this.values.delete(e);
	}
	async put(e, t) {
		if (await this.remove(e), !(t.length > this.budget)) {
			for (; this.bytes + t.length > this.budget;) await this.remove(this.values.keys().next().value);
			this.values.set(e, t.slice()), this.bytes += t.length;
		}
	}
};
function Di(e, t) {
	let n = new URL(e);
	if (!["http:", "https:"].includes(n.protocol) || n.username || n.password || n.search || n.hash || !n.pathname.endsWith("/")) throw Error("Invalid host storage URL");
	return {
		authorize: t,
		async read(e, t, r) {
			if (!/^(objects\/[a-f0-9]{64}|releases\/[a-f0-9]{64}\.json)$/.test(e)) throw Error("Invalid object path");
			let i = AbortSignal.any([r, AbortSignal.timeout(3e4)]), a = await fetch(new URL(e, n), {
				signal: i,
				credentials: "omit",
				redirect: "error",
				cache: "no-store"
			});
			if (a.status !== 200 || !a.body) throw Error(`Object read failed: ${a.status} ${e}`);
			let o = a.headers.get("content-length");
			if (o && (!/^\d+$/.test(o) || Number(o) > t)) throw await a.body.cancel(), Error("Object Content-Length exceeds limit");
			let s = a.body.getReader(), c = new Uint8Array(o ? Number(o) : t), l = 0;
			try {
				for (;;) {
					r.throwIfAborted();
					let { value: e, done: t } = await s.read();
					if (t) break;
					if (l + e.length > c.length) throw Error("Object stream exceeds limit");
					c.set(e, l), l += e.length;
				}
				if (o && l !== Number(o)) throw Error("Truncated object stream");
				return c.subarray(0, l);
			} finally {
				await s.cancel().catch(() => {}), s.releaseLock();
			}
		}
	};
}
var Oi = class {
	provider;
	cache;
	stats = {
		requests: 0,
		downloaded: 0,
		cacheHits: 0,
		corruptCache: 0,
		cacheFailures: 0
	};
	onProgress;
	activeReads = 0;
	waiters = [];
	async hydrateAddons(e, t) {
		if (!e.addonBundle) return;
		let n = e.files.find((t) => t.hash === e.addonBundle);
		await De(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(await this.file(n, t))));
	}
	constructor(e, t = new Ei()) {
		this.provider = e, this.cache = t;
	}
	async read(e, t, n) {
		for (; this.activeReads >= 4;) await new Promise((e, t) => {
			let r = () => {
				n.removeEventListener("abort", i), e();
			}, i = () => {
				this.waiters = this.waiters.filter((e) => e !== r), t(n.reason);
			};
			if (n.aborted) {
				t(n.reason);
				return;
			}
			this.waiters.push(r), n.addEventListener("abort", i, { once: !0 });
		});
		n.throwIfAborted(), this.activeReads++, e.startsWith("objects/") && this.stats.requests++;
		try {
			return await this.provider.read(e, t, n);
		} finally {
			this.activeReads--, this.waiters.shift()?.();
		}
	}
	async manifest(e, t) {
		if (!Xn(e)) throw Error("Invalid release pin");
		await this.provider.authorize?.(t);
		let n = await this.read(Qn(e), Yn.manifest, t);
		if (t.throwIfAborted(), n.length > Yn.manifest || await k(n) !== e) throw Error("Release hash mismatch");
		let r = nr(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(n)));
		if (await k(P(r)) !== e) throw Error("Release must use canonical encoding");
		return await this.hydrateAddons(r, t), r;
	}
	async file(e, t) {
		if (await this.provider.authorize?.(t), t.throwIfAborted(), e.bytes > Yn.file) throw Error("File allocation limit");
		let n = new Uint8Array(e.bytes), r = 0;
		for (let i of e.chunks) {
			t.throwIfAborted();
			let e;
			try {
				e = await this.cache.get(i.hash);
			} catch {
				this.stats.cacheFailures++;
				try {
					await this.cache.remove(i.hash);
				} catch {
					this.stats.cacheFailures++;
				}
			}
			if (e && (e.length !== i.bytes || await k(e) !== i.hash)) {
				e = void 0, this.stats.corruptCache++;
				try {
					await this.cache.remove(i.hash);
				} catch {
					this.stats.cacheFailures++;
				}
			}
			if (e) this.stats.cacheHits++;
			else {
				if (e = await this.read(Zn(i.hash), i.bytes, t), this.stats.downloaded += e.length, t.throwIfAborted(), e.length !== i.bytes || await k(e) !== i.hash) throw Error(`Chunk integrity failure: ${i.hash}`);
				try {
					await this.cache.put(i.hash, e);
				} catch {
					this.stats.cacheFailures++;
				}
			}
			t.throwIfAborted(), n.set(e, r), r += e.length;
			try {
				this.onProgress?.({ ...this.stats });
			} catch {}
		}
		if (r !== e.bytes || await k(n) !== e.hash) throw Error(`File integrity failure: ${e.hash}`);
		return n;
	}
	async catalogs(e, t, n) {
		let r = n ?? await this.manifest(e, t);
		if (n && await this.hydrateAddons(r, t), await k(P(r)) !== e) throw Error("Equipment release mismatch");
		let i = new Map(r.files.map((e) => [e.hash, e])), a = /* @__PURE__ */ new Map(), o = 0;
		for (let e of r.levels) {
			let n = i.get(e.hash);
			if (o += n.bytes, o > 64 * 1024 ** 2) throw Error("Equipment metadata exceeds 64 MiB");
			let s = Ti(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(await this.file(n, t))), e, i), c = r.cells?.find((t) => t.level === e.hash);
			c && Vn(s.envelope.payload, c.entries), a.set(e.hash, s.envelope.payload);
		}
		return t.throwIfAborted(), {
			equipment: yr(r, e, a),
			actors: ur(r, e, a)
		};
	}
	async equipment(e, t, n) {
		return (await this.catalogs(e, t, n)).equipment;
	}
	async actors(e, t, n) {
		return (await this.catalogs(e, t, n)).actors;
	}
	source(e, t) {
		let n = new Map(e.files.map((e) => [e.hash, e])), r = async (t, n) => {
			let r = e.levels.find((e) => e.hash === n?.assetRevision);
			if (!n || !r) throw Error("Unknown frozen level");
			return {
				pin: n,
				actors: r.actors,
				bytes: r.bytes,
				name: e.name
			};
		}, i = async (r, i = t) => {
			let a = e.levels.find((e) => e.hash === r.assetRevision);
			if (!a) throw Error("Missing level");
			return Ti(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(await this.file(n.get(a.hash), i))), a, n);
		};
		return {
			info: r,
			source: async (e) => {
				let r = await i(e), a = r.envelope.payload, o = [];
				for (let e of r.blobs) o.push({
					key: e.key,
					bytes: await this.file(n.get(e.hash), t)
				});
				let s = await Si(a, {
					...r.assets,
					blobs: o
				}, { allowCameraMarkers: !0 });
				return t.throwIfAborted(), {
					envelope: {
						...r.envelope,
						revision: e.revision,
						payload: s.scene
					},
					assets: s.assets
				};
			},
			prepared: async (e, r, a, o) => {
				let s = AbortSignal.any([t, r]), c = await i(e.pin, s);
				s.throwIfAborted(), await _r(c.envelope.payload), s.throwIfAborted();
				let l = [], u = {
					...c.assets,
					blobs: l
				};
				for (let e of u.revisions.filter((e) => u.assets.some((t) => t.kind === "Texture" && t.currentRevisionId === e.id))) if (e.metadata.width === void 0 || e.metadata.height === void 0) for (let t of e.blobKeys) {
					let e = c.blobs.find((e) => e.key === t);
					if (!e) throw Error("Missing published texture");
					l.push({
						key: t,
						bytes: await this.file(n.get(e.hash), s)
					});
				}
				let d = [se(u, !0)];
				return {
					document: c.envelope.payload,
					textureCatalog: u,
					layouts: d,
					storage: wi(c, n, this, s, a, o)
				};
			}
		};
	}
}, ki = Object.freeze({
	moveSpeedMetersPerSecond: 4,
	lookSensitivityDegreesPerUnit: .15,
	pitchLimitDegrees: 89,
	wheelSpeedMultiplier: 1.2,
	minimumMoveSpeedMetersPerSecond: .25,
	maximumMoveSpeedMetersPerSecond: 64,
	panSensitivityPerUnit: .0025,
	dollySensitivityPerUnit: .01,
	minimumPivotDistanceMeters: .05,
	maximumPivotDistanceMeters: 1e5
}), Ai = Math.PI / 180;
function I(e, t) {
	return [
		e[0] + t[0],
		e[1] + t[1],
		e[2] + t[2]
	];
}
function ji(e, t) {
	return [
		e[0] - t[0],
		e[1] - t[1],
		e[2] - t[2]
	];
}
function L(e, t) {
	return [
		e[0] * t,
		e[1] * t,
		e[2] * t
	];
}
function Mi(e) {
	let t = Math.hypot(...e);
	return t > 1e-12 ? L(e, 1 / t) : [
		0,
		0,
		0
	];
}
function Ni(e, t) {
	return [
		e[1] * t[2] - e[2] * t[1],
		e[2] * t[0] - e[0] * t[2],
		e[0] * t[1] - e[1] * t[0]
	];
}
function Pi(e, t) {
	let n = Math.cos(t), r = [
		Math.sin(e) * n,
		Math.sin(t),
		-Math.cos(e) * n
	], i = Mi(Ni(r, [
		0,
		1,
		0
	])), a = Mi(Ni(i, r)), o = [
		i[0],
		a[0],
		-r[0],
		i[1],
		a[1],
		-r[1],
		i[2],
		a[2],
		-r[2]
	];
	return O(o);
}
function Fi(e, t) {
	let [n, r, i, a] = t, [o, s, c] = e, l = 2 * (r * c - i * s), u = 2 * (i * o - n * c), d = 2 * (n * s - r * o);
	return [
		o + a * l + (r * d - i * u),
		s + a * u + (i * l - n * d),
		c + a * d + (n * u - r * l)
	];
}
function Ii(e, t, n, r = 1.15) {
	if (![
		e,
		t,
		n,
		r
	].every(Number.isFinite)) throw Error("Focus framing inputs must be finite.");
	if (e < 0 || t <= 0 || t >= 180 || n <= 0 || r < 1) throw Error("Focus framing inputs are outside their supported range.");
	let i = t * Ai, a = 2 * Math.atan(Math.tan(i / 2) * n), o = Math.min(i, a);
	return Math.max(e * r / Math.sin(o / 2), .05);
}
var Li = class {
	settings;
	state;
	yawRadians;
	pitchRadians;
	moveSpeedMetersPerSecond;
	constructor(e, t = ki) {
		if (this.settings = t, !Object.values(t).every(Number.isFinite)) throw Error("Editor camera settings must be finite.");
		if (t.moveSpeedMetersPerSecond <= 0 || t.lookSensitivityDegreesPerUnit <= 0 || t.pitchLimitDegrees <= 0 || t.pitchLimitDegrees >= 90 || t.wheelSpeedMultiplier <= 1 || t.minimumMoveSpeedMetersPerSecond <= 0 || t.maximumMoveSpeedMetersPerSecond < t.minimumMoveSpeedMetersPerSecond || t.panSensitivityPerUnit <= 0 || t.dollySensitivityPerUnit <= 0 || t.minimumPivotDistanceMeters <= 0 || t.maximumPivotDistanceMeters < t.minimumPivotDistanceMeters) throw Error("Editor camera settings are outside their supported range.");
		let n = Fi([
			0,
			0,
			-1
		], e.rotationXyzw), r = ji(e.focusPivotMeters ? [...e.focusPivotMeters] : I(e.positionMeters, L(n, 10)), e.positionMeters), i = Math.hypot(...r), a = Math.min(Math.max(i, t.minimumPivotDistanceMeters), t.maximumPivotDistanceMeters), o = i > 1e-12 ? L(r, 1 / i) : n;
		this.state = {
			positionMeters: [...e.positionMeters],
			rotationXyzw: [...e.rotationXyzw],
			focusPivotMeters: I(e.positionMeters, L(o, a))
		}, this.yawRadians = Math.atan2(n[0], -n[2]), this.pitchRadians = Math.asin(Math.min(Math.max(n[1], -1), 1)), this.moveSpeedMetersPerSecond = t.moveSpeedMetersPerSecond;
	}
	applyLookDelta(e, t) {
		if (!Number.isFinite(e) || !Number.isFinite(t)) throw Error("Editor camera look delta must be finite.");
		let n = this.settings.lookSensitivityDegreesPerUnit * Ai, r = this.settings.pitchLimitDegrees * Ai;
		return this.yawRadians += e * n, this.pitchRadians = Math.min(Math.max(this.pitchRadians - t * n, -r), r), this.state = {
			focusPivotMeters: I(this.state.positionMeters, L(Fi([
				0,
				0,
				-1
			], Pi(this.yawRadians, this.pitchRadians)), Math.min(Math.max(Math.hypot(...ji(this.state.focusPivotMeters, this.state.positionMeters)), this.settings.minimumPivotDistanceMeters), this.settings.maximumPivotDistanceMeters))),
			positionMeters: this.state.positionMeters,
			rotationXyzw: Pi(this.yawRadians, this.pitchRadians)
		}, this.snapshot();
	}
	applyPanDelta(e, t) {
		this.assertFinitePointerDelta(e, t, "pan");
		let n = Math.hypot(...ji(this.state.focusPivotMeters, this.state.positionMeters)), r = Fi([
			1,
			0,
			0
		], this.state.rotationXyzw), i = Fi([
			0,
			1,
			0
		], this.state.rotationXyzw), a = this.settings.panSensitivityPerUnit * Math.max(n, 1), o = I(L(r, -e * a), L(i, t * a));
		return this.state = {
			...this.state,
			positionMeters: I(this.state.positionMeters, o),
			focusPivotMeters: I(this.state.focusPivotMeters, o)
		}, this.snapshot();
	}
	applyGroundDragDelta(e, t) {
		this.assertFinitePointerDelta(e, t, "ground drag"), this.applyLookDelta(e, 0);
		let n = L([
			Math.sin(this.yawRadians),
			0,
			-Math.cos(this.yawRadians)
		], -t * this.moveSpeedMetersPerSecond * this.settings.dollySensitivityPerUnit);
		return this.state = {
			...this.state,
			positionMeters: I(this.state.positionMeters, n),
			focusPivotMeters: I(this.state.focusPivotMeters, n)
		}, this.snapshot();
	}
	applyOrbitDelta(e, t) {
		this.assertFinitePointerDelta(e, t, "orbit");
		let n = this.settings.lookSensitivityDegreesPerUnit * Ai, r = this.settings.pitchLimitDegrees * Ai;
		this.yawRadians += e * n, this.pitchRadians = Math.min(Math.max(this.pitchRadians - t * n, -r), r);
		let i = Pi(this.yawRadians, this.pitchRadians), a = Fi([
			0,
			0,
			-1
		], i), o = Math.min(Math.max(Math.hypot(...ji(this.state.focusPivotMeters, this.state.positionMeters)), this.settings.minimumPivotDistanceMeters), this.settings.maximumPivotDistanceMeters);
		return this.state = {
			focusPivotMeters: this.state.focusPivotMeters,
			positionMeters: I(this.state.focusPivotMeters, L(a, -o)),
			rotationXyzw: i
		}, this.snapshot();
	}
	applyDollyDelta(e) {
		if (!Number.isFinite(e)) throw Error("Editor camera dolly delta must be finite.");
		let t = ji(this.state.positionMeters, this.state.focusPivotMeters), n = Math.hypot(...t), r = Math.min(Math.max(n * Math.exp(e * this.settings.dollySensitivityPerUnit), this.settings.minimumPivotDistanceMeters), this.settings.maximumPivotDistanceMeters), i = n > 1e-12 ? L(t, 1 / n) : L(Fi([
			0,
			0,
			-1
		], this.state.rotationXyzw), -1);
		return this.state = {
			...this.state,
			positionMeters: I(this.state.focusPivotMeters, L(i, r))
		}, this.snapshot();
	}
	applyWheelDollyDelta(e) {
		return this.applyDollyDelta(e * .5);
	}
	applyWheelSpeedStep(e) {
		if (!Number.isFinite(e)) throw Error("Editor camera wheel delta must be finite.");
		if (e === 0) return this.moveSpeedMetersPerSecond;
		let t = e < 0 ? this.moveSpeedMetersPerSecond * this.settings.wheelSpeedMultiplier : this.moveSpeedMetersPerSecond / this.settings.wheelSpeedMultiplier;
		return this.moveSpeedMetersPerSecond = Math.min(Math.max(t, this.settings.minimumMoveSpeedMetersPerSecond), this.settings.maximumMoveSpeedMetersPerSecond), this.moveSpeedMetersPerSecond;
	}
	currentMoveSpeed() {
		return this.moveSpeedMetersPerSecond;
	}
	setMoveSpeed(e) {
		if (!Number.isFinite(e)) throw Error("Editor camera speed must be finite.");
		return this.moveSpeedMetersPerSecond = Math.min(Math.max(e, this.settings.minimumMoveSpeedMetersPerSecond), this.settings.maximumMoveSpeedMetersPerSecond), this.moveSpeedMetersPerSecond;
	}
	focusBounds(e, t, n, r) {
		if (!e.every(Number.isFinite)) throw Error("Focus center must be finite.");
		let i = Math.min(Math.max(Ii(t, n, r), this.settings.minimumPivotDistanceMeters), this.settings.maximumPivotDistanceMeters), a = Fi([
			0,
			0,
			-1
		], this.state.rotationXyzw);
		return this.state = {
			...this.state,
			focusPivotMeters: [...e],
			positionMeters: I(e, L(a, -i))
		}, this.snapshot();
	}
	step(e, t) {
		if (!Number.isFinite(t) || t < 0) throw Error("Editor camera delta must be finite and non-negative.");
		let n = Fi([
			0,
			0,
			-1
		], this.state.rotationXyzw), r = Fi([
			1,
			0,
			0
		], this.state.rotationXyzw), i = Fi([
			0,
			1,
			0
		], this.state.rotationXyzw), a = [
			0,
			0,
			0
		];
		for (let t of new Set(e)) t === "move-forward" && (a = I(a, n)), t === "move-backward" && (a = I(a, L(n, -1))), t === "move-right" && (a = I(a, r)), t === "move-left" && (a = I(a, L(r, -1))), t === "move-up-world" && (a = I(a, [
			0,
			1,
			0
		])), t === "move-down-world" && (a = I(a, [
			0,
			-1,
			0
		])), t === "move-up-local" && (a = I(a, i)), t === "move-down-local" && (a = I(a, L(i, -1)));
		let o = L(Mi(a), this.moveSpeedMetersPerSecond * t);
		return this.state = {
			focusPivotMeters: I(this.state.focusPivotMeters, o),
			positionMeters: I(this.state.positionMeters, o),
			rotationXyzw: this.state.rotationXyzw
		}, this.snapshot();
	}
	snapshot() {
		return {
			focusPivotMeters: [...this.state.focusPivotMeters],
			positionMeters: [...this.state.positionMeters],
			rotationXyzw: [...this.state.rotationXyzw]
		};
	}
	assertFinitePointerDelta(e, t, n) {
		if (!Number.isFinite(e) || !Number.isFinite(t)) throw Error(`Editor camera ${n} delta must be finite.`);
	}
}, Ri = (e, t) => e === t || e === "global" || t === "global";
function zi(e) {
	return [
		e.ctrlKey || e.metaKey ? "Ctrl" : "",
		e.altKey ? "Alt" : "",
		e.shiftKey ? "Shift" : "",
		e.key.length === 1 ? e.key.toUpperCase() : e.key
	].filter(Boolean).join("+");
}
function Bi(e) {
	if (e.isComposing || e.key === "Process") return !0;
	let t = e.target;
	return typeof HTMLInputElement < "u" && t instanceof HTMLInputElement || typeof HTMLTextAreaElement < "u" && t instanceof HTMLTextAreaElement || typeof HTMLElement < "u" && t instanceof HTMLElement && t.isContentEditable;
}
var Vi = class {
	bindings;
	constructor(e) {
		this.bindings = [...e], this.assertNoConflicts(this.bindings);
	}
	list(e) {
		return this.bindings.filter((t) => !e || Ri(t.context, e));
	}
	remap(e, t) {
		if (!t.trim()) throw Error("Shortcut chord cannot be empty.");
		if (!this.bindings.find((t) => t.actionId === e)) throw Error(`Unknown shortcut action ${e}.`);
		let n = this.bindings.map((n) => n.actionId === e ? {
			...n,
			chord: t
		} : n);
		this.assertNoConflicts(n), this.bindings = n;
	}
	resolve(e, t) {
		if (Bi(e)) return null;
		let n = zi(e);
		return this.bindings.find((e) => e.chord === n && (e.context === t || e.context === "global"))?.actionId ?? null;
	}
	assertNoConflicts(e) {
		e.forEach((t, n) => {
			let r = e.slice(n + 1).find((e) => e.chord === t.chord && Ri(e.context, t.context));
			if (r) throw Error(`Shortcut conflict: ${t.actionId} and ${r.actionId} use ${t.chord}.`);
		});
	}
}, Hi = /* @__PURE__ */ new Map([
	["ArrowUp", "move-forward"],
	["Numpad8", "move-forward"],
	["ArrowDown", "move-backward"],
	["Numpad2", "move-backward"],
	["ArrowLeft", "move-left"],
	["Numpad4", "move-left"],
	["ArrowRight", "move-right"],
	["Numpad6", "move-right"],
	["PageUp", "move-up-world"],
	["Numpad9", "move-up-world"],
	["PageDown", "move-down-world"],
	["Numpad7", "move-down-world"],
	["KeyZ", "increase-fov"],
	["Numpad1", "increase-fov"],
	["KeyC", "decrease-fov"],
	["Numpad3", "decrease-fov"],
	["KeyW", "move-forward"],
	["KeyS", "move-backward"],
	["KeyA", "move-left"],
	["KeyD", "move-right"],
	["KeyE", "move-up-world"],
	["KeyQ", "move-down-world"],
	["KeyR", "move-up-local"],
	["KeyF", "move-down-local"]
]), Ui = [
	{
		actionId: "cycle-tool",
		context: "viewport",
		chord: "Space"
	},
	{
		actionId: "toggle-game-view",
		context: "viewport",
		chord: "G"
	},
	{
		actionId: "toggle-realtime",
		context: "viewport",
		chord: "Ctrl+R"
	},
	{
		actionId: "toggle-immersive",
		context: "viewport",
		chord: "F11"
	},
	{
		actionId: "toggle-content-drawer",
		context: "global",
		chord: "Ctrl+Space"
	},
	{
		actionId: "delete-selection",
		context: "viewport",
		chord: "Delete"
	},
	...["viewport", "outliner"].flatMap((e) => [
		{
			actionId: "copy-selection",
			context: e,
			chord: "Ctrl+C"
		},
		{
			actionId: "cut-selection",
			context: e,
			chord: "Ctrl+X"
		},
		{
			actionId: "paste-selection",
			context: e,
			chord: "Ctrl+V"
		}
	]),
	...[
		"Q",
		"W",
		"E",
		"R",
		"F"
	].map((e, t) => ({
		actionId: [
			"select-tool",
			"translate-tool",
			"rotate-tool",
			"scale-tool",
			"focus-selection"
		][t],
		context: "viewport",
		chord: e
	})),
	{
		actionId: "focus-selection",
		context: "outliner",
		chord: "F"
	},
	{
		actionId: "save-document",
		context: "global",
		chord: "Ctrl+S"
	},
	{
		actionId: "new-level",
		context: "global",
		chord: "Ctrl+N"
	},
	{
		actionId: "open-level",
		context: "global",
		chord: "Ctrl+O"
	},
	{
		actionId: "save-as-level",
		context: "global",
		chord: "Ctrl+Shift+S"
	},
	...["viewport", "outliner"].map((e) => ({
		actionId: "duplicate-selection",
		context: e,
		chord: "Ctrl+D"
	})),
	...[
		"viewport",
		"outliner",
		"details"
	].map((e) => ({
		actionId: "browse-selection-asset",
		context: e,
		chord: "Ctrl+B"
	})),
	{
		actionId: "undo",
		context: "global",
		chord: "Ctrl+Z"
	},
	{
		actionId: "redo",
		context: "global",
		chord: "Ctrl+Y"
	},
	{
		actionId: "redo",
		context: "global",
		chord: "Ctrl+Shift+Z"
	}
], Wi = class {
	editorShortcuts = new Vi(Ui);
	setShortcuts(e) {
		this.editorShortcuts = new Vi(e);
	}
	shortcutLabel(e) {
		return [...new Set(this.editorShortcuts.list().filter((t) => t.actionId === e).map((e) => e.chord))].join(" / ");
	}
	epoch = 0;
	navigationGesture = null;
	navigationPointerId = null;
	pointerLocked = !1;
	pointerLockStatus = "idle";
	pointerLockFailure = null;
	lastPointerLockOutcome = null;
	expectedPointerUnlock = !1;
	heldCameraKeys = /* @__PURE__ */ new Map();
	lastCancellation = null;
	beginNavigation(e) {
		return this.beginGesture(e, "fly-look");
	}
	beginGesture(e, t) {
		return this.navigationPointerId === null ? (this.epoch += 1, this.navigationGesture = t, this.navigationPointerId = e, this.heldCameraKeys.clear(), this.lastCancellation = null, this.snapshot()) : this.snapshot();
	}
	endNavigation(e) {
		return this.navigationPointerId === e ? (this.epoch += 1, this.navigationGesture = null, this.navigationPointerId = null, this.heldCameraKeys.clear(), this.snapshot()) : this.snapshot();
	}
	handleKeyDown(e) {
		let t = this.routeKey({
			...e,
			navigationActive: this.navigationPointerId !== null
		});
		return t.owner === "viewport-navigation" && t.action === "cancel-navigation" ? (this.cancel("escape"), t) : (t.owner === "viewport-navigation" && t.action !== "cancel-navigation" && this.navigationGesture === "fly-look" && !e.repeat && this.heldCameraKeys.set(e.code, t.action), t);
	}
	handleKeyUp(e) {
		return this.heldCameraKeys.delete(e), this.snapshot();
	}
	beginPointerLockRequest() {
		return this.navigationGesture === "fly-look" ? (this.pointerLockStatus = "requesting", this.pointerLockFailure = null, this.lastPointerLockOutcome = null, this.expectedPointerUnlock = !1, this.snapshot()) : this.snapshot();
	}
	observePointerLockError(e) {
		return this.pointerLocked || this.navigationPointerId === null ? this.snapshot() : (this.pointerLockStatus = "fallback", this.pointerLockFailure = e, this.lastPointerLockOutcome = "request-error", this.expectedPointerUnlock = !1, this.snapshot());
	}
	expectPointerUnlock() {
		return this.pointerLocked && (this.expectedPointerUnlock = !0), this.snapshot();
	}
	observePointerLock(e) {
		if (e) return this.pointerLocked = !0, this.pointerLockStatus = "locked", this.pointerLockFailure = null, this.lastPointerLockOutcome = "locked", this.expectedPointerUnlock = !1, this.snapshot();
		if (!this.pointerLocked) return this.snapshot();
		if (this.expectedPointerUnlock) return this.pointerLocked = !1, this.pointerLockStatus = "idle", this.lastPointerLockOutcome = "expected-unlock", this.expectedPointerUnlock = !1, this.snapshot();
		let t = this.cancel("pointer-lock-loss");
		return this.pointerLockStatus = "fallback", this.pointerLockFailure = "unexpected-loss", this.lastPointerLockOutcome = "unexpected-loss", {
			...t,
			...this.pointerLockSnapshot()
		};
	}
	cancel(e) {
		return this.navigationPointerId !== null || this.pointerLocked || this.heldCameraKeys.size > 0 ? (this.epoch += 1, this.navigationGesture = null, this.navigationPointerId = null, this.pointerLocked = !1, this.pointerLockStatus = "idle", this.pointerLockFailure = null, this.expectedPointerUnlock = !1, this.heldCameraKeys.clear(), this.lastCancellation = e, this.snapshot()) : this.snapshot();
	}
	snapshot() {
		return {
			epoch: this.epoch,
			navigationActive: this.navigationPointerId !== null,
			navigationGesture: this.navigationGesture,
			navigationPointerId: this.navigationPointerId,
			pointerLocked: this.pointerLocked,
			...this.pointerLockSnapshot(),
			heldCameraActions: [...new Set(this.heldCameraKeys.values())],
			lastCancellation: this.lastCancellation
		};
	}
	routeKey(e) {
		if (e.modalOpen || e.isComposing || e.targetKind === "text" || e.targetKind === "control" || e.targetKind === "button" && (!e.ctrlKey || e.altKey || e.code !== "KeyS" && (e.shiftKey || !["KeyN", "KeyO"].includes(e.code)))) return {
			owner: "native",
			action: null,
			consumed: !1
		};
		if (e.captureActive) return {
			owner: "interaction-capture",
			action: null,
			consumed: !0
		};
		if (e.runtimeActive) return {
			owner: "native",
			action: null,
			consumed: !1
		};
		if (e.navigationActive) {
			if (e.code === "Escape") return {
				owner: "viewport-navigation",
				action: "cancel-navigation",
				consumed: !0
			};
			let t = Hi.get(e.code);
			return t ? {
				owner: "viewport-navigation",
				action: t,
				consumed: !0
			} : {
				owner: "unhandled",
				action: null,
				consumed: !1
			};
		}
		let t = this.editorShortcuts.resolve({
			key: e.code.replace(/^Key/, ""),
			ctrlKey: e.ctrlKey,
			altKey: e.altKey,
			shiftKey: e.shiftKey
		}, e.targetKind === "canvas" ? "viewport" : e.targetKind === "outliner" ? "outliner" : e.targetKind === "content" ? "content" : e.targetKind === "details" || e.targetKind === "widget" ? "details" : "global");
		return t && (!e.enabledEditorActions || e.enabledEditorActions.has(t)) && e.repeat ? {
			owner: "interaction-capture",
			action: null,
			consumed: !0
		} : t && (!e.enabledEditorActions || e.enabledEditorActions.has(t)) ? {
			owner: "document-shortcut",
			action: t,
			consumed: !0
		} : {
			owner: "unhandled",
			action: null,
			consumed: !1
		};
	}
	pointerLockSnapshot() {
		return {
			pointerLockStatus: this.pointerLockStatus,
			pointerLockFailure: this.pointerLockFailure,
			lastPointerLockOutcome: this.lastPointerLockOutcome
		};
	}
}, Gi = class {
	viewer;
	router = new Wi();
	controller = null;
	listeners = new AbortController();
	pointer = null;
	last = [0, 0];
	speed = 4;
	onAction;
	constructor(e) {
		this.viewer = e;
		let t = e.canvas, n = this.listeners.signal;
		t.tabIndex = 0, t.addEventListener("pointerdown", (n) => {
			t.focus({ preventScroll: !0 }), !(n.button !== 2 || n.altKey || e.projection !== "perspective") && (n.preventDefault(), this.pointer = n.pointerId, this.last = [n.clientX, n.clientY], this.controller = new Li({
				positionMeters: e.camera.position.toArray(),
				rotationXyzw: e.camera.quaternion.toArray(),
				focusPivotMeters: e.controls.target.toArray()
			}), this.controller.setMoveSpeed(this.speed), this.router.beginNavigation(n.pointerId), e.controls.enabled = !1, t.setPointerCapture(n.pointerId));
		}, { signal: n }), t.addEventListener("pointermove", (e) => {
			this.pointer === e.pointerId && this.controller && (this.controller.applyLookDelta(e.clientX - this.last[0], e.clientY - this.last[1]), this.last = [e.clientX, e.clientY], this.apply());
		}, { signal: n });
		for (let e of [
			"pointerup",
			"pointercancel",
			"lostpointercapture"
		]) t.addEventListener(e, () => this.stop(), { signal: n });
		t.addEventListener("contextmenu", (e) => e.preventDefault(), { signal: n }), t.addEventListener("wheel", (e) => {
			this.controller && (e.preventDefault(), this.speed = this.controller.applyWheelSpeedStep(e.deltaY), this.viewer.onViewChange?.());
		}, {
			signal: n,
			passive: !1
		}), window.addEventListener("keydown", (e) => {
			if (document.activeElement !== t && !this.controller) return;
			let n = e.target instanceof HTMLElement ? e.target : null, r = n?.closest("input, textarea, select, [contenteditable=true]"), i = this.router.handleKeyDown({
				code: e.code,
				isComposing: e.isComposing,
				ctrlKey: e.ctrlKey,
				altKey: e.altKey,
				shiftKey: e.shiftKey,
				repeat: e.repeat,
				modalOpen: !1,
				targetKind: r ? "text" : n === t ? "canvas" : "button",
				enabledEditorActions: /* @__PURE__ */ new Set([
					"focus-selection",
					"toggle-game-view",
					"toggle-immersive"
				])
			});
			i.consumed && e.preventDefault(), i.action === "cancel-navigation" && this.stop(), i.owner === "document-shortcut" && this.onAction?.(i.action);
		}, { signal: n }), window.addEventListener("keyup", (e) => this.router.handleKeyUp(e.code), { signal: n }), window.addEventListener("blur", () => this.stop(), { signal: n }), t.addEventListener("blur", () => this.stop(), { signal: n }), document.addEventListener("visibilitychange", () => {
			document.hidden && this.stop();
		}, { signal: n });
	}
	apply() {
		if (!this.controller) return;
		let e = this.controller.snapshot();
		this.viewer.camera.position.fromArray(e.positionMeters), this.viewer.camera.quaternion.fromArray(e.rotationXyzw), this.viewer.controls.target.fromArray(e.focusPivotMeters), this.viewer.invalidate();
	}
	step(e) {
		this.controller && (this.controller.step(this.router.snapshot().heldCameraActions, Math.min(e, .05)), this.apply());
	}
	stop() {
		let e = this.pointer;
		this.pointer = null, this.controller = null, this.router.cancel("blur"), this.viewer.controls.enabled = !0, e !== null && this.viewer.canvas.hasPointerCapture(e) && this.viewer.canvas.releasePointerCapture(e);
	}
	setSpeed(e) {
		!Number.isFinite(e) || e < .25 || e > 64 || (this.speed = e, this.controller?.setMoveSpeed(e));
	}
	dispose() {
		this.stop(), this.listeners.abort();
	}
}, Ki = class {
	renderer;
	scene;
	allocations = /* @__PURE__ */ new Map();
	lightGeneration;
	lightCandidates = [];
	constructor(e, t) {
		this.renderer = e, this.scene = t;
	}
	prepare(e, t) {
		if (t !== void 0 && (!Number.isSafeInteger(t) || t < 0)) throw Error("Invalid shadow light generation");
		if (t === void 0 || t !== this.lightGeneration) {
			this.lightGeneration = void 0;
			let e = [];
			this.scene.traverse((t) => {
				(t instanceof gt || t instanceof ht || t instanceof nn) && e.push(t);
			}), this.lightCandidates = e, this.lightGeneration = t;
		}
		let n = [], r = [], i = /* @__PURE__ */ new Set();
		for (let e of this.lightCandidates) {
			let t = e, n = !0;
			for (; t && t !== this.scene;) n &&= t.visible, t = t.parent;
			t === this.scene && (i.add(e), n && this.scene.visible && e.castShadow && e.intensity > 0 && r.push(e));
		}
		if (this.allocations.forEach((e, t) => {
			i.has(t) || (this.release(t, e), this.allocations.delete(t));
		}), !r.length || e <= 0 || (this.scene.traverseVisible((e) => {
			e instanceof M && Sn(e) && !e.userData.editorHelper && !e.layers.isEnabled(1) && n.push(e);
		}), !n.length)) return () => {};
		this.scene.updateMatrixWorld(!0);
		let a = new on();
		if (n.forEach((e) => a.expandByObject(e)), a.isEmpty() || ![...a.min.toArray(), ...a.max.toArray()].every(Number.isFinite)) return () => {};
		let { shadowMap: o } = this.renderer, s = o.enabled, c = o.type, l = [], u = () => {
			l.reverse().forEach((e) => e()), o.enabled = s, o.type = c;
		};
		try {
			return o.enabled = !0, o.type = 1, n.forEach((e) => {
				let t = e.castShadow, n = e.receiveShadow;
				e.castShadow = !0, e.receiveShadow = !0, l.push(() => {
					e.castShadow = t, e.receiveShadow = n;
				});
			}), r.forEach((t, n) => {
				if (n >= dn.maxShadowLights) {
					t.castShadow = !1, l.push(() => {
						t.castShadow = !0;
					});
					return;
				}
				let r = t.shadow, i = r.mapSize.clone();
				this.allocations.has(t) || this.allocations.set(t, {
					map: r.map,
					width: r.map?.width ?? 0,
					height: r.map?.height ?? 0
				});
				let o = t instanceof ht ? Math.min(dn.maxPointShadowSize, this.renderer.capabilities.maxCubemapSize) : dn.maxPostProcessDimension, s = Math.min(e, o, this.renderer.capabilities.maxTextureSize);
				r.mapSize.setScalar(s), r.map && (r.map.width !== s || r.map.height !== s) && r.map.setSize(s, s), l.push(() => r.mapSize.copy(i));
				let c = r.bias, u = r.normalBias;
				if (c === 0 && (r.bias = -1e-4), u === 0 && (r.normalBias = Math.min(.02, a.getSize(new N()).length() / s / 2)), l.push(() => {
					r.bias = c, r.normalBias = u;
				}), t instanceof gt) l.push(qi(t, a));
				else {
					let e = r.camera, n = e.near;
					e.near = Math.min(n, .01, t.distance > 0 ? t.distance / 100 : n), e.updateProjectionMatrix(), l.push(() => {
						e.near = n, e.updateProjectionMatrix();
					});
				}
			}), u;
		} catch (e) {
			throw u(), e;
		}
	}
	dispose() {
		this.allocations.forEach((e, t) => this.release(t, e)), this.allocations.clear(), this.lightCandidates = [], this.lightGeneration = void 0;
	}
	release(e, t) {
		!t.map && e.shadow.map ? (e.shadow.map.dispose(), e.shadow.map = null) : t.map && e.shadow.map === t.map && t.map.setSize(t.width, t.height);
	}
};
function qi(e, t) {
	let n = e.shadow.camera, r = e.position.clone(), i = e.target.position.clone(), a = {
		left: n.left,
		right: n.right,
		top: n.top,
		bottom: n.bottom,
		near: n.near,
		far: n.far
	}, o = n.position.clone(), s = n.quaternion.clone(), c = e.target.getWorldPosition(new N()).sub(e.getWorldPosition(new N())).normalize();
	if (c.lengthSq() === 0) return () => {};
	let l = t.getCenter(new N()), u = Math.max(.05, t.getSize(new N()).length() / 2), d = Math.max(.05, u * .01), f = l.clone().addScaledVector(c, -(u + d * 2));
	e.position.copy(e.parent ? e.parent.worldToLocal(f) : f), e.target.position.copy(e.target.parent ? e.target.parent.worldToLocal(l) : l), e.updateWorldMatrix(!0, !1), e.target.updateWorldMatrix(!0, !1), e.shadow.updateMatrices(e);
	let p = t.clone().applyMatrix4(n.matrixWorldInverse);
	return n.left = p.min.x - d, n.right = p.max.x + d, n.bottom = p.min.y - d, n.top = p.max.y + d, n.near = Math.max(.001, -p.max.z - d), n.far = Math.max(n.near + .01, -p.min.z + d), n.updateProjectionMatrix(), () => {
		e.position.copy(r), e.target.position.copy(i), e.updateWorldMatrix(!0, !1), e.target.updateWorldMatrix(!0, !1), Object.assign(n, a), n.updateProjectionMatrix(), n.position.copy(o), n.quaternion.copy(s), n.updateMatrixWorld();
	};
}
//#endregion
//#region src/render/PreviewEnvironmentLighting.ts
function Ji(e) {
	let t = new Tn(), n = new xn(e);
	try {
		return n.fromScene(t, .04, .1, 100, { size: 128 });
	} finally {
		t.dispose(), n.dispose();
	}
}
var Yi = class {
	renderer;
	create;
	target = null;
	constructor(e, t = Ji) {
		this.renderer = e, this.create = t;
	}
	render(e, t, n) {
		this.target ??= this.create(this.renderer);
		let r = e.environment, i = e.environmentIntensity;
		try {
			e.environment = r ?? this.target.texture, e.environmentIntensity = n ?? i, t();
		} finally {
			e.environment = r, e.environmentIntensity = i;
		}
	}
	dispose() {
		this.target?.dispose(), this.target = null;
	}
}, Xi = class extends Error {}, Zi = async (e, t, n) => {
	let { RenderQualityPipeline: r } = await import("./RenderQualityPipeline-CTbOsfcN.js");
	return new r(e, t, n);
}, Qi = class {
	renderer;
	scene;
	invalidate;
	report;
	load;
	shadows;
	backend = null;
	generation = 0;
	disposed = !1;
	previewEnvironment = null;
	environmentError = null;
	status = {
		requested: Yt.VIEWPORT,
		active: Yt.VIEWPORT,
		state: "ready",
		message: ""
	};
	constructor(e, t, n, r, i = Zi) {
		this.renderer = e, this.scene = t, this.invalidate = n, this.report = r, this.load = i, this.shadows = new Ki(e, t);
	}
	snapshot() {
		return this.status;
	}
	async apply(e) {
		if (this.disposed) return;
		if (!Bt(e)) throw Error("Unknown Render Quality preset.");
		if (this.status.requested === e && this.status.state !== "failed") return;
		let t = ++this.generation;
		if (e === Yt.VIEWPORT) {
			this.backend?.dispose(), this.backend = null, this.publish({
				requested: e,
				active: e,
				state: "ready",
				message: ""
			});
			return;
		}
		this.publish({
			...this.status,
			requested: e,
			state: "preparing",
			message: "렌더링 효과를 준비하고 있습니다…"
		});
		try {
			let n = await this.load(this.renderer, this.scene, e);
			if (this.disposed || t !== this.generation) {
				n.dispose();
				return;
			}
			this.backend?.dispose(), this.backend = n, this.publish({
				requested: e,
				active: e,
				state: "ready",
				message: ""
			});
		} catch (e) {
			if (this.disposed || t !== this.generation) return;
			this.publish({
				...this.status,
				state: "failed",
				message: `품질 적용 실패: ${e instanceof Error ? e.message : String(e)}. 이전 렌더링을 유지합니다.`
			});
		}
	}
	render(e, t, n, r, i, a = {}) {
		if ((this.backend || a.environmentLighting === !1) && (this.previewEnvironment?.dispose(), this.previewEnvironment = null), a.environmentLighting === !1 && this.environmentError) {
			let e = this.environmentError;
			this.environmentError = null, this.status.message === e && this.publish({
				...this.status,
				state: "ready",
				message: ""
			});
		}
		if (!r) {
			i();
			return;
		}
		let o = () => {
			if (a.environmentLighting === void 0) {
				i();
				return;
			}
			if (a.environmentLighting && !this.environmentError) try {
				this.previewEnvironment ??= new Yi(this.renderer), this.previewEnvironment.render(this.scene, i, a.environmentIntensity);
				return;
			} catch (e) {
				if (e instanceof Xi) throw e;
				this.previewEnvironment?.dispose(), this.previewEnvironment = null, this.environmentError = `환경광 적용 실패: ${e instanceof Error ? e.message : String(e)}. 환경광 없이 표시합니다.`, this.publish({
					...this.status,
					state: "failed",
					message: this.environmentError
				});
			}
			let e = this.scene.environment;
			try {
				this.scene.environment = null, i();
			} finally {
				this.scene.environment = e;
			}
		}, s = this.shadows.prepare(cn[this.status.active].shadowSize, a.shadowLightGeneration);
		try {
			if (!this.backend) {
				o();
				return;
			}
			try {
				this.backend.render(e, t, n, i, a);
			} catch (e) {
				if (e instanceof Xi) throw e;
				this.backend.dispose(), this.backend = null, ++this.generation, this.publish({
					...this.status,
					active: Yt.VIEWPORT,
					state: "failed",
					message: `렌더링 효과 오류: ${e instanceof Error ? e.message : String(e)}. 기본 화면으로 복원했습니다.`
				}), o();
			}
		} finally {
			s();
		}
	}
	dispose() {
		this.disposed = !0, ++this.generation, this.backend?.dispose(), this.backend = null, this.previewEnvironment?.dispose(), this.previewEnvironment = null, this.shadows.dispose();
	}
	publish(e) {
		this.status = e, this.report(e), this.invalidate();
	}
};
//#endregion
//#region src/render/ViewportViewState.ts
function $i(e, t) {
	if (t === "lit") return e.clone();
	let n = "color" in e ? e.color : void 0, r = new At({
		color: n?.clone() ?? 11184810,
		wireframe: t === "wireframe",
		side: 2
	});
	return t === "unlit" && ta(e, r), r;
}
var ea = /* @__PURE__ */ new WeakMap();
function ta(e, t) {
	let n = e;
	n.color && t.color.copy(n.color), (t.map !== (n.map ?? null) || t.alphaMap !== (n.alphaMap ?? null) || t.vertexColors !== e.vertexColors || t.alphaTest !== e.alphaTest || t.transparent !== e.transparent) && (t.needsUpdate = !0), t.map = n.map ?? null, t.alphaMap = n.alphaMap ?? null, t.opacity = e.opacity, t.alphaTest = e.alphaTest, t.transparent = e.transparent, t.depthWrite = e.depthWrite, t.vertexColors = e.vertexColors, t.onBeforeCompile = e.onBeforeCompile, t.customProgramCacheKey = () => e.customProgramCacheKey(), t.onBeforeRender = e.onBeforeRender, t.defines = Object.fromEntries(Object.entries(n.defines ?? {}).filter(([e]) => e !== "STANDARD" && e !== "PHYSICAL"));
}
function na(e) {
	let t = ea.get(e);
	if (!t) {
		t = $i(e, "unlit"), ea.set(e, t);
		let n = t;
		e.addEventListener("dispose", () => {
			n.dispose(), ea.delete(e);
		});
	}
	return ta(e, t), t;
}
function R(e, t, n, r, i = !1) {
	if (n.layers.enableAll(), t.overrideMaterial = null, !r) {
		e.render(t, n);
		return;
	}
	let a = e.autoClear, o = t.background, s = /* @__PURE__ */ new Map();
	try {
		i && t.traverse((e) => {
			e instanceof M && e.layers.isEnabled(0) && (s.set(e, e.material), e.material = Array.isArray(e.material) ? e.material.map(na) : na(e.material));
		}), t.overrideMaterial = i ? null : r, n.layers.set(0), e.render(t, n), s.forEach((e, t) => {
			t.material = e;
		}), t.overrideMaterial = null, e.autoClear = !1, e.state.reset(), t.background = null, n.layers.set(1), e.render(t, n);
	} finally {
		s.forEach((e, t) => {
			t.material = e;
		}), t.overrideMaterial = null, t.background = o, n.layers.enableAll(), e.autoClear = a;
	}
}
-Math.SQRT1_2, -Math.SQRT1_2;
function z(e, t) {
	if (!(e > 0 && e < 180) || !(t > 0)) throw Error("FOV and aspect must be positive and representable.");
	return 2 * Math.atan(Math.tan(e * Math.PI / 360) / t) * 180 / Math.PI;
}
//#endregion
//#region src/render/WebEffectsProjection.ts
function ra(e, t, n = new Float32Array(e.count * 3)) {
	if (!Number.isFinite(t) || t < 0 || n.length !== e.count * 3) throw Error("Invalid particle sample time/buffer.");
	let r = e.seed >>> 0, i = () => (r = Math.imul(r, 1664525) + 1013904223 >>> 0, r / 4294967296);
	for (let r = 0; r < e.count; r++) {
		let a = i(), o = i() * Math.PI * 2, s = Math.sqrt(i()) * e.spreadMeters, c = (t + a * e.lifetimeSeconds) % e.lifetimeSeconds, l = c / e.lifetimeSeconds, u = Math.cos(o) * s, d = c * e.speedMetersPerSecond, f = Math.sin(o) * s;
		e.style === "sparks" && (u *= 1 + c * e.speedMetersPerSecond, f *= 1 + c * e.speedMetersPerSecond, d -= 4.905 * c * c), e.style === "steam" && (u += Math.sin(t + a * 7) * l * e.spreadMeters, f += Math.cos(t + a * 9) * l * e.spreadMeters), e.style === "beacon" && (u = Math.cos(o + t * e.speedMetersPerSecond) * e.spreadMeters, f = Math.sin(o + t * e.speedMetersPerSecond) * e.spreadMeters, d = Math.sin(t * 3 + a * Math.PI * 2) * e.sizeMeters), n[r * 3] = e.originMeters[0] + u, n[r * 3 + 1] = e.originMeters[1] + d, n[r * 3 + 2] = e.originMeters[2] + f;
	}
	return n;
}
var ia = class {
	scene;
	renderer;
	signature = "";
	settings = m;
	points = null;
	texture = null;
	originalFog;
	originalToneMapping;
	originalExposure;
	constructor(e, t) {
		this.scene = e, this.renderer = t, this.originalFog = e.fog, this.originalToneMapping = t.toneMapping, this.originalExposure = t.toneMappingExposure;
	}
	get animated() {
		return this.settings.particles.enabled;
	}
	configure(e) {
		let t = e ?? m;
		v(t);
		let n = JSON.stringify(t);
		if (n === this.signature) return;
		this.settings = structuredClone(t), this.signature = n, this.clearParticles(), this.renderer.toneMapping = t.toneMapping === "aces" ? 4 : 0, this.renderer.toneMappingExposure = t.exposure, this.scene.fog = t.fog.enabled ? new jt(new Ot(t.fog.color), t.fog.nearMeters, t.fog.farMeters) : null;
		let r = t.particles;
		if (!r.enabled) return;
		let i = /* @__PURE__ */ new Uint8Array(4096);
		for (let e = 0; e < 32; e++) for (let t = 0; t < 32; t++) {
			let n = (e * 32 + t) * 4, r = Math.hypot((t + .5) / 16 - 1, (e + .5) / 16 - 1);
			i[n] = i[n + 1] = i[n + 2] = 255, i[n + 3] = Math.round(Math.max(0, 1 - r) * 255);
		}
		this.texture = new Ct(i, 32, 32, ft), this.texture.needsUpdate = !0;
		let a = new Rt();
		a.setAttribute("position", new Nt(ra(r, 0), 3));
		let o = new Ft({
			color: r.color,
			size: r.sizeMeters,
			map: this.texture,
			transparent: !0,
			opacity: r.style === "steam" ? .35 : .85,
			depthWrite: !1,
			blending: r.style === "steam" ? 1 : 2
		});
		this.points = new Mt(a, o), this.points.name = "Web particles", this.points.userData.editorPickable = !1, this.points.frustumCulled = !1, this.scene.add(this.points);
	}
	sample(e, t = !0) {
		if (!this.points || (this.points.visible = t, !t)) return;
		let n = this.points.geometry.getAttribute("position");
		ra(this.settings.particles, e, n.array), n.needsUpdate = !0;
	}
	clearParticles() {
		this.points?.removeFromParent(), this.points?.geometry.dispose(), this.points?.material.dispose(), this.texture?.dispose(), this.points = null, this.texture = null;
	}
	dispose() {
		this.clearParticles(), this.scene.fog = this.originalFog, this.renderer.toneMapping = this.originalToneMapping, this.renderer.toneMappingExposure = this.originalExposure;
	}
}, aa = { type: "change" }, oa = { type: "start" }, sa = { type: "end" }, ca = new wt(), la = new pt(), ua = Math.cos(70 * hn.DEG2RAD), da = new N(), fa = 2 * Math.PI, B = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
}, pa = 1e-6, ma = class extends kt {
	constructor(e, t = null) {
		super(e, t), this.state = B.NONE, this.target = new N(), this.cursor = new N(), this.minDistance = 0, this.maxDistance = Infinity, this.minZoom = 0, this.maxZoom = Infinity, this.minTargetRadius = 0, this.maxTargetRadius = Infinity, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -Infinity, this.maxAzimuthAngle = Infinity, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
			LEFT: "ArrowLeft",
			UP: "ArrowUp",
			RIGHT: "ArrowRight",
			BOTTOM: "ArrowDown"
		}, this.mouseButtons = {
			LEFT: _n.ROTATE,
			MIDDLE: _n.DOLLY,
			RIGHT: _n.PAN
		}, this.touches = {
			ONE: Vt.ROTATE,
			TWO: Vt.DOLLY_PAN
		}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new N(), this._lastQuaternion = new bt(), this._lastTargetPosition = new N(), this._quat = new bt().setFromUnitVectors(e.up, new N(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new fn(), this._sphericalDelta = new fn(), this._scale = 1, this._panOffset = new N(), this._rotateStart = new Wt(), this._rotateEnd = new Wt(), this._rotateDelta = new Wt(), this._panStart = new Wt(), this._panEnd = new Wt(), this._panDelta = new Wt(), this._dollyStart = new Wt(), this._dollyEnd = new Wt(), this._dollyDelta = new Wt(), this._dollyDirection = new N(), this._mouse = new Wt(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = ga.bind(this), this._onPointerDown = ha.bind(this), this._onPointerUp = _a.bind(this), this._onContextMenu = wa.bind(this), this._onMouseWheel = ba.bind(this), this._onKeyDown = xa.bind(this), this._onTouchStart = Sa.bind(this), this._onTouchMove = Ca.bind(this), this._onMouseDown = va.bind(this), this._onMouseMove = ya.bind(this), this._interceptControlDown = Ta.bind(this), this._interceptControlUp = Ea.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
	}
	set cursorStyle(e) {
		this._cursorStyle = e, e === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
	}
	get cursorStyle() {
		return this._cursorStyle;
	}
	connect(e) {
		super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
			passive: !0,
			capture: !0
		}), this.domElement.style.touchAction = "none";
	}
	disconnect() {
		this.state = B.NONE, this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents();
		let e = this.domElement.getRootNode();
		e.removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), e.removeEventListener("keyup", this._interceptControlUp, { capture: !0 }), this._controlActive = !1, this._pointers.length = 0, this._pointerPositions = {}, this.domElement.style.touchAction = "", this.domElement.style.cursor = "auto";
	}
	dispose() {
		this.disconnect();
	}
	getPolarAngle() {
		return this._spherical.phi;
	}
	getAzimuthalAngle() {
		return this._spherical.theta;
	}
	getDistance() {
		return this.object.position.distanceTo(this.target);
	}
	listenToKeyEvents(e) {
		e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
	}
	stopListenToKeyEvents() {
		this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
	}
	saveState() {
		this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
	}
	reset() {
		this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(aa), this.update(), this.state = B.NONE;
	}
	pan(e, t) {
		this._pan(e, t), this.update();
	}
	dollyIn(e) {
		this._dollyIn(e), this.update();
	}
	dollyOut(e) {
		this._dollyOut(e), this.update();
	}
	rotateLeft(e) {
		this._rotateLeft(e), this.update();
	}
	rotateUp(e) {
		this._rotateUp(e), this.update();
	}
	update(e = null) {
		let t = this.object.position;
		da.copy(t).sub(this.target), da.applyQuaternion(this._quat), this._spherical.setFromVector3(da), this.autoRotate && this.state === B.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
		let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
		isFinite(n) && isFinite(r) && (n < -Math.PI ? n += fa : n > Math.PI && (n -= fa), r < -Math.PI ? r += fa : r > Math.PI && (r -= fa), n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
		let i = !1;
		if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
		else {
			let e = this._spherical.radius;
			this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = e != this._spherical.radius;
		}
		if (da.setFromSpherical(this._spherical), da.applyQuaternion(this._quatInverse), t.copy(this.target).add(da), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
			let e = null;
			if (this.object.isPerspectiveCamera) {
				let t = da.length();
				e = this._clampDistance(t * this._scale);
				let n = t - e;
				this.object.position.addScaledVector(this._dollyDirection, n), this.object.updateMatrixWorld(), i = !!n;
			} else if (this.object.isOrthographicCamera) {
				let t = new N(this._mouse.x, this._mouse.y, 0);
				t.unproject(this.object);
				let n = this.object.zoom;
				this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = n !== this.object.zoom;
				let r = new N(this._mouse.x, this._mouse.y, 0);
				r.unproject(this.object), this.object.position.sub(r).add(t), this.object.updateMatrixWorld(), e = da.length();
			} else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
			e !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position) : (ca.origin.copy(this.object.position), ca.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(ca.direction)) < ua ? this.object.lookAt(this.target) : (la.setFromNormalAndCoplanarPoint(this.object.up, this.target), ca.intersectPlane(la, this.target))));
		} else if (this.object.isOrthographicCamera) {
			let e = this.object.zoom;
			this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), e !== this.object.zoom && (this.object.updateProjectionMatrix(), i = !0);
		}
		return this._scale = 1, this._performCursorZoom = !1, i || this._lastPosition.distanceToSquared(this.object.position) > pa || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > pa || this._lastTargetPosition.distanceToSquared(this.target) > pa ? (this.dispatchEvent(aa), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
	}
	_getAutoRotationAngle(e) {
		return e === null ? fa / 60 / 60 * this.autoRotateSpeed : fa / 60 * this.autoRotateSpeed * e;
	}
	_getZoomScale(e) {
		let t = Math.abs(e * .01);
		return .95 ** (this.zoomSpeed * t);
	}
	_rotateLeft(e) {
		this._sphericalDelta.theta -= e;
	}
	_rotateUp(e) {
		this._sphericalDelta.phi -= e;
	}
	_panLeft(e, t) {
		da.setFromMatrixColumn(t, 0), da.multiplyScalar(-e), this._panOffset.add(da);
	}
	_panUp(e, t) {
		this.screenSpacePanning === !0 ? da.setFromMatrixColumn(t, 1) : (da.setFromMatrixColumn(t, 0), da.crossVectors(this.object.up, da)), da.multiplyScalar(e), this._panOffset.add(da);
	}
	_pan(e, t) {
		let n = this.domElement;
		if (this.object.isPerspectiveCamera) {
			let r = this.object.position;
			da.copy(r).sub(this.target);
			let i = da.length();
			i *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * i / n.clientHeight, this.object.matrix), this._panUp(2 * t * i / n.clientHeight, this.object.matrix);
		} else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
	}
	_dollyOut(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_dollyIn(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_updateZoomParameters(e, t) {
		if (!this.zoomToCursor) return;
		this._performCursorZoom = !0;
		let n = this.domElement.getBoundingClientRect(), r = e - n.left, i = t - n.top, a = n.width, o = n.height;
		this._mouse.x = r / a * 2 - 1, this._mouse.y = -(i / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
	}
	_clampDistance(e) {
		return Math.max(this.minDistance, Math.min(this.maxDistance, e));
	}
	_handleMouseDownRotate(e) {
		this._rotateStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownDolly(e) {
		this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownPan(e) {
		this._panStart.set(e.clientX, e.clientY);
	}
	_handleMouseMoveRotate(e) {
		this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(fa * this._rotateDelta.x / t.clientHeight), this._rotateUp(fa * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
	}
	_handleMouseMoveDolly(e) {
		this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
	}
	_handleMouseMovePan(e) {
		this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
	}
	_handleMouseWheel(e) {
		this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
	}
	_handleKeyDown(e) {
		let t = !1;
		switch (e.code) {
			case this.keys.UP:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(fa * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
				break;
			case this.keys.BOTTOM:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-fa * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
				break;
			case this.keys.LEFT:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(fa * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
				break;
			case this.keys.RIGHT: e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-fa * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
		}
		t && (e.preventDefault(), this.update());
	}
	_handleTouchStartRotate(e) {
		if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateStart.set(n, r);
		}
	}
	_handleTouchStartPan(e) {
		if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panStart.set(n, r);
		}
	}
	_handleTouchStartDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyStart.set(0, i);
	}
	_handleTouchStartDollyPan(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
	}
	_handleTouchStartDollyRotate(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
	}
	_handleTouchMoveRotate(e) {
		if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateEnd.set(n, r);
		}
		this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(fa * this._rotateDelta.x / t.clientHeight), this._rotateUp(fa * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
	}
	_handleTouchMovePan(e) {
		if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panEnd.set(n, r);
		}
		this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
	}
	_handleTouchMoveDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyEnd.set(0, i), this._dollyDelta.set(0, (this._dollyEnd.y / this._dollyStart.y) ** +this.zoomSpeed), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
		let a = (e.pageX + t.x) * .5, o = (e.pageY + t.y) * .5;
		this._updateZoomParameters(a, o);
	}
	_handleTouchMoveDollyPan(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
	}
	_handleTouchMoveDollyRotate(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
	}
	_addPointer(e) {
		this._pointers.push(e.pointerId);
	}
	_removePointer(e) {
		delete this._pointerPositions[e.pointerId];
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
			this._pointers.splice(t, 1);
			return;
		}
	}
	_isTrackingPointer(e) {
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return !0;
		return !1;
	}
	_trackPointer(e) {
		let t = this._pointerPositions[e.pointerId];
		t === void 0 && (t = new Wt(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
	}
	_getSecondPointerPosition(e) {
		let t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
		return this._pointerPositions[t];
	}
	_customWheelEvent(e) {
		let t = e.deltaMode, n = {
			clientX: e.clientX,
			clientY: e.clientY,
			deltaY: e.deltaY
		};
		switch (t) {
			case 1:
				n.deltaY *= 16;
				break;
			case 2: n.deltaY *= 100;
		}
		return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
	}
};
function ha(e) {
	this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(e) && (this._addPointer(e), e.pointerType === "touch" ? this._onTouchStart(e) : this._onMouseDown(e), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function ga(e) {
	this.enabled !== !1 && (e.pointerType === "touch" ? this._onTouchMove(e) : this._onMouseMove(e));
}
function _a(e) {
	switch (this._removePointer(e), this._pointers.length) {
		case 0:
			this.domElement.releasePointerCapture(e.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(sa), this.state = B.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
			break;
		case 1:
			let t = this._pointers[0], n = this._pointerPositions[t];
			this._onTouchStart({
				pointerId: t,
				pageX: n.x,
				pageY: n.y
			});
	}
}
function va(e) {
	let t;
	switch (e.button) {
		case 0:
			t = this.mouseButtons.LEFT;
			break;
		case 1:
			t = this.mouseButtons.MIDDLE;
			break;
		case 2:
			t = this.mouseButtons.RIGHT;
			break;
		default: t = -1;
	}
	switch (t) {
		case _n.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseDownDolly(e), this.state = B.DOLLY;
			break;
		case _n.ROTATE:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(e), this.state = B.PAN;
			} else {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(e), this.state = B.ROTATE;
			}
			break;
		case _n.PAN:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(e), this.state = B.ROTATE;
			} else {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(e), this.state = B.PAN;
			}
			break;
		default: this.state = B.NONE;
	}
	this.state !== B.NONE && this.dispatchEvent(oa);
}
function ya(e) {
	switch (this.state) {
		case B.ROTATE:
			if (this.enableRotate === !1) return;
			this._handleMouseMoveRotate(e);
			break;
		case B.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseMoveDolly(e);
			break;
		case B.PAN:
			if (this.enablePan === !1) return;
			this._handleMouseMovePan(e);
	}
}
function ba(e) {
	this.enabled !== !1 && this.enableZoom !== !1 && this.state === B.NONE && (e.preventDefault(), this.dispatchEvent(oa), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(sa));
}
function xa(e) {
	this.enabled !== !1 && this._handleKeyDown(e);
}
function Sa(e) {
	switch (this._trackPointer(e), this._pointers.length) {
		case 1:
			switch (this.touches.ONE) {
				case Vt.ROTATE:
					if (this.enableRotate === !1) return;
					this._handleTouchStartRotate(e), this.state = B.TOUCH_ROTATE;
					break;
				case Vt.PAN:
					if (this.enablePan === !1) return;
					this._handleTouchStartPan(e), this.state = B.TOUCH_PAN;
					break;
				default: this.state = B.NONE;
			}
			break;
		case 2:
			switch (this.touches.TWO) {
				case Vt.DOLLY_PAN:
					if (this.enableZoom === !1 && this.enablePan === !1) return;
					this._handleTouchStartDollyPan(e), this.state = B.TOUCH_DOLLY_PAN;
					break;
				case Vt.DOLLY_ROTATE:
					if (this.enableZoom === !1 && this.enableRotate === !1) return;
					this._handleTouchStartDollyRotate(e), this.state = B.TOUCH_DOLLY_ROTATE;
					break;
				default: this.state = B.NONE;
			}
			break;
		default: this.state = B.NONE;
	}
	this.state !== B.NONE && this.dispatchEvent(oa);
}
function Ca(e) {
	switch (this._trackPointer(e), this.state) {
		case B.TOUCH_ROTATE:
			if (this.enableRotate === !1) return;
			this._handleTouchMoveRotate(e), this.update();
			break;
		case B.TOUCH_PAN:
			if (this.enablePan === !1) return;
			this._handleTouchMovePan(e), this.update();
			break;
		case B.TOUCH_DOLLY_PAN:
			if (this.enableZoom === !1 && this.enablePan === !1) return;
			this._handleTouchMoveDollyPan(e), this.update();
			break;
		case B.TOUCH_DOLLY_ROTATE:
			if (this.enableZoom === !1 && this.enableRotate === !1) return;
			this._handleTouchMoveDollyRotate(e), this.update();
			break;
		default: this.state = B.NONE;
	}
}
function wa(e) {
	this.enabled !== !1 && e.preventDefault();
}
function Ta(e) {
	e.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
function Ea(e) {
	e.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
//#endregion
//#region src/composition/ActorResidencyProjection.ts
function Da(e, t, n, r, i) {
	let a = new Map(e.actors.map((e) => [e.id, e])), o = !1;
	return async (s, c, l, u) => {
		if (o || !i()) throw Error("Actor 표시 변경 중이거나 해제된 원본입니다.");
		let d = Bn(e);
		if ([...s].some((e) => !a.has(e)) || d.some((e) => e.some((e) => s.has(e.id)) && e.some((e) => !s.has(e.id)) || e.some(zn) && e.some((e) => !s.has(e.id)))) throw Error("Actor 의존 묶음 또는 동적 액터를 분리할 수 없습니다.");
		let f = new Set(n.map((e) => e.actorId)), p = [], m = new sn();
		o = !0;
		try {
			for (let t of e.actors) if (s.has(t.id) && !f.has(t.id)) {
				c.throwIfAborted();
				let e = r(t);
				p.push(e), m.add(e.object), p.length % 32 == 0 && (await Promise.all(p.slice(-32).map((e) => e.ready)), await new Promise((e) => setTimeout(e, 0)));
			}
			if (await Promise.all(p.map((e) => e.ready)), c.throwIfAborted(), !i()) throw Error("해제된 원본의 늦은 Actor 로드를 폐기합니다.");
			m.traverse((e) => {
				let t = e.userData.assetResourceError ?? e.userData.attachmentError ?? e.userData.materialOverrideError;
				if (t) throw Error(String(t));
				e instanceof Ht && (e.intensity = 0);
			}), l(m), u(), t.invalidateMatrices();
			for (let e = n.length - 1; e >= 0; e--) if (!s.has(n[e].actorId)) {
				let [t] = n.splice(e, 1);
				t.object.removeFromParent(), t.dispose();
			}
			for (let e of p) t.add(e.object), n.push(e);
			let a = new Map(e.actors.map((e, t) => [e.id, t]));
			n.sort((e, t) => a.get(e.actorId) - a.get(t.actorId)), p.length = 0, t.updateWorldMatrix(!0, !0);
		} finally {
			await Promise.allSettled(p.map((e) => e.ready)), p.forEach((e) => e.dispose()), m.clear(), o = !1;
		}
	};
}
//#endregion
//#region src/assets/AnimationPlaybackService.ts
var Oa = class {
	asset;
	records = /* @__PURE__ */ new Map();
	disposed = !1;
	constructor(e) {
		this.asset = e;
	}
	create(e, t = {}) {
		this.requireActive();
		let n = Pa(e);
		if (this.records.has(n)) throw Error(`Animation playback already exists for ${e.worldSessionId}/${e.componentId}.`);
		let r = this.asset.instantiate();
		try {
			let i = t.clipIndex ?? 0, a = r.clips[i];
			if (!a) throw Error(`Unknown animation clip index ${i}.`);
			let o = t.loop ?? "repeat", s = Ra(t.rate ?? 1, "Animation playback rate"), c = Fa(za(t.initialTimeSeconds ?? 0, "Animation initial time"), a.duration, o), l = La(t.tintLinear ?? [
				1,
				1,
				1
			]), u = r.mixer.clipAction(a);
			u.setLoop(o === "repeat" ? pn : zt, o === "repeat" ? Infinity : 1), u.clampWhenFinished = !0, u.play(), u.paused = !0;
			let d = t.playing ?? !1, f = Ia(c, a.duration, o, s), p = {
				key: { ...e },
				instance: r,
				action: u,
				baseColors: Aa(r),
				clipIndex: i,
				rate: s,
				initialTimeSeconds: c,
				timeSeconds: c,
				loop: o,
				playing: d && !f,
				ended: f,
				tintLinear: l
			};
			return this.records.set(n, p), ja(p), ka(p), r;
		} catch (e) {
			throw r.dispose(), e;
		}
	}
	clone(e, t) {
		let n = this.require(e), r = this.create(t, {
			clipIndex: n.clipIndex,
			rate: n.rate,
			initialTimeSeconds: n.initialTimeSeconds,
			loop: n.loop,
			playing: n.playing,
			tintLinear: n.tintLinear
		});
		return this.seek(t, n.timeSeconds), r;
	}
	play(e) {
		let t = this.require(e);
		t.ended = Ia(t.timeSeconds, t.action.getClip().duration, t.loop, t.rate), t.playing = !t.ended;
	}
	pause(e) {
		this.require(e).playing = !1;
	}
	stop(e) {
		let t = this.require(e);
		t.playing = !1, t.timeSeconds = t.initialTimeSeconds, t.ended = Ia(t.timeSeconds, t.action.getClip().duration, t.loop, t.rate), ka(t);
	}
	seek(e, t) {
		let n = this.require(e);
		n.timeSeconds = Fa(Ra(t, "Animation seek time"), n.action.getClip().duration, n.loop), n.ended = Ia(n.timeSeconds, n.action.getClip().duration, n.loop, n.rate), n.ended && (n.playing = !1), ka(n);
	}
	setRate(e, t) {
		let n = this.require(e);
		n.rate = Ra(t, "Animation playback rate"), n.ended = Ia(n.timeSeconds, n.action.getClip().duration, n.loop, n.rate), n.ended && (n.playing = !1);
	}
	setLoop(e, t) {
		let n = this.require(e);
		n.loop = t, n.action.setLoop(t === "repeat" ? pn : zt, t === "repeat" ? Infinity : 1), n.timeSeconds = Fa(n.timeSeconds, n.action.getClip().duration, t), n.ended = Ia(n.timeSeconds, n.action.getClip().duration, t, n.rate), n.ended && (n.playing = !1), ka(n);
	}
	setTint(e, t) {
		let n = this.require(e);
		n.tintLinear = La(t), ja(n);
	}
	advanceWorld(e, t) {
		this.requireActive(), Ba(e, "worldSessionId"), za(t, "Animation clock delta");
		for (let n of this.records.values()) {
			if (n.key.worldSessionId !== e || !n.playing || n.rate === 0) continue;
			let r = n.action.getClip().duration, i = n.timeSeconds + t * n.rate;
			n.timeSeconds = Fa(i, r, n.loop), n.ended = n.loop === "once" && (r === 0 || n.rate > 0 && i >= r || n.rate < 0 && i <= 0), n.ended && (n.playing = !1), ka(n);
		}
	}
	instance(e) {
		return this.require(e).instance;
	}
	snapshot(e) {
		let t = this.require(e);
		return {
			clipIndex: t.clipIndex,
			rate: t.rate,
			initialTimeSeconds: t.initialTimeSeconds,
			timeSeconds: t.timeSeconds,
			loop: t.loop,
			playing: t.playing,
			ended: t.ended,
			tintLinear: [...t.tintLinear]
		};
	}
	delete(e) {
		this.requireActive();
		let t = Pa(e), n = this.records.get(t);
		return n ? (this.records.delete(t), n.instance.dispose(), !0) : !1;
	}
	get size() {
		return this.records.size;
	}
	dispose() {
		if (!this.disposed) {
			this.disposed = !0;
			for (let e of this.records.values()) e.instance.dispose();
			this.records.clear();
		}
	}
	require(e) {
		this.requireActive();
		let t = this.records.get(Pa(e));
		if (!t) throw Error(`Unknown animation playback ${e.worldSessionId}/${e.componentId}.`);
		return t;
	}
	requireActive() {
		if (this.disposed) throw Error("AnimationPlaybackService is disposed.");
	}
};
function ka(e) {
	e.action.time = e.timeSeconds, e.action.paused = !0, e.instance.mixer.update(0), e.instance.root.updateMatrixWorld(!0), e.instance.skinnedMeshes.forEach((e) => e.skeleton.update());
}
function Aa(e) {
	let t = /* @__PURE__ */ new Map();
	return e.skinnedMeshes.forEach((e) => Ma(e.material).forEach((e) => {
		Na(e) && t.set(e, e.color.clone());
	})), t;
}
function ja(e) {
	let t = new Ot(...e.tintLinear);
	e.baseColors.forEach((n, r) => {
		Na(r) && r.color.copy(n).multiply(t), r.userData.instanceTintLinear = [...e.tintLinear];
	});
}
function Ma(e) {
	return Array.isArray(e) ? e : [e];
}
function Na(e) {
	return "color" in e && e.color instanceof Ot;
}
function Pa(e) {
	return JSON.stringify([Ba(e.worldSessionId, "worldSessionId"), Ba(e.componentId, "componentId")]);
}
function Fa(e, t, n) {
	if (!Number.isFinite(t) || t < 0) throw Error("Animation clip duration must be finite and non-negative.");
	return t === 0 ? 0 : n === "once" ? Math.min(t, Math.max(0, e)) : (e % t + t) % t;
}
function Ia(e, t, n, r) {
	return t === 0 ? !0 : n === "repeat" || r === 0 ? !1 : r > 0 && e >= t || r < 0 && e <= 0;
}
function La(e) {
	if (e.length !== 3 || e.some((e) => !Number.isFinite(e) || e < 0)) throw Error("Animation instance tint must contain three non-negative finite linear values.");
	return [...e];
}
function Ra(e, t) {
	if (!Number.isFinite(e)) throw Error(`${t} must be finite.`);
	return e;
}
function za(e, t) {
	if (!Number.isFinite(e) || e < 0) throw Error(`${t} must be finite and non-negative.`);
	return e;
}
function Ba(e, t) {
	if (!e.trim()) throw Error(`${t} must be non-empty.`);
	return e;
}
//#endregion
//#region src/assets/AnimationPlaybackWorld.ts
var Va = class {
	kind;
	worldSessionId;
	state = "stopped";
	timeSeconds = 0;
	tickCount = 0;
	records = /* @__PURE__ */ new Map();
	lastClockId = -1;
	constructor(e, t) {
		if (this.kind = e, t.length === 0) throw Error("Animation World session ID must not be empty.");
		this.worldSessionId = t;
	}
	start() {
		if (this.state !== "stopped" || this.tickCount !== 0 || this.records.size !== 0) throw Error("Animation Playback World can only start once.");
		this.state = "running";
	}
	create(e, t, n = {}) {
		if (this.requireLive(), t.length === 0) throw Error("Animation Component ID must not be empty.");
		if (this.records.has(t)) throw Error(`Animation playback already exists for ${this.worldSessionId}/${t}.`);
		let r = new Oa(e), i = {
			worldSessionId: this.worldSessionId,
			componentId: t
		}, a = r.create(i, n);
		this.timeSeconds > 0 && r.advanceWorld(this.worldSessionId, this.timeSeconds);
		let o = {
			service: r,
			key: i
		};
		this.records.set(t, o);
		let s = !1, c = () => {
			if (s || this.records.get(t) !== o) throw Error(`Animation playback ${t} is disposed.`);
			return o;
		};
		return {
			key: i,
			instance: a,
			snapshot: () => c().service.snapshot(i),
			play: () => c().service.play(i),
			pause: () => c().service.pause(i),
			seek: (e) => c().service.seek(i, e),
			stop: () => c().service.stop(i),
			dispose: () => {
				s || (s = !0, this.records.get(t) === o && this.records.delete(t), r.dispose());
			}
		};
	}
	advanceRenderFrame(e, t) {
		return this.kind === "asset-preview" && this.advance(e, t, !1);
	}
	advanceSimulationTick(e, t) {
		return this.kind === "gameplay-runtime" && this.advance(e, t, !1);
	}
	stepRenderFrame(e, t = 1 / 60) {
		if (this.kind !== "asset-preview") throw Error("Only an Asset Preview animation World can render-Step.");
		if (this.state !== "paused") throw Error("Animation Step requires a paused World.");
		return this.advance(e, t, !0);
	}
	stepSimulation(e, t = 1 / 60) {
		if (this.kind !== "gameplay-runtime") throw Error("Only a Gameplay Runtime animation World can Step.");
		if (this.state !== "paused") throw Error("Animation Step requires a paused World.");
		return this.advance(e, t, !0);
	}
	pause() {
		if (this.state !== "running") throw Error("Only a running Animation World can pause.");
		this.state = "paused";
	}
	resume() {
		if (this.state !== "paused") throw Error("Only a paused Animation World can resume.");
		this.state = "running";
	}
	stop() {
		if (this.state !== "stopped") {
			this.state = "stopped";
			for (let e of this.records.values()) e.service.dispose();
			this.records.clear();
		}
	}
	get size() {
		return this.records.size;
	}
	advance(e, t, n) {
		if (this.requireLive(), !Number.isInteger(e) || e < 0) throw Error("Animation clock ID must be a non-negative integer.");
		if (!Number.isFinite(t) || t < 0) throw Error("Animation clock delta must be finite and non-negative.");
		if (!n && this.state !== "running" || e === this.lastClockId) return !1;
		if (e < this.lastClockId) throw Error("Animation clock ID cannot move backwards.");
		this.lastClockId = e, this.timeSeconds += t, this.tickCount += 1;
		for (let e of this.records.values()) e.service.advanceWorld(this.worldSessionId, t);
		return !0;
	}
	requireLive() {
		if (this.state === "stopped") throw Error("Animation Playback World is stopped.");
	}
};
//#endregion
//#region src/render/PrimitiveGeometry.ts
function Ha(e) {
	switch (e) {
		case "Sphere": return new Kt(.5, 24, 16);
		case "Cylinder": return new Zt(.5, .5, 1, 24);
		case "Cone": return new mn(.5, 1, 24);
		case "Plane": return new Pt(1, 1).rotateX(-Math.PI / 2);
		case "Cube": return new Jt(1, 1, 1);
	}
}
//#endregion
//#region src/render/StaticMeshLodView.ts
var Ua = class {
	root;
	distanceMeters;
	hysteresis;
	activeLevels = /* @__PURE__ */ new WeakMap();
	constructor(e, t, n) {
		this.root = e, this.distanceMeters = t, this.hysteresis = n;
	}
	apply(e) {
		let t = this.root.children.map((e) => e.visible), n = e.getWorldPosition(new N()).distanceTo(this.root.getWorldPosition(new N())), r = this.activeLevels.get(e) === 1 ? n < this.distanceMeters * (1 - this.hysteresis) ? 0 : 1 : +(n >= this.distanceMeters);
		return this.activeLevels.set(e, r), this.root.children.forEach((e, t) => {
			e.visible = t === r;
		}), () => this.root.children.forEach((e, n) => {
			e.visible = t[n];
		});
	}
};
//#endregion
//#region src/render/ActorDirectionHelper.ts
function Wa(e) {
	let t = new sn();
	t.name = `${e} editor helper`;
	let n = new sn();
	n.name = e === "DirectionalLight" ? "Sun icon" : e === "SceneNode" ? "Empty actor icon" : "Player start flag";
	let r = e === "DirectionalLight" ? 16765276 : e === "SceneNode" ? 8766975 : 9233581, i = new At({
		color: r,
		side: 2,
		depthTest: !1,
		depthWrite: !1,
		toneMapped: !1
	}), a = (e, t = n) => {
		let r = new M(e, i);
		return t.add(r), r;
	};
	if (e === "DirectionalLight") {
		a(new Ut(.13, 24)), a(new vn(.18, .205, 32));
		for (let e = 0; e < 8; e++) {
			let t = e * Math.PI / 4, n = a(new Zt(.013, .013, .12, 5));
			n.rotation.z = -t, n.position.set(Math.sin(t) * .29, Math.cos(t) * .29, 0);
		}
	} else if (e === "SceneNode") {
		n.position.y = .25;
		let e = new _t();
		e.moveTo(0, .15), e.lineTo(.12, 0), e.lineTo(0, -.15), e.lineTo(-.12, 0), e.closePath(), a(new It(e));
	} else {
		let e = a(new Zt(.018, .018, .7, 6));
		e.position.y = .35;
		let t = new _t();
		t.moveTo(.02, .7), t.lineTo(.46, .64), t.lineTo(.35, .47), t.lineTo(.02, .51), t.closePath(), a(new It(t));
	}
	if (t.add(n), e !== "SceneNode") {
		let n = new sn();
		n.name = "Forward direction", n.quaternion.setFromUnitVectors(new N(0, 1, 0), new N(...de([
			1,
			0,
			0
		])));
		let r = a(new Zt(.025, .025, .85, 8), n);
		r.position.y = e === "PlayerStart" ? .425 : .6;
		let i = a(new mn(.11, .25, 12), n);
		i.position.y = e === "PlayerStart" ? .975 : 1.15, t.add(n);
	}
	t.traverse((e) => {
		e.layers.set(1), e.userData.editorHelper = !0, e.renderOrder = 5;
	});
	let o = new bt();
	return {
		object: t,
		setIconPresentation(e, n) {
			t.children.forEach((t) => {
				t.visible = e;
			}), t.scale.setScalar(n), t.updateMatrixWorld(!0);
		},
		setSelected(e) {
			i.color.setHex(e ? 16752178 : r);
		},
		prepareView(e) {
			t.getWorldQuaternion(o), n.quaternion.copy(o.invert()).multiply(e.getWorldQuaternion(new bt())), n.updateMatrixWorld(!0);
		},
		dispose() {
			t.traverse((e) => {
				e instanceof M && e.geometry.dispose();
			}), i.dispose(), t.removeFromParent();
		}
	};
}
//#endregion
//#region src/render/LocalLightHelper.ts
var Ga = new N(...de([
	1,
	0,
	0
]));
function Ka(e) {
	if (e.type === "DirectionalLight") throw Error("Local light helper requires PointLight or SpotLight.");
	let t = new sn();
	t.name = `${e.type} editor helper`, t.matrixAutoUpdate = !1;
	let n = new sn();
	n.name = e.type === "PointLight" ? "Bulb icon" : "Stage light icon";
	let r = new sn();
	r.name = "Light influence", r.visible = !1;
	let i = new At({
		color: 16765276,
		side: 2,
		depthTest: !1,
		depthWrite: !1,
		toneMapped: !1
	}), a = new un({
		color: 16752178,
		depthTest: !1,
		depthWrite: !1,
		toneMapped: !1
	}), o = new un({
		color: 16765048,
		depthTest: !1,
		depthWrite: !1,
		toneMapped: !1
	}), s = (e, t = [
		0,
		0,
		0
	]) => {
		let r = new M(e, i);
		return r.position.fromArray(t), n.add(r), r;
	};
	if (e.type === "PointLight") {
		s(new vn(.16, .2, 24), [
			0,
			.08,
			0
		]), s(new Zt(.07, .1, .16, 8), [
			0,
			-.16,
			0
		]);
		for (let e of [-.05, .05]) s(new Zt(.008, .008, .15, 4), [
			e,
			0,
			0
		]);
		s(new Zt(.012, .012, .1, 4), [
			0,
			-.26,
			0
		]);
	} else {
		let e = new _t();
		e.moveTo(-.23, .16), e.lineTo(.13, .16), e.lineTo(.24, -.1), e.lineTo(-.23, -.1), e.closePath(), s(new It(e));
		let t = s(new Zt(.022, .022, .32, 6), [
			.27,
			.02,
			0
		]);
		t.rotation.z = .35;
		for (let e of [-.15, .15]) s(new Zt(.015, .015, .2, 6), [
			e,
			-.2,
			0
		]);
		let n = s(new Zt(.018, .018, .32, 6), [
			0,
			-.3,
			0
		]);
		n.rotation.z = Math.PI / 2, s(new Zt(.022, .022, .14, 6), [
			0,
			-.38,
			0
		]);
	}
	t.add(n, r);
	let c = () => t.traverse((e) => {
		e.layers.set(1), e.userData.editorHelper = !0, e.renderOrder = 5;
	}), l = () => {
		r.children.forEach((e) => {
			e instanceof $t && e.geometry.dispose();
		}), r.clear();
	}, u = "", d = (e) => {
		let t = JSON.stringify([
			e.rangeMeters,
			e.type === "SpotLight" && e.innerConeDegrees,
			e.type === "SpotLight" && e.outerConeDegrees
		]);
		if (t === u) return;
		u = t, l();
		let n = (e, t, n) => {
			let i = new Rt();
			i.setAttribute("position", new Nt(t, 3));
			let a = new $t(i, n);
			a.name = e, a.raycast = () => {}, r.add(a);
		}, i = e.rangeMeters;
		if (e.type === "PointLight") {
			let e = [];
			for (let t = 0; t < 3; t++) for (let n = 0; n < 64; n++) for (let r of [n, n + 1]) {
				let n = r * 2 * Math.PI / 64, a = i * Math.cos(n), o = i * Math.sin(n);
				e.push(...t === 0 ? [
					a,
					o,
					0
				] : t === 1 ? [
					a,
					0,
					o
				] : [
					0,
					a,
					o
				]);
			}
			n("Attenuation radius (inside / outside)", e, a);
		} else for (let [t, r, s] of [[
			"Outer cone",
			e.outerConeDegrees,
			a
		], [
			"Inner cone",
			e.innerConeDegrees,
			o
		]]) {
			let e = r * Math.PI / 180, a = i * Math.sin(e), o = i * Math.cos(e), c = [];
			for (let e = 0; e < 64; e++) for (let t of [e, e + 1]) {
				let e = t * 2 * Math.PI / 64;
				c.push(a * Math.cos(e), a * Math.sin(e), -o);
			}
			for (let t = 0; t < 4; t++) {
				let n = t * Math.PI / 2;
				c.push(0, 0, 0, a * Math.cos(n), a * Math.sin(n), -o);
				for (let t = 0; t < 16; t++) for (let r of [t, t + 1]) {
					let t = e * r / 16;
					c.push(i * Math.sin(t) * Math.cos(n), i * Math.sin(t) * Math.sin(n), -i * Math.cos(t));
				}
			}
			n(t, c, s);
		}
		c();
	};
	d(e);
	let f = new N(), p = new N(), m = new bt(), h = new mt(), g = new mt();
	return {
		object: t,
		update: d,
		setIconPresentation(e, t) {
			n.visible = e, n.scale.setScalar(t), n.updateMatrixWorld(!0);
		},
		getBounds() {
			return new on().setFromObject(n);
		},
		setSelected(e) {
			r.visible = e, i.color.setHex(e ? 16752178 : 16765276);
		},
		prepareView(e) {
			let r = t.parent;
			r && (r.updateWorldMatrix(!0, !1), f.setFromMatrixPosition(r.matrixWorld), p.copy(Ga).transformDirection(r.matrixWorld), m.setFromUnitVectors(Ga, p), h.compose(f, m, new N(1, 1, 1)), t.matrix.copy(g.copy(r.matrixWorld).invert()).multiply(h), n.quaternion.copy(m).invert().multiply(e.getWorldQuaternion(new bt())), t.matrixWorldNeedsUpdate = !0, t.updateWorldMatrix(!1, !0));
		},
		dispose() {
			l(), n.traverse((e) => {
				e instanceof M && e.geometry.dispose();
			}), i.dispose(), a.dispose(), o.dispose(), t.removeFromParent();
		}
	};
}
function qa(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= .25 && e <= 4;
}
//#endregion
//#region out/component-packages/c6b8244101f48f5c489d8da3edaa1f852a59612e3138c952c94c86aa9adfbd4d/index.js
function Ja(e) {
	let t, n = 0;
	return {
		onRegister() {
			t = e.requireMeshReference("targetMesh").getLocalTransform(), e.setTickEnabled(!0);
		},
		tick(r) {
			n += r;
			let i = e.settings.radiansPerSecond * n / 2, a = Math.sin(i), o = Math.cos(i), [s, c, l, u] = t.rotationXyzw;
			e.requireMeshReference("targetMesh").setLocalTransform({
				positionMeters: [
					t.positionMeters[0] + e.settings.speedMetersPerSecond * n,
					t.positionMeters[1],
					t.positionMeters[2]
				],
				rotationXyzw: [
					s * o - l * a,
					c * o + u * a,
					l * o + s * a,
					u * o - c * a
				],
				scale: t.scale
			});
		}
	};
}
//#endregion
//#region out/component-packages/2362c62a36074d101aa69ef8a6174f3dc6de05e8d4b10aa68d5523988f74bbfc/index.js
var Ya = (e) => {
	let t, n = 0;
	return {
		onRegister() {
			t = e.requireMeshReference("targetMesh").getLocalTransform().scale, e.requireReference("alarmData"), e.setTickEnabled(!0);
		},
		tick(r) {
			let i = e.requireReference("alarmData").value;
			if (i !== 0 && i !== 1) throw Error("Mesh Effect requires a binary Alarm value (0 or 1).");
			if (!Number.isFinite(r) || r < 0) throw Error("Mesh Effect delta time must be finite and nonnegative.");
			n = i === 1 ? (n + r % (1 / e.settings.frequencyHz) * e.settings.frequencyHz) % 1 : 0;
			let a = 1 + e.settings.amplitude * (1 - Math.cos(2 * Math.PI * n)) / 2;
			e.requireMeshReference("targetMesh").setLocalScale([
				t[0] * a,
				t[1] * a,
				t[2] * a
			]);
		}
	};
}, Xa = (e) => {
	let t, n = 0;
	return {
		onRegister() {
			t = e.requireMeshReference("targetMesh").getLocalTransform().scale, e.requireReference("alarmData"), e.setTickEnabled(!0);
		},
		tick(r) {
			let i = e.readSignal("alarmData", e.settings.maxAgeSeconds);
			n = i.quality === "valid" && i.value === 1 ? (n + r % (1 / e.settings.frequencyHz) * e.settings.frequencyHz) % 1 : 0;
			let a = 1 + e.settings.amplitude * (1 - Math.cos(2 * Math.PI * n)) / 2;
			e.requireMeshReference("targetMesh").setLocalScale([
				t[0] * a,
				t[1] * a,
				t[2] * a
			]);
		}
	};
}, Za = (e) => ({
	onRegister() {
		e.requireMeshReference("sourceMesh"), e.requireReference("outputData"), e.setTickEnabled(!0);
	},
	tick() {
		let t = e.requireMeshReference("sourceMesh").getLocalTransform().positionMeters[0];
		if (!Number.isFinite(t)) throw Error("Position Sensor requires a finite position.");
		e.requireReference("outputData").value = t;
	}
}), Qa = (e) => {
	let t;
	return {
		onRegister() {
			e.requireMeshReference("sourceMesh"), t = e.claimSignalOutput("outputData"), e.setTickEnabled(!0);
		},
		tick() {
			let n = e.requireMeshReference("sourceMesh").getLocalTransform().positionMeters[0];
			if (!Number.isFinite(n)) {
				t.invalidate("nonfinite-position");
				return;
			}
			t.publish(n);
		}
	};
}, $a = class {
	context;
	constructor(e) {
		this.context = e;
	}
	target() {
		let { owner: e, settings: t } = this.context, n = e.getComponentById(t.targetComponentId);
		if (!n) throw Error(`TestScript requires owned TestData ${t.targetComponentId}.`);
		return n;
	}
	onRegister() {
		this.target(), this.context.setTickEnabled(!0);
	}
	tick(e) {
		let t = this.target(), n = t.value + this.context.settings.ratePerSecond * e;
		if (!Number.isFinite(n)) throw Error("TestScript result must be finite.");
		t.value = n;
	}
};
function eo(e) {
	return new $a(e);
}
//#endregion
//#region out/component-packages/e3c24fd4266ff8ddd5556b8f3923b01689363e6244aaa60be6b3abfdfe3867c3/index.js
function to(e) {
	return {
		onRegister() {
			e.setTickEnabled(!0);
		},
		tick(t) {
			if (!e.settings.running) return;
			let n = e.requireReference("sourceData"), r = e.requireReference("targetData"), i = r.value + n.value * e.settings.gain * t;
			if (!Number.isFinite(i)) throw Error("Test settings result must be finite.");
			r.value = i;
			let a = e.getReference("mirrorData");
			a && (a.value = i);
		}
	};
}
//#endregion
//#region out/component-packages/d80e628947af12069f65a193212a42aa02e49df8b936acc1e09a5a1b36c9235f/index.js
function no(e) {
	return {
		onRegister() {
			e.setTickEnabled(!0);
		},
		tick(t) {
			if (!e.settings.running) return;
			let n = e.requireReference("sourceData"), r = e.requireReference("targetData"), i = r.value + (n.value * e.settings.multiplier + e.settings.bias) * t;
			if (!Number.isFinite(i)) throw Error("Test settings result must be finite.");
			r.value = i;
			let a = e.getReference("mirrorData");
			a && (a.value = i);
		}
	};
}
//#endregion
//#region out/component-packages/c2c5c8a5908fbcbcb08cb54762d1d4c5d5965be8be1dda8e779da3912423ea29/index.js
var ro = class {
	context;
	constructor(e) {
		this.context = e;
	}
	target() {
		let { owner: e, settings: t } = this.context, n = e.getComponentById(t.targetComponentId);
		if (!n) throw Error(`TestScript requires owned TestData ${t.targetComponentId}.`);
		return n;
	}
	onRegister() {
		this.target(), this.context.setTickEnabled(!0);
	}
	tick(e) {
		let t = this.target(), n = t.value - this.context.settings.ratePerSecond * e;
		if (!Number.isFinite(n)) throw Error("TestScript result must be finite.");
		t.value = n;
	}
};
function io(e) {
	return new ro(e);
}
//#endregion
//#region out/component-packages/installed.ts
var ao = Object.freeze({
	c6b8244101f48f5c489d8da3edaa1f852a59612e3138c952c94c86aa9adfbd4d: Ja,
	"2362c62a36074d101aa69ef8a6174f3dc6de05e8d4b10aa68d5523988f74bbfc": Ya,
	df99d8749c6e8d3a095ecd5364fc8cf4ea5c0d9f70b1a7c7ccc52727390e2ae6: Xa,
	"6938f1b7cdc3ef225be8a9f165a6d9543111142b7b6b14d931e8db0526620c66": Za,
	"4f5e2994bf0aad90cc545725cfd9a44d14b7035d70ba646d0a00b1ba88b7d8fc": Qa,
	cc22c8fb6e95f1090a51c0a00086d2db881af1f038898053e5f993b53eeea2ea: eo,
	e3c24fd4266ff8ddd5556b8f3923b01689363e6244aaa60be6b3abfdfe3867c3: to,
	d80e628947af12069f65a193212a42aa02e49df8b936acc1e09a5a1b36c9235f: no,
	c2c5c8a5908fbcbcb08cb54762d1d4c5d5965be8be1dda8e779da3912423ea29: io,
	cdbea140c73c56e518a2fb35e45fa9cfb4792bbf730aee8c87bb82d1fe81691d: (e) => {
		let t = !1, { threshold: n, hysteresis: r } = e.settings;
		return {
			onRegister() {
				let t = e.requireReference("sourceData"), i = e.requireReference("alarmData");
				if (t.id === i.id) throw Error("Alarm input and output must be different Components.");
				if (!Number.isFinite(n) || !Number.isFinite(r) || r < 0 || !Number.isFinite(n - r)) throw Error("Invalid Alarm threshold/hysteresis.");
				e.setTickEnabled(!0);
			},
			tick() {
				let i = e.requireReference("sourceData").value;
				if (!Number.isFinite(i)) throw Error("Alarm input must be finite.");
				t = t ? r === 0 ? i >= n : i > n - r : i >= n, e.requireReference("alarmData").value = +!!t;
			}
		};
	},
	"083d838ccf78d6ceb520a49516ac2a8ba6356a263f86a741363ff5c6ec088151": (e) => {
		let t = !1, n, { threshold: r, hysteresis: i, maxAgeSeconds: a } = e.settings;
		return {
			onRegister() {
				if (e.requireReference("sourceData").id === e.requireReference("alarmData").id) throw Error("Alarm input and output must be different Components.");
				if (!Number.isFinite(r - i)) throw Error("Invalid Alarm release boundary.");
				n = e.claimSignalOutput("alarmData"), e.setTickEnabled(!0);
			},
			tick() {
				let o = e.readSignal("sourceData", a);
				if (o.quality !== "valid" || o.value === null) {
					t = !1, n.invalidate(`input-${o.quality}`);
					return;
				}
				t = t ? i === 0 ? o.value >= r : o.value > r - i : o.value >= r, n.publish(+!!t);
			}
		};
	}
}), oo = /* @__PURE__ */ new Map();
function so(e, t) {
	if (h(e), oo.has(e)) throw Error(`Duplicate addon capability provider: ${e}`);
	oo.set(e, t);
}
var co = (e) => e.length === 3 && e.every(Number.isFinite), lo = (e) => {
	if (!/^#[a-fA-F0-9]{6}$/.test(e)) throw Error("Display color must be #RRGGBB");
	return e;
}, uo = (e) => {
	if (!Number.isFinite(e) || e < 0 || e > 1) throw Error("Display opacity must be in [0,1]");
	return e;
}, fo = /* @__PURE__ */ new Set(), po = /* @__PURE__ */ new WeakMap();
function mo(e) {
	let t = po.get(e);
	if (t) return t;
	t = {
		actors: new Map(e.actors.map((e) => [e.id, e])),
		children: /* @__PURE__ */ new Map()
	};
	for (let n of e.actors) {
		let e = nt(n).attachmentParent?.actorId;
		if (e) {
			let r = t.children.get(e) ?? [];
			r.push(n.id), t.children.set(e, r);
		}
	}
	return po.set(e, t), t;
}
var ho = class {
	options;
	actorId;
	object;
	projections;
	instances = /* @__PURE__ */ new Map();
	disposed = !1;
	lastFrame = -1;
	lastDelta = 0;
	ready;
	constructor(e, t, n, r) {
		this.options = e, this.actorId = t, this.object = n, this.projections = r, fo.add(this), this.ready = this.sync();
	}
	get active() {
		return [...this.instances.values()].some((e) => e.state === "starting" || e.state === "running");
	}
	actor() {
		return mo(this.options.document()).actors.get(this.actorId);
	}
	assertLive(e) {
		if (this.disposed || e.state === "faulted" || e.state === "disposed") throw Error("Addon instance is no longer alive");
	}
	release(e) {
		try {
			e.behavior?.onDestroy?.();
		} catch {}
		e.behavior = void 0, e.cleanups.splice(0).reverse().forEach((e) => {
			try {
				e();
			} catch {}
		}), e.properties.dispose(), e.group.removeFromParent(), e.group.clear();
	}
	fault(e, t) {
		e.error = t instanceof Error ? t.message : "Addon failed", e.state = "faulted", this.release(e);
	}
	async sync() {
		let e = this.options.document(), t = this.actor();
		if (!t) return;
		let n = t.components.filter((e) => e.type === "TestScript").filter((e) => s(e).manifest.sdkVersion === 5), r = new Set(n.map((e) => e.id));
		for (let [e, t] of this.instances) r.has(e) || (t.state = "disposed", this.release(t), this.instances.delete(e));
		if (!this.disposed) for (let r of n) {
			let n = s(r);
			if (n.manifest.sdkVersion !== 5) continue;
			let i = n.manifest, o = this.instances.get(r.id);
			o && o.reference.codeHash !== n.reference.codeHash && (o.state = "disposed", this.release(o), this.instances.delete(r.id), o = void 0);
			let c = {
				compositionId: this.options.compositionId ?? e.id,
				mountId: this.options.mountId ?? null,
				actorId: t.id,
				componentId: r.id
			}, l = {
				...a(r),
				...this.options.overrides?.(c, n.reference)
			};
			if (o) {
				o.properties.restore(l);
				continue;
			}
			let u = new sn();
			u.name = `addon:${r.id}`, u.userData.addonDisplay = !0, this.object.add(u);
			let d = {
				target: c,
				reference: n.reference,
				properties: new st(n.manifest, l),
				group: u,
				cleanups: [],
				state: "starting"
			};
			this.instances.set(r.id, d);
			try {
				if (!n.manifest.environments.includes(this.options.environment)) throw Error(`Addon ${n.manifest.displayName} does not support ${this.options.environment}`);
				for (let e of n.manifest.capabilities) if (h(e, this.options.environment), !oo.has(e)) throw Error(`Addon capability provider unavailable: ${e}`);
				if (await _r({
					...e,
					actors: [{
						...t,
						components: [r]
					}]
				}, { includeGeneric: !0 }), this.disposed || this.instances.get(r.id) !== d || !this.actor()?.components.some((e) => e.id === r.id)) continue;
				let a = gr(n.reference.codeHash) ?? ao[n.reference.codeHash];
				if (typeof a != "function") throw Error("Exact addon module is missing");
				let o = /* @__PURE__ */ new Map();
				if (d.behavior = a(Object.freeze({
					id: r.id,
					target: Object.freeze(c),
					environment: this.options.environment,
					get settings() {
						return d.properties.settings;
					},
					capability: (e) => {
						if (this.assertLive(d), !i.capabilities.includes(e)) throw Error(`Addon did not declare capability: ${e}`);
						return o.has(e) || o.set(e, oo.get(e)(this, d)), o.get(e);
					},
					guardAsync: (e, t) => {
						e.then((e) => {
							if (!this.disposed && d.state === "running") try {
								t(e);
							} catch (e) {
								this.fault(d, e);
							}
						}, (e) => {
							!this.disposed && d.state === "running" && this.fault(d, e);
						});
					}
				})), !d.behavior || typeof d.behavior != "object") throw Error("Invalid addon factory result");
				d.cleanups.push(d.properties.subscribe((e) => {
					try {
						d.behavior?.onPropertiesChanged?.(e);
					} catch (e) {
						this.fault(d, e);
					}
				})), d.behavior.onRegister?.(), d.state === "starting" && (d.state = "running");
			} catch (e) {
				this.fault(d, e);
			}
		}
	}
	update() {
		this.sync().catch((e) => {
			for (let t of this.instances.values()) this.fault(t, e);
		});
	}
	frame(e, t) {
		if (!(this.disposed || this.lastFrame === e && (t <= 0 || this.lastDelta > 0))) {
			this.lastFrame = e, this.lastDelta = t;
			for (let e of this.instances.values()) if (e.state === "running") try {
				e.behavior?.tick?.(Math.max(0, Math.min(Number.isFinite(t) ? t : 0, .1)));
			} catch (t) {
				this.fault(e, t);
			}
		}
	}
	list() {
		return [...this.instances.values()].map((e) => ({
			target: { ...e.target },
			reference: e.reference,
			environment: this.options.environment,
			schema: lt(e.properties.manifest),
			values: e.properties.values,
			revision: e.properties.revision,
			state: e.state,
			...e.error ? { error: e.error } : {}
		}));
	}
	change(e, t, n, r) {
		let i = this.instances.get(e.componentId);
		if (!i || A(i.target) !== A(e)) throw Error("Addon instance target not found");
		return this.assertLive(i), i.properties.apply(t, n, r, this.options.persist ? (t) => this.options.persist(e, t, i.reference) : void 0), this.list().find((t) => t.target.componentId === e.componentId);
	}
	synchronize(e, t) {
		let n = this.instances.get(e.componentId);
		if (!n || A(n.target) !== A(e)) throw Error("Exact addon instance not found");
		let r = {};
		for (let [e, i] of Object.entries(t)) {
			let t = n.properties.manifest.properties.find((t) => t.name === e);
			if (!t) throw Error("Unknown synchronized addon property");
			let a = t.storage === "runtime" ? "runtime" : "persistent";
			if (t.access === "read-write") Object.assign(r, ot(n.properties.manifest, { [e]: i }, a));
			else if (i !== n.properties.values[e]) throw Error("Remote cannot overwrite a read-only addon property");
		}
		n.properties.mirror(r);
	}
	clearSynchronization() {
		for (let e of this.instances.values()) e.state === "running" && e.properties.mirror({});
	}
	propertiesAPI(e) {
		return Object.freeze({
			current: () => (this.assertLive(e), e.properties.values),
			subscribe: (t) => {
				this.assertLive(e);
				let n = e.properties.subscribe((n) => {
					try {
						this.assertLive(e), t(n);
					} catch (t) {
						!this.disposed && e.state !== "disposed" && e.state !== "faulted" && this.fault(e, t);
					}
				});
				return e.cleanups.push(n), n;
			}
		});
	}
	dispose() {
		if (!this.disposed) {
			this.disposed = !0;
			for (let e of this.instances.values()) e.state = "disposed", this.release(e);
			this.instances.clear(), fo.delete(this);
		}
	}
	sceneAPI(e) {
		let t = (t) => {
			this.assertLive(e);
			let n = mo(this.options.document()).actors.get(t);
			return n ? Object.freeze({
				id: n.id,
				name: n.name,
				componentIds: Object.freeze(n.components.map((e) => e.id))
			}) : void 0;
		}, n = (e) => {
			let t = mo(this.options.document()), n = /* @__PURE__ */ new Set(), r = [e];
			for (let e = 0; e < r.length; e++) for (let i of t.children.get(r[e]) ?? []) n.has(i) || (n.add(i), r.push(i));
			return [...n];
		};
		return Object.freeze({
			actor: t,
			actors: () => this.options.document().actors.map((e) => t(e.id)),
			parent: (e) => {
				let n = this.options.document().actors.find((t) => t.id === e), r = n && nt(n).attachmentParent?.actorId;
				return r ? t(r) : void 0;
			},
			descendants: (e) => n(e).map((e) => t(e)),
			components: (t) => (this.assertLive(e), this.options.document().actors.find((e) => e.id === t)?.components.map((e) => Object.freeze({
				id: e.id,
				type: e.type
			})) ?? []),
			component: (t, n) => {
				this.assertLive(e);
				let r = this.options.document().actors.find((e) => e.id === t)?.components.find((e) => e.id === n);
				return r ? Object.freeze(structuredClone(r)) : void 0;
			},
			transform: (t) => (this.assertLive(e), structuredClone(this.options.transform?.(t) ?? ke(this.options.document(), t))),
			bounds: (t, r) => {
				this.assertLive(e);
				let i = [t, ...r ? n(t) : []], a = new on();
				this.object.updateWorldMatrix(!0, !1);
				let o = this.object.matrixWorld.clone().invert();
				for (let e of i) for (let t of this.projections().get(e)?.values() ?? []) {
					t.object.updateWorldMatrix(!0, !0);
					for (let e of t.contentMeshes?.() ?? t.instancingMeshes(!0)) {
						if (e instanceof Lt) {
							e.computeBoundingBox(), e.boundingBox && a.union(e.boundingBox.clone().applyMatrix4(new mt().multiplyMatrices(o, e.matrixWorld)));
							continue;
						}
						if (e instanceof Et && (e.computeBoundingBox(), e.boundingBox)) {
							a.union(e.boundingBox.clone().applyMatrix4(new mt().multiplyMatrices(o, e.matrixWorld)));
							continue;
						}
						e.geometry.boundingBox || e.geometry.computeBoundingBox(), e.geometry.boundingBox && a.union(e.geometry.boundingBox.clone().applyMatrix4(new mt().multiplyMatrices(o, e.matrixWorld)));
					}
				}
				return a.isEmpty() ? null : Object.freeze({
					min: Object.freeze(a.min.toArray()),
					max: Object.freeze(a.max.toArray())
				});
			}
		});
	}
	displayAPI(e) {
		let t = (t, n, r, i) => {
			let a = !1;
			t.userData.addonDisplay = !0, t.raycast = () => {}, t.renderOrder = 20;
			let o = () => {
				a || (a = !0, t.removeFromParent(), r());
			}, s = (r) => {
				if (this.assertLive(e), a) throw Error("Display handle disposed");
				n(r), t.updateMatrixWorld(!0);
			};
			try {
				s(i), e.group.add(t), e.cleanups.push(o);
			} catch (e) {
				throw o(), e;
			}
			return Object.freeze({
				update: s,
				dispose: o
			});
		};
		return Object.freeze({
			box: (e) => {
				let n = new Jt(1, 1, 1), r = new At({
					transparent: !0,
					depthWrite: !1,
					side: 2
				}), i = new M(n, r);
				return t(i, (e) => {
					if (!co(e.bounds.min) || !co(e.bounds.max) || e.bounds.min.some((t, n) => t > e.bounds.max[n])) throw Error("Invalid display bounds");
					r.color.set(lo(e.color)), r.opacity = uo(e.opacity), i.position.set(...e.bounds.min.map((t, n) => (t + e.bounds.max[n]) / 2)), i.scale.set(...e.bounds.max.map((t, n) => Math.max(1e-6, t - e.bounds.min[n])));
				}, () => {
					n.dispose(), r.dispose();
				}, e);
			},
			line: (e) => {
				let n = new Rt(), r = new un({
					transparent: !0,
					depthWrite: !1
				}), i = new an(n, r);
				return t(i, (e) => {
					if (e.points.length < 2 || e.points.length > 1e4 || e.points.some((e) => !co(e))) throw Error("Invalid display line");
					r.color.set(lo(e.color)), r.opacity = uo(e.opacity), n.setFromPoints(e.points.map((e) => new N(...e)));
				}, () => {
					n.dispose(), r.dispose();
				}, e);
			},
			text: (e) => {
				let n = document.createElement("canvas");
				n.width = 1024, n.height = 128;
				let r = n.getContext("2d");
				if (!r) throw Error("Text canvas unavailable");
				let i = new gn(n), a = new Xt({
					map: i,
					transparent: !0,
					depthWrite: !1
				}), o = new ln(a), s = "";
				return t(o, (e) => {
					if (typeof e.text != "string" || e.text.length > 4096 || !co(e.positionMeters) || !Number.isFinite(e.heightMeters) || e.heightMeters <= 0 || e.heightMeters > 1e4) throw Error("Invalid display text");
					lo(e.color);
					let t = JSON.stringify([e.text, e.color]);
					s !== t && (r.clearRect(0, 0, 1024, 128), r.font = "56px sans-serif", r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = e.color, r.fillText(e.text, 512, 64, 1e3), i.needsUpdate = !0, s = t), o.position.set(...e.positionMeters), o.scale.set(e.heightMeters * 8, e.heightMeters, 1);
				}, () => {
					i.dispose(), a.dispose();
				}, e);
			}
		});
	}
};
so("scene.read", (e, t) => e.sceneAPI(t)), so("display.objects", (e, t) => e.displayAPI(t)), so("properties.control", (e, t) => e.propertiesAPI(t)), so("document.edit", (e, t) => Object.freeze({ edit: (n) => e.change(t.target, n, "persistent", t.properties.revision) }));
//#endregion
//#region src/render/ThreeRenderAdapter.ts
function go(e) {
	let t = e.components.filter(T).find((t) => t.id === e.rootComponentId);
	if (!t) throw Error(`Actor ${e.id} has no root component ${e.rootComponentId}.`);
	return t;
}
var _o = class {
	staticMeshResources;
	resolveMaterial;
	skeletalMeshResources;
	resolveAnimationClip;
	addonOptions;
	animationWorld;
	componentRoots = /* @__PURE__ */ new WeakSet();
	projectedActors = /* @__PURE__ */ new Map();
	nextProjection = 0;
	constructor(e, t, n, r, i, a) {
		this.staticMeshResources = e, this.resolveMaterial = t, this.skeletalMeshResources = n, this.resolveAnimationClip = r, this.addonOptions = a, this.animationWorld = i ?? new Va("asset-preview", `editor-preview-${vo++}`), i || this.animationWorld.start();
	}
	projectActor(e, t = !1, n = !0) {
		let r = this.projectActorContent(e, t), i = String(++this.nextProjection), a = this.projectedActors.get(e.id) ?? /* @__PURE__ */ new Map();
		a.set(i, r), this.projectedActors.set(e.id, a);
		let o = () => {
			a.delete(i), a.size || this.projectedActors.delete(e.id);
		};
		if (!this.addonOptions || !n) return {
			...r,
			get viewDependentInstancing() {
				return r.viewDependentInstancing;
			},
			dispose: () => {
				r.dispose(), o();
			}
		};
		let c, l = (t) => {
			let n = this.addonOptions.document().actors.find((e) => e.id === t.id) ?? t;
			!c && n.components.some((e) => e.type === "TestScript" && s(e).manifest.sdkVersion === 5) && (c = new ho(this.addonOptions, e.id, r.object, () => this.projectedActors));
		};
		l(e);
		let u = {
			...r,
			get addons() {
				return c;
			},
			get viewDependentInstancing() {
				return r.viewDependentInstancing || (c?.active ?? !1);
			},
			get ready() {
				return Promise.all([r.ready, c?.ready]).then(() => {});
			},
			update: (e) => {
				r.update(e), l(e), c?.update();
			},
			prepareFrame: (e, t) => {
				r.prepareFrame(e, t), c?.frame(e, t);
			},
			dispose: () => {
				c?.dispose(), r.dispose(), o();
			}
		};
		return a.set(i, u), u;
	}
	projectActorContent(e, t = !1) {
		let n = e.components.filter(T);
		if (n.length === 1) return this.projectSingleComponent(e);
		let r = new Map(n.map((e) => [e.id, e]));
		for (let t of n) {
			let n = /* @__PURE__ */ new Set(), i = t;
			for (; i.id !== e.rootComponentId;) {
				if (n.has(i.id)) throw Error("Component projection hierarchy cycle.");
				n.add(i.id);
				let e = i.parentComponentId ? r.get(i.parentComponentId) : void 0;
				if (!e) throw Error("Additional spatial Component requires an owned parent.");
				i = e;
			}
		}
		let i = /* @__PURE__ */ new Map(), a = (e, t) => ({
			...e,
			rootComponentId: t.id,
			components: [t]
		}), o = t || n.every((e) => e.type === "SceneNode");
		try {
			for (let t of n) i.set(t.id, this.projectSingleComponent(a(e, t), t.id === e.rootComponentId && o));
		} catch (e) {
			throw i.forEach((e) => e.dispose()), e;
		}
		let s = i.get(e.rootComponentId);
		for (let t of n) t.id !== e.rootComponentId && i.get(t.parentComponentId).object.add(i.get(t.id).object);
		let c = [...i.values()];
		return {
			actorId: e.id,
			object: s.object,
			get viewDependentInstancing() {
				return c.some((e) => e.viewDependentInstancing);
			},
			ready: Promise.all(c.map((e) => e.ready)).then(() => {
				let e = c.filter((e) => e.object.userData.assetResourceError).map((e) => `${e.object.userData.componentId}: ${e.object.userData.assetResourceError}`);
				e.length && (s.object.userData.assetResourceError = e.join("\n"));
			}),
			update: (e) => {
				for (let t of e.components.filter(T)) i.get(t.id)?.update(a(e, t));
				s.object.updateWorldMatrix(!0, !0);
			},
			refreshMaterial: async (e) => (await Promise.all(c.map((t) => t.refreshMaterial?.(e)))).some(Boolean),
			setSelected: (e) => c.forEach((t) => t.setSelected(e)),
			setHelpersVisible: (e) => c.forEach((t) => t.setHelpersVisible?.(e)),
			setIconPresentation: (e, t) => c.forEach((n) => n.setIconPresentation?.(e, t)),
			prepareHelperView: (e) => c.forEach((t) => t.prepareHelperView?.(e)),
			prepareFrame: (e, t) => c.forEach((n) => n.prepareFrame(e, t)),
			prepareView: (e) => {
				let t = c.map((t) => t.prepareView(e));
				return () => t.reverse().forEach((e) => e());
			},
			instancingMeshes: (e) => c.flatMap((t) => [...t.instancingMeshes(e)]),
			contentMeshes: () => c.flatMap((e) => [...e.contentMeshes?.() ?? []]),
			getBounds: () => c.reduce((e, t) => e.union(t.getBounds()), new on()),
			intersect: (e) => {
				let t = e.camera ? c.map((t) => t.prepareView(e.camera)) : [], n = e.layers.mask;
				e.layers.enable(1);
				try {
					return s.intersect(e);
				} finally {
					e.layers.mask = n, t.reverse().forEach((e) => e());
				}
			},
			attachmentAnchor: (e) => i.get(e.componentId)?.attachmentAnchor(e) ?? null,
			dispose: () => {
				c.forEach((e) => e.dispose()), c.filter((e) => e !== s).forEach((e) => e.object.removeFromParent());
			}
		};
	}
	projectSingleComponent(e, t = !0) {
		let n = go(e), r = re.validate(n.type, n.typeVersion, n, "runtime");
		if (r.length > 0) throw Error(`Invalid ${n.type} component: ${JSON.stringify(r)}`);
		let i = n.type === "PrimitiveCube" ? n.shape ?? "Cube" : n.type === "StaticMesh" && !n.meshAsset ? n.shape ?? null : null, a = i ? Ha(i) : n.type === "Camera" || n.type === "PlayerStart" ? new mn(.4, .8, 8) : n.type.endsWith("Light") ? new Kt(.25, 12, 8) : new Jt(n.type === "SceneNode" ? .25 : 1, n.type === "SceneNode" ? .25 : 1, n.type === "SceneNode" ? .25 : 1), o = "color" in n ? n.color : n.type === "Camera" ? 6737151 : n.type === "PlayerStart" ? 5627255 : 10066329, s = new j({
			color: o,
			roughness: .65,
			...i === "Plane" ? { side: 2 } : {},
			wireframe: n.type !== "PrimitiveCube" && n.type !== "StaticMesh"
		}), c = new M(a, s);
		n.type === "TwinMetadata" && (c.visible = !1), n.type === "StaticMesh" && !n.meshAsset && !i && (c.visible = !1);
		let l = new sn();
		this.componentRoots.add(l);
		let u = n.localTransform;
		l.name = e.name, l.userData = {
			actorId: e.id,
			componentId: n.id
		}, l.position.fromArray(u.positionMeters), l.quaternion.copy(new bt(...u.rotationXyzw)), l.scale.fromArray(u.scale), l.add(c), (n.type === "TwinMetadata" || n.type === "SceneNode") && (l.remove(c), a.dispose(), xo(c)), [
			"PrimitiveCube",
			"StaticMesh",
			"SkeletalMesh"
		].includes(n.type) && wn(l);
		let d = n.type === "PointLight" || n.type === "SpotLight" ? Ka(n) : null, f = d ?? (n.type === "DirectionalLight" || n.type === "PlayerStart" || n.type === "SceneNode" && t ? Wa(n.type) : null);
		f && (c.visible = !1, l.add(f.object));
		let p = !1, m = !0, h = !0, g = n, _ = !0, v = null, y = null, b = null, ee = [], x = null, S = null, C = null, w = null, te = new on().setFromObject(l), T = new mt(), ne = l.position.clone(), ie = l.quaternion.clone(), ae = l.scale.clone(), oe = new mt(), se, ce = !0, le = -1, ue = /* @__PURE__ */ new Map(), fe = "", pe = 0, me = !1, E = null;
		n.type === "DirectionalLight" && (E = new gt(n.color, n.intensity), E.castShadow = n.castShadow), n.type === "PointLight" && (E = new ht(n.color, n.intensity, n.rangeMeters), E.castShadow = n.castShadow), n.type === "SpotLight" && (E = new nn(n.color, n.intensity, n.rangeMeters, n.outerConeDegrees * Math.PI / 180), E.penumbra = Math.max(0, Math.min(1, 1 - n.innerConeDegrees / n.outerConeDegrees)), E.castShadow = n.castShadow), E && (E.position.set(0, 0, 0), l.add(E), (E instanceof gt || E instanceof nn) && (E.target.position.fromArray(de([
			1,
			0,
			0
		])), l.add(E.target)));
		let he = () => {
			f?.setSelected(p), l.userData.selectionFrameId = le;
		}, ge = async (e, t) => {
			if (e.type !== "StaticMesh" && e.type !== "SkeletalMesh" || !b || !this.resolveMaterial) return !1;
			let n = [...(b.userData.defaultMaterialSlots ?? []).filter((t) => !e.materialOverrides.some((e) => e.slotId === t.slotId)), ...e.materialOverrides], r = JSON.stringify(n), i = t === void 0 ? null : new Set(typeof t == "string" ? [t] : t), a = t !== void 0 && r === fe && !me, o = a ? n.filter((e) => i.has(e.materialAsset.assetId) && e.materialAsset.revisionPolicy === "live") : n;
			if (t !== void 0 && !n.some((e) => i.has(e.materialAsset.assetId) && e.materialAsset.revisionPolicy === "live") || t === void 0 && r === fe && !me) return !1;
			let s = ++pe;
			me = !0;
			let c = [];
			try {
				for (let e of o) for (let t of bo(b, e.slotId)) {
					let n = await this.resolveMaterial(e.materialAsset, { tintOverrides: e.tintOverrides });
					if (c.push({
						target: t,
						material: n
					}), !_ || s !== pe) return !1;
				}
				a || Co(b, ue);
				for (let e of c) xo(e.target), Ve(e.target, e.material);
				return c.length = 0, fe = r, delete l.userData.materialOverrideError, he(), !0;
			} finally {
				c.forEach((e) => e.material.dispose()), s === pe && (me = !1);
			}
		}, _e = (e) => {
			S && le !== e && (S.root.updateWorldMatrix(!0, !0), S.skinnedMeshes.forEach((t) => {
				t.skeleton.update(), t.computeBoundingBox(), t.computeBoundingSphere(), t.userData.poseFrameId = e;
			}), l.updateWorldMatrix(!0, !0), te = new on().setFromObject(l), le = e, l.userData.evaluatedFrameId = e, l.userData.boundsFrameId = e);
		}, ve = n.type === "StaticMesh" && n.meshAsset && this.staticMeshResources ? this.staticMeshResources.acquire(n.meshAsset).then(async (e) => {
			if (!_) {
				e.release();
				return;
			}
			v = e, b = e.instantiate();
			let t = [];
			b.traverse((e) => {
				e instanceof M && t.push(e);
			}), ee = t;
			let n = b.userData.staticMeshLod;
			n && (x = new Ua(b, n.distanceMeters, n.hysteresis)), So(b, ue), l.remove(c), a.dispose(), s.dispose(), l.add(b), ce = !0, l.userData.assetId = e.assetId, l.userData.assetRevisionId = e.revisionId, await ge(g), he();
		}).catch((e) => {
			l.userData.assetResourceError = e instanceof Error ? e.message : String(e);
		}) : Promise.resolve(), ye = n.type === "SkeletalMesh" && this.skeletalMeshResources ? this.skeletalMeshResources.acquire(n.meshAsset).then(async (e) => {
			if (!_) {
				e.release();
				return;
			}
			if (y = e, n.playback.clipAsset) {
				if (!this.resolveAnimationClip) throw Error("Animation clip resolver is unavailable.");
				let t = await this.resolveAnimationClip(n);
				if (!t) throw Error(`AnimationSequence ${n.playback.clipAsset.assetId} did not resolve.`);
				let r = await this.skeletalMeshResources.playbackAsset(e, t);
				if (!_) return;
				C = this.animationWorld.create(r, n.id, {
					clipIndex: t.clipIndex,
					rate: n.playback.rate,
					initialTimeSeconds: n.playback.initialTimeSeconds,
					loop: n.playback.loop,
					playing: n.playback.playing
				}), S = C.instance, l.userData.animationClip = {
					assetId: t.animationAssetId,
					revisionId: t.animationRevisionId,
					clipIndex: t.clipIndex,
					clipName: t.clipName
				}, l.userData.rootMotionPolicy = {
					mode: t.rootMotionMode,
					sourceMotionKind: t.sourceMotionKind,
					strategy: t.rootMotionStrategy,
					appliesActorMotion: t.appliesActorMotion
				};
			} else S = e.asset.instantiate(), l.userData.animationClip = null, l.userData.rootMotionPolicy = null;
			if (b = S.root, e.attachmentProfile) {
				if (e.attachmentProfile.skeletonAssetId !== n.skinBinding.skeletonAsset.assetId || e.attachmentProfile.sourceSkeletonAssetId !== n.sourceBinding.sourceSkeletonAssetId || e.attachmentProfile.bindingSignature !== n.skinBinding.bindingSignature || e.attachmentProfile.skinIndex !== n.skinBinding.skinIndex) throw Error(`Skeletal attachment profile does not match Component ${n.id}.`);
				w = new mi(S, e.attachmentProfile);
			}
			yo(b, e.materialSlotIds), So(b, ue), l.remove(c), a.dispose(), s.dispose(), l.add(b), l.userData.assetId = e.assetId, l.userData.assetRevisionId = e.revisionId, await ge(g), le = -1, _e(0), he();
		}).catch((e) => {
			l.userData.assetResourceError = e instanceof Error ? e.message : String(e);
		}) : Promise.resolve(), be = n.type === "StaticMesh" && !n.meshAsset && i && n.materialOverrides[0] && this.resolveMaterial ? this.resolveMaterial(n.materialOverrides[0].materialAsset, { tintOverrides: n.materialOverrides[0].tintOverrides }).then((e) => {
			if (!_) {
				e.dispose();
				return;
			}
			Ve(c, e), s.dispose(), s = e, he();
		}).catch((e) => {
			l.userData.materialOverrideError = e instanceof Error ? e.message : String(e);
		}) : Promise.resolve(), D = Promise.all([
			ve,
			ye,
			be
		]).then(() => void 0);
		return {
			get viewDependentInstancing() {
				return !!x || g.type === "SkeletalMesh" || g.type === "StaticMesh" && !!g.meshAsset && !b;
			},
			actorId: e.id,
			object: l,
			refreshMaterial: async (e) => {
				if (await D, !_) return !1;
				try {
					return await ge(g, e);
				} catch (e) {
					throw l.userData.materialOverrideError = e instanceof Error ? e.message : String(e), e;
				}
			},
			update: (t) => {
				if (t.id !== e.id) throw Error(`Projection ${e.id} cannot display Actor ${t.id}.`);
				let n = go(t);
				g = n;
				let r = n.localTransform;
				l.position.fromArray(r.positionMeters), l.quaternion.fromArray(r.rotationXyzw), l.scale.fromArray(r.scale), l.updateMatrixWorld(), E && (n.type === "DirectionalLight" || n.type === "PointLight" || n.type === "SpotLight") && (E.color.setHex(n.color), E.intensity = n.intensity, E.castShadow = n.castShadow, (E instanceof ht || E instanceof nn) && (E.distance = n.rangeMeters), E instanceof nn && (E.angle = n.outerConeDegrees * Math.PI / 180, E.penumbra = Math.max(0, Math.min(1, 1 - n.innerConeDegrees / n.outerConeDegrees)))), (n.type === "PointLight" || n.type === "SpotLight") && d?.update(n), ge(n).catch((e) => {
					l.userData.materialOverrideError = e instanceof Error ? e.message : String(e);
				});
			},
			setSelected: (e) => {
				p !== e && (p = e, he());
			},
			setHelpersVisible: (e) => {
				m = e, f && (f.object.visible = e), n.type === "Camera" && (c.visible = e && h);
			},
			setIconPresentation: (e, t) => {
				if (!qa(t)) throw Error("아이콘 크기는 0.25~4배 사이여야 합니다.");
				h = e, f?.setIconPresentation(e, t), n.type === "Camera" && (c.visible = e && m, c.scale.setScalar(t), c.updateMatrixWorld(!0)), ce = !0;
			},
			...f ? { prepareHelperView: (e) => f.prepareView(e) } : {},
			prepareFrame: (e, t) => {
				if (!Number.isInteger(e) || e < 0) throw Error("Render frame ID must be a non-negative integer.");
				if (!Number.isFinite(t) || t < 0) throw Error("Render frame delta must be finite and non-negative.");
				if (le !== e) {
					if (this.animationWorld.advanceRenderFrame(e, t), S) _e(e);
					else {
						if (l.parent && !this.componentRoots.has(l.parent) && l.parent.updateWorldMatrix(!0, !1), (se !== l.parent || !ne.equals(l.position) || !ie.equals(l.quaternion) || !ae.equals(l.scale) || l.parent && !oe.equals(l.parent.matrixWorld)) && (l.updateWorldMatrix(!0, !1), ne.copy(l.position), ie.copy(l.quaternion), ae.copy(l.scale), se = l.parent, l.parent && oe.copy(l.parent.matrixWorld)), ce || !T.equals(l.matrixWorld)) {
							l.updateMatrixWorld(!0), te.makeEmpty();
							for (let e of l.children) !this.componentRoots.has(e) && !e.userData.addonDisplay && te.union(new on().setFromObject(e));
							T.copy(l.matrixWorld), ce = !1;
						}
						le = e, l.userData.evaluatedFrameId = e, l.userData.boundsFrameId = e;
					}
				}
			},
			getBounds: () => (l.userData.boundsFrameId = le, n.type === "SceneNode" ? new on() : d?.getBounds() ?? te.clone()),
			prepareView: (e) => (f?.prepareView(e), x?.apply(e) ?? (() => void 0)),
			instancingMeshes: (e = !1) => {
				if (!_ || p || !b || g.type !== "StaticMesh" || me || l.userData.materialOverrideError || g.materialOverrides.length > 0 && !ee.every((e) => !Array.isArray(e.material) && Ie(e.material) !== void 0)) return [];
				if (e) return ee;
				let t = [];
				return b.traverseVisible((e) => {
					e instanceof M && t.push(e);
				}), t;
			},
			contentMeshes: () => {
				if (!_) return [];
				if (g.type === "PrimitiveCube") return [c];
				if (g.type === "StaticMesh") return b ? ee : c.visible ? [c] : [];
				if (g.type === "SkeletalMesh" && S) {
					let e = [];
					return S.root.traverse((t) => {
						t instanceof M && e.push(t);
					}), e;
				}
				return [];
			},
			intersect: (e) => {
				l.userData.pickingFrameId = le;
				let t = e.camera ? x?.apply(e.camera) : void 0, n = e.layers.mask;
				f?.object.visible && e.layers.enable(1);
				try {
					let t = [];
					return l.traverseVisible((e) => {
						e instanceof M && t.push(e);
					}), e.intersectObjects(t, !1);
				} finally {
					e.layers.mask = n, t?.();
				}
			},
			attachmentAnchor: (e) => {
				if (!w) {
					if (S) throw Error(`Skeletal attachment metadata is unavailable for Component ${n.id}.`);
					return null;
				}
				let t = w.profile;
				if (e.componentId !== n.id || e.skeletonAssetId !== t.skeletonAssetId || e.sourceSkeletonAssetId !== t.sourceSkeletonAssetId || e.bindingSignature !== t.bindingSignature) throw Error(`Skeletal attachment ${e.targetId} does not match Component ${n.id}.`);
				return w.anchor(e.kind, e.targetId);
			},
			ready: D,
			dispose: () => {
				_ = !1, pe += 1, l.children.includes(c) && (a.dispose(), xo(c)), b && !S && (ze(b), l.remove(b)), S && l.remove(S.root), C ? C.dispose() : S?.dispose(), ue.forEach((e) => (Array.isArray(e) ? e : [e]).forEach((e) => e.dispose())), ue.clear(), v?.release(), y?.release(), f?.dispose(), E && l.remove(E), l.remove(c);
			}
		};
	}
}, vo = 1;
function yo(e, t) {
	let n = 0;
	e.traverse((e) => {
		e instanceof M && (e.userData.materialSlotId = t[n] ?? `mesh:0/primitive:${n}`, n += 1);
	});
}
function bo(e, t) {
	let n = [], r = 0;
	return e.traverse((e) => {
		if (!(e instanceof M)) return;
		let i = `mesh:0/primitive:${r}`, a = typeof e.userData.materialSlotId == "string" ? e.userData.materialSlotId : i;
		e.userData.materialSlotId = a, a === t && n.push(e), r += 1;
	}), n;
}
function xo(e) {
	(Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => e.dispose());
}
function So(e, t) {
	e.traverse((e) => {
		e instanceof M && typeof e.userData.materialSlotId == "string" && t.set(e.uuid, Array.isArray(e.material) ? e.material.map((e) => e.clone()) : e.material.clone());
	});
}
function Co(e, t) {
	e.traverse((e) => {
		if (!(e instanceof M) || typeof e.userData.materialSlotId != "string") return;
		let n = t.get(e.uuid);
		n && (xo(e), e.material = Array.isArray(n) ? n.map((e) => e.clone()) : n.clone());
	});
}
//#endregion
//#region src/composition/CompositionMatrixRoot.ts
var wo = class extends sn {
	sealed = !1;
	valid = !1;
	previousParent = null;
	previousLocal = new mt();
	previousWorld = new mt();
	previousParentWorld = new mt();
	sealStaticHierarchy(e) {
		this.sealed = e, this.invalidateMatrices();
	}
	invalidateMatrices() {
		this.valid = !1;
	}
	updateMatrixWorld(e) {
		if (!this.sealed) {
			super.updateMatrixWorld(e);
			return;
		}
		if (this.matrixAutoUpdate && this.updateMatrix(), this.valid && this.previousParent === this.parent && this.previousLocal.equals(this.matrix) && this.previousWorld.equals(this.matrixWorld) && (!this.parent || this.previousParentWorld.equals(this.parent.matrixWorld))) {
			this.matrixWorldNeedsUpdate = !1;
			return;
		}
		this.valid = !1, super.updateMatrixWorld(!0), this.previousLocal.copy(this.matrix), this.previousWorld.copy(this.matrixWorld), this.previousParent = this.parent, this.parent && this.previousParentWorld.copy(this.parent.matrixWorld), this.valid = !0;
	}
}, To = class e {
	storage;
	textureOptions;
	cacheStaticMatrices;
	projectionOptions;
	sources = /* @__PURE__ */ new Map();
	reusable;
	addonContext = { environment: "composition" };
	configureAddons(e) {
		if (this.addonContext.environment === "delivery" && e.environment === void 0) {
			let { overrides: t, ...n } = e;
			this.addonContext = {
				...this.addonContext,
				...n
			};
		} else this.addonContext = {
			...this.addonContext,
			...e
		};
	}
	constructor(e, t, n = !1, r = {}) {
		this.storage = e, this.textureOptions = t, this.cacheStaticMatrices = n, this.projectionOptions = r, this.textureOptions = _(t ?? f);
	}
	key(e) {
		return this.storage.resourceKey?.(e) ?? ut(e.pin);
	}
	fork(t) {
		let n = new e(this.storage, structuredClone(t), this.cacheStaticMatrices, this.projectionOptions);
		return n.configureAddons(this.addonContext), n.reusable = this, n;
	}
	finishFork() {
		this.reusable = void 0;
	}
	canReuse(e) {
		return !!this.reusable?.sources.get(this.key(e))?.textureCatalog;
	}
	encodedBytesWith(t) {
		if (!(t instanceof e)) return this.encodedBytes + t.encodedBytes;
		let n = /* @__PURE__ */ new Map();
		for (let e of [...this.sources.values(), ...t.sources.values()]) n.set(e.storage, e.encodedBytes);
		return [...n.values()].reduce((e, t) => e + t, 0);
	}
	get textureLayouts() {
		return [...this.sources.values()].flatMap((e) => e.layouts ?? []);
	}
	get reservedTextures() {
		return [...this.sources.values()].reduce((e, t) => e + (t.reservedTextures ?? 0), 0);
	}
	get encodedBytes() {
		return [...this.sources.values()].reduce((e, t) => e + t.encodedBytes, 0);
	}
	has(e) {
		return this.sources.has(this.key(e));
	}
	async project(e, t, n, r, i) {
		let a = this.key(e), o = this.sources.get(a), s = this.reusable?.sources.get(a);
		if (!o && s?.textureCatalog) {
			n.throwIfAborted();
			let e = s.layouts.reduce((e, t) => e + $e(t, this.textureOptions).reservedBytes, 0);
			if (e > x(r, e)) throw Error("텍스처 교체 예약 예산을 초과합니다. 기존 표시를 유지합니다.");
			let t = he(s.storage, void 0, {
				textureMaxSize: this.textureOptions?.maxSize,
				textureMapLimits: p(s.textureCatalog, this.textureOptions),
				transformDocument: (e) => oe(e, this.textureOptions, !this.textureOptions || this.textureOptions.maps.length > 0)
			}), i = s.preview, c = s.shared ??= {
				users: 1,
				dispose: () => i.disposeAll()
			};
			c.users++, o = {
				...s,
				references: 0,
				reservedTextures: e,
				material: t,
				preview: void 0,
				shared: c
			}, this.sources.set(a, o);
		}
		if (!o && this.storage.prepared) {
			let t = await this.storage.prepared(e, n, r, this.textureOptions);
			if (n.throwIfAborted(), !this.storage.projectDocument && t.document.actors.length !== e.actors) throw Error("Level actor summary mismatch");
			o = {
				layouts: t.layouts,
				references: 0,
				encodedBytes: 0,
				get reservedTextures() {
					return t.storage.reservedTextureBytes ?? 0;
				},
				info: e,
				document: t.document,
				storage: t.storage,
				staticMeshes: new Me(t.storage, void 0, !0),
				skeletalMeshes: new ii(t.storage),
				material: he(t.storage, void 0, {
					frozenInstancing: this.addonContext.environment === "delivery",
					textureMaxSize: this.textureOptions?.maxSize,
					textureMapLimits: t.textureCatalog ? p(t.textureCatalog, this.textureOptions) : void 0,
					transformDocument: (e) => oe(e, this.textureOptions, !this.textureOptions || this.textureOptions.maps.length > 0)
				})
			}, this.sources.set(a, o);
		}
		if (!o) {
			i?.({
				message: "원본 데이터 읽는 중",
				detail: t.name
			});
			let s = await this.storage.source(e.pin);
			if (n.throwIfAborted(), s.envelope.revision !== e.pin.revision || s.envelope.payload.actors.length !== e.actors || s.assets.blobs.reduce((e, t) => e + t.bytes.byteLength, 0) > e.bytes) throw Error("원본의 개수/크기가 사전 검사와 다릅니다.");
			i?.({
				message: "메시·텍스처 검사 중",
				detail: t.name
			});
			let c = this.projectionOptions.geometryOnly ? [] : [se(s.assets)];
			if (s.recipe && !this.projectionOptions.geometryOnly) for (let e of s.recipe.payloads) {
				if (s.assets.revisions.find((t) => t.id === e.revisionId)?.metadata.candidateTypedMaterials) continue;
				let t = s.assets.blobs.find((t) => t.key === e.blobKey);
				if (!t) throw Error("Missing source payload");
				c.push(me(t.bytes));
			}
			let l = c.reduce((e, t) => e + $e(t, this.textureOptions).reservedBytes, 0), u = x(r, l);
			if (l > u) throw Error(`기존 표시와 새 레벨을 합한 텍스처 예약 예산이 부족합니다. 새 레벨 ${(l / 1048576).toFixed(1)} MiB / 남은 한도 ${(u / 1048576).toFixed(1)} MiB. 표시·텍스처 예산을 자동으로 선택하거나 텍스처 크기를 줄이세요.`);
			let d = new Ae();
			await d.importSnapshot(s.assets), this.cacheStaticMatrices && _e(d);
			let f = /* @__PURE__ */ new Map(), m;
			try {
				let r = ue.find((e) => e >= l) ?? ue.at(-1);
				s.recipe && !this.projectionOptions.geometryOnly && (m = await Ue({
					version: 1,
					...s,
					recipe: s.recipe
				}, d, (e) => i?.({
					message: e,
					detail: t.name
				}), {
					showTextures: !this.textureOptions || this.textureOptions.maps.length > 0,
					optimize: this.textureOptions?.maps.length ? this.textureOptions : void 0,
					signal: n,
					budgetBytes: r
				}, f, !1)), n.throwIfAborted(), o = {
					layouts: c,
					reservedTextures: l,
					references: 0,
					encodedBytes: e.bytes,
					info: e,
					document: s.envelope.payload,
					storage: d,
					staticMeshes: m ?? new Me(d, void 0, this.projectionOptions.geometryOnly ? "geometry-only" : !1),
					skeletalMeshes: new ii(d),
					material: m?.materialResolver ?? he(d, void 0, {
						textureMaxSize: this.textureOptions?.maxSize,
						textureMapLimits: p(s.assets, this.textureOptions),
						transformDocument: (e) => oe(e, this.textureOptions, !this.textureOptions || this.textureOptions.maps.length > 0)
					}),
					...m ? { preview: m } : {}
				}, this.cacheStaticMatrices && m && s.recipe?.payloads.length && s.recipe.payloads.every((e) => s.assets.revisions.find((t) => t.id === e.revisionId)?.metadata.candidateTypedMaterials === !0) && s.envelope.payload.actors.every((e) => e.components.every((e) => e.type !== "SkeletalMesh")) && (o.textureCatalog = {
					...s.assets,
					blobs: []
				}), this.sources.set(a, o);
			} catch (e) {
				throw m ? m.disposeAll() : qe([...f.values()]), e;
			}
		}
		let c = o, l = this.storage.projectDocument?.(c.document, e) ?? c.document;
		if (l.actors.length !== e.actors) throw Error("Level actor summary mismatch");
		c.references++;
		let u = new wo(), d = [], f = new Va("asset-preview", `composition-${t.id}`);
		f.start(), f.pause();
		let m = new _o(c.staticMeshes, this.projectionOptions.geometryOnly ? void 0 : c.material, c.skeletalMeshes, Yr(c.storage), f, {
			...this.addonContext,
			mountId: this.addonContext.mountId?.(t.id) ?? t.id,
			document: () => l,
			overrides: (e, n) => this.addonContext.overrides?.(e, n, t.id)
		}), h = (e) => {
			e = Pn(e);
			let t = e.components.filter(T).find((t) => t.id === e.rootComponentId), n = t.attachmentParent?.kind === "bone" || t.attachmentParent?.kind === "socket" || !t.attachmentParent ? e : {
				...e,
				components: e.components.map((t) => t.id === e.rootComponentId ? {
					...t,
					localTransform: ke(l, e.id)
				} : t)
			}, r = m.projectActor(n);
			return r.setHelpersVisible?.(!1), r.setIconPresentation?.(!1, 1), r;
		}, g = !1, _ = () => {
			g || (g = !0, u.removeFromParent(), d.forEach((e) => e.dispose()), f.stop(), u.clear(), --c.references === 0 && (c.shared ? (c.preview?.disposeDisplay(), --c.shared.users === 0 && c.shared.dispose()) : c.preview?.disposeAll(), this.sources.delete(a)));
		};
		try {
			let r = 0;
			i?.({
				message: "액터와 메시 준비 중",
				detail: t.name,
				completed: 0,
				total: l.actors.length
			});
			for (let e of l.actors) {
				if (n.throwIfAborted(), r++, Nn(e)) continue;
				let a = h(e);
				d.push(a), u.add(a.object), d.length % 32 == 0 && (i?.({
					message: "액터와 메시 준비 중",
					detail: t.name,
					completed: r,
					total: l.actors.length
				}), await Promise.all(d.slice(-32).map((e) => e.ready)), await new Promise((e) => setTimeout(e, 0)));
			}
			i?.({
				message: "메시·재질 준비 완료 대기",
				detail: t.name
			}), await Promise.all(d.map((e) => e.ready)), n.throwIfAborted();
			let a = new Map(d.map((e) => [e.actorId, e]));
			for (let e of l.actors) {
				if (!a.has(e.id)) continue;
				let t = e.components.filter(T).find((t) => t.id === e.rootComponentId).attachmentParent;
				if (t?.kind === "bone" || t?.kind === "socket") {
					let n = a.get(t.actorId)?.attachmentAnchor(t);
					if (!n) throw Error(`부착 지점을 찾을 수 없습니다: ${e.id}`);
					n.add(a.get(e.id).object);
				}
			}
			u.traverse((e) => {
				if (e.userData.assetResourceError || e.userData.attachmentError || e.userData.materialOverrideError) throw Error(String(e.userData.assetResourceError ?? e.userData.attachmentError ?? e.userData.materialOverrideError));
				e instanceof Ht && (e.intensity = 0);
			}), u.sealStaticHierarchy(this.cacheStaticMatrices && d.every((e) => e.viewDependentInstancing === !1));
			let o = (e) => {
				u.invalidateMatrices(), u.position.fromArray(e.position), u.quaternion.fromArray(e.rotation), u.visible = e.visible, u.updateWorldMatrix(!0, !1), u.updateMatrixWorld(!0);
			};
			o(t);
			let s = Da({
				...l,
				actors: In(l)
			}, u, d, h, () => !g);
			return {
				root: u,
				projections: d,
				document: l,
				info: e,
				update: o,
				dispose: _,
				get residentActorCount() {
					return d.length;
				},
				setResidentActors: async (...e) => {
					await s(...e), c.staticMeshes.trimUnusedGeometry();
				},
				prepare: (e) => {
					let t = d.map((t) => t.prepareView(e));
					return () => t.reverse().forEach((e) => e());
				}
			};
		} catch (e) {
			throw await Promise.allSettled(d.map((e) => e.ready)), _(), e;
		}
	}
};
function Eo(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), r = 0, i = 0;
	for (let a of e) a.traverse((e) => {
		if (e instanceof M) {
			for (let n of [...Object.values(e.geometry.attributes), e.geometry.index]) {
				if (!n) continue;
				let e = "array" in n ? n.array : n.data.array;
				t.has(e.buffer) || (t.add(e.buffer), r += e.buffer.byteLength);
			}
			for (let t of Array.isArray(e.material) ? e.material : [e.material]) for (let e of [...Object.values(t), ...t instanceof j ? Oe(t) : []]) {
				if (!(e instanceof rn)) continue;
				let t = [
					e.wrapS,
					e.wrapT,
					"wrapR" in e ? e.wrapR : 0,
					e.magFilter,
					e.minFilter,
					e.anisotropy,
					e.internalFormat,
					e.format,
					e.type,
					e.generateMipmaps,
					e.premultiplyAlpha,
					e.flipY,
					e.unpackAlignment,
					e.colorSpace
				].join(), r = n.get(e.source) ?? /* @__PURE__ */ new Set();
				if (r.has(t)) continue;
				r.add(t), n.set(e.source, r);
				let a = e.image;
				i += (a?.data?.byteLength ?? (a?.width ?? 0) * (a?.height ?? 0) * 4) * (e.generateMipmaps ? 4 / 3 : 1);
			}
		}
	});
	return {
		geometry: r,
		texture: i
	};
}
var Do = new class {
	enabled;
	now;
	tasks = [];
	nextId = 0;
	listeners = /* @__PURE__ */ new Set();
	constructor(e = !0, t = () => Date.now()) {
		this.enabled = e, this.now = t;
	}
	snapshot = () => this.tasks;
	subscribe = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	publish(e) {
		this.tasks = e, this.listeners.forEach((e) => e());
	}
	update(e, t) {
		this.publish(this.tasks.map((n) => n.id === e ? {
			...n,
			...t
		} : n));
	}
	dismiss(e) {
		this.tasks.find((t) => t.id === e && (t.state === "failed" || t.state === "succeeded")) && this.publish(this.tasks.filter((t) => t.id !== e));
	}
	retry(e) {
		let t = this.tasks.find((t) => t.id === e && t.state === "failed");
		t?.retry && (this.dismiss(e), t.retry());
	}
	cancel(e) {
		let t = this.tasks.find((t) => t.id === e);
		if (t?.state === "running" && t.cancel) {
			this.update(e, {
				state: "cancelling",
				message: "취소 요청 중…",
				detail: "진행 중인 읽기와 자원 정리가 끝날 때까지 기다려 주세요.",
				completed: void 0,
				total: void 0,
				cancel: void 0
			});
			try {
				t.cancel();
			} catch (t) {
				this.update(e, {
					state: "failed",
					error: String(t)
				});
			}
		}
	}
	begin(e, t, n) {
		if (!this.enabled) return {
			update() {},
			setCancel() {},
			async paint() {},
			finish() {},
			succeed() {},
			fail() {}
		};
		let r = ++this.nextId, i = !1;
		this.publish([...this.tasks, {
			id: r,
			title: e,
			message: t,
			startedAt: this.now(),
			revealed: !1,
			state: "running",
			cancel: n
		}]);
		let a = () => !i && this.tasks.find((e) => e.id === r)?.state === "running";
		return {
			update: (e) => {
				if (!a()) return;
				let t = Number.isFinite(e.completed) && Number.isFinite(e.total) && e.total > 0 && e.completed >= 0 && e.completed <= e.total;
				this.update(r, {
					...e,
					detail: e.detail,
					completed: t ? e.completed : void 0,
					total: t ? e.total : void 0
				});
			},
			setCancel: (e) => {
				a() && this.update(r, { cancel: e });
			},
			paint: async () => {
				i || typeof window > "u" || (this.update(r, { revealed: !0 }), await new Promise((e) => {
					let t = 0, n = () => {
						clearTimeout(r), t && window.cancelAnimationFrame(t), e();
					}, r = setTimeout(n, 80);
					t = window.requestAnimationFrame(() => {
						t = 0, setTimeout(n, 0);
					});
				}));
			},
			finish: () => {
				i || (i = !0, this.publish(this.tasks.filter((e) => e.id !== r)));
			},
			succeed: (e) => {
				i || (i = !0, this.update(r, {
					...e,
					state: "succeeded",
					endedAt: this.now(),
					revealed: !0,
					cancel: void 0,
					completed: void 0,
					total: void 0
				}));
			},
			fail: (e, t, n) => {
				i || (i = !0, this.tasks.find((e) => e.id === r)?.state === "cancelling" ? this.publish(this.tasks.filter((e) => e.id !== r)) : this.update(r, {
					state: "failed",
					endedAt: this.now(),
					cancel: void 0,
					revealed: !0,
					retry: t,
					retryLabel: n,
					error: e instanceof Error ? e.message : String(e),
					completed: void 0,
					total: void 0
				}));
			}
		};
	}
}(!1), Oo = [
	0,
	512,
	1024,
	2048,
	4096,
	8192
], ko = "dt-display-budget-mib-v2";
function Ao(e) {
	if (!Oo.includes(e)) throw Error("지원하지 않는 표시 예산입니다.");
	return Object.freeze({
		geometry: e * 1024 ** 2,
		texture: e * 1024 ** 2
	});
}
function jo(e, t) {
	for (let n of ["geometry", "texture"]) {
		if (!Number.isSafeInteger(e[n]) || e[n] < 0 || e[n] > ne) throw Error("유효하지 않은 표시 예산입니다. 최대 8 GiB입니다.");
		if (e[n] < t[n]) throw Error("현재 사용량보다 낮출 수 없습니다. 레벨을 로드 해제한 뒤 변경하세요.");
	}
	return Object.freeze({
		geometry: e.geometry,
		texture: e.texture
	});
}
function Mo() {
	try {
		let e = Number(globalThis.localStorage.getItem(ko));
		if (Oo.includes(e)) return e;
	} catch {}
	return 0;
}
function No(e) {
	Ao(e);
	try {
		return globalThis.localStorage.setItem(ko, String(e)), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region src/composition/CompositionRuntime.ts
var Po = Object.freeze({
	encodedPeak: 2 * 1024 ** 3,
	geometry: 512 * 1024 ** 2,
	texture: 512 * 1024 ** 2,
	actors: 1e5
}), Fo = class {
	storage;
	pool;
	root = new sn();
	objectViews = /* @__PURE__ */ new Map();
	objectKinds = /* @__PURE__ */ new Map();
	objectAdapter = new _o();
	updateTarget(e) {
		if ("pin" in e) this.states.get(e.id)?.view?.update(e);
		else {
			let t = this.objectViews.get(e.id);
			t && (t.update(it(e)), t.object.visible = e.visible);
		}
	}
	targetRoot(e) {
		return e ? this.states.get(e)?.view?.root ?? this.objectViews.get(e)?.object : void 0;
	}
	reconcileObjects(e) {
		for (let [t, n] of this.objectViews) e.some((e) => e.id === t && e.kind === this.objectKinds.get(t)) || (n.object.removeFromParent(), n.dispose(), this.objectViews.delete(t), this.objectKinds.delete(t));
		for (let t of e) {
			if (!this.objectViews.has(t.id)) {
				let e = this.objectAdapter.projectActor(it(t));
				this.objectViews.set(t.id, e), this.objectKinds.set(t.id, t.kind), this.root.add(e.object);
			}
			this.updateTarget(t);
		}
	}
	states = /* @__PURE__ */ new Map();
	sourceDocuments = /* @__PURE__ */ new Map();
	sourceDocument(e) {
		return this.states.get(e)?.view?.document ?? this.sourceDocuments.get(e)?.document;
	}
	desired = /* @__PURE__ */ new Map();
	jobs = [];
	current;
	disposed = !1;
	version = 0;
	listeners = /* @__PURE__ */ new Set();
	limits;
	automatic;
	memory = new i();
	constructor(e, t, n) {
		this.storage = e, this.pool = t, this.automatic = n?.automatic ?? !n;
		let r = n ?? Po;
		this.limits = Object.freeze({
			...r,
			...jo(r, {
				geometry: 0,
				texture: 0
			})
		});
	}
	get automaticBudget() {
		return this.automatic;
	}
	admitMemory(e) {
		let t = this.usage, n = {
			encodedPeak: e.encodedPeak ?? this.pool.encodedBytes,
			geometry: e.geometry ?? t.geometry,
			texture: e.texture ?? Math.max(t.texture, this.pool.reservedTextures ?? 0)
		};
		this.memory.update(n.encodedPeak + n.geometry + n.texture, t.encoded + t.geometry + Math.max(t.texture, this.pool.reservedTextures ?? 0), this.automatic, !0), this.automatic && (this.limits = Object.freeze({
			...this.limits,
			...Object.fromEntries(Object.entries(n).map(([e, t]) => [e, Math.max(this.limits[e], o(t))]))
		}));
	}
	textureAdmission(e = this.pool, t = [this.root], n = this.textureBudget) {
		return (r, i) => {
			let a = Eo(t), o = Math.max(a.texture, (this.pool.reservedTextures ?? 0) + (e === this.pool ? 0 : e.reservedTextures ?? 0) - i);
			this.admitMemory({
				geometry: a.geometry,
				texture: o + r,
				encodedPeak: this.combinedEncoded(e)
			});
			let s = n === 0 || !e.textureOptions ? this.budget.texture : Math.min(n, this.budget.texture);
			return Math.max(0, s - o);
		};
	}
	combinedEncoded(e) {
		return e === this.pool ? e.encodedBytes : e.encodedBytesWith?.(this.pool) ?? this.pool.encodedBytes + e.encodedBytes;
	}
	textureJob;
	residencyJob;
	async setActorResidency(e) {
		if (this.busy || this.disposed) return;
		let t = new AbortController();
		this.residencyJob = t, this.changed();
		try {
			for (let [n, r] of e) {
				let e = this.states.get(n), i = e?.view;
				!i?.setResidentActors || r.size === i.projections.length && i.projections.every((e) => r.has(e.actorId)) || (await i.setResidentActors(r, t.signal, (e) => {
					let t = Eo([this.root, e]);
					if (this.admitMemory(t), t.geometry > this.budget.geometry || t.texture > this.budget.texture || this.usage.actors + e.children.length > this.budget.actors) throw Error("Actor 셀 교체 표시 예산을 초과합니다. 기존 표시를 유지합니다.");
				}, () => this.invalidateView()), this.states.get(n) === e && (e.message = void 0));
			}
		} catch (n) {
			if (!t.signal.aborted) for (let t of e.keys()) {
				let e = this.states.get(t);
				e && (e.message = n instanceof Error ? n.message : String(n));
			}
			throw n;
		} finally {
			this.residencyJob = void 0, this.changed(), this.pump();
		}
	}
	textureBudget = 0;
	setInitialTextureBudget(e) {
		Ze(e), this.textureBudget = e;
	}
	get textureApplying() {
		return !!this.textureJob;
	}
	textureControl() {
		let e = () => this.pool, t = () => this.textureBudget;
		return {
			get layouts() {
				return e().textureLayouts ?? [];
			},
			get options() {
				return e().textureOptions ?? {
					maxSize: 128,
					maps: []
				};
			},
			get budgetBytes() {
				return t();
			},
			get current() {
				return { reservedBytes: e().reservedTextures ?? 0 };
			},
			estimate(e) {
				let t = _(e);
				return this.layouts.reduce((e, n) => e + $e(n, t).reservedBytes, 0);
			},
			apply: (e, t, n, r) => this.applyTextures(e, t, n, r)
		};
	}
	async applyTextures(e, t, n, r) {
		if (this.disposed || this.busy || !this.pool.fork) throw Error("로딩이 끝난 통합 레벨에서 텍스처 설정을 적용하세요.");
		e = _(e), Ze(t), n.throwIfAborted();
		let i = this.textureControl(), a = i.estimate(e), o = new AbortController(), s = () => o.abort();
		n.addEventListener("abort", s, { once: !0 });
		let l = this.pool.fork(e), u = [...this.states].filter((e) => !!e[1].view), d = [];
		this.textureJob = o, this.changed();
		let f = this.version, p = Do.begin("통합 텍스처 적용 중", "메시·텍스처 표시 자원을 준비하고 있습니다.", () => o.abort());
		try {
			if (await c(), this.admitMemory({ texture: a + i.current.reservedBytes }), a > 0 && a + i.current.reservedBytes > (t === 0 ? this.budget.texture : Math.min(t, this.budget.texture))) throw Error("전체 텍스처 교체 예산을 초과합니다. 자동 예산을 선택하거나 텍스처 크기를 줄이세요.");
			await p.paint();
			for (let [n, s] of u) {
				o.signal.throwIfAborted();
				let c = this.desired.get(n), f = l.has(s.view.info) || l.canReuse?.(s.view.info) ? 0 : s.view.info.bytes;
				if (this.admitMemory({
					encodedPeak: this.combinedEncoded(l) + f * 2,
					texture: a + i.current.reservedBytes
				}), this.combinedEncoded(l) + f * 2 > this.budget.encodedPeak) throw Error("텍스처 교체 중 원본 바이트 예산을 초과합니다. 일부 레벨을 로드 해제하세요.");
				r(`통합 텍스처 준비 ${d.length + 1}/${u.length} · ${c.name}`), p.update({
					message: "통합 텍스처 준비 중",
					detail: c.name,
					completed: d.length,
					total: u.length
				});
				let m = await l.project(s.view.info, {
					...c,
					pin: s.view.info.pin
				}, o.signal, this.textureAdmission(l, [this.root, ...d.map(([, e]) => e.root)], t), p.update);
				d.push([n, m]);
				let h = Eo([this.root, ...d.map(([, e]) => e.root)]);
				if (this.admitMemory(h), h.geometry > this.budget.geometry || e.maps.length > 0 && h.texture > (t === 0 ? this.budget.texture : Math.min(t, this.budget.texture))) throw Error("교체 중 메시·텍스처 표시 예산을 초과합니다. 일부 레벨을 로드 해제하세요.");
			}
			if (o.signal.throwIfAborted(), this.disposed || f !== this.version) throw Error("준비 중 통합 배치가 변경되었습니다. 기존 표시를 유지합니다.");
			p.setCancel(), p.update({ message: "새 텍스처를 화면에 적용 중" }), this.pool = l, this.textureBudget = t;
			for (let [e, t] of d) this.root.add(t.root), this.states.set(e, {
				...this.states.get(e),
				view: t
			});
			d.length = 0, u.forEach(([, e]) => e.view.dispose());
		} catch (e) {
			throw o.signal.aborted || p.fail(e), e;
		} finally {
			p.finish(), d.forEach(([, e]) => e.dispose()), l.finishFork?.(), n.removeEventListener("abort", s), this.textureJob = void 0, this.changed(), this.pump();
		}
	}
	get budget() {
		return this.limits;
	}
	setDisplayBudget(e) {
		if (this.disposed || this.busy) throw Error("로딩이 끝나거나 취소된 뒤 표시 예산을 변경하세요.");
		e.geometry === 0 && e.texture === 0 ? this.automatic = !0 : (this.limits = Object.freeze({
			...this.limits,
			...jo(e, this.usage)
		}), this.automatic = !1), this.changed();
	}
	subscribe = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	snapshot = () => this.version;
	changed() {
		for (let [e, t] of this.states) t.view && this.desired.has(e) && ut(this.desired.get(e).pin) === ut(t.view.info.pin) && this.sourceDocuments.set(e, {
			pin: ut(t.view.info.pin),
			document: t.view.document
		});
		if (!this.busy) {
			let e = this.usage, t = e.encoded + e.geometry + Math.max(e.texture, this.pool.reservedTextures ?? 0);
			this.memory.update(t, t, !1);
		}
		this.version++, this.listeners.forEach((e) => e());
	}
	get busy() {
		return !!(this.current || this.jobs.length || this.textureJob || this.residencyJob);
	}
	get views() {
		return [...this.states.values()].flatMap((e) => e.view ? [e.view] : []);
	}
	get residentActors() {
		return this.objectViews.size + this.views.reduce((e, t) => e + (t.residentActorCount ?? t.info.actors), 0);
	}
	get usage() {
		return {
			...Eo([this.root]),
			encoded: this.pool.encodedBytes,
			actors: this.residentActors
		};
	}
	reconcile(e) {
		this.pool.configureAddons?.({
			compositionId: e.id,
			overrides: (t, n) => at(e.addonOverrides, t, n)
		});
		for (let e of this.views) for (let t of e.projections) t.addons?.update();
		this.reconcileObjects(e.objects ?? []), this.desired = new Map(e.mounts.map((e) => [e.id, e]));
		for (let [e, t] of this.sourceDocuments) (!this.desired.has(e) || ut(this.desired.get(e).pin) !== t.pin) && this.sourceDocuments.delete(e);
		for (let [e, t] of this.states) (!this.desired.has(e) || !this.desired.get(e).loaded) && (this.cancel(e), t.view?.dispose(), this.states.set(e, { status: "unloaded" }), this.desired.has(e) || this.states.delete(e));
		for (let t of e.mounts) {
			let e = this.states.get(t.id);
			e || (e = { status: "unloaded" }, this.states.set(t.id, e)), e.view?.update(t), t.loaded && (!e.view || ut(e.view.info.pin) !== ut(t.pin)) && e.attempted !== ut(t.pin) && this.schedule(t);
		}
		this.changed();
	}
	retry(e) {
		let t = this.desired.get(e);
		t?.loaded && this.schedule(t);
	}
	prioritize(e) {
		let t = new Map(e.map((e, t) => [e, t]));
		this.jobs.sort((n, r) => (t.get(n.mount.id) ?? e.length) - (t.get(r.mount.id) ?? e.length));
	}
	schedule(e) {
		this.enqueue(e, e.pin).catch(() => {});
	}
	replace(e, t, n) {
		let r = this.desired.get(e);
		return r ? this.enqueue(r, t, n) : Promise.reject(/* @__PURE__ */ Error("제외된 레벨입니다."));
	}
	async refresh(e, t) {
		if (this.disposed || this.busy) throw Error("로딩이 끝난 뒤 원본을 새로고침하세요.");
		let n = new AbortController(), r = [];
		this.textureJob = n, this.changed();
		let i = this.version, a = Do.begin("원본 새로고침 중", "변경된 원본을 준비하고 있습니다.", () => this.cancel());
		try {
			await c(), await a.paint();
			for (let t of e.mounts) {
				let e = this.desired.get(t.id);
				if (!e || !t.loaded || ut(e.pin) === ut(t.pin)) continue;
				n.signal.throwIfAborted(), a.update({
					message: "원본 정보 읽는 중",
					detail: t.name
				});
				let i = await this.storage.info(t.pin.source, t.pin);
				n.signal.throwIfAborted();
				let o = this.pool.has(i) ? 0 : i.bytes;
				if (this.admitMemory({ encodedPeak: this.pool.encodedBytes + o * 2 }), this.pool.encodedBytes + o * 2 > this.budget.encodedPeak || this.usage.actors + r.reduce((e, [, t]) => e + t.info.actors, 0) + i.actors > this.budget.actors) throw Error("새로고침 중 전체 로드 예산을 초과합니다. 일부 레벨을 로드 해제하세요.");
				let s = await this.pool.project(i, t, n.signal, this.textureAdmission(this.pool, [this.root, ...r.map(([, e]) => e.root)]), a.update);
				r.push([t, s]), n.signal.throwIfAborted();
				let c = Eo([this.root, ...r.map(([, e]) => e.root)]);
				this.admitMemory(c);
				let l = this.pool.textureOptions && this.textureBudget !== 0 ? Math.min(this.textureBudget, this.budget.texture) : this.budget.texture;
				if (c.geometry > this.budget.geometry || c.texture > l) throw Error("새로고침 중 메시·텍스처 표시 예산을 초과합니다. 기존 화면을 유지합니다.");
			}
			if (n.signal.throwIfAborted(), this.disposed || i !== this.version) throw Error("새로고침 준비 중 통합 배치가 변경되었습니다. 기존 화면을 유지합니다.");
			a.setCancel(), a.update({ message: "준비된 원본을 화면에 적용 중" }), t(), this.desired = new Map(e.mounts.map((e) => [e.id, e]));
			for (let [e, t] of r) t.update(e), this.root.add(t.root), this.states.get(e.id)?.view?.dispose(), this.states.set(e.id, {
				status: "ready",
				view: t,
				attempted: ut(e.pin)
			});
			r.length = 0;
		} catch (e) {
			throw n.signal.aborted || a.fail(e), e;
		} finally {
			a.finish(), r.forEach(([, e]) => e.dispose()), this.textureJob = void 0, this.changed(), this.pump();
		}
	}
	enqueue(e, t, n) {
		this.cancel(e.id);
		let r = this.states.get(e.id);
		this.states.set(e.id, {
			...r,
			status: "queued",
			attempted: ut(t),
			message: void 0
		});
		let i = new Promise((r, i) => this.jobs.push({
			mount: e,
			pin: t,
			commit: n,
			resolve: r,
			reject: i
		}));
		return this.pump(), this.changed(), i;
	}
	cancel(e) {
		this.residencyJob?.abort(), this.textureJob?.abort(), this.current && (!e || this.current.job.mount.id === e) && this.current.controller.abort(/* @__PURE__ */ Error("로딩을 취소했습니다."));
		let t = this.jobs.filter((t) => !e || t.mount.id === e);
		this.jobs = this.jobs.filter((t) => e && t.mount.id !== e);
		for (let e of t) {
			let t = this.states.get(e.mount.id);
			t && (t.status = "cancelled", t.message = "로딩 취소"), e.reject(/* @__PURE__ */ Error("로딩 취소"));
		}
		this.changed();
	}
	async pump() {
		if (this.current || this.disposed || this.textureJob || this.residencyJob) return;
		let e = this.jobs.shift();
		if (!e) return;
		let t = new AbortController();
		this.current = {
			job: e,
			controller: t
		};
		let n = t.signal, r = this.states.get(e.mount.id);
		r.status = "loading", this.changed();
		let i, a = Do.begin(e.commit ? "선택 원본 갱신 중" : "통합레벨 로드 중", "원본 정보 읽는 중", () => this.cancel());
		a.update({
			message: "원본 정보 읽는 중",
			detail: `${e.mount.name}${this.jobs.length ? ` · 대기 ${this.jobs.length}개` : ""}`
		});
		try {
			await c(), await a.paint(), n.throwIfAborted();
			let t = await this.storage.info(e.pin.source, e.pin);
			n.throwIfAborted();
			let o = this.pool.has(t) ? 0 : t.bytes;
			if (this.admitMemory({ encodedPeak: this.pool.encodedBytes + o * 2 }), this.pool.encodedBytes + o * 2 > this.budget.encodedPeak || this.usage.actors + t.actors > this.budget.actors) throw Error("전체 통합 로드 예산을 초과합니다. 다른 레벨을 로드 해제한 뒤 재시도하세요.");
			i = await this.pool.project(t, {
				...e.mount,
				pin: e.pin
			}, n, this.textureAdmission(), a.update), n.throwIfAborted();
			let s = Eo([this.root, i.root]);
			if (this.admitMemory(s), s.geometry > this.budget.geometry || s.texture > this.budget.texture) throw Error(`전체 표시 예산 초과: 메시 ${(s.geometry / 1024 ** 2).toFixed(1)}/${(this.budget.geometry / 1024 ** 2).toFixed(0)} MiB, 텍스처 ${(s.texture / 1024 ** 2).toFixed(1)}/${(this.budget.texture / 1024 ** 2).toFixed(0)} MiB. 기존 화면을 유지합니다.`);
			let l = this.desired.get(e.mount.id);
			if (!l || !l.loaded || ut(l.pin) !== ut(e.mount.pin)) throw Error("준비 중 배치 설정이 변경되었습니다.");
			a.setCancel(), a.update({
				message: "준비된 레벨을 화면에 적용 중",
				detail: e.mount.name
			}), e.commit?.(), i.update(l), this.root.add(i.root), r.view?.dispose(), this.states.set(e.mount.id, {
				status: "ready",
				view: i,
				attempted: ut(e.pin)
			}), i = void 0, e.resolve();
		} catch (t) {
			i?.dispose(), this.states.get(e.mount.id) === r && (r.status = n.aborted ? "cancelled" : "failed", r.message = t instanceof Error ? t.message : String(t)), n.aborted || a.fail(t), e.reject(t);
		} finally {
			a.finish(), this.current = void 0, this.changed(), this.pump();
		}
	}
	async idle() {
		for (; this.busy;) await new Promise((e) => setTimeout(e, 10));
	}
	viewListeners = /* @__PURE__ */ new Set();
	onViewInvalidated(e) {
		return this.viewListeners.add(e), () => {
			this.viewListeners.delete(e);
		};
	}
	invalidateView() {
		this.viewListeners.forEach((e) => e());
	}
	dispose() {
		this.disposed = !0, this.memory.dispose(), this.cancel(), this.views.forEach((e) => e.dispose()), this.states.clear(), this.sourceDocuments.clear(), this.objectViews.forEach((e) => e.dispose()), this.objectViews.clear(), this.objectKinds.clear(), this.root.clear();
	}
};
//#endregion
//#region src/delivery/CellRuntime.ts
async function Io(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = {
		...e,
		mounts: [],
		levels: [],
		spatial: []
	};
	if (e.addonOverrides && (i.addonOverrides = []), !e.cells) return {
		display: e,
		aliases: t,
		memberships: r,
		source: (t, n) => t.source(e, n)
	};
	for (let a of e.cells) for (let o of a.entries) {
		let s = await k(P([a.level, o.id]));
		n.set(s, {
			level: a.level,
			cell: o
		}), i.levels.push({
			...e.levels.find((e) => e.hash === a.level),
			hash: s,
			actors: o.actors.length
		}), i.spatial.push({
			level: s,
			bounds: o.bounds
		});
		for (let n of e.mounts.filter((e) => e.level === a.level)) {
			let a = await k(P([n.id, o.id])), c = `${a.slice(0, 8)}-${a.slice(8, 12)}-${a.slice(12, 16)}-${a.slice(16, 20)}-${a.slice(20, 32)}`;
			t.set(c, n.id), r.set(c, new Set(o.actors)), i.mounts.push({
				...n,
				id: c,
				level: s,
				name: `${n.name.slice(0, 60)} / ${o.id}`
			}), e.addonOverrides && (i.addonOverrides = [...i.addonOverrides ?? [], ...e.addonOverrides.filter((e) => e.target.mountId === n.id && o.actors.includes(e.target.actorId)).map((e) => ({
				...e,
				target: {
					...e.target,
					mountId: c
				}
			}))]);
		}
	}
	return {
		display: i,
		aliases: t,
		memberships: r,
		source: (t, r) => {
			let i = t.source(e, r), a = (e) => {
				let t = n.get(e.pin.assetRevision);
				if (!t) throw Error("Unknown spatial cell");
				return t;
			};
			return {
				...i,
				info: async (e, t) => {
					let r = t && n.get(t.assetRevision);
					if (!r || !t) throw Error("Unknown spatial cell pin");
					return {
						...await i.info(e, {
							...t,
							assetRevision: r.level
						}),
						pin: t,
						actors: r.cell.actors.length
					};
				},
				prepared: async (e, t, n, r) => {
					let o = a(e);
					return i.prepared({
						...e,
						pin: {
							...e.pin,
							assetRevision: o.level
						}
					}, t, n, r);
				},
				resourceKey: (e) => a(e).level,
				projectDocument: (e, t) => Hn(e, a(t).cell.actors)
			};
		}
	};
}
//#endregion
//#region src/delivery/SpatialResidency.ts
var Lo = Object.freeze({
	loadDistance: 50,
	unloadDistance: 75,
	unloadDelayMs: 3e3
});
function Ro(e) {
	if (!e || Object.keys(e).sort().join() !== "loadDistance,unloadDelayMs,unloadDistance" || !Object.values(e).every((e) => typeof e == "number" && Number.isFinite(e)) || e.loadDistance < 0 || e.unloadDistance <= e.loadDistance || e.unloadDistance > 1e6 || e.unloadDelayMs < 0 || e.unloadDelayMs > 3e5) throw Error("로드 반경보다 언로드 반경을 크게 설정하세요. 지연은 0–300초입니다.");
	return { ...e };
}
var zo = class {
	options;
	wanted;
	outside = /* @__PURE__ */ new Map();
	lastTime = 0;
	entries;
	constructor(e, t, n = []) {
		if (!e.spatial) throw Error("공간 경계가 포함된 게시본이 필요합니다.");
		this.options = Ro(t), this.wanted = new Set(n), this.entries = e.mounts.map((t) => {
			let n = e.spatial.find((e) => e.level === t.level)?.bounds;
			return {
				id: t.id,
				enabled: t.loaded && t.visible,
				bounds: n ? new on(new N(...n.min), new N(...n.max)).applyMatrix4(new mt().compose(new N(...t.position), new bt(...t.rotation), new N(1, 1, 1))) : null
			};
		});
	}
	plan(e, t, n = /* @__PURE__ */ new Set()) {
		if (e.length !== 3 || !e.every(Number.isFinite) || !Number.isFinite(t) || t < 0) throw Error("Invalid streaming camera/time");
		let r = Math.max(t, this.lastTime);
		this.lastTime = r;
		let i = new N(e[0], e[1], e[2]), a = this.entries.map((e) => {
			let t = e.bounds?.distanceToPoint(i) ?? null, a;
			return e.enabled ? n.has(e.id) || t === null || t <= this.options.loadDistance ? (this.wanted.add(e.id), this.outside.delete(e.id), a = n.has(e.id) ? "protected" : t === null ? "unknown-bounds" : "near") : (t <= this.options.unloadDistance ? this.outside.delete(e.id) : (this.outside.has(e.id) || this.outside.set(e.id, r), r - this.outside.get(e.id) >= this.options.unloadDelayMs && this.wanted.delete(e.id)), a = this.wanted.has(e.id) ? "retained" : "deferred") : (this.wanted.delete(e.id), this.outside.delete(e.id), a = "disabled"), {
				id: e.id,
				wanted: this.wanted.has(e.id),
				distance: t,
				reason: a
			};
		});
		return {
			states: a,
			priority: a.filter((e) => e.wanted).sort((e, t) => Number(n.has(t.id)) - Number(n.has(e.id)) || (e.distance ?? 0) - (t.distance ?? 0) || e.id.localeCompare(t.id)).map((e) => e.id)
		};
	}
}, V = class {
	reader;
	root = new sn();
	runtime;
	pending;
	disposed = !1;
	equipmentIndex;
	actorIndex;
	sequence = 0;
	manifest;
	hash;
	queue = Promise.resolve();
	applied;
	displayManifest;
	aliases = /* @__PURE__ */ new Map();
	memberships = /* @__PURE__ */ new Map();
	streamUnsubscribe;
	streamAbort;
	spatialOptions;
	spatial;
	spatialCamera = [
		12,
		10,
		12
	];
	wanted;
	spatialStates = [];
	spatialPaused = !1;
	activeReader;
	spatialOpening;
	spatialHolds = /* @__PURE__ */ new Set();
	mountHolds = /* @__PURE__ */ new Map();
	actorHolds = /* @__PURE__ */ new Map();
	protectedMounts(e = this.displayManifest, t = this.aliases, n = this.memberships) {
		let r = /* @__PURE__ */ new Set();
		for (let i of e?.mounts ?? []) {
			let e = t.get(i.id) ?? i.id;
			(this.mountHolds.has(e) || [...this.actorHolds.values()].some((t) => t.mount === e && (n.get(i.id)?.has(t.actor) ?? this.runtime?.states.get(i.id)?.view?.document.actors.some((e) => e.id === t.actor)))) && r.add(i.id);
		}
		return r;
	}
	retainActor(e) {
		let t = this.resolveActor(e);
		if (!t.loaded) throw Error("Actor is not loaded");
		if (t.mountId === null) return () => {};
		let n = sr(t), r = this.actorHolds.get(n) ?? {
			mount: t.mountId,
			actor: t.actorId,
			tokens: /* @__PURE__ */ new Set()
		}, i = {};
		return r.tokens.add(i), this.actorHolds.set(n, r), () => {
			r.tokens.delete(i) && !r.tokens.size && this.actorHolds.delete(n);
		};
	}
	boxes = /* @__PURE__ */ new Map();
	loadTiming = {};
	get loadStates() {
		return [...this.runtime?.states ?? []].map(([e, t]) => ({
			id: e,
			mountId: this.aliases.get(e) ?? e,
			name: this.displayManifest?.mounts.find((t) => t.id === e)?.name,
			status: t.status,
			message: t.message
		}));
	}
	get placeholderBounds() {
		return [...this.boxes.values()].reduce((e, t) => e.union(t.box), new on());
	}
	clearBoxes() {
		for (let e of this.boxes.values()) e.removeFromParent(), e.geometry.dispose(), (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => e.dispose());
		this.boxes.clear();
	}
	showBoxes(e, t) {
		this.clearBoxes();
		for (let n of e.mounts.filter((e) => e.loaded && e.visible)) {
			if (t && (!t.has(n.id) || this.runtime?.states.get(n.id)?.view)) continue;
			let r = e.spatial?.find((e) => e.level === n.level)?.bounds;
			if (!r) continue;
			let i = new mt().compose(new N(...n.position), new bt(...n.rotation), new N(1, 1, 1)), a = new on(new N(...r.min), new N(...r.max)).applyMatrix4(i), o = new en(a, 7514589);
			this.boxes.set(n.id, o), this.root.add(o);
		}
		this.loadTiming.bounds ??= performance.now();
	}
	get spatialStreaming() {
		return this.spatialOptions ? {
			options: { ...this.spatialOptions },
			paused: this.spatialPaused,
			protected: this.spatialHolds.size > 0,
			states: structuredClone(this.spatialStates)
		} : void 0;
	}
	setSpatialStreaming(e) {
		if (this.disposed || this.operations) throw Error("로딩 작업 후 공간 스트리밍 설정을 변경하세요.");
		let t = e ? Ro(e) : void 0, n = t && this.manifest ? new zo(this.displayManifest ?? this.manifest, t, [...this.runtime?.states ?? []].filter(([, e]) => e.view).map(([e]) => e)) : void 0;
		this.spatialOptions = t, this.spatial = n, this.spatialPaused = !1, this.spatialStates = [], this.wanted = void 0, !t && this.runtime && this.manifest ? (this.runtime.reconcile(rr(this.displayManifest ?? this.manifest)), this.clearBoxes()) : this.updateSpatialStreaming(this.spatialCamera), this.changed();
	}
	retainMount(e) {
		if (this.disposed) throw Error("Viewer disposed");
		if (!this.displayManifest?.mounts.some((t) => t.id === e || this.aliases.get(t.id) === e)) throw Error("Unknown mount to retain");
		let t = {}, n = this.mountHolds.get(e) ?? /* @__PURE__ */ new Set();
		return n.add(t), this.mountHolds.set(e, n), () => {
			n.delete(t) && (n.size || this.mountHolds.delete(e));
		};
	}
	suspendSpatialStreaming() {
		if (this.disposed) throw Error("Viewer disposed");
		let e = {};
		return this.spatialHolds.add(e), this.changed(), () => {
			this.spatialHolds.delete(e) && !this.disposed && this.changed();
		};
	}
	resumeSpatialStreaming() {
		if (!this.disposed) {
			if (!this.spatial || !this.runtime) throw Error("게시본 정보 로드가 취소되었습니다. 게시본을 다시 여세요.");
			this.spatialPaused = !1, this.wanted = void 0, this.updateSpatialStreaming(this.spatialCamera);
			for (let e of this.wanted ?? []) this.runtime?.states.get(e)?.status === "cancelled" && this.runtime.retry(e);
			this.changed();
		}
	}
	updateSpatialStreaming(e, t = performance.now()) {
		if (e.length !== 3 || !e.every(Number.isFinite)) throw Error("Invalid streaming camera");
		if (this.spatialCamera = [...e], !this.spatial || !this.runtime || !this.manifest || this.disposed || this.spatialPaused || this.spatialHolds.size || this.operations && this.spatialOpening !== this.runtime) return;
		let n = this.spatial.plan(e, t, this.protectedMounts()), r = new Set(n.priority);
		if (this.spatialStates = n.states, !this.wanted || r.size !== this.wanted.size || [...r].some((e) => !this.wanted.has(e))) {
			this.wanted = r;
			let e = rr(this.displayManifest ?? this.manifest), t = new Map(n.priority.map((e, t) => [e, t]));
			this.runtime.reconcile({
				...e,
				mounts: e.mounts.map((e) => ({
					...e,
					loaded: e.loaded && r.has(e.id)
				})).sort((e, n) => (t.get(e.id) ?? Infinity) - (t.get(n.id) ?? Infinity))
			}), this.showBoxes(this.displayManifest ?? this.manifest, r), this.changed();
		}
		this.runtime.prioritize(n.priority);
	}
	observeRuntime(e) {
		this.streamUnsubscribe?.(), this.streamUnsubscribe = e.subscribe(() => {
			for (let [t, n] of e.states) if (n.view) {
				n.view.root.userData.deliveryMountId ??= this.aliases.get(t) ?? t;
				let e = this.boxes.get(t);
				e && (e.removeFromParent(), e.geometry.dispose(), (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => e.dispose()), this.boxes.delete(t)), this.loadTiming.firstMesh ??= performance.now();
			}
			(this.displayManifest ?? this.manifest)?.mounts.filter((e) => this.wanted ? this.wanted.has(e.id) : e.loaded).every((t) => e.states.get(t.id)?.status === "ready") && (this.loadTiming.complete ??= performance.now()), this.changed();
		});
	}
	prioritize(e) {
		this.runtime?.prioritize(e.flatMap((e) => this.displayManifest?.mounts.filter((t) => t.id === e || this.aliases.get(t.id) === e).map((e) => e.id) ?? [e]));
	}
	retryMount(e) {
		if (!this.runtime || !(this.displayManifest ?? this.manifest)?.mounts.some((t) => t.id === e) || !this.streamUnsubscribe) throw Error("No progressive mount to retry");
		this.runtime.retry(e);
	}
	deviceStates = /* @__PURE__ */ new Map();
	onChange;
	listeners = /* @__PURE__ */ new Set();
	subscribe(e) {
		return this.listeners.add(e), () => {
			this.listeners.delete(e);
		};
	}
	changed() {
		this.serial++;
		for (let e of [...this.listeners, this.onChange]) try {
			e?.();
		} catch {}
	}
	limits;
	automatic;
	operations = 0;
	serial = 0;
	get busy() {
		return this.operations > 0 || !!this.runtime?.busy;
	}
	get version() {
		return this.serial;
	}
	constructor(e, t) {
		this.reader = e, this.activeReader = e, this.automatic = t?.automatic ?? !t;
		let n = t ?? Po;
		this.limits = Object.freeze({
			...n,
			...jo(n, {
				geometry: 0,
				texture: 0
			})
		});
	}
	get budget() {
		return this.automatic && this.runtime ? this.runtime.budget : this.limits;
	}
	get automaticBudget() {
		return this.automatic;
	}
	get textureApplying() {
		return !!this.runtime?.textureApplying;
	}
	textureDisplay = (() => {
		let e = () => this.runtime?.textureControl();
		return {
			get layouts() {
				return e()?.layouts ?? [];
			},
			get options() {
				return e()?.options ?? {
					maxSize: 128,
					maps: []
				};
			},
			get budgetBytes() {
				return e()?.budgetBytes ?? 0;
			},
			get current() {
				return e()?.current ?? null;
			},
			estimate(t) {
				return e()?.estimate(t) ?? 0;
			},
			apply: async (e, t, n, r) => {
				if (this.disposed || this.operations || !this.runtime) throw Error("게시본 로드가 끝난 뒤 텍스처를 적용하세요.");
				let i = this.suspendSpatialStreaming();
				try {
					await this.runtime.textureControl().apply(e, t, n, r);
				} finally {
					i();
				}
			}
		};
	})();
	setDisplayBudget(e) {
		if (this.disposed || this.operations) throw Error("로딩이 끝나거나 취소된 뒤 표시 예산을 변경하세요.");
		if (e.geometry === 0 && e.texture === 0) this.runtime?.setDisplayBudget(e), this.automatic = !0;
		else {
			let t = Object.freeze({
				...this.limits,
				...jo(e, this.usage)
			});
			this.runtime?.setDisplayBudget(t), this.limits = t, this.automatic = !1;
		}
		this.changed();
	}
	get actors() {
		return this.actorIndex ? structuredClone(this.actorIndex) : void 0;
	}
	findActors(e, t) {
		return structuredClone(this.actorIndex?.actors.filter((n) => n.actorId === e && (t === void 0 || n.mountId === t)) ?? []);
	}
	resolveActor(e) {
		if (e.releaseHash !== this.hash || e.compositionId !== this.manifest?.id) throw Error("Stale actor release or composition");
		let t = this.findActors(e.actorId, e.mountId)[0];
		if (!t) throw Error("Unknown actor target");
		let n = !!(t.mountId === null ? this.runtime?.objectViews.get(t.actorId) : this.views.filter((e) => e.root.userData.deliveryMountId === t.mountId).flatMap((e) => e.projections).find((e) => e.actorId === t.actorId));
		return {
			...t,
			loaded: n,
			available: n && t.visible && !t.excludedSourceDefault,
			focusable: n && t.visible && !t.excludedSourceDefault && t.spatialStatus === "static"
		};
	}
	get equipment() {
		return this.equipmentIndex ? structuredClone(this.equipmentIndex) : void 0;
	}
	findEquipment(e, t) {
		return structuredClone(this.equipmentIndex?.placements.filter((n) => n.objectId === e && (t === void 0 || n.mountId === t)) ?? []);
	}
	resolveEquipment(e) {
		if (e.releaseHash !== this.hash) throw Error("Stale equipment release");
		let t = this.findEquipment(e.objectId, e.mountId)[0];
		if (!t) throw Error("Unknown equipment target");
		let n = !!this.views.find((e) => e.root.userData.deliveryMountId === t.mountId && e.document.actors.some((e) => e.id === t.actorId))?.projections.some((e) => e.actorId === t.actorId);
		return {
			...t,
			loaded: n,
			available: n && t.visible && t.spatialStatus === "static"
		};
	}
	equipmentForHit(e, t, n) {
		return structuredClone(this.equipmentIndex?.placements.filter((r) => r.mountId === e && r.actorId === t && r.componentIds.includes(n) && r.spatialStatus === "static" && r.visible && r.loaded) ?? []);
	}
	get release() {
		return this.hash;
	}
	get applicationRevision() {
		return this.applied;
	}
	get document() {
		return this.manifest ? structuredClone(this.manifest) : void 0;
	}
	get objectViews() {
		return [...this.runtime?.objectViews.values() ?? []];
	}
	get views() {
		return this.runtime?.views ?? [];
	}
	get usage() {
		return this.runtime?.usage ?? {
			actors: 0,
			encoded: 0,
			geometry: 0,
			texture: 0
		};
	}
	setDeviceState(e, t, n) {
		if (!this.actorIndex?.actors.some((n) => n.mountId === e && n.actorId === t) || !this.views.some((n) => n.root.userData.deliveryMountId === e && n.projections.some((e) => e.actorId === t))) throw Error("Device target is not loaded");
		if (!n || Object.keys(n).sort().join() !== "status,values" || ![
			"normal",
			"warning",
			"alarm",
			"offline"
		].includes(n.status) || !n.values || typeof n.values != "object" || Array.isArray(n.values) || Object.entries(n.values).some(([e, t]) => e.length > 128 || !(t === null || typeof t == "boolean" || typeof t == "string" && t.length <= 2048 || typeof t == "number" && Number.isFinite(t))) || P(n).length > 65536) throw Error("Invalid device state");
		let r = JSON.stringify([e, t]);
		if (!this.deviceStates.has(r) && this.deviceStates.size >= 1e4) throw Error("Device state count limit");
		this.deviceStates.set(r, structuredClone(n)), this.changed();
	}
	deviceState(e, t) {
		let n = this.deviceStates.get(JSON.stringify([e, t]));
		return n ? structuredClone(n) : void 0;
	}
	cancel() {
		this.spatialPaused = !0, this.sequence++, this.pending?.abort(/* @__PURE__ */ Error("Delivery operation cancelled")), this.streamUnsubscribe && this.runtime?.cancel();
	}
	async open(e, t = this.activeReader) {
		return this.enqueue(async (n) => ({
			manifest: await t.manifest(e, n),
			hash: e
		}), t);
	}
	async openProgressive(e, t = [], n = this.activeReader) {
		return this.enqueue(async (t) => ({
			manifest: await n.manifest(e, t),
			hash: e
		}), n, void 0, { priority: t });
	}
	async openApplication(e) {
		return this.enqueue(async (t) => ({
			manifest: await e.reader.manifest(e.hash, t),
			hash: e.hash
		}), e.reader, e);
	}
	async control(e, t) {
		if (this.applied) throw Error("Applied model placement is immutable; use host presentation overrides");
		let n = this.manifest;
		if (!n || !n.mounts.some((t) => t.id === e)) throw Error("Unknown mount");
		if (Object.keys(t).some((e) => ![
			"position",
			"rotation",
			"visible",
			"loaded"
		].includes(e))) throw Error("Level internals are read-only");
		let r = nr({
			...n,
			mounts: n.mounts.map((n) => n.id === e ? {
				...n,
				...t
			} : n)
		});
		return this.enqueue(async () => ({
			manifest: r,
			hash: this.hash
		}));
	}
	async enqueue(e, t = this.activeReader, n, r) {
		if (this.disposed) throw Error("Viewer disposed");
		this.cancel(), this.spatialPaused = !1;
		let i = this.sequence, a = new AbortController();
		this.pending = a;
		let o = this.queue.catch(() => {}).then(async () => {
			let o = a.signal;
			if (o.throwIfAborted(), i !== this.sequence) throw Error("Stale delivery operation");
			let { manifest: s, hash: c } = await e(o);
			o.throwIfAborted();
			let l = await Io(s), u = l.display, d = new Map(u.mounts.map((e) => [e.id, n?.aliases.get(l.aliases.get(e.id) ?? e.id) ?? l.aliases.get(e.id) ?? e.id])), f = this.spatialOptions ? new zo(u, this.spatialOptions) : void 0, p = f?.plan(this.spatialCamera, performance.now(), this.protectedMounts(u, d, l.memberships)), m = p ? new Set(p.priority) : void 0, h = !(n || !r && !f || this.runtime || !s.spatial);
			h && (Object.keys(this.loadTiming).forEach((e) => {
				delete this.loadTiming[e];
			}), this.loadTiming.started = performance.now(), this.showBoxes(u), this.changed());
			let { equipment: g, actors: _ } = !n && !this.applied && this.equipmentIndex && this.actorIndex && c === this.hash ? {
				equipment: br(this.equipmentIndex, s),
				actors: dr(this.actorIndex, s)
			} : await t.catalogs(c, o, s);
			if (n) for (let e of _.actors) e.mountId &&= n.aliases.get(e.mountId) ?? e.mountId, e.serviceKey = sr(e);
			if (n) for (let e of g.placements) e.mountId = n.aliases.get(e.mountId) ?? e.mountId;
			o.throwIfAborted();
			let v = new Map(this.manifest?.files.map((e) => [e.hash, new TextDecoder().decode(P(e))]) ?? []);
			for (let e of s.files) if (v.has(e.hash) && v.get(e.hash) !== new TextDecoder().decode(P(e))) throw Error("Immutable file descriptor changed");
			let y = rr(u), b = new Map((p?.priority ?? r?.priority.flatMap((e) => u.mounts.filter((t) => t.id === e || d.get(t.id) === e).map((e) => e.id)) ?? []).map((e, t) => [e, t])), ee = {
				...y,
				mounts: y.mounts.map((e) => ({
					...e,
					loaded: e.loaded && (!m || m.has(e.id))
				})).sort((e, t) => (b.get(e.id) ?? b.size) - (b.get(t.id) ?? b.size))
			}, x = () => {
				this.displayManifest = u, this.aliases = d, this.memberships = l.memberships, this.spatial = f, this.wanted = m, this.spatialStates = p?.states ?? [];
			};
			if (!n && !this.applied && t.provider === this.activeReader.provider && this.runtime && this.manifest && s.id === this.manifest.id && u.mounts.every((e) => !e.loaded || this.runtime.states.get(e.id)?.view?.info.pin.assetRevision === e.level)) {
				this.activeReader = t, x(), this.runtime.reconcile(ee), this.manifest = s, this.hash = c, this.equipmentIndex = g, this.actorIndex = _, this.changed(), this.pending === a && (this.pending = void 0);
				return;
			}
			let S = h ? new AbortController() : void 0, C = l.source(t, S?.signal ?? o), w = new To(C, this.runtime?.textureControl().options ?? ce), te = this.usage;
			w.configureAddons({
				environment: "delivery",
				compositionId: s.id,
				mountId: (e) => d.get(e) ?? e,
				overrides: (e, t, n) => at(u.addonOverrides, {
					...e,
					mountId: n ?? e.mountId
				}, t)
			});
			let T = new Fo(C, w, this.automatic ? {
				...Po,
				automatic: !0,
				actors: Math.max(0, Po.actors - te.actors)
			} : {
				encodedPeak: Math.max(0, this.budget.encodedPeak - te.encoded),
				actors: Math.max(0, this.budget.actors - te.actors),
				geometry: Math.max(0, Math.floor(this.budget.geometry - te.geometry)),
				texture: Math.max(0, Math.floor(this.budget.texture - te.texture))
			}), ne = () => T.cancel();
			o.addEventListener("abort", ne, { once: !0 });
			let re = !1;
			try {
				h && (this.activeReader = t, this.streamAbort = S, this.root.add(T.root), this.runtime = T, this.manifest = s, this.hash = c, this.equipmentIndex = g, this.actorIndex = _, re = !0, x(), this.spatialOpening = T, this.observeRuntime(T), m && this.showBoxes(u, m)), T.reconcile(ee);
				for (let e of T.objectViews.values()) e.setHelpersVisible?.(!1), e.setIconPresentation?.(!1, 1);
				if (T.usage.geometry > T.budget.geometry || T.usage.texture > T.budget.texture || T.usage.actors > T.budget.actors) throw Error("통합 객체 표시 예산 초과");
				if (await T.idle(), o.throwIfAborted(), h) {
					this.changed();
					return;
				}
				let e = [...T.states.values()].find((e) => e.status !== "ready" && e.status !== "unloaded");
				if (e) throw Error(e.message ?? "Level preparation failed");
				for (let [e, t] of T.states) t.view && (t.view.root.userData.deliveryMountId = d.get(e) ?? e);
				if (i !== this.sequence || this.disposed) throw Error("Stale delivery operation");
				let r = this.runtime;
				this.root.add(T.root), this.runtime = T, this.manifest = s, this.hash = c, this.equipmentIndex = g, this.actorIndex = _, this.streamUnsubscribe?.(), this.streamUnsubscribe = void 0, this.streamAbort?.abort(), this.streamAbort = void 0, this.clearBoxes(), this.applied = n?.revision, this.activeReader = t, x(), this.observeRuntime(T), m && this.showBoxes(u, m), r?.root.removeFromParent(), r?.dispose(), this.changed();
			} catch (e) {
				throw re || T.dispose(), await T.idle(), e;
			} finally {
				this.spatialOpening === T && (this.spatialOpening = void 0), o.removeEventListener("abort", ne), this.pending === a && (this.pending = void 0);
			}
		});
		this.operations++;
		let s = o.catch((e) => {
			throw this.runtime || this.clearBoxes(), this.pending === a && (this.pending = void 0), e;
		}).finally(() => {
			this.operations--, this.changed();
		});
		return this.queue = s, s;
	}
	async dispose() {
		this.disposed || (this.disposed = !0, this.cancel(), await this.queue.catch(() => {}), this.streamUnsubscribe?.(), this.streamUnsubscribe = void 0, this.clearBoxes(), this.streamAbort?.abort(), this.streamAbort = void 0, this.runtime?.dispose(), this.runtime = void 0, this.spatial = void 0, this.spatialOptions = void 0, this.spatialHolds.clear(), this.mountHolds.clear(), this.actorHolds.clear(), this.aliases.clear(), this.memberships.clear(), this.displayManifest = void 0, this.spatialStates = [], this.root.clear(), this.deviceStates.clear(), this.equipmentIndex = void 0, this.actorIndex = void 0, this.listeners.clear(), this.onChange = void 0);
	}
}, H = class {
	viewer;
	binding;
	pending;
	disposed = !1;
	bindingGeneration = 0;
	listeners = /* @__PURE__ */ new Set();
	notified = "";
	error = null;
	constructor(e) {
		this.viewer = e;
	}
	hosts() {
		return this.viewer.session.views.flatMap((e) => e.projections.flatMap((e) => e.addons ? [e.addons] : []));
	}
	list() {
		return this.hosts().flatMap((e) => e.list());
	}
	subscribe(e) {
		if (this.disposed) throw Error("Addon controller disposed");
		return this.listeners.add(e), () => {
			this.listeners.delete(e);
		};
	}
	changed() {
		let e = JSON.stringify(this.list());
		if (e !== this.notified) {
			this.notified = e;
			for (let e of [...this.listeners]) try {
				e();
			} catch {}
		}
	}
	async changeBatch(e, t = "runtime") {
		if (this.disposed) throw Error("Addon controller disposed");
		if (!e.length || e.length > 4096) throw Error("Invalid addon property batch");
		if (t === "persistent" && !this.binding) throw Error("Delivery persistence requires a host property connection");
		let n = this.list(), r = /* @__PURE__ */ new Set(), i = e.map((e) => {
			let i = A(e.target);
			if (r.has(i)) throw Error("Duplicate addon target");
			r.add(i);
			let a = n.find((e) => A(e.target) === i);
			if (!a || a.state !== "running") throw Error("Exact loaded addon instance not found");
			if (a.revision !== e.expectedRevision) throw Error("Addon property revision conflict");
			let o = s({
				typeVersion: 3,
				scriptPackage: a.reference
			});
			if (o.manifest.sdkVersion !== 5) throw Error("Addon SDK 5 required");
			return ot(o.manifest, e.values, t), {
				host: this.hosts().find((e) => e.list().some((e) => A(e.target) === i)),
				update: e
			};
		});
		if (this.binding) return await this.binding.change(e.map((e) => ({
			target: e.target,
			values: e.values,
			codeHash: n.find((t) => A(t.target) === A(e.target)).reference.codeHash
		})), t), this.list();
		let a = i.map(({ host: e, update: n }) => e.change(n.target, n.values, t, n.expectedRevision));
		return this.viewer.invalidate(), this.changed(), a;
	}
	async bind(e) {
		if (this.disposed) throw Error("Addon controller disposed");
		let t = ++this.bindingGeneration;
		await this.pending?.dispose(), this.pending = e, await this.binding?.dispose();
		let n = !1, r = 0, i, a = () => {
			if (!n && i) {
				for (let e of this.hosts()) for (let t of e.list()) {
					let n = i.instances.find((e) => A(e.target) === A(t.target) && e.reference.codeHash === t.reference.codeHash);
					n && t.state === "running" && e.synchronize(t.target, n.values);
				}
				this.viewer.invalidate(), this.changed();
			}
		}, o = async () => {
			let t = ++r, o = await e.list();
			!n && t === r && (i = o, a());
		}, s = e.subscribe(() => {
			o().catch((e) => {
				this.error = e instanceof Error ? e.message : "Addon synchronization failed";
			});
		}), c = this.viewer.session.subscribe(a);
		try {
			if (await e.connect(), await o(), this.disposed || t !== this.bindingGeneration) throw Error("Addon binding cancelled");
		} catch (t) {
			throw n = !0, s(), c(), await e.dispose(), t;
		}
		let l = {
			change: async (t, r) => {
				if (!i || n) throw Error("Addon control binding unavailable");
				i = await e.change(t, r, i.revision), a();
			},
			dispose: async () => {
				n || (n = !0, r++, s(), c(), await e.dispose(), this.binding === l && (this.binding = void 0, this.hosts().forEach((e) => e.clearSynchronization()), this.viewer.invalidate(), this.changed()));
			}
		};
		return this.pending = void 0, this.binding = l, this.error = null, l;
	}
	async dispose() {
		this.disposed || (this.disposed = !0, this.bindingGeneration++, this.listeners.clear(), await this.pending?.dispose(), await this.binding?.dispose(), this.pending = void 0, this.binding = void 0);
	}
};
//#endregion
//#region src/composition/CompositionBatchAudit.ts
function Bo(e) {
	let t = 0, n = Object.entries(e.attributes).sort(([e], [t]) => e < t ? -1 : +(e > t)), r = e.getAttribute("position");
	if (!r || !r.count) return {
		bytes: t,
		reason: "missing positions"
	};
	if (Object.keys(e.morphAttributes).length) return {
		bytes: t,
		reason: "morph geometry"
	};
	let i = e.index?.count ?? r.count;
	if (e.drawRange.start !== 0 || e.drawRange.count !== Infinity && e.drawRange.count !== i) return {
		bytes: t,
		reason: "partial draw range"
	};
	let a = [];
	for (let [e, i] of n) {
		if (!(i instanceof qt) || i.count !== r.count || i.usage !== 35044) return {
			bytes: t,
			reason: "interleaved, dynamic or mismatched attribute"
		};
		t += i.array.byteLength, a.push([
			e,
			i.itemSize,
			i.normalized,
			i.array.constructor.name,
			i.gpuType
		]);
	}
	return e.index && (t += e.index.count * 4), {
		key: JSON.stringify([!!e.index, a]),
		bytes: t
	};
}
function Vo(e) {
	if (!Array.isArray(e.material)) return JSON.stringify([
		e.geometry.uuid,
		e.material.uuid,
		e.layers.mask,
		e.renderOrder,
		e.castShadow,
		e.receiveShadow
	]);
}
function Ho(e) {
	for (let t = e; t; t = t.parent) if (!t.visible) return !1;
	return !0;
}
function Uo(e, t = !1) {
	let n = /* @__PURE__ */ new Map(), r = {}, i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), c = 0, l = 0, u = 0, d = (e) => {
		r[e] = (r[e] ?? 0) + 1;
	};
	for (let [r, f] of e.entries()) for (let e of f.projections) {
		if (e.viewDependentInstancing) {
			u++;
			continue;
		}
		if (Ho(e.object)) for (let u of e.instancingMeshes(!0)) {
			if (!Ho(u)) continue;
			if (c++, u.type !== "Mesh" || u.children.length || u.morphTargetInfluences?.length || Array.isArray(u.material)) {
				d("non-static leaf");
				continue;
			}
			let p = Ie(u.material) ?? u.userData.staticBatchMaterialId;
			if (typeof p != "string") {
				d("no existing immutable material identity");
				continue;
			}
			let m = [
				u.layers.mask,
				u.renderOrder,
				u.castShadow,
				u.receiveShadow
			], h = JSON.stringify([
				u.geometry.uuid,
				p,
				m,
				...t ? [u.uuid] : []
			]);
			if (i.add(h), o.add(u.geometry.uuid), s.add(p), u.onBeforeRender !== St.prototype.onBeforeRender || u.onAfterRender !== St.prototype.onAfterRender || u.customDepthMaterial || u.customDistanceMaterial) {
				d("custom object render hooks");
				continue;
			}
			let g = [
				0,
				1,
				2
			].map((e) => new N().setFromMatrixColumn(u.matrixWorld, e).normalize());
			if (!u.matrixWorld.elements.every(Number.isFinite) || u.matrixWorld.determinant() <= 0 || [
				g[0].dot(g[1]),
				g[0].dot(g[2]),
				g[1].dot(g[2])
			].some((e) => Math.abs(e) >= 1e-6)) {
				d("reflection, shear or singular transform");
				continue;
			}
			let _ = Ge(u.material), v = Bo(u.geometry);
			if (!_.key || !v.key) {
				d(_.reason ?? v.reason ?? "unknown");
				continue;
			}
			l++, a.add(_.key);
			let y = JSON.stringify([
				_.key,
				v.key,
				m,
				...t ? [u.matrixWorld.elements] : []
			]), b = n.get(y) ?? {
				key: y,
				members: []
			};
			n.set(y, b), b.members.push({
				source: u,
				actorId: e.actorId,
				mount: f.info.name,
				mountIndex: r,
				existingKey: h,
				key: y,
				geometryBytes: v.bytes
			});
		}
	}
	let f = [...n.values()].map((e, t) => {
		let n = new Map(e.members.map((e) => [e.source.geometry, e.geometryBytes])), r = new Set(e.members.map((e) => e.existingKey)).size;
		return {
			id: t,
			members: e.members.length,
			actors: new Set(e.members.map((e) => `${e.mountIndex}:${e.actorId}`)).size,
			existingDrawGroups: r,
			potentialMultiDrawCalls: 1,
			savedDrawGroups: Math.max(0, r - 1),
			uniqueGeometry: n.size,
			copiedGeometryBytes: [...n.values()].reduce((e, t) => e + t, 0),
			mounts: [...new Set(e.members.map((e) => e.mount))],
			materialType: e.members[0].source.material.type,
			shaderRecipe: ye(e.members[0].source.material) ? "captured validated frozen recipe" : "standard material/source identity"
		};
	}), p = f.filter((e) => e.savedDrawGroups > 0);
	return {
		groups: [...n.values()],
		summary: {
			meshes: c,
			accepted: l,
			viewDependentActors: u,
			originalDrawGroups: i.size,
			originalMaterialIdentities: s.size,
			uniqueGeometry: o.size,
			compatibleMaterialGroups: a.size,
			compatibleGeometryMaterialGroups: f.length,
			usefulGroups: p.length,
			potentialSavedDrawGroups: p.reduce((e, t) => e + t.savedDrawGroups, 0),
			potentialCopiedGeometryBytes: p.reduce((e, t) => e + t.copiedGeometryBytes, 0),
			rejected: r,
			candidates: f
		}
	};
}
//#endregion
//#region src/composition/CompositionBatchOrder.ts
function Wo(e, t, n = .01) {
	if (!Number.isFinite(n) || n < 0) throw Error("Invalid overlap padding");
	let r = /* @__PURE__ */ new Map();
	for (let i of e) for (let e of i.members) {
		let a = t.get(e.existingKey);
		if (!Number.isSafeInteger(a) || a < 0) throw Error("Missing original draw rank");
		let o = e.source.material, s = !o.depthTest || !o.depthWrite || o.depthFunc !== 3 || o.polygonOffset || o.stencilWrite || o.transparent, c = r.get(e.existingKey) ?? {
			key: e.existingKey,
			compatible: i.key,
			members: [],
			rank: a,
			barrier: s,
			boxes: [],
			bounds: new on()
		};
		if (c.compatible !== i.key) throw Error("Inconsistent compatible material");
		r.set(c.key, c), c.members.push(e);
		let l = e.source.geometry, u = l.getAttribute("position");
		if (!(u instanceof qt)) throw Error("Unsupported position attribute");
		let d = (l.boundingBox?.clone() ?? new on().setFromBufferAttribute(u)).applyMatrix4(e.source.matrixWorld).expandByScalar(n);
		if (![...d.min.toArray(), ...d.max.toArray()].every(Number.isFinite)) throw Error("Invalid source bounds");
		c.boxes.push(d), c.bounds.union(d);
	}
	let i = [...r.values()].sort((e, t) => e.rank - t.rank);
	if (new Set(i.map((e) => e.rank)).size !== i.length) throw Error("Ambiguous original draw order");
	let a = i.map(() => []), o = i.map(() => 0), s = 0;
	for (let e = 0; e < i.length; e++) for (let t = e + 1; t < i.length; t++) {
		let n = i[e], r = i[t], c = r.rank - n.rank !== t - e, l = n.bounds.intersectsBox(r.bounds) && n.boxes.some((e) => r.boxes.some((t) => e.intersectsBox(t)));
		(c || n.barrier || r.barrier || l) && (a[e].push(t), o[t] = o[t] + 1, s++);
	}
	let c = new Set(o.flatMap((e, t) => e === 0 ? [t] : [])), l = [], u;
	for (; c.size;) {
		let e = [...c].sort((e, t) => e - t), t = e.find((e) => u !== void 0 && i[e].members.length > 1 && i[e].compatible === u) ?? e[0];
		c.delete(t);
		let n = i[t];
		l.push(n), u = n.members.length > 1 ? n.compatible : void 0;
		for (let e of a[t]) o[e] = o[e] - 1, o[e] === 0 && c.add(e);
	}
	if (l.length !== i.length) throw Error("Cyclic overlap dependencies");
	let d = new Map(t);
	return l.forEach((e, t) => d.set(e.key, i[t].rank)), a.forEach((e, t) => e.forEach((e) => {
		if (d.get(i[t].key) >= d.get(i[e].key)) throw Error("Overlap order changed");
	})), {
		order: d,
		statistics: {
			draws: i.length,
			dependencies: s,
			paddingMeters: n,
			movedDraws: i.filter((e) => d.get(e.key) !== e.rank).length
		}
	};
}
//#endregion
//#region src/composition/CompositionMaterialBatches.ts
function Go(e, t = "all", n = "material", r) {
	let i = /* @__PURE__ */ new Map();
	for (let t of e) for (let e of t.members) i.set(e.existingKey, (i.get(e.existingKey) ?? 0) + 1);
	let a = e.flatMap((e) => {
		let a = e.members.filter((e) => t === "all" || i.get(e.existingKey) > 1 == (t === "instanced"));
		if (r && a.some((e) => !Number.isSafeInteger(r.get(e.existingKey)) || r.get(e.existingKey) < 0)) throw Error("Missing original draw rank");
		if (n !== "geometry") return a.length ? [{
			...e,
			members: r ? a.sort((e, t) => r.get(e.existingKey) - r.get(t.existingKey)) : a
		}] : [];
		let o = /* @__PURE__ */ new Map();
		for (let e of a) {
			let t = o.get(e.existingKey) ?? {
				key: e.existingKey,
				members: []
			};
			o.set(e.existingKey, t), t.members.push(e);
		}
		return [...o.values()];
	});
	if (n !== "runs") return a;
	if (!r) throw Error("Ordered runs require a captured draw order");
	let o = /* @__PURE__ */ new Map();
	for (let e of a) for (let t of e.members) {
		let n = o.get(t.existingKey) ?? {
			key: e.key,
			members: []
		};
		o.set(t.existingKey, n), n.members.push(t);
	}
	let s = [], c = -2;
	for (let [e, t] of [...o].sort(([e], [t]) => r.get(e) - r.get(t))) {
		let n = r.get(e);
		if (n === void 0) throw Error("Missing original draw rank");
		let i = s.at(-1);
		i && i.key === t.key && n === c + 1 ? i.members.push(...t.members) : s.push({
			key: t.key,
			members: [...t.members]
		}), c = n;
	}
	return s;
}
var Ko = class {
	budget;
	root = new sn();
	selected = /* @__PURE__ */ new Set();
	statistics = {
		groups: 0,
		replacedDrawGroups: 0,
		members: 0,
		copiedGeometryBytes: 0,
		actualBufferBytes: 0,
		skippedForBudget: 0
	};
	enabled = !1;
	generation;
	active = [];
	proxies = /* @__PURE__ */ new WeakMap();
	batches = [];
	restoreActive;
	originalPrepare;
	constructor(e, t, n, r = 805306368, i = !1, a, o = !1, s = !1) {
		if (this.budget = r, this.originalPrepare = s ? () => () => {} : e.prepareView.bind(e), !Number.isSafeInteger(r) || r < 0) throw Error("Invalid probe buffer budget");
		this.root.name = "Composition material batches", this.root.visible = !1, wn(this.root);
		try {
			for (let e of n) {
				let t = new Set(e.members.map((e) => e.existingKey)).size;
				if (t < (i ? 1 : 2)) continue;
				if (o && e.members.length !== 1) throw Error("Object transform control requires a singleton");
				let n = new Map(e.members.map((e) => [e.source.geometry, e.geometryBytes])), c = [...n.values()].reduce((e, t) => e + t, 0);
				if (this.statistics.copiedGeometryBytes + c > r) {
					this.statistics.skippedForBudget++;
					continue;
				}
				let l = e.members[0].source;
				if (s && e.members.some((e) => !e.source.matrixWorld.equals(l.matrixWorld))) throw Error("Native batch requires identical object transforms");
				if (Array.isArray(l.material)) throw Error("Probe requires a single validated material");
				let u = [...n.keys()].reduce((e, t) => e + t.getAttribute("position").count, 0), d = [...n.keys()].reduce((e, t) => e + (t.index?.count ?? 0), 0), f = new Gt(e.members.length, u, d, l.material), p = o || s;
				this.batches.push({
					mesh: f,
					sources: e.members.map((e) => e.source),
					objectTransform: p
				}), p && (f.matrixAutoUpdate = !1, f.matrix.copy(l.matrixWorld)), f.name = "Compatible static material", f.layers.mask = l.layers.mask, f.renderOrder = l.renderOrder, a && (f.userData.compositionDrawRank = Math.min(...e.members.map((e) => a.get(e.existingKey)))), f.castShadow = l.castShadow, f.receiveShadow = l.receiveShadow, f.perObjectFrustumCulled = !1, f.sortObjects = !1, f.frustumCulled = !1;
				let m = /* @__PURE__ */ new Map();
				n.forEach((e, t) => m.set(t, f.addGeometry(t)));
				for (let t of e.members) {
					let e = f.addInstance(m.get(t.source.geometry));
					f.setMatrixAt(e, p ? new mt() : t.source.matrixWorld), this.selected.add(t.source);
				}
				this.root.add(f), this.statistics.groups++, this.statistics.replacedDrawGroups += t, this.statistics.members += e.members.length, this.statistics.copiedGeometryBytes += c, this.statistics.actualBufferBytes += Object.values(f.geometry.attributes).reduce((e, t) => e + t.array.byteLength, 0) + (f.geometry.index?.array.byteLength ?? 0);
			}
			t.add(this.root), this.root.updateMatrixWorld(!0);
		} catch (e) {
			throw this.dispose(), e;
		}
	}
	proxy(e) {
		let t = this.proxies.get(e);
		return t || (t = {
			...e,
			instancingMeshes: (t) => e.instancingMeshes(t).filter((e) => !this.selected.has(e))
		}, this.proxies.set(e, t)), t;
	}
	prepare = (e, t, n = !0, r) => {
		if (!this.enabled || !n) return this.originalPrepare(e, t, n, r);
		if (this.restoreActive) throw Error("Unrestored diagnostic batch view");
		if (r === void 0 || r !== this.generation) {
			let t = new Set(e.flatMap((e) => e.instancingMeshes(!0)));
			this.active = [];
			for (let e of this.batches) e.sources.forEach((n, r) => {
				let i = t.has(n);
				for (let e = n; e; e = e.parent) i &&= e.visible;
				e.mesh.setVisibleAt(r, i), i && (e.objectTransform ? (e.mesh.matrix.copy(n.matrixWorld), e.mesh.updateMatrixWorld(!0)) : e.mesh.setMatrixAt(r, n.matrixWorld), this.active.push(n));
			});
			this.generation = r;
		}
		let i = this.originalPrepare(e.map((e) => this.proxy(e)), t, n, r), a = this.active.filter((e) => e.visible);
		a.forEach((e) => {
			e.visible = !1;
		}), this.root.visible = !0;
		let o = () => {
			this.restoreActive === o && (this.restoreActive = void 0, this.root.visible = !1, a.forEach((e) => {
				e.visible = !0;
			}), i());
		};
		return this.restoreActive = o, o;
	};
	dispose() {
		this.restoreActive?.(), this.batches.forEach((e) => e.mesh.dispose()), this.batches.length = 0, this.selected.clear(), this.root.removeFromParent();
	}
}, qo = 512 * Ye, Jo = 4096;
function Yo(e) {
	let t = 0, n = 0;
	for (let r of e) {
		if (new Set(r.members.map((e) => e.existingKey)).size < 2) continue;
		t += [...new Map(r.members.map((e) => [e.source.geometry, e.geometryBytes])).values()].reduce((e, t) => e + t, 0);
		let e = r.members.length;
		n += (Math.ceil(Math.sqrt(e * 4)) + 4) ** 2 * 16 + (Math.ceil(Math.sqrt(e)) + 4) ** 2 * 4;
	}
	return {
		geometry: t,
		reserved: t * 2 + n * 2
	};
}
var Xo = class {
	renderer;
	scene;
	instancing;
	redraw;
	report;
	refreshCapacity;
	plan;
	reservation;
	sort;
	retry;
	serial = 0;
	token = 0;
	key;
	attempted = !1;
	disposed = !1;
	lost = !1;
	bytes = {
		geometry: 0,
		reserved: 0
	};
	status = {
		state: "off",
		message: "",
		geometryBytes: 0,
		reservedBytes: 0,
		savedDraws: 0
	};
	constructor(e, t, n, r, i, a = c) {
		this.renderer = e, this.scene = t, this.instancing = n, this.redraw = r, this.report = i, this.refreshCapacity = a, e.domElement.addEventListener("webglcontextlost", this.contextLost), e.domElement.addEventListener("webglcontextrestored", this.contextRestored);
	}
	snapshot() {
		return this.status;
	}
	invalidate() {
		++this.token, ++this.serial, this.key = void 0, this.attempted = !1, this.plan?.dispose(), this.plan = void 0, this.sort = void 0, this.reservation?.dispose(), this.reservation = void 0, this.bytes = {
			geometry: 0,
			reserved: 0
		};
	}
	contextLost = () => {
		this.lost = !0, this.invalidate(), this.publish("fallback", "그래픽 장치 복구 대기"), this.redraw();
	};
	contextRestored = () => {
		this.lost = !1, this.invalidate(), this.redraw();
	};
	publish(e, t) {
		let n = {
			state: e,
			message: t,
			geometryBytes: this.bytes.geometry,
			reservedBytes: this.bytes.reserved,
			savedDraws: this.plan ? this.plan.statistics.replacedDrawGroups - this.plan.statistics.groups : 0
		};
		JSON.stringify(n) !== JSON.stringify(this.status) && (this.status = n, this.report(n));
	}
	fail(e) {
		this.invalidate(), this.attempted = !0, this.publish("fallback", e);
	}
	render(e, t) {
		if (this.disposed) return;
		let n = `${e.generation}:${e.enabled}:${e.reason ?? ""}`;
		n !== this.key && (this.invalidate(), this.key = n);
		let r = this.lost ? "그래픽 장치 복구 대기" : e.reason;
		if (!e.enabled || r ? this.publish(e.enabled ? "fallback" : "off", r ?? "") : this.attempted || (this.attempted = !0, this.renderer.extensions.has("WEBGL_multi_draw") ? this.publish("preparing", "정적 메시 배칭 준비 중") : this.publish("fallback", "이 그래픽 장치에서는 지원하지 않습니다")), this.plan && !r && e.enabled) {
			let r = this.renderer.debug.onShaderError;
			try {
				this.retry = void 0, this.renderer.debug.onShaderError = () => {
					this.retry ??= new Xi("배칭 셰이더를 사용할 수 없습니다");
				}, this.renderer.setOpaqueSort(this.sort);
				let n = this.plan.prepare(e.projections, e.camera, !0, this.serial);
				try {
					if (t(), this.retry) throw this.retry;
				} finally {
					n();
				}
				this.publish("active", `배칭 적용 · 추가 메시 ${(this.bytes.geometry / Ye).toFixed(1)} MiB`);
				return;
			} catch (e) {
				this.fail(`기존 표시 사용 · ${e instanceof Error ? e.message : String(e)}`), this.key = n, this.renderer.clear(), this.renderer.info.reset();
			} finally {
				this.retry = void 0, this.renderer.setOpaqueSort(e.nativeSort ?? null), this.renderer.debug.onShaderError = r;
			}
		}
		e.nativeFallback && this.renderer.setOpaqueSort(e.nativeSort ?? null);
		let i = e.nativeFallback ? () => {} : this.instancing.prepareView(e.projections, e.camera, !0, this.serial);
		try {
			t();
		} finally {
			i();
		}
		if (this.status.state === "preparing" && !this.plan) {
			let t = this.renderer.renderLists.get(this.scene, 0).opaque.map((e, t) => ({
				object: e.object,
				rank: t,
				reference: e.object instanceof M ? Vo(e.object) : void 0
			}));
			this.publish("preparing", "메모리 확인 및 배칭 준비 중"), this.build(e, t, this.token);
		}
	}
	buildingToken;
	async build(e, t, n) {
		if (this.buildingToken !== n) {
			this.buildingToken = n;
			try {
				if (await this.refreshCapacity(), this.disposed || n !== this.token) return;
				let r = !1;
				if (this.scene.traverseVisible((e) => {
					"isLight" in e && e.castShadow && (r = !0);
				}), r || e.projections.some((e) => e.viewDependentInstancing)) throw Error("그림자 또는 동적 표시에서는 기존 렌더링을 사용합니다");
				let a = Uo(e.views, e.nativeFallback);
				if (a.summary.originalDrawGroups > Jo) throw Error("배칭 준비 한도를 초과한 장면입니다");
				let o = new Map(a.groups.flatMap((e) => e.members.map((e) => [Vo(e.source), e.existingKey]))), s = new Map(a.groups.flatMap((e) => e.members.map((e) => [e.source, e.existingKey]))), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
				for (let n of t) {
					l.set(n.object, n.rank);
					let t = e.nativeFallback ? s.get(n.object) : o.get(n.reference);
					t && c.set(t, n.rank);
				}
				let u = a.groups.map((e) => ({
					...e,
					members: e.members.filter((e) => c.has(e.existingKey))
				})).filter((e) => e.members.length), { order: d } = Wo(u, c), f = Go(u, e.nativeFallback ? "all" : "instanced", "runs", d), p = Yo(f);
				if (!p.geometry) throw Error("함께 그릴 수 있는 정적 메시가 없습니다");
				if (p.geometry > qo || p.geometry > (e.geometryAllowance?.() ?? Infinity)) throw Error("추가 메시 메모리 예산이 부족합니다");
				let m = this.reservation = new i();
				m.update(p.reserved, 0, !0);
				let h = this.plan = new Ko(this.instancing, this.scene, f, p.geometry, !1, d, !1, e.nativeFallback);
				if (!h.statistics.groups || h.statistics.skippedForBudget) throw Error("배칭 버퍼 준비가 완료되지 않았습니다");
				h.enabled = !0, this.bytes = {
					...p,
					geometry: h.statistics.actualBufferBytes
				}, ++this.serial;
				let g = /* @__PURE__ */ new WeakMap(), _ = (t) => {
					let n = g.get(t.object);
					if (n === void 0) {
						let r = t.object instanceof M ? Vo(t.object) : void 0;
						if (n = t.object.userData.compositionDrawRank ?? d.get(e.nativeFallback ? s.get(t.object) : o.get(r)) ?? l.get(t.object), n === void 0) return this.retry ??= new Xi("표시 범위가 바뀌었습니다. 배칭을 다시 켜서 준비하세요"), 2 ** 53 - 1;
						g.set(t.object, n);
					}
					return n;
				};
				this.sort = (e, t) => _(e) - _(t), m.update(p.reserved, p.reserved, !0), this.redraw();
			} catch (e) {
				if (this.disposed || n !== this.token) return;
				let t = this.key;
				this.fail(e instanceof Error ? e.message : String(e)), this.key = t, this.redraw();
			}
		}
	}
	dispose() {
		this.disposed = !0, this.invalidate(), this.renderer.domElement.removeEventListener("webglcontextlost", this.contextLost), this.renderer.domElement.removeEventListener("webglcontextrestored", this.contextRestored);
	}
}, Zo = class {
	spatialCellMeters;
	root = new sn();
	batches = /* @__PURE__ */ new Map();
	activeRestore = null;
	cachedGeneration;
	cachedEnabled = !1;
	cachedHidden = [];
	sourceCache = /* @__PURE__ */ new WeakMap();
	constructor(e, t = 0) {
		if (this.spatialCellMeters = t, !Number.isFinite(t) || t < 0) throw Error("Invalid instance cell size");
		this.root.name = "Static mesh instance batches", wn(this.root), this.root.visible = !1, e.add(this.root);
	}
	prepareView(e, t, n = !0, r) {
		if (this.activeRestore) throw Error("An instanced view must be restored before preparing another.");
		if (r !== void 0 && (!Number.isSafeInteger(r) || r < 0)) throw Error("Invalid instancing generation");
		let i = [], a = [], o = () => {
			this.activeRestore === o && (this.root.visible = !1, a.forEach((e) => {
				e.visible = !0;
			}), i.reverse().forEach((e) => e()), this.activeRestore = null);
		};
		this.activeRestore = o;
		try {
			let s = r !== void 0 && !e.some((e) => e.viewDependentInstancing);
			if (s && this.cachedGeneration === r && this.cachedEnabled === n) {
				for (let e of this.cachedHidden) a.push(e), e.visible = !1;
				return this.root.visible = n, o;
			}
			this.cachedGeneration = void 0, this.cachedHidden = [], e.forEach((e) => i.push(e.prepareView(t)));
			let c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set();
			if (n) {
				for (let t of e) if (Qo(t.object)) {
					t.object.updateWorldMatrix(!0, !0);
					for (let e of t.instancingMeshes(!0)) {
						let n = this.classify(e);
						if (!n.eligible) continue;
						let r = n.key;
						if (l.add(r), !Qo(e)) continue;
						let i = c.get(r) ?? [];
						i.push({
							actorId: t.actorId,
							source: e
						}), c.set(r, i);
					}
				}
			}
			for (let [e, t] of this.batches) t.mesh.visible = !1, l.has(e) || (t.mesh.removeFromParent(), t.mesh.dispose(), this.batches.delete(e));
			for (let [e, t] of c) {
				if (t.length < 2) continue;
				let n = t[0].source, r = this.batches.get(e);
				if (r && r.mesh.instanceMatrix.count < t.length && (r.mesh.removeFromParent(), r.mesh.dispose(), this.batches.delete(e), r = void 0), !r) {
					let i = new Lt(n.geometry, n.material, 2 ** Math.ceil(Math.log2(t.length)));
					i.instanceMatrix.setUsage(xt), i.layers.mask = n.layers.mask, i.renderOrder = n.renderOrder, i.castShadow = n.castShadow, i.receiveShadow = n.receiveShadow, r = {
						mesh: i,
						members: [],
						transforms: []
					}, this.batches.set(e, r), this.root.add(i);
				}
				r.mesh.visible = !0, r.mesh.material = n.material;
				let i = r.members.length !== t.length || r.transforms.length !== t.length;
				if (r.mesh.count = t.length, t.forEach(({ source: e }, t) => {
					let n = r.transforms[t];
					(!n || !n.equals(e.matrixWorld)) && (i = !0, r.mesh.setMatrixAt(t, e.matrixWorld)), a.push(e), e.visible = !1;
				}), i) {
					r.mesh.instanceMatrix.needsUpdate = !0;
					try {
						r.mesh.computeBoundingBox(), r.mesh.computeBoundingSphere();
					} catch (e) {
						throw r.transforms = [], e;
					}
					r.transforms.length = t.length, t.forEach(({ source: e }, t) => {
						(r.transforms[t] ??= new mt()).copy(e.matrixWorld);
					});
				}
				r.members = t;
			}
			return this.root.visible = n, this.root.updateMatrixWorld(!0), s && (this.cachedGeneration = r, this.cachedEnabled = n, this.cachedHidden = [...a]), o;
		} catch (e) {
			throw o(), e;
		}
	}
	intersect(e, t, n = !0, r) {
		if (!t.camera) throw Error("Instance picking requires the active viewport camera.");
		let i = this.prepareView(e, t.camera, n, r);
		try {
			let r = e.filter(({ object: e }) => Qo(e)).flatMap((e) => e.intersect(t));
			if (n) {
				for (let e of this.batches.values()) if (e.mesh.visible) for (let n of t.intersectObject(e.mesh, !1)) {
					let t = n.instanceId === void 0 ? void 0 : e.members[n.instanceId];
					t && $o(t.source) && r.push({
						...n,
						object: t.source,
						actorId: t.actorId
					});
				}
			}
			return r.sort((e, t) => e.distance - t.distance);
		} finally {
			i();
		}
	}
	dispose() {
		this.activeRestore?.(), this.batches.forEach(({ mesh: e }) => {
			e.removeFromParent(), e.dispose();
		}), this.batches.clear(), this.root.removeFromParent(), this.cachedGeneration = void 0, this.cachedHidden = [];
	}
	cellKey(e) {
		if (this.spatialCellMeters === 0) return "";
		let t = e.matrixWorld.elements;
		return ":" + [
			t[12],
			t[13],
			t[14]
		].map((e) => Math.floor(e / this.spatialCellMeters + .5)).join(",");
	}
	classify(e) {
		let t = e.material instanceof j ? e.material.type : "unsupported", n = e.material instanceof j && e.material.transparent, r = this.sourceCache.get(e);
		return (!r || r.geometry !== e.geometry || r.material !== e.material || r.materialType !== t || r.transparent !== n || r.materialId !== ns(e) || r.type !== e.type || r.children !== e.children.length || r.morphs !== (e.morphTargetInfluences?.length ?? 0) || r.layers !== e.layers.mask || r.order !== e.renderOrder || r.castShadow !== e.castShadow || r.receiveShadow !== e.receiveShadow || !r.matrix.equals(e.matrixWorld)) && (r = {
			matrix: e.matrixWorld.clone(),
			geometry: e.geometry,
			material: e.material,
			materialType: t,
			transparent: n,
			materialId: ns(e),
			type: e.type,
			children: e.children.length,
			morphs: e.morphTargetInfluences?.length ?? 0,
			layers: e.layers.mask,
			order: e.renderOrder,
			castShadow: e.castShadow,
			receiveShadow: e.receiveShadow,
			eligible: es(e),
			key: ts(e) + this.cellKey(e)
		}, this.sourceCache.set(e, r)), r;
	}
};
function Qo(e) {
	for (let t = e; t; t = t.parent) if (!t.visible) return !1;
	return !0;
}
function $o(e) {
	for (let t = e; t; t = t.parent) if (t.userData.editorPickable === !1) return !1;
	return !0;
}
function es(e) {
	return e.type === "Mesh" && e.children.length === 0 && typeof ns(e) == "string" && e.material instanceof j && e.material.type === "MeshStandardMaterial" && !e.material.transparent && !e.morphTargetInfluences?.length && rs(e.matrixWorld);
}
function ts(e) {
	return [
		e.geometry.uuid,
		ns(e),
		e.layers.mask,
		e.renderOrder,
		e.castShadow,
		e.receiveShadow
	].join(":");
}
function ns(e) {
	return !Array.isArray(e.material) && Ie(e.material) || e.userData.staticBatchMaterialId;
}
function rs(e) {
	if (!e.elements.every(Number.isFinite) || e.determinant() <= 0) return !1;
	let t = [
		0,
		1,
		2
	].map((t) => new N().setFromMatrixColumn(e, t).normalize());
	return Math.abs(t[0].dot(t[1])) < 1e-6 && Math.abs(t[0].dot(t[2])) < 1e-6 && Math.abs(t[1].dot(t[2])) < 1e-6;
}
//#endregion
//#region src/delivery/DeliveryDrawOrder.ts
var is = (e, t) => e.groupOrder - t.groupOrder || e.renderOrder - t.renderOrder || e.material.id - t.material.id || e.materialVariant - t.materialVariant || e.z - t.z || e.id - t.id, as = class {
	release;
	generation = -1;
	objects = /* @__PURE__ */ new WeakMap();
	keys = /* @__PURE__ */ new WeakMap();
	ranks = /* @__PURE__ */ new Map();
	bind(e, t, n) {
		if (e !== this.release && (this.release = e, this.ranks.clear(), this.generation = -1), t === this.generation) return;
		this.generation = t, this.objects = /* @__PURE__ */ new WeakMap(), this.keys = /* @__PURE__ */ new WeakMap();
		let r = (e, t) => {
			this.objects.set(e, t), e.children.forEach((e, n) => r(e, t + "/" + n));
		};
		for (let e of n()) r(e.object, e.key);
	}
	key(e) {
		let t = this.keys.get(e.object);
		t || (t = /* @__PURE__ */ new Map(), this.keys.set(e.object, t));
		let n = e.group, r = `${e.materialVariant}:${n?.start ?? 0}:${n?.materialIndex ?? 0}`, i = t.get(r);
		return i || (i = `${this.objects.get(e.object) ?? "viewer-object:" + e.id}/${r}`, t.set(r, i)), i;
	}
	compare = (e, t) => {
		let n = e.groupOrder - t.groupOrder || e.renderOrder - t.renderOrder;
		if (n || !this.ranks.size) return n || is(e, t);
		let r = this.ranks.get(this.key(e)), i = this.ranks.get(this.key(t));
		return (r !== void 0 || i !== void 0) && (r ?? 2 ** 53 - 1) - (i ?? 2 ** 53 - 1) || is(e, t);
	};
	capture(e) {
		if (this.release && !e.some((e) => "isBatchedMesh" in e.object && e.object.isBatchedMesh)) for (let t of e) {
			let e = this.key(t);
			this.ranks.has(e) || this.ranks.set(e, this.ranks.size);
		}
	}
}, os = class {
	scene;
	helpers = /* @__PURE__ */ new Map();
	constructor(e) {
		this.scene = e;
	}
	sync(e, t) {
		let n = /* @__PURE__ */ new Set();
		if (t) for (let t of e) {
			let e = !0;
			for (let n = t.object; n; n = n.parent) if (!n.visible) {
				e = !1;
				break;
			}
			if (!e) continue;
			let r = t.getBounds();
			if (r.isEmpty()) continue;
			n.add(t);
			let i = this.helpers.get(t);
			i || (i = new en(new on(), 15186772), i.layers.set(1), this.scene.add(i), this.helpers.set(t, i)), i.box.copy(r);
		}
		for (let [e, t] of this.helpers) n.has(e) || (t.removeFromParent(), t.dispose(), this.helpers.delete(e));
	}
	dispose() {
		this.sync([], !1);
	}
}, ss = class {
	canvas;
	addons = new H(this);
	session;
	renderer;
	horizontalFovDegrees = 90;
	perspective = new yn(90, 1, .01, 2e3);
	orthographic = new Dt(-10, 10, 10, -10, .01, 2e3);
	camera = this.perspective;
	projection = "perspective";
	mode = "lit";
	grid = new vt(100, 100, 5593953, 3422784);
	selection = new en(new on(), 16168528);
	quality;
	navigation;
	effects;
	environment = C.enabled;
	environmentIntensity = C.intensity;
	icons = !1;
	iconScale = 1;
	helpers = !0;
	showBounds = !1;
	get bounds() {
		return this.showBounds;
	}
	setBounds(e) {
		if (this.disposed) throw Error("Viewer disposed");
		if (typeof e != "boolean") throw Error("바운드 설정은 boolean이어야 합니다.");
		this.showBounds = e, e || this.actorBounds.dispose(), this.invalidate(), this.onViewChange?.();
	}
	batchEnabled = !1;
	drawOrder = new as();
	batching;
	batchInstances;
	unsubscribeBatching;
	get staticBatchingEnabled() {
		return this.batchEnabled;
	}
	get staticBatchingStatus() {
		return { ...this.batching.snapshot() };
	}
	setStaticBatching(e) {
		if (this.disposed) throw Error("Viewer disposed");
		if (typeof e != "boolean") throw Error("배칭 설정은 boolean이어야 합니다.");
		this.batchEnabled !== e && (this.batchEnabled = e, this.batching.invalidate(), this.invalidate(), this.onViewChange?.());
	}
	selected = null;
	wire = new At({
		color: 11581632,
		wireframe: !0
	});
	frameTime = 0;
	spatialTime = -Infinity;
	addonFrame = 0;
	releaseSelection;
	frameListeners = /* @__PURE__ */ new Set();
	disposeListeners = /* @__PURE__ */ new Set();
	subscribeFrame(e) {
		if (this.disposed) throw Error("Viewer disposed");
		return this.frameListeners.add(e), () => {
			this.frameListeners.delete(e);
		};
	}
	subscribeDispose(e) {
		if (this.disposed) throw Error("Viewer disposed");
		return this.disposeListeners.add(e), () => {
			this.disposeListeners.delete(e);
		};
	}
	scene = new yt();
	actorBounds = new os(this.scene);
	controls;
	onSelect;
	onActorSelect;
	actorListeners = /* @__PURE__ */ new Set();
	subscribeActorSelection(e) {
		return this.actorListeners.add(e), () => {
			this.actorListeners.delete(e);
		};
	}
	emitActorSelection(e) {
		for (let t of [...this.actorListeners, this.onActorSelect]) try {
			t?.(e ? structuredClone(e) : null);
		} catch {}
	}
	onEquipmentSelect;
	resize;
	disposed = !1;
	redraw = !0;
	renderedVersion = -1;
	invalidate = () => {
		this.redraw = !0;
	};
	pick;
	constructor(e, t, n) {
		this.canvas = e, this.session = new V(t, !n || n.geometry === 0 && n.texture === 0 ? void 0 : {
			...Po,
			...n
		}), this.renderer = new Cn({
			canvas: e,
			antialias: !0
		}), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2)), this.scene.background = new Ot("#25292e"), this.scene.add(this.session.root), this.renderer.shadowMap.enabled = !0, this.camera.position.set(12, 10, 12), this.controls = new ma(this.camera, e), this.controls.mouseButtons.LEFT = null, this.controls.mouseButtons.MIDDLE = _n.PAN, this.controls.mouseButtons.RIGHT = null, e.addEventListener("pointerdown", this.prepareOrbit, { capture: !0 }), this.controls.addEventListener("change", this.invalidate), this.grid.layers.set(1), this.selection.layers.set(1), this.selection.visible = !1, this.scene.add(this.grid, this.selection), this.quality = new Qi(this.renderer, this.scene, this.invalidate, () => this.onViewChange?.()), this.batchInstances = new Zo(this.scene), this.batching = new Xo(this.renderer, this.scene, this.batchInstances, this.invalidate, () => this.onViewChange?.()), this.unsubscribeBatching = this.session.subscribe(() => {
			this.batching.invalidate(), this.invalidate();
		}), this.effects = new ia(this.scene, this.renderer), this.navigation = new Gi(this), this.resize = new ResizeObserver(() => {
			let t = Math.max(1, e.clientWidth), n = Math.max(1, e.clientHeight);
			this.renderer.setSize(t, n, !1), this.resizeCamera(t / n), this.invalidate();
		}), this.resize.observe(e), this.pick = (t) => {
			if (t.button !== 0 || t.altKey || !this.pointerStart || Math.hypot(t.clientX - this.pointerStart.x, t.clientY - this.pointerStart.y) > 4) return;
			let n = e.getBoundingClientRect(), r = new Tt();
			r.setFromCamera(new Wt((t.clientX - n.left) / n.width * 2 - 1, -(t.clientY - n.top) / n.height * 2 + 1), this.camera), this.session.root.updateWorldMatrix(!0, !0);
			let i = r.intersectObject(this.session.root, !0).find((e) => {
				if (!(e.object instanceof M) || !Sn(e.object)) return !1;
				for (let t = e.object; t; t = t.parent) if (!t.visible) return !1;
				return !0;
			});
			if (!i) {
				this.selectActor(null), this.onSelect?.(null), this.onEquipmentSelect?.([]), this.emitActorSelection(null);
				return;
			}
			let a = [], o;
			for (let e of this.session.views) {
				let t = i.object;
				for (; t.parent && t !== e.root;) t = t.parent;
				if (t === e.root) {
					let t = i.object, n;
					for (; t !== e.root && (n = e.projections.find((e) => e.object === t)?.actorId, !n && t.parent);) t = t.parent;
					let r = String(e.root.userData.deliveryMountId), s = i.object, c;
					for (; s !== e.root;) {
						if (s.userData.actorId === n && typeof s.userData.componentId == "string") {
							c = s.userData.componentId;
							break;
						}
						if (!s.parent) break;
						s = s.parent;
					}
					n && c && (a = this.session.equipmentForHit(r, n, c)), o = n ? this.session.findActors(n, r)[0] : void 0, this.selectActor(n ? {
						mountId: r,
						actorId: n
					} : null), this.onSelect?.({
						mountId: r,
						actorId: n
					});
					break;
				}
			}
			if (!o) for (let e of this.session.objectViews) {
				let t = i.object;
				for (; t && t !== e.object;) t = t.parent;
				if (t) {
					o = this.session.findActors(e.actorId, null)[0], this.selectActor({
						mountId: null,
						actorId: e.actorId
					});
					break;
				}
			}
			o || this.selectActor(null), this.emitActorSelection(o ?? null), this.onEquipmentSelect?.(a);
		}, e.addEventListener("pointerup", this.pick), this.renderer.setAnimationLoop((t) => {
			if (this.disposed) return;
			let n = this.frameTime ? (t - this.frameTime) / 1e3 : 0;
			this.navigation.step(n), this.frameTime = t, this.controls.update();
			for (let e of [...this.frameListeners]) e(n);
			if (t - this.spatialTime >= 250 && (this.spatialTime = t, this.session.updateSpatialStreaming(this.camera.position.toArray(), t)), this.session.busy && !this.redraw && this.renderedVersion === this.session.version) return;
			this.redraw = !1, this.renderedVersion = this.session.version;
			for (let e of this.session.views) for (let t of e.projections) t.prepareFrame(this.addonFrame, n);
			this.addonFrame++;
			for (let e of this.session.views) for (let t of e.projections) t.setHelpersVisible?.(this.helpers), t.setIconPresentation?.(this.icons && this.helpers, this.iconScale);
			for (let e of this.session.objectViews) e.setHelpersVisible?.(this.helpers), e.setIconPresentation?.(this.icons && this.helpers, this.iconScale), e.prepareHelperView?.(this.camera);
			this.updateSelection();
			let r = this.session.views.map((e) => e.prepare(this.camera));
			try {
				let t = this.session.views.filter((e) => e.root.visible), n = [...t.flatMap((e) => [...e.projections]), ...this.session.objectViews];
				this.actorBounds.sync(n, this.showBounds), this.drawOrder.bind(this.session.release, this.session.version, () => [...t.flatMap((e) => e.projections.map((t) => ({
					key: JSON.stringify([e.root.userData.deliveryMountId, t.actorId]),
					object: t.object
				}))), ...this.session.objectViews.map((e) => ({
					key: JSON.stringify([null, e.actorId]),
					object: e.object
				}))]);
				let r = !this.effects.animated && n.every((e) => !e.viewDependentInstancing && !e.addons?.active), i = this.session.busy ? "로드 및 작업 중에는 기존 표시 사용" : this.selected ? "액터 선택 중에는 기존 표시 사용" : this.projection !== "perspective" || this.mode !== "lit" ? "단일 원근·Lit 화면에서 사용 가능" : this.quality.snapshot().requested !== Yt.VIEWPORT || this.quality.snapshot().state !== "ready" ? "Viewport 품질에서 사용 가능" : this.effects.animated || n.some((e) => e.addons?.active) ? "동적 효과·애드온 실행 중에는 기존 표시 사용" : void 0;
				this.batching.render({
					enabled: this.batchEnabled,
					reason: i,
					generation: this.session.version,
					views: t,
					projections: n,
					camera: this.camera,
					nativeFallback: !0,
					nativeSort: r ? this.drawOrder.compare : void 0,
					geometryAllowance: this.session.automaticBudget ? void 0 : () => Math.max(0, this.session.budget.geometry - this.session.usage.geometry)
				}, () => {
					this.quality.render(this.camera, e.clientWidth, e.clientHeight, this.mode === "lit", () => R(this.renderer, this.scene, this.camera, this.mode === "lit" ? null : this.wire, this.mode === "unlit"), {
						environmentLighting: this.environment,
						environmentIntensity: this.environmentIntensity
					}), r && !this.session.busy && this.mode === "lit" && this.quality.snapshot().active === Yt.VIEWPORT && this.drawOrder.capture(this.renderer.renderLists.get(this.scene, 0).opaque);
				});
			} finally {
				r.reverse().forEach((e) => e());
			}
		});
	}
	async open(e, t) {
		await this.session.open(e, t), this.fit();
	}
	async openProgressive(e, t = [], n) {
		let r = !1, i = this.session.subscribe(() => {
			!r && !this.session.placeholderBounds.isEmpty() && (this.frameBounds(this.session.placeholderBounds), r = !0), this.invalidate();
		});
		try {
			await this.session.openProgressive(e, t, n), r || this.fit();
		} finally {
			i();
		}
	}
	async openSpatial(e, t = Lo) {
		this.setSpatialStreaming(t), await this.session.openProgressive(e);
	}
	setSpatialStreaming(e) {
		this.session.updateSpatialStreaming(this.camera.position.toArray()), this.session.setSpatialStreaming(e), this.invalidate();
	}
	focusEquipment(e) {
		let t = this.session.resolveEquipment(e);
		if (!t.available || !t.positionMeters) throw Error(`Equipment not available: ${t.spatialStatus}; load and show the level first`);
		let n = this.session.views.find((e) => e.root.userData.deliveryMountId === t.mountId), r = n.projections.find((e) => e.actorId === t.actorId);
		n.root.updateWorldMatrix(!0, !0);
		let i = new on();
		if (r.object.traverse((e) => {
			e.userData.actorId === t.actorId && (t.targetComponentId === null ? e === r.object : e.userData.componentId === t.targetComponentId) && i.expandByObject(e);
		}), i.isEmpty()) throw Error("Equipment has no render bounds");
		return this.selectActor({
			mountId: t.mountId,
			actorId: t.actorId
		}), this.frameBounds(i), t;
	}
	fit() {
		let e = new on();
		this.session.root.updateWorldMatrix(!0, !0), this.session.root.traverseVisible((t) => {
			t instanceof M && Sn(t) && e.expandByObject(t);
		}), e.isEmpty() && e.union(this.session.placeholderBounds), !e.isEmpty() && this.frameBounds(e);
	}
	onViewChange;
	get cameraSettings() {
		return {
			horizontalFovDegrees: this.horizontalFovDegrees,
			orthographicWidthMeters: (this.orthographic.right - this.orthographic.left) / this.orthographic.zoom,
			nearMeters: this.camera.near,
			farMeters: this.camera.far
		};
	}
	setCameraSettings(e) {
		let t = {
			...this.cameraSettings,
			...e
		};
		if (!Object.values(t).every(Number.isFinite) || t.horizontalFovDegrees < 1 || t.horizontalFovDegrees > 179 || t.orthographicWidthMeters < .1 || t.nearMeters < .001 || t.farMeters <= t.nearMeters) throw Error("카메라 범위가 올바르지 않습니다.");
		this.horizontalFovDegrees = t.horizontalFovDegrees, this.perspective.near = this.orthographic.near = t.nearMeters, this.perspective.far = this.orthographic.far = t.farMeters;
		let n = t.orthographicWidthMeters / 2;
		this.orthographic.left = -n, this.orthographic.right = n, this.orthographic.zoom = 1, this.resizeCamera(Math.max(1, this.canvas.clientWidth) / Math.max(1, this.canvas.clientHeight)), this.invalidate(), this.onViewChange?.();
	}
	pointerStart = null;
	prepareOrbit = (e) => {
		this.pointerStart = {
			x: e.clientX,
			y: e.clientY
		}, this.controls.mouseButtons.LEFT = e.altKey ? _n.ROTATE : null;
	};
	resizeCamera(e) {
		this.perspective.aspect = e, this.perspective.fov = z(this.horizontalFovDegrees, e), this.perspective.updateProjectionMatrix();
		let t = (this.orthographic.right - this.orthographic.left) / 2;
		this.orthographic.top = t / e, this.orthographic.bottom = -t / e, this.orthographic.updateProjectionMatrix();
	}
	setProjection(e) {
		if (this.projection === e) return;
		this.navigation.stop();
		let t = this.controls.target.clone(), n = Math.max(2, this.camera.position.distanceTo(t));
		if (this.projection = e, e === "perspective") this.camera = this.perspective, this.camera.up.set(0, 1, 0);
		else {
			this.camera = this.orthographic;
			let r = {
				top: [
					0,
					1,
					0
				],
				bottom: [
					0,
					-1,
					0
				],
				front: [
					0,
					0,
					1
				],
				back: [
					0,
					0,
					-1
				],
				left: [
					-1,
					0,
					0
				],
				right: [
					1,
					0,
					0
				]
			}[e];
			this.camera.position.copy(t).add(new N(...r).multiplyScalar(n)), this.camera.up.set(0, e === "top" || e === "bottom" ? 0 : 1, e === "top" ? -1 : +(e === "bottom")), this.orthographic.left = -n / 2, this.orthographic.right = n / 2, this.orthographic.zoom = 1;
		}
		this.controls.object = this.camera, this.controls.enableRotate = e === "perspective", this.camera.lookAt(t), this.resizeCamera(Math.max(1, this.canvas.clientWidth) / Math.max(1, this.canvas.clientHeight)), this.controls.update(), this.invalidate(), this.onViewChange?.();
	}
	setMode(e) {
		this.mode = e, this.invalidate(), this.onViewChange?.();
	}
	setScreenEffects(e) {
		this.effects.configure({
			...m,
			...e
		}), this.invalidate();
	}
	selectActor(e) {
		let t = e ? this.session.findActors(e.actorId, e.mountId)[0] : void 0, n = t && this.session.resolveActor(t).loaded ? this.session.retainActor(t) : void 0;
		this.releaseSelection?.(), this.releaseSelection = n, this.selected = e, this.updateSelection(), this.invalidate();
	}
	selectedObject() {
		return this.selected?.mountId === null ? this.session.objectViews.find((e) => e.actorId === this.selected?.actorId)?.object : this.session.views.filter((e) => e.root.userData.deliveryMountId === this.selected?.mountId).flatMap((e) => e.projections).find((e) => e.actorId === this.selected?.actorId)?.object;
	}
	updateSelection() {
		let e = this.selectedObject(), t = !!e;
		for (let n = e; n; n = n.parent ?? void 0) n.visible || (t = !1);
		this.selection.visible = t && this.helpers, e && t && (e.updateWorldMatrix(!0, !0), this.selection.box.setFromObject(e));
	}
	selectEquipment(e) {
		let t = this.session.resolveEquipment(e);
		this.selectActor({
			mountId: t.mountId,
			actorId: t.actorId
		});
	}
	selectActorTarget(e) {
		let t = this.session.resolveActor(e);
		return this.selectActor(t), t;
	}
	focusActor(e) {
		let t = this.session.resolveActor(e);
		if (!t.focusable || !t.positionMeters) throw Error("Actor is not available for focus; load and show its level first");
		this.selectActor(t);
		let n = this.selectedObject();
		n.updateWorldMatrix(!0, !0);
		let r = new on();
		return n.traverseVisible((e) => {
			e instanceof M && Sn(e) && r.expandByObject(e);
		}), r.isEmpty() && r.setFromCenterAndSize(new N(...t.positionMeters), new N(1, 1, 1)), this.frameBounds(r), t;
	}
	focusSelection() {
		if (!this.selected) return;
		let e = this.session.findActors(this.selected.actorId, this.selected.mountId)[0];
		e && this.session.resolveActor(e).focusable && this.focusActor(e);
	}
	frameBounds(e) {
		if (e.isEmpty()) return;
		let t = e.getCenter(new N()), n = Math.max(.1, e.getSize(new N()).length()), r = this.projection === "perspective" ? new N(1, .7, 1).normalize() : this.camera.getWorldDirection(new N()).negate();
		if (this.controls.target.copy(t), this.camera.position.copy(t).add(r.multiplyScalar(Math.max(2, n * 1.3))), this.camera instanceof Dt) {
			let e = n * 1.3;
			this.camera.left = -e / 2, this.camera.right = e / 2, this.camera.zoom = 1;
		}
		this.camera.far = Math.max(1e3, n * 20), this.resizeCamera(Math.max(1, this.canvas.clientWidth) / Math.max(1, this.canvas.clientHeight)), this.controls.update(), this.invalidate();
	}
	async dispose() {
		if (this.disposed) return;
		this.disposed = !0, this.actorBounds.dispose(), this.unsubscribeBatching(), this.batching.dispose(), this.batchInstances.dispose();
		let e = this.addons.dispose();
		this.releaseSelection?.(), this.releaseSelection = void 0;
		for (let e of [...this.disposeListeners]) e();
		this.disposeListeners.clear(), this.frameListeners.clear(), this.actorListeners.clear(), this.onActorSelect = void 0, this.onSelect = void 0, this.onEquipmentSelect = void 0, this.renderer.setAnimationLoop(null), this.resize.disconnect(), this.canvas.removeEventListener("pointerup", this.pick), this.canvas.removeEventListener("pointerdown", this.prepareOrbit, { capture: !0 }), this.navigation.dispose(), this.quality.dispose(), this.effects.dispose(), this.grid.geometry.dispose(), this.grid.material.dispose(), this.selection.geometry.dispose(), (Array.isArray(this.selection.material) ? this.selection.material : [this.selection.material]).forEach((e) => e.dispose()), this.wire.dispose(), this.controls.removeEventListener("change", this.invalidate), this.controls.dispose(), await this.session.dispose(), this.renderer.dispose(), await e;
	}
}, cs = class extends Error {
	code;
	constructor(e) {
		super(`Publication: ${e}`), this.code = e;
	}
};
function ls(e) {
	if (typeof e != "string" || !/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/.test(e) || [
		"objects",
		"releases",
		"equipment",
		"deltas"
	].includes(e)) throw new cs("invalid");
}
//#endregion
//#region src/delivery/PublicationConnection.ts
var us = 65536;
function ds(e) {
	if (!e || typeof e != "object" || !["url,version", "modelIds,url,version"].includes(Object.keys(e).sort().join())) throw Error("잘못된 SDK 기본 연결 설정입니다.");
	let t = e;
	if (t.version !== 1 || t.url !== null && (typeof t.url != "string" || t.url.length > 2048)) throw Error("잘못된 SDK 기본 연결 설정입니다.");
	if (t.url !== null) {
		let e = hs(new URL(t.url));
		if (e.publication.compositionId) throw Error("SDK 기본 연결은 모델 목록 주소여야 합니다.");
		if (t.modelIds !== void 0) return {
			version: 1,
			url: t.url,
			modelIds: fs({
				version: 1,
				scope: e.publication.scope,
				modelIds: t.modelIds
			}, e.publication.scope).modelIds
		};
	} else if (t.modelIds !== void 0) throw Error("잘못된 SDK 기본 연결 설정입니다.");
	return {
		version: 1,
		url: t.url
	};
}
function fs(e, t) {
	if (ls(t), !e || typeof e != "object") throw Error("잘못된 SDK 모델 목록입니다.");
	let n = e;
	if (Object.keys(n).sort().join() !== "modelIds,scope,version" || n.version !== 1 || n.scope !== t || !Array.isArray(n.modelIds) || n.modelIds.length > 256) throw Error("잘못된 SDK 모델 목록입니다.");
	let r = /* @__PURE__ */ new Set();
	for (let e of n.modelIds) {
		if (ls(e), r.has(e)) throw Error("SDK 모델 목록에 중복 ID가 있습니다.");
		r.add(e);
	}
	return {
		version: 1,
		scope: t,
		modelIds: [...r].sort()
	};
}
function ps(e) {
	return ls(e), `levels/${e}/delivery-models.json`;
}
function ms(e, t) {
	return Di(e), new URL(ps(t), e);
}
function hs(e) {
	let t = new URL(e);
	if (!["http:", "https:"].includes(t.protocol) || t.username || t.password || t.search || t.hash) throw Error("잘못된 SDK 연결 주소입니다.");
	let n = /^(.*\/)levels\/([^/]+)\/delivery-models\.json$/.exec(t.pathname), r = /^(.*\/)levels\/([^/]+)\/([^/]+)\/delivery-head\.json$/.exec(t.pathname), i = n ?? r;
	if (!i) throw Error("SDK 연결 주소 또는 게시본 주소를 확인하세요.");
	let a = i[2];
	ls(a);
	let o = r?.[3];
	return o !== void 0 && ls(o), t.pathname = i[1], Di(t), {
		base: t,
		publication: {
			scope: a,
			...o === void 0 ? {} : { compositionId: o }
		}
	};
}
var gs = {
	version: 1,
	url: "http://220.93.169.225:9041/twin-assets/test-upload/levels/development/delivery-models.json",
	modelIds: ["17a6033c-1cdf-47f0-beee-e5cd7c027926"]
};
//#endregion
//#region src/delivery/DeliverySource.ts
function _s(e = gs) {
	let t = ds(e);
	if (!t.url) throw Error("이 SDK 배포본에 기본 저장소가 설정되지 않았습니다.");
	return new Ds(new URL(t.url), void 0, t.modelIds);
}
var vs = /^(objects\/[a-f0-9]{64}|releases\/[a-f0-9]{64}\.json)$/, ys = 256;
function bs(e) {
	return e instanceof Error && e.name === "NotFoundError";
}
async function xs(e, t, n) {
	n.throwIfAborted();
	let r = await e.getFile();
	if (n.throwIfAborted(), !Number.isSafeInteger(t) || t < 0 || r.size > t) throw Error("청크 파일 크기 제한을 초과했습니다.");
	let i = new Uint8Array(await r.arrayBuffer());
	if (n.throwIfAborted(), i.length > t) throw Error("청크 파일 크기 제한을 초과했습니다.");
	return i;
}
function Ss(e) {
	if (e.length > ys) throw Error("잘못된 게시본 head입니다.");
	let t = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(e));
	if (!t || typeof t != "object" || Object.keys(t).join() !== "hash" || !Xn(t.hash)) throw Error("잘못된 게시본 head입니다.");
	return t.hash;
}
async function Cs(e, t) {
	try {
		return Ss(await xs(await e.getFileHandle("delivery-head.json"), ys, t));
	} catch (e) {
		if (bs(e)) return null;
		throw e;
	}
}
function ws(e, t) {
	return {
		authorize: t,
		async read(n, r, i) {
			if (!vs.test(n)) throw Error("허용되지 않은 청크 경로입니다.");
			i.throwIfAborted(), await t?.(i);
			let a = n.indexOf("/"), o = n.slice(0, a), s = n.slice(a + 1);
			return xs(await (await e.getDirectoryHandle(o)).getFileHandle(s), r, i);
		}
	};
}
async function Ts(e, t, n, r) {
	let i = await new Oi(t).manifest(e, n);
	if (r !== void 0 && i.id !== r) throw Error("게시 경로와 통합레벨 ID가 다릅니다.");
	return {
		model: Object.freeze({
			id: i.id,
			name: i.name,
			releaseHash: e
		}),
		provider: t
	};
}
var Es = class {
	directory;
	scope;
	constructor(e, t = {}) {
		if (this.directory = e, !e || e.kind !== "directory") throw Error("청크 폴더를 선택하세요.");
		this.scope = t.scope ?? "development", ls(this.scope);
	}
	authorize = async (e) => {
		if (e.throwIfAborted(), this.directory.queryPermission && await this.directory.queryPermission({ mode: "read" }) !== "granted") throw Error("청크 폴더 읽기 권한이 필요합니다. 폴더를 다시 선택하세요.");
		e.throwIfAborted();
	};
	async plain(e) {
		await this.authorize(e);
		let t = await Cs(this.directory, e);
		return t ? Ts(t, ws(this.directory, this.authorize), e) : null;
	}
	async publication() {
		let e;
		try {
			e = await this.directory.getDirectoryHandle("levels");
		} catch (t) {
			if (!bs(t)) throw t;
			e = this.directory;
		}
		return {
			shared: e,
			scope: await e.getDirectoryHandle(this.scope)
		};
	}
	async listModels(e = new AbortController().signal) {
		let t = await this.plain(e);
		if (t) return [t.model];
		let { shared: n, scope: r } = await this.publication();
		if (!r.values) throw Error("이 호스트는 청크 폴더 목록 조회를 지원하지 않습니다.");
		let i = [];
		for await (let t of r.values()) {
			if (e.throwIfAborted(), t.kind !== "directory" || t.name === ".dtwe-connection-check") continue;
			ls(t.name);
			let a = await Cs(await r.getDirectoryHandle(t.name), e);
			if (a) {
				if (i.length >= 256) throw Error("게시 구역의 모델 수가 SDK 목록 제한을 초과했습니다.");
				i.push((await Ts(a, ws(n, this.authorize), e, t.name)).model);
			}
		}
		return i.sort((e, t) => e.id.localeCompare(t.id));
	}
	async resolve(e, t = new AbortController().signal) {
		ls(e);
		let n = await this.plain(t);
		if (n) {
			if (n.model.id !== e) throw Error("이 청크 폴더에 해당 통합레벨이 없습니다.");
			return n;
		}
		let { shared: r, scope: i } = await this.publication(), a = await Cs(await i.getDirectoryHandle(e), t);
		if (!a) throw Error("아직 게시 완료된 head가 없습니다.");
		return Ts(a, ws(r, this.authorize), t, e);
	}
	async latestRelease(e, t = new AbortController().signal) {
		ls(e), await this.authorize(t);
		let n = await Cs(this.directory, t);
		if (n) return n;
		let { scope: r } = await this.publication(), i = await Cs(await r.getDirectoryHandle(e), t);
		if (!i) throw Error("아직 게시 완료된 head가 없습니다.");
		return i;
	}
}, Ds = class {
	base;
	publication;
	provider;
	knownModelIds;
	constructor(e, t, n = []) {
		if (!t && /\/(delivery-models|delivery-head)\.json$/.test(e.pathname) && ({base: e, publication: t} = hs(e)), this.base = new URL(e), Di(this.base), t) {
			if (!["scope", "compositionId,scope"].includes(Object.keys(t).sort().join())) throw Error("원격 게시 구역과 통합레벨 ID를 확인하세요.");
			ls(t.scope), t.compositionId !== void 0 && ls(t.compositionId), this.publication = Object.freeze({ ...t }), this.provider = Di(new URL("levels/", this.base));
		} else this.provider = Di(this.base);
		if (n.length && (!this.publication || this.publication.compositionId)) throw Error("기본 모델 목록에는 게시 구역 연결이 필요합니다.");
		this.knownModelIds = this.publication ? fs({
			version: 1,
			scope: this.publication.scope,
			modelIds: n
		}, this.publication.scope).modelIds : [];
	}
	get connectionUrl() {
		return this.publication ? this.publication.compositionId ? new URL(`levels/${this.publication.scope}/${this.publication.compositionId}/delivery-head.json`, this.base) : ms(this.base, this.publication.scope) : this.base;
	}
	async read(e, t, n) {
		let r = await fetch(e, {
			signal: AbortSignal.any([n, AbortSignal.timeout(3e4)]),
			redirect: "error",
			cache: "no-store",
			credentials: "omit"
		});
		if (!r.ok || !r.body) throw await r.body?.cancel(), Object.assign(/* @__PURE__ */ Error(`게시본 head 읽기 실패: ${r.status}`), { status: r.status });
		let i = r.body.getReader(), a = new Uint8Array(t), o = 0;
		try {
			for (;;) {
				n.throwIfAborted();
				let { done: e, value: r } = await i.read();
				if (e) break;
				if (o + r.length > t) throw Error("게시본 head/모델 목록 크기 제한을 초과했습니다.");
				a.set(r, o), o += r.length;
			}
			return n.throwIfAborted(), a.subarray(0, o);
		} finally {
			await i.cancel().catch(() => {}), i.releaseLock();
		}
	}
	async current(e, t = this.publication?.compositionId) {
		return Ts(t ? await this.latestRelease(t, e) : Ss(await this.read(new URL("delivery-head.json", this.base), ys, e)), this.provider, e, t);
	}
	async latestRelease(e, t = new AbortController().signal) {
		if (ls(e), this.publication?.compositionId && e !== this.publication.compositionId) throw Error("정적 청크 주소의 통합레벨 ID가 다릅니다.");
		let n = this.publication ? `levels/${this.publication.scope}/${e}/delivery-head.json` : "delivery-head.json";
		return Ss(await this.read(new URL(n, this.base), ys, t));
	}
	async listModelIds(e = new AbortController().signal) {
		if (!this.publication || this.publication.compositionId) throw Error("게시 구역 모델 목록 연결이 필요합니다.");
		let t;
		try {
			t = await this.read(this.connectionUrl, us, e);
		} catch (t) {
			if (e.aborted) throw t;
			if (t instanceof Error && "status" in t && t.status === 404) return [...this.knownModelIds];
			throw Error("SDK 모델 목록을 읽지 못했습니다. 주소·읽기 권한·CORS를 확인하세요.", { cause: t });
		}
		let n = fs(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(t)), this.publication.scope).modelIds;
		return fs({
			version: 1,
			scope: this.publication.scope,
			modelIds: [.../* @__PURE__ */ new Set([...n, ...this.knownModelIds])]
		}, this.publication.scope).modelIds;
	}
	async listModels(e = new AbortController().signal) {
		if (!this.publication || this.publication.compositionId) return [(await this.current(e)).model];
		let t = await this.listModelIds(e), n = [];
		for (let r = 0; r < t.length; r += 4) {
			let i = await Promise.all(t.slice(r, r + 4).map(async (t) => {
				try {
					return (await this.current(e, t)).model;
				} catch (e) {
					if (this.knownModelIds.includes(t) && e instanceof Error && "status" in e && e.status === 404) return null;
					throw e;
				}
			}));
			n.push(...i.filter((e) => e !== null));
		}
		return n;
	}
	async resolve(e, t = new AbortController().signal) {
		ls(e);
		let n = await this.current(t, this.publication ? e : void 0);
		if (n.model.id !== e) throw Error("정적 청크 주소의 통합레벨 ID가 다릅니다.");
		return n;
	}
}, Os = class {
	owner;
	target;
	generation;
	observedRevision;
	codeHash;
	constructor(e, t, n) {
		this.owner = e, this.target = t, this.generation = n;
		let r = e.snapshot(t, n);
		this.observedRevision = r.revision, this.codeHash = r.reference.codeHash;
	}
	current() {
		let e = this.owner.snapshot(this.target, this.generation);
		if (e.reference.codeHash !== this.codeHash) throw Error("스크립트 코드 버전이 변경되었습니다. 핸들을 다시 얻으세요.");
		return e;
	}
	snapshot() {
		let e = this.current();
		return this.observedRevision = e.revision, e;
	}
	get schema() {
		return this.current().schema;
	}
	getProperties() {
		return this.snapshot().values;
	}
	async setProperties(e, t = {}) {
		let n = this.current();
		await this.owner.change({
			target: this.target,
			values: e,
			expectedRevision: t.expectedRevision ?? this.observedRevision
		}, this.generation);
		let r = this.current();
		if (r.reference.codeHash !== n.reference.codeHash) throw Error("스크립트 코드 버전이 변경되었습니다.");
		return this.observedRevision = r.revision, r;
	}
	subscribe(e) {
		let t = "", n = () => {
			let n;
			try {
				n = this.current();
			} catch {
				return;
			}
			let r = JSON.stringify(n);
			if (r !== t) {
				t = r, this.observedRevision = n.revision;
				try {
					e(n.values, n);
				} catch {}
			}
		}, r = this.owner.subscribe(n);
		return n(), r;
	}
}, ks = class {
	options;
	viewport;
	scripts = {
		list: () => this.scriptList(),
		get: (e) => (this.live(), new Os({
			snapshot: (e, t) => this.scriptSnapshot(e, t),
			change: (e, t) => this.applyAddonProperties(e, t),
			subscribe: (e) => this.subscribeScripts(e)
		}, Object.freeze({ ...e }), this.generation)),
		subscribe: (e) => this.subscribeScripts(() => e(this.scriptList()))
	};
	cache;
	source;
	stats = {
		downloaded: 0,
		requests: 0,
		cacheHits: 0
	};
	updateInterval;
	update;
	watchEpoch = 0;
	watchTimer;
	watchRequest;
	binding;
	generation = 0;
	operation;
	listings = /* @__PURE__ */ new Set();
	disposed = !1;
	status = "idle";
	progressListeners = /* @__PURE__ */ new Set();
	actorListeners = /* @__PURE__ */ new Set();
	scriptListeners = /* @__PURE__ */ new Set();
	selected = null;
	cleanup;
	constructor(e) {
		this.options = e, this.source = e.source ?? _s();
		let t = typeof e.autoUpdate == "object" ? e.autoUpdate.intervalMs ?? 5e3 : 5e3;
		if (!Number.isSafeInteger(t) || t < 1e3 || t > 3e5) throw Error("자동 갱신 간격은 1000~300000ms여야 합니다.");
		this.updateInterval = t, this.update = { state: e.autoUpdate === !1 ? "disabled" : "stopped" }, this.cache = e.cache ?? new Ei(), this.viewport = new ss(e.canvas, this.createReader({ read: async () => {
			throw Error("먼저 게시본을 여세요.");
		} }), e.budget), e.onProgress && this.progressListeners.add(e.onProgress), e.onActorSelect && this.actorListeners.add(e.onActorSelect), this.cleanup = [
			this.viewport.session.subscribe(() => {
				this.emitProgress(), this.emitScripts();
			}),
			this.viewport.subscribeActorSelection((e) => this.emitActor(e)),
			this.viewport.addons.subscribe(() => this.emitScripts())
		];
	}
	createReader(e) {
		let t = new Oi(e, this.cache), n = {
			downloaded: 0,
			requests: 0,
			cacheHits: 0
		};
		return t.onProgress = (e) => {
			if (!this.disposed) {
				for (let t of [
					"downloaded",
					"requests",
					"cacheHits"
				]) this.stats[t] += e[t] - n[t], n[t] = e[t];
				this.emitProgress();
			}
		}, t;
	}
	live() {
		if (this.disposed) throw Error("SDK 연결이 종료되었습니다.");
	}
	get model() {
		return this.binding ? structuredClone(this.binding.model) : null;
	}
	get progress() {
		let e = this.viewport.session.loadStates, t = e.filter((e) => e.status !== "unloaded");
		return {
			status: this.status,
			model: this.model,
			downloadedBytes: this.stats.downloaded,
			requests: this.stats.requests,
			cacheHits: this.stats.cacheHits,
			readyCells: t.filter((e) => e.status === "ready").length,
			totalCells: t.length,
			cells: structuredClone(e),
			update: { ...this.update }
		};
	}
	emitProgress() {
		if (!this.disposed) for (let e of this.progressListeners) try {
			e(this.progress);
		} catch {}
	}
	emitActor(e) {
		this.selected = e ? structuredClone(e) : null;
		for (let t of this.actorListeners) try {
			t(e ? structuredClone(e) : null);
		} catch {}
	}
	emitScripts() {
		for (let e of this.scriptListeners) try {
			e();
		} catch {}
	}
	subscribeProgress(e) {
		return this.live(), this.progressListeners.add(e), () => {
			this.progressListeners.delete(e);
		};
	}
	subscribeActorSelection(e) {
		return this.live(), this.actorListeners.add(e), () => {
			this.actorListeners.delete(e);
		};
	}
	subscribeScripts(e) {
		return this.live(), this.scriptListeners.add(e), () => {
			this.scriptListeners.delete(e);
		};
	}
	async listModels(e) {
		this.live();
		let t = new AbortController();
		this.listings.add(t);
		let n = e ? AbortSignal.any([e, t.signal]) : t.signal;
		try {
			let e = await this.source.listModels(n);
			if (n.throwIfAborted(), this.live(), !Array.isArray(e) || e.length > 256) throw Error("잘못된 모델 목록입니다.");
			let t = /* @__PURE__ */ new Set();
			for (let n of e) {
				if (ls(n.id), t.has(n.id) || !Xn(n.releaseHash) || typeof n.name != "string" || !n.name.trim() || n.name.length > 256) throw Error("잘못된 모델 목록입니다.");
				t.add(n.id);
			}
			return e.map((e) => ({
				id: e.id,
				name: e.name,
				releaseHash: e.releaseHash
			}));
		} finally {
			this.listings.delete(t);
		}
	}
	async open(e, t = {}) {
		this.live(), ls(e), this.cancel();
		let n = ++this.generation, r = new AbortController();
		this.operation = r;
		let i = t.signal ? AbortSignal.any([r.signal, t.signal]) : r.signal, a = () => {
			n === this.generation && this.viewport.session.cancel();
		};
		i.addEventListener("abort", a, { once: !0 });
		let o = this.binding;
		this.status = "loading", this.emitProgress();
		try {
			let r = await this.source.resolve(e, i);
			if (i.throwIfAborted(), this.live(), n !== this.generation) throw Error("더 새로운 게시본 열기 요청이 있습니다.");
			if (r.model.id !== e || !Xn(r.model.releaseHash)) throw Error("잘못된 저장소 게시본입니다.");
			let a = this.createReader(r.provider), o = await a.manifest(r.model.releaseHash, i);
			if (o.id !== e || o.name !== r.model.name) throw Error("저장소 모델 정보가 manifest와 다릅니다.");
			if (i.throwIfAborted(), n !== this.generation) throw Error("더 새로운 게시본 열기 요청이 있습니다.");
			return t.progressive === !1 ? await this.viewport.open(r.model.releaseHash, a) : await this.viewport.openProgressive(r.model.releaseHash, t.priority, a), await this.ready(i), i.throwIfAborted(), n === this.generation && (this.binding = {
				model: Object.freeze({ ...r.model }),
				provider: r.provider
			}, this.emitActor(null), this.status = "ready", this.startWatching(), this.emitProgress()), this.model;
		} catch (e) {
			throw n === this.generation && !this.disposed && (this.viewport.session.release !== this.binding?.model.releaseHash && (this.binding = o), this.status = i.aborted ? "cancelled" : "failed", this.emitProgress()), e;
		} finally {
			i.removeEventListener("abort", a), this.operation === r && (this.operation = void 0);
		}
	}
	ready(e) {
		return new Promise((t, n) => {
			let r = () => {}, i = (i) => {
				r(), e.removeEventListener("abort", a), i ? n(i) : t();
			}, a = () => i(e.reason ?? /* @__PURE__ */ Error("게시본 로드가 취소되었습니다.")), o = () => {
				if (e.aborted) {
					a();
					return;
				}
				let t = this.viewport.session.loadStates, n = t.find((e) => e.status === "failed" || e.status === "cancelled");
				n ? i(Error(n.message ?? "청크 화면 준비에 실패했습니다.")) : !this.viewport.session.busy && t.every((e) => e.status === "ready" || e.status === "unloaded") && i();
			};
			r = this.viewport.session.subscribe(o), e.addEventListener("abort", a, { once: !0 }), o();
		});
	}
	stopWatching() {
		this.watchEpoch++, clearTimeout(this.watchTimer), this.watchTimer = void 0, this.watchRequest?.abort(/* @__PURE__ */ Error("자동 갱신이 중단되었습니다.")), this.watchRequest = void 0, this.update = { state: this.options.autoUpdate === !1 ? "disabled" : "stopped" };
	}
	startWatching() {
		if (this.options.autoUpdate === !1) return;
		let e = this.watchEpoch;
		this.update = { state: "watching" }, this.scheduleCheck(e, this.updateInterval, 0);
	}
	scheduleCheck(e, t, n) {
		e !== this.watchEpoch || this.disposed || (this.watchTimer = setTimeout(() => {
			this.watchTimer = void 0, this.checkUpdate(e, n);
		}, t));
	}
	async checkUpdate(e, t) {
		if (e !== this.watchEpoch || this.disposed || !this.binding) return;
		if (this.viewport.session.busy || this.viewport.session.textureApplying) {
			this.scheduleCheck(e, this.updateInterval, t);
			return;
		}
		let n = this.binding, r = new AbortController();
		this.watchRequest = r;
		let i = AbortSignal.any([r.signal, AbortSignal.timeout(3e5)]), a = () => {
			if (i.throwIfAborted(), this.live(), e !== this.watchEpoch) throw Error("이전 자동 갱신 요청입니다.");
		}, o = () => {
			e === this.watchEpoch && this.viewport.session.cancel();
		}, s = !1, c = !1;
		try {
			this.update = { state: "checking" }, this.emitProgress(), a();
			let e = this.source, t, r = e.latestRelease ? await e.latestRelease(n.model.id, i) : (t = await e.resolve(n.model.id, i)).model.releaseHash;
			if (a(), !Xn(r)) throw Error("잘못된 게시본 head입니다.");
			if (t && t.model.id !== n.model.id) throw Error("잘못된 저장소 게시본입니다.");
			if (r !== n.model.releaseHash) {
				if (t ??= await e.resolve(n.model.id, i), a(), t.model.id !== n.model.id || !Xn(t.model.releaseHash)) throw Error("잘못된 저장소 게시본입니다.");
				if (t.model.releaseHash !== n.model.releaseHash) {
					this.update = {
						state: "updating",
						targetHash: t.model.releaseHash
					}, this.emitProgress();
					let e = this.createReader(t.provider), r = await e.manifest(t.model.releaseHash, i);
					if (a(), r.id !== n.model.id || r.name !== t.model.name) throw Error("저장소 모델 정보가 manifest와 다릅니다.");
					i.addEventListener("abort", o, { once: !0 }), s = !0, await this.viewport.session.openProgressive(t.model.releaseHash, [], e), a(), this.binding = {
						model: Object.freeze({ ...t.model }),
						provider: t.provider
					}, this.generation++;
					let c = this.selected;
					if (c) try {
						this.selectActor(c);
					} catch {
						this.selectActor(null);
					}
					this.emitScripts();
				}
			}
			a(), this.update = { state: "watching" };
		} catch {
			c = !0, e === this.watchEpoch && !this.disposed && (this.update = { state: "retrying" });
		} finally {
			if (s && i.removeEventListener("abort", o), this.watchRequest === r && (this.watchRequest = void 0), e === this.watchEpoch && !this.disposed) {
				this.emitProgress();
				let n = c ? Math.min(t + 1, 6) : 0;
				this.scheduleCheck(e, c ? Math.min(this.updateInterval * 2 ** n, Math.max(this.updateInterval, 6e4)) : this.updateInterval, n);
			}
		}
	}
	cancel() {
		this.live(), this.stopWatching(), this.operation?.abort(/* @__PURE__ */ Error("게시본 로드가 취소되었습니다.")), this.viewport.session.cancel(), this.emitProgress();
	}
	actors(e = "") {
		this.live();
		let t = e.trim().toLocaleLowerCase();
		return (this.viewport.session.actors?.actors ?? []).filter((e) => !t || e.actorName.toLocaleLowerCase().includes(t)).map((e) => this.viewport.session.resolveActor(e));
	}
	selectActor(e) {
		if (this.live(), e === null) return this.viewport.selectActor(null), this.emitActor(null), null;
		let t = this.viewport.session.findActors(e.actorId, e.mountId)[0];
		if (!t || !this.viewport.session.resolveActor(t).available) throw Error("선택할 액터가 아직 준비되지 않았습니다.");
		let n = this.viewport.selectActorTarget(t);
		return this.emitActor(n), structuredClone(n);
	}
	get selectedActor() {
		return this.selected ? structuredClone(this.selected) : null;
	}
	focusActor(e) {
		this.live();
		let t = this.viewport.session.findActors(e.actorId, e.mountId)[0];
		if (!t) throw Error("대상 액터가 없습니다.");
		let n = this.viewport.focusActor(t);
		return this.emitActor(n), structuredClone(n);
	}
	setViewMode(e) {
		if (this.live(), ![
			"lit",
			"unlit",
			"wireframe"
		].includes(e)) throw Error("잘못된 표시 모드입니다.");
		this.viewport.setMode(e);
	}
	setProjection(e) {
		if (this.live(), ![
			"perspective",
			"top",
			"bottom",
			"front",
			"back",
			"left",
			"right"
		].includes(e)) throw Error("잘못된 카메라 방향입니다.");
		this.viewport.setProjection(e);
	}
	setStaticBatching(e) {
		this.live(), this.viewport.setStaticBatching(e);
	}
	scriptList() {
		return this.live(), this.viewport.addons.list().map((e) => ({
			...structuredClone(e),
			releaseHash: this.viewport.session.release ?? ""
		}));
	}
	scriptSnapshot(e, t) {
		if (this.live(), t !== this.generation) throw Error("다른 열기 세션의 스크립트 핸들입니다. 핸들을 다시 얻으세요.");
		let n = this.viewport.session.document, r = this.viewport.session.release;
		if (!n || !r) throw Error("먼저 게시본을 여세요.");
		let i = {
			...e,
			compositionId: n.id
		};
		dt(i);
		let a = this.viewport.addons.list().find((e) => A(e.target) === A(i));
		if (!a || a.state !== "running") throw Error("대상 스크립트 컴포넌트가 아직 실행 준비되지 않았습니다.");
		return {
			...structuredClone(a),
			releaseHash: r
		};
	}
	changeAddonProperties(e) {
		return this.applyAddonProperties(e, this.generation);
	}
	async applyAddonProperties(e, t) {
		let n = this.scriptSnapshot(e.target, t);
		if (await this.viewport.addons.changeBatch([{
			target: {
				...e.target,
				compositionId: this.viewport.session.document.id
			},
			values: e.values,
			expectedRevision: e.expectedRevision
		}], "runtime"), n.releaseHash !== this.viewport.session.release || t !== this.generation) throw Error("속성 변경 중 열기 세션이 변경되었습니다.");
		return this.scriptSnapshot(e.target, t);
	}
	async dispose() {
		this.disposed || (this.stopWatching(), this.operation?.abort(/* @__PURE__ */ Error("SDK 연결이 종료되었습니다.")), this.listings.forEach((e) => e.abort()), this.disposed = !0, this.generation++, this.status = "disposed", this.cleanup.forEach((e) => e()), this.progressListeners.clear(), this.actorListeners.clear(), this.scriptListeners.clear(), await this.viewport.dispose(), this.binding = void 0, this.selected = null);
	}
};
//#endregion
//#region src/delivery/ActorReview.ts
function As(e, t) {
	let n = /* @__PURE__ */ new Map(), r = (e) => {
		let i = t.assets.find((t) => t.id === e.assetId);
		if (!i) throw Error("Missing actor asset");
		let a = e.revisionPolicy === "pinned" ? e.revisionId : e.revisionId ?? i.currentRevisionId;
		if (!a || n.has(i.id) && n.get(i.id) !== a) throw Error("Conflicting actor asset revisions");
		if (!n.has(i.id)) {
			if (n.set(i.id, a), !t.revisions.some((e) => e.id === a && e.assetId === i.id)) throw Error("Missing actor asset revision");
			for (let e of i.dependencies) r(e);
		}
	};
	for (let t of e.components) {
		let e = [];
		t.type === "StaticMesh" && e.push(t.meshAsset, ...t.materialOverrides.map((e) => e.materialAsset)), t.type === "SkeletalMesh" && e.push(t.meshAsset, t.skinBinding.skeletonAsset, t.playback.clipAsset, ...t.materialOverrides.map((e) => e.materialAsset));
		for (let t of e) t && r(t);
	}
	return [...n].sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => ({
		asset: t.assets.find((t) => t.id === e),
		revision: t.revisions.find((t) => t.assetId === e && t.id === n)
	}));
}
async function js(e, t, n = new AbortController().signal) {
	let r = await e.manifest(t, n), i = await e.actors(t, n, r), a = /* @__PURE__ */ new Map(), o = new Map(r.files.map((e) => [e.hash, e]));
	for (let t of r.levels) a.set(t.hash, Ti(JSON.parse(new TextDecoder().decode(await e.file(o.get(t.hash), n))), t, o));
	let s = [];
	for (let e of i.actors) {
		let t = e.levelHash ? a.get(e.levelHash) : null, n = structuredClone(t ? t.envelope.payload.actors.find((t) => t.id === e.actorId) : it(r.objects.find((t) => t.id === e.actorId))), i = As(n, t?.assets ?? {
			assets: [],
			revisions: [],
			folders: []
		}), o = /* @__PURE__ */ new Set();
		for (let r of n.components) if (T(r) && r.attachmentParent && o.add(sr({
			...e,
			actorId: r.attachmentParent.actorId
		})), r.type === "TestScript") for (let i of Xe(r)) {
			let r = t?.envelope.payload.actors.find((e) => e.components.some((e) => e.id === i.id));
			if (!r) throw Error("Missing Script target");
			r.id !== n.id && o.add(sr({
				...e,
				actorId: r.id
			}));
		}
		o.delete(e.serviceKey);
		let c = r.mounts.find((t) => t.id === e.mountId), l = await k(P({
			actor: n,
			folder: e.folder,
			worldMatrix: e.worldMatrix,
			visible: e.visible,
			loaded: e.loaded,
			mount: c ? {
				id: c.id,
				name: c.name,
				position: c.position,
				rotation: c.rotation,
				visible: c.visible,
				loaded: c.loaded
			} : null,
			assets: i
		}));
		s.push({
			key: e.serviceKey,
			contentHash: l,
			placement: e,
			actor: n,
			assetIds: i.map((e) => e.asset.id),
			dependencies: [...o].sort()
		});
	}
	return {
		releaseHash: t,
		manifest: r,
		actors: s,
		levels: a
	};
}
var Ms = (e, t) => new TextDecoder().decode(P(e)) === new TextDecoder().decode(P(t));
function Ns(e, t) {
	if (e && e.manifest.id !== t.manifest.id) throw Error("Different composition identities");
	let n = new Map(e?.actors.map((e) => [e.key, e])), r = new Map(t.actors.map((e) => [e.key, e]));
	return [.../* @__PURE__ */ new Set([...n.keys(), ...r.keys()])].sort().map((e) => {
		let t = n.get(e), i = r.get(e), a = t ? i ? t.contentHash === i.contentHash ? "unchanged" : "changed" : "removed" : "added", o = [];
		return t && i && a === "changed" && (t.actor.name !== i.actor.name && o.push("name"), Ms(t.placement.folder, i.placement.folder) || o.push("folder"), Ms(t.placement.worldMatrix, i.placement.worldMatrix) || o.push("transform"), Ms(t.actor.components, i.actor.components) || o.push("components"), Ms(t.dependencies, i.dependencies) || o.push("dependencies"), o.length || o.push("assets_or_placement")), {
			key: e,
			kind: a,
			before: t,
			after: i,
			fields: o
		};
	});
}
//#endregion
//#region src/delivery/HostBindings.ts
function Ps(e) {
	if (e.version !== 1 || typeof e.revision != "string" || !e.revision || e.revision.length > 200 || !Array.isArray(e.bindings) || e.bindings.length > 1e5 || P(e).length > 16 * 1024 ** 2 || Object.keys(e).sort().join() !== "bindings,revision,version") throw Error("Invalid host binding snapshot");
	let t = /* @__PURE__ */ new Set();
	for (let n of e.bindings) {
		let e;
		try {
			e = JSON.parse(n.key);
		} catch {
			throw Error("Invalid stable actor key");
		}
		if (!Array.isArray(e) || e.length !== 3 || typeof e[0] != "string" || typeof e[1] != "string" && e[1] !== null || typeof e[2] != "string" || typeof n.componentId != "string" && n.componentId !== null || !n.data || typeof n.data != "object" || Array.isArray(n.data)) throw Error("Invalid host binding");
		let r = JSON.stringify([n.key, n.componentId]);
		if (t.has(r)) throw Error("Competing host binding writers");
		if (t.add(r), Object.keys(n).some((e) => ![
			"key",
			"componentId",
			"data",
			"presentation"
		].includes(e))) throw Error("Unsupported host binding field");
		let i = n.presentation;
		if (i && (i.policy !== "host-wins" || Object.keys(i).some((e) => ![
			"policy",
			"positionMeters",
			"visible",
			"color"
		].includes(e)) || i.positionMeters && (!Array.isArray(i.positionMeters) || i.positionMeters.length !== 3 || i.positionMeters.some((e) => !Number.isFinite(e))) || i.visible !== void 0 && typeof i.visible != "boolean" || i.color !== void 0 && (!Number.isInteger(i.color) || i.color < 0 || i.color > 16777215))) throw Error("Invalid presentation override");
	}
	return structuredClone(e);
}
function Fs(e, t) {
	let n = Ps(t), r = new Map(e.actors.map((e) => [e.serviceKey, e]));
	return n.bindings.map((e) => ({
		key: e.key,
		componentId: e.componentId,
		status: r.has(e.key) ? e.componentId !== null && !r.get(e.key).components.some((t) => t.id === e.componentId) ? "orphan_component" : "bound" : "orphan_actor"
	}));
}
function Is(e, t) {
	let n = Fs(e, t), r = /* @__PURE__ */ new Set();
	for (let i of t.bindings.filter((e) => e.presentation)) {
		if (n.find((e) => e.key === i.key && e.componentId === i.componentId)?.status !== "bound") continue;
		let t = e.actors.find((e) => e.serviceKey === i.key), a = i.componentId ?? t.rootComponentId, o = /* @__PURE__ */ new Set([a]);
		for (let e = !0; e;) {
			e = !1;
			for (let n of t.components) n.parentComponentId && o.has(n.parentComponentId) && !o.has(n.id) && (o.add(n.id), e = !0);
		}
		for (let e of o) for (let t of Object.keys(i.presentation).filter((e) => e !== "policy")) {
			let n = JSON.stringify([
				i.key,
				e,
				t
			]);
			if (r.has(n)) throw Error("Competing presentation writers");
			r.add(n);
		}
	}
}
function Ls(e, t) {
	let n = e.position.clone(), r = e.visible, i = [];
	return t.positionMeters && e.position.fromArray(t.positionMeters), t.visible !== void 0 && (e.visible = t.visible), t.color !== void 0 && e.traverse((e) => {
		if (!(e instanceof M)) return;
		let n = e.material, r = (Array.isArray(n) ? n : [n]).map((e) => {
			let n = e.clone();
			return "color" in n && n.color instanceof Ot && n.color.setHex(t.color), n;
		});
		e.material = Array.isArray(n) ? r : r[0], i.push({
			mesh: e,
			original: n,
			copies: r
		});
	}), () => {
		e.position.copy(n), e.visible = r;
		for (let e of i) e.mesh.material = e.original, e.copies.forEach((e) => e.dispose());
	};
}
function Rs(e, t) {
	let n = Ps(t), r = [], i = !1, a = [], o = () => {
		let t = e.session.actors;
		if (t && !i) {
			Is(t, n), a.splice(0).reverse().forEach((e) => e()), r = Fs(t, n);
			for (let i of n.bindings) {
				if (!i.presentation || r.find((e) => e.key === i.key && e.componentId === i.componentId)?.status !== "bound") continue;
				let n = t.actors.find((e) => e.serviceKey === i.key), o = n.mountId === null ? e.session.objectViews.find((e) => e.actorId === n.actorId) : e.session.views.filter((e) => e.root.userData.deliveryMountId === n.mountId).flatMap((e) => e.projections).find((e) => e.actorId === n.actorId);
				if (!o) continue;
				let s = i.componentId === null || i.componentId === n.rootComponentId ? o.object : void 0;
				s || o.object.traverse((e) => {
					e.userData.componentId === i.componentId && (s = e);
				}), s && a.push(Ls(s, i.presentation));
			}
			e.invalidate();
		}
	};
	o();
	let s = e.session.subscribe(o);
	return {
		get impacts() {
			return structuredClone(r);
		},
		update(e) {
			let t = n;
			n = Ps(e);
			try {
				o();
			} catch (e) {
				throw n = t, e;
			}
		},
		dispose() {
			i = !0, s(), a.splice(0).reverse().forEach((e) => e()), e.invalidate();
		}
	};
}
//#endregion
//#region node_modules/.pnpm/react@19.3.0/node_modules/react/cjs/react.production.js
var zs = /* @__PURE__ */ e(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function ee(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var x = ee.prototype = new b();
	x.constructor = ee, _(x, y.prototype), x.isPureReactComponent = !0;
	var S = Array.isArray;
	function C() {}
	var w = {
		H: null,
		A: null,
		T: null,
		S: null
	}, te = Object.prototype.hasOwnProperty;
	function T(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function ne(e, t) {
		return T(e.type, t, e.props);
	}
	function re(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function ie(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var ae = /\/+/g;
	function oe(e, t) {
		return typeof e == "object" && e && e.key != null ? ie("" + e.key) : t.toString(36);
	}
	function se(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(C, C) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function ce(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, ce(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + oe(e, 0) : a, S(o) ? (i = "", c != null && (i = c.replace(ae, "$&/") + "/"), ce(o, r, i, "", function(e) {
			return e;
		})) : o != null && (re(o) && (o = ne(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(ae, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (S(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + oe(a, u), c += ce(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + oe(a, u++), c += ce(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return ce(se(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function le(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return ce(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function ue(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var de = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function fe(e) {
		var t = w.T, n = {};
		n.types = t === null ? null : t.types, w.T = n;
		try {
			var r = e(), i = w.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(C, de);
		} catch (e) {
			de(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), w.T = t;
		}
	}
	function pe(e) {
		var t = w.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else fe(pe.bind(null, e));
	}
	var me = {
		map: le,
		forEach: function(e, t, n) {
			le(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return le(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return le(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!re(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = me, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = ee, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return w.H.useMemoCache(e);
		}
	}, e.addTransitionType = pe, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !te.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return T(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) te.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return T(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = re, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: ue
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = fe, e.unstable_useCacheRefresh = function() {
		return w.H.useCacheRefresh();
	}, e.use = function(e) {
		return w.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return w.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return w.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return w.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return w.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return w.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return w.H.useEffectEvent(e);
	}, e.useId = function() {
		return w.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return w.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return w.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return w.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return w.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return w.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return w.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return w.H.useRef(e);
	}, e.useState = function(e) {
		return w.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return w.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return w.H.useTransition();
	}, e.version = "19.3.0";
})), Bs = /* @__PURE__ */ e(((e, t) => {
	t.exports = zs();
})), Vs = /* @__PURE__ */ e(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), Hs = /* @__PURE__ */ e(((e, t) => {
	t.exports = Vs();
})), U = Bs(), W = Hs();
function Us({ value: e, validate: t, onCommit: n, label: r = "테스트 값", parse: i, type: a, scrubRange: o, mixed: s = !1 }) {
	let [c, l] = (0, U.useState)(null), [u, d] = (0, U.useState)(!1), f = (0, U.useRef)(null), p = (0, U.useRef)(null), m = (0, U.useRef)(null), h = () => {
		let e = m.current;
		m.current = null, e?.input.hasPointerCapture(e.id) && e.input.releasePointerCapture(e.id), p.current !== null && clearTimeout(p.current), p.current = null, f.current = null, l(null), d(!1);
	};
	(0, U.useEffect)(() => {
		let e = () => {
			document.hidden && h();
		};
		return window.addEventListener("blur", h), document.addEventListener("visibilitychange", e), () => {
			p.current !== null && clearTimeout(p.current), window.removeEventListener("blur", h), document.removeEventListener("visibilitychange", e);
		};
	}, []);
	let g = () => {
		let r = f.current;
		if (r === null) return !0;
		let a = i(r);
		return t(a).ok ? (h(), (s || a !== e) && n(a), !0) : (d(!0), !1);
	};
	return /* @__PURE__ */ (0, W.jsx)("input", {
		type: a,
		className: o ? "material-scrub-number" : void 0,
		step: a === "number" ? "any" : void 0,
		title: o ? `좌우 드래그: ${o[0]}~${o[1]} · Shift: 미세 조절 · 클릭: 숫자 입력 · Esc: 취소` : void 0,
		onPointerDown: (t) => {
			o && typeof e == "number" && t.button === 0 && !t.currentTarget.matches(":disabled") && document.activeElement !== t.currentTarget && (m.current = {
				id: t.pointerId,
				x: t.clientX,
				value: e,
				dragged: !1,
				input: t.currentTarget
			});
		},
		onPointerMove: (e) => {
			let t = m.current;
			if (!t || !o || t.id !== e.pointerId || !(e.buttons & 1)) return;
			let n = e.clientX - t.x;
			if (!t.dragged && Math.abs(n) < 3) return;
			e.preventDefault(), t.dragged || (t.dragged = !0, e.currentTarget.setPointerCapture(e.pointerId));
			let r = Math.min(o[1], Math.max(o[0], t.value + n * (e.shiftKey ? .001 : .01))), i = String(Math.round(r * 1e3) / 1e3);
			f.current = i, l(i), d(!1);
		},
		onPointerUp: (e) => {
			let t = m.current;
			if (m.current = null, !t?.dragged) return;
			e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId), g() || h();
			let n = e.currentTarget.closest(".material-panel-body");
			e.currentTarget.blur(), n?.focus();
		},
		onPointerCancel: h,
		onLostPointerCapture: () => {
			m.current && h();
		},
		"aria-label": r,
		"aria-invalid": u,
		"data-editing": c === null ? void 0 : "true",
		placeholder: s ? "여러 값" : void 0,
		value: c ?? (s ? "" : e),
		onFocus: () => {
			p.current !== null && clearTimeout(p.current), p.current = null;
		},
		onChange: (e) => {
			f.current = e.target.value, l(e.target.value), d(!1);
		},
		onKeyDown: (e) => {
			if (!e.nativeEvent.isComposing && (e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), h(), e.currentTarget.blur()), e.key === "Enter" && (e.preventDefault(), g()))) {
				let t = e.currentTarget.closest(".material-panel-body");
				e.currentTarget.blur(), t?.focus();
			}
		},
		onBlur: () => {
			if (m.current?.dragged) {
				h();
				return;
			}
			p.current = setTimeout(() => {
				p.current = null, !document.hasFocus() || document.hidden ? h() : g() || h();
			}, 0);
		}
	});
}
function Ws(e) {
	return /* @__PURE__ */ (0, W.jsx)(Us, {
		...e,
		type: "number",
		parse: (e) => e.trim() === "" ? NaN : Number(e)
	});
}
//#endregion
//#region node_modules/.pnpm/scheduler@0.28.0/node_modules/scheduler/cjs/scheduler.production.js
var Gs = /* @__PURE__ */ e(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function ee(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, x || (x = !0, ne());
			else {
				var t = n(l);
				t !== null && ae(ee, t.startTime - e);
			}
		}
	}
	var x = !1, S = -1, C = 5, w = -1;
	function te() {
		return g ? !0 : !(e.unstable_now() - w < C);
	}
	function T() {
		if (g = !1, x) {
			var t = e.unstable_now();
			w = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(S), S = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && te());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && ae(ee, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? ne() : x = !1;
			}
		}
	}
	var ne;
	if (typeof y == "function") ne = function() {
		y(T);
	};
	else if (typeof MessageChannel < "u") {
		var re = new MessageChannel(), ie = re.port2;
		re.port1.onmessage = T, ne = function() {
			ie.postMessage(null);
		};
	} else ne = function() {
		_(T, 0);
	};
	function ae(t, n) {
		S = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(S), S = -1) : h = !0, ae(ee, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, x || (x = !0, ne()))), r;
	}, e.unstable_shouldYield = te, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), Ks = /* @__PURE__ */ e(((e, t) => {
	t.exports = Gs();
})), qs = /* @__PURE__ */ e(((e) => {
	var t = Bs();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function u(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = u(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = u(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = u(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = u(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.0";
})), Js = /* @__PURE__ */ e(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = qs();
})), Ys = /* @__PURE__ */ e(((e) => {
	var t = Ks(), n = Bs(), r = Js();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function u(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function d(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = d(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function f(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && f(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function p(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function m(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function h(e) {
		var t = [null, null], n = p(e);
		return n === null || g(t, e, n.child, { foundSelf: !1 }), t;
	}
	function g(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && g(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function _(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var v = null, y = null;
	function b(e, t, n) {
		return e === n || e === t && (v = e, !0);
	}
	function ee(e, t, n) {
		return e === n ? (y = e, !1) : e === t && (y !== null && (v = e), !0);
	}
	function x(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function S(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var C = Object.assign, w = Symbol.for("react.element"), te = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), ne = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), ae = Symbol.for("react.consumer"), oe = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), pe = Symbol.for("react.legacy_hidden"), me = Symbol.for("react.memo_cache_sentinel"), E = Symbol.for("react.view_transition"), he = Symbol.for("react.recoverable"), ge = Symbol.iterator;
	function _e(e) {
		return typeof e != "object" || !e ? null : (e = ge && e[ge] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var ve = Symbol.for("react.client.reference");
	function ye(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === ve ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case ne: return "Fragment";
			case ie: return "Profiler";
			case re: return "StrictMode";
			case ce: return "Suspense";
			case le: return "SuspenseList";
			case fe: return "Activity";
			case E: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case T: return "Portal";
			case oe: return e.displayName || "Context";
			case ae: return (e._context.displayName || "Context") + ".Consumer";
			case se:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case ue: return t = e.displayName || null, t === null ? ye(e.type) || "Memo" : t;
			case de:
				t = e._payload, e = e._init;
				try {
					return ye(e(t));
				} catch {}
		}
		return null;
	}
	var be = Array.isArray, D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xe = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, Se = [], Ce = -1;
	function we(e) {
		return { current: e };
	}
	function Te(e) {
		0 > Ce || (e.current = Se[Ce], Se[Ce] = null, Ce--);
	}
	function k(e, t) {
		Ce++, Se[Ce] = e.current, e.current = t;
	}
	var Ee = we(null), De = we(null), Oe = we(null), ke = we(null);
	function Ae(e, t) {
		switch (k(Oe, t), k(De, e), k(Ee, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = up(t), e = dp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		Te(Ee), k(Ee, e);
	}
	function je() {
		Te(Ee), Te(De), Te(Oe);
	}
	function Me(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, k(ke, e)), t = Ee.current;
		var n = dp(t, e.type);
		t !== n && (k(De, e), k(Ee, n));
	}
	function Ne(e) {
		De.current === e && (Te(Ee), Te(De)), ke.current === e && (Te(ke), sh._currentValue = xe);
	}
	var Pe, Fe;
	function Ie(e) {
		if (Pe === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Pe = t && t[1] || "", Fe = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Pe + e + Fe;
	}
	var Le = !1;
	function Re(e, t) {
		if (!e || Le) return "";
		Le = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			Le = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Ie(n) : "";
	}
	function ze(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Ie(e.type);
			case 16: return Ie("Lazy");
			case 13: return e.child !== t && t !== null ? Ie("Suspense Fallback") : Ie("Suspense");
			case 19: return Ie("SuspenseList");
			case 0:
			case 15: return Re(e.type, !1);
			case 11: return Re(e.type.render, !1);
			case 1: return Re(e.type, !0);
			case 31: return Ie("Activity");
			case 30: return Ie("ViewTransition");
			default: return "";
		}
	}
	function Be(e) {
		try {
			var t = "", n = null;
			do
				t += ze(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Ve = Object.prototype.hasOwnProperty, He = t.unstable_scheduleCallback, Ue = t.unstable_cancelCallback, We = t.unstable_shouldYield, Ge = t.unstable_requestPaint, Ke = t.unstable_now, qe = t.unstable_getCurrentPriorityLevel, Je = t.unstable_ImmediatePriority, Ye = t.unstable_UserBlockingPriority, Xe = t.unstable_NormalPriority, Ze = t.unstable_LowPriority, Qe = t.unstable_IdlePriority, $e = t.log, et = t.unstable_setDisableYieldValue, tt = null, nt = null;
	function rt(e) {
		if (typeof $e == "function" && et(e), nt && typeof nt.setStrictMode == "function") try {
			nt.setStrictMode(tt, e);
		} catch {}
	}
	var A = Math.clz32 ? Math.clz32 : ot, it = Math.log, at = Math.LN2;
	function ot(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (it(e) / at | 0) | 0;
	}
	var st = 256, ct = 262144, lt = 4194304;
	function ut(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function dt(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = ut(n))) : i = ut(o) : i = ut(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = ut(n))) : i = ut(o)) : i = ut(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function ft(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function pt(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - A(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function mt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function ht() {
		var e = lt;
		return lt <<= 1, !(lt & 62914560) && (lt = 4194304), e;
	}
	function gt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function _t(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function vt(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - A(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && yt(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function yt(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - A(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function bt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - A(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function xt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : St(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function St(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function Ct(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function wt() {
		var e = O.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function Tt(e, t) {
		var n = O.p;
		try {
			return O.p = e, t();
		} finally {
			O.p = n;
		}
	}
	var Et = Math.random().toString(36).slice(2), Dt = "__reactFiber$" + Et, Ot = "__reactProps$" + Et, kt = "__reactContainer$" + Et, At = "__reactEvents$" + Et, jt = "__reactListeners$" + Et, Mt = "__reactHandles$" + Et, Nt = "__reactResources$" + Et, Pt = "__reactMarker$" + Et, Ft = "__reactLoad$" + Et;
	function It(e) {
		delete e[Dt], delete e[Ot], delete e[jt], delete e[Mt];
	}
	function Lt(e) {
		var t;
		if (t = e[Dt]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[kt] || n[Dt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[Dt]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Rt(e) {
		if (e = e[Dt] || e[kt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function zt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Bt(e) {
		var t = e[Nt];
		return t ||= e[Nt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Vt(e) {
		e[Pt] = !0;
	}
	function Ht(e) {
		e[Ft] = void 0;
	}
	var Ut = /* @__PURE__ */ new Set(), Wt = {};
	function Gt(e, t) {
		Kt(e, t), Kt(e + "Capture", t);
	}
	function Kt(e, t) {
		for (Wt[e] = t, e = 0; e < t.length; e++) Ut.add(t[e]);
	}
	var qt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Jt = {}, Yt = {};
	function Xt(e) {
		return Ve.call(Yt, e) ? !0 : Ve.call(Jt, e) ? !1 : qt.test(e) ? Yt[e] = !0 : (Jt[e] = !0, !1);
	}
	var j = !1;
	function Zt() {
		var e = j;
		return j = !1, e;
	}
	function Qt(e, t, n) {
		if (Xt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function $t(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function en(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function tn(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function nn(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function rn(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function an(e) {
		if (!e._valueTracker) {
			var t = nn(e) ? "checked" : "value";
			e._valueTracker = rn(e, t, "" + e[t]);
		}
	}
	function on(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = nn(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var sn = /[\n"\\]/g;
	function cn(e) {
		return e.replace(sn, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function ln(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + tn(t)) : e.value !== "" + tn(t) && (e.value = "" + tn(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : dn(e, tn(n)) : o === "number" && e.value == t ? dn(e, tn(e.value)) : dn(e, tn(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + tn(s) : e.removeAttribute("name");
	}
	function un(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				an(e);
				return;
			}
			n = n == null ? "" : "" + tn(n), t = t == null ? n : "" + tn(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), an(e);
	}
	function dn(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function fn(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + tn(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function pn(e, t, n) {
		if (t != null && (t = "" + tn(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + tn(n);
	}
	function mn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (be(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = tn(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), an(e);
	}
	function M(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var N = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function hn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || N.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function gn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", j = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (hn(e, a, r), j = !0);
		} else for (var o in t) t.hasOwnProperty(o) && hn(e, o, t[o]);
	}
	function _n(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var vn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), yn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function bn(e) {
		return yn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function xn() {}
	var Sn = null;
	function Cn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var wn = null, Tn = null;
	function En(e) {
		var t = Rt(e);
		if (t && (e = t.stateNode)) {
			var n = e[Ot] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (ln(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + cn("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[Ot] || null;
								if (!a) throw Error(i(90));
								ln(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && on(r);
					}
					break a;
				case "textarea":
					pn(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && fn(e, !!n.multiple, t, !1);
			}
		}
	}
	var Dn = !1;
	function On(e, t, n) {
		if (Dn) return e(t, n);
		Dn = !0;
		try {
			return e(t);
		} finally {
			if (Dn = !1, (wn !== null || Tn !== null) && (zd(), wn && (t = wn, e = Tn, Tn = wn = null, En(t), e))) for (t = 0; t < e.length; t++) En(e[t]);
		}
	}
	function kn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[Ot] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var An = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), jn = !1;
	if (An) try {
		var Mn = {};
		Object.defineProperty(Mn, "passive", { get: function() {
			jn = !0;
		} }), window.addEventListener("test", Mn, Mn), window.removeEventListener("test", Mn, Mn);
	} catch {
		jn = !1;
	}
	var Nn = null, Pn = null, Fn = null;
	function In() {
		if (Fn) return Fn;
		var e, t = Pn, n = t.length, r, i = "value" in Nn ? Nn.value : Nn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Fn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Ln(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Rn() {
		return !0;
	}
	function zn() {
		return !1;
	}
	function Bn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Rn : zn, this.isPropagationStopped = zn, this;
		}
		return C(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Rn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Rn);
			},
			persist: function() {},
			isPersistent: Rn
		}), t;
	}
	var Vn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Hn = Bn(Vn), Un = C({}, Vn, {
		view: 0,
		detail: 0
	}), Wn = Bn(Un), Gn, Kn, qn, Jn = C({}, Un, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ir,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (Gn = e.screenX - qn.screenX, Kn = e.screenY - qn.screenY) : Kn = Gn = 0, qn = e), Gn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Kn;
		}
	}), Yn = Bn(Jn), Xn = Bn(C({}, Jn, { dataTransfer: 0 })), P = Bn(C({}, Un, { relatedTarget: 0 })), Zn = Bn(C({}, Vn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Qn = Bn(C({}, Vn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), $n = Bn(C({}, Vn, { data: 0 })), er = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, tr = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, nr = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function rr(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = nr[e]) ? !!t[e] : !1;
	}
	function ir() {
		return rr;
	}
	var ar = Bn(C({}, Un, {
		key: function(e) {
			if (e.key) {
				var t = er[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Ln(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tr[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ir,
		charCode: function(e) {
			return e.type === "keypress" ? Ln(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Ln(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), or = Bn(C({}, Jn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), sr = Bn(C({}, Vn, { submitter: 0 })), cr = Bn(C({}, Un, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ir
	})), lr = Bn(C({}, Vn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), ur = Bn(C({}, Jn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), dr = Bn(C({}, Vn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), fr = [
		9,
		13,
		27,
		32
	], pr = An && "CompositionEvent" in window, mr = null;
	An && "documentMode" in document && (mr = document.documentMode);
	var hr = An && "TextEvent" in window && !mr, gr = An && (!pr || mr && 8 < mr && 11 >= mr), _r = " ", vr = !1;
	function yr(e, t) {
		switch (e) {
			case "keyup": return fr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function br(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var xr = !1;
	function Sr(e, t) {
		switch (e) {
			case "compositionend": return br(t);
			case "keypress": return t.which === 32 ? (vr = !0, _r) : null;
			case "textInput": return e = t.data, e === _r && vr ? null : e;
			default: return null;
		}
	}
	function Cr(e, t) {
		if (xr) return e === "compositionend" || !pr && yr(e, t) ? (e = In(), Fn = Pn = Nn = null, xr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return gr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var wr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function Tr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!wr[e.type] : t === "textarea";
	}
	function Er(e, t, n, r) {
		wn ? Tn ? Tn.push(r) : Tn = [r] : wn = r, t = Jf(t, "onChange"), 0 < t.length && (n = new Hn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Dr = null, Or = null;
	function kr(e) {
		Vf(e, 0);
	}
	function Ar(e) {
		if (on(zt(e))) return e;
	}
	function jr(e, t) {
		if (e === "change") return t;
	}
	var Mr = !1;
	if (An) {
		var Nr;
		if (An) {
			var Pr = "oninput" in document;
			if (!Pr) {
				var Fr = document.createElement("div");
				Fr.setAttribute("oninput", "return;"), Pr = typeof Fr.oninput == "function";
			}
			Nr = Pr;
		} else Nr = !1;
		Mr = Nr && (!document.documentMode || 9 < document.documentMode);
	}
	function Ir() {
		Dr && (Dr.detachEvent("onpropertychange", Lr), Or = Dr = null);
	}
	function Lr(e) {
		if (e.propertyName === "value" && Ar(Or)) {
			var t = [];
			Er(t, Or, e, Cn(e)), On(kr, t);
		}
	}
	function Rr(e, t, n) {
		e === "focusin" ? (Ir(), Dr = t, Or = n, Dr.attachEvent("onpropertychange", Lr)) : e === "focusout" && Ir();
	}
	function zr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ar(Or);
	}
	function Br(e, t) {
		if (e === "click") return Ar(t);
	}
	function Vr(e, t) {
		if (e === "input" || e === "change") return Ar(t);
	}
	function Hr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Ur = typeof Object.is == "function" ? Object.is : Hr;
	function Wr(e, t) {
		if (Ur(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Ve.call(t, i) || !Ur(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Gr(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function F(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Kr(e, t) {
		var n = F(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = F(n);
		}
	}
	function qr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Jr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Gr(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Gr(e.document);
		}
		return t;
	}
	function Yr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Xr = An && "documentMode" in document && 11 >= document.documentMode, Zr = null, Qr = null, $r = null, ei = !1;
	function ti(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		ei || Zr == null || Zr !== Gr(r) || (r = Zr, "selectionStart" in r && Yr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), $r && Wr($r, r) || ($r = r, r = Jf(Qr, "onSelect"), 0 < r.length && (t = new Hn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Zr)));
	}
	function ni(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var ri = {
		animationend: ni("Animation", "AnimationEnd"),
		animationiteration: ni("Animation", "AnimationIteration"),
		animationstart: ni("Animation", "AnimationStart"),
		transitionrun: ni("Transition", "TransitionRun"),
		transitionstart: ni("Transition", "TransitionStart"),
		transitioncancel: ni("Transition", "TransitionCancel"),
		transitionend: ni("Transition", "TransitionEnd")
	}, ii = {}, ai = {};
	An && (ai = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
	function oi(e) {
		if (ii[e]) return ii[e];
		if (!ri[e]) return e;
		var t = ri[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in ai) return ii[e] = t[n];
		return e;
	}
	var si = oi("animationend"), ci = oi("animationiteration"), li = oi("animationstart"), ui = oi("transitionrun"), di = oi("transitionstart"), fi = oi("transitioncancel"), pi = oi("transitionend"), mi = /* @__PURE__ */ new Map(), hi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	hi.push("scrollEnd");
	function gi(e, t) {
		mi.set(e, t), Gt(t, [e]);
	}
	var _i = 0;
	function vi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = bd.identifierPrefix;
		var n = _i++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function yi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Od;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function bi(e, t) {
		return e = yi(e), t = yi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var xi = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, Si = [], Ci = 0, wi = 0;
	function Ti() {
		for (var e = Ci, t = wi = Ci = 0; t < e;) {
			var n = Si[t];
			Si[t++] = null;
			var r = Si[t];
			Si[t++] = null;
			var i = Si[t];
			Si[t++] = null;
			var a = Si[t];
			if (Si[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && ki(n, i, a);
		}
	}
	function Ei(e, t, n, r) {
		Si[Ci++] = e, Si[Ci++] = t, Si[Ci++] = n, Si[Ci++] = r, wi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Di(e, t, n, r) {
		return Ei(e, t, n, r), Ai(e);
	}
	function Oi(e, t) {
		return Ei(e, null, null, t), Ai(e);
	}
	function ki(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - A(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Ai(e) {
		if (50 < kd) throw kd = 0, Ad = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var I = {};
	function ji(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function L(e, t, n, r) {
		return new ji(e, t, n, r);
	}
	function Mi(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Ni(e, t) {
		var n = e.alternate;
		return n === null ? (n = L(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Pi(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function Fi(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Mi(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, Ee.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case fe: return e = L(31, n, t, a), e.elementType = fe, e.lanes = o, e;
			case ne: return Ii(n.children, a, o, t);
			case re:
				s = 8, a |= 24;
				break;
			case ie: return e = L(12, n, t, a | 2), e.elementType = ie, e.lanes = o, e;
			case ce: return e = L(13, n, t, a), e.elementType = ce, e.lanes = o, e;
			case le: return e = L(19, n, t, a), e.elementType = le, e.lanes = o, e;
			case pe:
			case E: return e = a | 32, e = L(30, n, t, e), e.elementType = E, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case oe:
						s = 10;
						break a;
					case ae:
						s = 9;
						break a;
					case se:
						s = 11;
						break a;
					case ue:
						s = 14;
						break a;
					case de:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = L(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Ii(e, t, n, r) {
		return e = L(7, e, r, t), e.lanes = n, e;
	}
	function Li(e, t, n) {
		return e = L(6, e, null, t), e.lanes = n, e;
	}
	function Ri(e) {
		var t = L(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function zi(e, t, n) {
		return t = L(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Bi = /* @__PURE__ */ new WeakMap();
	function Vi(e, t) {
		if (typeof e == "object" && e) {
			var n = Bi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Be(t)
			}, Bi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Be(t)
		};
	}
	var Hi = [], Ui = 0, Wi = null, Gi = 0, Ki = [], qi = 0, Ji = null, Yi = 1, Xi = "";
	function Zi(e, t) {
		Hi[Ui++] = Gi, Hi[Ui++] = Wi, Wi = e, Gi = t;
	}
	function Qi(e, t, n) {
		Ki[qi++] = Yi, Ki[qi++] = Xi, Ki[qi++] = Ji, Ji = e;
		var r = Yi;
		e = Xi;
		var i = 32 - A(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - A(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Yi = 1 << 32 - A(t) + i | n << i | r, Xi = a + e;
		} else Yi = 1 << a | n << i | r, Xi = e;
	}
	function $i(e) {
		e.return !== null && (Zi(e, 1), Qi(e, 1, 0));
	}
	function ea(e) {
		for (; e === Wi;) Wi = Hi[--Ui], Hi[Ui] = null, Gi = Hi[--Ui], Hi[Ui] = null;
		for (; e === Ji;) Ji = Ki[--qi], Ki[qi] = null, Xi = Ki[--qi], Ki[qi] = null, Yi = Ki[--qi], Ki[qi] = null;
	}
	function ta(e, t) {
		Ki[qi++] = Yi, Ki[qi++] = Xi, Ki[qi++] = Ji, Yi = t.id, Xi = t.overflow, Ji = e;
	}
	var na = null, R = null, z = !1, ra = null, ia = !1, aa = Error(i(519));
	function oa(e) {
		throw fa(Vi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), aa;
	}
	function sa(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[Dt] = e, t[Ot] = r, n) {
			case "dialog":
				Q("cancel", t), Q("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Q("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < zf.length; n++) Q(zf[n], t);
				break;
			case "source":
				Q("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Q("error", t), Q("load", t);
				break;
			case "details":
				Q("toggle", t);
				break;
			case "input":
				Q("invalid", t), un(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Q("invalid", t);
				break;
			case "textarea": Q("invalid", t), mn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || ep(t.textContent, n) ? (r.popover != null && (Q("beforetoggle", t), Q("toggle", t)), r.onScroll != null && Q("scroll", t), r.onScrollEnd != null && Q("scrollend", t), r.onClick != null && (t.onclick = xn), t = !0) : t = !1, t || oa(e, !0);
	}
	function ca(e) {
		for (na = e.return; na;) switch (na.tag) {
			case 5:
			case 31:
			case 13:
				ia = !1;
				return;
			case 27:
			case 3:
				ia = !0;
				return;
			default: na = na.return;
		}
	}
	function la(e) {
		if (e !== na) return !1;
		if (!z) return ca(e), z = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || pp(e.type, e.memoizedProps)), n = !n), n && R && oa(e), ca(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			R = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			R = dm(e);
		} else t === 27 ? (t = R, Sp(e.type) ? (e = um, um = null, R = e) : R = t) : R = na ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function ua() {
		R = na = null, z = !1;
	}
	function da() {
		var e = ra;
		return e !== null && (fd === null ? fd = e : fd.push.apply(fd, e), ra = null), e;
	}
	function fa(e) {
		ra === null ? ra = [e] : ra.push(e);
	}
	var B = we(null), pa = null, ma = null;
	function ha(e, t, n) {
		k(B, t._currentValue), t._currentValue = n;
	}
	function ga(e) {
		e._currentValue = B.current, Te(B);
	}
	function _a(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function va(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), _a(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), _a(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), _a(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function ya(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Ur(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === ke.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && va(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function ba(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Ur(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function xa(e) {
		pa = e, ma = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Sa(e) {
		return wa(pa, e);
	}
	function Ca(e, t) {
		return pa === null && xa(e), wa(e, t);
	}
	function wa(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, ma === null) {
			if (e === null) throw Error(i(308));
			ma = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else ma = ma.next = t;
		return n;
	}
	var Ta = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Ea = t.unstable_scheduleCallback, Da = t.unstable_NormalPriority, Oa = {
		$$typeof: oe,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function ka() {
		return {
			controller: new Ta(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function Aa(e) {
		e.refCount--, e.refCount === 0 && Ea(Da, function() {
			e.controller.abort();
		});
	}
	function ja(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var Ma = null;
	function Na(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Pa = null, Fa = 0, Ia = 0, La = null;
	function Ra(e, t) {
		if (Pa === null) {
			var n = Pa = [];
			Fa = 0, Ia = Pf(), La = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Fa++, t.then(za, za), t;
	}
	function za() {
		if (--Fa === 0 && (Ma = null, Pa !== null)) {
			La !== null && (La.status = "fulfilled");
			var e = Pa;
			Pa = null, Ia = 0, La = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Ba(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var Va = D.S;
	D.S = function(e, t) {
		if (hd = Ke(), typeof t == "object" && t && typeof t.then == "function" && Ra(e, t), Ma !== null) for (var n = bf; n !== null;) ja(n, Ma), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = bf; r !== null;) ja(r, n), r = r.next;
			if (Ia !== 0) {
				r = Ma, r === null && (r = Ma = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		Va !== null && Va(e, t);
	};
	var Ha = we(null);
	function Ua() {
		var e = Ha.current;
		return e === null ? q.pooledCache : e;
	}
	function Wa(e, t) {
		t === null ? k(Ha, Ha.current) : k(Ha, t.pool);
	}
	function Ga() {
		var e = Ua();
		return e === null ? null : {
			parent: Oa._currentValue,
			pool: e
		};
	}
	var Ka = Error(i(460)), qa = Error(i(474)), Ja = Error(i(542)), Ya = { then: function() {} };
	function Xa(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Za(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(xn, xn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, to(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(xn, xn);
				else {
					if (e = q, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, to(e), e;
				}
				throw $a = t, Ka;
		}
	}
	function Qa(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? ($a = e, Ka) : e;
		}
	}
	var $a = null;
	function eo() {
		if ($a === null) throw Error(i(459));
		var e = $a;
		return $a = null, e;
	}
	function to(e) {
		if (e === Ka || e === Ja) throw Error(i(483));
	}
	var no = null, ro = 0;
	function io(e) {
		var t = ro;
		return ro += 1, no === null && (no = []), Za(no, e, t);
	}
	function ao(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function oo(e, t) {
		throw t.$$typeof === w ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function so(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = Ni(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Li(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === ne ? (e = d(e, t, n.props.children, r, n.key), ao(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === de && Qa(i) === t.type) ? (t = a(t, n.props), ao(t, n), t.return = e, t) : (t = Fi(n.type, n.key, n.props, null, e.mode, r), ao(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = zi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Ii(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Li("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case te: return n = Fi(t.type, t.key, t.props, null, e.mode, n), ao(n, t), n.return = e, n;
					case T: return t = zi(t, e.mode, n), t.return = e, t;
					case de: return t = Qa(t), f(e, t, n);
				}
				if (be(t) || _e(t)) return t = Ii(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, io(t), n);
				if (t.$$typeof === oe) return f(e, Ca(e, t), n);
				oo(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case te: return n.key === i ? l(e, t, n, r) : null;
					case T: return n.key === i ? u(e, t, n, r) : null;
					case de: return n = Qa(n), p(e, t, n, r);
				}
				if (be(n) || _e(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, io(n), r);
				if (n.$$typeof === oe) return p(e, t, Ca(e, n), r);
				oo(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case te: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case T: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case de: return r = Qa(r), m(e, t, n, r, i);
				}
				if (be(r) || _e(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, io(r), i);
				if (r.$$typeof === oe) return m(e, t, n, Ca(t, r), i);
				oo(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), z && Zi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return z && Zi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), z && Zi(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), z && Zi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return z && Zi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), z && Zi(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === ne && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case te:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === ne) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), ao(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === de && Qa(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), ao(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === ne ? (c = Ii(o.props.children, e.mode, c, o.key), ao(c, o), c.return = e, e = c) : (c = Fi(o.type, o.key, o.props, null, e.mode, c), ao(c, o), c.return = e, e = c);
						}
						return s(e);
					case T:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = zi(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case de: return o = Qa(o), _(e, r, o, c);
				}
				if (be(o)) return h(e, r, o, c);
				if (_e(o)) {
					if (l = _e(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, io(o), c);
				if (o.$$typeof === oe) return _(e, r, Ca(e, o), c);
				oo(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Li(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				ro = 0;
				var i = _(e, t, n, r);
				return no = null, i;
			} catch (t) {
				if (t === Ka || t === Ja) throw t;
				var a = L(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var co = so(!0), lo = so(!1), uo = !1;
	function fo(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function po(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function mo(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function ho(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, K & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Ai(e), ki(e, null, n), t;
		}
		return Ei(e, r, t, n), Ai(e);
	}
	function go(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, bt(e, n);
		}
	}
	function _o(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var vo = !1;
	function yo() {
		if (vo) {
			var e = La;
			if (e !== null) throw e;
		}
	}
	function bo(e, t, n, r) {
		vo = !1;
		var i = e.updateQueue;
		uo = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Y & f) === f : (r & f) === f) {
					f !== 0 && f === Ia && (vo = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = C({}, d, f);
								break a;
							case 2: uo = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), od |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function xo(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function So(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) xo(n[e], t);
	}
	var Co = we(null), wo = we(0);
	function To(e, t) {
		e = id, k(wo, e), k(Co, t), id = e | t.baseLanes;
	}
	function Eo() {
		k(wo, id), k(Co, Co.current);
	}
	function Do() {
		id = wo.current, Te(Co), Te(wo);
	}
	var Oo = we(null), ko = null;
	function Ao(e) {
		var t = e.alternate;
		k(Fo, Fo.current & 1), k(Oo, e), ko === null && (t === null || Co.current !== null || t.memoizedState !== null) && (ko = e);
	}
	function jo(e) {
		k(Fo, Fo.current), k(Oo, e), ko === null && (ko = e);
	}
	function Mo(e) {
		e.tag === 22 ? (k(Fo, Fo.current), k(Oo, e), ko === null && (ko = e)) : No();
	}
	function No() {
		k(Fo, Fo.current), k(Oo, Oo.current);
	}
	function Po(e) {
		Te(Oo), ko === e && (ko = null), Te(Fo);
	}
	var Fo = we(0);
	function Io(e, t) {
		k(Oo, Oo.current), k(Fo, t);
	}
	function Lo(e) {
		Te(Fo), Te(Oo), ko === e && (ko = null);
	}
	function Ro(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var zo = 0, V = null, H = null, Bo = null, Vo = !1, Ho = !1, Uo = !1, Wo = 0, Go = 0, Ko = null, qo = 0;
	function Jo() {
		throw Error(i(321));
	}
	function Yo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Ur(e[n], t[n])) return !1;
		return !0;
	}
	function Xo(e, t, n, r, i, a) {
		return zo = a, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? mc : hc, Uo = !1, a = n(r, i), Uo = !1, Ho && (a = Qo(t, n, r, i)), Zo(e), a;
	}
	function Zo(e) {
		D.H = pc;
		var t = H !== null && H.next !== null;
		if (zo = 0, Bo = H = V = null, Vo = !1, Go = 0, Ko = null, t) throw Error(i(300));
		e === null || Mc || (e = e.dependencies, e !== null && ba(e) && (Mc = !0));
	}
	function Qo(e, t, n, r) {
		V = e;
		var a = 0;
		do {
			if (Ho && (Ko = null), Go = 0, Ho = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Bo = H = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			D.H = gc, o = t(n, r);
		} while (Ho);
		return o;
	}
	function $o() {
		var e = D.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? os(t) : t, e = e.useState()[0], (H === null ? null : H.memoizedState) !== e && (V.flags |= 1024), t;
	}
	function es() {
		var e = Wo !== 0;
		return Wo = 0, e;
	}
	function ts(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function ns(e) {
		if (Vo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Vo = !1;
		}
		zo = 0, Bo = H = V = null, Ho = !1, Go = Wo = 0, Ko = null;
	}
	function rs() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Bo === null ? V.memoizedState = Bo = e : Bo = Bo.next = e, Bo;
	}
	function is() {
		if (H === null) {
			var e = V.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = H.next;
		var t = Bo === null ? V.memoizedState : Bo.next;
		if (t !== null) Bo = t, H = e;
		else {
			if (e === null) throw V.alternate === null ? Error(i(467)) : Error(i(310));
			H = e, e = {
				memoizedState: H.memoizedState,
				baseState: H.baseState,
				baseQueue: H.baseQueue,
				queue: H.queue,
				next: null
			}, Bo === null ? V.memoizedState = Bo = e : Bo = Bo.next = e;
		}
		return Bo;
	}
	function as() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function os(e) {
		var t = Go;
		return Go += 1, Ko === null && (Ko = []), e = Za(Ko, e, t), t = V, (Bo === null ? t.memoizedState : Bo.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? mc : hc), e;
	}
	function ss(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return os(e);
			if (e.$$typeof === he) return;
			if (e.$$typeof === oe) return Sa(e);
		}
		throw Error(i(438, String(e)));
	}
	function cs(e) {
		var t = null, n = V.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = V.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = as(), V.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = me;
		return t.index++, n;
	}
	function ls(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function us(e) {
		return ds(is(), H, e);
	}
	function ds(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (zo & f) === f : (Y & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Ia && (d = !0);
					else if ((zo & p) === p) {
						u = u.next, p === Ia && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, V.lanes |= p, od |= p;
					f = u.action, Uo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, V.lanes |= f, od |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Ur(o, e.memoizedState) && (Mc = !0, d && (n = La, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function fs(e) {
		var t = is(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Ur(o, t.memoizedState) || (Mc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function ps(e, t, n) {
		var r = V, a = is(), o = z;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Ur((H || a).memoizedState, n);
		if (s && (a.memoizedState = n, Mc = !0), a = a.queue, Rs(gs.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Bo !== null && !!(Bo.memoizedState.tag & 1), Ns(e ? 9 : 8, { destroy: void 0 }, hs.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, q === null) throw Error(i(349));
			o || zo & 127 || ms(r, t, n);
		}
		return n;
	}
	function ms(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = V.updateQueue, t === null ? (t = as(), V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function hs(e, t, n, r) {
		t.value = n, t.getSnapshot = r, _s(t) && vs(e);
	}
	function gs(e, t, n) {
		return n(function() {
			_s(t) && vs(e);
		});
	}
	function _s(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Ur(e, n);
		} catch {
			return !0;
		}
	}
	function vs(e) {
		var t = Oi(e, 2);
		t !== null && Pd(t, e, 2);
	}
	function ys(e) {
		var t = rs();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Uo) {
				rt(!0);
				try {
					n();
				} finally {
					rt(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ls,
			lastRenderedState: e
		}, t;
	}
	function bs(e, t, n, r) {
		return e.baseState = n, ds(e, H, typeof r == "function" ? r : ls);
	}
	function xs(e, t, n, r, a) {
		if (uc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			D.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Ss(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Ss(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = D.T, o = {};
			o.types = a === null ? null : a.types, D.T = o;
			try {
				var s = n(i, r), c = D.S;
				c !== null && c(o, s), Cs(e, t, s);
			} catch (n) {
				Ts(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), D.T = a;
			}
		} else try {
			a = n(i, r), Cs(e, t, a);
		} catch (n) {
			Ts(e, t, n);
		}
	}
	function Cs(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			ws(e, t, n);
		}, function(n) {
			return Ts(e, t, n);
		}) : ws(e, t, n);
	}
	function ws(e, t, n) {
		t.status = "fulfilled", t.value = n, Es(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Ss(e, n)));
	}
	function Ts(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Es(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Es(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function Ds(e, t) {
		return t;
	}
	function Os(e, t) {
		if (z) {
			var n = q.formState;
			if (n !== null) {
				a: {
					var r = V;
					if (z) {
						if (R) {
							b: {
								for (var i = R, a = ia; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = lm(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								R = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						oa(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = rs(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ds,
			lastRenderedState: t
		}, n.queue = r, n = sc.bind(null, V, r), r.dispatch = n, r = ys(!1), a = lc.bind(null, V, !1, r.queue), r = rs(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = xs.bind(null, V, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function ks(e) {
		return As(is(), H, e);
	}
	function As(e, t, n) {
		if (t = ds(e, t, Ds)[0], e = us(ls)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = os(t);
		} catch (e) {
			throw e === Ka ? Ja : e;
		}
		else r = t;
		t = is();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (V.flags |= 2048, Ns(9, { destroy: void 0 }, js.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function js(e, t) {
		e.action = t;
	}
	function Ms(e) {
		var t = is(), n = H;
		if (n !== null) return As(t, n, e);
		is(), t = t.memoizedState, n = is();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function Ns(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = V.updateQueue, t === null && (t = as(), V.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function Ps() {
		return is().memoizedState;
	}
	function Fs(e, t, n, r) {
		var i = rs();
		V.flags |= e, i.memoizedState = Ns(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function Is(e, t, n, r) {
		var i = is();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		H !== null && r !== null && Yo(r, H.memoizedState.deps) ? i.memoizedState = Ns(t, a, n, r) : (V.flags |= e, i.memoizedState = Ns(1 | t, a, n, r));
	}
	function Ls(e, t) {
		Fs(8390656, 8, e, t);
	}
	function Rs(e, t) {
		Is(2048, 8, e, t);
	}
	function zs(e) {
		V.flags |= 4;
		var t = V.updateQueue;
		if (t === null) t = as(), V.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Vs(e) {
		var t = is().memoizedState;
		return zs({
			ref: t,
			nextImpl: e
		}), function() {
			if (K & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Hs(e, t) {
		return Is(4, 2, e, t);
	}
	function U(e, t) {
		return Is(4, 4, e, t);
	}
	function W(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Us(e, t, n) {
		n = n == null ? null : n.concat([e]), Is(4, 4, W.bind(null, t, e), n);
	}
	function Ws() {}
	function Gs(e, t) {
		var n = is();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Yo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function qs(e, t) {
		var n = is();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Yo(t, r[1])) return r[0];
		if (r = e(), Uo) {
			rt(!0);
			try {
				e();
			} finally {
				rt(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Ys(e, t, n) {
		return n === void 0 || zo & 1073741824 && !(Y & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Md(), V.lanes |= e, od |= e, n);
	}
	function Xs(e, t, n, r) {
		return Ur(n, t) ? n : Co.current === null ? !(zo & 106) || zo & 1073741824 && !(Y & 261930) ? (Mc = !0, e.memoizedState = n) : (e = Md(), V.lanes |= e, od |= e, t) : (e = Ys(e, n, r), Ur(e, t) || (Mc = !0), e);
	}
	function Zs(e, t, n, r, i) {
		var a = O.p;
		O.p = a !== 0 && 8 > a ? a : 8;
		var o = D.T, s = {};
		s.types = o === null ? null : o.types, D.T = s, lc(e, !1, t, n);
		try {
			var c = i(), l = D.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? cc(e, t, Ba(c, r), jd(e)) : cc(e, t, r, jd(e));
		} catch (n) {
			cc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, jd());
		} finally {
			O.p = a, o !== null && s.types !== null && (o.types = s.types), D.T = o;
		}
	}
	function Qs() {}
	function $s(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = ec(e).queue;
		Zs(e, a, t, xe, n === null ? Qs : function() {
			return tc(e), n(r);
		});
	}
	function ec(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: xe,
			baseState: xe,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ls,
				lastRenderedState: xe
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ls,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function tc(e) {
		var t = ec(e);
		t.next === null && (t = e.alternate.memoizedState), cc(e, t.next.queue, {}, jd());
	}
	function nc() {
		return Sa(sh);
	}
	function rc() {
		return is().memoizedState;
	}
	function ic() {
		return is().memoizedState;
	}
	function ac(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = jd();
					e = mo(n);
					var r = ho(t, e, n);
					r !== null && (Pd(r, t, n), go(r, t, n)), t = { cache: ka() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function oc(e, t, n) {
		var r = jd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, uc(e) ? dc(t, n) : (n = Di(e, t, n, r), n !== null && (Pd(n, e, r), fc(n, t, r)));
	}
	function sc(e, t, n) {
		cc(e, t, n, jd());
	}
	function cc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (uc(e)) dc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Ur(s, o)) return Ei(e, t, i, 0), q === null && Ti(), !1;
			} catch {}
			if (n = Di(e, t, i, r), n !== null) return Pd(n, e, r), fc(n, t, r), !0;
		}
		return !1;
	}
	function lc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Pf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, uc(e)) {
			if (t) throw Error(i(479));
		} else t = Di(e, n, r, 2), t !== null && Pd(t, e, 2);
	}
	function uc(e) {
		var t = e.alternate;
		return e === V || t !== null && t === V;
	}
	function dc(e, t) {
		Ho = Vo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function fc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, bt(e, n);
		}
	}
	var pc = {
		readContext: Sa,
		use: ss,
		useCallback: Jo,
		useContext: Jo,
		useEffect: Jo,
		useImperativeHandle: Jo,
		useLayoutEffect: Jo,
		useInsertionEffect: Jo,
		useMemo: Jo,
		useReducer: Jo,
		useRef: Jo,
		useState: Jo,
		useDebugValue: Jo,
		useDeferredValue: Jo,
		useTransition: Jo,
		useSyncExternalStore: Jo,
		useId: Jo,
		useHostTransitionStatus: Jo,
		useFormState: Jo,
		useActionState: Jo,
		useOptimistic: Jo,
		useMemoCache: Jo,
		useCacheRefresh: Jo,
		useEffectEvent: Jo
	}, mc = {
		readContext: Sa,
		use: ss,
		useCallback: function(e, t) {
			return rs().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Sa,
		useEffect: Ls,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Fs(4194308, 4, W.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Fs(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			Fs(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = rs();
			t = t === void 0 ? null : t;
			var r = e();
			if (Uo) {
				rt(!0);
				try {
					e();
				} finally {
					rt(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = rs();
			if (n !== void 0) {
				var i = n(t);
				if (Uo) {
					rt(!0);
					try {
						n(t);
					} finally {
						rt(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = oc.bind(null, V, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = rs();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = ys(e);
			var t = e.queue, n = sc.bind(null, V, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Ws,
		useDeferredValue: function(e, t) {
			return Ys(rs(), e, t);
		},
		useTransition: function() {
			var e = ys(!1);
			return e = Zs.bind(null, V, e.queue, !0, !1), rs().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = V, a = rs();
			if (z) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), q === null) throw Error(i(349));
				Y & 127 || ms(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Ls(gs.bind(null, r, o, e), [e]), r.flags |= 2048, Ns(9, { destroy: void 0 }, hs.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = rs(), t = q.identifierPrefix;
			if (z) {
				var n = Xi, r = Yi;
				n = (r & ~(1 << 32 - A(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Wo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = qo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: nc,
		useFormState: Os,
		useActionState: Os,
		useOptimistic: function(e) {
			var t = rs();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = lc.bind(null, V, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: cs,
		useCacheRefresh: function() {
			return rs().memoizedState = ac.bind(null, V);
		},
		useEffectEvent: function(e) {
			var t = rs(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (K & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, hc = {
		readContext: Sa,
		use: ss,
		useCallback: Gs,
		useContext: Sa,
		useEffect: Rs,
		useImperativeHandle: Us,
		useInsertionEffect: Hs,
		useLayoutEffect: U,
		useMemo: qs,
		useReducer: us,
		useRef: Ps,
		useState: function() {
			return us(ls);
		},
		useDebugValue: Ws,
		useDeferredValue: function(e, t) {
			return Xs(is(), H.memoizedState, e, t);
		},
		useTransition: function() {
			var e = us(ls)[0], t = is().memoizedState;
			return [typeof e == "boolean" ? e : os(e), t];
		},
		useSyncExternalStore: ps,
		useId: rc,
		useHostTransitionStatus: nc,
		useFormState: ks,
		useActionState: ks,
		useOptimistic: function(e, t) {
			return bs(is(), H, e, t);
		},
		useMemoCache: cs,
		useCacheRefresh: ic,
		useEffectEvent: Vs
	}, gc = {
		readContext: Sa,
		use: ss,
		useCallback: Gs,
		useContext: Sa,
		useEffect: Rs,
		useImperativeHandle: Us,
		useInsertionEffect: Hs,
		useLayoutEffect: U,
		useMemo: qs,
		useReducer: fs,
		useRef: Ps,
		useState: function() {
			return fs(ls);
		},
		useDebugValue: Ws,
		useDeferredValue: function(e, t) {
			var n = is();
			return H === null ? Ys(n, e, t) : Xs(n, H.memoizedState, e, t);
		},
		useTransition: function() {
			var e = fs(ls)[0], t = is().memoizedState;
			return [typeof e == "boolean" ? e : os(e), t];
		},
		useSyncExternalStore: ps,
		useId: rc,
		useHostTransitionStatus: nc,
		useFormState: Ms,
		useActionState: Ms,
		useOptimistic: function(e, t) {
			var n = is();
			return H === null ? (n.baseState = e, [e, n.queue.dispatch]) : bs(n, H, e, t);
		},
		useMemoCache: cs,
		useCacheRefresh: ic,
		useEffectEvent: Vs
	};
	function _c(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var vc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = mo(r);
			i.payload = t, n != null && (i.callback = n), t = ho(e, i, r), t !== null && (Pd(t, e, r), go(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = mo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ho(e, i, r), t !== null && (Pd(t, e, r), go(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = jd(), r = mo(n);
			r.tag = 2, t != null && (r.callback = t), t = ho(e, r, n), t !== null && (Pd(t, e, n), go(t, e, n));
		}
	};
	function yc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Wr(n, r) || !Wr(i, a) : !0;
	}
	function bc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vc.enqueueReplaceState(t, t.state, null);
	}
	function xc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = C({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function Sc(e) {
		xi(e);
	}
	function Cc(e) {
		console.error(e);
	}
	function wc(e) {
		xi(e);
	}
	function Tc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Ec(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Dc(e, t, n) {
		return n = mo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Tc(e, t);
		}, n;
	}
	function Oc(e) {
		return e = mo(e), e.tag = 3, e;
	}
	function kc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Ec(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Ec(t, n, r), typeof i != "function" && (vd === null ? vd = /* @__PURE__ */ new Set([this]) : vd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Ac(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && ya(t, n, a, !0), n = Oo.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return ko === null ? Kd() : n.alternate === null && ad === 0 && (ad = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Ya ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), mf(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Ya ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), mf(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return mf(e, r, a), Kd(), !1;
		}
		if (z) return t = Oo.current, t === null ? (r !== aa && (t = Error(i(423), { cause: r }), fa(Vi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Vi(r, n), a = Dc(e.stateNode, r, a), _o(e, a), ad !== 4 && (ad = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== aa && (e = Error(i(422), { cause: r }), fa(Vi(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Vi(o, n), dd === null ? dd = [o] : dd.push(o), ad !== 4 && (ad = 2), t === null) return !0;
		r = Vi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Dc(n.stateNode, r, e), _o(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (vd === null || !vd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = Oc(a), kc(a, e, n, r), _o(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var jc = Error(i(461)), Mc = !1;
	function Nc(e, t, n, r) {
		t.child = e === null ? lo(t, null, n, r) : co(t, e.child, n, r);
	}
	function Pc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return xa(t), r = Xo(e, t, n, o, a, i), s = es(), e !== null && !Mc ? (ts(e, t, i), cl(e, t, i)) : (z && s && $i(t), t.flags |= 1, Nc(e, t, r, i), t.child);
	}
	function Fc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Mi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Ic(e, t, a, r, i)) : (e = Fi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !ll(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Wr : n, n(o, r) && e.ref === t.ref) return cl(e, t, i);
		}
		return t.flags |= 1, e = Ni(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Ic(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Wr(a, r) && e.ref === t.ref) {
				if (Mc = !1, t.pendingProps = r = a, ll(e, i)) e.flags & 131072 && (Mc = !0);
				else return t.lanes = e.lanes, cl(e, t, i);
			}
		}
		return Wc(e, t, n, r, i);
	}
	function Lc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return zc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Wa(t, a === null ? null : a.cachePool), a === null ? Eo() : To(t, a), Mo(t);
			else return r = t.lanes = 536870912, zc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Wa(t, null), Eo(), No()) : (Wa(t, a.cachePool), To(t, a), No(), t.memoizedState = null);
		return Nc(e, t, i, n), t.child;
	}
	function Rc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function zc(e, t, n, r, i) {
		var a = Ua();
		return a = a === null ? null : {
			parent: Oa._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Wa(t, null), Eo(), Mo(t), e !== null && ya(e, t, r, !0), t.childLanes = i, null;
	}
	function Bc(e, t) {
		return t = $c({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Vc(e, t, n) {
		return co(t, e.child, null, n), e = Bc(t, t.pendingProps), e.flags |= 2, Po(t), t.memoizedState = null, e;
	}
	function Hc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (z) {
				if (r.mode === "hidden") return e = Bc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Rc(null, e);
				if (jo(t), (e = R) ? (e = am(e, ia), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ji === null ? null : {
						id: Yi,
						overflow: Xi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Ri(e), n.return = t, t.child = n, na = t, R = null)) : e = null, e === null) throw oa(t);
				return t.lanes = 536870912, null;
			}
			return Bc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (jo(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Vc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (Mc || ya(e, t, n, !1), a = (n & e.childLanes) !== 0, Mc || a) {
				if (Co.current === null) {
					if (r = q, r !== null && (s = xt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Oi(e, s), Pd(r, e, s), jc;
					Kd();
				}
				t = Vc(e, t, n);
			} else e = o.treeContext, R = lm(s.nextSibling), na = t, z = !0, ra = null, ia = !1, e !== null && ta(t, e), t = Bc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = Ni(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Uc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Wc(e, t, n, r, i) {
		return xa(t), n = Xo(e, t, n, r, void 0, i), r = es(), e !== null && !Mc ? (ts(e, t, i), cl(e, t, i)) : (z && r && $i(t), t.flags |= 1, Nc(e, t, n, i), t.child);
	}
	function Gc(e, t, n, r, i, a) {
		return xa(t), t.updateQueue = null, n = Qo(t, r, n, i), Zo(e), r = es(), e !== null && !Mc ? (ts(e, t, a), cl(e, t, a)) : (z && r && $i(t), t.flags |= 1, Nc(e, t, n, a), t.child);
	}
	function Kc(e, t, n, r, i) {
		if (xa(t), t.stateNode === null) {
			var a = I, o = n.contextType;
			typeof o == "object" && o && (a = Sa(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = vc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, fo(t), o = n.contextType, a.context = typeof o == "object" && o ? Sa(o) : I, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (_c(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && vc.enqueueReplaceState(a, a.state, null), bo(t, r, a, i), yo(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = xc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = I, typeof u == "object" && u && (o = Sa(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && bc(t, a, r, o), uo = !1;
			var f = t.memoizedState;
			a.state = f, bo(t, r, a, i), yo(), l = t.memoizedState, s || f !== l || uo ? (typeof d == "function" && (_c(t, n, d, r), l = t.memoizedState), (c = uo || yc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, po(e, t), o = t.memoizedProps, u = xc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = I, typeof l == "object" && l && (c = Sa(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && bc(t, a, r, c), uo = !1, f = t.memoizedState, a.state = f, bo(t, r, a, i), yo();
			var p = t.memoizedState;
			o !== d || f !== p || uo || e !== null && e.dependencies !== null && ba(e.dependencies) ? (typeof s == "function" && (_c(t, n, s, r), p = t.memoizedState), (u = uo || yc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ba(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Uc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = co(t, e.child, null, i), t.child = co(t, null, n, i)) : Nc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = cl(e, t, i), e;
	}
	function qc(e, t, n, r) {
		return ua(), t.flags |= 256, Nc(e, t, n, r), t.child;
	}
	var Jc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Yc(e) {
		return {
			baseLanes: e,
			cachePool: Ga()
		};
	}
	function Xc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= ld), e;
	}
	function Zc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Fo.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (z) {
				if (i ? Ao(t) : No(), (e = R) ? (e = am(e, ia), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ji === null ? null : {
						id: Yi,
						overflow: Xi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Ri(e), n.return = t, t.child = n, na = t, R = null)) : e = null, e === null) throw oa(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (No(), i = t.mode, a = $c({
				mode: "hidden",
				children: a
			}, i), r = Ii(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Yc(n), r.childLanes = Xc(e, o, n), t.memoizedState = Jc, Rc(null, r)) : (Ao(t), Qc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return tl(e, t, a, o, r, c, s, n);
		}
		return i ? (No(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Ni(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Ii(i, a, n, null), i.flags |= 2) : i = Ni(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Rc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Yc(n) : (a = i.cachePool, a === null ? a = Ga() : (s = Oa._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Xc(e, o, n), t.memoizedState = Jc, Rc(e.child, r)) : (Ao(t), n = e.child, e = n.sibling, n = Ni(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Qc(e, t) {
		return t = $c({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function $c(e, t) {
		return e = L(22, e, null, t), e.lanes = 0, e;
	}
	function el(e, t, n) {
		return co(t, e.child, null, n), e = Qc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function tl(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (Ao(t), t.flags &= -257, el(e, t, c)) : t.memoizedState === null ? (No(), o = a.fallback, s = t.mode, a = $c({
			mode: "visible",
			children: a.children
		}, s), o = Ii(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, co(t, e.child, null, c), a = t.child, a.memoizedState = Yc(c), a.childLanes = Xc(e, r, c), t.memoizedState = Jc, Rc(null, a)) : (No(), t.child = e.child, t.flags |= 128, null);
		if (Ao(t), sm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, fa({
				value: a,
				source: null,
				stack: null
			})), el(e, t, c);
		}
		if (Mc || ya(e, t, c, !1), r = (c & e.childLanes) !== 0, Mc || r) {
			if (Co.current !== null) return el(e, t, c);
			if (r = q, r !== null && (a = xt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Oi(e, a), Pd(r, e, a), jc;
			return om(o) || Kd(), el(e, t, c);
		}
		return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, R = lm(o.nextSibling), na = t, z = !0, ra = null, ia = !1, e !== null && ta(t, e), t = Qc(t, a.children), t.flags |= 134221824, t);
	}
	function nl(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), _a(e.return, t, n);
	}
	function rl(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Ro(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function il(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function al(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function ol(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = Fo.current;
		if (t.flags & 128) return Io(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Io(t, o), i === "backwards" && e !== null ? (al(e), Nc(e, t, r, n), al(e)) : Nc(e, t, r, n), r = z ? Gi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && nl(e, n, t);
			else if (e.tag === 19) nl(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = rl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, al(t)), il(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Ro(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				il(t, !0, n, null, a, r);
				break;
			case "together":
				il(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = rl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), il(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function sl(e, t, n) {
		var r = t.pendingProps;
		return ha(t, t.type, r.value), Nc(e, t, r.children, n), t.child;
	}
	function cl(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), od |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (ya(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Ni(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Ni(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function ll(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && ba(e)));
	}
	function ul(e, t, n) {
		switch (t.tag) {
			case 3:
				Ae(t, t.stateNode.containerInfo), ha(t, Oa, e.memoizedState.cache), ua();
				break;
			case 27:
			case 5:
				Me(t);
				break;
			case 4:
				Ae(t, t.stateNode.containerInfo);
				break;
			case 10:
				ha(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, jo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return Ao(t), t.flags |= 128, null;
					r = ya(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? Zc(e, t, n) : (Ao(t), e = cl(e, t, n), e === null ? null : e.sibling);
				}
				Ao(t);
				break;
			case 19:
				if (t.flags & 128) return ol(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (ya(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return ol(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Io(t, Fo.current), r) break;
				return null;
			case 22: return t.lanes = 0, Lc(e, t, n, t.pendingProps);
			case 24: ha(t, Oa, e.memoizedState.cache);
		}
		return cl(e, t, n);
	}
	function dl(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Mc = !0;
			else {
				if (!ll(e, n) && !(t.flags & 128)) return Mc = !1, ul(e, t, n);
				Mc = !!(e.flags & 131072);
			}
		} else Mc = !1, z && t.flags & 1048576 && Qi(t, Gi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Qa(t.elementType), t.type = e, typeof e == "function") Mi(e) ? (r = xc(e, r), t.tag = 1, t = Kc(null, t, e, r, n)) : (t.tag = 0, t = Wc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === se) {
								t.tag = 11, t = Pc(null, t, e, r, n);
								break a;
							}
							if (a === ue) {
								t.tag = 14, t = Fc(null, t, e, r, n);
								break a;
							}
							if (a === oe) {
								t.tag = 10, t.type = e, t = sl(null, t, n);
								break a;
							}
						}
						throw t = ye(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Wc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = xc(r, t.pendingProps), Kc(e, t, r, a, n);
			case 3:
				a: {
					if (Ae(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, po(e, t), bo(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, ha(t, Oa, r), r !== o.cache && va(t, [Oa], n, !0), yo(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = qc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Vi(Error(i(424)), t), fa(a), t = qc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (R = lm(e.firstChild), na = t, z = !0, ra = null, ia = !0, n = lo(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (ua(), r === a) {
							t = cl(e, t, n);
							break a;
						}
						Nc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Uc(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : z || (t.stateNode = fp(t.type, t.pendingProps, Oe.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return Me(t), e === null && z && (r = t.stateNode = hm(t.type, t.pendingProps, Oe.current), na = t, ia = !0, a = R, Sp(t.type) ? (um = a, R = lm(r.firstChild)) : R = a), Nc(e, t, t.pendingProps.children, n), Uc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && z && ((a = r = R) && (r = rm(r, t.type, t.pendingProps, ia), r === null ? a = !1 : (t.stateNode = r, na = t, R = lm(r.firstChild), ia = !1, a = !0)), a || oa(t)), Me(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, pp(a, o) ? r = null : s !== null && pp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Xo(e, t, $o, null, null, n), sh._currentValue = a), Uc(e, t), Nc(e, t, r, n), t.child;
			case 6: return e === null && z && ((e = n = R) && (n = im(n, t.pendingProps, ia), n === null ? e = !1 : (t.stateNode = n, na = t, R = null, e = !0)), e || oa(t)), null;
			case 13: return Zc(e, t, n);
			case 4: return Ae(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = co(t, null, r, n) : Nc(e, t, r, n), t.child;
			case 11: return Pc(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Uc(e, t), Nc(e, t, r, n), t.child;
			case 8: return Nc(e, t, t.pendingProps.children, n), t.child;
			case 12: return Nc(e, t, t.pendingProps.children, n), t.child;
			case 10: return sl(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, xa(t), a = Sa(a), r = r(a), t.flags |= 1, Nc(e, t, r, n), t.child;
			case 14: return Fc(e, t, t.type, t.pendingProps, n);
			case 15: return Ic(e, t, t.type, t.pendingProps, n);
			case 19: return ol(e, t, n);
			case 31: return Hc(e, t, n);
			case 22: return Lc(e, t, n, t.pendingProps);
			case 24: return xa(t), r = Sa(Oa), e === null ? (a = Ua(), a === null && (a = q, o = ka(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, fo(t), ha(t, Oa, a)) : ((e.lanes & n) !== 0 && (po(e, t), bo(t, null, null, n), yo()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, ha(t, Oa, r), r !== a.cache && va(t, [Oa], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ha(t, Oa, r))), Nc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : z && $i(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Uc(e, t), Nc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function fl(e) {
		e.flags |= 4;
	}
	function pl(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Ud()) e.flags |= 8192;
				else throw $a = Ya, qa;
			}
		} else e.flags &= -16777217;
	}
	function ml(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Ud()) e.flags |= 8192;
			else throw $a = Ya, qa;
		}
	}
	function hl(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : ht(), e.lanes |= t, ud |= t);
	}
	function gl(e, t) {
		if (!z) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function _l(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function vl(e, t, n) {
		var r = t.pendingProps;
		switch (ea(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return _l(t), null;
			case 1: return _l(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ga(Oa), je(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (la(t) ? fl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, da())), _l(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (fl(t), o === null ? (_l(t), pl(t, a, null, r, n)) : (_l(t), ml(t, o))) : o ? o === e.memoizedState ? (_l(t), t.flags &= -16777217) : (fl(t), _l(t), ml(t, o)) : (e = e.memoizedProps, e !== r && fl(t), _l(t), pl(t, a, e, r, n)), null;
			case 27:
				if (Ne(t), n = Oe.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && fl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return _l(t), t.subtreeFlags &= -33554433, null;
					}
					e = Ee.current, la(t) ? sa(t, e) : (e = hm(a, r, n), t.stateNode = e, fl(t));
				}
				return _l(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (Ne(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && fl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return _l(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = Ee.current, la(t)) sa(t, o);
					else {
						var s = lp(Oe.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[Dt] = t, o[Ot] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (np(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && fl(t);
					}
				}
				return _l(t), t.subtreeFlags &= -33554433, pl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && fl(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = Oe.current, la(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = na, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[Dt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || ep(e.nodeValue, n)), e || oa(t, !0);
					} else e = lp(e).createTextNode(r), e[Dt] = t, t.stateNode = e;
				}
				return _l(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = la(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[Dt] = t;
						} else ua(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						_l(t), e = !1;
					} else n = da(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Po(t), t) : (Po(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return _l(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = la(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[Dt] = t;
						} else ua(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						_l(t), a = !1;
					} else a = da(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Po(t), t) : (Po(t), null);
				}
				return Po(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), hl(t, t.updateQueue), _l(t), null);
			case 4: return je(), e === null && Wf(t.stateNode.containerInfo), t.flags |= 67108864, _l(t), null;
			case 10: return ga(t.type), _l(t), null;
			case 19:
				if (Lo(t), r = t.memoizedState, r === null) return _l(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) gl(r, !1);
					else {
						if (ad !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Ro(e), o !== null) {
								for (t.flags |= 128, gl(r, !1), e = o.updateQueue, t.updateQueue = e, hl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Pi(n, e), n = n.sibling;
								return Io(t, Fo.current & 1 | 2), z && Zi(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Ke() > gd && (t.flags |= 128, a = !0, gl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Ro(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, hl(t, e), gl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !z) return _l(t), null;
						} else 2 * Ke() - r.renderingStartTime > gd && n !== 536870912 && (t.flags |= 128, a = !0, gl(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Ke(), e.sibling = null, o = Fo.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || z ? Io(t, o) : (n = o, k(Oo, t), k(Fo, n), ko === null && (ko = t)), z && Zi(t, r.treeForkCount), e;
				}
				return _l(t), null;
			case 22:
			case 23: return Po(t), Do(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (_l(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _l(t), n = t.updateQueue, n !== null && hl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && Te(Ha), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ga(Oa), _l(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, _l(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function yl(e, t) {
		switch (ea(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ga(Oa), je(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return Ne(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Po(t), t.alternate === null) throw Error(i(340));
					ua();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Po(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					ua();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Lo(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return je(), null;
			case 10: return ga(t.type), null;
			case 22:
			case 23: return Po(t), Do(), e !== null && Te(Ha), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return ga(Oa), null;
			case 25: return null;
			default: return null;
		}
	}
	function bl(e, t) {
		switch (ea(t), t.tag) {
			case 3:
				ga(Oa), je();
				break;
			case 26:
			case 27:
			case 5:
				Ne(t);
				break;
			case 4:
				je();
				break;
			case 31:
				t.memoizedState !== null && Po(t);
				break;
			case 13:
				Po(t);
				break;
			case 19:
				Lo(t);
				break;
			case 10:
				ga(t.type);
				break;
			case 22:
			case 23:
				Po(t), Do(), e !== null && Te(Ha);
				break;
			case 24: ga(Oa);
		}
	}
	function xl(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Sl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Z(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Cl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				So(t, n);
			} catch (t) {
				Z(e, e.return, t);
			}
		}
	}
	function wl(e, t, n) {
		n.props = xc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Tl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = vi(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Fp(e);
							f(e.child, !1, Qp, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Z(e, t, n);
		}
	}
	function El(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				Z(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				Z(e, t, n);
			}
			else n.current = null;
		}
	}
	function Dl(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
	}
	function Ol(e) {
		for (var t = e.return; t !== null && (jl(t) && em(e.stateNode, t.stateNode), !Al(t));) t = t.return;
	}
	function kl(e) {
		for (var t = e.return; t !== null && (jl(t) && tm(e.stateNode, t.stateNode), !Al(t));) t = t.return;
	}
	function Al(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function jl(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function Ml(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Nl(e, t, n) {
		try {
			var r = e.stateNode;
			ip(r, e.type, n, t), r[Ot] = t;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Pl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
	}
	function Fl(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Pl(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Il(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xn)), Dl(e, r), j = !0;
		else if (i !== 4 && (i === 27 && (Dl(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Il(e, t, n, r), e = e.sibling; e !== null;) Il(e, t, n, r), e = e.sibling;
	}
	function Ll(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Dl(e, r), j = !0;
		else if (i !== 4 && (i === 27 && (Dl(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Ll(e, t, n, r), e = e.sibling; e !== null;) Ll(e, t, n, r), e = e.sibling;
	}
	function Rl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			np(t, r, n), t[Dt] = e, t[Ot] = n;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	var zl = !1, Bl = null;
	function Vl(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (zl = !0);
	}
	var Hl = null;
	function Ul() {
		var e = Hl;
		return Hl = null, e;
	}
	var Wl = 0;
	function Gl(e, t, n, r, i) {
		return Wl = 0, Kl(e.child, t, n, r, i);
	}
	function Kl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Op(o);
					r.push(s), s.view && (a = !0);
				} else a || Op(o).view && (a = !0);
				zl = !0, Tp(o, Wl === 0 ? t : t + "_" + Wl, n), Wl++;
			} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Kl(e.child, t, n, r, i) && (a = !0));
			e = e.sibling;
		}
		return a;
	}
	function ql(e, t) {
		for (; e !== null;) e.tag === 5 ? Ep(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || ql(e.child, t)), e = e.sibling;
	}
	function Jl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Jl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = bi(t.default, t.share), t !== "none" && (Gl(e, n, t, null, !1) || ql(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Yl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = vi(r, n), a = bi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Jl(e) : Gl(e, i, a, null, !1) ? (Jl(e), n.paired || t || Nd(e, r.onEnter)) : ql(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Yl(e, t), e = e.sibling;
		else Jl(e);
	}
	function Xl(e) {
		if (Bl !== null && Bl.size !== 0) {
			var t = Bl;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = bi(n.default, n.share);
								if (a !== "none" && (Gl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Nd(e, n.onShare)) : ql(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Xl(e);
				}
				e = e.sibling;
			}
		}
	}
	function Zl(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = vi(t, e.stateNode), r = Bl === null ? void 0 : Bl.get(n), i = bi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Gl(e, n, i, null, !1) ? r === void 0 ? Nd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Bl.delete(n), Nd(e, t.onShare)) : ql(e.child, !1)), Bl !== null && Xl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Zl(e), e = e.sibling;
		else Bl !== null && Xl(e);
	}
	function Ql(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = vi(t, e.stateNode);
				t = bi(t.default, t.update), e.flags &= -5, t !== "none" && Gl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Ql(e);
			e = e.sibling;
		}
	}
	function $l(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, ql(e.child, !1));
				}
				$l(e);
			}
			e = e.sibling;
		}
	}
	function eu(e) {
		if (e.tag === 30) e.stateNode.paired = null, ql(e.child, !1), $l(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) eu(e), e = e.sibling;
		else $l(e);
	}
	function tu(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? ql(e.child, !1) : e.subtreeFlags & 33554432 && tu(e), e = e.sibling;
	}
	function nu(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Wl < a.length) {
					var l = a[Wl], u = Op(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Tp(c, Wl === 0 ? n : n + "_" + Wl, i), s && e.flags & 4 || (Hl === null && (Hl = []), Hl.push(c, Wl === 0 ? r : r + "_" + Wl, t.memoizedProps)), Wl++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : nu(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function ru(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = vi(n, r), a = bi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Wl = 0, i = nu(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Nd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && ru(e, t);
			e = e.sibling;
		}
	}
	var iu = !1, G = !1, au = !1, ou = !1, su = typeof WeakSet == "function" ? WeakSet : Set, cu = null, lu = !1, uu = !1, du = !1, fu = !1;
	function pu(e, t, n) {
		if (e = e.containerInfo, sp = gh, e = Jr(e), Yr(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (cp = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, cu = t, t = n ? 9270 : 1024; cu !== null;) {
			if (e = cu, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && Zl(r[a]);
			if (e.alternate === null && e.flags & 2) n && Vl(e), mu(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && Zl(r), mu(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Vl(e), mu(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, cu = r) : (n && Ql(e), mu(n));
			}
		}
		Bl = null;
	}
	function mu(e) {
		for (; cu !== null;) {
			var t = cu, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = xc(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							Z(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) nm(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								nm(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = vi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = bi(a.default, a.update), a !== "none" && Gl(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, cu = r;
				break;
			}
			cu = t.return;
		}
	}
	function hu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Fu(e, n), r & 4 && xl(5, n);
				break;
			case 1:
				if (Fu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						Z(n, n.return, e);
					}
					else {
						var i = xc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							Z(n, n.return, e);
						}
					}
				}
				r & 64 && Cl(n), r & 512 && Tl(n, n.return);
				break;
			case 3:
				if (Fu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						So(e, t);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Rl(n);
			case 26:
			case 5:
				Fu(e, n), t === null && r & 4 && Ml(n), r & 512 && Tl(n, n.return);
				break;
			case 12:
				Fu(e, n);
				break;
			case 31:
				Fu(e, n), r & 4 && wu(e, n);
				break;
			case 13:
				Fu(e, n), r & 4 && Tu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = _f.bind(null, n), cm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || iu, !r) {
					var a = t !== null && t.memoizedState !== null || G;
					t = iu, i = G, iu = r, (G = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Lu(e, n, r)) : Fu(e, n), iu = t, G = i;
				}
				break;
			case 30:
				Fu(e, n), r & 512 && Tl(n, n.return);
				break;
			case 7: r & 512 && Tl(n, n.return);
			default: Fu(e, n);
		}
	}
	function gu(e, t) {
		for (e = e.child; e !== null;) _u(e, t), e = e.sibling;
	}
	function _u(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					Z(e, e.return, t);
				}
				vu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, j = !0;
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? wp(s, !0) : wp(e.stateNode, !1);
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && gu(e, t);
				break;
			default: gu(e, t);
		}
	}
	function vu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						_u(n, r);
						break a;
					case 22:
						n.memoizedState === null && vu(n, r);
						break a;
					default: vu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function yu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, yu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && It(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var bu = null, xu = !1;
	function Su(e, t, n) {
		for (n = n.child; n !== null;) Cu(e, t, n), n = n.sibling;
	}
	function Cu(e, t, n) {
		if (nt && typeof nt.onCommitFiberUnmount == "function") try {
			nt.onCommitFiberUnmount(tt, n);
		} catch {}
		switch (n.tag) {
			case 26:
				G || El(n, t), Su(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !G && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				G || El(n, t), kl(n);
				var r = bu, i = xu;
				Sp(n.type) && (bu = n.stateNode, xu = !1), Su(e, t, n), gm(n.stateNode, n.type, n.memoizedProps), bu = r, xu = i;
				break;
			case 5: G || El(n, t), kl(n);
			case 6:
				if (n.tag === 6 && kl(n), r = bu, i = xu, bu = null, Su(e, t, n), bu = r, xu = i, bu !== null) {
					if (xu) try {
						(bu.nodeType === 9 ? bu.body : bu.nodeName === "HTML" ? bu.ownerDocument.body : bu).removeChild(n.stateNode), j = !0;
					} catch (e) {
						Z(n, t, e);
					}
					else try {
						bu.removeChild(n.stateNode), j = !0;
					} catch (e) {
						Z(n, t, e);
					}
				}
				break;
			case 18:
				bu !== null && (xu ? (e = bu, Cp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Cp(bu, n.stateNode));
				break;
			case 4:
				r = bu, i = xu, bu = n.stateNode.containerInfo, xu = !0, Su(e, t, n), bu = r, xu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Sl(2, n, t), G || Sl(4, n, t), Su(e, t, n);
				break;
			case 1:
				G || (El(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && wl(n, t, r)), Su(e, t, n);
				break;
			case 21:
				Su(e, t, n);
				break;
			case 22:
				G = (r = G) || n.memoizedState !== null, Su(e, t, n), G = r;
				break;
			case 30:
				El(n, t), Su(e, t, n);
				break;
			case 7:
				G || El(n, t), Su(e, t, n);
				break;
			default: Su(e, t, n);
		}
	}
	function wu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				Z(t, t.return, e);
			}
		}
	}
	function Tu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Eu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new su()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new su()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function Du(e, t) {
		var n = Eu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = vf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Ou(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Sp(l.type)) {
							bu = l.stateNode, xu = !1;
							break a;
						}
						break;
					case 5:
						bu = l.stateNode, xu = !1;
						break a;
					case 3:
					case 4:
						bu = l.stateNode.containerInfo, xu = !0;
						break a;
				}
				l = l.return;
			}
			if (bu === null) throw Error(i(160));
			Cu(s, c, o), bu = null, xu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Au(t, e, n), t = t.sibling;
	}
	var ku = null;
	function Au(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				Ou(t, e, n), ju(e), a & 4 && (Sl(3, e, e.return), xl(3, e), Sl(5, e, e.return));
				break;
			case 1:
				Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), a & 64 && iu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = ku, Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (iu) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[Pt] || r[Dt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), np(r, t, n), r[Dt] = e, Vt(r), t = r;
												break a;
											case "link":
												if (o = Gm("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Gm("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[Dt] = e, Vt(r), t = r;
									}
									e.stateNode = t;
								}
							} else iu || Km(o, e.type, e.stateNode);
						} else e.stateNode = Bm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && Nl(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || G || t.parentNode.removeChild(t)) : a.count--, n === null ? iu || Km(o, e.type, e.stateNode) : Bm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), r !== null && a & 4 && Nl(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = au, au = !1, Ou(t, e, n), au = o, ju(e), a & 512 && (G || r === null || El(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						M(t, ""), j = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, Nl(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (ou = !0);
				break;
			case 6:
				if (Ou(t, e, n), ju(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, j = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				break;
			case 3:
				if (j = !1, Wm = null, o = ku, ku = bm(t.containerInfo), Ou(t, e, n), ku = o, ju(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					Z(e, e.return, t);
				}
				ou && (ou = !1, Mu(e)), j = !1;
				break;
			case 4:
				a = au, au = iu, r = Zt(), o = ku, ku = bm(e.stateNode.containerInfo), Ou(t, e, n), ju(e), ku = o, j && uu && (du = !0), j = r, au = a;
				break;
			case 12:
				Ou(t, e, n), ju(e);
				break;
			case 31:
				Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 13:
				Ou(t, e, n), ju(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (md = Ke()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = iu, l = G, u = au;
				iu = c || o, au = u || o, G = l || s, Ou(t, e, n), G = l, au = u, iu = c, ju(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || iu || G || (t = s || G, n = iu, r = G, iu = o || iu, G = t, Iu(e, 2), iu = n, G = r), !o && au || gu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Du(e, n))));
				break;
			case 19:
				Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 30:
				a & 512 && (G || r === null || El(r, r.return)), a = Zt(), o = uu, s = (n & 335544064) === n, c = e.memoizedProps, uu = s && bi(c.default, c.update) !== "none", Ou(t, e, n), ju(e), s && r !== null && j && (e.flags |= 4), uu = o, j = a;
				break;
			case 21: break;
			case 7: a & 512 && (G || r === null || El(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Ou(t, e, n), ju(e);
		}
	}
	function ju(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Pl(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (jl(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (Al(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Ll(e, Fl(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (M(l, ""), n.flags &= -33), Ll(e, Fl(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Il(e, Fl(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				Z(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Mu(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Mu(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function Nu(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Pu(t, e), t = t.sibling;
		else ru(t, !1);
	}
	function Pu(e, t) {
		var n = e.alternate;
		if (n === null) Yl(e, !1);
		else switch (e.tag) {
			case 3:
				if (fu = lu = !1, Ul(), Nu(t, e), !lu && !du) {
					if (e = Hl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Ep(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), fu = !0;
				}
				Hl = null;
				break;
			case 5:
				Nu(t, e);
				break;
			case 4:
				r = lu, lu = !1, Nu(t, e), lu && (du = !0), lu = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Nu(t, e) : Yl(e, !1));
				break;
			case 30:
				r = lu, i = Ul(), lu = !1, Nu(t, e), lu && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = vi(a, o), o = vi(n.memoizedProps, o);
				var s = bi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Wl = 0, t = nu(e, n, t, o, s, a, !0), Wl !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Nd(e, e.memoizedProps.onUpdate), Hl = i) : i !== null && (i.push.apply(i, Hl), Hl = i), lu = e.flags & 32 ? !0 : r;
				break;
			default: Nu(t, e);
		}
	}
	function Fu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) hu(e, t.alternate, t), t = t.sibling;
	}
	function Iu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Sl(4, n, n.return), Iu(n, r);
					break;
				case 1:
					El(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && wl(n, n.return, i), Iu(n, r);
					break;
				case 27: r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					El(n, n.return), n.tag !== 5 && n.tag !== 27 || kl(n), Iu(n, r);
					break;
				case 6:
					kl(n);
					break;
				case 26:
					El(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || G || i.parentNode.removeChild(i), Iu(n, r);
					break;
				case 22:
					n.memoizedState === null && Iu(n, r);
					break;
				case 30:
					El(n, n.return), Iu(n, r);
					break;
				case 7: El(n, n.return);
				default: Iu(n, r);
			}
			e = e.sibling;
		}
	}
	function Lu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Lu(i, a, n), xl(4, a);
					break;
				case 1:
					if (Lu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Z(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) xo(l[i], c);
						} catch (e) {
							Z(r, r.return, e);
						}
					}
					s && o & 64 && Cl(a), Tl(a, a.return);
					break;
				case 27: n & 2 && Rl(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || Ol(a), Lu(i, a, n), s && r === null && o & 4 && Ml(a), Tl(a, a.return);
					break;
				case 6:
					Ol(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || iu || Km(bm(c.ownerDocument), a.type, c), Lu(i, a, n), s && r === null && o & 4 && Ml(a), Tl(a, a.return);
					break;
				case 12:
					Lu(i, a, n);
					break;
				case 31:
					Lu(i, a, n), s && o & 4 && wu(i, a);
					break;
				case 13:
					Lu(i, a, n), s && o & 4 && Tu(i, a);
					break;
				case 22:
					a.memoizedState === null && Lu(i, a, n), Tl(a, a.return);
					break;
				case 30:
					Lu(i, a, n), Tl(a, a.return);
					break;
				case 7: Tl(a, a.return);
				default: Lu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Ru(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Aa(n));
	}
	function zu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Aa(e));
	}
	function Bu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Vu(e, t, n, r), t = t.sibling;
		else i && tu(t);
	}
	function Vu(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && eu(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Bu(e, t, n, r), a & 2048 && xl(9, t);
				break;
			case 1:
				Bu(e, t, n, r);
				break;
			case 3:
				Bu(e, t, n, r), i && fu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && Aa(a)));
				break;
			case 12:
				if (a & 2048) {
					Bu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						Z(t, t.return, e);
					}
				} else Bu(e, t, n, r);
				break;
			case 31:
				Bu(e, t, n, r);
				break;
			case 13:
				Bu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && eu(t), o._visibility & 2 ? Bu(e, t, n, r) : (o._visibility |= 2, Hu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && eu(s), o._visibility & 2 ? Bu(e, t, n, r) : Uu(e, t)), a & 2048 && Ru(s, t);
				break;
			case 24:
				Bu(e, t, n, r), a & 2048 && zu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (ql(a.child, !0), ql(t.child, !0))), Bu(e, t, n, r);
				break;
			default: Bu(e, t, n, r);
		}
	}
	function Hu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Hu(a, o, s, c, i), xl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Hu(a, o, s, c, i)) : u._visibility & 2 ? Hu(a, o, s, c, i) : Uu(a, o), i && l & 2048 && Ru(o.alternate, o);
					break;
				case 24:
					Hu(a, o, s, c, i), i && l & 2048 && zu(o.alternate, o);
					break;
				default: Hu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Uu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Uu(n, r), i & 2048 && Ru(r.alternate, r);
					break;
				case 24:
					Uu(n, r), i & 2048 && zu(r.alternate, r);
					break;
				default: Uu(n, r);
			}
			t = t.sibling;
		}
	}
	var Wu = 8192;
	function Gu(e, t, n) {
		if (e.subtreeFlags & Wu) for (e = e.child; e !== null;) Ku(e, t, n), e = e.sibling;
	}
	function Ku(e, t, n) {
		switch (e.tag) {
			case 26:
				Gu(e, t, n), e.flags & Wu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, ku, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Gu(e, t, n), e.flags & Wu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = ku;
				ku = bm(e.stateNode.containerInfo), Gu(e, t, n), ku = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Wu, Wu = 16777216, Gu(e, t, n), Wu = r) : Gu(e, t, n));
				break;
			case 30:
				if ((e.flags & Wu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Bl === null && (Bl = /* @__PURE__ */ new Map()), Bl.set(r, i);
				}
				Gu(e, t, n);
				break;
			default: Gu(e, t, n);
		}
	}
	function qu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Ju(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				cu = r, Zu(r, e);
			}
			qu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Yu(e), e = e.sibling;
	}
	function Yu(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Ju(e), e.flags & 2048 && Sl(9, e, e.return);
				break;
			case 3:
				Ju(e);
				break;
			case 12:
				Ju(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Xu(e)) : Ju(e);
				break;
			default: Ju(e);
		}
	}
	function Xu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				cu = r, Zu(r, e);
			}
			qu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Sl(8, t, t.return), Xu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Xu(t));
					break;
				default: Xu(t);
			}
			e = e.sibling;
		}
	}
	function Zu(e, t) {
		for (; cu !== null;) {
			var n = cu;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Sl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: Aa(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, cu = r;
			else a: for (n = e; cu !== null;) {
				r = cu;
				var i = r.sibling, a = r.return;
				if (yu(r), r === n) {
					cu = null;
					break a;
				}
				if (i !== null) {
					i.return = a, cu = i;
					break a;
				}
				cu = a;
			}
		}
	}
	var Qu = {
		getCacheForType: function(e) {
			var t = Sa(Oa), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Sa(Oa).controller.signal;
		}
	}, $u = typeof WeakMap == "function" ? WeakMap : Map, K = 0, q = null, J = null, Y = 0, X = 0, ed = null, td = !1, nd = !1, rd = !1, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = null, fd = null, pd = !1, md = 0, hd = 0, gd = Infinity, _d = null, vd = null, yd = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
	function jd() {
		return K & 2 && Y !== 0 ? Y & -Y : D.T === null ? wt() : Pf();
	}
	function Md() {
		if (ld === 0) {
			if (!(Y & 536870912) || z) {
				var e = ct;
				ct <<= 1, !(ct & 3932160) && (ct = 262144), ld = e;
			} else ld = 536870912;
		}
		return e = Oo.current, e !== null && (e.flags |= 32), ld;
	}
	function Nd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Pp(vi(e.memoizedProps, n))), Dd === null && (Dd = []), Dd.push(t.bind(null, r));
		}
	}
	function Pd(e, t, n) {
		(e === q && (X === 2 || X === 9) || e.cancelPendingCommit !== null) && (Vd(e, 0), Rd(e, Y, ld, !1)), _t(e, n), (!(K & 2) || e !== q) && (e === q && (!(K & 2) && (sd |= n), ad === 4 && Rd(e, Y, ld, !1)), Ef(e));
	}
	function Fd(e, t, n) {
		if (K & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || ft(e, t), a = r ? Yd(e, t) : qd(e, t, !0), o = r;
		do {
			if (a === 0) {
				nd && !r && Rd(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Ld(n)) {
				a = qd(e, t, !1), o = !1;
				continue;
			}
			if (a === 2) {
				if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
				else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
				if (s !== 0) {
					t = s;
					a: {
						var c = e;
						a = dd;
						var l = c.current.memoizedState.isDehydrated;
						if (l && (Vd(c, s).flags |= 256), s = qd(c, s, !1), s !== 2 && s !== 6) {
							if (rd && !l) {
								c.errorRecoveryDisabledLanes |= o, sd |= o, a = 4;
								break a;
							}
							o = fd, fd = a, o !== null && (fd === null ? fd = o : fd.push.apply(fd, o));
						}
						a = s;
					}
					if (o = !1, a !== 2) continue;
				}
			}
			if (a === 1) {
				Vd(e, 0), Rd(e, t, 0, !0);
				break;
			}
			a: {
				switch (r = e, o = a, o) {
					case 0:
					case 1: throw Error(i(345));
					case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
					case 6:
						Rd(r, t, ld, !td);
						break a;
					case 2:
						fd = null;
						break;
					case 3:
					case 5: break;
					default: throw Error(i(329));
				}
				if ((t & 62914560) === t && (a = md + 300 - Ke(), 10 < a)) {
					if (Rd(r, t, ld, !td), dt(r, 0, !0) !== 0) break a;
					Sd = t, r.timeoutHandle = gp(Id.bind(null, r, n, fd, _d, pd, t, ld, sd, ud, td, o, "Throttled", -0, 0), a);
					break a;
				}
				Id(r, n, fd, _d, pd, t, ld, sd, ud, td, o, null, -0, 0);
			}
			break;
		} while (1);
		Ef(e);
	}
	function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		if (d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: xn
		}, Bl = null, Ku(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? md - Ke() : (a & 4194048) === a ? hd - Ke() : 0, m = eh(d, m), m !== null)) {
			Sd = a, e.cancelPendingCommit = m(nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Rd(e, a, o, !l);
			return;
		}
		nf(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Ld(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Ur(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Rd(e, t, n, r) {
		t = pt(e, t), t &= ~cd, t &= ~sd, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - A(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && yt(e, n, t);
	}
	function zd() {
		return K & 6 ? !0 : (Df(0, !1), !1);
	}
	function Bd() {
		if (J !== null) {
			if (X === 0) var e = J.return;
			else e = J, ma = pa = null, ns(e), no = null, ro = 0, e = J;
			for (; e !== null;) bl(e.alternate, e), e = e.return;
			J = null;
		}
	}
	function Vd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Sd = 0, Bd(), q = e, J = n = Ni(e.current, null), Y = t, X = 0, ed = null, td = !1, nd = ft(e, t), rd = !1, ud = ld = cd = sd = od = ad = 0, fd = dd = null, pd = !1, id = pt(e, t), Ti(), n;
	}
	function Hd(e, t) {
		V = null, D.H = pc, t === Ka || t === Ja ? (t = eo(), X = 3) : t === qa ? (t = eo(), X = 4) : X = t === jc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, ed = t, J === null && (ad = 1, Tc(e, Vi(t, e.current)));
	}
	function Ud() {
		var e = Oo.current;
		return e === null ? !0 : (Y & 4194048) === Y ? ko === null : (Y & 62914560) === Y || Y & 536870912 ? e === ko : !1;
	}
	function Wd() {
		var e = D.H;
		return D.H = pc, e === null ? pc : e;
	}
	function Gd() {
		var e = D.A;
		return D.A = Qu, e;
	}
	function Kd() {
		ad = 4, td || (Y & 4194048) !== Y && Oo.current !== null || (nd = !0), !(od & 134217727) && !(sd & 134217727) || q === null || Rd(q, Y, ld, !1);
	}
	function qd(e, t, n) {
		var r = K;
		K |= 2;
		var i = Wd(), a = Gd();
		(q !== e || Y !== t) && (_d = null, Vd(e, t)), t = !1;
		var o = ad;
		a: do
			try {
				if (X !== 0 && J !== null) {
					var s = J, c = ed;
					switch (X) {
						case 8:
							Bd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							Oo.current === null && (t = !0);
							var l = X;
							if (X = 0, ed = null, $d(e, s, c, l), n && nd) {
								o = 0;
								break a;
							}
							break;
						default: l = X, X = 0, ed = null, $d(e, s, c, l);
					}
				}
				Jd(), o = ad;
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, ma = pa = null, K = r, D.H = i, D.A = a, J === null && (q = null, Y = 0, Ti()), o;
	}
	function Jd() {
		for (; J !== null;) Zd(J);
	}
	function Yd(e, t) {
		var n = K;
		K |= 2;
		var r = Wd(), a = Gd();
		q !== e || Y !== t ? (_d = null, gd = Ke() + 500, Vd(e, t)) : nd = ft(e, t);
		a: do
			try {
				if (X !== 0 && J !== null) {
					t = J;
					var o = ed;
					b: switch (X) {
						case 1:
							X = 0, ed = null, $d(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (Xa(o)) {
								X = 0, ed = null, Qd(t);
								break;
							}
							t = function() {
								X !== 2 && X !== 9 || q !== e || (X = 7), Ef(e);
							}, o.then(t, t);
							break a;
						case 3:
							X = 7;
							break a;
						case 4:
							X = 5;
							break a;
						case 7:
							Xa(o) ? (X = 0, ed = null, Qd(t)) : (X = 0, ed = null, $d(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (J.tag) {
								case 26: s = J.memoizedState;
								case 5:
								case 27:
									var c = J;
									if (s ? Ym(s) : c.stateNode.complete) {
										X = 0, ed = null;
										var l = c.sibling;
										if (l !== null) J = l;
										else {
											var u = c.return;
											u === null ? J = null : (J = u, ef(u));
										}
										break b;
									}
							}
							X = 0, ed = null, $d(e, t, o, 5);
							break;
						case 6:
							X = 0, ed = null, $d(e, t, o, 6);
							break;
						case 8:
							Bd(), ad = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Xd();
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return ma = pa = null, D.H = r, D.A = a, K = n, J === null ? (q = null, Y = 0, Ti(), ad) : 0;
	}
	function Xd() {
		for (; J !== null && !We();) Zd(J);
	}
	function Zd(e) {
		var t = dl(e.alternate, e, id);
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : J = t;
	}
	function Qd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Gc(n, t, t.pendingProps, t.type, void 0, Y);
				break;
			case 11:
				t = Gc(n, t, t.pendingProps, t.type.render, t.ref, Y);
				break;
			case 5:
				ns(t);
				var r = t;
				r === na && (z ? (ca(r), r.tag === 5 && r.stateNode != null && (R = r.stateNode)) : (ca(r), z = !0));
			default: bl(n, t), t = J = Pi(t, id), t = dl(n, t, id);
		}
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : J = t;
	}
	function $d(e, t, n, r) {
		ma = pa = null, ns(t), no = null, ro = 0;
		var i = t.return;
		try {
			if (Ac(e, i, t, n, Y)) {
				ad = 1, Tc(e, Vi(n, e.current)), J = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw J = i, t;
			ad = 1, Tc(e, Vi(n, e.current)), J = null;
			return;
		}
		t.flags & 32768 ? (z || r === 1 ? e = !0 : nd || Y & 536870912 ? e = !1 : (td = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Oo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), tf(t, e)) : ef(t);
	}
	function ef(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				tf(t, td);
				return;
			}
			e = t.return;
			var n = vl(t.alternate, t, id);
			if (n !== null) {
				J = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				J = t;
				return;
			}
			J = t = e;
		} while (t !== null);
		ad === 0 && (ad = 5);
	}
	function tf(e, t) {
		do {
			var n = yl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, J = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				J = e;
				return;
			}
			J = e = n;
		} while (e !== null);
		ad = 6, J = null;
	}
	function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			df();
		while (yd !== 0);
		if (K & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === q && (J = q = null, Y = 0), xd = t, bd = e, Sd = n, wd = a, Td = r, rf(e, t, n, s, c, l, f);
		}
	}
	function rf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (Cd = s, s |= wi, vt(e, n, s, r, i, a), Dd = null, (n & 335544064) === n ? (Od = Na(e), r = 10262) : (Od = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, yf(Xe, function() {
			return ff(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), zl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = D.T, D.T = null, i = O.p, O.p = 2, a = K, K |= 4;
			try {
				pu(e, t, n);
			} finally {
				K = a, O.p = i, D.T = r;
			}
		}
		yd = 1, zl ? Ed = Mp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
	}
	function af(e) {
		if (yd !== 0) {
			var t = bd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function of() {
		yd === 3 && (yd = 0, Pu(xd, bd), yd = 4);
	}
	function sf() {
		if (yd === 1) {
			yd = 0;
			var e = bd, t = xd, n = Sd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = D.T, D.T = null;
				var i = O.p;
				O.p = 2;
				var a = K;
				K |= 4;
				try {
					uu = du = !1, Au(t, e, n), n = cp;
					var o = Jr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && qr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Yr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Kr(s, h), v = Kr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					gh = !!sp, cp = sp = null;
				} finally {
					K = a, O.p = i, D.T = r;
				}
			}
			e.current = t, yd = 2;
		}
	}
	function cf() {
		if (yd === 2) {
			yd = 0;
			var e = bd, t = xd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = D.T, D.T = null;
				var r = O.p;
				O.p = 2;
				var i = K;
				K |= 4;
				try {
					hu(e, t.alternate, t);
				} finally {
					K = i, O.p = r, D.T = n;
				}
			}
			yd = 3;
		}
	}
	function lf() {
		if (yd === 4 || yd === 3) {
			yd = 0;
			var e = Ed;
			Ed = null, Ge();
			var t = bd, n = xd, r = Sd, i = Td, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? yd = 5 : (yd = 0, xd = bd = null, uf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (vd = null), Ct(r), n = n.stateNode, nt && typeof nt.onCommitFiberRoot == "function") try {
				nt.onCommitFiberRoot(tt, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = D.T, a = O.p, O.p = 2, D.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					D.T = n, O.p = a;
				}
			}
			if (i = Dd, o = Od, Od = null, i !== null && (Dd = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			Sd & 3 && df(), Ef(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Ad ? kd++ : (kd = 0, Ad = t) : (kd = 0, Ad = null), Df(0, !1);
		}
	}
	function uf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Aa(t)));
	}
	function df() {
		return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
	}
	function ff() {
		if (yd !== 5) return !1;
		var e = bd, t = Cd;
		Cd = 0;
		var n = Ct(Sd), r = D.T, a = O.p;
		try {
			O.p = 32 > n ? 32 : n, D.T = null, n = wd, wd = null;
			var o = bd, s = Sd;
			if (yd = 0, xd = bd = null, Sd = 0, K & 6) throw Error(i(331));
			var c = K;
			if (K |= 4, Yu(o.current), Vu(o, o.current, s, n), K = c, Df(0, !1), nt && typeof nt.onPostCommitFiberRoot == "function") try {
				nt.onPostCommitFiberRoot(tt, o);
			} catch {}
			return !0;
		} finally {
			O.p = a, D.T = r, uf(e, t);
		}
	}
	function pf(e, t, n) {
		t = Vi(n, t), t = Dc(e.stateNode, t, 2), e = ho(e, t, 2), e !== null && (_t(e, 2), Ef(e));
	}
	function Z(e, t, n) {
		if (e.tag === 3) pf(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				pf(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vd === null || !vd.has(r))) {
					e = Vi(n, e), n = Oc(2), r = ho(t, n, 2), r !== null && (kc(n, r, t, e), _t(r, 2), Ef(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function mf(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new $u();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (rd = !0, i.add(n), e = hf.bind(null, e, t, n), t.then(e, e));
	}
	function hf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, q === e && (Y & n) === n && (ad === 4 || ad === 3 && (Y & 62914560) === Y && 300 > Ke() - md ? K & 2 ? cd |= n : Vd(e, 0) : cd |= n, ud === Y && (ud = 0)), Ef(e);
	}
	function gf(e, t) {
		t === 0 && (t = ht()), e = Oi(e, t), e !== null && (_t(e, t), Ef(e));
	}
	function _f(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), gf(e, n);
	}
	function vf(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), gf(e, n);
	}
	function yf(e, t) {
		return He(e, t);
	}
	var bf = null, xf = null, Sf = !1, Cf = !1, wf = !1, Tf = 0;
	function Ef(e) {
		e !== xf && e.next === null && (xf === null ? bf = xf = e : xf = xf.next = e), Cf = !0, Sf || (Sf = !0, Nf());
	}
	function Df(e, t) {
		if (!wf && Cf) {
			wf = !0;
			do
				for (var n = !1, r = bf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - A(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Mf(r, a));
						} else a = Y, a = dt(r, r === q ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || ft(r, a) || (n = !0, Mf(r, a));
					}
					r = r.next;
				}
			while (n);
			wf = !1;
		}
	}
	function Of() {
		kf();
	}
	function kf() {
		Cf = Sf = !1;
		var e = 0;
		Tf !== 0 && hp() && (e = Tf);
		for (var t = Ke(), n = null, r = bf; r !== null;) {
			var i = r.next, a = Af(r, t);
			a === 0 ? (r.next = null, n === null ? bf = i : n.next = i, i === null && (xf = n)) : (n = r, (e !== 0 || a & 3) && (Cf = !0)), r = i;
		}
		yd !== 0 && yd !== 5 || Df(e, !1), Tf !== 0 && (Tf = 0);
	}
	function Af(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - A(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = mt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = q, n = Y, n = dt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (X === 2 || X === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ue(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || ft(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Ue(r), Ct(n)) {
				case 2:
				case 8:
					n = Ye;
					break;
				case 32:
					n = Xe;
					break;
				case 268435456:
					n = Qe;
					break;
				default: n = Xe;
			}
			return r = jf.bind(null, e), n = He(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Ue(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function jf(e, t) {
		if (yd !== 0 && yd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (df() && e.callbackNode !== n) return null;
		var r = Y;
		return r = dt(e, e === q ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Fd(e, r, t), Af(e, Ke()), e.callbackNode != null && e.callbackNode === n ? jf.bind(null, e) : null);
	}
	function Mf(e, t) {
		if (df()) return null;
		Fd(e, t, !0);
	}
	function Nf() {
		bp(function() {
			K & 6 ? He(Je, Of) : kf();
		});
	}
	function Pf() {
		if (Tf === 0) {
			var e = Ia;
			e === 0 && (e = st, st <<= 1, !(st & 261888) && (st = 256)), Tf = e;
		}
		return Tf;
	}
	function Ff(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : bn(e);
	}
	function If(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Ff((i[Ot] || null).action), o = r.submitter;
			o && (t = (t = o[Ot] || null) ? Ff(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Hn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Tf !== 0) {
								var e = new FormData(i, o);
								$s(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), $s(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Lf = 0; Lf < hi.length; Lf++) {
		var Rf = hi[Lf];
		gi(Rf.toLowerCase(), "on" + (Rf[0].toUpperCase() + Rf.slice(1)));
	}
	gi(si, "onAnimationEnd"), gi(ci, "onAnimationIteration"), gi(li, "onAnimationStart"), gi("dblclick", "onDoubleClick"), gi("focusin", "onFocus"), gi("focusout", "onBlur"), gi(ui, "onTransitionRun"), gi(di, "onTransitionStart"), gi(fi, "onTransitionCancel"), gi(pi, "onTransitionEnd"), Kt("onMouseEnter", ["mouseout", "mouseover"]), Kt("onMouseLeave", ["mouseout", "mouseover"]), Kt("onPointerEnter", ["pointerout", "pointerover"]), Kt("onPointerLeave", ["pointerout", "pointerover"]), Gt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Gt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Gt("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Gt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Gt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Gt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var zf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zf));
	function Vf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						xi(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						xi(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[At];
		n === void 0 && (n = t[At] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Gf(t, e, 2, !1), n.add(r));
	}
	function Hf(e, t, n) {
		var r = 0;
		t && (r |= 4), Gf(n, e, r, t);
	}
	var Uf = "_reactListening" + Math.random().toString(36).slice(2);
	function Wf(e) {
		if (!e[Uf]) {
			e[Uf] = !0, Ut.forEach(function(t) {
				t !== "selectionchange" && (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Uf] || (t[Uf] = !0, Hf("selectionchange", !1, t));
		}
	}
	function Gf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !jn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Kf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = Lt(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		On(function() {
			var r = a, i = Cn(n), s = [];
			a: {
				var c = mi.get(e);
				if (c !== void 0) {
					var l = Hn, u = e;
					switch (e) {
						case "keypress": if (Ln(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = ar;
							break;
						case "focusin":
							u = "focus", l = P;
							break;
						case "focusout":
							u = "blur", l = P;
							break;
						case "beforeblur":
						case "afterblur":
							l = P;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Yn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Xn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = cr;
							break;
						case si:
						case ci:
						case li:
							l = Zn;
							break;
						case pi:
							l = lr;
							break;
						case "scroll":
						case "scrollend":
							l = Wn;
							break;
						case "wheel":
							l = ur;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Qn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = or;
							break;
						case "submit":
							l = sr;
							break;
						case "toggle":
						case "beforetoggle": l = dr;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = kn(m, p), g != null && d.push(qf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== Sn && (u = n.relatedTarget || n.fromElement) && (Lt(u) || u[kt])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Lt(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Yn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = or, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : zt(c), h = l == null ? u : zt(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Lt(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? S(c, l, Yf) : null, c !== null && Xf(s, u, c, d, !1), l !== null && f !== null && Xf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? zt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = jr;
					else if (Tr(c)) {
						if (Mr) _ = Vr;
						else {
							_ = zr;
							var v = Rr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && _n(r.elementType) && (_ = jr) : _ = Br;
					if (_ &&= _(e, r)) {
						Er(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? zt(r) : window, e) {
					case "focusin":
						(Tr(v) || v.contentEditable === "true") && (Zr = v, Qr = r, $r = null);
						break;
					case "focusout":
						$r = Qr = Zr = null;
						break;
					case "mousedown":
						ei = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						ei = !1, ti(s, n, i);
						break;
					case "selectionchange": if (Xr) break;
					case "keydown":
					case "keyup": ti(s, n, i);
				}
				var y;
				if (pr) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else xr ? yr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (gr && n.locale !== "ko" && (xr || b !== "onCompositionStart" ? b === "onCompositionEnd" && xr && (y = In()) : (Nn = i, Pn = "value" in Nn ? Nn.value : Nn.textContent, xr = !0)), v = Jf(r, b), 0 < v.length && (b = new $n(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = br(n), y !== null && (b.data = y)))), (y = hr ? Sr(e, n) : Cr(e, n)) && (b = Jf(r, "onBeforeInput"), 0 < b.length && (v = new $n("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), If(s, e, r, n, i);
			}
			Vf(s, t);
		});
	}
	function qf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Jf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = kn(e, n), i != null && r.unshift(qf(e, i, a)), i = kn(e, t), i != null && r.push(qf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Yf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Xf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = kn(n, a), l != null && o.unshift(qf(n, l, c))) : i || (l = kn(n, a), l != null && o.push(qf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
	function $f(e) {
		return (typeof e == "string" ? e : "" + e).replace(Zf, "\n").replace(Qf, "");
	}
	function ep(e, t) {
		return t = $f(t), $f(e) === t;
	}
	function $(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || M(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && M(e, "" + r);
				else return;
				break;
			case "className":
				$t(e, "class", r);
				break;
			case "tabIndex":
				$t(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				$t(e, n, r);
				break;
			case "style":
				gn(e, r, o);
				return;
			case "data": if (t !== "object") {
				$t(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = bn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && $(e, t, "name", a.name, a, null), $(e, t, "formEncType", a.formEncType, a, null), $(e, t, "formMethod", a.formMethod, a, null), $(e, t, "formTarget", a.formTarget, a, null)) : ($(e, t, "encType", a.encType, a, null), $(e, t, "method", a.method, a, null), $(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = bn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = xn);
				return;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = bn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Q("beforetoggle", e), Q("toggle", e), Qt(e, "popover", r);
				break;
			case "xlinkActuate":
				en(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				en(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				en(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				en(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				en(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				en(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				en(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				en(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				en(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Qt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = vn.get(n) || n, Qt(e, n, r);
			else return;
		}
		j = !0;
	}
	function tp(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				gn(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") M(e, r);
				else if (typeof r == "number" || typeof r == "bigint") M(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = xn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Wt.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[Ot] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					j = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Qt(e, n, r);
				}
				return;
		}
		j = !0;
	}
	function np(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Q("error", e), Q("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: $(e, t, o, s, n, null);
					}
				}
				a && $(e, t, "srcSet", n.srcSet, n, null), r && $(e, t, "src", n.src, n, null);
				return;
			case "input":
				Q("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: $(e, t, r, d, n, null);
					}
				}
				un(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Q("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: $(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && fn(e, !!r, n, !0) : fn(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Q("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: $(e, t, s, c, n, null);
				}
				mn(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: $(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Q("beforetoggle", e), Q("toggle", e), Q("cancel", e), Q("close", e);
				break;
			case "iframe":
			case "object":
				Q("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < zf.length; r++) Q(zf[r], e);
				break;
			case "image":
				Q("error", e), Q("load", e);
				break;
			case "details":
				Q("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Q("error", e), Q("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: $(e, t, u, r, n, null);
				}
				return;
			default: if (_n(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && tp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && $(e, t, c, r, n, null));
	}
	var rp = {};
	function ip(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || $(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (j = !0), o = m;
							break;
						case "name":
							m !== f && (j = !0), a = m;
							break;
						case "checked":
							m !== f && (j = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (j = !0), d = m;
							break;
						case "value":
							m !== f && (j = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (j = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && $(e, t, p, m, r, f);
					}
				}
				ln(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || $(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (j = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (j = !0), c = o;
						break;
					case "multiple": o !== l && (j = !0), s = o;
					default: o !== l && $(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? fn(e, !!n, n ? [] : "", !1) : fn(e, !!n, t, !0)) : fn(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: $(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (j = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (j = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && $(e, t, s, a, r, o);
				}
				pn(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: $(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (j = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: $(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: $(e, t, u, p, r, m);
				}
				return;
			default: if (_n(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && tp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || tp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m);
	}
	function ap(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function op() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && ap(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && ap(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var sp = null, cp = null;
	function lp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function up(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function dp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function fp(e, t, n, r) {
		return n = lp(n).createElement(e), n[Dt] = r, n[Ot] = t, np(n, e, t), Vt(n), n;
	}
	function pp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var mp = null;
	function hp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== mp && (mp = e, !0) : (mp = null, !1);
	}
	var gp = typeof setTimeout == "function" ? setTimeout : void 0, _p = typeof clearTimeout == "function" ? clearTimeout : void 0, vp = typeof Promise == "function" ? Promise : void 0, yp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : gp, bp = typeof queueMicrotask == "function" ? queueMicrotask : vp === void 0 ? gp : function(e) {
		return vp.resolve(null).then(e).catch(xp);
	};
	function xp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Sp(e) {
		return e === "head";
	}
	function Cp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") _m(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, _m(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[Pt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && _m(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function wp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Tp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Ep(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Dp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Op(e) {
		return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function kp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Dp(t, n, e);
	}
	function Ap(e) {
		return e.documentElement.clientHeight;
	}
	function jp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Mp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Ap(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(jp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Np(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Np.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : C({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Np.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Np.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Pp(e) {
		return {
			name: e,
			group: new Np("group", e),
			imagePair: new Np("image-pair", e),
			old: new Np("old", e),
			new: new Np("new", e)
		};
	}
	function Fp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Fp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Bp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Rp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), f(this._fragmentFiber.child, !1, Ip, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Ip(e, t, n, r) {
		return _(e).addEventListener(t, n, r), !1;
	}
	Fp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Rp(i.optionsOrUseCapture), f(this._fragmentFiber.child, !1, Lp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Lp(e, t, n, r) {
		return _(e).removeEventListener(t, n, r), !1;
	}
	function Rp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function zp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Bp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = zp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Fp.prototype.dispatchEvent = function(e) {
		var t = p(this._fragmentFiber);
		if (t === null) return !0;
		t = _(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Fp.prototype.focus = function(e) {
		f(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
	};
	function Vp(e, t) {
		return e.tag !== 6 && (e = _(e), pm(e, t));
	}
	Fp.prototype.focusLast = function(e) {
		var t = [];
		f(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
	};
	function Hp(e, t) {
		return t.push(e), !1;
	}
	Fp.prototype.blur = function() {
		var e = p(this._fragmentFiber);
		e !== null && (e = _(e), e = lp(e).activeElement, e !== null && f(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = _(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Fp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), f(this._fragmentFiber.child, !1, Wp, e, void 0, void 0);
	};
	function Wp(e, t) {
		return e.tag !== 6 && (e = _(e), t.observe(e), !1);
	}
	Fp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), f(this._fragmentFiber.child, !1, Gp, e, void 0, void 0);
			for (var n = t = 0; n < Kp.length; n++) {
				var r = Kp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Kp[t++] = r;
			}
			Kp.length = t;
		}
	};
	function Gp(e, t) {
		return e.tag !== 6 && (e = _(e), t.unobserve(e), !1);
	}
	var Kp = [], qp = !1;
	function Jp(e, t, n) {
		Kp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), qp || (qp = !0, mm(function() {
			qp = !1;
			var e = Kp;
			Kp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Fp.prototype.getClientRects = function() {
		var e = [];
		return f(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e;
	};
	function Yp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = _(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Fp.prototype.getRootNode = function(e) {
		var t = p(this._fragmentFiber);
		return t === null ? this : _(t).getRootNode(e);
	}, Fp.prototype.compareDocumentPosition = function(e) {
		var t = p(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		f(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
		var r = _(t);
		if (n.length === 0) {
			if (n = r, m(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = h(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = _(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = _(n[0]), i = _(n[n.length - 1]);
		var a = m(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Xp(e, t, n, r, i) {
		var a = Lt(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = p(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = S(n, a, x), t === null ? t = !1 : (f(t, !0, b, a, n), a = v, v = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = S(r, a, x), t === null ? t = !1 : (f(t, !0, ee, a, r), a = v, y = v = null, t = a !== null)), t) : !1;
	}
	function Zp(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Fp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		f(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = h(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || p(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = _(r), Zp(e, n);
				return;
			}
			if (r = _(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = _(a), Zp(a, n)) : _(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function Qp(e, t) {
		return e = _(e), $p(e, t), !1;
	}
	function $p(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function em(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Kp.length; i++) {
				var a = Kp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
			}
			Kp.length = r, n.observe(e);
		}), $p(e, t));
	}
	function tm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Jp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function nm(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					nm(n), It(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function rm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[Pt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function im(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function am(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function om(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var um = null;
	function dm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function fm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function mm(e) {
		yp(function() {
			yp(function(t) {
				return e(t);
			});
		});
	}
	function hm(e, t, n) {
		switch (t = lp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function gm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === xn && (e.onclick = null), It(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		It(e);
	}
	var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
	function bm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var xm = O.d;
	O.d = {
		f: Sm,
		r: Cm,
		D: Em,
		C: Dm,
		L: Om,
		m: km,
		X: jm,
		S: Am,
		M: Mm
	};
	function Sm() {
		var e = xm.f(), t = zd();
		return e || t;
	}
	function Cm(e) {
		var t = Rt(e);
		t !== null && t.tag === 5 && t.type === "form" ? tc(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = cn(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), np(t, "link", e), Vt(t), r.head.appendChild(t)));
		}
	}
	function Em(e) {
		xm.D(e), Tm("dns-prefetch", e, null);
	}
	function Dm(e, t) {
		xm.C(e, t), Tm("preconnect", e, t);
	}
	function Om(e, t, n) {
		xm.L(e, t, n);
		var r = wm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + cn(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + cn(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + cn(n.imageSizes) + "\"]")) : i += "[href=\"" + cn(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Pm(e);
					break;
				case "script": a = Rm(e);
			}
			if (!(vm.has(a) || (e = C({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), vm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Fm(a)) || t === "script" && r.querySelector(zm(a))))) {
				var o = r.createElement("link");
				np(o, "link", e), t === "style" && (o[Ft] = !0, o.onload = o.onerror = function() {
					Ht(o);
				}), Vt(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + cn(r) + "\"][href=\"" + cn(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Rm(e);
			}
			if (!vm.has(a) && (e = C({
				rel: "modulepreload",
				href: e
			}, t), vm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(zm(a))) return;
				}
				r = n.createElement("link"), np(r, "link", e), Vt(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = Bt(r).hoistableStyles, a = Pm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Fm(a))) s.loading = 5;
				else {
					e = C({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = vm.get(a)) && Hm(e, n);
					var c = o = r.createElement("link");
					Vt(c), np(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Vm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function jm(e, t) {
		xm.X(e, t);
		var n = wm;
		if (n && e) {
			var r = Bt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = C({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Vt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Mm(e, t) {
		xm.M(e, t);
		var n = wm;
		if (n && e) {
			var r = Bt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = C({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Vt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var a = (a = Oe.current) ? bm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = Bt(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Pm(n.href);
					var o = Bt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Fm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = vm.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, vm.set(e, o)), Lm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = Bt(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Pm(e) {
		return "href=\"" + cn(e) + "\"";
	}
	function Fm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Im(e) {
		return C({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Lm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Ft]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Ft] = !0, t.onload = t.onerror = Ht.bind(null, t), np(t, "link", n), Vt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + cn(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + cn(n.href) + "\"]");
				if (r) return t.instance = r, Vt(r), r;
				var a = C({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Vt(r), np(r, "style", a), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Pm(n.href);
				var o = e.querySelector(Fm(a));
				if (o) return t.state.loading |= 4, t.instance = o, Vt(o), o;
				r = Im(n), (a = vm.get(a)) && Hm(r, a), o = (e.ownerDocument || e).createElement("link"), Vt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), np(o, "link", r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
			case "script": return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, Vt(a), a) : (r = n, (a = vm.get(o)) && (r = C({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Vt(a), np(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Vm(r, n.precedence, e));
		return t.instance;
	}
	function Vm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Hm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Wm = null;
	function Gm(e, t, n) {
		if (Wm === null) {
			var r = /* @__PURE__ */ new Map(), i = Wm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Wm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[Pt] || a[Dt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Km(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function qm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Jm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Ym(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Xm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Zm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
	}
	function Qm(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Pm(r.href), a = t.querySelector(Fm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Vt(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), Vt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), np(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var $m = 0;
	function eh(e, t) {
		return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > $m ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function th(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) ah(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function nh() {
		this.count--, th(this);
	}
	function rh() {
		this.imgCount--, th(this);
	}
	var ih = null;
	function ah(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ih = /* @__PURE__ */ new Map(), t.forEach(oh, e), ih = null, nh.call(e));
	}
	function oh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ih.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ih.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = nh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var sh = {
		$$typeof: oe,
		Provider: null,
		Consumer: null,
		_currentValue: xe,
		_currentValue2: xe,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.hiddenUpdates = gt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = L(3, null, null, t), e.current = a, a.stateNode = e, t = ka(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, fo(a), e;
	}
	function uh(e) {
		return e ? (e = I, e) : I;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = mo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = ho(e, r, t), n !== null && (Pd(n, e, t), go(n, e, t));
	}
	function fh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ph(e, t) {
		fh(e, t), (e = e.alternate) && fh(e, t);
	}
	function mh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Oi(e, 67108864);
			t !== null && Pd(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = jd();
			t = St(t);
			var n = Oi(e, t);
			n !== null && Pd(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = D.T;
		D.T = null;
		var a = O.p;
		try {
			O.p = 2, yh(e, t, n, r);
		} finally {
			O.p = a, D.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = D.T;
		D.T = null;
		var a = O.p;
		try {
			O.p = 8, yh(e, t, n, r);
		} finally {
			O.p = a, D.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Kf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = Rt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = ut(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - A(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Ef(a), !(K & 6) && (gd = Ke() + 500, Df(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Oi(a, 2), s !== null && Pd(s, a, 2), zd(), ph(a, 2);
					}
					if (a = bh(r), a === null && Kf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Kf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = Cn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = Lt(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return xh = e, null;
	}
	function Ch(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (qe()) {
				case Je: return 2;
				case Ye: return 8;
				case Xe:
				case Ze: return 32;
				case Qe: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var wh = !1, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Mh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Th = null;
				break;
			case "dragenter":
			case "dragleave":
				Eh = null;
				break;
			case "mouseover":
			case "mouseout":
				Dh = null;
				break;
			case "pointerover":
			case "pointerout":
				Oh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": kh.delete(t.pointerId);
		}
	}
	function Nh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Rt(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ph(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Th = Nh(Th, e, t, n, r, i), !0;
			case "dragenter": return Eh = Nh(Eh, e, t, n, r, i), !0;
			case "mouseover": return Dh = Nh(Dh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Fh(e) {
		var t = Lt(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, Tt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, Tt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Ih(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				Sn = r, n.target.dispatchEvent(r), Sn = null;
			} else return t = Rt(n), t !== null && mh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Lh(e, t, n) {
		Ih(e) && n.delete(t);
	}
	function Rh() {
		wh = !1, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
	}
	function zh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, wh || (wh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
	}
	var Bh = null;
	function Vh(e) {
		Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Bh === e && (Bh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Sh(r || n) === null) continue;
					break;
				}
				var a = Rt(n);
				a !== null && (e.splice(t, 3), t -= 3, $s(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return zh(t, e);
		}
		Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t);
		for (var n = 0; n < Ah.length; n++) {
			var r = Ah[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) Fh(n), n.blockedOn === null && Ah.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[Ot] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[Ot] || null) s = o.formAction;
					else if (Sh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		dh(n, jd(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), zd(), t[kt] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = wt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
			Ah.splice(n, 0, e), n === 0 && Fh(e);
		}
	};
	var Kh = n.version;
	if (Kh !== "19.3.0") throw Error(i(527, Kh, "19.3.0"));
	O.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = u(t), e = e === null ? null : d(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: D,
		reconcilerVersion: "19.3.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			tt = Jh.inject(qh), nt = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = Sc, s = Cc, c = wc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[kt] = t.current, Wf(e), new Wh(t);
	};
})), Xs = (/* @__PURE__ */ e(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = Ys();
})))();
//#endregion
//#region src/ui/useMenuDismiss.ts
function Zs() {
	let e = (0, U.useRef)(null);
	return (0, U.useEffect)(() => {
		let t = e.current;
		if (!t) return;
		let n = (e) => {
			t.querySelectorAll(":scope > details[open]").forEach((t) => {
				t !== e && (t.open = !1);
			});
		}, r = (e) => {
			let r = (e.target instanceof Element ? e.target.closest("summary") : null)?.parentElement;
			r instanceof HTMLDetailsElement && r.parentElement === t && n(r);
		}, i = (e) => {
			e.target instanceof Element && e.target.closest(".processing-window") || e.target instanceof Node && !t.contains(e.target) && n();
		}, a = (e) => {
			if (e.target instanceof Element && e.target.closest(".processing-window") || e.key !== "Escape" || !t.querySelector(":scope > details[open]") || e.target instanceof Element && e.target.closest("[data-menu-editing=\"true\"], [data-editing=\"true\"]")) return;
			let r = t.querySelector(":scope > details[open] > summary");
			n(), r?.focus(), e.preventDefault(), e.stopPropagation();
		};
		return t.addEventListener("click", r, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("keydown", a, !0), () => {
			t.removeEventListener("click", r, !0), document.removeEventListener("pointerdown", i, !0), document.removeEventListener("keydown", a, !0);
		};
	}, []), e;
}
//#endregion
//#region src/ui/ViewportToolbar.tsx
function Qs({ children: e, className: t }) {
	let n = Zs();
	return (0, U.useEffect)(() => {
		let e = n.current, t = e?.parentElement;
		if (!e || !t) return;
		let r = new ResizeObserver(() => t.style.setProperty("--viewport-toolbar-bottom", `${e.offsetTop + e.offsetHeight + 8}px`));
		return r.observe(e), () => {
			r.disconnect(), t.style.removeProperty("--viewport-toolbar-bottom");
		};
	}, [n]), /* @__PURE__ */ (0, W.jsx)("nav", {
		ref: n,
		className: t ? `viewport-toolbar ${t}` : "viewport-toolbar",
		"aria-label": "뷰포트 도구막대",
		children: e
	});
}
function $s({ name: e }) {
	return /* @__PURE__ */ (0, W.jsx)("svg", {
		viewBox: "0 0 20 20",
		"aria-hidden": "true",
		children: {
			menu: /* @__PURE__ */ (0, W.jsx)("path", { d: "M4 6h12M4 10h12M4 14h12" }),
			cube: /* @__PURE__ */ (0, W.jsxs)(W.Fragment, { children: [/* @__PURE__ */ (0, W.jsx)("path", { d: "m10 2 7 4v8l-7 4-7-4V6Z" }), /* @__PURE__ */ (0, W.jsx)("path", { d: "m3 6 7 4 7-4M10 10v8" })] }),
			lit: /* @__PURE__ */ (0, W.jsxs)(W.Fragment, { children: [/* @__PURE__ */ (0, W.jsx)("circle", {
				cx: "10",
				cy: "10",
				r: "7"
			}), /* @__PURE__ */ (0, W.jsx)("path", {
				d: "M10 3a7 7 0 0 1 0 14Z",
				fill: "currentColor"
			})] }),
			unlit: /* @__PURE__ */ (0, W.jsx)("circle", {
				cx: "10",
				cy: "10",
				r: "7"
			}),
			wireframe: /* @__PURE__ */ (0, W.jsxs)(W.Fragment, { children: [/* @__PURE__ */ (0, W.jsx)("path", { d: "m10 2 7 4v8l-7 4-7-4V6Z" }), /* @__PURE__ */ (0, W.jsx)("path", { d: "m3 6 14 8M17 6 3 14M10 2v16" })] }),
			world: /* @__PURE__ */ (0, W.jsxs)(W.Fragment, { children: [
				/* @__PURE__ */ (0, W.jsx)("circle", {
					cx: "10",
					cy: "10",
					r: "8"
				}),
				/* @__PURE__ */ (0, W.jsx)("ellipse", {
					cx: "10",
					cy: "10",
					rx: "4",
					ry: "8"
				}),
				/* @__PURE__ */ (0, W.jsx)("path", { d: "M2 10h16" })
			] }),
			local: /* @__PURE__ */ (0, W.jsx)(W.Fragment, { children: /* @__PURE__ */ (0, W.jsx)("path", { d: "M10 2v9l7 4M10 11l-7 4M7 5l3-3 3 3M14 15h3v-3M6 15H3v-3" }) }),
			grid: /* @__PURE__ */ (0, W.jsxs)(W.Fragment, { children: [/* @__PURE__ */ (0, W.jsx)("rect", {
				x: "2",
				y: "2",
				width: "16",
				height: "16",
				rx: "1"
			}), /* @__PURE__ */ (0, W.jsx)("path", { d: "M7 2v16M13 2v16M2 7h16M2 13h16" })] }),
			angle: /* @__PURE__ */ (0, W.jsx)(W.Fragment, { children: /* @__PURE__ */ (0, W.jsx)("path", { d: "M4 16h13M4 16 12 3M9 16a5 5 0 0 0-2-4" }) }),
			scale: /* @__PURE__ */ (0, W.jsxs)(W.Fragment, { children: [/* @__PURE__ */ (0, W.jsx)("path", { d: "M4 16 16 4M10 4h6v6" }), /* @__PURE__ */ (0, W.jsx)("rect", {
				x: "2",
				y: "13",
				width: "5",
				height: "5",
				fill: "currentColor"
			})] }),
			layout: /* @__PURE__ */ (0, W.jsxs)(W.Fragment, { children: [/* @__PURE__ */ (0, W.jsx)("rect", {
				x: "2",
				y: "2",
				width: "16",
				height: "16",
				rx: "2"
			}), /* @__PURE__ */ (0, W.jsx)("path", { d: "M10 2v16M2 10h16" })] })
		}[e]
	});
}
//#endregion
//#region src/ui/ViewportControls.tsx
function ec(e) {
	let t = e.currentTarget, n = t.querySelector(":scope > div");
	if (!t.open || !n) return;
	let r = t.getBoundingClientRect();
	n.style.maxHeight = `${Math.max(80, window.innerHeight - r.bottom - 16)}px`, n.style.left = `${Math.max(8, Math.min(r.left, window.innerWidth - n.offsetWidth - 8)) - r.left}px`;
}
function tc(e) {
	return {
		perspective: "원근",
		top: "상단",
		bottom: "하단",
		front: "정면",
		back: "후면",
		left: "좌측",
		right: "우측"
	}[e];
}
function nc({ value: e, onChange: t }) {
	return /* @__PURE__ */ (0, W.jsxs)("details", {
		className: "viewport-options-menu viewport-projection-menu",
		children: [/* @__PURE__ */ (0, W.jsxs)("summary", {
			"aria-label": "Viewport projection",
			children: [/* @__PURE__ */ (0, W.jsx)($s, { name: "cube" }), tc(e)]
		}), /* @__PURE__ */ (0, W.jsx)("div", { children: [
			"perspective",
			"top",
			"bottom",
			"front",
			"back",
			"left",
			"right"
		].map((n) => /* @__PURE__ */ (0, W.jsx)("button", {
			type: "button",
			"aria-pressed": e === n,
			onClick: (e) => {
				t(n), e.currentTarget.closest("details")?.removeAttribute("open");
			},
			children: tc(n)
		}, n)) })]
	});
}
function rc({ value: e, onChange: t }) {
	return /* @__PURE__ */ (0, W.jsxs)("details", {
		className: "viewport-options-menu viewport-view-menu",
		children: [/* @__PURE__ */ (0, W.jsxs)("summary", {
			"aria-label": "Viewport view mode",
			children: [/* @__PURE__ */ (0, W.jsx)($s, { name: e }), e === "lit" ? "라이팅포함" : e === "unlit" ? "언릿" : "와이어"]
		}), /* @__PURE__ */ (0, W.jsx)("div", { children: [
			"lit",
			"unlit",
			"wireframe"
		].map((n) => /* @__PURE__ */ (0, W.jsxs)("button", {
			type: "button",
			title: n === "unlit" ? "조명 없이 베이스 컬러 확인" : void 0,
			"aria-pressed": e === n,
			onClick: (e) => {
				t(n), e.currentTarget.closest("details")?.removeAttribute("open");
			},
			children: [/* @__PURE__ */ (0, W.jsx)($s, { name: n }), n === "lit" ? "라이팅" : n === "unlit" ? "언릿" : "와이어"]
		}, n)) })]
	});
}
//#endregion
//#region src/ui/RenderQualityMenu.tsx
function ic({ preset: e, status: t, disabled: n, onChange: r, children: i }) {
	let a = t.state === "failed" ? t.active : e;
	return /* @__PURE__ */ (0, W.jsxs)("details", {
		className: "viewport-options-menu render-quality-menu",
		children: [/* @__PURE__ */ (0, W.jsxs)("summary", {
			"aria-label": "Render Quality",
			title: t.state === "ready" ? "렌더링 품질 · 재질/텍스처/메시/LOD 품질과 별개" : t.message,
			children: [
				"Render Quality: ",
				cn[a].label,
				t.state === "preparing" ? " (준비 중)" : t.state === "failed" ? " (적용 실패)" : "",
				" ▾"
			]
		}), /* @__PURE__ */ (0, W.jsxs)("div", {
			"aria-label": "Render Quality 프리셋",
			children: [
				tn.map((e) => /* @__PURE__ */ (0, W.jsxs)("button", {
					type: "button",
					disabled: n,
					"aria-pressed": a === e,
					onClick: (t) => {
						r(e), t.currentTarget.closest("details")?.removeAttribute("open");
					},
					children: [/* @__PURE__ */ (0, W.jsx)("span", {
						"aria-hidden": "true",
						children: a === e ? "✓ " : ""
					}), cn[e].label]
				}, e)),
				i,
				t.state === "ready" ? null : /* @__PURE__ */ (0, W.jsxs)("span", {
					role: t.state === "failed" ? "alert" : "status",
					children: [
						t.message,
						" 현재 적용: ",
						cn[t.active].label
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/ui/editorPreferences.ts
var ac = "dt-editor-preference-error", oc = null;
function sc(e) {
	oc = `설정 저장 실패: ${e instanceof Error ? e.message : String(e)}`, typeof window < "u" && window.dispatchEvent(new CustomEvent(ac, { detail: oc }));
}
var cc = sc, lc = {
	getItem: (e) => {
		try {
			return typeof localStorage > "u" ? null : localStorage.getItem(e);
		} catch (e) {
			return cc(e), null;
		}
	},
	setItem: (e, t) => {
		try {
			localStorage.setItem(e, t);
		} catch (e) {
			cc(e);
		}
	}
};
function uc(e, t) {
	return t instanceof Set ? Array.isArray(e) && e.every((e) => typeof e == "string") : t === null ? e === null || typeof e == "string" : typeof t == "number" ? typeof e == "number" && Number.isFinite(e) : typeof t == "object" ? typeof e == "object" && !!e && Object.entries(t).every(([t, n]) => uc(e[t], n)) : typeof e == typeof t;
}
function dc(e, t, n, r) {
	try {
		let i = JSON.parse(e.getItem(t) ?? "null");
		return (r ? r(i) : uc(i, n)) ? n instanceof Set ? new Set(i) : i : n;
	} catch {
		return n;
	}
}
function fc(e, t, n) {
	e.setItem(t, JSON.stringify(n instanceof Set ? [...n] : n));
}
//#endregion
//#region src/ui/appExecutionPreferences.ts
var pc = {
	toneMapping: m.toneMapping,
	exposure: m.exposure,
	fog: m.fog
};
function mc(e) {
	try {
		return v({
			...m,
			...e
		}), !!e && typeof e == "object" && Object.keys(e).sort().join(",") === "exposure,fog,toneMapping";
	} catch {
		return !1;
	}
}
//#endregion
//#region src/ui/ScreenEffectsOptions.tsx
function hc({ effects: e, onChange: t, disabled: n }) {
	let [r, i] = (0, U.useState)(""), a = (n) => {
		try {
			let r = n(e);
			if (!mc(r)) throw Error("화면 효과 값이 허용 범위를 벗어났습니다.");
			t(r), i("");
		} catch (e) {
			i(e instanceof Error ? e.message : String(e));
		}
	}, o = (t, r, o) => /* @__PURE__ */ (0, W.jsx)(Ws, {
		label: t,
		value: r,
		validate: (t) => {
			try {
				if (!mc(o(e, t))) throw Error("화면 효과 값이 허용 범위를 벗어났습니다.");
				return i(""), { ok: !0 };
			} catch (e) {
				return i(e instanceof Error ? e.message : String(e)), { ok: !1 };
			}
		},
		onCommit: (e) => a((t) => o(t, e))
	}, `${t}:${r}:${n}`);
	return /* @__PURE__ */ (0, W.jsxs)("fieldset", {
		className: "screen-effects-options",
		disabled: n,
		children: [
			/* @__PURE__ */ (0, W.jsx)("legend", { children: "화면과 안개" }),
			/* @__PURE__ */ (0, W.jsxs)("label", { children: ["톤 매핑", /* @__PURE__ */ (0, W.jsxs)("select", {
				"aria-label": "효과 톤 매핑",
				value: e.toneMapping,
				onChange: (e) => a((t) => ({
					...t,
					toneMapping: e.target.value
				})),
				children: [/* @__PURE__ */ (0, W.jsx)("option", {
					value: "none",
					children: "원본 표시"
				}), /* @__PURE__ */ (0, W.jsx)("option", {
					value: "aces",
					children: "ACES Filmic"
				})]
			})] }),
			/* @__PURE__ */ (0, W.jsx)("fieldset", {
				disabled: e.toneMapping === "none",
				children: /* @__PURE__ */ (0, W.jsxs)("label", { children: ["노출", o("효과 노출", e.exposure, (e, t) => ({
					...e,
					exposure: t
				}))] })
			}),
			/* @__PURE__ */ (0, W.jsxs)("label", {
				className: "quality-checkbox",
				children: [/* @__PURE__ */ (0, W.jsx)("input", {
					type: "checkbox",
					"aria-label": "안개 켜기",
					checked: e.fog.enabled,
					onChange: (e) => a((t) => ({
						...t,
						fog: {
							...t.fog,
							enabled: e.target.checked
						}
					}))
				}), "거리 안개"]
			}),
			/* @__PURE__ */ (0, W.jsxs)("label", { children: ["안개 색", /* @__PURE__ */ (0, W.jsx)("input", {
				type: "color",
				"aria-label": "안개 색",
				value: "#" + e.fog.color.toString(16).padStart(6, "0"),
				onChange: (e) => a((t) => ({
					...t,
					fog: {
						...t.fog,
						color: parseInt(e.target.value.slice(1), 16)
					}
				}))
			})] }),
			["nearMeters", "farMeters"].map((t, n) => /* @__PURE__ */ (0, W.jsxs)("label", { children: [
				n ? "끝" : "시작",
				" 거리 (cm)",
				o(`안개 ${n ? "끝" : "시작"} cm`, e.fog[t] * 100, (e, n) => ({
					...e,
					fog: {
						...e.fog,
						[t]: n / 100
					}
				}))
			] }, t)),
			r ? /* @__PURE__ */ (0, W.jsx)("span", {
				role: "alert",
				children: r
			}) : null
		]
	});
}
//#endregion
//#region src/ui/EnvironmentIntensityInput.tsx
function gc({ value: e, onCommit: t, disabled: n, ariaLabel: r }) {
	let [i, a] = (0, U.useState)(null), [o, s] = (0, U.useState)(!1), c = (0, U.useRef)(null), l = (0, U.useRef)(null), d = () => {
		l.current !== null && clearTimeout(l.current), l.current = null, c.current = null, a(null), s(!1);
	};
	(0, U.useEffect)(() => {
		let e = () => {
			document.hidden && d();
		};
		return window.addEventListener("blur", d), document.addEventListener("visibilitychange", e), () => {
			l.current !== null && clearTimeout(l.current), window.removeEventListener("blur", d), document.removeEventListener("visibilitychange", e);
		};
	}, []), (0, U.useEffect)(() => {
		d();
	}, [e, n]);
	let f = () => {
		let n = c.current;
		if (n === null) return !0;
		let r = n.trim() === "" ? NaN : Number(n);
		return u(r) ? (d(), r !== e && t(r), !0) : (s(!0), !1);
	};
	return /* @__PURE__ */ (0, W.jsx)("input", {
		type: "number",
		"aria-label": r,
		className: "environment-intensity",
		disabled: n,
		min: 0,
		max: 4,
		step: .05,
		"data-menu-editing": i === null ? void 0 : "true",
		"aria-invalid": o,
		title: o ? "0~4 사이의 값을 입력하세요." : "환경광 강도 · 0~4 · Enter: 적용 · Esc: 취소",
		value: i ?? e,
		onChange: (e) => {
			c.current = e.target.value, a(e.target.value), s(!1);
		},
		onKeyDown: (e) => {
			e.nativeEvent.isComposing || (e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), d(), e.currentTarget.blur()), e.key === "Enter" && (e.preventDefault(), f() && e.currentTarget.blur()));
		},
		onBlur: () => {
			l.current = setTimeout(() => {
				l.current = null, !document.hasFocus() || document.hidden ? d() : f() || d();
			}, 0);
		}
	});
}
//#endregion
//#region src/ui/usePreference.ts
function _c(e, t, n) {
	let r = "dt-web-editor.preferences.v1." + e, [i, a] = (0, U.useState)(() => ({
		key: r,
		value: dc(lc, r, t, n)
	})), o = (0, U.useRef)(i), s = (0, U.useRef)({
		fallback: t,
		validate: n
	});
	s.current = {
		fallback: t,
		validate: n
	}, o.current.key !== r && (o.current = {
		key: r,
		value: dc(lc, r, t, n)
	});
	let c = i.key === r ? i.value : o.current.value;
	return (0, U.useEffect)(() => {
		if (i.key !== r) {
			a(o.current);
			return;
		}
		fc(lc, r, i.value);
	}, [r, i]), [c, (0, U.useCallback)((e) => {
		let t = o.current.key === r, n = t ? o.current.value : dc(lc, r, s.current.fallback, s.current.validate), i = typeof e == "function" ? e(n) : e;
		fc(lc, r, i), t && (o.current = {
			key: r,
			value: i
		}, a(o.current));
	}, [r])];
}
//#endregion
//#region src/ui/textureDisplayPreferences.ts
var vc = {
	version: 2,
	options: _(f),
	budget: 0,
	budgetMode: "auto"
};
function yc(e) {
	let t = _(e.options);
	return {
		...e,
		version: 2,
		options: {
			...t,
			maps: e.version === 2 || t.maps.length ? t.maps : [...f.maps]
		}
	};
}
function bc() {
	return yc(dc(lc, "dt-web-editor.preferences.v1.textureDisplay", vc, Cc));
}
var xc = (e) => Cc(e) && e.version === 2 && e.options.maxSize !== 0 && e.options.maxSize <= 512 && Object.values(e.options.mapMaxSizes ?? {}).every((e) => e <= 512), Sc = (e) => e.budgetMode === "manual" ? e.budget : 0;
function Cc(e) {
	try {
		let t = e;
		return !t || ![
			"budget,options",
			"budget,budgetMode,options",
			"budget,options,version",
			"budget,budgetMode,options,version"
		].includes(Object.keys(t).sort().join(",")) || t.version !== void 0 && t.version !== 2 || t.budgetMode !== void 0 && !["auto", "manual"].includes(t.budgetMode) ? !1 : (Re(t.options), Ze(t.budget), !0);
	} catch {
		return !1;
	}
}
//#endregion
//#region src/ui/ViewportColorGuidance.tsx
function wc({ controls: e, disabled: t, compact: n = !1 }) {
	return e.mode !== "lit" || e.environment && e.intensity > 0 ? null : /* @__PURE__ */ (0, W.jsxs)("div", {
		className: `texture-options-note${n ? " texture-color-guidance" : ""}`,
		children: [
			/* @__PURE__ */ (0, W.jsx)("p", { children: n ? `${e.environment ? "환경광 강도 0" : "환경광 꺼짐"} · 재질이 어둡게 보일 수 있습니다.` : /* @__PURE__ */ (0, W.jsxs)(W.Fragment, { children: [e.environment ? "환경광 강도가 0입니다." : "환경광이 꺼져 있습니다.", " 조명에 따라 금속 재질이 검게 보일 수 있습니다."] }) }),
			/* @__PURE__ */ (0, W.jsx)("button", {
				type: "button",
				"aria-label": "조명 없이 색상 확인",
				disabled: t,
				onClick: e.inspect,
				children: n ? "색상 확인" : "조명 없이 색상 확인"
			}),
			/* @__PURE__ */ (0, W.jsx)("button", {
				type: "button",
				disabled: t,
				onClick: e.light,
				children: "환경광 켜기"
			})
		]
	});
}
//#endregion
//#region src/ui/TextureOptionsMenu.tsx
var Tc = [
	["baseColor", "베이스 컬러"],
	["normal", "노멀"],
	["metallicRoughness", "메탈릭·러프니스"],
	["occlusion", "AO"],
	["emissive", "이미시브"],
	["specular", "스페큘러"]
], Ec = (e) => `${(e / 1048576).toFixed(1)} MiB`;
function Dc({ resources: e, disabled: t = !1, onBusy: n, autoApply: r = !0, colorControls: i, embedded: a = !1 }) {
	let o = e?.textureDisplay, s = !o || t, l = Zs(), u = (0, U.useRef)(null), [d, f] = _c("textureDisplay", bc(), xc), { options: p } = d, m = Sc(d), h = (e) => f((t) => ({
		...t,
		options: e
	})), g = (e) => f((t) => ({
		...t,
		budget: e,
		budgetMode: e === 0 ? "auto" : "manual"
	})), [_, v] = (0, U.useState)(!1), [y, b] = (0, U.useState)(""), [, ee] = (0, U.useState)(0);
	(0, U.useEffect)(() => {
		let e = !0;
		return c().then(() => {
			e && ee((e) => e + 1);
		}), () => {
			e = !1;
		};
	}, [o]);
	let [x, S] = (0, U.useState)(() => o?.options ?? {
		maxSize: 128,
		maps: []
	}), C = (0, U.useRef)({
		preferences: d,
		onBusy: n
	});
	(0, U.useEffect)(() => {
		C.current = {
			preferences: d,
			onBusy: n
		};
	}, [d, n]), (0, U.useEffect)(() => {
		if (!o || !r) return;
		let e = new AbortController(), t = setTimeout(() => {
			u.current = e, v(!0), C.current.onBusy(!0), o.apply(C.current.preferences.options, Sc(C.current.preferences), e.signal, b).then(() => {
				e.signal.aborted || (S(o.options), b("공통 텍스처 설정을 적용했습니다."));
			}).catch((t) => {
				e.signal.aborted || b("공통 설정 적용 실패: " + (t instanceof Error ? t.message : String(t)));
			}).finally(() => {
				u.current === e && (u.current = null, v(!1), C.current.onBusy(!1));
			});
		}, 0);
		return () => {
			clearTimeout(t), e.abort(), u.current?.abort(), u.current = null, C.current.onBusy(!1);
		};
	}, [o, r]), (0, U.useEffect)(() => () => {
		u.current?.abort();
	}, []);
	let w = new Set(o?.layouts.flatMap((e) => e.uses.map((e) => e.kind))), te = o?.estimate(p) ?? 0, T = te + (o?.current?.reservedBytes ?? 0), ne = m === 0 ? ie(o?.current?.reservedBytes ?? 0) : m, re = te > 0 && T > ne, ae = JSON.stringify(p) !== JSON.stringify(x) || m !== o?.budgetBytes;
	return /* @__PURE__ */ (0, W.jsx)("nav", {
		ref: l,
		"aria-label": "텍스처 옵션",
		className: `texture-options-toolbar${a ? " texture-options-embedded" : ""}`,
		onKeyDownCapture: (e) => {
			e.key === "Escape" && u.current?.abort();
		},
		onKeyDown: (e) => {
			l.current?.querySelector("details[open]") && e.stopPropagation();
		},
		children: /* @__PURE__ */ (0, W.jsxs)("details", {
			onToggle: (e) => {
				let t = e.currentTarget;
				if (!t.open) return;
				if (s) {
					t.open = !1;
					return;
				}
				let n = t.querySelector(".texture-options-popup"), r = t.getBoundingClientRect();
				n && !a && (n.style.left = `${Math.max(8, Math.min(r.left, window.innerWidth - n.offsetWidth - 8)) - r.left}px`);
			},
			children: [/* @__PURE__ */ (0, W.jsxs)("summary", {
				"aria-disabled": s,
				onClick: (e) => {
					s && e.preventDefault();
				},
				title: o ? t ? "레벨 편집 화면에서 조절할 수 있습니다." : void 0 : "Unreal에서 가져온 레벨을 열면 사용할 수 있습니다.",
				children: ["텍스처 옵션 ", /* @__PURE__ */ (0, W.jsx)("span", {
					"aria-hidden": "true",
					children: "▾"
				})]
			}), /* @__PURE__ */ (0, W.jsxs)("section", {
				className: "texture-options-popup",
				"aria-label": "텍스처 표시 옵션",
				children: [
					/* @__PURE__ */ (0, W.jsxs)("div", {
						className: "texture-options-fields",
						children: [/* @__PURE__ */ (0, W.jsxs)("label", {
							title: "모든 텍스처 맵 최대 512px",
							children: ["최대 크기", /* @__PURE__ */ (0, W.jsx)("select", {
								"aria-label": "표시 텍스처 최대 크기",
								value: p.maxSize,
								disabled: _ || t,
								onChange: (e) => h({
									...p,
									maxSize: Number(e.target.value)
								}),
								children: [
									128,
									256,
									512
								].map((e) => /* @__PURE__ */ (0, W.jsxs)("option", {
									value: e,
									children: [e, "px"]
								}, e))
							})]
						}), /* @__PURE__ */ (0, W.jsxs)("label", {
							title: "텍스처 표시에 사용할 메모리 한도",
							children: ["메모리 예산", /* @__PURE__ */ (0, W.jsxs)("select", {
								"aria-label": "텍스처 표시 메모리 예산",
								value: m,
								disabled: _ || t,
								onChange: (e) => g(Number(e.target.value)),
								children: [/* @__PURE__ */ (0, W.jsx)("option", {
									value: 0,
									children: "자동"
								}), ue.map((e) => /* @__PURE__ */ (0, W.jsxs)("option", {
									value: e,
									children: [e / 1048576, " MiB"]
								}, e))]
							})]
						})]
					}),
					/* @__PURE__ */ (0, W.jsxs)("fieldset", {
						disabled: _ || t,
						children: [/* @__PURE__ */ (0, W.jsx)("legend", { children: "사용할 맵" }), /* @__PURE__ */ (0, W.jsx)("div", {
							className: "texture-options-maps",
							children: Tc.map(([e, t]) => /* @__PURE__ */ (0, W.jsxs)("label", {
								title: w.has(e) ? void 0 : "현재 레벨에 이 맵이 없습니다.",
								children: [/* @__PURE__ */ (0, W.jsx)("input", {
									type: "checkbox",
									disabled: !w.has(e),
									checked: p.maps.includes(e),
									onChange: (t) => h({
										...p,
										maps: t.target.checked ? [...p.maps, e] : p.maps.filter((t) => t !== e)
									})
								}), t]
							}, e))
						})]
					}),
					x.maps.includes("baseColor") && i ? /* @__PURE__ */ (0, W.jsx)(wc, {
						compact: !0,
						controls: i,
						disabled: s || _
					}) : null,
					/* @__PURE__ */ (0, W.jsxs)("dl", {
						className: re ? "texture-options-estimate over-budget" : "texture-options-estimate",
						"aria-live": "polite",
						title: "텍스처 메모리 예약 추정입니다. 실제 GPU·전체 레벨 메모리와 다를 수 있습니다.",
						children: [
							/* @__PURE__ */ (0, W.jsxs)("div", { children: [/* @__PURE__ */ (0, W.jsx)("dt", { children: "적용 후" }), /* @__PURE__ */ (0, W.jsx)("dd", { children: Ec(te) })] }),
							/* @__PURE__ */ (0, W.jsxs)("div", { children: [/* @__PURE__ */ (0, W.jsx)("dt", { children: "교체 중" }), /* @__PURE__ */ (0, W.jsx)("dd", { children: Ec(T) })] }),
							/* @__PURE__ */ (0, W.jsxs)("div", { children: [/* @__PURE__ */ (0, W.jsx)("dt", { children: m === 0 ? "자동 한도" : "한도" }), /* @__PURE__ */ (0, W.jsx)("dd", { children: Ec(ne) })] })
						]
					}),
					/* @__PURE__ */ (0, W.jsx)("p", {
						className: "texture-options-note",
						title: "설정은 다음 레벨에도 사용합니다. 텍스처를 끄면 투명·마스크 표현이 단순해질 수 있습니다.",
						children: "공통 설정 자동 저장 · 원본 유지"
					}),
					re ? /* @__PURE__ */ (0, W.jsxs)("p", {
						role: "alert",
						children: ["메모리 부족 · ", m === 0 ? "다른 작업을 닫거나 크기를 줄이세요." : "자동 예산을 선택하거나 크기를 줄이세요."]
					}) : null,
					y ? /* @__PURE__ */ (0, W.jsx)("p", {
						role: "status",
						children: y
					}) : null,
					/* @__PURE__ */ (0, W.jsxs)("footer", { children: [
						/* @__PURE__ */ (0, W.jsx)("button", {
							type: "button",
							disabled: _ || t,
							title: "모든 텍스처 맵을 끕니다. 적용 후 화면에 반영됩니다.",
							onClick: () => h({
								...p,
								maps: []
							}),
							children: "모두 끄기"
						}),
						_ ? /* @__PURE__ */ (0, W.jsx)("button", {
							type: "button",
							onClick: () => u.current?.abort(),
							children: "적용 취소"
						}) : null,
						/* @__PURE__ */ (0, W.jsx)("button", {
							type: "button",
							disabled: !o || _ || t || !ae || re && m !== 0,
							onClick: () => {
								if (!o || u.current || t) return;
								let e = new AbortController();
								u.current = e, v(!0), n(!0), b("텍스처 준비 중…"), o.apply(p, m, e.signal, b).then(() => {
									e.signal.aborted || (S(o.options), b(o.options.maps.length ? "선택한 텍스처를 적용했습니다." : "텍스처 없이 표시합니다."));
								}).catch((t) => {
									u.current === e && b(e.signal.aborted ? "취소했습니다. 기존 표시를 유지합니다." : t instanceof Error ? t.message : String(t));
								}).finally(() => {
									u.current === e && (u.current = null, v(!1), n(!1));
								});
							},
							children: _ ? "적용 중…" : "적용"
						})
					] })
				]
			})]
		})
	});
}
//#endregion
//#region src/delivery/DeliveryViewportTools.tsx
function Oc({ viewer: e, immersive: t, leftOnly: n = !1 }) {
	let [, r] = (0, U.useState)(0), [i, a] = (0, U.useState)(pc), [o, s] = (0, U.useState)(!1), c = () => r((e) => e + 1);
	(0, U.useEffect)(() => (e.onViewChange = c, e.navigation.onAction = (n) => {
		if (n === "focus-selection" && e.focusSelection(), n === "toggle-immersive" && t(), n === "toggle-game-view") {
			let t = !e.helpers;
			e.helpers = t, e.grid.visible = t, e.invalidate(), c();
		}
	}, () => {
		e.onViewChange = void 0, e.navigation.onAction = void 0;
	}), [e, t]);
	let l = e.quality.snapshot();
	return (0, U.useEffect)(() => e.session.subscribe(c), [e]), /* @__PURE__ */ (0, W.jsxs)(Qs, {
		className: "delivery-viewport-tools",
		children: [
			/* @__PURE__ */ (0, W.jsxs)("details", {
				className: "viewport-options-menu viewport-main-menu",
				children: [/* @__PURE__ */ (0, W.jsx)("summary", {
					"aria-label": "뷰포트 옵션",
					children: /* @__PURE__ */ (0, W.jsx)($s, { name: "menu" })
				}), /* @__PURE__ */ (0, W.jsxs)("div", { children: [
					/* @__PURE__ */ (0, W.jsxs)("button", {
						onClick: t,
						children: ["뷰포트 최대화", /* @__PURE__ */ (0, W.jsx)("kbd", { children: "F11" })]
					}),
					/* @__PURE__ */ (0, W.jsxs)("button", {
						onClick: () => e.focusSelection(),
						children: ["선택에 초점", /* @__PURE__ */ (0, W.jsx)("kbd", { children: "F" })]
					}),
					/* @__PURE__ */ (0, W.jsx)("button", {
						onClick: () => e.fit(),
						children: "전체 맞춤"
					}),
					/* @__PURE__ */ (0, W.jsxs)("details", {
						className: "camera-options",
						open: !0,
						children: [/* @__PURE__ */ (0, W.jsx)("summary", { children: "카메라 설정" }), /* @__PURE__ */ (0, W.jsxs)("div", { children: [/* @__PURE__ */ (0, W.jsxs)("label", { children: ["속도 (m/s)", /* @__PURE__ */ (0, W.jsx)(Ws, {
							label: "Viewport camera speed",
							value: e.navigation.speed,
							validate: (e) => ({ ok: typeof e == "number" && Number.isFinite(e) && e >= .25 && e <= 64 }),
							onCommit: (t) => {
								e.navigation.setSpeed(t), c();
							}
						})] }), [
							[
								"horizontalFovDegrees",
								"수평 FOV",
								"Viewport horizontal FOV",
								1,
								179,
								1
							],
							[
								"orthographicWidthMeters",
								"Ortho 폭 (m)",
								"Viewport orthographic width",
								.1,
								void 0,
								.5
							],
							[
								"nearMeters",
								"Near (m)",
								"Viewport near clip",
								.001,
								void 0,
								.01
							],
							[
								"farMeters",
								"Far (m)",
								"Viewport far clip",
								1,
								void 0,
								10
							]
						].map(([t, n, r, i, a, o]) => /* @__PURE__ */ (0, W.jsxs)("label", { children: [n, /* @__PURE__ */ (0, W.jsx)("input", {
							type: "number",
							"aria-label": r,
							value: e.cameraSettings[t],
							min: i,
							max: a,
							step: o,
							disabled: t === "horizontalFovDegrees" ? e.projection !== "perspective" : t === "orthographicWidthMeters" && e.projection === "perspective",
							onChange: (n) => {
								let r = n.target.valueAsNumber;
								Number.isFinite(r) && r >= i && (a === void 0 || r <= a) && (t !== "nearMeters" || r < e.cameraSettings.farMeters) && (t !== "farMeters" || r > e.cameraSettings.nearMeters) && e.setCameraSettings({ [t]: r });
							}
						})] }, t))] })]
					}),
					/* @__PURE__ */ (0, W.jsx)("button", {
						"aria-label": "Toggle game view",
						"aria-pressed": !e.helpers,
						onClick: () => {
							let t = !e.helpers;
							e.helpers = t, e.grid.visible = t, e.invalidate(), c();
						},
						children: "게임 뷰"
					}),
					/* @__PURE__ */ (0, W.jsxs)("p", { children: [
						"우클릭 + WASD / QE 이동",
						/* @__PURE__ */ (0, W.jsx)("br", {}),
						"Alt + 좌클릭 회전 · 휠 확대",
						/* @__PURE__ */ (0, W.jsx)("br", {}),
						"가운데 버튼 드래그로 평행 이동"
					] })
				] })]
			}),
			/* @__PURE__ */ (0, W.jsx)(nc, {
				value: e.projection,
				onChange: (t) => e.setProjection(t)
			}),
			/* @__PURE__ */ (0, W.jsx)(rc, {
				value: e.mode,
				onChange: (t) => e.setMode(t)
			}),
			/* @__PURE__ */ (0, W.jsxs)(ic, {
				preset: l.requested,
				status: l,
				disabled: !1,
				onChange: (t) => {
					e.quality.apply(t);
				},
				children: [/* @__PURE__ */ (0, W.jsxs)("fieldset", { children: [
					/* @__PURE__ */ (0, W.jsx)("legend", { children: "환경광" }),
					/* @__PURE__ */ (0, W.jsxs)("label", {
						className: "quality-checkbox",
						children: [/* @__PURE__ */ (0, W.jsx)("input", {
							"aria-label": "Show environment lighting",
							type: "checkbox",
							checked: e.environment,
							onChange: (t) => {
								e.environment = t.target.checked, e.invalidate(), c();
							}
						}), "환경광"]
					}),
					/* @__PURE__ */ (0, W.jsxs)("label", { children: ["환경광 강도", /* @__PURE__ */ (0, W.jsx)(gc, {
						ariaLabel: "뷰포트 환경광 강도",
						value: e.environmentIntensity,
						disabled: !e.environment,
						onCommit: (t) => {
							e.environmentIntensity = t, e.invalidate(), c();
						}
					})] })
				] }), /* @__PURE__ */ (0, W.jsx)(hc, {
					effects: i,
					disabled: !1,
					onChange: (t) => {
						e.setScreenEffects(t), a(t);
					}
				})]
			}),
			/* @__PURE__ */ (0, W.jsxs)("details", {
				className: "viewport-options-menu viewport-show-menu",
				onToggle: ec,
				children: [/* @__PURE__ */ (0, W.jsx)("summary", { children: "표시" }), /* @__PURE__ */ (0, W.jsxs)("div", { children: [
					/* @__PURE__ */ (0, W.jsxs)("label", {
						title: "단일 원근·Lit·Viewport 품질에서 사용합니다. 로딩·선택 중에는 기존 표시로 돌아갑니다.",
						children: [/* @__PURE__ */ (0, W.jsx)("input", {
							"aria-label": "정적 메시 배칭",
							type: "checkbox",
							checked: e.staticBatchingEnabled,
							onChange: (t) => e.setStaticBatching(t.target.checked)
						}), "정적 메시 배칭 (실험적)"]
					}),
					e.staticBatchingEnabled && e.staticBatchingStatus.message ? /* @__PURE__ */ (0, W.jsx)("p", {
						role: "status",
						children: e.staticBatchingStatus.message
					}) : null,
					/* @__PURE__ */ (0, W.jsxs)("label", { children: [/* @__PURE__ */ (0, W.jsx)("input", {
						"aria-label": "Show grid",
						type: "checkbox",
						checked: e.grid.visible,
						onChange: (t) => {
							e.grid.visible = t.target.checked, e.invalidate(), c();
						}
					}), "그리드"] }),
					/* @__PURE__ */ (0, W.jsxs)("label", { children: [/* @__PURE__ */ (0, W.jsx)("input", {
						"aria-label": "Show editor helpers",
						type: "checkbox",
						checked: e.helpers,
						onChange: (t) => {
							e.helpers = t.target.checked, e.invalidate(), c();
						}
					}), "에디터 도우미"] }),
					/* @__PURE__ */ (0, W.jsxs)("label", { children: [/* @__PURE__ */ (0, W.jsx)("input", {
						"aria-label": "Show actor bounds",
						type: "checkbox",
						checked: e.bounds,
						onChange: (t) => e.setBounds(t.target.checked)
					}), "바운드"] }),
					/* @__PURE__ */ (0, W.jsx)(Dc, {
						embedded: !0,
						autoApply: !1,
						resources: e.session.release ? e.session : void 0,
						disabled: e.session.busy && !o,
						onBusy: s,
						colorControls: {
							mode: e.mode,
							environment: e.environment,
							intensity: e.environmentIntensity,
							inspect: () => e.setMode("unlit"),
							light: () => {
								e.environment = !0, e.environmentIntensity === 0 && (e.environmentIntensity = C.intensity), e.invalidate(), c();
							}
						}
					})
				] })]
			}),
			!n && /* @__PURE__ */ (0, W.jsxs)("div", {
				className: "viewport-tool-actions",
				children: [/* @__PURE__ */ (0, W.jsx)("button", {
					className: "viewport-layout-toggle",
					"aria-label": "선택에 초점",
					title: "선택에 초점 · F",
					onClick: () => e.focusSelection(),
					children: /* @__PURE__ */ (0, W.jsx)($s, { name: "cube" })
				}), /* @__PURE__ */ (0, W.jsx)("button", {
					className: "viewport-layout-toggle",
					"aria-label": "뷰포트 최대화",
					title: "뷰포트 최대화 · F11",
					onClick: t,
					children: /* @__PURE__ */ (0, W.jsx)($s, { name: "layout" })
				})]
			})
		]
	});
}
function kc(e, t, n, r = {}) {
	let i = (0, Xs.createRoot)(e);
	return i.render(/* @__PURE__ */ (0, W.jsx)(Oc, {
		viewer: t,
		immersive: n,
		leftOnly: r.leftOnly
	})), () => i.unmount();
}
//#endregion
//#region src/delivery/EquipmentPanel.ts
function Ac(e, t, n = e) {
	let r = (e, t = "", n = "") => {
		let r = document.createElement(e);
		return r.textContent = t, r.className = n, r;
	}, i = r("h3", "설비 목록"), a = r("input"), o = r("p"), s = r("div", "", "equipment-list"), c = r("div", "", "equipment-detail");
	a.type = "search", a.placeholder = "설비 ID / 이름 검색", a.setAttribute("aria-label", "설비 검색"), c.setAttribute("aria-label", "설비 상세"), e.append(i, a, o, s), n.append(c);
	let l;
	function u(e) {
		l = e, c.replaceChildren();
		for (let t of s.querySelectorAll("button")) t.setAttribute("aria-pressed", String(t.dataset.key === (e ? JSON.stringify([e.mountId, e.objectId]) : "")));
		if (!e) {
			c.append(r("p", "목록 또는 뷰포트에서 설비를 선택하세요.", "empty"), r("p", "설비의 위치·메시·서비스 연결 정보를 여기서 확인합니다.", "notice"));
			return;
		}
		let n = t.session.resolveEquipment(e);
		t.selectEquipment(e), c.append(r("h3", e.object.displayName.ko ?? Object.values(e.object.displayName)[0] ?? e.actorName), r("p", e.objectId, "identity"), r("span", n.available ? "● 표시 중 · 서비스 연결 가능" : "○ 현재 뷰포트에서 사용할 수 없음", "availability")), c.append(r("h4", "위치 · Unreal 좌표 (cm)"));
		let i = r("div", "", "position");
		for (let t of [
			"X",
			"Y",
			"Z"
		]) {
			let n = r("span");
			n.append(r("b", t, "axis-" + t.toLowerCase()), document.createTextNode(e.positionUeCm?.[t].toLocaleString("ko-KR", { maximumFractionDigits: 2 }) ?? "미지원")), i.append(n);
		}
		c.append(i, r("h4", "객체 연결"));
		let a = r("dl");
		for (let [t, n] of [
			["레벨", e.mountName],
			["액터", e.actorName],
			["메시", `${e.meshes.length}개`],
			["배치", e.spatialStatus === "static" ? "정적 배치" : e.spatialStatus]
		]) a.append(r("dt", t), r("dd", n));
		let o = r("button", "선택 설비 위치로 이동");
		o.disabled = !n.available, o.onclick = () => {
			try {
				t.focusEquipment(e);
			} catch (e) {
				c.append(r("p", String(e), "notice"));
			}
		}, c.append(a, o, r("h4", "서비스 연결 키"));
		let u = r("dl");
		for (let [t, n] of [
			["objectId", e.objectId],
			["mountId", e.mountId],
			["actorId", e.actorId]
		]) u.append(r("dt", t), r("dd", n));
		c.append(u);
		let d = r("details");
		d.append(r("summary", "▸ 연결 데이터 / JSON 보기"), r("pre", JSON.stringify({
			...n,
			capabilityExecution: "declarations-only"
		}, null, 2))), c.append(d, r("p", "PM 서비스에서 mountId + objectId로 연결하세요. 제어·센서 기능은 서비스 API를 연결한 뒤 사용할 수 있습니다.", "notice"));
	}
	function d() {
		let e = t.session.equipment, n = a.value.trim().toLocaleLowerCase(), i = (e?.placements ?? []).filter((e) => `${e.objectId} ${e.actorName} ${Object.values(e.object.displayName).join(" ")}`.toLocaleLowerCase().includes(n)), c = e?.catalogs.reduce((e, t) => e + t.bindings.unboundObjectIds.length, 0) ?? 0;
		o.textContent = `${i.length}개 설비 · 모델 미연결 ${c}개${i.length > 100 ? " · 처음 100개 표시" : ""}`, s.replaceChildren();
		for (let e of i.slice(0, 100)) {
			let n = r("button");
			n.dataset.key = JSON.stringify([e.mountId, e.objectId]), n.append(r("strong", e.object.displayName.ko ?? Object.values(e.object.displayName)[0] ?? e.actorName), r("small", e.objectId)), n.onclick = () => u(e), n.ondblclick = () => {
				t.session.resolveEquipment(e).available && t.focusEquipment(e);
			}, s.append(n);
		}
		u(l ? e?.placements.find((e) => e.mountId === l.mountId && e.objectId === l.objectId) : void 0);
	}
	a.oninput = d;
	let f = t.session.onChange, p = t.onEquipmentSelect;
	return t.session.onChange = () => {
		f?.(), d();
	}, t.onEquipmentSelect = (e) => {
		p?.(e), u(e[0]), e.length > 1 && c.append(r("p", `동시에 연결된 설비 ${e.length}개. 목록에서 선택하세요.`, "notice"));
	}, d(), () => {
		t.session.onChange = f, t.onEquipmentSelect = p, e.replaceChildren(), n !== e && n.replaceChildren();
	};
}
//#endregion
//#region src/delivery/BrowserChunkCache.ts
var jc = class {
	namespace;
	budget;
	entries = /* @__PURE__ */ new Map();
	bytes = 0;
	stamp;
	constructor(e, t = 256 * 1024 ** 2) {
		if (this.namespace = e, this.budget = t, !/^[a-zA-Z0-9_-]{1,80}$/.test(e) || !Number.isSafeInteger(t) || t < Un) throw Error("Invalid chunk cache configuration");
	}
	open() {
		return caches.open(`dt-chunks-v1-${this.namespace}`);
	}
	key(e) {
		if (!Xn(e)) throw Error("Invalid cache key");
		return new URL(`/__dt_chunk_cache/${e}`, location.origin).href;
	}
	async get(e) {
		let t = await (await this.open()).match(this.key(e));
		if (!t) return;
		if (Number(t.headers.get("content-length")) > Un) {
			await this.remove(e);
			return;
		}
		if (!t.body) return;
		let n = t.body.getReader(), r = new Uint8Array(Un), i = 0;
		try {
			for (;;) {
				let { done: e, value: t } = await n.read();
				if (e) break;
				if (i + t.length > Un) throw Error("Cached object exceeds chunk limit");
				r.set(t, i), i += t.length;
			}
			return r.slice(0, i);
		} finally {
			await n.cancel().catch(() => {}), n.releaseLock();
		}
	}
	async remove(e) {
		await (await this.open()).delete(this.key(e));
	}
	async put(e, t) {
		if (t.length > Un) throw Error("Cache chunk too large");
		await navigator.locks.request(`dt-chunk-cache-${this.namespace}`, async () => {
			let n = await this.open(), r = this.key(e);
			if (await n.match(r)) return;
			let i = new URL("/__dt_chunk_cache/index", location.origin).href, a = (await n.match(i))?.headers.get("x-dt-generation") ?? "";
			if (this.stamp !== a) {
				this.entries.clear(), this.bytes = 0;
				for (let e of await n.keys()) {
					if (e.url === i) continue;
					let t = await n.match(e), r = Number(t?.headers.get("content-length"));
					if (!Number.isSafeInteger(r) || r <= 0 || r > Un) {
						await n.delete(e);
						continue;
					}
					this.entries.set(e.url, r), this.bytes += r;
				}
			}
			for (let [e, r] of this.entries) {
				if (this.bytes + t.length <= this.budget) break;
				await n.delete(e), this.entries.delete(e), this.bytes -= r;
			}
			await n.put(r, new Response(t.slice().buffer, { headers: {
				"content-length": String(t.length),
				"content-type": "application/octet-stream"
			} })), this.entries.set(r, t.length), this.bytes += t.length, this.stamp = crypto.randomUUID();
			try {
				await n.put(i, new Response("", { headers: { "x-dt-generation": this.stamp } }));
			} catch (e) {
				throw this.stamp = void 0, e;
			}
		});
	}
};
//#endregion
//#region src/delivery/ApplicationManifest.ts
function Mc(e) {
	let t = e;
	if (!t || Object.keys(t).sort().join() !== "actors,candidateRelease,compositionId,kind,overrideRevision,previous,removed,reviewId,reviewRevision,rollbackOf,version" || t.kind !== "dt-application" || t.version !== 1 || typeof t.compositionId != "string" || !t.compositionId || !Xn(t.candidateRelease) || t.previous !== null && !Xn(t.previous) || t.rollbackOf !== null && !Xn(t.rollbackOf) || typeof t.overrideRevision != "string" || !t.overrideRevision || t.reviewId !== null && typeof t.reviewId != "string" || t.reviewRevision !== null && (!Number.isSafeInteger(t.reviewRevision) || t.reviewRevision < 1) || !Array.isArray(t.actors) || !Array.isArray(t.removed) || t.actors.length > 1e5 || P(t).length > 16 * 1024 ** 2) throw Error("Unsupported application manifest");
	let n = /* @__PURE__ */ new Set(), r = (e) => {
		let r = JSON.parse(e);
		if (!Array.isArray(r) || r.length !== 3 || r[0] !== t.compositionId || r[1] !== null && typeof r[1] != "string" || typeof r[2] != "string" || !r[2] || JSON.stringify(r) !== e || n.has(e)) throw Error("Invalid application actor key");
		n.add(e);
	};
	for (let e of t.actors) {
		if (!e || Object.keys(e).sort().join() !== "contentHash,key,sourceRelease" || !Xn(e.sourceRelease) || !Xn(e.contentHash)) throw Error("Invalid applied actor");
		r(e.key);
	}
	for (let e of t.removed) r(e);
	return structuredClone(t);
}
var Nc = (e) => k(P(Mc(e)));
async function Pc(e, t, n = new AbortController().signal) {
	let r = Mc(t), i = /* @__PURE__ */ new Map();
	for (let t of /* @__PURE__ */ new Set([r.candidateRelease, ...r.actors.map((e) => e.sourceRelease)])) {
		let a = await js(e, t, n);
		if (a.manifest.id !== r.compositionId) throw Error("Application composition mismatch");
		i.set(t, a);
	}
	let a = r.actors.map((e) => {
		let t = i.get(e.sourceRelease).actors.find((t) => t.key === e.key);
		if (!t || t.contentHash !== e.contentHash) throw Error("Application actor provenance mismatch");
		return structuredClone(t);
	}), o = new Map(a.map((e) => [e.key, e]));
	for (let e of a) for (let t of e.dependencies) if (!o.has(t)) throw Error("Application dependency missing");
	return {
		releaseHash: await Nc(r),
		manifest: i.get(r.candidateRelease).manifest,
		actors: a,
		levels: new Map([...i.values()].flatMap((e) => [...e.levels]))
	};
}
async function Fc(e, t, n, r, i) {
	if (!i.length || new Set(i).size !== i.length || n.releaseHash !== r.candidateRelease || n.manifest.id !== r.compositionId) throw Error("Invalid application selection");
	let a = /* @__PURE__ */ new Map();
	for (let e of t?.actors ?? []) a.set(e.key, {
		key: e.key,
		contentHash: e.contentHash,
		sourceRelease: e.placement.releaseHash
	});
	for (let e of i) {
		let t = r.changes.find((t) => t.key === e), i = r.decisions[e];
		if (!t || i?.decision !== "approved" || i.contentHash !== (t.afterHash ?? t.beforeHash)) throw Error("Actor is not approved for this candidate");
		let o = n.actors.find((t) => t.key === e);
		o ? a.set(e, {
			key: e,
			sourceRelease: n.releaseHash,
			contentHash: o.contentHash
		}) : a.delete(e);
	}
	let o = /* @__PURE__ */ new Map([[n.releaseHash, n]]);
	for (let t of new Set([...a.values()].map((e) => e.sourceRelease))) o.has(t) || o.set(t, await js(e, t));
	let s = new Map([...a.keys()].map((e) => [e, e])), c = /* @__PURE__ */ new Map();
	for (let e of a.values()) {
		let t = o.get(e.sourceRelease), n = t.actors.find((t) => t.key === e.key);
		if (n.placement.mountId === null) continue;
		let r = t.manifest.mounts.find((e) => e.id === n.placement.mountId), { level: i, ...a } = r, s = new TextDecoder().decode(P(a)), l = c.get(r.id);
		if (l && l !== s) throw Error("Mount placement changes require approving the complete mount together");
		c.set(r.id, s);
	}
	let l = (e) => {
		let t = s.get(e);
		if (!t) throw Error("Required actor was removed or withheld");
		return t === e ? e : l(t);
	};
	for (let e of a.values()) {
		let t = o.get(e.sourceRelease).actors.find((t) => t.key === e.key);
		if (!t || t.contentHash !== e.contentHash) throw Error("Invalid base provenance");
		for (let n of t.dependencies) s.set(l(e.key), l(n));
	}
	let u = /* @__PURE__ */ new Map();
	for (let e of a.values()) {
		let t = l(e.key);
		u.set(t, [...u.get(t) ?? [], e]);
	}
	for (let e of u.values()) {
		let t = [...o.values()].find((t) => e.every((e) => t.actors.some((t) => t.key === e.key && t.contentHash === e.contentHash)));
		if (!t) throw Error("Approve the complete attachment/Script dependency group together");
		for (let n of e) n.sourceRelease = t.releaseHash;
	}
	let d = Mc({
		kind: "dt-application",
		version: 1,
		compositionId: r.compositionId,
		previous: r.baseApplication,
		candidateRelease: r.candidateRelease,
		reviewId: r.id,
		reviewRevision: r.revision,
		overrideRevision: r.overrideRevision,
		actors: [...a.values()].sort((e, t) => e.key.localeCompare(t.key)),
		removed: (t?.actors ?? []).filter((e) => !a.has(e.key)).map((e) => e.key).sort(),
		rollbackOf: null
	});
	return await Pc(e, d), d;
}
//#endregion
//#region src/delivery/ApplicationReader.ts
async function Ic(e, t, n = new AbortController().signal) {
	let r = Mc(e), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
	for (let e of /* @__PURE__ */ new Set([r.candidateRelease, ...r.actors.map((e) => e.sourceRelease)])) {
		let r = new Oi(t(e));
		a.set(e, r), i.set(e, await js(r, e, n));
	}
	let o = /* @__PURE__ */ new Map();
	for (let [e, t] of i) for (let n of t.manifest.files) for (let t of n.chunks) o.set(Zn(t.hash), e);
	let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
	for (let e of i.values()) for (let t of e.manifest.files) l.set(t.hash, t);
	let u = async (e) => {
		let t = await k(e), n = [];
		for (let t = 0; t < e.length; t += Un) {
			let r = e.slice(t, t + Un), i = await k(r);
			s.set(Zn(i), r), n.push({
				hash: i,
				bytes: r.length
			});
		}
		return l.set(t, {
			hash: t,
			bytes: e.length,
			chunks: n
		}), t;
	}, d = (e) => u(P(e)), f = /* @__PURE__ */ new Map();
	for (let e of r.actors) {
		let t = i.get(e.sourceRelease).actors.find((t) => t.key === e.key);
		if (!t || t.contentHash !== e.contentHash) throw Error("Invalid application content");
		if (t.placement.mountId === null) continue;
		let n = JSON.stringify([e.sourceRelease, t.placement.mountId]);
		f.set(n, [...f.get(n) ?? [], e]);
	}
	let p = [], m = [], h = [], g = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
	for (let [e, t] of f) {
		let [n, r] = JSON.parse(e), a = i.get(n), o = a.manifest.mounts.find((e) => e.id === r), s = structuredClone(a.levels.get(o.level)), u = new Set(t.map((e) => JSON.parse(e.key)[2])), f = s.envelope.payload, y = {
			...s,
			envelope: {
				...s.envelope,
				payload: {
					...f,
					actors: f.actors.filter((e) => u.has(e.id)),
					authoring: {
						...f.authoring,
						actorFolders: f.authoring.actorFolders.filter((e) => u.has(e.actorId))
					}
				}
			}
		}, b = await d(y), ee = await k(P(e)), x = `${ee.slice(0, 8)}-${ee.slice(8, 12)}-4${ee.slice(13, 16)}-8${ee.slice(17, 20)}-${ee.slice(20, 32)}`, S = a.manifest.cells?.find((e) => e.level === o.level), C = a.manifest.spatial?.find((e) => e.level === o.level)?.bounds ?? null, w = S ? S.entries.map((e) => ({
			...e,
			actors: e.actors.filter((e) => u.has(e))
		})).filter((e) => e.actors.length) : [{
			id: "always",
			actors: [...u].sort(),
			bounds: y.envelope.payload.actors.some(zn) ? null : C
		}];
		Vn(y.envelope.payload, w), _.has(b) || (_.set(b, {
			level: b,
			size: S?.size ?? 10,
			entries: w
		}), v.set(b, {
			level: b,
			bounds: C
		})), c.set(x, r), p.push({
			...o,
			id: x,
			level: b
		}), m.push({
			hash: b,
			actors: u.size,
			bytes: s.blobs.reduce((e, t) => e + l.get(t.hash).bytes, 0)
		});
		for (let e of y.envelope.payload.actors) for (let t of e.components) t.type === "TestScript" && (t.scriptPackage && g.add(t.scriptPackage.codeHash), t.typeVersion === 3 && t.recovery && g.add(t.recovery.scriptPackage.codeHash));
		h.push(...(a.manifest.addonOverrides ?? []).filter((e) => e.target.mountId === r && u.has(e.target.actorId)).map((e) => ({
			...e,
			target: {
				...e.target,
				mountId: x
			}
		})));
	}
	let y = i.get(r.candidateRelease), b = r.actors.filter((e) => JSON.parse(e.key)[1] === null).map((e) => i.get(e.sourceRelease).manifest.objects.find((t) => t.id === JSON.parse(e.key)[2])), ee = S().filter((e) => g.has(e.reference.codeHash)).map((e) => ({
		...e,
		active: !1
	})), x = ee.length ? await u(new TextEncoder().encode(JSON.stringify(ee))) : null, { addonBundle: C, addonOverrides: w, ...te } = y.manifest, T = x !== null || h.length > 0, ne = nr({
		...te,
		version: T ? 5 : 4,
		contract: T ? "dt-static-composition-5" : "dt-static-composition-4",
		...T ? {
			addonBundle: x,
			addonOverrides: h
		} : {},
		objects: b,
		mounts: p,
		levels: [...new Map(m.map((e) => [e.hash, e])).values()],
		files: [...l.values()],
		spatial: [...v.values()],
		cells: [..._.values()]
	}), re = await k(P(ne));
	return s.set(Qn(re), P(ne)), await Pc(new Oi({ read: async (e, t, n) => {
		let r = e.startsWith("releases/") ? e.slice(9, -5) : o.get(e);
		if (!r || !a.has(r)) throw Error("Unknown provenance");
		return a.get(r).provider.read(e, t, n);
	} }), r, n), {
		reader: new Oi({
			authorize: async (e) => {
				for (let t of a.values()) await t.provider.authorize?.(e);
			},
			read: async (e, t, n) => {
				n.throwIfAborted();
				let r = s.get(e);
				if (r) {
					if (r.length > t) throw Error("Derived metadata limit");
					return r.slice();
				}
				let i = o.get(e);
				if (!i) throw Error("Unknown application object");
				return a.get(i).provider.read(e, t, n);
			}
		}),
		hash: re,
		revision: await Nc(r),
		aliases: c
	};
}
//#endregion
//#region src/delivery/RuntimeCapability.ts
var Lc = Object.freeze({
	packageId: "dt.mesh-motion",
	version: "1.0.0",
	codeHash: "c6b8244101f48f5c489d8da3edaa1f852a59612e3138c952c94c86aa9adfbd4d"
});
function Rc(e, t, n, r) {
	let i = /* @__PURE__ */ new Set(), a = [];
	for (let o of e.actors) for (let e of o.components) {
		if (e.type !== "TestScript") continue;
		let { reference: c, manifest: l } = s(e);
		if (l.sdkVersion === 5) {
			if (!l.environments.includes("delivery")) throw Error(`Addon does not support delivery: ${c.packageId}`);
			for (let e of l.capabilities) h(e, "delivery");
			a.push({
				actorId: o.id,
				componentId: e.id,
				targetComponentId: null,
				reference: c
			});
			continue;
		}
		let u = Xe(e);
		for (let e of u) {
			let a = o.components.find((t) => t.id === e.id);
			if (!a) throw Error("Script target must be owned");
			if (e.field.kind === "component-reference" && e.field.componentType === "StaticMesh") {
				if (a.type !== "StaticMesh" || a.mobility === "static") throw Error("Script target must be an owned movable StaticMesh");
				if (o.components.some((e) => e.type === "SkeletalMesh" || T(e) && e.attachmentParent)) throw Error("Delivery Script transform control does not support attached or skeletal actors");
				if (i.has(a.id)) throw Error("Competing Script transform writers");
				if (i.add(a.id), t && n && t.bindings.some((e) => e.key === sr({
					compositionId: n,
					mountId: r ?? null,
					actorId: o.id
				}) && e.presentation?.positionMeters)) throw Error("Host presentation and Script compete for actor transforms");
			}
		}
		a.push({
			actorId: o.id,
			componentId: e.id,
			targetComponentId: u[0]?.id ?? null,
			reference: c
		});
	}
	return a;
}
//#endregion
//#region src/runtime/RuntimeSignalState.ts
var zc = class {
	producerState;
	records = /* @__PURE__ */ new Map();
	time = 0;
	constructor(e) {
		this.producerState = e;
	}
	advance(e) {
		if (!Number.isFinite(e) || e <= 0 || !Number.isFinite(this.time + e)) throw Error("Invalid signal clock duration.");
		this.time += e;
	}
	claimed(e) {
		return this.records.has(e);
	}
	claim(e, t, n, r) {
		let i = this.records.get(e);
		if (i && i.producerId !== t && this.producerState(i.producerId) !== "removed") throw Error("Signal output already has a producer.");
		let a = i?.producerId === t ? i : {
			producerId: t,
			value: null,
			updatedAtSeconds: null,
			valid: !1,
			reason: null
		};
		this.records.set(e, a);
		let o = () => {
			if (n(), this.records.get(e) !== a) throw Error("Signal writer has been replaced.");
			if (this.producerState(t) !== "running") throw Error("Signal producer is not running.");
		};
		return Object.freeze({
			publish: (e) => {
				if (o(), !Number.isFinite(e)) throw Error("Signal value must be finite.");
				r(e), a.value = e, a.updatedAtSeconds = this.time, a.valid = !0, a.reason = null;
			},
			invalidate: (e) => {
				if (o(), typeof e != "string" || !e.trim() || e.length > 160) throw Error("Invalid signal reason.");
				a.valid = !1, a.reason = e;
			}
		});
	}
	invalidateProducer(e, t) {
		for (let n of this.records.values()) n.producerId === e && (n.valid = !1, n.reason = t);
	}
	untrackedWrite(e) {
		let t = this.records.get(e);
		t && (t.valid = !1, t.reason = "untracked-write");
	}
	read(e, t) {
		if (!Number.isFinite(t) || t < 0) throw Error("Signal max age must be finite and nonnegative.");
		let n = this.records.get(e), r = n ? this.producerState(n.producerId) : "none", i = n?.updatedAtSeconds === null || n?.updatedAtSeconds === void 0 ? null : this.time - n.updatedAtSeconds, a = [
			"idle",
			"disabled",
			"faulted",
			"removed"
		].includes(r), o = a ? "unavailable" : !n || n.updatedAtSeconds === null && !n.reason ? "uninitialized" : n.valid ? i > t ? "stale" : "valid" : "invalid";
		return Object.freeze({
			value: n?.value ?? null,
			quality: o,
			updatedAtSeconds: n?.updatedAtSeconds ?? null,
			ageSeconds: i,
			producerId: n?.producerId ?? null,
			producerState: r,
			reason: a ? `producer-${r}` : o === "stale" ? "max-age-exceeded" : n?.reason ?? null
		});
	}
	clear() {
		this.records.clear();
	}
};
//#endregion
//#region src/runtime/RuntimeComponents.ts
function Bc(e) {
	let { reference: t } = s(e), n = ao[t.codeHash] ?? gr(t.codeHash);
	if (typeof n != "function") throw Error("Installed Script factory is missing.");
	return n;
}
var Vc = class {
	owner;
	id;
	wantsEnabled = !0;
	wantsTick = !1;
	constructor(e, t) {
		this.owner = e, this.id = t.id;
	}
	get alive() {
		return this.owner.componentRuntime.isAlive(this);
	}
	get enabled() {
		return this.wantsEnabled;
	}
	set enabled(e) {
		this.owner.componentRuntime.assertAlive(this), this.wantsEnabled = e, this.owner.componentRuntime.reconcile(this);
	}
	get tickEnabled() {
		return this.wantsTick;
	}
	set tickEnabled(e) {
		this.owner.componentRuntime.assertAlive(this), this.wantsTick = e, e || this.owner.componentRuntime.signals.invalidateProducer(this.id, "producer-idle");
	}
	get requiredComponentIds() {
		return [];
	}
	onRegister() {}
	beginPlay() {}
	onEnable() {}
	onDisable() {}
	tick(e) {}
	endPlay() {}
	onUnregister() {}
	onDestroy() {}
	guardAsync(e, t) {
		e.then((e) => {
			this.alive && this.owner.componentRuntime.callback(this, "async", () => t(e));
		}, (e) => {
			this.alive && this.owner.componentRuntime.report(this, "async", e);
		});
	}
}, Hc = class extends Vc {
	static typeId = "TestData";
	typeId = "TestData";
	currentValue;
	get value() {
		return this.currentValue;
	}
	set value(e) {
		this.currentValue = e, this.owner.componentRuntime.signals.untrackedWrite(this.id);
	}
	setSignalValue(e) {
		this.currentValue = e;
	}
	constructor(e, t) {
		super(e, t), this.currentValue = t.value;
	}
}, Uc = class extends Vc {
	static typeId = "StaticMesh";
	typeId = "StaticMesh";
	getLocalTransform() {
		return this.owner.componentRuntime.assertAlive(this), this.owner.componentRuntime.spatial.get(this.id);
	}
	setLocalTransform(e) {
		this.owner.componentRuntime.assertAlive(this), this.owner.componentRuntime.spatial.set(this.id, e);
	}
}, Wc = class extends Vc {
	onRegister() {
		this.tickEnabled = !0;
	}
}, Gc = class extends Wc {
	static typeId = "TestScript";
	typeId = "TestScript";
	targetComponentId;
	ratePerSecond;
	scriptPackage;
	behavior = null;
	createBehavior;
	settings;
	schemaVersion;
	references;
	constructor(e, t, n) {
		super(e, t), this.createBehavior = n ?? Bc(t), this.schemaVersion = t.typeVersion === 1 ? 2 : t.typeVersion, this.settings = Object.freeze({ ...a(t) }), this.references = Xe(t), this.scriptPackage = s(t).reference, this.targetComponentId = t.targetComponentId, this.ratePerSecond = t.ratePerSecond;
	}
	get requiredComponentIds() {
		return [...new Set(this.references.map((e) => e.id))];
	}
	onRegister() {
		let e = this.sdkOwner(), t = (t) => {
			this.owner.componentRuntime.assertAlive(this);
			let n = s({
				typeVersion: this.schemaVersion,
				scriptPackage: this.scriptPackage
			}).manifest.settings.find((e) => e.key === t);
			if (!n || n.kind !== "component-reference" || n.componentType !== "TestData") throw Error("Setting is not a declared TestData Component reference.");
			let r = this.settings[t];
			return typeof r == "string" ? e.getComponentById(r) : void 0;
		}, n = (e) => {
			this.owner.componentRuntime.assertAlive(this);
			let t = s({
				typeVersion: this.schemaVersion,
				scriptPackage: this.scriptPackage
			}).manifest.settings.find((t) => t.key === e);
			if (!t || t.kind !== "component-reference" || t.componentType !== "StaticMesh") throw Error("Setting is not a declared StaticMesh reference.");
			let n = this.settings[e];
			if (typeof n != "string") return;
			let r = () => {
				this.owner.componentRuntime.assertAlive(this);
				let e = this.owner.getComponentById(n);
				if (!(e instanceof Uc)) throw Error("SDK StaticMesh handle is no longer alive.");
				return e;
			};
			return r(), Object.freeze({
				id: n,
				typeId: "StaticMesh",
				getLocalTransform: () => r().getLocalTransform(),
				setLocalTransform: (e) => r().setLocalTransform(e),
				setLocalPosition: (e) => r().setLocalTransform({
					...r().getLocalTransform(),
					positionMeters: e
				}),
				setLocalRotation: (e) => r().setLocalTransform({
					...r().getLocalTransform(),
					rotationXyzw: e
				}),
				setLocalScale: (e) => r().setLocalTransform({
					...r().getLocalTransform(),
					scale: e
				})
			});
		};
		for (let e of this.references) if (!(e.field.kind === "component-reference" && e.field.componentType === "StaticMesh" ? n(e.field.key) : t(e.field.key))) throw Error(`TestScript requires owned Component ${e.id}.`);
		let r = (e) => {
			if (this.owner.componentRuntime.assertAlive(this), s({
				typeVersion: this.schemaVersion,
				scriptPackage: this.scriptPackage
			}).manifest.sdkVersion !== 4) throw Error("Signal API requires SDK 4.");
			let n = t(e), r = n && this.owner.getComponentById(n.id);
			if (!(r instanceof Hc)) throw Error("Signal requires a declared TestData reference.");
			return r;
		};
		if (this.behavior = this.createBehavior(Object.freeze({
			id: this.id,
			owner: e,
			claimSignalOutput: (e) => {
				let t = r(e);
				return this.owner.componentRuntime.signals.claim(t.id, this.id, () => {
					r(e);
				}, (e) => t.setSignalValue(e));
			},
			readSignal: (e, t) => this.owner.componentRuntime.signals.read(r(e).id, t),
			settings: this.settings,
			getReference: t,
			requireReference: (e) => {
				let n = t(e);
				if (!n) throw Error(`Missing required Component reference ${e}.`);
				return n;
			},
			getMeshReference: n,
			requireMeshReference: (e) => {
				let t = n(e);
				if (!t) throw Error(`Missing required Mesh reference ${e}.`);
				return t;
			},
			setTickEnabled: (e) => {
				this.tickEnabled = e;
			},
			guardAsync: (e, t) => this.guardAsync(e, t)
		})), !this.behavior || typeof this.behavior != "object") throw Error("Invalid Script factory result.");
		this.behavior.onRegister?.();
	}
	beginPlay() {
		this.behavior?.beginPlay?.();
	}
	tick(e) {
		this.behavior?.tick?.(e);
	}
	onEnable() {
		this.behavior?.onEnable?.();
	}
	onDisable() {
		this.behavior?.onDisable?.();
	}
	endPlay() {
		this.behavior?.endPlay?.();
	}
	onUnregister() {
		this.behavior?.onUnregister?.();
	}
	onDestroy() {
		try {
			this.behavior?.onDestroy?.();
		} finally {
			this.behavior = null;
		}
	}
	sdkOwner() {
		let e = (e) => {
			let t = () => {
				this.owner.componentRuntime.assertAlive(this);
				let t = this.owner.getComponentById(e);
				if (!(t instanceof Hc)) throw Error("SDK TestData handle is no longer alive.");
				return t;
			};
			if (this.owner.componentRuntime.assertAlive(this), this.owner.getComponentById(e) instanceof Hc) return Object.freeze({
				id: e,
				typeId: "TestData",
				get value() {
					return t().value;
				},
				set value(e) {
					if (!Number.isFinite(e)) throw Error("SDK TestData value must be finite.");
					let n = t();
					if (n.owner.componentRuntime.signals.claimed(n.id)) throw Error("Use the claimed Signal writer.");
					n.value = e;
				}
			});
		}, t = () => (this.owner.componentRuntime.assertAlive(this), Object.freeze(this.owner.getComponents("TestData").map((t) => e(t.id))));
		return Object.freeze({
			id: this.owner.id,
			getComponent: () => t()[0],
			getComponents: t,
			getComponentById: e
		});
	}
}, Kc = class {
	testDataFactory;
	scriptFactory;
	constructor(e = (e, t) => new Hc(e, t), t = (e, t) => new Gc(e, t)) {
		this.testDataFactory = e, this.scriptFactory = t;
	}
	create(e, t) {
		if (t.ownerActorId !== e.id || !t.id) throw Error("Invalid runtime Component identity/version.");
		if (!re.has(t.type, t.typeVersion) || re.validate(t.type, t.typeVersion, t, "runtime").length) throw Error("Invalid runtime Component settings.");
		if (t.type === "TestScript" && ae(t), t.type === "StaticMesh" && !e.componentRuntime.spatial) throw Error("Missing spatial runtime state.");
		let n = t.type === "StaticMesh" ? new Uc(e, t) : t.type === "TestData" ? this.testDataFactory(e, structuredClone(t)) : this.scriptFactory(e, structuredClone(t));
		if (n.owner !== e || n.id !== t.id || n.typeId !== t.type) throw Error("Runtime factory identity mismatch.");
		return n;
	}
}, qc = class {
	id;
	componentRuntime;
	constructor(e, t) {
		this.id = e, this.componentRuntime = t;
	}
	getComponent(e) {
		return this.getComponents(e)[0];
	}
	getComponents(e) {
		return Object.freeze(this.componentRuntime.components(this).filter((t) => t.typeId === (typeof e == "string" ? e : e.typeId)));
	}
	getComponentById(e) {
		return this.componentRuntime.components(this).find((t) => t.id === e);
	}
	addComponent(e, t = {}) {
		return this.componentRuntime.add(this, e, t);
	}
	removeComponent(e) {
		this.componentRuntime.remove(this, e);
	}
}, Jc = class {
	sessionId;
	registry;
	hasOwner;
	spatial;
	diagnostics = [];
	signals = new zc((e) => {
		let t = this.entries.find((t) => t.component.id === e);
		return !t || t.dead || this.stopped ? "removed" : t.faulted ? "faulted" : t.component.enabled ? t.begun ? t.component.tickEnabled ? "running" : "idle" : "starting" : "disabled";
	});
	entries = [];
	scriptIdentities = /* @__PURE__ */ new Map();
	reservedIds = /* @__PURE__ */ new Set();
	depth = 0;
	flushing = !1;
	dirty = !1;
	stopped = !1;
	started = !1;
	serial = 0;
	constructor(e, t, n, r) {
		this.sessionId = e, this.registry = t, this.hasOwner = n, this.spatial = r;
	}
	reserve(e) {
		for (let t of e) this.reservedIds.add(t);
	}
	assertOwner(e) {
		if (this.stopped || e.componentRuntime !== this || !this.hasOwner(e)) throw Error("Actor is not alive in this RuntimeWorld.");
	}
	components(e) {
		return this.assertOwner(e), this.entries.filter((t) => !t.dead && t.component.owner === e).map((e) => e.component);
	}
	scriptDiagnostics() {
		let e = new Map(this.entries.map((e) => [e.component.id, e])), t = /* @__PURE__ */ new Map();
		for (let e of this.diagnostics) {
			if (e.typeId !== "TestScript") continue;
			let n = t.get(e.componentId) ?? [];
			n.push(Object.freeze({ ...e })), t.set(e.componentId, n);
		}
		return Object.freeze([...this.scriptIdentities.values()].map((n) => {
			let r = e.get(n.id), i = this.stopped ? "stopped" : !r || r.dead ? "removed" : r.faulted ? "faulted" : r.begun ? r.component.enabled ? r.component.tickEnabled ? "running" : "idle" : "disabled" : "starting";
			return Object.freeze({
				...n,
				state: i,
				errors: Object.freeze(t.get(n.id) ?? [])
			});
		}));
	}
	construct(e, t) {
		if (this.assertOwner(e), this.entries.some((e) => e.component.id === t.id)) throw Error("Duplicate runtime Component ID.");
		let n = this.registry.create(e, t);
		return this.entries.push({
			component: n,
			registered: !1,
			begun: !1,
			active: !1,
			dead: !1,
			faulted: !1,
			cleaned: !1
		}), n.typeId === "TestScript" && this.scriptIdentities.set(n.id, Object.freeze({
			id: n.id,
			actorId: e.id,
			scriptPackage: Object.freeze({ ...n.scriptPackage })
		})), this.reservedIds.add(t.id), n;
	}
	start() {
		this.batch(() => {
			let e = this.executionOrder();
			for (let t of e) this.initialize(t, "onRegister", !0);
			for (let t of e) this.initialize(t, "beginPlay", !0), this.activate(t, !0);
			if (this.stopped) throw Error("Component startup was canceled.");
			this.started = !0;
		});
	}
	add(e, t, n) {
		if (this.assertOwner(e), !this.started) throw Error("Components can only be added after World startup.");
		let r;
		do
			r = `${this.sessionId}:component:${++this.serial}`;
		while (this.reservedIds.has(r));
		let i = Qe.create(t, e.id, r, n);
		if (i.type === "TestScript") {
			for (let t of Xe(i)) if (t.field.kind !== "component-reference" || e.getComponentById(t.id)?.typeId !== t.field.componentType) throw Error("TestScript requires owned Component of the declared type.");
		}
		let a = this.construct(e, i);
		try {
			this.executionOrder();
		} catch (e) {
			throw this.entries.find((e) => e.component === a).dead = !0, this.depth || this.flush(), e;
		}
		return this.dirty = !0, this.depth || this.flush(), a;
	}
	remove(e, t) {
		this.assertOwner(e);
		let n = this.entries.find((n) => !n.dead && n.component.owner === e && n.component.id === t);
		if (!n) throw Error("Only an owned live runtime behavior Component can be removed.");
		if (n.component.typeId === "StaticMesh") throw Error("Runtime spatial removal is not supported.");
		if (this.entries.some((n) => !n.dead && n.component.owner === e && n.component.requiredComponentIds.includes(t))) throw Error("Component is required by a live Script; remove that Script first.");
		n.dead = !0, this.dirty = !0, this.depth || this.flush();
	}
	isAlive(e) {
		return !this.stopped && this.hasOwner(e.owner) && this.entries.some((t) => t.component === e && !t.dead);
	}
	assertAlive(e) {
		if (!this.isAlive(e)) throw Error("Component is no longer alive.");
	}
	reconcile(e) {
		this.assertAlive(e), e.enabled || this.signals.invalidateProducer(e.id, "producer-disabled"), this.dirty = !0, this.depth || this.flush();
	}
	tick(e) {
		this.signals.advance(e), this.batch(() => {
			for (let t of this.executionOrder()) if (!this.stopped && !t.dead && !t.faulted && t.active && t.component.enabled && t.component.tickEnabled && this.isAlive(t.component)) {
				if (this.failedDependency(t)) {
					this.report(t.component, "dependency", /* @__PURE__ */ Error("Required Component failed."));
					continue;
				}
				this.callback(t.component, "tick", () => t.component.tick(e));
			}
		});
	}
	stop() {
		if (!this.stopped) {
			this.stopped = !0, this.signals.clear(), this.dirty = !0;
			for (let e of this.entries) e.dead = !0;
			this.depth || this.flush();
		}
	}
	callback(e, t, n) {
		this.isAlive(e) && !this.entries.find((t) => t.component === e)?.faulted && this.batch(() => {
			try {
				n();
			} catch (n) {
				this.report(e, t, n);
			}
		});
	}
	report(e, t, n) {
		this.diagnostics.push({
			actorId: e.owner.id,
			componentId: e.id,
			typeId: e.typeId,
			hook: t,
			message: n instanceof Error ? n.message : String(n)
		});
		let r = this.entries.find((t) => t.component === e);
		r && (r.faulted = !0), this.signals.invalidateProducer(e.id, "producer-faulted"), this.depth || this.flush();
	}
	batch(e) {
		this.depth++;
		try {
			e();
		} finally {
			this.depth--, this.depth || this.flush();
		}
	}
	executionOrder() {
		let e = this.entries.filter((e) => !e.dead), t = new Map(e.map((e) => [e.component.id, e])), n = [], r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = (e) => {
			if (r.has(e)) throw Error("Runtime Component dependency cycle.");
			if (!i.has(e)) {
				r.add(e);
				for (let n of e.component.requiredComponentIds) {
					let r = t.get(n);
					if (!r || r.component.owner !== e.component.owner) throw Error(`Missing owned Component dependency ${n}.`);
					a(r);
				}
				r.delete(e), i.add(e), n.push(e);
			}
		};
		return e.sort((e, t) => e.component.id < t.component.id ? -1 : +(e.component.id > t.component.id)).forEach(a), n;
	}
	hook(e, t, n = !1) {
		this.depth++;
		try {
			e.component[t]();
		} catch (r) {
			if (this.report(e.component, t, r), n) throw r;
		} finally {
			this.depth--;
		}
	}
	initialize(e, t, n) {
		if (!(e.dead || e.faulted || this.stopped)) {
			if (this.failedDependency(e)) {
				let t = /* @__PURE__ */ Error("Required Component failed.");
				if (this.report(e.component, "dependency", t), n) throw t;
				return;
			}
			t === "onRegister" ? e.registered = !0 : e.begun = !0, this.hook(e, t, n);
		}
	}
	failedDependency(e) {
		return e.component.requiredComponentIds.some((t) => !this.entries.some((n) => n.component.id === t && n.component.owner === e.component.owner && !n.dead && !n.faulted));
	}
	activate(e, t = !1) {
		let n = !this.stopped && !e.dead && !e.faulted && e.begun && e.component.enabled;
		n !== e.active && (e.active = n, this.hook(e, n ? "onEnable" : "onDisable", t));
	}
	flush() {
		if (this.flushing) {
			this.dirty = !0;
			return;
		}
		this.flushing = !0;
		try {
			do {
				this.dirty = !1;
				for (let e of this.entries) this.started && !e.dead && !e.registered && (this.initialize(e, "onRegister", !1), this.initialize(e, "beginPlay", !1), e.faulted && (e.dead = !0)), this.activate(e), e.dead && e.active && this.activate(e), e.active && (e.dead || e.faulted || !e.component.enabled) && (this.dirty = !0), e.dead && !e.cleaned && (e.cleaned = !0, e.begun && this.hook(e, "endPlay"), e.registered && this.hook(e, "onUnregister"), this.hook(e, "onDestroy"));
				for (let e = this.entries.length - 1; e >= 0; e--) this.entries[e].cleaned && this.entries.splice(e, 1);
			} while (this.dirty);
		} finally {
			this.flushing = !1;
		}
	}
}, Yc = class {
	records = /* @__PURE__ */ new Map();
	children = /* @__PURE__ */ new Map();
	overrides = /* @__PURE__ */ new Map();
	worldMatrices = /* @__PURE__ */ new Map();
	sources;
	physics;
	stopped = !1;
	constructor(e) {
		this.sources = new Map(e.authoring.ueImport?.components.map((e) => [e.webId, e]) ?? []);
		for (let t of e.actors) for (let e of t.components.filter(T)) {
			let n = e.id === t.rootComponentId ? e.attachmentParent?.componentId ?? null : e.parentComponentId;
			this.records.set(e.id, {
				component: e,
				parentId: n
			}), n && this.children.set(n, [...this.children.get(n) ?? [], e.id]);
		}
	}
	localOverride = (e) => this.overrides.get(e);
	readWorldTransform(e) {
		if (this.stopped) throw Error("Spatial World is no longer alive.");
		let t = /* @__PURE__ */ new Set(), n = (e) => {
			let r = this.records.get(e);
			if (!r || t.has(e)) throw Error("Invalid spatial hierarchy.");
			if (r.component.attachmentParent?.kind === "bone" || r.component.attachmentParent?.kind === "socket") throw Error("scene.read transform does not support runtime bone/socket anchors.");
			t.add(e);
			let i = r.parentId ? n(r.parentId) : ve;
			return t.delete(e), je(i, be(this.overrides.get(e) ?? r.component.localTransform));
		};
		return Le(n(e));
	}
	bindPhysics(e, t) {
		if (this.stopped || this.physics) throw Error("Spatial physics binding is unavailable.");
		let n = new Map(t.map((e) => [e.componentId, e.bodyId]));
		if (n.size !== t.length || new Set(n.values()).size !== t.length) throw Error("Duplicate spatial collider binding.");
		let r = [...n].map(([e, t]) => {
			if (!this.records.has(e)) throw Error("Unknown spatial collider Component.");
			return {
				actorId: t,
				transform: Le(this.worldMatrix(e))
			};
		});
		e.prepareSpatialUpdate(r)(), this.physics = {
			world: e,
			bodies: n
		};
	}
	worldMatrix(e, t = /* @__PURE__ */ new Set()) {
		let n = this.worldMatrices.get(e);
		if (n) return n;
		let r = this.records.get(e);
		if (!r || t.has(e)) throw Error("Invalid spatial hierarchy.");
		if (r.component.type === "SkeletalMesh" || r.component.attachmentParent?.kind === "bone" || r.component.attachmentParent?.kind === "socket") throw Error("Spatial colliders do not support skeletal anchors.");
		t.add(e);
		let i = je(r.parentId ? this.worldMatrix(r.parentId, t) : ve, be(this.overrides.get(e) ?? r.component.localTransform));
		return Le(i), t.delete(e), this.worldMatrices.set(e, i), i;
	}
	get(e) {
		if (this.stopped) throw Error("Spatial Component is no longer alive.");
		let t = this.records.get(e);
		if (t?.component.type !== "StaticMesh") throw Error("Spatial API requires a StaticMesh.");
		return structuredClone(this.overrides.get(e) ?? t.component.localTransform);
	}
	set(e, t) {
		if (this.get(e), !t || Object.keys(t).sort().join(",") !== "positionMeters,rotationXyzw,scale") throw Error("Invalid spatial transform fields.");
		for (let [e, n] of [
			["positionMeters", 3],
			["rotationXyzw", 4],
			["scale", 3]
		]) if (!Array.isArray(t[e]) || t[e].length !== n || !t[e].every(Number.isFinite)) throw Error("Spatial transform values must be finite tuples.");
		if (Math.abs(Math.hypot(...t.rotationXyzw) - 1) > 1e-6) throw Error("Spatial rotation must be a normalized XYZW quaternion.");
		let n = /* @__PURE__ */ new Set(), r = (e) => {
			if (n.has(e)) throw Error("Invalid spatial hierarchy.");
			n.add(e);
			for (let t of this.children.get(e) ?? []) r(t);
		};
		r(e);
		let i = structuredClone(t), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), s = (t) => {
			let r = a.get(t);
			if (r) return r;
			if (!n.has(t)) return this.worldMatrix(t);
			let c = this.records.get(t);
			if (!c || o.has(t)) throw Error("Invalid spatial hierarchy.");
			let l = c.component;
			if (l.type === "SkeletalMesh" || l.attachmentParent?.kind === "bone" || l.attachmentParent?.kind === "socket") throw Error("Script transform control does not support skeletal/bone/socket hierarchies.");
			o.add(t);
			let u = je(c.parentId ? s(c.parentId) : ve, be(t === e ? i : this.overrides.get(t) ?? l.localTransform));
			Le(u);
			let d = this.sources.get(t);
			for (let e of d?.instances ?? []) Le(je(u, be(e.transform)));
			return o.delete(t), a.set(t, u), u;
		}, c = (e) => {
			let t = this.records.get(e)?.component;
			if (t?.type === "StaticMesh" && t.mobility === "static") throw Error(`Static 메시의 Play 변환은 잠겨 있습니다. 움직일 컴포넌트를 웹에서 Movable로 지정하세요: ${e}`);
			s(e);
			for (let t of this.children.get(e) ?? []) c(t);
		};
		c(e);
		let l = this.physics ? [...n].flatMap((e) => {
			let t = this.physics.bodies.get(e);
			return t ? [{
				actorId: t,
				transform: Le(a.get(e))
			}] : [];
		}) : [];
		l.length && this.physics.world.prepareSpatialUpdate(l)(), Object.freeze(i.positionMeters), Object.freeze(i.rotationXyzw), Object.freeze(i.scale), this.overrides.set(e, Object.freeze(i));
		for (let e of n) this.worldMatrices.set(e, a.get(e));
	}
	stop() {
		this.stopped = !0, this.overrides.clear(), this.worldMatrices.clear(), this.physics = void 0;
	}
}, Xc = class {
	factories = /* @__PURE__ */ new Map();
	register(e, t) {
		if (this.factories.has(e)) throw Error(`Duplicate runtime class ${e}.`);
		this.factories.set(e, t);
	}
	create(e, t) {
		let n = this.factories.get(e);
		if (!n) throw Error(`Unregistered runtime class ${e}.`);
		return n(t);
	}
}, Zc = class {
	pawn = null;
	possess(e) {
		if (!("position" in e)) throw Error("Only a live Pawn can be possessed.");
		this.pawn = e;
	}
	unpossess() {
		this.pawn = null;
	}
}, Qc = class {
	snapshot;
	registry;
	config;
	sessionId;
	sourceHash;
	abortController = new AbortController();
	actors = /* @__PURE__ */ new Map();
	components;
	spatial;
	controller = new Zc();
	animationPlayback;
	state = "stopped";
	controlState = "editor";
	simulationTime = 0;
	tickCount = 0;
	timers = /* @__PURE__ */ new Map();
	simulationTickListeners = /* @__PURE__ */ new Set();
	nextTimerId = 1;
	startRequested = !1;
	constructor(e, t, n, r = () => crypto.randomUUID(), i = new Kc()) {
		this.snapshot = e, this.registry = t, this.config = n, this.snapshot = structuredClone(e), this.sourceHash = $c(e), this.sessionId = r(), this.spatial = new Yc(this.snapshot), this.components = new Jc(this.sessionId, i, (e) => this.actors.get(e.id) === e, this.spatial), this.animationPlayback = new Va("gameplay-runtime", this.sessionId);
	}
	get configPlayerStartId() {
		return this.config.playerStartActorId;
	}
	prepareRendering() {
		if (this.state !== "stopped" || this.abortController.signal.aborted) throw Error("RuntimeWorld can only prepare once.");
		this.state = "starting", this.animationPlayback.start(), this.animationPlayback.pause();
	}
	start(e = {}) {
		if (this.startRequested || !["stopped", "starting"].includes(this.state) || this.abortController.signal.aborted) throw Error("RuntimeWorld can only start once.");
		this.startRequested = !0, this.state = "starting";
		try {
			b(this.snapshot), ee(this.snapshot);
			for (let e of this.snapshot.actors) this.actors.set(e.id, Object.assign(new qc(e.id, this.components), {
				classId: e.classId,
				beginPlayCount: 0,
				endPlayCount: 0
			}));
			this.components.reserve(this.snapshot.actors.flatMap((e) => e.components.map((e) => e.id)));
			for (let e of this.snapshot.actors) for (let t of e.components) (t.type !== "TestScript" || s(t).manifest.sdkVersion !== 5) && (t.type === "TestData" || t.type === "TestScript" || t.type === "StaticMesh") && this.components.construct(this.actors.get(e.id), t);
			if ((e.mode ?? "play") === "play") {
				let t = e.spawnPosition ? void 0 : bi(this.snapshot, this.config.playerStartActorId), n = e.spawnPosition ?? t.positionMeters;
				if (e.canSpawn && !e.canSpawn(n)) throw Error("Play From Here spawn is blocked by collision.");
				let r = this.registry.create(this.config.defaultPawnClassId, `${this.sessionId}:pawn`);
				if (r.position = [...n], r.rotationXyzw = [...t?.rotationXyzw ?? [
					0,
					0,
					0,
					1
				]], this.actors.has(r.id)) throw Error("Runtime Pawn ID collides with a document Actor.");
				let i = Object.assign(new qc(r.id, this.components), r);
				this.actors.set(r.id, i), this.controller.possess(i), this.controlState = "player";
			} else this.controlState = "simulate";
			this.components.start();
			for (let e of this.actors.values()) e.beginPlayCount += 1;
			this.animationPlayback.state === "stopped" ? this.animationPlayback.start() : this.animationPlayback.resume(), this.state = "running";
		} catch (e) {
			throw this.state = "failed", this.stop(), e;
		}
	}
	pause() {
		if (this.state !== "running") throw Error("Only a running World can pause.");
		this.state = "paused", this.animationPlayback.pause();
	}
	resume() {
		if (this.state !== "paused") throw Error("Only a paused World can resume.");
		this.state = "running", this.animationPlayback.resume();
	}
	tick(e = 1 / 60) {
		this.state === "running" && this.advance(e, !1);
	}
	step() {
		if (this.state !== "paused") throw Error("Step requires a paused World.");
		this.advance(1 / 60, !0);
	}
	setTimer(e, t) {
		if (this.abortController.signal.aborted) throw Error("World has stopped.");
		if (e < 0 || !Number.isFinite(e)) throw Error("Invalid timer duration.");
		let n = this.nextTimerId++;
		return this.timers.set(n, {
			remaining: e,
			callback: t
		}), n;
	}
	onSimulationTick(e) {
		if (this.abortController.signal.aborted) throw Error("World has stopped.");
		return this.simulationTickListeners.add(e), () => this.simulationTickListeners.delete(e);
	}
	guardAsync(e, t) {
		let n = this.sessionId;
		e.then((e) => {
			!this.abortController.signal.aborted && this.sessionId === n && (this.state === "running" || this.state === "paused") && t(e);
		});
	}
	eject() {
		if (this.controlState !== "player" || !this.controller.pawn) throw Error("Eject requires a possessed live Pawn.");
		this.controller.unpossess(), this.controlState = "ejected";
	}
	possess(e) {
		if (this.controlState !== "ejected" && this.controlState !== "simulate") throw Error("Possess requires Ejected or Simulate control.");
		let t = this.actors.get(e);
		if (!t) throw Error(`Cannot possess missing actor ${e}.`);
		this.controller.possess(t), this.controlState = "player";
	}
	inspectActor(e) {
		let t = this.actors.get(e);
		if (!t) throw Error(`Unknown runtime actor ${e}.`);
		let { componentRuntime: n, ...r } = t;
		return el(structuredClone({
			...r,
			components: this.components.components(t).map((e) => ({
				id: e.id,
				type: e.typeId,
				...e.typeId === "StaticMesh" ? { localTransform: e.getLocalTransform() } : e.typeId === "TestData" ? { value: e.value } : {
					targetComponentId: e.targetComponentId,
					ratePerSecond: e.ratePerSecond
				},
				enabled: e.enabled,
				tickEnabled: e.tickEnabled
			}))
		}));
	}
	stop() {
		if (this.state !== "stopped" && this.state !== "stopping") {
			this.state = "stopping", this.abortController.abort(), this.timers.clear(), this.simulationTickListeners.clear(), this.controller.unpossess(), this.animationPlayback.stop(), this.components.stop(), this.spatial.stop();
			for (let e of this.actors.values()) e.beginPlayCount > 0 && e.endPlayCount === 0 && (e.endPlayCount += 1);
			this.actors.clear(), this.controlState = "editor", this.state = "stopped";
		}
	}
	advance(e, t) {
		if (!Number.isFinite(e) || e <= 0) throw Error("Tick duration must be positive.");
		this.simulationTime += e, this.tickCount += 1, this.components.tick(e);
		let n = () => this.state === (t ? "paused" : "running");
		for (let [t, r] of [...this.timers]) {
			if (!n()) return;
			r.remaining -= e, r.remaining <= 0 && (this.timers.delete(t), r.callback());
		}
		for (let t of [...this.simulationTickListeners]) {
			if (!n()) return;
			t(e);
		}
		n() && (t ? this.animationPlayback.stepSimulation(this.tickCount, e) : this.animationPlayback.advanceSimulationTick(this.tickCount, e));
	}
}, $c = (e) => JSON.stringify(e), el = (e) => {
	if (e && typeof e == "object") {
		Object.freeze(e);
		for (let t of Object.values(e)) el(t);
	}
	return e;
};
//#endregion
//#region src/delivery/DeliveryRuntime.ts
function tl(e, t, n) {
	if (e.session.busy || !e.session.document) throw Error("Wait for the complete pinned model before running functions");
	let r = e.session.views.filter((e) => e.document.actors.some((e) => e.components.some((e) => e.type === "TestScript")));
	if (!r.length) throw Error("This model has no supported Script functions");
	for (let n of r) Rc(n.document, t, e.session.document.id, String(n.root.userData.deliveryMountId));
	let i = e.session.suspendSpatialStreaming(), a = [], o = !1, s = !1, c = () => {}, l = () => {}, u = () => {}, d = () => {
		for (let { view: e, world: t } of a) {
			t.stop();
			for (let t of e.projections) {
				let n = e.document.actors.find((e) => e.id === t.actorId);
				n.components.some((e) => e.type === "TestScript") && t.update(n);
			}
		}
		e.invalidate();
	}, f = () => {
		o || (o = !0, c(), l(), u(), d(), i());
	};
	try {
		for (let e of r) {
			let t = new Qc(e.document, new Xc(), { defaultPawnClassId: "unused" });
			if (a.push({
				view: e,
				world: t
			}), t.start({ mode: "simulate" }), t.components.diagnostics.length) throw Error(t.components.diagnostics[0].message);
		}
	} catch (e) {
		throw f(), e;
	}
	let p = (t) => {
		if (!(o || s || t <= 0)) try {
			for (let { view: e, world: n } of a) {
				if (n.tick(Math.min(t, .1)), n.components.diagnostics.length) throw Error(n.components.diagnostics[0].message);
				for (let t of e.projections) {
					let r = e.document.actors.find((e) => e.id === t.actorId);
					r.components.some((e) => T(e) && n.spatial.localOverride(e.id)) && t.update({
						...r,
						components: r.components.map((e) => T(e) && n.spatial.localOverride(e.id) ? {
							...e,
							localTransform: n.spatial.localOverride(e.id)
						} : e)
					});
				}
			}
			e.invalidate();
		} catch (e) {
			f(), m.error = e instanceof Error ? e.message : "Runtime function failed", n?.(m.error);
		}
	}, m = {
		mode: "local-simulation",
		error: null,
		get running() {
			return !o && !s;
		},
		get worlds() {
			return a.map((e) => e.world);
		},
		tick: p,
		pause() {
			o || s || (a.forEach((e) => e.world.pause()), s = !0);
		},
		resume() {
			!o && s && (a.forEach((e) => e.world.resume()), s = !1);
		},
		stop: f
	};
	return c = e.session.subscribe(f), l = e.subscribeFrame(p), u = e.subscribeDispose(f), m;
}
//#endregion
//#region src/delivery/LoadingPanel.ts
function nl(e, t) {
	let n = document.createElement("section");
	n.className = "dt-loading", n.setAttribute("aria-label", "레벨 로딩 상태"), e.append(n);
	let r = document.createElement("fieldset"), i = document.createElement("legend");
	i.textContent = "공간별 레벨 스트리밍", r.append(i);
	let a = document.createElement("input");
	a.type = "checkbox", a.setAttribute("aria-label", "공간 자동 로드");
	let o = document.createElement("label");
	o.append(a, "공간 자동 로드"), r.append(o);
	let s = (e, t) => {
		let n = document.createElement("label"), i = document.createElement("input");
		return n.textContent = e, i.setAttribute("aria-label", e), i.type = "number", i.min = "0", i.value = String(t), n.append(i), r.append(n), i;
	}, c = s("로드 반경(cm)", Lo.loadDistance * 100), l = s("언로드 반경(cm)", Lo.unloadDistance * 100), u = s("언로드 지연(초)", Lo.unloadDelayMs / 1e3), d = document.createElement("button"), f = document.createElement("button"), p = document.createElement("p"), m = document.createElement("p"), h = document.createElement("div");
	m.setAttribute("role", "alert"), d.textContent = "반경 적용", f.textContent = "자동 로드 재개", p.textContent = "기본 전체 로드 · 선택 시 공간 셀 자동 로드 · 선택/실행 중 보호 · 끄면 전체 로드", r.append(d, f, p, m), n.append(r, h);
	let g = "", _ = () => {
		try {
			t.setSpatialStreaming(a.checked ? {
				loadDistance: c.valueAsNumber / 100,
				unloadDistance: l.valueAsNumber / 100,
				unloadDelayMs: u.valueAsNumber * 1e3
			} : null), m.textContent = "";
		} catch (e) {
			a.checked = !!t.session.spatialStreaming, m.textContent = e instanceof Error ? e.message : "설정 변경 실패";
		}
	};
	a.onchange = _, d.onclick = _, f.onclick = () => {
		try {
			t.session.resumeSpatialStreaming(), m.textContent = "";
		} catch (e) {
			m.textContent = e instanceof Error ? e.message : "자동 로드 재개 실패";
		}
	};
	let v = () => {
		p.textContent = `기본 전체 로드 · ${t.session.document?.cells ? "공간 셀" : "게시 레벨"} 단위 · 선택/실행 중 보호 · 끄면 전체 로드`, n.dataset.timing = JSON.stringify(t.session.loadTiming), n.dataset.placeholders = String(!t.session.placeholderBounds.isEmpty());
		let e = t.session.spatialStreaming;
		a.checked = !!e, n.dataset.streaming = e ? e.paused ? "paused" : e.protected ? "protected" : "active" : "off";
		let i = JSON.stringify(e?.options);
		e && i !== g && (c.value = String(e.options.loadDistance * 100), l.value = String(e.options.unloadDistance * 100), u.value = String(e.options.unloadDelayMs / 1e3), g = i);
		let o = !(!t.session.document || t.session.document.spatial);
		a.disabled = d.disabled = t.session.busy || o, r.title = o ? "공간 경계가 포함된 게시본이 필요합니다." : "", f.hidden = !e?.paused, h.replaceChildren();
		let s = document.createElement("div"), m = document.createElement("button"), _ = document.createElement("button");
		m.textContent = "남은 로딩 취소", m.onclick = () => t.session.cancel(), _.textContent = "카메라 가까운 순서", _.onclick = () => {
			let e = t.session.document;
			if (!e) return;
			let n = e.mounts.map((n) => {
				let r = e.spatial?.find((e) => e.level === n.level)?.bounds, i = new mt().compose(new N(...n.position), new bt(...n.rotation), new N(1, 1, 1)), a = r ? new on(new N(...r.min), new N(...r.max)).getCenter(new N()).applyMatrix4(i) : new N(...n.position);
				return {
					id: n.id,
					distance: a.distanceToSquared(t.camera.position)
				};
			}).sort((e, t) => e.distance - t.distance);
			t.session.prioritize(n.map((e) => e.id));
		}, s.append(m, _), h.append(s);
		for (let n of t.session.loadStates) {
			let r = e?.states.find((e) => e.id === n.id), i = document.createElement("p");
			if (i.textContent = `${n.name ?? t.session.document?.mounts.find((e) => e.id === n.id)?.name ?? n.id} · ${r?.reason === "deferred" ? "거리 대기" : n.status}${r?.reason === "protected" ? " · 사용 중 보호" : ""}${n.message ? ` · ${n.message}` : ""}`, n.status === "failed" || n.status === "cancelled") {
				let e = document.createElement("button");
				e.textContent = "다시 받기", e.onclick = () => {
					try {
						t.session.retryMount(n.id);
					} catch (e) {
						i.textContent = e instanceof Error ? e.message : "재시도 실패";
					}
				}, i.append(e);
			}
			h.append(i);
		}
	}, y = t.session.subscribe(v);
	return v(), () => {
		y(), n.remove();
	};
}
//#endregion
export { w as ADDON_SDK_VERSION, jc as BrowserChunkCache, Oi as ChunkReader, Ln as DEFAULT_DELIVERY_CELL_SIZE, Lo as DEFAULT_SPATIAL_STREAMING, Jn as DELIVERY_ADDON_CONTRACT, qn as DELIVERY_CELL_CONTRACT, Wn as DELIVERY_CONTRACT, Lc as DELIVERY_MESH_MOTION, Gn as DELIVERY_OBJECT_CONTRACT, pr as DELIVERY_SDK_VERSION, Kn as DELIVERY_SPATIAL_CONTRACT, Oo as DISPLAY_BUDGET_MIB, H as DeliveryAddonController, ks as DeliveryClient, V as DeliverySession, ss as DeliveryViewer, Ds as HttpChunkSource, Es as LocalChunkSource, Ei as MemoryChunkCache, sr as actorServiceKey, d as addonCapabilityDescriptors, A as addonTargetKey, Nc as applicationHash, Ic as applicationReader, Pc as applicationSnapshot, Rs as bindHostData, Fs as bindingImpacts, _s as defaultDeliverySource, Ns as diffActors, Ao as displayBudget, vr as equipmentPath, Di as httpByteProvider, fr as mountActorPanel, nl as mountDeliveryLoadingPanel, kc as mountDeliveryViewportTools, Ac as mountEquipmentPanel, ms as publicationConnectionUrl, Mo as readDisplayBudgetPreference, js as readReviewSnapshot, Fc as resolveApplication, No as saveDisplayBudgetPreference, tl as startDeliveryRuntime, Mc as validateApplication, nr as validateDelivery, Rc as validateDeliveryRuntime, or as validateDelta, Ps as validateHostBindings };
