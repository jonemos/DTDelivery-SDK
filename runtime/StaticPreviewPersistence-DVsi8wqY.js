import "./rolldown-runtime-DF993M8W.js";
import { $ as e, $n as t, At as n, B as r, C as i, Cr as a, Ct as o, Ft as s, Gt as c, Ht as l, I as u, It as d, Kt as f, Ln as p, Lt as m, Mt as h, Nt as g, Pt as _, Qn as v, Rt as y, S as b, Tt as x, Ut as ee, Wn as S, Wt as te, X as ne, Y as re, Z as ie, Zn as ae, _ as oe, a as se, br as C, bt as w, c as ce, ct as le, dt as ue, et as de, f as fe, ft as pe, g as me, gt as he, ht as ge, i as _e, jt as ve, lt as ye, nr as be, nt as xe, or as Se, ot as Ce, p as we, pt as Te, q as T, qt as Ee, rt as De, sr as Oe, st as ke, tt as Ae, ut as je, wt as Me, x as Ne, xr as E, xt as Pe, y as Fe, zt as Ie } from "./RenderQualityPreset-BFl3kMLS.js";
//#region src/domain/scene.ts
var Le = [
	"Cube",
	"Sphere",
	"Cylinder",
	"Cone",
	"Plane"
];
function Re(e) {
	return Le.some((t) => t === e);
}
function D(e) {
	return e.type !== "TestData" && e.type !== "TestScript";
}
function ze(e) {
	let t = e.components.find((t) => t.id === e.rootComponentId);
	if (!t || !D(t)) throw Error(`Actor ${e.id} requires a SceneComponent root.`);
	return t;
}
function Be(e, t, n) {
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
	}, i = Re(e) ? {
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
		classId: Re(e) ? "PrimitiveCubeActor" : `${e}Actor`,
		rootComponentId: n,
		components: [i],
		tags: []
	};
}
//#endregion
//#region out/component-packages/installed.json
var Ve = /*#__PURE__*/ JSON.parse("[{\"manifest\":{\"formatVersion\":3,\"packageId\":\"dt.mesh-motion\",\"version\":\"1.0.0\",\"sdkVersion\":3,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"Mesh 이동·회전 스크립트\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\"],\"settings\":[{\"key\":\"targetMesh\",\"fieldId\":\"script.mesh\",\"kind\":\"component-reference\",\"componentType\":\"StaticMesh\",\"required\":true,\"label\":\"대상 Mesh\",\"defaultValue\":\"\"},{\"key\":\"speedMetersPerSecond\",\"fieldId\":\"script.speed\",\"kind\":\"number\",\"label\":\"X 이동 속도 (m/s)\",\"defaultValue\":1,\"min\":-10,\"max\":10},{\"key\":\"radiansPerSecond\",\"fieldId\":\"script.angularSpeed\",\"kind\":\"number\",\"label\":\"Y 회전 속도 (rad/s)\",\"defaultValue\":1,\"min\":-10,\"max\":10}]},\"reference\":{\"packageId\":\"dt.mesh-motion\",\"version\":\"1.0.0\",\"codeHash\":\"c6b8244101f48f5c489d8da3edaa1f852a59612e3138c952c94c86aa9adfbd4d\"}},{\"manifest\":{\"formatVersion\":3,\"packageId\":\"dt.mesh-pulse-effect\",\"version\":\"1.0.0\",\"sdkVersion\":3,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"Mesh 맥동 Effect\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\"],\"settings\":[{\"key\":\"alarmData\",\"fieldId\":\"script.alarmData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"경보값 입력 (0/1)\",\"defaultValue\":\"\"},{\"key\":\"targetMesh\",\"fieldId\":\"script.targetMesh\",\"kind\":\"component-reference\",\"componentType\":\"StaticMesh\",\"required\":true,\"label\":\"효과 Mesh\",\"defaultValue\":\"\"},{\"key\":\"amplitude\",\"fieldId\":\"script.amplitude\",\"kind\":\"number\",\"label\":\"확대 비율\",\"defaultValue\":0.25,\"min\":0,\"max\":1},{\"key\":\"frequencyHz\",\"fieldId\":\"script.frequencyHz\",\"kind\":\"number\",\"label\":\"맥동 주파수 (Hz)\",\"defaultValue\":1,\"min\":0.1,\"max\":5}]},\"reference\":{\"packageId\":\"dt.mesh-pulse-effect\",\"version\":\"1.0.0\",\"codeHash\":\"2362c62a36074d101aa69ef8a6174f3dc6de05e8d4b10aa68d5523988f74bbfc\"}},{\"manifest\":{\"formatVersion\":4,\"packageId\":\"dt.mesh-pulse-effect\",\"version\":\"2.0.0\",\"sdkVersion\":4,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"Mesh 맥동 Effect · 유효성\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\",\"owner.signals\"],\"settings\":[{\"key\":\"alarmData\",\"fieldId\":\"script.alarmData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"경보값 입력 (0/1)\",\"defaultValue\":\"\"},{\"key\":\"targetMesh\",\"fieldId\":\"script.targetMesh\",\"kind\":\"component-reference\",\"componentType\":\"StaticMesh\",\"required\":true,\"label\":\"효과 Mesh\",\"defaultValue\":\"\"},{\"key\":\"amplitude\",\"fieldId\":\"script.amplitude\",\"kind\":\"number\",\"label\":\"확대 비율\",\"defaultValue\":0.25,\"min\":0,\"max\":1},{\"key\":\"frequencyHz\",\"fieldId\":\"script.frequencyHz\",\"kind\":\"number\",\"label\":\"맥동 주파수 (Hz)\",\"defaultValue\":1,\"min\":0.1,\"max\":5},{\"key\":\"maxAgeSeconds\",\"fieldId\":\"script.maxAgeSeconds\",\"kind\":\"number\",\"label\":\"최대 데이터 나이 (초)\",\"defaultValue\":0.5,\"min\":0.05,\"max\":60}]},\"reference\":{\"packageId\":\"dt.mesh-pulse-effect\",\"version\":\"2.0.0\",\"codeHash\":\"df99d8749c6e8d3a095ecd5364fc8cf4ea5c0d9f70b1a7c7ccc52727390e2ae6\"}},{\"manifest\":{\"formatVersion\":3,\"packageId\":\"dt.position-sensor\",\"version\":\"1.0.0\",\"sdkVersion\":3,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"위치 Sensor\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\"],\"settings\":[{\"key\":\"sourceMesh\",\"fieldId\":\"script.sourceMesh\",\"kind\":\"component-reference\",\"componentType\":\"StaticMesh\",\"required\":true,\"label\":\"측정 Mesh\",\"defaultValue\":\"\"},{\"key\":\"outputData\",\"fieldId\":\"script.outputData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"측정값 출력\",\"defaultValue\":\"\"}]},\"reference\":{\"packageId\":\"dt.position-sensor\",\"version\":\"1.0.0\",\"codeHash\":\"6938f1b7cdc3ef225be8a9f165a6d9543111142b7b6b14d931e8db0526620c66\"}},{\"manifest\":{\"formatVersion\":4,\"packageId\":\"dt.position-sensor\",\"version\":\"2.0.0\",\"sdkVersion\":4,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"위치 Sensor · 유효성\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\",\"owner.signals\"],\"settings\":[{\"key\":\"sourceMesh\",\"fieldId\":\"script.sourceMesh\",\"kind\":\"component-reference\",\"componentType\":\"StaticMesh\",\"required\":true,\"label\":\"측정 Mesh\",\"defaultValue\":\"\"},{\"key\":\"outputData\",\"fieldId\":\"script.outputData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"측정값 출력\",\"defaultValue\":\"\"}]},\"reference\":{\"packageId\":\"dt.position-sensor\",\"version\":\"2.0.0\",\"codeHash\":\"4f5e2994bf0aad90cc545725cfd9a44d14b7035d70ba646d0a00b1ba88b7d8fc\"}},{\"manifest\":{\"formatVersion\":1,\"packageId\":\"dt.test-data-script\",\"version\":\"1.0.0\",\"sdkVersion\":1,\"typeId\":\"TestScript\",\"typeVersion\":2,\"displayName\":\"테스트 스크립트\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\"],\"settings\":[{\"key\":\"targetComponentId\",\"fieldId\":\"script.target\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"대상 테스트 데이터\",\"defaultValue\":\"\"},{\"key\":\"ratePerSecond\",\"fieldId\":\"script.rate\",\"kind\":\"number\",\"label\":\"초당 증분\",\"defaultValue\":1}]},\"reference\":{\"packageId\":\"dt.test-data-script\",\"version\":\"1.0.0\",\"codeHash\":\"cc22c8fb6e95f1090a51c0a00086d2db881af1f038898053e5f993b53eeea2ea\"}},{\"manifest\":{\"formatVersion\":2,\"packageId\":\"dt.test-data-settings\",\"version\":\"1.0.0\",\"sdkVersion\":2,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"테스트 설정 스크립트\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\"],\"settings\":[{\"key\":\"sourceData\",\"fieldId\":\"script.source\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"입력 데이터\",\"defaultValue\":\"\"},{\"key\":\"targetData\",\"fieldId\":\"script.destination\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"출력 데이터\",\"defaultValue\":\"\"},{\"key\":\"gain\",\"fieldId\":\"script.gain\",\"kind\":\"number\",\"label\":\"배율\",\"defaultValue\":1,\"min\":0,\"max\":120},{\"key\":\"running\",\"fieldId\":\"script.running\",\"kind\":\"boolean\",\"label\":\"계산 사용\",\"defaultValue\":true},{\"key\":\"note\",\"fieldId\":\"script.note\",\"kind\":\"string\",\"label\":\"설정 메모\",\"defaultValue\":\"\",\"maxLength\":64},{\"key\":\"mirrorData\",\"fieldId\":\"script.mirror\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":false,\"label\":\"복사 데이터 (선택)\",\"defaultValue\":null}]},\"reference\":{\"packageId\":\"dt.test-data-settings\",\"version\":\"1.0.0\",\"codeHash\":\"e3c24fd4266ff8ddd5556b8f3923b01689363e6244aaa60be6b3abfdfe3867c3\"}},{\"manifest\":{\"formatVersion\":2,\"packageId\":\"dt.test-data-settings\",\"version\":\"2.0.0\",\"sdkVersion\":2,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"테스트 설정 스크립트 v2\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\"],\"settings\":[{\"key\":\"sourceData\",\"fieldId\":\"script.source\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"입력 데이터\",\"defaultValue\":\"\"},{\"key\":\"targetData\",\"fieldId\":\"script.destination\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"출력 데이터\",\"defaultValue\":\"\"},{\"key\":\"multiplier\",\"fieldId\":\"script.gain\",\"kind\":\"number\",\"label\":\"입력 배율\",\"defaultValue\":1,\"min\":0,\"max\":120},{\"key\":\"running\",\"fieldId\":\"script.running\",\"kind\":\"boolean\",\"label\":\"계산 사용\",\"defaultValue\":true},{\"key\":\"note\",\"fieldId\":\"script.note\",\"kind\":\"string\",\"label\":\"설정 메모\",\"defaultValue\":\"\",\"maxLength\":64},{\"key\":\"mirrorData\",\"fieldId\":\"script.mirror\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":false,\"label\":\"복사 데이터 (선택)\",\"defaultValue\":null},{\"key\":\"bias\",\"fieldId\":\"script.bias\",\"kind\":\"number\",\"label\":\"추가 증분\",\"defaultValue\":0,\"min\":-120,\"max\":120}]},\"reference\":{\"packageId\":\"dt.test-data-settings\",\"version\":\"2.0.0\",\"codeHash\":\"d80e628947af12069f65a193212a42aa02e49df8b936acc1e09a5a1b36c9235f\"}},{\"manifest\":{\"formatVersion\":1,\"packageId\":\"dt.test-data-subtract\",\"version\":\"1.0.0\",\"sdkVersion\":1,\"typeId\":\"TestScript\",\"typeVersion\":2,\"displayName\":\"테스트 감소 스크립트\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\"],\"settings\":[{\"key\":\"targetComponentId\",\"fieldId\":\"script.target\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"대상 테스트 데이터\",\"defaultValue\":\"\"},{\"key\":\"ratePerSecond\",\"fieldId\":\"script.rate\",\"kind\":\"number\",\"label\":\"초당 감소량\",\"defaultValue\":2}]},\"reference\":{\"packageId\":\"dt.test-data-subtract\",\"version\":\"1.0.0\",\"codeHash\":\"c2c5c8a5908fbcbcb08cb54762d1d4c5d5965be8be1dda8e779da3912423ea29\"}},{\"manifest\":{\"formatVersion\":2,\"packageId\":\"dt.threshold-alarm\",\"version\":\"1.0.0\",\"sdkVersion\":2,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"임계값 Alarm\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\"],\"settings\":[{\"key\":\"sourceData\",\"fieldId\":\"script.sourceData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"측정값 입력\",\"defaultValue\":\"\"},{\"key\":\"alarmData\",\"fieldId\":\"script.alarmData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"경보값 출력 (0/1)\",\"defaultValue\":\"\"},{\"key\":\"threshold\",\"fieldId\":\"script.threshold\",\"kind\":\"number\",\"label\":\"발생 임계값\",\"defaultValue\":1},{\"key\":\"hysteresis\",\"fieldId\":\"script.hysteresis\",\"kind\":\"number\",\"label\":\"해제 여유값\",\"defaultValue\":0.2,\"min\":0}]},\"reference\":{\"packageId\":\"dt.threshold-alarm\",\"version\":\"1.0.0\",\"codeHash\":\"cdbea140c73c56e518a2fb35e45fa9cfb4792bbf730aee8c87bb82d1fe81691d\"}},{\"manifest\":{\"formatVersion\":4,\"packageId\":\"dt.threshold-alarm\",\"version\":\"2.0.0\",\"sdkVersion\":4,\"typeId\":\"TestScript\",\"typeVersion\":3,\"displayName\":\"임계값 Alarm · 유효성\",\"entry\":\"src/index.ts\",\"capabilities\":[\"owner.testData\",\"owner.staticMesh\",\"owner.signals\"],\"settings\":[{\"key\":\"sourceData\",\"fieldId\":\"script.sourceData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"측정값 입력\",\"defaultValue\":\"\"},{\"key\":\"alarmData\",\"fieldId\":\"script.alarmData\",\"kind\":\"component-reference\",\"componentType\":\"TestData\",\"required\":true,\"label\":\"경보값 출력 (0/1)\",\"defaultValue\":\"\"},{\"key\":\"threshold\",\"fieldId\":\"script.threshold\",\"kind\":\"number\",\"label\":\"발생 임계값\",\"defaultValue\":1},{\"key\":\"hysteresis\",\"fieldId\":\"script.hysteresis\",\"kind\":\"number\",\"label\":\"해제 여유값\",\"defaultValue\":0.2,\"min\":0},{\"key\":\"maxAgeSeconds\",\"fieldId\":\"script.maxAgeSeconds\",\"kind\":\"number\",\"label\":\"최대 데이터 나이 (초)\",\"defaultValue\":0.5,\"min\":0.05,\"max\":60}]},\"reference\":{\"packageId\":\"dt.threshold-alarm\",\"version\":\"2.0.0\",\"codeHash\":\"083d838ccf78d6ceb520a49516ac2a8ba6356a263f86a741363ff5c6ec088151\"}}]"), He = 5, Ue = [
	"editor",
	"play",
	"composition",
	"delivery"
], We = /* @__PURE__ */ new Map();
function Ge(e) {
	if (!/^[a-z][a-zA-Z0-9.-]{2,95}$/.test(e.id) || We.has(e.id) || !e.environments.length || e.environments.some((e) => !Ue.includes(e)) || ![
		"read",
		"runtime",
		"persistent"
	].includes(e.scope)) throw Error("Invalid/duplicate addon capability");
	We.set(e.id, Object.freeze({
		...e,
		environments: Object.freeze([...e.environments])
	}));
}
var Ke = () => [...We.values()];
function qe(e, t) {
	let n = We.get(e);
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
]) Ge({
	...e,
	environments: e.id === "document.edit" ? ["editor", "composition"] : Ue
});
function Je(e, t) {
	if (!Array.isArray(e) || !e.length || e.length > 32 || new Set(e).size !== e.length || !Array.isArray(t) || !t.length || new Set(t).size !== t.length || t.some((e) => !Ue.includes(e))) throw Error("Invalid addon capabilities/environments");
	for (let n of e) {
		if (typeof n != "string") throw Error("Invalid addon capability identifier");
		for (let e of t) qe(n, e);
	}
}
//#endregion
//#region src/component-packages/ComponentPackageManifest.ts
function Ye(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Invalid Component package object.");
	return e;
}
function O(e, t) {
	if (Object.keys(e).length !== t.length || Object.keys(e).some((e) => !t.includes(e))) throw Error("Unknown/missing Component package field.");
}
function Xe(e) {
	return typeof e == "string" && e.trim().length > 0 && e.length <= 120;
}
function Ze(e) {
	let t = Ye(e), n = t.formatVersion === 5 && t.sdkVersion === 5 && t.typeVersion === 3;
	if (![
		1,
		2,
		3,
		4,
		5
	].includes(Number(t.sdkVersion))) throw Error("Unsupported Component SDK version.");
	O(t, [
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
	if (t.entry !== "src/index.ts" || !Xe(t.displayName)) throw Error("Unsupported Component entry.");
	if (n) Je(t.capabilities, t.environments);
	else if (JSON.stringify(t.capabilities) !== (i ? "[\"owner.testData\",\"owner.staticMesh\",\"owner.signals\"]" : a ? "[\"owner.testData\",\"owner.staticMesh\"]" : "[\"owner.testData\"]")) throw Error("Unsupported Component entry/capabilities.");
	if (!r) {
		if (!Array.isArray(t.settings) || !n && !t.settings.length || t.settings.length > 32) throw Error("Unsupported Component settings schema.");
		let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
		for (let e of t.settings) {
			let t = Ye(e), o = [
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
			].includes(t.key) || typeof t.fieldId != "string" || !/^script\.[a-z][a-zA-Z0-9-]{0,63}$/.test(t.fieldId) || ["script.package", "script.settings"].includes(t.fieldId) || !Xe(t.label) || r.has(t.key) || i.has(t.fieldId)) throw Error("Invalid/duplicate Script setting identity.");
			if (r.add(t.key), i.add(t.fieldId), t.kind === "number") {
				if (O(t, [...o, ...["min", "max"].filter((e) => e in t)]), ["min", "max"].some((e) => e in t && (typeof t[e] != "number" || !Number.isFinite(t[e]))) || typeof t.min == "number" && typeof t.max == "number" && t.min > t.max) throw Error("Invalid Script number bounds.");
			} else if (t.kind === "boolean") O(t, o);
			else if (t.kind === "string") {
				if (O(t, [...o, "maxLength"]), !Number.isInteger(t.maxLength) || Number(t.maxLength) < 1 || Number(t.maxLength) > 4096) throw Error("Invalid Script string limit.");
			} else if (t.kind === "component-reference") {
				if (O(t, [
					...o,
					"componentType",
					"required"
				]), !(t.componentType === "TestData" || (a || n) && t.componentType === "StaticMesh") || typeof t.required != "boolean" || t.defaultValue !== (t.required ? "" : null)) throw Error("Invalid Script Component reference contract.");
			} else throw Error("Unsupported Script setting kind.");
			t.kind !== "component-reference" && Qe(t, t.defaultValue);
		}
		if (n) {
			if (!Array.isArray(t.properties) || t.properties.length > 32) throw Error("Invalid exposed addon properties");
			let e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
			for (let i of t.properties) {
				let a = Ye(i);
				if (O(a, [
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
	let o = Ye(t.settings[0]), s = Ye(t.settings[1]);
	if (O(o, [
		"key",
		"fieldId",
		"kind",
		"componentType",
		"required",
		"label",
		"defaultValue"
	]), O(s, [
		"key",
		"fieldId",
		"kind",
		"label",
		"defaultValue"
	]), o.key !== "targetComponentId" || o.fieldId !== "script.target" || o.kind !== "component-reference" || o.componentType !== "TestData" || o.required !== !0 || o.defaultValue !== "" || !Xe(o.label) || s.key !== "ratePerSecond" || s.fieldId !== "script.rate" || s.kind !== "number" || !Xe(s.label) || typeof s.defaultValue != "number" || !Number.isFinite(s.defaultValue)) throw Error("Unsupported Component settings schema.");
	return structuredClone(e);
}
function Qe(e, t) {
	if (!(e.kind === "number" ? typeof t == "number" && Number.isFinite(t) && (e.min === void 0 || t >= e.min) && (e.max === void 0 || t <= e.max) : e.kind === "boolean" ? typeof t == "boolean" : e.kind === "string" ? typeof t == "string" && t.length <= e.maxLength : t === null ? !e.required : typeof t == "string" && t.length > 0)) throw Error(`Invalid Script setting ${e.fieldId}.`);
}
function $e(e, t) {
	let n = Ye(t);
	O(n, e.settings.map((e) => e.key));
	for (let t of e.settings) Qe(t, n[t.key]);
	if (e.sdkVersion === 5) {
		for (let t of e.properties) if (t.format === "color" && (typeof n[t.setting] != "string" || !/^#[a-fA-F0-9]{6}$/.test(n[t.setting]))) throw Error(`Invalid color property ${t.name}`);
	}
}
function et(e, t) {
	let n = Ye(e);
	if (O(n, [
		"packageId",
		"version",
		"codeHash"
	]), n.packageId !== t.packageId || n.version !== t.version || n.codeHash !== t.codeHash) throw Error("Script package is missing or changed. Restore the matching app/package build; settings were not migrated.");
}
var tt = {
	packageId: "dt.test-data-script",
	version: "1.0.0",
	codeHash: "cc22c8fb6e95f1090a51c0a00086d2db881af1f038898053e5f993b53eeea2ea"
};
//#endregion
//#region src/assets/AssetRegistry.ts
function nt(e) {
	let t = structuredClone([...e]);
	if (!t.length || t.length > 1e4 || new Set(t.map((e) => e.assetId)).size !== t.length || new Set(t.map((e) => e.revision.id)).size !== t.length || t.some((e) => !e.expectedRevisionId || e.revision.assetId !== e.assetId || !e.revision.blobKeys.includes(e.blob.key))) throw Error("Invalid or duplicate batch revision identities.");
	return t;
}
function rt(e, t, n) {
	return e.snapshotAsset ? e.snapshotAsset(t, n) : e.snapshot();
}
var it = class extends Error {}, at = class extends Error {
	assetId;
	references;
	constructor(e, t) {
		super(`Asset ${e} is referenced by ${t.length} owner(s).`), this.assetId = e, this.references = t;
	}
}, ot = class extends Error {};
async function st(e) {
	let t = e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e.slice(), n = await crypto.subtle.digest("SHA-256", t);
	return Array.from(new Uint8Array(n), (e) => e.toString(16).padStart(2, "0")).join("");
}
function ct(e) {
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
var lt = [], ut = /* @__PURE__ */ new Set(), dt = () => lt;
async function ft(e) {
	if (!Array.isArray(e) || e.length > 64) throw Error("애드온 보관 한도는 64개 버전입니다.");
	let t = /* @__PURE__ */ new Set(), n = 0, r = [];
	for (let i of e) {
		if (!i || Object.keys(i).sort().join(",") !== "active,code,manifest,reference" || typeof i.active != "boolean" || typeof i.code != "string" || !i.code.trim()) throw Error("Invalid addon record.");
		let e = Ze(i.manifest);
		if (Ve.some((t) => t.reference.packageId === e.packageId)) throw Error("앱 내장 패키지 ID는 사용할 수 없습니다.");
		let a = new TextEncoder().encode(i.code);
		if (n += a.length, a.length > 1048576 || n > 33554432 || JSON.stringify(e).length > 65536) throw Error("Addon size limit exceeded.");
		let o = {
			packageId: e.packageId,
			version: e.version,
			codeHash: await st(new TextEncoder().encode(JSON.stringify(e) + "\n" + i.code))
		};
		et(i.reference, o);
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
async function pt(e) {
	lt = await ft(e);
	for (let e of ut) e();
}
async function mt(e) {
	let t = await ft(e);
	for (let e of t) {
		let t = lt.find((t) => t.reference.packageId === e.reference.packageId && t.reference.version === e.reference.version);
		if (t && t.reference.codeHash !== e.reference.codeHash) throw Error("Addon version/hash conflict.");
	}
	await pt([...lt, ...t.filter((e) => !lt.some((t) => t.reference.codeHash === e.reference.codeHash))]);
}
//#endregion
//#region src/component-packages/InstalledScriptPackage.ts
var ht = Object.freeze(Ve.map((e) => {
	let t = Object.freeze(Ze(e.manifest)), n = Object.freeze({ ...e.reference });
	if (n.packageId !== t.packageId || n.version !== t.version || !/^[a-f0-9]{64}$/.test(n.codeHash)) throw Error("Invalid installed Script identity.");
	return Object.freeze({
		manifest: t,
		reference: n
	});
}));
if (new Set(ht.map((e) => `${e.reference.packageId}@${e.reference.version}`)).size !== ht.length) throw Error("Duplicate installed Script package.");
function gt(e = tt.packageId, t) {
	let n = [...ht, ...dt()].find((n) => n.reference.packageId === e && (t === void 0 || n.reference.version === t));
	if (!n) throw Error("Script package is missing. Restore the matching app/package build.");
	return n;
}
function _t(e) {
	let t = e.typeVersion === 1 && e.scriptPackage === void 0 ? tt : e.scriptPackage;
	if (![
		1,
		2,
		3
	].includes(e.typeVersion) || e.typeVersion === 1 && e.scriptPackage !== void 0) throw Error("Unsupported TestScript version.");
	if (!t || typeof t != "object" || !("packageId" in t) || typeof t.packageId != "string") throw Error("Invalid Script package reference.");
	if (!("version" in t) || typeof t.version != "string") throw Error("Invalid Script package version.");
	let n = gt(t.packageId, t.version);
	if (et(t, n.reference), n.manifest.typeVersion !== (e.typeVersion === 1 ? 2 : e.typeVersion)) throw Error("Script package schema/version mismatch.");
	return n;
}
function vt(e) {
	_t(e);
}
//#endregion
//#region src/component-packages/ScriptSettings.ts
function yt(e) {
	return Object.fromEntries(e.settings.map((e) => [e.key, e.defaultValue]));
}
function bt(e) {
	return e.typeVersion === 3 ? e.settings : {
		targetComponentId: e.targetComponentId,
		ratePerSecond: e.ratePerSecond
	};
}
function xt(e) {
	let { manifest: t } = _t(e);
	if (e.typeVersion === 3 && Object.keys(e).some((e) => ![
		"id",
		"ownerActorId",
		"type",
		"typeVersion",
		"scriptPackage",
		"settings",
		"recovery"
	].includes(e))) throw Error("Unknown Script Component field.");
	$e(t, bt(e));
	let n = St(e);
	if (n) {
		let e = _t(n);
		if (e.reference.packageId !== t.packageId || e.reference.version === t.version) throw Error("Invalid Script recovery version.");
		$e(e.manifest, n.settings);
	}
}
function St(e) {
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
function Ct(e) {
	xt(e);
	let t = bt(e);
	return _t(e).manifest.settings.flatMap((e) => e.kind === "component-reference" && typeof t[e.key] == "string" ? [{
		field: e,
		id: t[e.key]
	}] : []);
}
function wt(e) {
	let t = _t(e).manifest;
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
				if (Qe(n, e), t.sdkVersion === 5 && t.properties.some((e) => e.setting === n.key && e.format === "color") && (typeof e != "string" || !/^#[a-fA-F0-9]{6}$/.test(e))) throw Error("색상은 #RRGGBB로 입력하세요.");
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
function Tt(e, t) {
	let n = e;
	for (let e of t) {
		if (typeof n != "object" || !n || !(e in n)) return;
		n = n[e];
	}
	return n;
}
var Et = class {
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
			let t = e.validate(Tt(n, e.path));
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
}, Dt = [
	"details",
	"load",
	"runtime"
];
function Ot(e, t) {
	return Array.isArray(e) && e.length === t && e.every((e) => typeof e == "number" && Number.isFinite(e));
}
function kt(e) {
	return e ? {
		ok: !1,
		reason: e
	} : { ok: !0 };
}
var At = {
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
			editableContexts: Dt,
			validate: (e) => kt(Ot(e, 3) ? null : "position_requires_finite_vec3")
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
			editableContexts: Dt,
			validate: (e) => {
				if (!Ot(e, 4)) return kt("rotation_requires_finite_xyzw");
				let t = Math.hypot(...e);
				return kt(Math.abs(t - 1) <= 1e-6 ? null : "rotation_requires_unit_quaternion");
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
			editableContexts: Dt,
			validate: (e) => kt(Ot(e, 3) && e.every((e) => e > 0) ? null : "scale_requires_positive_finite_vec3")
		},
		{
			fieldId: "appearance.color",
			path: ["color"],
			valueType: "integer",
			defaultValue: 16777215,
			units: "packed-srgb",
			referenceKind: null,
			editableContexts: Dt,
			validate: (e) => kt(typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 16777215 ? null : "color_requires_24_bit_integer")
		}
	]
}, k = new Et();
k.register(At);
//#endregion
//#region src/domain/ComponentRegistry.ts
var jt = {
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
k.has(jt.typeId, jt.typeVersion) || k.register(jt);
var Mt = {
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
		validate: jt.fields[0].validate
	}]
};
k.has(Mt.typeId, 1) || k.register(Mt), k.has(Mt.typeId, 2) || k.register({
	...Mt,
	typeVersion: 2,
	fields: [...Mt.fields, {
		fieldId: "script.package",
		path: ["scriptPackage"],
		valueType: "json",
		defaultValue: null,
		units: "unitless",
		referenceKind: null,
		editableContexts: ["load", "runtime"],
		validate: (e) => {
			try {
				return vt({
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
}), k.has("TestScript", 3) || k.register({
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
function Nt(e) {
	return e.type === "TestScript" ? {
		typeId: e.type,
		typeVersion: e.typeVersion,
		fields: [...wt(e), {
			fieldId: "script.package",
			path: ["scriptPackage"],
			valueType: "json",
			defaultValue: null,
			units: "unitless",
			referenceKind: null,
			editableContexts: ["load", "runtime"],
			validate: () => ({ ok: !0 })
		}]
	} : k.get(e.type, e.typeVersion);
}
function Pt(e, t) {
	if (e.type !== "TestScript") return e;
	let n = { ...bt(e) };
	for (let { field: r, id: i } of Ct(e)) n[r.key] = t.get(i) ?? i;
	let r = St(e), i = r ? Pt(r, t) : void 0;
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
function Ft(e) {
	for (let t of e.components) {
		if (t.type !== "TestScript") continue;
		let n = St(t);
		for (let { id: r, field: i } of [...Ct(t), ...n ? Ct(n) : []]) if (!e.components.some((e) => e.id === r && i.kind === "component-reference" && e.type === i.componentType)) throw Error(`TestScript ${t.id} requires ${i.kind === "component-reference" ? i.componentType : "Component"} ${r} in the same Actor.`);
	}
}
function It(e, t, n, r = {}) {
	if (e !== "TestData" && e !== "TestScript") throw Error(`Unsupported authoring Component ${e}.`);
	if (!n || !t) throw Error("Component identity and owner are required.");
	let i = e === "TestScript" ? gt(r.scriptPackage?.packageId, r.scriptPackage?.version) : void 0;
	i && r.scriptPackage && _t({
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
			...yt(i.manifest),
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
	}, o = k.validate(e, a.typeVersion, a, "load");
	if (o.length) throw Error(`Invalid ${e}: ${o.map((e) => e.reason).join(", ")}.`);
	return a.type === "TestScript" && xt(a), a;
}
var Lt = { create: It }, Rt = Math.PI / 180;
180 / Math.PI;
var zt = [
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
function Bt(e, t) {
	if (!e.every(Number.isFinite)) throw Error(`${t} must contain only finite numbers.`);
}
function Vt(e, t) {
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
function Ht(e) {
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
function Ut(e, t) {
	return [
		e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
		e[3] * t[0] + e[4] * t[1] + e[5] * t[2],
		e[6] * t[0] + e[7] * t[1] + e[8] * t[2]
	];
}
function Wt(e) {
	return Bt(e, "UE position"), [
		e[1] / 100,
		e[2] / 100,
		-e[0] / 100
	];
}
function Gt(e) {
	return Bt(e, "Internal position"), [
		-e[2] * 100,
		e[0] * 100,
		e[1] * 100
	];
}
function Kt(e) {
	return Bt(e, "UE direction"), Ut(zt, e);
}
function qt(e) {
	return Bt(e, "UE scale"), [
		e[1],
		e[2],
		e[0]
	];
}
function Jt(e) {
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
function Yt(e) {
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
function Xt(e) {
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
function Zt(e) {
	Bt(e, "UE rotator");
	let [t, n, r] = e.map((e) => e * Rt), i = Vt(Vt(Xt(r), Yt(-n)), Jt(-t)), a = Ht(zt);
	return Vt(Vt(zt, i), a);
}
function Qt(e) {
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
function $t(e) {
	return Qt(Zt(e));
}
function en(e) {
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
var tn = [
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
function nn(e) {
	if (![
		...e.positionMeters,
		...e.rotationXyzw,
		...e.scale
	].every(Number.isFinite)) throw Error("Transform matrix input must be finite.");
	if (!e.scale.every((e) => e > 0)) throw Error("Transform matrix scale must be positive.");
	let t = en(e.rotationXyzw), [n, r, i] = e.scale, [a, o, s] = e.positionMeters;
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
function rn(e, t) {
	let n = Array(16).fill(0);
	for (let r = 0; r < 4; r += 1) for (let i = 0; i < 4; i += 1) for (let a = 0; a < 4; a += 1) n[r * 4 + i] += e[r * 4 + a] * t[a * 4 + i];
	return n;
}
function an(e, t = 1e-6) {
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
		rotationXyzw: Qt(o),
		scale: a
	}, c = nn(s), l = Math.max(...e.map(Math.abs), 1), u = Math.max(...e.map((e, t) => Math.abs(e - c[t]))) / l;
	if (!Number.isFinite(u) || u > t) throw Error(`Reparent failed: result contains unsupported shear (residual ${u.toExponential(3)}).`);
	return s;
}
//#endregion
//#region src/domain/sceneHierarchy.ts
function on(e, t) {
	let n = ze(pn(e, t));
	if (!n) throw Error(`Actor ${t} has no root component.`);
	return n.attachmentParent;
}
function sn(e) {
	let t = new Set(e.actors.map((e) => e.id));
	if (t.size !== e.actors.length) throw Error("Duplicate Actor ID.");
	for (let n of e.actors) {
		ze(n);
		for (let e of n.components) {
			if (t.has(e.id)) throw Error(`Duplicate Component ID ${e.id}.`);
			if (t.add(e.id), e.ownerActorId !== n.id) throw Error(`Component ${e.id} owner mismatch.`);
			if (D(e) && e.parentComponentId !== null) {
				if (e.id === n.rootComponentId) throw Error("Root Component cannot have an internal parent.");
				let t = n.components.find((t) => t.id === e.parentComponentId);
				if (!t || !D(t)) throw Error("Component parent must be a SceneComponent of the same Actor.");
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
		if (pn(e, t.actorId), a.has(t.actorId)) throw Error(`Duplicate folder membership for Actor ${t.actorId}.`);
		if (a.add(t.actorId), t.folderId !== null && !n.has(t.folderId)) throw Error(`Unknown Outliner folder ${t.folderId}.`);
	}
	for (let t of e.actors) un(e, t), Ft(t);
	for (let t of e.actors) for (let n of t.components.filter(D)) dn(e, {
		actorId: t.id,
		componentId: n.id
	});
}
function cn(e, t) {
	return dn(e, {
		actorId: t,
		componentId: pn(e, t).rootComponentId
	}, /* @__PURE__ */ new Set());
}
function ln(e, t) {
	return an(cn(e, t));
}
function un(e, t) {
	for (let e of t.components.filter(D)) if (e.id !== t.rootComponentId && e.attachmentParent !== null) throw Error(`Only root Component ${t.rootComponentId} may have an external attachment.`);
	let n = on(e, t.id);
	if (!n) return;
	let r = pn(e, n.actorId).components.find((e) => e.id === n.componentId);
	if (!r || !D(r)) throw Error(`Unknown spatial attachment Component ${n.componentId}.`);
	if (n.kind === "bone" || n.kind === "socket") {
		if (r.type !== "SkeletalMesh") throw Error(`Skeletal attachment target ${n.componentId} is not a SkeletalMesh.`);
		if (r.skinBinding.skeletonAsset.assetId !== n.skeletonAssetId || r.sourceBinding.sourceSkeletonAssetId !== n.sourceSkeletonAssetId || r.skinBinding.bindingSignature !== n.bindingSignature) throw Error(`Skeletal attachment identity does not match Component ${n.componentId}.`);
	}
}
function dn(e, t, n = /* @__PURE__ */ new Set()) {
	let r = `${t.actorId}:${t.componentId}`;
	if (n.has(r)) throw Error("Reparent failed: attachment cycle detected.");
	let i = new Set(n);
	i.add(r);
	let { actor: a, component: o } = fn(e, t), s = tn;
	return o.id === a.rootComponentId ? o.attachmentParent && (s = dn(e, o.attachmentParent, i)) : o.parentComponentId && (s = dn(e, {
		actorId: a.id,
		componentId: o.parentComponentId
	}, i)), rn(s, nn(o.localTransform));
}
function fn(e, t) {
	let n = pn(e, t.actorId), r = n.components.find((e) => e.id === t.componentId);
	if (!r || !D(r)) throw Error(`Unknown spatial attachment Component ${t.componentId}.`);
	return {
		actor: n,
		component: r
	};
}
function pn(e, t) {
	let n = e.actors.find((e) => e.id === t);
	if (!n) throw Error(`Unknown Actor ${t}.`);
	return n;
}
//#endregion
//#region src/domain/TwinExport.ts
function mn(e) {
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
function hn(e, t) {
	if (e === t) return !0;
	if (!e || !t || typeof e != "object" || typeof t != "object" || Array.isArray(e) !== Array.isArray(t)) return !1;
	let n = Object.entries(e), r = Object.entries(t);
	return n.length === r.length && n.every(([e, n]) => Object.hasOwn(t, e) && hn(n, t[e]));
}
function gn(e) {
	let t = vn();
	for (let n of e) {
		for (let [e, r] of [
			["objects", "objectId"],
			["semanticGroups", "groupId"],
			["capabilities", "capabilityId"],
			["presentationTemplates", "key"],
			["presentationSlots", "name"]
		]) {
			let i = new Map(t[e].map((e) => [e[r], e]));
			for (let t of n.document[e]) i.has(t[r]) && !hn(i.get(t[r]), t) && A(n.name + ": " + e + " ID 충돌: " + String(t[r]) + ". 기존 파일을 재등록하거나 ID를 구분하세요."), i.set(t[r], t);
			Object.assign(t, { [e]: [...i.values()] });
		}
		for (let [e, r] of Object.entries(n.document)) Object.hasOwn(vn(), e) || (Object.hasOwn(t, e) && !hn(t[e], r) && A(n.name + ": 확장 필드 충돌: " + e), Object.assign(t, { [e]: r }));
	}
	return Object.assign(t, { twinDescription: [...new Set(e.map((e) => e.document.twinDescription).filter(Boolean))].join("\n\n") }), wn(t), t;
}
function _n(e) {
	Sn(e), yn(e), e.length > 100 && A("등록 JSON은 최대 100개입니다.");
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (j(n), M(n.id, !0), M(n.name, !0), (n.name.length > 160 || [...n.name].some((e) => e.charCodeAt(0) < 32 || e.charCodeAt(0) === 127) || t.has(n.id)) && A("등록 JSON 이름 또는 ID가 올바르지 않습니다."), t.add(n.id), wn(n.document), n.idRemaps !== void 0) {
		yn(n.idRemaps);
		for (let e of n.idRemaps) j(e), M(e.from, !0), M(e.to, !0), [
			"objects",
			"semanticGroups",
			"capabilities",
			"presentationTemplates",
			"presentationSlots"
		].includes(String(e.kind)) || A("원본 ID 매핑 종류가 올바르지 않습니다.");
	}
}
var vn = () => ({
	schemaVersion: "1.0",
	twinDescription: "",
	objects: [],
	semanticGroups: [],
	capabilities: [],
	presentationTemplates: [],
	presentationSlots: []
});
function A(e) {
	throw Error(`설비 정보: ${e}`);
}
function j(e) {
	(!e || typeof e != "object" || Array.isArray(e)) && A("객체 형식이 필요합니다.");
}
function M(e, t = !1) {
	(typeof e != "string" || e.length > 1e5 || t && !e.trim()) && A("문자열 또는 ID가 올바르지 않습니다.");
}
function yn(e) {
	(!Array.isArray(e) || e.length > 1e4) && A("목록은 최대 10,000개입니다.");
}
function bn(e) {
	yn(e), e.forEach((e) => M(e, !0)), new Set(e).size !== e.length && A("목록 ID가 중복됩니다.");
}
function xn(e) {
	j(e), Object.keys(e).length || A("표시 이름이 필요합니다."), Object.values(e).forEach((e) => M(e));
}
function Sn(e) {
	let t = 0, n = (e, r) => {
		if ((++t > 2e5 || r > 24) && A("JSON 구조 한도를 초과했습니다."), !(e === null || typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e))) {
			if (Array.isArray(e)) {
				e.forEach((e) => n(e, r + 1));
				return;
			}
			j(e), Object.getPrototypeOf(e) !== Object.prototype && Object.getPrototypeOf(e) !== null && A("일반 JSON 객체만 사용할 수 있습니다.");
			for (let [t, i] of Object.entries(e)) [
				"__proto__",
				"prototype",
				"constructor"
			].includes(t) && A("허용하지 않는 JSON 키입니다."), n(i, r + 1);
		}
	};
	n(e, 0), new TextEncoder().encode(JSON.stringify(e)).length > 8388608 && A("JSON은 최대 8 MiB입니다.");
}
function Cn(e) {
	j(e), M(e.objectId, !0), xn(e.displayName), M(e.description), j(e.aliases), Object.hasOwn(e, "equipmentType") && (typeof e.equipmentType != "string" || e.equipmentType.length > 1e5) && A("equipmentType은 문자열이어야 합니다."), bn(e.capabilityIds), e.purpose !== void 0 && M(e.purpose), Object.hasOwn(e, "relations") && ((!Array.isArray(e.relations) || e.relations.length > 1e4) && A("relations는 최대 10,000개의 관계를 담은 배열이어야 합니다."), e.relations.forEach((e) => {
		j(e), M(e.targetObjectId, !0), M(e.kind, !0), M(e.description);
	}));
}
function wn(e) {
	Sn(e), j(e), e.schemaVersion !== "1.0" && A("지원하는 스키마는 1.0입니다."), M(e.twinDescription), yn(e.objects), e.objects.forEach(Cn), yn(e.semanticGroups), e.semanticGroups.forEach((e) => {
		j(e), M(e.groupId, !0), xn(e.displayName), M(e.description), j(e.aliases), bn(e.memberObjectIds), bn(e.capabilityIds);
	}), yn(e.capabilities), e.capabilities.forEach((e) => {
		j(e), M(e.capabilityId, !0), M(e.description), bn(e.supportedTargetTypes), e.supportedTargetTypes.some((e) => !["object", "semanticGroup"].includes(e)) && A("지원 대상 종류가 올바르지 않습니다."), yn(e.arguments), e.arguments.forEach((e) => {
			j(e), M(e.name, !0), (![
				"number",
				"string",
				"boolean"
			].includes(String(e.type)) || typeof e.required != "boolean") && A("동작 인수 형식이 올바르지 않습니다."), e.enumSource !== void 0 && !["presentationTemplates", "presentationSlots"].includes(String(e.enumSource)) && A("인수 목록 참조가 올바르지 않습니다.");
		}), Tn(e.arguments, "name");
	});
	for (let [t, n] of [["presentationTemplates", "key"], ["presentationSlots", "name"]]) yn(e[t]), e[t].forEach((e) => {
		j(e), M(e[n], !0), M(e.description);
	}), Tn(e[t], n);
	Tn(e.objects, "objectId"), Tn(e.semanticGroups, "groupId"), Tn(e.capabilities, "capabilityId"), En(e);
}
function Tn(e, t) {
	let n = e.map((e) => e[t]);
	new Set(n).size !== n.length && A(`${t}가 중복됩니다.`);
}
function En(e) {
	let t = new Set(e.objects.map((e) => e.objectId)), n = new Set(e.capabilities.map((e) => e.capabilityId));
	for (let r of e.objects) {
		for (let e of r.relations ?? []) t.has(e.targetObjectId) || A(`연결 설비가 없습니다: ${e.targetObjectId}`);
		for (let e of r.capabilityIds) n.has(e) || A(`동작 정의가 없습니다: ${e}`);
	}
	for (let r of e.semanticGroups) {
		for (let e of r.memberObjectIds) t.has(e) || A(`그룹 설비가 없습니다: ${e}`);
		for (let e of r.capabilityIds) n.has(e) || A(`그룹 동작 정의가 없습니다: ${e}`);
	}
}
function Dn(e) {
	Sn(e), j(e), Cn(e.object), bn(e.groupIds);
	for (let t of ["targetComponentId", "instanceSourceId"]) e[t] !== null && M(e[t], !0);
	e.instanceSourceId !== null && e.targetComponentId === null && A("인스턴스는 대상 컴포넌트가 필요합니다.");
}
function On(e) {
	return e.actors.flatMap((e) => e.components.filter((e) => e.type === "TwinMetadata"));
}
function kn(e) {
	let t = On(e), n = /* @__PURE__ */ new Set();
	e.authoring.twinCatalogFiles !== void 0 && (_n(e.authoring.twinCatalogFiles), hn(gn(e.authoring.twinCatalogFiles), e.authoring.digitalTwin) || A("등록 파일과 통합 목록이 일치하지 않습니다.")), e.authoring.digitalTwin !== void 0 && wn(e.authoring.digitalTwin);
	for (let r of t) {
		Dn(r.metadata);
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
			(!Array.isArray(n) || n.length !== t.length || n.some((e, n) => e !== t[n])) && A("설비 정보 컴포넌트에는 공간 변환을 적용할 수 없습니다.");
		}
		let t = e.actors.find((e) => e.id === r.ownerActorId);
		if ((!t || t.rootComponentId === r.id || r.parentComponentId !== t.rootComponentId || r.attachmentParent !== null) && A("설비 정보는 액터 루트에 소유된 데이터 컴포넌트입니다."), (t.components.some((e) => D(e) && (e.parentComponentId === r.id || e.attachmentParent?.componentId === r.id)) || e.actors.some((e) => e.components.some((e) => D(e) && e.attachmentParent?.componentId === r.id))) && A("설비 정보에 공간 컴포넌트를 부착할 수 없습니다."), n.has(r.metadata.object.objectId) && A(`액터에 연결된 설비 ID가 중복됩니다: ${r.metadata.object.objectId}`), n.add(r.metadata.object.objectId), r.metadata.targetComponentId !== null) {
			let n = t.components.find((e) => e.id === r.metadata.targetComponentId);
			(!n || !D(n) || n.type === "TwinMetadata") && A("같은 액터의 대상 컴포넌트가 필요합니다.");
			let i = e.authoring.ueImport?.components.find((e) => e.webId === n.id);
			r.metadata.instanceSourceId !== null && (n.type !== "StaticMesh" || i?.sourceKind !== "InstancedStaticMesh" || !i.instances.some((e) => e.sourceId === r.metadata.instanceSourceId)) && A("대상 인스턴스의 원본 ID가 없습니다.");
		}
	}
	wn(An(e));
}
function An(e) {
	let t = e.authoring.digitalTwin ?? vn(), n = On(e), r = new Map(t.objects.map((e) => [e.objectId, e]));
	n.forEach((e) => r.set(e.metadata.object.objectId, e.metadata.object));
	let i = new Set(n.map((e) => e.metadata.object.objectId));
	for (let e of n) for (let n of e.metadata.groupIds) t.semanticGroups.some((e) => e.groupId === n) || A(`그룹 정의가 없습니다: ${n}`);
	return {
		...t,
		objects: [...r.values()],
		semanticGroups: t.semanticGroups.map((e) => ({
			...e,
			memberObjectIds: [...e.memberObjectIds.filter((t) => !i.has(t) || n.some((n) => n.metadata.object.objectId === t && n.metadata.groupIds.includes(e.groupId))), ...n.filter((t) => t.metadata.groupIds.includes(e.groupId) && !e.memberObjectIds.includes(t.metadata.object.objectId)).map((e) => e.metadata.object.objectId)]
		}))
	};
}
function jn(e, t) {
	kn(e);
	let { twin: n, extensions: r } = mn(An(e)), i = On(e), a = e.authoring.ueImport;
	return wn(n), {
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
var Mn = [
	"details",
	"load",
	"runtime"
], N = (e) => e ? {
	ok: !1,
	reason: e
} : { ok: !0 }, Nn = (e) => typeof e == "number" && Number.isFinite(e), Pn = (e) => N(Nn(e) && e > 0 ? null : "requires_positive_number"), Fn = (e) => N(Nn(e) && e >= 0 ? null : "requires_nonnegative_number"), In = (e) => N(typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 16777215 ? null : "requires_color"), Ln = (e) => typeof e == "object" && !!e && e.kind === "asset" && typeof e.assetId == "string" && e.assetId.length > 0 && ["live", "pinned"].includes(String(e.revisionPolicy)), Rn = (e) => N(Array.isArray(e) && e.every((e) => {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	return typeof t.slotId == "string" && t.slotId.length > 0 && t.materialAsset?.kind === "asset" && typeof t.materialAsset.assetId == "string" && Array.isArray(t.tintOverrides) && t.tintOverrides.every((e) => {
		if (typeof e != "object" || !e) return !1;
		let t = e;
		return Number.isInteger(t.layerIndex) && t.layerIndex >= 0 && Array.isArray(t.tintLinear) && t.tintLinear.length === 3 && t.tintLinear.every(Nn) && Nn(t.strength) && t.strength >= 0 && t.strength <= 1;
	});
}) ? null : "requires_material_slot_overrides"), zn = (e) => {
	if (typeof e != "object" || !e) return N("requires_skin_binding");
	let t = e;
	return N(Ln(t.skeletonAsset) && typeof t.bindingSignature == "string" && /^[0-9a-f]{64}$/u.test(t.bindingSignature) && Number.isInteger(t.skinIndex) && Number(t.skinIndex) >= 0 ? null : "requires_skin_binding");
}, Bn = (e) => {
	if (typeof e != "object" || !e) return N("requires_animation_playback");
	let t = e;
	return N((t.clipAsset === null || Ln(t.clipAsset)) && Nn(t.rate) && Nn(t.initialTimeSeconds) && t.initialTimeSeconds >= 0 && (t.loop === "once" || t.loop === "repeat") && typeof t.playing == "boolean" && (t.clipAsset === null ? t.rootMotionMode === null : [
		"in_bone",
		"in_place",
		"baked_actor_track"
	].includes(String(t.rootMotionMode))) ? null : "requires_animation_playback");
}, Vn = (e) => {
	if (typeof e != "object" || !e) return N("requires_imported_source_binding");
	let t = e;
	return N([
		"packageId",
		"sourceProjectId",
		"sourceSnapshotId",
		"sourceComponentId",
		"sourceComponentKey",
		"sourceMeshAssetId",
		"sourceSkeletonAssetId"
	].every((e) => typeof t[e] == "string" && String(t[e]).length > 0) && (t.sourceAnimationAssetId === null || typeof t.sourceAnimationAssetId == "string" && t.sourceAnimationAssetId.length > 0) ? null : "requires_imported_source_binding");
}, Hn = k.get("PrimitiveCube", 1).fields.filter((e) => e.fieldId.startsWith("transform.")), P = (e, t, n, r, i, a, o = null) => ({
	fieldId: e,
	path: t,
	valueType: n,
	defaultValue: r,
	units: i,
	referenceKind: o,
	editableContexts: Mn,
	validate: a
}), Un = (e, t) => ({
	typeId: e,
	typeVersion: 1,
	fields: [...Hn, ...t]
}), Wn = [
	{
		typeId: "TwinMetadata",
		typeVersion: 1,
		fields: [P("twin.metadata", ["metadata"], "json", null, "unitless", (e) => {
			try {
				return Dn(e), { ok: !0 };
			} catch (e) {
				return {
					ok: !1,
					reason: e instanceof Error ? e.message : "invalid_twin_metadata"
				};
			}
		}), P("twin.target-component", ["metadata", "targetComponentId"], "reference", null, "unitless", (e) => N(e === null || typeof e == "string" ? null : "requires_component_reference"), "scene-object")]
	},
	Un("SceneNode", []),
	Un("StaticMesh", [
		P("mesh.mobility", ["mobility"], "enum", "static", "unitless", (e) => N(e === void 0 || e === "static" || e === "movable" ? null : "requires_web_mesh_mobility")),
		P("mesh.builtin-shape", ["shape"], "enum", void 0, "unitless", (e) => N(e === void 0 || typeof e == "string" && Re(e) ? null : "requires_builtin_shape")),
		P("mesh.asset", ["meshAsset"], "reference", null, "unitless", (e) => N(e === null || Ln(e) ? null : "requires_asset_reference"), "asset"),
		P("appearance.color", ["color"], "integer", 9086152, "packed-srgb", In),
		P("material.overrides", ["materialOverrides"], "json", [], "unitless", Rn)
	]),
	Un("SkeletalMesh", [
		P("mesh.asset", ["meshAsset"], "reference", null, "unitless", (e) => N(Ln(e) ? null : "requires_asset_reference"), "asset"),
		P("skin.binding", ["skinBinding"], "json", null, "unitless", zn),
		P("animation.playback", ["playback"], "json", null, "unitless", Bn),
		P("import.source-binding", ["sourceBinding"], "json", null, "unitless", Vn),
		P("material.overrides", ["materialOverrides"], "json", [], "unitless", Rn)
	]),
	Un("Camera", [P("camera.horizontal-fov", ["horizontalFovDegrees"], "number", 90, "degrees", Pn)]),
	Un("PlayerStart", []),
	...[
		"DirectionalLight",
		"PointLight",
		"SpotLight"
	].map((e) => Un(e, [
		P("light.color", ["color"], "integer", 16777215, "packed-srgb", In),
		P("light.intensity", ["intensity"], "number", 1, "unitless", Fn),
		P("light.range", ["rangeMeters"], "number", 10, "meters", Pn),
		P("light.inner-cone", ["innerConeDegrees"], "number", 20, "degrees", Fn),
		P("light.outer-cone", ["outerConeDegrees"], "number", 40, "degrees", Pn),
		P("light.cast-shadow", ["castShadow"], "boolean", !1, "unitless", (e) => N(typeof e == "boolean" ? null : "requires_boolean"))
	]))
];
for (let e of Wn) k.has(e.typeId, e.typeVersion) || k.register(e);
//#endregion
//#region src/assets/GlbStaticMeshImporter.ts
var Gn = 1179937895, Kn = 1313821514, qn = 5130562, Jn = class extends ot {
	code;
	constructor(e, t) {
		super(t), this.code = e, this.name = "GlbImportError";
	}
}, F = {
	singleImportBytes: 268435456,
	meshVertices: 2e6,
	meshIndices: 12e6,
	modelNodes: 1e4,
	worldBoundsMeters: 1e3,
	imageDimension: 8192,
	singleDecodedImageBytes: 268435456
};
function Yn(e, t = F) {
	e.byteLength > t.singleImportBytes && L("resource-limit", `GLB exceeds the ${t.singleImportBytes} byte decode budget.`), e.byteLength < 20 && L("invalid-container", "GLB header or JSON chunk is incomplete.");
	let n = new DataView(e.buffer, e.byteOffset, e.byteLength);
	n.getUint32(0, !0) !== Gn && L("invalid-container", "File signature is not GLB."), n.getUint32(4, !0) !== 2 && L("unsupported-profile", "Only GLB version 2 is supported."), n.getUint32(8, !0) !== e.byteLength && L("invalid-container", "GLB declared length does not match the file size.");
	let r = 12, i = 0, a = null, o = null;
	for (; r < e.byteLength;) {
		r + 8 > e.byteLength && L("invalid-container", "GLB chunk header is truncated.");
		let t = n.getUint32(r, !0), s = n.getUint32(r + 4, !0);
		r += 8, (t % 4 != 0 || r + t > e.byteLength) && L("invalid-container", "GLB chunk length is invalid.");
		let c = e.subarray(r, r + t);
		i === 0 && s !== Kn && L("invalid-container", "The first GLB chunk must contain JSON."), s === Kn ? (a && L("invalid-container", "GLB contains more than one JSON chunk."), a = c) : s === qn && (o && L("invalid-container", "GLB contains more than one binary chunk."), o = c), r += t, i += 1;
	}
	a || L("missing-data", "GLB JSON chunk is missing.");
	let s;
	try {
		let e = JSON.parse(sr(a));
		or(e) || L("invalid-container", "GLB JSON root must be an object."), s = e;
	} catch {
		L("invalid-container", "GLB JSON chunk is not valid UTF-8 JSON.");
	}
	s.asset?.version !== "2.0" && L("unsupported-profile", "glTF asset.version must be 2.0.");
	let c = ir(s.extensionsRequired, "extensionsRequired");
	c.length > 0 && L("unsupported-extension", `Unsupported required extension: ${c.join(", ")}.`), (nr(s.skins).length > 0 || nr(s.animations).length > 0) && L("unsupported-profile", "The initial StaticMesh profile does not support skins or animations.");
	let l = rr(s.buffers);
	l.length !== 1 && L("missing-data", "A self-contained GLB must declare exactly one buffer.");
	let u = l[0];
	typeof u.uri == "string" && tr(u.uri, "buffer.uri");
	let d = I(u.byteLength, "buffer.byteLength");
	(!o || d > o.byteLength) && L("missing-data", "The embedded binary chunk is missing or shorter than buffer.byteLength.");
	let f = rr(s.bufferViews);
	for (let [e, n] of nr(s.images).entries()) {
		let r = n;
		if (or(r) && typeof r.uri == "string" && tr(r.uri, "image.uri"), or(r) && r.bufferView !== void 0) {
			(!Number.isInteger(r.bufferView) || !f[r.bufferView] || typeof r.mimeType != "string") && L("missing-data", `Image ${e} has an invalid embedded source.`);
			let n = f[r.bufferView], i = ar(n.byteOffset, `image ${e}.byteOffset`), a = I(n.byteLength, `image ${e}.byteLength`);
			Xn(o.subarray(i, i + a), r.mimeType, t);
		}
	}
	for (let [e, t] of f.entries()) t.buffer !== 0 && L("missing-data", `bufferView ${e} does not reference the embedded buffer.`), ar(t.byteOffset, `bufferView ${e}.byteOffset`) + I(t.byteLength, `bufferView ${e}.byteLength`) > d && L("missing-data", `bufferView ${e} exceeds the embedded buffer.`);
	let p = rr(s.accessors), m = rr(s.meshes);
	m.length === 0 && L("missing-data", "GLB does not contain a mesh.");
	let h = 0, g = 0, _ = 0, v = null, y = [];
	for (let [e, n] of m.entries()) {
		let r = rr(n.primitives);
		r.length === 0 && L("missing-data", `Mesh ${e} has no primitives.`);
		for (let [n, i] of r.entries()) {
			nr(i.targets).length > 0 && L("unsupported-profile", "Morph targets are outside the initial StaticMesh profile.");
			let r = (or(i.attributes) ? i.attributes : null)?.POSITION;
			(!Number.isInteger(r) || r < 0 || r >= p.length) && L("missing-data", `Mesh ${e} primitive ${n} has no valid POSITION accessor.`);
			let a = p[r];
			if ((!Number.isInteger(a.bufferView) || !f[a.bufferView]) && L("missing-data", `POSITION accessor ${String(r)} has no valid bufferView.`), (a.componentType !== 5126 || a.type !== "VEC3") && L("unsupported-profile", "POSITION must use FLOAT VEC3 in the initial profile."), g += I(a.count, `accessor ${String(r)}.count`), g > t.meshVertices && L("resource-limit", `Mesh exceeds the ${t.meshVertices} vertex budget.`), i.indices !== void 0) {
				let r = Number(i.indices);
				(!Number.isInteger(r) || r < 0 || r >= p.length) && L("missing-data", `Mesh ${e} primitive ${n} has invalid indices.`), _ += I(p[r].count, `accessor ${r}.count`), _ > t.meshIndices && L("resource-limit", `Mesh exceeds the ${t.meshIndices} index budget.`);
			}
			v ??= a;
			let o = i.material === void 0 ? null : I(i.material, `Mesh ${e} primitive ${n}.material`);
			o !== null && o >= nr(s.materials).length && L("missing-data", `Mesh ${e} primitive ${n} has an invalid material.`), y.push({
				slotId: `mesh:${e}/primitive:${n}`,
				sourceMaterialIndex: o
			}), h += 1;
		}
	}
	let b = nr(s.nodes).length;
	b > t.modelNodes && L("resource-limit", `GLB exceeds the ${t.modelNodes} node budget.`);
	let x = er(o, f, v, t.worldBoundsMeters);
	return {
		profile: "self-contained-static-mesh-glb-v1",
		gltfVersion: "2.0",
		meshCount: m.length,
		primitiveCount: h,
		vertexCount: g,
		indexCount: _,
		materialCount: nr(s.materials).length,
		nodeCount: b,
		embeddedByteLength: d,
		materialSlots: y,
		...x
	};
}
function Xn(e, t, n = F) {
	let r = t === "image/png" ? Zn(e) : t === "image/jpeg" ? Qn(e) : t === "image/webp" ? $n(e) : null;
	r || L("unsupported-profile", `Unsupported or invalid embedded image ${t}.`);
	let { width: i, height: a } = r;
	return (i <= 0 || a <= 0 || i > n.imageDimension || a > n.imageDimension) && L("resource-limit", `Image ${i}×${a} exceeds the ${n.imageDimension}px dimension budget.`), i * a * 4 > n.singleDecodedImageBytes && L("resource-limit", `Image decoded RGBA size exceeds the ${n.singleDecodedImageBytes} byte budget.`), r;
}
function Zn(e) {
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
function Qn(e) {
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
function $n(e) {
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
function er(e, t, n, r) {
	let i = t[n.bufferView], a = ar(i.byteOffset, "thumbnail bufferView.byteOffset"), o = ar(n.byteOffset, "thumbnail accessor.byteOffset"), s = i.byteStride === void 0 ? 12 : I(i.byteStride, "thumbnail bufferView.byteStride"), c = I(n.count, "thumbnail accessor.count");
	(s < 12 || a + o + Math.max(0, c - 1) * s + 12 > e.byteLength) && L("missing-data", "POSITION bytes exceed the embedded buffer.");
	let l = new DataView(e.buffer, e.byteOffset, e.byteLength), u = [], d = Math.max(1, Math.ceil(c / 256)), f = Infinity, p = Infinity, m = Infinity, h = -Infinity, g = -Infinity, _ = -Infinity;
	for (let e = 0; e < c; e += 1) {
		let t = a + o + e * s, n = l.getFloat32(t, !0), i = l.getFloat32(t + 4, !0), c = l.getFloat32(t + 8, !0);
		[
			n,
			i,
			c
		].every(Number.isFinite) || L("invalid-container", "POSITION contains a non-finite value."), Math.max(Math.abs(n), Math.abs(i), Math.abs(c)) > r && L("precision-range", `POSITION exceeds the validated ±${r}m world profile.`), f = Math.min(f, n), h = Math.max(h, n), p = Math.min(p, i), g = Math.max(g, i), m = Math.min(m, c), _ = Math.max(_, c), e % d === 0 && u.length < 256 && u.push([n, i]);
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
function tr(e, t) {
	let n = e.replaceAll("\\", "/"), r = /^[a-z][a-z0-9+.-]*:/iu.test(n) || n.startsWith("/") || /^[a-z]:\//iu.test(n), i = n.split("/").some((e) => e === "..");
	(r || i) && L("security-uri", `${t} contains a remote, absolute, or traversal URI.`), L("missing-data", `${t} references external data; the initial GLB profile requires embedded data.`);
}
function nr(e) {
	return Array.isArray(e) ? e : [];
}
function rr(e) {
	return nr(e);
}
function ir(e, t) {
	return e === void 0 ? [] : ((!Array.isArray(e) || e.some((e) => typeof e != "string")) && L("invalid-container", `${t} must be an array of strings.`), e);
}
function I(e, t) {
	return (!Number.isInteger(e) || e < 0) && L("invalid-container", `${t} must be a non-negative integer.`), e;
}
function ar(e, t) {
	return e === void 0 ? 0 : I(e, t);
}
function or(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function sr(e) {
	let t = e.byteLength;
	for (; t > 0 && (e[t - 1] === 0 || e[t - 1] === 32);) --t;
	return new TextDecoder("utf-8", { fatal: !0 }).decode(e.subarray(0, t));
}
function L(e, t) {
	throw new Jn(e, t);
}
//#endregion
//#region src/assets/BakedMaterialBinding.ts
function cr(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e) || Object.keys(e).sort().join(",") !== [...t].sort().join(",")) throw Error("Invalid bake binding fields.");
	return e;
}
function R(e) {
	if (typeof e != "string" || !e.trim() || e.length > 4096 || [...e].some((e) => e.charCodeAt(0) < 32)) throw Error("Invalid bake binding identity.");
	return e;
}
function lr(e) {
	if (typeof e != "string" || !/^[a-f0-9]{64}$/.test(e)) throw Error("Invalid bake binding hash.");
	return e;
}
function ur(e) {
	let t = cr(e, [
		"version",
		"source",
		"inputs",
		"target"
	]);
	if (t.version !== 1) throw Error("Unsupported bake binding version.");
	let n = cr(t.source, [
		"projectId",
		"meshId",
		"materialId",
		"slotId",
		"placementId"
	]), r = cr(t.inputs, [
		"sourceMeshHash",
		"effectiveMaterialHash",
		"recipeHash",
		"bakedPayloadHash"
	]), i = cr(t.target, [
		"meshAssetId",
		"meshRevisionId",
		"meshPayloadHash",
		"slotId",
		"placement"
	]), a = i.placement === null ? null : cr(i.placement, ["componentId"]);
	if (n.placementId === null != (a === null)) throw Error("Bake binding placement scope mismatch.");
	return {
		version: 1,
		source: {
			projectId: R(n.projectId),
			meshId: R(n.meshId),
			materialId: R(n.materialId),
			slotId: R(n.slotId),
			placementId: n.placementId === null ? null : R(n.placementId)
		},
		inputs: {
			sourceMeshHash: lr(r.sourceMeshHash),
			effectiveMaterialHash: lr(r.effectiveMaterialHash),
			recipeHash: lr(r.recipeHash),
			bakedPayloadHash: lr(r.bakedPayloadHash)
		},
		target: {
			meshAssetId: R(i.meshAssetId),
			meshRevisionId: R(i.meshRevisionId),
			meshPayloadHash: lr(i.meshPayloadHash),
			slotId: R(i.slotId),
			placement: a === null ? null : { componentId: R(a.componentId) }
		}
	};
}
function dr(e, t) {
	let n = e.target;
	if (n.meshAssetId !== t.meshAssetId || n.meshRevisionId !== t.meshRevisionId || n.meshPayloadHash !== t.meshPayloadHash || n.slotId !== t.slotId || n.placement && n.placement.componentId !== t.componentId) throw Error(`Baked material target mismatch at ${t.componentId}/${t.slotId}; rebake/rebind is required.`);
}
var fr = "ue-painter-vertex-atlas-v1", pr = "ue-kind-single-atlas-v1", mr = "ue-kind-multi-atlas-v1", hr = "ue-scqo-kind-atlas-v1", gr = "ue-scqo-painter-atlas-v1";
function _r(e) {
	if (!z(e) || e.schemaVersion !== 1 || e.kind !== "PbrMaterial") throw Error("Unsupported Material schema.");
	let t = (e, t, n, r = 0, i = 1) => {
		if (!Array.isArray(e) || e.length !== t || e.some((e) => typeof e != "number" || !Number.isFinite(e) || e < r || e > i)) throw Error(`${n} is invalid.`);
		return e;
	}, n = (e, t, n = 0, r = 1) => {
		if (typeof e != "number" || !Number.isFinite(e) || e < n || e > r) throw Error(`${t} is invalid.`);
		return e;
	}, r = e.alphaMode;
	if (r !== "OPAQUE" && r !== "MASK" && r !== "BLEND") throw Error("alphaMode is invalid.");
	if (typeof e.doubleSided != "boolean" || !z(e.textures)) throw Error("Material flags or textures are invalid.");
	for (let [t, n] of Object.entries(e.textures)) if (![
		"baseColor-srgb",
		"emissive-srgb",
		"normal-linear",
		"metallicRoughness-linear",
		"occlusion-linear"
	].includes(t) || !z(n) || typeof n.assetId != "string") throw Error("Material texture binding is invalid.");
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
function vr(e) {
	if (!z(e) || ![
		2,
		3,
		4,
		5,
		6,
		7
	].includes(e.schemaVersion) || e.kind !== "WebMaskPbrMaterial") throw Error("Unsupported WebMaskPBR Material schema.");
	if (e = e.schemaVersion === 2 ? Tr(e) : e, !z(e)) throw Error("WebMaskPBR migration failed.");
	let t = (e, t, n, r = !0) => {
		if (!Array.isArray(e) || e.length !== t || e.some((e) => typeof e != "number" || !Number.isFinite(e) || r && (e < 0 || e > 1))) throw Error(`${n} is invalid.`);
		return e;
	}, n = (e, t, n = 0, r = 1) => {
		if (typeof e != "number" || !Number.isFinite(e) || e < n || e > r) throw Error(`${t} is invalid.`);
		return e;
	}, r = e.alphaMode;
	if (r !== "OPAQUE" && r !== "MASK" && r !== "BLEND") throw Error("alphaMode is invalid.");
	if (typeof e.mappingProfileId != "string" || e.mappingProfileId.length === 0 || typeof e.doubleSided != "boolean" || !z(e.textureViews)) throw Error("WebMaskPBR flags or textureViews are invalid.");
	let i = Object.fromEntries(Object.entries(e.textureViews).map(([e, t]) => {
		if (![
			"baseColor",
			"normal",
			"metallic",
			"roughness",
			"occlusion",
			"emissive"
		].includes(e)) throw Error(`Unknown WebMaskPBR texture input ${e}.`);
		let n = wr(t, `textureViews.${e}`);
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
		if (!z(e) || e.operation !== "TintMultiply" && e.operation !== "ReplaceColor" || typeof e.invert != "boolean") throw Error(`maskLayers[${r}] operation is invalid.`);
		let i = wr(e.mask, `maskLayers[${r}].mask`);
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
	let o = e.vertexAtlas === void 0 ? void 0 : yr(e.vertexAtlas), s = e.mappingProfileId === hr, c = e.mappingProfileId === gr, l = e.mappingProfileId === "ue-painter-vertex-atlas-v1" || e.mappingProfileId === "ue-kind-single-atlas-v1" || e.mappingProfileId === "ue-kind-multi-atlas-v1" || s || c;
	if (o && (!l || e.unlit || a.length || e.mappingProfileId === "ue-kind-single-atlas-v1" != !!o.surfaceGated)) throw Error("Vertex Atlas cannot use an unrelated profile, unlit, or RGBA layers.");
	if (l && !o) throw Error("Missing vertex Atlas data.");
	if (o && ((e.mappingProfileId === "ue-kind-multi-atlas-v1" || s) !== !!o.surfaces || s !== (o.version === 3) || c !== (o.version === 4))) throw Error("Multi Kind Atlas surface profile mismatch.");
	let u = [
		...Object.values(i),
		...a.map((e) => e.mask),
		...o?.masks ?? []
	].some((e) => e.texCoord === 2 || e.anisotropy !== void 0 || e.generateMipmaps !== void 0), d = e.bakeBinding === void 0 ? void 0 : ur(e.bakeBinding);
	if (d && (e.mappingProfileId !== "u01-baked-pbr-v1" || o || a.length)) throw Error("Bake binding requires a baked-appearance-only PBR material.");
	return structuredClone({
		schemaVersion: e.schemaVersion === 7 || d && r === "BLEND" ? 7 : e.schemaVersion === 6 || e.ior !== void 0 || d && r === "MASK" ? 6 : e.schemaVersion === 5 || d ? 5 : e.schemaVersion === 4 || u ? 4 : 3,
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
		...d ? { bakeBinding: d } : {}
	});
}
function yr(e) {
	let t = (e, t, n = 0, r = 1) => {
		if (typeof e != "number" || !Number.isFinite(e) || e < n || e > r) throw Error(`${t} is invalid.`);
		return e;
	};
	if (!z(e) || e.version !== 1 && e.version !== 2 && e.version !== 3 && e.version !== 4 || !Array.isArray(e.colors) || e.colors.length < 1 || e.colors.length > 32 || !Array.isArray(e.masks) || e.masks.length !== Math.ceil(e.colors.length / 4)) throw Error("Vertex Atlas requires a supported version, 1–32 colors and one RGBA mask per four colors.");
	if (e.version === 2 || e.version === 4 ? e.colorDetailMode !== "color" || e.surfaceGated !== void 0 || e.surfaces !== void 0 : e.colorDetailMode !== void 0) throw Error("Vertex Atlas detail mode does not match its version.");
	let n = e.masks.map((e, t) => wr(e, `vertexAtlas.masks[${t}]`));
	if (n.some((e) => e.channel !== "rgba" || e.colorSpace !== "linear" || e.texCoord !== 0 || e.flipY)) throw Error("Vertex Atlas requires linear RGBA masks on UV0 without a vertical flip.");
	let r = e.colors.map((e, n) => {
		if (!Array.isArray(e) || e.length !== 3) throw Error("Invalid Atlas color");
		return e.map((e) => t(e, `vertexAtlas.colors[${n}]`, 0, 65504));
	});
	if (e.surfaceGated !== void 0 && (e.surfaceGated !== !0 || r.length !== 1)) throw Error("Kind Atlas requires exactly one gated surface.");
	let i;
	if (e.surfaces !== void 0) {
		if (e.surfaceGated || r.length < 2 && e.version !== 3 || !Array.isArray(e.surfaces) || e.surfaces.length !== r.length) throw Error("Multi Kind Atlas surface count mismatch.");
		i = e.surfaces.map((e, n) => {
			if (!z(e)) throw Error("Invalid Kind surface");
			return {
				roughness: t(e.roughness, `surfaces[${n}].roughness`),
				metallic: t(e.metallic, `surfaces[${n}].metallic`)
			};
		});
	}
	let a;
	if (e.version === 3 || e.version === 4) {
		let n = e.kindIdFallback;
		if (!z(n) || !Number.isInteger(n.previewKind) || typeof n.useVertexMaterialIds != "boolean" || Object.keys(n).some((e) => ![
			"previewKind",
			"useVertexMaterialIds",
			"enabled"
		].includes(e)) || !Array.isArray(n.enabled) || n.enabled.length !== r.length || n.enabled.some((e) => typeof e != "boolean") || e.surfaceGated || e.version === 3 && (!i || e.colorDetail !== 0 || e.roughnessOffset !== 0 || e.metallicReduction !== 0)) throw Error("Invalid SmartCube Atlas fallback contract.");
		a = {
			previewKind: t(n.previewKind, "previewKind", 1, r.length),
			useVertexMaterialIds: n.useVertexMaterialIds,
			enabled: n.enabled
		};
	} else if (e.kindIdFallback !== void 0) throw Error("SmartCube fallback requires Atlas version 3 or 4.");
	return {
		version: e.version,
		...e.version === 2 || e.version === 4 ? { colorDetailMode: "color" } : {},
		...a ? { kindIdFallback: a } : {},
		masks: n,
		colors: r,
		...e.surfaceGated === !0 ? { surfaceGated: !0 } : {},
		...i ? { surfaces: i } : {},
		colorDetail: t(e.colorDetail, "vertexAtlas.colorDetail"),
		roughnessOffset: t(e.roughnessOffset, "vertexAtlas.roughnessOffset", -1, 1),
		metallicReduction: t(e.metallicReduction, "vertexAtlas.metallicReduction", -1, 1)
	};
}
function br(e) {
	return z(e) && [
		2,
		3,
		4,
		5,
		6,
		7
	].includes(e.schemaVersion) && e.kind === "WebMaskPbrMaterial" ? vr(e) : _r(e);
}
async function xr(e, t) {
	return Sr(await rt(e, typeof t == "string" ? t : t.assetId, typeof t != "string" && t.revisionPolicy === "pinned" ? t.revisionId : void 0), t);
}
function Sr(e, t) {
	let n = typeof t == "string" ? t : t.assetId, r = e.assets.find((e) => e.id === n && e.kind === "Material");
	if (!r) throw Error(`Unknown Material asset ${n}.`);
	if (typeof t != "string" && !["live", "pinned"].includes(t.revisionPolicy)) throw Error("Invalid Material revision policy.");
	let i = typeof t != "string" && t.revisionPolicy === "pinned" ? t.revisionId : r.currentRevisionId;
	if (!i) throw Error(`Material ${n} requires a pinned revision ID.`);
	let a = e.revisions.find((e) => e.id === i && e.assetId === n), o = e.blobs.find((e) => a?.blobKeys.includes(e.key));
	if (!a || !o) throw Error(`Material ${n} has missing revision data.`);
	return br(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(o.bytes)));
}
function Cr(e) {
	let t = e.kind === "WebMaskPbrMaterial" ? [
		...Object.values(e.textureViews).map((e) => e.texture),
		...e.maskLayers.map((e) => e.mask.texture),
		...e.vertexAtlas?.masks.map((e) => e.texture) ?? []
	] : Object.values(e.textures).filter((e) => !!e);
	return [...new Map(t.map((e) => [e.assetId, e])).values()];
}
function z(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function wr(e, t) {
	if (!z(e) || !z(e.texture) || typeof e.texture.assetId != "string") throw Error(`${t}.texture is invalid.`);
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
function Tr(e) {
	let t = z(e.textures) ? e.textures : {}, n = {
		"baseColor-srgb": ["baseColor"],
		"emissive-srgb": ["emissive"],
		"normal-linear": ["normal"],
		"metallicRoughness-linear": ["metallic", "roughness"],
		"occlusion-linear": ["occlusion"]
	}, r = Object.fromEntries(Object.entries(t).flatMap(([e, t]) => {
		let r = n[e];
		return !r || !z(t) ? [] : r.map((n) => {
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
		if (!z(e)) return e;
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
//#region src/assets/StaticMeshLodAsset.ts
var Er = "static-mesh-lod-v1", Dr = 1146047556, Or = 32;
function kr(e) {
	return e.byteLength >= 4 && new DataView(e.buffer, e.byteOffset, e.byteLength).getUint32(0, !0) === Dr;
}
function Ar(e) {
	Nr(e.distanceMeters, e.hysteresis);
	let t = Or + e.levels[0].byteLength + e.levels[1].byteLength;
	if (t > F.singleImportBytes) throw Error("LOD asset exceeds the import byte budget.");
	let n = new Uint8Array(t), r = new DataView(n.buffer);
	return r.setUint32(0, Dr, !0), r.setUint32(4, 1, !0), r.setFloat64(8, e.distanceMeters, !0), r.setFloat64(16, e.hysteresis, !0), r.setUint32(24, e.levels[0].byteLength, !0), r.setUint32(28, e.levels[1].byteLength, !0), n.set(e.levels[0], Or), n.set(e.levels[1], Or + e.levels[0].byteLength), n;
}
function jr(e) {
	if (e.byteLength < Or || e.byteLength > F.singleImportBytes) throw Error("Invalid LOD payload size.");
	let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
	if (t.getUint32(0, !0) !== Dr || t.getUint32(4, !0) !== 1) throw Error("Unsupported LOD payload version.");
	let n = t.getFloat64(8, !0), r = t.getFloat64(16, !0);
	Nr(n, r);
	let i = t.getUint32(24, !0), a = t.getUint32(28, !0);
	if (!i || !a || Or + i + a !== e.byteLength) throw Error("LOD payload lengths do not match.");
	return {
		distanceMeters: n,
		hysteresis: r,
		levels: [e.slice(Or, Or + i), e.slice(Or + i)]
	};
}
function Mr(e) {
	let t = jr(e), n = t.levels.map((e) => Yn(e)), r = n[0], i = n[1];
	if (JSON.stringify(r.materialSlots.map(({ slotId: e }) => e)) !== JSON.stringify(i.materialSlots.map(({ slotId: e }) => e))) throw Error("LOD levels must have matching mesh/primitive material slot IDs.");
	let a = r.vertexCount + i.vertexCount, o = r.indexCount + i.indexCount;
	if (a > F.meshVertices || o > F.meshIndices || r.nodeCount + i.nodeCount > F.modelNodes) throw Error(`Combined LOD geometry exceeds the decode budget. LOD 합계: 정점 ${a}/${F.meshVertices}, 인덱스 ${o}/${F.meshIndices}, 노드 ${r.nodeCount + i.nodeCount}/${F.modelNodes}. Unreal 가져오기에서 '2단계 LOD 준비'를 끄고 다시 시도하세요.`);
	return {
		payload: t,
		metadata: {
			...r,
			profile: Er,
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
function Nr(e, t) {
	if (!Number.isFinite(e) || e <= 0 || e > 2e3) throw Error("LOD distance must be greater than 0 and at most 2000 meters.");
	if (!Number.isFinite(t) || t < 0 || t >= .5) throw Error("LOD hysteresis must be in [0, 0.5).");
}
//#endregion
//#region src/ue-import/OptimizeStaticTextures.ts
var Pr = {
	maxSize: 0,
	maps: [
		"baseColor",
		"normal",
		"metallicRoughness",
		"occlusion",
		"emissive",
		"specular"
	]
}, Fr = {
	...Pr,
	maxSize: 512,
	mapMaxSizes: {
		baseColor: 512,
		normal: 512,
		metallicRoughness: 512,
		occlusion: 512,
		emissive: 512,
		specular: 512
	},
	compactBaseColor: !0
}, Ir = [
	"baseColor",
	"normal",
	"metallicRoughness",
	"occlusion",
	"emissive",
	"specular"
], Lr = /* @__PURE__ */ new Set([
	"KHR_materials_specular",
	"KHR_materials_emissive_strength",
	"KHR_materials_unlit",
	"KHR_texture_transform",
	"KHR_materials_ior"
]), B = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("잘못된 GLB 텍스처 구조");
	return e;
}, V = (e) => e === void 0 ? [] : Array.isArray(e) ? e : (() => {
	throw Error("잘못된 GLB 배열");
})(), Rr = (e, t) => {
	if (!Number.isSafeInteger(e) || e < 0 || e >= t) throw Error("잘못된 GLB 텍스처 참조");
	return e;
}, zr = (e) => e + 3 & -4;
function Br(e) {
	if (!e || typeof e != "object") return;
	if (Array.isArray(e)) {
		e.forEach(Br);
		return;
	}
	let t = B(e);
	if (t.extensions) {
		for (let e of Object.keys(B(t.extensions))) if (!Lr.has(e)) throw Error(`텍스처 최적화에서 지원하지 않는 glTF 확장: ${e}`);
	}
	for (let [e, n] of Object.entries(t)) e !== "extras" && Br(n);
}
function Vr(e) {
	if (!e || typeof e != "object" || ![
		0,
		128,
		256,
		512,
		1024,
		2048
	].includes(e.maxSize) || !Array.isArray(e.maps) || new Set(e.maps).size !== e.maps.length || e.maps.some((e) => !Ir.includes(e))) throw Error("지원하지 않는 텍스처 가져오기 옵션");
	if (e.compactBaseColor !== void 0 && typeof e.compactBaseColor != "boolean") throw Error("지원하지 않는 텍스처 포맷 옵션");
	if (e.mapMaxSizes !== void 0 && (!e.mapMaxSizes || typeof e.mapMaxSizes != "object" || Array.isArray(e.mapMaxSizes) || Object.entries(e.mapMaxSizes).some(([e, t]) => !Ir.includes(e) || ![
		128,
		256,
		512,
		1024,
		2048
	].includes(t)))) throw Error("지원하지 않는 맵별 크기 옵션");
}
function Hr(e, t) {
	return Math.min(e.maxSize || Infinity, e.mapMaxSizes?.[t] || Infinity);
}
function Ur(e) {
	return Vr(e), {
		...e,
		maxSize: Math.min(e.maxSize || 512, 512),
		maps: [...e.maps],
		...e.mapMaxSizes ? { mapMaxSizes: Object.fromEntries(Object.entries(e.mapMaxSizes).map(([e, t]) => [e, Math.min(t, 512)])) } : {}
	};
}
var Wr = async (e, t, n, r, i, a) => {
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
async function Gr(e, t, n, r, i) {
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
async function Kr(e, t, n, r = Gr, i = Wr) {
	if (Vr(t), kr(e)) {
		let { payload: a } = Mr(e), o = await Kr(a.levels[0], t, n, r, i), s = await Kr(a.levels[1], t, n, r, i);
		return Ar({
			...a,
			levels: [o, s]
		});
	}
	Yn(e), n.throwIfAborted();
	let a = new DataView(e.buffer, e.byteOffset, e.byteLength), o = a.getUint32(12, !0), s = B(JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(e.subarray(20, 20 + o)))), c = 28 + o;
	if (a.getUint32(24 + o, !0) !== 5130562) throw Error("텍스처 최적화에는 표준 JSON/BIN GLB가 필요합니다.");
	let l = e.subarray(c, c + a.getUint32(20 + o, !0));
	Br(s);
	for (let e of V(s.extensionsUsed)) if (!Lr.has(String(e))) throw Error(`텍스처 최적화에서 지원하지 않는 glTF 확장: ${e}`);
	let u = V(s.bufferViews).map(B), d = V(s.images).map(B), f = V(s.textures).map(B);
	if (!d.length) return e;
	let p = new Set(t.maps), m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), g = (e, t, n) => {
		if (!(t in e)) return;
		if (!p.has(n)) {
			delete e[t];
			return;
		}
		let r = Rr(B(e[t]).index, f.length);
		m.add(r);
		let i = h.get(r) ?? /* @__PURE__ */ new Set();
		i.add(n), h.set(r, i);
	};
	for (let e of V(s.materials)) {
		let t = B(e), n = t.pbrMetallicRoughness ? B(t.pbrMetallicRoughness) : {};
		g(n, "baseColorTexture", "baseColor"), g(n, "metallicRoughnessTexture", "metallicRoughness"), g(t, "normalTexture", "normal"), g(t, "occlusionTexture", "occlusion"), g(t, "emissiveTexture", "emissive");
		let r = t.extensions ? B(t.extensions) : {}, i = r.KHR_materials_specular ? B(r.KHR_materials_specular) : {};
		g(i, "specularTexture", "specular"), g(i, "specularColorTexture", "specular");
	}
	let _ = [...m].sort((e, t) => e - t), v = new Map(_.map((e, t) => [e, t])), y = [...new Set(_.map((e) => {
		let t = f[e];
		if (t.extensions) throw Error("확장 텍스처 소스는 최적화할 수 없습니다.");
		return Rr(t.source, d.length);
	}))].sort((e, t) => e - t), b = new Map(y.map((e, t) => [e, t]));
	if (t.compactBaseColor && t.maps.length === Ir.length && y.every((e) => {
		let n = d[e], r = u[Rr(n.bufferView, u.length)], i = Xn(l.subarray(Number(r.byteOffset ?? 0), Number(r.byteOffset ?? 0) + Number(r.byteLength)), String(n.mimeType)), a = _.filter((t) => f[t].source === e).flatMap((e) => [...h.get(e)]);
		return Math.max(i.width, i.height) <= Math.min(...a.map((e) => Hr(t, e)));
	})) return e;
	for (let e of V(s.materials)) {
		let t = B(e), n = t.pbrMetallicRoughness ? B(t.pbrMetallicRoughness) : {}, r = t.extensions ? B(t.extensions) : {}, i = r.KHR_materials_specular ? B(r.KHR_materials_specular) : {};
		for (let [e, r] of [
			[n, ["baseColorTexture", "metallicRoughnessTexture"]],
			[t, [
				"normalTexture",
				"occlusionTexture",
				"emissiveTexture"
			]],
			[i, ["specularTexture", "specularColorTexture"]]
		]) for (let t of r) if (t in e) {
			let n = B(e[t]);
			n.index = v.get(n.index);
		}
	}
	s.textures = _.map((e) => ({
		...f[e],
		source: b.get(f[e].source)
	})), s.images = y.map((e) => d[e]);
	let x = new Set(d.map((e) => Rr(e.bufferView, u.length))), ee = /* @__PURE__ */ new Map();
	for (let e of y) {
		n.throwIfAborted();
		let a = d[e], o = Rr(a.bufferView, u.length), s = u[o];
		if (typeof a.mimeType != "string" || "uri" in a) throw Error("외부 또는 잘못된 GLB 이미지");
		let c = Number(s.byteOffset ?? 0), p = Number(s.byteLength), m = l.subarray(c, c + p), g = Xn(m, a.mimeType), v = [...new Set(_.filter((t) => f[t].source === e).flatMap((e) => [...h.get(e)]))], y = Math.min(...v.map((e) => Hr(t, e))), b = m;
		if (Math.max(g.width, g.height) > y) {
			let e = y / Math.max(g.width, g.height), o = Math.max(1, Math.round(g.width * e)), s = Math.max(1, Math.round(g.height * e)), c = t.compactBaseColor ? await i(m, a.mimeType, o, s, v.length === 1 && v[0] === "baseColor", n) : {
				bytes: await r(m, a.mimeType, o, s, n),
				mimeType: "image/png"
			};
			if (n.throwIfAborted(), b = c.bytes, v.some((e) => e !== "baseColor") && c.mimeType !== "image/png") throw Error("수치 맵에는 PNG 파생본이 필요합니다.");
			let l = Xn(b, c.mimeType);
			if (l.width !== o || l.height !== s) throw Error("축소된 텍스처가 크기 제한을 초과했습니다.");
			a.mimeType = c.mimeType;
		}
		let x = ee.get(o);
		if (x && (x.length !== b.length || x.some((e, t) => e !== b[t]))) throw Error("서로 다른 이미지가 GLB bufferView를 공유합니다.");
		ee.set(o, b);
	}
	let S = /* @__PURE__ */ new Set();
	for (let e of V(s.accessors)) {
		let t = B(e);
		if (t.bufferView !== void 0 && S.add(Rr(t.bufferView, u.length)), t.sparse) {
			let e = B(t.sparse);
			for (let t of ["indices", "values"]) S.add(Rr(B(e[t]).bufferView, u.length));
		}
	}
	for (let e of ee.keys()) if (S.has(e)) throw Error("이미지와 메쉬가 같은 GLB bufferView를 공유합니다.");
	let te = u.map((e, t) => t).filter((e) => !x.has(e) || ee.has(e) || S.has(e)), ne = new Map(te.map((e, t) => [e, t])), re = [], ie = 0;
	s.bufferViews = te.map((e) => {
		let t = u[e], n = ee.get(e) ?? l.subarray(Number(t.byteOffset ?? 0), Number(t.byteOffset ?? 0) + Number(t.byteLength));
		ie = zr(ie);
		let r = ie;
		return re.push(n), ie += n.length, {
			...t,
			byteOffset: r,
			byteLength: n.length
		};
	});
	for (let e of V(s.accessors)) {
		let t = B(e);
		if (t.bufferView !== void 0 && (t.bufferView = ne.get(t.bufferView)), t.sparse) for (let e of ["indices", "values"]) {
			let n = B(B(t.sparse)[e]);
			n.bufferView = ne.get(n.bufferView);
		}
	}
	for (let e of V(s.images)) {
		let t = B(e);
		t.bufferView = ne.get(t.bufferView);
	}
	B(V(s.buffers)[0]).byteLength = ie;
	let ae = new Uint8Array(zr(ie)), oe = 0;
	for (let e of re) oe = zr(oe), ae.set(e, oe), oe += e.length;
	let se = new TextEncoder().encode(JSON.stringify(s)), C = new Uint8Array(zr(se.length));
	C.fill(32), C.set(se);
	let w = new Uint8Array(28 + C.length + ae.length), ce = new DataView(w.buffer);
	return ce.setUint32(0, 1179937895, !0), ce.setUint32(4, 2, !0), ce.setUint32(8, w.length, !0), ce.setUint32(12, C.length, !0), ce.setUint32(16, 1313821514, !0), w.set(C, 20), ce.setUint32(20 + C.length, ae.length, !0), ce.setUint32(24 + C.length, 5130562, !0), w.set(ae, 28 + C.length), n.throwIfAborted(), Yn(w), w;
}
//#endregion
//#region src/ue-import/CandidateMaterialDisplay.ts
var qr = {
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
function Jr(e, t) {
	let n = /* @__PURE__ */ new Map();
	if (!t) return n;
	let r = (e, r, i = !1) => {
		(i || t.maps.includes(r)) && n.set(e, Math.min(n.get(e) ?? Infinity, Hr(t, r)));
	};
	for (let t of e.assets.filter((e) => e.kind === "Material")) {
		let i = br(e.revisions.find((e) => e.id === t.currentRevisionId)?.metadata.material);
		if (i.kind === "WebMaskPbrMaterial") {
			for (let [e, t] of Object.entries(i.textureViews)) r(t.texture.assetId, qr[e], e === "baseColor" && i.alphaMode !== "OPAQUE");
			for (let e of i.maskLayers) r(e.mask.texture.assetId, "baseColor");
			for (let e of i.vertexAtlas?.masks ?? []) r(e.texture.assetId, "baseColor"), n.has(e.texture.assetId) && n.set(e.texture.assetId, Math.min(512, n.get(e.texture.assetId)));
		} else for (let [e, t] of Object.entries(i.textures)) r(t.assetId, qr[e], e === "baseColor-srgb" && i.alphaMode !== "OPAQUE");
	}
	return n;
}
function Yr(e, t, n = !0) {
	let r = (e) => n && (!t || t.maps.includes(qr[e])), i = e.alphaMode !== "OPAQUE" && !r("baseColor"), a = i ? { displayAlphaOnly: !0 } : {};
	return e.kind === "WebMaskPbrMaterial" ? {
		...e,
		...a,
		textureViews: Object.fromEntries(Object.entries(e.textureViews).filter(([e]) => r(e) || i && e === "baseColor")),
		maskLayers: r("baseColor") ? e.maskLayers : [],
		...!r("baseColor") && e.vertexAtlas ? {
			vertexAtlas: void 0,
			mappingProfileId: "u01-display-without-atlas"
		} : {}
	} : {
		...e,
		...a,
		textures: Object.fromEntries(Object.entries(e.textures).filter(([e]) => r(e) || i && e === "baseColor-srgb"))
	};
}
function Xr(e, t = !1) {
	let n = [], r = [], i = /* @__PURE__ */ new Map(), a = (a, o, s = !1) => {
		let c = i.get(a);
		if (c === void 0) {
			let r = e.assets.find((e) => e.id === a && e.kind === "Texture"), o = e.revisions.find((e) => e.id === r?.currentRevisionId && e.assetId === r?.id), s = e.blobs.find((e) => e.key === o?.blobKeys[0]);
			if (!o || typeof o.metadata.mimeType != "string") throw Error("Missing candidate material texture");
			let l;
			if (s) l = Xn(s.bytes, o.metadata.mimeType);
			else if (t) {
				let { width: e, height: t } = o.metadata;
				if (typeof e != "number" || typeof t != "number" || !Number.isSafeInteger(e) || !Number.isSafeInteger(t) || e < 1 || t < 1 || e > 8192 || t > 8192 || e * t * 4 > 256 * 1024 ** 2) throw Error("Invalid published texture dimensions");
				l = {
					width: e,
					height: t
				};
			} else throw Error("Missing candidate material texture");
			c = n.length, i.set(a, c), n.push(l);
		}
		r.push({
			source: c,
			kind: o,
			...s ? { required: !0 } : {}
		});
	};
	for (let t of e.assets.filter((e) => e.kind === "Material")) {
		let n = br(e.revisions.find((e) => e.id === t.currentRevisionId && e.assetId === t.id)?.metadata.material);
		if (n.kind === "WebMaskPbrMaterial") {
			for (let [e, t] of Object.entries(n.textureViews)) a(t.texture.assetId, qr[e], e === "baseColor" && n.alphaMode !== "OPAQUE");
			for (let e of n.maskLayers) a(e.mask.texture.assetId, "baseColor");
			for (let e of n.vertexAtlas?.masks ?? []) a(e.texture.assetId, "baseColor");
		} else for (let [e, t] of Object.entries(n.textures)) a(t.assetId, qr[e], e === "baseColor-srgb" && n.alphaMode !== "OPAQUE");
	}
	return {
		dimensions: n,
		uses: r
	};
}
var H = {
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
		placements: 5e4,
		singlePayloadBytes: 268435456,
		bakeWorkingBytes: 536870912,
		payloadBytes: 10737418240,
		inventoryBytes: 33554432,
		reportBytes: 16777216
	},
	storage: {
		assets: 4e4,
		revisions: 8e4,
		blobs: 4e4,
		desktopEntries: 4e4,
		retainedBlobBytes: 10737418240,
		priorVersions: 32,
		historyMetadataBytes: 33554432
	},
	backup: {
		archiveBytes: 10737418240,
		entries: 6e4
	},
	player: {
		templateBytes: 536870912,
		archiveBytes: 2147483648
	}
};
//#endregion
//#region src/assets/CapacityPolicy.ts
if (H.schemaVersion !== 1 || H.policyId !== "dtwe-capacity-v1") throw Error("지원하지 않는 에셋 용량 정책");
for (let e of [
	H.import,
	H.storage,
	H.backup,
	H.player
]) {
	if (Object.values(e).some((e) => !Number.isSafeInteger(e) || e <= 0)) throw Error("잘못된 에셋 용량 정책");
	Object.freeze(e);
}
if (H.import.initialSourceAssets > H.import.sourceAssets || H.import.sourceAssetStep > H.import.sourceAssets || H.import.payloadRecords < H.import.sourceAssets || H.import.payloadFiles < H.import.payloadRecords * 2 || H.import.transferFiles < H.import.payloadFiles + 2 || H.import.progressUnits < H.import.sourceAssets * 3 || H.backup.entries >= 65535) throw Error("잘못된 자동 가져오기 용량 정책");
var U = Object.freeze(H), Zr = U.import;
Zr.payloadBytes + Zr.inventoryBytes + Zr.reportBytes;
//#endregion
//#region node_modules/.pnpm/three@0.186.0/node_modules/three/examples/jsm/utils/BufferGeometryUtils.js
function Qr(e, t) {
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
function $r(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = e.clone();
	return ei(e, r, function(e, r) {
		t.set(r, e), n.set(e, r);
	}), r.traverse(function(e) {
		if (!e.isSkinnedMesh) return;
		let r = e, i = t.get(e), a = i.skeleton.bones;
		r.skeleton = i.skeleton.clone(), r.bindMatrix.copy(i.bindMatrix), r.skeleton.bones = a.map(function(e) {
			return n.get(e);
		}), r.bind(r.skeleton, r.bindMatrix);
	}), r;
}
function ei(e, t, n) {
	n(e, t);
	for (let r = 0; r < e.children.length; r++) ei(e.children[r], t.children[r], n);
}
//#endregion
//#region node_modules/.pnpm/three@0.186.0/node_modules/three/examples/jsm/loaders/GLTFLoader.js
var ti = class extends ge {
	constructor(e) {
		super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
			return new oi(e);
		}), this.register(function(e) {
			return new si(e);
		}), this.register(function(e) {
			return new gi(e);
		}), this.register(function(e) {
			return new _i(e);
		}), this.register(function(e) {
			return new vi(e);
		}), this.register(function(e) {
			return new li(e);
		}), this.register(function(e) {
			return new ui(e);
		}), this.register(function(e) {
			return new di(e);
		}), this.register(function(e) {
			return new fi(e);
		}), this.register(function(e) {
			return new ai(e);
		}), this.register(function(e) {
			return new pi(e);
		}), this.register(function(e) {
			return new ci(e);
		}), this.register(function(e) {
			return new hi(e);
		}), this.register(function(e) {
			return new mi(e);
		}), this.register(function(e) {
			return new ri(e);
		}), this.register(function(e) {
			return new yi(e, G.EXT_MESHOPT_COMPRESSION);
		}), this.register(function(e) {
			return new yi(e, G.KHR_MESHOPT_COMPRESSION);
		}), this.register(function(e) {
			return new bi(e);
		});
	}
	load(e, t, n, i) {
		let a = this, o;
		if (this.resourcePath !== "") o = this.resourcePath;
		else if (this.path !== "") {
			let t = he.extractUrlBase(e);
			o = he.resolveURL(t, this.path);
		} else o = he.extractUrlBase(e);
		this.manager.itemStart(e);
		let s = function(t) {
			i ? i(t) : console.error(t), a.manager.itemError(e), a.manager.itemEnd(e);
		}, c = new r(this.manager);
		c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(n) {
			try {
				a.parse(n, o, function(n) {
					t(n), a.manager.itemEnd(e);
				}, s);
			} catch (e) {
				s(e);
			}
		}, n, s);
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
			if (s.decode(new Uint8Array(e, 0, 4)) === xi) {
				try {
					a[G.KHR_BINARY_GLTF] = new wi(e);
				} catch (e) {
					r && r(e);
					return;
				}
				i = JSON.parse(a[G.KHR_BINARY_GLTF].content);
			} else i = JSON.parse(s.decode(e));
		} else i = e;
		if (i.asset === void 0 || i.asset.version[0] < 2) {
			r && r(/* @__PURE__ */ Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
			return;
		}
		let c = new Ji(i, {
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
				case G.KHR_MATERIALS_UNLIT:
					a[t] = new ii();
					break;
				case G.KHR_DRACO_MESH_COMPRESSION:
					a[t] = new Ti(i, this.dracoLoader);
					break;
				case G.KHR_TEXTURE_TRANSFORM:
					a[t] = new Ei();
					break;
				case G.KHR_MESH_QUANTIZATION:
					a[t] = new Di();
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
function ni() {
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
function W(e, t, n) {
	let r = e.json.materials[t];
	return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
var G = {
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
}, ri = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_LIGHTS_PUNCTUAL, this.cache = {
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
		let i = t.json, a = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e], o, s = new b(16777215);
		a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], Te);
		let c = a.range === void 0 ? 0 : a.range;
		switch (a.type) {
			case "directional":
				o = new u(s), o.target.position.set(0, 0, -1), o.add(o.target);
				break;
			case "point":
				o = new l(s), o.distance = c;
				break;
			case "spot":
				o = new be(s), o.distance = c, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle === void 0 ? 0 : a.spot.innerConeAngle, a.spot.outerConeAngle = a.spot.outerConeAngle === void 0 ? Math.PI / 4 : a.spot.outerConeAngle, o.angle = a.spot.outerConeAngle, o.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, o.target.position.set(0, 0, -1), o.add(o.target);
				break;
			default: throw Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
		}
		return o.position.set(0, 0, 0), q(o, a), a.intensity !== void 0 && (o.intensity = a.intensity), o.name = t.createUniqueName(a.name || "light_" + e), r = Promise.resolve(o), t.cache.add(n, r), r;
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
}, ii = class {
	constructor() {
		this.name = G.KHR_MATERIALS_UNLIT;
	}
	getMaterialType() {
		return x;
	}
	extendParams(e, t, n) {
		let r = [];
		e.color = new b(1, 1, 1), e.opacity = 1;
		let i = t.pbrMetallicRoughness;
		if (i) {
			if (Array.isArray(i.baseColorFactor)) {
				let t = i.baseColorFactor;
				e.color.setRGB(t[0], t[1], t[2], Te), e.opacity = t[3];
			}
			i.baseColorTexture !== void 0 && r.push(n.assignTexture(e, "map", i.baseColorTexture, S));
		}
		return Promise.all(r);
	}
}, ai = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_MATERIALS_EMISSIVE_STRENGTH;
	}
	extendMaterialParams(e, t) {
		let n = W(this.parser, e, this.name);
		return n === null || n.emissiveStrength !== void 0 && (t.emissiveIntensity = n.emissiveStrength), Promise.resolve();
	}
}, oi = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_MATERIALS_CLEARCOAT;
	}
	getMaterialType(e) {
		return W(this.parser, e, this.name) === null ? null : n;
	}
	extendMaterialParams(e, t) {
		let n = W(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		if (n.clearcoatFactor !== void 0 && (t.clearcoat = n.clearcoatFactor), n.clearcoatTexture !== void 0 && r.push(this.parser.assignTexture(t, "clearcoatMap", n.clearcoatTexture)), n.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = n.clearcoatRoughnessFactor), n.clearcoatRoughnessTexture !== void 0 && r.push(this.parser.assignTexture(t, "clearcoatRoughnessMap", n.clearcoatRoughnessTexture)), n.clearcoatNormalTexture !== void 0 && (r.push(this.parser.assignTexture(t, "clearcoatNormalMap", n.clearcoatNormalTexture)), n.clearcoatNormalTexture.scale !== void 0)) {
			let e = n.clearcoatNormalTexture.scale;
			t.clearcoatNormalScale = new C(e, e);
		}
		return Promise.all(r);
	}
}, si = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_MATERIALS_DISPERSION;
	}
	getMaterialType(e) {
		return W(this.parser, e, this.name) === null ? null : n;
	}
	extendMaterialParams(e, t) {
		let n = W(this.parser, e, this.name);
		return n === null || (t.dispersion = n.dispersion === void 0 ? 0 : n.dispersion), Promise.resolve();
	}
}, ci = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_MATERIALS_IRIDESCENCE;
	}
	getMaterialType(e) {
		return W(this.parser, e, this.name) === null ? null : n;
	}
	extendMaterialParams(e, t) {
		let n = W(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor), n.iridescenceTexture !== void 0 && r.push(this.parser.assignTexture(t, "iridescenceMap", n.iridescenceTexture)), n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), n.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum), n.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum), n.iridescenceThicknessTexture !== void 0 && r.push(this.parser.assignTexture(t, "iridescenceThicknessMap", n.iridescenceThicknessTexture)), Promise.all(r);
	}
}, li = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_MATERIALS_SHEEN;
	}
	getMaterialType(e) {
		return W(this.parser, e, this.name) === null ? null : n;
	}
	extendMaterialParams(e, t) {
		let n = W(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		if (t.sheenColor = new b(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1, n.sheenColorFactor !== void 0) {
			let e = n.sheenColorFactor;
			t.sheenColor.setRGB(e[0], e[1], e[2], Te);
		}
		return n.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = n.sheenRoughnessFactor), n.sheenColorTexture !== void 0 && r.push(this.parser.assignTexture(t, "sheenColorMap", n.sheenColorTexture, S)), n.sheenRoughnessTexture !== void 0 && r.push(this.parser.assignTexture(t, "sheenRoughnessMap", n.sheenRoughnessTexture)), Promise.all(r);
	}
}, ui = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_MATERIALS_TRANSMISSION;
	}
	getMaterialType(e) {
		return W(this.parser, e, this.name) === null ? null : n;
	}
	extendMaterialParams(e, t) {
		let n = W(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.transmissionFactor !== void 0 && (t.transmission = n.transmissionFactor), n.transmissionTexture !== void 0 && r.push(this.parser.assignTexture(t, "transmissionMap", n.transmissionTexture)), Promise.all(r);
	}
}, di = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_MATERIALS_VOLUME;
	}
	getMaterialType(e) {
		return W(this.parser, e, this.name) === null ? null : n;
	}
	extendMaterialParams(e, t) {
		let n = W(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		t.thickness = n.thicknessFactor === void 0 ? 0 : n.thicknessFactor, n.thicknessTexture !== void 0 && r.push(this.parser.assignTexture(t, "thicknessMap", n.thicknessTexture)), t.attenuationDistance = n.attenuationDistance || Infinity;
		let i = n.attenuationColor || [
			1,
			1,
			1
		];
		return t.attenuationColor = new b().setRGB(i[0], i[1], i[2], Te), Promise.all(r);
	}
}, fi = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_MATERIALS_IOR;
	}
	getMaterialType(e) {
		return W(this.parser, e, this.name) === null ? null : n;
	}
	extendMaterialParams(e, t) {
		let n = W(this.parser, e, this.name);
		return n === null ? Promise.resolve() : (t.ior = n.ior === void 0 ? 1.5 : n.ior, t.ior === 0 && (t.ior = 1e3), Promise.resolve());
	}
}, pi = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_MATERIALS_SPECULAR;
	}
	getMaterialType(e) {
		return W(this.parser, e, this.name) === null ? null : n;
	}
	extendMaterialParams(e, t) {
		let n = W(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		t.specularIntensity = n.specularFactor === void 0 ? 1 : n.specularFactor, n.specularTexture !== void 0 && r.push(this.parser.assignTexture(t, "specularIntensityMap", n.specularTexture));
		let i = n.specularColorFactor || [
			1,
			1,
			1
		];
		return t.specularColor = new b().setRGB(i[0], i[1], i[2], Te), n.specularColorTexture !== void 0 && r.push(this.parser.assignTexture(t, "specularColorMap", n.specularColorTexture, S)), Promise.all(r);
	}
}, mi = class {
	constructor(e) {
		this.parser = e, this.name = G.EXT_MATERIALS_BUMP;
	}
	getMaterialType(e) {
		return W(this.parser, e, this.name) === null ? null : n;
	}
	extendMaterialParams(e, t) {
		let n = W(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return t.bumpScale = n.bumpFactor === void 0 ? 1 : n.bumpFactor, n.bumpTexture !== void 0 && r.push(this.parser.assignTexture(t, "bumpMap", n.bumpTexture)), Promise.all(r);
	}
}, hi = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_MATERIALS_ANISOTROPY;
	}
	getMaterialType(e) {
		return W(this.parser, e, this.name) === null ? null : n;
	}
	extendMaterialParams(e, t) {
		let n = W(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.anisotropyStrength !== void 0 && (t.anisotropy = n.anisotropyStrength), n.anisotropyRotation !== void 0 && (t.anisotropyRotation = n.anisotropyRotation), n.anisotropyTexture !== void 0 && r.push(this.parser.assignTexture(t, "anisotropyMap", n.anisotropyTexture)), Promise.all(r);
	}
}, gi = class {
	constructor(e) {
		this.parser = e, this.name = G.KHR_TEXTURE_BASISU;
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
}, _i = class {
	constructor(e) {
		this.parser = e, this.name = G.EXT_TEXTURE_WEBP;
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
}, vi = class {
	constructor(e) {
		this.parser = e, this.name = G.EXT_TEXTURE_AVIF;
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
}, yi = class {
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
}, bi = class {
	constructor(e) {
		this.name = G.EXT_MESH_GPU_INSTANCING, this.parser = e;
	}
	createNodeMesh(e) {
		let t = this.parser.json, n = t.nodes[e];
		if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
		let r = t.meshes[n.mesh];
		for (let e of r.primitives) if (e.mode !== K.TRIANGLES && e.mode !== K.TRIANGLE_STRIP && e.mode !== K.TRIANGLE_FAN && e.mode !== void 0) return null;
		let i = n.extensions[this.name].attributes, a = [], s = {};
		for (let e in i) a.push(this.parser.getDependency("accessor", i[e]).then((t) => (s[e] = t, s[e])));
		return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((e) => {
			let t = e.pop(), n = t.isGroup ? t.children : [t], r = e[0].count, i = [];
			for (let e of n) {
				let t = new o(), n = new E(), a = new f(), c = new E(1, 1, 1), l = new ie(e.geometry, e.material, r);
				for (let e = 0; e < r; e++) s.TRANSLATION && n.fromBufferAttribute(s.TRANSLATION, e), s.ROTATION && a.fromBufferAttribute(s.ROTATION, e), s.SCALE && c.fromBufferAttribute(s.SCALE, e), l.setMatrixAt(e, t.compose(n, a, c));
				let u = null;
				for (let e in s) if (e === "_COLOR_0") {
					let t = s[e];
					l.instanceColor = new ne(t.array, t.itemSize, t.normalized);
				} else if (e !== "TRANSLATION" && e !== "ROTATION" && e !== "SCALE") {
					if (u === null) {
						let e = l.geometry;
						u = new oe(), u.name = e.name;
						for (let t in e.attributes) u.setAttribute(t, e.attributes[t]);
						for (let t in e.morphAttributes) u.morphAttributes[t] = e.morphAttributes[t];
						e.index !== null && u.setIndex(e.index), u.morphTargetsRelative = e.morphTargetsRelative;
						for (let t of e.groups) u.addGroup(t.start, t.count, t.materialIndex);
						e.boundingBox !== null && (u.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (u.boundingSphere = e.boundingSphere.clone()), u.drawRange.start = e.drawRange.start, u.drawRange.count = e.drawRange.count, u.userData = Object.assign({}, e.userData), l.geometry = u;
					}
					let t = s[e];
					u.setAttribute(e, new ne(t.array, t.itemSize, t.normalized));
				}
				m.prototype.copy.call(l, e), this.parser.assignFinalMaterial(l), i.push(l);
			}
			return t.isGroup ? (t.clear(), t.add(...i), t) : i[0];
		}));
	}
}, xi = "glTF", Si = 12, Ci = {
	JSON: 1313821514,
	BIN: 5130562
}, wi = class {
	constructor(e) {
		this.name = G.KHR_BINARY_GLTF, this.content = null, this.body = null;
		let t = new DataView(e, 0, Si), n = new TextDecoder();
		if (this.header = {
			magic: n.decode(new Uint8Array(e.slice(0, 4))),
			version: t.getUint32(4, !0),
			length: t.getUint32(8, !0)
		}, this.header.magic !== xi) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
		if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
		let r = this.header.length - Si, i = new DataView(e, Si), a = 0;
		for (; a < r;) {
			let t = i.getUint32(a, !0);
			a += 4;
			let r = i.getUint32(a, !0);
			if (a += 4, r === Ci.JSON) {
				let r = new Uint8Array(e, Si + a, t);
				this.content = n.decode(r);
			} else if (r === Ci.BIN) {
				let n = Si + a;
				this.body = e.slice(n, n + t);
			}
			a += t;
		}
		if (this.content === null) throw Error("THREE.GLTFLoader: JSON content not found.");
	}
}, Ti = class {
	constructor(e, t) {
		if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
		this.name = G.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
	}
	decodePrimitive(e, t) {
		let n = this.json, r = this.dracoLoader, i = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, s = {}, c = {};
		for (let e in a) {
			let t = Fi[e] || e.toLowerCase();
			o[t] = a[e];
		}
		for (let t in e.attributes) {
			let r = Fi[t] || t.toLowerCase();
			if (a[t] !== void 0) {
				let i = n.accessors[e.attributes[t]];
				c[r] = ji[i.componentType].name, s[r] = i.normalized === !0;
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
				}, o, c, Te, n);
			});
		});
	}
}, Ei = class {
	constructor() {
		this.name = G.KHR_TEXTURE_TRANSFORM;
	}
	extendTexture(e, t) {
		if ((t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0) return e;
		if (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), t.rotation !== void 0) {
			let t = Math.cos(e.rotation), n = Math.sin(e.rotation);
			e.matrix.set(e.repeat.x * t, e.repeat.y * n, e.offset.x, -e.repeat.x * n, e.repeat.y * t, e.offset.y, 0, 0, 1), e.matrixAutoUpdate = !1;
		}
		return e.needsUpdate = !0, e;
	}
}, Di = class {
	constructor() {
		this.name = G.KHR_MESH_QUANTIZATION;
	}
}, Oi = class extends Ae {
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
}, ki = new f(), Ai = class extends Oi {
	interpolate_(e, t, n, r) {
		let i = super.interpolate_(e, t, n, r);
		return ki.fromArray(i).normalize().toArray(i), i;
	}
}, K = {
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
}, ji = {
	5120: Int8Array,
	5121: Uint8Array,
	5122: Int16Array,
	5123: Uint16Array,
	5125: Uint32Array,
	5126: Float32Array
}, Mi = {
	9728: g,
	9729: je,
	9984: s,
	9985: pe,
	9986: _,
	9987: ue
}, Ni = {
	33071: Ne,
	33648: h,
	10497: p
}, Pi = {
	SCALAR: 1,
	VEC2: 2,
	VEC3: 3,
	VEC4: 4,
	MAT2: 4,
	MAT3: 9,
	MAT4: 16
}, Fi = {
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
}, Ii = {
	scale: "scale",
	translation: "position",
	rotation: "quaternion",
	weights: "morphTargetInfluences"
}, Li = {
	CUBICSPLINE: void 0,
	LINEAR: De,
	STEP: xe
}, Ri = {
	OPAQUE: "OPAQUE",
	MASK: "MASK",
	BLEND: "BLEND"
};
function zi(e) {
	return e.DefaultMaterial === void 0 && (e.DefaultMaterial = new ve({
		color: 16777215,
		emissive: 0,
		metalness: 1,
		roughness: 1,
		transparent: !1,
		depthTest: !0,
		side: 0
	})), e.DefaultMaterial;
}
function Bi(e, t, n) {
	for (let r in n.extensions) e[r] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = n.extensions[r]);
}
function q(e, t) {
	t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function Vi(e, t, n) {
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
function Hi(e, t) {
	if (e.updateMorphTargets(), t.weights !== void 0) for (let n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n];
	if (t.extras && Array.isArray(t.extras.targetNames)) {
		let n = t.extras.targetNames;
		if (e.morphTargetInfluences.length === n.length) {
			e.morphTargetDictionary = {};
			for (let t = 0, r = n.length; t < r; t++) e.morphTargetDictionary[n[t]] = t;
		} else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
	}
}
function Ui(e) {
	let t, n = e.extensions && e.extensions[G.KHR_DRACO_MESH_COMPRESSION];
	if (t = n ? "draco:" + n.bufferView + ":" + n.indices + ":" + Wi(n.attributes) : e.indices + ":" + Wi(e.attributes) + ":" + e.mode, e.targets !== void 0) for (let n = 0, r = e.targets.length; n < r; n++) t += ":" + Wi(e.targets[n]);
	return t;
}
function Wi(e) {
	let t = "", n = Object.keys(e).sort();
	for (let r = 0, i = n.length; r < i; r++) t += n[r] + ":" + e[n[r]] + ";";
	return t;
}
function Gi(e) {
	switch (e) {
		case Int8Array: return 1 / 127;
		case Uint8Array: return 1 / 255;
		case Int16Array: return 1 / 32767;
		case Uint16Array: return 1 / 65535;
		default: throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
	}
}
function Ki(e) {
	return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0 ? "image/webp" : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
var qi = new o(), Ji = class {
	constructor(e = {}, t = {}) {
		this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new ni(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
			refs: {},
			uses: {}
		}, this.cameraCache = {
			refs: {},
			uses: {}
		}, this.lightCache = {
			refs: {},
			uses: {}
		}, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
		let n = !1, i = -1, a = !1, o = -1;
		if (typeof navigator < "u" && navigator.userAgent !== void 0) {
			let e = navigator.userAgent;
			n = /^((?!chrome|android).)*safari/i.test(e) === !0;
			let t = e.match(/Version\/(\d+)/);
			i = n && t ? parseInt(t[1], 10) : -1, a = e.indexOf("Firefox") > -1, o = a ? e.match(/Firefox\/([0-9]+)\./)[1] : -1;
		}
		this.textureLoader = typeof createImageBitmap > "u" || n && i < 17 || a && o < 98 ? new Oe(this.options.manager) : new re(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new r(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
			return Bi(i, a, r), q(a, r), Promise.all(n._invokeAll(function(e) {
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
		if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[G.KHR_BINARY_GLTF].body);
		let r = this.options;
		return new Promise(function(e, i) {
			n.load(he.resolveURL(t.uri, r.path), e, void 0, function() {
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
	loadAccessor(t) {
		let n = this, r = this.json, i = this.json.accessors[t];
		if (i.bufferView === void 0 && i.sparse === void 0) {
			let e = Pi[i.type], t = ji[i.componentType], n = i.normalized === !0, r = new t(i.count * e);
			return Promise.resolve(new me(r, e, n));
		}
		let a = [];
		return i.bufferView === void 0 ? a.push(null) : a.push(this.getDependency("bufferView", i.bufferView)), i.sparse !== void 0 && (a.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), a.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(a).then(function(t) {
			let a = t[0], o = Pi[i.type], s = ji[i.componentType], c = s.BYTES_PER_ELEMENT, l = c * o, u = i.byteOffset || 0, d = i.bufferView === void 0 ? void 0 : r.bufferViews[i.bufferView].byteStride, f = i.normalized === !0, p, m;
			if (d && d !== l) {
				let t = Math.floor(u / d), r = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + t + ":" + i.count, l = n.cache.get(r);
				l || (p = new s(a, t * d, i.count * d / c), l = new e(p, d / c), n.cache.add(r, l)), m = new de(l, o, u % d / c, f);
			} else p = a === null ? new s(i.count * o) : new s(a, u, i.count * o), m = new me(p, o, f);
			if (i.sparse !== void 0) {
				let e = Pi.SCALAR, n = ji[i.sparse.indices.componentType], r = i.sparse.indices.byteOffset || 0, c = i.sparse.values.byteOffset || 0, l = new n(t[1], r, i.sparse.count * e), u = new s(t[2], c, i.sparse.count * o);
				a !== null && (m = new me(m.array.slice(), m.itemSize, m.normalized)), m.normalized = !1;
				for (let e = 0, t = l.length; e < t; e++) {
					let t = l[e];
					if (m.setX(t, u[e * o]), o >= 2 && m.setY(t, u[e * o + 1]), o >= 3 && m.setZ(t, u[e * o + 2]), o >= 4 && m.setW(t, u[e * o + 3]), o >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
				}
				m.normalized = f;
			}
			return m;
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
			return t.magFilter = Mi[n.magFilter] || 1006, t.minFilter = Mi[n.minFilter] || 1008, t.wrapS = Ni[n.wrapS] || 1e3, t.wrapT = Ni[n.wrapT] || 1e3, t.generateMipmaps = !t.isCompressedTexture && t.minFilter !== 1003 && t.minFilter !== 1006, r.associations.set(t, { textures: e }), t;
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
					let t = new Se(e);
					t.needsUpdate = !0, n(t);
				}), t.load(he.resolveURL(e, i.path), a, void 0, r);
			});
		}).then(function(e) {
			return c === !0 && o.revokeObjectURL(s), q(e, a), e.userData.mimeType = a.mimeType || Ki(a.uri), e;
		}).catch(function(e) {
			throw console.error("THREE.GLTFLoader: Couldn't load texture", s), e;
		});
		return this.sourceCache[e] = l, l;
	}
	assignTexture(e, t, n, r) {
		let i = this;
		return this.getDependency("texture", n.index).then(function(a) {
			if (!a) return null;
			if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), i.extensions[G.KHR_TEXTURE_TRANSFORM]) {
				let e = n.extensions === void 0 ? void 0 : n.extensions[G.KHR_TEXTURE_TRANSFORM];
				if (e) {
					let t = i.associations.get(a);
					a = i.extensions[G.KHR_TEXTURE_TRANSFORM].extendTexture(a, e), i.associations.set(a, t);
				}
			}
			return r !== void 0 && (a.colorSpace = r), e[t] = a, a;
		});
	}
	assignFinalMaterial(e) {
		let t = e.geometry, n = e.material, r = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
		if (e.isPoints) {
			let e = "PointsMaterial:" + n.uuid, t = this.cache.get(e);
			t || (t = new te(), w.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, t.sizeAttenuation = !1, this.cache.add(e, t)), n = t;
		} else if (e.isLine) {
			let e = "LineBasicMaterial:" + n.uuid, t = this.cache.get(e);
			t || (t = new ke(), w.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, this.cache.add(e, t)), n = t;
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
		return ve;
	}
	loadMaterial(e) {
		let t = this, n = this.json, r = this.extensions, i = n.materials[e], a, o = {}, s = i.extensions || {}, c = [];
		if (s[G.KHR_MATERIALS_UNLIT]) {
			let e = r[G.KHR_MATERIALS_UNLIT];
			a = e.getMaterialType(), c.push(e.extendParams(o, i, t));
		} else {
			let n = i.pbrMetallicRoughness || {};
			if (o.color = new b(1, 1, 1), o.opacity = 1, Array.isArray(n.baseColorFactor)) {
				let e = n.baseColorFactor;
				o.color.setRGB(e[0], e[1], e[2], Te), o.opacity = e[3];
			}
			n.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", n.baseColorTexture, S)), o.metalness = n.metallicFactor === void 0 ? 1 : n.metallicFactor, o.roughness = n.roughnessFactor === void 0 ? 1 : n.roughnessFactor, n.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", n.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", n.metallicRoughnessTexture))), a = this._invokeOne(function(t) {
				return t.getMaterialType && t.getMaterialType(e);
			}), c.push(Promise.all(this._invokeAll(function(t) {
				return t.extendMaterialParams && t.extendMaterialParams(e, o);
			})));
		}
		i.doubleSided === !0 && (o.side = 2);
		let l = i.alphaMode || Ri.OPAQUE;
		if (l === Ri.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, l === Ri.MASK && (o.alphaTest = i.alphaCutoff === void 0 ? .5 : i.alphaCutoff)), i.normalTexture !== void 0 && a !== x && (c.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new C(1, 1), i.normalTexture.scale !== void 0)) {
			let e = i.normalTexture.scale;
			o.normalScale.set(e, e);
		}
		if (i.occlusionTexture !== void 0 && a !== x && (c.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && a !== x) {
			let e = i.emissiveFactor;
			o.emissive = new b().setRGB(e[0], e[1], e[2], Te);
		}
		return i.emissiveTexture !== void 0 && a !== x && c.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, S)), Promise.all(c).then(function() {
			let n = new a(o);
			return i.name && (n.name = i.name), q(n, i), t.associations.set(n, { materials: e }), i.extensions && Bi(r, n, i), n;
		});
	}
	createUniqueName(e) {
		let t = c.sanitizeNodeName(e || "");
		return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
	}
	loadGeometries(e) {
		let t = this, n = this.extensions, r = this.primitiveCache;
		function i(e) {
			return n[G.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(n) {
				return Xi(n, e, t);
			});
		}
		let a = [];
		for (let n = 0, o = e.length; n < o; n++) {
			let o = e[n], s = Ui(o), c = r[s];
			if (c) a.push(c.promise);
			else {
				let e;
				e = o.extensions && o.extensions[G.KHR_DRACO_MESH_COMPRESSION] ? i(o) : Xi(new oe(), o, t), o.mode === K.TRIANGLE_STRIP ? e = e.then((e) => Qr(e, 1)) : o.mode === K.TRIANGLE_FAN && (e = e.then((e) => Qr(e, 2))), r[s] = {
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
			let t = a[e].material === void 0 ? zi(this.cache) : this.getDependency("material", a[e].material);
			o.push(t);
		}
		return o.push(t.loadGeometries(a)), Promise.all(o).then(async function(n) {
			let o = n.slice(0, n.length - 1), s = n[n.length - 1], c = [];
			for (let n = 0, l = s.length; n < l; n++) {
				let l = s[n], u = a[n], d, f = o[n];
				if (u.mode === K.TRIANGLES || u.mode === K.TRIANGLE_STRIP || u.mode === K.TRIANGLE_FAN || u.mode === void 0) {
					let e = i.isSkinnedMesh === !0, t = l.hasAttribute("skinIndex") && l.hasAttribute("skinWeight");
					e && t === !1 && console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."), d = e && t ? new v(l, f) : new Me(l, f), d.isSkinnedMesh === !0 && d.normalizeSkinWeights();
				} else if (u.mode === K.LINES) d = new ye(l, f);
				else if (u.mode === K.LINE_STRIP) d = new Ce(l, f);
				else if (u.mode === K.LINE_LOOP) d = new le(l, f);
				else if (u.mode === K.POINTS) d = new ee(l, f);
				else throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + u.mode);
				Object.keys(d.geometry.morphAttributes).length > 0 && Hi(d, i), d.name = t.createUniqueName(i.name || "mesh_" + e), q(d, i), u.extensions && Bi(r, d, u), t.assignFinalMaterial(d), c.push(d);
			}
			for (let n = 0, r = c.length; n < r; n++) t.associations.set(c[n], {
				meshes: e,
				primitives: n
			});
			if (c.length === 1) return i.extensions && Bi(r, c[0], i), c[0];
			let l = new T();
			i.extensions && Bi(r, l, i), t.associations.set(l, { meshes: e });
			for (let e = 0, t = c.length; e < t; e++) l.add(c[e]);
			return l;
		});
	}
	loadCamera(e) {
		let t, n = this.json.cameras[e], r = n[n.type];
		if (!r) {
			console.warn("THREE.GLTFLoader: Missing camera parameters.");
			return;
		}
		return n.type === "perspective" ? t = new Ie(Pe.radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2e6) : n.type === "orthographic" && (t = new y(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)), n.name && (t.name = this.createUniqueName(n.name)), q(t, n), Promise.resolve(t);
	}
	loadSkin(e) {
		let t = this.json.skins[e], n = [];
		for (let e = 0, r = t.joints.length; e < r; e++) n.push(this._loadNodeShallow(t.joints[e]));
		return t.inverseBindMatrices === void 0 ? n.push(null) : n.push(this.getDependency("accessor", t.inverseBindMatrices)), Promise.all(n).then(function(e) {
			let n = e.pop(), r = e, i = [], a = [];
			for (let e = 0, s = r.length; e < s; e++) {
				let s = r[e];
				if (s) {
					i.push(s);
					let t = new o();
					n !== null && t.fromArray(n.array, e * 16), a.push(t);
				} else console.warn("THREE.GLTFLoader: Joint \"%s\" could not be found.", t.joints[e]);
			}
			return new ae(i, a);
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
			let u = new ce(i, void 0, l);
			return q(u, r), u;
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
				e.isSkinnedMesh && e.bind(r, qi);
			});
			for (let e = 0, r = n.length; e < r; e++) t.add(n[e]);
			if (t.userData.pivot !== void 0 && n.length > 0) {
				let e = t.userData.pivot, r = n[0];
				t.pivot = new E().fromArray(e), t.position.x -= e[0], t.position.y -= e[1], t.position.z -= e[2], r.position.set(0, 0, 0), delete t.userData.pivot;
			}
			return t;
		});
	}
	_loadNodeShallow(e) {
		let t = this.json, n = this.extensions, r = this;
		if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
		let i = t.nodes[e], a = i.name ? r.createUniqueName(i.name) : "", s = [], c = r._invokeOne(function(t) {
			return t.createNodeMesh && t.createNodeMesh(e);
		});
		return c && s.push(c), i.camera !== void 0 && s.push(r.getDependency("camera", i.camera).then(function(e) {
			return r._getNodeRef(r.cameraCache, i.camera, e);
		})), r._invokeAll(function(t) {
			return t.createNodeAttachment && t.createNodeAttachment(e);
		}).forEach(function(e) {
			s.push(e);
		}), this.nodeCache[e] = Promise.all(s).then(function(t) {
			let s;
			if (s = i.isBone === !0 ? new fe() : t.length > 1 ? new T() : t.length === 1 ? t[0] : new m(), s !== t[0]) for (let e = 0, n = t.length; e < n; e++) s.add(t[e]);
			if (i.name && (s.userData.name = i.name, s.name = a), q(s, i), i.extensions && Bi(n, s, i), i.matrix !== void 0) {
				let e = new o();
				e.fromArray(i.matrix), s.applyMatrix4(e);
			} else i.translation !== void 0 && s.position.fromArray(i.translation), i.rotation !== void 0 && s.quaternion.fromArray(i.rotation), i.scale !== void 0 && s.scale.fromArray(i.scale);
			if (!r.associations.has(s)) r.associations.set(s, {});
			else if (i.mesh !== void 0 && r.meshCache.refs[i.mesh] > 1) {
				let e = r.associations.get(s);
				r.associations.set(s, { ...e });
			}
			return r.associations.get(s).nodes = e, s;
		}), this.nodeCache[e];
	}
	loadScene(e) {
		let t = this.extensions, n = this.json.scenes[e], r = this, i = new T();
		n.name && (i.name = r.createUniqueName(n.name)), q(i, n), n.extensions && Bi(t, i, n);
		let a = n.nodes || [], o = [];
		for (let e = 0, t = a.length; e < t; e++) o.push(r.getDependency("node", a[e]));
		return Promise.all(o).then(function(e) {
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				n.parent === null ? i.add(n) : i.add($r(n));
			}
			return r.associations = ((e) => {
				let t = /* @__PURE__ */ new Map();
				for (let [e, n] of r.associations) (e instanceof w || e instanceof Se) && t.set(e, n);
				return e.traverse((e) => {
					let n = r.associations.get(e);
					n != null && t.set(e, n);
				}), t;
			})(i), i;
		});
	}
	_createAnimationTracks(e, t, n, r, i) {
		let o = [], s = e.name ? e.name : e.uuid, c = [];
		function l(e) {
			e.morphTargetInfluences && c.push(e.name ? e.name : e.uuid);
		}
		Ii[i.path] === Ii.weights ? (l(e), e.isGroup && e.children.forEach(l)) : c.push(s);
		let u;
		switch (Ii[i.path]) {
			case Ii.weights:
				u = d;
				break;
			case Ii.rotation:
				u = Ee;
				break;
			case Ii.translation:
			case Ii.scale:
				u = a;
				break;
			default: switch (n.itemSize) {
				case 1:
					u = d;
					break;
				default: u = a;
			}
		}
		let f = r.interpolation === void 0 ? De : Li[r.interpolation], p = this._getArrayFromAccessor(n);
		for (let e = 0, n = c.length; e < n; e++) {
			let n = new u(c[e] + "." + Ii[i.path], t.array, p, f);
			r.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(n), o.push(n);
		}
		return o;
	}
	_getArrayFromAccessor(e) {
		let t = e.array;
		if (e.normalized) {
			let e = Gi(t.constructor), n = new Float32Array(t.length);
			for (let r = 0, i = t.length; r < i; r++) n[r] = t[r] * e;
			t = n;
		}
		return t;
	}
	_createCubicSplineTrackInterpolant(e) {
		e.createInterpolant = function(e) {
			return new (this instanceof Ee ? Ai : Oi)(this.times, this.values, this.getValueSize() / 3, e);
		}, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
	}
};
function Yi(e, n, r) {
	let i = n.attributes, a = new we();
	if (i.POSITION !== void 0) {
		let e = r.json.accessors[i.POSITION], t = e.min, n = e.max;
		if (t !== void 0 && n !== void 0) {
			if (a.set(new E(t[0], t[1], t[2]), new E(n[0], n[1], n[2])), e.normalized) {
				let t = Gi(ji[e.componentType]);
				a.min.multiplyScalar(t), a.max.multiplyScalar(t);
			}
		} else {
			console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
			return;
		}
	} else return;
	let o = n.targets;
	if (o !== void 0) {
		let e = new E(), t = new E();
		for (let n = 0, i = o.length; n < i; n++) {
			let i = o[n];
			if (i.POSITION !== void 0) {
				let n = r.json.accessors[i.POSITION], a = n.min, o = n.max;
				if (a !== void 0 && o !== void 0) {
					if (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))), t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))), t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))), n.normalized) {
						let e = Gi(ji[n.componentType]);
						t.multiplyScalar(e);
					}
					e.max(t);
				} else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
			}
		}
		a.expandByVector(e);
	}
	e.boundingBox = a;
	let s = new t();
	a.getCenter(s.center), s.radius = a.min.distanceTo(a.max) / 2, e.boundingSphere = s;
}
function Xi(e, t, n) {
	let r = t.attributes, a = [];
	function o(t, r) {
		return n.getDependency("accessor", t).then(function(t) {
			e.setAttribute(r, t);
		});
	}
	for (let t in r) {
		let n = Fi[t] || t.toLowerCase();
		n in e.attributes || a.push(o(r[t], n));
	}
	if (t.indices !== void 0 && !e.index) {
		let r = n.getDependency("accessor", t.indices).then(function(t) {
			e.setIndex(t);
		});
		a.push(r);
	}
	return i.workingColorSpace !== "srgb-linear" && "COLOR_0" in r && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${i.workingColorSpace}" not supported.`), q(e, t), Yi(e, t, n), Promise.all(a).then(function() {
		return t.targets === void 0 ? e : Vi(e, t.targets, n);
	});
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
//#region src/domain/EnvironmentLighting.ts
var $i = {
	enabled: !1,
	intensity: .2
};
function ea(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 0 && e <= 4;
}
function ta(e) {
	if (!e || typeof e != "object" || Array.isArray(e) || Object.keys(e).some((e) => !["enabled", "intensity"].includes(e)) || typeof e.enabled != "boolean" || !ea(e.intensity)) throw Error("환경광 강도는 0~4 사이의 유효한 값이어야 합니다.");
}
//#endregion
//#region src/domain/BuildSettings.ts
var na = [
	[1280, 720],
	[1920, 1080],
	[2560, 1440],
	[3840, 2160]
];
_e.VIEWPORT;
function ra(e) {
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
	].includes(e)) || t.version !== 1 || !se(t.renderQuality) || ![
		"pc",
		"tablet",
		"mobile"
	].includes(t.platform) || typeof t.showInstructions != "boolean" || typeof t.showFullscreen != "boolean" || !(t.playerStartActorId === null || typeof t.playerStartActorId == "string" && t.playerStartActorId.length > 0 && t.playerStartActorId.length <= 120)) throw Error("지원하지 않는 빌드 설정 버전 또는 값");
	let n = t.resolution;
	if (!n || !["fit", "fixed"].includes(n.mode) || !na.some(([e, t]) => e === n.width && t === n.height) || ![
		.5,
		.75,
		1
	].includes(n.scale) || Object.keys(n).some((e) => ![
		"mode",
		"width",
		"height",
		"scale"
	].includes(e))) throw Error("지원하지 않는 실행 해상도");
	if (Vr(t.textures), t.environmentLighting !== void 0 && ta(t.environmentLighting), t.textures.maps.some((e) => Hr(t.textures, e) > (e === "baseColor" ? 1024 : 512))) throw Error("베이스는 최대 1024, 나머지는 최대 512로 설정하세요.");
}
//#endregion
//#region src/domain/sceneSerialization.ts
var J = class extends Error {}, ia = class extends Error {};
function aa(e) {
	if (!Y(e)) return e;
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
		actors: t.actors.map((e) => !Y(e) || !Array.isArray(e.components) ? e : {
			...e,
			components: e.components.map((e) => !Y(e) || !Array.isArray(e.materialOverrides) ? e : {
				...e,
				materialOverrides: e.materialOverrides.map((e) => Y(e) && e.tintOverrides === void 0 ? {
					...e,
					tintOverrides: []
				} : e)
			})
		})
	};
}
function oa(e) {
	if (!Y(e)) throw new J("Scene payload must be an object.");
	if (e.schemaVersion !== 2) throw new J(`Unsupported Scene schemaVersion ${String(e.schemaVersion)}.`);
	if (e.kind !== "Scene" || e.coordinateSystem !== "RH_Y_UP_METERS_V1") throw new J("Scene kind or coordinate system is unsupported.");
	if (X(e.id, "Scene.id"), !Array.isArray(e.actors)) throw new J("Scene.actors must be an array.");
	for (let [t, n] of e.actors.entries()) {
		if (!Y(n)) throw new J(`Actor ${t} must be an object.`);
		if (X(n.id, `Actor ${t}.id`), X(n.name, `Actor ${t}.name`), X(n.classId, `Actor ${t}.classId`), X(n.rootComponentId, `Actor ${t}.rootComponentId`), !Array.isArray(n.tags) || !n.tags.every((e) => typeof e == "string")) throw new J(`Actor ${t}.tags must be strings.`);
		if (!Array.isArray(n.components)) throw new J(`Actor ${t}.components must be an array.`);
		for (let [e, r] of n.components.entries()) da(r, t, e);
	}
	if (!Y(e.authoring)) throw new J("Scene.authoring is required.");
	if (e.authoring.webEffects !== void 0 && Qi(e.authoring.webEffects), e.authoring.buildSettings !== void 0 && ra(e.authoring.buildSettings), e.authoring.levelName !== void 0 && (typeof e.authoring.levelName != "string" || !e.authoring.levelName.trim() || e.authoring.levelName.length > 120 || [...e.authoring.levelName].some((e) => e.charCodeAt(0) < 32 || e.charCodeAt(0) === 127))) throw new J("레벨 이름은 제어 문자 없이 1~120자로 입력하세요.");
	if (!Array.isArray(e.authoring.folders) || !Array.isArray(e.authoring.actorFolders)) throw new J("Scene.authoring collections must be arrays.");
	for (let t of e.authoring.folders) {
		if (!Y(t)) throw new J("Outliner folder must be an object.");
		X(t.id, "OutlinerFolder.id"), X(t.name, "OutlinerFolder.name"), fa(t.parentId, "OutlinerFolder.parentId");
	}
	for (let t of e.authoring.actorFolders) {
		if (!Y(t)) throw new J("Actor folder membership must be an object.");
		X(t.actorId, "ActorFolderMembership.actorId"), fa(t.folderId, "ActorFolderMembership.folderId");
	}
	if (e.authoring.prefabInstances !== void 0) {
		if (!Array.isArray(e.authoring.prefabInstances)) throw new J("Scene.authoring.prefabInstances must be an array.");
		for (let t of e.authoring.prefabInstances) {
			if (!Y(t)) throw new J("Prefab instance metadata must be an object.");
			if (X(t.id, "PrefabInstance.id"), X(t.prefabAssetId, "PrefabInstance.prefabAssetId"), X(t.sourceRevisionId, "PrefabInstance.sourceRevisionId"), !Y(t.localActorIds) || !Y(t.localComponentIds) || !Array.isArray(t.overrides)) throw new J("Prefab instance mappings or overrides are invalid.");
			if (t.inheritanceVersion !== void 0 && t.inheritanceVersion !== 1) throw new J("Unsupported Prefab inheritance version.");
			if (t.removedComponentLocalIds !== void 0 && (!Array.isArray(t.removedComponentLocalIds) || t.removedComponentLocalIds.some((e) => typeof e != "string"))) throw new J("Invalid Prefab removed Component IDs.");
		}
	}
	e.authoring.ueImport !== void 0 && sa(e.authoring.ueImport);
}
function sa(e) {
	if (!Y(e)) throw new J("Scene.authoring.ueImport must be an object.");
	for (let t of [
		"packageId",
		"sourceProjectId",
		"sourceSnapshotId",
		"sourceLevelKey"
	]) X(e[t], `ueImport.${t}`);
	for (let t of [
		"sourceActorIds",
		"sourceComponentIds",
		"sourceFolderIds"
	]) if (!Y(e[t]) || !Object.values(e[t]).every((e) => typeof e == "string")) throw new J(`ueImport.${t} must map source IDs to web IDs.`);
	if (!Array.isArray(e.components)) throw new J("ueImport.components must be an array.");
	for (let t of e.components) {
		if (!Y(t)) throw new J("ueImport component must be an object.");
		for (let e of [
			"sourceId",
			"webId",
			"sourceKind",
			"sourceKey"
		]) X(t[e], `ueImport.component.${e}`);
		if (typeof t.visible != "boolean" || typeof t.hiddenInGame != "boolean" || !Array.isArray(t.instances)) throw new J("ueImport component visibility or instances are invalid.");
		for (let e of t.instances) {
			if (!Y(e)) throw new J("ueImport instance must be an object.");
			if (X(e.sourceId, "ueImport.instance.sourceId"), !Number.isInteger(e.sourceIndex) || !Y(e.transform) || !Array.isArray(e.worldMatrix) || e.worldMatrix.length !== 16) throw new J("ueImport instance fields are invalid.");
		}
	}
}
function ca(e) {
	try {
		sn(e), kn(e);
	} catch (e) {
		throw new ia(e instanceof Error ? e.message : "Invalid Scene relationships.");
	}
}
function la(e) {
	let t = aa(e);
	return oa(t), ca(t), t;
}
function ua(e) {
	let t = structuredClone(e);
	return oa(t), ca(t), t;
}
function da(e, t, n) {
	if (!Y(e)) throw new J(`Component ${t}:${n} must be an object.`);
	if (X(e.id, "Component.id"), X(e.ownerActorId, "Component.ownerActorId"), e.type === "TestData" || e.type === "TestScript") {
		if (e.typeVersion !== 1 && (e.type !== "TestScript" || e.typeVersion !== 2 && e.typeVersion !== 3) || [
			"localTransform",
			"parentComponentId",
			"attachmentParent"
		].some((t) => t in e) || k.validate(e.type, e.typeVersion, e, "load").length) throw new J(`Invalid non-spatial ${e.type} Component.`);
		e.type === "TestScript" && xt(e);
		return;
	}
	if (fa(e.parentComponentId, "Component.parentComponentId"), e.attachmentParent !== null) {
		if (!Y(e.attachmentParent)) throw new J("Component.attachmentParent is invalid.");
		X(e.attachmentParent.actorId, "attachmentParent.actorId"), X(e.attachmentParent.componentId, "attachmentParent.componentId");
		let t = e.attachmentParent.kind;
		if (t !== void 0 && t !== "component" && t !== "bone" && t !== "socket") throw new J("attachmentParent.kind is invalid.");
		if ((t === "bone" || t === "socket") && (X(e.attachmentParent.skeletonAssetId, "attachmentParent.skeletonAssetId"), X(e.attachmentParent.sourceSkeletonAssetId, "attachmentParent.sourceSkeletonAssetId"), X(e.attachmentParent.bindingSignature, "attachmentParent.bindingSignature"), X(e.attachmentParent.targetId, "attachmentParent.targetId"), !/^[0-9a-f]{64}$/u.test(e.attachmentParent.bindingSignature))) throw new J("attachmentParent.bindingSignature must be a lowercase SHA-256 value.");
	}
	if (typeof e.type != "string" || typeof e.typeVersion != "number" || !k.has(e.type, e.typeVersion)) throw new J(`Unsupported Component type/version ${String(e.type)}@${String(e.typeVersion)}; payload was not modified.`);
	if ((e.type === "PrimitiveCube" || e.type === "StaticMesh") && e.shape !== void 0 && (typeof e.shape != "string" || !Re(e.shape))) throw new J("Unsupported primitive shape; payload was not modified.");
	let r = k.validate(e.type, e.typeVersion, e, "load");
	if (r.length > 0) throw new J(`Invalid Component fields: ${r.map((e) => e.fieldId).join(", ")}.`);
}
function Y(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function X(e, t) {
	if (typeof e != "string" || e.length === 0) throw new J(`${t} must be a non-empty string.`);
}
function fa(e, t) {
	if (e !== null && typeof e != "string") throw new J(`${t} must be a string or null.`);
}
Uint32Array.from({ length: 256 }, (e, t) => {
	for (let e = 0; e < 8; e++) t = t >>> 1 ^ (t & 1 ? 3988292384 : 0);
	return t >>> 0;
});
//#endregion
//#region src/storage/ProjectPackage.ts
var pa = class extends Error {
	code;
	affectedIds;
	materialOutcome;
	constructor(e, t, n = [], r = null) {
		super(t), this.code = e, this.affectedIds = n, this.materialOutcome = r, this.name = "UEPackageImportError";
	}
};
function ma(e, t) {
	let n = _a(t.bones, "skeleton.bones"), r = /* @__PURE__ */ new Map(), i = n.map((t) => {
		let n = va(t.id, "bone.id");
		return r.has(n) && Z("identity", `Skeleton ${e} has duplicate bone ${n}.`, [e, n]), r.set(n, t), {
			id: n,
			name: va(t.name, "bone.name"),
			parentId: t.parentId === null ? null : va(t.parentId, "bone.parentId"),
			restLocal: ha(t.restLocal, "bone.restLocal")
		};
	});
	for (let t of i) t.parentId !== null && !r.has(t.parentId) && Z("identity", `Skeleton ${e} bone ${t.id} has an unknown parent.`, [e, t.id]);
	for (let t of i) {
		let n = /* @__PURE__ */ new Set(), r = t;
		for (; r?.parentId;) n.has(r.id) && Z("identity", `Skeleton ${e} bone tree contains a cycle.`, [e, t.id]), n.add(r.id), r = i.find((e) => e.id === r.parentId);
	}
	let a = /* @__PURE__ */ new Set();
	return {
		sourceAssetId: e,
		bones: i,
		sockets: _a(t.sockets, "skeleton.sockets").map((t) => {
			let n = va(t.id, "socket.id"), i = va(t.boneId, "socket.boneId");
			return a.has(n) && Z("identity", `Skeleton ${e} has duplicate socket ${n}.`, [e, n]), a.add(n), r.has(i) || Z("identity", `Skeleton ${e} socket ${n} references an unknown bone.`, [
				e,
				n,
				i
			]), {
				id: n,
				name: va(t.name, "socket.name"),
				boneId: i,
				transform: ha(t.transform, "socket.transform")
			};
		})
	};
}
function ha(e, t) {
	let n = ga(e, t);
	return {
		position: ya(n.position, 3, `${t}.position`),
		rotation: ya(n.rotation, 4, `${t}.rotation`),
		scale: ya(n.scale, 3, `${t}.scale`)
	};
}
function ga(e, t) {
	return (typeof e != "object" || !e || Array.isArray(e)) && Z("json", `${t} must be an object.`), e;
}
function _a(e, t) {
	return Array.isArray(e) || Z("json", `${t} must be an array.`), e.map((e, n) => ga(e, `${t}[${n}]`));
}
function va(e, t) {
	return (typeof e != "string" || !e) && Z("json", `${t} must be a non-empty string.`), e;
}
function ya(e, t, n) {
	return (!Array.isArray(e) || e.length !== t || !e.every(Number.isFinite)) && Z("json", `${n} must contain ${t} finite numbers.`), e;
}
function Z(e, t, n = [], r = null) {
	throw new pa(e, t, n, r);
}
//#endregion
//#region src/ue-import/staticPreviewMath.ts
var ba = new o().set(0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1), xa = 1024 ** 2, Sa = 1024 ** 3, Ca = 8 * Sa, wa, Ta = 0, Ea;
async function Da() {
	let e = typeof window > "u" ? void 0 : window.desktopAPI?.memoryCapacity;
	if (!e) {
		wa = void 0, Ta = 0;
		return;
	}
	if (Ea) return Ea;
	if (!(Date.now() - Ta < 1e3)) return Ea = (async () => {
		try {
			let t = await e();
			if (!Number.isSafeInteger(t.total) || !Number.isSafeInteger(t.available) || t.total <= 0 || t.available < 0 || t.available > t.total) throw Error("Invalid memory capacity");
			wa = t, Ta = Date.now();
		} catch {
			wa = void 0;
		}
	})().finally(() => {
		Ea = void 0;
	}), Ea;
}
function Oa(e = 0, t = wa) {
	if (!Number.isFinite(e) || e < 0) throw Error("유효하지 않은 메모리 사용량입니다.");
	if (t) return Math.floor(Math.min(Ca, t.total * .4, e + t.available * .6));
	let n = globalThis.navigator?.deviceMemory;
	return Math.floor(Math.min(Ca, Number.isFinite(n) && n > 0 ? n * Sa * .5 : 2 * Sa));
}
function ka(e, t = 0, n = "표시") {
	let r = Oa(t);
	if (!Number.isFinite(e) || e < 0 || e > Ca || e > r) throw Error(`${n} 자동 메모리 예산: 필요 ${(e / xa).toFixed(1)} MiB / 현재 자동 한도 ${(r / xa).toFixed(0)} MiB. 다른 작업을 닫거나 텍스처 크기를 줄인 뒤 다시 시도하세요. 기존 데이터는 유지됩니다.`);
}
function Aa(e) {
	if (!Number.isFinite(e) || e < 0 || e > Ca) throw Error("유효하지 않은 메모리 예산입니다.");
	return Math.min(Ca, Math.max(128 * xa, Math.ceil(e * 1.1 / (64 * xa)) * 64 * xa));
}
function ja(e, t = 0) {
	return ka(e, t, "텍스처"), [
		128,
		256,
		512,
		1024,
		2048,
		4096,
		8192
	].map((e) => e * xa).find((t) => t >= e);
}
function Ma(e, t, n = 0) {
	return typeof e == "function" ? e(t, n) : e;
}
var Na = /* @__PURE__ */ new Map(), Pa = class {
	closed = !1;
	update(e, t, n, r = !1) {
		if (this.closed) return;
		if (![e, t].every((e) => Number.isFinite(e) && e >= 0)) throw Error("유효하지 않은 메모리 예약입니다.");
		r && (e = Math.max(e, Na.get(this)?.peak ?? 0));
		let i = [...Na].filter(([e]) => e !== this).map(([, e]) => e);
		n && ka(e + i.reduce((e, t) => e + t.peak, 0), t + i.reduce((e, t) => e + t.resident, 0)), Na.set(this, {
			peak: e,
			resident: t
		});
	}
	dispose() {
		this.closed = !0, Na.delete(this);
	}
}, Fa = 134217728, Ia = [
	128,
	256,
	512,
	1024,
	2048,
	4096,
	8192
].map((e) => e * 1048576);
function La(e) {
	if (e !== 0 && !Ia.includes(e)) throw Error("지원하지 않는 텍스처 표시 예산입니다.");
}
var Ra = /* @__PURE__ */ new Set([
	"KHR_materials_emissive_strength",
	"KHR_materials_specular",
	"KHR_materials_unlit",
	"KHR_texture_transform",
	"KHR_materials_ior"
]), za = /* @__PURE__ */ new WeakMap();
function Q(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Invalid appearance object");
	return e;
}
function Ba(e) {
	if (e === void 0) return [];
	if (!Array.isArray(e)) throw Error("Invalid appearance array");
	return e;
}
function Va(e, t) {
	if (!Number.isSafeInteger(e) || e < 0 || e >= t) throw Error("Invalid appearance index");
	return e;
}
function Ha(e) {
	if (!e || typeof e != "object") return;
	if (Array.isArray(e)) {
		e.forEach(Ha);
		return;
	}
	let t = Q(e);
	if (t.extensions) {
		for (let e of Object.keys(Q(t.extensions))) if (!Ra.has(e)) throw Error(`Unsupported preview appearance extension: ${e}`);
	}
	Object.entries(t).filter(([e]) => e !== "extras").forEach(([, e]) => Ha(e));
}
function Ua(e) {
	if (kr(e)) {
		let t = [], n = [];
		for (let r of Mr(e).payload.levels) {
			let e = Ua(r), i = t.length;
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
	Yn(e);
	let t = new DataView(e.buffer, e.byteOffset, e.byteLength), n = t.getUint32(12, !0), r = Q(JSON.parse(new TextDecoder().decode(e.subarray(20, 20 + n))));
	Ha(r);
	let i = /* @__PURE__ */ new Uint8Array();
	for (let r = 20 + n; r < e.length;) {
		let n = t.getUint32(r, !0);
		t.getUint32(r + 4, !0) === 5130562 && (i = e.subarray(r + 8, r + 8 + n)), r += 8 + n;
	}
	let a = Ba(r.bufferViews), o = Ba(r.images), s = Ba(r.textures), c = o.map((e) => {
		let t = Q(e);
		if ("uri" in t || typeof t.mimeType != "string") throw Error("Only embedded preview images are supported");
		let n = Q(a[Va(t.bufferView, a.length)]), r = Number(n.byteOffset ?? 0), o = Number(n.byteLength);
		return Xn(i.subarray(r, r + o), t.mimeType);
	}), l = Ba(r.materials), u = l.map((e) => {
		let t = Q(e), n = t.pbrMetallicRoughness ? Q(t.pbrMetallicRoughness) : {}, r = t.extensions ? Q(t.extensions) : {}, i = r.KHR_materials_specular ? Q(r.KHR_materials_specular) : {};
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
			let n = Q(e), r = Q(s[Va(n.index, s.length)]);
			if (r.extensions) throw Error("Texture source extensions are not supported in this preview");
			let i = Va(r.source, o.length), a = n.extensions ? Q(n.extensions) : {}, c = (a.KHR_texture_transform ? Q(a.KHR_texture_transform) : {}).texCoord ?? n.texCoord ?? 0;
			if (!Number.isSafeInteger(c) || c < 0 || c > 3) throw Error("Unsupported texture UV channel");
			return {
				source: i,
				texCoord: c,
				kind: t
			};
		});
	});
	for (let e of Ba(r.meshes)) for (let t of Ba(Q(e).primitives)) {
		let e = Q(t);
		if (e.material === void 0) continue;
		let n = Q(e.attributes);
		for (let t of u[Va(e.material, l.length)]) {
			let e = n[`TEXCOORD_${t.texCoord}`];
			if (Q(Ba(r.accessors)[Va(e, Ba(r.accessors).length)]).type !== "VEC2") throw Error(`Missing valid UV${t.texCoord} for texture`);
		}
	}
	return {
		dimensions: c,
		uses: u.flat()
	};
}
function Wa(e, t) {
	t && Vr(t);
	let n = e.uses.filter((e) => e.required || !t || t.maps.includes(e.kind)), r = new Set(n.map((e) => e.source)), i = e.dimensions.map((e, r) => {
		let i = t ? Math.min(...n.filter((e) => e.source === r).map((e) => Hr(t, e.kind))) : Infinity, a = Math.min(1, i / Math.max(e.width, e.height));
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
function Ga(e) {
	return Wa(Ua(e));
}
function Ka(e, t = []) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = new Set(t);
	e.flatMap((e) => [e, ...za.get(e) ?? []]).forEach((e) => e.traverse((e) => {
		e instanceof Me && (r.add(e.geometry), (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
			n.add(e), Object.values(e).forEach((e) => {
				e instanceof Se && i.add(e);
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
async function qa(e, t = Fa, n = !0) {
	La(t);
	let r = Ga(e);
	if (t === 0 && (await Da(), t = ja(r.reservedBytes)), r.reservedBytes > t) throw Error("Preview texture budget exceeded");
	if (kr(e)) {
		let { payload: r } = Mr(e), i = new T();
		i.userData.staticMeshLod = {
			distanceMeters: r.distanceMeters,
			hysteresis: r.hysteresis
		};
		try {
			for (let e of r.levels) i.add(await qa(e, t, n));
			return i.children[1].visible = !1, i;
		} catch (e) {
			throw Ka([i]), e;
		}
	}
	let i = [], a = [], o = [], s = !1, c = new ti();
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
			if (!(e instanceof Me)) return;
			let n = t.parser.associations.get(e);
			n?.meshes !== void 0 && n.primitives !== void 0 && (e.userData.materialSlotId = `mesh:${n.meshes}/primitive:${n.primitives}`);
		});
		let r = new T();
		return r.matrixAutoUpdate = !1, n && r.matrix.copy(ba), r.add(t.scene), r.updateMatrixWorld(!0), za.set(r, [...t.scenes.filter((e) => e !== t.scene), ...i]), r;
	} catch (e) {
		throw await Promise.allSettled(o), Ka(i, a), e;
	}
}
//#endregion
//#region src/ue-import/CandidateAppearanceReview.ts
var Ja = (e) => e.trim().normalize("NFC").toLowerCase();
function Ya(e, t) {
	let n = e.trim();
	if (!n) throw Error("이름을 입력하세요.");
	let r = new Set(Array.from(t, Ja));
	if (!r.has(Ja(n))) return n;
	let i = /^(.*)_(\d+)$/u.exec(n), a = i?.[1] || n, o = i ? BigInt(i[2]) + 1n : 1n;
	for (; r.has(Ja(`${a}_${o}`));) o++;
	return `${a}_${o}`;
}
//#endregion
//#region src/prefab/PrefabDocument.ts
function Xa(e) {
	return e.type === "PrimitiveCube" ? {
		...e,
		type: "StaticMesh",
		shape: e.shape ?? "Cube",
		meshAsset: null,
		materialOverrides: []
	} : e;
}
function Za(e) {
	return {
		...e,
		actors: e.actors.map((e) => ({
			...e,
			components: e.components.map(Xa)
		}))
	};
}
function Qa(e) {
	if (!e || typeof e != "object" || !Array.isArray(e.actors) || !Array.isArray(e.rootActorLocalIds) || !e.rootActorLocalIds.length) throw Error("Invalid Prefab template/root metadata.");
	if (oa({
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
		if (Ft(r), t.has(r.id)) throw Error(`Duplicate Prefab Actor local ID ${r.id}.`);
		t.add(r.id);
		for (let e of r.components) {
			if (n.has(e.id)) throw Error(`Duplicate Prefab Component local ID ${e.id}.`);
			n.add(e.id);
		}
		if (!r.components.some(({ id: e }) => e === r.rootComponentId)) throw Error(`Prefab Actor ${r.id} has no root Component.`);
	}
	if (sn({
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
	for (let r of e.actors) for (let e of r.components) if (D(e) && e.attachmentParent && (!t.has(e.attachmentParent.actorId) || !n.has(e.attachmentParent.componentId))) throw Error("Prefab attachment must stay inside its template.");
}
function $a(e, t, n, r) {
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
					...Pt(structuredClone(a), new Map(Object.entries(n))),
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
					...D(a) ? {
						parentComponentId: a.parentComponentId ? n[a.parentComponentId] ?? null : null,
						attachmentParent: a.attachmentParent ? {
							...a.attachmentParent,
							actorId: t[a.attachmentParent.actorId],
							componentId: n[a.attachmentParent.componentId]
						} : null
					} : {}
				};
				for (let e of r.filter(({ localComponentId: e }) => e === a.id)) {
					let t = Nt(s).fields.find(({ fieldId: t }) => t === e.fieldId);
					t && (s = to(structuredClone(s), t.path, eo(s, t.fieldId, e.value, n)));
				}
				return s;
			})
		};
	});
}
function eo(e, t, n, r) {
	if (e.type !== "TestScript" || Nt(e).fields.find((e) => e.fieldId === t)?.referenceKind !== "scene-object" || n === null) return n;
	if (typeof n != "string" || !r[n]) throw Error("TestScript Prefab target must be a template Component ID.");
	return r[n];
}
function to(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) r = r[e];
	return r[t.at(-1)] = structuredClone(n), e;
}
//#endregion
//#region src/prefab/PrefabComponentOrigins.ts
function no(e) {
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
var ro = (e) => e.type === "TwinMetadata" ? [] : Nt(e).fields.filter((e) => e.editableContexts.includes("details") && !e.fieldId.startsWith("transform.")), io = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function ao(e, t) {
	return t.reduce((e, t) => e && typeof e == "object" ? e[t] : void 0, e);
}
function oo(e, t, n) {
	let r = structuredClone(e), i = r;
	for (let e of t.slice(0, -1)) (!i[e] || typeof i[e] != "object") && (i[e] = {}), i = i[e];
	return n === void 0 ? delete i[t.at(-1)] : i[t.at(-1)] = structuredClone(n), r;
}
var so = (e, t) => JSON.stringify([e, t]);
function co(e, t, n) {
	return t === "scene-object" && typeof e == "string" ? Object.keys(n).find((t) => n[t] === e) ?? e : structuredClone(e);
}
function lo(e, t) {
	if (!io(e.rootActorLocalIds, t.rootActorLocalIds) || !io(e.actors.map((e) => e.id).sort(), t.actors.map((e) => e.id).sort())) throw Error("상속 프리팹의 액터 추가·삭제 또는 루트 변경은 지원하지 않습니다. 새 프리팹으로 저장하세요.");
	for (let n of e.actors) {
		let e = t.actors.find((e) => e.id === n.id);
		if (n.rootComponentId !== e.rootComponentId) throw Error("상속 프리팹의 루트 Component 변경은 지원하지 않습니다.");
		for (let t of n.components) {
			let n = e.components.find((e) => e.id === t.id);
			if (!n || n.type !== Xa(t).type && n.type !== t.type || n.typeVersion !== t.typeVersion) throw Error("상속 중인 Component 삭제·타입 변경은 지원하지 않습니다. 새 프리팹으로 저장하세요.");
			for (let e of [
				"parentComponentId",
				"attachmentParent",
				"scriptPackage"
			]) if (!io(t[e], n[e])) throw Error("상속 중인 Component 계층·Script 버전 변경은 지원하지 않습니다. 새 프리팹으로 저장하세요.");
		}
	}
}
var uo = class {
	catalog;
	addedIds;
	constructor(e, t = /* @__PURE__ */ new Map()) {
		this.catalog = e, this.addedIds = t;
	}
	source(e, t) {
		let n = this.catalog.assets.find((t) => t.id === e && t.kind === "Prefab"), r = this.catalog.revisions.find((r) => r.assetId === e && r.id === (t ?? n?.currentRevisionId));
		if (!n || !r) throw Error("프리팹 원본 또는 기준 버전을 찾을 수 없습니다: " + e);
		let i = r.metadata.prefab;
		return Qa(i), {
			prefab: Za(i),
			revisionId: r.id,
			origins: no(r.metadata)
		};
	}
	resolve(e) {
		let t = e.actors, n = e.authoring.prefabInstances?.map((n) => {
			let r = this.source(n.prefabAssetId, n.sourceRevisionId), i = this.source(n.prefabAssetId);
			lo(r.prefab, i.prefab);
			let a = { ...n.localComponentIds }, o = /* @__PURE__ */ new Map();
			for (let r of i.origins) {
				if (r.documentId !== e.id || r.instanceId !== n.id || a[r.localComponentId]) continue;
				let s = i.prefab.actors.find((e) => e.components.some((e) => e.id === r.localComponentId)), c = t.find((e) => e.components.some((e) => e.id === r.componentId));
				if (!s || Object.values(a).includes(r.componentId) || c && c.id !== n.localActorIds[s.id] || t.some((e) => e.id === r.componentId)) throw Error("원본에 반영한 Component의 인스턴스 연결이 충돌합니다.");
				a[r.localComponentId] = r.componentId, o.set(r.localComponentId, r);
			}
			for (let e of i.prefab.actors) for (let t of e.components) if (!a[t.id]) {
				let e = so(n.id, t.id);
				this.addedIds.has(e) || this.addedIds.set(e, crypto.randomUUID()), a[t.id] = this.addedIds.get(e);
			}
			let s = $a(i.prefab, n.localActorIds, a, []), c = $a(r.prefab, n.localActorIds, n.localComponentIds, []), l = /* @__PURE__ */ new Map();
			for (let [e, t] of o) {
				let r = $a(this.source(n.prefabAssetId, t.revisionId).prefab, n.localActorIds, a, []).flatMap((e) => e.components).find((e) => e.id === t.componentId);
				if (!r) throw Error("원본에 반영한 Component의 기준 버전이 없습니다.");
				l.set(e, r);
			}
			let u = new Map(n.overrides.filter((e) => !e.fieldId.startsWith("transform.")).map((e) => {
				let t = s.flatMap((e) => e.components).find((t) => t.id === a[e.localComponentId]), n = t && ro(t).find((t) => t.fieldId === e.fieldId), r = n?.referenceKind === "scene-object" ? {
					...e,
					value: co(e.value, n.referenceKind, a)
				} : e;
				return [so(e.localComponentId, e.fieldId), r];
			})), d = new Set(n.removedComponentLocalIds ?? []);
			return t = t.map((e) => {
				let t = s.find((t) => t.id === e.id);
				if (!t) return e;
				let r = c.find((t) => t.id === e.id);
				for (let [i, a] of Object.entries(n.localComponentIds)) r?.components.some((e) => e.id === a) && !e.components.some((e) => e.id === a) && t.components.some((e) => e.id === a) && d.add(i);
				let i = (e) => Object.keys(a).find((t) => a[t] === e), o = e.components.map((e) => {
					let o = t.components.some((t) => t.id === e.id) ? Xa(e) : e, s = t.components.find((e) => e.id === o.id);
					if (!s) return o;
					if (o.type !== s.type || o.typeVersion !== s.typeVersion || o.type === "TestScript" && s.type === "TestScript" && !io(o.scriptPackage, s.scriptPackage)) throw Error("인스턴스 Component 타입·Script 버전이 원본과 다릅니다: " + o.id);
					let c = o, d = i(o.id);
					for (let e of ro(s)) {
						let t = so(d, e.fieldId), i = r?.components.find((e) => e.id === o.id);
						n.inheritanceVersion !== 1 && i && !io(ao(o, e.path), ao(i, e.path)) && u.set(t, {
							localComponentId: d,
							fieldId: e.fieldId,
							value: co(ao(o, e.path), e.referenceKind, a)
						});
						let f = l.get(d);
						!u.has(t) && f && !io(ao(o, e.path), ao(f, e.path)) && u.set(t, {
							localComponentId: d,
							fieldId: e.fieldId,
							value: co(ao(o, e.path), e.referenceKind, a)
						}), u.has(t) || (c = oo(c, e.path, ao(s, e.path)));
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
		return ca(r), io(r, e) ? e : r;
	}
	reset(e, t, n) {
		let r = e.authoring.prefabInstances?.find((e) => Object.values(e.localComponentIds).includes(t)), i = e.actors.flatMap((e) => e.components).find((e) => e.id === t);
		if (!r || !i || !ro(i).some((e) => e.fieldId === n)) return null;
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
//#endregion
//#region src/assets/ContentDeletion.ts
function fo(e) {
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
function po(e, t) {
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
function mo(e, t, n) {
	let r = po(e, t.folderId), i = (e) => [...e].sort((e, t) => e.id.localeCompare(t.id));
	if (JSON.stringify([i(r.folders), i(r.assets)]) !== JSON.stringify([i(t.folders), i(t.assets)])) throw Error("확인 이후 폴더 내용이 변경되었습니다. 삭제를 취소하고 목록을 다시 확인하세요.");
	let a = new Set(r.assets.map((e) => e.id));
	for (let t of r.assets) {
		if (fo(t)) throw Error(t.name + ": Unreal 원본 에셋은 가져오기·새로고침 복구를 위해 보존하므로 폴더를 삭제할 수 없습니다.");
		let r = [...n.filter((e) => e.assetId === t.id).flatMap((e) => e.references), ...e.assets.filter((e) => !a.has(e.id)).flatMap((e) => e.dependencies.flatMap((n, r) => n.assetId === t.id ? [{
			ownerType: "Asset",
			ownerId: e.id,
			path: "dependencies[" + r + "]"
		}] : []))];
		if (r.length) throw new at(t.id, r);
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
var ho = class extends Error {}, $ = class extends Error {}, go = class extends Error {};
function _o(e, t, n, r) {
	if (r && e.name !== r.expectedName) throw new $("에셋 이름이 다른 작업에서 변경되었습니다.");
	let i = r?.restoreName ?? e.name, a = Ya(i, n.filter((n) => n.id !== e.id && n.folderId === t).map((e) => e.name));
	if (r?.restoreName !== void 0 && a !== i) throw new $("복원할 이름을 다른 에셋이 사용하고 있습니다.");
	return {
		...e,
		folderId: t,
		name: a
	};
}
function vo(e) {
	let t = e.trim();
	if (!t || t === "." || t === ".." || /[/\\]/u.test(t) || [...t].some((e) => e.charCodeAt(0) < 32)) throw new $("올바른 폴더 이름을 입력하세요.");
	return t;
}
var yo = class {
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
				if (bo(e), JSON.stringify(e.assets) !== JSON.stringify([...this.assets.values()]) || JSON.stringify(e.revisions) !== JSON.stringify([...this.revisions.values()]) || JSON.stringify(e.folders) !== JSON.stringify([...this.folders.values()]) || e.blobs.length !== this.deferredSizes.length || this.deferredSizes.some((t) => !e.blobs.some((e) => e.key === t.key && e.bytes.byteLength === t.byteLength))) throw Error("Deferred registry revision mismatch");
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
		let t = ct(e), n = {
			...t,
			asset: {
				...t.asset,
				name: Ya(t.asset.name, [...this.assets.values()].filter((e) => e.folderId === t.asset.folderId).map((e) => e.name))
			}
		};
		if (this.assets.has(n.asset.id) || this.revisions.has(n.revision.id)) throw new ho("Asset or revision UUID already exists.");
		if (n.asset.folderId !== null && !this.folders.has(n.asset.folderId)) throw new $("에셋을 넣을 폴더가 없습니다. 폴더를 다시 선택하세요.");
		let r = new Map(this.assets), i = new Map(this.revisions), a = new Map(this.blobs);
		return a.set(n.blob.key, n.blob), this.failIfInjected("after-blob"), i.set(n.revision.id, n.revision), this.failIfInjected("after-revision"), r.set(n.asset.id, n.asset), this.assets = r, this.revisions = i, this.blobs = a, structuredClone(n.asset);
	}
	async commitRevision(e, t, n, r, i) {
		let a = this.requireAsset(e);
		if (i !== void 0 && a.currentRevisionId !== i) throw new ho("다른 창에서 에셋이 변경되었습니다. 다시 불러온 뒤 편집하세요.");
		if (t.assetId !== e || this.revisions.has(t.id)) throw new ho("Revision identity is invalid or already exists.");
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
		let t = nt(e);
		this.hasDeferredBlobs() && await this.restoreBlobs();
		let n = new Map(this.assets), r = new Map(this.revisions), i = new Map(this.blobs);
		for (let e of t) {
			let t = this.requireAsset(e.assetId);
			if (t.currentRevisionId !== e.expectedRevisionId || r.has(e.revision.id)) throw new ho("다른 창에서 에셋이 변경되었습니다. 다시 불러온 뒤 편집하세요.");
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
		if (!r || r.assetId !== e) throw new ho("Rollback revision does not belong to the asset.");
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
		if (bo(e), this.assets.size || this.revisions.size || this.blobs.size || this.folders.size) throw new go("Asset namespace must be empty before package restore.");
		this.assets = new Map(e.assets.map((e) => [e.id, structuredClone(e)])), this.revisions = new Map(e.revisions.map((e) => [e.id, structuredClone(e)])), this.blobs = new Map(e.blobs.map((e) => [e.key, {
			key: e.key,
			bytes: e.bytes.slice()
		}])), this.folders = new Map(e.folders.map((e) => [e.id, structuredClone(e)]));
	}
	async createFolder(e) {
		let t = structuredClone(e);
		if (!t.name.trim()) throw new $("Asset folder name is required.");
		if (this.folders.has(t.id)) throw new $("Asset folder UUID already exists.");
		if (t.parentId !== null && (t.parentId === t.id || !this.folders.has(t.parentId))) throw new $("Unknown or invalid parent asset folder.");
		this.folders.set(t.id, {
			...t,
			name: t.name.trim()
		});
	}
	async renameFolder(e, t, n) {
		let r = vo(t), i = this.folders.get(e);
		if (!i || n !== void 0 && i.name !== n) throw new $("폴더가 없거나 다른 작업에서 이름이 변경되었습니다.");
		this.folders.set(e, {
			...i,
			name: r
		});
	}
	async renameAsset(e, t) {
		let n = this.requireAsset(e), r = t.trim();
		if (!r) throw new ho("Asset name is required.");
		let i = {
			...n,
			name: Ya(r, [...this.assets.values()].filter((t) => t.id !== e && t.folderId === n.folderId).map((e) => e.name))
		};
		return this.assets.set(e, i), structuredClone(i);
	}
	async moveAsset(e, t, n, r) {
		let i = this.requireAsset(e);
		if (n !== void 0 && i.folderId !== n) throw new $("에셋 폴더가 다른 작업에서 변경되었습니다. 목록을 새로 확인하세요.");
		if (t !== null && !this.folders.has(t)) throw new $(`Unknown asset folder ${t}.`);
		let a = _o(i, t, [...this.assets.values()], r);
		return this.assets.set(e, a), structuredClone(a);
	}
	async deleteAsset(e, t = []) {
		this.requireAsset(e);
		let n = [...this.assets.values()].flatMap((t) => t.dependencies.filter((t) => t.assetId === e).map((e, n) => ({
			ownerType: "Asset",
			ownerId: t.id,
			path: `dependencies[${n}]`
		}))), r = [...t, ...n];
		if (r.length > 0) throw new at(e, r);
		let i = [...this.revisions.values()].filter((t) => t.assetId === e);
		i.forEach((e) => this.revisions.delete(e.id));
		let a = new Set([...this.revisions.values()].flatMap((e) => e.blobKeys));
		i.flatMap((e) => e.blobKeys).filter((e) => !a.has(e)).forEach((e) => this.blobs.delete(e)), this.assets.delete(e);
	}
	async deleteFolder(e, t) {
		let n = mo({
			assets: [...this.assets.values()],
			revisions: [...this.revisions.values()],
			folders: [...this.folders.values()]
		}, e, t);
		n.assetIds.forEach((e) => this.assets.delete(e)), n.revisionIds.forEach((e) => this.revisions.delete(e)), n.blobKeys.forEach((e) => this.blobs.delete(e)), n.folderIds.forEach((e) => this.folders.delete(e));
	}
	requireAsset(e) {
		let t = this.assets.get(e);
		if (!t) throw new it(`Unknown asset ${e}.`);
		return t;
	}
	failIfInjected(e) {
		if (this.failure === e) throw this.failure = null, new DOMException("Transaction aborted.", "AbortError");
	}
};
function bo(e) {
	let t = (e, t) => {
		if (new Set(e).size !== e.length) throw new go(`Duplicate ${t} identity.`);
	};
	t(e.assets.map((e) => e.id), "asset"), t(e.revisions.map((e) => e.id), "revision"), t(e.blobs.map((e) => e.key), "blob"), t(e.folders.map((e) => e.id), "folder");
	let n = new Map(e.revisions.map((e) => [e.id, e])), r = new Set(e.blobs.map((e) => e.key)), i = new Set(e.assets.map((e) => e.id)), a = new Set(e.folders.map((e) => e.id));
	for (let t of e.assets) {
		let e = n.get(t.currentRevisionId);
		if (!e || e.assetId !== t.id) throw new go(`Asset ${t.id} has an invalid current revision.`);
		if (t.folderId && !a.has(t.folderId)) throw new go(`Asset ${t.id} has an invalid folder.`);
		if (t.dependencies.some((e) => !i.has(e.assetId))) throw new go(`Asset ${t.id} has a missing dependency.`);
	}
	for (let t of e.revisions) if (!i.has(t.assetId) || t.blobKeys.some((e) => !r.has(e))) throw new go(`Revision ${t.id} has an invalid asset or blob reference.`);
}
//#endregion
//#region src/render/StaticBatchMaterial.ts
var xo = /* @__PURE__ */ new WeakMap();
function So(e, t) {
	xo.set(e, t);
}
function Co(e) {
	return xo.get(e);
}
//#endregion
//#region src/render/CompositionBatchMaterial.ts
var wo = /* @__PURE__ */ new WeakSet(), To = /* @__PURE__ */ new WeakSet();
function Eo(e, t = !0) {
	wo.add(e), t && To.add(e);
}
function Do(e) {
	return To.has(e);
}
function Oo(e, t, n, r = !1) {
	wo.has(t) && (Mo(e, t, n), r && So(e, JSON.stringify([
		"delivery-frozen",
		Ao.get(t),
		n
	])));
}
var ko = /* @__PURE__ */ new WeakMap(), Ao = /* @__PURE__ */ new WeakMap(), jo = 0;
function Mo(e, t, n) {
	Ao.has(t) || Ao.set(t, ++jo), ko.set(e, {
		namespace: Ao.get(t),
		document: structuredClone(n),
		hooks: [
			e.onBeforeCompile,
			e.onBeforeRender,
			e.customProgramCacheKey
		],
		sources: new Map(Object.entries(e).flatMap(([e, t]) => t instanceof Se ? [[e, t.source]] : []))
	});
}
function No(e) {
	if (e === null || typeof e == "string" || typeof e == "boolean") return e;
	if (typeof e == "number") {
		if (!Number.isFinite(e)) throw Error("non-finite state");
		return e;
	}
	if (Array.isArray(e)) return e.map(No);
	if (e && typeof e == "object") {
		if ("toArray" in e && typeof e.toArray == "function") return No(e.toArray());
		if (Object.getPrototypeOf(e) !== Object.prototype) throw Error("unknown object state");
		return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0).sort(([e], [t]) => e < t ? -1 : +(e > t)).map(([e, t]) => [e, No(t)]));
	}
	throw Error("unknown state");
}
function Po(e, t) {
	if (e.mipmaps.length || e.isRenderTargetTexture || e.onUpdate) throw Error("dynamic or custom texture");
	let n = e.image;
	return {
		source: t ? "validated-recipe" : e.source.uuid,
		version: e.source.version,
		width: n?.width ?? 0,
		height: n?.height ?? 0,
		mapping: e.mapping,
		channel: e.channel,
		wrapS: e.wrapS,
		wrapT: e.wrapT,
		magFilter: e.magFilter,
		minFilter: e.minFilter,
		anisotropy: e.anisotropy,
		format: e.format,
		internalFormat: e.internalFormat,
		type: e.type,
		offset: e.offset.toArray(),
		repeat: e.repeat.toArray(),
		center: e.center.toArray(),
		rotation: e.rotation,
		matrix: e.matrix.toArray(),
		matrixAutoUpdate: e.matrixAutoUpdate,
		generateMipmaps: e.generateMipmaps,
		premultiplyAlpha: e.premultiplyAlpha,
		flipY: e.flipY,
		unpackAlignment: e.unpackAlignment,
		colorSpace: e.colorSpace
	};
}
function Fo(e) {
	if (!(e instanceof ve) || e.type !== "MeshStandardMaterial") return { reason: "unsupported material type" };
	if (e.transparent) return { reason: "transparent sorting" };
	let t = ko.get(e), n = Object.entries(e).filter(([, e]) => e instanceof Se);
	if (t && (t.hooks.some((t, n) => t !== [
		e.onBeforeCompile,
		e.onBeforeRender,
		e.customProgramCacheKey
	][n]) || t.sources.size !== n.length || n.some(([e, n]) => t.sources.get(e) !== n.source))) return { reason: "changed captured material" };
	if (!t && (e.onBeforeCompile !== w.prototype.onBeforeCompile || e.onBeforeRender !== w.prototype.onBeforeRender || e.customProgramCacheKey !== w.prototype.customProgramCacheKey)) return { reason: "untracked shader closure" };
	try {
		let n = Object.fromEntries(Object.entries(e).filter(([e]) => ![
			"uuid",
			"name",
			"version",
			"userData",
			"_listeners",
			"onBeforeCompile",
			"onBeforeRender",
			"customProgramCacheKey"
		].includes(e)).filter(([, e]) => e !== void 0).map(([e, n]) => [e, n instanceof Se ? Po(n, !!t) : No(n)]));
		return { key: JSON.stringify(No({
			recipe: t ? {
				namespace: t.namespace,
				document: t.document
			} : null,
			state: n
		})) };
	} catch (e) {
		return { reason: String(e) };
	}
}
function Io(e) {
	return ko.has(e);
}
//#endregion
//#region src/render/TextureViewRendering.ts
function Lo(e, t) {
	let n = e.clone();
	return Ro(n, t), n;
}
function Ro(e, t) {
	e.colorSpace = t.colorSpace === "srgb" ? S : "", e.channel = t.texCoord, e.repeat.set(t.uvScale[0], t.uvScale[1]), e.offset.set(t.uvOffset[0], t.uvOffset[1]), e.wrapS = zo(t.wrapS), e.wrapT = zo(t.wrapT), e.minFilter = t.minFilter === "nearest" ? g : t.minFilter === "linear-mipmap-linear" ? ue : je, e.magFilter = t.magFilter === "nearest" ? g : je, e.flipY = t.flipY, e.generateMipmaps = t.generateMipmaps ?? !0, e.anisotropy = t.anisotropy ?? 1, e.matrixAutoUpdate = !0, e.updateMatrix(), e.userData.textureView = {
		assetId: t.texture.assetId,
		texCoord: t.texCoord,
		uvScale: [...t.uvScale],
		uvOffset: [...t.uvOffset],
		colorSpace: t.colorSpace,
		channel: t.channel,
		wrapS: t.wrapS,
		wrapT: t.wrapT,
		minFilter: t.minFilter,
		magFilter: t.magFilter,
		flipY: t.flipY,
		normalGreen: t.normalGreen,
		...t.generateMipmaps === void 0 ? {} : { generateMipmaps: t.generateMipmaps },
		...t.anisotropy === void 0 ? {} : { anisotropy: t.anisotropy },
		alphaTransfer: "linear-unmodified"
	}, e.needsUpdate = !0;
}
function zo(e) {
	return e === "mirror" ? h : e === "clamp" ? Ne : p;
}
//#endregion
//#region src/render/WebMaskPbrRendering.ts
function Bo(e, t, n) {
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
			e.uniforms[`webMaskTexture${r}`] = { value: n[r] }, e.uniforms[`webMaskUvScale${r}`] = { value: new C(...t.mask.uvScale) }, e.uniforms[`webMaskUvOffset${r}`] = { value: new C(...t.mask.uvOffset) }, e.uniforms[`webMaskTint${r}`] = { value: new E(...t.tintLinear) }, e.uniforms[`webMaskStrength${r}`] = { value: t.strength }, e.uniforms[`webMaskInvert${r}`] = { value: +!!t.invert };
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
var Vo = [
	.2126390039920807,
	.7151686549186707,
	.07219231873750687
];
function Ho(e, t, n, r = !1) {
	if (n.length !== t.masks.length || n.length !== Math.ceil(t.colors.length / 4)) throw Error("Atlas mask views must match its colors");
	e.vertexColors = !1, e.onBeforeRender = (e, n, r, i) => {
		if (!i.hasAttribute("color") && t.kindIdFallback?.useVertexMaterialIds !== !1 || !i.hasAttribute("uv")) throw Error("Atlas requires source vertex color IDs and UV0");
	}, e.customProgramCacheKey = () => `ue-painter-vertex-atlas-v1:${t.colors.length}${t.colorDetailMode === "color" ? ":rgb-detail" : ""}${t.kindIdFallback ? `:scqo:${t.kindIdFallback.useVertexMaterialIds}` : ""}${t.surfaceGated ? ":gated-surface" : ""}${t.surfaces ? ":multi-surface" : ""}`, e.onBeforeCompile = (e) => {
		for (let t of ["#include <common>", "#include <map_fragment>"]) if (!e.fragmentShader.includes(t)) throw Error("Incompatible Atlas material fragment shader");
		if (!e.vertexShader.includes("#include <uv_vertex>")) throw Error("Incompatible Atlas material vertex shader");
		let i = "varying vec2 dtweAtlasId; varying vec2 dtweAtlasUv;";
		e.vertexShader = e.vertexShader.replace("#include <common>", `#include <common>\nattribute vec3 color;\n${i}`).replace("#include <uv_vertex>", "#include <uv_vertex>\ndtweAtlasId = color.rg; dtweAtlasUv = uv;"), e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>\n${i}
      uniform vec3 dtweAtlasColors[${t.colors.length}]; uniform float dtweAtlasDetail;
      uniform float dtweAtlasRoughnessOffset; uniform float dtweAtlasMetallicReduction;
      ${t.kindIdFallback ? `uniform float dtweAtlasPreviewKind; uniform float dtweAtlasEnabled[${t.colors.length}];` : ""}
      ${t.surfaces ? `uniform float dtweKindRoughness[${t.colors.length}]; uniform float dtweKindMetallic[${t.colors.length}];` : ""}
      ${n.map((e, t) => `uniform sampler2D dtweAtlasMask${t}; uniform vec2 dtweAtlasScale${t}; uniform vec2 dtweAtlasOffset${t};`).join("\n")}`).replace("#include <map_fragment>", `
        vec3 dtwePainterBase = vec3(1.0);
        #ifdef USE_MAP
          vec4 dtwePainterSample = texture2D(map, vMapUv);
          dtwePainterBase = dtwePainterSample.rgb;
          diffuseColor.a *= dtwePainterSample.a;
        #endif
        float dtweId = floor(dtweAtlasId.r * 255.0 + 0.5) + floor(dtweAtlasId.g * 255.0 + 0.5) * 256.0;
        ${t.kindIdFallback ? `if (dtweId < 1.0 || dtweId > ${t.colors.length}.0) dtweId = dtweAtlasPreviewKind;` : ""}
        ${n.map((e, t) => `vec4 dtweMask${t} = texture2D(dtweAtlasMask${t}, dtweAtlasUv * dtweAtlasScale${t} + dtweAtlasOffset${t});`).join("\n")}
        vec3 dtweColor = vec3(0.0); float dtweWeight = 0.0;
        ${t.surfaces ? "float dtweRoughness = 0.0; float dtweMetallic = 0.0;" : ""}
        ${t.colors.map((e, n) => `float dtweW${n} = ${t.kindIdFallback?.useVertexMaterialIds === !1 ? `dtweMask${Math.floor(n / 4)}.${"rgba"[n % 4]}` : `max(1.0 - abs(dtweId - ${n + 1}.0), 0.0) * max(dtweMask${Math.floor(n / 4)}.${"rgba"[n % 4]}, 0.0010000000474974513)`}${t.kindIdFallback ? ` * dtweAtlasEnabled[${n}]` : ""};
          dtweColor += dtweW${n} * dtweAtlasColors[${n}]; dtweWeight += dtweW${n};
          ${t.surfaces ? `dtweRoughness += dtweW${n} * dtweKindRoughness[${n}]; dtweMetallic += dtweW${n} * dtweKindMetallic[${n}];` : ""}`).join("\n")}
        diffuseColor.rgb *= dtweColor / max(dtweWeight, 0.0000009999999974752427)
          * ${t.colorDetailMode === "color" ? "mix(vec3(1.0), dtwePainterBase, dtweAtlasDetail)" : `mix(1.0, dot(dtwePainterBase, vec3(${Vo.join(",")})), dtweAtlasDetail)`};
      `).replace("#include <roughnessmap_fragment>", `#include <roughnessmap_fragment>\nroughnessFactor = clamp(roughnessFactor ${t.surfaces ? "* (dtweRoughness / max(dtweWeight, 0.0000009999999974752427))" : t.surfaceGated ? "* (dtweWeight / max(dtweWeight, 0.0000009999999974752427))" : ""} + dtweAtlasRoughnessOffset, 0.0, 1.0);`).replace("#include <metalnessmap_fragment>", `#include <metalnessmap_fragment>\nmetalnessFactor = clamp(metalnessFactor ${t.surfaces ? "* (dtweMetallic / max(dtweWeight, 0.0000009999999974752427))" : t.surfaceGated ? "* (dtweWeight / max(dtweWeight, 0.0000009999999974752427))" : ""} - dtweAtlasMetallicReduction, 0.0, 1.0);`), t.surfaces && (e.uniforms.dtweKindRoughness = { value: t.surfaces.map((e) => e.roughness) }, e.uniforms.dtweKindMetallic = { value: t.surfaces.map((e) => e.metallic) }), t.kindIdFallback && (e.uniforms.dtweAtlasPreviewKind = { value: t.kindIdFallback.previewKind }, e.uniforms.dtweAtlasEnabled = { value: t.kindIdFallback.enabled.map((e) => +!!e) }), e.uniforms.dtweAtlasColors = { value: r ? new Float32Array(t.colors.flat()) : t.colors.map((e) => new E(...e)) }, e.uniforms.dtweAtlasDetail = { value: t.colorDetail }, e.uniforms.dtweAtlasRoughnessOffset = { value: t.roughnessOffset }, e.uniforms.dtweAtlasMetallicReduction = { value: t.metallicReduction }, n.forEach((n, r) => {
			e.uniforms[`dtweAtlasMask${r}`] = { value: n }, e.uniforms[`dtweAtlasScale${r}`] = { value: new C(...t.masks[r].uvScale) }, e.uniforms[`dtweAtlasOffset${r}`] = { value: new C(...t.masks[r].uvOffset) };
		});
	}, e.userData.vertexAtlas = {
		version: t.version,
		colors: t.colors.length,
		masks: n.length
	}, e.needsUpdate = !0;
}
//#endregion
//#region src/render/LeasedTextureResolver.ts
function Uo(e, t = Wo, n = 0, r) {
	let i = /* @__PURE__ */ new Map();
	return async (a, o) => {
		let s = [...i.keys()].some((e) => e.startsWith(a.assetId + "@")), c = Math.min(n || Infinity, r?.get(a.assetId) ?? Infinity), l = Number.isFinite(c) ? c : 0, u = (e) => `${a.assetId}@${e}:${l}:${o?.flipY ? "flip" : "original"}`, d = s ? e.currentRevisionId?.(a.assetId) : void 0, f = d ? u(d) : "", p = i.get(f);
		if (!p) {
			let n = s && e.snapshotCatalog ? await e.snapshotCatalog() : await rt(e, a.assetId), r = n.assets.find((e) => e.id === a.assetId && e.kind === "Texture"), c = n.revisions.find((e) => e.id === r?.currentRevisionId && e.assetId === r?.id);
			if (!r || !c || typeof c.metadata.mimeType != "string") throw Error("Incomplete texture asset");
			if (f = u(c.id), p = i.get(f), !p) {
				let a = "blobs" in n ? n : await rt(e, r.id, c.id), s = a.revisions.find((e) => e.id === c.id && e.assetId === r.id), u = a.blobs.find((e) => e.key === c.blobKeys[0]);
				if (!s || s.contentHash !== c.contentHash || s.metadata.mimeType !== c.metadata.mimeType || JSON.stringify(s.blobKeys) !== JSON.stringify(c.blobKeys) || !u) throw Error("Incomplete texture asset");
				p = i.get(f), p || (p = {
					users: 0,
					promise: t(u.bytes, c.metadata.mimeType, l, o?.flipY ?? !1)
				}, i.set(f, p));
			}
		}
		p.users++;
		let m;
		try {
			m = await p.promise;
		} catch (e) {
			throw --p.users === 0 && i.delete(f), e;
		}
		let h = m.clone(), g = !1;
		return h.addEventListener("dispose", () => {
			if (!g && (g = !0, --p.users === 0)) {
				i.delete(f), m.dispose();
				let e = m.image;
				e && typeof e == "object" && "close" in e && typeof e.close == "function" && e.close();
			}
		}), h;
	};
}
async function Wo(e, t, n, r) {
	if (typeof createImageBitmap != "function") throw Error("ImageBitmap decoding is unavailable");
	let { width: i, height: a } = Xn(e, t), o = n ? Math.min(1, n / Math.max(i, a)) : 1, s = new Fe(await createImageBitmap(new Blob([e.slice().buffer], { type: t }), {
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
var Go = class extends Error {
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
function Ko(e, t, n) {
	if (!Object.values(t).every((e) => Number.isFinite(e) && e >= 1)) throw new Go("device-limit", "장치의 WebGL 텍스처 한도를 확인할 수 없습니다.", n);
	if (e.anisotropy > t.maxAnisotropy) throw new Go("device-limit", `anisotropy ${e.anisotropy} 필요 · 장치 지원 ${t.maxAnisotropy}`, n);
	if (e.textures > t.maxTextures) throw new Go("device-limit", `재질 텍스처 ${e.textures}개 필요 · 장치 지원 ${t.maxTextures}개`, n);
	let r = Math.max(0, ...e.dimensions.flatMap((e) => [e.width, e.height]));
	if (r > t.maxTextureSize) throw new Go("device-limit", `텍스처 최대 변 ${r}px 필요 · 장치 지원 ${t.maxTextureSize}px`, n);
}
//#endregion
//#region src/render/MaterialRendering.ts
var qo = /* @__PURE__ */ new WeakMap();
function Jo(e) {
	return qo.get(e) ?? /* @__PURE__ */ new Set();
}
function Yo(e, t, n = {}) {
	let r = t ?? Uo(e, void 0, n.textureMaxSize, n.textureMapLimits), i = async (e) => {
		let n = await r(e.texture, e);
		return t ? Lo(n, e) : (Ro(n, e), n);
	};
	return async (a, o) => {
		let s = await xr(e, a), c = s.kind === "WebMaskPbrMaterial" ? {
			...s,
			maskLayers: Xo(s.maskLayers, o?.tintOverrides ?? [])
		} : s, l = n.transformDocument?.(c) ?? c, u = Zo(l), d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = !1;
		qo.set(u, d), u.addEventListener("dispose", () => {
			p || (p = !0, d.forEach((e) => e.dispose()));
		});
		try {
			if (l.kind === "WebMaskPbrMaterial") {
				for (let [e, t] of Object.entries(l.textureViews)) {
					let n = await i(t);
					d.add(n), f.add(n), e === "baseColor" && (u.map = n), e === "emissive" && (u.emissiveMap = n), e === "normal" && (u.normalMap = n, es(u, t.normalGreen === "invert")), e === "metallic" && (u.metalnessMap = n), e === "roughness" && (u.roughnessMap = n), e === "occlusion" && (u.aoMap = n);
				}
				let t = l.maskLayers, n = [];
				for (let e of t) {
					let t = await i(e.mask);
					d.add(t), f.add(t), n.push(t);
				}
				if (Bo(u, t, n), n.forEach((e) => d.delete(e)), l.vertexAtlas) {
					let t = [];
					for (let e of l.vertexAtlas.masks) {
						let n = await i(e);
						d.add(n), f.add(n), t.push(n);
					}
					Ho(u, l.vertexAtlas, t, Do(e));
				}
				u.userData.materialInstance = { tintOverrides: structuredClone(o?.tintOverrides ?? []) };
			} else for (let [e, n] of Object.entries(l.textures)) {
				let i = await r(n), a = t ? i.clone() : i;
				d.add(a), $o(a, e), e === "baseColor-srgb" && (u.map = a), e === "emissive-srgb" && (u.emissiveMap = a), e === "normal-linear" && (u.normalMap = a), e === "metallicRoughness-linear" && (u.metalnessMap = a, u.roughnessMap = a), e === "occlusion-linear" && (u.aoMap = a);
			}
			if ("displayAlphaOnly" in l && l.displayAlphaOnly === !0) {
				let e = u.onBeforeCompile, t = u.customProgramCacheKey;
				u.onBeforeCompile = (t, n) => {
					e.call(u, t, n), t.fragmentShader = t.fragmentShader.replace("#include <map_fragment>", "#ifdef USE_MAP\n diffuseColor.a *= texture2D(map, vMapUv).a;\n #endif");
				}, u.customProgramCacheKey = () => t.call(u) + "|display-alpha-only-v1";
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
				}), r = new Map([...f].map((e) => [e, e.anisotropy])), i = u.onBeforeRender, o = u.normalScale.y;
				u.onBeforeRender = (s, c, d, p, m, h) => {
					let g = Math.max(1, s.capabilities.getMaxAnisotropy());
					for (let e of f) {
						let t = Math.min(r.get(e), g);
						e.anisotropy !== t && (e.anisotropy = t, e.needsUpdate = !0);
					}
					Ko({
						anisotropy: Math.min(t, g),
						textures: f.size,
						dimensions: n
					}, {
						maxAnisotropy: g,
						maxTextures: s.capabilities.maxTextures,
						maxTextureSize: s.capabilities.maxTextureSize
					}, a.assetId);
					for (let t of e) {
						let e = t.texCoord === 0 ? "uv" : `uv${t.texCoord}`;
						if (!p.hasAttribute(e)) throw new Go("uv", `Material requires ${e}; UV0 fallback is forbidden.`, a.assetId);
					}
					l.mappingProfileId === "u01-baked-pbr-v1" && u.normalMap && (u.normalScale.y = p.hasAttribute("tangent") ? o : -o), i.call(u, s, c, d, p, m, h);
				};
			}
			return Oo(u, e, l, n.frozenInstancing), u;
		} catch (e) {
			throw u.dispose(), e;
		}
	};
}
function Xo(e, t) {
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
function Zo(e) {
	let t = e.kind === "WebMaskPbrMaterial" ? e.ior : void 0, r = new (t === void 0 ? ve : n)({
		color: new b().setRGB(e.baseColorFactor[0], e.baseColorFactor[1], e.baseColorFactor[2]),
		opacity: e.baseColorFactor[3],
		metalness: e.metallic,
		roughness: e.roughness,
		emissive: new b().setRGB(...e.emissiveFactor),
		emissiveIntensity: e.emissiveIntensity ?? 1,
		normalScale: new C(e.normalScale, e.normalScale),
		aoMapIntensity: e.occlusionStrength ?? 1,
		alphaTest: e.alphaMode === "MASK" ? e.alphaCutoff : 0,
		transparent: e.alphaMode === "BLEND",
		depthWrite: e.alphaMode !== "BLEND",
		side: e.doubleSided ? 2 : 0
	});
	return r instanceof n && t !== void 0 && (r.ior = t), r.userData.materialContract = {
		alphaMode: e.alphaMode,
		outputTransform: "renderer-srgb-once"
	}, e.kind === "WebMaskPbrMaterial" && e.unlit && (r.onBeforeCompile = (e) => {
		if (!e.fragmentShader.includes("#include <opaque_fragment>")) throw Error("Unlit material shader layout is incompatible.");
		e.fragmentShader = e.fragmentShader.replace("#include <opaque_fragment>", "outgoingLight = diffuseColor.rgb;\n#include <opaque_fragment>");
	}, r.customProgramCacheKey = () => "u01-khr-materials-unlit-v1", r.userData.unlit = !0), r;
}
function Qo(e, t) {
	e.material = t, e.userData.materialProfile = "pbr-metallic-roughness-webmask-v1";
}
function $o(e, t) {
	e.colorSpace = t === "baseColor-srgb" || t === "emissive-srgb" ? S : "", e.userData.textureSemantic = t;
}
function es(e, t) {
	let n = Math.abs(e.normalScale.y);
	e.normalScale.y = t ? -n : n, e.userData.normalConvention = t ? "directx-green-inverted" : "gltf-opengl";
}
//#endregion
//#region src/assets/StaticMeshProjection.ts
function ts(e) {
	if (e == null) return null;
	if (!Array.isArray(e) || e.length !== 16 || !e.every(Number.isFinite)) throw Error("Invalid static payloadToAsset matrix.");
	return an(e), new o().set(...e);
}
function ns(e) {
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
U.backup.archiveBytes / 1024 ** 3, U.backup.entries, new TextEncoder(), new TextDecoder("utf-8", { fatal: !0 }), Object.freeze({
	bytes: U.backup.archiveBytes,
	entries: U.backup.entries,
	entryBytes: U.import.singlePayloadBytes
});
var rs = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakSet();
function as(e) {
	let t = /* @__PURE__ */ new Set();
	return e.traverse((e) => {
		e instanceof Me && t.add(e.geometry);
	}), t;
}
function os(e) {
	return [...as(e)].some((e) => !!rs.get(e));
}
function ss(e) {
	let t = as(e), n = !1;
	return t.forEach((e) => {
		rs.set(e, (rs.get(e) ?? 0) + 1), is.delete(e);
	}), () => {
		n || (n = !0, t.forEach((e) => rs.set(e, rs.get(e) - 1)));
	};
}
function cs(e) {
	for (let t of e) for (let e of as(t)) !rs.get(e) && !is.has(e) && (e.dispose(), is.add(e));
}
//#endregion
//#region src/ue-import/PreviewTemplateResidency.ts
var ls = /* @__PURE__ */ new WeakMap();
function us(e) {
	let t = ls.get(e);
	return t || (t = {
		epoch: 0,
		leases: /* @__PURE__ */ new Map(),
		pending: /* @__PURE__ */ new Map()
	}, ls.set(e, t)), t;
}
async function ds(e, t, n, r) {
	let i = us(e);
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
					if (a !== i.epoch) throw Ka([n]), Error("Retired preview decode");
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
function fs(e, t) {
	let n = us(e);
	for (let [r, i] of e) !n.leases.get(r) && !os(i) && (t.has(r) ? (e.delete(r), Ka([i])) : cs([i]));
}
function ps(e) {
	let t = us(e);
	t.epoch++, t.pending.clear(), Ka([...e.values()]), e.clear();
}
//#endregion
//#region src/assets/StaticMeshResourceCache.ts
var ms = class {
	storage;
	loadTemplate;
	typedMaterialGeometry;
	entries = /* @__PURE__ */ new Map();
	aliases = /* @__PURE__ */ new Map();
	pendingResolutions = /* @__PURE__ */ new Map();
	constructor(e, t = hs, n = !1) {
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
		let t = await rt(this.storage, e.assetId, e.revisionPolicy === "pinned" ? e.revisionId : void 0), n = t.assets.find((t) => t.id === e.assetId);
		if (!n || n.kind !== "StaticMesh") throw Error(`Unknown StaticMesh asset ${e.assetId}.`);
		let r = e.revisionPolicy === "pinned" ? e.revisionId : n.currentRevisionId;
		if (!r) throw Error(`Asset ${e.assetId} has no resolvable revision.`);
		let i = t.revisions.find((e) => e.id === r && e.assetId === n.id);
		if (!i) throw Error(`Unknown revision ${r} for asset ${n.id}.`);
		let a = t.blobs.find((e) => e.key === i.blobKeys[0]);
		if (!a) throw Error(`Missing blob for asset ${n.id} revision ${i.id}.`);
		return ts(i.metadata.payloadToAsset), {
			metadata: i.metadata,
			assetId: n.id,
			revisionId: i.id,
			bytes: a.bytes,
			materialSlotIds: vs(i.metadata.materialSlots),
			lod: i.metadata.profile === Er
		};
	}
	async acquireEntry(e, t) {
		let n = this.entries.get(e);
		if (!n) {
			if (!t) throw Error(`Resource cache alias ${e} has no live entry.`);
			let r = this.typedMaterialGeometry === "geometry-only" || this.typedMaterialGeometry && t.metadata.candidateTypedMaterials === !0 && ns(t.metadata.materialSlots).length === t.materialSlotIds.length ? (e) => hs(e, !0) : this.loadTemplate, i = (t.lod ? this.loadLodTemplate(t.bytes, t.materialSlotIds, r) : r(t.bytes)).then((n) => {
				let r = ts(t.metadata.payloadToAsset);
				if (r) {
					if (t.lod) n.matrixAutoUpdate = !1, n.matrix.copy(r), n.matrixWorldNeedsUpdate = !0;
					else {
						let e = new T();
						e.matrixAutoUpdate = !1, e.matrix.copy(r), e.matrixWorldNeedsUpdate = !0, e.add(n), n = e;
					}
				}
				n.userData.defaultMaterialSlots = ns(t.metadata.materialSlots);
				let i = gs(n), a = this.entries.get(e);
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
			instantiate: () => ys(_s(r.object), n.materialSlotIds),
			release: () => {
				s || (s = !0, this.release(e));
			}
		};
	}
	async loadLodTemplate(e, t, n = this.loadTemplate) {
		let { payload: r } = Mr(e), i = new T();
		i.userData.staticMeshLod = {
			distanceMeters: r.distanceMeters,
			hysteresis: r.hysteresis
		};
		try {
			for (let e of r.levels) i.add(ys(await n(e), t));
			return i.children.forEach((e, t) => {
				e.visible = t === 0;
			}), i;
		} catch (e) {
			throw gs(i).dispose(), e;
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
async function hs(e, t = !1) {
	let n = new ti();
	t && n.register(() => ({
		name: "DT_TYPED_GEOMETRY",
		loadMaterial: async () => new ve()
	}));
	let r = e.slice().buffer;
	return (await n.parseAsync(r, "")).scene;
}
function gs(e) {
	return {
		object: e,
		dispose: () => {
			let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
			e.traverse((e) => {
				e instanceof Me && (t.add(e.geometry), (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
					n.add(e), Object.values(e).forEach((e) => {
						e && typeof e == "object" && "isTexture" in e && r.add(e);
					});
				}));
			}), r.forEach((e) => e.dispose()), n.forEach((e) => e.dispose()), t.forEach((e) => e.dispose());
		}
	};
}
function _s(e) {
	let t = e.clone(!0);
	return t.traverse((e) => {
		e instanceof Me && (Array.isArray(e.material) || (e.userData.staticBatchMaterialId = e.material.uuid), e.material = Array.isArray(e.material) ? e.material.map((e) => e.clone()) : e.material.clone());
	}), t;
}
function vs(e) {
	return Array.isArray(e) ? e.flatMap((e) => typeof e == "object" && e && typeof e.slotId == "string" ? [e.slotId] : []) : [];
}
function ys(e, t) {
	if (e.userData.staticMeshLod) return e.children.forEach((e) => ys(e, t)), e;
	let n = 0;
	return e.traverse((e) => {
		e instanceof Me && (e.userData.materialSlotId = t[n] ?? `mesh:0/primitive:${n}`, n += 1);
	}), e;
}
function bs(e) {
	let t = /* @__PURE__ */ new Set();
	e.traverse((e) => {
		e instanceof Me && (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => t.add(e));
	}), t.forEach((e) => e.dispose());
}
//#endregion
//#region src/ue-import/TextureDisplaySession.ts
var xs = class {
	layouts;
	prepare;
	publish;
	current = null;
	options = {
		maxSize: 128,
		maps: []
	};
	budgetBytes = Fa;
	pending = null;
	closed = !1;
	memory = new Pa();
	constructor(e, t, n) {
		this.layouts = e, this.prepare = t, this.publish = n;
	}
	estimate(e) {
		let t = Ur(e);
		return this.layouts.reduce((e, n) => e + Wa(n, t).reservedBytes, 0);
	}
	async apply(e, t, n, r) {
		if (this.closed) throw Error("닫힌 레벨의 텍스처 설정은 적용할 수 없습니다.");
		if (this.pending) throw Error("텍스처 적용이 진행 중입니다.");
		La(t);
		let i = Ur(e), a = this.estimate(i), o = a + (this.current?.reservedBytes ?? 0);
		if (t !== 0 && a > 0 && o > t) throw Error(`텍스처 교체 중 예약 추정 ${(o / 1048576).toFixed(1)} MiB가 예산을 초과합니다. 자동 예산을 선택하거나 크기를 줄이세요.`);
		let s = new AbortController();
		this.pending = s;
		let c = () => s.abort();
		n.addEventListener("abort", c, { once: !0 }), n.aborted && s.abort();
		let l = null;
		try {
			t === 0 && await Da(), s.signal.throwIfAborted(), this.memory.update(a > 0 ? o : this.current?.reservedBytes ?? 0, this.current?.reservedBytes ?? 0, t === 0 && a > 0);
			let e = t === 0 ? ja(a > 0 ? o : 0, this.current?.reservedBytes ?? 0) : t;
			l = await this.prepare(i, e, s.signal, r, t === 0), s.signal.throwIfAborted(), t === 0 && l.reservedBytes > 0 && ja(l.reservedBytes + (this.current?.reservedBytes ?? 0), this.current?.reservedBytes ?? 0), this.memory.update(l.reservedBytes + (this.current?.reservedBytes ?? 0), this.current?.reservedBytes ?? 0, t === 0 && l.reservedBytes > 0, !0);
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
};
//#endregion
//#region src/assets/SceneAssetSelection.ts
function Ss(e, t, n = e.actors) {
	let r = /* @__PURE__ */ new Set([
		"SceneNode",
		"PrimitiveCube",
		"StaticMesh",
		"SkeletalMesh",
		"TwinMetadata",
		"Camera",
		"PlayerStart",
		"DirectionalLight",
		"PointLight",
		"SpotLight"
	]);
	if (e.authoring.prefabInstances?.length || n.some((e) => e.components.some((e) => !r.has(e.type)))) return;
	let i = new Map(t.assets.map((e) => [e.id, e])), a = new Map(t.revisions.map((e) => [e.id, e])), o = /* @__PURE__ */ new Map(), s = !1, c = (e) => {
		let t = i.get(e.assetId), n = e.revisionPolicy === "pinned" ? e.revisionId : t?.currentRevisionId, r = n ? a.get(n) : void 0;
		if (!t || !r || r.assetId !== t.id) throw Error("Missing scene asset revision");
		if (o.has(t.id)) {
			o.get(t.id) !== n && (s = !0);
			return;
		}
		o.set(t.id, r.id);
		for (let e of t.dependencies) c(e);
		if (t.kind === "Material") for (let e of Cr(br(r.metadata.material))) c(e);
		if (t.kind === "StaticMesh" || t.kind === "SkeletalMesh") for (let e of ns(r.metadata.materialSlots)) c(e.materialAsset);
	};
	for (let e of n) for (let t of e.components) if (t.type === "StaticMesh" || t.type === "SkeletalMesh") {
		t.meshAsset && c(t.meshAsset);
		for (let e of t.materialOverrides) c(e.materialAsset);
		t.type === "SkeletalMesh" && (c(t.skinBinding.skeletonAsset), t.playback.clipAsset && c(t.playback.clipAsset));
	}
	return s ? void 0 : o;
}
//#endregion
//#region src/ue-import/PreviewAssetSelection.ts
function Cs(e, t, n) {
	let r = Ss(e, t);
	if (!r) return {
		assets: t,
		recipe: n
	};
	let i = new Map(t.revisions.map((e) => [e.id, e])), a = new Set(r.values()), o = new Set([...a].flatMap((e) => i.get(e).blobKeys));
	return {
		assets: {
			...t,
			assets: t.assets.filter((e) => r.has(e.id)).map((e) => ({
				...e,
				currentRevisionId: r.get(e.id)
			})),
			revisions: t.revisions.filter((e) => a.has(e.id)),
			blobs: t.blobs.filter((e) => o.has(e.key))
		},
		recipe: {
			...n,
			payloads: n.payloads.filter((e) => a.has(e.revisionId))
		}
	};
}
//#endregion
//#region src/ue-import/prepareStaticEditorPreview.ts
var ws = class extends Error {
	requiredBytes;
	budgetBytes;
	textureLayouts;
	constructor(e, t = Fa) {
		super(`전체 에셋 텍스처 예약 추정 ${(e / 1048576).toFixed(1)} MiB가 표시 예산 ${(t / 1048576).toFixed(0)} MiB를 초과합니다. 예산을 늘리거나 텍스처 크기·맵을 줄이세요.`), this.requiredBytes = e, this.budgetBytes = t;
	}
}, Ts = class extends Error {
	textureLayouts;
	constructor(e) {
		super(`전체 에셋 텍스처 적용 실패: ${e}`);
	}
};
function Es(e, t) {
	try {
		e.textureLayouts = [...t.values()].map(Ua);
	} catch {}
	return e;
}
function Ds(e) {
	let t = [], n = 0;
	for (let [r, i] of e) {
		let e = Ga(i);
		t.push(r), n += e.reservedBytes;
	}
	return {
		textured: t,
		reservedBytes: n
	};
}
async function Os(e, t, n, r) {
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
		throw e.clearAppearances(), r?.aborted ? t : new Ts(t instanceof Error ? t.message : String(t));
	}
}
var ks = class extends ms {
	previewStorage;
	templates;
	payloads;
	loadAppearance;
	budgetBytes;
	defaultMaterials;
	deferredAppearances;
	materialResolver;
	textureDisplay;
	sceneDocument;
	loadingPayloads = /* @__PURE__ */ new Map();
	deferredPayloads;
	pendingAppearances = /* @__PURE__ */ new Map();
	retainedMaterials = [];
	appearances = /* @__PURE__ */ new Map();
	wantedAppearances = /* @__PURE__ */ new Set();
	restoringAppearances = /* @__PURE__ */ new Map();
	acquiring = /* @__PURE__ */ new Map();
	disposed = !1;
	appearanceListeners = /* @__PURE__ */ new Set();
	invalidationListeners = /* @__PURE__ */ new Set();
	constructor(e, t, n = /* @__PURE__ */ new Map(), r = qa, i = Fa, a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set()) {
		super(e), this.previewStorage = e, this.templates = t, this.payloads = n, this.loadAppearance = r, this.budgetBytes = i, this.defaultMaterials = a, this.deferredAppearances = s, La(i), this.deferredPayloads = new Map(o);
	}
	supportsAppearance(e) {
		return !!(e && e.revisionPolicy === "pinned" && e.revisionId === `${e.assetId}:preview` && (this.payloads.has(e.assetId) || this.deferredPayloads.has(e.assetId)));
	}
	async ensurePayload(e) {
		if (this.disposed) throw Error("Retired preview resources");
		if (this.payloads.has(e)) return this.payloads.get(e);
		let t = this.deferredPayloads.get(e);
		if (!t) return;
		let n = this.loadingPayloads.get(e);
		return n || (n = t().then((t) => {
			if (this.disposed) throw Error("Retired preview resources");
			return this.payloads.set(e, t), t;
		}).finally(() => this.loadingPayloads.delete(e)), this.loadingPayloads.set(e, n)), n;
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
		if (this.wantedAppearances.has(e.assetId) || this.pendingAppearances.has(e.assetId)) throw Error("이미 로딩/표시/해제 중인 에셋입니다.");
		return this.loadAppearanceFor(e, !0);
	}
	async loadAppearanceFor(e, t) {
		if (this.disposed) throw Error("Retired preview resources");
		if (!this.supportsAppearance(e)) throw Error("원본 후보의 고정 리비전만 외형 확인할 수 있습니다.");
		let n = e.assetId;
		if (this.appearances.has(n)) throw Error("이미 로딩/표시/해제 중인 에셋입니다.");
		let r = this.payloads.get(n);
		if (!r) {
			let e = { cancelled: !1 };
			this.pendingAppearances.set(n, e);
			try {
				if (r = await this.ensurePayload(n), e.cancelled) return;
			} finally {
				this.pendingAppearances.delete(n);
			}
		}
		if (this.disposed) throw Error("Retired preview resources");
		if (this.appearances.has(n)) throw Error("이미 로딩/표시/해제 중인 에셋입니다.");
		let i = Ga(r);
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
		let t = this.pendingAppearances.get(e);
		t && (t.cancelled = !0), this.wantedAppearances.delete(e);
		let n = this.appearances.get(e);
		n && (n.cancelled = !0, this.invalidationListeners.forEach((t) => t(e)), this.collectAppearance(e), this.notifyAppearance());
	}
	clearAppearances() {
		this.pendingAppearances.forEach((e) => {
			e.cancelled = !0;
		}), this.wantedAppearances.clear(), [...this.appearances.keys()].forEach((e) => this.disableAppearance(e));
	}
	collectAppearance(e) {
		let t = this.appearances.get(e);
		t?.cancelled && t.object && t.leases === 0 && (Ka([t.object]), this.appearances.delete(e), this.notifyAppearance());
	}
	async acquire(e) {
		if (this.disposed) throw Error("Retired preview resources");
		if (this.textureDisplay?.current) return this.textureDisplay.current.resources.acquire(e);
		if (!this.templates.has(e.assetId) && !this.payloads.has(e.assetId) && !this.deferredPayloads.has(e.assetId)) return super.acquire(e);
		let t = e.revisionPolicy === "pinned" ? e.revisionId : this.previewStorage.currentRevisionId ? this.previewStorage.currentRevisionId(e.assetId) : (await this.previewStorage.snapshot()).assets.find((t) => t.id === e.assetId)?.currentRevisionId;
		if (t !== `${e.assetId}:preview`) return super.acquire(e);
		let n = !this.payloads.has(e.assetId);
		if (await this.ensurePayload(e.assetId), this.disposed) throw Error("Retired preview resources");
		n && this.deferredAppearances.has(e.assetId) && !this.wantedAppearances.has(e.assetId) && await this.enableAppearance({
			...e,
			revisionPolicy: "pinned",
			revisionId: t
		});
		let r = e.assetId;
		this.acquiring.set(r, (this.acquiring.get(r) ?? 0) + 1);
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
			let i = r ? void 0 : await ds(this.templates, e.assetId, this.payloads.get(e.assetId), js), a = r ?? i.object, o = ss(a), s = !1;
			return {
				assetId: e.assetId,
				revisionId: `${e.assetId}:preview`,
				instantiate: () => {
					if (s) throw Error("Released preview lease");
					let t = _s(a);
					return t.userData.defaultMaterialSlots = this.defaultMaterials.get(e.assetId) ?? [], t;
				},
				release: () => {
					s || (s = !0, o(), i?.release(), r && (n.leases--, this.collectAppearance(e.assetId)));
				}
			};
		} finally {
			this.acquiring.set(r, this.acquiring.get(r) - 1);
		}
	}
	disposeDisplay() {
		this.textureDisplay?.dispose(), this.clearAppearances(), this.retainedMaterials.splice(0).forEach((e) => e.dispose());
	}
	trimUnusedGeometry() {
		this.textureDisplay?.current?.resources.trimUnusedGeometry(), fs(this.templates, this.payloads);
		for (let [e, t] of this.appearances) t.object && !t.leases && !t.cancelled && !this.acquiring.get(e) && (Ka([t.object]), this.appearances.delete(e));
		this.retainedMaterials.splice(0).forEach((e) => e.dispose()), this.notifyAppearance();
	}
	disposeAll() {
		this.disposed = !0, this.disposeDisplay(), ps(this.templates), this.payloads.clear(), this.appearanceListeners.clear(), this.invalidationListeners.clear(), this.deferredPayloads.clear(), this.loadingPayloads.clear(), this.textureDisplay = void 0, this.materialResolver = void 0, this.sceneDocument = void 0;
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
	async warmMaterials(e, t, n) {
		let r = e.assets.filter((e) => e.kind === "Material"), i = 0;
		for (let e of r) t?.throwIfAborted(), this.retainedMaterials.push(await this.materialResolver({
			kind: "asset",
			assetId: e.id,
			revisionPolicy: "pinned",
			revisionId: e.currentRevisionId
		})), n?.(`재질 준비 ${++i}/${r.length} · ${e.name}`);
		t?.throwIfAborted();
	}
	publishDisplay() {
		this.payloads.forEach((e, t) => this.invalidationListeners.forEach((e) => e(t)));
	}
};
async function As(e, t, n, r = { showTextures: !1 }, i, a = !0) {
	let o = r.budgetBytes ?? 0;
	La(o), o === 0 && await Da();
	let s = i ?? /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = Cs(e.envelope.payload, e.assets, e.recipe);
	t.setReadAheadScope?.(l.assets.assets.map((e) => e.id));
	let u = new Set(e.assets.revisions.filter((e) => e.metadata.candidateTypedMaterials).map((e) => e.assetId)), d = new Map(l.assets.blobs.map((e) => [e.key, e])), f = /* @__PURE__ */ new Map(), p = 0, m = async (i, a, o, s, c = e.assets, l = r.signal) => {
		l?.throwIfAborted();
		let u = c.revisions.find((e) => e.id === a && e.assetId === i);
		if (!u || !u.blobKeys.includes(o) || u.contentHash !== s) throw Error(`Candidate revision mismatch: ${i}`);
		let m = d.get(o);
		if (!m) {
			if (!t.snapshotAsset) throw Error(`Missing candidate payload: ${i}`);
			n(`저장 에셋 읽기 ${++p} · ${e.assets.assets.find((e) => e.id === i)?.name ?? i}`);
			let r = await t.snapshotAsset(i, a);
			l?.throwIfAborted();
			let c = r.revisions.find((e) => e.id === a && e.assetId === i);
			if (!c || c.contentHash !== u.contentHash || JSON.stringify(c.blobKeys) !== JSON.stringify(u.blobKeys)) throw Error(`Candidate revision mismatch: ${i}`);
			if (m = r.blobs.find((e) => e.key === o), !m || m.bytes.byteLength > Zr.singlePayloadBytes) throw Error(`Missing candidate payload: ${i}`);
			let h = await st(m.bytes);
			if (h !== s) throw Error(`Candidate payload hash mismatch: ${i}`);
			f.set(o, h), d.set(o, m);
		}
		if (f.has(o) && f.get(o) !== s) throw Error(`Candidate payload hash mismatch: ${i}`);
		return f.set(o, s), m;
	};
	for (let e of l.recipe.payloads) {
		let t = await m(e.assetId, e.revisionId, e.blobKey, e.blobKey);
		c.set(e.assetId, t.bytes);
	}
	if (u.size) for (let e of Jr(l.assets, Pr).keys()) {
		let t = l.assets.assets.find((t) => t.id === e && t.kind === "Texture"), n = l.assets.revisions.find((n) => n.id === t?.currentRevisionId && n.assetId === e);
		if (!n?.blobKeys[0]) throw Error(`Missing candidate material texture: ${e}`);
		await m(e, n.id, n.blobKeys[0], n.contentHash);
	}
	if (r.optimize) {
		let e = 0;
		for (let [t, i] of c) u.has(t) || (r.signal?.throwIfAborted(), n(`열기 전 텍스처 최적화 ${++e}/${c.size}`), c.set(t, await Kr(i, r.optimize, r.signal ?? new AbortController().signal)));
	}
	let h, g = new Map([...c].filter(([e]) => !u.has(e))), _ = u.size ? Xr({
		...l.assets,
		blobs: [...d.values()]
	}) : {
		dimensions: [],
		uses: []
	};
	try {
		h = r.showTextures === !1 ? {
			textured: [],
			reservedBytes: 0
		} : Ds(g);
		let e = h.reservedBytes + Wa(_, r.showTextures === !1 ? {
			...r.optimize,
			maxSize: r.optimize?.maxSize ?? 1024,
			maps: []
		} : r.optimize).reservedBytes;
		if (o === 0 && (o = ja(e)), e > o) {
			let t = new ws(e, o);
			throw t.textureLayouts = [...g.values()].map(Ua).concat(_), t;
		}
	} catch (e) {
		throw e instanceof ws ? e : new Ts(e instanceof Error ? e.message : String(e));
	}
	for (let [e, t] of c) r.signal?.throwIfAborted(), n(`저장 레벨 복원 ${s.size}/${c.size}`), s.has(e) || s.set(e, await js(t));
	let v = /* @__PURE__ */ new Map();
	for (let t of e.recipe.payloads) {
		let n = e.assets.revisions.find((e) => e.id === t.revisionId).metadata;
		n.candidateTypedMaterials && v.set(t.assetId, n.materialSlots.map((e) => ({
			slotId: e.slotId,
			materialAsset: {
				kind: "asset",
				assetId: e.defaultMaterialId,
				revisionPolicy: "live"
			},
			tintOverrides: []
		})));
	}
	let y = new Map(e.recipe.payloads.map((e) => [e.assetId, async () => {
		let t = (await m(e.assetId, e.revisionId, e.blobKey, e.blobKey)).bytes;
		return r.optimize && !u.has(e.assetId) && (t = await Kr(t, r.optimize, r.signal ?? new AbortController().signal)), t;
	}])), b = new ks(t, s, c, qa, o, v, y, new Set(r.showTextures === !1 ? [] : e.recipe.payloads.filter((e) => !u.has(e.assetId)).map((e) => e.assetId)));
	b.materialResolver = Yo(t, void 0, {
		textureMaxSize: r.optimize?.maxSize,
		textureMapLimits: Jr(e.assets, r.optimize),
		transformDocument: (e) => Yr(e, r.optimize, r.showTextures !== !1)
	});
	try {
		await Os(b, h.textured, n, r.signal);
	} catch (e) {
		throw e instanceof Ts ? Es(e, c) : e;
	}
	if (a) {
		let n = [...g.values()].map(Ua).concat(_), r = b.materialResolver;
		b.textureDisplay = new xs(n, async (n, r, i, a, o) => {
			let c = b.sceneDocument?.() ?? e.envelope.payload, l;
			if (t.snapshotCatalog) {
				let n = await t.snapshotCatalog();
				i.throwIfAborted(), l = {
					assets: n.assets,
					revisions: n.revisions,
					folders: n.folders,
					blobs: []
				};
				let r = Cs(c, l, e.recipe);
				t.setReadAheadScope?.(r.assets.assets.map((e) => e.id));
				for (let e of r.recipe.payloads) await m(e.assetId, e.revisionId, e.blobKey, e.blobKey, l, i);
				for (let e of Jr(r.assets, Pr).keys()) {
					let t = r.assets.assets.find((t) => t.id === e && t.kind === "Texture"), n = r.assets.revisions.find((n) => n.id === t?.currentRevisionId && n.assetId === e);
					if (!n?.blobKeys[0]) throw Error(`Missing candidate material texture: ${e}`);
					await m(e, n.id, n.blobKeys[0], n.contentHash, l, i);
				}
				l = {
					...l,
					blobs: [...d.values()]
				};
			} else l = await t.snapshot();
			i.throwIfAborted();
			let f = Cs(c, l, e.recipe), p = Xr(f.assets), h = f.recipe.payloads.filter((e) => !u.has(e.assetId)).map((e) => {
				let t = l.blobs.find((t) => t.key === e.blobKey);
				if (!t) throw Error(`Missing candidate payload: ${e.assetId}`);
				return Ua(t.bytes);
			}).concat(p).reduce((e, t) => e + Wa(t, n).reservedBytes, 0);
			if (o && (r = ja(h > 0 ? h + (b.textureDisplay.current?.reservedBytes ?? 0) : 0, b.textureDisplay.current?.reservedBytes ?? 0)), h > 0 && h + (b.textureDisplay.current?.reservedBytes ?? 0) > r) throw Error("변경된 에셋의 텍스처 교체 예산을 초과합니다. 먼저 모든 맵을 끄고 적용하세요.");
			let g = await As({
				...e,
				envelope: {
					...e.envelope,
					payload: c
				},
				assets: l
			}, t, a, {
				optimize: n,
				showTextures: n.maps.length > 0,
				budgetBytes: r,
				signal: i
			}, s, !1);
			try {
				g.sceneDocument = b.sceneDocument, await g.warmMaterials(f.assets, i, a);
				let n = (e) => JSON.stringify(e.assets.map((e) => [e.id, e.currentRevisionId])), r = t.snapshotCatalog ? await t.snapshotCatalog() : await t.snapshot();
				if (n(l) !== n(r)) throw Error("적용 중 에셋이 변경되었습니다. 기존 표시를 유지합니다. 다시 적용하세요.");
				if ((b.sceneDocument?.() ?? e.envelope.payload) !== c) throw Error("적용 중 레벨이 변경되었습니다. 기존 표시를 유지합니다. 다시 적용하세요.");
				return i.throwIfAborted(), {
					resources: g,
					reservedBytes: h,
					dispose: () => g.disposeDisplay()
				};
			} catch (e) {
				throw g.disposeDisplay(), e;
			}
		}, () => b.publishDisplay()), b.materialResolver = (e, t) => (b.textureDisplay?.current?.resources.materialResolver ?? r)(e, t);
	}
	return b;
}
async function js(e) {
	if (kr(e)) {
		Mr(e);
		let t = jr(e), n = new T();
		n.userData.staticMeshLod = {
			distanceMeters: t.distanceMeters,
			hysteresis: t.hysteresis
		};
		try {
			for (let e of t.levels) n.add(await js(e));
			return n.children[1].visible = !1, n;
		} catch (e) {
			throw Ka([n]), e;
		}
	}
	Yn(e);
	let t = new ti();
	t.register(() => ({
		name: "U01_EDITOR_GEOMETRY",
		loadMaterial: async () => new ve({
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
	let r = new T();
	return r.matrixAutoUpdate = !1, r.matrix.copy(ba), r.add(n.scene), r.updateMatrixWorld(!0), r;
}
U.storage.priorVersions, U.storage.historyMetadataBytes;
//#endregion
export { gr as $, la as A, rt as At, U as B, Pa as C, bt as Ct, Aa as D, _t as Dt, Da as E, ht as Et, ea as F, Ke as Ft, Fr as G, Jr as H, Zi as I, qe as It, Mr as J, Ur as K, Qi as L, Be as Lt, oa as M, Qe as Mt, ca as N, $e as Nt, Ma as O, dt as Ot, $i as P, He as Pt, hr as Q, ti as R, D as Rt, Ca as S, k as St, Oa as T, xt as Tt, Yr as U, Xr as V, Pr as W, pr as X, kr as Y, mr as Z, Ia as _, Kt as _t, ts as a, Yn as at, Ua as b, qt as bt, Yo as c, cn as ct, Eo as d, tn as dt, fr as et, Io as f, nn as ft, uo as g, Qt as gt, bo as h, Gt as ht, ns as i, Jn as it, ua as j, st as jt, ma as k, mt as kt, Jo as l, ln as lt, yo as m, rn as mt, ms as n, br as nt, Xo as o, Xn as ot, Co as p, an as pt, Vr as q, bs as r, dr as rt, Qo as s, jn as st, As as t, Cr as tt, Fo as u, dn as ut, Ka as v, Wt as vt, xa as w, Ct as wt, La as x, Lt as xt, Wa as y, $t as yt, $r as z, ze as zt };
