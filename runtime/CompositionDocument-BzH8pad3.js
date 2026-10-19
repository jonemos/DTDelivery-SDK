import { Lt as e, Mt as t, Nt as n, St as r } from "./StaticPreviewPersistence-BSmfWg2W.js";
//#region src/composition/CompositionObjects.ts
var i = [
	"Empty",
	"Camera",
	"PlayerStart",
	"DirectionalLight",
	"PointLight",
	"SpotLight",
	"Cube",
	"Sphere",
	"Cylinder",
	"Cone",
	"Plane"
], a = /* @__PURE__ */ new Set([
	"id",
	"ownerActorId",
	"parentComponentId",
	"attachmentParent",
	"type",
	"typeVersion",
	"localTransform",
	"shape"
]);
function o(t) {
	let n = e(t.kind, t.id, t.componentId);
	return {
		...n,
		name: t.name,
		components: [{
			...n.components[0],
			...t.properties,
			localTransform: {
				positionMeters: t.position,
				rotationXyzw: t.rotation,
				scale: t.scale
			}
		}]
	};
}
function s(t) {
	let n = [
		"id",
		"componentId",
		"kind",
		"name",
		"visible",
		"position",
		"rotation",
		"scale",
		"properties"
	];
	if (!t || typeof t != "object" || Array.isArray(t) || Object.keys(t).some((e) => !n.includes(e)) || n.some((e) => !Object.hasOwn(t, e))) throw Error("지원하지 않는 통합 객체 데이터입니다.");
	let s = t, c = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
	if (!c.test(s.id) || !c.test(s.componentId) || s.id === s.componentId || !i.includes(s.kind) || typeof s.name != "string" || !s.name.trim() || s.name.length > 150 || typeof s.visible != "boolean") throw Error("잘못된 통합 객체입니다.");
	if (!s.properties || typeof s.properties != "object" || Array.isArray(s.properties)) throw Error("잘못된 객체 속성입니다.");
	let l = e(s.kind, s.id, s.componentId).components[0], u = Object.keys(l).filter((e) => !a.has(e)).sort();
	if (Object.keys(s.properties).sort().join() !== u.join()) throw Error("지원하지 않는 객체 속성입니다.");
	if (!Array.isArray(s.rotation) || Math.abs(Math.hypot(...s.rotation) - 1) > 1e-5) throw Error("잘못된 객체 회전입니다.");
	let d = r.validate(l.type, 1, o(s).components[0], "load");
	if (d.length) throw Error("잘못된 객체 속성: " + d.map((e) => e.fieldId).join(", "));
	if (s.kind === "Camera" && Number(s.properties.horizontalFovDegrees) >= 180 || s.kind === "SpotLight" && (Number(s.properties.innerConeDegrees) > Number(s.properties.outerConeDegrees) || Number(s.properties.outerConeDegrees) > 90)) throw Error("카메라/스팟 라이트 각도가 유효하지 않습니다.");
}
//#endregion
//#region src/addons/AddonProperties.ts
var c = (e) => JSON.stringify([
	e.compositionId,
	e.mountId,
	e.actorId,
	e.componentId
]);
function l(e) {
	if (!e || typeof e != "object" || Object.keys(e).sort().join() !== "actorId,componentId,compositionId,mountId") throw Error("Invalid addon target");
	let t = e;
	for (let e of [
		t.compositionId,
		t.actorId,
		t.componentId,
		...t.mountId === null ? [] : [t.mountId]
	]) if (typeof e != "string" || !/^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,127}$/.test(e)) throw Error("Invalid addon target identifier");
}
function u(e) {
	return e.properties.map((t) => {
		let n = e.settings.find((e) => e.key === t.setting);
		if (n.kind === "component-reference") throw Error("Reference cannot be exposed as a property");
		return {
			...t,
			type: n.kind,
			...n.kind === "number" ? {
				...n.min === void 0 ? {} : { min: n.min },
				...n.max === void 0 ? {} : { max: n.max }
			} : n.kind === "string" ? { maxLength: n.maxLength } : {}
		};
	});
}
function d(e, n, r) {
	if (!["runtime", "persistent"].includes(r) || !n || typeof n != "object" || Array.isArray(n) || !Object.keys(n).length || Object.keys(n).length > 32) throw Error("Invalid addon property batch");
	let i = {};
	for (let [a, o] of Object.entries(n)) {
		let n = e.properties.find((e) => e.name === a);
		if (!n || n.access !== "read-write") throw Error(`Addon property is not writable: ${a}`);
		if (n.storage !== "both" && n.storage !== r) throw Error(`Addon property ${a} does not allow ${r} changes`);
		let s = e.settings.find((e) => e.key === n.setting);
		if (t(s, o), n.format === "color" && (typeof o != "string" || !/^#[a-fA-F0-9]{6}$/.test(o))) throw Error(`Invalid color property ${a}`);
		i[n.setting] = o;
	}
	return Object.freeze(i);
}
function f(e, t) {
	return Object.freeze(Object.fromEntries(e.properties.map((e) => [e.name, t[e.setting]])));
}
var p = class {
	manifest;
	saved;
	temporary = {};
	remote = {};
	listeners = /* @__PURE__ */ new Set();
	revision = 0;
	constructor(e, t) {
		this.manifest = e, n(e, t), this.saved = Object.freeze({ ...t });
	}
	get settings() {
		return Object.freeze({
			...this.saved,
			...this.remote,
			...this.temporary
		});
	}
	get values() {
		return f(this.manifest, this.settings);
	}
	subscribe(e) {
		return this.listeners.add(e), () => {
			this.listeners.delete(e);
		};
	}
	notify(e) {
		for (let t of [...this.listeners]) try {
			t(Object.freeze(e));
		} catch {}
	}
	apply(e, t, r, i) {
		if (r !== this.revision) throw Error("Addon property revision conflict");
		let a = d(this.manifest, e, t), o = {
			...this.saved,
			...a
		};
		if (n(this.manifest, t === "persistent" ? o : {
			...this.settings,
			...a
		}), t === "persistent") {
			if (!i) throw Error("Persistent addon edits unavailable in this host");
			i(Object.freeze(o)), this.saved = Object.freeze(o), this.temporary = Object.freeze(Object.fromEntries(Object.entries(this.temporary).filter(([e]) => !Object.hasOwn(a, e))));
		} else this.temporary = Object.freeze({
			...this.temporary,
			...a
		});
		this.revision++;
		let s = Object.keys(e);
		this.notify(s);
	}
	restore(e) {
		n(this.manifest, e), JSON.stringify(this.saved) !== JSON.stringify(e) && (this.saved = Object.freeze({ ...e }), this.revision++, this.notify(this.manifest.properties.map((e) => e.name)));
	}
	mirror(e) {
		let t = {
			...this.saved,
			...e
		};
		n(this.manifest, t);
		let r = JSON.stringify(this.settings) !== JSON.stringify(t);
		this.remote = Object.freeze({ ...e }), this.temporary = {}, r && (this.revision++, this.notify(this.manifest.properties.map((e) => e.name)));
	}
	dispose() {
		this.temporary = {}, this.remote = {}, this.listeners.clear();
	}
};
//#endregion
//#region src/addons/AddonOverrides.ts
function m(e, t, n) {
	if (!Array.isArray(e) || e.length > 4096) throw Error("Addon override limit exceeded");
	let r = /* @__PURE__ */ new Set();
	for (let i of e) {
		if (!i || Object.keys(i).sort().join() !== "reference,settings,target") throw Error("Invalid addon override");
		if (l(i.target), i.target.compositionId !== t || i.target.mountId !== null && !n.includes(i.target.mountId)) throw Error("Addon override belongs to another placement");
		let e = i.reference;
		if (!e || Object.keys(e).sort().join() !== "codeHash,packageId,version" || !/^[a-z][a-z0-9.-]{2,95}$/.test(e.packageId) || !/^\d+\.\d+\.\d+$/.test(e.version) || !/^[a-f0-9]{64}$/.test(e.codeHash)) throw Error("Invalid addon override binding");
		if (!i.settings || typeof i.settings != "object" || Array.isArray(i.settings) || Object.keys(i.settings).length > 32 || Object.entries(i.settings).some(([e, t]) => !/^[a-z][a-zA-Z0-9]{0,63}$/.test(e) || [
			"constructor",
			"prototype",
			"__proto__"
		].includes(e) || !(t === null || typeof t == "string" && t.length <= 4096 || typeof t == "boolean" || typeof t == "number" && Number.isFinite(t)))) throw Error("Invalid addon override settings");
		let a = c(i.target);
		if (r.has(a)) throw Error("Duplicate addon override");
		r.add(a);
	}
}
function h(e, t, n) {
	let r = e?.find((e) => c(e.target) === c(t));
	if (r) {
		if (r.reference.codeHash !== n.codeHash || r.reference.packageId !== n.packageId || r.reference.version !== n.version) throw Error("Saved addon override requires its exact package version");
		return r.settings;
	}
}
//#endregion
//#region src/composition/CompositionDocument.ts
var g = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
function _(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e) || Object.keys(e).some((e) => !t.includes(e))) throw Error("지원하지 않는 통합 레벨 데이터입니다.");
	return e;
}
function v(e) {
	if (typeof e != "string" || !g.test(e)) throw Error("잘못된 레벨 ID입니다.");
}
function y(e) {
	if (typeof e != "string" || !e.trim() || e.length > 150) throw Error("이름은 1–150자로 입력하세요.");
}
function b(e) {
	let t = _(e, [
		"kind",
		"projectId",
		"documentId",
		"candidateId"
	]);
	if (t.kind === "desktop") {
		if (v(t.projectId), v(t.documentId), t.candidateId !== void 0) throw Error("Invalid locator");
	} else if (t.kind === "web") {
		if (v(t.documentId), t.projectId !== void 0 || t.candidateId !== void 0) throw Error("Invalid locator");
	} else if (t.kind === "candidate" && typeof t.candidateId == "string" && t.candidateId.startsWith("file-")) {
		if (v(t.candidateId.slice(5)), t.projectId !== void 0 || t.documentId !== void 0) throw Error("Invalid locator");
	} else throw Error("등록된 저장 레벨만 참조할 수 있습니다.");
}
function x(e) {
	let t = _(e, [
		"source",
		"revision",
		"assetRevision"
	]);
	if (b(t.source), !Number.isSafeInteger(t.revision) || Number(t.revision) < 1 || typeof t.assetRevision != "string" || !/^(?:[1-9][0-9]*|[a-f0-9]{64})$/.test(t.assetRevision)) throw Error("잘못된 고정 버전입니다.");
}
function S(e) {
	let t = _(e, [
		"kind",
		"version",
		"id",
		"name",
		"mounts",
		"objects",
		"addonOverrides"
	]);
	if (t.kind !== "Composition" || ![1, 2].includes(Number(t.version)) || typeof t.version != "number") throw Error("지원하지 않는 통합 문서 버전입니다.");
	if (v(t.id), y(t.name), !Array.isArray(t.mounts) || t.mounts.length > 1e4 || JSON.stringify(t).length > 8388608) throw Error("통합 문서 메타데이터 한도를 초과했습니다.");
	let n = /* @__PURE__ */ new Set();
	for (let e of t.mounts) {
		let t = _(e, [
			"id",
			"name",
			"pin",
			"position",
			"rotation",
			"visible",
			"loaded"
		]);
		if (v(t.id), y(t.name), x(t.pin), n.has(t.id)) throw Error("중복 배치 ID입니다.");
		n.add(t.id);
		for (let [e, n] of [["position", 3], ["rotation", 4]]) {
			let r = t[e];
			if (!Array.isArray(r) || r.length !== n || !r.every((e) => typeof e == "number" && Number.isFinite(e))) throw Error("잘못된 배치 변환입니다.");
		}
		if (Math.abs(Math.hypot(...t.rotation) - 1) > 1e-5 || typeof t.visible != "boolean" || typeof t.loaded != "boolean") throw Error("잘못된 회전 또는 로드 설정입니다.");
	}
	if (t.version === 1 && t.objects !== void 0 || t.version === 2 && !Array.isArray(t.objects)) throw Error("통합 객체는 문서 v2가 필요합니다.");
	if (t.objects !== void 0) {
		if (!Array.isArray(t.objects) || t.objects.length > 1e3) throw Error("통합 객체 한도는 1,000개입니다.");
		for (let e of t.objects) {
			if (s(e), n.has(e.id) || n.has(e.componentId)) throw Error("중복 통합 객체 ID입니다.");
			n.add(e.id), n.add(e.componentId);
		}
	}
	return t.addonOverrides !== void 0 && m(t.addonOverrides, t.id, t.mounts.map((e) => e.id)), structuredClone(e);
}
function C(e) {
	return e.kind === "desktop" ? `desktop:${e.projectId.toLowerCase()}:${e.documentId.toLowerCase()}` : e.kind === "web" ? `web:${e.documentId.toLowerCase()}` : `candidate:${e.candidateId}`;
}
function w(e) {
	return `${C(e.source)}@${e.revision}:${e.assetRevision}`;
}
//#endregion
export { m as a, c, o as d, h as i, d as l, C as n, p as o, S as r, u as s, w as t, l as u };
