import { $ as e, $t as t, At as n, B as r, C as i, Ct as a, D as o, Dt as s, E as c, Et as l, F as u, Ft as d, G as f, Gt as p, H as m, Ht as h, I as g, It as _, J as v, Jt as y, K as b, Kt as ee, L as x, Lt as S, M as C, N as w, Nt as te, O as T, Ot as E, P as ne, Pt as re, Q as ie, Qt as ae, S as oe, St as se, T as ce, Tt as le, U as ue, Ut as de, V as fe, Vt as pe, W as me, Wt as he, X as ge, Xt as _e, Y as D, Yt as ve, Z as ye, Zt as O, _ as k, _t as be, a as xe, an as Se, at as Ce, b as we, bt as A, c as Te, cn as Ee, ct as De, d as Oe, dt as ke, et as Ae, f as je, g as Me, gt as Ne, h as Pe, ht as Fe, i as Ie, it as Le, jt as Re, k as ze, kt as Be, lt as Ve, m as He, mt as Ue, n as We, nt as Ge, o as Ke, on as j, ot as qe, p as Je, pt as Ye, q as Xe, qt as Ze, r as Qe, rt as $e, s as et, st as tt, t as nt, tt as rt, u as it, ut as M, v as at, vt as ot, w as st, wt as ct, x as lt, xt as ut, y as dt, yt as ft, z as pt, zt as mt } from "./RoomEnvironment-CPcaC5uA.js";
//#region \0rolldown/runtime.js
var ht = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), gt = [
	"Cube",
	"Sphere",
	"Cylinder",
	"Cone",
	"Plane"
];
function _t(e) {
	return gt.some((t) => t === e);
}
function N(e) {
	return e.type !== "TestData" && e.type !== "TestScript";
}
function vt(e) {
	let t = e.components.find((t) => t.id === e.rootComponentId);
	if (!t || !N(t)) throw Error(`Actor ${e.id} requires a SceneComponent root.`);
	return t;
}
function yt(e, t, n) {
	let r = {
		id: n,
		ownerActorId: t,
		parentComponentId: null,
		attachmentParent: null,
		typeVersion: 1,
		localTransform: {
			positionMeters: [
				0,
				.5,
				0
			],
			rotationXyzw: [
				0,
				0,
				0,
				1
			],
			scale: [
				1,
				1,
				1
			]
		}
	}, i = _t(e) ? {
		...r,
		type: "PrimitiveCube",
		shape: e,
		color: 9086152
	} : e === "Empty" ? {
		...r,
		type: "SceneNode"
	} : e === "StaticMesh" ? {
		...r,
		type: "StaticMesh",
		meshAsset: null,
		materialOverrides: [],
		color: 9086152
	} : e === "Camera" ? {
		...r,
		type: "Camera",
		horizontalFovDegrees: 90
	} : e === "PlayerStart" ? {
		...r,
		type: "PlayerStart"
	} : {
		...r,
		type: e,
		color: 16777215,
		intensity: 1,
		rangeMeters: 10,
		innerConeDegrees: 20,
		outerConeDegrees: 40,
		castShadow: !1
	};
	return {
		id: t,
		name: e,
		classId: _t(e) ? "PrimitiveCubeActor" : `${e}Actor`,
		rootComponentId: n,
		components: [i],
		tags: []
	};
}
//#endregion
//#region out/component-packages/installed.json
var bt = /*#__PURE__*/ JSON.parse("[{\"manifest\":{\"formatVersion\":3,\"packageId\":\"dt.mesh-motion\",\"version\":\"1.0.0\",\"sdkVersion\":3,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"Mesh 이동·회전 스크립트\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\"],\"settings\":[{\"key\":\"targetMesh\",\"fieldId\":\"script.mesh\",\"kind\":\"component-reference\",\"componentType\":\"StaticMesh\",\"required\":true,\"label\":\"대상 Mesh\",\"defaultValue\":\"\"},{\"key\":\"speedMetersPerSecond\",\"fieldId\":\"script.speed\",\"kind\":\"number\",\"label\":\"X 이동 속도 (m/s)\",\"defaultValue\":1,\"min\":-10,\"max\":10},{\"key\":\"radiansPerSecond\",\"fieldId\":\"script.angularSpeed\",\"kind\":\"number\",\"label\":\"Y 회전 속도 (rad/s)\",\"defaultValue\":1,\"min\":-10,\"max\":10}]},\"reference\":{\"packageId\":\"dt.mesh-motion\",\"version\":\"1.0.0\",\"codeHash\":\"c6b8244101f48f5c489d8da3edaa1f852a59612e3138c952c94c86aa9adfbd4d\"}},{\"manifest\":{\"formatVersion\":3,\"packageId\":\"dt.mesh-pulse-effect\",\"version\":\"1.0.0\",\"sdkVersion\":3,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"Mesh 맥동 Effect\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\"],\"settings\":[{\"key\":\"alarmData\",\"fieldId\":\"script.alarmData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"경보값 입력 (0/1)\",\"defaultValue\":\"\"},{\"key\":\"targetMesh\",\"fieldId\":\"script.targetMesh\",\"kind\":\"component-reference\",\"componentType\":\"StaticMesh\",\"required\":true,\"label\":\"효과 Mesh\",\"defaultValue\":\"\"},{\"key\":\"amplitude\",\"fieldId\":\"script.amplitude\",\"kind\":\"number\",\"label\":\"확대 비율\",\"defaultValue\":0.25,\"min\":0,\"max\":1},{\"key\":\"frequencyHz\",\"fieldId\":\"script.frequencyHz\",\"kind\":\"number\",\"label\":\"맥동 주파수 (Hz)\",\"defaultValue\":1,\"min\":0.1,\"max\":5}]},\"reference\":{\"packageId\":\"dt.mesh-pulse-effect\",\"version\":\"1.0.0\",\"codeHash\":\"2362c62a36074d101aa69ef8a6174f3dc6de05e8d4b10aa68d5523988f74bbfc\"}},{\"manifest\":{\"formatVersion\":4,\"packageId\":\"dt.mesh-pulse-effect\",\"version\":\"2.0.0\",\"sdkVersion\":4,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"Mesh 맥동 Effect · 유효성\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\",\"owner.signals\"],\"settings\":[{\"key\":\"alarmData\",\"fieldId\":\"script.alarmData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"경보값 입력 (0/1)\",\"defaultValue\":\"\"},{\"key\":\"targetMesh\",\"fieldId\":\"script.targetMesh\",\"kind\":\"component-reference\",\"componentType\":\"StaticMesh\",\"required\":true,\"label\":\"효과 Mesh\",\"defaultValue\":\"\"},{\"key\":\"amplitude\",\"fieldId\":\"script.amplitude\",\"kind\":\"number\",\"label\":\"확대 비율\",\"defaultValue\":0.25,\"min\":0,\"max\":1},{\"key\":\"frequencyHz\",\"fieldId\":\"script.frequencyHz\",\"kind\":\"number\",\"label\":\"맥동 주파수 (Hz)\",\"defaultValue\":1,\"min\":0.1,\"max\":5},{\"key\":\"maxAgeSeconds\",\"fieldId\":\"script.maxAgeSeconds\",\"kind\":\"number\",\"label\":\"최대 데이터 나이 (초)\",\"defaultValue\":0.5,\"min\":0.05,\"max\":60}]},\"reference\":{\"packageId\":\"dt.mesh-pulse-effect\",\"version\":\"2.0.0\",\"codeHash\":\"df99d8749c6e8d3a095ecd5364fc8cf4ea5c0d9f70b1a7c7ccc52727390e2ae6\"}},{\"manifest\":{\"formatVersion\":3,\"packageId\":\"dt.position-sensor\",\"version\":\"1.0.0\",\"sdkVersion\":3,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"위치 Sensor\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\"],\"settings\":[{\"key\":\"sourceMesh\",\"fieldId\":\"script.sourceMesh\",\"kind\":\"component-reference\",\"componentType\":\"StaticMesh\",\"required\":true,\"label\":\"측정 Mesh\",\"defaultValue\":\"\"},{\"key\":\"outputData\",\"fieldId\":\"script.outputData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"측정값 출력\",\"defaultValue\":\"\"}]},\"reference\":{\"packageId\":\"dt.position-sensor\",\"version\":\"1.0.0\",\"codeHash\":\"6938f1b7cdc3ef225be8a9f165a6d9543111142b7b6b14d931e8db0526620c66\"}},{\"manifest\":{\"formatVersion\":4,\"packageId\":\"dt.position-sensor\",\"version\":\"2.0.0\",\"sdkVersion\":4,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"위치 Sensor · 유효성\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\",\"owner.signals\"],\"settings\":[{\"key\":\"sourceMesh\",\"fieldId\":\"script.sourceMesh\",\"kind\":\"component-reference\",\"componentType\":\"StaticMesh\",\"required\":true,\"label\":\"측정 Mesh\",\"defaultValue\":\"\"},{\"key\":\"outputData\",\"fieldId\":\"script.outputData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"측정값 출력\",\"defaultValue\":\"\"}]},\"reference\":{\"packageId\":\"dt.position-sensor\",\"version\":\"2.0.0\",\"codeHash\":\"4f5e2994bf0aad90cc545725cfd9a44d14b7035d70ba646d0a00b1ba88b7d8fc\"}},{\"manifest\":{\"formatVersion\":1,\"packageId\":\"dt.test-data-script\",\"version\":\"1.0.0\",\"sdkVersion\":1,\"typeId\":\"TestScript\",\"typeVersion\":2,\"displayName\":\"테스트 스크립트\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\"],\"settings\":[{\"key\":\"targetComponentId\",\"fieldId\":\"script.target\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"대상 테스트 데이터\",\"defaultValue\":\"\"},{\"key\":\"ratePerSecond\",\"fieldId\":\"script.rate\",\"kind\":\"number\",\"label\":\"초당 증분\",\"defaultValue\":1}]},\"reference\":{\"packageId\":\"dt.test-data-script\",\"version\":\"1.0.0\",\"codeHash\":\"cc22c8fb6e95f1090a51c0a00086d2db881af1f038898053e5f993b53eeea2ea\"}},{\"manifest\":{\"formatVersion\":2,\"packageId\":\"dt.test-data-settings\",\"version\":\"1.0.0\",\"sdkVersion\":2,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"테스트 설정 스크립트\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\"],\"settings\":[{\"key\":\"sourceData\",\"fieldId\":\"script.source\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"입력 데이터\",\"defaultValue\":\"\"},{\"key\":\"targetData\",\"fieldId\":\"script.destination\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"출력 데이터\",\"defaultValue\":\"\"},{\"key\":\"gain\",\"fieldId\":\"script.gain\",\"kind\":\"number\",\"label\":\"배율\",\"defaultValue\":1,\"min\":0,\"max\":120},{\"key\":\"running\",\"fieldId\":\"script.running\",\"kind\":\"boolean\",\"label\":\"계산 사용\",\"defaultValue\":true},{\"key\":\"note\",\"fieldId\":\"script.note\",\"kind\":\"string\",\"label\":\"설정 메모\",\"defaultValue\":\"\",\"maxLength\":64},{\"key\":\"mirrorData\",\"fieldId\":\"script.mirror\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":false,\"label\":\"복사 데이터 (선택)\",\"defaultValue\":null}]},\"reference\":{\"packageId\":\"dt.test-data-settings\",\"version\":\"1.0.0\",\"codeHash\":\"e3c24fd4266ff8ddd5556b8f3923b01689363e6244aaa60be6b3abfdfe3867c3\"}},{\"manifest\":{\"formatVersion\":2,\"packageId\":\"dt.test-data-settings\",\"version\":\"2.0.0\",\"sdkVersion\":2,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"테스트 설정 스크립트 v2\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\"],\"settings\":[{\"key\":\"sourceData\",\"fieldId\":\"script.source\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"입력 데이터\",\"defaultValue\":\"\"},{\"key\":\"targetData\",\"fieldId\":\"script.destination\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"출력 데이터\",\"defaultValue\":\"\"},{\"key\":\"multiplier\",\"fieldId\":\"script.gain\",\"kind\":\"number\",\"label\":\"입력 배율\",\"defaultValue\":1,\"min\":0,\"max\":120},{\"key\":\"running\",\"fieldId\":\"script.running\",\"kind\":\"boolean\",\"label\":\"계산 사용\",\"defaultValue\":true},{\"key\":\"note\",\"fieldId\":\"script.note\",\"kind\":\"string\",\"label\":\"설정 메모\",\"defaultValue\":\"\",\"maxLength\":64},{\"key\":\"mirrorData\",\"fieldId\":\"script.mirror\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":false,\"label\":\"복사 데이터 (선택)\",\"defaultValue\":null},{\"key\":\"bias\",\"fieldId\":\"script.bias\",\"kind\":\"number\",\"label\":\"추가 증분\",\"defaultValue\":0,\"min\":-120,\"max\":120}]},\"reference\":{\"packageId\":\"dt.test-data-settings\",\"version\":\"2.0.0\",\"codeHash\":\"d80e628947af12069f65a193212a42aa02e49df8b936acc1e09a5a1b36c9235f\"}},{\"manifest\":{\"formatVersion\":1,\"packageId\":\"dt.test-data-subtract\",\"version\":\"1.0.0\",\"sdkVersion\":1,\"typeId\":\"TestScript\",\"typeVersion\":2,\"displayName\":\"테스트 감소 스크립트\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\"],\"settings\":[{\"key\":\"targetComponentId\",\"fieldId\":\"script.target\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"대상 테스트 데이터\",\"defaultValue\":\"\"},{\"key\":\"ratePerSecond\",\"fieldId\":\"script.rate\",\"kind\":\"number\",\"label\":\"초당 감소량\",\"defaultValue\":2}]},\"reference\":{\"packageId\":\"dt.test-data-subtract\",\"version\":\"1.0.0\",\"codeHash\":\"c2c5c8a5908fbcbcb08cb54762d1d4c5d5965be8be1dda8e779da3912423ea29\"}},{\"manifest\":{\"formatVersion\":2,\"packageId\":\"dt.threshold-alarm\",\"version\":\"1.0.0\",\"sdkVersion\":2,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"임계값 Alarm\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\"],\"settings\":[{\"key\":\"sourceData\",\"fieldId\":\"script.sourceData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"측정값 입력\",\"defaultValue\":\"\"},{\"key\":\"alarmData\",\"fieldId\":\"script.alarmData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"경보값 출력 (0/1)\",\"defaultValue\":\"\"},{\"key\":\"threshold\",\"fieldId\":\"script.threshold\",\"kind\":\"number\",\"label\":\"발생 임계값\",\"defaultValue\":1},{\"key\":\"hysteresis\",\"fieldId\":\"script.hysteresis\",\"kind\":\"number\",\"label\":\"해제 여유값\",\"defaultValue\":0.2,\"min\":0}]},\"reference\":{\"packageId\":\"dt.threshold-alarm\",\"version\":\"1.0.0\",\"codeHash\":\"cdbea140c73c56e518a2fb35e45fa9cfb4792bbf730aee8c87bb82d1fe81691d\"}},{\"manifest\":{\"formatVersion\":4,\"packageId\":\"dt.threshold-alarm\",\"version\":\"2.0.0\",\"sdkVersion\":4,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"임계값 Alarm · 유효성\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\",\"owner.signals\"],\"settings\":[{\"key\":\"sourceData\",\"fieldId\":\"script.sourceData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"측정값 입력\",\"defaultValue\":\"\"},{\"key\":\"alarmData\",\"fieldId\":\"script.alarmData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"경보값 출력 (0/1)\",\"defaultValue\":\"\"},{\"key\":\"threshold\",\"fieldId\":\"script.threshold\",\"kind\":\"number\",\"label\":\"발생 임계값\",\"defaultValue\":1},{\"key\":\"hysteresis\",\"fieldId\":\"script.hysteresis\",\"kind\":\"number\",\"label\":\"해제 여유값\",\"defaultValue\":0.2,\"min\":0},{\"key\":\"maxAgeSeconds\",\"fieldId\":\"script.maxAgeSeconds\",\"kind\":\"number\",\"label\":\"최대 데이터 나이 (초)\",\"defaultValue\":0.5,\"min\":0.05,\"max\":60}]},\"reference\":{\"packageId\":\"dt.threshold-alarm\",\"version\":\"2.0.0\",\"codeHash\":\"083d838ccf78d6ceb520a49516ac2a8ba6356a263f86a741363ff5c6ec088151\"}}]"), xt = 5, St = [
	"editor",
	"play",
	"composition",
	"delivery"
], Ct = /* @__PURE__ */ new Map();
function wt(e) {
	if (!/^[a-z][a-zA-Z0-9.-]{2,95}$/.test(e.id) || Ct.has(e.id) || !e.environments.length || e.environments.some((e) => !St.includes(e)) || ![
		"read",
		"runtime",
		"persistent"
	].includes(e.scope)) throw Error("Invalid/duplicate addon capability");
	Ct.set(e.id, Object.freeze({
		...e,
		environments: Object.freeze([...e.environments])
	}));
}
var Tt = () => [...Ct.values()];
function Et(e, t) {
	let n = Ct.get(e);
	if (!n) throw Error(`Unsupported addon capability: ${e}`);
	if (t && !n.environments.includes(t)) throw Error(`Addon capability ${e} is unavailable in ${t}`);
	return n;
}
for (let e of [
	{
		id: "scene.read",
		scope: "read",
		description: "Canonical Actor/component hierarchy, transforms and loaded mesh bounds."
	},
	{
		id: "display.objects",
		scope: "runtime",
		description: "Instance-owned boxes, lines and text; released on unload, failure and disposal."
	},
	{
		id: "properties.control",
		scope: "runtime",
		description: "Validated declared properties and change events; no direct document mutation."
	},
	{
		id: "document.edit",
		scope: "persistent",
		description: "Explicit validated setting edits through host commands and Undo."
	}
]) wt({
	...e,
	environments: e.id === "document.edit" ? ["editor", "composition"] : St
});
function Dt(e, t) {
	if (!Array.isArray(e) || !e.length || e.length > 32 || new Set(e).size !== e.length || !Array.isArray(t) || !t.length || new Set(t).size !== t.length || t.some((e) => !St.includes(e))) throw Error("Invalid addon capabilities/environments");
	for (let n of e) {
		if (typeof n != "string") throw Error("Invalid addon capability identifier");
		for (let e of t) Et(n, e);
	}
}
//#endregion
//#region src/component-packages/ComponentPackageManifest.ts
function Ot(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Invalid Component package object.");
	return e;
}
function kt(e, t) {
	if (Object.keys(e).length !== t.length || Object.keys(e).some((e) => !t.includes(e))) throw Error("Unknown/missing Component package field.");
}
function At(e) {
	return typeof e == "string" && e.trim().length > 0 && e.length <= 120;
}
function jt(e) {
	let t = Ot(e), n = t.formatVersion === 5 && t.sdkVersion === 5 && t.typeVersion === 3;
	if (![
		1,
		2,
		3,
		4,
		5
	].includes(Number(t.sdkVersion))) throw Error("Unsupported Component SDK version.");
	kt(t, [
		"formatVersion",
		"packageId",
		"version",
		"sdkVersion",
		"typeId",
		"typeVersion",
		"displayName",
		"entry",
		"capabilities",
		"settings",
		...n ? ["environments", "properties"] : []
	]);
	let r = t.formatVersion === 1 && t.sdkVersion === 1 && t.typeVersion === 2, i = t.formatVersion === 4 && t.sdkVersion === 4 && t.typeVersion === 3, a = i || t.formatVersion === 3 && t.sdkVersion === 3 && t.typeVersion === 3;
	if (!r && !a && !n && (t.formatVersion !== 2 || t.sdkVersion !== 2 || t.typeVersion !== 3) || t.typeId !== "TestScript") throw Error("Unsupported Component SDK/type/version.");
	if (typeof t.packageId != "string" || !/^[a-z][a-z0-9.-]{2,95}$/.test(t.packageId) || typeof t.version != "string" || !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(t.version)) throw Error("Invalid Component package identity/version.");
	if (t.entry !== "src/index.ts" || !At(t.displayName)) throw Error("Unsupported Component entry.");
	if (n) Dt(t.capabilities, t.environments);
	else if (JSON.stringify(t.capabilities) !== (i ? "[\"owner.testData\",\"owner.staticMesh\",\"owner.signals\"]" : a ? "[\"owner.testData\",\"owner.staticMesh\"]" : "[\"owner.testData\"]")) throw Error("Unsupported Component entry/capabilities.");
	if (!r) {
		if (!Array.isArray(t.settings) || !n && !t.settings.length || t.settings.length > 32) throw Error("Unsupported Component settings schema.");
		let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
		for (let e of t.settings) {
			let t = Ot(e), o = [
				"key",
				"fieldId",
				"kind",
				"label",
				"defaultValue"
			];
			if (typeof t.key != "string" || !/^[a-z][a-zA-Z0-9]{0,63}$/.test(t.key) || [
				"constructor",
				"prototype",
				"__proto__"
			].includes(t.key) || typeof t.fieldId != "string" || !/^script\.[a-z][a-zA-Z0-9-]{0,63}$/.test(t.fieldId) || ["script.package", "script.settings"].includes(t.fieldId) || !At(t.label) || r.has(t.key) || i.has(t.fieldId)) throw Error("Invalid/duplicate Script setting identity.");
			if (r.add(t.key), i.add(t.fieldId), t.kind === "number") {
				if (kt(t, [...o, ...["min", "max"].filter((e) => e in t)]), ["min", "max"].some((e) => e in t && (typeof t[e] != "number" || !Number.isFinite(t[e]))) || typeof t.min == "number" && typeof t.max == "number" && t.min > t.max) throw Error("Invalid Script number bounds.");
			} else if (t.kind === "boolean") kt(t, o);
			else if (t.kind === "string") {
				if (kt(t, [...o, "maxLength"]), !Number.isInteger(t.maxLength) || Number(t.maxLength) < 1 || Number(t.maxLength) > 4096) throw Error("Invalid Script string limit.");
			} else if (t.kind === "component-reference") {
				if (kt(t, [
					...o,
					"componentType",
					"required"
				]), !(t.componentType === "TestData" || (a || n) && t.componentType === "StaticMesh") || typeof t.required != "boolean" || t.defaultValue !== (t.required ? "" : null)) throw Error("Invalid Script Component reference contract.");
			} else throw Error("Unsupported Script setting kind.");
			t.kind !== "component-reference" && Mt(t, t.defaultValue);
		}
		if (n) {
			if (!Array.isArray(t.properties) || t.properties.length > 32) throw Error("Invalid exposed addon properties");
			let e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
			for (let i of t.properties) {
				let a = Ot(i);
				if (kt(a, [
					"name",
					"setting",
					"access",
					"storage",
					..."format" in a ? ["format"] : []
				]), typeof a.name != "string" || !/^[a-z][a-zA-Z0-9]{0,63}$/.test(a.name) || [
					"constructor",
					"prototype",
					"__proto__"
				].includes(a.name) || typeof a.setting != "string" || e.has(a.name) || n.has(a.setting) || !r.has(a.setting) || !["read", "read-write"].includes(String(a.access)) || ![
					"runtime",
					"persistent",
					"both"
				].includes(String(a.storage))) throw Error("Invalid exposed addon property declaration");
				let o = t.settings.find((e) => e.key === a.setting);
				if (o.kind === "component-reference") throw Error("External property cannot remap a component reference");
				if ("format" in a && (a.format !== "color" || o.kind !== "string" || !/^#[a-fA-F0-9]{6}$/.test(o.defaultValue))) throw Error("Invalid exposed color property");
				e.add(a.name), n.add(a.setting);
			}
		}
		return structuredClone(e);
	}
	if (!Array.isArray(t.settings) || t.settings.length !== 2) throw Error("Unsupported Component settings schema.");
	let o = Ot(t.settings[0]), s = Ot(t.settings[1]);
	if (kt(o, [
		"key",
		"fieldId",
		"kind",
		"componentType",
		"required",
		"label",
		"defaultValue"
	]), kt(s, [
		"key",
		"fieldId",
		"kind",
		"label",
		"defaultValue"
	]), o.key !== "targetComponentId" || o.fieldId !== "script.target" || o.kind !== "component-reference" || o.componentType !== "TestData" || o.required !== !0 || o.defaultValue !== "" || !At(o.label) || s.key !== "ratePerSecond" || s.fieldId !== "script.rate" || s.kind !== "number" || !At(s.label) || typeof s.defaultValue != "number" || !Number.isFinite(s.defaultValue)) throw Error("Unsupported Component settings schema.");
	return structuredClone(e);
}
function Mt(e, t) {
	if (!(e.kind === "number" ? typeof t == "number" && Number.isFinite(t) && (e.min === void 0 || t >= e.min) && (e.max === void 0 || t <= e.max) : e.kind === "boolean" ? typeof t == "boolean" : e.kind === "string" ? typeof t == "string" && t.length <= e.maxLength : t === null ? !e.required : typeof t == "string" && t.length > 0)) throw Error(`Invalid Script setting ${e.fieldId}.`);
}
function Nt(e, t) {
	let n = Ot(t);
	kt(n, e.settings.map((e) => e.key));
	for (let t of e.settings) Mt(t, n[t.key]);
	if (e.sdkVersion === 5) {
		for (let t of e.properties) if (t.format === "color" && (typeof n[t.setting] != "string" || !/^#[a-fA-F0-9]{6}$/.test(n[t.setting]))) throw Error(`Invalid color property ${t.name}`);
	}
}
function Pt(e, t) {
	let n = Ot(e);
	if (kt(n, [
		"packageId",
		"version",
		"codeHash"
	]), n.packageId !== t.packageId || n.version !== t.version || n.codeHash !== t.codeHash) throw Error("Script package is missing or changed. Restore the matching app/package build; settings were not migrated.");
}
var Ft = {
	packageId: "dt.test-data-script",
	version: "1.0.0",
	codeHash: "cc22c8fb6e95f1090a51c0a00086d2db881af1f038898053e5f993b53eeea2ea"
};
//#endregion
//#region src/assets/AssetRegistry.ts
function It(e) {
	let t = structuredClone([...e]);
	if (!t.length || t.length > 1e4 || new Set(t.map((e) => e.assetId)).size !== t.length || new Set(t.map((e) => e.revision.id)).size !== t.length || t.some((e) => !e.expectedRevisionId || e.revision.assetId !== e.assetId || !e.revision.blobKeys.includes(e.blob.key))) throw Error("Invalid or duplicate batch revision identities.");
	return t;
}
function Lt(e, t, n) {
	return e.snapshotAsset ? e.snapshotAsset(t, n) : e.snapshot();
}
var Rt = class extends Error {}, zt = class extends Error {
	assetId;
	references;
	constructor(e, t) {
		super(`Asset ${e} is referenced by ${t.length} owner(s).`), this.assetId = e, this.references = t;
	}
}, Bt = class extends Error {};
async function Vt(e) {
	let t = e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e.slice(), n = await crypto.subtle.digest("SHA-256", t);
	return Array.from(new Uint8Array(n), (e) => e.toString(16).padStart(2, "0")).join("");
}
function Ht(e) {
	return {
		asset: structuredClone(e.asset),
		revision: structuredClone(e.revision),
		blob: {
			key: e.blob.key,
			bytes: e.blob.bytes.slice()
		}
	};
}
//#endregion
//#region src/component-packages/ScriptAddonRegistry.ts
var Ut = [], Wt = /* @__PURE__ */ new Set(), Gt = () => Ut;
async function Kt(e) {
	if (!Array.isArray(e) || e.length > 64) throw Error("애드온 보관 한도는 64개 버전입니다.");
	let t = /* @__PURE__ */ new Set(), n = 0, r = [];
	for (let i of e) {
		if (!i || Object.keys(i).sort().join(",") !== "active,code,manifest,reference" || typeof i.active != "boolean" || typeof i.code != "string" || !i.code.trim()) throw Error("Invalid addon record.");
		let e = jt(i.manifest);
		if (bt.some((t) => t.reference.packageId === e.packageId)) throw Error("앱 내장 패키지 ID는 사용할 수 없습니다.");
		let a = new TextEncoder().encode(i.code);
		if (n += a.length, a.length > 1048576 || n > 33554432 || JSON.stringify(e).length > 65536) throw Error("Addon size limit exceeded.");
		let o = {
			packageId: e.packageId,
			version: e.version,
			codeHash: await Vt(new TextEncoder().encode(JSON.stringify(e) + "\n" + i.code))
		};
		Pt(i.reference, o);
		let s = `${o.packageId}@${o.version}`;
		if (t.has(s)) throw Error("같은 ID/버전의 중복 애드온입니다. 수정본은 version을 올리세요.");
		t.add(s), r.push(Object.freeze({
			manifest: e,
			reference: o,
			code: i.code,
			active: i.active
		}));
	}
	return Object.freeze(r);
}
async function qt(e) {
	Ut = await Kt(e);
	for (let e of Wt) e();
}
async function P(e) {
	let t = await Kt(e);
	for (let e of t) {
		let t = Ut.find((t) => t.reference.packageId === e.reference.packageId && t.reference.version === e.reference.version);
		if (t && t.reference.codeHash !== e.reference.codeHash) throw Error("Addon version/hash conflict.");
	}
	await qt([...Ut, ...t.filter((e) => !Ut.some((t) => t.reference.codeHash === e.reference.codeHash))]);
}
//#endregion
//#region src/component-packages/InstalledScriptPackage.ts
var Jt = Object.freeze(bt.map((e) => {
	let t = Object.freeze(jt(e.manifest)), n = Object.freeze({ ...e.reference });
	if (n.packageId !== t.packageId || n.version !== t.version || !/^[a-f0-9]{64}$/.test(n.codeHash)) throw Error("Invalid installed Script identity.");
	return Object.freeze({
		manifest: t,
		reference: n
	});
}));
if (new Set(Jt.map((e) => `${e.reference.packageId}@${e.reference.version}`)).size !== Jt.length) throw Error("Duplicate installed Script package.");
function Yt(e = Ft.packageId, t) {
	let n = [...Jt, ...Gt()].find((n) => n.reference.packageId === e && (t === void 0 || n.reference.version === t));
	if (!n) throw Error("Script package is missing. Restore the matching app/package build.");
	return n;
}
function Xt(e) {
	let t = e.typeVersion === 1 && e.scriptPackage === void 0 ? Ft : e.scriptPackage;
	if (![
		1,
		2,
		3
	].includes(e.typeVersion) || e.typeVersion === 1 && e.scriptPackage !== void 0) throw Error("Unsupported TestScript version.");
	if (!t || typeof t != "object" || !("packageId" in t) || typeof t.packageId != "string") throw Error("Invalid Script package reference.");
	if (!("version" in t) || typeof t.version != "string") throw Error("Invalid Script package version.");
	let n = Yt(t.packageId, t.version);
	if (Pt(t, n.reference), n.manifest.typeVersion !== (e.typeVersion === 1 ? 2 : e.typeVersion)) throw Error("Script package schema/version mismatch.");
	return n;
}
function Zt(e) {
	Xt(e);
}
//#endregion
//#region src/component-packages/ScriptSettings.ts
function Qt(e) {
	return Object.fromEntries(e.settings.map((e) => [e.key, e.defaultValue]));
}
function $t(e) {
	return e.typeVersion === 3 ? e.settings : {
		targetComponentId: e.targetComponentId,
		ratePerSecond: e.ratePerSecond
	};
}
function en(e) {
	let { manifest: t } = Xt(e);
	if (e.typeVersion === 3 && Object.keys(e).some((e) => ![
		"id",
		"ownerActorId",
		"type",
		"typeVersion",
		"scriptPackage",
		"settings",
		"recovery"
	].includes(e))) throw Error("Unknown Script Component field.");
	Nt(t, $t(e));
	let n = tn(e);
	if (n) {
		let e = Xt(n);
		if (e.reference.packageId !== t.packageId || e.reference.version === t.version) throw Error("Invalid Script recovery version.");
		Nt(e.manifest, n.settings);
	}
}
function tn(e) {
	if (e.typeVersion !== 3 || !("recovery" in e)) return;
	let t = e.recovery;
	if (!t || typeof t != "object" || Array.isArray(t) || Object.keys(t).sort().join(",") !== "scriptPackage,settings") throw Error("Invalid Script recovery checkpoint.");
	return {
		id: e.id,
		ownerActorId: e.ownerActorId,
		type: "TestScript",
		typeVersion: 3,
		scriptPackage: t.scriptPackage,
		settings: t.settings
	};
}
function nn(e) {
	en(e);
	let t = $t(e);
	return Xt(e).manifest.settings.flatMap((e) => e.kind === "component-reference" && typeof t[e.key] == "string" ? [{
		field: e,
		id: t[e.key]
	}] : []);
}
function rn(e) {
	let t = Xt(e).manifest;
	return t.settings.map((n) => ({
		fieldId: n.fieldId,
		path: e.typeVersion === 3 ? ["settings", n.key] : [n.key],
		valueType: n.kind === "component-reference" ? "reference" : n.kind,
		defaultValue: n.defaultValue,
		units: "unitless",
		referenceKind: n.kind === "component-reference" ? "scene-object" : null,
		editableContexts: [
			"details",
			"load",
			"runtime"
		],
		validate: (e) => {
			try {
				if (Mt(n, e), t.sdkVersion === 5 && t.properties.some((e) => e.setting === n.key && e.format === "color") && (typeof e != "string" || !/^#[a-fA-F0-9]{6}$/.test(e))) throw Error("색상은 #RRGGBB로 입력하세요.");
				return { ok: !0 };
			} catch (e) {
				return {
					ok: !1,
					reason: e instanceof Error ? e.message : "Invalid setting."
				};
			}
		}
	}));
}
//#endregion
//#region src/domain/properties/PropertyRegistry.ts
function an(e, t) {
	let n = e;
	for (let e of t) {
		if (typeof n != "object" || !n || !(e in n)) return;
		n = n[e];
	}
	return n;
}
var on = class {
	descriptors = /* @__PURE__ */ new Map();
	register(e) {
		let t = this.key(e.typeId, e.typeVersion);
		if (this.descriptors.has(t)) throw Error(`Property descriptor ${t} is already registered.`);
		let n = /* @__PURE__ */ new Set();
		for (let r of e.fields) {
			if (n.has(r.fieldId)) throw Error(`Duplicate fieldId ${r.fieldId} in ${t}.`);
			n.add(r.fieldId);
		}
		this.descriptors.set(t, e);
	}
	get(e, t) {
		let n = this.descriptors.get(this.key(e, t));
		if (!n) throw Error(`Unknown property descriptor ${e}@${t}.`);
		return n;
	}
	has(e, t) {
		return this.descriptors.has(this.key(e, t));
	}
	validate(e, t, n, r) {
		let i = this.get(e, t), a = [];
		for (let e of i.fields) {
			if (!e.editableContexts.includes(r)) continue;
			let t = e.validate(an(n, e.path));
			t.ok || a.push({
				fieldId: e.fieldId,
				reason: t.reason ?? "invalid_value"
			});
		}
		return a;
	}
	key(e, t) {
		return `${e}@${t}`;
	}
}, sn = [
	"details",
	"load",
	"runtime"
];
function cn(e, t) {
	return Array.isArray(e) && e.length === t && e.every((e) => typeof e == "number" && Number.isFinite(e));
}
function ln(e) {
	return e ? {
		ok: !1,
		reason: e
	} : { ok: !0 };
}
var un = {
	typeId: "PrimitiveCube",
	typeVersion: 1,
	fields: [
		{
			fieldId: "transform.position",
			path: ["localTransform", "positionMeters"],
			valueType: "vec3",
			defaultValue: [
				0,
				0,
				0
			],
			units: "meters",
			referenceKind: null,
			editableContexts: sn,
			validate: (e) => ln(cn(e, 3) ? null : "position_requires_finite_vec3")
		},
		{
			fieldId: "transform.rotation",
			path: ["localTransform", "rotationXyzw"],
			valueType: "quaternion",
			defaultValue: [
				0,
				0,
				0,
				1
			],
			units: "unitless",
			referenceKind: null,
			editableContexts: sn,
			validate: (e) => {
				if (!cn(e, 4)) return ln("rotation_requires_finite_xyzw");
				let t = Math.hypot(...e);
				return ln(Math.abs(t - 1) <= 1e-6 ? null : "rotation_requires_unit_quaternion");
			}
		},
		{
			fieldId: "transform.scale",
			path: ["localTransform", "scale"],
			valueType: "vec3",
			defaultValue: [
				1,
				1,
				1
			],
			units: "unitless",
			referenceKind: null,
			editableContexts: sn,
			validate: (e) => ln(cn(e, 3) && e.every((e) => e > 0) ? null : "scale_requires_positive_finite_vec3")
		},
		{
			fieldId: "appearance.color",
			path: ["color"],
			valueType: "integer",
			defaultValue: 16777215,
			units: "packed-srgb",
			referenceKind: null,
			editableContexts: sn,
			validate: (e) => ln(typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 16777215 ? null : "color_requires_24_bit_integer")
		}
	]
}, dn = new on();
dn.register(un);
//#endregion
//#region src/domain/ComponentRegistry.ts
var fn = {
	typeId: "TestData",
	typeVersion: 1,
	fields: [{
		fieldId: "test.value",
		path: ["value"],
		valueType: "number",
		defaultValue: 0,
		units: "unitless",
		referenceKind: null,
		editableContexts: [
			"details",
			"load",
			"runtime"
		],
		validate: (e) => typeof e == "number" && Number.isFinite(e) ? { ok: !0 } : {
			ok: !1,
			reason: "requires_finite_number"
		}
	}]
};
dn.has(fn.typeId, fn.typeVersion) || dn.register(fn);
var pn = {
	typeId: "TestScript",
	typeVersion: 1,
	fields: [{
		fieldId: "script.target",
		path: ["targetComponentId"],
		valueType: "reference",
		defaultValue: "",
		units: "unitless",
		referenceKind: "scene-object",
		editableContexts: [
			"details",
			"load",
			"runtime"
		],
		validate: (e) => typeof e == "string" && e.length > 0 ? { ok: !0 } : {
			ok: !1,
			reason: "requires_TestData_component_reference"
		}
	}, {
		fieldId: "script.rate",
		path: ["ratePerSecond"],
		valueType: "number",
		defaultValue: 1,
		units: "unitless",
		referenceKind: null,
		editableContexts: [
			"details",
			"load",
			"runtime"
		],
		validate: fn.fields[0].validate
	}]
};
dn.has(pn.typeId, 1) || dn.register(pn), dn.has(pn.typeId, 2) || dn.register({
	...pn,
	typeVersion: 2,
	fields: [...pn.fields, {
		fieldId: "script.package",
		path: ["scriptPackage"],
		valueType: "json",
		defaultValue: null,
		units: "unitless",
		referenceKind: null,
		editableContexts: ["load", "runtime"],
		validate: (e) => {
			try {
				return Zt({
					typeVersion: 2,
					scriptPackage: e
				}), { ok: !0 };
			} catch {
				return {
					ok: !1,
					reason: "script_package_missing_or_changed"
				};
			}
		}
	}]
}), dn.has("TestScript", 3) || dn.register({
	typeId: "TestScript",
	typeVersion: 3,
	fields: [{
		fieldId: "script.settings",
		path: ["settings"],
		valueType: "json",
		defaultValue: {},
		units: "unitless",
		referenceKind: null,
		editableContexts: ["load", "runtime"],
		validate: (e) => ({ ok: !!e && typeof e == "object" && !Array.isArray(e) })
	}]
});
function mn(e) {
	return e.type === "TestScript" ? {
		typeId: e.type,
		typeVersion: e.typeVersion,
		fields: [...rn(e), {
			fieldId: "script.package",
			path: ["scriptPackage"],
			valueType: "json",
			defaultValue: null,
			units: "unitless",
			referenceKind: null,
			editableContexts: ["load", "runtime"],
			validate: () => ({ ok: !0 })
		}]
	} : dn.get(e.type, e.typeVersion);
}
function hn(e, t) {
	if (e.type !== "TestScript") return e;
	let n = { ...$t(e) };
	for (let { field: r, id: i } of nn(e)) n[r.key] = t.get(i) ?? i;
	let r = tn(e), i = r ? hn(r, t) : void 0;
	return e.typeVersion === 3 ? {
		...e,
		settings: n,
		...i ? { recovery: {
			scriptPackage: i.scriptPackage,
			settings: i.settings
		} } : {}
	} : {
		...e,
		...n
	};
}
function gn(e) {
	for (let t of e.components) {
		if (t.type !== "TestScript") continue;
		let n = tn(t);
		for (let { id: r, field: i } of [...nn(t), ...n ? nn(n) : []]) if (!e.components.some((e) => e.id === r && i.kind === "component-reference" && e.type === i.componentType)) throw Error(`TestScript ${t.id} requires ${i.kind === "component-reference" ? i.componentType : "Component"} ${r} in the same Actor.`);
	}
}
function _n(e, t, n, r = {}) {
	if (e !== "TestData" && e !== "TestScript") throw Error(`Unsupported authoring Component ${e}.`);
	if (!n || !t) throw Error("Component identity and owner are required.");
	let i = e === "TestScript" ? Yt(r.scriptPackage?.packageId, r.scriptPackage?.version) : void 0;
	i && r.scriptPackage && Xt({
		typeVersion: i.manifest.typeVersion,
		scriptPackage: r.scriptPackage
	});
	let a = e === "TestData" ? {
		id: n,
		ownerActorId: t,
		type: e,
		typeVersion: 1,
		value: r.value ?? 0
	} : i.manifest.typeVersion === 3 ? {
		id: n,
		ownerActorId: t,
		type: e,
		typeVersion: 3,
		scriptPackage: { ...i.reference },
		settings: {
			...Qt(i.manifest),
			...r.scriptSettings
		}
	} : {
		id: n,
		ownerActorId: t,
		type: e,
		typeVersion: 2,
		scriptPackage: { ...i.reference },
		targetComponentId: r.targetComponentId ?? "",
		ratePerSecond: r.ratePerSecond ?? Number(i.manifest.settings.find((e) => e.key === "ratePerSecond").defaultValue)
	}, o = dn.validate(e, a.typeVersion, a, "load");
	if (o.length) throw Error(`Invalid ${e}: ${o.map((e) => e.reason).join(", ")}.`);
	return a.type === "TestScript" && en(a), a;
}
var vn = { create: _n }, yn = Math.PI / 180;
180 / Math.PI;
var bn = [
	0,
	1,
	0,
	0,
	0,
	1,
	-1,
	0,
	0
];
function xn(e, t) {
	if (!e.every(Number.isFinite)) throw Error(`${t} must contain only finite numbers.`);
}
function Sn(e, t) {
	return [
		e[0] * t[0] + e[1] * t[3] + e[2] * t[6],
		e[0] * t[1] + e[1] * t[4] + e[2] * t[7],
		e[0] * t[2] + e[1] * t[5] + e[2] * t[8],
		e[3] * t[0] + e[4] * t[3] + e[5] * t[6],
		e[3] * t[1] + e[4] * t[4] + e[5] * t[7],
		e[3] * t[2] + e[4] * t[5] + e[5] * t[8],
		e[6] * t[0] + e[7] * t[3] + e[8] * t[6],
		e[6] * t[1] + e[7] * t[4] + e[8] * t[7],
		e[6] * t[2] + e[7] * t[5] + e[8] * t[8]
	];
}
function Cn(e) {
	return [
		e[0],
		e[3],
		e[6],
		e[1],
		e[4],
		e[7],
		e[2],
		e[5],
		e[8]
	];
}
function wn(e, t) {
	return [
		e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
		e[3] * t[0] + e[4] * t[1] + e[5] * t[2],
		e[6] * t[0] + e[7] * t[1] + e[8] * t[2]
	];
}
function Tn(e) {
	return xn(e, "UE position"), [
		e[1] / 100,
		e[2] / 100,
		-e[0] / 100
	];
}
function En(e) {
	return xn(e, "Internal position"), [
		-e[2] * 100,
		e[0] * 100,
		e[1] * 100
	];
}
function Dn(e) {
	return xn(e, "UE direction"), wn(bn, e);
}
function On(e) {
	return xn(e, "UE scale"), [
		e[1],
		e[2],
		e[0]
	];
}
function kn(e) {
	let t = Math.cos(e), n = Math.sin(e);
	return [
		1,
		0,
		0,
		0,
		t,
		-n,
		0,
		n,
		t
	];
}
function An(e) {
	let t = Math.cos(e), n = Math.sin(e);
	return [
		t,
		0,
		n,
		0,
		1,
		0,
		-n,
		0,
		t
	];
}
function jn(e) {
	let t = Math.cos(e), n = Math.sin(e);
	return [
		t,
		-n,
		0,
		n,
		t,
		0,
		0,
		0,
		1
	];
}
function Mn(e) {
	xn(e, "UE rotator");
	let [t, n, r] = e.map((e) => e * yn), i = Sn(Sn(jn(r), An(-n)), kn(-t)), a = Cn(bn);
	return Sn(Sn(bn, i), a);
}
function Nn(e) {
	let t = e[0] + e[4] + e[8], n, r, i, a;
	if (t > 0) {
		let o = Math.sqrt(t + 1) * 2;
		a = o / 4, n = (e[7] - e[5]) / o, r = (e[2] - e[6]) / o, i = (e[3] - e[1]) / o;
	} else if (e[0] > e[4] && e[0] > e[8]) {
		let t = Math.sqrt(1 + e[0] - e[4] - e[8]) * 2;
		a = (e[7] - e[5]) / t, n = t / 4, r = (e[1] + e[3]) / t, i = (e[2] + e[6]) / t;
	} else if (e[4] > e[8]) {
		let t = Math.sqrt(1 + e[4] - e[0] - e[8]) * 2;
		a = (e[2] - e[6]) / t, n = (e[1] + e[3]) / t, r = t / 4, i = (e[5] + e[7]) / t;
	} else {
		let t = Math.sqrt(1 + e[8] - e[0] - e[4]) * 2;
		a = (e[3] - e[1]) / t, n = (e[2] + e[6]) / t, r = (e[5] + e[7]) / t, i = t / 4;
	}
	let o = Math.hypot(n, r, i, a);
	return [
		n / o,
		r / o,
		i / o,
		a / o
	];
}
function Pn(e) {
	return Nn(Mn(e));
}
function Fn(e) {
	if (!e.every(Number.isFinite)) throw Error("Internal quaternion must contain only finite numbers.");
	let t = Math.hypot(...e);
	if (t === 0) throw Error("Internal quaternion must have non-zero length.");
	let [n, r, i, a] = e.map((e) => e / t);
	return [
		1 - 2 * (r * r + i * i),
		2 * (n * r - i * a),
		2 * (n * i + r * a),
		2 * (n * r + i * a),
		1 - 2 * (n * n + i * i),
		2 * (r * i - n * a),
		2 * (n * i - r * a),
		2 * (r * i + n * a),
		1 - 2 * (n * n + r * r)
	];
}
//#endregion
//#region src/domain/transformMatrix.ts
var In = [
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
];
function Ln(e) {
	if (![
		...e.positionMeters,
		...e.rotationXyzw,
		...e.scale
	].every(Number.isFinite)) throw Error("Transform matrix input must be finite.");
	if (!e.scale.every((e) => e > 0)) throw Error("Transform matrix scale must be positive.");
	let t = Fn(e.rotationXyzw), [n, r, i] = e.scale, [a, o, s] = e.positionMeters;
	return [
		t[0] * n,
		t[1] * r,
		t[2] * i,
		a,
		t[3] * n,
		t[4] * r,
		t[5] * i,
		o,
		t[6] * n,
		t[7] * r,
		t[8] * i,
		s,
		0,
		0,
		0,
		1
	];
}
function Rn(e, t) {
	let n = Array(16).fill(0);
	for (let r = 0; r < 4; r += 1) for (let i = 0; i < 4; i += 1) for (let a = 0; a < 4; a += 1) n[r * 4 + i] += e[r * 4 + a] * t[a * 4 + i];
	return n;
}
function zn(e, t = 1e-6) {
	if (!e.every(Number.isFinite)) throw Error("Reparent failed: transform is non-finite.");
	let n = [
		e[0],
		e[4],
		e[8]
	], r = [
		e[1],
		e[5],
		e[9]
	], i = [
		e[2],
		e[6],
		e[10]
	], a = [
		Math.hypot(...n),
		Math.hypot(...r),
		Math.hypot(...i)
	];
	if (!a.every((e) => e > 1e-12)) throw Error("Reparent failed: local transform is singular.");
	let o = [
		n[0] / a[0],
		r[0] / a[1],
		i[0] / a[2],
		n[1] / a[0],
		r[1] / a[1],
		i[1] / a[2],
		n[2] / a[0],
		r[2] / a[1],
		i[2] / a[2]
	];
	if (o[0] * (o[4] * o[8] - o[5] * o[7]) - o[1] * (o[3] * o[8] - o[5] * o[6]) + o[2] * (o[3] * o[7] - o[4] * o[6]) <= 0) throw Error("Reparent failed: negative scale is unsupported.");
	let s = {
		positionMeters: [
			e[3],
			e[7],
			e[11]
		],
		rotationXyzw: Nn(o),
		scale: a
	}, c = Ln(s), l = Math.max(...e.map(Math.abs), 1), u = Math.max(...e.map((e, t) => Math.abs(e - c[t]))) / l;
	if (!Number.isFinite(u) || u > t) throw Error(`Reparent failed: result contains unsupported shear (residual ${u.toExponential(3)}).`);
	return s;
}
//#endregion
//#region src/domain/sceneHierarchy.ts
function Bn(e, t) {
	let n = vt(qn(e, t));
	if (!n) throw Error(`Actor ${t} has no root component.`);
	return n.attachmentParent;
}
function Vn(e) {
	let t = new Set(e.actors.map((e) => e.id));
	if (t.size !== e.actors.length) throw Error("Duplicate Actor ID.");
	for (let n of e.actors) {
		vt(n);
		for (let e of n.components) {
			if (t.has(e.id)) throw Error(`Duplicate Component ID ${e.id}.`);
			if (t.add(e.id), e.ownerActorId !== n.id) throw Error(`Component ${e.id} owner mismatch.`);
			if (N(e) && e.parentComponentId !== null) {
				if (e.id === n.rootComponentId) throw Error("Root Component cannot have an internal parent.");
				let t = n.components.find((t) => t.id === e.parentComponentId);
				if (!t || !N(t)) throw Error("Component parent must be a SceneComponent of the same Actor.");
			}
		}
	}
	let n = /* @__PURE__ */ new Set();
	for (let t of e.authoring.folders) {
		if (n.has(t.id)) throw Error(`Duplicate Outliner folder ${t.id}.`);
		n.add(t.id);
	}
	for (let t of e.authoring.folders) if (t.parentId !== null && !n.has(t.parentId)) throw Error(`Unknown parent folder ${t.parentId}.`);
	let r = new Map(e.authoring.folders.map((e) => [e.id, e.parentId])), i = /* @__PURE__ */ new Set();
	for (let t of e.authoring.folders) {
		let e = /* @__PURE__ */ new Set(), n = t.id;
		for (; n !== null && !i.has(n);) {
			if (e.has(n)) throw Error("Outliner folder cycle: 자신 또는 하위 폴더로 이동할 수 없습니다.");
			e.add(n), n = r.get(n) ?? null;
		}
		e.forEach((e) => i.add(e));
	}
	let a = /* @__PURE__ */ new Set();
	for (let t of e.authoring.actorFolders) {
		if (qn(e, t.actorId), a.has(t.actorId)) throw Error(`Duplicate folder membership for Actor ${t.actorId}.`);
		if (a.add(t.actorId), t.folderId !== null && !n.has(t.folderId)) throw Error(`Unknown Outliner folder ${t.folderId}.`);
	}
	for (let t of e.actors) Wn(e, t), gn(t);
	for (let t of e.actors) for (let n of t.components.filter(N)) Gn(e, {
		actorId: t.id,
		componentId: n.id
	});
}
function Hn(e, t) {
	return Gn(e, {
		actorId: t,
		componentId: qn(e, t).rootComponentId
	}, /* @__PURE__ */ new Set());
}
function Un(e, t) {
	return zn(Hn(e, t));
}
function Wn(e, t) {
	for (let e of t.components.filter(N)) if (e.id !== t.rootComponentId && e.attachmentParent !== null) throw Error(`Only root Component ${t.rootComponentId} may have an external attachment.`);
	let n = Bn(e, t.id);
	if (!n) return;
	let r = qn(e, n.actorId).components.find((e) => e.id === n.componentId);
	if (!r || !N(r)) throw Error(`Unknown spatial attachment Component ${n.componentId}.`);
	if (n.kind === "bone" || n.kind === "socket") {
		if (r.type !== "SkeletalMesh") throw Error(`Skeletal attachment target ${n.componentId} is not a SkeletalMesh.`);
		if (r.skinBinding.skeletonAsset.assetId !== n.skeletonAssetId || r.sourceBinding.sourceSkeletonAssetId !== n.sourceSkeletonAssetId || r.skinBinding.bindingSignature !== n.bindingSignature) throw Error(`Skeletal attachment identity does not match Component ${n.componentId}.`);
	}
}
function Gn(e, t, n = /* @__PURE__ */ new Set()) {
	let r = `${t.actorId}:${t.componentId}`;
	if (n.has(r)) throw Error("Reparent failed: attachment cycle detected.");
	let i = new Set(n);
	i.add(r);
	let { actor: a, component: o } = Kn(e, t), s = In;
	return o.id === a.rootComponentId ? o.attachmentParent && (s = Gn(e, o.attachmentParent, i)) : o.parentComponentId && (s = Gn(e, {
		actorId: a.id,
		componentId: o.parentComponentId
	}, i)), Rn(s, Ln(o.localTransform));
}
function Kn(e, t) {
	let n = qn(e, t.actorId), r = n.components.find((e) => e.id === t.componentId);
	if (!r || !N(r)) throw Error(`Unknown spatial attachment Component ${t.componentId}.`);
	return {
		actor: n,
		component: r
	};
}
function qn(e, t) {
	let n = e.actors.find((e) => e.id === t);
	if (!n) throw Error(`Unknown Actor ${t}.`);
	return n;
}
//#endregion
//#region src/domain/TwinExport.ts
function Jn(e) {
	let t = [], n = (e, n, r) => {
		let i = new Set(n.map(String)), a = Object.fromEntries(Object.entries(e).filter(([e]) => !i.has(e)));
		return Object.keys(a).length && t.push({
			path: r,
			fields: a
		}), Object.fromEntries(n.filter((t) => Object.hasOwn(e, t)).map((t) => [t, e[t]]));
	};
	return {
		twin: {
			...n(e, [
				"schemaVersion",
				"twinDescription",
				"capabilities",
				"objects",
				"semanticGroups",
				"presentationTemplates",
				"presentationSlots"
			], ""),
			capabilities: e.capabilities.map((e, t) => ({
				...n(e, [
					"capabilityId",
					"description",
					"supportedTargetTypes",
					"arguments"
				], `/capabilities/${t}`),
				arguments: e.arguments.map((e, r) => n(e, [
					"name",
					"type",
					"required",
					"enumSource"
				], `/capabilities/${t}/arguments/${r}`))
			})),
			objects: e.objects.map((e, t) => ({
				...n(e, [
					"objectId",
					"displayName",
					"description",
					"aliases",
					"capabilityIds",
					"equipmentType",
					"relations"
				], `/objects/${t}`),
				displayName: {
					ko: "",
					en: "",
					...n(e.displayName, ["ko", "en"], `/objects/${t}/displayName`)
				},
				description: e.purpose?.trim() ? `${e.description}${e.description ? "\n\n" : ""}[용도] ${e.purpose}` : e.description,
				...e.relations === void 0 ? {} : { relations: e.relations.map((e, r) => n(e, [
					"targetObjectId",
					"kind",
					"description"
				], `/objects/${t}/relations/${r}`)) }
			})),
			semanticGroups: e.semanticGroups.map((e, t) => ({
				...n(e, [
					"groupId",
					"displayName",
					"description",
					"aliases",
					"memberObjectIds",
					"capabilityIds"
				], `/semanticGroups/${t}`),
				displayName: {
					ko: "",
					...n(e.displayName, ["ko"], `/semanticGroups/${t}/displayName`)
				}
			})),
			presentationTemplates: e.presentationTemplates.map((e, t) => n(e, ["key", "description"], `/presentationTemplates/${t}`)),
			presentationSlots: e.presentationSlots.map((e, t) => n(e, ["name", "description"], `/presentationSlots/${t}`))
		},
		extensions: t
	};
}
function Yn(e, t) {
	if (e === t) return !0;
	if (!e || !t || typeof e != "object" || typeof t != "object" || Array.isArray(e) !== Array.isArray(t)) return !1;
	let n = Object.entries(e), r = Object.entries(t);
	return n.length === r.length && n.every(([e, n]) => Object.hasOwn(t, e) && Yn(n, t[e]));
}
function Xn(e) {
	let t = Qn();
	for (let n of e) {
		for (let [e, r] of [
			["objects", "objectId"],
			["semanticGroups", "groupId"],
			["capabilities", "capabilityId"],
			["presentationTemplates", "key"],
			["presentationSlots", "name"]
		]) {
			let i = new Map(t[e].map((e) => [e[r], e]));
			for (let t of n.document[e]) i.has(t[r]) && !Yn(i.get(t[r]), t) && F(n.name + ": " + e + " ID 충돌: " + String(t[r]) + ". 기존 파일을 재등록하거나 ID를 구분하세요."), i.set(t[r], t);
			Object.assign(t, { [e]: [...i.values()] });
		}
		for (let [e, r] of Object.entries(n.document)) Object.hasOwn(Qn(), e) || (Object.hasOwn(t, e) && !Yn(t[e], r) && F(n.name + ": 확장 필드 충돌: " + e), Object.assign(t, { [e]: r }));
	}
	return Object.assign(t, { twinDescription: [...new Set(e.map((e) => e.document.twinDescription).filter(Boolean))].join("\n\n") }), or(t), t;
}
function Zn(e) {
	ir(e), tr(e), e.length > 100 && F("등록 JSON은 최대 100개입니다.");
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if ($n(n), er(n.id, !0), er(n.name, !0), (n.name.length > 160 || [...n.name].some((e) => e.charCodeAt(0) < 32 || e.charCodeAt(0) === 127) || t.has(n.id)) && F("등록 JSON 이름 또는 ID가 올바르지 않습니다."), t.add(n.id), or(n.document), n.idRemaps !== void 0) {
		tr(n.idRemaps);
		for (let e of n.idRemaps) $n(e), er(e.from, !0), er(e.to, !0), [
			"objects",
			"semanticGroups",
			"capabilities",
			"presentationTemplates",
			"presentationSlots"
		].includes(String(e.kind)) || F("원본 ID 매핑 종류가 올바르지 않습니다.");
	}
}
var Qn = () => ({
	schemaVersion: "1.0",
	twinDescription: "",
	objects: [],
	semanticGroups: [],
	capabilities: [],
	presentationTemplates: [],
	presentationSlots: []
});
function F(e) {
	throw Error(`설비 정보: ${e}`);
}
function $n(e) {
	(!e || typeof e != "object" || Array.isArray(e)) && F("객체 형식이 필요합니다.");
}
function er(e, t = !1) {
	(typeof e != "string" || e.length > 1e5 || t && !e.trim()) && F("문자열 또는 ID가 올바르지 않습니다.");
}
function tr(e) {
	(!Array.isArray(e) || e.length > 1e4) && F("목록은 최대 10,000개입니다.");
}
function nr(e) {
	tr(e), e.forEach((e) => er(e, !0)), new Set(e).size !== e.length && F("목록 ID가 중복됩니다.");
}
function rr(e) {
	$n(e), Object.keys(e).length || F("표시 이름이 필요합니다."), Object.values(e).forEach((e) => er(e));
}
function ir(e) {
	let t = 0, n = (e, r) => {
		if ((++t > 2e5 || r > 24) && F("JSON 구조 한도를 초과했습니다."), !(e === null || typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e))) {
			if (Array.isArray(e)) {
				e.forEach((e) => n(e, r + 1));
				return;
			}
			$n(e), Object.getPrototypeOf(e) !== Object.prototype && Object.getPrototypeOf(e) !== null && F("일반 JSON 객체만 사용할 수 있습니다.");
			for (let [t, i] of Object.entries(e)) [
				"__proto__",
				"prototype",
				"constructor"
			].includes(t) && F("허용하지 않는 JSON 키입니다."), n(i, r + 1);
		}
	};
	n(e, 0), new TextEncoder().encode(JSON.stringify(e)).length > 8388608 && F("JSON은 최대 8 MiB입니다.");
}
function ar(e) {
	$n(e), er(e.objectId, !0), rr(e.displayName), er(e.description), $n(e.aliases), Object.hasOwn(e, "equipmentType") && (typeof e.equipmentType != "string" || e.equipmentType.length > 1e5) && F("equipmentType은 문자열이어야 합니다."), nr(e.capabilityIds), e.purpose !== void 0 && er(e.purpose), Object.hasOwn(e, "relations") && ((!Array.isArray(e.relations) || e.relations.length > 1e4) && F("relations는 최대 10,000개의 관계를 담은 배열이어야 합니다."), e.relations.forEach((e) => {
		$n(e), er(e.targetObjectId, !0), er(e.kind, !0), er(e.description);
	}));
}
function or(e) {
	ir(e), $n(e), e.schemaVersion !== "1.0" && F("지원하는 스키마는 1.0입니다."), er(e.twinDescription), tr(e.objects), e.objects.forEach(ar), tr(e.semanticGroups), e.semanticGroups.forEach((e) => {
		$n(e), er(e.groupId, !0), rr(e.displayName), er(e.description), $n(e.aliases), nr(e.memberObjectIds), nr(e.capabilityIds);
	}), tr(e.capabilities), e.capabilities.forEach((e) => {
		$n(e), er(e.capabilityId, !0), er(e.description), nr(e.supportedTargetTypes), e.supportedTargetTypes.some((e) => !["object", "semanticGroup"].includes(e)) && F("지원 대상 종류가 올바르지 않습니다."), tr(e.arguments), e.arguments.forEach((e) => {
			$n(e), er(e.name, !0), (![
				"number",
				"string",
				"boolean"
			].includes(String(e.type)) || typeof e.required != "boolean") && F("동작 인수 형식이 올바르지 않습니다."), e.enumSource !== void 0 && !["presentationTemplates", "presentationSlots"].includes(String(e.enumSource)) && F("인수 목록 참조가 올바르지 않습니다.");
		}), sr(e.arguments, "name");
	});
	for (let [t, n] of [["presentationTemplates", "key"], ["presentationSlots", "name"]]) tr(e[t]), e[t].forEach((e) => {
		$n(e), er(e[n], !0), er(e.description);
	}), sr(e[t], n);
	sr(e.objects, "objectId"), sr(e.semanticGroups, "groupId"), sr(e.capabilities, "capabilityId"), cr(e);
}
function sr(e, t) {
	let n = e.map((e) => e[t]);
	new Set(n).size !== n.length && F(`${t}가 중복됩니다.`);
}
function cr(e) {
	let t = new Set(e.objects.map((e) => e.objectId)), n = new Set(e.capabilities.map((e) => e.capabilityId));
	for (let r of e.objects) {
		for (let e of r.relations ?? []) t.has(e.targetObjectId) || F(`연결 설비가 없습니다: ${e.targetObjectId}`);
		for (let e of r.capabilityIds) n.has(e) || F(`동작 정의가 없습니다: ${e}`);
	}
	for (let r of e.semanticGroups) {
		for (let e of r.memberObjectIds) t.has(e) || F(`그룹 설비가 없습니다: ${e}`);
		for (let e of r.capabilityIds) n.has(e) || F(`그룹 동작 정의가 없습니다: ${e}`);
	}
}
function lr(e) {
	ir(e), $n(e), ar(e.object), nr(e.groupIds);
	for (let t of ["targetComponentId", "instanceSourceId"]) e[t] !== null && er(e[t], !0);
	e.instanceSourceId !== null && e.targetComponentId === null && F("인스턴스는 대상 컴포넌트가 필요합니다.");
}
function ur(e) {
	return e.actors.flatMap((e) => e.components.filter((e) => e.type === "TwinMetadata"));
}
function dr(e) {
	let t = ur(e), n = /* @__PURE__ */ new Set();
	e.authoring.twinCatalogFiles !== void 0 && (Zn(e.authoring.twinCatalogFiles), Yn(Xn(e.authoring.twinCatalogFiles), e.authoring.digitalTwin) || F("등록 파일과 통합 목록이 일치하지 않습니다.")), e.authoring.digitalTwin !== void 0 && or(e.authoring.digitalTwin);
	for (let r of t) {
		lr(r.metadata);
		for (let [e, t] of [
			["positionMeters", [
				0,
				0,
				0
			]],
			["rotationXyzw", [
				0,
				0,
				0,
				1
			]],
			["scale", [
				1,
				1,
				1
			]]
		]) {
			let n = r.localTransform?.[e];
			(!Array.isArray(n) || n.length !== t.length || n.some((e, n) => e !== t[n])) && F("설비 정보 컴포넌트에는 공간 변환을 적용할 수 없습니다.");
		}
		let t = e.actors.find((e) => e.id === r.ownerActorId);
		if ((!t || t.rootComponentId === r.id || r.parentComponentId !== t.rootComponentId || r.attachmentParent !== null) && F("설비 정보는 액터 루트에 소유된 데이터 컴포넌트입니다."), (t.components.some((e) => N(e) && (e.parentComponentId === r.id || e.attachmentParent?.componentId === r.id)) || e.actors.some((e) => e.components.some((e) => N(e) && e.attachmentParent?.componentId === r.id))) && F("설비 정보에 공간 컴포넌트를 부착할 수 없습니다."), n.has(r.metadata.object.objectId) && F(`액터에 연결된 설비 ID가 중복됩니다: ${r.metadata.object.objectId}`), n.add(r.metadata.object.objectId), r.metadata.targetComponentId !== null) {
			let n = t.components.find((e) => e.id === r.metadata.targetComponentId);
			(!n || !N(n) || n.type === "TwinMetadata") && F("같은 액터의 대상 컴포넌트가 필요합니다.");
			let i = e.authoring.ueImport?.components.find((e) => e.webId === n.id);
			r.metadata.instanceSourceId !== null && (n.type !== "StaticMesh" || i?.sourceKind !== "InstancedStaticMesh" || !i.instances.some((e) => e.sourceId === r.metadata.instanceSourceId)) && F("대상 인스턴스의 원본 ID가 없습니다.");
		}
	}
	or(fr(e));
}
function fr(e) {
	let t = e.authoring.digitalTwin ?? Qn(), n = ur(e), r = new Map(t.objects.map((e) => [e.objectId, e]));
	n.forEach((e) => r.set(e.metadata.object.objectId, e.metadata.object));
	let i = new Set(n.map((e) => e.metadata.object.objectId));
	for (let e of n) for (let n of e.metadata.groupIds) t.semanticGroups.some((e) => e.groupId === n) || F(`그룹 정의가 없습니다: ${n}`);
	return {
		...t,
		objects: [...r.values()],
		semanticGroups: t.semanticGroups.map((e) => ({
			...e,
			memberObjectIds: [...e.memberObjectIds.filter((t) => !i.has(t) || n.some((n) => n.metadata.object.objectId === t && n.metadata.groupIds.includes(e.groupId))), ...n.filter((t) => t.metadata.groupIds.includes(e.groupId) && !e.memberObjectIds.includes(t.metadata.object.objectId)).map((e) => e.metadata.object.objectId)]
		}))
	};
}
function pr(e, t) {
	dr(e);
	let { twin: n, extensions: r } = Jn(fr(e)), i = ur(e), a = e.authoring.ueImport;
	return or(n), {
		twin: n,
		bindings: {
			schemaVersion: 1,
			levelId: e.id,
			levelName: e.authoring.levelName ?? e.id,
			...a ? {
				sourceProjectId: a.sourceProjectId,
				sourceLevelKey: a.sourceLevelKey,
				sourceSnapshotId: a.sourceSnapshotId
			} : {},
			...!a && t ? {
				sourceProjectId: t.source.projectId,
				sourceLevelKey: t.source.levelKey
			} : {},
			objects: i.map((e) => ({
				objectId: e.metadata.object.objectId,
				actorId: e.ownerActorId,
				metadataComponentId: e.id,
				targetComponentId: e.metadata.targetComponentId,
				instanceSourceId: e.metadata.instanceSourceId,
				sourceActorId: a ? Object.entries(a.sourceActorIds).find(([, t]) => t === e.ownerActorId)?.[0] ?? null : t?.bindings.find((t) => t.webActorId === e.ownerActorId)?.sourceActorId ?? null,
				sourceComponentId: a?.components.find((t) => t.webId === e.metadata.targetComponentId)?.sourceId ?? (e.metadata.targetComponentId ? t?.bindings.find((t) => t.webActorId === e.ownerActorId && t.webComponentId === e.metadata.targetComponentId)?.sourceComponentId : null) ?? null
			})),
			unboundObjectIds: n.objects.filter((e) => !i.some((t) => t.metadata.object.objectId === e.objectId)).map((e) => e.objectId),
			capabilityExecution: "declarations-only",
			...e.authoring.twinCatalogFiles?.some((e) => e.idRemaps?.length) ? { catalogIdRemaps: e.authoring.twinCatalogFiles.filter((e) => e.idRemaps?.length).map((e) => ({
				fileId: e.id,
				fileName: e.name,
				entries: e.idRemaps
			})) } : {},
			...r.length ? { metadataExtensions: r } : {}
		}
	};
}
//#endregion
//#region src/domain/properties/sceneComponentDescriptors.ts
var mr = [
	"details",
	"load",
	"runtime"
], hr = (e) => e ? {
	ok: !1,
	reason: e
} : { ok: !0 }, gr = (e) => typeof e == "number" && Number.isFinite(e), _r = (e) => hr(gr(e) && e > 0 ? null : "requires_positive_number"), vr = (e) => hr(gr(e) && e >= 0 ? null : "requires_nonnegative_number"), yr = (e) => hr(typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 16777215 ? null : "requires_color"), br = (e) => typeof e == "object" && !!e && e.kind === "asset" && typeof e.assetId == "string" && e.assetId.length > 0 && ["live", "pinned"].includes(String(e.revisionPolicy)), xr = (e) => hr(Array.isArray(e) && e.every((e) => {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	return typeof t.slotId == "string" && t.slotId.length > 0 && t.materialAsset?.kind === "asset" && typeof t.materialAsset.assetId == "string" && Array.isArray(t.tintOverrides) && t.tintOverrides.every((e) => {
		if (typeof e != "object" || !e) return !1;
		let t = e;
		return Number.isInteger(t.layerIndex) && t.layerIndex >= 0 && Array.isArray(t.tintLinear) && t.tintLinear.length === 3 && t.tintLinear.every(gr) && gr(t.strength) && t.strength >= 0 && t.strength <= 1;
	});
}) ? null : "requires_material_slot_overrides"), Sr = (e) => {
	if (typeof e != "object" || !e) return hr("requires_skin_binding");
	let t = e;
	return hr(br(t.skeletonAsset) && typeof t.bindingSignature == "string" && /^[0-9a-f]{64}$/u.test(t.bindingSignature) && Number.isInteger(t.skinIndex) && Number(t.skinIndex) >= 0 ? null : "requires_skin_binding");
}, Cr = (e) => {
	if (typeof e != "object" || !e) return hr("requires_animation_playback");
	let t = e;
	return hr((t.clipAsset === null || br(t.clipAsset)) && gr(t.rate) && gr(t.initialTimeSeconds) && t.initialTimeSeconds >= 0 && (t.loop === "once" || t.loop === "repeat") && typeof t.playing == "boolean" && (t.clipAsset === null ? t.rootMotionMode === null : [
		"in_bone",
		"in_place",
		"baked_actor_track"
	].includes(String(t.rootMotionMode))) ? null : "requires_animation_playback");
}, wr = (e) => {
	if (typeof e != "object" || !e) return hr("requires_imported_source_binding");
	let t = e;
	return hr([
		"packageId",
		"sourceProjectId",
		"sourceSnapshotId",
		"sourceComponentId",
		"sourceComponentKey",
		"sourceMeshAssetId",
		"sourceSkeletonAssetId"
	].every((e) => typeof t[e] == "string" && String(t[e]).length > 0) && (t.sourceAnimationAssetId === null || typeof t.sourceAnimationAssetId == "string" && t.sourceAnimationAssetId.length > 0) ? null : "requires_imported_source_binding");
}, Tr = dn.get("PrimitiveCube", 1).fields.filter((e) => e.fieldId.startsWith("transform.")), Er = (e, t, n, r, i, a, o = null) => ({
	fieldId: e,
	path: t,
	valueType: n,
	defaultValue: r,
	units: i,
	referenceKind: o,
	editableContexts: mr,
	validate: a
}), Dr = (e, t) => ({
	typeId: e,
	typeVersion: 1,
	fields: [...Tr, ...t]
}), Or = [
	{
		typeId: "TwinMetadata",
		typeVersion: 1,
		fields: [Er("twin.metadata", ["metadata"], "json", null, "unitless", (e) => {
			try {
				return lr(e), { ok: !0 };
			} catch (e) {
				return {
					ok: !1,
					reason: e instanceof Error ? e.message : "invalid_twin_metadata"
				};
			}
		}), Er("twin.target-component", ["metadata", "targetComponentId"], "reference", null, "unitless", (e) => hr(e === null || typeof e == "string" ? null : "requires_component_reference"), "scene-object")]
	},
	Dr("SceneNode", []),
	Dr("StaticMesh", [
		Er("mesh.mobility", ["mobility"], "enum", "static", "unitless", (e) => hr(e === void 0 || e === "static" || e === "movable" ? null : "requires_web_mesh_mobility")),
		Er("mesh.builtin-shape", ["shape"], "enum", void 0, "unitless", (e) => hr(e === void 0 || typeof e == "string" && _t(e) ? null : "requires_builtin_shape")),
		Er("mesh.asset", ["meshAsset"], "reference", null, "unitless", (e) => hr(e === null || br(e) ? null : "requires_asset_reference"), "asset"),
		Er("appearance.color", ["color"], "integer", 9086152, "packed-srgb", yr),
		Er("material.overrides", ["materialOverrides"], "json", [], "unitless", xr)
	]),
	Dr("SkeletalMesh", [
		Er("mesh.asset", ["meshAsset"], "reference", null, "unitless", (e) => hr(br(e) ? null : "requires_asset_reference"), "asset"),
		Er("skin.binding", ["skinBinding"], "json", null, "unitless", Sr),
		Er("animation.playback", ["playback"], "json", null, "unitless", Cr),
		Er("import.source-binding", ["sourceBinding"], "json", null, "unitless", wr),
		Er("material.overrides", ["materialOverrides"], "json", [], "unitless", xr)
	]),
	Dr("Camera", [Er("camera.horizontal-fov", ["horizontalFovDegrees"], "number", 90, "degrees", _r)]),
	Dr("PlayerStart", []),
	...[
		"DirectionalLight",
		"PointLight",
		"SpotLight"
	].map((e) => Dr(e, [
		Er("light.color", ["color"], "integer", 16777215, "packed-srgb", yr),
		Er("light.intensity", ["intensity"], "number", 1, "unitless", vr),
		Er("light.range", ["rangeMeters"], "number", 10, "meters", _r),
		Er("light.inner-cone", ["innerConeDegrees"], "number", 20, "degrees", vr),
		Er("light.outer-cone", ["outerConeDegrees"], "number", 40, "degrees", _r),
		Er("light.cast-shadow", ["castShadow"], "boolean", !1, "unitless", (e) => hr(typeof e == "boolean" ? null : "requires_boolean"))
	]))
];
for (let e of Or) dn.has(e.typeId, e.typeVersion) || dn.register(e);
//#endregion
//#region src/composition/CompositionObjects.ts
var kr = [
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
], Ar = /* @__PURE__ */ new Set([
	"id",
	"ownerActorId",
	"parentComponentId",
	"attachmentParent",
	"type",
	"typeVersion",
	"localTransform",
	"shape"
]);
function jr(e) {
	let t = yt(e.kind, e.id, e.componentId);
	return {
		...t,
		name: e.name,
		components: [{
			...t.components[0],
			...e.properties,
			localTransform: {
				positionMeters: e.position,
				rotationXyzw: e.rotation,
				scale: e.scale
			}
		}]
	};
}
function Mr(e) {
	let t = [
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
	if (!e || typeof e != "object" || Array.isArray(e) || Object.keys(e).some((e) => !t.includes(e)) || t.some((t) => !Object.hasOwn(e, t))) throw Error("지원하지 않는 통합 객체 데이터입니다.");
	let n = e, r = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
	if (!r.test(n.id) || !r.test(n.componentId) || n.id === n.componentId || !kr.includes(n.kind) || typeof n.name != "string" || !n.name.trim() || n.name.length > 150 || typeof n.visible != "boolean") throw Error("잘못된 통합 객체입니다.");
	if (!n.properties || typeof n.properties != "object" || Array.isArray(n.properties)) throw Error("잘못된 객체 속성입니다.");
	let i = yt(n.kind, n.id, n.componentId).components[0], a = Object.keys(i).filter((e) => !Ar.has(e)).sort();
	if (Object.keys(n.properties).sort().join() !== a.join()) throw Error("지원하지 않는 객체 속성입니다.");
	if (!Array.isArray(n.rotation) || Math.abs(Math.hypot(...n.rotation) - 1) > 1e-5) throw Error("잘못된 객체 회전입니다.");
	let o = dn.validate(i.type, 1, jr(n).components[0], "load");
	if (o.length) throw Error("잘못된 객체 속성: " + o.map((e) => e.fieldId).join(", "));
	if (n.kind === "Camera" && Number(n.properties.horizontalFovDegrees) >= 180 || n.kind === "SpotLight" && (Number(n.properties.innerConeDegrees) > Number(n.properties.outerConeDegrees) || Number(n.properties.outerConeDegrees) > 90)) throw Error("카메라/스팟 라이트 각도가 유효하지 않습니다.");
}
//#endregion
//#region src/domain/defaultScene.ts
var Nr = "00000000-0000-4000-8000-000000000000";
function Pr(e = Nr, t = () => crypto.randomUUID()) {
	let n = (e, n, r, i = [
		0,
		0,
		0
	], a = [
		1,
		1,
		1
	]) => {
		let o = yt(e, t(), t());
		return {
			...o,
			name: n,
			components: o.components.map((e) => ({
				...e,
				...e.type === "DirectionalLight" ? { intensity: 3 } : {},
				...e.type === "PrimitiveCube" ? { color: 9607071 } : {},
				localTransform: {
					positionMeters: Tn(r),
					rotationXyzw: Pn(i),
					scale: On(a)
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
var Fr = Pr(void 0, () => "template").actors;
function Ir(e) {
	let t = (e) => Array.isArray(e) ? e.map(t) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t({
		name: e.name,
		classId: e.classId,
		tags: e.tags,
		components: e.components.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !["id", "ownerActorId"].includes(e))))
	}));
}
var Lr = new Set(Fr.map(Ir));
function Rr(e) {
	return Fr.some((t) => t.name === e.name && t.classId === e.classId) && Lr.has(Ir(e));
}
var zr = (e) => [
	"PlayerStart",
	"Camera",
	"DirectionalLight",
	"PointLight",
	"SpotLight"
].includes(e.type);
function Br(e) {
	return Rr(e) || e.components.some(zr) && !e.components.some((e) => [
		"PrimitiveCube",
		"StaticMesh",
		"SkeletalMesh"
	].includes(e.type));
}
function Vr(e) {
	return e.components.some(zr) ? {
		...e,
		components: e.components.map((e) => zr(e) ? {
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
var Hr = /* @__PURE__ */ new WeakMap();
function Ur(e) {
	let t = Hr.get(e);
	if (t) return t;
	let n = e.actors.filter((e) => !Br(e)), r = new Set(n.map((e) => e.id)), i = n.map((t) => {
		let n = Vr(t);
		return {
			...n,
			components: n.components.map((n) => N(n) && n.attachmentParent && !r.has(n.attachmentParent.actorId) ? {
				...n,
				attachmentParent: null,
				localTransform: Un(e, t.id)
			} : n)
		};
	});
	return Hr.set(e, i), i;
}
//#endregion
//#region src/delivery/SpatialCells.ts
var Wr = 10;
function Gr(e) {
	if (!Number.isFinite(e) || e < 1 || e > 1e4) throw Error("공간 셀 크기는 1–10,000m입니다.");
}
function Kr(e) {
	return e.components.some((e) => e.type === "TestScript" && Xt(e).manifest.sdkVersion === 5 ? !1 : ![
		"StaticMesh",
		"PrimitiveCube",
		"SceneNode",
		"TwinMetadata"
	].includes(e.type) || e.type === "StaticMesh" && e.mobility !== "static");
}
function qr(e) {
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
		if (N(e) && e.attachmentParent && o.push(e.attachmentParent.actorId), e.type === "TestScript") for (let t of nn(e)) {
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
function Jr(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let e of t) for (let t of e.actors) {
		if (n.has(t)) throw Error("Duplicate spatial Actor");
		n.set(t, e);
	}
	if (n.size !== e.actors.length || e.actors.some((e) => !n.has(e.id))) throw Error("Incomplete spatial Actor partition");
	for (let t of qr(e)) {
		let e = n.get(t[0].id);
		if (t.some((t) => n.get(t.id) !== e)) throw Error("Split spatial dependency");
		if (t.some(Kr) && e.bounds !== null) throw Error("Dynamic spatial Actor must remain resident");
	}
}
function Yr(e, t) {
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
//#region src/addons/AddonProperties.ts
var Xr = (e) => JSON.stringify([
	e.compositionId,
	e.mountId,
	e.actorId,
	e.componentId
]);
function Zr(e) {
	if (!e || typeof e != "object" || Object.keys(e).sort().join() !== "actorId,componentId,compositionId,mountId") throw Error("Invalid addon target");
	let t = e;
	for (let e of [
		t.compositionId,
		t.actorId,
		t.componentId,
		...t.mountId === null ? [] : [t.mountId]
	]) if (typeof e != "string" || !/^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,127}$/.test(e)) throw Error("Invalid addon target identifier");
}
function Qr(e) {
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
function $r(e, t, n) {
	if (!["runtime", "persistent"].includes(n) || !t || typeof t != "object" || Array.isArray(t) || !Object.keys(t).length || Object.keys(t).length > 32) throw Error("Invalid addon property batch");
	let r = {};
	for (let [i, a] of Object.entries(t)) {
		let t = e.properties.find((e) => e.name === i);
		if (!t || t.access !== "read-write") throw Error(`Addon property is not writable: ${i}`);
		if (t.storage !== "both" && t.storage !== n) throw Error(`Addon property ${i} does not allow ${n} changes`);
		if (Mt(e.settings.find((e) => e.key === t.setting), a), t.format === "color" && (typeof a != "string" || !/^#[a-fA-F0-9]{6}$/.test(a))) throw Error(`Invalid color property ${i}`);
		r[t.setting] = a;
	}
	return Object.freeze(r);
}
function ei(e, t) {
	return Object.freeze(Object.fromEntries(e.properties.map((e) => [e.name, t[e.setting]])));
}
var ti = class {
	manifest;
	saved;
	temporary = {};
	remote = {};
	listeners = /* @__PURE__ */ new Set();
	revision = 0;
	constructor(e, t) {
		this.manifest = e, Nt(e, t), this.saved = Object.freeze({ ...t });
	}
	get settings() {
		return Object.freeze({
			...this.saved,
			...this.remote,
			...this.temporary
		});
	}
	get values() {
		return ei(this.manifest, this.settings);
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
	apply(e, t, n, r) {
		if (n !== this.revision) throw Error("Addon property revision conflict");
		let i = $r(this.manifest, e, t), a = {
			...this.saved,
			...i
		};
		if (Nt(this.manifest, t === "persistent" ? a : {
			...this.settings,
			...i
		}), t === "persistent") {
			if (!r) throw Error("Persistent addon edits unavailable in this host");
			r(Object.freeze(a)), this.saved = Object.freeze(a), this.temporary = Object.freeze(Object.fromEntries(Object.entries(this.temporary).filter(([e]) => !Object.hasOwn(i, e))));
		} else this.temporary = Object.freeze({
			...this.temporary,
			...i
		});
		this.revision++;
		let o = Object.keys(e);
		this.notify(o);
	}
	restore(e) {
		Nt(this.manifest, e), JSON.stringify(this.saved) !== JSON.stringify(e) && (this.saved = Object.freeze({ ...e }), this.revision++, this.notify(this.manifest.properties.map((e) => e.name)));
	}
	mirror(e) {
		let t = {
			...this.saved,
			...e
		};
		Nt(this.manifest, t);
		let n = JSON.stringify(this.settings) !== JSON.stringify(t);
		this.remote = Object.freeze({ ...e }), this.temporary = {}, n && (this.revision++, this.notify(this.manifest.properties.map((e) => e.name)));
	}
	dispose() {
		this.temporary = {}, this.remote = {}, this.listeners.clear();
	}
};
//#endregion
//#region src/addons/AddonOverrides.ts
function ni(e, t, n) {
	if (!Array.isArray(e) || e.length > 4096) throw Error("Addon override limit exceeded");
	let r = /* @__PURE__ */ new Set();
	for (let i of e) {
		if (!i || Object.keys(i).sort().join() !== "reference,settings,target") throw Error("Invalid addon override");
		if (Zr(i.target), i.target.compositionId !== t || i.target.mountId !== null && !n.includes(i.target.mountId)) throw Error("Addon override belongs to another placement");
		let e = i.reference;
		if (!e || Object.keys(e).sort().join() !== "codeHash,packageId,version" || !/^[a-z][a-z0-9.-]{2,95}$/.test(e.packageId) || !/^\d+\.\d+\.\d+$/.test(e.version) || !/^[a-f0-9]{64}$/.test(e.codeHash)) throw Error("Invalid addon override binding");
		if (!i.settings || typeof i.settings != "object" || Array.isArray(i.settings) || Object.keys(i.settings).length > 32 || Object.entries(i.settings).some(([e, t]) => !/^[a-z][a-zA-Z0-9]{0,63}$/.test(e) || [
			"constructor",
			"prototype",
			"__proto__"
		].includes(e) || !(t === null || typeof t == "string" && t.length <= 4096 || typeof t == "boolean" || typeof t == "number" && Number.isFinite(t)))) throw Error("Invalid addon override settings");
		let a = Xr(i.target);
		if (r.has(a)) throw Error("Duplicate addon override");
		r.add(a);
	}
}
function ri(e, t, n) {
	let r = e?.find((e) => Xr(e.target) === Xr(t));
	if (r) {
		if (r.reference.codeHash !== n.codeHash || r.reference.packageId !== n.packageId || r.reference.version !== n.version) throw Error("Saved addon override requires its exact package version");
		return r.settings;
	}
}
//#endregion
//#region src/composition/CompositionDocument.ts
var ii = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
function ai(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e) || Object.keys(e).some((e) => !t.includes(e))) throw Error("지원하지 않는 통합 레벨 데이터입니다.");
	return e;
}
function oi(e) {
	if (typeof e != "string" || !ii.test(e)) throw Error("잘못된 레벨 ID입니다.");
}
function si(e) {
	if (typeof e != "string" || !e.trim() || e.length > 150) throw Error("이름은 1–150자로 입력하세요.");
}
function ci(e) {
	let t = ai(e, [
		"kind",
		"projectId",
		"documentId",
		"candidateId"
	]);
	if (t.kind === "desktop") {
		if (oi(t.projectId), oi(t.documentId), t.candidateId !== void 0) throw Error("Invalid locator");
	} else if (t.kind === "web") {
		if (oi(t.documentId), t.projectId !== void 0 || t.candidateId !== void 0) throw Error("Invalid locator");
	} else if (t.kind === "candidate" && typeof t.candidateId == "string" && t.candidateId.startsWith("file-")) {
		if (oi(t.candidateId.slice(5)), t.projectId !== void 0 || t.documentId !== void 0) throw Error("Invalid locator");
	} else throw Error("등록된 저장 레벨만 참조할 수 있습니다.");
}
function li(e) {
	let t = ai(e, [
		"source",
		"revision",
		"assetRevision"
	]);
	if (ci(t.source), !Number.isSafeInteger(t.revision) || Number(t.revision) < 1 || typeof t.assetRevision != "string" || !/^(?:[1-9][0-9]*|[a-f0-9]{64})$/.test(t.assetRevision)) throw Error("잘못된 고정 버전입니다.");
}
function ui(e) {
	let t = ai(e, [
		"kind",
		"version",
		"id",
		"name",
		"mounts",
		"objects",
		"addonOverrides"
	]);
	if (t.kind !== "Composition" || ![1, 2].includes(Number(t.version)) || typeof t.version != "number") throw Error("지원하지 않는 통합 문서 버전입니다.");
	if (oi(t.id), si(t.name), !Array.isArray(t.mounts) || t.mounts.length > 1e4 || JSON.stringify(t).length > 8388608) throw Error("통합 문서 메타데이터 한도를 초과했습니다.");
	let n = /* @__PURE__ */ new Set();
	for (let e of t.mounts) {
		let t = ai(e, [
			"id",
			"name",
			"pin",
			"position",
			"rotation",
			"visible",
			"loaded"
		]);
		if (oi(t.id), si(t.name), li(t.pin), n.has(t.id)) throw Error("중복 배치 ID입니다.");
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
			if (Mr(e), n.has(e.id) || n.has(e.componentId)) throw Error("중복 통합 객체 ID입니다.");
			n.add(e.id), n.add(e.componentId);
		}
	}
	return t.addonOverrides !== void 0 && ni(t.addonOverrides, t.id, t.mounts.map((e) => e.id)), structuredClone(e);
}
function di(e) {
	return e.kind === "desktop" ? `desktop:${e.projectId.toLowerCase()}:${e.documentId.toLowerCase()}` : e.kind === "web" ? `web:${e.documentId.toLowerCase()}` : `candidate:${e.candidateId}`;
}
function fi(e) {
	return `${di(e.source)}@${e.revision}:${e.assetRevision}`;
}
//#endregion
//#region src/delivery/ChunkContract.ts
var pi = 4 * 1024 ** 2, mi = "dt-static-composition-1", hi = "dt-static-composition-2", gi = "dt-static-composition-3", _i = "dt-static-composition-4", vi = "dt-static-composition-5", yi = {
	manifest: 16 * 1024 ** 2,
	file: 256 * 1024 ** 2,
	files: 1e5,
	total: 64 * 1024 ** 3
}, bi = (e) => typeof e == "string" && /^[a-f0-9]{64}$/.test(e);
function I(e) {
	let t = (e) => {
		if (Array.isArray(e)) return e.map(t);
		if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0).sort(([e], [t]) => e < t ? -1 : +(e > t)).map(([e, n]) => [e, t(n)]));
		if (typeof e == "number" && !Number.isFinite(e)) throw Error("Non-finite package number");
		return e;
	};
	return new TextEncoder().encode(JSON.stringify(t(e)));
}
var xi = (e) => {
	if (!bi(e)) throw Error("Invalid content hash");
	return `objects/${e}`;
}, Si = (e) => {
	if (!bi(e)) throw Error("Invalid release hash");
	return `releases/${e}.json`;
};
function Ci(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e) || Object.keys(e).some((e) => !t.includes(e)) || t.some((t) => !Object.hasOwn(e, t))) throw Error("Unsupported package fields");
}
function wi(e, t) {
	if (!Number.isSafeInteger(e) || Number(e) < 0 || Number(e) > t) throw Error("Package byte/count limit");
}
function Ti(e, t) {
	if (Ci(e, ["hash", "bytes"]), !bi(e.hash)) throw Error("Invalid hash");
	wi(e.bytes, t);
}
function Ei(e) {
	let t = !!(e && typeof e == "object" && e.version === 5), n = !!(e && typeof e == "object" && (e.version === 4 || t && Object.hasOwn(e, "cells"))), r = n || !!(e && typeof e == "object" && (e.version === 3 || t && Object.hasOwn(e, "spatial"))), i = t || r || !!(e && typeof e == "object" && e.version === 2);
	if (Ci(e, [
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
	]), e.kind !== "dt-chunks" || e.version !== (t ? 5 : n ? 4 : r ? 3 : i ? 2 : 1) || e.contract !== (t ? "dt-static-composition-5" : n ? "dt-static-composition-4" : r ? "dt-static-composition-3" : i ? "dt-static-composition-2" : "dt-static-composition-1") || e.chunkBytes !== pi) throw Error("Unsupported delivery/runtime contract");
	if (!Array.isArray(e.files) || e.files.length > yi.files || !Array.isArray(e.levels) || !Array.isArray(e.mounts) || I(e).length > yi.manifest) throw Error("Package metadata limit");
	let a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = 0;
	for (let t of e.files) {
		if (Ci(t, [
			"hash",
			"bytes",
			"chunks"
		]), !bi(t.hash)) throw Error("Invalid file hash");
		if (wi(t.bytes, yi.file), a.has(t.hash) || !Array.isArray(t.chunks) || t.chunks.length !== Math.ceil(t.bytes / pi)) throw Error("Duplicate file or invalid chunk layout");
		let e = 0;
		for (let n = 0; n < t.chunks.length; n++) {
			let r = t.chunks[n];
			if (Ti(r, pi), r.bytes !== Math.min(pi, t.bytes - e) || o.has(r.hash) && o.get(r.hash) !== r.bytes) throw Error("Conflicting chunk size/order");
			e += r.bytes, o.set(r.hash, r.bytes);
		}
		if (e !== t.bytes) throw Error("Incomplete file");
		s += e, a.set(t.hash, t);
	}
	if (s > yi.total) throw Error("Package total byte limit");
	if (t && e.addonBundle !== null && (!bi(e.addonBundle) || !a.has(e.addonBundle) || a.get(e.addonBundle).bytes > 4e7)) throw Error("Invalid addon bundle reference");
	let c = /* @__PURE__ */ new Set();
	for (let t of e.levels) {
		if (Ci(t, [
			"hash",
			"actors",
			"bytes"
		]), !bi(t.hash) || !a.has(t.hash) || c.has(t.hash) || a.get(t.hash).bytes > yi.manifest) throw Error("Invalid level metadata reference");
		wi(t.actors, 1e5), wi(t.bytes, yi.total), c.add(t.hash);
	}
	let l = e.mounts.map((t) => {
		if (Ci(t, [
			"id",
			"name",
			"level",
			"position",
			"rotation",
			"visible",
			"loaded"
		]), !bi(t.level) || !c.has(t.level)) throw Error("Missing mounted level");
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
	if (t && ni(e.addonOverrides, e.id, e.mounts.map((e) => e.id)), r) {
		if (!Array.isArray(e.spatial) || e.spatial.length !== c.size) throw Error("Incomplete spatial index");
		let t = /* @__PURE__ */ new Set();
		for (let n of e.spatial) {
			if (Ci(n, ["level", "bounds"]), typeof n.level != "string" || !c.has(n.level) || t.has(n.level)) throw Error("Invalid spatial level");
			if (t.add(n.level), n.bounds !== null) {
				Ci(n.bounds, ["min", "max"]);
				let { min: e, max: t } = n.bounds;
				if (!Array.isArray(e) || !Array.isArray(t) || e.length !== 3 || t.length !== 3 || e.some((e, n) => !Number.isFinite(e) || !Number.isFinite(t[n]) || e > t[n])) throw Error("Invalid spatial bounds");
			}
		}
	}
	if (n) {
		if (!Array.isArray(e.cells) || e.cells.length !== c.size) throw Error("Incomplete cell index");
		let t = /* @__PURE__ */ new Set();
		for (let n of e.cells) {
			if (Ci(n, [
				"level",
				"size",
				"entries"
			]), typeof n.level != "string" || !c.has(n.level) || t.has(n.level) || !Array.isArray(n.entries)) throw Error("Invalid cell level");
			t.add(n.level), Gr(n.size);
			let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
			for (let e of n.entries) {
				if (Ci(e, [
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
					Ci(e.bounds, ["min", "max"]);
					let { min: t, max: n } = e.bounds;
					if (!Array.isArray(t) || !Array.isArray(n) || t.length !== 3 || n.length !== 3 || t.some((e, t) => !Number.isFinite(e) || !Number.isFinite(n[t]) || e > n[t])) throw Error("Invalid cell bounds");
				}
			}
			if (i.size !== e.levels.find((e) => e.hash === n.level)?.actors) throw Error("Cell Actor count mismatch");
		}
		let n = e.cells;
		if (e.mounts.reduce((e, t) => e + n.find((e) => e.level === t.level).entries.length, 0) > 1e4) throw Error("Spatial cell mount limit");
	}
	return ui({
		kind: "Composition",
		version: i ? 2 : 1,
		id: e.id,
		name: e.name,
		mounts: l,
		...i ? { objects: e.objects } : {}
	}), structuredClone(e);
}
function Di(e) {
	return ui({
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
function Oi(e) {
	return new Map(e.files.flatMap((e) => e.chunks.map((e) => [e.hash, e.bytes])));
}
async function ki(e, t) {
	if (Ei(e), Ei(t), e.id !== t.id) throw Error("Delta belongs to another composition");
	let n = Oi(e), r = Oi(t);
	return {
		kind: "dt-chunks-delta",
		version: 1,
		base: await Vt(I(e)),
		target: await Vt(I(t)),
		added: [...r.keys()].filter((e) => !n.has(e)).sort(),
		reused: [...r.keys()].filter((e) => n.has(e)).sort(),
		removed: [...n.keys()].filter((e) => !r.has(e)).sort()
	};
}
async function Ai(e, t, n) {
	let r = await ki(t, n);
	if (new TextDecoder().decode(I(r)) !== new TextDecoder().decode(I(e))) throw Error("Delta base, target or closure mismatch");
	return r;
}
//#endregion
//#region src/delivery/ActorIndex.ts
function ji(e) {
	return JSON.stringify([
		e.compositionId,
		e.mountId,
		e.actorId
	]);
}
function Mi(e, t) {
	let n = vt(t), r = /* @__PURE__ */ new Set();
	for (; n;) {
		if (r.has(n.id)) throw Error("Actor attachment cycle");
		r.add(n.id);
		let t = n.attachmentParent;
		if (!t) return !1;
		if (t.kind === "bone" || t.kind === "socket") return !0;
		let i = e.actors.find((e) => e.id === t.actorId), a = i?.components.find((e) => e.id === t.componentId);
		if (!a || !N(a)) throw Error("Actor parent missing");
		for (n = a; n.parentComponentId;) {
			let e = i?.components.find((e) => e.id === n.parentComponentId);
			if (!e || !N(e) || r.has(e.id)) throw Error("Actor component ancestry invalid");
			r.add(n.id), n = e;
		}
	}
	return !1;
}
function Ni(e, t) {
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
function Pi(e, t, n) {
	if (!bi(t)) throw Error("Invalid actor release");
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
			serviceKey: ji(a),
			actorName: n.name,
			classId: n.classId,
			tags: [...n.tags],
			rootComponentId: n.rootComponentId,
			attachmentParent: structuredClone(vt(n)?.attachmentParent ?? null),
			components: n.components.map((e) => ({
				id: e.id,
				type: e.type,
				parentComponentId: N(e) ? e.parentComponentId : null
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
			let r = vt(n) ? Mi(e, n) ? "bone-socket-unsupported" : "static" : "no-spatial-root";
			i(n, {
				mountId: t.id,
				mountName: t.name,
				levelHash: t.level,
				levelId: e.id,
				origin: "level",
				sourceActorIds: Object.entries(e.authoring.ueImport?.sourceActorIds ?? {}).filter(([, e]) => e === n.id).map(([e]) => e),
				folder: Ni(e, n),
				sourceWorldMatrix: r === "static" ? Hn(e, n.id) : null,
				spatialStatus: r,
				excludedSourceDefault: Rr(n),
				visible: t.visible,
				loaded: t.loaded
			});
		}
	}
	for (let t of e.objects ?? []) {
		let e = jr(t);
		i(e, {
			mountId: null,
			mountName: "통합레벨 자체 객체",
			levelHash: null,
			levelId: null,
			origin: "composition",
			sourceActorIds: [],
			folder: null,
			sourceWorldMatrix: Ln(vt(e).localTransform),
			spatialStatus: "static",
			excludedSourceDefault: !1,
			loaded: !0,
			visible: t.visible
		});
	}
	return Fi({
		kind: "dt-actors",
		version: 1,
		releaseHash: t,
		compositionId: e.id,
		coordinateSystem: "RH_Y_UP_METERS_V1",
		matrixLayout: "row-major",
		actors: r
	}, e);
}
function Fi(e, t) {
	if (e.compositionId !== t.id) throw Error("Actor composition mismatch");
	let n = {
		...e,
		actors: e.actors.map((e) => {
			let n = e.mountId === null ? null : t.mounts.find((t) => t.id === e.mountId && t.level === e.levelHash);
			if (e.mountId !== null && !n) throw Error("Actor mount mismatch");
			let r = e.sourceWorldMatrix ? n ? Rn(Ln({
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
			] : null, a = i ? En(i) : null;
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
	if (I(n).length > 64 * 1024 ** 2) throw Error("Actor index exceeds 64 MiB");
	return n;
}
//#endregion
//#region src/delivery/ActorPanel.ts
function Ii(e, t, n = e) {
	let r = (e, t = "", n = "") => {
		let r = document.createElement(e);
		return r.textContent = t, r.className = n, r;
	}, i = r("h3", "액터 목록"), a = r("input"), o = r("p"), s = r("div", "", "actor-list"), c = r("div", "", "actor-detail"), l = r("div", "", "actor-paging"), u = r("button", "이전"), d = r("button", "다음"), f = r("span");
	a.type = "search", a.placeholder = "액터 이름 / ID / 레벨 검색", a.setAttribute("aria-label", "액터 검색"), c.setAttribute("aria-label", "액터 상세"), l.append(u, f, d), e.append(i, a, o, s, l), n.append(c);
	let p, m = 0;
	function h(e, n = !1) {
		p = e, c.replaceChildren();
		for (let t of s.querySelectorAll("button")) t.setAttribute("aria-pressed", String(t.dataset.key === (e ? ji(e) : "")));
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
		h(p ? e.find((e) => e.serviceKey === ji(p) && e.releaseHash === p.releaseHash) : void 0);
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
//#region src/delivery/Publication.ts
var Li = class extends Error {
	code;
	constructor(e) {
		super(`Publication: ${e}`), this.code = e;
	}
};
function Ri(e) {
	if (typeof e != "string" || !/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/.test(e) || [
		"objects",
		"releases",
		"equipment",
		"deltas"
	].includes(e)) throw new Li("invalid");
}
//#endregion
//#region src/domain/uniqueName.ts
var zi = (e) => e.trim().normalize("NFC").toLowerCase();
function Bi(e, t) {
	let n = e.trim();
	if (!n) throw Error("이름을 입력하세요.");
	let r = new Set(Array.from(t, zi));
	if (!r.has(zi(n))) return n;
	let i = /^(.*)_(\d+)$/u.exec(n), a = i?.[1] || n, o = i ? BigInt(i[2]) + 1n : 1n;
	for (; r.has(zi(`${a}_${o}`));) o++;
	return `${a}_${o}`;
}
//#endregion
//#region src/assets/ContentDeletion.ts
function Vi(e) {
	let t = e.importSettings;
	return !t.duplicatedFrom && [
		"sourcePath",
		"sourceMaterialId",
		"candidateSourceAssetId",
		"ueSourceAssetId",
		"ueSourcePath"
	].some((e) => typeof t[e] == "string" && t[e] !== "");
}
//#endregion
//#region src/assets/ContentFolderDeletion.ts
function Hi(e, t) {
	if (!e.folders.some((e) => e.id === t)) throw Error("삭제할 폴더가 없습니다. 목록을 새로 확인하세요.");
	let n = /* @__PURE__ */ new Set([t]), r = [t], i = /* @__PURE__ */ new Map();
	for (let t of e.folders) t.parentId !== null && i.set(t.parentId, [...i.get(t.parentId) ?? [], t.id]);
	for (let e = 0; e < r.length; e++) for (let t of i.get(r[e]) ?? []) {
		if (n.has(t)) throw Error("폴더 순환 관계가 있어 삭제할 수 없습니다.");
		n.add(t), r.push(t);
	}
	return structuredClone({
		folderId: t,
		folders: e.folders.filter((e) => n.has(e.id)),
		assets: e.assets.filter((e) => e.folderId !== null && n.has(e.folderId))
	});
}
function Ui(e, t, n) {
	let r = Hi(e, t.folderId), i = (e) => [...e].sort((e, t) => e.id.localeCompare(t.id));
	if (JSON.stringify([i(r.folders), i(r.assets)]) !== JSON.stringify([i(t.folders), i(t.assets)])) throw Error("확인 이후 폴더 내용이 변경되었습니다. 삭제를 취소하고 목록을 다시 확인하세요.");
	let a = new Set(r.assets.map((e) => e.id));
	for (let t of r.assets) {
		if (Vi(t)) throw Error(t.name + ": Unreal 원본 에셋은 가져오기·새로고침 복구를 위해 보존하므로 폴더를 삭제할 수 없습니다.");
		let r = [...n.filter((e) => e.assetId === t.id).flatMap((e) => e.references), ...e.assets.filter((e) => !a.has(e.id)).flatMap((e) => e.dependencies.flatMap((n, r) => n.assetId === t.id ? [{
			ownerType: "Asset",
			ownerId: e.id,
			path: "dependencies[" + r + "]"
		}] : []))];
		if (r.length) throw new zt(t.id, r);
	}
	let o = e.revisions.filter((e) => a.has(e.assetId)), s = new Set(e.revisions.filter((e) => !a.has(e.assetId)).flatMap((e) => e.blobKeys));
	return {
		assetIds: [...a],
		folderIds: r.folders.map((e) => e.id),
		revisionIds: o.map((e) => e.id),
		blobKeys: [...new Set(o.flatMap((e) => e.blobKeys).filter((e) => !s.has(e)))]
	};
}
//#endregion
//#region src/assets/AssetStorage.ts
var Wi = class extends Error {}, Gi = class extends Error {}, Ki = class extends Error {};
function qi(e, t, n, r) {
	if (r && e.name !== r.expectedName) throw new Gi("에셋 이름이 다른 작업에서 변경되었습니다.");
	let i = r?.restoreName ?? e.name, a = Bi(i, n.filter((n) => n.id !== e.id && n.folderId === t).map((e) => e.name));
	if (r?.restoreName !== void 0 && a !== i) throw new Gi("복원할 이름을 다른 에셋이 사용하고 있습니다.");
	return {
		...e,
		folderId: t,
		name: a
	};
}
function Ji(e) {
	let t = e.trim();
	if (!t || t === "." || t === ".." || /[/\\]/u.test(t) || [...t].some((e) => e.charCodeAt(0) < 32)) throw new Gi("올바른 폴더 이름을 입력하세요.");
	return t;
}
var Yi = class {
	deferredBlobs;
	deferredSizes = [];
	restoringBlobs;
	releaseBlobs(e) {
		this.restoringBlobs || this.deferredBlobs || (this.deferredSizes = [...this.blobs.values()].map((e) => ({
			key: e.key,
			byteLength: e.bytes.byteLength
		})), this.deferredBlobs = e, this.blobs.clear());
	}
	retainedBlobBytes() {
		return [...this.blobs.values()].reduce((e, t) => e + t.bytes.byteLength, 0);
	}
	hasDeferredBlobs() {
		return !!this.deferredBlobs;
	}
	async restoreBlobs() {
		if (this.deferredBlobs) {
			if (this.restoringBlobs) return this.restoringBlobs;
			this.restoringBlobs = (async () => {
				let e = await this.deferredBlobs();
				if (Xi(e), JSON.stringify(e.assets) !== JSON.stringify([...this.assets.values()]) || JSON.stringify(e.revisions) !== JSON.stringify([...this.revisions.values()]) || JSON.stringify(e.folders) !== JSON.stringify([...this.folders.values()]) || e.blobs.length !== this.deferredSizes.length || this.deferredSizes.some((t) => !e.blobs.some((e) => e.key === t.key && e.bytes.byteLength === t.byteLength))) throw Error("Deferred registry revision mismatch");
				this.blobs = new Map(e.blobs.map((e) => [e.key, e])), this.deferredBlobs = void 0, this.deferredSizes = [];
			})();
			try {
				await this.restoringBlobs;
			} finally {
				this.restoringBlobs = void 0;
			}
		}
	}
	async snapshotCatalog() {
		return structuredClone({
			assets: [...this.assets.values()],
			revisions: [...this.revisions.values()],
			folders: [...this.folders.values()],
			blobSizes: this.deferredBlobs ? this.deferredSizes : [...this.blobs.values()].map((e) => ({
				key: e.key,
				byteLength: e.bytes.byteLength
			}))
		});
	}
	async snapshotAsset(e, t) {
		this.hasDeferredBlobs() && await this.restoreBlobs();
		let n = this.assets.get(e), r = n ? this.revisions.get(t ?? n.currentRevisionId) : void 0, i = r?.assetId === e ? r : void 0;
		return structuredClone({
			assets: n ? [n] : [],
			revisions: i ? [i] : [],
			blobs: i ? i.blobKeys.flatMap((e) => {
				let t = this.blobs.get(e);
				return t ? [t] : [];
			}) : [],
			folders: []
		});
	}
	currentRevisionId(e) {
		return this.requireAsset(e).currentRevisionId;
	}
	assets = /* @__PURE__ */ new Map();
	revisions = /* @__PURE__ */ new Map();
	blobs = /* @__PURE__ */ new Map();
	folders = /* @__PURE__ */ new Map();
	failure = null;
	injectFailure(e) {
		this.failure = e;
	}
	async commitImport(e) {
		let t = Ht(e), n = {
			...t,
			asset: {
				...t.asset,
				name: Bi(t.asset.name, [...this.assets.values()].filter((e) => e.folderId === t.asset.folderId).map((e) => e.name))
			}
		};
		if (this.assets.has(n.asset.id) || this.revisions.has(n.revision.id)) throw new Wi("Asset or revision UUID already exists.");
		if (n.asset.folderId !== null && !this.folders.has(n.asset.folderId)) throw new Gi("에셋을 넣을 폴더가 없습니다. 폴더를 다시 선택하세요.");
		let r = new Map(this.assets), i = new Map(this.revisions), a = new Map(this.blobs);
		return a.set(n.blob.key, n.blob), this.failIfInjected("after-blob"), i.set(n.revision.id, n.revision), this.failIfInjected("after-revision"), r.set(n.asset.id, n.asset), this.assets = r, this.revisions = i, this.blobs = a, structuredClone(n.asset);
	}
	async commitRevision(e, t, n, r, i) {
		let a = this.requireAsset(e);
		if (i !== void 0 && a.currentRevisionId !== i) throw new Wi("다른 창에서 에셋이 변경되었습니다. 다시 불러온 뒤 편집하세요.");
		if (t.assetId !== e || this.revisions.has(t.id)) throw new Wi("Revision identity is invalid or already exists.");
		let o = new Map(this.assets), s = new Map(this.revisions), c = new Map(this.blobs);
		c.set(n.key, {
			key: n.key,
			bytes: n.bytes.slice()
		}), s.set(t.id, structuredClone(t)), o.set(e, {
			...a,
			currentRevisionId: t.id,
			dependencies: r ? structuredClone(r) : a.dependencies
		}), this.assets = o, this.revisions = s, this.blobs = c;
	}
	async commitRevisions(e) {
		let t = It(e);
		this.hasDeferredBlobs() && await this.restoreBlobs();
		let n = new Map(this.assets), r = new Map(this.revisions), i = new Map(this.blobs);
		for (let e of t) {
			let t = this.requireAsset(e.assetId);
			if (t.currentRevisionId !== e.expectedRevisionId || r.has(e.revision.id)) throw new Wi("다른 창에서 에셋이 변경되었습니다. 다시 불러온 뒤 편집하세요.");
			i.set(e.blob.key, e.blob), this.failIfInjected("after-blob"), r.set(e.revision.id, e.revision), this.failIfInjected("after-revision"), n.set(e.assetId, {
				...t,
				currentRevisionId: e.revision.id,
				dependencies: e.dependencies ?? t.dependencies
			});
		}
		this.assets = n, this.revisions = r, this.blobs = i;
	}
	async setCurrentRevision(e, t) {
		let n = this.requireAsset(e), r = this.revisions.get(t);
		if (!r || r.assetId !== e) throw new Wi("Rollback revision does not belong to the asset.");
		this.assets.set(e, {
			...n,
			currentRevisionId: t
		});
	}
	async snapshot() {
		return this.hasDeferredBlobs() && await this.restoreBlobs(), structuredClone({
			assets: [...this.assets.values()],
			revisions: [...this.revisions.values()],
			blobs: [...this.blobs.values()],
			folders: [...this.folders.values()]
		});
	}
	async importSnapshot(e) {
		if (Xi(e), this.assets.size || this.revisions.size || this.blobs.size || this.folders.size) throw new Ki("Asset namespace must be empty before package restore.");
		this.assets = new Map(e.assets.map((e) => [e.id, structuredClone(e)])), this.revisions = new Map(e.revisions.map((e) => [e.id, structuredClone(e)])), this.blobs = new Map(e.blobs.map((e) => [e.key, {
			key: e.key,
			bytes: e.bytes.slice()
		}])), this.folders = new Map(e.folders.map((e) => [e.id, structuredClone(e)]));
	}
	async createFolder(e) {
		let t = structuredClone(e);
		if (!t.name.trim()) throw new Gi("Asset folder name is required.");
		if (this.folders.has(t.id)) throw new Gi("Asset folder UUID already exists.");
		if (t.parentId !== null && (t.parentId === t.id || !this.folders.has(t.parentId))) throw new Gi("Unknown or invalid parent asset folder.");
		this.folders.set(t.id, {
			...t,
			name: t.name.trim()
		});
	}
	async renameFolder(e, t, n) {
		let r = Ji(t), i = this.folders.get(e);
		if (!i || n !== void 0 && i.name !== n) throw new Gi("폴더가 없거나 다른 작업에서 이름이 변경되었습니다.");
		this.folders.set(e, {
			...i,
			name: r
		});
	}
	async renameAsset(e, t) {
		let n = this.requireAsset(e), r = t.trim();
		if (!r) throw new Wi("Asset name is required.");
		let i = {
			...n,
			name: Bi(r, [...this.assets.values()].filter((t) => t.id !== e && t.folderId === n.folderId).map((e) => e.name))
		};
		return this.assets.set(e, i), structuredClone(i);
	}
	async moveAsset(e, t, n, r) {
		let i = this.requireAsset(e);
		if (n !== void 0 && i.folderId !== n) throw new Gi("에셋 폴더가 다른 작업에서 변경되었습니다. 목록을 새로 확인하세요.");
		if (t !== null && !this.folders.has(t)) throw new Gi(`Unknown asset folder ${t}.`);
		let a = qi(i, t, [...this.assets.values()], r);
		return this.assets.set(e, a), structuredClone(a);
	}
	async deleteAsset(e, t = []) {
		this.requireAsset(e);
		let n = [...this.assets.values()].flatMap((t) => t.dependencies.filter((t) => t.assetId === e).map((e, n) => ({
			ownerType: "Asset",
			ownerId: t.id,
			path: `dependencies[${n}]`
		}))), r = [...t, ...n];
		if (r.length > 0) throw new zt(e, r);
		let i = [...this.revisions.values()].filter((t) => t.assetId === e);
		i.forEach((e) => this.revisions.delete(e.id));
		let a = new Set([...this.revisions.values()].flatMap((e) => e.blobKeys));
		i.flatMap((e) => e.blobKeys).filter((e) => !a.has(e)).forEach((e) => this.blobs.delete(e)), this.assets.delete(e);
	}
	async deleteFolder(e, t) {
		let n = Ui({
			assets: [...this.assets.values()],
			revisions: [...this.revisions.values()],
			folders: [...this.folders.values()]
		}, e, t);
		n.assetIds.forEach((e) => this.assets.delete(e)), n.revisionIds.forEach((e) => this.revisions.delete(e)), n.blobKeys.forEach((e) => this.blobs.delete(e)), n.folderIds.forEach((e) => this.folders.delete(e));
	}
	requireAsset(e) {
		let t = this.assets.get(e);
		if (!t) throw new Rt(`Unknown asset ${e}.`);
		return t;
	}
	failIfInjected(e) {
		if (this.failure === e) throw this.failure = null, new DOMException("Transaction aborted.", "AbortError");
	}
};
function Xi(e) {
	let t = (e, t) => {
		if (new Set(e).size !== e.length) throw new Ki(`Duplicate ${t} identity.`);
	};
	t(e.assets.map((e) => e.id), "asset"), t(e.revisions.map((e) => e.id), "revision"), t(e.blobs.map((e) => e.key), "blob"), t(e.folders.map((e) => e.id), "folder");
	let n = new Map(e.revisions.map((e) => [e.id, e])), r = new Set(e.blobs.map((e) => e.key)), i = new Set(e.assets.map((e) => e.id)), a = new Set(e.folders.map((e) => e.id));
	for (let t of e.assets) {
		let e = n.get(t.currentRevisionId);
		if (!e || e.assetId !== t.id) throw new Ki(`Asset ${t.id} has an invalid current revision.`);
		if (t.folderId && !a.has(t.folderId)) throw new Ki(`Asset ${t.id} has an invalid folder.`);
		if (t.dependencies.some((e) => !i.has(e.assetId))) throw new Ki(`Asset ${t.id} has a missing dependency.`);
	}
	for (let t of e.revisions) if (!i.has(t.assetId) || t.blobKeys.some((e) => !r.has(e))) throw new Ki(`Revision ${t.id} has an invalid asset or blob reference.`);
}
//#endregion
//#region src/domain/WebEffects.ts
var Zi = {
	schemaVersion: 1,
	toneMapping: "none",
	exposure: 1,
	fog: {
		enabled: !1,
		color: 6649221,
		nearMeters: 10,
		farMeters: 100
	},
	particles: {
		enabled: !1,
		style: "steam",
		color: 14477812,
		count: 128,
		originMeters: [
			0,
			0,
			0
		],
		spreadMeters: .5,
		speedMetersPerSecond: .5,
		lifetimeSeconds: 3,
		sizeMeters: .1,
		seed: 1
	}
};
function Qi(e) {
	let t = (e, t) => {
		if (!e || typeof e != "object" || Array.isArray(e) || Object.keys(e).sort().join(",") !== [...t].sort().join(",")) throw Error("지원하지 않는 웹 효과 형식입니다.");
		return e;
	}, n = (e, t, n) => {
		if (typeof e != "number" || !Number.isFinite(e) || e < t || e > n) throw Error("웹 효과 수치가 허용 범위를 벗어났습니다.");
	}, r = (e) => {
		if (n(e, 0, 16777215), !Number.isInteger(e)) throw Error("웹 효과 색상은 정수여야 합니다.");
	}, i = t(e, [
		"schemaVersion",
		"toneMapping",
		"exposure",
		"fog",
		"particles"
	]);
	if (i.schemaVersion !== 1 || !["none", "aces"].includes(String(i.toneMapping))) throw Error("지원하지 않는 웹 효과 버전/톤 매핑입니다.");
	n(i.exposure, .1, 8);
	let a = t(i.fog, [
		"enabled",
		"color",
		"nearMeters",
		"farMeters"
	]);
	if (typeof a.enabled != "boolean") throw Error("잘못된 안개 활성 값");
	if (r(a.color), n(a.nearMeters, 0, 1e5), n(a.farMeters, .01, 1e5), Number(a.nearMeters) >= Number(a.farMeters)) throw Error("안개 끝 거리는 시작 거리보다 커야 합니다.");
	let o = t(i.particles, [
		"enabled",
		"style",
		"color",
		"count",
		"originMeters",
		"spreadMeters",
		"speedMetersPerSecond",
		"lifetimeSeconds",
		"sizeMeters",
		"seed"
	]);
	if (typeof o.enabled != "boolean" || ![
		"steam",
		"sparks",
		"beacon"
	].includes(String(o.style))) throw Error("잘못된 파티클 종류");
	if (r(o.color), n(o.count, 1, 2048), n(o.seed, 0, 4294967295), !Number.isInteger(o.count) || !Number.isInteger(o.seed)) throw Error("파티클 개수와 seed는 정수여야 합니다.");
	if (!Array.isArray(o.originMeters) || o.originMeters.length !== 3) throw Error("잘못된 파티클 위치");
	o.originMeters.forEach((e) => n(e, -1e5, 1e5)), n(o.spreadMeters, 0, 100), n(o.speedMetersPerSecond, 0, 100), n(o.lifetimeSeconds, .1, 60), n(o.sizeMeters, .001, 10);
}
//#endregion
//#region src/assets/GlbStaticMeshImporter.ts
var $i = 1179937895, ea = 1313821514, ta = 5130562, na = class extends Bt {
	code;
	constructor(e, t) {
		super(t), this.code = e, this.name = "GlbImportError";
	}
}, ra = {
	singleImportBytes: 268435456,
	meshVertices: 2e6,
	meshIndices: 12e6,
	modelNodes: 1e4,
	worldBoundsMeters: 1e3,
	imageDimension: 8192,
	singleDecodedImageBytes: 268435456
};
function L(e, t = ra) {
	e.byteLength > t.singleImportBytes && z("resource-limit", `GLB exceeds the ${t.singleImportBytes} byte decode budget.`), e.byteLength < 20 && z("invalid-container", "GLB header or JSON chunk is incomplete.");
	let n = new DataView(e.buffer, e.byteOffset, e.byteLength);
	n.getUint32(0, !0) !== $i && z("invalid-container", "File signature is not GLB."), n.getUint32(4, !0) !== 2 && z("unsupported-profile", "Only GLB version 2 is supported."), n.getUint32(8, !0) !== e.byteLength && z("invalid-container", "GLB declared length does not match the file size.");
	let r = 12, i = 0, a = null, o = null;
	for (; r < e.byteLength;) {
		r + 8 > e.byteLength && z("invalid-container", "GLB chunk header is truncated.");
		let t = n.getUint32(r, !0), s = n.getUint32(r + 4, !0);
		r += 8, (t % 4 != 0 || r + t > e.byteLength) && z("invalid-container", "GLB chunk length is invalid.");
		let c = e.subarray(r, r + t);
		i === 0 && s !== ea && z("invalid-container", "The first GLB chunk must contain JSON."), s === ea ? (a && z("invalid-container", "GLB contains more than one JSON chunk."), a = c) : s === ta && (o && z("invalid-container", "GLB contains more than one binary chunk."), o = c), r += t, i += 1;
	}
	a || z("missing-data", "GLB JSON chunk is missing.");
	let s;
	try {
		let e = JSON.parse(ha(a));
		ma(e) || z("invalid-container", "GLB JSON root must be an object."), s = e;
	} catch {
		z("invalid-container", "GLB JSON chunk is not valid UTF-8 JSON.");
	}
	s.asset?.version !== "2.0" && z("unsupported-profile", "glTF asset.version must be 2.0.");
	let c = da(s.extensionsRequired, "extensionsRequired");
	c.length > 0 && z("unsupported-extension", `Unsupported required extension: ${c.join(", ")}.`), (la(s.skins).length > 0 || la(s.animations).length > 0) && z("unsupported-profile", "The initial StaticMesh profile does not support skins or animations.");
	let l = ua(s.buffers);
	l.length !== 1 && z("missing-data", "A self-contained GLB must declare exactly one buffer.");
	let u = l[0];
	typeof u.uri == "string" && ca(u.uri, "buffer.uri");
	let d = fa(u.byteLength, "buffer.byteLength");
	(!o || d > o.byteLength) && z("missing-data", "The embedded binary chunk is missing or shorter than buffer.byteLength.");
	let f = ua(s.bufferViews);
	for (let [e, n] of la(s.images).entries()) {
		let r = n;
		if (ma(r) && typeof r.uri == "string" && ca(r.uri, "image.uri"), ma(r) && r.bufferView !== void 0) {
			(!Number.isInteger(r.bufferView) || !f[r.bufferView] || typeof r.mimeType != "string") && z("missing-data", `Image ${e} has an invalid embedded source.`);
			let n = f[r.bufferView], i = pa(n.byteOffset, `image ${e}.byteOffset`), a = fa(n.byteLength, `image ${e}.byteLength`);
			R(o.subarray(i, i + a), r.mimeType, t);
		}
	}
	for (let [e, t] of f.entries()) t.buffer !== 0 && z("missing-data", `bufferView ${e} does not reference the embedded buffer.`), pa(t.byteOffset, `bufferView ${e}.byteOffset`) + fa(t.byteLength, `bufferView ${e}.byteLength`) > d && z("missing-data", `bufferView ${e} exceeds the embedded buffer.`);
	let p = ua(s.accessors), m = ua(s.meshes);
	m.length === 0 && z("missing-data", "GLB does not contain a mesh.");
	let h = 0, g = 0, _ = 0, v = null, y = [];
	for (let [e, n] of m.entries()) {
		let r = ua(n.primitives);
		r.length === 0 && z("missing-data", `Mesh ${e} has no primitives.`);
		for (let [n, i] of r.entries()) {
			la(i.targets).length > 0 && z("unsupported-profile", "Morph targets are outside the initial StaticMesh profile.");
			let r = (ma(i.attributes) ? i.attributes : null)?.POSITION;
			(!Number.isInteger(r) || r < 0 || r >= p.length) && z("missing-data", `Mesh ${e} primitive ${n} has no valid POSITION accessor.`);
			let a = p[r];
			if ((!Number.isInteger(a.bufferView) || !f[a.bufferView]) && z("missing-data", `POSITION accessor ${String(r)} has no valid bufferView.`), (a.componentType !== 5126 || a.type !== "VEC3") && z("unsupported-profile", "POSITION must use FLOAT VEC3 in the initial profile."), g += fa(a.count, `accessor ${String(r)}.count`), g > t.meshVertices && z("resource-limit", `Mesh exceeds the ${t.meshVertices} vertex budget.`), i.indices !== void 0) {
				let r = Number(i.indices);
				(!Number.isInteger(r) || r < 0 || r >= p.length) && z("missing-data", `Mesh ${e} primitive ${n} has invalid indices.`), _ += fa(p[r].count, `accessor ${r}.count`), _ > t.meshIndices && z("resource-limit", `Mesh exceeds the ${t.meshIndices} index budget.`);
			}
			v ??= a;
			let o = i.material === void 0 ? null : fa(i.material, `Mesh ${e} primitive ${n}.material`);
			o !== null && o >= la(s.materials).length && z("missing-data", `Mesh ${e} primitive ${n} has an invalid material.`), y.push({
				slotId: `mesh:${e}/primitive:${n}`,
				sourceMaterialIndex: o
			}), h += 1;
		}
	}
	let b = la(s.nodes).length;
	b > t.modelNodes && z("resource-limit", `GLB exceeds the ${t.modelNodes} node budget.`);
	let ee = sa(o, f, v, t.worldBoundsMeters);
	return {
		profile: "self-contained-static-mesh-glb-v1",
		gltfVersion: "2.0",
		meshCount: m.length,
		primitiveCount: h,
		vertexCount: g,
		indexCount: _,
		materialCount: la(s.materials).length,
		nodeCount: b,
		embeddedByteLength: d,
		materialSlots: y,
		...ee
	};
}
function R(e, t, n = ra) {
	let r = t === "image/png" ? ia(e) : t === "image/jpeg" ? aa(e) : t === "image/webp" ? oa(e) : null;
	r || z("unsupported-profile", `Unsupported or invalid embedded image ${t}.`);
	let { width: i, height: a } = r;
	return (i <= 0 || a <= 0 || i > n.imageDimension || a > n.imageDimension) && z("resource-limit", `Image ${i}×${a} exceeds the ${n.imageDimension}px dimension budget.`), i * a * 4 > n.singleDecodedImageBytes && z("resource-limit", `Image decoded RGBA size exceeds the ${n.singleDecodedImageBytes} byte budget.`), r;
}
function ia(e) {
	if (e.byteLength < 24 || ![
		137,
		80,
		78,
		71
	].every((t, n) => e[n] === t)) return null;
	let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
	return {
		width: t.getUint32(16),
		height: t.getUint32(20)
	};
}
function aa(e) {
	if (e[0] !== 255 || e[1] !== 216) return null;
	let t = 2;
	for (; t + 8 < e.byteLength;) {
		if (e[t] !== 255) return null;
		let n = e[t + 1], r = e[t + 2] << 8 | e[t + 3];
		if (r < 2 || t + 2 + r > e.byteLength) return null;
		if (n >= 192 && n <= 195) return {
			height: e[t + 5] << 8 | e[t + 6],
			width: e[t + 7] << 8 | e[t + 8]
		};
		t += 2 + r;
	}
	return null;
}
function oa(e) {
	if (e.byteLength < 30 || new TextDecoder().decode(e.subarray(0, 4)) !== "RIFF" || new TextDecoder().decode(e.subarray(8, 12)) !== "WEBP") return null;
	let t = new TextDecoder().decode(e.subarray(12, 16));
	if (t === "VP8 " && e[23] === 157 && e[24] === 1 && e[25] === 42) {
		let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
		return {
			width: t.getUint16(26, !0) & 16383,
			height: t.getUint16(28, !0) & 16383
		};
	}
	return t === "VP8L" && e[20] === 47 ? {
		width: 1 + e[21] + ((e[22] & 63) << 8),
		height: 1 + (e[22] >> 6) + (e[23] << 2) + ((e[24] & 15) << 10)
	} : t === "VP8X" ? {
		width: 1 + e[24] + (e[25] << 8) + (e[26] << 16),
		height: 1 + e[27] + (e[28] << 8) + (e[29] << 16)
	} : null;
}
function sa(e, t, n, r) {
	let i = t[n.bufferView], a = pa(i.byteOffset, "thumbnail bufferView.byteOffset"), o = pa(n.byteOffset, "thumbnail accessor.byteOffset"), s = i.byteStride === void 0 ? 12 : fa(i.byteStride, "thumbnail bufferView.byteStride"), c = fa(n.count, "thumbnail accessor.count");
	(s < 12 || a + o + Math.max(0, c - 1) * s + 12 > e.byteLength) && z("missing-data", "POSITION bytes exceed the embedded buffer.");
	let l = new DataView(e.buffer, e.byteOffset, e.byteLength), u = [], d = Math.max(1, Math.ceil(c / 256)), f = Infinity, p = Infinity, m = Infinity, h = -Infinity, g = -Infinity, _ = -Infinity;
	for (let e = 0; e < c; e += 1) {
		let t = a + o + e * s, n = l.getFloat32(t, !0), i = l.getFloat32(t + 4, !0), c = l.getFloat32(t + 8, !0);
		[
			n,
			i,
			c
		].every(Number.isFinite) || z("invalid-container", "POSITION contains a non-finite value."), Math.max(Math.abs(n), Math.abs(i), Math.abs(c)) > r && z("precision-range", `POSITION exceeds the validated ±${r}m world profile.`), f = Math.min(f, n), h = Math.max(h, n), p = Math.min(p, i), g = Math.max(g, i), m = Math.min(m, c), _ = Math.max(_, c), e % d === 0 && u.length < 256 && u.push([n, i]);
	}
	let v = Math.max(h - f, 1e-6), y = Math.max(g - p, 1e-6), b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 48"><rect width="64" height="48" fill="#151515"/><polygon points="${u.map(([e, t]) => {
		let n = 7 + (e - f) / v * 50, r = 41 - (t - p) / y * 34;
		return `${n.toFixed(2)},${r.toFixed(2)}`;
	}).join(" ")}" fill="#315f86" stroke="#83bcea" stroke-width="2"/></svg>`;
	return {
		thumbnailDataUrl: `data:image/svg+xml,${encodeURIComponent(b)}`,
		boundsMin: [
			f,
			p,
			m
		],
		boundsMax: [
			h,
			g,
			_
		]
	};
}
function ca(e, t) {
	let n = e.replaceAll("\\", "/"), r = /^[a-z][a-z0-9+.-]*:/iu.test(n) || n.startsWith("/") || /^[a-z]:\//iu.test(n), i = n.split("/").some((e) => e === "..");
	(r || i) && z("security-uri", `${t} contains a remote, absolute, or traversal URI.`), z("missing-data", `${t} references external data; the initial GLB profile requires embedded data.`);
}
function la(e) {
	return Array.isArray(e) ? e : [];
}
function ua(e) {
	return la(e);
}
function da(e, t) {
	return e === void 0 ? [] : ((!Array.isArray(e) || e.some((e) => typeof e != "string")) && z("invalid-container", `${t} must be an array of strings.`), e);
}
function fa(e, t) {
	return (!Number.isInteger(e) || e < 0) && z("invalid-container", `${t} must be a non-negative integer.`), e;
}
function pa(e, t) {
	return e === void 0 ? 0 : fa(e, t);
}
function ma(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function ha(e) {
	let t = e.byteLength;
	for (; t > 0 && (e[t - 1] === 0 || e[t - 1] === 32);) --t;
	return new TextDecoder("utf-8", { fatal: !0 }).decode(e.subarray(0, t));
}
function z(e, t) {
	throw new na(e, t);
}
//#endregion
//#region src/assets/StaticMeshLodAsset.ts
var ga = "static-mesh-lod-v1", _a = 1146047556, va = 32;
function ya(e) {
	return e.byteLength >= 4 && new DataView(e.buffer, e.byteOffset, e.byteLength).getUint32(0, !0) === _a;
}
function ba(e) {
	Ca(e.distanceMeters, e.hysteresis);
	let t = va + e.levels[0].byteLength + e.levels[1].byteLength;
	if (t > ra.singleImportBytes) throw Error("LOD asset exceeds the import byte budget.");
	let n = new Uint8Array(t), r = new DataView(n.buffer);
	return r.setUint32(0, _a, !0), r.setUint32(4, 1, !0), r.setFloat64(8, e.distanceMeters, !0), r.setFloat64(16, e.hysteresis, !0), r.setUint32(24, e.levels[0].byteLength, !0), r.setUint32(28, e.levels[1].byteLength, !0), n.set(e.levels[0], va), n.set(e.levels[1], va + e.levels[0].byteLength), n;
}
function xa(e) {
	if (e.byteLength < va || e.byteLength > ra.singleImportBytes) throw Error("Invalid LOD payload size.");
	let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
	if (t.getUint32(0, !0) !== _a || t.getUint32(4, !0) !== 1) throw Error("Unsupported LOD payload version.");
	let n = t.getFloat64(8, !0), r = t.getFloat64(16, !0);
	Ca(n, r);
	let i = t.getUint32(24, !0), a = t.getUint32(28, !0);
	if (!i || !a || va + i + a !== e.byteLength) throw Error("LOD payload lengths do not match.");
	return {
		distanceMeters: n,
		hysteresis: r,
		levels: [e.slice(va, va + i), e.slice(va + i)]
	};
}
function Sa(e) {
	let t = xa(e), n = t.levels.map((e) => L(e)), r = n[0], i = n[1];
	if (JSON.stringify(r.materialSlots.map(({ slotId: e }) => e)) !== JSON.stringify(i.materialSlots.map(({ slotId: e }) => e))) throw Error("LOD levels must have matching mesh/primitive material slot IDs.");
	let a = r.vertexCount + i.vertexCount, o = r.indexCount + i.indexCount;
	if (a > ra.meshVertices || o > ra.meshIndices || r.nodeCount + i.nodeCount > ra.modelNodes) throw Error(`Combined LOD geometry exceeds the decode budget. LOD 합계: 정점 ${a}/${ra.meshVertices}, 인덱스 ${o}/${ra.meshIndices}, 노드 ${r.nodeCount + i.nodeCount}/${ra.modelNodes}. Unreal 가져오기에서 '2단계 LOD 준비'를 끄고 다시 시도하세요.`);
	return {
		payload: t,
		metadata: {
			...r,
			profile: ga,
			schemaVersion: 1,
			boundsMin: r.boundsMin.map((e, t) => Math.min(e, i.boundsMin[t])),
			boundsMax: r.boundsMax.map((e, t) => Math.max(e, i.boundsMax[t])),
			lod: {
				distanceMeters: t.distanceMeters,
				hysteresis: t.hysteresis,
				levels: n.map(({ vertexCount: e, indexCount: t }) => ({
					vertexCount: e,
					indexCount: t
				}))
			}
		}
	};
}
function Ca(e, t) {
	if (!Number.isFinite(e) || e <= 0 || e > 2e3) throw Error("LOD distance must be greater than 0 and at most 2000 meters.");
	if (!Number.isFinite(t) || t < 0 || t >= .5) throw Error("LOD hysteresis must be in [0, 0.5).");
}
var wa = [
	"baseColor",
	"normal",
	"metallicRoughness",
	"occlusion",
	"emissive",
	"specular"
], Ta = /* @__PURE__ */ new Set([
	"KHR_materials_specular",
	"KHR_materials_emissive_strength",
	"KHR_materials_unlit",
	"KHR_texture_transform",
	"KHR_materials_ior"
]), Ea = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("잘못된 GLB 텍스처 구조");
	return e;
}, Da = (e) => e === void 0 ? [] : Array.isArray(e) ? e : (() => {
	throw Error("잘못된 GLB 배열");
})(), Oa = (e, t) => {
	if (!Number.isSafeInteger(e) || e < 0 || e >= t) throw Error("잘못된 GLB 텍스처 참조");
	return e;
}, ka = (e) => e + 3 & -4;
function Aa(e) {
	if (!e || typeof e != "object") return;
	if (Array.isArray(e)) {
		e.forEach(Aa);
		return;
	}
	let t = Ea(e);
	if (t.extensions) {
		for (let e of Object.keys(Ea(t.extensions))) if (!Ta.has(e)) throw Error(`텍스처 최적화에서 지원하지 않는 glTF 확장: ${e}`);
	}
	for (let [e, n] of Object.entries(t)) e !== "extras" && Aa(n);
}
function ja(e) {
	if (!e || typeof e != "object" || ![
		0,
		128,
		256,
		512,
		1024,
		2048
	].includes(e.maxSize) || !Array.isArray(e.maps) || new Set(e.maps).size !== e.maps.length || e.maps.some((e) => !wa.includes(e))) throw Error("지원하지 않는 텍스처 가져오기 옵션");
	if (e.compactBaseColor !== void 0 && typeof e.compactBaseColor != "boolean") throw Error("지원하지 않는 텍스처 포맷 옵션");
	if (e.mapMaxSizes !== void 0 && (!e.mapMaxSizes || typeof e.mapMaxSizes != "object" || Array.isArray(e.mapMaxSizes) || Object.entries(e.mapMaxSizes).some(([e, t]) => !wa.includes(e) || ![
		128,
		256,
		512,
		1024,
		2048
	].includes(t)))) throw Error("지원하지 않는 맵별 크기 옵션");
}
function Ma(e, t) {
	return Math.min(e.maxSize || Infinity, e.mapMaxSizes?.[t] || Infinity);
}
var Na = async (e, t, n, r, i, a) => {
	a.throwIfAborted();
	let o = await createImageBitmap(new Blob([new Uint8Array(e)], { type: t }), { colorSpaceConversion: "none" });
	try {
		a.throwIfAborted();
		let e = new OffscreenCanvas(n, r), t = e.getContext("2d");
		if (!t) throw Error("텍스처 파생본 Canvas를 사용할 수 없습니다.");
		t.drawImage(o, 0, 0, n, r);
		let s = await e.convertToBlob({ type: "image/png" }), c = s, l = i ? t.getImageData(0, 0, n, r).data : null;
		if (l && l.every((e, t) => t % 4 != 3 || e === 255)) {
			let i = await e.convertToBlob({
				type: "image/jpeg",
				quality: .92
			});
			if (i.type === "image/jpeg" && i.size < s.size) {
				let e = await createImageBitmap(i, { colorSpaceConversion: "none" });
				try {
					a.throwIfAborted(), t.clearRect(0, 0, n, r), t.drawImage(e, 0, 0);
					let o = t.getImageData(0, 0, n, r).data, s = 0, u = 0;
					for (let e = 0; e < o.length; e++) if (e % 4 != 3) {
						let t = Math.abs(o[e] - l[e]);
						s += t * t, u = Math.max(u, t);
					}
					Math.sqrt(s / (n * r * 3)) <= 3 && u <= 32 && (c = i);
				} finally {
					e.close();
				}
			}
		}
		return a.throwIfAborted(), {
			bytes: new Uint8Array(await c.arrayBuffer()),
			mimeType: c.type
		};
	} finally {
		o.close();
	}
};
async function Pa(e, t, n, r, i) {
	i.throwIfAborted();
	let a = await createImageBitmap(new Blob([new Uint8Array(e)], { type: t }));
	try {
		i.throwIfAborted();
		let e = new OffscreenCanvas(n, r), t = e.getContext("2d");
		if (!t) throw Error("텍스처 축소용 Canvas를 사용할 수 없습니다.");
		t.drawImage(a, 0, 0, n, r);
		let o = await e.convertToBlob({ type: "image/png" });
		return i.throwIfAborted(), new Uint8Array(await o.arrayBuffer());
	} finally {
		a.close();
	}
}
async function Fa(e, t, n, r = Pa, i = Na) {
	if (ja(t), ya(e)) {
		let { payload: a } = Sa(e), o = await Fa(a.levels[0], t, n, r, i), s = await Fa(a.levels[1], t, n, r, i);
		return ba({
			...a,
			levels: [o, s]
		});
	}
	L(e), n.throwIfAborted();
	let a = new DataView(e.buffer, e.byteOffset, e.byteLength), o = a.getUint32(12, !0), s = Ea(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(e.subarray(20, 20 + o)))), c = 28 + o;
	if (a.getUint32(24 + o, !0) !== 5130562) throw Error("텍스처 최적화에는 표준 JSON/BIN GLB가 필요합니다.");
	let l = e.subarray(c, c + a.getUint32(20 + o, !0));
	Aa(s);
	for (let e of Da(s.extensionsUsed)) if (!Ta.has(String(e))) throw Error(`텍스처 최적화에서 지원하지 않는 glTF 확장: ${e}`);
	let u = Da(s.bufferViews).map(Ea), d = Da(s.images).map(Ea), f = Da(s.textures).map(Ea);
	if (!d.length) return e;
	let p = new Set(t.maps), m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), g = (e, t, n) => {
		if (!(t in e)) return;
		if (!p.has(n)) {
			delete e[t];
			return;
		}
		let r = Oa(Ea(e[t]).index, f.length);
		m.add(r);
		let i = h.get(r) ?? /* @__PURE__ */ new Set();
		i.add(n), h.set(r, i);
	};
	for (let e of Da(s.materials)) {
		let t = Ea(e), n = t.pbrMetallicRoughness ? Ea(t.pbrMetallicRoughness) : {};
		g(n, "baseColorTexture", "baseColor"), g(n, "metallicRoughnessTexture", "metallicRoughness"), g(t, "normalTexture", "normal"), g(t, "occlusionTexture", "occlusion"), g(t, "emissiveTexture", "emissive");
		let r = t.extensions ? Ea(t.extensions) : {}, i = r.KHR_materials_specular ? Ea(r.KHR_materials_specular) : {};
		g(i, "specularTexture", "specular"), g(i, "specularColorTexture", "specular");
	}
	let _ = [...m].sort((e, t) => e - t), v = new Map(_.map((e, t) => [e, t])), y = [...new Set(_.map((e) => {
		let t = f[e];
		if (t.extensions) throw Error("확장 텍스처 소스는 최적화할 수 없습니다.");
		return Oa(t.source, d.length);
	}))].sort((e, t) => e - t), b = new Map(y.map((e, t) => [e, t]));
	if (t.compactBaseColor && t.maps.length === wa.length && y.every((e) => {
		let n = d[e], r = u[Oa(n.bufferView, u.length)], i = R(l.subarray(Number(r.byteOffset ?? 0), Number(r.byteOffset ?? 0) + Number(r.byteLength)), String(n.mimeType)), a = _.filter((t) => f[t].source === e).flatMap((e) => [...h.get(e)]);
		return Math.max(i.width, i.height) <= Math.min(...a.map((e) => Ma(t, e)));
	})) return e;
	for (let e of Da(s.materials)) {
		let t = Ea(e), n = t.pbrMetallicRoughness ? Ea(t.pbrMetallicRoughness) : {}, r = t.extensions ? Ea(t.extensions) : {}, i = r.KHR_materials_specular ? Ea(r.KHR_materials_specular) : {};
		for (let [e, r] of [
			[n, ["baseColorTexture", "metallicRoughnessTexture"]],
			[t, [
				"normalTexture",
				"occlusionTexture",
				"emissiveTexture"
			]],
			[i, ["specularTexture", "specularColorTexture"]]
		]) for (let t of r) if (t in e) {
			let n = Ea(e[t]);
			n.index = v.get(n.index);
		}
	}
	s.textures = _.map((e) => ({
		...f[e],
		source: b.get(f[e].source)
	})), s.images = y.map((e) => d[e]);
	let ee = new Set(d.map((e) => Oa(e.bufferView, u.length))), x = /* @__PURE__ */ new Map();
	for (let e of y) {
		n.throwIfAborted();
		let a = d[e], o = Oa(a.bufferView, u.length), s = u[o];
		if (typeof a.mimeType != "string" || "uri" in a) throw Error("외부 또는 잘못된 GLB 이미지");
		let c = Number(s.byteOffset ?? 0), p = Number(s.byteLength), m = l.subarray(c, c + p), g = R(m, a.mimeType), v = [...new Set(_.filter((t) => f[t].source === e).flatMap((e) => [...h.get(e)]))], y = Math.min(...v.map((e) => Ma(t, e))), b = m;
		if (Math.max(g.width, g.height) > y) {
			let e = y / Math.max(g.width, g.height), o = Math.max(1, Math.round(g.width * e)), s = Math.max(1, Math.round(g.height * e)), c = t.compactBaseColor ? await i(m, a.mimeType, o, s, v.length === 1 && v[0] === "baseColor", n) : {
				bytes: await r(m, a.mimeType, o, s, n),
				mimeType: "image/png"
			};
			if (n.throwIfAborted(), b = c.bytes, v.some((e) => e !== "baseColor") && c.mimeType !== "image/png") throw Error("수치 맵에는 PNG 파생본이 필요합니다.");
			let l = R(b, c.mimeType);
			if (l.width !== o || l.height !== s) throw Error("축소된 텍스처가 크기 제한을 초과했습니다.");
			a.mimeType = c.mimeType;
		}
		let ee = x.get(o);
		if (ee && (ee.length !== b.length || ee.some((e, t) => e !== b[t]))) throw Error("서로 다른 이미지가 GLB bufferView를 공유합니다.");
		x.set(o, b);
	}
	let S = /* @__PURE__ */ new Set();
	for (let e of Da(s.accessors)) {
		let t = Ea(e);
		if (t.bufferView !== void 0 && S.add(Oa(t.bufferView, u.length)), t.sparse) {
			let e = Ea(t.sparse);
			for (let t of ["indices", "values"]) S.add(Oa(Ea(e[t]).bufferView, u.length));
		}
	}
	for (let e of x.keys()) if (S.has(e)) throw Error("이미지와 메쉬가 같은 GLB bufferView를 공유합니다.");
	let C = u.map((e, t) => t).filter((e) => !ee.has(e) || x.has(e) || S.has(e)), w = new Map(C.map((e, t) => [e, t])), te = [], T = 0;
	s.bufferViews = C.map((e) => {
		let t = u[e], n = x.get(e) ?? l.subarray(Number(t.byteOffset ?? 0), Number(t.byteOffset ?? 0) + Number(t.byteLength));
		T = ka(T);
		let r = T;
		return te.push(n), T += n.length, {
			...t,
			byteOffset: r,
			byteLength: n.length
		};
	});
	for (let e of Da(s.accessors)) {
		let t = Ea(e);
		if (t.bufferView !== void 0 && (t.bufferView = w.get(t.bufferView)), t.sparse) for (let e of ["indices", "values"]) {
			let n = Ea(Ea(t.sparse)[e]);
			n.bufferView = w.get(n.bufferView);
		}
	}
	for (let e of Da(s.images)) {
		let t = Ea(e);
		t.bufferView = w.get(t.bufferView);
	}
	Ea(Da(s.buffers)[0]).byteLength = T;
	let E = new Uint8Array(ka(T)), ne = 0;
	for (let e of te) ne = ka(ne), E.set(e, ne), ne += e.length;
	let re = new TextEncoder().encode(JSON.stringify(s)), ie = new Uint8Array(ka(re.length));
	ie.fill(32), ie.set(re);
	let ae = new Uint8Array(28 + ie.length + E.length), oe = new DataView(ae.buffer);
	return oe.setUint32(0, 1179937895, !0), oe.setUint32(4, 2, !0), oe.setUint32(8, ae.length, !0), oe.setUint32(12, ie.length, !0), oe.setUint32(16, 1313821514, !0), ae.set(ie, 20), oe.setUint32(20 + ie.length, E.length, !0), oe.setUint32(24 + ie.length, 5130562, !0), ae.set(E, 28 + ie.length), n.throwIfAborted(), L(ae), ae;
}
function Ia(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 0 && e <= 4;
}
function La(e) {
	if (!e || typeof e != "object" || Array.isArray(e) || Object.keys(e).some((e) => !["enabled", "intensity"].includes(e)) || typeof e.enabled != "boolean" || !Ia(e.intensity)) throw Error("환경광 강도는 0~4 사이의 유효한 값이어야 합니다.");
}
//#endregion
//#region src/domain/BuildSettings.ts
var Ra = [
	[1280, 720],
	[1920, 1080],
	[2560, 1440],
	[3840, 2160]
];
et.VIEWPORT;
function za(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("잘못된 빌드 설정");
	let t = e;
	if (Object.keys(t).some((e) => ![
		"version",
		"renderQuality",
		"environmentLighting",
		"platform",
		"textures",
		"resolution",
		"playerStartActorId",
		"showInstructions",
		"showFullscreen"
	].includes(e)) || t.version !== 1 || !Te(t.renderQuality) || ![
		"pc",
		"tablet",
		"mobile"
	].includes(t.platform) || typeof t.showInstructions != "boolean" || typeof t.showFullscreen != "boolean" || !(t.playerStartActorId === null || typeof t.playerStartActorId == "string" && t.playerStartActorId.length > 0 && t.playerStartActorId.length <= 120)) throw Error("지원하지 않는 빌드 설정 버전 또는 값");
	let n = t.resolution;
	if (!n || !["fit", "fixed"].includes(n.mode) || !Ra.some(([e, t]) => e === n.width && t === n.height) || ![
		.5,
		.75,
		1
	].includes(n.scale) || Object.keys(n).some((e) => ![
		"mode",
		"width",
		"height",
		"scale"
	].includes(e))) throw Error("지원하지 않는 실행 해상도");
	if (ja(t.textures), t.environmentLighting !== void 0 && La(t.environmentLighting), t.textures.maps.some((e) => Ma(t.textures, e) > (e === "baseColor" ? 1024 : 512))) throw Error("베이스는 최대 1024, 나머지는 최대 512로 설정하세요.");
}
//#endregion
//#region src/domain/sceneSerialization.ts
var B = class extends Error {}, Ba = class extends Error {};
function Va(e) {
	if (!Ja(e)) return e;
	let t = e.schemaVersion === 1 ? {
		...e,
		schemaVersion: 2,
		authoring: {
			folders: [],
			actorFolders: []
		}
	} : e;
	return t.schemaVersion !== 2 || !Array.isArray(t.actors) ? t : {
		...t,
		actors: t.actors.map((e) => !Ja(e) || !Array.isArray(e.components) ? e : {
			...e,
			components: e.components.map((e) => !Ja(e) || !Array.isArray(e.materialOverrides) ? e : {
				...e,
				materialOverrides: e.materialOverrides.map((e) => Ja(e) && e.tintOverrides === void 0 ? {
					...e,
					tintOverrides: []
				} : e)
			})
		})
	};
}
function Ha(e) {
	if (!Ja(e)) throw new B("Scene payload must be an object.");
	if (e.schemaVersion !== 2) throw new B(`Unsupported Scene schemaVersion ${String(e.schemaVersion)}.`);
	if (e.kind !== "Scene" || e.coordinateSystem !== "RH_Y_UP_METERS_V1") throw new B("Scene kind or coordinate system is unsupported.");
	if (Ya(e.id, "Scene.id"), !Array.isArray(e.actors)) throw new B("Scene.actors must be an array.");
	for (let [t, n] of e.actors.entries()) {
		if (!Ja(n)) throw new B(`Actor ${t} must be an object.`);
		if (Ya(n.id, `Actor ${t}.id`), Ya(n.name, `Actor ${t}.name`), Ya(n.classId, `Actor ${t}.classId`), Ya(n.rootComponentId, `Actor ${t}.rootComponentId`), !Array.isArray(n.tags) || !n.tags.every((e) => typeof e == "string")) throw new B(`Actor ${t}.tags must be strings.`);
		if (!Array.isArray(n.components)) throw new B(`Actor ${t}.components must be an array.`);
		for (let [e, r] of n.components.entries()) qa(r, t, e);
	}
	if (!Ja(e.authoring)) throw new B("Scene.authoring is required.");
	if (e.authoring.webEffects !== void 0 && Qi(e.authoring.webEffects), e.authoring.buildSettings !== void 0 && za(e.authoring.buildSettings), e.authoring.levelName !== void 0 && (typeof e.authoring.levelName != "string" || !e.authoring.levelName.trim() || e.authoring.levelName.length > 120 || [...e.authoring.levelName].some((e) => e.charCodeAt(0) < 32 || e.charCodeAt(0) === 127))) throw new B("레벨 이름은 제어 문자 없이 1~120자로 입력하세요.");
	if (!Array.isArray(e.authoring.folders) || !Array.isArray(e.authoring.actorFolders)) throw new B("Scene.authoring collections must be arrays.");
	for (let t of e.authoring.folders) {
		if (!Ja(t)) throw new B("Outliner folder must be an object.");
		Ya(t.id, "OutlinerFolder.id"), Ya(t.name, "OutlinerFolder.name"), Xa(t.parentId, "OutlinerFolder.parentId");
	}
	for (let t of e.authoring.actorFolders) {
		if (!Ja(t)) throw new B("Actor folder membership must be an object.");
		Ya(t.actorId, "ActorFolderMembership.actorId"), Xa(t.folderId, "ActorFolderMembership.folderId");
	}
	if (e.authoring.prefabInstances !== void 0) {
		if (!Array.isArray(e.authoring.prefabInstances)) throw new B("Scene.authoring.prefabInstances must be an array.");
		for (let t of e.authoring.prefabInstances) {
			if (!Ja(t)) throw new B("Prefab instance metadata must be an object.");
			if (Ya(t.id, "PrefabInstance.id"), Ya(t.prefabAssetId, "PrefabInstance.prefabAssetId"), Ya(t.sourceRevisionId, "PrefabInstance.sourceRevisionId"), !Ja(t.localActorIds) || !Ja(t.localComponentIds) || !Array.isArray(t.overrides)) throw new B("Prefab instance mappings or overrides are invalid.");
			if (t.inheritanceVersion !== void 0 && t.inheritanceVersion !== 1) throw new B("Unsupported Prefab inheritance version.");
			if (t.removedComponentLocalIds !== void 0 && (!Array.isArray(t.removedComponentLocalIds) || t.removedComponentLocalIds.some((e) => typeof e != "string"))) throw new B("Invalid Prefab removed Component IDs.");
		}
	}
	e.authoring.ueImport !== void 0 && Ua(e.authoring.ueImport);
}
function Ua(e) {
	if (!Ja(e)) throw new B("Scene.authoring.ueImport must be an object.");
	for (let t of [
		"packageId",
		"sourceProjectId",
		"sourceSnapshotId",
		"sourceLevelKey"
	]) Ya(e[t], `ueImport.${t}`);
	for (let t of [
		"sourceActorIds",
		"sourceComponentIds",
		"sourceFolderIds"
	]) if (!Ja(e[t]) || !Object.values(e[t]).every((e) => typeof e == "string")) throw new B(`ueImport.${t} must map source IDs to web IDs.`);
	if (!Array.isArray(e.components)) throw new B("ueImport.components must be an array.");
	for (let t of e.components) {
		if (!Ja(t)) throw new B("ueImport component must be an object.");
		for (let e of [
			"sourceId",
			"webId",
			"sourceKind",
			"sourceKey"
		]) Ya(t[e], `ueImport.component.${e}`);
		if (typeof t.visible != "boolean" || typeof t.hiddenInGame != "boolean" || !Array.isArray(t.instances)) throw new B("ueImport component visibility or instances are invalid.");
		for (let e of t.instances) {
			if (!Ja(e)) throw new B("ueImport instance must be an object.");
			if (Ya(e.sourceId, "ueImport.instance.sourceId"), !Number.isInteger(e.sourceIndex) || !Ja(e.transform) || !Array.isArray(e.worldMatrix) || e.worldMatrix.length !== 16) throw new B("ueImport instance fields are invalid.");
		}
	}
}
function Wa(e) {
	try {
		Vn(e), dr(e);
	} catch (e) {
		throw new Ba(e instanceof Error ? e.message : "Invalid Scene relationships.");
	}
}
function Ga(e) {
	let t = Va(e);
	return Ha(t), Wa(t), t;
}
function Ka(e) {
	let t = structuredClone(e);
	return Ha(t), Wa(t), t;
}
function qa(e, t, n) {
	if (!Ja(e)) throw new B(`Component ${t}:${n} must be an object.`);
	if (Ya(e.id, "Component.id"), Ya(e.ownerActorId, "Component.ownerActorId"), e.type === "TestData" || e.type === "TestScript") {
		if (e.typeVersion !== 1 && (e.type !== "TestScript" || e.typeVersion !== 2 && e.typeVersion !== 3) || [
			"localTransform",
			"parentComponentId",
			"attachmentParent"
		].some((t) => t in e) || dn.validate(e.type, e.typeVersion, e, "load").length) throw new B(`Invalid non-spatial ${e.type} Component.`);
		e.type === "TestScript" && en(e);
		return;
	}
	if (Xa(e.parentComponentId, "Component.parentComponentId"), e.attachmentParent !== null) {
		if (!Ja(e.attachmentParent)) throw new B("Component.attachmentParent is invalid.");
		Ya(e.attachmentParent.actorId, "attachmentParent.actorId"), Ya(e.attachmentParent.componentId, "attachmentParent.componentId");
		let t = e.attachmentParent.kind;
		if (t !== void 0 && t !== "component" && t !== "bone" && t !== "socket") throw new B("attachmentParent.kind is invalid.");
		if ((t === "bone" || t === "socket") && (Ya(e.attachmentParent.skeletonAssetId, "attachmentParent.skeletonAssetId"), Ya(e.attachmentParent.sourceSkeletonAssetId, "attachmentParent.sourceSkeletonAssetId"), Ya(e.attachmentParent.bindingSignature, "attachmentParent.bindingSignature"), Ya(e.attachmentParent.targetId, "attachmentParent.targetId"), !/^[0-9a-f]{64}$/u.test(e.attachmentParent.bindingSignature))) throw new B("attachmentParent.bindingSignature must be a lowercase SHA-256 value.");
	}
	if (typeof e.type != "string" || typeof e.typeVersion != "number" || !dn.has(e.type, e.typeVersion)) throw new B(`Unsupported Component type/version ${String(e.type)}@${String(e.typeVersion)}; payload was not modified.`);
	if ((e.type === "PrimitiveCube" || e.type === "StaticMesh") && e.shape !== void 0 && (typeof e.shape != "string" || !_t(e.shape))) throw new B("Unsupported primitive shape; payload was not modified.");
	let r = dn.validate(e.type, e.typeVersion, e, "load");
	if (r.length > 0) throw new B(`Invalid Component fields: ${r.map((e) => e.fieldId).join(", ")}.`);
}
function Ja(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Ya(e, t) {
	if (typeof e != "string" || e.length === 0) throw new B(`${t} must be a non-empty string.`);
}
function Xa(e, t) {
	if (e !== null && typeof e != "string") throw new B(`${t} must be a string or null.`);
}
//#endregion
//#region src/player/PlayerScene.ts
function Za(e, t = !1, n = !1) {
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
				o.add(t.sourceId), s.add(t.sourceIndex), zn(Ln(t.transform));
			}
			a.add(e.webId);
		}
		if (Object.values(r.sourceComponentIds).some((e) => !a.has(e))) throw Error("Missing Player imported Component metadata.");
	}
	let i = [];
	for (let a of e.actors) {
		let o = vt(a), s = o.type === "SceneNode" ? [
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
		for (let o of a.components.filter(N)) {
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
			let s = zn(Gn(e, {
				actorId: a.id,
				componentId: o.id
			})), c = r?.components.find((e) => e.webId === o.id);
			if (o.type === "TwinMetadata" || o.type === "SceneNode" || n && o.type === "Camera" || !t && c?.visible === !1) continue;
			let l = c?.sourceKind === "InstancedStaticMesh" ? c.instances : [void 0];
			for (let e of l) {
				let n = e ? zn(Rn(Ln(s), Ln(e.transform))) : s;
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
//#region src/delivery/LevelMetadata.ts
function Qa(e, t, n) {
	let r = e;
	if (!r || r.version !== 1 || Object.keys(r).some((e) => ![
		"assets",
		"blobs",
		"envelope",
		"version",
		"provenance"
	].includes(e)) || !Array.isArray(r.blobs) || r.blobs.length > yi.files) throw Error("Invalid level metadata");
	let i = Ga(r.envelope.payload);
	if (i.actors.length !== t.actors || r.envelope.documentId !== i.id || !Number.isSafeInteger(r.envelope.revision) || r.envelope.revision < 1 || !Number.isFinite(r.envelope.savedAt)) throw Error("Level summary mismatch");
	let a = /* @__PURE__ */ new Set(), o = 0;
	for (let e of r.blobs) {
		if (!e || typeof e.key != "string" || e.key.replace(/^sha256:/, "") !== e.hash || a.has(e.key) || !n.has(e.hash) || Object.keys(e).sort().join() !== "hash,key") throw Error("Invalid blob reference");
		a.add(e.key), o += n.get(e.hash).bytes;
	}
	if (o !== t.bytes) throw Error("Level byte summary mismatch");
	if (r.provenance !== void 0 && (!r.provenance || r.provenance.kind !== "static-preview-v1" || Object.keys(r.provenance).sort().join() !== "file,kind" || !n.has(r.provenance.file))) throw Error("Invalid provenance reference");
	return Xi({
		...r.assets,
		blobs: r.blobs.map((e) => ({
			key: e.key,
			bytes: /* @__PURE__ */ new Uint8Array()
		}))
	}), Za(i), {
		...r,
		envelope: {
			...r.envelope,
			payload: i
		}
	};
}
//#endregion
//#region src/delivery/ActorReview.ts
function $a(e, t) {
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
async function eo(e, t, n = new AbortController().signal) {
	let r = await e.manifest(t, n), i = await e.actors(t, n, r), a = /* @__PURE__ */ new Map(), o = new Map(r.files.map((e) => [e.hash, e]));
	for (let t of r.levels) a.set(t.hash, Qa(JSON.parse(new TextDecoder().decode(await e.file(o.get(t.hash), n))), t, o));
	let s = [];
	for (let e of i.actors) {
		let t = e.levelHash ? a.get(e.levelHash) : null, n = structuredClone(t ? t.envelope.payload.actors.find((t) => t.id === e.actorId) : jr(r.objects.find((t) => t.id === e.actorId))), i = $a(n, t?.assets ?? {
			assets: [],
			revisions: [],
			folders: []
		}), o = /* @__PURE__ */ new Set();
		for (let r of n.components) if (N(r) && r.attachmentParent && o.add(ji({
			...e,
			actorId: r.attachmentParent.actorId
		})), r.type === "TestScript") for (let i of nn(r)) {
			let r = t?.envelope.payload.actors.find((e) => e.components.some((e) => e.id === i.id));
			if (!r) throw Error("Missing Script target");
			r.id !== n.id && o.add(ji({
				...e,
				actorId: r.id
			}));
		}
		o.delete(e.serviceKey);
		let c = r.mounts.find((t) => t.id === e.mountId), l = await Vt(I({
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
var to = (e, t) => new TextDecoder().decode(I(e)) === new TextDecoder().decode(I(t));
function no(e, t) {
	if (e && e.manifest.id !== t.manifest.id) throw Error("Different composition identities");
	let n = new Map(e?.actors.map((e) => [e.key, e])), r = new Map(t.actors.map((e) => [e.key, e]));
	return [.../* @__PURE__ */ new Set([...n.keys(), ...r.keys()])].sort().map((e) => {
		let t = n.get(e), i = r.get(e), a = t ? i ? t.contentHash === i.contentHash ? "unchanged" : "changed" : "removed" : "added", o = [];
		return t && i && a === "changed" && (t.actor.name !== i.actor.name && o.push("name"), to(t.placement.folder, i.placement.folder) || o.push("folder"), to(t.placement.worldMatrix, i.placement.worldMatrix) || o.push("transform"), to(t.actor.components, i.actor.components) || o.push("components"), to(t.dependencies, i.dependencies) || o.push("dependencies"), o.length || o.push("assets_or_placement")), {
			key: e,
			kind: a,
			before: t,
			after: i,
			fields: o
		};
	});
}
//#endregion
//#region src/delivery/ApplicationManifest.ts
function ro(e) {
	let t = e;
	if (!t || Object.keys(t).sort().join() !== "actors,candidateRelease,compositionId,kind,overrideRevision,previous,removed,reviewId,reviewRevision,rollbackOf,version" || t.kind !== "dt-application" || t.version !== 1 || typeof t.compositionId != "string" || !t.compositionId || !bi(t.candidateRelease) || t.previous !== null && !bi(t.previous) || t.rollbackOf !== null && !bi(t.rollbackOf) || typeof t.overrideRevision != "string" || !t.overrideRevision || t.reviewId !== null && typeof t.reviewId != "string" || t.reviewRevision !== null && (!Number.isSafeInteger(t.reviewRevision) || t.reviewRevision < 1) || !Array.isArray(t.actors) || !Array.isArray(t.removed) || t.actors.length > 1e5 || I(t).length > 16 * 1024 ** 2) throw Error("Unsupported application manifest");
	let n = /* @__PURE__ */ new Set(), r = (e) => {
		let r = JSON.parse(e);
		if (!Array.isArray(r) || r.length !== 3 || r[0] !== t.compositionId || r[1] !== null && typeof r[1] != "string" || typeof r[2] != "string" || !r[2] || JSON.stringify(r) !== e || n.has(e)) throw Error("Invalid application actor key");
		n.add(e);
	};
	for (let e of t.actors) {
		if (!e || Object.keys(e).sort().join() !== "contentHash,key,sourceRelease" || !bi(e.sourceRelease) || !bi(e.contentHash)) throw Error("Invalid applied actor");
		r(e.key);
	}
	for (let e of t.removed) r(e);
	return structuredClone(t);
}
var io = (e) => Vt(I(ro(e)));
async function ao(e, t, n = new AbortController().signal) {
	let r = ro(t), i = /* @__PURE__ */ new Map();
	for (let t of /* @__PURE__ */ new Set([r.candidateRelease, ...r.actors.map((e) => e.sourceRelease)])) {
		let a = await eo(e, t, n);
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
		releaseHash: await io(r),
		manifest: i.get(r.candidateRelease).manifest,
		actors: a,
		levels: new Map([...i.values()].flatMap((e) => [...e.levels]))
	};
}
async function oo(e, t, n, r, i) {
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
	for (let t of new Set([...a.values()].map((e) => e.sourceRelease))) o.has(t) || o.set(t, await eo(e, t));
	let s = new Map([...a.keys()].map((e) => [e, e])), c = /* @__PURE__ */ new Map();
	for (let e of a.values()) {
		let t = o.get(e.sourceRelease), n = t.actors.find((t) => t.key === e.key);
		if (n.placement.mountId === null) continue;
		let r = t.manifest.mounts.find((e) => e.id === n.placement.mountId), { level: i, ...a } = r, s = new TextDecoder().decode(I(a)), l = c.get(r.id);
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
	let d = ro({
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
	return await ao(e, d), d;
}
//#endregion
//#region src/delivery/SdkVersion.ts
var so = typeof __DT_DELIVERY_SDK_VERSION__ > "u" ? {
	name: "@dt/delivery-sdk",
	version: "0.2.6",
	license: "MIT",
	addonSdkVersion: 5,
	contracts: [
		1,
		2,
		3,
		4,
		5
	]
}.version : __DT_DELIVERY_SDK_VERSION__, co = class {
	authorization;
	request;
	root;
	constructor(e, t, n = (e, t) => fetch(e, t)) {
		if (this.authorization = t, this.request = n, this.root = new URL(e), !["http:", "https:"].includes(e.protocol) || e.username || e.password || e.search || e.hash || !e.pathname.endsWith("/")) throw Error("Invalid API URL");
	}
	async response(e, t, n = "GET", r) {
		if (!e.startsWith("api/") || new URL(e, this.root).origin !== this.root.origin) throw Error("Invalid API path");
		let i = await this.authorization();
		if (!i) throw Error("Authentication required");
		let a = await this.request(new URL(e, this.root), {
			method: n,
			...r === void 0 ? {} : { body: JSON.stringify(r) },
			signal: AbortSignal.any([t, AbortSignal.timeout(3e4)]),
			headers: {
				Authorization: i,
				...r === void 0 ? {} : { "Content-Type": "application/json" }
			},
			credentials: "omit",
			cache: "no-store",
			redirect: "error"
		});
		if (!a.ok) {
			let e = "";
			try {
				let t = JSON.parse(new TextDecoder().decode(await this.bytes(a, 16384)));
				typeof t.error == "string" && (e = ": " + t.error.slice(0, 512));
			} catch {}
			throw Error(`Delivery API: ${a.status}${e}`);
		}
		return a;
	}
	async json(e, t = new AbortController().signal) {
		return JSON.parse(new TextDecoder().decode(await this.bytes(await this.response(e, t), 16 * 1024 ** 2)));
	}
	async write(e, t, n, r = new AbortController().signal) {
		return JSON.parse(new TextDecoder().decode(await this.bytes(await this.response(e, r, t, n), 16 * 1024 ** 2)));
	}
	releases(e, t) {
		return Ri(e), Ri(t), this.json(`api/scopes/${e}/compositions/${t}/releases`);
	}
	app(e) {
		return Ri(e), this.json(`api/apps/${e}`);
	}
	async application(e, t) {
		if (Ri(e), !bi(t)) throw Error("Invalid application revision");
		let n = ro(await this.json(`api/apps/${e}/applications/${t}`));
		if (await io(n) !== t) throw Error("Application hash mismatch");
		return n;
	}
	applicationReceipt(e, t) {
		return Ri(e), Ri(t), this.json(`api/apps/${e}/applications/receipts/${t}`);
	}
	apply(e, t, n) {
		return Ri(e.appId), this.write(`api/apps/${e.appId}/applications`, "POST", {
			requestId: n,
			reviewId: e.id,
			reviewRevision: e.revision,
			keys: t,
			expectedApplication: e.baseApplication,
			overrideRevision: e.overrideRevision
		});
	}
	rollback(e, t, n) {
		return Ri(e.id), this.write(`api/apps/${e.id}/applications`, "POST", {
			requestId: n,
			rollbackTo: t,
			expectedApplication: e.appliedRevision,
			overrideRevision: e.host.revision
		});
	}
	registerApp(e, t, n, r) {
		return Ri(e), this.write(`api/apps/${e}`, "POST", {
			scope: t,
			compositionId: n,
			baselineRelease: r
		});
	}
	reviews(e) {
		return Ri(e), this.json(`api/apps/${e}/reviews`);
	}
	createReview(e, t) {
		return Ri(e), this.write(`api/apps/${e}/reviews`, "POST", { candidateRelease: t });
	}
	decide(e, t) {
		return Ri(e.appId), Ri(e.id), this.write(`api/apps/${e.appId}/reviews/${e.id}`, "PATCH", {
			expectedRevision: e.revision,
			updates: t
		});
	}
	async bytes(e, t) {
		if (!e.body) throw Error("Missing API response");
		let n = e.body.getReader(), r = 0, i = [];
		try {
			for (;;) {
				let { done: e, value: a } = await n.read();
				if (e) break;
				if (r += a.length, r > t) throw Error("API size limit");
				i.push(a);
			}
			let e = new Uint8Array(r), a = 0;
			for (let t of i) e.set(t, a), a += t.length;
			return e;
		} finally {
			await n.cancel().catch(() => {}), n.releaseLock();
		}
	}
	compositions(e, t = 0) {
		return Ri(e), this.json(`api/scopes/${e}/compositions?page=${t}`);
	}
	publication(e, t) {
		return Ri(e), Ri(t), this.json(`api/scopes/${e}/compositions/${t}/publication`);
	}
	actors(e, t, n, r = "", i = 0) {
		if (Ri(e), Ri(t), !bi(n)) throw Error("Invalid release");
		return this.json(`api/scopes/${e}/compositions/${t}/releases/${n}/actors?q=${encodeURIComponent(r)}&page=${i}`);
	}
	provider(e, t, n) {
		if (Ri(e), Ri(t), !bi(n)) throw Error("Invalid release");
		let r = `api/delivery/${e}/${t}/${n}/`;
		return {
			authorize: async (e) => {
				await this.json(r + "authorize", e);
			},
			read: async (e, t, n) => {
				if (!/^(objects\/[a-f0-9]{64}|releases\/[a-f0-9]{64}\.json)$/.test(e)) throw Error("Invalid delivery path");
				return this.bytes(await this.response(r + e, n), t);
			}
		};
	}
	async addonEvents(e, t, n) {
		Ri(e), Ri(t);
		let r = await this.authorization();
		if (!r) throw Error("Authentication required");
		let i = btoa(String.fromCharCode(...new TextEncoder().encode(r))).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", ""), a = new URL(`api/apps/${e}/addons/events?executionId=${encodeURIComponent(t)}`, this.root);
		a.protocol = a.protocol === "https:" ? "wss:" : "ws:";
		let o = new WebSocket(a, ["dt-addons-v1", `auth.${i}`]);
		return o.addEventListener("message", (e) => {
			if (typeof e.data == "string" && e.data.length <= 1048576) try {
				n(JSON.parse(e.data));
			} catch {
				o.close();
			}
		}), await new Promise((e, t) => {
			let n = setTimeout(() => a(), 1e4), r = () => {
				clearTimeout(n), o.removeEventListener("open", i), o.removeEventListener("error", a), o.removeEventListener("close", a);
			}, i = () => {
				r(), e();
			}, a = () => {
				r(), o.close(), t(/* @__PURE__ */ Error("Addon notification connection failed"));
			};
			o.addEventListener("open", i, { once: !0 }), o.addEventListener("error", a, { once: !0 }), o.addEventListener("close", a, { once: !0 });
		}), o;
	}
};
//#endregion
//#region src/delivery/HostBindings.ts
function lo(e) {
	if (e.version !== 1 || typeof e.revision != "string" || !e.revision || e.revision.length > 200 || !Array.isArray(e.bindings) || e.bindings.length > 1e5 || I(e).length > 16 * 1024 ** 2 || Object.keys(e).sort().join() !== "bindings,revision,version") throw Error("Invalid host binding snapshot");
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
function uo(e, t) {
	let n = lo(t), r = new Map(e.actors.map((e) => [e.serviceKey, e]));
	return n.bindings.map((e) => ({
		key: e.key,
		componentId: e.componentId,
		status: r.has(e.key) ? e.componentId !== null && !r.get(e.key).components.some((t) => t.id === e.componentId) ? "orphan_component" : "bound" : "orphan_actor"
	}));
}
function fo(e, t) {
	let n = uo(e, t), r = /* @__PURE__ */ new Set();
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
function po(e, t) {
	let n = e.position.clone(), r = e.visible, i = [];
	return t.positionMeters && e.position.fromArray(t.positionMeters), t.visible !== void 0 && (e.visible = t.visible), t.color !== void 0 && e.traverse((e) => {
		if (!(e instanceof M)) return;
		let n = e.material, r = (Array.isArray(n) ? n : [n]).map((e) => {
			let n = e.clone();
			return "color" in n && n.color instanceof st && n.color.setHex(t.color), n;
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
function mo(e, t) {
	let n = lo(t), r = [], i = !1, a = [], o = () => {
		let t = e.session.actors;
		if (t && !i) {
			fo(t, n), a.splice(0).reverse().forEach((e) => e()), r = uo(t, n);
			for (let i of n.bindings) {
				if (!i.presentation || r.find((e) => e.key === i.key && e.componentId === i.componentId)?.status !== "bound") continue;
				let n = t.actors.find((e) => e.serviceKey === i.key), o = n.mountId === null ? e.session.objectViews.find((e) => e.actorId === n.actorId) : e.session.views.filter((e) => e.root.userData.deliveryMountId === n.mountId).flatMap((e) => e.projections).find((e) => e.actorId === n.actorId);
				if (!o) continue;
				let s = i.componentId === null || i.componentId === n.rootComponentId ? o.object : void 0;
				s || o.object.traverse((e) => {
					e.userData.componentId === i.componentId && (s = e);
				}), s && a.push(po(s, i.presentation));
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
			n = lo(e);
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
//#region src/editor/EditorCameraController.ts
var ho = Object.freeze({
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
}), go = Math.PI / 180;
function _o(e, t) {
	return [
		e[0] + t[0],
		e[1] + t[1],
		e[2] + t[2]
	];
}
function vo(e, t) {
	return [
		e[0] - t[0],
		e[1] - t[1],
		e[2] - t[2]
	];
}
function yo(e, t) {
	return [
		e[0] * t,
		e[1] * t,
		e[2] * t
	];
}
function bo(e) {
	let t = Math.hypot(...e);
	return t > 1e-12 ? yo(e, 1 / t) : [
		0,
		0,
		0
	];
}
function xo(e, t) {
	return [
		e[1] * t[2] - e[2] * t[1],
		e[2] * t[0] - e[0] * t[2],
		e[0] * t[1] - e[1] * t[0]
	];
}
function So(e, t) {
	let n = Math.cos(t), r = [
		Math.sin(e) * n,
		Math.sin(t),
		-Math.cos(e) * n
	], i = bo(xo(r, [
		0,
		1,
		0
	])), a = bo(xo(i, r));
	return Nn([
		i[0],
		a[0],
		-r[0],
		i[1],
		a[1],
		-r[1],
		i[2],
		a[2],
		-r[2]
	]);
}
function Co(e, t) {
	let [n, r, i, a] = t, [o, s, c] = e, l = 2 * (r * c - i * s), u = 2 * (i * o - n * c), d = 2 * (n * s - r * o);
	return [
		o + a * l + (r * d - i * u),
		s + a * u + (i * l - n * d),
		c + a * d + (n * u - r * l)
	];
}
function wo(e, t, n, r = 1.15) {
	if (![
		e,
		t,
		n,
		r
	].every(Number.isFinite)) throw Error("Focus framing inputs must be finite.");
	if (e < 0 || t <= 0 || t >= 180 || n <= 0 || r < 1) throw Error("Focus framing inputs are outside their supported range.");
	let i = t * go, a = 2 * Math.atan(Math.tan(i / 2) * n), o = Math.min(i, a);
	return Math.max(e * r / Math.sin(o / 2), .05);
}
var To = class {
	settings;
	state;
	yawRadians;
	pitchRadians;
	moveSpeedMetersPerSecond;
	constructor(e, t = ho) {
		if (this.settings = t, !Object.values(t).every(Number.isFinite)) throw Error("Editor camera settings must be finite.");
		if (t.moveSpeedMetersPerSecond <= 0 || t.lookSensitivityDegreesPerUnit <= 0 || t.pitchLimitDegrees <= 0 || t.pitchLimitDegrees >= 90 || t.wheelSpeedMultiplier <= 1 || t.minimumMoveSpeedMetersPerSecond <= 0 || t.maximumMoveSpeedMetersPerSecond < t.minimumMoveSpeedMetersPerSecond || t.panSensitivityPerUnit <= 0 || t.dollySensitivityPerUnit <= 0 || t.minimumPivotDistanceMeters <= 0 || t.maximumPivotDistanceMeters < t.minimumPivotDistanceMeters) throw Error("Editor camera settings are outside their supported range.");
		let n = Co([
			0,
			0,
			-1
		], e.rotationXyzw), r = vo(e.focusPivotMeters ? [...e.focusPivotMeters] : _o(e.positionMeters, yo(n, 10)), e.positionMeters), i = Math.hypot(...r), a = Math.min(Math.max(i, t.minimumPivotDistanceMeters), t.maximumPivotDistanceMeters), o = i > 1e-12 ? yo(r, 1 / i) : n;
		this.state = {
			positionMeters: [...e.positionMeters],
			rotationXyzw: [...e.rotationXyzw],
			focusPivotMeters: _o(e.positionMeters, yo(o, a))
		}, this.yawRadians = Math.atan2(n[0], -n[2]), this.pitchRadians = Math.asin(Math.min(Math.max(n[1], -1), 1)), this.moveSpeedMetersPerSecond = t.moveSpeedMetersPerSecond;
	}
	applyLookDelta(e, t) {
		if (!Number.isFinite(e) || !Number.isFinite(t)) throw Error("Editor camera look delta must be finite.");
		let n = this.settings.lookSensitivityDegreesPerUnit * go, r = this.settings.pitchLimitDegrees * go;
		return this.yawRadians += e * n, this.pitchRadians = Math.min(Math.max(this.pitchRadians - t * n, -r), r), this.state = {
			focusPivotMeters: _o(this.state.positionMeters, yo(Co([
				0,
				0,
				-1
			], So(this.yawRadians, this.pitchRadians)), Math.min(Math.max(Math.hypot(...vo(this.state.focusPivotMeters, this.state.positionMeters)), this.settings.minimumPivotDistanceMeters), this.settings.maximumPivotDistanceMeters))),
			positionMeters: this.state.positionMeters,
			rotationXyzw: So(this.yawRadians, this.pitchRadians)
		}, this.snapshot();
	}
	applyPanDelta(e, t) {
		this.assertFinitePointerDelta(e, t, "pan");
		let n = Math.hypot(...vo(this.state.focusPivotMeters, this.state.positionMeters)), r = Co([
			1,
			0,
			0
		], this.state.rotationXyzw), i = Co([
			0,
			1,
			0
		], this.state.rotationXyzw), a = this.settings.panSensitivityPerUnit * Math.max(n, 1), o = _o(yo(r, -e * a), yo(i, t * a));
		return this.state = {
			...this.state,
			positionMeters: _o(this.state.positionMeters, o),
			focusPivotMeters: _o(this.state.focusPivotMeters, o)
		}, this.snapshot();
	}
	applyGroundDragDelta(e, t) {
		this.assertFinitePointerDelta(e, t, "ground drag"), this.applyLookDelta(e, 0);
		let n = yo([
			Math.sin(this.yawRadians),
			0,
			-Math.cos(this.yawRadians)
		], -t * this.moveSpeedMetersPerSecond * this.settings.dollySensitivityPerUnit);
		return this.state = {
			...this.state,
			positionMeters: _o(this.state.positionMeters, n),
			focusPivotMeters: _o(this.state.focusPivotMeters, n)
		}, this.snapshot();
	}
	applyOrbitDelta(e, t) {
		this.assertFinitePointerDelta(e, t, "orbit");
		let n = this.settings.lookSensitivityDegreesPerUnit * go, r = this.settings.pitchLimitDegrees * go;
		this.yawRadians += e * n, this.pitchRadians = Math.min(Math.max(this.pitchRadians - t * n, -r), r);
		let i = So(this.yawRadians, this.pitchRadians), a = Co([
			0,
			0,
			-1
		], i), o = Math.min(Math.max(Math.hypot(...vo(this.state.focusPivotMeters, this.state.positionMeters)), this.settings.minimumPivotDistanceMeters), this.settings.maximumPivotDistanceMeters);
		return this.state = {
			focusPivotMeters: this.state.focusPivotMeters,
			positionMeters: _o(this.state.focusPivotMeters, yo(a, -o)),
			rotationXyzw: i
		}, this.snapshot();
	}
	applyDollyDelta(e) {
		if (!Number.isFinite(e)) throw Error("Editor camera dolly delta must be finite.");
		let t = vo(this.state.positionMeters, this.state.focusPivotMeters), n = Math.hypot(...t), r = Math.min(Math.max(n * Math.exp(e * this.settings.dollySensitivityPerUnit), this.settings.minimumPivotDistanceMeters), this.settings.maximumPivotDistanceMeters), i = n > 1e-12 ? yo(t, 1 / n) : yo(Co([
			0,
			0,
			-1
		], this.state.rotationXyzw), -1);
		return this.state = {
			...this.state,
			positionMeters: _o(this.state.focusPivotMeters, yo(i, r))
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
		let i = Math.min(Math.max(wo(t, n, r), this.settings.minimumPivotDistanceMeters), this.settings.maximumPivotDistanceMeters), a = Co([
			0,
			0,
			-1
		], this.state.rotationXyzw);
		return this.state = {
			...this.state,
			focusPivotMeters: [...e],
			positionMeters: _o(e, yo(a, -i))
		}, this.snapshot();
	}
	step(e, t) {
		if (!Number.isFinite(t) || t < 0) throw Error("Editor camera delta must be finite and non-negative.");
		let n = Co([
			0,
			0,
			-1
		], this.state.rotationXyzw), r = Co([
			1,
			0,
			0
		], this.state.rotationXyzw), i = Co([
			0,
			1,
			0
		], this.state.rotationXyzw), a = [
			0,
			0,
			0
		];
		for (let t of new Set(e)) t === "move-forward" && (a = _o(a, n)), t === "move-backward" && (a = _o(a, yo(n, -1))), t === "move-right" && (a = _o(a, r)), t === "move-left" && (a = _o(a, yo(r, -1))), t === "move-up-world" && (a = _o(a, [
			0,
			1,
			0
		])), t === "move-down-world" && (a = _o(a, [
			0,
			-1,
			0
		])), t === "move-up-local" && (a = _o(a, i)), t === "move-down-local" && (a = _o(a, yo(i, -1)));
		let o = yo(bo(a), this.moveSpeedMetersPerSecond * t);
		return this.state = {
			focusPivotMeters: _o(this.state.focusPivotMeters, o),
			positionMeters: _o(this.state.positionMeters, o),
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
}, Eo = (e, t) => e === t || e === "global" || t === "global";
function Do(e) {
	return [
		e.ctrlKey || e.metaKey ? "Ctrl" : "",
		e.altKey ? "Alt" : "",
		e.shiftKey ? "Shift" : "",
		e.key.length === 1 ? e.key.toUpperCase() : e.key
	].filter(Boolean).join("+");
}
function Oo(e) {
	if (e.isComposing || e.key === "Process") return !0;
	let t = e.target;
	return typeof HTMLInputElement < "u" && t instanceof HTMLInputElement || typeof HTMLTextAreaElement < "u" && t instanceof HTMLTextAreaElement || typeof HTMLElement < "u" && t instanceof HTMLElement && t.isContentEditable;
}
var ko = class {
	bindings;
	constructor(e) {
		this.bindings = [...e], this.assertNoConflicts(this.bindings);
	}
	list(e) {
		return this.bindings.filter((t) => !e || Eo(t.context, e));
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
		if (Oo(e)) return null;
		let n = Do(e);
		return this.bindings.find((e) => e.chord === n && (e.context === t || e.context === "global"))?.actionId ?? null;
	}
	assertNoConflicts(e) {
		e.forEach((t, n) => {
			let r = e.slice(n + 1).find((e) => e.chord === t.chord && Eo(e.context, t.context));
			if (r) throw Error(`Shortcut conflict: ${t.actionId} and ${r.actionId} use ${t.chord}.`);
		});
	}
}, Ao = /* @__PURE__ */ new Map([
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
]), jo = [
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
], Mo = class {
	editorShortcuts = new ko(jo);
	setShortcuts(e) {
		this.editorShortcuts = new ko(e);
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
			let t = Ao.get(e.code);
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
}, No = class {
	viewer;
	router = new Mo();
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
			t.focus({ preventScroll: !0 }), !(n.button !== 2 || n.altKey || e.projection !== "perspective") && (n.preventDefault(), this.pointer = n.pointerId, this.last = [n.clientX, n.clientY], this.controller = new To({
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
}, Po = class {
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
				(t instanceof C || t instanceof le || t instanceof y) && e.push(t);
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
			e instanceof M && We(e) && !e.userData.editorHelper && !e.layers.isEnabled(1) && n.push(e);
		}), !n.length)) return () => {};
		this.scene.updateMatrixWorld(!0);
		let a = new Me();
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
				if (n >= Ie.maxShadowLights) {
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
				let o = t instanceof le ? Math.min(Ie.maxPointShadowSize, this.renderer.capabilities.maxCubemapSize) : Ie.maxPostProcessDimension, s = Math.min(e, o, this.renderer.capabilities.maxTextureSize);
				r.mapSize.setScalar(s), r.map && (r.map.width !== s || r.map.height !== s) && r.map.setSize(s, s), l.push(() => r.mapSize.copy(i));
				let c = r.bias, u = r.normalBias;
				if (c === 0 && (r.bias = -1e-4), u === 0 && (r.normalBias = Math.min(.02, a.getSize(new j()).length() / s / 2)), l.push(() => {
					r.bias = c, r.normalBias = u;
				}), t instanceof C) l.push(Fo(t, a));
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
function Fo(e, t) {
	let n = e.shadow.camera, r = e.position.clone(), i = e.target.position.clone(), a = {
		left: n.left,
		right: n.right,
		top: n.top,
		bottom: n.bottom,
		near: n.near,
		far: n.far
	}, o = n.position.clone(), s = n.quaternion.clone(), c = e.target.getWorldPosition(new j()).sub(e.getWorldPosition(new j())).normalize();
	if (c.lengthSq() === 0) return () => {};
	let l = t.getCenter(new j()), u = Math.max(.05, t.getSize(new j()).length() / 2), d = Math.max(.05, u * .01), f = l.clone().addScaledVector(c, -(u + d * 2));
	e.position.copy(e.parent ? e.parent.worldToLocal(f) : f), e.target.position.copy(e.target.parent ? e.target.parent.worldToLocal(l) : l), e.updateWorldMatrix(!0, !1), e.target.updateWorldMatrix(!0, !1), e.shadow.updateMatrices(e);
	let p = t.clone().applyMatrix4(n.matrixWorldInverse);
	return n.left = p.min.x - d, n.right = p.max.x + d, n.bottom = p.min.y - d, n.top = p.max.y + d, n.near = Math.max(.001, -p.max.z - d), n.far = Math.max(n.near + .01, -p.min.z + d), n.updateProjectionMatrix(), () => {
		e.position.copy(r), e.target.position.copy(i), e.updateWorldMatrix(!0, !1), e.target.updateWorldMatrix(!0, !1), Object.assign(n, a), n.updateProjectionMatrix(), n.position.copy(o), n.quaternion.copy(s), n.updateMatrixWorld();
	};
}
//#endregion
//#region src/render/PreviewEnvironmentLighting.ts
function Io(e) {
	let t = new nt(), n = new it(e);
	try {
		return n.fromScene(t, .04, .1, 100, { size: 128 });
	} finally {
		t.dispose(), n.dispose();
	}
}
var Lo = class {
	renderer;
	create;
	target = null;
	constructor(e, t = Io) {
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
}, Ro = class extends Error {}, zo = async (e, t, n) => {
	let { RenderQualityPipeline: r } = await import("./RenderQualityPipeline-BQGbF9IG.js");
	return new r(e, t, n);
}, V = class {
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
		requested: et.VIEWPORT,
		active: et.VIEWPORT,
		state: "ready",
		message: ""
	};
	constructor(e, t, n, r, i = zo) {
		this.renderer = e, this.scene = t, this.invalidate = n, this.report = r, this.load = i, this.shadows = new Po(e, t);
	}
	snapshot() {
		return this.status;
	}
	async apply(e) {
		if (this.disposed) return;
		if (!Te(e)) throw Error("Unknown Render Quality preset.");
		if (this.status.requested === e && this.status.state !== "failed") return;
		let t = ++this.generation;
		if (e === et.VIEWPORT) {
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
				this.previewEnvironment ??= new Lo(this.renderer), this.previewEnvironment.render(this.scene, i, a.environmentIntensity);
				return;
			} catch (e) {
				if (e instanceof Ro) throw e;
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
		}, s = this.shadows.prepare(Ke[this.status.active].shadowSize, a.shadowLightGeneration);
		try {
			if (!this.backend) {
				o();
				return;
			}
			try {
				this.backend.render(e, t, n, i, a);
			} catch (e) {
				if (e instanceof Ro) throw e;
				this.backend.dispose(), this.backend = null, ++this.generation, this.publish({
					...this.status,
					active: et.VIEWPORT,
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
function Bo(e, t) {
	if (t === "lit") return e.clone();
	let n = "color" in e ? e.color : void 0, r = new ke({
		color: n?.clone() ?? 11184810,
		wireframe: t === "wireframe",
		side: 2
	});
	return t === "unlit" && Ho(e, r), r;
}
var Vo = /* @__PURE__ */ new WeakMap();
function Ho(e, t) {
	let n = e;
	n.color && t.color.copy(n.color), (t.map !== (n.map ?? null) || t.alphaMap !== (n.alphaMap ?? null) || t.vertexColors !== e.vertexColors || t.alphaTest !== e.alphaTest || t.transparent !== e.transparent) && (t.needsUpdate = !0), t.map = n.map ?? null, t.alphaMap = n.alphaMap ?? null, t.opacity = e.opacity, t.alphaTest = e.alphaTest, t.transparent = e.transparent, t.depthWrite = e.depthWrite, t.vertexColors = e.vertexColors, t.onBeforeCompile = e.onBeforeCompile, t.customProgramCacheKey = () => e.customProgramCacheKey(), t.onBeforeRender = e.onBeforeRender, t.defines = Object.fromEntries(Object.entries(n.defines ?? {}).filter(([e]) => e !== "STANDARD" && e !== "PHYSICAL"));
}
function Uo(e) {
	let t = Vo.get(e);
	if (!t) {
		t = Bo(e, "unlit"), Vo.set(e, t);
		let n = t;
		e.addEventListener("dispose", () => {
			n.dispose(), Vo.delete(e);
		});
	}
	return Ho(e, t), t;
}
function Wo(e, t, n, r, i = !1) {
	if (n.layers.enableAll(), t.overrideMaterial = null, !r) {
		e.render(t, n);
		return;
	}
	let a = e.autoClear, o = t.background, s = /* @__PURE__ */ new Map();
	try {
		i && t.traverse((e) => {
			e instanceof M && e.layers.isEnabled(0) && (s.set(e, e.material), e.material = Array.isArray(e.material) ? e.material.map(Uo) : Uo(e.material));
		}), t.overrideMaterial = i ? null : r, n.layers.set(0), e.render(t, n), s.forEach((e, t) => {
			t.material = e;
		}), t.overrideMaterial = null, e.autoClear = !1, e.state.reset(), t.background = null, n.layers.set(1), e.render(t, n);
	} finally {
		s.forEach((e, t) => {
			t.material = e;
		}), t.overrideMaterial = null, t.background = o, n.layers.enableAll(), e.autoClear = a;
	}
}
//#endregion
//#region src/render/WebEffectsProjection.ts
function Go(e, t, n = new Float32Array(e.count * 3)) {
	if (!Number.isFinite(t) || t < 0 || n.length !== e.count * 3) throw Error("Invalid particle sample time/buffer.");
	let r = e.seed >>> 0, i = () => (r = Math.imul(r, 1664525) + 1013904223 >>> 0, r / 4294967296);
	for (let r = 0; r < e.count; r++) {
		let a = i(), o = i() * Math.PI * 2, s = Math.sqrt(i()) * e.spreadMeters, c = (t + a * e.lifetimeSeconds) % e.lifetimeSeconds, l = c / e.lifetimeSeconds, u = Math.cos(o) * s, d = c * e.speedMetersPerSecond, f = Math.sin(o) * s;
		e.style === "sparks" && (u *= 1 + c * e.speedMetersPerSecond, f *= 1 + c * e.speedMetersPerSecond, d -= 4.905 * c * c), e.style === "steam" && (u += Math.sin(t + a * 7) * l * e.spreadMeters, f += Math.cos(t + a * 9) * l * e.spreadMeters), e.style === "beacon" && (u = Math.cos(o + t * e.speedMetersPerSecond) * e.spreadMeters, f = Math.sin(o + t * e.speedMetersPerSecond) * e.spreadMeters, d = Math.sin(t * 3 + a * Math.PI * 2) * e.sizeMeters), n[r * 3] = e.originMeters[0] + u, n[r * 3 + 1] = e.originMeters[1] + d, n[r * 3 + 2] = e.originMeters[2] + f;
	}
	return n;
}
var Ko = class {
	scene;
	renderer;
	signature = "";
	settings = Zi;
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
		let t = e ?? Zi;
		Qi(t);
		let n = JSON.stringify(t);
		if (n === this.signature) return;
		this.settings = structuredClone(t), this.signature = n, this.clearParticles(), this.renderer.toneMapping = t.toneMapping === "aces" ? 4 : 0, this.renderer.toneMappingExposure = t.exposure, this.scene.fog = t.fog.enabled ? new u(new st(t.fog.color), t.fog.nearMeters, t.fog.farMeters) : null;
		let r = t.particles;
		if (!r.enabled) return;
		let i = /* @__PURE__ */ new Uint8Array(4096);
		for (let e = 0; e < 32; e++) for (let t = 0; t < 32; t++) {
			let n = (e * 32 + t) * 4, r = Math.hypot((t + .5) / 16 - 1, (e + .5) / 16 - 1);
			i[n] = i[n + 1] = i[n + 2] = 255, i[n + 3] = Math.round(Math.max(0, 1 - r) * 255);
		}
		this.texture = new ze(i, 32, 32, Re), this.texture.needsUpdate = !0;
		let a = new we();
		a.setAttribute("position", new ne(Go(r, 0), 3));
		let o = new s({
			color: r.color,
			size: r.sizeMeters,
			map: this.texture,
			transparent: !0,
			opacity: r.style === "steam" ? .35 : .85,
			depthWrite: !1,
			blending: r.style === "steam" ? 1 : 2
		});
		this.points = new l(a, o), this.points.name = "Web particles", this.points.userData.editorPickable = !1, this.points.frustumCulled = !1, this.scene.add(this.points);
	}
	sample(e, t = !0) {
		if (!this.points || (this.points.visible = t, !t)) return;
		let n = this.points.geometry.getAttribute("position");
		Go(this.settings.particles, e, n.array), n.needsUpdate = !0;
	}
	clearParticles() {
		this.points?.removeFromParent(), this.points?.geometry.dispose(), this.points?.material.dispose(), this.texture?.dispose(), this.points = null, this.texture = null;
	}
	dispose() {
		this.clearParticles(), this.scene.fog = this.originalFog, this.renderer.toneMapping = this.originalToneMapping, this.renderer.toneMappingExposure = this.originalExposure;
	}
}, qo = { type: "change" }, Jo = { type: "start" }, Yo = { type: "end" }, Xo = new te(), Zo = new a(), Qo = Math.cos(70 * De.DEG2RAD), $o = new j(), es = 2 * Math.PI, H = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
}, ts = 1e-6, ns = class extends o {
	constructor(e, t = null) {
		super(e, t), this.state = H.NONE, this.target = new j(), this.cursor = new j(), this.minDistance = 0, this.maxDistance = Infinity, this.minZoom = 0, this.maxZoom = Infinity, this.minTargetRadius = 0, this.maxTargetRadius = Infinity, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -Infinity, this.maxAzimuthAngle = Infinity, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
			LEFT: "ArrowLeft",
			UP: "ArrowUp",
			RIGHT: "ArrowRight",
			BOTTOM: "ArrowDown"
		}, this.mouseButtons = {
			LEFT: qe.ROTATE,
			MIDDLE: qe.DOLLY,
			RIGHT: qe.PAN
		}, this.touches = {
			ONE: O.ROTATE,
			TWO: O.DOLLY_PAN
		}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new j(), this._lastQuaternion = new Be(), this._lastTargetPosition = new j(), this._quat = new Be().setFromUnitVectors(e.up, new j(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Ze(), this._sphericalDelta = new Ze(), this._scale = 1, this._panOffset = new j(), this._rotateStart = new Se(), this._rotateEnd = new Se(), this._rotateDelta = new Se(), this._panStart = new Se(), this._panEnd = new Se(), this._panDelta = new Se(), this._dollyStart = new Se(), this._dollyEnd = new Se(), this._dollyDelta = new Se(), this._dollyDirection = new j(), this._mouse = new Se(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = is.bind(this), this._onPointerDown = rs.bind(this), this._onPointerUp = as.bind(this), this._onContextMenu = fs.bind(this), this._onMouseWheel = cs.bind(this), this._onKeyDown = ls.bind(this), this._onTouchStart = us.bind(this), this._onTouchMove = ds.bind(this), this._onMouseDown = os.bind(this), this._onMouseMove = ss.bind(this), this._interceptControlDown = ps.bind(this), this._interceptControlUp = ms.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
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
		this.state = H.NONE, this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents();
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
		this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(qo), this.update(), this.state = H.NONE;
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
		$o.copy(t).sub(this.target), $o.applyQuaternion(this._quat), this._spherical.setFromVector3($o), this.autoRotate && this.state === H.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
		let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
		isFinite(n) && isFinite(r) && (n < -Math.PI ? n += es : n > Math.PI && (n -= es), r < -Math.PI ? r += es : r > Math.PI && (r -= es), n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
		let i = !1;
		if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
		else {
			let e = this._spherical.radius;
			this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = e != this._spherical.radius;
		}
		if ($o.setFromSpherical(this._spherical), $o.applyQuaternion(this._quatInverse), t.copy(this.target).add($o), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
			let e = null;
			if (this.object.isPerspectiveCamera) {
				let t = $o.length();
				e = this._clampDistance(t * this._scale);
				let n = t - e;
				this.object.position.addScaledVector(this._dollyDirection, n), this.object.updateMatrixWorld(), i = !!n;
			} else if (this.object.isOrthographicCamera) {
				let t = new j(this._mouse.x, this._mouse.y, 0);
				t.unproject(this.object);
				let n = this.object.zoom;
				this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = n !== this.object.zoom;
				let r = new j(this._mouse.x, this._mouse.y, 0);
				r.unproject(this.object), this.object.position.sub(r).add(t), this.object.updateMatrixWorld(), e = $o.length();
			} else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
			e !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position) : (Xo.origin.copy(this.object.position), Xo.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Xo.direction)) < Qo ? this.object.lookAt(this.target) : (Zo.setFromNormalAndCoplanarPoint(this.object.up, this.target), Xo.intersectPlane(Zo, this.target))));
		} else if (this.object.isOrthographicCamera) {
			let e = this.object.zoom;
			this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), e !== this.object.zoom && (this.object.updateProjectionMatrix(), i = !0);
		}
		return this._scale = 1, this._performCursorZoom = !1, i || this._lastPosition.distanceToSquared(this.object.position) > ts || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > ts || this._lastTargetPosition.distanceToSquared(this.target) > ts ? (this.dispatchEvent(qo), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
	}
	_getAutoRotationAngle(e) {
		return e === null ? es / 60 / 60 * this.autoRotateSpeed : es / 60 * this.autoRotateSpeed * e;
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
		$o.setFromMatrixColumn(t, 0), $o.multiplyScalar(-e), this._panOffset.add($o);
	}
	_panUp(e, t) {
		this.screenSpacePanning === !0 ? $o.setFromMatrixColumn(t, 1) : ($o.setFromMatrixColumn(t, 0), $o.crossVectors(this.object.up, $o)), $o.multiplyScalar(e), this._panOffset.add($o);
	}
	_pan(e, t) {
		let n = this.domElement;
		if (this.object.isPerspectiveCamera) {
			let r = this.object.position;
			$o.copy(r).sub(this.target);
			let i = $o.length();
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
		this._rotateLeft(es * this._rotateDelta.x / t.clientHeight), this._rotateUp(es * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(es * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
				break;
			case this.keys.BOTTOM:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-es * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
				break;
			case this.keys.LEFT:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(es * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
				break;
			case this.keys.RIGHT: e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-es * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
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
		this._rotateLeft(es * this._rotateDelta.x / t.clientHeight), this._rotateUp(es * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
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
		t === void 0 && (t = new Se(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
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
function rs(e) {
	this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(e) && (this._addPointer(e), e.pointerType === "touch" ? this._onTouchStart(e) : this._onMouseDown(e), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function is(e) {
	this.enabled !== !1 && (e.pointerType === "touch" ? this._onTouchMove(e) : this._onMouseMove(e));
}
function as(e) {
	switch (this._removePointer(e), this._pointers.length) {
		case 0:
			this.domElement.releasePointerCapture(e.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Yo), this.state = H.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
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
function os(e) {
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
		case qe.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseDownDolly(e), this.state = H.DOLLY;
			break;
		case qe.ROTATE:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(e), this.state = H.PAN;
			} else {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(e), this.state = H.ROTATE;
			}
			break;
		case qe.PAN:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(e), this.state = H.ROTATE;
			} else {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(e), this.state = H.PAN;
			}
			break;
		default: this.state = H.NONE;
	}
	this.state !== H.NONE && this.dispatchEvent(Jo);
}
function ss(e) {
	switch (this.state) {
		case H.ROTATE:
			if (this.enableRotate === !1) return;
			this._handleMouseMoveRotate(e);
			break;
		case H.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseMoveDolly(e);
			break;
		case H.PAN:
			if (this.enablePan === !1) return;
			this._handleMouseMovePan(e);
	}
}
function cs(e) {
	this.enabled !== !1 && this.enableZoom !== !1 && this.state === H.NONE && (e.preventDefault(), this.dispatchEvent(Jo), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(Yo));
}
function ls(e) {
	this.enabled !== !1 && this._handleKeyDown(e);
}
function us(e) {
	switch (this._trackPointer(e), this._pointers.length) {
		case 1:
			switch (this.touches.ONE) {
				case O.ROTATE:
					if (this.enableRotate === !1) return;
					this._handleTouchStartRotate(e), this.state = H.TOUCH_ROTATE;
					break;
				case O.PAN:
					if (this.enablePan === !1) return;
					this._handleTouchStartPan(e), this.state = H.TOUCH_PAN;
					break;
				default: this.state = H.NONE;
			}
			break;
		case 2:
			switch (this.touches.TWO) {
				case O.DOLLY_PAN:
					if (this.enableZoom === !1 && this.enablePan === !1) return;
					this._handleTouchStartDollyPan(e), this.state = H.TOUCH_DOLLY_PAN;
					break;
				case O.DOLLY_ROTATE:
					if (this.enableZoom === !1 && this.enableRotate === !1) return;
					this._handleTouchStartDollyRotate(e), this.state = H.TOUCH_DOLLY_ROTATE;
					break;
				default: this.state = H.NONE;
			}
			break;
		default: this.state = H.NONE;
	}
	this.state !== H.NONE && this.dispatchEvent(Jo);
}
function ds(e) {
	switch (this._trackPointer(e), this.state) {
		case H.TOUCH_ROTATE:
			if (this.enableRotate === !1) return;
			this._handleTouchMoveRotate(e), this.update();
			break;
		case H.TOUCH_PAN:
			if (this.enablePan === !1) return;
			this._handleTouchMovePan(e), this.update();
			break;
		case H.TOUCH_DOLLY_PAN:
			if (this.enableZoom === !1 && this.enablePan === !1) return;
			this._handleTouchMoveDollyPan(e), this.update();
			break;
		case H.TOUCH_DOLLY_ROTATE:
			if (this.enableZoom === !1 && this.enableRotate === !1) return;
			this._handleTouchMoveDollyRotate(e), this.update();
			break;
		default: this.state = H.NONE;
	}
}
function fs(e) {
	this.enabled !== !1 && e.preventDefault();
}
function ps(e) {
	e.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
function ms(e) {
	e.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
//#endregion
//#region src/delivery/EquipmentIndex.ts
function hs(e) {
	if (!bi(e)) throw Error("Invalid equipment release");
	return `equipment/${e}.json`;
}
function gs(e, t, n) {
	hs(t);
	let r = e.levels.map((e) => {
		let t = n.get(e.hash);
		if (!t) throw Error("Missing equipment level metadata");
		return {
			levelHash: e.hash,
			...pr(t)
		};
	}), i = I(r).length;
	if (i > yi.manifest) throw Error("Equipment index exceeds 16 MiB");
	let a = [];
	for (let o of e.mounts) {
		let e = n.get(o.level), s = r.find((e) => e.levelHash === o.level);
		for (let n of s.bindings.objects) {
			if (a.length >= 1e5) throw Error("Equipment placement count limit");
			let r = e.actors.find((e) => e.id === n.actorId), c = n.targetComponentId ?? r.rootComponentId, l = new Set(n.targetComponentId === null ? r.components.filter(N).map((e) => e.id) : [c]);
			for (let e = !0; e;) {
				e = !1;
				for (let t of r.components.filter(N)) t.parentComponentId && l.has(t.parentComponentId) && !l.has(t.id) && (l.add(t.id), e = !0);
			}
			let u = r, d = r.components.find((e) => e.id === c), f = !1, p = /* @__PURE__ */ new Set();
			for (; d && N(d);) {
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
			let m = Rr(r) ? "source-default-excluded" : n.instanceSourceId !== null || e.authoring.ueImport?.components.some((e) => l.has(e.webId) && e.sourceKind === "InstancedStaticMesh") ? "instance-unsupported" : f ? "bone-socket-unsupported" : "static", h = m === "static" ? Gn(e, {
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
			}), i += I(a[a.length - 1]).length, i > yi.manifest) throw Error("Equipment index exceeds 16 MiB");
		}
	}
	return _s({
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
function _s(e, t) {
	let n = {
		...e,
		placements: e.placements.map((e) => {
			let n = t.mounts.find((t) => t.id === e.mountId && t.level === e.levelHash);
			if (!n) throw Error("Equipment mount mismatch");
			let r = e.sourceWorldMatrix ? Rn(Ln({
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
			] : null, a = i ? En(i) : null;
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
	if (I(n).length > yi.manifest) throw Error("Equipment index exceeds 16 MiB");
	return n;
}
//#endregion
//#region src/render/CompositionBatchMaterial.ts
var vs = /* @__PURE__ */ new WeakSet();
function ys(e) {
	vs.add(e);
}
function bs(e) {
	return vs.has(e);
}
function xs(e, t, n) {
	vs.has(t) && Ts(e, t, n);
}
var Ss = /* @__PURE__ */ new WeakMap(), Cs = /* @__PURE__ */ new WeakMap(), ws = 0;
function Ts(e, t, n) {
	Cs.has(t) || Cs.set(t, ++ws), Ss.set(e, {
		namespace: Cs.get(t),
		document: structuredClone(n),
		hooks: [
			e.onBeforeCompile,
			e.onBeforeRender,
			e.customProgramCacheKey
		],
		sources: new Map(Object.entries(e).flatMap(([e, t]) => t instanceof ae ? [[e, t.source]] : []))
	});
}
//#endregion
//#region src/composition/ActorResidencyProjection.ts
function Es(e, t, n, r, i) {
	let a = new Map(e.actors.map((e) => [e.id, e])), o = !1;
	return async (s, c, l, u) => {
		if (o || !i()) throw Error("Actor 표시 변경 중이거나 해제된 원본입니다.");
		let d = qr(e);
		if ([...s].some((e) => !a.has(e)) || d.some((e) => e.some((e) => s.has(e.id)) && e.some((e) => !s.has(e.id)) || e.some(Kr) && e.some((e) => !s.has(e.id)))) throw Error("Actor 의존 묶음 또는 동적 액터를 분리할 수 없습니다.");
		let f = new Set(n.map((e) => e.actorId)), p = [], m = new x();
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
				e instanceof Xe && (e.intensity = 0);
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
//#region src/assets/MemoryBudget.ts
var Ds = 1024 ** 2, Os = 1024 ** 3, ks = 8 * Os, As, js = 0, Ms;
async function Ns() {
	let e = typeof window > "u" ? void 0 : window.desktopAPI?.memoryCapacity;
	if (!e) {
		As = void 0, js = 0;
		return;
	}
	if (Ms) return Ms;
	if (!(Date.now() - js < 1e3)) return Ms = (async () => {
		try {
			let t = await e();
			if (!Number.isSafeInteger(t.total) || !Number.isSafeInteger(t.available) || t.total <= 0 || t.available < 0 || t.available > t.total) throw Error("Invalid memory capacity");
			As = t, js = Date.now();
		} catch {
			As = void 0;
		}
	})().finally(() => {
		Ms = void 0;
	}), Ms;
}
function Ps(e = 0, t = As) {
	if (!Number.isFinite(e) || e < 0) throw Error("유효하지 않은 메모리 사용량입니다.");
	if (t) return Math.floor(Math.min(ks, t.total * .4, e + t.available * .6));
	let n = globalThis.navigator?.deviceMemory;
	return Math.floor(Math.min(ks, Number.isFinite(n) && n > 0 ? n * Os * .5 : 2 * Os));
}
function Fs(e, t = 0, n = "표시") {
	let r = Ps(t);
	if (!Number.isFinite(e) || e < 0 || e > ks || e > r) throw Error(`${n} 자동 메모리 예산: 필요 ${(e / Ds).toFixed(1)} MiB / 현재 자동 한도 ${(r / Ds).toFixed(0)} MiB. 다른 작업을 닫거나 텍스처 크기를 줄인 뒤 다시 시도하세요. 기존 데이터는 유지됩니다.`);
}
function Is(e) {
	if (!Number.isFinite(e) || e < 0 || e > ks) throw Error("유효하지 않은 메모리 예산입니다.");
	return Math.min(ks, Math.max(128 * Ds, Math.ceil(e * 1.1 / (64 * Ds)) * 64 * Ds));
}
function Ls(e, t = 0) {
	return Fs(e, t, "텍스처"), [
		128,
		256,
		512,
		1024,
		2048,
		4096,
		8192
	].map((e) => e * Ds).find((t) => t >= e);
}
function Rs(e, t, n = 0) {
	return typeof e == "function" ? e(t, n) : e;
}
var zs = /* @__PURE__ */ new Map(), Bs = class {
	closed = !1;
	update(e, t, n, r = !1) {
		if (this.closed) return;
		if (![e, t].every((e) => Number.isFinite(e) && e >= 0)) throw Error("유효하지 않은 메모리 예약입니다.");
		r && (e = Math.max(e, zs.get(this)?.peak ?? 0));
		let i = [...zs].filter(([e]) => e !== this).map(([, e]) => e);
		n && Fs(e + i.reduce((e, t) => e + t.peak, 0), t + i.reduce((e, t) => e + t.resident, 0)), zs.set(this, {
			peak: e,
			resident: t
		});
	}
	dispose() {
		this.closed = !0, zs.delete(this);
	}
};
//#endregion
//#region node_modules/.pnpm/three@0.186.0/node_modules/three/examples/jsm/utils/BufferGeometryUtils.js
function Vs(e, t) {
	if (t === 0) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
	if (t === 2 || t === 1) {
		let n = e.getIndex();
		if (n === null) {
			let t = [], r = e.getAttribute("position");
			if (r !== void 0) {
				for (let e = 0; e < r.count; e++) t.push(e);
				e.setIndex(t), n = e.getIndex();
			} else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
		}
		let r = n.count - 2, i = [];
		if (t === 2) for (let e = 1; e <= r; e++) i.push(n.getX(0)), i.push(n.getX(e)), i.push(n.getX(e + 1));
		else for (let e = 0; e < r; e++) e % 2 == 0 ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2))) : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)));
		return i.length / 3 !== r && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."), e.setIndex(i), e.clearGroups(), e;
	}
	return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e;
}
//#endregion
//#region node_modules/.pnpm/three@0.186.0/node_modules/three/examples/jsm/utils/SkeletonUtils.js
function Hs(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = e.clone();
	return Us(e, r, function(e, r) {
		t.set(r, e), n.set(e, r);
	}), r.traverse(function(e) {
		if (!e.isSkinnedMesh) return;
		let r = e, i = t.get(e), a = i.skeleton.bones;
		r.skeleton = i.skeleton.clone(), r.bindMatrix.copy(i.bindMatrix), r.skeleton.bones = a.map(function(e) {
			return n.get(e);
		}), r.bind(r.skeleton, r.bindMatrix);
	}), r;
}
function Us(e, t, n) {
	n(e, t);
	for (let r = 0; r < e.children.length; r++) Us(e.children[r], t.children[r], n);
}
//#endregion
//#region node_modules/.pnpm/three@0.186.0/node_modules/three/examples/jsm/loaders/GLTFLoader.js
var Ws = class extends Ge {
	constructor(e) {
		super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
			return new Xs(e);
		}), this.register(function(e) {
			return new Zs(e);
		}), this.register(function(e) {
			return new oc(e);
		}), this.register(function(e) {
			return new sc(e);
		}), this.register(function(e) {
			return new cc(e);
		}), this.register(function(e) {
			return new $s(e);
		}), this.register(function(e) {
			return new ec(e);
		}), this.register(function(e) {
			return new tc(e);
		}), this.register(function(e) {
			return new nc(e);
		}), this.register(function(e) {
			return new Ys(e);
		}), this.register(function(e) {
			return new rc(e);
		}), this.register(function(e) {
			return new Qs(e);
		}), this.register(function(e) {
			return new ac(e);
		}), this.register(function(e) {
			return new ic(e);
		}), this.register(function(e) {
			return new qs(e);
		}), this.register(function(e) {
			return new lc(e, U.EXT_MESHOPT_COMPRESSION);
		}), this.register(function(e) {
			return new lc(e, U.KHR_MESHOPT_COMPRESSION);
		}), this.register(function(e) {
			return new uc(e);
		});
	}
	load(e, t, n, r) {
		let i = this, a;
		if (this.resourcePath !== "") a = this.resourcePath;
		else if (this.path !== "") {
			let t = $e.extractUrlBase(e);
			a = $e.resolveURL(t, this.path);
		} else a = $e.extractUrlBase(e);
		this.manager.itemStart(e);
		let o = function(t) {
			r ? r(t) : console.error(t), i.manager.itemError(e), i.manager.itemEnd(e);
		}, s = new w(this.manager);
		s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, function(n) {
			try {
				i.parse(n, a, function(n) {
					t(n), i.manager.itemEnd(e);
				}, o);
			} catch (e) {
				o(e);
			}
		}, n, o);
	}
	setDRACOLoader(e) {
		return this.dracoLoader = e, this;
	}
	setKTX2Loader(e) {
		return this.ktx2Loader = e, this;
	}
	setMeshoptDecoder(e) {
		return this.meshoptDecoder = e, this;
	}
	register(e) {
		return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
	}
	unregister(e) {
		return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
	}
	parse(e, t, n, r) {
		let i, a = {}, o = {}, s = new TextDecoder();
		if (typeof e == "string") i = JSON.parse(e);
		else if (e instanceof ArrayBuffer) {
			if (s.decode(new Uint8Array(e, 0, 4)) === dc) {
				try {
					a[U.KHR_BINARY_GLTF] = new mc(e);
				} catch (e) {
					r && r(e);
					return;
				}
				i = JSON.parse(a[U.KHR_BINARY_GLTF].content);
			} else i = JSON.parse(s.decode(e));
		} else i = e;
		if (i.asset === void 0 || i.asset.version[0] < 2) {
			r && r(/* @__PURE__ */ Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
			return;
		}
		let c = new Bc(i, {
			path: t || this.resourcePath || "",
			crossOrigin: this.crossOrigin,
			requestHeader: this.requestHeader,
			manager: this.manager,
			ktx2Loader: this.ktx2Loader,
			meshoptDecoder: this.meshoptDecoder
		});
		c.fileLoader.setRequestHeader(this.requestHeader);
		for (let e = 0; e < this.pluginCallbacks.length; e++) {
			let t = this.pluginCallbacks[e](c);
			t.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[t.name] = t, a[t.name] = !0;
		}
		if (i.extensionsUsed) for (let e = 0; e < i.extensionsUsed.length; ++e) {
			let t = i.extensionsUsed[e], n = i.extensionsRequired || [];
			switch (t) {
				case U.KHR_MATERIALS_UNLIT:
					a[t] = new Js();
					break;
				case U.KHR_DRACO_MESH_COMPRESSION:
					a[t] = new hc(i, this.dracoLoader);
					break;
				case U.KHR_TEXTURE_TRANSFORM:
					a[t] = new gc();
					break;
				case U.KHR_MESH_QUANTIZATION:
					a[t] = new _c();
					break;
				default: n.indexOf(t) >= 0 && o[t] === void 0 && console.warn("THREE.GLTFLoader: Unknown extension \"" + t + "\".");
			}
		}
		c.setExtensions(a), c.setPlugins(o), c.parse(n, r);
	}
	parseAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.parse(e, t, r, i);
		});
	}
};
function Gs() {
	let e = {};
	return {
		get: function(t) {
			return e[t];
		},
		add: function(t, n) {
			e[t] = n;
		},
		remove: function(t) {
			delete e[t];
		},
		removeAll: function() {
			e = {};
		}
	};
}
function Ks(e, t, n) {
	let r = e.json.materials[t];
	return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
var U = {
	KHR_BINARY_GLTF: "KHR_binary_glTF",
	KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
	KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
	KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
	KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
	KHR_MATERIALS_IOR: "KHR_materials_ior",
	KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
	KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
	KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
	KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
	KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
	KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
	KHR_MATERIALS_VOLUME: "KHR_materials_volume",
	KHR_TEXTURE_BASISU: "KHR_texture_basisu",
	KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
	KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
	KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
	EXT_MATERIALS_BUMP: "EXT_materials_bump",
	EXT_TEXTURE_WEBP: "EXT_texture_webp",
	EXT_TEXTURE_AVIF: "EXT_texture_avif",
	EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
	KHR_MESHOPT_COMPRESSION: "KHR_meshopt_compression",
	EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
}, qs = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_LIGHTS_PUNCTUAL, this.cache = {
			refs: {},
			uses: {}
		};
	}
	_markDefs() {
		let e = this.parser, t = this.parser.json.nodes || [];
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n];
			r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
		}
	}
	_loadLight(e) {
		let t = this.parser, n = "light:" + e, r = t.cache.get(n);
		if (r) return r;
		let i = t.json, a = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e], o, s = new st(16777215);
		a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], rt);
		let c = a.range === void 0 ? 0 : a.range;
		switch (a.type) {
			case "directional":
				o = new C(s), o.target.position.set(0, 0, -1), o.add(o.target);
				break;
			case "point":
				o = new le(s), o.distance = c;
				break;
			case "spot":
				o = new y(s), o.distance = c, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle === void 0 ? 0 : a.spot.innerConeAngle, a.spot.outerConeAngle = a.spot.outerConeAngle === void 0 ? Math.PI / 4 : a.spot.outerConeAngle, o.angle = a.spot.outerConeAngle, o.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, o.target.position.set(0, 0, -1), o.add(o.target);
				break;
			default: throw Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
		}
		return o.position.set(0, 0, 0), Mc(o, a), a.intensity !== void 0 && (o.intensity = a.intensity), o.name = t.createUniqueName(a.name || "light_" + e), r = Promise.resolve(o), t.cache.add(n, r), r;
	}
	getDependency(e, t) {
		if (e === "light") return this._loadLight(t);
	}
	createNodeAttachment(e) {
		let t = this, n = this.parser, r = n.json.nodes[e], i = (r.extensions && r.extensions[this.name] || {}).light;
		return i === void 0 ? null : this._loadLight(i).then(function(e) {
			return n._getNodeRef(t.cache, i, e);
		});
	}
}, Js = class {
	constructor() {
		this.name = U.KHR_MATERIALS_UNLIT;
	}
	getMaterialType() {
		return ke;
	}
	extendParams(e, t, n) {
		let r = [];
		e.color = new st(1, 1, 1), e.opacity = 1;
		let i = t.pbrMetallicRoughness;
		if (i) {
			if (Array.isArray(i.baseColorFactor)) {
				let t = i.baseColorFactor;
				e.color.setRGB(t[0], t[1], t[2], rt), e.opacity = t[3];
			}
			i.baseColorTexture !== void 0 && r.push(n.assignTexture(e, "map", i.baseColorTexture, S));
		}
		return Promise.all(r);
	}
}, Ys = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_MATERIALS_EMISSIVE_STRENGTH;
	}
	extendMaterialParams(e, t) {
		let n = Ks(this.parser, e, this.name);
		return n === null || n.emissiveStrength !== void 0 && (t.emissiveIntensity = n.emissiveStrength), Promise.resolve();
	}
}, Xs = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_MATERIALS_CLEARCOAT;
	}
	getMaterialType(e) {
		return Ks(this.parser, e, this.name) === null ? null : Ye;
	}
	extendMaterialParams(e, t) {
		let n = Ks(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		if (n.clearcoatFactor !== void 0 && (t.clearcoat = n.clearcoatFactor), n.clearcoatTexture !== void 0 && r.push(this.parser.assignTexture(t, "clearcoatMap", n.clearcoatTexture)), n.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = n.clearcoatRoughnessFactor), n.clearcoatRoughnessTexture !== void 0 && r.push(this.parser.assignTexture(t, "clearcoatRoughnessMap", n.clearcoatRoughnessTexture)), n.clearcoatNormalTexture !== void 0 && (r.push(this.parser.assignTexture(t, "clearcoatNormalMap", n.clearcoatNormalTexture)), n.clearcoatNormalTexture.scale !== void 0)) {
			let e = n.clearcoatNormalTexture.scale;
			t.clearcoatNormalScale = new Se(e, e);
		}
		return Promise.all(r);
	}
}, Zs = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_MATERIALS_DISPERSION;
	}
	getMaterialType(e) {
		return Ks(this.parser, e, this.name) === null ? null : Ye;
	}
	extendMaterialParams(e, t) {
		let n = Ks(this.parser, e, this.name);
		return n === null || (t.dispersion = n.dispersion === void 0 ? 0 : n.dispersion), Promise.resolve();
	}
}, Qs = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_MATERIALS_IRIDESCENCE;
	}
	getMaterialType(e) {
		return Ks(this.parser, e, this.name) === null ? null : Ye;
	}
	extendMaterialParams(e, t) {
		let n = Ks(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor), n.iridescenceTexture !== void 0 && r.push(this.parser.assignTexture(t, "iridescenceMap", n.iridescenceTexture)), n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), n.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum), n.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum), n.iridescenceThicknessTexture !== void 0 && r.push(this.parser.assignTexture(t, "iridescenceThicknessMap", n.iridescenceThicknessTexture)), Promise.all(r);
	}
}, $s = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_MATERIALS_SHEEN;
	}
	getMaterialType(e) {
		return Ks(this.parser, e, this.name) === null ? null : Ye;
	}
	extendMaterialParams(e, t) {
		let n = Ks(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		if (t.sheenColor = new st(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1, n.sheenColorFactor !== void 0) {
			let e = n.sheenColorFactor;
			t.sheenColor.setRGB(e[0], e[1], e[2], rt);
		}
		return n.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = n.sheenRoughnessFactor), n.sheenColorTexture !== void 0 && r.push(this.parser.assignTexture(t, "sheenColorMap", n.sheenColorTexture, S)), n.sheenRoughnessTexture !== void 0 && r.push(this.parser.assignTexture(t, "sheenRoughnessMap", n.sheenRoughnessTexture)), Promise.all(r);
	}
}, ec = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_MATERIALS_TRANSMISSION;
	}
	getMaterialType(e) {
		return Ks(this.parser, e, this.name) === null ? null : Ye;
	}
	extendMaterialParams(e, t) {
		let n = Ks(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.transmissionFactor !== void 0 && (t.transmission = n.transmissionFactor), n.transmissionTexture !== void 0 && r.push(this.parser.assignTexture(t, "transmissionMap", n.transmissionTexture)), Promise.all(r);
	}
}, tc = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_MATERIALS_VOLUME;
	}
	getMaterialType(e) {
		return Ks(this.parser, e, this.name) === null ? null : Ye;
	}
	extendMaterialParams(e, t) {
		let n = Ks(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		t.thickness = n.thicknessFactor === void 0 ? 0 : n.thicknessFactor, n.thicknessTexture !== void 0 && r.push(this.parser.assignTexture(t, "thicknessMap", n.thicknessTexture)), t.attenuationDistance = n.attenuationDistance || Infinity;
		let i = n.attenuationColor || [
			1,
			1,
			1
		];
		return t.attenuationColor = new st().setRGB(i[0], i[1], i[2], rt), Promise.all(r);
	}
}, nc = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_MATERIALS_IOR;
	}
	getMaterialType(e) {
		return Ks(this.parser, e, this.name) === null ? null : Ye;
	}
	extendMaterialParams(e, t) {
		let n = Ks(this.parser, e, this.name);
		return n === null ? Promise.resolve() : (t.ior = n.ior === void 0 ? 1.5 : n.ior, t.ior === 0 && (t.ior = 1e3), Promise.resolve());
	}
}, rc = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_MATERIALS_SPECULAR;
	}
	getMaterialType(e) {
		return Ks(this.parser, e, this.name) === null ? null : Ye;
	}
	extendMaterialParams(e, t) {
		let n = Ks(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		t.specularIntensity = n.specularFactor === void 0 ? 1 : n.specularFactor, n.specularTexture !== void 0 && r.push(this.parser.assignTexture(t, "specularIntensityMap", n.specularTexture));
		let i = n.specularColorFactor || [
			1,
			1,
			1
		];
		return t.specularColor = new st().setRGB(i[0], i[1], i[2], rt), n.specularColorTexture !== void 0 && r.push(this.parser.assignTexture(t, "specularColorMap", n.specularColorTexture, S)), Promise.all(r);
	}
}, ic = class {
	constructor(e) {
		this.parser = e, this.name = U.EXT_MATERIALS_BUMP;
	}
	getMaterialType(e) {
		return Ks(this.parser, e, this.name) === null ? null : Ye;
	}
	extendMaterialParams(e, t) {
		let n = Ks(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return t.bumpScale = n.bumpFactor === void 0 ? 1 : n.bumpFactor, n.bumpTexture !== void 0 && r.push(this.parser.assignTexture(t, "bumpMap", n.bumpTexture)), Promise.all(r);
	}
}, ac = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_MATERIALS_ANISOTROPY;
	}
	getMaterialType(e) {
		return Ks(this.parser, e, this.name) === null ? null : Ye;
	}
	extendMaterialParams(e, t) {
		let n = Ks(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.anisotropyStrength !== void 0 && (t.anisotropy = n.anisotropyStrength), n.anisotropyRotation !== void 0 && (t.anisotropyRotation = n.anisotropyRotation), n.anisotropyTexture !== void 0 && r.push(this.parser.assignTexture(t, "anisotropyMap", n.anisotropyTexture)), Promise.all(r);
	}
}, oc = class {
	constructor(e) {
		this.parser = e, this.name = U.KHR_TEXTURE_BASISU;
	}
	loadTexture(e) {
		let t = this.parser, n = t.json, r = n.textures[e];
		if (!r.extensions || !r.extensions[this.name]) return null;
		let i = r.extensions[this.name], a = t.options.ktx2Loader;
		if (!a) {
			if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
			return null;
		}
		return t.loadTextureImage(e, i.source, a);
	}
}, sc = class {
	constructor(e) {
		this.parser = e, this.name = U.EXT_TEXTURE_WEBP;
	}
	loadTexture(e) {
		let t = this.name, n = this.parser, r = n.json, i = r.textures[e];
		if (!i.extensions || !i.extensions[t]) return null;
		let a = i.extensions[t], o = r.images[a.source], s = n.textureLoader;
		if (o.uri) {
			let e = n.options.manager.getHandler(o.uri);
			e !== null && (s = e);
		}
		return n.loadTextureImage(e, a.source, s);
	}
}, cc = class {
	constructor(e) {
		this.parser = e, this.name = U.EXT_TEXTURE_AVIF;
	}
	loadTexture(e) {
		let t = this.name, n = this.parser, r = n.json, i = r.textures[e];
		if (!i.extensions || !i.extensions[t]) return null;
		let a = i.extensions[t], o = r.images[a.source], s = n.textureLoader;
		if (o.uri) {
			let e = n.options.manager.getHandler(o.uri);
			e !== null && (s = e);
		}
		return n.loadTextureImage(e, a.source, s);
	}
}, lc = class {
	constructor(e, t) {
		this.name = t, this.parser = e;
	}
	loadBufferView(e) {
		let t = this.parser.json, n = t.bufferViews[e];
		if (n.extensions && n.extensions[this.name]) {
			let e = n.extensions[this.name], r = this.parser.getDependency("buffer", e.buffer), i = this.parser.options.meshoptDecoder;
			if (!i || !i.supported) {
				if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
				return null;
			}
			return r.then(function(t) {
				let n = e.byteOffset || 0, r = e.byteLength || 0, a = e.count, o = e.byteStride, s = new Uint8Array(t, n, r);
				return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(a, o, s, e.mode, e.filter).then(function(e) {
					return e.buffer;
				}) : i.ready.then(function() {
					let t = new ArrayBuffer(a * o);
					return i.decodeGltfBuffer(new Uint8Array(t), a, o, s, e.mode, e.filter), t;
				});
			});
		}
		return null;
	}
}, uc = class {
	constructor(e) {
		this.name = U.EXT_MESH_GPU_INSTANCING, this.parser = e;
	}
	createNodeMesh(e) {
		let t = this.parser.json, n = t.nodes[e];
		if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
		let i = t.meshes[n.mesh];
		for (let e of i.primitives) if (e.mode !== xc.TRIANGLES && e.mode !== xc.TRIANGLE_STRIP && e.mode !== xc.TRIANGLE_FAN && e.mode !== void 0) return null;
		let a = n.extensions[this.name].attributes, o = [], s = {};
		for (let e in a) o.push(this.parser.getDependency("accessor", a[e]).then((t) => (s[e] = t, s[e])));
		return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((e) => {
			let t = e.pop(), n = t.isGroup ? t.children : [t], i = e[0].count, a = [];
			for (let e of n) {
				let t = new Ve(), n = new j(), o = new Be(), c = new j(1, 1, 1), l = new fe(e.geometry, e.material, i);
				for (let e = 0; e < i; e++) s.TRANSLATION && n.fromBufferAttribute(s.TRANSLATION, e), s.ROTATION && o.fromBufferAttribute(s.ROTATION, e), s.SCALE && c.fromBufferAttribute(s.SCALE, e), l.setMatrixAt(e, t.compose(n, o, c));
				let u = null;
				for (let e in s) if (e === "_COLOR_0") {
					let t = s[e];
					l.instanceColor = new r(t.array, t.itemSize, t.normalized);
				} else if (e !== "TRANSLATION" && e !== "ROTATION" && e !== "SCALE") {
					if (u === null) {
						let e = l.geometry;
						u = new we(), u.name = e.name;
						for (let t in e.attributes) u.setAttribute(t, e.attributes[t]);
						for (let t in e.morphAttributes) u.morphAttributes[t] = e.morphAttributes[t];
						e.index !== null && u.setIndex(e.index), u.morphTargetsRelative = e.morphTargetsRelative;
						for (let t of e.groups) u.addGroup(t.start, t.count, t.materialIndex);
						e.boundingBox !== null && (u.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (u.boundingSphere = e.boundingSphere.clone()), u.drawRange.start = e.drawRange.start, u.drawRange.count = e.drawRange.count, u.userData = Object.assign({}, e.userData), l.geometry = u;
					}
					let t = s[e];
					u.setAttribute(e, new r(t.array, t.itemSize, t.normalized));
				}
				A.prototype.copy.call(l, e), this.parser.assignFinalMaterial(l), a.push(l);
			}
			return t.isGroup ? (t.clear(), t.add(...a), t) : a[0];
		}));
	}
}, dc = "glTF", fc = 12, pc = {
	JSON: 1313821514,
	BIN: 5130562
}, mc = class {
	constructor(e) {
		this.name = U.KHR_BINARY_GLTF, this.content = null, this.body = null;
		let t = new DataView(e, 0, fc), n = new TextDecoder();
		if (this.header = {
			magic: n.decode(new Uint8Array(e.slice(0, 4))),
			version: t.getUint32(4, !0),
			length: t.getUint32(8, !0)
		}, this.header.magic !== dc) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
		if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
		let r = this.header.length - fc, i = new DataView(e, fc), a = 0;
		for (; a < r;) {
			let t = i.getUint32(a, !0);
			a += 4;
			let r = i.getUint32(a, !0);
			if (a += 4, r === pc.JSON) {
				let r = new Uint8Array(e, fc + a, t);
				this.content = n.decode(r);
			} else if (r === pc.BIN) {
				let n = fc + a;
				this.body = e.slice(n, n + t);
			}
			a += t;
		}
		if (this.content === null) throw Error("THREE.GLTFLoader: JSON content not found.");
	}
}, hc = class {
	constructor(e, t) {
		if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
		this.name = U.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
	}
	decodePrimitive(e, t) {
		let n = this.json, r = this.dracoLoader, i = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, s = {}, c = {};
		for (let e in a) {
			let t = Ec[e] || e.toLowerCase();
			o[t] = a[e];
		}
		for (let t in e.attributes) {
			let r = Ec[t] || t.toLowerCase();
			if (a[t] !== void 0) {
				let i = n.accessors[e.attributes[t]];
				c[r] = Sc[i.componentType].name, s[r] = i.normalized === !0;
			}
		}
		return t.getDependency("bufferView", i).then(function(e) {
			return new Promise(function(t, n) {
				r.decodeDracoFile(e, function(e) {
					for (let t in e.attributes) {
						let n = e.attributes[t], r = s[t];
						r !== void 0 && (n.normalized = r);
					}
					t(e);
				}, o, c, rt, n);
			});
		});
	}
}, gc = class {
	constructor() {
		this.name = U.KHR_TEXTURE_TRANSFORM;
	}
	extendTexture(e, t) {
		if ((t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0) return e;
		if (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), t.rotation !== void 0) {
			let t = Math.cos(e.rotation), n = Math.sin(e.rotation);
			e.matrix.set(e.repeat.x * t, e.repeat.y * n, e.offset.x, -e.repeat.x * n, e.repeat.y * t, e.offset.y, 0, 0, 1), e.matrixAutoUpdate = !1;
		}
		return e.needsUpdate = !0, e;
	}
}, _c = class {
	constructor() {
		this.name = U.KHR_MESH_QUANTIZATION;
	}
}, vc = class extends me {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r * 3 + r;
		for (let e = 0; e !== r; e++) t[e] = n[i + e];
		return t;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = o * 2, c = o * 3, l = r - t, u = (n - t) / l, d = u * u, f = d * u, p = e * c, m = p - c, h = -2 * f + 3 * d, g = f - d, _ = 1 - h, v = g - d + u;
		for (let e = 0; e !== o; e++) {
			let t = a[m + e + o], n = a[m + e + s] * l, r = a[p + e + o], c = a[p + e] * l;
			i[e] = _ * t + v * n + h * r + g * c;
		}
		return i;
	}
}, yc = new Be(), bc = class extends vc {
	interpolate_(e, t, n, r) {
		let i = super.interpolate_(e, t, n, r);
		return yc.fromArray(i).normalize().toArray(i), i;
	}
}, xc = {
	FLOAT: 5126,
	FLOAT_MAT3: 35675,
	FLOAT_MAT4: 35676,
	FLOAT_VEC2: 35664,
	FLOAT_VEC3: 35665,
	FLOAT_VEC4: 35666,
	LINEAR: 9729,
	REPEAT: 10497,
	SAMPLER_2D: 35678,
	POINTS: 0,
	LINES: 1,
	LINE_LOOP: 2,
	LINE_STRIP: 3,
	TRIANGLES: 4,
	TRIANGLE_STRIP: 5,
	TRIANGLE_FAN: 6,
	UNSIGNED_BYTE: 5121,
	UNSIGNED_SHORT: 5123
}, Sc = {
	5120: Int8Array,
	5121: Uint8Array,
	5122: Int16Array,
	5123: Uint16Array,
	5125: Uint32Array,
	5126: Float32Array
}, Cc = {
	9728: Ne,
	9729: ie,
	9984: ot,
	9985: Ae,
	9986: be,
	9987: e
}, wc = {
	33071: i,
	33648: Fe,
	10497: d
}, Tc = {
	SCALAR: 1,
	VEC2: 2,
	VEC3: 3,
	VEC4: 4,
	MAT2: 4,
	MAT3: 9,
	MAT4: 16
}, Ec = {
	POSITION: "position",
	NORMAL: "normal",
	TANGENT: "tangent",
	TEXCOORD_0: "uv",
	TEXCOORD_1: "uv1",
	TEXCOORD_2: "uv2",
	TEXCOORD_3: "uv3",
	COLOR_0: "color",
	WEIGHTS_0: "skinWeight",
	JOINTS_0: "skinIndex"
}, Dc = {
	scale: "scale",
	translation: "position",
	rotation: "quaternion",
	weights: "morphTargetInfluences"
}, Oc = {
	CUBICSPLINE: void 0,
	LINEAR: b,
	STEP: f
}, kc = {
	OPAQUE: "OPAQUE",
	MASK: "MASK",
	BLEND: "BLEND"
};
function Ac(e) {
	return e.DefaultMaterial === void 0 && (e.DefaultMaterial = new Ue({
		color: 16777215,
		emissive: 0,
		metalness: 1,
		roughness: 1,
		transparent: !1,
		depthTest: !0,
		side: 0
	})), e.DefaultMaterial;
}
function jc(e, t, n) {
	for (let r in n.extensions) e[r] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = n.extensions[r]);
}
function Mc(e, t) {
	t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function Nc(e, t, n) {
	let r = !1, i = !1, a = !1;
	for (let e = 0, n = t.length; e < n; e++) {
		let n = t[e];
		if (n.POSITION !== void 0 && (r = !0), n.NORMAL !== void 0 && (i = !0), n.COLOR_0 !== void 0 && (a = !0), r && i && a) break;
	}
	if (!r && !i && !a) return Promise.resolve(e);
	let o = [], s = [], c = [];
	for (let l = 0, u = t.length; l < u; l++) {
		let u = t[l];
		if (r) {
			let t = u.POSITION === void 0 ? e.attributes.position : n.getDependency("accessor", u.POSITION);
			o.push(t);
		}
		if (i) {
			let t = u.NORMAL === void 0 ? e.attributes.normal : n.getDependency("accessor", u.NORMAL);
			s.push(t);
		}
		if (a) {
			let t = u.COLOR_0 === void 0 ? e.attributes.color : n.getDependency("accessor", u.COLOR_0);
			c.push(t);
		}
	}
	return Promise.all([
		Promise.all(o),
		Promise.all(s),
		Promise.all(c)
	]).then(function(t) {
		let n = t[0], o = t[1], s = t[2];
		return r && (e.morphAttributes.position = n), i && (e.morphAttributes.normal = o), a && (e.morphAttributes.color = s), e.morphTargetsRelative = !0, e;
	});
}
function Pc(e, t) {
	if (e.updateMorphTargets(), t.weights !== void 0) for (let n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n];
	if (t.extras && Array.isArray(t.extras.targetNames)) {
		let n = t.extras.targetNames;
		if (e.morphTargetInfluences.length === n.length) {
			e.morphTargetDictionary = {};
			for (let t = 0, r = n.length; t < r; t++) e.morphTargetDictionary[n[t]] = t;
		} else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
	}
}
function Fc(e) {
	let t, n = e.extensions && e.extensions[U.KHR_DRACO_MESH_COMPRESSION];
	if (t = n ? "draco:" + n.bufferView + ":" + n.indices + ":" + Ic(n.attributes) : e.indices + ":" + Ic(e.attributes) + ":" + e.mode, e.targets !== void 0) for (let n = 0, r = e.targets.length; n < r; n++) t += ":" + Ic(e.targets[n]);
	return t;
}
function Ic(e) {
	let t = "", n = Object.keys(e).sort();
	for (let r = 0, i = n.length; r < i; r++) t += n[r] + ":" + e[n[r]] + ";";
	return t;
}
function Lc(e) {
	switch (e) {
		case Int8Array: return 1 / 127;
		case Uint8Array: return 1 / 255;
		case Int16Array: return 1 / 32767;
		case Uint16Array: return 1 / 65535;
		default: throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
	}
}
function Rc(e) {
	return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0 ? "image/webp" : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
var zc = new Ve(), Bc = class {
	constructor(e = {}, n = {}) {
		this.json = e, this.extensions = {}, this.plugins = {}, this.options = n, this.cache = new Gs(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
			refs: {},
			uses: {}
		}, this.cameraCache = {
			refs: {},
			uses: {}
		}, this.lightCache = {
			refs: {},
			uses: {}
		}, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
		let r = !1, i = -1, a = !1, o = -1;
		if (typeof navigator < "u" && navigator.userAgent !== void 0) {
			let e = navigator.userAgent;
			r = /^((?!chrome|android).)*safari/i.test(e) === !0;
			let t = e.match(/Version\/(\d+)/);
			i = r && t ? parseInt(t[1], 10) : -1, a = e.indexOf("Firefox") > -1, o = a ? e.match(/Firefox\/([0-9]+)\./)[1] : -1;
		}
		this.textureLoader = typeof createImageBitmap > "u" || r && i < 17 || a && o < 98 ? new t(this.options.manager) : new pt(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new w(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
	}
	setExtensions(e) {
		this.extensions = e;
	}
	setPlugins(e) {
		this.plugins = e;
	}
	parse(e, t) {
		let n = this, r = this.json, i = this.extensions;
		this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(e) {
			return e._markDefs && e._markDefs();
		}), Promise.all(this._invokeAll(function(e) {
			return e.beforeRoot && e.beforeRoot();
		})).then(function() {
			return Promise.all([
				n.getDependencies("scene"),
				n.getDependencies("animation"),
				n.getDependencies("camera")
			]);
		}).then(function(t) {
			let a = {
				scene: t[0][r.scene || 0],
				scenes: t[0],
				animations: t[1],
				cameras: t[2],
				asset: r.asset,
				parser: n,
				userData: {}
			};
			return jc(i, a, r), Mc(a, r), Promise.all(n._invokeAll(function(e) {
				return e.afterRoot && e.afterRoot(a);
			})).then(function() {
				for (let e of a.scenes) e.updateMatrixWorld();
				e(a);
			});
		}).catch(t);
	}
	_markDefs() {
		let e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n].joints;
			for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0;
		}
		for (let t = 0, r = e.length; t < r; t++) {
			let r = e[t];
			r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
		}
	}
	_addNodeRef(e, t) {
		t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
	}
	_getNodeRef(e, t, n) {
		if (e.refs[t] <= 1) return n;
		let r = n.clone(), i = (e, t) => {
			let n = this.associations.get(e);
			n != null && this.associations.set(t, n);
			for (let [n, r] of e.children.entries()) i(r, t.children[n]);
		};
		return i(n, r), r.name += "_instance_" + e.uses[t]++, r;
	}
	_invokeOne(e) {
		let t = Object.values(this.plugins);
		t.push(this);
		for (let n = 0; n < t.length; n++) {
			let r = e(t[n]);
			if (r) return r;
		}
		return null;
	}
	_invokeAll(e) {
		let t = Object.values(this.plugins);
		t.unshift(this);
		let n = [];
		for (let r = 0; r < t.length; r++) {
			let i = e(t[r]);
			i && n.push(i);
		}
		return n;
	}
	getDependency(e, t) {
		let n = e + ":" + t, r = this.cache.get(n);
		if (!r) {
			switch (e) {
				case "scene":
					r = this.loadScene(t);
					break;
				case "node":
					r = this._invokeOne(function(e) {
						return e.loadNode && e.loadNode(t);
					});
					break;
				case "mesh":
					r = this._invokeOne(function(e) {
						return e.loadMesh && e.loadMesh(t);
					});
					break;
				case "accessor":
					r = this.loadAccessor(t);
					break;
				case "bufferView":
					r = this._invokeOne(function(e) {
						return e.loadBufferView && e.loadBufferView(t);
					});
					break;
				case "buffer":
					r = this.loadBuffer(t);
					break;
				case "material":
					r = this._invokeOne(function(e) {
						return e.loadMaterial && e.loadMaterial(t);
					});
					break;
				case "texture":
					r = this._invokeOne(function(e) {
						return e.loadTexture && e.loadTexture(t);
					});
					break;
				case "skin":
					r = this.loadSkin(t);
					break;
				case "animation":
					r = this._invokeOne(function(e) {
						return e.loadAnimation && e.loadAnimation(t);
					});
					break;
				case "camera":
					r = this.loadCamera(t);
					break;
				default: if (r = this._invokeOne(function(n) {
					return n != this && n.getDependency && n.getDependency(e, t);
				}), !r) throw Error("Unknown type: " + e);
			}
			this.cache.add(n, r);
		}
		return r;
	}
	getDependencies(e) {
		let t = this.cache.get(e);
		if (!t) {
			let n = this, r = this.json[e + (e === "mesh" ? "es" : "s")] || [];
			t = Promise.all(r.map(function(t, r) {
				return n.getDependency(e, r);
			})), this.cache.add(e, t);
		}
		return t;
	}
	loadBuffer(e) {
		let t = this.json.buffers[e], n = this.fileLoader;
		if (t.type && t.type !== "arraybuffer") throw Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
		if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[U.KHR_BINARY_GLTF].body);
		let r = this.options;
		return new Promise(function(e, i) {
			n.load($e.resolveURL(t.uri, r.path), e, void 0, function() {
				i(/* @__PURE__ */ Error("THREE.GLTFLoader: Failed to load buffer \"" + t.uri + "\"."));
			});
		});
	}
	loadBufferView(e) {
		let t = this.json.bufferViews[e];
		return this.getDependency("buffer", t.buffer).then(function(e) {
			let n = t.byteLength || 0, r = t.byteOffset || 0;
			return e.slice(r, r + n);
		});
	}
	loadAccessor(e) {
		let t = this, n = this.json, r = this.json.accessors[e];
		if (r.bufferView === void 0 && r.sparse === void 0) {
			let e = Tc[r.type], t = Sc[r.componentType], n = r.normalized === !0, i = new t(r.count * e);
			return Promise.resolve(new dt(i, e, n));
		}
		let i = [];
		return r.bufferView === void 0 ? i.push(null) : i.push(this.getDependency("bufferView", r.bufferView)), r.sparse !== void 0 && (i.push(this.getDependency("bufferView", r.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", r.sparse.values.bufferView))), Promise.all(i).then(function(e) {
			let i = e[0], a = Tc[r.type], o = Sc[r.componentType], s = o.BYTES_PER_ELEMENT, c = s * a, l = r.byteOffset || 0, u = r.bufferView === void 0 ? void 0 : n.bufferViews[r.bufferView].byteStride, d = r.normalized === !0, f, p;
			if (u && u !== c) {
				let e = Math.floor(l / u), n = "InterleavedBuffer:" + r.bufferView + ":" + r.componentType + ":" + e + ":" + r.count, c = t.cache.get(n);
				c || (f = new o(i, e * u, r.count * u / s), c = new m(f, u / s), t.cache.add(n, c)), p = new ue(c, a, l % u / s, d);
			} else f = i === null ? new o(r.count * a) : new o(i, l, r.count * a), p = new dt(f, a, d);
			if (r.sparse !== void 0) {
				let t = Tc.SCALAR, n = Sc[r.sparse.indices.componentType], s = r.sparse.indices.byteOffset || 0, c = r.sparse.values.byteOffset || 0, l = new n(e[1], s, r.sparse.count * t), u = new o(e[2], c, r.sparse.count * a);
				i !== null && (p = new dt(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
				for (let e = 0, t = l.length; e < t; e++) {
					let t = l[e];
					if (p.setX(t, u[e * a]), a >= 2 && p.setY(t, u[e * a + 1]), a >= 3 && p.setZ(t, u[e * a + 2]), a >= 4 && p.setW(t, u[e * a + 3]), a >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
				}
				p.normalized = d;
			}
			return p;
		});
	}
	loadTexture(e) {
		let t = this.json, n = this.options, r = t.textures[e].source, i = t.images[r], a = this.textureLoader;
		if (i.uri) {
			let e = n.manager.getHandler(i.uri);
			e !== null && (a = e);
		}
		return this.loadTextureImage(e, r, a);
	}
	loadTextureImage(e, t, n) {
		let r = this, i = this.json, a = i.textures[e], o = i.images[t], s = (o.uri || o.bufferView) + ":" + a.sampler;
		if (this.textureCache[s]) return this.textureCache[s];
		let c = this.loadImageSource(t, n).then(function(t) {
			t.flipY = !1, t.name = a.name || o.name || "", t.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (t.name = o.uri);
			let n = (i.samplers || {})[a.sampler] || {};
			return t.magFilter = Cc[n.magFilter] || 1006, t.minFilter = Cc[n.minFilter] || 1008, t.wrapS = wc[n.wrapS] || 1e3, t.wrapT = wc[n.wrapT] || 1e3, t.generateMipmaps = !t.isCompressedTexture && t.minFilter !== 1003 && t.minFilter !== 1006, r.associations.set(t, { textures: e }), t;
		}).catch(function() {
			return null;
		});
		return this.textureCache[s] = c, c;
	}
	loadImageSource(e, t) {
		let n = this, r = this.json, i = this.options;
		if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((e) => e.clone());
		let a = r.images[e], o = self.URL || self.webkitURL, s = a.uri || "", c = !1;
		if (a.bufferView !== void 0) s = n.getDependency("bufferView", a.bufferView).then(function(e) {
			c = !0;
			let t = new Blob([e], { type: a.mimeType });
			return s = o.createObjectURL(t), s;
		});
		else if (a.uri === void 0) throw Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
		let l = Promise.resolve(s).then(function(e) {
			return new Promise(function(n, r) {
				let a = n;
				t.isImageBitmapLoader === !0 && (a = function(e) {
					let t = new ae(e);
					t.needsUpdate = !0, n(t);
				}), t.load($e.resolveURL(e, i.path), a, void 0, r);
			});
		}).then(function(e) {
			return c === !0 && o.revokeObjectURL(s), Mc(e, a), e.userData.mimeType = a.mimeType || Rc(a.uri), e;
		}).catch(function(e) {
			throw console.error("THREE.GLTFLoader: Couldn't load texture", s), e;
		});
		return this.sourceCache[e] = l, l;
	}
	assignTexture(e, t, n, r) {
		let i = this;
		return this.getDependency("texture", n.index).then(function(a) {
			if (!a) return null;
			if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), i.extensions[U.KHR_TEXTURE_TRANSFORM]) {
				let e = n.extensions === void 0 ? void 0 : n.extensions[U.KHR_TEXTURE_TRANSFORM];
				if (e) {
					let t = i.associations.get(a);
					a = i.extensions[U.KHR_TEXTURE_TRANSFORM].extendTexture(a, e), i.associations.set(a, t);
				}
			}
			return r !== void 0 && (a.colorSpace = r), e[t] = a, a;
		});
	}
	assignFinalMaterial(e) {
		let t = e.geometry, n = e.material, r = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
		if (e.isPoints) {
			let e = "PointsMaterial:" + n.uuid, t = this.cache.get(e);
			t || (t = new s(), tt.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, t.sizeAttenuation = !1, this.cache.add(e, t)), n = t;
		} else if (e.isLine) {
			let e = "LineBasicMaterial:" + n.uuid, t = this.cache.get(e);
			t || (t = new D(), tt.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, this.cache.add(e, t)), n = t;
		}
		if (r || i || a) {
			let e = "ClonedMaterial:" + n.uuid + ":";
			r && (e += "derivative-tangents:"), i && (e += "vertex-colors:"), a && (e += "flat-shading:");
			let t = this.cache.get(e);
			t || (t = n.clone(), i && (t.vertexColors = !0), a && (t.flatShading = !0), r && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(n))), n = t;
		}
		e.material = n;
	}
	getMaterialType() {
		return Ue;
	}
	loadMaterial(e) {
		let t = this, n = this.json, r = this.extensions, i = n.materials[e], a, o = {}, s = i.extensions || {}, c = [];
		if (s[U.KHR_MATERIALS_UNLIT]) {
			let e = r[U.KHR_MATERIALS_UNLIT];
			a = e.getMaterialType(), c.push(e.extendParams(o, i, t));
		} else {
			let n = i.pbrMetallicRoughness || {};
			if (o.color = new st(1, 1, 1), o.opacity = 1, Array.isArray(n.baseColorFactor)) {
				let e = n.baseColorFactor;
				o.color.setRGB(e[0], e[1], e[2], rt), o.opacity = e[3];
			}
			n.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", n.baseColorTexture, S)), o.metalness = n.metallicFactor === void 0 ? 1 : n.metallicFactor, o.roughness = n.roughnessFactor === void 0 ? 1 : n.roughnessFactor, n.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", n.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", n.metallicRoughnessTexture))), a = this._invokeOne(function(t) {
				return t.getMaterialType && t.getMaterialType(e);
			}), c.push(Promise.all(this._invokeAll(function(t) {
				return t.extendMaterialParams && t.extendMaterialParams(e, o);
			})));
		}
		i.doubleSided === !0 && (o.side = 2);
		let l = i.alphaMode || kc.OPAQUE;
		if (l === kc.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, l === kc.MASK && (o.alphaTest = i.alphaCutoff === void 0 ? .5 : i.alphaCutoff)), i.normalTexture !== void 0 && a !== ke && (c.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new Se(1, 1), i.normalTexture.scale !== void 0)) {
			let e = i.normalTexture.scale;
			o.normalScale.set(e, e);
		}
		if (i.occlusionTexture !== void 0 && a !== ke && (c.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && a !== ke) {
			let e = i.emissiveFactor;
			o.emissive = new st().setRGB(e[0], e[1], e[2], rt);
		}
		return i.emissiveTexture !== void 0 && a !== ke && c.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, S)), Promise.all(c).then(function() {
			let n = new a(o);
			return i.name && (n.name = i.name), Mc(n, i), t.associations.set(n, { materials: e }), i.extensions && jc(r, n, i), n;
		});
	}
	createUniqueName(e) {
		let t = E.sanitizeNodeName(e || "");
		return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
	}
	loadGeometries(e) {
		let t = this, n = this.extensions, r = this.primitiveCache;
		function i(e) {
			return n[U.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(n) {
				return Hc(n, e, t);
			});
		}
		let a = [];
		for (let n = 0, o = e.length; n < o; n++) {
			let o = e[n], s = Fc(o), c = r[s];
			if (c) a.push(c.promise);
			else {
				let e;
				e = o.extensions && o.extensions[U.KHR_DRACO_MESH_COMPRESSION] ? i(o) : Hc(new we(), o, t), o.mode === xc.TRIANGLE_STRIP ? e = e.then((e) => Vs(e, 1)) : o.mode === xc.TRIANGLE_FAN && (e = e.then((e) => Vs(e, 2))), r[s] = {
					primitive: o,
					promise: e
				}, a.push(e);
			}
		}
		return Promise.all(a);
	}
	loadMesh(e) {
		let t = this, n = this.json, r = this.extensions, i = n.meshes[e], a = i.primitives, o = [];
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e].material === void 0 ? Ac(this.cache) : this.getDependency("material", a[e].material);
			o.push(t);
		}
		return o.push(t.loadGeometries(a)), Promise.all(o).then(async function(n) {
			let o = n.slice(0, n.length - 1), s = n[n.length - 1], c = [];
			for (let n = 0, u = s.length; n < u; n++) {
				let u = s[n], d = a[n], f, p = o[n];
				if (d.mode === xc.TRIANGLES || d.mode === xc.TRIANGLE_STRIP || d.mode === xc.TRIANGLE_FAN || d.mode === void 0) {
					let e = i.isSkinnedMesh === !0, t = u.hasAttribute("skinIndex") && u.hasAttribute("skinWeight");
					e && t === !1 && console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."), f = e && t ? new he(u, p) : new M(u, p), f.isSkinnedMesh === !0 && f.normalizeSkinWeights();
				} else if (d.mode === xc.LINES) f = new ye(u, p);
				else if (d.mode === xc.LINE_STRIP) f = new v(u, p);
				else if (d.mode === xc.LINE_LOOP) f = new ge(u, p);
				else if (d.mode === xc.POINTS) f = new l(u, p);
				else throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + d.mode);
				Object.keys(f.geometry.morphAttributes).length > 0 && Pc(f, i), f.name = t.createUniqueName(i.name || "mesh_" + e), Mc(f, i), d.extensions && jc(r, f, d), t.assignFinalMaterial(f), c.push(f);
			}
			for (let n = 0, r = c.length; n < r; n++) t.associations.set(c[n], {
				meshes: e,
				primitives: n
			});
			if (c.length === 1) return i.extensions && jc(r, c[0], i), c[0];
			let u = new x();
			i.extensions && jc(r, u, i), t.associations.set(u, { meshes: e });
			for (let e = 0, t = c.length; e < t; e++) u.add(c[e]);
			return u;
		});
	}
	loadCamera(e) {
		let t, n = this.json.cameras[e], r = n[n.type];
		if (!r) {
			console.warn("THREE.GLTFLoader: Missing camera parameters.");
			return;
		}
		return n.type === "perspective" ? t = new se(De.radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2e6) : n.type === "orthographic" && (t = new ut(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Mc(t, n), Promise.resolve(t);
	}
	loadSkin(e) {
		let t = this.json.skins[e], n = [];
		for (let e = 0, r = t.joints.length; e < r; e++) n.push(this._loadNodeShallow(t.joints[e]));
		return t.inverseBindMatrices === void 0 ? n.push(null) : n.push(this.getDependency("accessor", t.inverseBindMatrices)), Promise.all(n).then(function(e) {
			let n = e.pop(), r = e, i = [], a = [];
			for (let e = 0, o = r.length; e < o; e++) {
				let o = r[e];
				if (o) {
					i.push(o);
					let t = new Ve();
					n !== null && t.fromArray(n.array, e * 16), a.push(t);
				} else console.warn("THREE.GLTFLoader: Joint \"%s\" could not be found.", t.joints[e]);
			}
			return new de(i, a);
		});
	}
	loadAnimation(e) {
		let t = this.json, n = this, r = t.animations[e], i = r.name ? r.name : "animation_" + e, a = [], o = [], s = [], c = [], l = [];
		for (let e = 0, t = r.channels.length; e < t; e++) {
			let t = r.channels[e], n = r.samplers[t.sampler], i = t.target, u = i.node, d = r.parameters === void 0 ? n.input : r.parameters[n.input], f = r.parameters === void 0 ? n.output : r.parameters[n.output];
			i.node !== void 0 && (a.push(this.getDependency("node", u)), o.push(this.getDependency("accessor", d)), s.push(this.getDependency("accessor", f)), c.push(n), l.push(i));
		}
		return Promise.all([
			Promise.all(a),
			Promise.all(o),
			Promise.all(s),
			Promise.all(c),
			Promise.all(l)
		]).then(function(e) {
			let t = e[0], a = e[1], o = e[2], s = e[3], c = e[4], l = [];
			for (let e = 0, r = t.length; e < r; e++) {
				let r = t[e], i = a[e], u = o[e], d = s[e], f = c[e];
				if (r === void 0) continue;
				r.updateMatrix && r.updateMatrix();
				let p = n._createAnimationTracks(r, i, u, d, f);
				if (p) for (let e = 0; e < p.length; e++) l.push(p[e]);
			}
			let u = new Je(i, void 0, l);
			return Mc(u, r), u;
		});
	}
	createNodeMesh(e) {
		let t = this.json, n = this, r = t.nodes[e];
		return r.mesh === void 0 ? null : n.getDependency("mesh", r.mesh).then(function(e) {
			let t = n._getNodeRef(n.meshCache, r.mesh, e);
			return r.weights !== void 0 && t.traverse(function(e) {
				if (e.isMesh) for (let t = 0, n = r.weights.length; t < n; t++) e.morphTargetInfluences[t] = r.weights[t];
			}), t;
		});
	}
	loadNode(e) {
		let t = this.json, n = this, r = t.nodes[e], i = n._loadNodeShallow(e), a = [], o = r.children || [];
		for (let e = 0, t = o.length; e < t; e++) a.push(n.getDependency("node", o[e]));
		let s = r.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", r.skin);
		return Promise.all([
			i,
			Promise.all(a),
			s
		]).then(function(e) {
			let t = e[0], n = e[1], r = e[2];
			r !== null && t.traverse(function(e) {
				e.isSkinnedMesh && e.bind(r, zc);
			});
			for (let e = 0, r = n.length; e < r; e++) t.add(n[e]);
			if (t.userData.pivot !== void 0 && n.length > 0) {
				let e = t.userData.pivot, r = n[0];
				t.pivot = new j().fromArray(e), t.position.x -= e[0], t.position.y -= e[1], t.position.z -= e[2], r.position.set(0, 0, 0), delete t.userData.pivot;
			}
			return t;
		});
	}
	_loadNodeShallow(e) {
		let t = this.json, n = this.extensions, r = this;
		if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
		let i = t.nodes[e], a = i.name ? r.createUniqueName(i.name) : "", o = [], s = r._invokeOne(function(t) {
			return t.createNodeMesh && t.createNodeMesh(e);
		});
		return s && o.push(s), i.camera !== void 0 && o.push(r.getDependency("camera", i.camera).then(function(e) {
			return r._getNodeRef(r.cameraCache, i.camera, e);
		})), r._invokeAll(function(t) {
			return t.createNodeAttachment && t.createNodeAttachment(e);
		}).forEach(function(e) {
			o.push(e);
		}), this.nodeCache[e] = Promise.all(o).then(function(t) {
			let o;
			if (o = i.isBone === !0 ? new Pe() : t.length > 1 ? new x() : t.length === 1 ? t[0] : new A(), o !== t[0]) for (let e = 0, n = t.length; e < n; e++) o.add(t[e]);
			if (i.name && (o.userData.name = i.name, o.name = a), Mc(o, i), i.extensions && jc(n, o, i), i.matrix !== void 0) {
				let e = new Ve();
				e.fromArray(i.matrix), o.applyMatrix4(e);
			} else i.translation !== void 0 && o.position.fromArray(i.translation), i.rotation !== void 0 && o.quaternion.fromArray(i.rotation), i.scale !== void 0 && o.scale.fromArray(i.scale);
			if (!r.associations.has(o)) r.associations.set(o, {});
			else if (i.mesh !== void 0 && r.meshCache.refs[i.mesh] > 1) {
				let e = r.associations.get(o);
				r.associations.set(o, { ...e });
			}
			return r.associations.get(o).nodes = e, o;
		}), this.nodeCache[e];
	}
	loadScene(e) {
		let t = this.extensions, n = this.json.scenes[e], r = this, i = new x();
		n.name && (i.name = r.createUniqueName(n.name)), Mc(i, n), n.extensions && jc(t, i, n);
		let a = n.nodes || [], o = [];
		for (let e = 0, t = a.length; e < t; e++) o.push(r.getDependency("node", a[e]));
		return Promise.all(o).then(function(e) {
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				n.parent === null ? i.add(n) : i.add(Hs(n));
			}
			return r.associations = ((e) => {
				let t = /* @__PURE__ */ new Map();
				for (let [e, n] of r.associations) (e instanceof tt || e instanceof ae) && t.set(e, n);
				return e.traverse((e) => {
					let n = r.associations.get(e);
					n != null && t.set(e, n);
				}), t;
			})(i), i;
		});
	}
	_createAnimationTracks(e, t, r, i, a) {
		let o = [], s = e.name ? e.name : e.uuid, c = [];
		function l(e) {
			e.morphTargetInfluences && c.push(e.name ? e.name : e.uuid);
		}
		Dc[a.path] === Dc.weights ? (l(e), e.isGroup && e.children.forEach(l)) : c.push(s);
		let u;
		switch (Dc[a.path]) {
			case Dc.weights:
				u = ft;
				break;
			case Dc.rotation:
				u = n;
				break;
			case Dc.translation:
			case Dc.scale:
				u = Ee;
				break;
			default: switch (r.itemSize) {
				case 1:
					u = ft;
					break;
				default: u = Ee;
			}
		}
		let d = i.interpolation === void 0 ? b : Oc[i.interpolation], f = this._getArrayFromAccessor(r);
		for (let e = 0, n = c.length; e < n; e++) {
			let n = new u(c[e] + "." + Dc[a.path], t.array, f, d);
			i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(n), o.push(n);
		}
		return o;
	}
	_getArrayFromAccessor(e) {
		let t = e.array;
		if (e.normalized) {
			let e = Lc(t.constructor), n = new Float32Array(t.length);
			for (let r = 0, i = t.length; r < i; r++) n[r] = t[r] * e;
			t = n;
		}
		return t;
	}
	_createCubicSplineTrackInterpolant(e) {
		e.createInterpolant = function(e) {
			return new (this instanceof n ? bc : vc)(this.times, this.values, this.getValueSize() / 3, e);
		}, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
	}
};
function Vc(e, t, n) {
	let r = t.attributes, i = new Me();
	if (r.POSITION !== void 0) {
		let e = n.json.accessors[r.POSITION], t = e.min, a = e.max;
		if (t !== void 0 && a !== void 0) {
			if (i.set(new j(t[0], t[1], t[2]), new j(a[0], a[1], a[2])), e.normalized) {
				let t = Lc(Sc[e.componentType]);
				i.min.multiplyScalar(t), i.max.multiplyScalar(t);
			}
		} else {
			console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
			return;
		}
	} else return;
	let a = t.targets;
	if (a !== void 0) {
		let e = new j(), t = new j();
		for (let r = 0, i = a.length; r < i; r++) {
			let i = a[r];
			if (i.POSITION !== void 0) {
				let r = n.json.accessors[i.POSITION], a = r.min, o = r.max;
				if (a !== void 0 && o !== void 0) {
					if (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))), t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))), t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))), r.normalized) {
						let e = Lc(Sc[r.componentType]);
						t.multiplyScalar(e);
					}
					e.max(t);
				} else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
			}
		}
		i.expandByVector(e);
	}
	e.boundingBox = i;
	let o = new p();
	i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, e.boundingSphere = o;
}
function Hc(e, t, n) {
	let r = t.attributes, i = [];
	function a(t, r) {
		return n.getDependency("accessor", t).then(function(t) {
			e.setAttribute(r, t);
		});
	}
	for (let t in r) {
		let n = Ec[t] || t.toLowerCase();
		n in e.attributes || i.push(a(r[t], n));
	}
	if (t.indices !== void 0 && !e.index) {
		let r = n.getDependency("accessor", t.indices).then(function(t) {
			e.setIndex(t);
		});
		i.push(r);
	}
	return ce.workingColorSpace !== "srgb-linear" && "COLOR_0" in r && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ce.workingColorSpace}" not supported.`), Mc(e, t), Vc(e, t, n), Promise.all(i).then(function() {
		return t.targets === void 0 ? e : Nc(e, t.targets, n);
	});
}
//#endregion
//#region src/assets/StaticMeshProjection.ts
function Uc(e) {
	if (e == null) return null;
	if (!Array.isArray(e) || e.length !== 16 || !e.every(Number.isFinite)) throw Error("Invalid static payloadToAsset matrix.");
	return zn(e), new Ve().set(...e);
}
function Wc(e) {
	return Array.isArray(e) ? e.flatMap((e) => {
		if (!e || e.defaultMaterialId === void 0 || e.defaultMaterialId === null) return [];
		if (typeof e.slotId != "string" || typeof e.defaultMaterialId != "string" || !e.defaultMaterialId) throw Error("Invalid static default material binding.");
		return [{
			slotId: e.slotId,
			materialAsset: {
				kind: "asset",
				assetId: e.defaultMaterialId,
				revisionPolicy: "live"
			},
			tintOverrides: []
		}];
	}) : [];
}
//#endregion
//#region src/assets/StaticMeshResourceCache.ts
var Gc = class {
	storage;
	loadTemplate;
	typedMaterialGeometry;
	entries = /* @__PURE__ */ new Map();
	aliases = /* @__PURE__ */ new Map();
	pendingResolutions = /* @__PURE__ */ new Map();
	constructor(e, t = Kc, n = !1) {
		this.storage = e, this.loadTemplate = t, this.typedMaterialGeometry = n;
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
	trimUnusedGeometry() {}
	subscribeInvalidation(e) {
		return () => void 0;
	}
	async resolve(e) {
		let t = await Lt(this.storage, e.assetId, e.revisionPolicy === "pinned" ? e.revisionId : void 0), n = t.assets.find((t) => t.id === e.assetId);
		if (!n || n.kind !== "StaticMesh") throw Error(`Unknown StaticMesh asset ${e.assetId}.`);
		let r = e.revisionPolicy === "pinned" ? e.revisionId : n.currentRevisionId;
		if (!r) throw Error(`Asset ${e.assetId} has no resolvable revision.`);
		let i = t.revisions.find((e) => e.id === r && e.assetId === n.id);
		if (!i) throw Error(`Unknown revision ${r} for asset ${n.id}.`);
		let a = t.blobs.find((e) => e.key === i.blobKeys[0]);
		if (!a) throw Error(`Missing blob for asset ${n.id} revision ${i.id}.`);
		return Uc(i.metadata.payloadToAsset), {
			metadata: i.metadata,
			assetId: n.id,
			revisionId: i.id,
			bytes: a.bytes,
			materialSlotIds: Yc(i.metadata.materialSlots),
			lod: i.metadata.profile === ga
		};
	}
	async acquireEntry(e, t) {
		let n = this.entries.get(e);
		if (!n) {
			if (!t) throw Error(`Resource cache alias ${e} has no live entry.`);
			let r = this.typedMaterialGeometry && t.metadata.candidateTypedMaterials === !0 && Wc(t.metadata.materialSlots).length === t.materialSlotIds.length ? (e) => Kc(e, !0) : this.loadTemplate, i = (t.lod ? this.loadLodTemplate(t.bytes, t.materialSlotIds, r) : r(t.bytes)).then((n) => {
				let r = Uc(t.metadata.payloadToAsset);
				if (r) {
					if (t.lod) n.matrixAutoUpdate = !1, n.matrix.copy(r), n.matrixWorldNeedsUpdate = !0;
					else {
						let e = new x();
						e.matrixAutoUpdate = !1, e.matrix.copy(r), e.matrixWorldNeedsUpdate = !0, e.add(n), n = e;
					}
				}
				n.userData.defaultMaterialSlots = Wc(t.metadata.materialSlots);
				let i = qc(n), a = this.entries.get(e);
				return a && (a.resource = i), (!a || a.leases === 0) && (i.dispose(), this.entries.delete(e)), i;
			}).catch((t) => {
				this.entries.delete(e);
				for (let [t, n] of this.aliases) n === e && this.aliases.delete(t);
				throw t;
			});
			n = {
				leases: 0,
				resource: null,
				materialSlotIds: t.materialSlotIds,
				promise: i
			}, this.entries.set(e, n);
		}
		n.leases += 1;
		let r = await n.promise, i = e.lastIndexOf("@"), a = e.slice(0, i), o = e.slice(i + 1), s = !1;
		return {
			assetId: a,
			revisionId: o,
			instantiate: () => Xc(Jc(r.object), n.materialSlotIds),
			release: () => {
				s || (s = !0, this.release(e));
			}
		};
	}
	async loadLodTemplate(e, t, n = this.loadTemplate) {
		let { payload: r } = Sa(e), i = new x();
		i.userData.staticMeshLod = {
			distanceMeters: r.distanceMeters,
			hysteresis: r.hysteresis
		};
		try {
			for (let e of r.levels) i.add(Xc(await n(e), t));
			return i.children.forEach((e, t) => {
				e.visible = t === 0;
			}), i;
		} catch (e) {
			throw qc(i).dispose(), e;
		}
	}
	release(e) {
		let t = this.entries.get(e);
		if (t && (t.leases = Math.max(0, t.leases - 1), t.leases === 0 && t.resource)) {
			t.resource.dispose(), this.entries.delete(e);
			for (let [t, n] of this.aliases) n === e && this.aliases.delete(t);
		}
	}
};
async function Kc(e, t = !1) {
	let n = new Ws();
	t && n.register(() => ({
		name: "DT_TYPED_GEOMETRY",
		loadMaterial: async () => new Ue()
	}));
	let r = e.slice().buffer;
	return (await n.parseAsync(r, "")).scene;
}
function qc(e) {
	return {
		object: e,
		dispose: () => {
			let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
			e.traverse((e) => {
				e instanceof M && (t.add(e.geometry), (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
					n.add(e), Object.values(e).forEach((e) => {
						e && typeof e == "object" && "isTexture" in e && r.add(e);
					});
				}));
			}), r.forEach((e) => e.dispose()), n.forEach((e) => e.dispose()), t.forEach((e) => e.dispose());
		}
	};
}
function Jc(e) {
	let t = e.clone(!0);
	return t.traverse((e) => {
		e instanceof M && (Array.isArray(e.material) || (e.userData.staticBatchMaterialId = e.material.uuid), e.material = Array.isArray(e.material) ? e.material.map((e) => e.clone()) : e.material.clone());
	}), t;
}
function Yc(e) {
	return Array.isArray(e) ? e.flatMap((e) => typeof e == "object" && e && typeof e.slotId == "string" ? [e.slotId] : []) : [];
}
function Xc(e, t) {
	if (e.userData.staticMeshLod) return e.children.forEach((e) => Xc(e, t)), e;
	let n = 0;
	return e.traverse((e) => {
		e instanceof M && (e.userData.materialSlotId = t[n] ?? `mesh:0/primitive:${n}`, n += 1);
	}), e;
}
function Zc(e) {
	let t = /* @__PURE__ */ new Set();
	e.traverse((e) => {
		e instanceof M && (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => t.add(e));
	}), t.forEach((e) => e.dispose());
}
//#endregion
//#region src/assets/SkeletalAnimationAsset.ts
var Qc = 1179937895, $c = 1313821514, el = 5130562;
async function tl(e) {
	let t = rl(e), n = await new Ws().parseAsync(e.slice().buffer, ""), r = pl(n.scene);
	(r.length !== t.skinnedMeshNodeCount || n.animations.length !== t.animationCount) && W("invalid-container", "Decoded skeletal resources do not match the validated GLB profile.");
	let i = !1;
	return {
		metadata: t,
		instantiate: () => {
			if (i) throw Error("Cannot instantiate a disposed skeletal animation asset.");
			let e = Hs(n.scene);
			ml(e);
			let t = pl(e);
			if (t.length !== r.length) throw Error("Skeleton clone did not preserve every skinned mesh.");
			let a = new He(e), o = !1;
			return {
				root: e,
				mixer: a,
				clips: n.animations,
				skinnedMeshes: t,
				dispose: () => {
					o || (o = !0, a.stopAllAction(), a.uncacheRoot(e), hl(e));
				}
			};
		},
		dispose: () => {
			i || (i = !0, gl(n.scene));
		}
	};
}
function nl() {
	let e = [
		"x",
		"y",
		"z",
		"w"
	], t = Oe.skinbase_vertex, n = Oe.skinning_vertex;
	if (!e.every((e) => t.includes(`skinIndex.${e}`) && n.includes(`skinWeight.${e}`))) throw Error("The installed Three skinning shader is not the validated four-component path.");
	return {
		maxInfluences: 4,
		components: e,
		rendererPath: "ShaderChunk.skinbase_vertex+skinning_vertex"
	};
}
function rl(e) {
	nl();
	let { document: t, binaryBytes: n } = sl(e);
	t.asset?.version !== "2.0" && W("unsupported-profile", "glTF asset.version must be 2.0.");
	let r = xl(t.extensionsRequired, "extensionsRequired");
	r.length > 0 && W("unsupported-extension", `Unsupported required extension: ${r.join(", ")}.`);
	let i = _l(t.buffers);
	i.length !== 1 && W("missing-data", "A self-contained skeletal GLB must declare exactly one buffer."), typeof i[0].uri == "string" && W("security-uri", "buffer.uri is not allowed in a self-contained skeletal GLB.");
	let a = yl(i[0].byteLength, "buffer.byteLength");
	a > n.byteLength && W("missing-data", "The embedded binary chunk is shorter than buffer.byteLength.");
	for (let [e, n] of _l(t.images).entries()) typeof n.uri == "string" && W("security-uri", `Image ${e} uses an external URI.`);
	let o = _l(t.nodes), s = _l(t.meshes), c = _l(t.accessors), l = _l(t.bufferViews);
	ul(l, a), c.forEach((e) => dl(e, l));
	let u = _l(t.skins);
	u.length !== 1 && W("unsupported-profile", "The initial skeletal profile requires exactly one skin.");
	let d = u[0], f = bl(d.joints, "skin.joints");
	(f.length === 0 || f.some((e) => !o[e])) && W("missing-data", "Skin joints must reference existing nodes."), d.skeleton !== void 0 && (!Number.isInteger(d.skeleton) || !o[d.skeleton] || !il(o, d.skeleton, f)) && W("unsupported-profile", "The skin skeleton root must contain every joint.");
	let p = fl(c, d.inverseBindMatrices, "skin.inverseBindMatrices");
	(p.componentType !== 5126 || p.type !== "MAT4" || p.count !== f.length) && W("unsupported-profile", "Inverse bind matrices must be FLOAT MAT4 values matching the joint count.");
	let m = cl(n, l, p, f.length), h = 0, g = 0, _ = 0, v = 0;
	for (let [e, t] of o.entries()) {
		if (t.skin === void 0) continue;
		(t.skin !== 0 || !Number.isInteger(t.mesh) || !s[t.mesh]) && W("missing-data", `Skinned node ${e} has an invalid skin or mesh reference.`);
		let r = al(s[t.mesh], c, l, n, f.length, t.mesh);
		g += r.vertexCount, _ = Math.max(_, r.payloadMaxInfluences), v = Math.max(v, r.maxWeightSumError), h += 1;
	}
	h === 0 && W("missing-data", "The GLB has no node that binds a mesh to its skin.");
	let y = _l(t.animations);
	y.length === 0 && W("missing-data", "The initial skeletal profile requires at least one animation clip.");
	let b = y.map((e, t) => ol(e, t, f, c));
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
function il(e, t, n) {
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
function al(e, t, n, r, i, a) {
	let o = _l(e.primitives);
	o.length === 0 && W("missing-data", `Mesh ${a} has no primitives.`);
	let s = 0, c = 0, l = 0;
	for (let [e, u] of o.entries()) {
		Array.isArray(u.targets) && u.targets.length > 0 && W("unsupported-profile", "Morph targets are outside the initial skeletal profile.");
		let o = vl(u.attributes, `mesh ${a} primitive ${e}.attributes`);
		(o.JOINTS_1 !== void 0 || o.WEIGHTS_1 !== void 0) && W("unsupported-profile", "More than four bone influences are not supported and will not be truncated.");
		let d = fl(t, o.POSITION, "POSITION"), f = fl(t, o.JOINTS_0, "JOINTS_0"), p = fl(t, o.WEIGHTS_0, "WEIGHTS_0");
		(d.componentType !== 5126 || d.type !== "VEC3") && W("unsupported-profile", "POSITION must be FLOAT VEC3."), (![5121, 5123].includes(f.componentType) || f.type !== "VEC4") && W("unsupported-profile", "JOINTS_0 must be unsigned VEC4.");
		let m = p.componentType === 5126, h = (p.componentType === 5121 || p.componentType === 5123) && p.normalized === !0;
		(!m && !h || p.type !== "VEC4") && W("unsupported-profile", "WEIGHTS_0 must be FLOAT or normalized unsigned VEC4.");
		let g = yl(d.count, "POSITION.count");
		(g !== yl(f.count, "JOINTS_0.count") || g !== yl(p.count, "WEIGHTS_0.count")) && W("missing-data", "Skin attributes must have matching vertex counts.");
		let _ = ll(r, n, f, g, 4, f.componentType === 5121 ? "uint8" : "uint16"), v = ll(r, n, p, g, 4, p.componentType === 5121 ? "uint8" : p.componentType === 5123 ? "uint16" : "float32", h);
		for (let e = 0; e < g; e += 1) {
			let t = v[e], n = _[e], r = t.reduce((e, t) => e + t, 0), a = Math.abs(1 - r);
			(t.some((e) => e < 0 || e > 1) || a > 1e-4) && W("unsupported-profile", `Vertex ${e} skin weights are outside the normalized profile.`);
			let o = t.filter((e) => e > 1e-8).length;
			o === 0 && W("unsupported-profile", `Vertex ${e} has no effective bone influence.`);
			for (let r = 0; r < 4; r += 1) t[r] > 1e-8 && n[r] >= i && W("missing-data", `Vertex ${e} references a joint outside the skin.`);
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
function ol(e, t, n, r) {
	let i = _l(e.samplers), a = _l(e.channels);
	(i.length === 0 || a.length === 0) && W("missing-data", `Animation ${t} has no samplers or channels.`);
	for (let [e, o] of a.entries()) {
		let a = i[yl(o.sampler, `animation ${t} channel ${e}.sampler`)];
		a || W("missing-data", `Animation ${t} channel ${e} has an invalid sampler.`);
		let s = a.interpolation ?? "LINEAR";
		s !== "LINEAR" && s !== "STEP" && W("unsupported-profile", "Only LINEAR and STEP skeletal animation are supported.");
		let c = fl(r, a.input, "animation input"), l = fl(r, a.output, "animation output");
		(c.componentType !== 5126 || c.type !== "SCALAR" || yl(c.count, "animation input.count") !== yl(l.count, "animation output.count")) && W("unsupported-profile", "Animation input/output samples must be matching FLOAT accessors.");
		let u = vl(o.target, `animation ${t} channel ${e}.target`);
		(!Number.isInteger(u.node) || !n.includes(u.node)) && W("unsupported-profile", "Animation channels may target skin joints only.");
		let d = u.path === "rotation" ? "VEC4" : u.path === "translation" || u.path === "scale" ? "VEC3" : null;
		(!d || l.componentType !== 5126 || l.type !== d) && W("unsupported-profile", "Animation channels must contain ordinary bone TRS tracks.");
	}
	return typeof e.name == "string" && e.name.trim() ? e.name : `Animation_${t}`;
}
function sl(e) {
	e.byteLength < 20 && W("invalid-container", "GLB header or JSON chunk is incomplete.");
	let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
	(t.getUint32(0, !0) !== Qc || t.getUint32(4, !0) !== 2 || t.getUint32(8, !0) !== e.byteLength) && W("invalid-container", "Invalid GLB 2 container header.");
	let n = 12, r = null, i = null;
	for (; n < e.byteLength;) {
		n + 8 > e.byteLength && W("invalid-container", "GLB chunk header is truncated.");
		let a = t.getUint32(n, !0), o = t.getUint32(n + 4, !0);
		n += 8, (a % 4 != 0 || n + a > e.byteLength) && W("invalid-container", "GLB chunk length is invalid."), o === $c ? (r && W("invalid-container", "GLB contains more than one JSON chunk."), r = e.subarray(n, n + a)) : o === el && (i && W("invalid-container", "GLB contains more than one binary chunk."), i = e.subarray(n, n + a)), n += a;
	}
	(!r || !i || i.byteLength === 0) && W("missing-data", "A self-contained skeletal GLB requires JSON and binary chunks.");
	try {
		let e = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(r).trim());
		return Sl(e) || W("invalid-container", "GLB JSON root must be an object."), {
			document: e,
			binaryBytes: i
		};
	} catch (e) {
		if (e instanceof na) throw e;
		W("invalid-container", "GLB JSON chunk is not valid UTF-8 JSON.");
	}
}
function cl(e, t, n, r) {
	let i = t[yl(n.bufferView, "inverseBindMatrices.bufferView")], a = i.byteOffset === void 0 ? 0 : yl(i.byteOffset, "inverseBindMatrices bufferView.byteOffset"), o = n.byteOffset === void 0 ? 0 : yl(n.byteOffset, "inverseBindMatrices accessor.byteOffset"), s = i.byteStride === void 0 ? 64 : yl(i.byteStride, "inverseBindMatrices bufferView.byteStride");
	(s < 64 || a + o + Math.max(0, r - 1) * s + 64 > e.byteLength) && W("missing-data", "Inverse bind matrix bytes exceed the embedded buffer.");
	let c = new DataView(e.buffer, e.byteOffset, e.byteLength);
	return Array.from({ length: r }, (e, t) => Array.from({ length: 16 }, (e, n) => {
		let r = c.getFloat32(a + o + t * s + n * 4, !0);
		return Number.isFinite(r) || W("invalid-container", "Inverse bind matrices contain a non-finite value."), r;
	}));
}
function ll(e, t, n, r, i, a, o = !1) {
	let s = t[yl(n.bufferView, "skin accessor.bufferView")], c = s.byteOffset === void 0 ? 0 : yl(s.byteOffset, "skin bufferView.byteOffset"), l = n.byteOffset === void 0 ? 0 : yl(n.byteOffset, "skin accessor.byteOffset"), u = a === "uint8" ? 1 : a === "uint16" ? 2 : 4, d = u * i, f = s.byteStride === void 0 ? d : yl(s.byteStride, "skin bufferView.byteStride");
	(f < d || c + l + Math.max(0, r - 1) * f + d > e.byteLength) && W("missing-data", "Skin attribute bytes exceed the embedded buffer.");
	let p = new DataView(e.buffer, e.byteOffset, e.byteLength);
	return Array.from({ length: r }, (e, t) => Array.from({ length: i }, (e, n) => {
		let r = c + l + t * f + n * u, i = a === "uint8" ? p.getUint8(r) : a === "uint16" ? p.getUint16(r, !0) : p.getFloat32(r, !0);
		return o ? i / (a === "uint8" ? 255 : 65535) : i;
	}));
}
function ul(e, t) {
	for (let [n, r] of e.entries()) r.buffer !== 0 && W("missing-data", `bufferView ${n} does not reference the embedded buffer.`), (r.byteOffset === void 0 ? 0 : yl(r.byteOffset, `bufferView ${n}.byteOffset`)) + yl(r.byteLength, `bufferView ${n}.byteLength`) > t && W("missing-data", `bufferView ${n} exceeds the embedded buffer.`);
}
function dl(e, t) {
	(!Number.isInteger(e.bufferView) || !t[e.bufferView]) && W("missing-data", "Accessor has no valid embedded bufferView.");
}
function fl(e, t, n) {
	let r = e[yl(t, n)];
	return r || W("missing-data", `${n} does not reference an accessor.`), r;
}
function pl(e) {
	let t = [];
	return e.traverse((e) => {
		e instanceof he && t.push(e);
	}), t;
}
function ml(e) {
	e.traverse((e) => {
		e instanceof M && (e.material = Array.isArray(e.material) ? e.material.map((e) => e.clone()) : e.material.clone());
	});
}
function hl(e) {
	let t = /* @__PURE__ */ new Set();
	e.traverse((e) => {
		e instanceof M && (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => t.add(e));
	}), t.forEach((e) => e.dispose());
}
function gl(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
	e.traverse((e) => {
		e instanceof M && (t.add(e.geometry), (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
			n.add(e), Object.values(e).forEach((e) => {
				Sl(e) && "isTexture" in e && r.add(e);
			});
		}));
	}), r.forEach((e) => e.dispose()), n.forEach((e) => e.dispose()), t.forEach((e) => e.dispose());
}
function _l(e) {
	return Array.isArray(e) && e.every(Sl) ? e : [];
}
function vl(e, t) {
	return Sl(e) || W("invalid-container", `${t} must be an object.`), e;
}
function yl(e, t) {
	return (!Number.isInteger(e) || e < 0) && W("invalid-container", `${t} must be a non-negative integer.`), e;
}
function bl(e, t) {
	return (!Array.isArray(e) || e.some((e) => !Number.isInteger(e) || e < 0)) && W("invalid-container", `${t} must be an array of non-negative integers.`), e;
}
function xl(e, t) {
	return e === void 0 ? [] : ((!Array.isArray(e) || e.some((e) => typeof e != "string")) && W("invalid-container", `${t} must be an array of strings.`), e);
}
function Sl(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function W(e, t) {
	throw new na(e, t);
}
//#endregion
//#region src/assets/SeparateAnimationPayload.ts
async function Cl(e, t, n, r) {
	let i = await tl(n);
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
var wl = class {
	storage;
	loadAsset;
	entries = /* @__PURE__ */ new Map();
	aliases = /* @__PURE__ */ new Map();
	pendingResolutions = /* @__PURE__ */ new Map();
	constructor(e, t = tl) {
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
		let n = await Lt(this.storage, e.assetId, e.revisionId), r = await Lt(this.storage, t.animationAssetId, t.animationRevisionId), i = n.blobs.find((t) => t.key === e.blobKey), a = r.blobs.find((e) => e.key === t.animationBlobKeys[0]);
		if (!i || !a) throw Error("Missing separate Animation payload.");
		return Cl(e.asset, i.bytes, a.bytes, t);
	}
	async resolve(e) {
		let t = await Lt(this.storage, e.assetId, e.revisionPolicy === "pinned" ? e.revisionId : void 0), n = this.storage.snapshotCatalog ? {
			...await this.storage.snapshotCatalog(),
			blobs: t.blobs
		} : t, r = n.assets.find((t) => t.id === e.assetId);
		if (!r || r.kind !== "SkeletalMesh") throw Error(`Unknown SkeletalMesh asset ${e.assetId}.`);
		let i = e.revisionPolicy === "pinned" ? e.revisionId : r.currentRevisionId;
		if (!i) throw Error(`Asset ${e.assetId} has no resolvable revision.`);
		let a = n.revisions.find((e) => e.id === i && e.assetId === r.id);
		if (!a) throw Error(`Unknown revision ${i} for asset ${r.id}.`);
		let o = n.blobs.find((e) => e.key === a.blobKeys[0]);
		if (!o) throw Error(`Missing blob for asset ${r.id} revision ${a.id}.`);
		return {
			assetId: r.id,
			revisionId: a.id,
			blobKey: o.key,
			bytes: o.bytes,
			materialSlotIds: Tl(a.metadata.materialSlots),
			attachmentProfile: El(n, a.metadata.skeletalMesh)
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
function Tl(e) {
	return Array.isArray(e) ? e.flatMap((e) => typeof e == "object" && e && typeof e.slotId == "string" ? [e.slotId] : []) : [];
}
function El(e, t) {
	if (typeof t != "object" || !t || Array.isArray(t)) return null;
	let n = Ol(t, "SkeletalMesh attachment metadata");
	if (typeof n.skeletonAssetId != "string" || typeof n.sourceSkeletonAssetId != "string" || typeof n.bindingSignature != "string" || !Array.isArray(n.jointMappings)) return null;
	let r = Al(n.skeletonAssetId, "skeletonAssetId"), i = e.assets.find((e) => e.id === r && e.kind === "Skeleton"), a = e.revisions.find((e) => e.id === i?.currentRevisionId && e.assetId === r);
	if (!a) return null;
	let o = Ol(a.metadata.skeleton, "Skeleton attachment metadata");
	return {
		skeletonAssetId: r,
		sourceSkeletonAssetId: Al(n.sourceSkeletonAssetId, "sourceSkeletonAssetId"),
		bindingSignature: jl(n.bindingSignature, "bindingSignature"),
		skinIndex: Ml(n.skinIndex, "skinIndex"),
		jointMappings: kl(n.jointMappings, "jointMappings").map((e) => {
			let t = Ol(e, "jointMapping");
			return {
				sourceBoneId: Al(t.sourceBoneId, "jointMapping.sourceBoneId"),
				payloadNodeIndex: Ml(t.payloadNodeIndex, "jointMapping.payloadNodeIndex")
			};
		}),
		bones: kl(o.bones, "skeleton.bones").map((e) => {
			let t = Ol(e, "bone");
			return {
				id: Al(t.id, "bone.id"),
				parentId: t.parentId === null ? null : Al(t.parentId, "bone.parentId"),
				restLocal: Dl(t.restLocal, "bone.restLocal")
			};
		}),
		sockets: kl(o.sockets, "skeleton.sockets").map((e) => {
			let t = Ol(e, "socket");
			return {
				id: Al(t.id, "socket.id"),
				boneId: Al(t.boneId, "socket.boneId"),
				transform: Dl(t.transform, "socket.transform")
			};
		})
	};
}
function Dl(e, t) {
	let n = Ol(e, t), r = Nl(n.position, 3, `${t}.position`), i = Nl(n.rotation, 4, `${t}.rotation`), a = Nl(n.scale, 3, `${t}.scale`);
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
function Ol(e, t) {
	if (typeof e != "object" || !e || Array.isArray(e)) throw Error(`${t} must be an object.`);
	return e;
}
function kl(e, t) {
	if (!Array.isArray(e)) throw Error(`${t} must be an array.`);
	return e;
}
function Al(e, t) {
	if (typeof e != "string" || !e) throw Error(`${t} must be a non-empty string.`);
	return e;
}
function jl(e, t) {
	let n = Al(e, t);
	if (!/^[0-9a-f]{64}$/u.test(n)) throw Error(`${t} must be a SHA-256 value.`);
	return n;
}
function Ml(e, t) {
	if (!Number.isInteger(e) || Number(e) < 0) throw Error(`${t} must be a non-negative integer.`);
	return Number(e);
}
function Nl(e, t, n) {
	if (!Array.isArray(e) || e.length !== t || e.some((e) => typeof e != "number" || !Number.isFinite(e))) throw Error(`${n} must contain ${t} finite numbers.`);
	return e;
}
//#endregion
//#region src/assets/RootMotionPolicy.ts
var Pl = class extends Error {
	constructor(e) {
		super(e), this.name = "RootMotionPolicyError";
	}
};
function Fl(e) {
	let { motionKind: t, rootMotionMode: n, actorMotionPayload: r } = e;
	if (t !== "ordinary_bones" && t !== "baked_bones") throw new Pl(`Unsupported source motion kind ${String(t)}.`);
	if (n === "baked_actor_track") throw r == null ? new Pl("baked_actor_track requires an Actor motion payload.") : new Pl("baked_actor_track requires the unavailable physics-free snapshot Actor-track adapter.");
	if (r !== null) throw new Pl(`${n} must not include an Actor motion payload.`);
	if (n === "in_place") return {
		motionKind: t,
		rootMotionMode: n,
		strategy: "source_verified_in_place",
		appliesActorMotion: !1
	};
	if (n !== "in_bone") throw new Pl(`Unsupported root motion mode ${String(n)}.`);
	return {
		motionKind: t,
		rootMotionMode: n,
		strategy: "bone_pose_only",
		appliesActorMotion: !1
	};
}
//#endregion
//#region src/assets/AnimationClipBinding.ts
function Il(e) {
	return async (t) => {
		if (t.playback.clipAsset === null) return null;
		let n = t.playback.clipAsset;
		return Ll(await Lt(e, n.assetId, n.revisionPolicy === "pinned" ? n.revisionId : void 0), t, n);
	};
}
function Ll(e, t, n) {
	let r = e.assets.find((e) => e.id === n.assetId);
	if (!r || r.kind !== "AnimationSequence") throw Error(`Unknown AnimationSequence asset ${n.assetId}.`);
	let i = n.revisionPolicy === "pinned" ? n.revisionId : r.currentRevisionId;
	if (!i) throw Error(`AnimationSequence ${r.id} has no resolvable revision.`);
	let a = e.revisions.find((e) => e.id === i && e.assetId === r.id);
	if (!a) throw Error(`Unknown revision ${i} for AnimationSequence ${r.id}.`);
	if (a.blobKeys.length === 0 || a.blobKeys.some((t) => !e.blobs.some((e) => e.key === t))) throw Error(`AnimationSequence ${r.id} has missing payload bytes.`);
	let o = Rl(a.metadata.animation, `AnimationSequence ${r.id} metadata`), s = Bl(o.skeletonAssetId, "animation.skeletonAssetId");
	if (s !== t.skinBinding.skeletonAsset.assetId) throw Error(`AnimationSequence ${r.id} targets Skeleton ${s}, not ${t.skinBinding.skeletonAsset.assetId}.`);
	let c = zl(o.targets, "animation.targets").filter((e) => e.meshAssetId === t.meshAsset.assetId);
	if (c.length !== 1) throw Error(`AnimationSequence ${r.id} has no unique target for SkeletalMesh ${t.meshAsset.assetId}.`);
	let l = c[0], u = Bl(l.bindingSignature, "animation.target.bindingSignature");
	if (u !== t.skinBinding.bindingSignature) throw Error(`AnimationSequence ${r.id} binding signature does not match ${t.meshAsset.assetId}.`);
	let d = Vl(Rl(l.payload, "animation.target.payload").animationIndex, "animation.target.payload.animationIndex"), f = Bl(l.clipName, "animation.target.clipName"), p = Hl(o.durationSeconds, "animation.durationSeconds"), m = Ul(o.rootMotionMode, [
		"in_bone",
		"in_place",
		"baked_actor_track"
	], "animation.rootMotionMode"), h = Ul(o.motionKind, ["ordinary_bones", "baked_bones"], "animation.motionKind"), g = Fl({
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
function Rl(e, t) {
	if (typeof e != "object" || !e || Array.isArray(e)) throw Error(`${t} must be an object.`);
	return e;
}
function zl(e, t) {
	if (!Array.isArray(e) || e.some((e) => typeof e != "object" || !e || Array.isArray(e))) throw Error(`${t} must be an object array.`);
	return e;
}
function Bl(e, t) {
	if (typeof e != "string" || e.length === 0) throw Error(`${t} must be a non-empty string.`);
	return e;
}
function Vl(e, t) {
	if (!Number.isInteger(e) || Number(e) < 0) throw Error(`${t} must be a non-negative integer.`);
	return Number(e);
}
function Hl(e, t) {
	if (typeof e != "number" || !Number.isFinite(e) || e < 0) throw Error(`${t} must be finite and non-negative.`);
	return e;
}
function Ul(e, t, n) {
	if (typeof e != "string" || !t.includes(e)) throw Error(`${n} is unsupported.`);
	return e;
}
//#endregion
//#region src/assets/AnimationPlaybackService.ts
var Wl = class {
	asset;
	records = /* @__PURE__ */ new Map();
	disposed = !1;
	constructor(e) {
		this.asset = e;
	}
	create(e, t = {}) {
		this.requireActive();
		let n = Xl(e);
		if (this.records.has(n)) throw Error(`Animation playback already exists for ${e.worldSessionId}/${e.componentId}.`);
		let r = this.asset.instantiate();
		try {
			let i = t.clipIndex ?? 0, a = r.clips[i];
			if (!a) throw Error(`Unknown animation clip index ${i}.`);
			let o = t.loop ?? "repeat", s = eu(t.rate ?? 1, "Animation playback rate"), c = Zl(tu(t.initialTimeSeconds ?? 0, "Animation initial time"), a.duration, o), l = $l(t.tintLinear ?? [
				1,
				1,
				1
			]), u = r.mixer.clipAction(a);
			u.setLoop(o === "repeat" ? Ce : Le, o === "repeat" ? Infinity : 1), u.clampWhenFinished = !0, u.play(), u.paused = !0;
			let d = t.playing ?? !1, f = Ql(c, a.duration, o, s), p = {
				key: { ...e },
				instance: r,
				action: u,
				baseColors: Kl(r),
				clipIndex: i,
				rate: s,
				initialTimeSeconds: c,
				timeSeconds: c,
				loop: o,
				playing: d && !f,
				ended: f,
				tintLinear: l
			};
			return this.records.set(n, p), ql(p), Gl(p), r;
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
		t.ended = Ql(t.timeSeconds, t.action.getClip().duration, t.loop, t.rate), t.playing = !t.ended;
	}
	pause(e) {
		this.require(e).playing = !1;
	}
	stop(e) {
		let t = this.require(e);
		t.playing = !1, t.timeSeconds = t.initialTimeSeconds, t.ended = Ql(t.timeSeconds, t.action.getClip().duration, t.loop, t.rate), Gl(t);
	}
	seek(e, t) {
		let n = this.require(e);
		n.timeSeconds = Zl(eu(t, "Animation seek time"), n.action.getClip().duration, n.loop), n.ended = Ql(n.timeSeconds, n.action.getClip().duration, n.loop, n.rate), n.ended && (n.playing = !1), Gl(n);
	}
	setRate(e, t) {
		let n = this.require(e);
		n.rate = eu(t, "Animation playback rate"), n.ended = Ql(n.timeSeconds, n.action.getClip().duration, n.loop, n.rate), n.ended && (n.playing = !1);
	}
	setLoop(e, t) {
		let n = this.require(e);
		n.loop = t, n.action.setLoop(t === "repeat" ? Ce : Le, t === "repeat" ? Infinity : 1), n.timeSeconds = Zl(n.timeSeconds, n.action.getClip().duration, t), n.ended = Ql(n.timeSeconds, n.action.getClip().duration, t, n.rate), n.ended && (n.playing = !1), Gl(n);
	}
	setTint(e, t) {
		let n = this.require(e);
		n.tintLinear = $l(t), ql(n);
	}
	advanceWorld(e, t) {
		this.requireActive(), G(e, "worldSessionId"), tu(t, "Animation clock delta");
		for (let n of this.records.values()) {
			if (n.key.worldSessionId !== e || !n.playing || n.rate === 0) continue;
			let r = n.action.getClip().duration, i = n.timeSeconds + t * n.rate;
			n.timeSeconds = Zl(i, r, n.loop), n.ended = n.loop === "once" && (r === 0 || n.rate > 0 && i >= r || n.rate < 0 && i <= 0), n.ended && (n.playing = !1), Gl(n);
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
		let t = Xl(e), n = this.records.get(t);
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
		let t = this.records.get(Xl(e));
		if (!t) throw Error(`Unknown animation playback ${e.worldSessionId}/${e.componentId}.`);
		return t;
	}
	requireActive() {
		if (this.disposed) throw Error("AnimationPlaybackService is disposed.");
	}
};
function Gl(e) {
	e.action.time = e.timeSeconds, e.action.paused = !0, e.instance.mixer.update(0), e.instance.root.updateMatrixWorld(!0), e.instance.skinnedMeshes.forEach((e) => e.skeleton.update());
}
function Kl(e) {
	let t = /* @__PURE__ */ new Map();
	return e.skinnedMeshes.forEach((e) => Jl(e.material).forEach((e) => {
		Yl(e) && t.set(e, e.color.clone());
	})), t;
}
function ql(e) {
	let t = new st(...e.tintLinear);
	e.baseColors.forEach((n, r) => {
		Yl(r) && r.color.copy(n).multiply(t), r.userData.instanceTintLinear = [...e.tintLinear];
	});
}
function Jl(e) {
	return Array.isArray(e) ? e : [e];
}
function Yl(e) {
	return "color" in e && e.color instanceof st;
}
function Xl(e) {
	return JSON.stringify([G(e.worldSessionId, "worldSessionId"), G(e.componentId, "componentId")]);
}
function Zl(e, t, n) {
	if (!Number.isFinite(t) || t < 0) throw Error("Animation clip duration must be finite and non-negative.");
	return t === 0 ? 0 : n === "once" ? Math.min(t, Math.max(0, e)) : (e % t + t) % t;
}
function Ql(e, t, n, r) {
	return t === 0 ? !0 : n === "repeat" || r === 0 ? !1 : r > 0 && e >= t || r < 0 && e <= 0;
}
function $l(e) {
	if (e.length !== 3 || e.some((e) => !Number.isFinite(e) || e < 0)) throw Error("Animation instance tint must contain three non-negative finite linear values.");
	return [...e];
}
function eu(e, t) {
	if (!Number.isFinite(e)) throw Error(`${t} must be finite.`);
	return e;
}
function tu(e, t) {
	if (!Number.isFinite(e) || e < 0) throw Error(`${t} must be finite and non-negative.`);
	return e;
}
function G(e, t) {
	if (!e.trim()) throw Error(`${t} must be non-empty.`);
	return e;
}
//#endregion
//#region src/assets/AnimationPlaybackWorld.ts
var nu = class {
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
		let r = new Wl(e), i = {
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
//#region src/assets/BakedMaterialBinding.ts
function ru(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e) || Object.keys(e).sort().join(",") !== [...t].sort().join(",")) throw Error("Invalid bake binding fields.");
	return e;
}
function iu(e) {
	if (typeof e != "string" || !e.trim() || e.length > 4096 || [...e].some((e) => e.charCodeAt(0) < 32)) throw Error("Invalid bake binding identity.");
	return e;
}
function au(e) {
	if (typeof e != "string" || !/^[a-f0-9]{64}$/.test(e)) throw Error("Invalid bake binding hash.");
	return e;
}
function ou(e) {
	let t = ru(e, [
		"version",
		"source",
		"inputs",
		"target"
	]);
	if (t.version !== 1) throw Error("Unsupported bake binding version.");
	let n = ru(t.source, [
		"projectId",
		"meshId",
		"materialId",
		"slotId",
		"placementId"
	]), r = ru(t.inputs, [
		"sourceMeshHash",
		"effectiveMaterialHash",
		"recipeHash",
		"bakedPayloadHash"
	]), i = ru(t.target, [
		"meshAssetId",
		"meshRevisionId",
		"meshPayloadHash",
		"slotId",
		"placement"
	]), a = i.placement === null ? null : ru(i.placement, ["componentId"]);
	if (n.placementId === null != (a === null)) throw Error("Bake binding placement scope mismatch.");
	return {
		version: 1,
		source: {
			projectId: iu(n.projectId),
			meshId: iu(n.meshId),
			materialId: iu(n.materialId),
			slotId: iu(n.slotId),
			placementId: n.placementId === null ? null : iu(n.placementId)
		},
		inputs: {
			sourceMeshHash: au(r.sourceMeshHash),
			effectiveMaterialHash: au(r.effectiveMaterialHash),
			recipeHash: au(r.recipeHash),
			bakedPayloadHash: au(r.bakedPayloadHash)
		},
		target: {
			meshAssetId: iu(i.meshAssetId),
			meshRevisionId: iu(i.meshRevisionId),
			meshPayloadHash: au(i.meshPayloadHash),
			slotId: iu(i.slotId),
			placement: a === null ? null : { componentId: iu(a.componentId) }
		}
	};
}
function su(e, t) {
	let n = e.target;
	if (n.meshAssetId !== t.meshAssetId || n.meshRevisionId !== t.meshRevisionId || n.meshPayloadHash !== t.meshPayloadHash || n.slotId !== t.slotId || n.placement && n.placement.componentId !== t.componentId) throw Error(`Baked material target mismatch at ${t.componentId}/${t.slotId}; rebake/rebind is required.`);
}
function cu(e) {
	if (!hu(e) || e.schemaVersion !== 1 || e.kind !== "PbrMaterial") throw Error("Unsupported Material schema.");
	let t = (e, t, n, r = 0, i = 1) => {
		if (!Array.isArray(e) || e.length !== t || e.some((e) => typeof e != "number" || !Number.isFinite(e) || e < r || e > i)) throw Error(`${n} is invalid.`);
		return e;
	}, n = (e, t, n = 0, r = 1) => {
		if (typeof e != "number" || !Number.isFinite(e) || e < n || e > r) throw Error(`${t} is invalid.`);
		return e;
	}, r = e.alphaMode;
	if (r !== "OPAQUE" && r !== "MASK" && r !== "BLEND") throw Error("alphaMode is invalid.");
	if (typeof e.doubleSided != "boolean" || !hu(e.textures)) throw Error("Material flags or textures are invalid.");
	for (let [t, n] of Object.entries(e.textures)) if (![
		"baseColor-srgb",
		"emissive-srgb",
		"normal-linear",
		"metallicRoughness-linear",
		"occlusion-linear"
	].includes(t) || !hu(n) || typeof n.assetId != "string") throw Error("Material texture binding is invalid.");
	return structuredClone({
		schemaVersion: 1,
		kind: "PbrMaterial",
		baseColorFactor: t(e.baseColorFactor, 4, "baseColorFactor"),
		metallic: n(e.metallic, "metallic"),
		roughness: n(e.roughness, "roughness"),
		emissiveFactor: t(e.emissiveFactor, 3, "emissiveFactor"),
		...e.emissiveIntensity === void 0 ? {} : { emissiveIntensity: n(e.emissiveIntensity, "emissiveIntensity", 0, 100) },
		normalScale: n(e.normalScale, "normalScale", -8, 8),
		...e.occlusionStrength === void 0 ? {} : { occlusionStrength: n(e.occlusionStrength, "occlusionStrength") },
		alphaMode: r,
		alphaCutoff: n(e.alphaCutoff, "alphaCutoff"),
		doubleSided: e.doubleSided,
		textures: e.textures
	});
}
function lu(e) {
	if (!hu(e) || ![
		2,
		3,
		4,
		5,
		6
	].includes(e.schemaVersion) || e.kind !== "WebMaskPbrMaterial") throw Error("Unsupported WebMaskPBR Material schema.");
	if (e = e.schemaVersion === 2 ? _u(e) : e, !hu(e)) throw Error("WebMaskPBR migration failed.");
	let t = (e, t, n, r = !0) => {
		if (!Array.isArray(e) || e.length !== t || e.some((e) => typeof e != "number" || !Number.isFinite(e) || r && (e < 0 || e > 1))) throw Error(`${n} is invalid.`);
		return e;
	}, n = (e, t, n = 0, r = 1) => {
		if (typeof e != "number" || !Number.isFinite(e) || e < n || e > r) throw Error(`${t} is invalid.`);
		return e;
	}, r = e.alphaMode;
	if (r !== "OPAQUE" && r !== "MASK" && r !== "BLEND") throw Error("alphaMode is invalid.");
	if (typeof e.mappingProfileId != "string" || e.mappingProfileId.length === 0 || typeof e.doubleSided != "boolean" || !hu(e.textureViews)) throw Error("WebMaskPBR flags or textureViews are invalid.");
	let i = Object.fromEntries(Object.entries(e.textureViews).map(([e, t]) => {
		if (![
			"baseColor",
			"normal",
			"metallic",
			"roughness",
			"occlusion",
			"emissive"
		].includes(e)) throw Error(`Unknown WebMaskPBR texture input ${e}.`);
		let n = gu(t, `textureViews.${e}`);
		if (!{
			baseColor: ["rgb", "rgba"],
			normal: ["rgb"],
			metallic: ["b"],
			roughness: ["g"],
			occlusion: ["r"],
			emissive: ["rgb"]
		}[e].includes(n.channel)) throw Error(`textureViews.${e}.channel is not supported.`);
		if (!["baseColor", "emissive"].includes(e) && n.colorSpace !== "linear") throw Error(`textureViews.${e}.colorSpace must be linear.`);
		return [e, n];
	}));
	if (!Array.isArray(e.maskLayers) || e.maskLayers.length > 4) throw Error("WebMaskPBR maskLayers are invalid.");
	let a = e.maskLayers.map((e, r) => {
		if (!hu(e) || e.operation !== "TintMultiply" && e.operation !== "ReplaceColor" || typeof e.invert != "boolean") throw Error(`maskLayers[${r}] operation is invalid.`);
		let i = gu(e.mask, `maskLayers[${r}].mask`);
		if (![
			"r",
			"g",
			"b",
			"a"
		].includes(i.channel)) throw Error(`maskLayers[${r}].mask channel is invalid.`);
		return {
			mask: i,
			operation: e.operation,
			tintLinear: t(e.tintLinear, 3, `maskLayers[${r}].tintLinear`, !1),
			strength: n(e.strength, `maskLayers[${r}].strength`),
			invert: e.invert
		};
	});
	if (e.unlit !== void 0 && typeof e.unlit != "boolean") throw Error("unlit is invalid.");
	if (e.unlit === !0 && a.length) throw Error("Unlit mask layers are not supported.");
	let o = e.vertexAtlas === void 0 ? void 0 : uu(e.vertexAtlas), s = e.mappingProfileId === "ue-painter-vertex-atlas-v1" || e.mappingProfileId === "ue-kind-single-atlas-v1" || e.mappingProfileId === "ue-kind-multi-atlas-v1";
	if (o && (!s || e.unlit || a.length || e.mappingProfileId === "ue-kind-single-atlas-v1" != !!o.surfaceGated)) throw Error("Vertex Atlas cannot use an unrelated profile, unlit, or RGBA layers.");
	if (s && !o) throw Error("Missing vertex Atlas data.");
	if (o && e.mappingProfileId === "ue-kind-multi-atlas-v1" != !!o.surfaces) throw Error("Multi Kind Atlas surface profile mismatch.");
	let c = [
		...Object.values(i),
		...a.map((e) => e.mask),
		...o?.masks ?? []
	].some((e) => e.texCoord === 2 || e.anisotropy !== void 0 || e.generateMipmaps !== void 0), l = e.bakeBinding === void 0 ? void 0 : ou(e.bakeBinding);
	if (l && (e.mappingProfileId !== "u01-baked-pbr-v1" || o || a.length || !["OPAQUE", "MASK"].includes(r))) throw Error("Bake binding requires an opaque or masked baked-appearance-only material.");
	return structuredClone({
		schemaVersion: e.schemaVersion === 6 || e.ior !== void 0 || l && r === "MASK" ? 6 : e.schemaVersion === 5 || l ? 5 : e.schemaVersion === 4 || c ? 4 : 3,
		kind: "WebMaskPbrMaterial",
		mappingProfileId: e.mappingProfileId,
		...e.unlit === void 0 ? {} : { unlit: e.unlit },
		...e.ior === void 0 ? {} : { ior: n(e.ior, "ior", 1, 2.333) },
		baseColorFactor: t(e.baseColorFactor, 4, "baseColorFactor"),
		metallic: n(e.metallic, "metallic"),
		roughness: n(e.roughness, "roughness"),
		emissiveFactor: t(e.emissiveFactor, 3, "emissiveFactor"),
		...e.emissiveIntensity === void 0 ? {} : { emissiveIntensity: n(e.emissiveIntensity, "emissiveIntensity", 0, 100) },
		normalScale: n(e.normalScale, "normalScale", -8, 8),
		...e.occlusionStrength === void 0 ? {} : { occlusionStrength: n(e.occlusionStrength, "occlusionStrength") },
		alphaMode: r,
		alphaCutoff: n(e.alphaCutoff, "alphaCutoff"),
		doubleSided: e.doubleSided,
		textureViews: i,
		maskLayers: a,
		...o ? { vertexAtlas: o } : {},
		...l ? { bakeBinding: l } : {}
	});
}
function uu(e) {
	let t = (e, t, n = 0, r = 1) => {
		if (typeof e != "number" || !Number.isFinite(e) || e < n || e > r) throw Error(`${t} is invalid.`);
		return e;
	};
	if (!hu(e) || e.version !== 1 && e.version !== 2 || !Array.isArray(e.colors) || e.colors.length < 1 || e.colors.length > 32 || !Array.isArray(e.masks) || e.masks.length !== Math.ceil(e.colors.length / 4)) throw Error("Vertex Atlas requires version 1 or 2, 1–32 colors and one RGBA mask per four colors.");
	if (e.version === 2 ? e.colorDetailMode !== "color" || e.surfaceGated !== void 0 || e.surfaces !== void 0 : e.colorDetailMode !== void 0) throw Error("Vertex Atlas detail mode does not match its version.");
	let n = e.masks.map((e, t) => gu(e, `vertexAtlas.masks[${t}]`));
	if (n.some((e) => e.channel !== "rgba" || e.colorSpace !== "linear" || e.texCoord !== 0 || e.flipY)) throw Error("Vertex Atlas requires linear RGBA masks on UV0 without a vertical flip.");
	let r = e.colors.map((e, n) => {
		if (!Array.isArray(e) || e.length !== 3) throw Error("Invalid Atlas color");
		return e.map((e) => t(e, `vertexAtlas.colors[${n}]`, 0, 65504));
	});
	if (e.surfaceGated !== void 0 && (e.surfaceGated !== !0 || r.length !== 1)) throw Error("Kind Atlas requires exactly one gated surface.");
	let i;
	if (e.surfaces !== void 0) {
		if (e.surfaceGated || r.length < 2 || !Array.isArray(e.surfaces) || e.surfaces.length !== r.length) throw Error("Multi Kind Atlas surface count mismatch.");
		i = e.surfaces.map((e, n) => {
			if (!hu(e)) throw Error("Invalid Kind surface");
			return {
				roughness: t(e.roughness, `surfaces[${n}].roughness`),
				metallic: t(e.metallic, `surfaces[${n}].metallic`)
			};
		});
	}
	return {
		version: e.version,
		...e.version === 2 ? { colorDetailMode: "color" } : {},
		masks: n,
		colors: r,
		...e.surfaceGated === !0 ? { surfaceGated: !0 } : {},
		...i ? { surfaces: i } : {},
		colorDetail: t(e.colorDetail, "vertexAtlas.colorDetail"),
		roughnessOffset: t(e.roughnessOffset, "vertexAtlas.roughnessOffset", -1, 1),
		metallicReduction: t(e.metallicReduction, "vertexAtlas.metallicReduction", -1, 1)
	};
}
function du(e) {
	return hu(e) && [
		2,
		3,
		4,
		5,
		6
	].includes(e.schemaVersion) && e.kind === "WebMaskPbrMaterial" ? lu(e) : cu(e);
}
async function fu(e, t) {
	return pu(await Lt(e, typeof t == "string" ? t : t.assetId, typeof t != "string" && t.revisionPolicy === "pinned" ? t.revisionId : void 0), t);
}
function pu(e, t) {
	let n = typeof t == "string" ? t : t.assetId, r = e.assets.find((e) => e.id === n && e.kind === "Material");
	if (!r) throw Error(`Unknown Material asset ${n}.`);
	if (typeof t != "string" && !["live", "pinned"].includes(t.revisionPolicy)) throw Error("Invalid Material revision policy.");
	let i = typeof t != "string" && t.revisionPolicy === "pinned" ? t.revisionId : r.currentRevisionId;
	if (!i) throw Error(`Material ${n} requires a pinned revision ID.`);
	let a = e.revisions.find((e) => e.id === i && e.assetId === n), o = e.blobs.find((e) => a?.blobKeys.includes(e.key));
	if (!a || !o) throw Error(`Material ${n} has missing revision data.`);
	return du(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(o.bytes)));
}
function mu(e) {
	let t = e.kind === "WebMaskPbrMaterial" ? [
		...Object.values(e.textureViews).map((e) => e.texture),
		...e.maskLayers.map((e) => e.mask.texture),
		...e.vertexAtlas?.masks.map((e) => e.texture) ?? []
	] : Object.values(e.textures).filter((e) => !!e);
	return [...new Map(t.map((e) => [e.assetId, e])).values()];
}
function hu(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function gu(e, t) {
	if (!hu(e) || !hu(e.texture) || typeof e.texture.assetId != "string") throw Error(`${t}.texture is invalid.`);
	if (e.texCoord !== 0 && e.texCoord !== 1 && e.texCoord !== 2 || !["srgb", "linear"].includes(String(e.colorSpace)) || ![
		"r",
		"g",
		"b",
		"a",
		"rgb",
		"rgba"
	].includes(String(e.channel)) || ![
		"repeat",
		"clamp",
		"mirror"
	].includes(String(e.wrapS)) || ![
		"repeat",
		"clamp",
		"mirror"
	].includes(String(e.wrapT)) || ![
		"nearest",
		"linear",
		"linear-mipmap-linear"
	].includes(String(e.minFilter)) || !["nearest", "linear"].includes(String(e.magFilter)) || typeof e.flipY != "boolean" || e.normalGreen !== "preserve" && e.normalGreen !== "invert") throw Error(`${t} sample state is invalid.`);
	if (e.generateMipmaps !== void 0 && typeof e.generateMipmaps != "boolean") throw Error(`${t}.generateMipmaps is invalid.`);
	if (e.anisotropy !== void 0 && (!Number.isInteger(e.anisotropy) || e.anisotropy < 1 || e.anisotropy > 16)) throw Error(`${t}.anisotropy must be an integer from 1 to 16.`);
	if (e.generateMipmaps === !1 && e.minFilter === "linear-mipmap-linear") throw Error(`${t} mip filter requires generated mipmaps.`);
	let n = (e, n) => {
		if (!Array.isArray(e) || e.length !== 2 || e.some((e) => typeof e != "number" || !Number.isFinite(e))) throw Error(`${t}.${n} is invalid.`);
		return e;
	};
	return structuredClone({
		texture: e.texture,
		texCoord: e.texCoord,
		uvScale: n(e.uvScale, "uvScale"),
		uvOffset: n(e.uvOffset, "uvOffset"),
		colorSpace: e.colorSpace,
		channel: e.channel,
		wrapS: e.wrapS,
		wrapT: e.wrapT,
		minFilter: e.minFilter,
		magFilter: e.magFilter,
		flipY: e.flipY,
		normalGreen: e.normalGreen,
		...e.generateMipmaps === void 0 ? {} : { generateMipmaps: e.generateMipmaps },
		...e.anisotropy === void 0 ? {} : { anisotropy: e.anisotropy }
	});
}
function _u(e) {
	let t = hu(e.textures) ? e.textures : {}, n = {
		"baseColor-srgb": ["baseColor"],
		"emissive-srgb": ["emissive"],
		"normal-linear": ["normal"],
		"metallicRoughness-linear": ["metallic", "roughness"],
		"occlusion-linear": ["occlusion"]
	}, r = Object.fromEntries(Object.entries(t).flatMap(([e, t]) => {
		let r = n[e];
		return !r || !hu(t) ? [] : r.map((n) => {
			let r = n === "occlusion" ? "r" : n === "roughness" ? "g" : n === "metallic" ? "b" : n === "baseColor" ? "rgba" : "rgb";
			return [n, {
				texture: t,
				texCoord: 0,
				uvScale: [1, 1],
				uvOffset: [0, 0],
				colorSpace: e.endsWith("-srgb") ? "srgb" : "linear",
				channel: r,
				wrapS: "repeat",
				wrapT: "repeat",
				minFilter: "linear",
				magFilter: "linear",
				flipY: !1,
				normalGreen: "preserve"
			}];
		});
	})), i = Array.isArray(e.maskLayers) ? e.maskLayers.map((e) => {
		if (!hu(e)) return e;
		let { maskTexture: t, texCoord: n, uvScale: r, uvOffset: i, colorSpace: a, channel: o, wrapS: s, wrapT: c, minFilter: l, magFilter: u, flipY: d, ...f } = e;
		return {
			...f,
			mask: {
				texture: t,
				texCoord: n,
				uvScale: r,
				uvOffset: i,
				colorSpace: a,
				channel: o,
				wrapS: s,
				wrapT: c,
				minFilter: l,
				magFilter: u,
				flipY: d,
				normalGreen: "preserve"
			}
		};
	}) : e.maskLayers, a = { ...e };
	return delete a.textures, {
		...a,
		schemaVersion: 3,
		textureViews: r,
		maskLayers: i
	};
}
//#endregion
//#region src/render/TextureViewRendering.ts
function vu(e, t) {
	let n = e.clone();
	return yu(n, t), n;
}
function yu(t, n) {
	t.colorSpace = n.colorSpace === "srgb" ? S : "", t.channel = n.texCoord, t.repeat.set(n.uvScale[0], n.uvScale[1]), t.offset.set(n.uvOffset[0], n.uvOffset[1]), t.wrapS = bu(n.wrapS), t.wrapT = bu(n.wrapT), t.minFilter = n.minFilter === "nearest" ? Ne : n.minFilter === "linear-mipmap-linear" ? e : ie, t.magFilter = n.magFilter === "nearest" ? Ne : ie, t.flipY = n.flipY, t.generateMipmaps = n.generateMipmaps ?? !0, t.anisotropy = n.anisotropy ?? 1, t.matrixAutoUpdate = !0, t.updateMatrix(), t.userData.textureView = {
		assetId: n.texture.assetId,
		texCoord: n.texCoord,
		uvScale: [...n.uvScale],
		uvOffset: [...n.uvOffset],
		colorSpace: n.colorSpace,
		channel: n.channel,
		wrapS: n.wrapS,
		wrapT: n.wrapT,
		minFilter: n.minFilter,
		magFilter: n.magFilter,
		flipY: n.flipY,
		normalGreen: n.normalGreen,
		...n.generateMipmaps === void 0 ? {} : { generateMipmaps: n.generateMipmaps },
		...n.anisotropy === void 0 ? {} : { anisotropy: n.anisotropy },
		alphaTransfer: "linear-unmodified"
	}, t.needsUpdate = !0;
}
function bu(e) {
	return e === "mirror" ? Fe : e === "clamp" ? i : d;
}
//#endregion
//#region src/render/WebMaskPbrRendering.ts
function xu(e, t, n) {
	if (t.length !== n.length) throw Error("WebMaskPBR layer and texture counts differ.");
	if (t.length === 0) return;
	let r = !1;
	e.addEventListener("dispose", () => {
		r || (r = !0, new Set(n).forEach((e) => e.dispose()));
	});
	let i = [...new Set(t.map((e) => e.mask.texCoord))];
	i.includes(1) && (e.defines = {
		...e.defines,
		USE_UV1: ""
	}), i.includes(2) && (e.defines = {
		...e.defines,
		USE_UV2: ""
	}), e.onBeforeRender = (e, t, n, r) => {
		for (let e of i) {
			let t = e === 0 ? "uv" : `uv${e}`;
			if (!r.hasAttribute(t)) throw Error(`WebMaskPBR requires geometry attribute ${t}; UV0 fallback is forbidden.`);
		}
	}, e.customProgramCacheKey = () => `web-mask-pbr-v2:${t.map((e) => `${e.operation}:${e.mask.channel}:uv${e.mask.texCoord}:${e.mask.colorSpace}`).join("|")}`, e.onBeforeCompile = (e) => {
		let r = t.map((e, t) => [
			`varying vec2 webMaskUv${t};`,
			`uniform sampler2D webMaskTexture${t};`,
			`uniform vec2 webMaskUvScale${t};`,
			`uniform vec2 webMaskUvOffset${t};`,
			`uniform vec3 webMaskTint${t};`,
			`uniform float webMaskStrength${t};`,
			`uniform float webMaskInvert${t};`
		].join("\n")).join("\n"), i = t.map((e, t) => {
			let n = e.operation === "TintMultiply" ? `diffuseColor.rgb * webMaskTint${t}` : `webMaskTint${t}`;
			return [
				`float webMaskSample${t} = texture2D( webMaskTexture${t}, webMaskUv${t} * webMaskUvScale${t} + webMaskUvOffset${t} ).${e.mask.channel};`,
				`float webMaskDecoded${t} = mix( webMaskSample${t}, 1.0 - webMaskSample${t}, webMaskInvert${t} );`,
				`float webMaskAmount${t} = clamp( webMaskDecoded${t} * webMaskStrength${t}, 0.0, 1.0 );`,
				`diffuseColor.rgb = mix( diffuseColor.rgb, ${n}, webMaskAmount${t} );`
			].join("\n");
		}).join("\n");
		if (!e.fragmentShader.includes("#include <common>") || !e.fragmentShader.includes("#include <color_fragment>") || !e.vertexShader.includes("#include <common>") || !e.vertexShader.includes("#include <uv_vertex>")) throw Error("Three MeshStandardMaterial shader layout is incompatible with WebMaskPBR texture views.");
		e.vertexShader = e.vertexShader.replace("#include <common>", `#include <common>\n${t.map((e, t) => `varying vec2 webMaskUv${t};`).join("\n")}`).replace("#include <uv_vertex>", `#include <uv_vertex>\n${t.map((e, t) => `webMaskUv${t} = ${e.mask.texCoord === 0 ? "uv" : `uv${e.mask.texCoord}`};`).join("\n")}`), e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>\n${r}`).replace("#include <color_fragment>", `#include <color_fragment>\n${i}`), t.forEach((t, r) => {
			e.uniforms[`webMaskTexture${r}`] = { value: n[r] }, e.uniforms[`webMaskUvScale${r}`] = { value: new Se(...t.mask.uvScale) }, e.uniforms[`webMaskUvOffset${r}`] = { value: new Se(...t.mask.uvOffset) }, e.uniforms[`webMaskTint${r}`] = { value: new j(...t.tintLinear) }, e.uniforms[`webMaskStrength${r}`] = { value: t.strength }, e.uniforms[`webMaskInvert${r}`] = { value: +!!t.invert };
		});
	}, e.userData.webMaskPbr = {
		formulaVersion: 1,
		layerCount: t.length,
		colorSpace: "linear",
		requiredUvSets: i
	}, e.needsUpdate = !0;
}
//#endregion
//#region src/render/VertexAtlasRendering.ts
var Su = [
	.2126390039920807,
	.7151686549186707,
	.07219231873750687
];
function Cu(e, t, n, r = !1) {
	if (n.length !== t.masks.length || n.length !== Math.ceil(t.colors.length / 4)) throw Error("Atlas mask views must match its colors");
	e.vertexColors = !1, e.onBeforeRender = (e, t, n, r) => {
		if (!r.hasAttribute("color") || !r.hasAttribute("uv")) throw Error("Atlas requires source vertex color IDs and UV0");
	}, e.customProgramCacheKey = () => `ue-painter-vertex-atlas-v1:${t.colors.length}${t.version === 2 ? ":rgb-detail" : ""}${t.surfaceGated ? ":gated-surface" : ""}${t.surfaces ? ":multi-surface" : ""}`, e.onBeforeCompile = (e) => {
		for (let t of ["#include <common>", "#include <map_fragment>"]) if (!e.fragmentShader.includes(t)) throw Error("Incompatible Atlas material fragment shader");
		if (!e.vertexShader.includes("#include <uv_vertex>")) throw Error("Incompatible Atlas material vertex shader");
		let i = "varying vec2 dtweAtlasId; varying vec2 dtweAtlasUv;";
		e.vertexShader = e.vertexShader.replace("#include <common>", `#include <common>\nattribute vec3 color;\n${i}`).replace("#include <uv_vertex>", "#include <uv_vertex>\ndtweAtlasId = color.rg; dtweAtlasUv = uv;"), e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>\n${i}
      uniform vec3 dtweAtlasColors[${t.colors.length}]; uniform float dtweAtlasDetail;
      uniform float dtweAtlasRoughnessOffset; uniform float dtweAtlasMetallicReduction;
      ${t.surfaces ? `uniform float dtweKindRoughness[${t.colors.length}]; uniform float dtweKindMetallic[${t.colors.length}];` : ""}
      ${n.map((e, t) => `uniform sampler2D dtweAtlasMask${t}; uniform vec2 dtweAtlasScale${t}; uniform vec2 dtweAtlasOffset${t};`).join("\n")}`).replace("#include <map_fragment>", `
        vec3 dtwePainterBase = vec3(1.0);
        #ifdef USE_MAP
          vec4 dtwePainterSample = texture2D(map, vMapUv);
          dtwePainterBase = dtwePainterSample.rgb;
          diffuseColor.a *= dtwePainterSample.a;
        #endif
        float dtweId = floor(dtweAtlasId.r * 255.0 + 0.5) + floor(dtweAtlasId.g * 255.0 + 0.5) * 256.0;
        ${n.map((e, t) => `vec4 dtweMask${t} = texture2D(dtweAtlasMask${t}, dtweAtlasUv * dtweAtlasScale${t} + dtweAtlasOffset${t});`).join("\n")}
        vec3 dtweColor = vec3(0.0); float dtweWeight = 0.0;
        ${t.surfaces ? "float dtweRoughness = 0.0; float dtweMetallic = 0.0;" : ""}
        ${t.colors.map((e, n) => `float dtweW${n} = max(1.0 - abs(dtweId - ${n + 1}.0), 0.0) * max(dtweMask${Math.floor(n / 4)}.${"rgba"[n % 4]}, 0.0010000000474974513);
          dtweColor += dtweW${n} * dtweAtlasColors[${n}]; dtweWeight += dtweW${n};
          ${t.surfaces ? `dtweRoughness += dtweW${n} * dtweKindRoughness[${n}]; dtweMetallic += dtweW${n} * dtweKindMetallic[${n}];` : ""}`).join("\n")}
        diffuseColor.rgb *= dtweColor / max(dtweWeight, 0.0000009999999974752427)
          * ${t.version === 2 ? "mix(vec3(1.0), dtwePainterBase, dtweAtlasDetail)" : `mix(1.0, dot(dtwePainterBase, vec3(${Su.join(",")})), dtweAtlasDetail)`};
      `).replace("#include <roughnessmap_fragment>", `#include <roughnessmap_fragment>\nroughnessFactor = clamp(roughnessFactor ${t.surfaces ? "* (dtweRoughness / max(dtweWeight, 0.0000009999999974752427))" : t.surfaceGated ? "* (dtweWeight / max(dtweWeight, 0.0000009999999974752427))" : ""} + dtweAtlasRoughnessOffset, 0.0, 1.0);`).replace("#include <metalnessmap_fragment>", `#include <metalnessmap_fragment>\nmetalnessFactor = clamp(metalnessFactor ${t.surfaces ? "* (dtweMetallic / max(dtweWeight, 0.0000009999999974752427))" : t.surfaceGated ? "* (dtweWeight / max(dtweWeight, 0.0000009999999974752427))" : ""} - dtweAtlasMetallicReduction, 0.0, 1.0);`), t.surfaces && (e.uniforms.dtweKindRoughness = { value: t.surfaces.map((e) => e.roughness) }, e.uniforms.dtweKindMetallic = { value: t.surfaces.map((e) => e.metallic) }), e.uniforms.dtweAtlasColors = { value: r ? new Float32Array(t.colors.flat()) : t.colors.map((e) => new j(...e)) }, e.uniforms.dtweAtlasDetail = { value: t.colorDetail }, e.uniforms.dtweAtlasRoughnessOffset = { value: t.roughnessOffset }, e.uniforms.dtweAtlasMetallicReduction = { value: t.metallicReduction }, n.forEach((n, r) => {
			e.uniforms[`dtweAtlasMask${r}`] = { value: n }, e.uniforms[`dtweAtlasScale${r}`] = { value: new Se(...t.masks[r].uvScale) }, e.uniforms[`dtweAtlasOffset${r}`] = { value: new Se(...t.masks[r].uvOffset) };
		});
	}, e.userData.vertexAtlas = {
		version: t.version,
		colors: t.colors.length,
		masks: n.length
	}, e.needsUpdate = !0;
}
//#endregion
//#region src/render/LeasedTextureResolver.ts
function wu(e, t = Tu, n = 0, r) {
	let i = /* @__PURE__ */ new Map();
	return async (a, o) => {
		let s = await Lt(e, a.assetId), c = s.assets.find((e) => e.id === a.assetId && e.kind === "Texture"), l = s.revisions.find((e) => e.id === c?.currentRevisionId && e.assetId === c?.id), u = s.blobs.find((e) => e.key === l?.blobKeys[0]);
		if (!c || !l || !u || typeof l.metadata.mimeType != "string") throw Error("Incomplete texture asset");
		let d = Math.min(n || Infinity, r?.get(c.id) ?? Infinity), f = Number.isFinite(d) ? d : 0, p = `${c.id}@${l.id}:${f}:${o?.flipY ? "flip" : "original"}`, m = i.get(p);
		m || (m = {
			users: 0,
			promise: t(u.bytes, l.metadata.mimeType, f, o?.flipY ?? !1)
		}, i.set(p, m)), m.users++;
		let h;
		try {
			h = await m.promise;
		} catch (e) {
			throw --m.users === 0 && i.delete(p), e;
		}
		let g = h.clone(), _ = !1;
		return g.addEventListener("dispose", () => {
			if (!_ && (_ = !0, --m.users === 0)) {
				i.delete(p), h.dispose();
				let e = h.image;
				e && typeof e == "object" && "close" in e && typeof e.close == "function" && e.close();
			}
		}), g;
	};
}
async function Tu(e, t, n, r) {
	if (typeof createImageBitmap != "function") throw Error("ImageBitmap decoding is unavailable");
	let { width: i, height: a } = R(e, t), o = n ? Math.min(1, n / Math.max(i, a)) : 1, s = new lt(await createImageBitmap(new Blob([e.slice().buffer], { type: t }), {
		imageOrientation: r ? "flipY" : "none",
		premultiplyAlpha: "none",
		colorSpaceConversion: "none",
		...o < 1 ? {
			resizeWidth: Math.max(1, Math.round(i * o)),
			resizeHeight: Math.max(1, Math.round(a * o)),
			resizeQuality: "high"
		} : {}
	}));
	return s.flipY = !1, s;
}
//#endregion
//#region src/assets/MaterialDiagnostics.ts
var Eu = class extends Error {
	diagnostic;
	constructor(e, t, n, r) {
		super(t), this.name = "MaterialFailure", this.diagnostic = r ?? {
			version: 1,
			code: e,
			...n ? { target: n } : {}
		};
	}
};
//#endregion
//#region src/render/MaterialDeviceLimits.ts
function Du(e, t, n) {
	if (!Object.values(t).every((e) => Number.isFinite(e) && e >= 1)) throw new Eu("device-limit", "장치의 WebGL 텍스처 한도를 확인할 수 없습니다.", n);
	if (e.anisotropy > t.maxAnisotropy) throw new Eu("device-limit", `anisotropy ${e.anisotropy} 필요 · 장치 지원 ${t.maxAnisotropy}`, n);
	if (e.textures > t.maxTextures) throw new Eu("device-limit", `재질 텍스처 ${e.textures}개 필요 · 장치 지원 ${t.maxTextures}개`, n);
	let r = Math.max(0, ...e.dimensions.flatMap((e) => [e.width, e.height]));
	if (r > t.maxTextureSize) throw new Eu("device-limit", `텍스처 최대 변 ${r}px 필요 · 장치 지원 ${t.maxTextureSize}px`, n);
}
//#endregion
//#region src/render/MaterialRendering.ts
var Ou = /* @__PURE__ */ new WeakMap();
function ku(e) {
	return Ou.get(e) ?? /* @__PURE__ */ new Set();
}
function Au(e, t, n = {}) {
	let r = t ?? wu(e, void 0, n.textureMaxSize, n.textureMapLimits), i = async (e) => {
		let n = await r(e.texture, e);
		return t ? vu(n, e) : (yu(n, e), n);
	};
	return async (a, o) => {
		let s = await fu(e, a), c = s.kind === "WebMaskPbrMaterial" ? {
			...s,
			maskLayers: ju(s.maskLayers, o?.tintOverrides ?? [])
		} : s, l = n.transformDocument?.(c) ?? c, u = Mu(l), d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = !1;
		Ou.set(u, d), u.addEventListener("dispose", () => {
			p || (p = !0, d.forEach((e) => e.dispose()));
		});
		try {
			if (l.kind === "WebMaskPbrMaterial") {
				for (let [e, t] of Object.entries(l.textureViews)) {
					let n = await i(t);
					d.add(n), f.add(n), e === "baseColor" && (u.map = n), e === "emissive" && (u.emissiveMap = n), e === "normal" && (u.normalMap = n, Fu(u, t.normalGreen === "invert")), e === "metallic" && (u.metalnessMap = n), e === "roughness" && (u.roughnessMap = n), e === "occlusion" && (u.aoMap = n);
				}
				let t = l.maskLayers, n = [];
				for (let e of t) {
					let t = await i(e.mask);
					d.add(t), f.add(t), n.push(t);
				}
				if (xu(u, t, n), n.forEach((e) => d.delete(e)), l.vertexAtlas) {
					let t = [];
					for (let e of l.vertexAtlas.masks) {
						let n = await i(e);
						d.add(n), f.add(n), t.push(n);
					}
					Cu(u, l.vertexAtlas, t, bs(e));
				}
				u.userData.materialInstance = { tintOverrides: structuredClone(o?.tintOverrides ?? []) };
			} else for (let [e, n] of Object.entries(l.textures)) {
				let i = await r(n), a = t ? i.clone() : i;
				d.add(a), Pu(a, e), e === "baseColor-srgb" && (u.map = a), e === "emissive-srgb" && (u.emissiveMap = a), e === "normal-linear" && (u.normalMap = a), e === "metallicRoughness-linear" && (u.metalnessMap = a, u.roughnessMap = a), e === "occlusion-linear" && (u.aoMap = a);
			}
			if (l.kind === "WebMaskPbrMaterial") {
				let e = [
					...Object.values(l.textureViews),
					...l.maskLayers.map((e) => e.mask),
					...l.vertexAtlas?.masks ?? []
				], t = Math.max(1, ...e.map((e) => e.anisotropy ?? 1)), n = [...f].map((e) => {
					let t = e.image;
					return {
						width: t?.width ?? 0,
						height: t?.height ?? 0
					};
				}), r = u.onBeforeRender, i = u.normalScale.y;
				u.onBeforeRender = (o, s, c, d, p, m) => {
					let h = Math.max(1, o.capabilities.getMaxAnisotropy());
					Du({
						anisotropy: t,
						textures: f.size,
						dimensions: n
					}, {
						maxAnisotropy: h,
						maxTextures: o.capabilities.maxTextures,
						maxTextureSize: o.capabilities.maxTextureSize
					}, a.assetId);
					for (let t of e) {
						let e = t.texCoord === 0 ? "uv" : `uv${t.texCoord}`;
						if (!d.hasAttribute(e)) throw new Eu("uv", `Material requires ${e}; UV0 fallback is forbidden.`, a.assetId);
					}
					l.mappingProfileId === "u01-baked-pbr-v1" && u.normalMap && (u.normalScale.y = d.hasAttribute("tangent") ? i : -i), r.call(u, o, s, c, d, p, m);
				};
			}
			return xs(u, e, l), u;
		} catch (e) {
			throw u.dispose(), e;
		}
	};
}
function ju(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Map(t.map((t) => {
		if (!Number.isInteger(t.layerIndex) || t.layerIndex < 0 || t.layerIndex >= e.length) throw Error(`Material tint layer ${t.layerIndex} does not exist.`);
		if (n.has(t.layerIndex)) throw Error(`Material tint layer ${t.layerIndex} is overridden more than once.`);
		if (t.tintLinear.length !== 3 || t.tintLinear.some((e) => !Number.isFinite(e))) throw Error(`Material tint layer ${t.layerIndex} is invalid.`);
		if (!Number.isFinite(t.strength) || t.strength < 0 || t.strength > 1) throw Error(`Material tint strength ${t.strength} is invalid.`);
		return n.add(t.layerIndex), [t.layerIndex, t];
	}));
	return e.map((e, t) => {
		let n = r.get(t);
		return n ? {
			...e,
			tintLinear: [...n.tintLinear],
			strength: n.strength
		} : e;
	});
}
function Mu(e) {
	let t = e.kind === "WebMaskPbrMaterial" ? e.ior : void 0, n = new (t === void 0 ? Ue : Ye)({
		color: new st().setRGB(e.baseColorFactor[0], e.baseColorFactor[1], e.baseColorFactor[2]),
		opacity: e.baseColorFactor[3],
		metalness: e.metallic,
		roughness: e.roughness,
		emissive: new st().setRGB(...e.emissiveFactor),
		emissiveIntensity: e.emissiveIntensity ?? 1,
		normalScale: new Se(e.normalScale, e.normalScale),
		aoMapIntensity: e.occlusionStrength ?? 1,
		alphaTest: e.alphaMode === "MASK" ? e.alphaCutoff : 0,
		transparent: e.alphaMode === "BLEND",
		depthWrite: e.alphaMode !== "BLEND",
		side: e.doubleSided ? 2 : 0
	});
	return n instanceof Ye && t !== void 0 && (n.ior = t), n.userData.materialContract = {
		alphaMode: e.alphaMode,
		outputTransform: "renderer-srgb-once"
	}, e.kind === "WebMaskPbrMaterial" && e.unlit && (n.onBeforeCompile = (e) => {
		if (!e.fragmentShader.includes("#include <opaque_fragment>")) throw Error("Unlit material shader layout is incompatible.");
		e.fragmentShader = e.fragmentShader.replace("#include <opaque_fragment>", "outgoingLight = diffuseColor.rgb;\n#include <opaque_fragment>");
	}, n.customProgramCacheKey = () => "u01-khr-materials-unlit-v1", n.userData.unlit = !0), n;
}
function Nu(e, t) {
	e.material = t, e.userData.materialProfile = "pbr-metallic-roughness-webmask-v1";
}
function Pu(e, t) {
	e.colorSpace = t === "baseColor-srgb" || t === "emissive-srgb" ? S : "", e.userData.textureSemantic = t;
}
function Fu(e, t) {
	let n = Math.abs(e.normalScale.y);
	e.normalScale.y = t ? -n : n, e.userData.normalConvention = t ? "directx-green-inverted" : "gltf-opengl";
}
//#endregion
//#region src/render/PrimitiveGeometry.ts
function Iu(e) {
	switch (e) {
		case "Sphere": return new ee(.5, 24, 16);
		case "Cylinder": return new T(.5, .5, 1, 24);
		case "Cone": return new c(.5, 1, 24);
		case "Plane": return new ct(1, 1).rotateX(-Math.PI / 2);
		case "Cube": return new at(1, 1, 1);
	}
}
//#endregion
//#region src/render/StaticMeshLodView.ts
var Lu = class {
	root;
	distanceMeters;
	hysteresis;
	activeLevels = /* @__PURE__ */ new WeakMap();
	constructor(e, t, n) {
		this.root = e, this.distanceMeters = t, this.hysteresis = n;
	}
	apply(e) {
		let t = this.root.children.map((e) => e.visible), n = e.getWorldPosition(new j()).distanceTo(this.root.getWorldPosition(new j())), r = this.activeLevels.get(e) === 1 ? n < this.distanceMeters * (1 - this.hysteresis) ? 0 : 1 : +(n >= this.distanceMeters);
		return this.activeLevels.set(e, r), this.root.children.forEach((e, t) => {
			e.visible = t === r;
		}), () => this.root.children.forEach((e, n) => {
			e.visible = t[n];
		});
	}
}, Ru = /* @__PURE__ */ new WeakMap();
function zu(e) {
	return Ru.get(e);
}
//#endregion
//#region src/render/ActorDirectionHelper.ts
function Bu(e) {
	let t = new x();
	t.name = `${e} editor helper`;
	let n = new x();
	n.name = e === "DirectionalLight" ? "Sun icon" : e === "SceneNode" ? "Empty actor icon" : "Player start flag";
	let r = e === "DirectionalLight" ? 16765276 : e === "SceneNode" ? 8766975 : 9233581, i = new ke({
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
		a(new oe(.13, 24)), a(new _(.18, .205, 32));
		for (let e = 0; e < 8; e++) {
			let t = e * Math.PI / 4, n = a(new T(.013, .013, .12, 5));
			n.rotation.z = -t, n.position.set(Math.sin(t) * .29, Math.cos(t) * .29, 0);
		}
	} else if (e === "SceneNode") {
		n.position.y = .25;
		let e = new pe();
		e.moveTo(0, .15), e.lineTo(.12, 0), e.lineTo(0, -.15), e.lineTo(-.12, 0), e.closePath(), a(new h(e));
	} else {
		let e = a(new T(.018, .018, .7, 6));
		e.position.y = .35;
		let t = new pe();
		t.moveTo(.02, .7), t.lineTo(.46, .64), t.lineTo(.35, .47), t.lineTo(.02, .51), t.closePath(), a(new h(t));
	}
	if (t.add(n), e !== "SceneNode") {
		let n = new x();
		n.name = "Forward direction", n.quaternion.setFromUnitVectors(new j(0, 1, 0), new j(...Dn([
			1,
			0,
			0
		])));
		let r = a(new T(.025, .025, .85, 8), n);
		r.position.y = e === "PlayerStart" ? .425 : .6;
		let i = a(new c(.11, .25, 12), n);
		i.position.y = e === "PlayerStart" ? .975 : 1.15, t.add(n);
	}
	t.traverse((e) => {
		e.layers.set(1), e.userData.editorHelper = !0, e.renderOrder = 5;
	});
	let o = new Be();
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
			t.getWorldQuaternion(o), n.quaternion.copy(o.invert()).multiply(e.getWorldQuaternion(new Be())), n.updateMatrixWorld(!0);
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
var Vu = new j(...Dn([
	1,
	0,
	0
]));
function Hu(e) {
	if (e.type === "DirectionalLight") throw Error("Local light helper requires PointLight or SpotLight.");
	let t = new x();
	t.name = `${e.type} editor helper`, t.matrixAutoUpdate = !1;
	let n = new x();
	n.name = e.type === "PointLight" ? "Bulb icon" : "Stage light icon";
	let r = new x();
	r.name = "Light influence", r.visible = !1;
	let i = new ke({
		color: 16765276,
		side: 2,
		depthTest: !1,
		depthWrite: !1,
		toneMapped: !1
	}), a = new D({
		color: 16752178,
		depthTest: !1,
		depthWrite: !1,
		toneMapped: !1
	}), o = new D({
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
		s(new _(.16, .2, 24), [
			0,
			.08,
			0
		]), s(new T(.07, .1, .16, 8), [
			0,
			-.16,
			0
		]);
		for (let e of [-.05, .05]) s(new T(.008, .008, .15, 4), [
			e,
			0,
			0
		]);
		s(new T(.012, .012, .1, 4), [
			0,
			-.26,
			0
		]);
	} else {
		let e = new pe();
		e.moveTo(-.23, .16), e.lineTo(.13, .16), e.lineTo(.24, -.1), e.lineTo(-.23, -.1), e.closePath(), s(new h(e));
		let t = s(new T(.022, .022, .32, 6), [
			.27,
			.02,
			0
		]);
		t.rotation.z = .35;
		for (let e of [-.15, .15]) s(new T(.015, .015, .2, 6), [
			e,
			-.2,
			0
		]);
		let n = s(new T(.018, .018, .32, 6), [
			0,
			-.3,
			0
		]);
		n.rotation.z = Math.PI / 2, s(new T(.022, .022, .14, 6), [
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
			e instanceof ye && e.geometry.dispose();
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
			let i = new we();
			i.setAttribute("position", new ne(t, 3));
			let a = new ye(i, n);
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
	let f = new j(), p = new j(), m = new Be(), g = new Ve(), v = new Ve();
	return {
		object: t,
		update: d,
		setIconPresentation(e, t) {
			n.visible = e, n.scale.setScalar(t), n.updateMatrixWorld(!0);
		},
		getBounds() {
			return new Me().setFromObject(n);
		},
		setSelected(e) {
			r.visible = e, i.color.setHex(e ? 16752178 : 16765276);
		},
		prepareView(e) {
			let r = t.parent;
			r && (r.updateWorldMatrix(!0, !1), f.setFromMatrixPosition(r.matrixWorld), p.copy(Vu).transformDirection(r.matrixWorld), m.setFromUnitVectors(Vu, p), g.compose(f, m, new j(1, 1, 1)), t.matrix.copy(v.copy(r.matrixWorld).invert()).multiply(g), n.quaternion.copy(m).invert().multiply(e.getWorldQuaternion(new Be())), t.matrixWorldNeedsUpdate = !0, t.updateWorldMatrix(!1, !0));
		},
		dispose() {
			l(), n.traverse((e) => {
				e instanceof M && e.geometry.dispose();
			}), i.dispose(), a.dispose(), o.dispose(), t.removeFromParent();
		}
	};
}
//#endregion
//#region src/render/ActorIconSettings.ts
var Uu = .25;
function Wu(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= .25 && e <= 4;
}
//#endregion
//#region src/assets/SkeletalAttachmentRig.ts
var Gu = class {
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
			let [n] = i.splice(t, 1), r = new A();
			r.name = `BoneAnchor:${n.id}`, r.userData.sourceBoneId = n.id, Ku(r, n.restLocal), (n.parentId === null ? e.root : this.bones.get(n.parentId)).add(r), this.bones.set(n.id, r);
		}
		for (let e of t.sockets) {
			let t = this.bones.get(e.boneId);
			if (!t) throw Error(`Socket ${e.id} references unavailable source bone ${e.boneId}.`);
			if (this.sockets.has(e.id)) throw Error(`Duplicate socket ${e.id}.`);
			let n = new A();
			n.name = `SocketAnchor:${e.id}`, n.userData.sourceSocketId = e.id, Ku(n, e.transform), t.add(n), this.sockets.set(e.id, n);
		}
		e.root.updateWorldMatrix(!0, !0);
	}
	anchor(e, t) {
		let n = e === "bone" ? this.bones.get(t) : this.sockets.get(t);
		if (!n) throw Error(`Unknown ${e} attachment target ${t}.`);
		return n;
	}
};
function Ku(e, t) {
	e.position.fromArray(t.position), e.quaternion.fromArray(t.rotation), e.scale.fromArray(t.scale);
}
//#endregion
//#region src/runtime/ScriptAddonRuntime.ts
var qu = /* @__PURE__ */ new Map(), Ju = /* @__PURE__ */ new Map(), Yu = (e) => qu.get(e);
async function Xu(e, t = {}) {
	let n = new Set(e.actors.flatMap((e) => e.components.flatMap((e) => e.type === "TestScript" && e.scriptPackage ? [e.scriptPackage.codeHash] : [])));
	for (let e of Gt()) {
		if (e.manifest.sdkVersion === 5 && !t.includeGeneric) continue;
		let r = e.reference.codeHash;
		if (!n.has(r) || qu.has(r)) continue;
		if (Ju.has(r)) {
			await Ju.get(r);
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
				qu.set(r, n.createScript);
			} finally {
				URL.revokeObjectURL(t);
			}
		})();
		Ju.set(r, i);
		try {
			await i;
		} finally {
			Ju.delete(r);
		}
	}
}
//#endregion
//#region out/component-packages/c6b8244101f48f5c489d8da3edaa1f852a59612e3138c952c94c86aa9adfbd4d/index.js
function K(e) {
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
var Zu = (e) => {
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
}, q = (e) => {
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
}, J = (e) => ({
	onRegister() {
		e.requireMeshReference("sourceMesh"), e.requireReference("outputData"), e.setTickEnabled(!0);
	},
	tick() {
		let t = e.requireMeshReference("sourceMesh").getLocalTransform().positionMeters[0];
		if (!Number.isFinite(t)) throw Error("Position Sensor requires a finite position.");
		e.requireReference("outputData").value = t;
	}
}), Y = (e) => {
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
}, Qu = class {
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
function $u(e) {
	return new Qu(e);
}
//#endregion
//#region out/component-packages/e3c24fd4266ff8ddd5556b8f3923b01689363e6244aaa60be6b3abfdfe3867c3/index.js
function ed(e) {
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
function td(e) {
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
var nd = class {
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
function rd(e) {
	return new nd(e);
}
//#endregion
//#region out/component-packages/installed.ts
var id = Object.freeze({
	c6b8244101f48f5c489d8da3edaa1f852a59612e3138c952c94c86aa9adfbd4d: K,
	"2362c62a36074d101aa69ef8a6174f3dc6de05e8d4b10aa68d5523988f74bbfc": Zu,
	df99d8749c6e8d3a095ecd5364fc8cf4ea5c0d9f70b1a7c7ccc52727390e2ae6: q,
	"6938f1b7cdc3ef225be8a9f165a6d9543111142b7b6b14d931e8db0526620c66": J,
	"4f5e2994bf0aad90cc545725cfd9a44d14b7035d70ba646d0a00b1ba88b7d8fc": Y,
	cc22c8fb6e95f1090a51c0a00086d2db881af1f038898053e5f993b53eeea2ea: $u,
	e3c24fd4266ff8ddd5556b8f3923b01689363e6244aaa60be6b3abfdfe3867c3: ed,
	d80e628947af12069f65a193212a42aa02e49df8b936acc1e09a5a1b36c9235f: td,
	c2c5c8a5908fbcbcb08cb54762d1d4c5d5965be8be1dda8e779da3912423ea29: rd,
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
}), ad = /* @__PURE__ */ new Map();
function od(e, t) {
	if (Et(e), ad.has(e)) throw Error(`Duplicate addon capability provider: ${e}`);
	ad.set(e, t);
}
var sd = (e) => e.length === 3 && e.every(Number.isFinite), cd = (e) => {
	if (!/^#[a-fA-F0-9]{6}$/.test(e)) throw Error("Display color must be #RRGGBB");
	return e;
}, ld = (e) => {
	if (!Number.isFinite(e) || e < 0 || e > 1) throw Error("Display opacity must be in [0,1]");
	return e;
}, ud = /* @__PURE__ */ new Set(), dd = /* @__PURE__ */ new WeakMap();
function fd(e) {
	let t = dd.get(e);
	if (t) return t;
	t = {
		actors: new Map(e.actors.map((e) => [e.id, e])),
		children: /* @__PURE__ */ new Map()
	};
	for (let n of e.actors) {
		let e = vt(n).attachmentParent?.actorId;
		if (e) {
			let r = t.children.get(e) ?? [];
			r.push(n.id), t.children.set(e, r);
		}
	}
	return dd.set(e, t), t;
}
var pd = class {
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
		this.options = e, this.actorId = t, this.object = n, this.projections = r, ud.add(this), this.ready = this.sync();
	}
	get active() {
		return [...this.instances.values()].some((e) => e.state === "starting" || e.state === "running");
	}
	actor() {
		return fd(this.options.document()).actors.get(this.actorId);
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
		let n = t.components.filter((e) => e.type === "TestScript").filter((e) => Xt(e).manifest.sdkVersion === 5), r = new Set(n.map((e) => e.id));
		for (let [e, t] of this.instances) r.has(e) || (t.state = "disposed", this.release(t), this.instances.delete(e));
		if (!this.disposed) for (let r of n) {
			let n = Xt(r);
			if (n.manifest.sdkVersion !== 5) continue;
			let i = n.manifest, a = this.instances.get(r.id);
			a && a.reference.codeHash !== n.reference.codeHash && (a.state = "disposed", this.release(a), this.instances.delete(r.id), a = void 0);
			let o = {
				compositionId: this.options.compositionId ?? e.id,
				mountId: this.options.mountId ?? null,
				actorId: t.id,
				componentId: r.id
			}, s = {
				...$t(r),
				...this.options.overrides?.(o, n.reference)
			};
			if (a) {
				a.properties.restore(s);
				continue;
			}
			let c = new x();
			c.name = `addon:${r.id}`, c.userData.addonDisplay = !0, this.object.add(c);
			let l = {
				target: o,
				reference: n.reference,
				properties: new ti(n.manifest, s),
				group: c,
				cleanups: [],
				state: "starting"
			};
			this.instances.set(r.id, l);
			try {
				if (!n.manifest.environments.includes(this.options.environment)) throw Error(`Addon ${n.manifest.displayName} does not support ${this.options.environment}`);
				for (let e of n.manifest.capabilities) if (Et(e, this.options.environment), !ad.has(e)) throw Error(`Addon capability provider unavailable: ${e}`);
				if (await Xu({
					...e,
					actors: [{
						...t,
						components: [r]
					}]
				}, { includeGeneric: !0 }), this.disposed || this.instances.get(r.id) !== l || !this.actor()?.components.some((e) => e.id === r.id)) continue;
				let a = Yu(n.reference.codeHash) ?? id[n.reference.codeHash];
				if (typeof a != "function") throw Error("Exact addon module is missing");
				let s = /* @__PURE__ */ new Map();
				if (l.behavior = a(Object.freeze({
					id: r.id,
					target: Object.freeze(o),
					environment: this.options.environment,
					get settings() {
						return l.properties.settings;
					},
					capability: (e) => {
						if (this.assertLive(l), !i.capabilities.includes(e)) throw Error(`Addon did not declare capability: ${e}`);
						return s.has(e) || s.set(e, ad.get(e)(this, l)), s.get(e);
					},
					guardAsync: (e, t) => {
						e.then((e) => {
							if (!this.disposed && l.state === "running") try {
								t(e);
							} catch (e) {
								this.fault(l, e);
							}
						}, (e) => {
							!this.disposed && l.state === "running" && this.fault(l, e);
						});
					}
				})), !l.behavior || typeof l.behavior != "object") throw Error("Invalid addon factory result");
				l.cleanups.push(l.properties.subscribe((e) => {
					try {
						l.behavior?.onPropertiesChanged?.(e);
					} catch (e) {
						this.fault(l, e);
					}
				})), l.behavior.onRegister?.(), l.state === "starting" && (l.state = "running");
			} catch (e) {
				this.fault(l, e);
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
			schema: Qr(e.properties.manifest),
			values: e.properties.values,
			revision: e.properties.revision,
			state: e.state,
			...e.error ? { error: e.error } : {}
		}));
	}
	change(e, t, n, r) {
		let i = this.instances.get(e.componentId);
		if (!i || Xr(i.target) !== Xr(e)) throw Error("Addon instance target not found");
		return this.assertLive(i), i.properties.apply(t, n, r, this.options.persist ? (t) => this.options.persist(e, t, i.reference) : void 0), this.list().find((t) => t.target.componentId === e.componentId);
	}
	synchronize(e, t) {
		let n = this.instances.get(e.componentId);
		if (!n || Xr(n.target) !== Xr(e)) throw Error("Exact addon instance not found");
		let r = {};
		for (let [e, i] of Object.entries(t)) {
			let t = n.properties.manifest.properties.find((t) => t.name === e);
			if (!t) throw Error("Unknown synchronized addon property");
			let a = t.storage === "runtime" ? "runtime" : "persistent";
			if (t.access === "read-write") Object.assign(r, $r(n.properties.manifest, { [e]: i }, a));
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
			this.instances.clear(), ud.delete(this);
		}
	}
	sceneAPI(e) {
		let t = (t) => {
			this.assertLive(e);
			let n = fd(this.options.document()).actors.get(t);
			return n ? Object.freeze({
				id: n.id,
				name: n.name,
				componentIds: Object.freeze(n.components.map((e) => e.id))
			}) : void 0;
		}, n = (e) => {
			let t = fd(this.options.document()), n = /* @__PURE__ */ new Set(), r = [e];
			for (let e = 0; e < r.length; e++) for (let i of t.children.get(r[e]) ?? []) n.has(i) || (n.add(i), r.push(i));
			return [...n];
		};
		return Object.freeze({
			actor: t,
			actors: () => this.options.document().actors.map((e) => t(e.id)),
			parent: (e) => {
				let n = this.options.document().actors.find((t) => t.id === e), r = n && vt(n).attachmentParent?.actorId;
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
			transform: (t) => (this.assertLive(e), structuredClone(this.options.transform?.(t) ?? Un(this.options.document(), t))),
			bounds: (t, r) => {
				this.assertLive(e);
				let i = [t, ...r ? n(t) : []], a = new Me();
				this.object.updateWorldMatrix(!0, !1);
				let o = this.object.matrixWorld.clone().invert();
				for (let e of i) for (let t of this.projections().get(e)?.values() ?? []) {
					t.object.updateWorldMatrix(!0, !0);
					for (let e of t.contentMeshes?.() ?? t.instancingMeshes(!0)) {
						if (e instanceof fe) {
							e.computeBoundingBox(), e.boundingBox && a.union(e.boundingBox.clone().applyMatrix4(new Ve().multiplyMatrices(o, e.matrixWorld)));
							continue;
						}
						if (e instanceof he && (e.computeBoundingBox(), e.boundingBox)) {
							a.union(e.boundingBox.clone().applyMatrix4(new Ve().multiplyMatrices(o, e.matrixWorld)));
							continue;
						}
						e.geometry.boundingBox || e.geometry.computeBoundingBox(), e.geometry.boundingBox && a.union(e.geometry.boundingBox.clone().applyMatrix4(new Ve().multiplyMatrices(o, e.matrixWorld)));
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
				let n = new at(1, 1, 1), r = new ke({
					transparent: !0,
					depthWrite: !1,
					side: 2
				}), i = new M(n, r);
				return t(i, (e) => {
					if (!sd(e.bounds.min) || !sd(e.bounds.max) || e.bounds.min.some((t, n) => t > e.bounds.max[n])) throw Error("Invalid display bounds");
					r.color.set(cd(e.color)), r.opacity = ld(e.opacity), i.position.set(...e.bounds.min.map((t, n) => (t + e.bounds.max[n]) / 2)), i.scale.set(...e.bounds.max.map((t, n) => Math.max(1e-6, t - e.bounds.min[n])));
				}, () => {
					n.dispose(), r.dispose();
				}, e);
			},
			line: (e) => {
				let n = new we(), r = new D({
					transparent: !0,
					depthWrite: !1
				}), i = new v(n, r);
				return t(i, (e) => {
					if (e.points.length < 2 || e.points.length > 1e4 || e.points.some((e) => !sd(e))) throw Error("Invalid display line");
					r.color.set(cd(e.color)), r.opacity = ld(e.opacity), n.setFromPoints(e.points.map((e) => new j(...e)));
				}, () => {
					n.dispose(), r.dispose();
				}, e);
			},
			text: (e) => {
				let n = document.createElement("canvas");
				n.width = 1024, n.height = 128;
				let r = n.getContext("2d");
				if (!r) throw Error("Text canvas unavailable");
				let i = new lt(n), a = new _e({
					map: i,
					transparent: !0,
					depthWrite: !1
				}), o = new ve(a), s = "";
				return t(o, (e) => {
					if (typeof e.text != "string" || e.text.length > 4096 || !sd(e.positionMeters) || !Number.isFinite(e.heightMeters) || e.heightMeters <= 0 || e.heightMeters > 1e4) throw Error("Invalid display text");
					cd(e.color);
					let t = JSON.stringify([e.text, e.color]);
					s !== t && (r.clearRect(0, 0, 1024, 128), r.font = "56px sans-serif", r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = e.color, r.fillText(e.text, 512, 64, 1e3), i.needsUpdate = !0, s = t), o.position.set(...e.positionMeters), o.scale.set(e.heightMeters * 8, e.heightMeters, 1);
				}, () => {
					i.dispose(), a.dispose();
				}, e);
			}
		});
	}
};
od("scene.read", (e, t) => e.sceneAPI(t)), od("display.objects", (e, t) => e.displayAPI(t)), od("properties.control", (e, t) => e.propertiesAPI(t)), od("document.edit", (e, t) => Object.freeze({ edit: (n) => e.change(t.target, n, "persistent", t.properties.revision) }));
//#endregion
//#region src/render/ThreeRenderAdapter.ts
function md(e) {
	let t = e.components.filter(N).find((t) => t.id === e.rootComponentId);
	if (!t) throw Error(`Actor ${e.id} has no root component ${e.rootComponentId}.`);
	return t;
}
var hd = class {
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
		this.staticMeshResources = e, this.resolveMaterial = t, this.skeletalMeshResources = n, this.resolveAnimationClip = r, this.addonOptions = a, this.animationWorld = i ?? new nu("asset-preview", `editor-preview-${gd++}`), i || this.animationWorld.start();
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
		let s, c = (t) => {
			let n = this.addonOptions.document().actors.find((e) => e.id === t.id) ?? t;
			!s && n.components.some((e) => e.type === "TestScript" && Xt(e).manifest.sdkVersion === 5) && (s = new pd(this.addonOptions, e.id, r.object, () => this.projectedActors));
		};
		c(e);
		let l = {
			...r,
			get addons() {
				return s;
			},
			get viewDependentInstancing() {
				return r.viewDependentInstancing || (s?.active ?? !1);
			},
			get ready() {
				return Promise.all([r.ready, s?.ready]).then(() => {});
			},
			update: (e) => {
				r.update(e), c(e), s?.update();
			},
			prepareFrame: (e, t) => {
				r.prepareFrame(e, t), s?.frame(e, t);
			},
			dispose: () => {
				s?.dispose(), r.dispose(), o();
			}
		};
		return a.set(i, l), l;
	}
	projectActorContent(e, t = !1) {
		let n = e.components.filter(N);
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
				for (let t of e.components.filter(N)) i.get(t.id)?.update(a(e, t));
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
			getBounds: () => c.reduce((e, t) => e.union(t.getBounds()), new Me()),
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
		let n = md(e), r = dn.validate(n.type, n.typeVersion, n, "runtime");
		if (r.length > 0) throw Error(`Invalid ${n.type} component: ${JSON.stringify(r)}`);
		let i = n.type === "PrimitiveCube" ? n.shape ?? "Cube" : n.type === "StaticMesh" && !n.meshAsset ? n.shape ?? null : null, a = i ? Iu(i) : n.type === "Camera" || n.type === "PlayerStart" ? new c(.4, .8, 8) : n.type.endsWith("Light") ? new ee(.25, 12, 8) : new at(n.type === "SceneNode" ? .25 : 1, n.type === "SceneNode" ? .25 : 1, n.type === "SceneNode" ? .25 : 1), o = "color" in n ? n.color : n.type === "Camera" ? 6737151 : n.type === "PlayerStart" ? 5627255 : 10066329, s = new Ue({
			color: o,
			roughness: .65,
			...i === "Plane" ? { side: 2 } : {},
			wireframe: n.type !== "PrimitiveCube" && n.type !== "StaticMesh"
		}), l = new M(a, s);
		n.type === "TwinMetadata" && (l.visible = !1), n.type === "StaticMesh" && !n.meshAsset && !i && (l.visible = !1);
		let u = new x();
		this.componentRoots.add(u);
		let d = n.localTransform;
		u.name = e.name, u.userData = {
			actorId: e.id,
			componentId: n.id
		}, u.position.fromArray(d.positionMeters), u.quaternion.copy(new Be(...d.rotationXyzw)), u.scale.fromArray(d.scale), u.add(l), (n.type === "TwinMetadata" || n.type === "SceneNode") && (u.remove(l), a.dispose(), yd(l)), [
			"PrimitiveCube",
			"StaticMesh",
			"SkeletalMesh"
		].includes(n.type) && Qe(u);
		let f = n.type === "PointLight" || n.type === "SpotLight" ? Hu(n) : null, p = f ?? (n.type === "DirectionalLight" || n.type === "PlayerStart" || n.type === "SceneNode" && t ? Bu(n.type) : null);
		p && (l.visible = !1, u.add(p.object));
		let m = !1, h = !0, g = !0, _ = n, v = !0, b = null, S = null, w = null, te = [], T = null, E = null, ne = null, re = null, ie = new Me().setFromObject(u), ae = new Ve(), oe = u.position.clone(), se = u.quaternion.clone(), ce = u.scale.clone(), ue = new Ve(), de, fe = !0, pe = -1, me = /* @__PURE__ */ new Map(), he = "", ge = 0, _e = !1, D = null;
		n.type === "DirectionalLight" && (D = new C(n.color, n.intensity), D.castShadow = n.castShadow), n.type === "PointLight" && (D = new le(n.color, n.intensity, n.rangeMeters), D.castShadow = n.castShadow), n.type === "SpotLight" && (D = new y(n.color, n.intensity, n.rangeMeters, n.outerConeDegrees * Math.PI / 180), D.penumbra = Math.max(0, Math.min(1, 1 - n.innerConeDegrees / n.outerConeDegrees)), D.castShadow = n.castShadow), D && (D.position.set(0, 0, 0), u.add(D), (D instanceof C || D instanceof y) && (D.target.position.fromArray(Dn([
			1,
			0,
			0
		])), u.add(D.target)));
		let ve = () => {
			p?.setSelected(m), u.userData.selectionFrameId = pe;
		}, ye = async (e, t) => {
			if (e.type !== "StaticMesh" && e.type !== "SkeletalMesh" || !w || !this.resolveMaterial) return !1;
			let n = [...(w.userData.defaultMaterialSlots ?? []).filter((t) => !e.materialOverrides.some((e) => e.slotId === t.slotId)), ...e.materialOverrides], r = JSON.stringify(n), i = t === void 0 ? null : new Set(typeof t == "string" ? [t] : t), a = t !== void 0 && r === he && !_e, o = a ? n.filter((e) => i.has(e.materialAsset.assetId) && e.materialAsset.revisionPolicy === "live") : n;
			if (t !== void 0 && !n.some((e) => i.has(e.materialAsset.assetId) && e.materialAsset.revisionPolicy === "live") || t === void 0 && r === he && !_e) return !1;
			let s = ++ge;
			_e = !0;
			let c = [];
			try {
				for (let e of o) for (let t of vd(w, e.slotId)) {
					let n = await this.resolveMaterial(e.materialAsset, { tintOverrides: e.tintOverrides });
					if (c.push({
						target: t,
						material: n
					}), !v || s !== ge) return !1;
				}
				a || xd(w, me);
				for (let e of c) yd(e.target), Nu(e.target, e.material);
				return c.length = 0, he = r, delete u.userData.materialOverrideError, ve(), !0;
			} finally {
				c.forEach((e) => e.material.dispose()), s === ge && (_e = !1);
			}
		}, O = (e) => {
			E && pe !== e && (E.root.updateWorldMatrix(!0, !0), E.skinnedMeshes.forEach((t) => {
				t.skeleton.update(), t.computeBoundingBox(), t.computeBoundingSphere(), t.userData.poseFrameId = e;
			}), u.updateWorldMatrix(!0, !0), ie = new Me().setFromObject(u), pe = e, u.userData.evaluatedFrameId = e, u.userData.boundsFrameId = e);
		}, k = n.type === "StaticMesh" && n.meshAsset && this.staticMeshResources ? this.staticMeshResources.acquire(n.meshAsset).then(async (e) => {
			if (!v) {
				e.release();
				return;
			}
			b = e, w = e.instantiate();
			let t = [];
			w.traverse((e) => {
				e instanceof M && t.push(e);
			}), te = t;
			let n = w.userData.staticMeshLod;
			n && (T = new Lu(w, n.distanceMeters, n.hysteresis)), bd(w, me), u.remove(l), a.dispose(), s.dispose(), u.add(w), fe = !0, u.userData.assetId = e.assetId, u.userData.assetRevisionId = e.revisionId, await ye(_), ve();
		}).catch((e) => {
			u.userData.assetResourceError = e instanceof Error ? e.message : String(e);
		}) : Promise.resolve(), be = n.type === "SkeletalMesh" && this.skeletalMeshResources ? this.skeletalMeshResources.acquire(n.meshAsset).then(async (e) => {
			if (!v) {
				e.release();
				return;
			}
			if (S = e, n.playback.clipAsset) {
				if (!this.resolveAnimationClip) throw Error("Animation clip resolver is unavailable.");
				let t = await this.resolveAnimationClip(n);
				if (!t) throw Error(`AnimationSequence ${n.playback.clipAsset.assetId} did not resolve.`);
				let r = await this.skeletalMeshResources.playbackAsset(e, t);
				if (!v) return;
				ne = this.animationWorld.create(r, n.id, {
					clipIndex: t.clipIndex,
					rate: n.playback.rate,
					initialTimeSeconds: n.playback.initialTimeSeconds,
					loop: n.playback.loop,
					playing: n.playback.playing
				}), E = ne.instance, u.userData.animationClip = {
					assetId: t.animationAssetId,
					revisionId: t.animationRevisionId,
					clipIndex: t.clipIndex,
					clipName: t.clipName
				}, u.userData.rootMotionPolicy = {
					mode: t.rootMotionMode,
					sourceMotionKind: t.sourceMotionKind,
					strategy: t.rootMotionStrategy,
					appliesActorMotion: t.appliesActorMotion
				};
			} else E = e.asset.instantiate(), u.userData.animationClip = null, u.userData.rootMotionPolicy = null;
			if (w = E.root, e.attachmentProfile) {
				if (e.attachmentProfile.skeletonAssetId !== n.skinBinding.skeletonAsset.assetId || e.attachmentProfile.sourceSkeletonAssetId !== n.sourceBinding.sourceSkeletonAssetId || e.attachmentProfile.bindingSignature !== n.skinBinding.bindingSignature || e.attachmentProfile.skinIndex !== n.skinBinding.skinIndex) throw Error(`Skeletal attachment profile does not match Component ${n.id}.`);
				re = new Gu(E, e.attachmentProfile);
			}
			_d(w, e.materialSlotIds), bd(w, me), u.remove(l), a.dispose(), s.dispose(), u.add(w), u.userData.assetId = e.assetId, u.userData.assetRevisionId = e.revisionId, await ye(_), pe = -1, O(0), ve();
		}).catch((e) => {
			u.userData.assetResourceError = e instanceof Error ? e.message : String(e);
		}) : Promise.resolve(), xe = n.type === "StaticMesh" && !n.meshAsset && i && n.materialOverrides[0] && this.resolveMaterial ? this.resolveMaterial(n.materialOverrides[0].materialAsset, { tintOverrides: n.materialOverrides[0].tintOverrides }).then((e) => {
			if (!v) {
				e.dispose();
				return;
			}
			Nu(l, e), s.dispose(), s = e, ve();
		}).catch((e) => {
			u.userData.materialOverrideError = e instanceof Error ? e.message : String(e);
		}) : Promise.resolve(), Se = Promise.all([
			k,
			be,
			xe
		]).then(() => void 0);
		return {
			get viewDependentInstancing() {
				return !!T || _.type === "SkeletalMesh" || _.type === "StaticMesh" && !!_.meshAsset && !w;
			},
			actorId: e.id,
			object: u,
			refreshMaterial: async (e) => {
				if (await Se, !v) return !1;
				try {
					return await ye(_, e);
				} catch (e) {
					throw u.userData.materialOverrideError = e instanceof Error ? e.message : String(e), e;
				}
			},
			update: (t) => {
				if (t.id !== e.id) throw Error(`Projection ${e.id} cannot display Actor ${t.id}.`);
				let n = md(t);
				_ = n;
				let r = n.localTransform;
				u.position.fromArray(r.positionMeters), u.quaternion.fromArray(r.rotationXyzw), u.scale.fromArray(r.scale), u.updateMatrixWorld(), D && (n.type === "DirectionalLight" || n.type === "PointLight" || n.type === "SpotLight") && (D.color.setHex(n.color), D.intensity = n.intensity, D.castShadow = n.castShadow, (D instanceof le || D instanceof y) && (D.distance = n.rangeMeters), D instanceof y && (D.angle = n.outerConeDegrees * Math.PI / 180, D.penumbra = Math.max(0, Math.min(1, 1 - n.innerConeDegrees / n.outerConeDegrees)))), (n.type === "PointLight" || n.type === "SpotLight") && f?.update(n), ye(n).catch((e) => {
					u.userData.materialOverrideError = e instanceof Error ? e.message : String(e);
				});
			},
			setSelected: (e) => {
				m !== e && (m = e, ve());
			},
			setHelpersVisible: (e) => {
				h = e, p && (p.object.visible = e), n.type === "Camera" && (l.visible = e && g);
			},
			setIconPresentation: (e, t) => {
				if (!Wu(t)) throw Error("아이콘 크기는 0.25~4배 사이여야 합니다.");
				g = e, p?.setIconPresentation(e, t), n.type === "Camera" && (l.visible = e && h, l.scale.setScalar(t), l.updateMatrixWorld(!0)), fe = !0;
			},
			...p ? { prepareHelperView: (e) => p.prepareView(e) } : {},
			prepareFrame: (e, t) => {
				if (!Number.isInteger(e) || e < 0) throw Error("Render frame ID must be a non-negative integer.");
				if (!Number.isFinite(t) || t < 0) throw Error("Render frame delta must be finite and non-negative.");
				if (pe !== e) {
					if (this.animationWorld.advanceRenderFrame(e, t), E) O(e);
					else {
						if (u.parent && !this.componentRoots.has(u.parent) && u.parent.updateWorldMatrix(!0, !1), (de !== u.parent || !oe.equals(u.position) || !se.equals(u.quaternion) || !ce.equals(u.scale) || u.parent && !ue.equals(u.parent.matrixWorld)) && (u.updateWorldMatrix(!0, !1), oe.copy(u.position), se.copy(u.quaternion), ce.copy(u.scale), de = u.parent, u.parent && ue.copy(u.parent.matrixWorld)), fe || !ae.equals(u.matrixWorld)) {
							u.updateMatrixWorld(!0), ie.makeEmpty();
							for (let e of u.children) !this.componentRoots.has(e) && !e.userData.addonDisplay && ie.union(new Me().setFromObject(e));
							ae.copy(u.matrixWorld), fe = !1;
						}
						pe = e, u.userData.evaluatedFrameId = e, u.userData.boundsFrameId = e;
					}
				}
			},
			getBounds: () => (u.userData.boundsFrameId = pe, n.type === "SceneNode" ? new Me() : f?.getBounds() ?? ie.clone()),
			prepareView: (e) => (p?.prepareView(e), T?.apply(e) ?? (() => void 0)),
			instancingMeshes: (e = !1) => {
				if (!v || m || !w || _.type !== "StaticMesh" || _e || u.userData.materialOverrideError || _.materialOverrides.length > 0 && !te.every((e) => !Array.isArray(e.material) && zu(e.material) !== void 0)) return [];
				if (e) return te;
				let t = [];
				return w.traverseVisible((e) => {
					e instanceof M && t.push(e);
				}), t;
			},
			contentMeshes: () => {
				if (!v) return [];
				if (_.type === "PrimitiveCube") return [l];
				if (_.type === "StaticMesh") return w ? te : l.visible ? [l] : [];
				if (_.type === "SkeletalMesh" && E) {
					let e = [];
					return E.root.traverse((t) => {
						t instanceof M && e.push(t);
					}), e;
				}
				return [];
			},
			intersect: (e) => {
				u.userData.pickingFrameId = pe;
				let t = e.camera ? T?.apply(e.camera) : void 0, n = e.layers.mask;
				p?.object.visible && e.layers.enable(1);
				try {
					let t = [];
					return u.traverseVisible((e) => {
						e instanceof M && t.push(e);
					}), e.intersectObjects(t, !1);
				} finally {
					e.layers.mask = n, t?.();
				}
			},
			attachmentAnchor: (e) => {
				if (!re) {
					if (E) throw Error(`Skeletal attachment metadata is unavailable for Component ${n.id}.`);
					return null;
				}
				let t = re.profile;
				if (e.componentId !== n.id || e.skeletonAssetId !== t.skeletonAssetId || e.sourceSkeletonAssetId !== t.sourceSkeletonAssetId || e.bindingSignature !== t.bindingSignature) throw Error(`Skeletal attachment ${e.targetId} does not match Component ${n.id}.`);
				return re.anchor(e.kind, e.targetId);
			},
			ready: Se,
			dispose: () => {
				v = !1, ge += 1, u.children.includes(l) && (a.dispose(), yd(l)), w && !E && (Zc(w), u.remove(w)), E && u.remove(E.root), ne ? ne.dispose() : E?.dispose(), me.forEach((e) => (Array.isArray(e) ? e : [e]).forEach((e) => e.dispose())), me.clear(), b?.release(), S?.release(), p?.dispose(), D && u.remove(D), u.remove(l);
			}
		};
	}
}, gd = 1;
function _d(e, t) {
	let n = 0;
	e.traverse((e) => {
		e instanceof M && (e.userData.materialSlotId = t[n] ?? `mesh:0/primitive:${n}`, n += 1);
	});
}
function vd(e, t) {
	let n = [], r = 0;
	return e.traverse((e) => {
		if (!(e instanceof M)) return;
		let i = `mesh:0/primitive:${r}`, a = typeof e.userData.materialSlotId == "string" ? e.userData.materialSlotId : i;
		e.userData.materialSlotId = a, a === t && n.push(e), r += 1;
	}), n;
}
function yd(e) {
	(Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => e.dispose());
}
function bd(e, t) {
	e.traverse((e) => {
		e instanceof M && typeof e.userData.materialSlotId == "string" && t.set(e.uuid, Array.isArray(e.material) ? e.material.map((e) => e.clone()) : e.material.clone());
	});
}
function xd(e, t) {
	e.traverse((e) => {
		if (!(e instanceof M) || typeof e.userData.materialSlotId != "string") return;
		let n = t.get(e.uuid);
		n && (yd(e), e.material = Array.isArray(n) ? n.map((e) => e.clone()) : n.clone());
	});
}
var Sd = {
	schemaVersion: 1,
	policyId: "dtwe-capacity-v1",
	validation: "initial-guardrails-not-device-capacity",
	import: {
		initialSourceAssets: 3e3,
		sourceAssetStep: 1e3,
		sourceAssets: 1e4,
		payloadRecords: 1e4,
		payloadFiles: 2e4,
		transferFiles: 20002,
		progressUnits: 3e4,
		placements: 3e4,
		singlePayloadBytes: 268435456,
		payloadBytes: 1073741824,
		inventoryBytes: 33554432,
		reportBytes: 16777216
	},
	storage: {
		assets: 4e4,
		revisions: 8e4,
		blobs: 4e4,
		desktopEntries: 4e4,
		retainedBlobBytes: 1073741824,
		priorVersions: 32,
		historyMetadataBytes: 33554432
	},
	backup: {
		archiveBytes: 2147483648,
		entries: 6e4
	},
	player: {
		templateBytes: 536870912,
		archiveBytes: 2147483648
	}
};
//#endregion
//#region src/assets/CapacityPolicy.ts
if (Sd.schemaVersion !== 1 || Sd.policyId !== "dtwe-capacity-v1") throw Error("지원하지 않는 에셋 용량 정책");
for (let e of [
	Sd.import,
	Sd.storage,
	Sd.backup,
	Sd.player
]) {
	if (Object.values(e).some((e) => !Number.isSafeInteger(e) || e <= 0)) throw Error("잘못된 에셋 용량 정책");
	Object.freeze(e);
}
if (Sd.import.initialSourceAssets > Sd.import.sourceAssets || Sd.import.sourceAssetStep > Sd.import.sourceAssets || Sd.import.payloadRecords < Sd.import.sourceAssets || Sd.import.payloadFiles < Sd.import.payloadRecords * 2 || Sd.import.transferFiles < Sd.import.payloadFiles + 2 || Sd.import.progressUnits < Sd.import.sourceAssets * 3 || Sd.backup.entries >= 65535) throw Error("잘못된 자동 가져오기 용량 정책");
var Cd = Object.freeze(Sd), wd = Cd.import;
wd.payloadBytes + wd.inventoryBytes + wd.reportBytes;
//#endregion
//#region src/ue-import/PreviewGeometryResidency.ts
var Td = /* @__PURE__ */ new WeakMap(), Ed = /* @__PURE__ */ new WeakSet();
function Dd(e) {
	let t = /* @__PURE__ */ new Set();
	return e.traverse((e) => {
		e instanceof M && t.add(e.geometry);
	}), t;
}
function Od(e) {
	return [...Dd(e)].some((e) => !!Td.get(e));
}
function kd(e) {
	let t = Dd(e), n = !1;
	return t.forEach((e) => {
		Td.set(e, (Td.get(e) ?? 0) + 1), Ed.delete(e);
	}), () => {
		n || (n = !0, t.forEach((e) => Td.set(e, Td.get(e) - 1)));
	};
}
function Ad(e) {
	for (let t of e) for (let e of Dd(t)) !Td.get(e) && !Ed.has(e) && (e.dispose(), Ed.add(e));
}
//#endregion
//#region src/ue-import/staticPreviewMath.ts
var jd = new Ve().set(0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1), Md = 134217728, Nd = [
	128,
	256,
	512,
	1024,
	2048,
	4096,
	8192
].map((e) => e * 1048576);
function Pd(e) {
	if (e !== 0 && !Nd.includes(e)) throw Error("지원하지 않는 텍스처 표시 예산입니다.");
}
var Fd = /* @__PURE__ */ new Set([
	"KHR_materials_emissive_strength",
	"KHR_materials_specular",
	"KHR_materials_unlit",
	"KHR_texture_transform",
	"KHR_materials_ior"
]), Id = /* @__PURE__ */ new WeakMap();
function Ld(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Invalid appearance object");
	return e;
}
function Rd(e) {
	if (e === void 0) return [];
	if (!Array.isArray(e)) throw Error("Invalid appearance array");
	return e;
}
function zd(e, t) {
	if (!Number.isSafeInteger(e) || e < 0 || e >= t) throw Error("Invalid appearance index");
	return e;
}
function Bd(e) {
	if (!e || typeof e != "object") return;
	if (Array.isArray(e)) {
		e.forEach(Bd);
		return;
	}
	let t = Ld(e);
	if (t.extensions) {
		for (let e of Object.keys(Ld(t.extensions))) if (!Fd.has(e)) throw Error(`Unsupported preview appearance extension: ${e}`);
	}
	Object.entries(t).filter(([e]) => e !== "extras").forEach(([, e]) => Bd(e));
}
function Vd(e) {
	if (ya(e)) {
		let t = [], n = [];
		for (let r of Sa(e).payload.levels) {
			let e = Vd(r), i = t.length;
			t.push(...e.dimensions), n.push(...e.uses.map((e) => ({
				...e,
				source: e.source + i
			})));
		}
		return {
			dimensions: t,
			uses: n
		};
	}
	L(e);
	let t = new DataView(e.buffer, e.byteOffset, e.byteLength), n = t.getUint32(12, !0), r = Ld(JSON.parse(new TextDecoder().decode(e.subarray(20, 20 + n))));
	Bd(r);
	let i = /* @__PURE__ */ new Uint8Array();
	for (let r = 20 + n; r < e.length;) {
		let n = t.getUint32(r, !0);
		t.getUint32(r + 4, !0) === 5130562 && (i = e.subarray(r + 8, r + 8 + n)), r += 8 + n;
	}
	let a = Rd(r.bufferViews), o = Rd(r.images), s = Rd(r.textures), c = o.map((e) => {
		let t = Ld(e);
		if ("uri" in t || typeof t.mimeType != "string") throw Error("Only embedded preview images are supported");
		let n = Ld(a[zd(t.bufferView, a.length)]), r = Number(n.byteOffset ?? 0), o = Number(n.byteLength);
		return R(i.subarray(r, r + o), t.mimeType);
	}), l = Rd(r.materials), u = l.map((e) => {
		let t = Ld(e), n = t.pbrMetallicRoughness ? Ld(t.pbrMetallicRoughness) : {}, r = t.extensions ? Ld(t.extensions) : {}, i = r.KHR_materials_specular ? Ld(r.KHR_materials_specular) : {};
		return [
			[n.baseColorTexture, "baseColor"],
			[n.metallicRoughnessTexture, "metallicRoughness"],
			[n.metallicRoughnessTexture, "metallicRoughness"],
			[t.normalTexture, "normal"],
			[t.occlusionTexture, "occlusion"],
			[t.emissiveTexture, "emissive"],
			[i.specularTexture, "specular"],
			[i.specularColorTexture, "specular"]
		].filter(([e]) => e !== void 0).map(([e, t]) => {
			let n = Ld(e), r = Ld(s[zd(n.index, s.length)]);
			if (r.extensions) throw Error("Texture source extensions are not supported in this preview");
			let i = zd(r.source, o.length), a = n.extensions ? Ld(n.extensions) : {}, c = (a.KHR_texture_transform ? Ld(a.KHR_texture_transform) : {}).texCoord ?? n.texCoord ?? 0;
			if (!Number.isSafeInteger(c) || c < 0 || c > 3) throw Error("Unsupported texture UV channel");
			return {
				source: i,
				texCoord: c,
				kind: t
			};
		});
	});
	for (let e of Rd(r.meshes)) for (let t of Rd(Ld(e).primitives)) {
		let e = Ld(t);
		if (e.material === void 0) continue;
		let n = Ld(e.attributes);
		for (let t of u[zd(e.material, l.length)]) {
			let e = n[`TEXCOORD_${t.texCoord}`];
			if (Ld(Rd(r.accessors)[zd(e, Rd(r.accessors).length)]).type !== "VEC2") throw Error(`Missing valid UV${t.texCoord} for texture`);
		}
	}
	return {
		dimensions: c,
		uses: u.flat()
	};
}
function Hd(e, t) {
	t && ja(t);
	let n = e.uses.filter((e) => !t || t.maps.includes(e.kind)), r = new Set(n.map((e) => e.source)), i = e.dimensions.map((e, r) => {
		let i = t ? Math.min(...n.filter((e) => e.source === r).map((e) => Ma(t, e.kind))) : Infinity, a = Math.min(1, i / Math.max(e.width, e.height));
		return {
			width: Math.max(1, Math.round(e.width * a)),
			height: Math.max(1, Math.round(e.height * a))
		};
	}), a = i.reduce((e, n, i) => e + (!t || r.has(i) ? n.width * n.height * 4 : 0), 0), o = n.reduce((e, t) => {
		let { width: n, height: r } = i[t.source], a = 1 + Math.floor(Math.log2(Math.max(n, r)));
		for (let t = 0; t < a; t++) e += n * r * 4, n = Math.max(1, Math.floor(n / 2)), r = Math.max(1, Math.floor(r / 2));
		return e;
	}, 0);
	return {
		decodedBytes: a,
		mipViewBytes: o,
		reservedBytes: a + o,
		imageCount: t ? r.size : i.length,
		textureViewCount: n.length
	};
}
function Ud(e) {
	return Hd(Vd(e));
}
function Wd(e, t = []) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = new Set(t);
	e.flatMap((e) => [e, ...Id.get(e) ?? []]).forEach((e) => e.traverse((e) => {
		e instanceof M && (r.add(e.geometry), (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
			n.add(e), Object.values(e).forEach((e) => {
				e instanceof ae && i.add(e);
			});
		}));
	}));
	let a = /* @__PURE__ */ new Set();
	i.forEach((e) => {
		a.add(e.image), e.dispose();
	}), a.forEach((e) => {
		e && typeof e == "object" && "close" in e && typeof e.close == "function" && e.close();
	}), n.forEach((e) => e.dispose()), r.forEach((e) => e.dispose());
}
async function Gd(e, t = Md, n = !0) {
	Pd(t);
	let r = Ud(e);
	if (t === 0 && (await Ns(), t = Ls(r.reservedBytes)), r.reservedBytes > t) throw Error("Preview texture budget exceeded");
	if (ya(e)) {
		let { payload: r } = Sa(e), i = new x();
		i.userData.staticMeshLod = {
			distanceMeters: r.distanceMeters,
			hysteresis: r.hysteresis
		};
		try {
			for (let e of r.levels) i.add(await Gd(e, t, n));
			return i.children[1].visible = !1, i;
		} catch (e) {
			throw Wd([i]), e;
		}
	}
	let i = [], a = [], o = [], s = !1, c = new Ws();
	c.register((e) => ({
		name: "U01_BOUNDED_APPEARANCE",
		loadTexture: (t) => {
			let n = e.loadTexture(t).then((e) => (e ? a.push(e) : s = !0, e));
			return o.push(n), n;
		},
		loadMesh: (t) => {
			let n = e.loadMesh(t).then((e) => (i.push(e), e));
			return o.push(n), n;
		}
	}));
	try {
		let t = await c.parseAsync(e.slice().buffer, "");
		if (s) throw Error("Embedded texture decode failed; gray appearance retained");
		t.scene.traverse((e) => {
			if (!(e instanceof M)) return;
			let n = t.parser.associations.get(e);
			n?.meshes !== void 0 && n.primitives !== void 0 && (e.userData.materialSlotId = `mesh:${n.meshes}/primitive:${n.primitives}`);
		});
		let r = new x();
		return r.matrixAutoUpdate = !1, n && r.matrix.copy(jd), r.add(t.scene), r.updateMatrixWorld(!0), Id.set(r, [...t.scenes.filter((e) => e !== t.scene), ...i]), r;
	} catch (e) {
		throw await Promise.allSettled(o), Wd(i, a), e;
	}
}
//#endregion
//#region src/ue-import/PreviewTemplateResidency.ts
var Kd = /* @__PURE__ */ new WeakMap();
function qd(e) {
	let t = Kd.get(e);
	return t || (t = {
		epoch: 0,
		leases: /* @__PURE__ */ new Map(),
		pending: /* @__PURE__ */ new Map()
	}, Kd.set(e, t)), t;
}
async function Jd(e, t, n, r) {
	let i = qd(e);
	i.leases.set(t, (i.leases.get(t) ?? 0) + 1);
	let a = !1, o = () => {
		a || (a = !0, i.leases.set(t, i.leases.get(t) - 1));
	};
	try {
		let a = e.get(t);
		if (!a) {
			if (!n) throw Error("Missing validated preview payload");
			let o = i.pending.get(t);
			if (!o) {
				let a = i.epoch;
				o = r(n).then((n) => {
					if (a !== i.epoch) throw Wd([n]), Error("Retired preview decode");
					return e.set(t, n), n;
				}).finally(() => {
					i.pending.get(t) === o && i.pending.delete(t);
				}), i.pending.set(t, o);
			}
			a = await o;
		}
		return {
			object: a,
			release: o
		};
	} catch (e) {
		throw o(), e;
	}
}
function Yd(e, t) {
	let n = qd(e);
	for (let [r, i] of e) !n.leases.get(r) && !Od(i) && (t.has(r) ? (e.delete(r), Wd([i])) : Ad([i]));
}
function Xd(e) {
	let t = qd(e);
	t.epoch++, t.pending.clear(), Wd([...e.values()]), e.clear();
}
Uint32Array.from({ length: 256 }, (e, t) => {
	for (let e = 0; e < 8; e++) t = t >>> 1 ^ (t & 1 ? 3988292384 : 0);
	return t >>> 0;
});
var Zd = [{
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
}], Qd = class extends Error {
	code;
	affectedIds;
	materialOutcome;
	constructor(e, t, n = [], r = null) {
		super(t), this.code = e, this.affectedIds = n, this.materialOutcome = r, this.name = "UEPackageImportError";
	}
};
function $d(e, t) {
	let n = nf(t.bones, "skeleton.bones"), r = /* @__PURE__ */ new Map(), i = n.map((t) => {
		let n = rf(t.id, "bone.id");
		return r.has(n) && of("identity", `Skeleton ${e} has duplicate bone ${n}.`, [e, n]), r.set(n, t), {
			id: n,
			name: rf(t.name, "bone.name"),
			parentId: t.parentId === null ? null : rf(t.parentId, "bone.parentId"),
			restLocal: ef(t.restLocal, "bone.restLocal")
		};
	});
	for (let t of i) t.parentId !== null && !r.has(t.parentId) && of("identity", `Skeleton ${e} bone ${t.id} has an unknown parent.`, [e, t.id]);
	for (let t of i) {
		let n = /* @__PURE__ */ new Set(), r = t;
		for (; r?.parentId;) n.has(r.id) && of("identity", `Skeleton ${e} bone tree contains a cycle.`, [e, t.id]), n.add(r.id), r = i.find((e) => e.id === r.parentId);
	}
	let a = /* @__PURE__ */ new Set();
	return {
		sourceAssetId: e,
		bones: i,
		sockets: nf(t.sockets, "skeleton.sockets").map((t) => {
			let n = rf(t.id, "socket.id"), i = rf(t.boneId, "socket.boneId");
			return a.has(n) && of("identity", `Skeleton ${e} has duplicate socket ${n}.`, [e, n]), a.add(n), r.has(i) || of("identity", `Skeleton ${e} socket ${n} references an unknown bone.`, [
				e,
				n,
				i
			]), {
				id: n,
				name: rf(t.name, "socket.name"),
				boneId: i,
				transform: ef(t.transform, "socket.transform")
			};
		})
	};
}
function ef(e, t) {
	let n = tf(e, t);
	return {
		position: af(n.position, 3, `${t}.position`),
		rotation: af(n.rotation, 4, `${t}.rotation`),
		scale: af(n.scale, 3, `${t}.scale`)
	};
}
function tf(e, t) {
	return (typeof e != "object" || !e || Array.isArray(e)) && of("json", `${t} must be an object.`), e;
}
function nf(e, t) {
	return Array.isArray(e) || of("json", `${t} must be an array.`), e.map((e, n) => tf(e, `${t}[${n}]`));
}
function rf(e, t) {
	return (typeof e != "string" || !e) && of("json", `${t} must be a non-empty string.`), e;
}
function af(e, t, n) {
	return (!Array.isArray(e) || e.length !== t || !e.every(Number.isFinite)) && of("json", `${n} must contain ${t} finite numbers.`), e;
}
function of(e, t, n = [], r = null) {
	throw new Qd(e, t, n, r);
}
//#endregion
//#region src/prefab/PrefabDocument.ts
function sf(e) {
	return e.type === "PrimitiveCube" ? {
		...e,
		type: "StaticMesh",
		shape: e.shape ?? "Cube",
		meshAsset: null,
		materialOverrides: []
	} : e;
}
function cf(e) {
	return {
		...e,
		actors: e.actors.map((e) => ({
			...e,
			components: e.components.map(sf)
		}))
	};
}
function lf(e) {
	if (!e || typeof e != "object" || !Array.isArray(e.actors) || !Array.isArray(e.rootActorLocalIds) || !e.rootActorLocalIds.length) throw Error("Invalid Prefab template/root metadata.");
	if (Ha({
		schemaVersion: 2,
		kind: "Scene",
		coordinateSystem: "RH_Y_UP_METERS_V1",
		id: "prefab-validation",
		actors: e.actors,
		authoring: {
			folders: [],
			actorFolders: []
		}
	}), e.schemaVersion !== 1 || e.kind !== "Prefab" || e.actors.length === 0) throw Error("Unsupported or empty Prefab document.");
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let r of e.actors) {
		if (gn(r), t.has(r.id)) throw Error(`Duplicate Prefab Actor local ID ${r.id}.`);
		t.add(r.id);
		for (let e of r.components) {
			if (n.has(e.id)) throw Error(`Duplicate Prefab Component local ID ${e.id}.`);
			n.add(e.id);
		}
		if (!r.components.some(({ id: e }) => e === r.rootComponentId)) throw Error(`Prefab Actor ${r.id} has no root Component.`);
	}
	if (Vn({
		schemaVersion: 2,
		kind: "Scene",
		coordinateSystem: "RH_Y_UP_METERS_V1",
		id: "prefab-validation",
		actors: e.actors,
		authoring: {
			folders: [],
			actorFolders: []
		}
	}), e.rootActorLocalIds.some((e) => !t.has(e))) throw Error("Prefab root local ID is missing.");
	for (let r of e.actors) for (let e of r.components) if (N(e) && e.attachmentParent && (!t.has(e.attachmentParent.actorId) || !n.has(e.attachmentParent.componentId))) throw Error("Prefab attachment must stay inside its template.");
}
function uf(e, t, n, r) {
	return e.actors.map((e) => {
		let i = t[e.id];
		if (!i) throw Error(`Missing Actor mapping ${e.id}.`);
		return {
			...structuredClone(e),
			id: i,
			rootComponentId: n[e.rootComponentId],
			components: e.components.map((a) => {
				let o = n[a.id];
				if (!o) throw Error(`Missing Component mapping ${a.id}.`);
				let s = {
					...hn(structuredClone(a), new Map(Object.entries(n))),
					...a.type === "TwinMetadata" ? { metadata: {
						object: {
							objectId: "equipment-" + o,
							displayName: { ko: e.name },
							description: "",
							aliases: {},
							equipmentType: "",
							capabilityIds: [],
							relations: []
						},
						groupIds: [],
						targetComponentId: a.metadata.targetComponentId ? n[a.metadata.targetComponentId] ?? null : null,
						instanceSourceId: null
					} } : {},
					id: o,
					ownerActorId: i,
					...N(a) ? {
						parentComponentId: a.parentComponentId ? n[a.parentComponentId] ?? null : null,
						attachmentParent: a.attachmentParent ? {
							...a.attachmentParent,
							actorId: t[a.attachmentParent.actorId],
							componentId: n[a.attachmentParent.componentId]
						} : null
					} : {}
				};
				for (let e of r.filter(({ localComponentId: e }) => e === a.id)) {
					let t = mn(s).fields.find(({ fieldId: t }) => t === e.fieldId);
					t && (s = X(structuredClone(s), t.path, df(s, t.fieldId, e.value, n)));
				}
				return s;
			})
		};
	});
}
function df(e, t, n, r) {
	if (e.type !== "TestScript" || mn(e).fields.find((e) => e.fieldId === t)?.referenceKind !== "scene-object" || n === null) return n;
	if (typeof n != "string" || !r[n]) throw Error("TestScript Prefab target must be a template Component ID.");
	return r[n];
}
function X(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) r = r[e];
	return r[t.at(-1)] = structuredClone(n), e;
}
//#endregion
//#region src/prefab/PrefabComponentOrigins.ts
function ff(e) {
	let t = e.prefabComponentOrigins;
	if (t === void 0) return [];
	if (!t || typeof t != "object" || !("schemaVersion" in t) || t.schemaVersion !== 1 || !("entries" in t) || !Array.isArray(t.entries)) throw Error("프리팹 Component 연결 이력 형식이 올바르지 않습니다.");
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
	return t.entries.map((e) => {
		if (!e || typeof e != "object" || ![
			"documentId",
			"instanceId",
			"localComponentId",
			"componentId",
			"revisionId"
		].every((t) => typeof e[t] == "string" && e[t])) throw Error("프리팹 Component 연결 이력이 올바르지 않습니다.");
		let t = e, i = JSON.stringify([
			t.documentId,
			t.instanceId,
			t.componentId
		]);
		if (n.has(t.localComponentId) || r.has(i)) throw Error("프리팹 Component 연결 이력이 중복되었습니다.");
		return n.add(t.localComponentId), r.add(i), { ...t };
	});
}
//#endregion
//#region src/prefab/PrefabInheritance.ts
var pf = (e) => e.type === "TwinMetadata" ? [] : mn(e).fields.filter((e) => e.editableContexts.includes("details") && !e.fieldId.startsWith("transform.")), mf = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function hf(e, t) {
	return t.reduce((e, t) => e && typeof e == "object" ? e[t] : void 0, e);
}
function gf(e, t, n) {
	let r = structuredClone(e), i = r;
	for (let e of t.slice(0, -1)) (!i[e] || typeof i[e] != "object") && (i[e] = {}), i = i[e];
	return n === void 0 ? delete i[t.at(-1)] : i[t.at(-1)] = structuredClone(n), r;
}
var _f = (e, t) => JSON.stringify([e, t]);
function vf(e, t, n) {
	return t === "scene-object" && typeof e == "string" ? Object.keys(n).find((t) => n[t] === e) ?? e : structuredClone(e);
}
function yf(e, t) {
	if (!mf(e.rootActorLocalIds, t.rootActorLocalIds) || !mf(e.actors.map((e) => e.id).sort(), t.actors.map((e) => e.id).sort())) throw Error("상속 프리팹의 액터 추가·삭제 또는 루트 변경은 지원하지 않습니다. 새 프리팹으로 저장하세요.");
	for (let n of e.actors) {
		let e = t.actors.find((e) => e.id === n.id);
		if (n.rootComponentId !== e.rootComponentId) throw Error("상속 프리팹의 루트 Component 변경은 지원하지 않습니다.");
		for (let t of n.components) {
			let n = e.components.find((e) => e.id === t.id);
			if (!n || n.type !== sf(t).type && n.type !== t.type || n.typeVersion !== t.typeVersion) throw Error("상속 중인 Component 삭제·타입 변경은 지원하지 않습니다. 새 프리팹으로 저장하세요.");
			for (let e of [
				"parentComponentId",
				"attachmentParent",
				"scriptPackage"
			]) if (!mf(t[e], n[e])) throw Error("상속 중인 Component 계층·Script 버전 변경은 지원하지 않습니다. 새 프리팹으로 저장하세요.");
		}
	}
}
var bf = class {
	catalog;
	addedIds;
	constructor(e, t = /* @__PURE__ */ new Map()) {
		this.catalog = e, this.addedIds = t;
	}
	source(e, t) {
		let n = this.catalog.assets.find((t) => t.id === e && t.kind === "Prefab"), r = this.catalog.revisions.find((r) => r.assetId === e && r.id === (t ?? n?.currentRevisionId));
		if (!n || !r) throw Error("프리팹 원본 또는 기준 버전을 찾을 수 없습니다: " + e);
		let i = r.metadata.prefab;
		return lf(i), {
			prefab: cf(i),
			revisionId: r.id,
			origins: ff(r.metadata)
		};
	}
	resolve(e) {
		let t = e.actors, n = e.authoring.prefabInstances?.map((n) => {
			let r = this.source(n.prefabAssetId, n.sourceRevisionId), i = this.source(n.prefabAssetId);
			yf(r.prefab, i.prefab);
			let a = { ...n.localComponentIds }, o = /* @__PURE__ */ new Map();
			for (let r of i.origins) {
				if (r.documentId !== e.id || r.instanceId !== n.id || a[r.localComponentId]) continue;
				let s = i.prefab.actors.find((e) => e.components.some((e) => e.id === r.localComponentId)), c = t.find((e) => e.components.some((e) => e.id === r.componentId));
				if (!s || Object.values(a).includes(r.componentId) || c && c.id !== n.localActorIds[s.id] || t.some((e) => e.id === r.componentId)) throw Error("원본에 반영한 Component의 인스턴스 연결이 충돌합니다.");
				a[r.localComponentId] = r.componentId, o.set(r.localComponentId, r);
			}
			for (let e of i.prefab.actors) for (let t of e.components) if (!a[t.id]) {
				let e = _f(n.id, t.id);
				this.addedIds.has(e) || this.addedIds.set(e, crypto.randomUUID()), a[t.id] = this.addedIds.get(e);
			}
			let s = uf(i.prefab, n.localActorIds, a, []), c = uf(r.prefab, n.localActorIds, n.localComponentIds, []), l = /* @__PURE__ */ new Map();
			for (let [e, t] of o) {
				let r = uf(this.source(n.prefabAssetId, t.revisionId).prefab, n.localActorIds, a, []).flatMap((e) => e.components).find((e) => e.id === t.componentId);
				if (!r) throw Error("원본에 반영한 Component의 기준 버전이 없습니다.");
				l.set(e, r);
			}
			let u = new Map(n.overrides.filter((e) => !e.fieldId.startsWith("transform.")).map((e) => {
				let t = s.flatMap((e) => e.components).find((t) => t.id === a[e.localComponentId]), n = t && pf(t).find((t) => t.fieldId === e.fieldId), r = n?.referenceKind === "scene-object" ? {
					...e,
					value: vf(e.value, n.referenceKind, a)
				} : e;
				return [_f(e.localComponentId, e.fieldId), r];
			})), d = new Set(n.removedComponentLocalIds ?? []);
			return t = t.map((e) => {
				let t = s.find((t) => t.id === e.id);
				if (!t) return e;
				let r = c.find((t) => t.id === e.id);
				for (let [i, a] of Object.entries(n.localComponentIds)) r?.components.some((e) => e.id === a) && !e.components.some((e) => e.id === a) && t.components.some((e) => e.id === a) && d.add(i);
				let i = (e) => Object.keys(a).find((t) => a[t] === e), o = e.components.map((e) => {
					let o = t.components.some((t) => t.id === e.id) ? sf(e) : e, s = t.components.find((e) => e.id === o.id);
					if (!s) return o;
					if (o.type !== s.type || o.typeVersion !== s.typeVersion || o.type === "TestScript" && s.type === "TestScript" && !mf(o.scriptPackage, s.scriptPackage)) throw Error("인스턴스 Component 타입·Script 버전이 원본과 다릅니다: " + o.id);
					let c = o, d = i(o.id);
					for (let e of pf(s)) {
						let t = _f(d, e.fieldId), i = r?.components.find((e) => e.id === o.id);
						n.inheritanceVersion !== 1 && i && !mf(hf(o, e.path), hf(i, e.path)) && u.set(t, {
							localComponentId: d,
							fieldId: e.fieldId,
							value: vf(hf(o, e.path), e.referenceKind, a)
						});
						let f = l.get(d);
						!u.has(t) && f && !mf(hf(o, e.path), hf(f, e.path)) && u.set(t, {
							localComponentId: d,
							fieldId: e.fieldId,
							value: vf(hf(o, e.path), e.referenceKind, a)
						}), u.has(t) || (c = gf(c, e.path, hf(s, e.path)));
					}
					return c;
				});
				for (let e of t.components) !o.some((t) => t.id === e.id) && !d.has(i(e.id)) && o.push(e);
				for (let t of o) if ((t.type === "StaticMesh" || t.type === "SkeletalMesh") && t.materialOverrides.length) {
					let n = t.meshAsset, r = this.catalog.assets.find((e) => e.id === n?.assetId && e.kind === t.type), i = this.catalog.revisions.find((e) => e.assetId === r?.id && e.id === (n?.revisionPolicy === "pinned" ? n.revisionId : r?.currentRevisionId)), a = n ? i?.metadata.materialSlots : t.type === "StaticMesh" && t.shape ? [{ slotId: "mesh:0/primitive:0" }] : [];
					if (!Array.isArray(a) || a.some((e) => !e || typeof e.slotId != "string")) throw Error("프리팹 메시의 머티리얼 슬롯 정보를 확인할 수 없습니다: " + e.name);
					let o = new Set(a.map((e) => e.slotId));
					if (t.materialOverrides.some((e) => !o.has(e.slotId))) throw Error("프리팹 기본값과 인스턴스 머티리얼 슬롯이 충돌합니다: " + e.name);
				}
				return {
					...e,
					components: o
				};
			}), {
				...n,
				inheritanceVersion: 1,
				sourceRevisionId: i.revisionId,
				localComponentIds: a,
				overrides: [...u.values()],
				...d.size ? { removedComponentLocalIds: [...d] } : {}
			};
		});
		if (!n?.length) return e;
		let r = {
			...e,
			actors: t,
			authoring: {
				...e.authoring,
				prefabInstances: n
			}
		};
		return Wa(r), mf(r, e) ? e : r;
	}
	reset(e, t, n) {
		let r = e.authoring.prefabInstances?.find((e) => Object.values(e.localComponentIds).includes(t)), i = e.actors.flatMap((e) => e.components).find((e) => e.id === t);
		if (!r || !i || !pf(i).some((e) => e.fieldId === n)) return null;
		let a = Object.keys(r.localComponentIds).find((e) => r.localComponentIds[e] === t), o = e.authoring.prefabInstances.map((e) => e.id === r.id ? {
			...e,
			inheritanceVersion: 1,
			overrides: e.overrides.filter((e) => e.localComponentId !== a || e.fieldId !== n)
		} : e);
		return this.resolve({
			...e,
			authoring: {
				...e.authoring,
				prefabInstances: o
			}
		});
	}
};
Cd.backup.archiveBytes / 1024 ** 3, Cd.backup.entries, Cd.storage.priorVersions, Cd.storage.historyMetadataBytes;
//#endregion
//#region src/ue-import/CandidateMaterialDisplay.ts
var xf = {
	baseColor: "baseColor",
	normal: "normal",
	metallic: "metallicRoughness",
	roughness: "metallicRoughness",
	occlusion: "occlusion",
	emissive: "emissive",
	"baseColor-srgb": "baseColor",
	"normal-linear": "normal",
	"metallicRoughness-linear": "metallicRoughness",
	"occlusion-linear": "occlusion",
	"emissive-srgb": "emissive"
};
function Sf(e, t) {
	let n = /* @__PURE__ */ new Map();
	if (!t) return n;
	let r = (e, r) => {
		t.maps.includes(r) && n.set(e, Math.min(n.get(e) ?? Infinity, Ma(t, r)));
	};
	for (let t of e.assets.filter((e) => e.kind === "Material")) {
		let i = du(e.revisions.find((e) => e.id === t.currentRevisionId)?.metadata.material);
		if (i.kind === "WebMaskPbrMaterial") {
			for (let [e, t] of Object.entries(i.textureViews)) r(t.texture.assetId, xf[e]);
			for (let e of i.maskLayers) r(e.mask.texture.assetId, "baseColor");
			for (let e of i.vertexAtlas?.masks ?? []) r(e.texture.assetId, "baseColor"), n.has(e.texture.assetId) && n.set(e.texture.assetId, Math.min(512, n.get(e.texture.assetId)));
		} else for (let [e, t] of Object.entries(i.textures)) r(t.assetId, xf[e]);
	}
	return n;
}
function Cf(e, t, n = !0) {
	let r = (e) => n && (!t || t.maps.includes(xf[e]));
	return e.kind === "WebMaskPbrMaterial" ? {
		...e,
		textureViews: Object.fromEntries(Object.entries(e.textureViews).filter(([e]) => r(e))),
		maskLayers: r("baseColor") ? e.maskLayers : [],
		...!r("baseColor") && e.vertexAtlas ? {
			vertexAtlas: void 0,
			mappingProfileId: "u01-display-without-atlas"
		} : {}
	} : {
		...e,
		textures: Object.fromEntries(Object.entries(e.textures).filter(([e]) => r(e)))
	};
}
function wf(e) {
	let t = [], n = [], r = /* @__PURE__ */ new Map(), i = (i, a) => {
		let o = r.get(i);
		if (o === void 0) {
			let n = e.assets.find((e) => e.id === i && e.kind === "Texture"), a = e.revisions.find((e) => e.id === n?.currentRevisionId && e.assetId === n?.id), s = e.blobs.find((e) => e.key === a?.blobKeys[0]);
			if (!s || typeof a?.metadata.mimeType != "string") throw Error("Missing candidate material texture");
			o = t.length, r.set(i, o), t.push(R(s.bytes, a.metadata.mimeType));
		}
		n.push({
			source: o,
			kind: a
		});
	};
	for (let t of e.assets.filter((e) => e.kind === "Material")) {
		let n = du(e.revisions.find((e) => e.id === t.currentRevisionId && e.assetId === t.id)?.metadata.material);
		if (n.kind === "WebMaskPbrMaterial") {
			for (let [e, t] of Object.entries(n.textureViews)) i(t.texture.assetId, xf[e]);
			for (let e of n.maskLayers) i(e.mask.texture.assetId, "baseColor");
			for (let e of n.vertexAtlas?.masks ?? []) i(e.texture.assetId, "baseColor");
		} else for (let [e, t] of Object.entries(n.textures)) i(t.assetId, xf[e]);
	}
	return {
		dimensions: t,
		uses: n
	};
}
//#endregion
//#region src/ue-import/TextureDisplaySession.ts
var Tf = class {
	layouts;
	prepare;
	publish;
	current = null;
	options = {
		maxSize: 128,
		maps: []
	};
	budgetBytes = Md;
	pending = null;
	closed = !1;
	memory = new Bs();
	constructor(e, t, n) {
		this.layouts = e, this.prepare = t, this.publish = n;
	}
	estimate(e) {
		return ja(e), this.layouts.reduce((t, n) => t + Hd(n, e).reservedBytes, 0);
	}
	async apply(e, t, n, r) {
		if (this.closed) throw Error("닫힌 레벨의 텍스처 설정은 적용할 수 없습니다.");
		if (this.pending) throw Error("텍스처 적용이 진행 중입니다.");
		Pd(t);
		let i = {
			...e,
			...e.mapMaxSizes ? { mapMaxSizes: { ...e.mapMaxSizes } } : {},
			maps: [...e.maps]
		}, a = this.estimate(i), o = a + (this.current?.reservedBytes ?? 0);
		if (t !== 0 && a > 0 && o > t) throw Error(`텍스처 교체 중 예약 추정 ${(o / 1048576).toFixed(1)} MiB가 예산을 초과합니다. 자동 예산을 선택하거나 크기를 줄이세요.`);
		let s = new AbortController();
		this.pending = s;
		let c = () => s.abort();
		n.addEventListener("abort", c, { once: !0 }), n.aborted && s.abort();
		let l = null;
		try {
			t === 0 && await Ns(), s.signal.throwIfAborted(), this.memory.update(a > 0 ? o : this.current?.reservedBytes ?? 0, this.current?.reservedBytes ?? 0, t === 0 && a > 0);
			let e = t === 0 ? Ls(a > 0 ? o : 0, this.current?.reservedBytes ?? 0) : t;
			l = await this.prepare(i, e, s.signal, r, t === 0), s.signal.throwIfAborted(), t === 0 && l.reservedBytes > 0 && Ls(l.reservedBytes + (this.current?.reservedBytes ?? 0), this.current?.reservedBytes ?? 0), this.memory.update(l.reservedBytes + (this.current?.reservedBytes ?? 0), this.current?.reservedBytes ?? 0, t === 0 && l.reservedBytes > 0, !0);
			let n = this.current, c = this.options, u = this.budgetBytes;
			this.current = l, this.options = i, this.budgetBytes = t;
			try {
				this.publish();
			} catch (e) {
				throw this.current = n, this.options = c, this.budgetBytes = u, e;
			}
			l = null, n?.dispose();
		} finally {
			l?.dispose(), n.removeEventListener("abort", c), this.pending = null, this.memory.update(this.current?.reservedBytes ?? 0, this.current?.reservedBytes ?? 0, !1);
		}
	}
	dispose() {
		this.closed = !0, this.memory.dispose(), this.pending?.abort(), this.current?.dispose(), this.current = null;
	}
}, Ef = class extends Error {
	requiredBytes;
	budgetBytes;
	textureLayouts;
	constructor(e, t = Md) {
		super(`전체 에셋 텍스처 예약 추정 ${(e / 1048576).toFixed(1)} MiB가 표시 예산 ${(t / 1048576).toFixed(0)} MiB를 초과합니다. 예산을 늘리거나 텍스처 크기·맵을 줄이세요.`), this.requiredBytes = e, this.budgetBytes = t;
	}
}, Df = class extends Error {
	textureLayouts;
	constructor(e) {
		super(`전체 에셋 텍스처 적용 실패: ${e}`);
	}
};
function Of(e, t) {
	try {
		e.textureLayouts = [...t.values()].map(Vd);
	} catch {}
	return e;
}
function kf(e) {
	let t = [], n = 0;
	for (let [r, i] of e) {
		let e = Ud(i);
		t.push(r), n += e.reservedBytes;
	}
	return {
		textured: t,
		reservedBytes: n
	};
}
async function Af(e, t, n, r) {
	try {
		for (let i = 0; i < t.length; i++) {
			r?.throwIfAborted();
			let a = t[i];
			n(`에셋 텍스처 적용 ${i + 1}/${t.length}`), await e.enableAppearance({
				kind: "asset",
				assetId: a,
				revisionPolicy: "pinned",
				revisionId: `${a}:preview`
			});
		}
		r?.throwIfAborted();
	} catch (t) {
		throw e.clearAppearances(), r?.aborted ? t : new Df(t instanceof Error ? t.message : String(t));
	}
}
var jf = class extends Gc {
	previewStorage;
	templates;
	payloads;
	loadAppearance;
	budgetBytes;
	defaultMaterials;
	materialResolver;
	textureDisplay;
	retainedMaterials = [];
	appearances = /* @__PURE__ */ new Map();
	wantedAppearances = /* @__PURE__ */ new Set();
	restoringAppearances = /* @__PURE__ */ new Map();
	acquiring = /* @__PURE__ */ new Map();
	disposed = !1;
	appearanceListeners = /* @__PURE__ */ new Set();
	invalidationListeners = /* @__PURE__ */ new Set();
	constructor(e, t, n = /* @__PURE__ */ new Map(), r = Gd, i = Md, a = /* @__PURE__ */ new Map()) {
		super(e), this.previewStorage = e, this.templates = t, this.payloads = n, this.loadAppearance = r, this.budgetBytes = i, this.defaultMaterials = a, Pd(i);
	}
	supportsAppearance(e) {
		return !!(e && e.revisionPolicy === "pinned" && e.revisionId === `${e.assetId}:preview` && this.payloads.has(e.assetId));
	}
	appearanceStatus() {
		return {
			reservedBytes: [...this.appearances.values()].reduce((e, t) => e + t.bytes, 0),
			limitBytes: this.budgetBytes,
			entries: [...this.appearances].map(([e, t]) => ({
				assetId: e,
				state: t.cancelled ? "releasing" : t.object ? "ready" : "loading"
			}))
		};
	}
	subscribeAppearance(e) {
		return this.appearanceListeners.add(e), () => this.appearanceListeners.delete(e);
	}
	subscribeInvalidation(e) {
		return this.invalidationListeners.add(e), () => this.invalidationListeners.delete(e);
	}
	notifyAppearance() {
		this.appearanceListeners.forEach((e) => e());
	}
	async enableAppearance(e) {
		if (this.wantedAppearances.has(e.assetId)) throw Error("이미 로딩/표시/해제 중인 에셋입니다.");
		return this.loadAppearanceFor(e, !0);
	}
	async loadAppearanceFor(e, t) {
		if (this.disposed) throw Error("Retired preview resources");
		if (!this.supportsAppearance(e)) throw Error("원본 후보의 고정 리비전만 외형 확인할 수 있습니다.");
		let n = e.assetId;
		if (this.appearances.has(n)) throw Error("이미 로딩/표시/해제 중인 에셋입니다.");
		let r = this.payloads.get(n), i = Ud(r);
		if (i.reservedBytes + this.appearanceStatus().reservedBytes > this.budgetBytes) {
			let e = i.reservedBytes > this.budgetBytes ? "이 에셋 하나만으로도 표시 예산을 초과합니다." : "다른 외형을 해제한 후 다시 시도하세요.";
			throw Error(`텍스처 예산 초과: 이 에셋 예약 추정 ${(i.reservedBytes / 1048576).toFixed(1)} MiB. ${e} 자동 축소하지 않습니다.`);
		}
		let a = {
			bytes: i.reservedBytes,
			leases: 0,
			cancelled: !1,
			object: null
		};
		this.wantedAppearances.add(n), this.appearances.set(n, a), this.notifyAppearance();
		try {
			if (a.object = await this.loadAppearance(r, this.budgetBytes), a.cancelled) {
				this.collectAppearance(n);
				return;
			}
			t && this.invalidationListeners.forEach((e) => e(n));
		} catch (e) {
			throw this.appearances.delete(n), t && this.wantedAppearances.delete(n), e;
		} finally {
			this.notifyAppearance();
		}
	}
	disableAppearance(e) {
		this.wantedAppearances.delete(e);
		let t = this.appearances.get(e);
		t && (t.cancelled = !0, this.invalidationListeners.forEach((t) => t(e)), this.collectAppearance(e), this.notifyAppearance());
	}
	clearAppearances() {
		this.wantedAppearances.clear(), [...this.appearances.keys()].forEach((e) => this.disableAppearance(e));
	}
	collectAppearance(e) {
		let t = this.appearances.get(e);
		t?.cancelled && t.object && t.leases === 0 && (Wd([t.object]), this.appearances.delete(e), this.notifyAppearance());
	}
	async acquire(e) {
		if (this.disposed) throw Error("Retired preview resources");
		if (this.textureDisplay?.current) return this.textureDisplay.current.resources.acquire(e);
		if (!this.templates.has(e.assetId) && !this.payloads.has(e.assetId)) return super.acquire(e);
		let t = e.revisionPolicy === "pinned" ? e.revisionId : this.previewStorage instanceof Yi ? this.previewStorage.currentRevisionId(e.assetId) : (await this.previewStorage.snapshot()).assets.find((t) => t.id === e.assetId)?.currentRevisionId;
		if (t !== `${e.assetId}:preview`) return super.acquire(e);
		let n = e.assetId;
		this.acquiring.set(n, (this.acquiring.get(n) ?? 0) + 1);
		try {
			if (this.wantedAppearances.has(e.assetId) && (!this.appearances.has(e.assetId) || this.restoringAppearances.has(e.assetId))) {
				let n = this.restoringAppearances.get(e.assetId);
				if (n || (n = this.loadAppearanceFor({
					...e,
					revisionPolicy: "pinned",
					revisionId: t
				}, !1).finally(() => this.restoringAppearances.delete(e.assetId)), this.restoringAppearances.set(e.assetId, n)), await n, this.disposed) throw Error("Retired preview resources");
			}
			let n = this.appearances.get(e.assetId), r = n && !n.cancelled ? n.object : null;
			r && n.leases++;
			let i = r ? void 0 : await Jd(this.templates, e.assetId, this.payloads.get(e.assetId), Nf), a = r ?? i.object, o = kd(a), s = !1;
			return {
				assetId: e.assetId,
				revisionId: `${e.assetId}:preview`,
				instantiate: () => {
					if (s) throw Error("Released preview lease");
					let t = Jc(a);
					return t.userData.defaultMaterialSlots = this.defaultMaterials.get(e.assetId) ?? [], t;
				},
				release: () => {
					s || (s = !0, o(), i?.release(), r && (n.leases--, this.collectAppearance(e.assetId)));
				}
			};
		} finally {
			this.acquiring.set(n, this.acquiring.get(n) - 1);
		}
	}
	disposeDisplay() {
		this.textureDisplay?.dispose(), this.clearAppearances(), this.retainedMaterials.splice(0).forEach((e) => e.dispose());
	}
	trimUnusedGeometry() {
		this.textureDisplay?.current?.resources.trimUnusedGeometry(), Yd(this.templates, this.payloads);
		for (let [e, t] of this.appearances) t.object && !t.leases && !t.cancelled && !this.acquiring.get(e) && (Wd([t.object]), this.appearances.delete(e));
		this.retainedMaterials.splice(0).forEach((e) => e.dispose()), this.notifyAppearance();
	}
	disposeAll() {
		this.disposed = !0, this.disposeDisplay(), Xd(this.templates), this.payloads.clear(), this.appearanceListeners.clear(), this.invalidationListeners.clear(), this.textureDisplay = void 0, this.materialResolver = void 0;
	}
	retainedState() {
		return {
			templates: this.templates.size,
			payloadBytes: [...this.payloads.values()].reduce((e, t) => e + t.byteLength, 0),
			appearanceBytes: this.appearanceStatus().reservedBytes,
			warmMaterials: this.retainedMaterials.length,
			dormantAppearances: [...this.wantedAppearances].filter((e) => !this.appearances.has(e)).length
		};
	}
	async warmMaterials(e, t) {
		for (let n of e.assets.filter((e) => e.kind === "Material")) t?.throwIfAborted(), this.retainedMaterials.push(await this.materialResolver({
			kind: "asset",
			assetId: n.id,
			revisionPolicy: "live"
		}));
		t?.throwIfAborted();
	}
	publishDisplay() {
		this.payloads.forEach((e, t) => this.invalidationListeners.forEach((e) => e(t)));
	}
};
async function Mf(e, t, n, r = { showTextures: !1 }, i, a = !0) {
	let o = r.budgetBytes ?? 0;
	Pd(o), o === 0 && await Ns();
	let s = i ?? /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = new Set(e.assets.revisions.filter((e) => e.metadata.candidateTypedMaterials).map((e) => e.assetId));
	for (let t of e.recipe.payloads) {
		let n = e.assets.blobs.find((e) => e.key === t.blobKey);
		c.set(t.assetId, n.bytes);
	}
	if (r.optimize) {
		let e = 0;
		for (let [t, i] of c) l.has(t) || (r.signal?.throwIfAborted(), n(`열기 전 텍스처 최적화 ${++e}/${c.size}`), c.set(t, await Fa(i, r.optimize, r.signal ?? new AbortController().signal)));
	}
	let u, d = new Map([...c].filter(([e]) => !l.has(e))), f = l.size ? wf(e.assets) : {
		dimensions: [],
		uses: []
	};
	try {
		u = r.showTextures === !1 ? {
			textured: [],
			reservedBytes: 0
		} : kf(d);
		let e = u.reservedBytes + (r.showTextures === !1 ? 0 : Hd(f, r.optimize).reservedBytes);
		if (o === 0 && (o = Ls(e)), e > o) {
			let t = new Ef(e, o);
			throw t.textureLayouts = [...d.values()].map(Vd).concat(f), t;
		}
	} catch (e) {
		throw e instanceof Ef ? e : new Df(e instanceof Error ? e.message : String(e));
	}
	for (let [e, t] of c) r.signal?.throwIfAborted(), n(`저장 레벨 복원 ${s.size}/${c.size}`), s.has(e) || s.set(e, await Nf(t));
	let p = /* @__PURE__ */ new Map();
	for (let t of e.recipe.payloads) {
		let n = e.assets.revisions.find((e) => e.id === t.revisionId).metadata;
		n.candidateTypedMaterials && p.set(t.assetId, n.materialSlots.map((e) => ({
			slotId: e.slotId,
			materialAsset: {
				kind: "asset",
				assetId: e.defaultMaterialId,
				revisionPolicy: "live"
			},
			tintOverrides: []
		})));
	}
	let m = new jf(t, s, c, Gd, o, p);
	m.materialResolver = Au(t, void 0, {
		textureMaxSize: r.optimize?.maxSize,
		textureMapLimits: Sf(e.assets, r.optimize),
		transformDocument: (e) => Cf(e, r.optimize, r.showTextures !== !1)
	});
	try {
		await Af(m, u.textured, n, r.signal);
	} catch (e) {
		throw e instanceof Df ? Of(e, c) : e;
	}
	if (a) {
		let n = [...d.values()].map(Vd).concat(f), r = m.materialResolver;
		m.textureDisplay = new Tf(n, async (n, r, i, a, o) => {
			let c = await t.snapshot();
			i.throwIfAborted();
			let l = wf(c), u = [...d.values()].map(Vd).concat(l).reduce((e, t) => e + Hd(t, n).reservedBytes, 0);
			if (o && (r = Ls(u > 0 ? u + (m.textureDisplay.current?.reservedBytes ?? 0) : 0, m.textureDisplay.current?.reservedBytes ?? 0)), u > 0 && u + (m.textureDisplay.current?.reservedBytes ?? 0) > r) throw Error("변경된 에셋의 텍스처 교체 예산을 초과합니다. 먼저 모든 맵을 끄고 적용하세요.");
			let f = await Mf({
				...e,
				assets: c
			}, t, a, {
				optimize: n.maps.length ? n : void 0,
				showTextures: n.maps.length > 0,
				budgetBytes: r,
				signal: i
			}, s, !1);
			try {
				n.maps.length && await f.warmMaterials(c, i);
				let e = (e) => JSON.stringify(e.assets.map((e) => [e.id, e.currentRevisionId]));
				if (e(c) !== e(await t.snapshot())) throw Error("적용 중 에셋이 변경되었습니다. 기존 표시를 유지합니다. 다시 적용하세요.");
				return i.throwIfAborted(), {
					resources: f,
					reservedBytes: u,
					dispose: () => f.disposeDisplay()
				};
			} catch (e) {
				throw f.disposeDisplay(), e;
			}
		}, () => m.publishDisplay()), m.materialResolver = (e, t) => (m.textureDisplay?.current?.resources.materialResolver ?? r)(e, t);
	}
	return m;
}
async function Nf(e) {
	if (ya(e)) {
		Sa(e);
		let t = xa(e), n = new x();
		n.userData.staticMeshLod = {
			distanceMeters: t.distanceMeters,
			hysteresis: t.hysteresis
		};
		try {
			for (let e of t.levels) n.add(await Nf(e));
			return n.children[1].visible = !1, n;
		} catch (e) {
			throw Wd([n]), e;
		}
	}
	L(e);
	let t = new Ws();
	t.register(() => ({
		name: "U01_EDITOR_GEOMETRY",
		loadMaterial: async () => new Ue({
			color: 11188678,
			roughness: .8,
			side: 2
		})
	}));
	let n = await t.parseAsync(e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength), "");
	n.scene.traverse((e) => {
		let t = n.parser.associations.get(e);
		t?.meshes !== void 0 && t.primitives !== void 0 && (e.userData.materialSlotId = `mesh:${t.meshes}/primitive:${t.primitives}`);
	});
	let r = new x();
	return r.matrixAutoUpdate = !1, r.matrix.copy(jd), r.add(n.scene), r.updateMatrixWorld(!0), r;
}
//#endregion
//#region src/composition/CompositionMatrixRoot.ts
var Pf = class extends x {
	sealed = !1;
	valid = !1;
	previousParent = null;
	previousLocal = new Ve();
	previousWorld = new Ve();
	previousParentWorld = new Ve();
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
}, Ff = class e {
	storage;
	textureOptions;
	cacheStaticMatrices;
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
	constructor(e, t, n = !1) {
		this.storage = e, this.textureOptions = t, this.cacheStaticMatrices = n;
	}
	key(e) {
		return this.storage.resourceKey?.(e) ?? fi(e.pin);
	}
	fork(t) {
		let n = new e(this.storage, structuredClone(t), this.cacheStaticMatrices);
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
			let e = s.layouts.reduce((e, t) => e + Hd(t, this.textureOptions).reservedBytes, 0);
			if (e > Rs(r, e)) throw Error("텍스처 교체 예약 예산을 초과합니다. 기존 표시를 유지합니다.");
			let t = Au(s.storage, void 0, {
				textureMaxSize: this.textureOptions?.maxSize,
				textureMapLimits: Sf(s.textureCatalog, this.textureOptions),
				transformDocument: (e) => Cf(e, this.textureOptions, !this.textureOptions || this.textureOptions.maps.length > 0)
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
			let t = await this.storage.prepared(e, n, r);
			if (n.throwIfAborted(), !this.storage.projectDocument && t.document.actors.length !== e.actors) throw Error("Level actor summary mismatch");
			o = {
				references: 0,
				encodedBytes: 0,
				get reservedTextures() {
					return t.storage.reservedTextureBytes ?? 0;
				},
				info: e,
				document: t.document,
				storage: t.storage,
				staticMeshes: new Gc(t.storage, void 0, !0),
				skeletalMeshes: new wl(t.storage),
				material: Au(t.storage)
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
			let c = [wf(s.assets)];
			if (s.recipe) for (let e of s.recipe.payloads) {
				if (s.assets.revisions.find((t) => t.id === e.revisionId)?.metadata.candidateTypedMaterials) continue;
				let t = s.assets.blobs.find((t) => t.key === e.blobKey);
				if (!t) throw Error("Missing source payload");
				c.push(Vd(t.bytes));
			}
			let l = c.reduce((e, t) => e + Hd(t, this.textureOptions).reservedBytes, 0), u = Rs(r, l);
			if (l > u) throw Error(`기존 표시와 새 레벨을 합한 텍스처 예약 예산이 부족합니다. 새 레벨 ${(l / 1048576).toFixed(1)} MiB / 남은 한도 ${(u / 1048576).toFixed(1)} MiB. 표시·텍스처 예산을 자동으로 선택하거나 텍스처 크기를 줄이세요.`);
			let d = new Yi();
			await d.importSnapshot(s.assets), this.cacheStaticMatrices && ys(d);
			let f = /* @__PURE__ */ new Map(), p;
			try {
				let r = Nd.find((e) => e >= l) ?? Nd.at(-1);
				s.recipe && (p = await Mf({
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
					staticMeshes: p ?? new Gc(d),
					skeletalMeshes: new wl(d),
					material: p?.materialResolver ?? Au(d, void 0, {
						textureMaxSize: this.textureOptions?.maxSize,
						textureMapLimits: Sf(s.assets, this.textureOptions),
						transformDocument: (e) => Cf(e, this.textureOptions, !this.textureOptions || this.textureOptions.maps.length > 0)
					}),
					...p ? { preview: p } : {}
				}, this.cacheStaticMatrices && p && s.recipe?.payloads.length && s.recipe.payloads.every((e) => s.assets.revisions.find((t) => t.id === e.revisionId)?.metadata.candidateTypedMaterials === !0) && s.envelope.payload.actors.every((e) => e.components.every((e) => e.type !== "SkeletalMesh")) && (o.textureCatalog = {
					...s.assets,
					blobs: []
				}), this.sources.set(a, o);
			} catch (e) {
				throw p ? p.disposeAll() : Wd([...f.values()]), e;
			}
		}
		let c = o, l = this.storage.projectDocument?.(c.document, e) ?? c.document;
		if (l.actors.length !== e.actors) throw Error("Level actor summary mismatch");
		c.references++;
		let u = new Pf(), d = [], f = new nu("asset-preview", `composition-${t.id}`);
		f.start(), f.pause();
		let p = new hd(c.staticMeshes, c.material, c.skeletalMeshes, Il(c.storage), f, {
			...this.addonContext,
			mountId: this.addonContext.mountId?.(t.id) ?? t.id,
			document: () => l,
			overrides: (e, n) => this.addonContext.overrides?.(e, n, t.id)
		}), m = (e) => {
			e = Vr(e);
			let t = e.components.filter(N).find((t) => t.id === e.rootComponentId), n = t.attachmentParent?.kind === "bone" || t.attachmentParent?.kind === "socket" || !t.attachmentParent ? e : {
				...e,
				components: e.components.map((t) => t.id === e.rootComponentId ? {
					...t,
					localTransform: Un(l, e.id)
				} : t)
			}, r = p.projectActor(n);
			return r.setHelpersVisible?.(!1), r.setIconPresentation?.(!1, 1), r;
		}, h = !1, g = () => {
			h || (h = !0, u.removeFromParent(), d.forEach((e) => e.dispose()), f.stop(), u.clear(), --c.references === 0 && (c.shared ? (c.preview?.disposeDisplay(), --c.shared.users === 0 && c.shared.dispose()) : c.preview?.disposeAll(), this.sources.delete(a)));
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
				if (n.throwIfAborted(), r++, Br(e)) continue;
				let a = m(e);
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
				let t = e.components.filter(N).find((t) => t.id === e.rootComponentId).attachmentParent;
				if (t?.kind === "bone" || t?.kind === "socket") {
					let n = a.get(t.actorId)?.attachmentAnchor(t);
					if (!n) throw Error(`부착 지점을 찾을 수 없습니다: ${e.id}`);
					n.add(a.get(e.id).object);
				}
			}
			u.traverse((e) => {
				if (e.userData.assetResourceError || e.userData.attachmentError || e.userData.materialOverrideError) throw Error(String(e.userData.assetResourceError ?? e.userData.attachmentError ?? e.userData.materialOverrideError));
				e instanceof Xe && (e.intensity = 0);
			}), u.sealStaticHierarchy(this.cacheStaticMatrices && d.every((e) => e.viewDependentInstancing === !1));
			let o = (e) => {
				u.invalidateMatrices(), u.position.fromArray(e.position), u.quaternion.fromArray(e.rotation), u.visible = e.visible, u.updateWorldMatrix(!0, !1), u.updateMatrixWorld(!0);
			};
			o(t);
			let s = Es({
				...l,
				actors: Ur(l)
			}, u, d, m, () => !h);
			return {
				root: u,
				projections: d,
				document: l,
				info: e,
				update: o,
				dispose: g,
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
			throw await Promise.allSettled(d.map((e) => e.ready)), g(), e;
		}
	}
};
function If(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), r = 0, i = 0;
	for (let a of e) a.traverse((e) => {
		if (e instanceof M) {
			for (let n of [...Object.values(e.geometry.attributes), e.geometry.index]) {
				if (!n) continue;
				let e = "array" in n ? n.array : n.data.array;
				t.has(e.buffer) || (t.add(e.buffer), r += e.buffer.byteLength);
			}
			for (let t of Array.isArray(e.material) ? e.material : [e.material]) for (let e of [...Object.values(t), ...t instanceof Ue ? ku(t) : []]) {
				if (!(e instanceof ae)) continue;
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
var Lf = new class {
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
		this.tasks.find((t) => t.id === e)?.state === "failed" && this.publish(this.tasks.filter((t) => t.id !== e));
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
			fail: (e) => {
				i || (i = !0, this.tasks.find((e) => e.id === r)?.state === "cancelling" ? this.publish(this.tasks.filter((e) => e.id !== r)) : this.update(r, {
					state: "failed",
					cancel: void 0,
					revealed: !0,
					error: e instanceof Error ? e.message : String(e),
					completed: void 0,
					total: void 0
				}));
			}
		};
	}
}(!1), Rf = [
	0,
	512,
	1024,
	2048,
	4096,
	8192
], zf = "dt-display-budget-mib-v2";
function Z(e) {
	if (!Rf.includes(e)) throw Error("지원하지 않는 표시 예산입니다.");
	return Object.freeze({
		geometry: e * 1024 ** 2,
		texture: e * 1024 ** 2
	});
}
function Bf(e, t) {
	for (let n of ["geometry", "texture"]) {
		if (!Number.isSafeInteger(e[n]) || e[n] < 0 || e[n] > ks) throw Error("유효하지 않은 표시 예산입니다. 최대 8 GiB입니다.");
		if (e[n] < t[n]) throw Error("현재 사용량보다 낮출 수 없습니다. 레벨을 로드 해제한 뒤 변경하세요.");
	}
	return Object.freeze({
		geometry: e.geometry,
		texture: e.texture
	});
}
function Vf() {
	try {
		let e = Number(globalThis.localStorage.getItem(zf));
		if (Rf.includes(e)) return e;
	} catch {}
	return 0;
}
function Hf(e) {
	Z(e);
	try {
		return globalThis.localStorage.setItem(zf, String(e)), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region src/composition/CompositionRuntime.ts
var Uf = Object.freeze({
	encodedPeak: 2 * 1024 ** 3,
	geometry: 512 * 1024 ** 2,
	texture: 512 * 1024 ** 2,
	actors: 1e5
}), Wf = class {
	storage;
	pool;
	root = new x();
	objectViews = /* @__PURE__ */ new Map();
	objectKinds = /* @__PURE__ */ new Map();
	objectAdapter = new hd();
	updateTarget(e) {
		if ("pin" in e) this.states.get(e.id)?.view?.update(e);
		else {
			let t = this.objectViews.get(e.id);
			t && (t.update(jr(e)), t.object.visible = e.visible);
		}
	}
	targetRoot(e) {
		return e ? this.states.get(e)?.view?.root ?? this.objectViews.get(e)?.object : void 0;
	}
	reconcileObjects(e) {
		for (let [t, n] of this.objectViews) e.some((e) => e.id === t && e.kind === this.objectKinds.get(t)) || (n.object.removeFromParent(), n.dispose(), this.objectViews.delete(t), this.objectKinds.delete(t));
		for (let t of e) {
			if (!this.objectViews.has(t.id)) {
				let e = this.objectAdapter.projectActor(jr(t));
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
	memory = new Bs();
	constructor(e, t, n) {
		this.storage = e, this.pool = t, this.automatic = n?.automatic ?? !n;
		let r = n ?? Uf;
		this.limits = Object.freeze({
			...r,
			...Bf(r, {
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
			...Object.fromEntries(Object.entries(n).map(([e, t]) => [e, Math.max(this.limits[e], Is(t))]))
		}));
	}
	textureAdmission(e = this.pool, t = [this.root], n = this.textureBudget) {
		return (r, i) => {
			let a = If(t), o = Math.max(a.texture, (this.pool.reservedTextures ?? 0) + (e === this.pool ? 0 : e.reservedTextures ?? 0) - i);
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
					let t = If([this.root, e]);
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
		Pd(e), this.textureBudget = e;
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
				return ja(e), this.layouts.reduce((t, n) => t + Hd(n, e).reservedBytes, 0);
			},
			apply: (e, t, n, r) => this.applyTextures(e, t, n, r)
		};
	}
	async applyTextures(e, t, n, r) {
		if (this.disposed || this.busy || !this.pool.fork) throw Error("로딩이 끝난 통합 레벨에서 텍스처 설정을 적용하세요.");
		ja(e), Pd(t), n.throwIfAborted();
		let i = this.textureControl(), a = i.estimate(e), o = new AbortController(), s = () => o.abort();
		n.addEventListener("abort", s, { once: !0 });
		let c = this.pool.fork(e), l = [...this.states].filter((e) => !!e[1].view), u = [];
		this.textureJob = o, this.changed();
		let d = this.version, f = Lf.begin("통합 텍스처 적용 중", "메시·텍스처 표시 자원을 준비하고 있습니다.", () => o.abort());
		try {
			if (await Ns(), this.admitMemory({ texture: a + i.current.reservedBytes }), a > 0 && a + i.current.reservedBytes > (t === 0 ? this.budget.texture : Math.min(t, this.budget.texture))) throw Error("전체 텍스처 교체 예산을 초과합니다. 자동 예산을 선택하거나 텍스처 크기를 줄이세요.");
			await f.paint();
			for (let [n, s] of l) {
				o.signal.throwIfAborted();
				let d = this.desired.get(n), p = c.has(s.view.info) || c.canReuse?.(s.view.info) ? 0 : s.view.info.bytes;
				if (this.admitMemory({
					encodedPeak: this.combinedEncoded(c) + p * 2,
					texture: a + i.current.reservedBytes
				}), this.combinedEncoded(c) + p * 2 > this.budget.encodedPeak) throw Error("텍스처 교체 중 원본 바이트 예산을 초과합니다. 일부 레벨을 로드 해제하세요.");
				r(`통합 텍스처 준비 ${u.length + 1}/${l.length} · ${d.name}`), f.update({
					message: "통합 텍스처 준비 중",
					detail: d.name,
					completed: u.length,
					total: l.length
				});
				let m = await c.project(s.view.info, {
					...d,
					pin: s.view.info.pin
				}, o.signal, this.textureAdmission(c, [this.root, ...u.map(([, e]) => e.root)], t), f.update);
				u.push([n, m]);
				let h = If([this.root, ...u.map(([, e]) => e.root)]);
				if (this.admitMemory(h), h.geometry > this.budget.geometry || e.maps.length > 0 && h.texture > (t === 0 ? this.budget.texture : Math.min(t, this.budget.texture))) throw Error("교체 중 메시·텍스처 표시 예산을 초과합니다. 일부 레벨을 로드 해제하세요.");
			}
			if (o.signal.throwIfAborted(), this.disposed || d !== this.version) throw Error("준비 중 통합 배치가 변경되었습니다. 기존 표시를 유지합니다.");
			f.setCancel(), f.update({ message: "새 텍스처를 화면에 적용 중" }), this.pool = c, this.textureBudget = t;
			for (let [e, t] of u) this.root.add(t.root), this.states.set(e, {
				...this.states.get(e),
				view: t
			});
			u.length = 0, l.forEach(([, e]) => e.view.dispose());
		} catch (e) {
			throw o.signal.aborted || f.fail(e), e;
		} finally {
			f.finish(), u.forEach(([, e]) => e.dispose()), c.finishFork?.(), n.removeEventListener("abort", s), this.textureJob = void 0, this.changed(), this.pump();
		}
	}
	get budget() {
		return this.limits;
	}
	setDisplayBudget(e) {
		if (this.disposed || this.busy) throw Error("로딩이 끝나거나 취소된 뒤 표시 예산을 변경하세요.");
		e.geometry === 0 && e.texture === 0 ? this.automatic = !0 : (this.limits = Object.freeze({
			...this.limits,
			...Bf(e, this.usage)
		}), this.automatic = !1), this.changed();
	}
	subscribe = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	snapshot = () => this.version;
	changed() {
		for (let [e, t] of this.states) t.view && this.desired.has(e) && fi(this.desired.get(e).pin) === fi(t.view.info.pin) && this.sourceDocuments.set(e, {
			pin: fi(t.view.info.pin),
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
			...If([this.root]),
			encoded: this.pool.encodedBytes,
			actors: this.residentActors
		};
	}
	reconcile(e) {
		this.pool.configureAddons?.({
			compositionId: e.id,
			overrides: (t, n) => ri(e.addonOverrides, t, n)
		});
		for (let e of this.views) for (let t of e.projections) t.addons?.update();
		this.reconcileObjects(e.objects ?? []), this.desired = new Map(e.mounts.map((e) => [e.id, e]));
		for (let [e, t] of this.sourceDocuments) (!this.desired.has(e) || fi(this.desired.get(e).pin) !== t.pin) && this.sourceDocuments.delete(e);
		for (let [e, t] of this.states) (!this.desired.has(e) || !this.desired.get(e).loaded) && (this.cancel(e), t.view?.dispose(), this.states.set(e, { status: "unloaded" }), this.desired.has(e) || this.states.delete(e));
		for (let t of e.mounts) {
			let e = this.states.get(t.id);
			e || (e = { status: "unloaded" }, this.states.set(t.id, e)), e.view?.update(t), t.loaded && (!e.view || fi(e.view.info.pin) !== fi(t.pin)) && e.attempted !== fi(t.pin) && this.schedule(t);
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
		let i = this.version, a = Lf.begin("원본 새로고침 중", "변경된 원본을 준비하고 있습니다.", () => this.cancel());
		try {
			await Ns(), await a.paint();
			for (let t of e.mounts) {
				let e = this.desired.get(t.id);
				if (!e || !t.loaded || fi(e.pin) === fi(t.pin)) continue;
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
				let c = If([this.root, ...r.map(([, e]) => e.root)]);
				this.admitMemory(c);
				let l = this.pool.textureOptions && this.textureBudget !== 0 ? Math.min(this.textureBudget, this.budget.texture) : this.budget.texture;
				if (c.geometry > this.budget.geometry || c.texture > l) throw Error("새로고침 중 메시·텍스처 표시 예산을 초과합니다. 기존 화면을 유지합니다.");
			}
			if (n.signal.throwIfAborted(), this.disposed || i !== this.version) throw Error("새로고침 준비 중 통합 배치가 변경되었습니다. 기존 화면을 유지합니다.");
			a.setCancel(), a.update({ message: "준비된 원본을 화면에 적용 중" }), t(), this.desired = new Map(e.mounts.map((e) => [e.id, e]));
			for (let [e, t] of r) t.update(e), this.root.add(t.root), this.states.get(e.id)?.view?.dispose(), this.states.set(e.id, {
				status: "ready",
				view: t,
				attempted: fi(e.pin)
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
			attempted: fi(t),
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
		let i, a = Lf.begin(e.commit ? "선택 원본 갱신 중" : "통합레벨 로드 중", "원본 정보 읽는 중", () => this.cancel());
		a.update({
			message: "원본 정보 읽는 중",
			detail: `${e.mount.name}${this.jobs.length ? ` · 대기 ${this.jobs.length}개` : ""}`
		});
		try {
			await Ns(), await a.paint(), n.throwIfAborted();
			let t = await this.storage.info(e.pin.source, e.pin);
			n.throwIfAborted();
			let o = this.pool.has(t) ? 0 : t.bytes;
			if (this.admitMemory({ encodedPeak: this.pool.encodedBytes + o * 2 }), this.pool.encodedBytes + o * 2 > this.budget.encodedPeak || this.usage.actors + t.actors > this.budget.actors) throw Error("전체 통합 로드 예산을 초과합니다. 다른 레벨을 로드 해제한 뒤 재시도하세요.");
			i = await this.pool.project(t, {
				...e.mount,
				pin: e.pin
			}, n, this.textureAdmission(), a.update), n.throwIfAborted();
			let s = If([this.root, i.root]);
			if (this.admitMemory(s), s.geometry > this.budget.geometry || s.texture > this.budget.texture) throw Error(`전체 표시 예산 초과: 메시 ${(s.geometry / 1024 ** 2).toFixed(1)}/${(this.budget.geometry / 1024 ** 2).toFixed(0)} MiB, 텍스처 ${(s.texture / 1024 ** 2).toFixed(1)}/${(this.budget.texture / 1024 ** 2).toFixed(0)} MiB. 기존 화면을 유지합니다.`);
			let c = this.desired.get(e.mount.id);
			if (!c || !c.loaded || fi(c.pin) !== fi(e.mount.pin)) throw Error("준비 중 배치 설정이 변경되었습니다.");
			a.setCancel(), a.update({
				message: "준비된 레벨을 화면에 적용 중",
				detail: e.mount.name
			}), e.commit?.(), i.update(c), this.root.add(i.root), r.view?.dispose(), this.states.set(e.mount.id, {
				status: "ready",
				view: i,
				attempted: fi(e.pin)
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
async function Gf(e) {
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
		let s = await Vt(I([a.level, o.id]));
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
			let a = await Vt(I([n.id, o.id])), c = `${a.slice(0, 8)}-${a.slice(8, 12)}-${a.slice(12, 16)}-${a.slice(16, 20)}-${a.slice(20, 32)}`;
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
				prepared: async (e, t, n) => {
					let r = a(e);
					return i.prepared({
						...e,
						pin: {
							...e.pin,
							assetRevision: r.level
						}
					}, t, n);
				},
				resourceKey: (e) => a(e).level,
				projectDocument: (e, t) => Yr(e, a(t).cell.actors)
			};
		}
	};
}
//#endregion
//#region src/delivery/SpatialResidency.ts
var Kf = Object.freeze({
	loadDistance: 50,
	unloadDistance: 75,
	unloadDelayMs: 3e3
});
function qf(e) {
	if (!e || Object.keys(e).sort().join() !== "loadDistance,unloadDelayMs,unloadDistance" || !Object.values(e).every((e) => typeof e == "number" && Number.isFinite(e)) || e.loadDistance < 0 || e.unloadDistance <= e.loadDistance || e.unloadDistance > 1e6 || e.unloadDelayMs < 0 || e.unloadDelayMs > 3e5) throw Error("로드 반경보다 언로드 반경을 크게 설정하세요. 지연은 0–300초입니다.");
	return { ...e };
}
var Jf = class {
	options;
	wanted;
	outside = /* @__PURE__ */ new Map();
	lastTime = 0;
	entries;
	constructor(e, t, n = []) {
		if (!e.spatial) throw Error("공간 경계가 포함된 게시본이 필요합니다.");
		this.options = qf(t), this.wanted = new Set(n), this.entries = e.mounts.map((t) => {
			let n = e.spatial.find((e) => e.level === t.level)?.bounds;
			return {
				id: t.id,
				enabled: t.loaded && t.visible,
				bounds: n ? new Me(new j(...n.min), new j(...n.max)).applyMatrix4(new Ve().compose(new j(...t.position), new Be(...t.rotation), new j(1, 1, 1))) : null
			};
		});
	}
	plan(e, t, n = /* @__PURE__ */ new Set()) {
		if (e.length !== 3 || !e.every(Number.isFinite) || !Number.isFinite(t) || t < 0) throw Error("Invalid streaming camera/time");
		let r = Math.max(t, this.lastTime);
		this.lastTime = r;
		let i = new j(e[0], e[1], e[2]), a = this.entries.map((e) => {
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
}, Yf = class {
	reader;
	root = new x();
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
		let n = ji(t), r = this.actorHolds.get(n) ?? {
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
		return [...this.boxes.values()].reduce((e, t) => e.union(t.box), new Me());
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
			let i = new Ve().compose(new j(...n.position), new Be(...n.rotation), new j(1, 1, 1)), a = new Me(new j(...r.min), new j(...r.max)).applyMatrix4(i), o = new k(a, 7514589);
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
		let t = e ? qf(e) : void 0, n = t && this.manifest ? new Jf(this.displayManifest ?? this.manifest, t, [...this.runtime?.states ?? []].filter(([, e]) => e.view).map(([e]) => e)) : void 0;
		this.spatialOptions = t, this.spatial = n, this.spatialPaused = !1, this.spatialStates = [], this.wanted = void 0, !t && this.runtime && this.manifest ? (this.runtime.reconcile(Di(this.displayManifest ?? this.manifest)), this.clearBoxes()) : this.updateSpatialStreaming(this.spatialCamera), this.changed();
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
			let e = Di(this.displayManifest ?? this.manifest), t = new Map(n.priority.map((e, t) => [e, t]));
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
		this.reader = e, this.automatic = t?.automatic ?? !t;
		let n = t ?? Uf;
		this.limits = Object.freeze({
			...n,
			...Bf(n, {
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
	setDisplayBudget(e) {
		if (this.disposed || this.operations) throw Error("로딩이 끝나거나 취소된 뒤 표시 예산을 변경하세요.");
		if (e.geometry === 0 && e.texture === 0) this.runtime?.setDisplayBudget(e), this.automatic = !0;
		else {
			let t = Object.freeze({
				...this.limits,
				...Bf(e, this.usage)
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
		].includes(n.status) || !n.values || typeof n.values != "object" || Array.isArray(n.values) || Object.entries(n.values).some(([e, t]) => e.length > 128 || !(t === null || typeof t == "boolean" || typeof t == "string" && t.length <= 2048 || typeof t == "number" && Number.isFinite(t))) || I(n).length > 65536) throw Error("Invalid device state");
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
	async open(e) {
		return this.enqueue(async (t) => ({
			manifest: await this.reader.manifest(e, t),
			hash: e
		}));
	}
	async openProgressive(e, t = []) {
		return this.enqueue(async (t) => ({
			manifest: await this.reader.manifest(e, t),
			hash: e
		}), this.reader, void 0, { priority: t });
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
		let r = Ei({
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
	async enqueue(e, t = this.reader, n, r) {
		if (this.disposed) throw Error("Viewer disposed");
		this.cancel(), this.spatialPaused = !1;
		let i = this.sequence, a = new AbortController();
		this.pending = a;
		let o = this.queue.catch(() => {}).then(async () => {
			let o = a.signal;
			if (o.throwIfAborted(), i !== this.sequence) throw Error("Stale delivery operation");
			let { manifest: s, hash: c } = await e(o);
			o.throwIfAborted();
			let l = await Gf(s), u = l.display, d = new Map(u.mounts.map((e) => [e.id, n?.aliases.get(l.aliases.get(e.id) ?? e.id) ?? l.aliases.get(e.id) ?? e.id])), f = this.spatialOptions ? new Jf(u, this.spatialOptions) : void 0, p = f?.plan(this.spatialCamera, performance.now(), this.protectedMounts(u, d, l.memberships)), m = p ? new Set(p.priority) : void 0, h = !(n || !r && !f || this.runtime || !s.spatial);
			h && (Object.keys(this.loadTiming).forEach((e) => {
				delete this.loadTiming[e];
			}), this.loadTiming.started = performance.now(), this.showBoxes(u), this.changed());
			let { equipment: g, actors: _ } = !n && !this.applied && this.equipmentIndex && this.actorIndex && c === this.hash ? {
				equipment: _s(this.equipmentIndex, s),
				actors: Fi(this.actorIndex, s)
			} : await t.catalogs(c, o, s);
			if (n) for (let e of _.actors) e.mountId &&= n.aliases.get(e.mountId) ?? e.mountId, e.serviceKey = ji(e);
			if (n) for (let e of g.placements) e.mountId = n.aliases.get(e.mountId) ?? e.mountId;
			o.throwIfAborted();
			let v = new Map(this.manifest?.files.map((e) => [e.hash, new TextDecoder().decode(I(e))]) ?? []);
			for (let e of s.files) if (v.has(e.hash) && v.get(e.hash) !== new TextDecoder().decode(I(e))) throw Error("Immutable file descriptor changed");
			let y = Di(u), b = new Map((p?.priority ?? r?.priority.flatMap((e) => u.mounts.filter((t) => t.id === e || d.get(t.id) === e).map((e) => e.id)) ?? []).map((e, t) => [e, t])), ee = {
				...y,
				mounts: y.mounts.map((e) => ({
					...e,
					loaded: e.loaded && (!m || m.has(e.id))
				})).sort((e, t) => (b.get(e.id) ?? b.size) - (b.get(t.id) ?? b.size))
			}, x = () => {
				this.displayManifest = u, this.aliases = d, this.memberships = l.memberships, this.spatial = f, this.wanted = m, this.spatialStates = p?.states ?? [];
			};
			if (!n && !this.applied && this.runtime && this.manifest && s.id === this.manifest.id && u.mounts.every((e) => !e.loaded || this.runtime.states.get(e.id)?.view?.info.pin.assetRevision === e.level)) {
				x(), this.runtime.reconcile(ee), this.manifest = s, this.hash = c, this.equipmentIndex = g, this.actorIndex = _, this.changed(), this.pending === a && (this.pending = void 0);
				return;
			}
			let S = h ? new AbortController() : void 0, C = l.source(t, S?.signal ?? o), w = new Ff(C), te = this.usage;
			w.configureAddons({
				environment: "delivery",
				compositionId: s.id,
				mountId: (e) => d.get(e) ?? e,
				overrides: (e, t, n) => ri(u.addonOverrides, {
					...e,
					mountId: n ?? e.mountId
				}, t)
			});
			let T = new Wf(C, w, this.automatic ? {
				...Uf,
				automatic: !0,
				actors: Math.max(0, Uf.actors - te.actors)
			} : {
				encodedPeak: Math.max(0, this.budget.encodedPeak - te.encoded),
				actors: Math.max(0, this.budget.actors - te.actors),
				geometry: Math.max(0, Math.floor(this.budget.geometry - te.geometry)),
				texture: Math.max(0, Math.floor(this.budget.texture - te.texture))
			}), E = () => T.cancel();
			o.addEventListener("abort", E, { once: !0 });
			let ne = !1;
			try {
				h && (this.streamAbort = S, this.root.add(T.root), this.runtime = T, this.manifest = s, this.hash = c, this.equipmentIndex = g, this.actorIndex = _, ne = !0, x(), this.spatialOpening = T, this.observeRuntime(T), m && this.showBoxes(u, m)), T.reconcile(ee);
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
				let t = this.runtime;
				this.root.add(T.root), this.runtime = T, this.manifest = s, this.hash = c, this.equipmentIndex = g, this.actorIndex = _, this.streamUnsubscribe?.(), this.streamUnsubscribe = void 0, this.streamAbort?.abort(), this.streamAbort = void 0, this.clearBoxes(), this.applied = n?.revision, x(), this.observeRuntime(T), m && this.showBoxes(u, m), t?.root.removeFromParent(), t?.dispose(), this.changed();
			} catch (e) {
				throw ne || T.dispose(), await T.idle(), e;
			} finally {
				this.spatialOpening === T && (this.spatialOpening = void 0), o.removeEventListener("abort", E), this.pending === a && (this.pending = void 0);
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
}, Xf = class {
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
		if (t === "persistent" && !this.binding) throw Error("Delivery persistence requires an authenticated AddonPropertiesClient");
		let n = this.list(), r = /* @__PURE__ */ new Set(), i = e.map((e) => {
			let i = Xr(e.target);
			if (r.has(i)) throw Error("Duplicate addon target");
			r.add(i);
			let a = n.find((e) => Xr(e.target) === i);
			if (!a || a.state !== "running") throw Error("Exact loaded addon instance not found");
			if (a.revision !== e.expectedRevision) throw Error("Addon property revision conflict");
			let o = Xt({
				typeVersion: 3,
				scriptPackage: a.reference
			});
			if (o.manifest.sdkVersion !== 5) throw Error("Addon SDK 5 required");
			return $r(o.manifest, e.values, t), {
				host: this.hosts().find((e) => e.list().some((e) => Xr(e.target) === i)),
				update: e
			};
		});
		if (this.binding) return await this.binding.change(e.map((e) => ({
			target: e.target,
			values: e.values,
			codeHash: n.find((t) => Xr(t.target) === Xr(e.target)).reference.codeHash
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
					let n = i.instances.find((e) => Xr(e.target) === Xr(t.target) && e.reference.codeHash === t.reference.codeHash);
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
}, Zf = class {
	canvas;
	addons = new Xf(this);
	session;
	renderer;
	perspective = new se(50, 1, .05, 1e5);
	orthographic = new ut(-10, 10, 10, -10, .05, 1e5);
	camera = this.perspective;
	projection = "perspective";
	mode = "lit";
	grid = new g(100, 100, 5593953, 3422784);
	selection = new k(new Me(), 16168528);
	quality;
	navigation;
	effects;
	environment = !1;
	environmentIntensity = 1;
	icons = !1;
	iconScale = 1;
	helpers = !0;
	selected = null;
	wire = new ke({
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
	scene = new mt();
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
		this.canvas = e, this.session = new Yf(t, !n || n.geometry === 0 && n.texture === 0 ? void 0 : {
			...Uf,
			...n
		}), this.renderer = new je({
			canvas: e,
			antialias: !0
		}), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2)), this.scene.background = new st("#25292e"), this.scene.add(this.session.root), this.renderer.shadowMap.enabled = !0, this.camera.position.set(12, 10, 12), this.controls = new ns(this.camera, e), this.controls.mouseButtons.LEFT = null, this.controls.mouseButtons.MIDDLE = qe.PAN, this.controls.mouseButtons.RIGHT = null, e.addEventListener("pointerdown", this.prepareOrbit, { capture: !0 }), this.controls.addEventListener("change", this.invalidate), this.grid.layers.set(1), this.selection.layers.set(1), this.selection.visible = !1, this.scene.add(this.grid, this.selection), this.quality = new V(this.renderer, this.scene, this.invalidate, () => this.onViewChange?.()), this.effects = new Ko(this.scene, this.renderer), this.navigation = new No(this), this.resize = new ResizeObserver(() => {
			let t = Math.max(1, e.clientWidth), n = Math.max(1, e.clientHeight);
			this.renderer.setSize(t, n, !1), this.resizeCamera(t / n), this.invalidate();
		}), this.resize.observe(e), this.pick = (t) => {
			if (t.button !== 0 || t.altKey || !this.pointerStart || Math.hypot(t.clientX - this.pointerStart.x, t.clientY - this.pointerStart.y) > 4) return;
			let n = e.getBoundingClientRect(), r = new re();
			r.setFromCamera(new Se((t.clientX - n.left) / n.width * 2 - 1, -(t.clientY - n.top) / n.height * 2 + 1), this.camera), this.session.root.updateWorldMatrix(!0, !0);
			let i = r.intersectObject(this.session.root, !0).find((e) => {
				if (!(e.object instanceof M) || !We(e.object)) return !1;
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
				this.quality.render(this.camera, e.clientWidth, e.clientHeight, this.mode === "lit", () => Wo(this.renderer, this.scene, this.camera, this.mode === "lit" ? null : this.wire, this.mode === "unlit"), {
					environmentLighting: this.environment,
					environmentIntensity: this.environmentIntensity
				});
			} finally {
				r.reverse().forEach((e) => e());
			}
		});
	}
	async open(e) {
		await this.session.open(e), this.fit();
	}
	async openSpatial(e, t = Kf) {
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
		let i = new Me();
		if (r.object.traverse((e) => {
			e.userData.actorId === t.actorId && (t.targetComponentId === null ? e === r.object : e.userData.componentId === t.targetComponentId) && i.expandByObject(e);
		}), i.isEmpty()) throw Error("Equipment has no render bounds");
		return this.selectActor({
			mountId: t.mountId,
			actorId: t.actorId
		}), this.frameBounds(i), t;
	}
	fit() {
		let e = new Me();
		this.session.root.updateWorldMatrix(!0, !0), this.session.root.traverseVisible((t) => {
			t instanceof M && We(t) && e.expandByObject(t);
		}), e.isEmpty() && e.union(this.session.placeholderBounds), !e.isEmpty() && this.frameBounds(e);
	}
	onViewChange;
	pointerStart = null;
	prepareOrbit = (e) => {
		this.pointerStart = {
			x: e.clientX,
			y: e.clientY
		}, this.controls.mouseButtons.LEFT = e.altKey ? qe.ROTATE : null;
	};
	resizeCamera(e) {
		this.perspective.aspect = e, this.perspective.updateProjectionMatrix();
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
			this.camera.position.copy(t).add(new j(...r).multiplyScalar(n)), this.camera.up.set(0, e === "top" || e === "bottom" ? 0 : 1, e === "top" ? -1 : +(e === "bottom")), this.orthographic.left = -n / 2, this.orthographic.right = n / 2, this.orthographic.zoom = 1;
		}
		this.controls.object = this.camera, this.controls.enableRotate = e === "perspective", this.camera.lookAt(t), this.resizeCamera(Math.max(1, this.canvas.clientWidth) / Math.max(1, this.canvas.clientHeight)), this.controls.update(), this.invalidate(), this.onViewChange?.();
	}
	setMode(e) {
		this.mode = e, this.invalidate(), this.onViewChange?.();
	}
	setScreenEffects(e) {
		this.effects.configure({
			...Zi,
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
		let r = new Me();
		return n.traverseVisible((e) => {
			e instanceof M && We(e) && r.expandByObject(e);
		}), r.isEmpty() && r.setFromCenterAndSize(new j(...t.positionMeters), new j(1, 1, 1)), this.frameBounds(r), t;
	}
	focusSelection() {
		if (!this.selected) return;
		let e = this.session.findActors(this.selected.actorId, this.selected.mountId)[0];
		e && this.session.resolveActor(e).focusable && this.focusActor(e);
	}
	frameBounds(e) {
		if (e.isEmpty()) return;
		let t = e.getCenter(new j()), n = Math.max(.1, e.getSize(new j()).length()), r = this.projection === "perspective" ? new j(1, .7, 1).normalize() : this.camera.getWorldDirection(new j()).negate();
		if (this.controls.target.copy(t), this.camera.position.copy(t).add(r.multiplyScalar(Math.max(2, n * 1.3))), this.camera instanceof ut) {
			let e = n * 1.3;
			this.camera.left = -e / 2, this.camera.right = e / 2, this.camera.zoom = 1;
		}
		this.camera.far = Math.max(1e3, n * 20), this.resizeCamera(Math.max(1, this.canvas.clientWidth) / Math.max(1, this.canvas.clientHeight)), this.controls.update(), this.invalidate();
	}
	async dispose() {
		if (this.disposed) return;
		this.disposed = !0;
		let e = this.addons.dispose();
		this.releaseSelection?.(), this.releaseSelection = void 0;
		for (let e of [...this.disposeListeners]) e();
		this.disposeListeners.clear(), this.frameListeners.clear(), this.actorListeners.clear(), this.onActorSelect = void 0, this.onSelect = void 0, this.onEquipmentSelect = void 0, this.renderer.setAnimationLoop(null), this.resize.disconnect(), this.canvas.removeEventListener("pointerup", this.pick), this.canvas.removeEventListener("pointerdown", this.prepareOrbit, { capture: !0 }), this.navigation.dispose(), this.quality.dispose(), this.effects.dispose(), this.grid.geometry.dispose(), this.grid.material.dispose(), this.selection.geometry.dispose(), (Array.isArray(this.selection.material) ? this.selection.material : [this.selection.material]).forEach((e) => e.dispose()), this.wire.dispose(), this.controls.removeEventListener("change", this.invalidate), this.controls.dispose(), await this.session.dispose(), this.renderer.dispose(), await e;
	}
};
//#endregion
//#region src/player/PlayerSkeletal.ts
async function Qf(e, t) {
	let n = new Yi();
	await n.importSnapshot(t);
	let r = new wl(n);
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
				let s = new Gu(c, o);
				for (let t of e.actors.flatMap((e) => e.components).filter(N)) {
					let e = t.attachmentParent;
					e?.actorId === n.id && e.componentId === i.id && (e.kind === "bone" || e.kind === "socket") && s.anchor(e.kind, e.targetId);
				}
				if (i.playback.clipAsset) {
					let e = Ll(t, i, i.playback.clipAsset);
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
//#region src/ue-import/UEMaterialGoldenParity.ts
var Q = Object.freeze({
	id: "ue55-golden-mask-v1",
	sourceMasterPath: "/Game/UEQ002Golden/M_WebMaskPBR.M_WebMaskPBR",
	graphFingerprint: "ff7be11730eac587441e7e17a20e014fbd76815cc6fc4ba2721e4fda1a7000dd",
	expressionSignature: "web-mask-pbr-v1/base-plus-ordered-mask-layers",
	comparisonKind: "linear-base-color-arithmetic-not-lit-pixels"
}), $f = [...Zd.filter((e) => e.materialProfile === "WebMaskPBR-v1"), Q].map(({ id: e, graphFingerprint: t, expressionSignature: n }) => ({
	id: e,
	graphFingerprint: t,
	expressionSignature: n
}));
`${JSON.stringify(Jt.map((e) => e.reference))}${JSON.stringify($f)}`;
//#endregion
//#region src/runtime/PlayerStart.ts
function ep(e, t) {
	let n = e.actors.flatMap((e) => e.components.filter((e) => e.type === "PlayerStart").map((t) => ({
		actor: e,
		component: t
	}))), r = t ? n.filter((e) => e.actor.id === t) : n;
	if (!r.length) throw Error("PlayerStart가 없습니다. 액터 배치에서 플레이어 스타트를 배치한 뒤 플레이하세요.");
	if (r.length !== 1) throw Error("PlayerStart가 여러 개입니다. 아웃라이너에서 사용할 시작점을 선택한 뒤 플레이하세요.");
	let { actor: i, component: a } = r[0], o = a, s = /* @__PURE__ */ new Set();
	for (; !s.has(o.id);) {
		if (s.add(o.id), o.attachmentParent?.kind === "bone" || o.attachmentParent?.kind === "socket") throw Error("본·소켓에 연결된 PlayerStart는 아직 지원하지 않습니다.");
		let t = o.attachmentParent?.componentId ?? o.parentComponentId, n = e.actors.flatMap((e) => e.components).filter(N).find((e) => e.id === t);
		if (!n) break;
		o = n;
	}
	return zn(Gn(e, {
		actorId: i.id,
		componentId: a.id
	}));
}
//#endregion
//#region src/player/WebLodDependencies.ts
async function tp(e, t, n, r) {
	if (t.metadata.webLod === void 0) return e.dependencies;
	let i = t.metadata.webLod;
	if (!i || i.profile !== "web-visual-lod-v1" || !r || typeof i.sourceAssetId != "string" || typeof i.sourceRevisionId != "string" || typeof i.sourceRevisionHash != "string" || await Vt(r.levels[0]) !== i.sourceHash || await Vt(r.levels[1]) !== i.farHash) throw Error("Player: invalid web LOD source/hash binding.");
	let a = e.dependencies.filter((e) => e.assetId !== i.sourceAssetId);
	if (a.length !== e.dependencies.length) {
		let e = n.assets.find((e) => e.id === i.sourceAssetId), t = n.revisions.find((e) => e.assetId === i.sourceAssetId && e.id === i.sourceRevisionId);
		if (e?.kind !== "StaticMesh" || !t || t.contentHash !== i.sourceRevisionHash || t.blobKeys.length !== 1 || ![i.sourceHash, `sha256:${String(i.sourceHash)}`].includes(t.blobKeys[0])) throw Error("Player: missing web LOD authoring source revision.");
	}
	return a;
}
new TextEncoder(), Cd.import.singlePayloadBytes, Cd.player.templateBytes, Cd.player.archiveBytes, Cd.player.archiveBytes, Cd.player.archiveBytes, Cd.backup.entries;
async function np(e, t, n = {}) {
	return rp(e, t, n);
}
async function rp(e, t, n, r) {
	let i = new bf(t).resolve(Ga(Ka(e)));
	i.authoring.prefabInstances?.length && Object.assign(i.authoring, { prefabInstances: [] }), Za(i, !1, n.allowCameraMarkers);
	let a = /* @__PURE__ */ new Map(), o = (e, n) => {
		let r = t.assets.find((t) => t.id === e.assetId);
		if (!r || r.kind !== n) throw Error(`Missing or unsupported Player ${n}: ${e.assetId}`);
		let i = e.revisionPolicy === "pinned" ? e.revisionId : r.currentRevisionId;
		if (!i || a.has(r.id) && a.get(r.id) !== i) throw Error(`Conflicting Player revisions for ${r.id}.`);
		return a.set(r.id, i), i;
	};
	for (let e of i.actors) for (let n of e.components) {
		if (n.type === "SkeletalMesh") {
			for (let e of n.materialOverrides) Object.assign(e.materialAsset, {
				revisionPolicy: "pinned",
				revisionId: o(e.materialAsset, "Material")
			});
			for (let [e, t] of [
				[n.meshAsset, "SkeletalMesh"],
				[n.skinBinding.skeletonAsset, "Skeleton"],
				[n.playback.clipAsset, "AnimationSequence"]
			]) e && Object.assign(e, {
				revisionPolicy: "pinned",
				revisionId: o(e, t)
			});
			continue;
		}
		if (n.type !== "StaticMesh") continue;
		if (new Set(n.materialOverrides.map((e) => e.slotId)).size !== n.materialOverrides.length) throw Error("Player: duplicate material override slot.");
		if (!n.meshAsset) {
			if (!n.shape) throw Error(`Player: ${e.name} needs a StaticMesh.`);
			for (let e of n.materialOverrides) {
				if (e.slotId !== "mesh:0/primitive:0") throw Error("Player: invalid built-in material slot.");
				Object.assign(e.materialAsset, {
					revisionPolicy: "pinned",
					revisionId: o(e.materialAsset, "Material")
				});
			}
			continue;
		}
		let r = n.meshAsset, i = o(r, "StaticMesh");
		Object.assign(r, {
			revisionPolicy: "pinned",
			revisionId: i
		});
		let a = Wc(t.revisions.find((e) => e.id === i && e.assetId === r.assetId)?.metadata.materialSlots);
		Object.assign(n, { materialOverrides: [...a.filter((e) => !n.materialOverrides.some((t) => t.slotId === e.slotId)), ...n.materialOverrides] });
		for (let e of n.materialOverrides) Object.assign(e.materialAsset, {
			revisionPolicy: "pinned",
			revisionId: o(e.materialAsset, "Material")
		});
	}
	let s = [], c = [], l = /* @__PURE__ */ new Map(), u = (e) => {
		l.has(e.key) || l.set(e.key, {
			key: e.key,
			bytes: r ? e.bytes : e.bytes.slice()
		});
	};
	for (let [e, d] of a) {
		n.signal?.throwIfAborted();
		let f = t.assets.find((t) => t.id === e), p = t.revisions.find((t) => t.id === d && t.assetId === e), m = r ? await r(e, d) : t.blobs;
		if (p && [
			"SkeletalMesh",
			"Skeleton",
			"AnimationSequence"
		].includes(f.kind)) {
			if (p.blobKeys.length !== (f.kind === "Skeleton" ? 0 : 1)) throw Error(`Unsupported Player skeletal payload count: ${e}`);
			for (let t of p.blobKeys) {
				let n = m.find((e) => e.key === t);
				if (!n || `sha256:${await Vt(n.bytes)}` !== t) throw Error(`Missing/corrupt Player skeletal blob: ${e}`);
				u(n);
			}
			let t, n = [];
			if (f.kind === "Skeleton") {
				let e = p.metadata.skeleton;
				if (!e || typeof e.sourceAssetId != "string") throw Error("Missing Player Skeleton descriptor.");
				t = { skeleton: $d(e.sourceAssetId, e) };
			} else if (f.kind === "SkeletalMesh") {
				let e = p.metadata.skeletalMesh;
				if (!e || typeof e.skeletonAssetId != "string") throw Error("Missing Player skeletal binding.");
				if (!a.has(e.skeletonAssetId)) throw Error("Player mesh Skeleton is not referenced by the Component.");
				let r = p.metadata.payloadToAsset;
				if (r && JSON.stringify(r) !== JSON.stringify([
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
				n = [{ assetId: e.skeletonAssetId }], t = {
					...rl(l.get(p.blobKeys[0]).bytes),
					skeletalMesh: structuredClone(e),
					materialSlots: structuredClone(p.metadata.materialSlots ?? [])
				};
			} else {
				let e = p.metadata.animation;
				if (!e?.skeletonAssetId || e.targets?.length !== 1) throw Error("Player clip requires one explicit mesh target.");
				if (n = [{ assetId: e.skeletonAssetId }, { assetId: e.targets[0].meshAssetId }], n.some((e) => !a.has(e.assetId))) throw Error("Player clip target is outside the frozen mesh/Skeleton closure.");
				t = { animation: structuredClone(e) };
			}
			s.push({
				...f,
				currentRevisionId: d,
				dependencies: n
			}), c.push({
				...p,
				metadata: {
					...p.metadata,
					...t
				}
			});
			continue;
		}
		if (!p || p.blobKeys.length !== 1 && (f.kind !== "Material" || p.blobKeys.length !== 2 || p.metadata.appearanceOutcome !== "user-selected-approximation" || p.metadata.sourceAppearanceHash !== p.blobKeys[1])) throw Error(`Missing/unsupported Player revision ${d}.`);
		if (p.blobKeys.length === 2) {
			let e = m.find((e) => e.key === p.blobKeys[1]);
			if (!e || await Vt(e.bytes) !== e.key) throw Error("Corrupt Player source appearance blob.");
			L(e.bytes), u(e);
		}
		let h = m.find(({ key: e }) => e === p.blobKeys[0]);
		if (!h || (typeof p.metadata.ueSourceAssetId == "string" ? `sha256:${await Vt(h.bytes)}` !== h.key : await Vt(h.bytes) !== p.contentHash)) throw Error(`Missing/corrupt Player blob for ${e}.`);
		let g, _ = [];
		if (f.kind === "StaticMesh") {
			let n = typeof p.metadata.ueSourceAssetId == "string" || p.metadata.candidateTypedMaterials === !0, r = ya(h.bytes) ? Sa(h.bytes) : null, a = await tp(f, p, t, r?.payload ?? null);
			if (!n && a.length) throw Error(`Unsupported Player mesh dependencies: ${e}`);
			if (Uc(p.metadata.payloadToAsset), g = {
				...r?.metadata ?? L(h.bytes),
				thumbnailDataUrl: ""
			}, n) {
				let e = p.metadata.materialSlots, t = g.materialSlots.length;
				if (!Array.isArray(e) || e.length !== t || e.some((e) => typeof e.slotId != "string") || new Set(e.map((e) => e.slotId)).size !== t) throw Error("Invalid Player imported material slots.");
				g.materialSlots = structuredClone(e), _ = a;
				for (let e of _) o(e, "Material");
			}
			for (let t of i.actors) for (let n of t.components) {
				if (n.type !== "StaticMesh" || n.meshAsset?.assetId !== e) continue;
				let t = g.materialSlots.map((e) => e.slotId);
				for (let e of n.materialOverrides) if (!t.includes(e.slotId)) throw Error(`Missing Player material slot: ${e.slotId}`);
			}
		} else if (f.kind === "Material") {
			let e = du(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(h.bytes)));
			if (e.kind === "WebMaskPbrMaterial" && e.mappingProfileId !== "web-authored-mask-v1" && e.mappingProfileId !== "ue-painter-vertex-atlas-v1" && e.mappingProfileId !== "ue-kind-single-atlas-v1" && e.mappingProfileId !== "ue-kind-multi-atlas-v1" && !(["u01-baked-pbr-v1", "web-authored-pbr-v1"].includes(e.mappingProfileId) && e.maskLayers.length === 0) && !$f.some((t) => t.id === e.mappingProfileId)) throw Error(`Unregistered Player WebMaskPBR profile: ${e.mappingProfileId}`);
			_ = mu(e);
			for (let e of _) o(e, "Texture");
			g = { material: e };
		} else if (f.kind === "Texture") {
			if (f.dependencies.length) throw Error(`Unsupported Player texture dependencies: ${e}`);
			let t = p.metadata.mimeType;
			if (t !== "image/png" && t !== "image/jpeg" && t !== "image/webp") throw Error(`Unsupported Player texture format: ${e}`);
			g = {
				mimeType: t,
				...R(h.bytes, t)
			};
		} else throw Error(`Unsupported Player asset kind: ${f.kind}`);
		s.push({
			...f,
			currentRevisionId: d,
			dependencies: _
		}), c.push({
			...p,
			metadata: {
				...p.metadata,
				...g
			}
		}), u(h);
	}
	for (let e of i.actors) for (let t of e.components) {
		if (t.type === "StaticMesh" && t.shape && !t.meshAsset) {
			for (let e of t.materialOverrides) {
				let t = du(c.find((t) => t.assetId === e.materialAsset.assetId).metadata.material);
				if (t.kind === "WebMaskPbrMaterial") {
					if (t.vertexAtlas) throw Error("Player Atlas material requires original vertex IDs; built-in shapes are unsupported.");
					if (t.bakeBinding) throw Error("Player baked material requires its imported mesh; built-in shapes are unsupported.");
					if (ju(t.maskLayers, e.tintOverrides), [...Object.values(t.textureViews).map((e) => e.texCoord), ...t.maskLayers.map((e) => e.mask.texCoord)].some((e) => e !== 0)) throw Error("Player built-in shape requires UV0 material.");
				} else if (e.tintOverrides.length) throw Error("Player PBR material has no tint layers.");
			}
			continue;
		}
		if (t.type !== "StaticMesh" && t.type !== "SkeletalMesh" || !t.meshAsset) continue;
		let e = c.find((e) => e.assetId === t.meshAsset.assetId), n = l.get(e.blobKeys[0]).bytes, r = ya(n) ? Sa(n).payload.levels : [n];
		for (let n of r) {
			let r = new DataView(n.buffer, n.byteOffset, n.byteLength).getUint32(12, !0), i = JSON.parse(new TextDecoder().decode(n.subarray(20, 20 + r))), a = e.metadata.materialSlots, o = i.meshes.flatMap((e) => e.primitives);
			if (t.materialOverrides.length && (!Array.isArray(a) || a.length !== o.length || a.some((e) => !e || typeof e.slotId != "string") || new Set(a.map((e) => e.slotId)).size !== a.length)) throw Error("Invalid Player material slot mapping.");
			for (let n of t.materialOverrides) {
				let r = a.findIndex((e) => e.slotId === n.slotId);
				if (r < 0) throw Error(`Missing Player material slot: ${n.slotId}`);
				let l = s.find((e) => e.id === n.materialAsset.assetId), u = du(c.find((e) => e.assetId === l.id).metadata.material);
				if (u.kind === "WebMaskPbrMaterial" && u.bakeBinding) {
					if (t.type !== "StaticMesh") throw Error("Baked material requires its static mesh.");
					su(u.bakeBinding, {
						meshAssetId: t.meshAsset.assetId,
						meshRevisionId: e.id,
						meshPayloadHash: e.contentHash,
						slotId: n.slotId,
						componentId: t.id
					});
				}
				if (u.kind === "WebMaskPbrMaterial") ju(u.maskLayers, n.tintOverrides);
				else if (n.tintOverrides.length) throw Error("Player PBR material has no tint layers.");
				if (!l.dependencies.length) continue;
				let d = o[r].attributes;
				if (u.kind === "WebMaskPbrMaterial" && u.vertexAtlas && d.COLOR_0 === void 0) throw Error("Player Atlas material requires source vertex IDs.");
				let f = i.accessors[d.POSITION], p = u.kind === "PbrMaterial" ? [0] : [
					...Object.values(u.textureViews).map((e) => e.texCoord),
					...u.maskLayers.map((e) => e.mask.texCoord),
					...u.vertexAtlas ? [0] : []
				];
				for (let e of new Set(p)) {
					let t = i.accessors[d[`TEXCOORD_${e}`]];
					if (!t || t.type !== "VEC2" || t.count !== f?.count) throw Error(`Player textured material requires TEXCOORD_${e} at ${n.slotId}.`);
				}
			}
		}
	}
	let d = /* @__PURE__ */ new Set();
	for (let e of s) {
		let n = e.folderId, r = /* @__PURE__ */ new Set();
		for (; n !== null;) {
			if (r.has(n)) throw Error("Player content folder cycle.");
			r.add(n), d.add(n);
			let e = t.folders.find((e) => e.id === n);
			if (!e) throw Error("Missing Player content folder.");
			n = e.parentId;
		}
	}
	let f = {
		assets: s,
		revisions: c,
		blobs: [...l.values()],
		folders: t.folders.filter((e) => d.has(e.id))
	};
	return await Qf(i, f), n.signal?.throwIfAborted(), {
		scene: i,
		assets: f
	};
}
//#endregion
//#region src/delivery/DeliveryAssets.ts
function ip(e, t, n, r, i) {
	let a = async () => {
		throw Error("Published assets are read-only");
	}, o = new Map(e.blobs.map((e) => [e.key, t.get(e.hash)])), s = 0, c = /* @__PURE__ */ new Set();
	return {
		get reservedTextureBytes() {
			return s;
		},
		commitImport: a,
		commitRevision: a,
		commitRevisions: a,
		setCurrentRevision: a,
		createFolder: a,
		renameFolder: a,
		renameAsset: a,
		moveAsset: a,
		deleteAsset: a,
		deleteFolder: a,
		importSnapshot: a,
		snapshot: a,
		snapshotAsset: async (t, a) => {
			r.throwIfAborted();
			let l = e.assets.assets.find((e) => e.id === t), u = e.assets.revisions.find((e) => e.assetId === t && e.id === (a ?? l?.currentRevisionId));
			if (!l || !u) throw Error("Missing frozen asset revision");
			let d = [];
			for (let e of u.blobKeys) {
				let t = o.get(e);
				if (!t) throw Error("Missing asset file");
				d.push({
					key: e,
					bytes: await n.file(t, r)
				});
			}
			r.throwIfAborted();
			let f = 0;
			if (l.kind === "Skeleton") {
				let e = u.metadata.skeleton;
				if (!e?.sourceAssetId || d.length) throw Error("Invalid skeleton metadata");
				$d(e.sourceAssetId, e);
			} else {
				let e = d[0];
				if (!e || d.length !== 1 && (l.kind !== "Material" || d.length !== 2)) throw Error("Unsupported asset payload count");
				if (l.kind === "StaticMesh") {
					Uc(u.metadata.payloadToAsset);
					let t = ya(e.bytes) ? Sa(e.bytes).payload.levels : [e.bytes];
					for (let e of t) {
						let t = L(e), n = u.metadata.candidateTypedMaterials === !0 && Wc(u.metadata.materialSlots).length === t.materialSlots.length;
						if (u.metadata.candidateTypedMaterials === !0 && !n) throw Error("Incomplete typed material slots");
						n || (f += Hd(Vd(e)).reservedBytes);
					}
				} else if (l.kind === "SkeletalMesh" || l.kind === "AnimationSequence") rl(e.bytes), f += Hd(Vd(e.bytes)).reservedBytes;
				else if (l.kind === "Material") du(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(e.bytes))), d[1] && L(d[1].bytes);
				else if (l.kind === "Texture") {
					let t = u.metadata.mimeType;
					if (t !== "image/png" && t !== "image/jpeg" && t !== "image/webp") throw Error("Unsupported image type");
					let n = R(e.bytes, t);
					f += n.width * n.height * 4 * (1 + 4 / 3);
				} else throw Error(`Unsupported published asset: ${l.kind}`);
			}
			if (!c.has(u.id)) {
				if (s + f > Rs(i, s + f, s)) throw Error("Published texture decode budget exceeded");
				s += f, c.add(u.id);
			}
			let p = l.kind === "SkeletalMesh" ? e.assets.assets.filter((e) => e.kind === "Skeleton" && l.dependencies.some((t) => t.assetId === e.id)) : [], m = e.assets.revisions.filter((e) => p.some((t) => t.currentRevisionId === e.id));
			for (let e of m) {
				let t = e.metadata.skeleton;
				if (!t?.sourceAssetId) throw Error("Missing skeleton metadata");
				$d(t.sourceAssetId, t);
			}
			return {
				...structuredClone({
					assets: [l, ...p],
					revisions: [u, ...m],
					folders: []
				}),
				blobs: d
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
}
//#endregion
//#region src/delivery/ChunkReader.ts
var ap = class {
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
function op(e, t) {
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
var sp = class {
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
		await P(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(await this.file(n, t))));
	}
	constructor(e, t = new ap()) {
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
		if (!bi(e)) throw Error("Invalid release pin");
		await this.provider.authorize?.(t);
		let n = await this.read(Si(e), yi.manifest, t);
		if (t.throwIfAborted(), n.length > yi.manifest || await Vt(n) !== e) throw Error("Release hash mismatch");
		let r = Ei(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(n)));
		if (await Vt(I(r)) !== e) throw Error("Release must use canonical encoding");
		return await this.hydrateAddons(r, t), r;
	}
	async file(e, t) {
		if (await this.provider.authorize?.(t), t.throwIfAborted(), e.bytes > yi.file) throw Error("File allocation limit");
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
			if (e && (e.length !== i.bytes || await Vt(e) !== i.hash)) {
				e = void 0, this.stats.corruptCache++;
				try {
					await this.cache.remove(i.hash);
				} catch {
					this.stats.cacheFailures++;
				}
			}
			if (e) this.stats.cacheHits++;
			else {
				if (e = await this.read(xi(i.hash), i.bytes, t), this.stats.downloaded += e.length, t.throwIfAborted(), e.length !== i.bytes || await Vt(e) !== i.hash) throw Error(`Chunk integrity failure: ${i.hash}`);
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
		if (r !== e.bytes || await Vt(n) !== e.hash) throw Error(`File integrity failure: ${e.hash}`);
		return n;
	}
	async catalogs(e, t, n) {
		let r = n ?? await this.manifest(e, t);
		if (n && await this.hydrateAddons(r, t), await Vt(I(r)) !== e) throw Error("Equipment release mismatch");
		let i = new Map(r.files.map((e) => [e.hash, e])), a = /* @__PURE__ */ new Map(), o = 0;
		for (let e of r.levels) {
			let n = i.get(e.hash);
			if (o += n.bytes, o > 64 * 1024 ** 2) throw Error("Equipment metadata exceeds 64 MiB");
			let s = Qa(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(await this.file(n, t))), e, i), c = r.cells?.find((t) => t.level === e.hash);
			c && Jr(s.envelope.payload, c.entries), a.set(e.hash, s.envelope.payload);
		}
		return t.throwIfAborted(), {
			equipment: gs(r, e, a),
			actors: Pi(r, e, a)
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
			return Qa(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(await this.file(n.get(a.hash), i))), a, n);
		};
		return {
			info: r,
			source: async (e) => {
				let r = await i(e), a = r.envelope.payload, o = [];
				for (let e of r.blobs) o.push({
					key: e.key,
					bytes: await this.file(n.get(e.hash), t)
				});
				let s = await np(a, {
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
			prepared: async (e, r, a) => {
				let o = AbortSignal.any([t, r]), s = await i(e.pin, o);
				return o.throwIfAborted(), await Xu(s.envelope.payload), o.throwIfAborted(), {
					document: s.envelope.payload,
					storage: ip(s, n, this, o, a)
				};
			}
		};
	}
};
//#endregion
//#region src/delivery/ApplicationReader.ts
async function cp(e, t, n = new AbortController().signal) {
	let r = ro(e), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
	for (let e of /* @__PURE__ */ new Set([r.candidateRelease, ...r.actors.map((e) => e.sourceRelease)])) {
		let r = new sp(t(e));
		a.set(e, r), i.set(e, await eo(r, e, n));
	}
	let o = /* @__PURE__ */ new Map();
	for (let [e, t] of i) for (let n of t.manifest.files) for (let t of n.chunks) o.set(xi(t.hash), e);
	let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
	for (let e of i.values()) for (let t of e.manifest.files) l.set(t.hash, t);
	let u = async (e) => {
		let t = await Vt(e), n = [];
		for (let t = 0; t < e.length; t += pi) {
			let r = e.slice(t, t + pi), i = await Vt(r);
			s.set(xi(i), r), n.push({
				hash: i,
				bytes: r.length
			});
		}
		return l.set(t, {
			hash: t,
			bytes: e.length,
			chunks: n
		}), t;
	}, d = (e) => u(I(e)), f = /* @__PURE__ */ new Map();
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
		}, b = await d(y), ee = await Vt(I(e)), x = `${ee.slice(0, 8)}-${ee.slice(8, 12)}-4${ee.slice(13, 16)}-8${ee.slice(17, 20)}-${ee.slice(20, 32)}`, S = a.manifest.cells?.find((e) => e.level === o.level), C = a.manifest.spatial?.find((e) => e.level === o.level)?.bounds ?? null, w = S ? S.entries.map((e) => ({
			...e,
			actors: e.actors.filter((e) => u.has(e))
		})).filter((e) => e.actors.length) : [{
			id: "always",
			actors: [...u].sort(),
			bounds: y.envelope.payload.actors.some(Kr) ? null : C
		}];
		Jr(y.envelope.payload, w), _.has(b) || (_.set(b, {
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
	let y = i.get(r.candidateRelease), b = r.actors.filter((e) => JSON.parse(e.key)[1] === null).map((e) => i.get(e.sourceRelease).manifest.objects.find((t) => t.id === JSON.parse(e.key)[2])), ee = Gt().filter((e) => g.has(e.reference.codeHash)).map((e) => ({
		...e,
		active: !1
	})), x = ee.length ? await u(new TextEncoder().encode(JSON.stringify(ee))) : null, { addonBundle: S, addonOverrides: C, ...w } = y.manifest, te = x !== null || h.length > 0, T = Ei({
		...w,
		version: te ? 5 : 4,
		contract: te ? "dt-static-composition-5" : "dt-static-composition-4",
		...te ? {
			addonBundle: x,
			addonOverrides: h
		} : {},
		objects: b,
		mounts: p,
		levels: [...new Map(m.map((e) => [e.hash, e])).values()],
		files: [...l.values()],
		spatial: [...v.values()],
		cells: [..._.values()]
	}), E = await Vt(I(T));
	return s.set(Si(E), I(T)), await ao(new sp({ read: async (e, t, n) => {
		let r = e.startsWith("releases/") ? e.slice(9, -5) : o.get(e);
		if (!r || !a.has(r)) throw Error("Unknown provenance");
		return a.get(r).provider.read(e, t, n);
	} }), r, n), {
		reader: new sp({
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
		hash: E,
		revision: await io(r),
		aliases: c
	};
}
//#endregion
//#region src/runtime/RuntimeSignalState.ts
var lp = class {
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
function up(e) {
	let { reference: t } = Xt(e), n = id[t.codeHash] ?? Yu(t.codeHash);
	if (typeof n != "function") throw Error("Installed Script factory is missing.");
	return n;
}
var dp = class {
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
}, fp = class extends dp {
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
}, pp = class extends dp {
	static typeId = "StaticMesh";
	typeId = "StaticMesh";
	getLocalTransform() {
		return this.owner.componentRuntime.assertAlive(this), this.owner.componentRuntime.spatial.get(this.id);
	}
	setLocalTransform(e) {
		this.owner.componentRuntime.assertAlive(this), this.owner.componentRuntime.spatial.set(this.id, e);
	}
}, mp = class extends dp {
	onRegister() {
		this.tickEnabled = !0;
	}
}, hp = class extends mp {
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
		super(e, t), this.createBehavior = n ?? up(t), this.schemaVersion = t.typeVersion === 1 ? 2 : t.typeVersion, this.settings = Object.freeze({ ...$t(t) }), this.references = nn(t), this.scriptPackage = Xt(t).reference, this.targetComponentId = t.targetComponentId, this.ratePerSecond = t.ratePerSecond;
	}
	get requiredComponentIds() {
		return [...new Set(this.references.map((e) => e.id))];
	}
	onRegister() {
		let e = this.sdkOwner(), t = (t) => {
			this.owner.componentRuntime.assertAlive(this);
			let n = Xt({
				typeVersion: this.schemaVersion,
				scriptPackage: this.scriptPackage
			}).manifest.settings.find((e) => e.key === t);
			if (!n || n.kind !== "component-reference" || n.componentType !== "TestData") throw Error("Setting is not a declared TestData Component reference.");
			let r = this.settings[t];
			return typeof r == "string" ? e.getComponentById(r) : void 0;
		}, n = (e) => {
			this.owner.componentRuntime.assertAlive(this);
			let t = Xt({
				typeVersion: this.schemaVersion,
				scriptPackage: this.scriptPackage
			}).manifest.settings.find((t) => t.key === e);
			if (!t || t.kind !== "component-reference" || t.componentType !== "StaticMesh") throw Error("Setting is not a declared StaticMesh reference.");
			let n = this.settings[e];
			if (typeof n != "string") return;
			let r = () => {
				this.owner.componentRuntime.assertAlive(this);
				let e = this.owner.getComponentById(n);
				if (!(e instanceof pp)) throw Error("SDK StaticMesh handle is no longer alive.");
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
			if (this.owner.componentRuntime.assertAlive(this), Xt({
				typeVersion: this.schemaVersion,
				scriptPackage: this.scriptPackage
			}).manifest.sdkVersion !== 4) throw Error("Signal API requires SDK 4.");
			let n = t(e), r = n && this.owner.getComponentById(n.id);
			if (!(r instanceof fp)) throw Error("Signal requires a declared TestData reference.");
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
				if (!(t instanceof fp)) throw Error("SDK TestData handle is no longer alive.");
				return t;
			};
			if (this.owner.componentRuntime.assertAlive(this), this.owner.getComponentById(e) instanceof fp) return Object.freeze({
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
}, gp = class {
	testDataFactory;
	scriptFactory;
	constructor(e = (e, t) => new fp(e, t), t = (e, t) => new hp(e, t)) {
		this.testDataFactory = e, this.scriptFactory = t;
	}
	create(e, t) {
		if (t.ownerActorId !== e.id || !t.id) throw Error("Invalid runtime Component identity/version.");
		if (!dn.has(t.type, t.typeVersion) || dn.validate(t.type, t.typeVersion, t, "runtime").length) throw Error("Invalid runtime Component settings.");
		if (t.type === "TestScript" && en(t), t.type === "StaticMesh" && !e.componentRuntime.spatial) throw Error("Missing spatial runtime state.");
		let n = t.type === "StaticMesh" ? new pp(e, t) : t.type === "TestData" ? this.testDataFactory(e, structuredClone(t)) : this.scriptFactory(e, structuredClone(t));
		if (n.owner !== e || n.id !== t.id || n.typeId !== t.type) throw Error("Runtime factory identity mismatch.");
		return n;
	}
}, _p = class {
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
}, vp = class {
	sessionId;
	registry;
	hasOwner;
	spatial;
	diagnostics = [];
	signals = new lp((e) => {
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
		let i = vn.create(t, e.id, r, n);
		if (i.type === "TestScript") {
			for (let t of nn(i)) if (t.field.kind !== "component-reference" || e.getComponentById(t.id)?.typeId !== t.field.componentType) throw Error("TestScript requires owned Component of the declared type.");
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
}, yp = class {
	records = /* @__PURE__ */ new Map();
	children = /* @__PURE__ */ new Map();
	overrides = /* @__PURE__ */ new Map();
	worldMatrices = /* @__PURE__ */ new Map();
	sources;
	physics;
	stopped = !1;
	constructor(e) {
		this.sources = new Map(e.authoring.ueImport?.components.map((e) => [e.webId, e]) ?? []);
		for (let t of e.actors) for (let e of t.components.filter(N)) {
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
			let i = r.parentId ? n(r.parentId) : In;
			return t.delete(e), Rn(i, Ln(this.overrides.get(e) ?? r.component.localTransform));
		};
		return zn(n(e));
	}
	bindPhysics(e, t) {
		if (this.stopped || this.physics) throw Error("Spatial physics binding is unavailable.");
		let n = new Map(t.map((e) => [e.componentId, e.bodyId]));
		if (n.size !== t.length || new Set(n.values()).size !== t.length) throw Error("Duplicate spatial collider binding.");
		let r = [...n].map(([e, t]) => {
			if (!this.records.has(e)) throw Error("Unknown spatial collider Component.");
			return {
				actorId: t,
				transform: zn(this.worldMatrix(e))
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
		let i = Rn(r.parentId ? this.worldMatrix(r.parentId, t) : In, Ln(this.overrides.get(e) ?? r.component.localTransform));
		return zn(i), t.delete(e), this.worldMatrices.set(e, i), i;
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
			let u = Rn(c.parentId ? s(c.parentId) : In, Ln(t === e ? i : this.overrides.get(t) ?? l.localTransform));
			zn(u);
			let d = this.sources.get(t);
			for (let e of d?.instances ?? []) zn(Rn(u, Ln(e.transform)));
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
				transform: zn(a.get(e))
			}] : [];
		}) : [];
		l.length && this.physics.world.prepareSpatialUpdate(l)(), Object.freeze(i.positionMeters), Object.freeze(i.rotationXyzw), Object.freeze(i.scale), this.overrides.set(e, Object.freeze(i));
		for (let e of n) this.worldMatrices.set(e, a.get(e));
	}
	stop() {
		this.stopped = !0, this.overrides.clear(), this.worldMatrices.clear(), this.physics = void 0;
	}
}, bp = class {
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
}, xp = class {
	pawn = null;
	possess(e) {
		if (!("position" in e)) throw Error("Only a live Pawn can be possessed.");
		this.pawn = e;
	}
	unpossess() {
		this.pawn = null;
	}
}, Sp = class {
	snapshot;
	registry;
	config;
	sessionId;
	sourceHash;
	abortController = new AbortController();
	actors = /* @__PURE__ */ new Map();
	components;
	spatial;
	controller = new xp();
	animationPlayback;
	state = "stopped";
	controlState = "editor";
	simulationTime = 0;
	tickCount = 0;
	timers = /* @__PURE__ */ new Map();
	simulationTickListeners = /* @__PURE__ */ new Set();
	nextTimerId = 1;
	startRequested = !1;
	constructor(e, t, n, r = () => crypto.randomUUID(), i = new gp()) {
		this.snapshot = e, this.registry = t, this.config = n, this.snapshot = structuredClone(e), this.sourceHash = Cp(e), this.sessionId = r(), this.spatial = new yp(this.snapshot), this.components = new vp(this.sessionId, i, (e) => this.actors.get(e.id) === e, this.spatial), this.animationPlayback = new nu("gameplay-runtime", this.sessionId);
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
			Ha(this.snapshot), Wa(this.snapshot);
			for (let e of this.snapshot.actors) this.actors.set(e.id, Object.assign(new _p(e.id, this.components), {
				classId: e.classId,
				beginPlayCount: 0,
				endPlayCount: 0
			}));
			this.components.reserve(this.snapshot.actors.flatMap((e) => e.components.map((e) => e.id)));
			for (let e of this.snapshot.actors) for (let t of e.components) (t.type !== "TestScript" || Xt(t).manifest.sdkVersion !== 5) && (t.type === "TestData" || t.type === "TestScript" || t.type === "StaticMesh") && this.components.construct(this.actors.get(e.id), t);
			if ((e.mode ?? "play") === "play") {
				let t = e.spawnPosition ? void 0 : ep(this.snapshot, this.config.playerStartActorId), n = e.spawnPosition ?? t.positionMeters;
				if (e.canSpawn && !e.canSpawn(n)) throw Error("Play From Here spawn is blocked by collision.");
				let r = this.registry.create(this.config.defaultPawnClassId, `${this.sessionId}:pawn`);
				if (r.position = [...n], r.rotationXyzw = [...t?.rotationXyzw ?? [
					0,
					0,
					0,
					1
				]], this.actors.has(r.id)) throw Error("Runtime Pawn ID collides with a document Actor.");
				let i = Object.assign(new _p(r.id, this.components), r);
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
		return wp(structuredClone({
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
}, Cp = (e) => JSON.stringify(e), wp = (e) => {
	if (e && typeof e == "object") {
		Object.freeze(e);
		for (let t of Object.values(e)) wp(t);
	}
	return e;
}, Tp = Object.freeze({
	packageId: "dt.mesh-motion",
	version: "1.0.0",
	codeHash: "c6b8244101f48f5c489d8da3edaa1f852a59612e3138c952c94c86aa9adfbd4d"
});
function Ep(e, t, n, r) {
	let i = /* @__PURE__ */ new Set(), a = [];
	for (let o of e.actors) for (let e of o.components) {
		if (e.type !== "TestScript") continue;
		let { reference: s, manifest: c } = Xt(e);
		if (c.sdkVersion === 5) {
			if (!c.environments.includes("delivery")) throw Error(`Addon does not support delivery: ${s.packageId}`);
			for (let e of c.capabilities) Et(e, "delivery");
			a.push({
				actorId: o.id,
				componentId: e.id,
				targetComponentId: null,
				reference: s
			});
			continue;
		}
		let l = nn(e);
		for (let e of l) {
			let a = o.components.find((t) => t.id === e.id);
			if (!a) throw Error("Script target must be owned");
			if (e.field.kind === "component-reference" && e.field.componentType === "StaticMesh") {
				if (a.type !== "StaticMesh" || a.mobility === "static") throw Error("Script target must be an owned movable StaticMesh");
				if (o.components.some((e) => e.type === "SkeletalMesh" || N(e) && e.attachmentParent)) throw Error("Delivery Script transform control does not support attached or skeletal actors");
				if (i.has(a.id)) throw Error("Competing Script transform writers");
				if (i.add(a.id), t && n && t.bindings.some((e) => e.key === ji({
					compositionId: n,
					mountId: r ?? null,
					actorId: o.id
				}) && e.presentation?.positionMeters)) throw Error("Host presentation and Script compete for actor transforms");
			}
		}
		a.push({
			actorId: o.id,
			componentId: e.id,
			targetComponentId: l[0]?.id ?? null,
			reference: s
		});
	}
	return a;
}
//#endregion
//#region src/delivery/DeliveryRuntime.ts
function Dp(e, t, n) {
	if (e.session.busy || !e.session.document) throw Error("Wait for the complete pinned model before running functions");
	let r = e.session.views.filter((e) => e.document.actors.some((e) => e.components.some((e) => e.type === "TestScript")));
	if (!r.length) throw Error("This model has no supported Script functions");
	for (let n of r) Ep(n.document, t, e.session.document.id, String(n.root.userData.deliveryMountId));
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
			let t = new Sp(e.document, new bp(), { defaultPawnClassId: "unused" });
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
					r.components.some((e) => N(e) && n.spatial.localOverride(e.id)) && t.update({
						...r,
						components: r.components.map((e) => N(e) && n.spatial.localOverride(e.id) ? {
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
//#region src/delivery/ReviewPanel.ts
function Op(e, t) {
	let n = document.createElement("section");
	n.className = "dt-review", n.setAttribute("aria-label", "액터 업데이트 검토"), e.append(n);
	let r = (e, t = "") => {
		let n = document.createElement(e);
		return n.textContent = t, n;
	}, i = r("h2", "액터 업데이트 검토"), a = r("p"), o = r("p"), s = r("input"), c = r("select"), l = r("div"), u = r("pre"), d = r("input"), f = r("div"), p = r("div"), m = r("canvas");
	o.setAttribute("role", "status"), s.placeholder = "액터 이름 / ID 검색", s.setAttribute("aria-label", "검토 액터 검색"), d.placeholder = "보류 사유", d.setAttribute("aria-label", "보류 사유");
	for (let [e, t] of [
		["changed", "변경된 항목"],
		["all", "전체"],
		["unreviewed", "미검토"],
		["approved", "승인"],
		["held", "보류"]
	]) {
		let n = r("option", t);
		n.value = e, c.append(n);
	}
	m.style.cssText = "width:100%;height:360px;display:block", p.hidden = !0, p.append(r("p", "검토 전용 화면 · 서비스 화면과 외부 업무 데이터는 그대로 유지됩니다."), m), n.append(i, a, s, c, l, d, f, u, p, o);
	let h = structuredClone(t.review), g = null, _ = !1, v = !1, y = 0, b, ee, x = [], S, C = (e, t) => {
		let n = r("button", e);
		return n.onclick = () => {
			_ || v || (_ = !0, oe(), t().catch((e) => {
				v || (o.textContent = e instanceof Error ? e.message : "검토 오류");
			}).finally(() => {
				_ = !1, v || oe();
			}));
		}, x.push(n), f.append(n), n;
	}, w = async (e, n = !1) => {
		let r = n ? h.changes.filter((e) => e.kind !== "unchanged") : h.changes.filter((e) => e.key === g);
		if (!r.length) throw Error("검토할 액터를 선택하세요.");
		h = await t.client.decide(h, r.map((t) => ({
			key: t.key,
			decision: e,
			reason: e === "held" ? d.value : ""
		}))), o.textContent = "검토 결정을 저장했습니다. 서비스 적용은 별도입니다.";
	};
	C("승인", () => w("approved")), C("보류", () => w("held")), C("승인 취소", () => w("unreviewed")), C("전체 승인", () => w("approved", !0));
	let te = async () => {
		y++, S?.stop(), S = void 0, ee?.dispose(), ee = void 0, await b?.dispose(), b = void 0, p.hidden = !0;
	}, T = async (e, n = !1) => {
		if (!e) throw Error("이전 게시본이 없습니다.");
		let r = b ? {
			position: b.camera.position.clone(),
			quaternion: b.camera.quaternion.clone(),
			target: b.controls.target.clone()
		} : null;
		await te();
		let i = ++y;
		if (v) return;
		p.hidden = !1;
		let a = new Zf(m, new sp(t.provider(e)), t.previewBudget);
		b = a;
		try {
			if (n && t.baseApplication) {
				let e = await cp(t.baseApplication, t.provider);
				await a.session.openApplication(e), a.fit();
			} else await a.open(e);
			if (v || i !== y) {
				await a.dispose();
				return;
			}
			ee = mo(a, t.host);
			let s = a.session.actors?.actors.find((e) => e.serviceKey === g);
			s && a.focusActor(s), r && (a.camera.position.copy(r.position), a.camera.quaternion.copy(r.quaternion), a.controls.target.copy(r.target), a.controls.update(), a.invalidate()), o.textContent = `검토 화면 · ${e}`;
		} catch (e) {
			throw await a.dispose(), b === a && (b = void 0), e;
		}
	};
	C("이전 모델 비교", () => T(h.baseRelease ?? h.candidateRelease, !0)), C("후보 모델 비교", () => T(h.candidateRelease)), C("미리보기 닫기", te), C("기능 시험 실행", async () => {
		if (!b) throw Error("모델 비교 화면을 먼저 여세요.");
		S?.stop(), S = Dp(b, t.host, (e) => {
			v || (o.textContent = `기능 시험 중단 · ${e}`);
		}), o.textContent = "로컬 기능 시험 중 · 실제 업무 API 연결 없음";
	}), C("기능 시험 중지·초기화", async () => {
		S?.stop(), S = void 0, ee?.update(t.host), o.textContent = "기능 시험 중지 · 초기 모델 상태 복원";
	}), t.apply && (C("선택 승인분 적용", async () => {
		if (!g || h.decisions[g]?.decision !== "approved") throw Error("승인한 액터를 선택하세요.");
		o.textContent = await t.apply(h, [g]);
	}), C("승인분 일괄 적용", async () => {
		o.textContent = await t.apply(h, h.changes.filter((e) => h.decisions[e.key]?.decision === "approved").map((e) => e.key));
	}), C("전체 승인 후 적용", async () => {
		await w("approved", !0), o.textContent = await t.apply(h, h.changes.filter((e) => e.kind !== "unchanged").map((e) => e.key));
	}));
	let E = 0, ne = r("div"), re = r("button", "이전 목록"), ie = r("button", "다음 목록"), ae = r("span");
	ne.append(re, ae, ie), l.after(ne), re.onclick = () => {
		E = Math.max(0, E - 1), oe();
	}, ie.onclick = () => {
		E++, oe();
	};
	function oe() {
		a.textContent = `검토 r${h.revision} · 기준 ${h.baseApplication ?? h.baseRelease ?? "없음"} · 후보 ${h.candidateRelease} · 외부 설정 ${h.overrideRevision}`, x.forEach((e) => {
			e.disabled = _;
		}), l.replaceChildren();
		let e = s.value.toLocaleLowerCase(), t = h.changes.filter((t) => `${t.name} ${t.key}`.toLocaleLowerCase().includes(e)).filter((e) => c.value === "all" || c.value === "changed" && e.kind !== "unchanged" || (h.decisions[e.key]?.decision ?? "unreviewed") === c.value);
		E = Math.min(E, Math.max(0, Math.ceil(t.length / 100) - 1)), ae.textContent = ` ${t.length}개 · ${E + 1}페이지 `, re.disabled = E === 0, ie.disabled = (E + 1) * 100 >= t.length;
		for (let e of t.slice(E * 100, (E + 1) * 100)) {
			let t = r("button", `${e.name} · ${e.kind} · ${h.decisions[e.key]?.decision ?? "unreviewed"}`);
			t.dataset.key = e.key, t.setAttribute("aria-pressed", String(g === e.key)), t.disabled = _, t.onclick = () => {
				g = e.key, d.value = h.decisions[e.key]?.reason ?? "", u.textContent = JSON.stringify({
					...e,
					decision: h.decisions[e.key]
				}, null, 2), oe();
			}, l.append(t);
		}
	}
	return s.oninput = c.onchange = () => {
		E = 0, oe();
	}, oe(), {
		get review() {
			return structuredClone(h);
		},
		async dispose() {
			v = !0, await te(), n.remove();
		}
	};
}
//#endregion
//#region node_modules/.pnpm/react@19.3.0/node_modules/react/cjs/react.production.js
var kp = /* @__PURE__ */ ht(((e) => {
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
	function E(e, t) {
		return T(e.type, t, e.props);
	}
	function ne(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function re(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var ie = /\/+/g;
	function ae(e, t) {
		return typeof e == "object" && e && e.key != null ? re("" + e.key) : t.toString(36);
	}
	function oe(e) {
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
	function se(e, r, i, a, o) {
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
				case d: return c = e._init, se(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + ae(e, 0) : a, S(o) ? (i = "", c != null && (i = c.replace(ie, "$&/") + "/"), se(o, r, i, "", function(e) {
			return e;
		})) : o != null && (ne(o) && (o = E(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(ie, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (S(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + ae(a, u), c += se(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + ae(a, u++), c += se(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return se(oe(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function ce(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return se(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function le(e) {
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
	var ue = typeof reportError == "function" ? reportError : function(e) {
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
	function de(e) {
		var t = w.T, n = {};
		n.types = t === null ? null : t.types, w.T = n;
		try {
			var r = e(), i = w.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(C, ue);
		} catch (e) {
			ue(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), w.T = t;
		}
	}
	function fe(e) {
		var t = w.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else de(fe.bind(null, e));
	}
	var pe = {
		map: ce,
		forEach: function(e, t, n) {
			ce(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return ce(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return ce(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!ne(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = pe, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = ee, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return w.H.useMemoCache(e);
		}
	}, e.addTransitionType = fe, e.cache = function(e) {
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
	}, e.isValidElement = ne, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: le
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = de, e.unstable_useCacheRefresh = function() {
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
})), Ap = /* @__PURE__ */ ht(((e, t) => {
	t.exports = kp();
})), jp = /* @__PURE__ */ ht(((e) => {
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
})), Mp = /* @__PURE__ */ ht(((e, t) => {
	t.exports = jp();
})), Np = Ap(), $ = Mp();
function Pp({ value: e, validate: t, onCommit: n, label: r = "테스트 값", parse: i, type: a, scrubRange: o, mixed: s = !1 }) {
	let [c, l] = (0, Np.useState)(null), [u, d] = (0, Np.useState)(!1), f = (0, Np.useRef)(null), p = (0, Np.useRef)(null), m = (0, Np.useRef)(null), h = () => {
		let e = m.current;
		m.current = null, e?.input.hasPointerCapture(e.id) && e.input.releasePointerCapture(e.id), p.current !== null && clearTimeout(p.current), p.current = null, f.current = null, l(null), d(!1);
	};
	(0, Np.useEffect)(() => {
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
	return /* @__PURE__ */ (0, $.jsx)("input", {
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
function Fp(e) {
	return /* @__PURE__ */ (0, $.jsx)(Pp, {
		...e,
		type: "number",
		parse: (e) => e.trim() === "" ? NaN : Number(e)
	});
}
//#endregion
//#region node_modules/.pnpm/scheduler@0.28.0/node_modules/scheduler/cjs/scheduler.production.js
var Ip = /* @__PURE__ */ ht(((e) => {
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
			if (n(c) !== null) m = !0, x || (x = !0, E());
			else {
				var t = n(l);
				t !== null && ie(ee, t.startTime - e);
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
								u !== null && ie(ee, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? E() : x = !1;
			}
		}
	}
	var E;
	if (typeof y == "function") E = function() {
		y(T);
	};
	else if (typeof MessageChannel < "u") {
		var ne = new MessageChannel(), re = ne.port2;
		ne.port1.onmessage = T, E = function() {
			re.postMessage(null);
		};
	} else E = function() {
		_(T, 0);
	};
	function ie(t, n) {
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
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(S), S = -1) : h = !0, ie(ee, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, x || (x = !0, E()))), r;
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
})), Lp = /* @__PURE__ */ ht(((e, t) => {
	t.exports = Ip();
})), Rp = /* @__PURE__ */ ht(((e) => {
	var t = Ap();
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
})), zp = /* @__PURE__ */ ht(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = Rp();
})), Bp = /* @__PURE__ */ ht(((e) => {
	var t = Lp(), n = Ap(), r = zp();
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
	var C = Object.assign, w = Symbol.for("react.element"), te = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), ie = Symbol.for("react.consumer"), ae = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), fe = Symbol.for("react.legacy_hidden"), pe = Symbol.for("react.memo_cache_sentinel"), me = Symbol.for("react.view_transition"), he = Symbol.for("react.recoverable"), ge = Symbol.iterator;
	function _e(e) {
		return typeof e != "object" || !e ? null : (e = ge && e[ge] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var D = Symbol.for("react.client.reference");
	function ve(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === D ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case E: return "Fragment";
			case re: return "Profiler";
			case ne: return "StrictMode";
			case se: return "Suspense";
			case ce: return "SuspenseList";
			case de: return "Activity";
			case me: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case T: return "Portal";
			case ae: return e.displayName || "Context";
			case ie: return (e._context.displayName || "Context") + ".Consumer";
			case oe:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case le: return t = e.displayName || null, t === null ? ve(e.type) || "Memo" : t;
			case ue:
				t = e._payload, e = e._init;
				try {
					return ve(e(t));
				} catch {}
		}
		return null;
	}
	var ye = Array.isArray, O = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, be = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, xe = [], Se = -1;
	function Ce(e) {
		return { current: e };
	}
	function we(e) {
		0 > Se || (e.current = xe[Se], xe[Se] = null, Se--);
	}
	function A(e, t) {
		Se++, xe[Se] = e.current, e.current = t;
	}
	var Te = Ce(null), Ee = Ce(null), De = Ce(null), Oe = Ce(null);
	function ke(e, t) {
		switch (A(De, t), A(Ee, e), A(Te, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? cp(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = cp(t), e = lp(t, e);
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
		we(Te), A(Te, e);
	}
	function Ae() {
		we(Te), we(Ee), we(De);
	}
	function je(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, A(Oe, e)), t = Te.current;
		var n = lp(t, e.type);
		t !== n && (A(Ee, e), A(Te, n));
	}
	function Me(e) {
		Ee.current === e && (we(Te), we(Ee)), Oe.current === e && (we(Oe), sh._currentValue = be);
	}
	var Ne, Pe;
	function Fe(e) {
		if (Ne === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Ne = t && t[1] || "", Pe = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Ne + e + Pe;
	}
	var Ie = !1;
	function Le(e, t) {
		if (!e || Ie) return "";
		Ie = !0;
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
			Ie = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Fe(n) : "";
	}
	function Re(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Fe(e.type);
			case 16: return Fe("Lazy");
			case 13: return e.child !== t && t !== null ? Fe("Suspense Fallback") : Fe("Suspense");
			case 19: return Fe("SuspenseList");
			case 0:
			case 15: return Le(e.type, !1);
			case 11: return Le(e.type.render, !1);
			case 1: return Le(e.type, !0);
			case 31: return Fe("Activity");
			case 30: return Fe("ViewTransition");
			default: return "";
		}
	}
	function ze(e) {
		try {
			var t = "", n = null;
			do
				t += Re(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Be = Object.prototype.hasOwnProperty, Ve = t.unstable_scheduleCallback, He = t.unstable_cancelCallback, Ue = t.unstable_shouldYield, We = t.unstable_requestPaint, Ge = t.unstable_now, Ke = t.unstable_getCurrentPriorityLevel, j = t.unstable_ImmediatePriority, qe = t.unstable_UserBlockingPriority, Je = t.unstable_NormalPriority, Ye = t.unstable_LowPriority, Xe = t.unstable_IdlePriority, Ze = t.log, Qe = t.unstable_setDisableYieldValue, $e = null, et = null;
	function tt(e) {
		if (typeof Ze == "function" && Qe(e), et && typeof et.setStrictMode == "function") try {
			et.setStrictMode($e, e);
		} catch {}
	}
	var nt = Math.clz32 ? Math.clz32 : M, rt = Math.log, it = Math.LN2;
	function M(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (rt(e) / it | 0) | 0;
	}
	var at = 256, ot = 262144, st = 4194304;
	function ct(e) {
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
	function lt(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = ct(n))) : i = ct(o) : i = ct(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = ct(n))) : i = ct(o)) : i = ct(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function ut(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function dt(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - nt(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function ft(e, t) {
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
	function pt() {
		var e = st;
		return st <<= 1, !(st & 62914560) && (st = 4194304), e;
	}
	function mt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function ht(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function gt(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - nt(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && _t(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function _t(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - nt(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function N(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - nt(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function vt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : yt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function yt(e) {
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
	function bt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function xt() {
		var e = k.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function St(e, t) {
		var n = k.p;
		try {
			return k.p = e, t();
		} finally {
			k.p = n;
		}
	}
	var Ct = Math.random().toString(36).slice(2), wt = "__reactFiber$" + Ct, Tt = "__reactProps$" + Ct, Et = "__reactContainer$" + Ct, Dt = "__reactEvents$" + Ct, Ot = "__reactListeners$" + Ct, kt = "__reactHandles$" + Ct, At = "__reactResources$" + Ct, jt = "__reactMarker$" + Ct, Mt = "__reactLoad$" + Ct;
	function Nt(e) {
		delete e[wt], delete e[Tt], delete e[Ot], delete e[kt];
	}
	function Pt(e) {
		var t;
		if (t = e[wt]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Et] || n[wt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[wt]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Ft(e) {
		if (e = e[wt] || e[Et]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function It(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Lt(e) {
		var t = e[At];
		return t ||= e[At] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Rt(e) {
		e[jt] = !0;
	}
	function zt(e) {
		e[Mt] = void 0;
	}
	var Bt = /* @__PURE__ */ new Set(), Vt = {};
	function Ht(e, t) {
		Ut(e, t), Ut(e + "Capture", t);
	}
	function Ut(e, t) {
		for (Vt[e] = t, e = 0; e < t.length; e++) Bt.add(t[e]);
	}
	var Wt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Gt = {}, Kt = {};
	function qt(e) {
		return Be.call(Kt, e) ? !0 : Be.call(Gt, e) ? !1 : Wt.test(e) ? Kt[e] = !0 : (Gt[e] = !0, !1);
	}
	var P = !1;
	function Jt() {
		var e = P;
		return P = !1, e;
	}
	function Yt(e, t, n) {
		if (qt(t)) {
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
	function Xt(e, t, n) {
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
	function Zt(e, t, n, r) {
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
	function Qt(e) {
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
	function $t(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function en(e, t, n) {
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
	function tn(e) {
		if (!e._valueTracker) {
			var t = $t(e) ? "checked" : "value";
			e._valueTracker = en(e, t, "" + e[t]);
		}
	}
	function nn(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = $t(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var rn = /[\n"\\]/g;
	function an(e) {
		return e.replace(rn, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function on(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Qt(t)) : e.value !== "" + Qt(t) && (e.value = "" + Qt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : cn(e, Qt(n)) : o === "number" && e.value == t ? cn(e, Qt(e.value)) : cn(e, Qt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Qt(s) : e.removeAttribute("name");
	}
	function sn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				tn(e);
				return;
			}
			n = n == null ? "" : "" + Qt(n), t = t == null ? n : "" + Qt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), tn(e);
	}
	function cn(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function ln(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Qt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function un(e, t, n) {
		if (t != null && (t = "" + Qt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + Qt(n);
	}
	function dn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (ye(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Qt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), tn(e);
	}
	function fn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var pn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function mn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || pn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function hn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", P = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (mn(e, a, r), P = !0);
		} else for (var o in t) t.hasOwnProperty(o) && mn(e, o, t[o]);
	}
	function gn(e) {
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
	var _n = /* @__PURE__ */ new Map([
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
	]), vn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function yn(e) {
		return vn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function bn() {}
	var xn = null;
	function Sn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Cn = null, wn = null;
	function Tn(e) {
		var t = Ft(e);
		if (t && (e = t.stateNode)) {
			var n = e[Tt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (on(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + an("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[Tt] || null;
								if (!a) throw Error(i(90));
								on(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && nn(r);
					}
					break a;
				case "textarea":
					un(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && ln(e, !!n.multiple, t, !1);
			}
		}
	}
	var En = !1;
	function Dn(e, t, n) {
		if (En) return e(t, n);
		En = !0;
		try {
			return e(t);
		} finally {
			if (En = !1, (Cn !== null || wn !== null) && (Ld(), Cn && (t = Cn, e = wn, wn = Cn = null, Tn(t), e))) for (t = 0; t < e.length; t++) Tn(e[t]);
		}
	}
	function On(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[Tt] || null;
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
	var kn = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), An = !1;
	if (kn) try {
		var jn = {};
		Object.defineProperty(jn, "passive", { get: function() {
			An = !0;
		} }), window.addEventListener("test", jn, jn), window.removeEventListener("test", jn, jn);
	} catch {
		An = !1;
	}
	var Mn = null, Nn = null, Pn = null;
	function Fn() {
		if (Pn) return Pn;
		var e, t = Nn, n = t.length, r, i = "value" in Mn ? Mn.value : Mn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Pn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function In(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Ln() {
		return !0;
	}
	function Rn() {
		return !1;
	}
	function zn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Ln : Rn, this.isPropagationStopped = Rn, this;
		}
		return C(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Ln);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Ln);
			},
			persist: function() {},
			isPersistent: Ln
		}), t;
	}
	var Bn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Vn = zn(Bn), Hn = C({}, Bn, {
		view: 0,
		detail: 0
	}), Un = zn(Hn), Wn, Gn, Kn, qn = C({}, Hn, {
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
		getModifierState: rr,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Wn = e.screenX - Kn.screenX, Gn = e.screenY - Kn.screenY) : Gn = Wn = 0, Kn = e), Wn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Gn;
		}
	}), Jn = zn(qn), Yn = zn(C({}, qn, { dataTransfer: 0 })), Xn = zn(C({}, Hn, { relatedTarget: 0 })), Zn = zn(C({}, Bn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Qn = zn(C({}, Bn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), F = zn(C({}, Bn, { data: 0 })), $n = {
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
	}, er = {
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
	}, tr = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function nr(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = tr[e]) ? !!t[e] : !1;
	}
	function rr() {
		return nr;
	}
	var ir = zn(C({}, Hn, {
		key: function(e) {
			if (e.key) {
				var t = $n[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = In(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? er[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: rr,
		charCode: function(e) {
			return e.type === "keypress" ? In(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? In(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), ar = zn(C({}, qn, {
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
	})), or = zn(C({}, Bn, { submitter: 0 })), sr = zn(C({}, Hn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: rr
	})), cr = zn(C({}, Bn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), lr = zn(C({}, qn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), ur = zn(C({}, Bn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), dr = [
		9,
		13,
		27,
		32
	], fr = kn && "CompositionEvent" in window, pr = null;
	kn && "documentMode" in document && (pr = document.documentMode);
	var mr = kn && "TextEvent" in window && !pr, hr = kn && (!fr || pr && 8 < pr && 11 >= pr), gr = " ", _r = !1;
	function vr(e, t) {
		switch (e) {
			case "keyup": return dr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function yr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var br = !1;
	function xr(e, t) {
		switch (e) {
			case "compositionend": return yr(t);
			case "keypress": return t.which === 32 ? (_r = !0, gr) : null;
			case "textInput": return e = t.data, e === gr && _r ? null : e;
			default: return null;
		}
	}
	function Sr(e, t) {
		if (br) return e === "compositionend" || !fr && vr(e, t) ? (e = Fn(), Pn = Nn = Mn = null, br = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return hr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Cr = {
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
	function wr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Cr[e.type] : t === "textarea";
	}
	function Tr(e, t, n, r) {
		Cn ? wn ? wn.push(r) : wn = [r] : Cn = r, t = Kf(t, "onChange"), 0 < t.length && (n = new Vn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Er = null, Dr = null;
	function Or(e) {
		zf(e, 0);
	}
	function kr(e) {
		if (nn(It(e))) return e;
	}
	function Ar(e, t) {
		if (e === "change") return t;
	}
	var jr = !1;
	if (kn) {
		var Mr;
		if (kn) {
			var Nr = "oninput" in document;
			if (!Nr) {
				var Pr = document.createElement("div");
				Pr.setAttribute("oninput", "return;"), Nr = typeof Pr.oninput == "function";
			}
			Mr = Nr;
		} else Mr = !1;
		jr = Mr && (!document.documentMode || 9 < document.documentMode);
	}
	function Fr() {
		Er && (Er.detachEvent("onpropertychange", Ir), Dr = Er = null);
	}
	function Ir(e) {
		if (e.propertyName === "value" && kr(Dr)) {
			var t = [];
			Tr(t, Dr, e, Sn(e)), Dn(Or, t);
		}
	}
	function Lr(e, t, n) {
		e === "focusin" ? (Fr(), Er = t, Dr = n, Er.attachEvent("onpropertychange", Ir)) : e === "focusout" && Fr();
	}
	function Rr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return kr(Dr);
	}
	function zr(e, t) {
		if (e === "click") return kr(t);
	}
	function Br(e, t) {
		if (e === "input" || e === "change") return kr(t);
	}
	function Vr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Hr = typeof Object.is == "function" ? Object.is : Vr;
	function Ur(e, t) {
		if (Hr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Be.call(t, i) || !Hr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Wr(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Gr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Kr(e, t) {
		var n = Gr(e);
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
			n = Gr(n);
		}
	}
	function qr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Jr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Wr(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Wr(e.document);
		}
		return t;
	}
	function Yr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Xr = kn && "documentMode" in document && 11 >= document.documentMode, Zr = null, Qr = null, $r = null, ei = !1;
	function ti(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		ei || Zr == null || Zr !== Wr(r) || (r = Zr, "selectionStart" in r && Yr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), $r && Ur($r, r) || ($r = r, r = Kf(Qr, "onSelect"), 0 < r.length && (t = new Vn("onSelect", "select", null, t, n), e.push({
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
	kn && (ai = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
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
		mi.set(e, t), Ht(t, [e]);
	}
	var _i = 0;
	function vi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = vd.identifierPrefix;
		var n = _i++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function yi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Ed;
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
	var I = typeof reportError == "function" ? reportError : function(e) {
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
	}, xi = [], Si = 0, Ci = 0;
	function wi() {
		for (var e = Si, t = Ci = Si = 0; t < e;) {
			var n = xi[t];
			xi[t++] = null;
			var r = xi[t];
			xi[t++] = null;
			var i = xi[t];
			xi[t++] = null;
			var a = xi[t];
			if (xi[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && Oi(n, i, a);
		}
	}
	function Ti(e, t, n, r) {
		xi[Si++] = e, xi[Si++] = t, xi[Si++] = n, xi[Si++] = r, Ci |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Ei(e, t, n, r) {
		return Ti(e, t, n, r), ki(e);
	}
	function Di(e, t) {
		return Ti(e, null, null, t), ki(e);
	}
	function Oi(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - nt(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function ki(e) {
		if (50 < Dd) throw Dd = 0, Od = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Ai = {};
	function ji(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Mi(e, t, n, r) {
		return new ji(e, t, n, r);
	}
	function Ni(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Pi(e, t) {
		var n = e.alternate;
		return n === null ? (n = Mi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Fi(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function Ii(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Ni(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, Te.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case de: return e = Mi(31, n, t, a), e.elementType = de, e.lanes = o, e;
			case E: return Li(n.children, a, o, t);
			case ne:
				s = 8, a |= 24;
				break;
			case re: return e = Mi(12, n, t, a | 2), e.elementType = re, e.lanes = o, e;
			case se: return e = Mi(13, n, t, a), e.elementType = se, e.lanes = o, e;
			case ce: return e = Mi(19, n, t, a), e.elementType = ce, e.lanes = o, e;
			case fe:
			case me: return e = a | 32, e = Mi(30, n, t, e), e.elementType = me, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case ae:
						s = 10;
						break a;
					case ie:
						s = 9;
						break a;
					case oe:
						s = 11;
						break a;
					case le:
						s = 14;
						break a;
					case ue:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Mi(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Li(e, t, n, r) {
		return e = Mi(7, e, r, t), e.lanes = n, e;
	}
	function Ri(e, t, n) {
		return e = Mi(6, e, null, t), e.lanes = n, e;
	}
	function zi(e) {
		var t = Mi(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Bi(e, t, n) {
		return t = Mi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Vi = /* @__PURE__ */ new WeakMap();
	function Hi(e, t) {
		if (typeof e == "object" && e) {
			var n = Vi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: ze(t)
			}, Vi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: ze(t)
		};
	}
	var Ui = [], Wi = 0, Gi = null, Ki = 0, qi = [], Ji = 0, Yi = null, Xi = 1, Zi = "";
	function Qi(e, t) {
		Ui[Wi++] = Ki, Ui[Wi++] = Gi, Gi = e, Ki = t;
	}
	function $i(e, t, n) {
		qi[Ji++] = Xi, qi[Ji++] = Zi, qi[Ji++] = Yi, Yi = e;
		var r = Xi;
		e = Zi;
		var i = 32 - nt(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - nt(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Xi = 1 << 32 - nt(t) + i | n << i | r, Zi = a + e;
		} else Xi = 1 << a | n << i | r, Zi = e;
	}
	function ea(e) {
		e.return !== null && (Qi(e, 1), $i(e, 1, 0));
	}
	function ta(e) {
		for (; e === Gi;) Gi = Ui[--Wi], Ui[Wi] = null, Ki = Ui[--Wi], Ui[Wi] = null;
		for (; e === Yi;) Yi = qi[--Ji], qi[Ji] = null, Zi = qi[--Ji], qi[Ji] = null, Xi = qi[--Ji], qi[Ji] = null;
	}
	function na(e, t) {
		qi[Ji++] = Xi, qi[Ji++] = Zi, qi[Ji++] = Yi, Xi = t.id, Zi = t.overflow, Yi = e;
	}
	var ra = null, L = null, R = !1, ia = null, aa = !1, oa = Error(i(519));
	function sa(e) {
		throw pa(Hi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), oa;
	}
	function ca(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[wt] = e, t[Tt] = r, n) {
			case "dialog":
				Z("cancel", t), Z("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Z("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < Lf.length; n++) Z(Lf[n], t);
				break;
			case "source":
				Z("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Z("error", t), Z("load", t);
				break;
			case "details":
				Z("toggle", t);
				break;
			case "input":
				Z("invalid", t), sn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Z("invalid", t);
				break;
			case "textarea": Z("invalid", t), dn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Qf(t.textContent, n) ? (r.popover != null && (Z("beforetoggle", t), Z("toggle", t)), r.onScroll != null && Z("scroll", t), r.onScrollEnd != null && Z("scrollend", t), r.onClick != null && (t.onclick = bn), t = !0) : t = !1, t || sa(e, !0);
	}
	function la(e) {
		for (ra = e.return; ra;) switch (ra.tag) {
			case 5:
			case 31:
			case 13:
				aa = !1;
				return;
			case 27:
			case 3:
				aa = !0;
				return;
			default: ra = ra.return;
		}
	}
	function ua(e) {
		if (e !== ra) return !1;
		if (!R) return la(e), R = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || dp(e.type, e.memoizedProps)), n = !n), n && L && sa(e), la(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			L = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			L = dm(e);
		} else t === 27 ? (t = L, bp(e.type) ? (e = um, um = null, L = e) : L = t) : L = ra ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function da() {
		L = ra = null, R = !1;
	}
	function fa() {
		var e = ia;
		return e !== null && (ud === null ? ud = e : ud.push.apply(ud, e), ia = null), e;
	}
	function pa(e) {
		ia === null ? ia = [e] : ia.push(e);
	}
	var ma = Ce(null), ha = null, z = null;
	function ga(e, t, n) {
		A(ma, t._currentValue), t._currentValue = n;
	}
	function _a(e) {
		e._currentValue = ma.current, we(ma);
	}
	function va(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function ya(e, t, n, r) {
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
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), va(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), va(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), va(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
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
	function ba(e, t, n, r) {
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
					Hr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === Oe.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && ya(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function xa(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Hr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function Sa(e) {
		ha = e, z = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Ca(e) {
		return Ta(ha, e);
	}
	function wa(e, t) {
		return ha === null && Sa(e), Ta(e, t);
	}
	function Ta(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, z === null) {
			if (e === null) throw Error(i(308));
			z = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else z = z.next = t;
		return n;
	}
	var Ea = typeof AbortController < "u" ? AbortController : function() {
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
	}, Da = t.unstable_scheduleCallback, Oa = t.unstable_NormalPriority, ka = {
		$$typeof: ae,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Aa() {
		return {
			controller: new Ea(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function ja(e) {
		e.refCount--, e.refCount === 0 && Da(Oa, function() {
			e.controller.abort();
		});
	}
	function Ma(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var Na = null;
	function Pa(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Fa = null, Ia = 0, La = 0, Ra = null;
	function za(e, t) {
		if (Fa === null) {
			var n = Fa = [];
			Ia = 0, La = Mf(), Ra = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Ia++, t.then(B, B), t;
	}
	function B() {
		if (--Ia === 0 && (Na = null, Fa !== null)) {
			Ra !== null && (Ra.status = "fulfilled");
			var e = Fa;
			Fa = null, La = 0, Ra = null;
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
	var Va = O.S;
	O.S = function(e, t) {
		if (pd = Ge(), typeof t == "object" && t && typeof t.then == "function" && za(e, t), Na !== null) for (var n = vf; n !== null;) Ma(n, Na), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = vf; r !== null;) Ma(r, n), r = r.next;
			if (La !== 0) {
				r = Na, r === null && (r = Na = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		Va !== null && Va(e, t);
	};
	var Ha = Ce(null);
	function Ua() {
		var e = Ha.current;
		return e === null ? Zu.pooledCache : e;
	}
	function Wa(e, t) {
		t === null ? A(Ha, Ha.current) : A(Ha, t.pool);
	}
	function Ga() {
		var e = Ua();
		return e === null ? null : {
			parent: ka._currentValue,
			pool: e
		};
	}
	var Ka = Error(i(460)), qa = Error(i(474)), Ja = Error(i(542)), Ya = { then: function() {} };
	function Xa(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Za(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(bn, bn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, to(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(bn, bn);
				else {
					if (e = Zu, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
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
			return e = Pi(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Ri(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === E ? (e = d(e, t, n.props.children, r, n.key), ao(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === ue && Qa(i) === t.type) ? (t = a(t, n.props), ao(t, n), t.return = e, t) : (t = Ii(n.type, n.key, n.props, null, e.mode, r), ao(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Bi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Li(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Ri("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case te: return n = Ii(t.type, t.key, t.props, null, e.mode, n), ao(n, t), n.return = e, n;
					case T: return t = Bi(t, e.mode, n), t.return = e, t;
					case ue: return t = Qa(t), f(e, t, n);
				}
				if (ye(t) || _e(t)) return t = Li(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, io(t), n);
				if (t.$$typeof === ae) return f(e, wa(e, t), n);
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
					case ue: return n = Qa(n), p(e, t, n, r);
				}
				if (ye(n) || _e(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, io(n), r);
				if (n.$$typeof === ae) return p(e, t, wa(e, n), r);
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
					case ue: return r = Qa(r), m(e, t, n, r, i);
				}
				if (ye(r) || _e(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, io(r), i);
				if (r.$$typeof === ae) return m(e, t, n, wa(t, r), i);
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
			if (h === s.length) return n(i, d), R && Qi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return R && Qi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), R && Qi(i, h), l;
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
			if (v.done) return n(a, h), R && Qi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return R && Qi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), R && Qi(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === E && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case te:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === E) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), ao(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === ue && Qa(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), ao(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === E ? (c = Li(o.props.children, e.mode, c, o.key), ao(c, o), c.return = e, e = c) : (c = Ii(o.type, o.key, o.props, null, e.mode, c), ao(c, o), c.return = e, e = c);
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
							c = Bi(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case ue: return o = Qa(o), _(e, r, o, c);
				}
				if (ye(o)) return h(e, r, o, c);
				if (_e(o)) {
					if (l = _e(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, io(o), c);
				if (o.$$typeof === ae) return _(e, r, wa(e, o), c);
				oo(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Ri(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				ro = 0;
				var i = _(e, t, n, r);
				return no = null, i;
			} catch (t) {
				if (t === Ka || t === Ja) throw t;
				var a = Mi(29, t, null, e.mode);
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
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = ki(e), Oi(e, null, n), t;
		}
		return Ti(e, r, t, n), ki(e);
	}
	function go(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, N(e, n);
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
			var e = Ra;
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
				if (p ? (J & f) === f : (r & f) === f) {
					f !== 0 && f === La && (vo = !0), u !== null && (u = u.next = {
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
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), id |= o, e.lanes = o, e.memoizedState = d;
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
	var Co = Ce(null), wo = Ce(0);
	function To(e, t) {
		e = nd, A(wo, e), A(Co, t), nd = e | t.baseLanes;
	}
	function Eo() {
		A(wo, nd), A(Co, Co.current);
	}
	function Do() {
		nd = wo.current, we(Co), we(wo);
	}
	var Oo = Ce(null), ko = null;
	function Ao(e) {
		var t = e.alternate;
		A(Fo, Fo.current & 1), A(Oo, e), ko === null && (t === null || Co.current !== null || t.memoizedState !== null) && (ko = e);
	}
	function jo(e) {
		A(Fo, Fo.current), A(Oo, e), ko === null && (ko = e);
	}
	function Mo(e) {
		e.tag === 22 ? (A(Fo, Fo.current), A(Oo, e), ko === null && (ko = e)) : No();
	}
	function No() {
		A(Fo, Fo.current), A(Oo, Oo.current);
	}
	function Po(e) {
		we(Oo), ko === e && (ko = null), we(Fo);
	}
	var Fo = Ce(0);
	function Io(e, t) {
		A(Oo, Oo.current), A(Fo, t);
	}
	function Lo(e) {
		we(Fo), we(Oo), ko === e && (ko = null);
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
	var zo = 0, V = null, Bo = null, Vo = null, Ho = !1, Uo = !1, Wo = !1, Go = 0, Ko = 0, qo = null, Jo = 0;
	function Yo() {
		throw Error(i(321));
	}
	function Xo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Hr(e[n], t[n])) return !1;
		return !0;
	}
	function Zo(e, t, n, r, i, a) {
		return zo = a, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, O.H = e === null || e.memoizedState === null ? fc : pc, Wo = !1, a = n(r, i), Wo = !1, Uo && (a = $o(t, n, r, i)), Qo(e), a;
	}
	function Qo(e) {
		O.H = dc;
		var t = Bo !== null && Bo.next !== null;
		if (zo = 0, Vo = Bo = V = null, Ho = !1, Ko = 0, qo = null, t) throw Error(i(300));
		e === null || Ac || (e = e.dependencies, e !== null && xa(e) && (Ac = !0));
	}
	function $o(e, t, n, r) {
		V = e;
		var a = 0;
		do {
			if (Uo && (qo = null), Ko = 0, Uo = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Vo = Bo = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			O.H = mc, o = t(n, r);
		} while (Uo);
		return o;
	}
	function es() {
		var e = O.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? os(t) : t, e = e.useState()[0], (Bo === null ? null : Bo.memoizedState) !== e && (V.flags |= 1024), t;
	}
	function H() {
		var e = Go !== 0;
		return Go = 0, e;
	}
	function ts(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function ns(e) {
		if (Ho) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Ho = !1;
		}
		zo = 0, Vo = Bo = V = null, Uo = !1, Ko = Go = 0, qo = null;
	}
	function rs() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Vo === null ? V.memoizedState = Vo = e : Vo = Vo.next = e, Vo;
	}
	function is() {
		if (Bo === null) {
			var e = V.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = Bo.next;
		var t = Vo === null ? V.memoizedState : Vo.next;
		if (t !== null) Vo = t, Bo = e;
		else {
			if (e === null) throw V.alternate === null ? Error(i(467)) : Error(i(310));
			Bo = e, e = {
				memoizedState: Bo.memoizedState,
				baseState: Bo.baseState,
				baseQueue: Bo.baseQueue,
				queue: Bo.queue,
				next: null
			}, Vo === null ? V.memoizedState = Vo = e : Vo = Vo.next = e;
		}
		return Vo;
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
		var t = Ko;
		return Ko += 1, qo === null && (qo = []), e = Za(qo, e, t), t = V, (Vo === null ? t.memoizedState : Vo.next) === null && (t = t.alternate, O.H = t === null || t.memoizedState === null ? fc : pc), e;
	}
	function ss(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return os(e);
			if (e.$$typeof === he) return;
			if (e.$$typeof === ae) return Ca(e);
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
		}, n === null && (n = as(), V.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = pe;
		return t.index++, n;
	}
	function ls(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function us(e) {
		return ds(is(), Bo, e);
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
				if (f === u.lane ? (zo & f) === f : (J & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === La && (d = !0);
					else if ((zo & p) === p) {
						u = u.next, p === La && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, V.lanes |= p, id |= p;
					f = u.action, Wo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, V.lanes |= f, id |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Hr(o, e.memoizedState) && (Ac = !0, d && (n = Ra, n !== null))) throw n;
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
			Hr(o, t.memoizedState) || (Ac = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function ps(e, t, n) {
		var r = V, a = is(), o = R;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Hr((Bo || a).memoizedState, n);
		if (s && (a.memoizedState = n, Ac = !0), a = a.queue, Rs(gs.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Vo !== null && !!(Vo.memoizedState.tag & 1), Ns(e ? 9 : 8, { destroy: void 0 }, hs.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, Zu === null) throw Error(i(349));
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
			return !Hr(e, n);
		} catch {
			return !0;
		}
	}
	function vs(e) {
		var t = Di(e, 2);
		t !== null && Md(t, e, 2);
	}
	function ys(e) {
		var t = rs();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Wo) {
				tt(!0);
				try {
					n();
				} finally {
					tt(!1);
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
		return e.baseState = n, ds(e, Bo, typeof r == "function" ? r : ls);
	}
	function xs(e, t, n, r, a) {
		if (cc(e)) throw Error(i(485));
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
			O.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Ss(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Ss(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = O.T, o = {};
			o.types = a === null ? null : a.types, O.T = o;
			try {
				var s = n(i, r), c = O.S;
				c !== null && c(o, s), Cs(e, t, s);
			} catch (n) {
				Ts(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), O.T = a;
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
		if (R) {
			var n = Zu.formState;
			if (n !== null) {
				a: {
					var r = V;
					if (R) {
						if (L) {
							b: {
								for (var i = L, a = aa; i.nodeType !== 8;) {
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
								L = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						sa(r);
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
		}, n.queue = r, n = ac.bind(null, V, r), r.dispatch = n, r = ys(!1), a = sc.bind(null, V, !1, r.queue), r = rs(), i = {
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
		return As(is(), Bo, e);
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
		var t = is(), n = Bo;
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
		Bo !== null && r !== null && Xo(r, Bo.memoizedState.deps) ? i.memoizedState = Ns(t, a, n, r) : (V.flags |= e, i.memoizedState = Ns(1 | t, a, n, r));
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
	function Bs(e) {
		var t = is().memoizedState;
		return zs({
			ref: t,
			nextImpl: e
		}), function() {
			if (K & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Vs(e, t) {
		return Is(4, 2, e, t);
	}
	function Hs(e, t) {
		return Is(4, 4, e, t);
	}
	function Us(e, t) {
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
	function Ws(e, t, n) {
		n = n == null ? null : n.concat([e]), Is(4, 4, Us.bind(null, t, e), n);
	}
	function Gs() {}
	function Ks(e, t) {
		var n = is();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function U(e, t) {
		var n = is();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Xo(t, r[1])) return r[0];
		if (r = e(), Wo) {
			tt(!0);
			try {
				e();
			} finally {
				tt(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function qs(e, t, n) {
		return n === void 0 || zo & 1073741824 && !(J & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Ad(), V.lanes |= e, id |= e, n);
	}
	function Js(e, t, n, r) {
		return Hr(n, t) ? n : Co.current === null ? !(zo & 106) || zo & 1073741824 && !(J & 261930) ? (Ac = !0, e.memoizedState = n) : (e = Ad(), V.lanes |= e, id |= e, t) : (e = qs(e, n, r), Hr(e, t) || (Ac = !0), e);
	}
	function Ys(e, t, n, r, i) {
		var a = k.p;
		k.p = a !== 0 && 8 > a ? a : 8;
		var o = O.T, s = {};
		s.types = o === null ? null : o.types, O.T = s, sc(e, !1, t, n);
		try {
			var c = i(), l = O.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? oc(e, t, Ba(c, r), kd(e)) : oc(e, t, r, kd(e));
		} catch (n) {
			oc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, kd());
		} finally {
			k.p = a, o !== null && s.types !== null && (o.types = s.types), O.T = o;
		}
	}
	function Xs() {}
	function Zs(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = Qs(e).queue;
		Ys(e, a, t, be, n === null ? Xs : function() {
			return $s(e), n(r);
		});
	}
	function Qs(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: be,
			baseState: be,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ls,
				lastRenderedState: be
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
	function $s(e) {
		var t = Qs(e);
		t.next === null && (t = e.alternate.memoizedState), oc(e, t.next.queue, {}, kd());
	}
	function ec() {
		return Ca(sh);
	}
	function tc() {
		return is().memoizedState;
	}
	function nc() {
		return is().memoizedState;
	}
	function rc(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = kd();
					e = mo(n);
					var r = ho(t, e, n);
					r !== null && (Md(r, t, n), go(r, t, n)), t = { cache: Aa() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function ic(e, t, n) {
		var r = kd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, cc(e) ? lc(t, n) : (n = Ei(e, t, n, r), n !== null && (Md(n, e, r), uc(n, t, r)));
	}
	function ac(e, t, n) {
		oc(e, t, n, kd());
	}
	function oc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (cc(e)) lc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Hr(s, o)) return Ti(e, t, i, 0), Zu === null && wi(), !1;
			} catch {}
			if (n = Ei(e, t, i, r), n !== null) return Md(n, e, r), uc(n, t, r), !0;
		}
		return !1;
	}
	function sc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Mf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, cc(e)) {
			if (t) throw Error(i(479));
		} else t = Ei(e, n, r, 2), t !== null && Md(t, e, 2);
	}
	function cc(e) {
		var t = e.alternate;
		return e === V || t !== null && t === V;
	}
	function lc(e, t) {
		Uo = Ho = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function uc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, N(e, n);
		}
	}
	var dc = {
		readContext: Ca,
		use: ss,
		useCallback: Yo,
		useContext: Yo,
		useEffect: Yo,
		useImperativeHandle: Yo,
		useLayoutEffect: Yo,
		useInsertionEffect: Yo,
		useMemo: Yo,
		useReducer: Yo,
		useRef: Yo,
		useState: Yo,
		useDebugValue: Yo,
		useDeferredValue: Yo,
		useTransition: Yo,
		useSyncExternalStore: Yo,
		useId: Yo,
		useHostTransitionStatus: Yo,
		useFormState: Yo,
		useActionState: Yo,
		useOptimistic: Yo,
		useMemoCache: Yo,
		useCacheRefresh: Yo,
		useEffectEvent: Yo
	}, fc = {
		readContext: Ca,
		use: ss,
		useCallback: function(e, t) {
			return rs().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Ca,
		useEffect: Ls,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Fs(4194308, 4, Us.bind(null, t, e), n);
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
			if (Wo) {
				tt(!0);
				try {
					e();
				} finally {
					tt(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = rs();
			if (n !== void 0) {
				var i = n(t);
				if (Wo) {
					tt(!0);
					try {
						n(t);
					} finally {
						tt(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = ic.bind(null, V, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = rs();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = ys(e);
			var t = e.queue, n = ac.bind(null, V, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Gs,
		useDeferredValue: function(e, t) {
			return qs(rs(), e, t);
		},
		useTransition: function() {
			var e = ys(!1);
			return e = Ys.bind(null, V, e.queue, !0, !1), rs().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = V, a = rs();
			if (R) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Zu === null) throw Error(i(349));
				J & 127 || ms(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Ls(gs.bind(null, r, o, e), [e]), r.flags |= 2048, Ns(9, { destroy: void 0 }, hs.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = rs(), t = Zu.identifierPrefix;
			if (R) {
				var n = Zi, r = Xi;
				n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Go++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Jo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: ec,
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
			return t.queue = n, t = sc.bind(null, V, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: cs,
		useCacheRefresh: function() {
			return rs().memoizedState = rc.bind(null, V);
		},
		useEffectEvent: function(e) {
			var t = rs(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (K & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, pc = {
		readContext: Ca,
		use: ss,
		useCallback: Ks,
		useContext: Ca,
		useEffect: Rs,
		useImperativeHandle: Ws,
		useInsertionEffect: Vs,
		useLayoutEffect: Hs,
		useMemo: U,
		useReducer: us,
		useRef: Ps,
		useState: function() {
			return us(ls);
		},
		useDebugValue: Gs,
		useDeferredValue: function(e, t) {
			return Js(is(), Bo.memoizedState, e, t);
		},
		useTransition: function() {
			var e = us(ls)[0], t = is().memoizedState;
			return [typeof e == "boolean" ? e : os(e), t];
		},
		useSyncExternalStore: ps,
		useId: tc,
		useHostTransitionStatus: ec,
		useFormState: ks,
		useActionState: ks,
		useOptimistic: function(e, t) {
			return bs(is(), Bo, e, t);
		},
		useMemoCache: cs,
		useCacheRefresh: nc,
		useEffectEvent: Bs
	}, mc = {
		readContext: Ca,
		use: ss,
		useCallback: Ks,
		useContext: Ca,
		useEffect: Rs,
		useImperativeHandle: Ws,
		useInsertionEffect: Vs,
		useLayoutEffect: Hs,
		useMemo: U,
		useReducer: fs,
		useRef: Ps,
		useState: function() {
			return fs(ls);
		},
		useDebugValue: Gs,
		useDeferredValue: function(e, t) {
			var n = is();
			return Bo === null ? qs(n, e, t) : Js(n, Bo.memoizedState, e, t);
		},
		useTransition: function() {
			var e = fs(ls)[0], t = is().memoizedState;
			return [typeof e == "boolean" ? e : os(e), t];
		},
		useSyncExternalStore: ps,
		useId: tc,
		useHostTransitionStatus: ec,
		useFormState: Ms,
		useActionState: Ms,
		useOptimistic: function(e, t) {
			var n = is();
			return Bo === null ? (n.baseState = e, [e, n.queue.dispatch]) : bs(n, Bo, e, t);
		},
		useMemoCache: cs,
		useCacheRefresh: nc,
		useEffectEvent: Bs
	};
	function hc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var gc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = kd(), i = mo(r);
			i.payload = t, n != null && (i.callback = n), t = ho(e, i, r), t !== null && (Md(t, e, r), go(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = kd(), i = mo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ho(e, i, r), t !== null && (Md(t, e, r), go(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = kd(), r = mo(n);
			r.tag = 2, t != null && (r.callback = t), t = ho(e, r, n), t !== null && (Md(t, e, n), go(t, e, n));
		}
	};
	function _c(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(i, a) : !0;
	}
	function vc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && gc.enqueueReplaceState(t, t.state, null);
	}
	function yc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = C({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function bc(e) {
		I(e);
	}
	function xc(e) {
		console.error(e);
	}
	function Sc(e) {
		I(e);
	}
	function Cc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function wc(e, t, n) {
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
	function Tc(e, t, n) {
		return n = mo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Cc(e, t);
		}, n;
	}
	function Ec(e) {
		return e = mo(e), e.tag = 3, e;
	}
	function Dc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				wc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			wc(t, n, r), typeof i != "function" && (gd === null ? gd = /* @__PURE__ */ new Set([this]) : gd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Oc(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && ba(t, n, a, !0), n = Oo.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return ko === null ? Wd() : n.alternate === null && rd === 0 && (rd = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Ya ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), ff(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Ya ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), ff(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return ff(e, r, a), Wd(), !1;
		}
		if (R) return t = Oo.current, t === null ? (r !== oa && (t = Error(i(423), { cause: r }), pa(Hi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Hi(r, n), a = Tc(e.stateNode, r, a), _o(e, a), rd !== 4 && (rd = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== oa && (e = Error(i(422), { cause: r }), pa(Hi(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Hi(o, n), ld === null ? ld = [o] : ld.push(o), rd !== 4 && (rd = 2), t === null) return !0;
		r = Hi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Tc(n.stateNode, r, e), _o(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (gd === null || !gd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = Ec(a), Dc(a, e, n, r), _o(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var kc = Error(i(461)), Ac = !1;
	function jc(e, t, n, r) {
		t.child = e === null ? lo(t, null, n, r) : co(t, e.child, n, r);
	}
	function Mc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return Sa(t), r = Zo(e, t, n, o, a, i), s = H(), e !== null && !Ac ? (ts(e, t, i), ol(e, t, i)) : (R && s && ea(t), t.flags |= 1, jc(e, t, r, i), t.child);
	}
	function Nc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Ni(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Pc(e, t, a, r, i)) : (e = Ii(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !sl(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Ur : n, n(o, r) && e.ref === t.ref) return ol(e, t, i);
		}
		return t.flags |= 1, e = Pi(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Pc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Ur(a, r) && e.ref === t.ref) {
				if (Ac = !1, t.pendingProps = r = a, sl(e, i)) e.flags & 131072 && (Ac = !0);
				else return t.lanes = e.lanes, ol(e, t, i);
			}
		}
		return Hc(e, t, n, r, i);
	}
	function Fc(e, t, n, r) {
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
				return Lc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Wa(t, a === null ? null : a.cachePool), a === null ? Eo() : To(t, a), Mo(t);
			else return r = t.lanes = 536870912, Lc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Wa(t, null), Eo(), No()) : (Wa(t, a.cachePool), To(t, a), No(), t.memoizedState = null);
		return jc(e, t, i, n), t.child;
	}
	function Ic(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Lc(e, t, n, r, i) {
		var a = Ua();
		return a = a === null ? null : {
			parent: ka._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Wa(t, null), Eo(), Mo(t), e !== null && ba(e, t, r, !0), t.childLanes = i, null;
	}
	function Rc(e, t) {
		return t = Zc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function zc(e, t, n) {
		return co(t, e.child, null, n), e = Rc(t, t.pendingProps), e.flags |= 2, Po(t), t.memoizedState = null, e;
	}
	function Bc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (R) {
				if (r.mode === "hidden") return e = Rc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Ic(null, e);
				if (jo(t), (e = L) ? (e = am(e, aa), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Yi === null ? null : {
						id: Xi,
						overflow: Zi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = zi(e), n.return = t, t.child = n, ra = t, L = null)) : e = null, e === null) throw sa(t);
				return t.lanes = 536870912, null;
			}
			return Rc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (jo(t), a) {
				if (t.flags & 256) t.flags &= -257, t = zc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (Ac || ba(e, t, n, !1), a = (n & e.childLanes) !== 0, Ac || a) {
				if (Co.current === null) {
					if (r = Zu, r !== null && (s = vt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Di(e, s), Md(r, e, s), kc;
					Wd();
				}
				t = zc(e, t, n);
			} else e = o.treeContext, L = lm(s.nextSibling), ra = t, R = !0, ia = null, aa = !1, e !== null && na(t, e), t = Rc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = Pi(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Vc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Hc(e, t, n, r, i) {
		return Sa(t), n = Zo(e, t, n, r, void 0, i), r = H(), e !== null && !Ac ? (ts(e, t, i), ol(e, t, i)) : (R && r && ea(t), t.flags |= 1, jc(e, t, n, i), t.child);
	}
	function Uc(e, t, n, r, i, a) {
		return Sa(t), t.updateQueue = null, n = $o(t, r, n, i), Qo(e), r = H(), e !== null && !Ac ? (ts(e, t, a), ol(e, t, a)) : (R && r && ea(t), t.flags |= 1, jc(e, t, n, a), t.child);
	}
	function Wc(e, t, n, r, i) {
		if (Sa(t), t.stateNode === null) {
			var a = Ai, o = n.contextType;
			typeof o == "object" && o && (a = Ca(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = gc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, fo(t), o = n.contextType, a.context = typeof o == "object" && o ? Ca(o) : Ai, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (hc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && gc.enqueueReplaceState(a, a.state, null), bo(t, r, a, i), yo(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = yc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Ai, typeof u == "object" && u && (o = Ca(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && vc(t, a, r, o), uo = !1;
			var f = t.memoizedState;
			a.state = f, bo(t, r, a, i), yo(), l = t.memoizedState, s || f !== l || uo ? (typeof d == "function" && (hc(t, n, d, r), l = t.memoizedState), (c = uo || _c(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, po(e, t), o = t.memoizedProps, u = yc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Ai, typeof l == "object" && l && (c = Ca(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && vc(t, a, r, c), uo = !1, f = t.memoizedState, a.state = f, bo(t, r, a, i), yo();
			var p = t.memoizedState;
			o !== d || f !== p || uo || e !== null && e.dependencies !== null && xa(e.dependencies) ? (typeof s == "function" && (hc(t, n, s, r), p = t.memoizedState), (u = uo || _c(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && xa(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Vc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = co(t, e.child, null, i), t.child = co(t, null, n, i)) : jc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = ol(e, t, i), e;
	}
	function Gc(e, t, n, r) {
		return da(), t.flags |= 256, jc(e, t, n, r), t.child;
	}
	var Kc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function qc(e) {
		return {
			baseLanes: e,
			cachePool: Ga()
		};
	}
	function Jc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= sd), e;
	}
	function Yc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Fo.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (R) {
				if (i ? Ao(t) : No(), (e = L) ? (e = am(e, aa), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Yi === null ? null : {
						id: Xi,
						overflow: Zi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = zi(e), n.return = t, t.child = n, ra = t, L = null)) : e = null, e === null) throw sa(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (No(), i = t.mode, a = Zc({
				mode: "hidden",
				children: a
			}, i), r = Li(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = qc(n), r.childLanes = Jc(e, o, n), t.memoizedState = Kc, Ic(null, r)) : (Ao(t), Xc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return $c(e, t, a, o, r, c, s, n);
		}
		return i ? (No(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Pi(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Li(i, a, n, null), i.flags |= 2) : i = Pi(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Ic(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = qc(n) : (a = i.cachePool, a === null ? a = Ga() : (s = ka._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Jc(e, o, n), t.memoizedState = Kc, Ic(e.child, r)) : (Ao(t), n = e.child, e = n.sibling, n = Pi(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Xc(e, t) {
		return t = Zc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Zc(e, t) {
		return e = Mi(22, e, null, t), e.lanes = 0, e;
	}
	function Qc(e, t, n) {
		return co(t, e.child, null, n), e = Xc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function $c(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (Ao(t), t.flags &= -257, Qc(e, t, c)) : t.memoizedState === null ? (No(), o = a.fallback, s = t.mode, a = Zc({
			mode: "visible",
			children: a.children
		}, s), o = Li(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, co(t, e.child, null, c), a = t.child, a.memoizedState = qc(c), a.childLanes = Jc(e, r, c), t.memoizedState = Kc, Ic(null, a)) : (No(), t.child = e.child, t.flags |= 128, null);
		if (Ao(t), sm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, pa({
				value: a,
				source: null,
				stack: null
			})), Qc(e, t, c);
		}
		if (Ac || ba(e, t, c, !1), r = (c & e.childLanes) !== 0, Ac || r) {
			if (Co.current !== null) return Qc(e, t, c);
			if (r = Zu, r !== null && (a = vt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Di(e, a), Md(r, e, a), kc;
			return om(o) || Wd(), Qc(e, t, c);
		}
		return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, L = lm(o.nextSibling), ra = t, R = !0, ia = null, aa = !1, e !== null && na(t, e), t = Xc(t, a.children), t.flags |= 134221824, t);
	}
	function el(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), va(e.return, t, n);
	}
	function tl(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Ro(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function nl(e, t, n, r, i, a) {
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
	function rl(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function il(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = Fo.current;
		if (t.flags & 128) return Io(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Io(t, o), i === "backwards" && e !== null ? (rl(e), jc(e, t, r, n), rl(e)) : jc(e, t, r, n), r = R ? Ki : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && el(e, n, t);
			else if (e.tag === 19) el(e, n, t);
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
				n = tl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, rl(t)), nl(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Ro(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				nl(t, !0, n, null, a, r);
				break;
			case "together":
				nl(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = tl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), nl(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function al(e, t, n) {
		var r = t.pendingProps;
		return ga(t, t.type, r.value), jc(e, t, r.children, n), t.child;
	}
	function ol(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), id |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (ba(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Pi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Pi(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function sl(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && xa(e)));
	}
	function cl(e, t, n) {
		switch (t.tag) {
			case 3:
				ke(t, t.stateNode.containerInfo), ga(t, ka, e.memoizedState.cache), da();
				break;
			case 27:
			case 5:
				je(t);
				break;
			case 4:
				ke(t, t.stateNode.containerInfo);
				break;
			case 10:
				ga(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, jo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return Ao(t), t.flags |= 128, null;
					r = ba(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? Yc(e, t, n) : (Ao(t), e = ol(e, t, n), e === null ? null : e.sibling);
				}
				Ao(t);
				break;
			case 19:
				if (t.flags & 128) return il(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (ba(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return il(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Io(t, Fo.current), r) break;
				return null;
			case 22: return t.lanes = 0, Fc(e, t, n, t.pendingProps);
			case 24: ga(t, ka, e.memoizedState.cache);
		}
		return ol(e, t, n);
	}
	function ll(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Ac = !0;
			else {
				if (!sl(e, n) && !(t.flags & 128)) return Ac = !1, cl(e, t, n);
				Ac = !!(e.flags & 131072);
			}
		} else Ac = !1, R && t.flags & 1048576 && $i(t, Ki, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Qa(t.elementType), t.type = e, typeof e == "function") Ni(e) ? (r = yc(e, r), t.tag = 1, t = Wc(null, t, e, r, n)) : (t.tag = 0, t = Hc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === oe) {
								t.tag = 11, t = Mc(null, t, e, r, n);
								break a;
							}
							if (a === le) {
								t.tag = 14, t = Nc(null, t, e, r, n);
								break a;
							}
							if (a === ae) {
								t.tag = 10, t.type = e, t = al(null, t, n);
								break a;
							}
						}
						throw t = ve(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Hc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = yc(r, t.pendingProps), Wc(e, t, r, a, n);
			case 3:
				a: {
					if (ke(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, po(e, t), bo(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, ga(t, ka, r), r !== o.cache && ya(t, [ka], n, !0), yo(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = Gc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Hi(Error(i(424)), t), pa(a), t = Gc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (L = lm(e.firstChild), ra = t, R = !0, ia = null, aa = !0, n = lo(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (da(), r === a) {
							t = ol(e, t, n);
							break a;
						}
						jc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Vc(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : R || (t.stateNode = up(t.type, t.pendingProps, De.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return je(t), e === null && R && (r = t.stateNode = hm(t.type, t.pendingProps, De.current), ra = t, aa = !0, a = L, bp(t.type) ? (um = a, L = lm(r.firstChild)) : L = a), jc(e, t, t.pendingProps.children, n), Vc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && R && ((a = r = L) && (r = rm(r, t.type, t.pendingProps, aa), r === null ? a = !1 : (t.stateNode = r, ra = t, L = lm(r.firstChild), aa = !1, a = !0)), a || sa(t)), je(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, dp(a, o) ? r = null : s !== null && dp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Zo(e, t, es, null, null, n), sh._currentValue = a), Vc(e, t), jc(e, t, r, n), t.child;
			case 6: return e === null && R && ((e = n = L) && (n = im(n, t.pendingProps, aa), n === null ? e = !1 : (t.stateNode = n, ra = t, L = null, e = !0)), e || sa(t)), null;
			case 13: return Yc(e, t, n);
			case 4: return ke(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = co(t, null, r, n) : jc(e, t, r, n), t.child;
			case 11: return Mc(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Vc(e, t), jc(e, t, r, n), t.child;
			case 8: return jc(e, t, t.pendingProps.children, n), t.child;
			case 12: return jc(e, t, t.pendingProps.children, n), t.child;
			case 10: return al(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, Sa(t), a = Ca(a), r = r(a), t.flags |= 1, jc(e, t, r, n), t.child;
			case 14: return Nc(e, t, t.type, t.pendingProps, n);
			case 15: return Pc(e, t, t.type, t.pendingProps, n);
			case 19: return il(e, t, n);
			case 31: return Bc(e, t, n);
			case 22: return Fc(e, t, n, t.pendingProps);
			case 24: return Sa(t), r = Ca(ka), e === null ? (a = Ua(), a === null && (a = Zu, o = Aa(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, fo(t), ga(t, ka, a)) : ((e.lanes & n) !== 0 && (po(e, t), bo(t, null, null, n), yo()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, ga(t, ka, r), r !== a.cache && ya(t, [ka], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ga(t, ka, r))), jc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : R && ea(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Vc(e, t), jc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function ul(e) {
		e.flags |= 4;
	}
	function dl(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Vd()) e.flags |= 8192;
				else throw $a = Ya, qa;
			}
		} else e.flags &= -16777217;
	}
	function fl(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Vd()) e.flags |= 8192;
			else throw $a = Ya, qa;
		}
	}
	function pl(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : pt(), e.lanes |= t, cd |= t);
	}
	function ml(e, t) {
		if (!R) switch (e.tailMode) {
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
	function hl(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function gl(e, t, n) {
		var r = t.pendingProps;
		switch (ta(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return hl(t), null;
			case 1: return hl(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), _a(ka), Ae(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ua(t) ? ul(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, fa())), hl(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (ul(t), o === null ? (hl(t), dl(t, a, null, r, n)) : (hl(t), fl(t, o))) : o ? o === e.memoizedState ? (hl(t), t.flags &= -16777217) : (ul(t), hl(t), fl(t, o)) : (e = e.memoizedProps, e !== r && ul(t), hl(t), dl(t, a, e, r, n)), null;
			case 27:
				if (Me(t), n = De.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && ul(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return hl(t), t.subtreeFlags &= -33554433, null;
					}
					e = Te.current, ua(t) ? ca(t, e) : (e = hm(a, r, n), t.stateNode = e, ul(t));
				}
				return hl(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (Me(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && ul(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return hl(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = Te.current, ua(t)) ca(t, o);
					else {
						var s = sp(De.current);
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
						o[wt] = t, o[Tt] = r;
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
						a: switch (ep(o, a, r), a) {
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
						r && ul(t);
					}
				}
				return hl(t), t.subtreeFlags &= -33554433, dl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && ul(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = De.current, ua(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = ra, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[wt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Qf(e.nodeValue, n)), e || sa(t, !0);
					} else e = sp(e).createTextNode(r), e[wt] = t, t.stateNode = e;
				}
				return hl(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = ua(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[wt] = t;
						} else da(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						hl(t), e = !1;
					} else n = fa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Po(t), t) : (Po(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return hl(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = ua(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[wt] = t;
						} else da(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						hl(t), a = !1;
					} else a = fa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Po(t), t) : (Po(t), null);
				}
				return Po(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), pl(t, t.updateQueue), hl(t), null);
			case 4: return Ae(), e === null && Hf(t.stateNode.containerInfo), t.flags |= 67108864, hl(t), null;
			case 10: return _a(t.type), hl(t), null;
			case 19:
				if (Lo(t), r = t.memoizedState, r === null) return hl(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) ml(r, !1);
					else {
						if (rd !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Ro(e), o !== null) {
								for (t.flags |= 128, ml(r, !1), e = o.updateQueue, t.updateQueue = e, pl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Fi(n, e), n = n.sibling;
								return Io(t, Fo.current & 1 | 2), R && Qi(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Ge() > md && (t.flags |= 128, a = !0, ml(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Ro(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, pl(t, e), ml(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !R) return hl(t), null;
						} else 2 * Ge() - r.renderingStartTime > md && n !== 536870912 && (t.flags |= 128, a = !0, ml(r, !1), t.lanes = 4194304);
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
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Ge(), e.sibling = null, o = Fo.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || R ? Io(t, o) : (n = o, A(Oo, t), A(Fo, n), ko === null && (ko = t)), R && Qi(t, r.treeForkCount), e;
				}
				return hl(t), null;
			case 22:
			case 23: return Po(t), Do(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (hl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : hl(t), n = t.updateQueue, n !== null && pl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && we(Ha), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), _a(ka), hl(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, hl(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function _l(e, t) {
		switch (ta(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return _a(ka), Ae(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return Me(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Po(t), t.alternate === null) throw Error(i(340));
					da();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Po(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					da();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Lo(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return Ae(), null;
			case 10: return _a(t.type), null;
			case 22:
			case 23: return Po(t), Do(), e !== null && we(Ha), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return _a(ka), null;
			case 25: return null;
			default: return null;
		}
	}
	function vl(e, t) {
		switch (ta(t), t.tag) {
			case 3:
				_a(ka), Ae();
				break;
			case 26:
			case 27:
			case 5:
				Me(t);
				break;
			case 4:
				Ae();
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
				_a(t.type);
				break;
			case 22:
			case 23:
				Po(t), Do(), e !== null && we(Ha);
				break;
			case 24: _a(ka);
		}
	}
	function yl(e, t) {
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
			X(t, t.return, e);
		}
	}
	function bl(e, t, n) {
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
								X(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			X(t, t.return, e);
		}
	}
	function xl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				So(t, n);
			} catch (t) {
				X(e, e.return, t);
			}
		}
	}
	function Sl(e, t, n) {
		n.props = yc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			X(e, t, n);
		}
	}
	function W(e, t) {
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
						(i.ref === null || i.ref.name !== a) && (i.ref = Np(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new $(e);
							f(e.child, !1, Qp, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			X(e, t, n);
		}
	}
	function Cl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				X(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				X(e, t, n);
			}
			else n.current = null;
		}
	}
	function wl(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
	}
	function Tl(e) {
		for (var t = e.return; t !== null && (Ol(t) && em(e.stateNode, t.stateNode), !Dl(t));) t = t.return;
	}
	function El(e) {
		for (var t = e.return; t !== null && (Ol(t) && tm(e.stateNode, t.stateNode), !Dl(t));) t = t.return;
	}
	function Dl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function Ol(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function kl(e) {
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
			X(e, e.return, t);
		}
	}
	function Al(e, t, n) {
		try {
			var r = e.stateNode;
			np(r, e.type, n, t), r[Tt] = t;
		} catch (t) {
			X(e, e.return, t);
		}
	}
	function jl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && bp(e.type) || e.tag === 4;
	}
	function Ml(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || jl(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && bp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Nl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bn)), wl(e, r), P = !0;
		else if (i !== 4 && (i === 27 && (wl(e, r), r = null, bp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Nl(e, t, n, r), e = e.sibling; e !== null;) Nl(e, t, n, r), e = e.sibling;
	}
	function Pl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), wl(e, r), P = !0;
		else if (i !== 4 && (i === 27 && (wl(e, r), r = null, bp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Pl(e, t, n, r), e = e.sibling; e !== null;) Pl(e, t, n, r), e = e.sibling;
	}
	function Fl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			ep(t, r, n), t[wt] = e, t[Tt] = n;
		} catch (t) {
			X(e, e.return, t);
		}
	}
	var Il = !1, Ll = null;
	function Rl(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (Il = !0);
	}
	var zl = null;
	function Bl() {
		var e = zl;
		return zl = null, e;
	}
	var Vl = 0;
	function Hl(e, t, n, r, i) {
		return Vl = 0, Ul(e.child, t, n, r, i);
	}
	function Ul(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Ep(o);
					r.push(s), s.view && (a = !0);
				} else a || Ep(o).view && (a = !0);
				Il = !0, Cp(o, Vl === 0 ? t : t + "_" + Vl, n), Vl++;
			} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Ul(e.child, t, n, r, i) && (a = !0));
			e = e.sibling;
		}
		return a;
	}
	function Wl(e, t) {
		for (; e !== null;) e.tag === 5 ? wp(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Wl(e.child, t)), e = e.sibling;
	}
	function Gl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Gl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = bi(t.default, t.share), t !== "none" && (Hl(e, n, t, null, !1) || Wl(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Kl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = vi(r, n), a = bi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Gl(e) : Hl(e, i, a, null, !1) ? (Gl(e), n.paired || t || jd(e, r.onEnter)) : Wl(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Kl(e, t), e = e.sibling;
		else Gl(e);
	}
	function ql(e) {
		if (Ll !== null && Ll.size !== 0) {
			var t = Ll;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = bi(n.default, n.share);
								if (a !== "none" && (Hl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, jd(e, n.onShare)) : Wl(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					ql(e);
				}
				e = e.sibling;
			}
		}
	}
	function Jl(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = vi(t, e.stateNode), r = Ll === null ? void 0 : Ll.get(n), i = bi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Hl(e, n, i, null, !1) ? r === void 0 ? jd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Ll.delete(n), jd(e, t.onShare)) : Wl(e.child, !1)), Ll !== null && ql(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Jl(e), e = e.sibling;
		else Ll !== null && ql(e);
	}
	function Yl(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = vi(t, e.stateNode);
				t = bi(t.default, t.update), e.flags &= -5, t !== "none" && Hl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Yl(e);
			e = e.sibling;
		}
	}
	function Xl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, Wl(e.child, !1));
				}
				Xl(e);
			}
			e = e.sibling;
		}
	}
	function Zl(e) {
		if (e.tag === 30) e.stateNode.paired = null, Wl(e.child, !1), Xl(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Zl(e), e = e.sibling;
		else Xl(e);
	}
	function Ql(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? Wl(e.child, !1) : e.subtreeFlags & 33554432 && Ql(e), e = e.sibling;
	}
	function $l(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Vl < a.length) {
					var l = a[Vl], u = Ep(c);
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
				e.flags & 4 && Cp(c, Vl === 0 ? n : n + "_" + Vl, i), s && e.flags & 4 || (zl === null && (zl = []), zl.push(c, Vl === 0 ? r : r + "_" + Vl, t.memoizedProps)), Vl++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : $l(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function eu(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = vi(n, r), a = bi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(Dp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Vl = 0, i = $l(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || jd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && eu(e, t);
			e = e.sibling;
		}
	}
	var tu = !1, G = !1, nu = !1, ru = !1, iu = typeof WeakSet == "function" ? WeakSet : Set, au = null, ou = !1, su = !1, cu = !1, lu = !1;
	function uu(e, t, n) {
		if (e = e.containerInfo, ap = gh, e = Jr(e), Yr(e)) {
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
		for (op = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, au = t, t = n ? 9270 : 1024; au !== null;) {
			if (e = au, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && Jl(r[a]);
			if (e.alternate === null && e.flags & 2) n && Rl(e), du(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && Jl(r), du(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Rl(e), du(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, au = r) : (n && Yl(e), du(n));
			}
		}
		Ll = null;
	}
	function du(e) {
		for (; au !== null;) {
			var t = au, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = yc(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							X(t, t.return, e);
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
					n && r !== null && (n = vi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = bi(a.default, a.update), a !== "none" && Hl(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, au = r;
				break;
			}
			au = t.return;
		}
	}
	function fu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Mu(e, n), r & 4 && yl(5, n);
				break;
			case 1:
				if (Mu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						X(n, n.return, e);
					}
					else {
						var i = yc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							X(n, n.return, e);
						}
					}
				}
				r & 64 && xl(n), r & 512 && W(n, n.return);
				break;
			case 3:
				if (Mu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
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
						X(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Fl(n);
			case 26:
			case 5:
				Mu(e, n), t === null && r & 4 && kl(n), r & 512 && W(n, n.return);
				break;
			case 12:
				Mu(e, n);
				break;
			case 31:
				Mu(e, n), r & 4 && xu(e, n);
				break;
			case 13:
				Mu(e, n), r & 4 && Su(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = hf.bind(null, n), cm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || tu, !r) {
					var a = t !== null && t.memoizedState !== null || G;
					t = tu, i = G, tu = r, (G = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Pu(e, n, r)) : Mu(e, n), tu = t, G = i;
				}
				break;
			case 30:
				Mu(e, n), r & 512 && W(n, n.return);
				break;
			case 7: r & 512 && W(n, n.return);
			default: Mu(e, n);
		}
	}
	function pu(e, t) {
		for (e = e.child; e !== null;) mu(e, t), e = e.sibling;
	}
	function mu(e, t) {
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
					X(e, e.return, t);
				}
				hu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, P = !0;
				} catch (t) {
					X(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? Sp(s, !0) : Sp(e.stateNode, !1);
				} catch (t) {
					X(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && pu(e, t);
				break;
			default: pu(e, t);
		}
	}
	function hu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						mu(n, r);
						break a;
					case 22:
						n.memoizedState === null && hu(n, r);
						break a;
					default: hu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function gu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, gu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Nt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var _u = null, vu = !1;
	function yu(e, t, n) {
		for (n = n.child; n !== null;) bu(e, t, n), n = n.sibling;
	}
	function bu(e, t, n) {
		if (et && typeof et.onCommitFiberUnmount == "function") try {
			et.onCommitFiberUnmount($e, n);
		} catch {}
		switch (n.tag) {
			case 26:
				G || Cl(n, t), yu(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !G && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				G || Cl(n, t), El(n);
				var r = _u, i = vu;
				bp(n.type) && (_u = n.stateNode, vu = !1), yu(e, t, n), gm(n.stateNode, n.type, n.memoizedProps), _u = r, vu = i;
				break;
			case 5: G || Cl(n, t), El(n);
			case 6:
				if (n.tag === 6 && El(n), r = _u, i = vu, _u = null, yu(e, t, n), _u = r, vu = i, _u !== null) {
					if (vu) try {
						(_u.nodeType === 9 ? _u.body : _u.nodeName === "HTML" ? _u.ownerDocument.body : _u).removeChild(n.stateNode), P = !0;
					} catch (e) {
						X(n, t, e);
					}
					else try {
						_u.removeChild(n.stateNode), P = !0;
					} catch (e) {
						X(n, t, e);
					}
				}
				break;
			case 18:
				_u !== null && (vu ? (e = _u, xp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : xp(_u, n.stateNode));
				break;
			case 4:
				r = _u, i = vu, _u = n.stateNode.containerInfo, vu = !0, yu(e, t, n), _u = r, vu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				bl(2, n, t), G || bl(4, n, t), yu(e, t, n);
				break;
			case 1:
				G || (Cl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Sl(n, t, r)), yu(e, t, n);
				break;
			case 21:
				yu(e, t, n);
				break;
			case 22:
				G = (r = G) || n.memoizedState !== null, yu(e, t, n), G = r;
				break;
			case 30:
				Cl(n, t), yu(e, t, n);
				break;
			case 7:
				G || Cl(n, t), yu(e, t, n);
				break;
			default: yu(e, t, n);
		}
	}
	function xu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				X(t, t.return, e);
			}
		}
	}
	function Su(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			X(t, t.return, e);
		}
	}
	function Cu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new iu()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new iu()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function wu(e, t) {
		var n = Cu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = gf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Tu(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (bp(l.type)) {
							_u = l.stateNode, vu = !1;
							break a;
						}
						break;
					case 5:
						_u = l.stateNode, vu = !1;
						break a;
					case 3:
					case 4:
						_u = l.stateNode.containerInfo, vu = !0;
						break a;
				}
				l = l.return;
			}
			if (_u === null) throw Error(i(160));
			bu(s, c, o), _u = null, vu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Du(t, e, n), t = t.sibling;
	}
	var Eu = null;
	function Du(e, t, n) {
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
				Tu(t, e, n), Ou(e), a & 4 && (bl(3, e, e.return), yl(3, e), bl(5, e, e.return));
				break;
			case 1:
				Tu(t, e, n), Ou(e), a & 512 && (G || r === null || Cl(r, r.return)), a & 64 && tu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = Eu, Tu(t, e, n), Ou(e), a & 512 && (G || r === null || Cl(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (tu) e.stateNode = up(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[jt] || r[wt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), ep(r, t, n), r[wt] = e, Rt(r), t = r;
												break a;
											case "link":
												if (o = Gm("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), ep(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Gm("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), ep(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[wt] = e, Rt(r), t = r;
									}
									e.stateNode = t;
								}
							} else tu || Km(o, e.type, e.stateNode);
						} else e.stateNode = Bm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && Al(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || G || t.parentNode.removeChild(t)) : a.count--, n === null ? tu || Km(o, e.type, e.stateNode) : Bm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Tu(t, e, n), Ou(e), a & 512 && (G || r === null || Cl(r, r.return)), r !== null && a & 4 && Al(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = nu, nu = !1, Tu(t, e, n), nu = o, Ou(e), a & 512 && (G || r === null || Cl(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						fn(t, ""), P = !0;
					} catch (t) {
						X(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, Al(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (ru = !0);
				break;
			case 6:
				if (Tu(t, e, n), Ou(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, P = !0;
					} catch (t) {
						X(e, e.return, t);
					}
				}
				break;
			case 3:
				if (P = !1, Wm = null, o = Eu, Eu = bm(t.containerInfo), Tu(t, e, n), Eu = o, Ou(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					X(e, e.return, t);
				}
				ru && (ru = !1, ku(e)), P = !1;
				break;
			case 4:
				a = nu, nu = tu, r = Jt(), o = Eu, Eu = bm(e.stateNode.containerInfo), Tu(t, e, n), Ou(e), Eu = o, P && su && (cu = !0), P = r, nu = a;
				break;
			case 12:
				Tu(t, e, n), Ou(e);
				break;
			case 31:
				Tu(t, e, n), Ou(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 13:
				Tu(t, e, n), Ou(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (fd = Ge()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = tu, l = G, u = nu;
				tu = c || o, nu = u || o, G = l || s, Tu(t, e, n), G = l, nu = u, tu = c, Ou(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || tu || G || (t = s || G, n = tu, r = G, tu = o || tu, G = t, Nu(e, 2), tu = n, G = r), !o && nu || pu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, wu(e, n))));
				break;
			case 19:
				Tu(t, e, n), Ou(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 30:
				a & 512 && (G || r === null || Cl(r, r.return)), a = Jt(), o = su, s = (n & 335544064) === n, c = e.memoizedProps, su = s && bi(c.default, c.update) !== "none", Tu(t, e, n), Ou(e), s && r !== null && P && (e.flags |= 4), su = o, P = a;
				break;
			case 21: break;
			case 7: a & 512 && (G || r === null || Cl(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Tu(t, e, n), Ou(e);
		}
	}
	function Ou(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (jl(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (Ol(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (Dl(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Pl(e, Ml(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (fn(l, ""), n.flags &= -33), Pl(e, Ml(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Nl(e, Ml(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				X(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function ku(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			ku(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function Au(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) ju(t, e), t = t.sibling;
		else eu(t, !1);
	}
	function ju(e, t) {
		var n = e.alternate;
		if (n === null) Kl(e, !1);
		else switch (e.tag) {
			case 3:
				if (lu = ou = !1, Bl(), Au(t, e), !ou && !cu) {
					if (e = zl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						wp(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
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
					})), lu = !0;
				}
				zl = null;
				break;
			case 5:
				Au(t, e);
				break;
			case 4:
				r = ou, ou = !1, Au(t, e), ou && (cu = !0), ou = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Au(t, e) : Kl(e, !1));
				break;
			case 30:
				r = ou, i = Bl(), ou = !1, Au(t, e), ou && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = vi(a, o), o = vi(n.memoizedProps, o);
				var s = bi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Vl = 0, t = $l(e, n, t, o, s, a, !0), Vl !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (jd(e, e.memoizedProps.onUpdate), zl = i) : i !== null && (i.push.apply(i, zl), zl = i), ou = e.flags & 32 ? !0 : r;
				break;
			default: Au(t, e);
		}
	}
	function Mu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) fu(e, t.alternate, t), t = t.sibling;
	}
	function Nu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					bl(4, n, n.return), Nu(n, r);
					break;
				case 1:
					Cl(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && Sl(n, n.return, i), Nu(n, r);
					break;
				case 27: r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					Cl(n, n.return), n.tag !== 5 && n.tag !== 27 || El(n), Nu(n, r);
					break;
				case 6:
					El(n);
					break;
				case 26:
					Cl(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || G || i.parentNode.removeChild(i), Nu(n, r);
					break;
				case 22:
					n.memoizedState === null && Nu(n, r);
					break;
				case 30:
					Cl(n, n.return), Nu(n, r);
					break;
				case 7: Cl(n, n.return);
				default: Nu(n, r);
			}
			e = e.sibling;
		}
	}
	function Pu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Pu(i, a, n), yl(4, a);
					break;
				case 1:
					if (Pu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						X(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) xo(l[i], c);
						} catch (e) {
							X(r, r.return, e);
						}
					}
					s && o & 64 && xl(a), W(a, a.return);
					break;
				case 27: n & 2 && Fl(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || Tl(a), Pu(i, a, n), s && r === null && o & 4 && kl(a), W(a, a.return);
					break;
				case 6:
					Tl(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || tu || Km(bm(c.ownerDocument), a.type, c), Pu(i, a, n), s && r === null && o & 4 && kl(a), W(a, a.return);
					break;
				case 12:
					Pu(i, a, n);
					break;
				case 31:
					Pu(i, a, n), s && o & 4 && xu(i, a);
					break;
				case 13:
					Pu(i, a, n), s && o & 4 && Su(i, a);
					break;
				case 22:
					a.memoizedState === null && Pu(i, a, n), W(a, a.return);
					break;
				case 30:
					Pu(i, a, n), W(a, a.return);
					break;
				case 7: W(a, a.return);
				default: Pu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Fu(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ja(n));
	}
	function Iu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ja(e));
	}
	function Lu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Ru(e, t, n, r), t = t.sibling;
		else i && Ql(t);
	}
	function Ru(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && Zl(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Lu(e, t, n, r), a & 2048 && yl(9, t);
				break;
			case 1:
				Lu(e, t, n, r);
				break;
			case 3:
				Lu(e, t, n, r), i && lu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && ja(a)));
				break;
			case 12:
				if (a & 2048) {
					Lu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						X(t, t.return, e);
					}
				} else Lu(e, t, n, r);
				break;
			case 31:
				Lu(e, t, n, r);
				break;
			case 13:
				Lu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && Zl(t), o._visibility & 2 ? Lu(e, t, n, r) : (o._visibility |= 2, zu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && Zl(s), o._visibility & 2 ? Lu(e, t, n, r) : Bu(e, t)), a & 2048 && Fu(s, t);
				break;
			case 24:
				Lu(e, t, n, r), a & 2048 && Iu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (Wl(a.child, !0), Wl(t.child, !0))), Lu(e, t, n, r);
				break;
			default: Lu(e, t, n, r);
		}
	}
	function zu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					zu(a, o, s, c, i), yl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, zu(a, o, s, c, i)) : u._visibility & 2 ? zu(a, o, s, c, i) : Bu(a, o), i && l & 2048 && Fu(o.alternate, o);
					break;
				case 24:
					zu(a, o, s, c, i), i && l & 2048 && Iu(o.alternate, o);
					break;
				default: zu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Bu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Bu(n, r), i & 2048 && Fu(r.alternate, r);
					break;
				case 24:
					Bu(n, r), i & 2048 && Iu(r.alternate, r);
					break;
				default: Bu(n, r);
			}
			t = t.sibling;
		}
	}
	var Vu = 8192;
	function Hu(e, t, n) {
		if (e.subtreeFlags & Vu) for (e = e.child; e !== null;) Uu(e, t, n), e = e.sibling;
	}
	function Uu(e, t, n) {
		switch (e.tag) {
			case 26:
				Hu(e, t, n), e.flags & Vu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, Eu, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Hu(e, t, n), e.flags & Vu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = Eu;
				Eu = bm(e.stateNode.containerInfo), Hu(e, t, n), Eu = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Vu, Vu = 16777216, Hu(e, t, n), Vu = r) : Hu(e, t, n));
				break;
			case 30:
				if ((e.flags & Vu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Ll === null && (Ll = /* @__PURE__ */ new Map()), Ll.set(r, i);
				}
				Hu(e, t, n);
				break;
			default: Hu(e, t, n);
		}
	}
	function Wu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Gu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				au = r, Ju(r, e);
			}
			Wu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Ku(e), e = e.sibling;
	}
	function Ku(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Gu(e), e.flags & 2048 && bl(9, e, e.return);
				break;
			case 3:
				Gu(e);
				break;
			case 12:
				Gu(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, qu(e)) : Gu(e);
				break;
			default: Gu(e);
		}
	}
	function qu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				au = r, Ju(r, e);
			}
			Wu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					bl(8, t, t.return), qu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, qu(t));
					break;
				default: qu(t);
			}
			e = e.sibling;
		}
	}
	function Ju(e, t) {
		for (; au !== null;) {
			var n = au;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					bl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: ja(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, au = r;
			else a: for (n = e; au !== null;) {
				r = au;
				var i = r.sibling, a = r.return;
				if (gu(r), r === n) {
					au = null;
					break a;
				}
				if (i !== null) {
					i.return = a, au = i;
					break a;
				}
				au = a;
			}
		}
	}
	var Yu = {
		getCacheForType: function(e) {
			var t = Ca(ka), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Ca(ka).controller.signal;
		}
	}, Xu = typeof WeakMap == "function" ? WeakMap : Map, K = 0, Zu = null, q = null, J = 0, Y = 0, Qu = null, $u = !1, ed = !1, td = !1, nd = 0, rd = 0, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = null, ud = null, dd = !1, fd = 0, pd = 0, md = Infinity, hd = null, gd = null, _d = 0, vd = null, yd = null, bd = 0, xd = 0, Sd = null, Cd = null, wd = null, Td = null, Ed = null, Dd = 0, Od = null;
	function kd() {
		return K & 2 && J !== 0 ? J & -J : O.T === null ? xt() : Mf();
	}
	function Ad() {
		if (sd === 0) {
			if (!(J & 536870912) || R) {
				var e = ot;
				ot <<= 1, !(ot & 3932160) && (ot = 262144), sd = e;
			} else sd = 536870912;
		}
		return e = Oo.current, e !== null && (e.flags |= 32), sd;
	}
	function jd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Np(vi(e.memoizedProps, n))), Td === null && (Td = []), Td.push(t.bind(null, r));
		}
	}
	function Md(e, t, n) {
		(e === Zu && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) && (zd(e, 0), Id(e, J, sd, !1)), ht(e, n), (!(K & 2) || e !== Zu) && (e === Zu && (!(K & 2) && (ad |= n), rd === 4 && Id(e, J, sd, !1)), wf(e));
	}
	function Nd(e, t, n) {
		if (K & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || ut(e, t), a = r ? qd(e, t) : Gd(e, t, !0), o = r;
		do {
			if (a === 0) {
				ed && !r && Id(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Fd(n)) {
				a = Gd(e, t, !1), o = !1;
				continue;
			}
			if (a === 2) {
				if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
				else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
				if (s !== 0) {
					t = s;
					a: {
						var c = e;
						a = ld;
						var l = c.current.memoizedState.isDehydrated;
						if (l && (zd(c, s).flags |= 256), s = Gd(c, s, !1), s !== 2 && s !== 6) {
							if (td && !l) {
								c.errorRecoveryDisabledLanes |= o, ad |= o, a = 4;
								break a;
							}
							o = ud, ud = a, o !== null && (ud === null ? ud = o : ud.push.apply(ud, o));
						}
						a = s;
					}
					if (o = !1, a !== 2) continue;
				}
			}
			if (a === 1) {
				zd(e, 0), Id(e, t, 0, !0);
				break;
			}
			a: {
				switch (r = e, o = a, o) {
					case 0:
					case 1: throw Error(i(345));
					case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
					case 6:
						Id(r, t, sd, !$u);
						break a;
					case 2:
						ud = null;
						break;
					case 3:
					case 5: break;
					default: throw Error(i(329));
				}
				if ((t & 62914560) === t && (a = fd + 300 - Ge(), 10 < a)) {
					if (Id(r, t, sd, !$u), lt(r, 0, !0) !== 0) break a;
					bd = t, r.timeoutHandle = mp(Pd.bind(null, r, n, ud, hd, dd, t, sd, ad, cd, $u, o, "Throttled", -0, 0), a);
					break a;
				}
				Pd(r, n, ud, hd, dd, t, sd, ad, cd, $u, o, null, -0, 0);
			}
			break;
		} while (1);
		wf(e);
	}
	function Pd(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
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
			unsuspend: bn
		}, Ll = null, Uu(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? fd - Ge() : (a & 4194048) === a ? pd - Ge() : 0, m = eh(d, m), m !== null)) {
			bd = a, e.cancelPendingCommit = m(ef.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Id(e, a, o, !l);
			return;
		}
		ef(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Fd(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Hr(a(), i)) return !1;
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
	function Id(e, t, n, r) {
		t = dt(e, t), t &= ~od, t &= ~ad, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - nt(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && _t(e, n, t);
	}
	function Ld() {
		return K & 6 ? !0 : (Tf(0, !1), !1);
	}
	function Rd() {
		if (q !== null) {
			if (Y === 0) var e = q.return;
			else e = q, z = ha = null, ns(e), no = null, ro = 0, e = q;
			for (; e !== null;) vl(e.alternate, e), e = e.return;
			q = null;
		}
	}
	function zd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, hp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), bd = 0, Rd(), Zu = e, q = n = Pi(e.current, null), J = t, Y = 0, Qu = null, $u = !1, ed = ut(e, t), td = !1, cd = sd = od = ad = id = rd = 0, ud = ld = null, dd = !1, nd = dt(e, t), wi(), n;
	}
	function Bd(e, t) {
		V = null, O.H = dc, t === Ka || t === Ja ? (t = eo(), Y = 3) : t === qa ? (t = eo(), Y = 4) : Y = t === kc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Qu = t, q === null && (rd = 1, Cc(e, Hi(t, e.current)));
	}
	function Vd() {
		var e = Oo.current;
		return e === null ? !0 : (J & 4194048) === J ? ko === null : (J & 62914560) === J || J & 536870912 ? e === ko : !1;
	}
	function Hd() {
		var e = O.H;
		return O.H = dc, e === null ? dc : e;
	}
	function Ud() {
		var e = O.A;
		return O.A = Yu, e;
	}
	function Wd() {
		rd = 4, $u || (J & 4194048) !== J && Oo.current !== null || (ed = !0), !(id & 134217727) && !(ad & 134217727) || Zu === null || Id(Zu, J, sd, !1);
	}
	function Gd(e, t, n) {
		var r = K;
		K |= 2;
		var i = Hd(), a = Ud();
		(Zu !== e || J !== t) && (hd = null, zd(e, t)), t = !1;
		var o = rd;
		a: do
			try {
				if (Y !== 0 && q !== null) {
					var s = q, c = Qu;
					switch (Y) {
						case 8:
							Rd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							Oo.current === null && (t = !0);
							var l = Y;
							if (Y = 0, Qu = null, Zd(e, s, c, l), n && ed) {
								o = 0;
								break a;
							}
							break;
						default: l = Y, Y = 0, Qu = null, Zd(e, s, c, l);
					}
				}
				Kd(), o = rd;
				break;
			} catch (t) {
				Bd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, z = ha = null, K = r, O.H = i, O.A = a, q === null && (Zu = null, J = 0, wi()), o;
	}
	function Kd() {
		for (; q !== null;) Yd(q);
	}
	function qd(e, t) {
		var n = K;
		K |= 2;
		var r = Hd(), a = Ud();
		Zu !== e || J !== t ? (hd = null, md = Ge() + 500, zd(e, t)) : ed = ut(e, t);
		a: do
			try {
				if (Y !== 0 && q !== null) {
					t = q;
					var o = Qu;
					b: switch (Y) {
						case 1:
							Y = 0, Qu = null, Zd(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (Xa(o)) {
								Y = 0, Qu = null, Xd(t);
								break;
							}
							t = function() {
								Y !== 2 && Y !== 9 || Zu !== e || (Y = 7), wf(e);
							}, o.then(t, t);
							break a;
						case 3:
							Y = 7;
							break a;
						case 4:
							Y = 5;
							break a;
						case 7:
							Xa(o) ? (Y = 0, Qu = null, Xd(t)) : (Y = 0, Qu = null, Zd(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (q.tag) {
								case 26: s = q.memoizedState;
								case 5:
								case 27:
									var c = q;
									if (s ? Ym(s) : c.stateNode.complete) {
										Y = 0, Qu = null;
										var l = c.sibling;
										if (l !== null) q = l;
										else {
											var u = c.return;
											u === null ? q = null : (q = u, Qd(u));
										}
										break b;
									}
							}
							Y = 0, Qu = null, Zd(e, t, o, 5);
							break;
						case 6:
							Y = 0, Qu = null, Zd(e, t, o, 6);
							break;
						case 8:
							Rd(), rd = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Jd();
				break;
			} catch (t) {
				Bd(e, t);
			}
		while (1);
		return z = ha = null, O.H = r, O.A = a, K = n, q === null ? (Zu = null, J = 0, wi(), rd) : 0;
	}
	function Jd() {
		for (; q !== null && !Ue();) Yd(q);
	}
	function Yd(e) {
		var t = ll(e.alternate, e, nd);
		e.memoizedProps = e.pendingProps, t === null ? Qd(e) : q = t;
	}
	function Xd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Uc(n, t, t.pendingProps, t.type, void 0, J);
				break;
			case 11:
				t = Uc(n, t, t.pendingProps, t.type.render, t.ref, J);
				break;
			case 5:
				ns(t);
				var r = t;
				r === ra && (R ? (la(r), r.tag === 5 && r.stateNode != null && (L = r.stateNode)) : (la(r), R = !0));
			default: vl(n, t), t = q = Fi(t, nd), t = ll(n, t, nd);
		}
		e.memoizedProps = e.pendingProps, t === null ? Qd(e) : q = t;
	}
	function Zd(e, t, n, r) {
		z = ha = null, ns(t), no = null, ro = 0;
		var i = t.return;
		try {
			if (Oc(e, i, t, n, J)) {
				rd = 1, Cc(e, Hi(n, e.current)), q = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw q = i, t;
			rd = 1, Cc(e, Hi(n, e.current)), q = null;
			return;
		}
		t.flags & 32768 ? (R || r === 1 ? e = !0 : ed || J & 536870912 ? e = !1 : ($u = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Oo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), $d(t, e)) : Qd(t);
	}
	function Qd(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				$d(t, $u);
				return;
			}
			e = t.return;
			var n = gl(t.alternate, t, nd);
			if (n !== null) {
				q = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				q = t;
				return;
			}
			q = t = e;
		} while (t !== null);
		rd === 0 && (rd = 5);
	}
	function $d(e, t) {
		do {
			var n = _l(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, q = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				q = e;
				return;
			}
			q = e = n;
		} while (e !== null);
		rd = 6, q = null;
	}
	function ef(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			lf();
		while (_d !== 0);
		if (K & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === Zu && (q = Zu = null, J = 0), yd = t, vd = e, bd = n, Sd = a, Cd = r, tf(e, t, n, s, c, l, f);
		}
	}
	function tf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (xd = s, s |= Ci, gt(e, n, s, r, i, a), Td = null, (n & 335544064) === n ? (Ed = Pa(e), r = 10262) : (Ed = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, _f(Je, function() {
			return uf(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), Il = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = O.T, O.T = null, i = k.p, k.p = 2, a = K, K |= 4;
			try {
				uu(e, t, n);
			} finally {
				K = a, k.p = i, O.T = r;
			}
		}
		_d = 1, Il ? wd = jp(o, e.containerInfo, Ed, af, of, rf, sf, uf, nf, null, null) : (af(), of(), sf());
	}
	function nf(e) {
		if (_d !== 0) {
			var t = vd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function rf() {
		_d === 3 && (_d = 0, ju(yd, vd), _d = 4);
	}
	function af() {
		if (_d === 1) {
			_d = 0;
			var e = vd, t = yd, n = bd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = O.T, O.T = null;
				var i = k.p;
				k.p = 2;
				var a = K;
				K |= 4;
				try {
					su = cu = !1, Du(t, e, n), n = op;
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
					gh = !!ap, op = ap = null;
				} finally {
					K = a, k.p = i, O.T = r;
				}
			}
			e.current = t, _d = 2;
		}
	}
	function of() {
		if (_d === 2) {
			_d = 0;
			var e = vd, t = yd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = O.T, O.T = null;
				var r = k.p;
				k.p = 2;
				var i = K;
				K |= 4;
				try {
					fu(e, t.alternate, t);
				} finally {
					K = i, k.p = r, O.T = n;
				}
			}
			_d = 3;
		}
	}
	function sf() {
		if (_d === 4 || _d === 3) {
			_d = 0;
			var e = wd;
			wd = null, We();
			var t = vd, n = yd, r = bd, i = Cd, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? _d = 5 : (_d = 0, yd = vd = null, cf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (gd = null), bt(r), n = n.stateNode, et && typeof et.onCommitFiberRoot == "function") try {
				et.onCommitFiberRoot($e, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = O.T, a = k.p, k.p = 2, O.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					O.T = n, k.p = a;
				}
			}
			if (i = Td, o = Ed, Ed = null, i !== null && (Td = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			bd & 3 && lf(), wf(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Od ? Dd++ : (Dd = 0, Od = t) : (Dd = 0, Od = null), Tf(0, !1);
		}
	}
	function cf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ja(t)));
	}
	function lf() {
		return wd !== null && (wd.skipTransition(), wd = null), af(), of(), sf(), uf();
	}
	function uf() {
		if (_d !== 5) return !1;
		var e = vd, t = xd;
		xd = 0;
		var n = bt(bd), r = O.T, a = k.p;
		try {
			k.p = 32 > n ? 32 : n, O.T = null, n = Sd, Sd = null;
			var o = vd, s = bd;
			if (_d = 0, yd = vd = null, bd = 0, K & 6) throw Error(i(331));
			var c = K;
			if (K |= 4, Ku(o.current), Ru(o, o.current, s, n), K = c, Tf(0, !1), et && typeof et.onPostCommitFiberRoot == "function") try {
				et.onPostCommitFiberRoot($e, o);
			} catch {}
			return !0;
		} finally {
			k.p = a, O.T = r, cf(e, t);
		}
	}
	function df(e, t, n) {
		t = Hi(n, t), t = Tc(e.stateNode, t, 2), e = ho(e, t, 2), e !== null && (ht(e, 2), wf(e));
	}
	function X(e, t, n) {
		if (e.tag === 3) df(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				df(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gd === null || !gd.has(r))) {
					e = Hi(n, e), n = Ec(2), r = ho(t, n, 2), r !== null && (Dc(n, r, t, e), ht(r, 2), wf(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function ff(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Xu();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (td = !0, i.add(n), e = pf.bind(null, e, t, n), t.then(e, e));
	}
	function pf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Zu === e && (J & n) === n && (rd === 4 || rd === 3 && (J & 62914560) === J && 300 > Ge() - fd ? K & 2 ? od |= n : zd(e, 0) : od |= n, cd === J && (cd = 0)), wf(e);
	}
	function mf(e, t) {
		t === 0 && (t = pt()), e = Di(e, t), e !== null && (ht(e, t), wf(e));
	}
	function hf(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), mf(e, n);
	}
	function gf(e, t) {
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
		r !== null && r.delete(t), mf(e, n);
	}
	function _f(e, t) {
		return Ve(e, t);
	}
	var vf = null, yf = null, bf = !1, xf = !1, Sf = !1, Cf = 0;
	function wf(e) {
		e !== yf && e.next === null && (yf === null ? vf = yf = e : yf = yf.next = e), xf = !0, bf || (bf = !0, jf());
	}
	function Tf(e, t) {
		if (!Sf && xf) {
			Sf = !0;
			do
				for (var n = !1, r = vf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - nt(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Af(r, a));
						} else a = J, a = lt(r, r === Zu ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || ut(r, a) || (n = !0, Af(r, a));
					}
					r = r.next;
				}
			while (n);
			Sf = !1;
		}
	}
	function Ef() {
		Df();
	}
	function Df() {
		xf = bf = !1;
		var e = 0;
		Cf !== 0 && pp() && (e = Cf);
		for (var t = Ge(), n = null, r = vf; r !== null;) {
			var i = r.next, a = Of(r, t);
			a === 0 ? (r.next = null, n === null ? vf = i : n.next = i, i === null && (yf = n)) : (n = r, (e !== 0 || a & 3) && (xf = !0)), r = i;
		}
		_d !== 0 && _d !== 5 || Tf(e, !1), Cf !== 0 && (Cf = 0);
	}
	function Of(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - nt(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = ft(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Zu, n = J, n = lt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && He(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || ut(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && He(r), bt(n)) {
				case 2:
				case 8:
					n = qe;
					break;
				case 32:
					n = Je;
					break;
				case 268435456:
					n = Xe;
					break;
				default: n = Je;
			}
			return r = kf.bind(null, e), n = Ve(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && He(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function kf(e, t) {
		if (_d !== 0 && _d !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (lf() && e.callbackNode !== n) return null;
		var r = J;
		return r = lt(e, e === Zu ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Nd(e, r, t), Of(e, Ge()), e.callbackNode != null && e.callbackNode === n ? kf.bind(null, e) : null);
	}
	function Af(e, t) {
		if (lf()) return null;
		Nd(e, t, !0);
	}
	function jf() {
		vp(function() {
			K & 6 ? Ve(j, Ef) : Df();
		});
	}
	function Mf() {
		if (Cf === 0) {
			var e = La;
			e === 0 && (e = at, at <<= 1, !(at & 261888) && (at = 256)), Cf = e;
		}
		return Cf;
	}
	function Nf(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yn(e);
	}
	function Pf(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Nf((i[Tt] || null).action), o = r.submitter;
			o && (t = (t = o[Tt] || null) ? Nf(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Vn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Cf !== 0) {
								var e = new FormData(i, o);
								Zs(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), Zs(n, {
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
	for (var Ff = 0; Ff < hi.length; Ff++) {
		var If = hi[Ff];
		gi(If.toLowerCase(), "on" + (If[0].toUpperCase() + If.slice(1)));
	}
	gi(si, "onAnimationEnd"), gi(ci, "onAnimationIteration"), gi(li, "onAnimationStart"), gi("dblclick", "onDoubleClick"), gi("focusin", "onFocus"), gi("focusout", "onBlur"), gi(ui, "onTransitionRun"), gi(di, "onTransitionStart"), gi(fi, "onTransitionCancel"), gi(pi, "onTransitionEnd"), Ut("onMouseEnter", ["mouseout", "mouseover"]), Ut("onMouseLeave", ["mouseout", "mouseover"]), Ut("onPointerEnter", ["pointerout", "pointerover"]), Ut("onPointerLeave", ["pointerout", "pointerover"]), Ht("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ht("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ht("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Ht("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ht("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ht("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lf));
	function zf(e, t) {
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
						I(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						I(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Z(e, t) {
		var n = t[Dt];
		n === void 0 && (n = t[Dt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Uf(t, e, 2, !1), n.add(r));
	}
	function Bf(e, t, n) {
		var r = 0;
		t && (r |= 4), Uf(n, e, r, t);
	}
	var Vf = "_reactListening" + Math.random().toString(36).slice(2);
	function Hf(e) {
		if (!e[Vf]) {
			e[Vf] = !0, Bt.forEach(function(t) {
				t !== "selectionchange" && (Rf.has(t) || Bf(t, !1, e), Bf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Vf] || (t[Vf] = !0, Bf("selectionchange", !1, t));
		}
	}
	function Uf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !An || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Wf(e, t, n, r, i) {
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
					if (s = Pt(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		Dn(function() {
			var r = a, i = Sn(n), s = [];
			a: {
				var c = mi.get(e);
				if (c !== void 0) {
					var l = Vn, u = e;
					switch (e) {
						case "keypress": if (In(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = ir;
							break;
						case "focusin":
							u = "focus", l = Xn;
							break;
						case "focusout":
							u = "blur", l = Xn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Xn;
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
							l = Jn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Yn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = sr;
							break;
						case si:
						case ci:
						case li:
							l = Zn;
							break;
						case pi:
							l = cr;
							break;
						case "scroll":
						case "scrollend":
							l = Un;
							break;
						case "wheel":
							l = lr;
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
							l = ar;
							break;
						case "submit":
							l = or;
							break;
						case "toggle":
						case "beforetoggle": l = ur;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = On(m, p), g != null && d.push(Gf(m, g, h))), f) break;
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
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== xn && (u = n.relatedTarget || n.fromElement) && (Pt(u) || u[Et])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Pt(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Jn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = ar, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : It(c), h = l == null ? u : It(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Pt(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? S(c, l, qf) : null, c !== null && Jf(s, u, c, d, !1), l !== null && f !== null && Jf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? It(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = Ar;
					else if (wr(c)) {
						if (jr) _ = Br;
						else {
							_ = Rr;
							var v = Lr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && gn(r.elementType) && (_ = Ar) : _ = zr;
					if (_ &&= _(e, r)) {
						Tr(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? It(r) : window, e) {
					case "focusin":
						(wr(v) || v.contentEditable === "true") && (Zr = v, Qr = r, $r = null);
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
				if (fr) b: {
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
				else br ? vr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (hr && n.locale !== "ko" && (br || b !== "onCompositionStart" ? b === "onCompositionEnd" && br && (y = Fn()) : (Mn = i, Nn = "value" in Mn ? Mn.value : Mn.textContent, br = !0)), v = Kf(r, b), 0 < v.length && (b = new F(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = yr(n), y !== null && (b.data = y)))), (y = mr ? xr(e, n) : Sr(e, n)) && (b = Kf(r, "onBeforeInput"), 0 < b.length && (v = new F("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), Pf(s, e, r, n, i);
			}
			zf(s, t);
		});
	}
	function Gf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Kf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = On(e, n), i != null && r.unshift(Gf(e, i, a)), i = On(e, t), i != null && r.push(Gf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function qf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Jf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = On(n, a), l != null && o.unshift(Gf(n, l, c))) : i || (l = On(n, a), l != null && o.push(Gf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Yf = /\r\n?/g, Xf = /\u0000|\uFFFD/g;
	function Zf(e) {
		return (typeof e == "string" ? e : "" + e).replace(Yf, "\n").replace(Xf, "");
	}
	function Qf(e, t) {
		return t = Zf(t), Zf(e) === t;
	}
	function Q(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || fn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && fn(e, "" + r);
				else return;
				break;
			case "className":
				Xt(e, "class", r);
				break;
			case "tabIndex":
				Xt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Xt(e, n, r);
				break;
			case "style":
				hn(e, r, o);
				return;
			case "data": if (t !== "object") {
				Xt(e, "data", r);
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
				r = yn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && Q(e, t, "name", a.name, a, null), Q(e, t, "formEncType", a.formEncType, a, null), Q(e, t, "formMethod", a.formMethod, a, null), Q(e, t, "formTarget", a.formTarget, a, null)) : (Q(e, t, "encType", a.encType, a, null), Q(e, t, "method", a.method, a, null), Q(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = yn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = bn);
				return;
			case "onScroll":
				r != null && Z("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Z("scrollend", e);
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
				n = yn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
				Z("beforetoggle", e), Z("toggle", e), Yt(e, "popover", r);
				break;
			case "xlinkActuate":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Zt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Zt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Zt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Yt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = _n.get(n) || n, Yt(e, n, r);
			else return;
		}
		P = !0;
	}
	function $f(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				hn(e, r, o);
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
				if (typeof r == "string") fn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") fn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Z("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Z("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = bn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Vt.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[Tt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					P = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Yt(e, n, r);
				}
				return;
		}
		P = !0;
	}
	function ep(e, t, n) {
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
				Z("error", e), Z("load", e);
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
						default: Q(e, t, o, s, n, null);
					}
				}
				a && Q(e, t, "srcSet", n.srcSet, n, null), r && Q(e, t, "src", n.src, n, null);
				return;
			case "input":
				Z("invalid", e);
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
						default: Q(e, t, r, d, n, null);
					}
				}
				sn(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Z("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: Q(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && ln(e, !!r, n, !0) : ln(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Z("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
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
					default: Q(e, t, s, c, n, null);
				}
				dn(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: Q(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Z("beforetoggle", e), Z("toggle", e), Z("cancel", e), Z("close", e);
				break;
			case "iframe":
			case "object":
				Z("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < Lf.length; r++) Z(Lf[r], e);
				break;
			case "image":
				Z("error", e), Z("load", e);
				break;
			case "details":
				Z("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Z("error", e), Z("load", e);
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
					default: Q(e, t, u, r, n, null);
				}
				return;
			default: if (gn(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && $f(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && Q(e, t, c, r, n, null));
	}
	var tp = {};
	function np(e, t, n, r) {
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
						default: r.hasOwnProperty(m) || Q(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (P = !0), o = m;
							break;
						case "name":
							m !== f && (P = !0), a = m;
							break;
						case "checked":
							m !== f && (P = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (P = !0), d = m;
							break;
						case "value":
							m !== f && (P = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (P = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && Q(e, t, p, m, r, f);
					}
				}
				on(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || Q(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (P = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (P = !0), c = o;
						break;
					case "multiple": o !== l && (P = !0), s = o;
					default: o !== l && Q(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? ln(e, !!n, n ? [] : "", !1) : ln(e, !!n, t, !0)) : ln(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: Q(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (P = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (P = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && Q(e, t, s, a, r, o);
				}
				un(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: Q(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (P = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: Q(e, t, l, p, r, m);
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
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && Q(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: Q(e, t, u, p, r, m);
				}
				return;
			default: if (gn(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && $f(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || $f(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && Q(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || Q(e, t, f, p, r, m);
	}
	function rp(e) {
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
	function ip() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && rp(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && rp(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var ap = null, op = null;
	function sp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function cp(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function lp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function up(e, t, n, r) {
		return n = sp(n).createElement(e), n[wt] = r, n[Tt] = t, ep(n, e, t), Rt(n), n;
	}
	function dp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var fp = null;
	function pp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== fp && (fp = e, !0) : (fp = null, !1);
	}
	var mp = typeof setTimeout == "function" ? setTimeout : void 0, hp = typeof clearTimeout == "function" ? clearTimeout : void 0, gp = typeof Promise == "function" ? Promise : void 0, _p = typeof requestAnimationFrame == "function" ? requestAnimationFrame : mp, vp = typeof queueMicrotask == "function" ? queueMicrotask : gp === void 0 ? mp : function(e) {
		return gp.resolve(null).then(e).catch(yp);
	};
	function yp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function bp(e) {
		return e === "head";
	}
	function xp(e, t) {
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
						a[jt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && _m(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function Sp(e, t) {
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
	function Cp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function wp(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Tp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Ep(e) {
		return Tp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function Dp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Tp(t, n, e);
	}
	function Op(e) {
		return e.documentElement.clientHeight;
	}
	function kp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function jp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Op(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(kp.bind(f)), s.push(f);
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
	function Mp(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Mp.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : C({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Mp.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Mp.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Np(e) {
		return {
			name: e,
			group: new Mp("group", e),
			imagePair: new Mp("image-pair", e),
			old: new Mp("old", e),
			new: new Mp("new", e)
		};
	}
	function $(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	$.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Bp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Ip(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), f(this._fragmentFiber.child, !1, Pp, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Pp(e, t, n, r) {
		return _(e).addEventListener(t, n, r), !1;
	}
	$.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Ip(i.optionsOrUseCapture), f(this._fragmentFiber.child, !1, Fp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Fp(e, t, n, r) {
		return _(e).removeEventListener(t, n, r), !1;
	}
	function Ip(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function Rp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Bp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = Rp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && Rp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	$.prototype.dispatchEvent = function(e) {
		var t = p(this._fragmentFiber);
		if (t === null) return !0;
		t = _(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Ip(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Ip(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, $.prototype.focus = function(e) {
		f(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
	};
	function Vp(e, t) {
		return e.tag !== 6 && (e = _(e), pm(e, t));
	}
	$.prototype.focusLast = function(e) {
		var t = [];
		f(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
	};
	function Hp(e, t) {
		return t.push(e), !1;
	}
	$.prototype.blur = function() {
		var e = p(this._fragmentFiber);
		e !== null && (e = _(e), e = sp(e).activeElement, e !== null && f(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = _(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	$.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), f(this._fragmentFiber.child, !1, Wp, e, void 0, void 0);
	};
	function Wp(e, t) {
		return e.tag !== 6 && (e = _(e), t.observe(e), !1);
	}
	$.prototype.unobserveUsing = function(e) {
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
	$.prototype.getClientRects = function() {
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
	$.prototype.getRootNode = function(e) {
		var t = p(this._fragmentFiber);
		return t === null ? this : _(t).getRootNode(e);
	}, $.prototype.compareDocumentPosition = function(e) {
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
		var a = Pt(i);
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
	$.prototype.scrollIntoView = function(e) {
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
			e.addEventListener(i.type, i.attachedListener, Ip(i.optionsOrUseCapture));
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
			e.removeEventListener(i.type, i.attachedListener, Ip(i.optionsOrUseCapture));
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
					nm(n), Nt(n);
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
			} else if (!e[jt]) switch (t) {
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
		_p(function() {
			_p(function(t) {
				return e(t);
			});
		});
	}
	function hm(e, t, n) {
		switch (t = sp(n), e) {
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
			n.hasOwnProperty(r) && i != null && Q(e, t, r, null, tp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === bn && (e.onclick = null), Nt(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Nt(e);
	}
	var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
	function bm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var xm = k.d;
	k.d = {
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
		var e = xm.f(), t = Ld();
		return e || t;
	}
	function Cm(e) {
		var t = Ft(e);
		t !== null && t.tag === 5 && t.type === "form" ? $s(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = an(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), ep(t, "link", e), Rt(t), r.head.appendChild(t)));
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
			var i = "link[rel=\"preload\"][as=\"" + an(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + an(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + an(n.imageSizes) + "\"]")) : i += "[href=\"" + an(e) + "\"]";
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
				ep(o, "link", e), t === "style" && (o[Mt] = !0, o.onload = o.onerror = function() {
					zt(o);
				}), Rt(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + an(r) + "\"][href=\"" + an(e) + "\"]", a = i;
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
				r = n.createElement("link"), ep(r, "link", e), Rt(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = Lt(r).hoistableStyles, a = Pm(e);
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
					Rt(c), ep(c, "link", e), c._p = new Promise(function(e, t) {
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
			var r = Lt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = C({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Rt(a), ep(a, "link", e), n.head.appendChild(a)), a = {
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
			var r = Lt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = C({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Rt(a), ep(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var a = (a = De.current) ? bm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = Lt(a).hoistableStyles, r = t.get(n), r || (r = {
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
					var o = Lt(a).hoistableStyles, s = o.get(e);
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
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = Lt(a).hoistableScripts, r = t.get(n), r || (r = {
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
		return "href=\"" + an(e) + "\"";
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
			if (!0 !== t[Mt]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Mt] = !0, t.onload = t.onerror = zt.bind(null, t), ep(t, "link", n), Rt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + an(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + an(n.href) + "\"]");
				if (r) return t.instance = r, Rt(r), r;
				var a = C({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Rt(r), ep(r, "style", a), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Pm(n.href);
				var o = e.querySelector(Fm(a));
				if (o) return t.state.loading |= 4, t.instance = o, Rt(o), o;
				r = Im(n), (a = vm.get(a)) && Hm(r, a), o = (e.ownerDocument || e).createElement("link"), Rt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), ep(o, "link", r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
			case "script": return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, Rt(a), a) : (r = n, (a = vm.get(o)) && (r = C({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Rt(a), ep(a, "link", r), e.head.appendChild(a), t.instance = a);
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
			if (!(a[jt] || a[wt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
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
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Rt(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), Rt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), ep(a, "link", r), n.instance = a;
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
			0 < e.imgBytes && $m === 0 && ($m = 62500 * ip());
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
		$$typeof: ae,
		Provider: null,
		Consumer: null,
		_currentValue: be,
		_currentValue2: be,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mt(0), this.hiddenUpdates = mt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Mi(3, null, null, t), e.current = a, a.stateNode = e, t = Aa(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, fo(a), e;
	}
	function uh(e) {
		return e ? (e = Ai, e) : Ai;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = mo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = ho(e, r, t), n !== null && (Md(n, e, t), go(n, e, t));
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
			var t = Di(e, 67108864);
			t !== null && Md(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = kd();
			t = yt(t);
			var n = Di(e, t);
			n !== null && Md(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = O.T;
		O.T = null;
		var a = k.p;
		try {
			k.p = 2, yh(e, t, n, r);
		} finally {
			k.p = a, O.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = O.T;
		O.T = null;
		var a = k.p;
		try {
			k.p = 8, yh(e, t, n, r);
		} finally {
			k.p = a, O.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Wf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = Ft(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = ct(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - nt(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									wf(a), !(K & 6) && (md = Ge() + 500, Tf(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Di(a, 2), s !== null && Md(s, a, 2), Ld(), ph(a, 2);
					}
					if (a = bh(r), a === null && Wf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Wf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = Sn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = Pt(e), e !== null) {
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
			case "message": switch (Ke()) {
				case j: return 2;
				case qe: return 8;
				case Je:
				case Ye: return 32;
				case Xe: return 268435456;
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
		}, t !== null && (t = Ft(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
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
		var t = Pt(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, St(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, St(e.priority, function() {
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
				xn = r, n.target.dispatchEvent(r), xn = null;
			} else return t = Ft(n), t !== null && mh(t), e.blockedOn = n, !1;
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
				var a = Ft(n);
				a !== null && (e.splice(t, 3), t -= 3, Zs(a, {
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
			var i = n[r], a = n[r + 1], o = i[Tt] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[Tt] || null) s = o.formAction;
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
		dh(n, kd(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), Ld(), t[Et] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = xt();
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
	k.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = u(t), e = e === null ? null : d(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: O,
		reconcilerVersion: "19.3.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			$e = Jh.inject(qh), et = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = bc, s = xc, c = Sc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[Et] = t.current, Hf(e), new Wh(t);
	};
})), Vp = (/* @__PURE__ */ ht(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = Bp();
})))();
//#endregion
//#region src/ui/useMenuDismiss.ts
function Hp() {
	let e = (0, Np.useRef)(null);
	return (0, Np.useEffect)(() => {
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
			e.target instanceof Node && !t.contains(e.target) && n();
		}, a = (e) => {
			if (e.key !== "Escape" || !t.querySelector(":scope > details[open]") || e.target instanceof Element && e.target.closest("[data-menu-editing=\"true\"], [data-editing=\"true\"]")) return;
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
function Up({ children: e }) {
	let t = Hp();
	return (0, Np.useEffect)(() => {
		let e = t.current, n = e?.parentElement;
		if (!e || !n) return;
		let r = new ResizeObserver(() => n.style.setProperty("--viewport-toolbar-bottom", `${e.offsetTop + e.offsetHeight + 8}px`));
		return r.observe(e), () => {
			r.disconnect(), n.style.removeProperty("--viewport-toolbar-bottom");
		};
	}, [t]), /* @__PURE__ */ (0, $.jsx)("nav", {
		ref: t,
		className: "viewport-toolbar",
		"aria-label": "뷰포트 도구막대",
		children: e
	});
}
function Wp({ name: e }) {
	return /* @__PURE__ */ (0, $.jsx)("svg", {
		viewBox: "0 0 20 20",
		"aria-hidden": "true",
		children: {
			menu: /* @__PURE__ */ (0, $.jsx)("path", { d: "M4 6h12M4 10h12M4 14h12" }),
			cube: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("path", { d: "m10 2 7 4v8l-7 4-7-4V6Z" }), /* @__PURE__ */ (0, $.jsx)("path", { d: "m3 6 7 4 7-4M10 10v8" })] }),
			lit: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("circle", {
				cx: "10",
				cy: "10",
				r: "7"
			}), /* @__PURE__ */ (0, $.jsx)("path", {
				d: "M10 3a7 7 0 0 1 0 14Z",
				fill: "currentColor"
			})] }),
			unlit: /* @__PURE__ */ (0, $.jsx)("circle", {
				cx: "10",
				cy: "10",
				r: "7"
			}),
			wireframe: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("path", { d: "m10 2 7 4v8l-7 4-7-4V6Z" }), /* @__PURE__ */ (0, $.jsx)("path", { d: "m3 6 14 8M17 6 3 14M10 2v16" })] }),
			world: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
				/* @__PURE__ */ (0, $.jsx)("circle", {
					cx: "10",
					cy: "10",
					r: "8"
				}),
				/* @__PURE__ */ (0, $.jsx)("ellipse", {
					cx: "10",
					cy: "10",
					rx: "4",
					ry: "8"
				}),
				/* @__PURE__ */ (0, $.jsx)("path", { d: "M2 10h16" })
			] }),
			local: /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: /* @__PURE__ */ (0, $.jsx)("path", { d: "M10 2v9l7 4M10 11l-7 4M7 5l3-3 3 3M14 15h3v-3M6 15H3v-3" }) }),
			grid: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("rect", {
				x: "2",
				y: "2",
				width: "16",
				height: "16",
				rx: "1"
			}), /* @__PURE__ */ (0, $.jsx)("path", { d: "M7 2v16M13 2v16M2 7h16M2 13h16" })] }),
			angle: /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: /* @__PURE__ */ (0, $.jsx)("path", { d: "M4 16h13M4 16 12 3M9 16a5 5 0 0 0-2-4" }) }),
			scale: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("path", { d: "M4 16 16 4M10 4h6v6" }), /* @__PURE__ */ (0, $.jsx)("rect", {
				x: "2",
				y: "13",
				width: "5",
				height: "5",
				fill: "currentColor"
			})] }),
			layout: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("rect", {
				x: "2",
				y: "2",
				width: "16",
				height: "16",
				rx: "2"
			}), /* @__PURE__ */ (0, $.jsx)("path", { d: "M10 2v16M2 10h16" })] })
		}[e]
	});
}
//#endregion
//#region src/ui/ViewportControls.tsx
function Gp(e) {
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
function Kp({ value: e, onChange: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("details", {
		className: "viewport-options-menu viewport-projection-menu",
		children: [/* @__PURE__ */ (0, $.jsxs)("summary", {
			"aria-label": "Viewport projection",
			children: [/* @__PURE__ */ (0, $.jsx)(Wp, { name: "cube" }), Gp(e)]
		}), /* @__PURE__ */ (0, $.jsx)("div", { children: [
			"perspective",
			"top",
			"bottom",
			"front",
			"back",
			"left",
			"right"
		].map((n) => /* @__PURE__ */ (0, $.jsx)("button", {
			type: "button",
			"aria-pressed": e === n,
			onClick: (e) => {
				t(n), e.currentTarget.closest("details")?.removeAttribute("open");
			},
			children: Gp(n)
		}, n)) })]
	});
}
function qp({ value: e, onChange: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("details", {
		className: "viewport-options-menu viewport-view-menu",
		children: [/* @__PURE__ */ (0, $.jsxs)("summary", {
			"aria-label": "Viewport view mode",
			children: [/* @__PURE__ */ (0, $.jsx)(Wp, { name: e }), e === "lit" ? "라이팅포함" : e === "unlit" ? "언릿" : "와이어"]
		}), /* @__PURE__ */ (0, $.jsx)("div", { children: [
			"lit",
			"unlit",
			"wireframe"
		].map((n) => /* @__PURE__ */ (0, $.jsxs)("button", {
			type: "button",
			title: n === "unlit" ? "조명 없이 베이스 컬러 확인" : void 0,
			"aria-pressed": e === n,
			onClick: (e) => {
				t(n), e.currentTarget.closest("details")?.removeAttribute("open");
			},
			children: [/* @__PURE__ */ (0, $.jsx)(Wp, { name: n }), n === "lit" ? "라이팅" : n === "unlit" ? "언릿" : "와이어"]
		}, n)) })]
	});
}
//#endregion
//#region src/ui/RenderQualityMenu.tsx
function Jp({ preset: e, status: t, disabled: n, onChange: r, children: i }) {
	let a = t.state === "failed" ? t.active : e;
	return /* @__PURE__ */ (0, $.jsxs)("details", {
		className: "viewport-options-menu render-quality-menu",
		children: [/* @__PURE__ */ (0, $.jsxs)("summary", {
			"aria-label": "Render Quality",
			title: t.state === "ready" ? "렌더링 품질 · 재질/텍스처/메시/LOD 품질과 별개" : t.message,
			children: [
				"Render Quality: ",
				Ke[a].label,
				t.state === "preparing" ? " (준비 중)" : t.state === "failed" ? " (적용 실패)" : "",
				" ▾"
			]
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			"aria-label": "Render Quality 프리셋",
			children: [
				xe.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
					type: "button",
					disabled: n,
					"aria-pressed": a === e,
					onClick: (t) => {
						r(e), t.currentTarget.closest("details")?.removeAttribute("open");
					},
					children: [/* @__PURE__ */ (0, $.jsx)("span", {
						"aria-hidden": "true",
						children: a === e ? "✓ " : ""
					}), Ke[e].label]
				}, e)),
				i,
				t.state === "ready" ? null : /* @__PURE__ */ (0, $.jsxs)("span", {
					role: t.state === "failed" ? "alert" : "status",
					children: [
						t.message,
						" 현재 적용: ",
						Ke[t.active].label
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/ui/appExecutionPreferences.ts
var Yp = {
	toneMapping: Zi.toneMapping,
	exposure: Zi.exposure,
	fog: Zi.fog
};
function Xp(e) {
	try {
		return Qi({
			...Zi,
			...e
		}), !!e && typeof e == "object" && Object.keys(e).sort().join(",") === "exposure,fog,toneMapping";
	} catch {
		return !1;
	}
}
//#endregion
//#region src/ui/ScreenEffectsOptions.tsx
function Zp({ effects: e, onChange: t, disabled: n }) {
	let [r, i] = (0, Np.useState)(""), a = (n) => {
		try {
			let r = n(e);
			if (!Xp(r)) throw Error("화면 효과 값이 허용 범위를 벗어났습니다.");
			t(r), i("");
		} catch (e) {
			i(e instanceof Error ? e.message : String(e));
		}
	}, o = (t, r, o) => /* @__PURE__ */ (0, $.jsx)(Fp, {
		label: t,
		value: r,
		validate: (t) => {
			try {
				if (!Xp(o(e, t))) throw Error("화면 효과 값이 허용 범위를 벗어났습니다.");
				return i(""), { ok: !0 };
			} catch (e) {
				return i(e instanceof Error ? e.message : String(e)), { ok: !1 };
			}
		},
		onCommit: (e) => a((t) => o(t, e))
	}, `${t}:${r}:${n}`);
	return /* @__PURE__ */ (0, $.jsxs)("fieldset", {
		className: "screen-effects-options",
		disabled: n,
		children: [
			/* @__PURE__ */ (0, $.jsx)("legend", { children: "화면과 안개" }),
			/* @__PURE__ */ (0, $.jsxs)("label", { children: ["톤 매핑", /* @__PURE__ */ (0, $.jsxs)("select", {
				"aria-label": "효과 톤 매핑",
				value: e.toneMapping,
				onChange: (e) => a((t) => ({
					...t,
					toneMapping: e.target.value
				})),
				children: [/* @__PURE__ */ (0, $.jsx)("option", {
					value: "none",
					children: "원본 표시"
				}), /* @__PURE__ */ (0, $.jsx)("option", {
					value: "aces",
					children: "ACES Filmic"
				})]
			})] }),
			/* @__PURE__ */ (0, $.jsx)("fieldset", {
				disabled: e.toneMapping === "none",
				children: /* @__PURE__ */ (0, $.jsxs)("label", { children: ["노출", o("효과 노출", e.exposure, (e, t) => ({
					...e,
					exposure: t
				}))] })
			}),
			/* @__PURE__ */ (0, $.jsxs)("label", {
				className: "quality-checkbox",
				children: [/* @__PURE__ */ (0, $.jsx)("input", {
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
			/* @__PURE__ */ (0, $.jsxs)("label", { children: ["안개 색", /* @__PURE__ */ (0, $.jsx)("input", {
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
			["nearMeters", "farMeters"].map((t, n) => /* @__PURE__ */ (0, $.jsxs)("label", { children: [
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
			r ? /* @__PURE__ */ (0, $.jsx)("span", {
				role: "alert",
				children: r
			}) : null
		]
	});
}
//#endregion
//#region src/ui/ActorIconOptions.tsx
function Qp({ visible: e, scale: t, onVisible: n, onScale: r }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("label", { children: [/* @__PURE__ */ (0, $.jsx)("input", {
		"aria-label": "액터 아이콘 표시",
		type: "checkbox",
		checked: e,
		onChange: (e) => n(e.target.checked)
	}), "아이콘"] }), /* @__PURE__ */ (0, $.jsxs)("label", {
		className: "viewport-icon-scale",
		title: "기본 크기의 0.25~4배. 실제 객체 크기는 변경하지 않습니다.",
		children: [/* @__PURE__ */ (0, $.jsx)("span", { children: "아이콘 크기 (배)" }), /* @__PURE__ */ (0, $.jsx)(Fp, {
			label: "액터 아이콘 크기",
			value: t,
			validate: (e) => ({ ok: Wu(e) }),
			onCommit: r,
			scrubRange: [Uu, 4]
		})]
	})] });
}
//#endregion
//#region src/ui/EnvironmentIntensityInput.tsx
function $p({ value: e, onCommit: t, disabled: n, ariaLabel: r }) {
	let [i, a] = (0, Np.useState)(null), [o, s] = (0, Np.useState)(!1), c = (0, Np.useRef)(null), l = (0, Np.useRef)(null), u = () => {
		l.current !== null && clearTimeout(l.current), l.current = null, c.current = null, a(null), s(!1);
	};
	(0, Np.useEffect)(() => {
		let e = () => {
			document.hidden && u();
		};
		return window.addEventListener("blur", u), document.addEventListener("visibilitychange", e), () => {
			l.current !== null && clearTimeout(l.current), window.removeEventListener("blur", u), document.removeEventListener("visibilitychange", e);
		};
	}, []), (0, Np.useEffect)(() => {
		u();
	}, [e, n]);
	let d = () => {
		let n = c.current;
		if (n === null) return !0;
		let r = n.trim() === "" ? NaN : Number(n);
		return Ia(r) ? (u(), r !== e && t(r), !0) : (s(!0), !1);
	};
	return /* @__PURE__ */ (0, $.jsx)("input", {
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
			e.nativeEvent.isComposing || (e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), u(), e.currentTarget.blur()), e.key === "Enter" && (e.preventDefault(), d() && e.currentTarget.blur()));
		},
		onBlur: () => {
			l.current = setTimeout(() => {
				l.current = null, !document.hasFocus() || document.hidden ? u() : d() || u();
			}, 0);
		}
	});
}
//#endregion
//#region src/delivery/DeliveryViewportTools.tsx
function em({ viewer: e, immersive: t }) {
	let [, n] = (0, Np.useState)(0), [r, i] = (0, Np.useState)(Yp), a = () => n((e) => e + 1);
	(0, Np.useEffect)(() => (e.onViewChange = a, e.navigation.onAction = (n) => {
		if (n === "focus-selection" && e.focusSelection(), n === "toggle-immersive" && t(), n === "toggle-game-view") {
			let t = !e.helpers;
			e.helpers = t, e.grid.visible = t, e.invalidate(), a();
		}
	}, () => {
		e.onViewChange = void 0, e.navigation.onAction = void 0;
	}), [e, t]);
	let o = e.quality.snapshot();
	return /* @__PURE__ */ (0, $.jsxs)(Up, { children: [
		/* @__PURE__ */ (0, $.jsxs)("details", {
			className: "viewport-options-menu viewport-main-menu",
			children: [/* @__PURE__ */ (0, $.jsx)("summary", {
				"aria-label": "뷰포트 옵션",
				children: /* @__PURE__ */ (0, $.jsx)(Wp, { name: "menu" })
			}), /* @__PURE__ */ (0, $.jsxs)("div", { children: [
				/* @__PURE__ */ (0, $.jsxs)("button", {
					onClick: t,
					children: ["뷰포트 최대화", /* @__PURE__ */ (0, $.jsx)("kbd", { children: "F11" })]
				}),
				/* @__PURE__ */ (0, $.jsxs)("button", {
					onClick: () => e.focusSelection(),
					children: ["선택에 초점", /* @__PURE__ */ (0, $.jsx)("kbd", { children: "F" })]
				}),
				/* @__PURE__ */ (0, $.jsx)("button", {
					onClick: () => e.fit(),
					children: "전체 맞춤"
				}),
				/* @__PURE__ */ (0, $.jsxs)("details", {
					className: "camera-options",
					open: !0,
					children: [/* @__PURE__ */ (0, $.jsx)("summary", { children: "카메라 설정" }), /* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsxs)("label", { children: ["속도 (m/s)", /* @__PURE__ */ (0, $.jsx)(Fp, {
						label: "Viewport camera speed",
						value: e.navigation.speed,
						validate: (e) => ({ ok: typeof e == "number" && Number.isFinite(e) && e >= .25 && e <= 64 }),
						onCommit: (t) => {
							e.navigation.setSpeed(t), a();
						}
					})] }) })]
				}),
				/* @__PURE__ */ (0, $.jsxs)("p", { children: [
					"우클릭 + WASD / QE 이동",
					/* @__PURE__ */ (0, $.jsx)("br", {}),
					"Alt + 좌클릭 회전 · 휠 확대",
					/* @__PURE__ */ (0, $.jsx)("br", {}),
					"가운데 버튼 드래그로 평행 이동"
				] })
			] })]
		}),
		/* @__PURE__ */ (0, $.jsx)(Kp, {
			value: e.projection,
			onChange: (t) => e.setProjection(t)
		}),
		/* @__PURE__ */ (0, $.jsx)(qp, {
			value: e.mode,
			onChange: (t) => e.setMode(t)
		}),
		/* @__PURE__ */ (0, $.jsxs)(Jp, {
			preset: o.requested,
			status: o,
			disabled: !1,
			onChange: (t) => {
				e.quality.apply(t);
			},
			children: [/* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, $.jsx)("legend", { children: "환경광" }),
				/* @__PURE__ */ (0, $.jsxs)("label", {
					className: "quality-checkbox",
					children: [/* @__PURE__ */ (0, $.jsx)("input", {
						"aria-label": "Show environment lighting",
						type: "checkbox",
						checked: e.environment,
						onChange: (t) => {
							e.environment = t.target.checked, e.invalidate(), a();
						}
					}), "환경광"]
				}),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["환경광 강도", /* @__PURE__ */ (0, $.jsx)($p, {
					ariaLabel: "뷰포트 환경광 강도",
					value: e.environmentIntensity,
					disabled: !e.environment,
					onCommit: (t) => {
						e.environmentIntensity = t, e.invalidate(), a();
					}
				})] })
			] }), /* @__PURE__ */ (0, $.jsx)(Zp, {
				effects: r,
				disabled: !1,
				onChange: (t) => {
					e.setScreenEffects(t), i(t);
				}
			})]
		}),
		/* @__PURE__ */ (0, $.jsxs)("details", {
			className: "viewport-options-menu",
			children: [/* @__PURE__ */ (0, $.jsx)("summary", { children: "표시" }), /* @__PURE__ */ (0, $.jsxs)("div", { children: [
				/* @__PURE__ */ (0, $.jsxs)("label", { children: [/* @__PURE__ */ (0, $.jsx)("input", {
					"aria-label": "Show grid",
					type: "checkbox",
					checked: e.grid.visible,
					onChange: (t) => {
						e.grid.visible = t.target.checked, e.invalidate(), a();
					}
				}), "그리드"] }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: [/* @__PURE__ */ (0, $.jsx)("input", {
					"aria-label": "Show editor helpers",
					type: "checkbox",
					checked: e.helpers,
					onChange: (t) => {
						e.helpers = t.target.checked, e.invalidate(), a();
					}
				}), "선택 표시·아이콘"] }),
				/* @__PURE__ */ (0, $.jsx)(Qp, {
					visible: e.icons,
					scale: e.iconScale,
					onVisible: (t) => {
						e.icons = t, e.invalidate(), a();
					},
					onScale: (t) => {
						e.iconScale = t, e.invalidate(), a();
					}
				})
			] })]
		}),
		/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "viewport-tool-actions",
			children: [/* @__PURE__ */ (0, $.jsx)("button", {
				className: "viewport-layout-toggle",
				"aria-label": "선택에 초점",
				title: "선택에 초점 · F",
				onClick: () => e.focusSelection(),
				children: /* @__PURE__ */ (0, $.jsx)(Wp, { name: "cube" })
			}), /* @__PURE__ */ (0, $.jsx)("button", {
				className: "viewport-layout-toggle",
				"aria-label": "뷰포트 최대화",
				title: "뷰포트 최대화 · F11",
				onClick: t,
				children: /* @__PURE__ */ (0, $.jsx)(Wp, { name: "layout" })
			})]
		})
	] });
}
function tm(e, t, n) {
	let r = (0, Vp.createRoot)(e);
	return r.render(/* @__PURE__ */ (0, $.jsx)(em, {
		viewer: t,
		immersive: n
	})), () => r.unmount();
}
//#endregion
//#region src/delivery/EquipmentPanel.ts
function nm(e, t, n = e) {
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
var rm = class {
	namespace;
	budget;
	entries = /* @__PURE__ */ new Map();
	bytes = 0;
	stamp;
	constructor(e, t = 256 * 1024 ** 2) {
		if (this.namespace = e, this.budget = t, !/^[a-zA-Z0-9_-]{1,80}$/.test(e) || !Number.isSafeInteger(t) || t < pi) throw Error("Invalid chunk cache configuration");
	}
	open() {
		return caches.open(`dt-chunks-v1-${this.namespace}`);
	}
	key(e) {
		if (!bi(e)) throw Error("Invalid cache key");
		return new URL(`/__dt_chunk_cache/${e}`, location.origin).href;
	}
	async get(e) {
		let t = await (await this.open()).match(this.key(e));
		if (!t) return;
		if (Number(t.headers.get("content-length")) > pi) {
			await this.remove(e);
			return;
		}
		if (!t.body) return;
		let n = t.body.getReader(), r = new Uint8Array(pi), i = 0;
		try {
			for (;;) {
				let { done: e, value: t } = await n.read();
				if (e) break;
				if (i + t.length > pi) throw Error("Cached object exceeds chunk limit");
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
		if (t.length > pi) throw Error("Cache chunk too large");
		await navigator.locks.request(`dt-chunk-cache-${this.namespace}`, async () => {
			let n = await this.open(), r = this.key(e);
			if (await n.match(r)) return;
			let i = new URL("/__dt_chunk_cache/index", location.origin).href, a = (await n.match(i))?.headers.get("x-dt-generation") ?? "";
			if (this.stamp !== a) {
				this.entries.clear(), this.bytes = 0;
				for (let e of await n.keys()) {
					if (e.url === i) continue;
					let t = await n.match(e), r = Number(t?.headers.get("content-length"));
					if (!Number.isSafeInteger(r) || r <= 0 || r > pi) {
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
//#region src/delivery/LoadingPanel.ts
function im(e, t) {
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
	}, c = s("로드 반경(cm)", Kf.loadDistance * 100), l = s("언로드 반경(cm)", Kf.unloadDistance * 100), u = s("언로드 지연(초)", Kf.unloadDelayMs / 1e3), d = document.createElement("button"), f = document.createElement("button"), p = document.createElement("p"), m = document.createElement("p"), h = document.createElement("div");
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
				let r = e.spatial?.find((e) => e.level === n.level)?.bounds, i = new Ve().compose(new j(...n.position), new Be(...n.rotation), new j(1, 1, 1)), a = r ? new Me(new j(...r.min), new j(...r.max)).getCenter(new j()).applyMatrix4(i) : new j(...n.position);
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
//#region src/delivery/AddonPropertiesClient.ts
var am = class {
	client;
	appId;
	releaseHash;
	executionId = crypto.randomUUID();
	socket;
	closed = !1;
	connecting = !1;
	listeners = /* @__PURE__ */ new Set();
	constructor(e, t, n) {
		if (this.client = e, this.appId = t, this.releaseHash = n, Ri(t), !bi(n)) throw Error("Invalid addon release pin");
	}
	path(e = "") {
		return `api/apps/${this.appId}/addons${e}`;
	}
	list() {
		return this.client.json(`${this.path()}?releaseHash=${this.releaseHash}&executionId=${this.executionId}`);
	}
	schema(e) {
		return this.client.json(`${this.path("/schema")}?releaseHash=${this.releaseHash}&target=${encodeURIComponent(JSON.stringify(e))}`);
	}
	values(e) {
		return this.client.json(`${this.path("/values")}?releaseHash=${this.releaseHash}&executionId=${this.executionId}&target=${encodeURIComponent(JSON.stringify(e))}`);
	}
	change(e, t, n) {
		if (this.closed) throw Error("Addon control session is closed");
		if (t === "runtime" && this.socket?.readyState !== WebSocket.OPEN) throw Error("Runtime addon control needs a connected notification session");
		return this.client.write(this.path("/properties"), "POST", {
			releaseHash: this.releaseHash,
			executionId: this.executionId,
			updates: e,
			mode: t,
			expectedRevision: n
		});
	}
	subscribe(e) {
		return this.listeners.add(e), () => {
			this.listeners.delete(e);
		};
	}
	async connect() {
		if (this.closed || this.socket || this.connecting) throw Error("Addon control session already used");
		this.connecting = !0;
		try {
			if (await this.client.write(this.path("/sessions"), "POST", { executionId: this.executionId }), this.closed) throw await this.client.write(this.path("/sessions"), "POST", {
				executionId: this.executionId,
				close: !0
			}, AbortSignal.timeout(1e3)), Error("Addon connection cancelled");
			let e = () => {
				if (!this.closed) for (let e of [...this.listeners]) try {
					e();
				} catch {}
			}, t = await this.client.addonEvents(this.appId, this.executionId, (t) => {
				t && typeof t == "object" && t.type === "change" && e();
			});
			if (this.closed) {
				t.close();
				return;
			}
			this.socket = t, t.addEventListener("close", e);
		} catch (e) {
			throw await this.dispose(), e;
		} finally {
			this.connecting = !1;
		}
	}
	async dispose() {
		this.closed || (this.closed = !0, this.listeners.clear(), this.socket?.close(), await this.client.write(this.path("/sessions"), "POST", {
			executionId: this.executionId,
			close: !0
		}, AbortSignal.timeout(1e3)).catch(() => {}));
	}
};
//#endregion
export { xt as ADDON_SDK_VERSION, am as AddonPropertiesClient, rm as BrowserChunkCache, sp as ChunkReader, Wr as DEFAULT_DELIVERY_CELL_SIZE, Kf as DEFAULT_SPATIAL_STREAMING, vi as DELIVERY_ADDON_CONTRACT, _i as DELIVERY_CELL_CONTRACT, mi as DELIVERY_CONTRACT, Tp as DELIVERY_MESH_MOTION, hi as DELIVERY_OBJECT_CONTRACT, so as DELIVERY_SDK_VERSION, gi as DELIVERY_SPATIAL_CONTRACT, Rf as DISPLAY_BUDGET_MIB, Xf as DeliveryAddonController, co as DeliveryApiClient, Yf as DeliverySession, Zf as DeliveryViewer, ap as MemoryChunkCache, ji as actorServiceKey, Tt as addonCapabilityDescriptors, Xr as addonTargetKey, io as applicationHash, cp as applicationReader, ao as applicationSnapshot, mo as bindHostData, uo as bindingImpacts, no as diffActors, Z as displayBudget, hs as equipmentPath, op as httpByteProvider, Ii as mountActorPanel, im as mountDeliveryLoadingPanel, tm as mountDeliveryViewportTools, nm as mountEquipmentPanel, Op as mountReviewPanel, Vf as readDisplayBudgetPreference, eo as readReviewSnapshot, oo as resolveApplication, Hf as saveDisplayBudgetPreference, Dp as startDeliveryRuntime, ro as validateApplication, Ei as validateDelivery, Ep as validateDeliveryRuntime, Ai as validateDelta, lo as validateHostBindings };
