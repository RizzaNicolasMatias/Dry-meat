module.exports = [
(()=>{"use strict";return[
"[next]/internal/font/google/bodoni_moda_3a1d2074.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_3a1d2074$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/bodoni_moda_3a1d2074.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_3a1d2074$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Bodoni Moda', 'Bodoni Moda Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_3a1d2074$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_3a1d2074$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/space_grotesk_92860ccc.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_92860ccc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_92860ccc.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_92860ccc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_92860ccc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_92860ccc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_3a1d2074$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/bodoni_moda_3a1d2074.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_92860ccc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_92860ccc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-rsc] (ecmascript)");
;
;
;
;
;
/** Convierte una ruta (/images/x.png) en URL absoluta, como exigen Open Graph y JSON-LD */ const absoluteUrl = (path)=>new URL(path, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_SETTINGS"].siteUrl).toString();
const metadata = {
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_SETTINGS"].siteUrl),
    title: "DRY•MEAT | Snack Proteico de Carne Vacuna · Sabor Clásico 30 g",
    description: "Presentación oficial de DRY•MEAT (@drymeat.arg). Snack proteico 100% carne vacuna, 50% proteína, 0% TACC, fuente de BCAA y aminoácidos esenciales. Hecho en Argentina. Encontralo en gimnasios y comercios aliados.",
    openGraph: {
        title: "DRY•MEAT | Snack Proteico de Carne Vacuna (30 g)",
        description: "100% Carne Vacuna · 50% Proteína · 0% TACC · Fuente de BCAA y aminoácidos esenciales. Conocé todos los puntos de venta oficiales.",
        type: "website",
        locale: "es_AR",
        images: [
            {
                // CORRECCIÓN: antes usaba assets.packHero, que no existe (rompía el build)
                url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND_CONTENT"].assets.packHeroReference,
                alt: "Envase DRY•MEAT Snack Proteico Sabor Clásico 30 g"
            }
        ]
    }
};
function RootLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                name: "DRY•MEAT",
                sameAs: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND_CONTENT"].instagramUrl
                ],
                logo: absoluteUrl(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND_CONTENT"].assets.logo),
                areaServed: "AR"
            },
            {
                "@type": "Product",
                name: "DRY•MEAT Snack Proteico de Carne Vacuna - Sabor Clásico (30 g)",
                brand: {
                    "@type": "Brand",
                    name: "DRY•MEAT"
                },
                description: "Snack proteico de carne vacuna, sabor Clásico, bolsa de 30 g. 100% carne vacuna, 50% proteína, 0% TACC, fuente de BCAA y aminoácidos esenciales. Hecho en Argentina.",
                image: [
                    absoluteUrl(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND_CONTENT"].assets.packHeroReference)
                ],
                countryOfOrigin: "Argentina",
                weight: {
                    "@type": "QuantitativeValue",
                    value: "30",
                    unitCode: "GRM"
                },
                availableAtOrFrom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PARTNER_STORES"].map((store)=>({
                        "@type": "Place",
                        name: store.name
                    }))
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "es-AR",
        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_3a1d2074$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_92860ccc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "antialiased selection:bg-[#BC5442] selection:text-[#F7EFE2]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND_CONTENT",
    ()=>BRAND_CONTENT,
    "CHAPTERS_COPY",
    ()=>CHAPTERS_COPY,
    "DETAIL_CALLOUTS",
    ()=>DETAIL_CALLOUTS,
    "HERO_HOOK_OPTIONS",
    ()=>HERO_HOOK_OPTIONS,
    "NUTRITION_SETS",
    ()=>NUTRITION_SETS,
    "PARTNER_STORES",
    ()=>PARTNER_STORES,
    "PRODUCT_PATH",
    ()=>PRODUCT_PATH,
    "SITE_SETTINGS",
    ()=>SITE_SETTINGS,
    "getActiveNutrition",
    ()=>getActiveNutrition
]);
const SITE_SETTINGS = {
    /** Oculta todos los [verificar] y [COMPLETAR] cuando pasa a false */ showVerifyTags: true,
    /** "notes" (90 kcal, 16g, 0g, 1,95g) | "photo" (99 kcal, 17g, 0g, 3,5g) */ activeNutritionSet: "notes",
    nutritionNeedsVerification: true,
    /** Índice de la frase gancho activa del Hero (0, 1 o 2) */ activeHeroHookIndex: 0,
    /**
   * Proporción ANCHO / ALTO de pack-cutout.png (ej. 1000x1500 px => "2 / 3").
   * Si no coincide con tu PNG, las líneas de detalle quedan desalineadas.
   */ packAspect: "731 / 1080",
    /**
   * URL pública del sitio (para Open Graph y datos estructurados).
   * Cuando publiques, ponla en Vercel como variable NEXT_PUBLIC_SITE_URL.
   */ siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
};
const HERO_HOOK_OPTIONS = [
    {
        id: "opcion-1",
        text: "SNACK PROTEICO DE CARNE VACUNA · SABOR CLÁSICO · 30 G"
    },
    {
        id: "opcion-2",
        text: "100% CARNE VACUNA · 50% PROTEÍNA · BOLSA DE 30 G"
    },
    {
        id: "opcion-3",
        text: "100% CARNE VACUNA · 50% PROTEÍNA · 0% TACC · HECHO EN ARGENTINA"
    }
];
const BRAND_CONTENT = {
    name: "DRY•MEAT",
    subtitle: "SNACK PROTEICO DE CARNE VACUNA",
    flavor: "SABOR CLÁSICO",
    netWeight: "30 G",
    instagramHandle: "@drymeat.arg",
    instagramUrl: "https://www.instagram.com/drymeat.arg/",
    whatsappNumber: "[COMPLETAR]",
    whatsappDisplay: "[COMPLETAR]",
    priceDisplay: "[COMPLETAR]",
    whatsappPrefilledMessage: "¡Hola DRY•MEAT! Quiero consultar por el Snack Proteico de Carne Vacuna Sabor Clásico (30 g).",
    assets: {
        logo: "/images/logo.png",
        packCutout: "/images/pack-cutout.png",
        packHeroReference: "/images/pack-hero.png"
    },
    palette: {
        obsidian: "#120808",
        terracotta: "#BC5442",
        cream: "#F7EFE2",
        charcoal: "#1B1B19",
        gold: "#C9A24A",
        argentina: "#75AADB"
    }
};
const PRODUCT_PATH = {
    section1_hero: {
        sectionNumber: 1,
        id: "section1_hero",
        name: "01. HERO (Aterrizaje Central)",
        desktop: {
            x: 0,
            y: 3,
            rotate: -2,
            scale: 1.0,
            rotateX: 4,
            rotateY: -4
        },
        mobile: {
            x: 0,
            y: 4,
            rotate: -2,
            scale: 0.95,
            rotateX: 0,
            rotateY: 0
        }
    },
    section2_beef: {
        sectionNumber: 2,
        id: "section2_beef",
        name: "02. 100% CARNE VACUNA (Derecha Inclinada)",
        desktop: {
            x: 22,
            y: 2,
            rotate: -9,
            scale: 1.06,
            rotateX: 5,
            rotateY: -10
        },
        mobile: {
            x: 0,
            y: 10,
            rotate: -6,
            scale: 0.92,
            rotateX: 0,
            rotateY: 0
        }
    },
    section3_protein: {
        sectionNumber: 3,
        id: "section3_protein",
        name: "03. 50% PROTEÍNA (Solapando el 50)",
        desktop: {
            x: -16,
            y: 0,
            rotate: 8,
            scale: 1.05,
            rotateX: -3,
            rotateY: 8
        },
        mobile: {
            x: 0,
            y: 8,
            rotate: 5,
            scale: 0.92,
            rotateX: 0,
            rotateY: 0
        }
    },
    section4_numbers: {
        sectionNumber: 4,
        id: "section4_numbers",
        name: "04. LOS NÚMEROS (Centro con Hexágonos)",
        desktop: {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 0.98,
            rotateX: 2,
            rotateY: 0
        },
        mobile: {
            x: 0,
            y: 6,
            rotate: 0,
            scale: 0.88,
            rotateX: 0,
            rotateY: 0
        }
    },
    section5_tacc: {
        sectionNumber: 5,
        id: "section5_tacc",
        name: "05. 0% TACC (Inclinada Izquierda)",
        desktop: {
            x: -22,
            y: 2,
            rotate: 11,
            scale: 1.04,
            rotateX: 4,
            rotateY: 9
        },
        mobile: {
            x: 0,
            y: 10,
            rotate: 7,
            scale: 0.9,
            rotateX: 0,
            rotateY: 0
        }
    },
    section6_bcaa: {
        sectionNumber: 6,
        id: "section6_bcaa",
        name: "06. BCAA (Detrás de Banda Dorada)",
        desktop: {
            x: 18,
            y: 0,
            rotate: -7,
            scale: 1.04,
            rotateX: 3,
            rotateY: -7
        },
        mobile: {
            x: 0,
            y: 8,
            rotate: -5,
            scale: 0.9,
            rotateX: 0,
            rotateY: 0
        }
    },
    section7_argentina: {
        sectionNumber: 7,
        id: "section7_argentina",
        name: "07. HECHO EN ARGENTINA",
        desktop: {
            x: -18,
            y: 2,
            rotate: 6,
            scale: 1.03,
            rotateX: 3,
            rotateY: 6
        },
        mobile: {
            x: 0,
            y: 8,
            rotate: 4,
            scale: 0.9,
            rotateX: 0,
            rotateY: 0
        }
    },
    section8_30g: {
        sectionNumber: 8,
        id: "section8_30g",
        name: "08. 30 G (Escala Bolsillo)",
        desktop: {
            x: 20,
            y: 6,
            rotate: -8,
            scale: 0.52,
            rotateX: 2,
            rotateY: -5
        },
        mobile: {
            x: 0,
            y: 8,
            rotate: -5,
            scale: 0.55,
            rotateX: 0,
            rotateY: 0
        }
    },
    section9_stores: {
        sectionNumber: 9,
        id: "section9_stores",
        name: "09. DÓNDE COMPRAR (Retirada Superior)",
        desktop: {
            x: 36,
            y: -32,
            rotate: 12,
            scale: 0.45,
            rotateX: 0,
            rotateY: 0
        },
        mobile: {
            x: 0,
            y: -42,
            rotate: 6,
            scale: 0.4,
            rotateX: 0,
            rotateY: 0
        }
    },
    section10_close: {
        sectionNumber: 10,
        id: "section10_close",
        name: "10. CIERRE (Primer Plano Final)",
        desktop: {
            x: 22,
            y: 4,
            rotate: -6,
            scale: 1.12,
            rotateX: 4,
            rotateY: -8
        },
        mobile: {
            x: 0,
            y: 10,
            rotate: -4,
            scale: 0.95,
            rotateX: 0,
            rotateY: 0
        }
    }
};
const DETAIL_CALLOUTS = {
    callout_bull: {
        id: "callout_bull",
        sectionNumber: 2,
        anchorX: 38,
        anchorY: 31,
        labelX: -18,
        labelY: 22,
        code: "REF · 01",
        label: "EMBLEMA TORO · 100% CARNE VACUNA"
    },
    callout_protein: {
        id: "callout_protein",
        sectionNumber: 3,
        anchorX: 45,
        anchorY: 61,
        labelX: 112,
        labelY: 54,
        code: "REF · 02",
        label: "50% PROTEÍNA · POR BOLSA"
    },
    callout_tacc: {
        id: "callout_tacc",
        sectionNumber: 5,
        anchorX: 77,
        anchorY: 80,
        labelX: 115,
        labelY: 76,
        code: "REF · 03",
        label: "0% TACC"
    },
    callout_argentina: {
        id: "callout_argentina",
        sectionNumber: 7,
        anchorX: 32,
        anchorY: 88,
        labelX: -16,
        labelY: 86,
        code: "REF · 04",
        label: "HECHO EN ARGENTINA"
    }
};
const NUTRITION_SETS = {
    notes: [
        {
            id: "kcal",
            label: "KCAL",
            numericValue: 90,
            decimals: 0,
            unit: "",
            displayValue: "90"
        },
        {
            id: "proteina",
            label: "PROTEÍNA",
            numericValue: 16,
            decimals: 0,
            unit: "G",
            displayValue: "16G",
            isPrimary: true
        },
        {
            id: "carbs",
            label: "CARBOHIDRATOS",
            numericValue: 0,
            decimals: 0,
            unit: "G",
            displayValue: "0G"
        },
        {
            id: "grasas",
            label: "GRASAS",
            numericValue: 1.95,
            decimals: 2,
            unit: "G",
            displayValue: "1,95G"
        }
    ],
    photo: [
        {
            id: "kcal",
            label: "KCAL",
            numericValue: 99,
            decimals: 0,
            unit: "",
            displayValue: "99"
        },
        {
            id: "proteina",
            label: "PROTEÍNA",
            numericValue: 17,
            decimals: 0,
            unit: "G",
            displayValue: "17G",
            isPrimary: true
        },
        {
            id: "carbs",
            label: "CARBS",
            numericValue: 0,
            decimals: 0,
            unit: "G",
            displayValue: "0G"
        },
        {
            id: "grasas",
            label: "GRASAS",
            numericValue: 3.5,
            decimals: 1,
            unit: "G",
            displayValue: "3,5G"
        }
    ]
};
function getActiveNutrition() {
    return NUTRITION_SETS[SITE_SETTINGS.activeNutritionSet];
}
const CHAPTERS_COPY = {
    section1: {
        code: "CAP · 01 // PRESENTACIÓN",
        behindWordTop: "DRY",
        behindWordBottom: "MEAT",
        scrollLabel: "SCROLL PARA CORTAR LA ESCENA"
    },
    section2: {
        code: "CAP · 02 // ORIGEN",
        giantNumber: "100%",
        titleMain: "CARNE",
        titleItalic: "VACUNA",
        metaLine: "SNACK PROTEICO DE CARNE VACUNA · SABOR CLÁSICO · 30 G"
    },
    section3: {
        code: "CAP · 03 // PROTEÍNA",
        giantNumber: "50",
        unit: "%",
        titleMain: "PROTEÍNA",
        metaLine: "CONT. NETO: 30 G · SABOR CLÁSICO"
    },
    section4: {
        code: "CAP · 04 // DATOS DEL PACK",
        titleMain: "LOS",
        titleItalic: "NÚMEROS",
        verifyBadge: "[verificar con la marca]",
        // [verificar con la marca] Debe coincidir EXACTAMENTE con el envase real antes de mostrarse.
        notice: "UNA VEZ ABIERTO, CONSUMIR DENTRO DE LAS SIGUIENTES 24 HS."
    },
    section5: {
        code: "CAP · 05 // SELLO",
        headline: "0% TACC"
    },
    section6: {
        code: "CAP · 06 // AMINOÁCIDOS",
        bandText: "FUENTE DE BCAA Y AMINOÁCIDOS ESENCIALES · ",
        headline: "FUENTE DE BCAA Y AMINOÁCIDOS ESENCIALES"
    },
    section7: {
        code: "CAP · 07 // ORIGEN NACIONAL",
        titleMain: "HECHO EN",
        titleItalic: "ARGENTINA"
    },
    section8: {
        code: "CAP · 08 // FORMATO",
        giantWeight: "30 G",
        subtitle: "EN TU BOLSILLO",
        moments: [
            {
                id: "gym",
                label: "GIMNASIO"
            },
            {
                id: "ruta",
                label: "RUTA"
            },
            {
                id: "camping",
                label: "CAMPING"
            },
            {
                id: "oficina",
                label: "OFICINA"
            }
        ]
    },
    section9: {
        code: "CAP · 09 // COMERCIOS ALIADOS",
        titleMain: "ENCONTRALO",
        titleItalic: "EN TU GYM",
        subtitle: "Conseguí DRY•MEAT en gimnasios, centros de entrenamiento, almacenes gourmet y tiendas aliadas.",
        availabilityNote: "Consultá disponibilidad en cada local"
    },
    section10: {
        code: "CAP · 10 // CONTACTO DIRECTO",
        titleMain: "PEDILO POR",
        titleItalic: "WHATSAPP",
        subtitle: "SNACK PROTEICO DE CARNE VACUNA · SABOR CLÁSICO · 30 G"
    }
};
const PARTNER_STORES = [
    {
        id: "octaviano",
        name: "Octaviano",
        category: "Gimnasio",
        logoFilename: "/images/stores/octaviano.png",
        branches: [
            {
                id: "octaviano-1",
                address: "Pringles 1650",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            },
            {
                id: "octaviano-2",
                address: "Rubén Darío 492",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            },
            {
                id: "octaviano-3",
                address: "Higueritas 2099",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            },
            {
                id: "octaviano-4",
                address: "9 de Julio 373",
                neighborhood: "Barrio Sur",
                zone: "San Miguel de Tucumán",
                cityProvince: "San Miguel de Tucumán, Tucumán"
            },
            {
                id: "octaviano-5",
                address: "Santa Fe 481",
                neighborhood: "Barrio Norte",
                zone: "San Miguel de Tucumán",
                cityProvince: "San Miguel de Tucumán, Tucumán"
            },
            {
                id: "octaviano-6",
                address: "San Martín 605",
                neighborhood: "Barrio Norte",
                zone: "San Miguel de Tucumán",
                cityProvince: "San Miguel de Tucumán, Tucumán"
            }
        ]
    },
    {
        id: "jockey-gym",
        name: "Jockey Gym",
        category: "Gimnasio",
        logoFilename: "/images/stores/jockey-gym.png",
        branches: [
            {
                id: "jockey-1",
                address: "Av. Perón 1790",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            },
            {
                id: "jockey-2",
                address: "Shopping Solar del Cerro",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            },
            {
                id: "jockey-3",
                address: "Av. Belgrano 4500",
                zone: "San Miguel de Tucumán",
                cityProvince: "San Miguel de Tucumán, Tucumán"
            },
            {
                id: "jockey-4",
                address: "Av. Soldati 380",
                neighborhood: "Hotel Catalinas",
                zone: "San Miguel de Tucumán",
                cityProvince: "San Miguel de Tucumán, Tucumán"
            },
            {
                id: "jockey-5",
                address: "San Martín 451",
                neighborhood: "Microcentro",
                zone: "San Miguel de Tucumán",
                cityProvince: "San Miguel de Tucumán, Tucumán"
            },
            {
                id: "jockey-6",
                address: "Muñecas 692",
                neighborhood: "Barrio Norte",
                zone: "San Miguel de Tucumán",
                cityProvince: "San Miguel de Tucumán, Tucumán"
            },
            {
                id: "jockey-7",
                address: "Buenos Aires 632",
                neighborhood: "Barrio Sur",
                zone: "San Miguel de Tucumán",
                cityProvince: "San Miguel de Tucumán, Tucumán"
            }
        ]
    },
    {
        id: "la-salumeria",
        name: "La Salumería",
        category: "Almacén Gourmet",
        categoryNeedsVerify: true,
        logoFilename: "/images/stores/la-salumeria.png",
        branches: [
            {
                id: "salumeria-1",
                address: "Frías Silva 778",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            },
            {
                id: "salumeria-2",
                address: "Lamadrid 1121",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            }
        ]
    },
    {
        id: "hammer",
        name: "Hammer",
        category: "Gimnasio",
        logoFilename: "/images/stores/hammer.png",
        branches: [
            {
                id: "hammer-1",
                address: "Av. Aconquija 2044",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            }
        ]
    },
    {
        id: "vitali",
        name: "Vitali",
        category: "Gimnasio",
        categoryNeedsVerify: true,
        logoFilename: "/images/stores/vitali.png",
        branches: [
            {
                id: "vitali-1",
                address: "Santiago del Estero 815",
                zone: "San Miguel de Tucumán",
                cityProvince: "San Miguel de Tucumán, Tucumán"
            }
        ]
    },
    {
        id: "rc-gym",
        name: "RC Gym",
        category: "Gimnasio",
        logoFilename: "/images/stores/rc-gym.png",
        branches: [
            {
                id: "rc-gym-1",
                address: "Av. Aconquija 2122",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            }
        ]
    },
    {
        id: "sofia-madrid",
        name: "Sofía Madrid",
        category: "Comercio Aliado",
        categoryNeedsVerify: true,
        logoFilename: "/images/stores/sofia-madrid.png",
        branches: [
            {
                id: "sofia-madrid-1",
                address: "Salas y Valdés 1790",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            }
        ]
    },
    {
        id: "tmr-training-center",
        name: "TMR Training Center",
        category: "Gimnasio",
        logoFilename: "/images/stores/tmr-training-center.png",
        branches: [
            {
                id: "tmr-1",
                address: "Juan Fanzolato 400",
                zone: "Cevil Redondo",
                cityProvince: "Cevil Redondo, Tucumán"
            }
        ]
    },
    {
        id: "allegra-open-drugstore",
        name: "Allegra Open Drugstore",
        category: "Drugstore",
        logoFilename: "/images/stores/allegra-open-drugstore.png",
        branches: [
            {
                id: "allegra-1",
                address: "Av. Perón 1600",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            }
        ]
    },
    {
        id: "tuluka",
        name: "Tuluka",
        category: "Gimnasio",
        categoryNeedsVerify: true,
        logoFilename: "/images/stores/tuluka.png",
        branches: [
            {
                id: "tuluka-1",
                address: "Av. Perón 1710",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán"
            }
        ]
    },
    {
        id: "nutriendo-raices",
        name: "Nutriendo Raíces",
        category: "Dietética / Nutrición",
        categoryNeedsVerify: true,
        logoFilename: "/images/stores/nutriendo-raices.png",
        branches: [
            {
                id: "nutriendo-1",
                address: "Av. Perón 1900",
                zone: "Yerba Buena",
                cityProvince: "Yerba Buena, Tucumán",
                verifyNote: 'verificar qué significa "SINAG 1323"'
            }
        ]
    },
    {
        id: "el-almacen-gourmet",
        name: "El Almacén Gourmet",
        category: "Almacén Gourmet",
        categoryNeedsVerify: true,
        logoFilename: "/images/stores/el-almacen-gourmet.png",
        branches: [
            {
                id: "almacen-gourmet-1",
                address: "Jujuy 494",
                zone: "Santiago del Estero",
                cityProvince: "Santiago del Estero, Santiago del Estero",
                verifyNote: "verificar si es la provincia de Santiago del Estero o San Miguel de Tucumán"
            }
        ]
    }
];
}),
]})(),
"[next]/internal/font/google/bodoni_moda_3a1d2074.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "bodoni_moda_3a1d2074-module__oOAfHa__className",
  "variable": "bodoni_moda_3a1d2074-module__oOAfHa__variable",
});
}),
"[next]/internal/font/google/space_grotesk_92860ccc.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "space_grotesk_92860ccc-module__5kdKUq__className",
  "variable": "space_grotesk_92860ccc-module__5kdKUq__variable",
});
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1co8a-18tni5m._.js.map