import type { BakedMaterialBinding } from './m5c3ea43e8157.js';
import type { CandidateFile } from './m023a36aa6638.js';
export declare const COMPATIBILITY_RECIPE_HASH = "9b9c18a4927f92c7eeb886a15a62e39984016dd9678b3a4e601157ab2ae1436b";
export declare const PBR_COMPATIBILITY_RECIPE_HASH = "d784dd66bd2bf499d9122f2c06ab4be484622f2ebad8e7b783bc737c155c6c66";
export declare const BASIC_PBR_RECIPE_HASH = "45e70032ab631bcc5d891942e86444a87e9fc33621ef610c2b72228dac6e4d85";
export declare const BASIC_PBR_UV_REPAIR_RECIPE_HASH = "246776ee8a56b227954ed0b4d8991a82f24d6f0df2cd3da99cd82acf066e5b85";
export declare const BASIC_PBR_NATIVE_UV_RECIPE_HASH = "7c4bb176af1f59985d31be12b5ef215230fb45a85184ab9c269ffb259d7cd23e";
export declare const BASIC_PBR_RENDER_UV_RECIPE_HASH = "dfac617c30b2a6e6ee3ad58dd2bcd773ab5e65f2f33c601ce2debdd660b42068";
export declare const RESILIENT_PBR_RECIPE_HASH = "0ac9026ea91ca259115bffe8c63650648a76446bc71893b50220d0c04b48e87c";
export declare const FALLBACK_PBR_RECIPE_HASH = "7449fdcf776fb91e6dc2283565e4d42ef53251c21c242968bf8e37f0bce0c5ed";
/** Exact native 512 recipes; keep the historical 1024 bindings above readable. */
export declare const WEB_512_RECIPE_HASHES: {
    readonly COMPAT_RECIPE: "ca89bd30925a4027e08fd32d5c07a23b9444fcd26bc5e8eda472e5d60f68b0a3";
    readonly PBR_COMPAT_RECIPE: "27bd805c4a6cd685c6a96dc4f6c65fe05c417368c58a1a54deac88bf3939073c";
    readonly BASIC_PBR_RECIPE: "70fba6ea8cba1043c7f545db8185430969e1ee4ea086f433915f96bd834693a5";
    readonly BASIC_PBR_UV_REPAIR_RECIPE: "2e77d0ad11c7fffb53204d94a98ba8a708573df572a52f1bf1b282bdf3cbb7d5";
    readonly BASIC_PBR_NATIVE_UV_RECIPE: "bf4bfd2d89191bb4825549a5988c17120bd6ecd092973b5705a552a877393071";
    readonly BASIC_PBR_RENDER_UV_RECIPE: "0ec71d53e44c140bd6d8c284180f9f31d0c869a59bb9e14fc1911f52e126c71c";
    readonly RESILIENT_PBR_RECIPE: "d5ef629dcc62b7d6f4530f4057fc774b86b3b834dcbecfac5cac9e649042b06c";
    readonly FALLBACK_PBR_RECIPE: "595162680de8a28f3e7277e247edcc26add21c405096c26c1b78c9f6df15197d";
    readonly TILED_PBR_RECIPE: "1a3856cd83e80bad0879a2bd3085f14eb52a31b2db408010dd0783972e98b68c";
    readonly SECTION_SAFE_PBR_RECIPE: "6998fdae7433837fdc2dc019e4428a19ced2c26e72026f52dcec2cf27e67c844";
};
/** Existing saved/import payloads retain their exact binding and sampling. */
export declare const LEGACY_WEB_512_RECIPE_HASHES: {
    readonly RESILIENT_PBR_RECIPE: "c18890faf86a225142f010f2595ea9ecd9847ef89bcb5922d14a5c6dfc5828eb";
    readonly TILED_PBR_RECIPE: "498af64393a7b33dab83d7c3734bb5ec9b7594937d67f3856a784f2cbe7b0268";
    readonly SECTION_SAFE_PBR_RECIPE: "80d2953b01b1790dbbacdffeb64adc6eafe19ec090dd700dc0000c792f5eb2ad";
};
/** v4 native physical recipes. Old core-only hashes keep their original admission rules. */
export declare const PHYSICAL_PBR_RECIPE_HASHES: {
    readonly BASIC_PBR_RECIPE: "ac89efe419af7d661b4c6a32c35328db7f37bac6246b92f17c6c8fb85a13fbb1";
    readonly BASIC_PBR_UV_REPAIR_RECIPE: "c7c396694d1aef317944090523ee21f8a1cc0eafee7a8aaf2e9eb3258dff5545";
    readonly BASIC_PBR_NATIVE_UV_RECIPE: "f7a62ea401acde338c2a8e97a20e9ccc518dbd3b6290fa5976d6929e8058bd99";
    readonly BASIC_PBR_RENDER_UV_RECIPE: "f554fc2bb2a615dce1c7bdb1bc17e37654b1fef3cd2b314e1aa0848f28bfedf6";
    readonly RESILIENT_PBR_RECIPE: "11bfec8a97b5af91f781a293de126aae7334d3f33a09370e5e3fa3d6c0fce908";
    readonly SECTION_SAFE_PBR_RECIPE: "fd1d9e5e3da09e5e03318bd420afb60cb711e13ec4c1ea36b176d916d12b5037";
    readonly TILED_PBR_RECIPE: "3f213a966fc40a13d622213a2b807d24449392a768907f9d1ad694dd73e93795";
};
/** v5 keeps verified UV-only graphs on source UVs; immutable v4 bindings remain readable. */
export declare const PHYSICAL_SOURCE_UV_RECIPE_HASHES: {
    readonly BASIC_PBR_RECIPE: "21e7023e409952fab36e0b53ad47b66a99aa25d84f97e46596f5ee0931b1d07c";
    readonly BASIC_PBR_UV_REPAIR_RECIPE: "af7d0a2e7176ca970cd9df72454a7d28ce17cda1aa69863c740183c87aa5c96f";
    readonly BASIC_PBR_NATIVE_UV_RECIPE: "30cbdc7abc59c3a99b9b4f6d89fdefc07ef7a809ab5ac0c4cb5d1c065c9b75e3";
    readonly BASIC_PBR_RENDER_UV_RECIPE: "1a57320c799db7ee53170ca2fe933e45da399df84ead4b2d798e36d240f96045";
    readonly RESILIENT_PBR_RECIPE: "2e9fbd0adcf079b4503e19fcd144493e1cebaabe500ef71d504c84ecc3830986";
    readonly SECTION_SAFE_PBR_RECIPE: "d9a1e07866bb6464c135aa2795f4b2149edb681995579c73b8a893cccc425760";
    readonly TILED_PBR_RECIPE: "966853c13de6ccbf33125a4a64b4ac5118512c7587eb41fa1ab2306bff023091";
};
/** v6 preserves effective Unlit independently of historical lit/physical bindings. */
export declare const UNLIT_PBR_RECIPE_HASHES: {
    readonly BASIC_PBR_RECIPE: "4b6680b7fd89fa1209d9fd24af50de162774a1d942f3fd623ea33a19640f3a16";
    readonly BASIC_PBR_UV_REPAIR_RECIPE: "91125a70f04de969f8ca292bfce422f76b0196431c4ba4c03230cd9c2f024e59";
    readonly BASIC_PBR_NATIVE_UV_RECIPE: "49a1dddf8f076d5fe8c4c2e1b36fe7ef1d375ded541bf893ca9f971d14b174b3";
    readonly BASIC_PBR_RENDER_UV_RECIPE: "a00d0c909eea94d41e025a638ddea7fa947427051048e83315828c070d95ad0e";
    readonly RESILIENT_PBR_RECIPE: "b57573715315b4cfd4a531a2788698aabfa2a4d5aa52d33641dd1d7e3b918b30";
    readonly SECTION_SAFE_PBR_RECIPE: "40d8cdeaff194aac22ed2c2f58cf3e264a166fcfac5675c7b1d2315de7fa6202";
    readonly TILED_PBR_RECIPE: "0915d6a0e66d0adcc789178af3528b4fe640b0db9cb57376f6db48466b085ee6";
};
export declare const TRANSMISSION_PBR_RECIPE_HASHES: {
    readonly BASIC_PBR_RECIPE: "a475a5110cc23cfbbb4f3d8f8d21ad2fae884d282d7a22bd6e936c5dc39893f2";
    readonly BASIC_PBR_UV_REPAIR_RECIPE: "ed33d905f97283a82ab0047da525595bb45413863fba3feba3797469810e4c68";
    readonly BASIC_PBR_NATIVE_UV_RECIPE: "2baf3554a2d626cf11ae824c7f6aafdaca0c829b1a3e4211127c4b734cc14140";
    readonly BASIC_PBR_RENDER_UV_RECIPE: "a6e0c34c8829a6238046eb4251a2c21326ff713040a3951b08828afddc96fa88";
    readonly RESILIENT_PBR_RECIPE: "28b8883e30917cd9c5f8a3816e765d871408cda200003397343ab6a9c3e8ccf7";
    readonly SECTION_SAFE_PBR_RECIPE: "2e7017d97a79694be95e72128df530ab74826537ab52d70fa7a261c3b6517449";
    readonly TILED_PBR_RECIPE: "af8db4a72a6bdec8b79951368bcfb7210627ae1e6be8982ff4efe553175e9feb";
};
export declare const SHEEN_PBR_RECIPE_HASHES: {
    readonly BASIC_PBR_RECIPE: "b9bd574272602a5ebc482a7d7bbd205d309589a8f38056f93e2132ce248b223b";
    readonly BASIC_PBR_UV_REPAIR_RECIPE: "8a39e66efe1b0c136572101278078b83fbda83653d9312c3b4d7fad1d94a8e7a";
    readonly BASIC_PBR_NATIVE_UV_RECIPE: "4d154cb897861f294f25d5f9be4a413aa7c55658a35e20988f44c3956ecaddde";
    readonly BASIC_PBR_RENDER_UV_RECIPE: "d9fd7a09ca57381c16fa777c18308f2cf8d0460eee03315f6f4ea53fe321d6d9";
    readonly RESILIENT_PBR_RECIPE: "020555ed2a35b4f0520741115002d522e6d9d0da979074a3fae8b49b63a8a3aa";
    readonly SECTION_SAFE_PBR_RECIPE: "762a9a0c214bd9800ebbdcde3e8a78f4f3200172a619a7ed751c34c2d8fab249";
    readonly TILED_PBR_RECIPE: "6e912470e4d30fab5c323847010097667052a85a179f1202a0044a63438a8d81";
};
/** v9 flattens inherited native static values; historical recipes remain immutable. */
export declare const EFFECTIVE_STATIC_PBR_RECIPE_HASHES: {
    readonly CORE: {
        readonly BASIC_PBR_RECIPE: "8f2cd424f4103b904ae46349a085c112aaeeff7c1797c1aefb023cbe008a2b76";
        readonly BASIC_PBR_UV_REPAIR_RECIPE: "89d4a2538e5446166797f0af0f487a2397ad7afcaad0330c45841bc61e1e6fbd";
        readonly BASIC_PBR_NATIVE_UV_RECIPE: "86a825c7b77138502de65bdc8caf9500a4ac66b7d9837d9f2b70b3ad10fce81e";
        readonly BASIC_PBR_RENDER_UV_RECIPE: "790f9838c9ef1c4025b5ee5f9feebde75544bade3cef20073d42c071fe8d8930";
        readonly RESILIENT_PBR_RECIPE: "8713caa70df9cd30ce085404bcbc893597f06a7037e13deec738947ce53d6ff2";
        readonly SECTION_SAFE_PBR_RECIPE: "778023e4e947bc9fefb9f52cdb9859562b16e116bd053727e27f099406af593c";
        readonly TILED_PBR_RECIPE: "35d1921b3cd4694e09d840adb572ab610830c4f68eee7ab72d26c8e48a17de32";
    };
    readonly PHYSICAL: {
        readonly BASIC_PBR_RECIPE: "1aca82cf3acea2d18f05c580564fb9f33df466802d5ea5234aa0639421603f73";
        readonly BASIC_PBR_UV_REPAIR_RECIPE: "2e8765c6387780a2be90306937269cce690177dc9ea916b7eee50ad41ecd84f6";
        readonly BASIC_PBR_NATIVE_UV_RECIPE: "20a7e3ebb90d3cdec9c867ea7d3784728e1d56b1343d27d8cd62fac34b55cc5e";
        readonly BASIC_PBR_RENDER_UV_RECIPE: "ce29b2a2888699748fd29d9cdf35d032ecc05241de3b67d81aff92cee69b2ae7";
        readonly RESILIENT_PBR_RECIPE: "654e06f83765d132366aa1927d1c503e63d2caf89c8fd7b91868fef36a90f3da";
        readonly SECTION_SAFE_PBR_RECIPE: "943e236d56f1fcafde125adedce2a8e82fe4816c5daa17a37dec7100eb05e50b";
        readonly TILED_PBR_RECIPE: "2d41c04b242c232d4ada0a2ca52d06a21887968702da6499522563d91122b5b4";
    };
    readonly UNLIT: {
        readonly BASIC_PBR_RECIPE: "d8d1ef43fe93893e787f661b6eafdb8740c0150c8bdfa7c89a2aa4604ed1185f";
        readonly BASIC_PBR_UV_REPAIR_RECIPE: "163b1d1348c67b25cdc2ad43468c866af5370fcf1d12a11994d6171f7fe27230";
        readonly BASIC_PBR_NATIVE_UV_RECIPE: "49ad43bb47832aead1e144d691185540f930721b80fbed6db571f9e3b4e0927f";
        readonly BASIC_PBR_RENDER_UV_RECIPE: "ed1296e757261f94990c5b5606a97e2b3a1e9cecd83facf2b567e2d608ca37a8";
        readonly RESILIENT_PBR_RECIPE: "79834ae9dd60ecb9586dff0bb755ce9c85d63118f489091f9716a52fa0bcad8d";
        readonly SECTION_SAFE_PBR_RECIPE: "c2881c9de5ad9c837cbfe8057c79b590771937f6cd0b30c84fcd1a4249a7e79d";
        readonly TILED_PBR_RECIPE: "21b38ec39d64a10ad58650d1d14e02daf2509aeb5d6dbed3ee215724ce80c690";
    };
    readonly TRANSMISSION: {
        readonly BASIC_PBR_RECIPE: "1fb46bedf43f476a3082db545b4af9d37012614debfb055aee1d75831c51f756";
        readonly BASIC_PBR_UV_REPAIR_RECIPE: "722b2313aebfd45a6b73f3f4b02f71ab4880e8bbb2d499f794e19b27f250e55d";
        readonly BASIC_PBR_NATIVE_UV_RECIPE: "e4d518bad5383e1a621fb7712fa28a966996cf0c5ad8580f9d38b54b1395826b";
        readonly BASIC_PBR_RENDER_UV_RECIPE: "9a2553fbbc77903607b7ee9c7ed8b9151dc9c9f3fb00b979c0a0fe25835f9849";
        readonly RESILIENT_PBR_RECIPE: "6be2a6226f3a0fb7a1b83591dba8f0ead23f5920c0a67a773e0165c8d88f0b36";
        readonly SECTION_SAFE_PBR_RECIPE: "519951c115eaec6eae7a80a907dc9727bf9ace42fca2ffab78d44c6e2e9356d4";
        readonly TILED_PBR_RECIPE: "55ae5c08611bff7d08cb4a664ccaa383f69bc2ebce5693d5b3a1866f31ee3d76";
    };
    readonly SHEEN: {
        readonly BASIC_PBR_RECIPE: "4353730cda7eaeae74816afdc74c7674050046102695a1329c365f5c468e90e0";
        readonly BASIC_PBR_UV_REPAIR_RECIPE: "62a6d6a5f11f9008b0d60274ccb7730d9376eb0ecfe2def664f94eda13845b65";
        readonly BASIC_PBR_NATIVE_UV_RECIPE: "bf6078bccd48916e47589b719d51e386fb93ae267fa24f526bf60afe14cd6be9";
        readonly BASIC_PBR_RENDER_UV_RECIPE: "e5cf721273e29ec1c5a5c668c3a11d5a8064cefe22ff4ab45817127bf1a2f1a4";
        readonly RESILIENT_PBR_RECIPE: "eddcdec2be18b6c186d4fe9f4ee2d9c45aaadf3fcd6e3d0d3991852965f98a84";
        readonly SECTION_SAFE_PBR_RECIPE: "615b7e9ec71a76538e4dc1734d1564f18bfbdfc4c2514c8b1c727eeff9ac3b40";
        readonly TILED_PBR_RECIPE: "17142e149518f048da29062a6bf0c3401b7b1521e44d99240a34ce70c6163389";
    };
};
export declare const preservesSheenInputs: (recipeHash: string) => boolean;
export declare const preservesTransmissionInputs: (recipeHash: string) => boolean;
export declare const preservesUnlitInputs: (recipeHash: string) => boolean;
export declare const preservesPhysicalInputs: (recipeHash: string) => boolean;
export declare const preservesNativeTiling: (recipeHash: string) => boolean;
export interface CompatibilityBake {
    version: 1 | 2 | 3;
    policy: 'bake-unsupported-opaque-v1' | 'bake-static-pbr-alpha-v2' | 'basic-pbr-v1';
    unsupported: {
        materialId: string;
        reason: string;
    }[];
    derived: {
        meshId: string;
        materialId: string;
        sourceSlotIndex: number;
        materialPath: string;
        slotName: string;
        path: string;
        sha256: string;
        byteLength: number;
        inputs: Omit<BakedMaterialBinding['inputs'], 'bakedPayloadHash'>;
    }[];
}
/** Fixed native recipe and inventory identities only. Descriptors cannot redirect file transfers. */
export declare function inspectCompatibilityBake(value: unknown, sourceAssets: ReadonlyMap<string, Record<string, unknown>>, components: readonly Record<string, unknown>[], files: ReadonlyMap<string, CandidateFile>, exportedMaterialIds: ReadonlySet<string>, meshSlots?: ReadonlyMap<string, readonly number[]>): CompatibilityBake;
/** Independent web admission gate for generated UVs, even if a native exporter reports success. */
export declare function validateCompatibilityBakePayload(bytes: Uint8Array, preserveAlpha?: boolean, basicOnly?: boolean, preserveTiling?: boolean, recipeHash?: string): void;
