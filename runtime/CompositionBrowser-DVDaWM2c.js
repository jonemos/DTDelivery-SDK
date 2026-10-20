import "./StaticPreviewPersistence-DVsi8wqY.js";
import { n as e } from "./CompositionDocument-DldF5SEF.js";
//#region src/composition/CompositionBrowser.ts
var t = "dt-web-editor-compositions-v1", n = "dt-web-editor-composition-sources-v1";
function r(e) {
	return new Promise((t, n) => {
		e.onsuccess = () => t(e.result), e.onerror = () => n(e.error);
	});
}
async function i() {
	let e = indexedDB.open(t, 2);
	e.onupgradeneeded = () => {
		for (let [t, n] of [
			["documents", ["document.id", "revision"]],
			["catalogs", "id"],
			["deleted", "id"]
		]) e.result.objectStoreNames.contains(t) || e.result.createObjectStore(t, { keyPath: typeof n == "string" ? n : [...n] });
	};
	let n = await r(e);
	return n.onversionchange = () => n.close(), n;
}
async function a() {
	let e = await i();
	try {
		return await r(e.transaction("documents").objectStore("documents").getAll());
	} finally {
		e.close();
	}
}
async function o(t, r) {
	if (typeof indexedDB > "u") return r();
	let i = async () => {
		if ((await a()).some((n) => n.document.mounts.some((n) => t === "assets" ? n.pin.source.kind === "web" : e(n.pin.source) === e(t)))) throw Error("저장된 통합 레벨 이력이 이 원본을 참조하여 삭제할 수 없습니다.");
		return r();
	};
	if (!navigator.locks) throw Error("참조 보호를 위한 브라우저 잠금 기능이 필요합니다.");
	return navigator.locks.request(n, { ifAvailable: !0 }, (e) => {
		if (!e) throw Error("열린 통합 보기를 닫은 뒤 삭제하세요.");
		return i();
	});
}
//#endregion
export { o as withCompositionDeletionGuard };
