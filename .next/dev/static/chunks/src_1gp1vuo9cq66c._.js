(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/BullLogoAssembly.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AngularPreloader",
    ()=>AngularPreloader,
    "AngularShardsOverlay",
    ()=>AngularShardsOverlay,
    "GeometricBullSvg",
    ()=>GeometricBullSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GeometricBullSvg({ className = "w-28 h-24", assembled = true, fillColor = "#BC5442", strokeColor = "#120808" }) {
    const facets = [
        {
            points: "22,18 32,36 25,40",
            tx: -22,
            ty: -16,
            rot: -14
        },
        {
            points: "46,20 55,34 45,36",
            tx: -10,
            ty: -20,
            rot: 12
        },
        {
            points: "25,40 45,36 38,56 18,54",
            tx: -18,
            ty: -8,
            rot: -10
        },
        {
            points: "45,36 78,33 98,46 62,58",
            tx: 8,
            ty: -18,
            rot: 9
        },
        {
            points: "38,56 62,58 55,82 36,75",
            tx: -12,
            ty: 10,
            rot: -8
        },
        {
            points: "62,58 98,46 112,62 78,80",
            tx: 16,
            ty: -10,
            rot: 8
        },
        {
            points: "36,75 55,82 62,102 48,104",
            tx: -14,
            ty: 18,
            rot: -12
        },
        {
            points: "62,58 78,80 86,112 74,114 68,88",
            tx: 6,
            ty: 20,
            rot: 7
        },
        {
            points: "98,46 126,56 132,78 112,62",
            tx: 20,
            ty: -6,
            rot: 13
        },
        {
            points: "112,62 132,78 128,106 118,106 114,82",
            tx: 22,
            ty: 16,
            rot: -11
        },
        {
            points: "126,56 142,42 136,30 146,42 132,64",
            tx: 26,
            ty: -16,
            rot: 16
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 160 125",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        role: "img",
        "aria-label": "Toro geométrico emblema de DRY•MEAT",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                facets.map((f, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: f.points,
                        fill: fillColor,
                        stroke: strokeColor,
                        strokeWidth: "1.2",
                        style: {
                            transformBox: "fill-box",
                            transformOrigin: "center",
                            transform: assembled ? "translate3d(0px, 0px, 0px) rotate(0deg) scale(1)" : `translate3d(${f.tx}px, ${f.ty}px, 0px) rotate(${f.rot}deg) scale(0.75)`,
                            opacity: assembled ? 1 : 0,
                            transition: `transform 850ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 40}ms, opacity 650ms ease ${idx * 40}ms`
                        }
                    }, idx, false, {
                        fileName: "[project]/src/components/BullLogoAssembly.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "29,45 35,43 32,47",
                    fill: "#F7EFE2",
                    style: {
                        transformBox: "fill-box",
                        transformOrigin: "center",
                        opacity: assembled ? 1 : 0,
                        transition: "opacity 600ms ease 500ms"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/BullLogoAssembly.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BullLogoAssembly.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BullLogoAssembly.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = GeometricBullSvg;
function AngularShardsOverlay({ shardsContainerRef }) {
    const shards = [
        {
            id: "shard-1",
            points: "120,180 185,140 160,225",
            fill: "#BC5442",
            fromX: -180,
            fromY: -120,
            fromRot: -35
        },
        {
            id: "shard-2",
            points: "820,150 890,195 835,245 795,190",
            fill: "#C9A24A",
            fromX: 190,
            fromY: -110,
            fromRot: 42
        },
        {
            id: "shard-3",
            points: "150,520 215,490 190,565",
            fill: "#F7EFE2",
            fromX: -210,
            fromY: 140,
            fromRot: 28
        },
        {
            id: "shard-4",
            points: "810,510 875,475 860,555 795,540",
            fill: "#BC5442",
            fromX: 200,
            fromY: 130,
            fromRot: -30
        },
        {
            id: "shard-5",
            points: "290,110 340,85 325,135",
            fill: "#C9A24A",
            fromX: -90,
            fromY: -160,
            fromRot: -22
        },
        {
            id: "shard-6",
            points: "690,585 745,560 725,620",
            fill: "#BC5442",
            fromX: 120,
            fromY: 170,
            fromRot: 25
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: shardsContainerRef,
        viewBox: "0 0 1000 700",
        preserveAspectRatio: "xMidYMid slice",
        fill: "none",
        className: "pointer-events-none absolute inset-0 w-full h-full",
        "aria-hidden": "true",
        children: shards.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                "data-shard": "true",
                "data-from-x": s.fromX,
                "data-from-y": s.fromY,
                "data-from-rot": s.fromRot,
                points: s.points,
                fill: s.fill,
                style: {
                    transformBox: "fill-box",
                    transformOrigin: "center",
                    opacity: 0
                }
            }, s.id, false, {
                fileName: "[project]/src/components/BullLogoAssembly.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/BullLogoAssembly.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_c1 = AngularShardsOverlay;
function AngularPreloader({ ready, onComplete }) {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const topBladeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomBladeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const centerContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const numberRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const barRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        value: 0
    });
    const doneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onCompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onComplete);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AngularPreloader.useEffect": ()=>{
            onCompleteRef.current = onComplete;
        }
    }["AngularPreloader.useEffect"], [
        onComplete
    ]);
    const paint = ()=>{
        const v = progressRef.current.value;
        if (numberRef.current) numberRef.current.textContent = `${Math.round(v)}%`;
        if (barRef.current) barRef.current.style.transform = `scaleX(${v / 100})`;
    };
    // Avance optimista mientras carga todo
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AngularPreloader.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "AngularPreloader.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(progressRef.current, {
                        value: 85,
                        duration: 2.4,
                        ease: "power1.out",
                        onUpdate: paint
                    });
                }
            }["AngularPreloader.useEffect.ctx"]);
            return ({
                "AngularPreloader.useEffect": ()=>ctx.revert()
            })["AngularPreloader.useEffect"];
        }
    }["AngularPreloader.useEffect"], []);
    // Cierre cuando todo está listo
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AngularPreloader.useEffect": ()=>{
            if (!ready || doneRef.current) return;
            doneRef.current = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "AngularPreloader.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(progressRef.current, {
                        value: 100,
                        duration: 0.45,
                        ease: "power2.out",
                        overwrite: true,
                        onUpdate: paint,
                        onComplete: {
                            "AngularPreloader.useEffect": ()=>{
                                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                                    onComplete: {
                                        "AngularPreloader.useEffect.tl": ()=>{
                                            if (rootRef.current) {
                                                rootRef.current.style.display = "none";
                                                rootRef.current.setAttribute("aria-hidden", "true");
                                            }
                                            onCompleteRef.current();
                                        }
                                    }["AngularPreloader.useEffect.tl"]
                                });
                                tl.to(centerContentRef.current, {
                                    opacity: 0,
                                    scale: 0.94,
                                    duration: 0.25,
                                    ease: "power2.in"
                                }).to(topBladeRef.current, {
                                    yPercent: -105,
                                    xPercent: -12,
                                    duration: 0.75,
                                    ease: "power4.inOut"
                                }, "-=0.05").to(bottomBladeRef.current, {
                                    yPercent: 105,
                                    xPercent: 12,
                                    duration: 0.75,
                                    ease: "power4.inOut"
                                }, "<");
                            }
                        }["AngularPreloader.useEffect"]
                    });
                }
            }["AngularPreloader.useEffect"]);
        // Sin cleanup a propósito: la animación de salida debe terminar sola
        }
    }["AngularPreloader.useEffect"], [
        ready
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        role: "status",
        "aria-label": "Cargando presentación DRY•MEAT",
        className: "fixed inset-0 z-[60] overflow-hidden pointer-events-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: topBladeRef,
                className: "absolute inset-0 bg-[#120808]",
                style: {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 42%, 0% 62%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/BullLogoAssembly.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bottomBladeRef,
                className: "absolute inset-0 bg-[#1B1B19]",
                style: {
                    clipPath: "polygon(0% 61.5%, 100% 41.5%, 100% 100%, 0% 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/BullLogoAssembly.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: centerContentRef,
                className: "relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-[#F7EFE2]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GeometricBullSvg, {
                        assembled: true,
                        className: "w-24 h-20 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BullLogoAssembly.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-serif-display text-4xl sm:text-6xl font-black tracking-tight uppercase",
                        children: [
                            "DRY",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#BC5442]",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BullLogoAssembly.tsx",
                                lineNumber: 305,
                                columnNumber: 14
                            }, this),
                            "MEAT"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BullLogoAssembly.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-56 h-[2px] bg-[#F7EFE2]/20 mt-6 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: barRef,
                            className: "w-full h-full bg-[#BC5442] origin-left",
                            style: {
                                transform: "scaleX(0)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/BullLogoAssembly.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BullLogoAssembly.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: numberRef,
                        className: "mt-3 font-serif-display text-2xl font-bold tabular-nums text-[#C9A24A]",
                        children: "0%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BullLogoAssembly.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BullLogoAssembly.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BullLogoAssembly.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_s(AngularPreloader, "ct6ej/Gy83FJfcVJ9IGEo+NdebY=");
_c2 = AngularPreloader;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "GeometricBullSvg");
__turbopack_context__.k.register(_c1, "AngularShardsOverlay");
__turbopack_context__.k.register(_c2, "AngularPreloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CalibrationPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalibrationPanel",
    ()=>CalibrationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CalibrationPanel({ paths, onChangePaths, callouts, onChangeCallouts, selectedHookIndex, onChangeHookIndex }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deviceMode, setDeviceMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("desktop");
    const [selectedSectionKey, setSelectedSectionKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("section1_hero");
    const [selectedCalloutKey, setSelectedCalloutKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("callout_bull");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const currentSection = paths[selectedSectionKey];
    const currentPose = currentSection[deviceMode];
    const currentCallout = callouts[selectedCalloutKey];
    const updatePoseField = (field, val)=>{
        onChangePaths({
            ...paths,
            [selectedSectionKey]: {
                ...currentSection,
                [deviceMode]: {
                    ...currentPose,
                    [field]: val
                }
            }
        });
    };
    const updateCalloutField = (field, val)=>{
        onChangeCallouts({
            ...callouts,
            [selectedCalloutKey]: {
                ...currentCallout,
                [field]: val
            }
        });
    };
    const exportSnippet = `// Pegar en src/data/content.ts
export const PRODUCT_PATH = ${JSON.stringify(paths, null, 2)};

export const DETAIL_CALLOUTS = ${JSON.stringify(callouts, null, 2)};`;
    const handleCopy = ()=>{
        navigator.clipboard.writeText(exportSnippet);
        setCopied(true);
        setTimeout(()=>setCopied(false), 1800);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "fixed bottom-4 left-4 z-50 font-sans-tech text-xs text-[#F7EFE2]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((prev)=>!prev),
                className: "bg-[#1B1B19] border-2 border-[#C9A24A] text-[#C9A24A] px-3.5 py-2 font-bold uppercase tracking-widest",
                children: open ? "CERRAR CALIBRADOR [DEV]" : "CALIBRAR POSES [DEV]"
            }, void 0, false, {
                fileName: "[project]/src/components/CalibrationPanel.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 w-80 sm:w-96 max-h-[78vh] overflow-y-auto bg-[#120808] border-2 border-[#BC5442] p-4 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-[#F7EFE2]/20 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold uppercase tracking-wider text-[#C9A24A]",
                                children: "CALIBRADOR CORTE PREMIUM"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setDeviceMode("desktop"),
                                        className: `px-2 py-0.5 uppercase font-bold ${deviceMode === "desktop" ? "bg-[#BC5442] text-[#F7EFE2]" : "bg-[#1B1B19] text-[#F7EFE2]/60"}`,
                                        children: "Desktop"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setDeviceMode("mobile"),
                                        className: `px-2 py-0.5 uppercase font-bold ${deviceMode === "mobile" ? "bg-[#BC5442] text-[#F7EFE2]" : "bg-[#1B1B19] text-[#F7EFE2]/60"}`,
                                        children: "Mobile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] uppercase tracking-widest text-[#C9A24A] mb-1",
                                children: "Frase Gancho del Hero (Elegí 1 de las 3)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedHookIndex,
                                onChange: (e)=>onChangeHookIndex(Number(e.target.value)),
                                className: "w-full bg-[#1B1B19] border border-[#F7EFE2]/30 text-[#F7EFE2] p-1.5 text-xs",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_HOOK_OPTIONS"].map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: idx,
                                        children: [
                                            "Opción ",
                                            idx + 1,
                                            ": ",
                                            opt.text.slice(0, 38),
                                            "..."
                                        ]
                                    }, opt.id, true, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] uppercase tracking-widest text-[#C9A24A] mb-1",
                                children: [
                                    "Pose de Bolsa por Sección (",
                                    deviceMode,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedSectionKey,
                                onChange: (e)=>setSelectedSectionKey(e.target.value),
                                className: "w-full bg-[#1B1B19] border border-[#F7EFE2]/30 text-[#F7EFE2] p-1.5 text-xs mb-2",
                                children: Object.entries(paths).map(([key, item])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: key,
                                        children: item.name
                                    }, key, false, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "X (vw): ",
                                                    currentPose.x
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: -40,
                                                max: 40,
                                                step: 1,
                                                value: currentPose.x,
                                                onChange: (e)=>updatePoseField("x", parseFloat(e.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Y (vh): ",
                                                    currentPose.y
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: -45,
                                                max: 35,
                                                step: 1,
                                                value: currentPose.y,
                                                onChange: (e)=>updatePoseField("y", parseFloat(e.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Rotate (°): ",
                                                    currentPose.rotate
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: -18,
                                                max: 18,
                                                step: 0.5,
                                                value: currentPose.rotate,
                                                onChange: (e)=>updatePoseField("rotate", parseFloat(e.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Scale: ",
                                                    currentPose.scale
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: 0.35,
                                                max: 1.35,
                                                step: 0.02,
                                                value: currentPose.scale,
                                                onChange: (e)=>updatePoseField("scale", parseFloat(e.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-[#F7EFE2]/20 pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] uppercase tracking-widest text-[#C9A24A] mb-1",
                                children: "Línea de Detalle (% sobre PNG)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedCalloutKey,
                                onChange: (e)=>setSelectedCalloutKey(e.target.value),
                                className: "w-full bg-[#1B1B19] border border-[#F7EFE2]/30 text-[#F7EFE2] p-1.5 text-xs mb-2",
                                children: Object.entries(callouts).map(([key, c])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: key,
                                        children: [
                                            "Sec ",
                                            c.sectionNumber,
                                            ": ",
                                            c.label
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Anchor X (%): ",
                                                    currentCallout.anchorX
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: 0,
                                                max: 100,
                                                step: 1,
                                                value: currentCallout.anchorX,
                                                onChange: (e)=>updateCalloutField("anchorX", parseFloat(e.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Anchor Y (%): ",
                                                    currentCallout.anchorY
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: 0,
                                                max: 100,
                                                step: 1,
                                                value: currentCallout.anchorY,
                                                onChange: (e)=>updateCalloutField("anchorY", parseFloat(e.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Label X (%): ",
                                                    currentCallout.labelX
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: -35,
                                                max: 135,
                                                step: 1,
                                                value: currentCallout.labelX,
                                                onChange: (e)=>updateCalloutField("labelX", parseFloat(e.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Label Y (%): ",
                                                    currentCallout.labelY
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: 0,
                                                max: 100,
                                                step: 1,
                                                value: currentCallout.labelY,
                                                onChange: (e)=>updateCalloutField("labelY", parseFloat(e.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CalibrationPanel.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleCopy,
                        className: "w-full py-2 bg-[#BC5442] text-[#F7EFE2] font-bold uppercase tracking-widest",
                        children: copied ? "¡OBJETO COPIADO!" : "COPIAR OBJETO PARA CONTENT.TS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "bg-[#1B1B19] p-2 text-[10px] overflow-x-auto max-h-32 text-[#F7EFE2]/80",
                        children: exportSnippet
                    }, void 0, false, {
                        fileName: "[project]/src/components/CalibrationPanel.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CalibrationPanel.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CalibrationPanel.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(CalibrationPanel, "vylZLPKdGz93zzI0oYFuIDXgYps=");
_c = CalibrationPanel;
var _c;
__turbopack_context__.k.register(_c, "CalibrationPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CortePremiumExperience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CortePremiumExperience",
    ()=>CortePremiumExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BullLogoAssembly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BullLogoAssembly.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PersistentPackLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PersistentPackLayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalibrationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CalibrationPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
/** Corte diagonal cerrado (Sección 2 oculta) y abierto (Sección 2 completa) */ const HIDDEN_CLIP = "polygon(0% 100%, 100% 125%, 100% 125%, 0% 100%)";
const FULL_CLIP = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
function CortePremiumExperience() {
    _s();
    const [preloaderDone, setPreloaderDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [packReady, setPackReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fontsReady, setFontsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timedOut, setTimedOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pathsState, setPathsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_PATH"]);
    const [calloutsState, setCalloutsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DETAIL_CALLOUTS"]);
    const [hookIndex, setHookIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_SETTINGS"].activeHeroHookIndex);
    // Referencias DOM para GSAP (sin useState por frame)
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const introRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const packContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const floorShadowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shardsContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sec1BehindTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sec1FrontRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sec2BgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sec2BackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sec2NumberRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sec2FrontRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sec2TextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // El preloader se cierra cuando la bolsa y las fuentes están listas
    // (o a los 6 s como máximo, para no quedar trabado nunca).
    const preloaderReady = packReady && fontsReady || timedOut;
    /* ---------------------------------------------------------------------
     0. Fuentes listas + tiempo máximo de espera
     --------------------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CortePremiumExperience.useEffect": ()=>{
            let cancelled = false;
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then({
                    "CortePremiumExperience.useEffect": ()=>{
                        if (!cancelled) setFontsReady(true);
                    }
                }["CortePremiumExperience.useEffect"]);
            } else {
                setFontsReady(true);
            }
            const timer = window.setTimeout({
                "CortePremiumExperience.useEffect.timer": ()=>{
                    if (!cancelled) setTimedOut(true);
                }
            }["CortePremiumExperience.useEffect.timer"], 6000);
            return ({
                "CortePremiumExperience.useEffect": ()=>{
                    cancelled = true;
                    window.clearTimeout(timer);
                }
            })["CortePremiumExperience.useEffect"];
        }
    }["CortePremiumExperience.useEffect"], []);
    /* ---------------------------------------------------------------------
     1. Scroll suave (Lenis): se crea UNA sola vez, ya no se destruye
        cada vez que se mueve un slider del calibrador.
     --------------------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CortePremiumExperience.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].config({
                ignoreMobileResize: true
            });
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion) return;
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.1,
                smoothWheel: true
            });
            lenisRef.current = lenis;
            lenis.stop(); // bloqueado mientras carga el preloader
            lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            const tick = {
                "CortePremiumExperience.useEffect.tick": (time)=>lenis.raf(time * 1000)
            }["CortePremiumExperience.useEffect.tick"];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(tick);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
            return ({
                "CortePremiumExperience.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(tick);
                    lenis.destroy();
                    lenisRef.current = null;
                }
            })["CortePremiumExperience.useEffect"];
        }
    }["CortePremiumExperience.useEffect"], []);
    /* ---------------------------------------------------------------------
     2. Bloqueo de scroll durante el preloader y desbloqueo al terminar
     --------------------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CortePremiumExperience.useEffect": ()=>{
            const html = document.documentElement;
            if (!preloaderDone) {
                html.style.overflow = "hidden";
                return ({
                    "CortePremiumExperience.useEffect": ()=>{
                        html.style.overflow = "";
                    }
                })["CortePremiumExperience.useEffect"];
            }
            html.style.overflow = "";
            lenisRef.current?.start();
            const raf = requestAnimationFrame({
                "CortePremiumExperience.useEffect.raf": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
            }["CortePremiumExperience.useEffect.raf"]);
            return ({
                "CortePremiumExperience.useEffect": ()=>cancelAnimationFrame(raf)
            })["CortePremiumExperience.useEffect"];
        }
    }["CortePremiumExperience.useEffect"], [
        preloaderDone
    ]);
    /* ---------------------------------------------------------------------
     3. Aterrizaje de la bolsa y ensamblado de facetas (SOLO una vez, al
        terminar el preloader). Usa un envoltorio propio (introRef), así
        no pelea con el timeline del scroll.
     --------------------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CortePremiumExperience.useEffect": ()=>{
            if (!preloaderDone) return;
            const intro = introRef.current;
            const shardsRoot = shardsContainerRef.current;
            const polygons = shardsRoot ? Array.from(shardsRoot.querySelectorAll("[data-shard='true']")) : [];
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion) {
                if (intro) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(intro, {
                    opacity: 1
                });
                if (polygons.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(polygons, {
                    opacity: 0.9
                });
                return;
            }
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "CortePremiumExperience.useEffect.ctx": ()=>{
                    if (intro) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(intro, {
                            y: "28vh",
                            scale: 0.88,
                            opacity: 0
                        }, {
                            y: 0,
                            scale: 1,
                            opacity: 1,
                            duration: 1.0,
                            ease: "power3.out"
                        });
                    }
                    polygons.forEach({
                        "CortePremiumExperience.useEffect.ctx": (poly)=>{
                            const fx = Number(poly.getAttribute("data-from-x") || 0);
                            const fy = Number(poly.getAttribute("data-from-y") || 0);
                            const fr = Number(poly.getAttribute("data-from-rot") || 0);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(poly, {
                                x: fx,
                                y: fy,
                                rotation: fr,
                                opacity: 0
                            }, {
                                x: 0,
                                y: 0,
                                rotation: 0,
                                opacity: 0.9,
                                duration: 1.1,
                                ease: "power3.out"
                            });
                        }
                    }["CortePremiumExperience.useEffect.ctx"]);
                }
            }["CortePremiumExperience.useEffect.ctx"]);
            return ({
                "CortePremiumExperience.useEffect": ()=>ctx.revert()
            })["CortePremiumExperience.useEffect"];
        }
    }["CortePremiumExperience.useEffect"], [
        preloaderDone
    ]);
    /* ---------------------------------------------------------------------
     4. TIMELINE MAESTRO (scrub) · se reconstruye solo si cambian las poses
        desde el calibrador (en producción nunca cambian).
        Recorrido total = 4 unidades:  1 pausa en Hero · 2 corte · 1 pausa en Sec 2
     --------------------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CortePremiumExperience.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const wrapper = stageWrapperRef.current;
            const stage = stageRef.current;
            const packEl = packContainerRef.current;
            const shadowEl = floorShadowRef.current;
            const sec1Back = sec1BehindTextRef.current;
            const sec1Front = sec1FrontRef.current;
            const sec2Bg = sec2BgRef.current;
            const sec2Back = sec2BackRef.current;
            const sec2Number = sec2NumberRef.current;
            const sec2Front = sec2FrontRef.current;
            const sec2Text = sec2TextRef.current;
            if (!wrapper || !stage || !packEl || !sec1Back || !sec1Front || !sec2Bg || !sec2Back || !sec2Number || !sec2Front || !sec2Text) {
                return;
            }
            const sec2Layers = [
                sec2Bg,
                sec2Back,
                sec2Front
            ];
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
            mm.add({
                isDesktop: "(min-width: 1024px)",
                reduceMotion: "(prefers-reduced-motion: reduce)"
            }, {
                "CortePremiumExperience.useEffect": (context)=>{
                    const { isDesktop, reduceMotion } = context.conditions;
                    const mode = isDesktop ? "desktop" : "mobile";
                    const p1 = pathsState.section1_hero[mode];
                    const p2 = pathsState.section2_beef[mode];
                    const poseVars = {
                        "CortePremiumExperience.useEffect.poseVars": (p)=>({
                                x: `${p.x}vw`,
                                y: `${p.y}vh`,
                                rotation: p.rotate,
                                scale: p.scale,
                                rotationX: p.rotateX,
                                rotationY: p.rotateY
                            })
                    }["CortePremiumExperience.useEffect.poseVars"];
                    // Estado inicial (Sección 1)
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(packEl, poseVars(p1));
                    if (shadowEl) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(shadowEl, {
                        x: `${p1.x}vw`,
                        scale: 1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(sec2Layers, {
                        clipPath: HIDDEN_CLIP
                    });
                    /* --- Movimiento reducido: sin animación, cambio directo a mitad de recorrido --- */ if (reduceMotion) {
                        let current = 0;
                        const apply = {
                            "CortePremiumExperience.useEffect.apply": (sec)=>{
                                if (sec === current) return;
                                current = sec;
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(sec2Layers, {
                                    clipPath: sec === 2 ? FULL_CLIP : HIDDEN_CLIP
                                });
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(packEl, poseVars(sec === 2 ? p2 : p1));
                                if (shadowEl) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(shadowEl, {
                                        x: `${(sec === 2 ? p2 : p1).x}vw`
                                    });
                                }
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                                    sec1Back,
                                    sec1Front
                                ], {
                                    opacity: sec === 2 ? 0 : 1
                                });
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(sec2Number, {
                                    opacity: 1,
                                    xPercent: 0
                                });
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(sec2Text, {
                                    opacity: 1,
                                    yPercent: 0
                                });
                                setActiveSection(sec);
                            }
                        }["CortePremiumExperience.useEffect.apply"];
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                            trigger: wrapper,
                            start: "top top",
                            end: "+=150%",
                            pin: stage,
                            onUpdate: {
                                "CortePremiumExperience.useEffect": (self)=>apply(self.progress >= 0.5 ? 2 : 1)
                            }["CortePremiumExperience.useEffect"]
                        });
                        return;
                    }
                    /* --- Versión animada con scrub --- */ const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        defaults: {
                            ease: "none"
                        },
                        scrollTrigger: {
                            trigger: wrapper,
                            start: "top top",
                            end: "+=300%",
                            pin: stage,
                            anticipatePin: 1,
                            scrub: 0.6,
                            onUpdate: {
                                "CortePremiumExperience.useEffect.tl": (self)=>{
                                    const next = self.progress < 0.5 ? 1 : 2;
                                    setActiveSection({
                                        "CortePremiumExperience.useEffect.tl": (prev)=>prev !== next ? next : prev
                                    }["CortePremiumExperience.useEffect.tl"]);
                                }
                            }["CortePremiumExperience.useEffect.tl"]
                        }
                    });
                    // 1. Corte diagonal: las 3 capas de la Sección 2 comparten el mismo recorte
                    tl.fromTo(sec2Layers, {
                        clipPath: HIDDEN_CLIP
                    }, {
                        clipPath: FULL_CLIP,
                        duration: 2
                    }, 1);
                    // 2. Bolsa: Hero -> Sección 2 (derecha inclinada)
                    tl.fromTo(packEl, poseVars(p1), {
                        ...poseVars(p2),
                        ease: "power1.inOut",
                        duration: 2
                    }, 1);
                    // 3. Sombra en el piso acompaña a la bolsa
                    if (shadowEl) {
                        tl.fromTo(shadowEl, {
                            x: `${p1.x}vw`,
                            scale: 1
                        }, {
                            x: `${p2.x}vw`,
                            scale: 0.85,
                            ease: "power1.inOut",
                            duration: 2
                        }, 1);
                    }
                    // 4. Texto trasero del Hero sube y se desvanece; facetas/h1 delanteros se van
                    tl.fromTo(sec1Back, {
                        yPercent: 0,
                        opacity: 1
                    }, {
                        yPercent: -25,
                        opacity: 0,
                        duration: 1.3
                    }, 1);
                    tl.fromTo(sec1Front, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        duration: 0.8
                    }, 1);
                    // 5. "100%" entra por detrás de la bolsa y "CARNE VACUNA" por delante
                    tl.fromTo(sec2Number, {
                        xPercent: -18,
                        opacity: 0
                    }, {
                        xPercent: 0,
                        opacity: 1,
                        ease: "power2.out",
                        duration: 1.6
                    }, 1.4);
                    tl.fromTo(sec2Text, {
                        yPercent: 25,
                        opacity: 0
                    }, {
                        yPercent: 0,
                        opacity: 1,
                        ease: "power2.out",
                        duration: 1.5
                    }, 1.5);
                    // 6. Pausa final en la Sección 2 (completa la duración total en 4)
                    tl.to({}, {
                        duration: 1
                    }, 3);
                }
            }["CortePremiumExperience.useEffect"]);
            return ({
                "CortePremiumExperience.useEffect": ()=>{
                    mm.revert();
                }
            })["CortePremiumExperience.useEffect"];
        }
    }["CortePremiumExperience.useEffect"], [
        pathsState
    ]);
    const activeHook = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_HOOK_OPTIONS"][hookIndex] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_HOOK_OPTIONS"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BullLogoAssembly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AngularPreloader"], {
                ready: preloaderReady,
                onComplete: ()=>setPreloaderDone(true)
            }, void 0, false, {
                fileName: "[project]/src/components/CortePremiumExperience.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed top-0 left-0 right-0 z-50 px-5 sm:px-10 py-5 flex items-center justify-between pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: "pointer-events-auto inline-flex items-center gap-3 text-[#F7EFE2] focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BullLogoAssembly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeometricBullSvg"], {
                                assembled: true,
                                className: "w-10 h-8",
                                fillColor: activeSection === 2 ? "#F7EFE2" : "#BC5442",
                                strokeColor: "#120808"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-serif-display font-black text-lg sm:text-xl tracking-widest uppercase",
                                children: [
                                    "DRY",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#C9A24A]",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                        lineNumber: 390,
                                        columnNumber: 16
                                    }, this),
                                    "MEAT"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CortePremiumExperience.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto flex items-center gap-6 font-sans-tech text-xs font-bold uppercase tracking-[0.22em]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline text-[#C9A24A]",
                                children: activeSection === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_COPY"].section1.code : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_COPY"].section2.code
                            }, void 0, false, {
                                fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BRAND_CONTENT"].instagramUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-[#F7EFE2] hover:text-[#C9A24A] transition-colors",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BRAND_CONTENT"].instagramHandle
                            }, void 0, false, {
                                fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CortePremiumExperience.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CortePremiumExperience.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "top",
                ref: stageWrapperRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: stageRef,
                    className: "relative w-full overflow-hidden isolate",
                    style: {
                        height: "100svh"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": "true",
                            className: "pointer-events-none absolute inset-0 z-10 bg-[#120808]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    style: {
                                        background: "radial-gradient(45% 52% at 50% 48%, rgba(188, 84, 66, 0.34) 0%, transparent 100%)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-x-0 bottom-0 h-[18vh] bg-[#1B1B19]",
                                    style: {
                                        clipPath: "polygon(0% 38%, 100% 0%, 100% 100%, 0% 100%)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                            lineNumber: 420,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: sec1BehindTextRef,
                            "aria-hidden": "true",
                            className: "pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center select-none leading-[0.82]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-serif-display font-black uppercase text-[24vw] sm:text-[21vw] tracking-tighter text-[#F7EFE2]",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_COPY"].section1.behindWordTop,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#BC5442]",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                            lineNumber: 446,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-serif-display font-black italic uppercase text-[23vw] sm:text-[20vw] tracking-tighter text-[#BC5442]/90 -mt-[2vw]",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_COPY"].section1.behindWordBottom
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                            lineNumber: 439,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: sec2BgRef,
                            "aria-hidden": "true",
                            className: "pointer-events-none absolute inset-0 z-[25] bg-[#BC5442] will-change-[clip-path]",
                            style: {
                                clipPath: HIDDEN_CLIP
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[#1B1B19]",
                                style: {
                                    clipPath: "polygon(68% 0%, 100% 0%, 100% 100%, 46% 100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                            lineNumber: 454,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: sec2BackRef,
                            "aria-hidden": "true",
                            className: "pointer-events-none absolute inset-0 z-[26] will-change-[clip-path]",
                            style: {
                                clipPath: HIDDEN_CLIP
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: sec2NumberRef,
                                className: "absolute inset-y-0 left-4 sm:left-8 flex items-center select-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-serif-display font-black uppercase text-[28vw] sm:text-[24vw] leading-[0.8] tracking-tighter text-[#F7EFE2]",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_COPY"].section2.giantNumber
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PersistentPackLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistentPackLayer"], {
                            introRef: introRef,
                            packContainerRef: packContainerRef,
                            floorShadowRef: floorShadowRef,
                            activeSection: activeSection,
                            calloutsOverride: calloutsState,
                            onPackSettled: ()=>setPackReady(true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                            lineNumber: 487,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            ref: sec1FrontRef,
                            "aria-label": "Presentación DRY•MEAT",
                            className: "pointer-events-none absolute inset-0 z-[32] flex flex-col justify-end px-5 sm:px-10 pt-20 pb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BullLogoAssembly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AngularShardsOverlay"], {
                                    shardsContainerRef: shardsContainerRef
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                    lineNumber: 502,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-[#F7EFE2]/25 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-sans-tech text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.22em] text-[#F7EFE2] max-w-2xl",
                                            children: activeHook.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                            lineNumber: 506,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 font-sans-tech text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A24A]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_COPY"].section1.scrollLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    className: "inline-block w-8 h-[2px] bg-[#BC5442]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                            lineNumber: 510,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                            lineNumber: 497,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            ref: sec2FrontRef,
                            "aria-label": "100% Carne Vacuna",
                            className: "pointer-events-none absolute inset-0 z-[35] flex flex-col justify-between px-5 sm:px-10 pt-24 pb-10 text-[#F7EFE2] will-change-[clip-path]",
                            style: {
                                clipPath: HIDDEN_CLIP
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-b border-[#F7EFE2]/35 pb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans-tech text-xs font-bold uppercase tracking-[0.25em] text-[#F7EFE2]",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_COPY"].section2.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                            lineNumber: 529,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans-tech text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24A]",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BRAND_CONTENT"].flavor,
                                                " · ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BRAND_CONTENT"].netWeight
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                            lineNumber: 532,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                    lineNumber: 528,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: sec2TextRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-serif-display uppercase leading-[0.84] tracking-tighter",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block font-black text-[16vw] sm:text-[13vw] text-[#120808]",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_COPY"].section2.titleMain
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block font-black italic text-[17vw] sm:text-[14vw] text-[#F7EFE2] -mt-[1.5vw]",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_COPY"].section2.titleItalic
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                            lineNumber: 539,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 font-sans-tech text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#F7EFE2]",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_COPY"].section2.metaLine
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                            lineNumber: 548,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                                    lineNumber: 538,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CortePremiumExperience.tsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CortePremiumExperience.tsx",
                    lineNumber: 414,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CortePremiumExperience.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalibrationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalibrationPanel"], {
                paths: pathsState,
                onChangePaths: setPathsState,
                callouts: calloutsState,
                onChangeCallouts: setCalloutsState,
                selectedHookIndex: hookIndex,
                onChangeHookIndex: setHookIndex
            }, void 0, false, {
                fileName: "[project]/src/components/CortePremiumExperience.tsx",
                lineNumber: 557,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CortePremiumExperience.tsx",
        lineNumber: 371,
        columnNumber: 5
    }, this);
}
_s(CortePremiumExperience, "cqwgzlirrmgjlo8rG1OapvQANZg=");
_c = CortePremiumExperience;
var _c;
__turbopack_context__.k.register(_c, "CortePremiumExperience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PersistentPackLayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PersistentPackLayer",
    ()=>PersistentPackLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PersistentPackLayer({ introRef, packContainerRef, floorShadowRef, activeSection, calloutsOverride, onPackSettled }) {
    _s();
    const [cutoutMissing, setCutoutMissing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDev = ("TURBOPACK compile-time value", "development") === "development";
    const callouts = calloutsOverride || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DETAIL_CALLOUTS"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-visible",
        style: {
            perspective: "1400px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: floorShadowRef,
                "aria-hidden": "true",
                className: "absolute w-[42vw] max-w-[360px] h-[28px] opacity-80",
                style: {
                    bottom: "8vh",
                    background: "radial-gradient(50% 50% at 50% 50%, #120808 0%, transparent 100%)",
                    filter: "blur(10px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: introRef,
                className: "relative flex items-center justify-center",
                style: {
                    transformStyle: "preserve-3d",
                    opacity: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: packContainerRef,
                    className: "relative h-[62vh] lg:h-[74vh] will-change-transform",
                    style: {
                        aspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_SETTINGS"].packAspect,
                        transformStyle: "preserve-3d"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full animate-pack-float",
                        children: [
                            !cutoutMissing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BRAND_CONTENT"].assets.packCutout,
                                alt: "Bolsa DRY•MEAT Snack Proteico de Carne Vacuna Sabor Clásico 30 g",
                                fill: true,
                                priority: true,
                                sizes: "(max-width: 1024px) 60vw, 620px",
                                className: "object-contain select-none drop-shadow-[0_28px_45px_rgba(18,8,8,0.85)]",
                                onLoad: ()=>onPackSettled?.(),
                                onError: ()=>{
                                    setCutoutMissing(true);
                                    onPackSettled?.();
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this) : /* Aviso claro en desarrollo cuando falta /public/images/pack-cutout.png
               (Sin usar pack-hero.png dentro de una caja) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex flex-col items-center justify-center relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 400 590",
                                        className: "w-full h-full drop-shadow-[0_24px_40px_rgba(18,8,8,0.9)]",
                                        "aria-label": "Silueta técnica del envase DRY•MEAT",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: "36,18 364,18 382,85 362,568 38,568 18,85",
                                                fill: "#1B1B19",
                                                stroke: "#BC5442",
                                                strokeWidth: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "28",
                                                y1: "78",
                                                x2: "372",
                                                y2: "78",
                                                stroke: "#C9A24A",
                                                strokeWidth: "1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: "75,135 325,135 325,245 75,245",
                                                fill: "#120808",
                                                stroke: "#F7EFE2",
                                                strokeWidth: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: "115,190 145,165 178,185 162,218 122,212",
                                                fill: "#BC5442"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "255",
                                                y: "185",
                                                textAnchor: "middle",
                                                fill: "#F7EFE2",
                                                className: "font-serif-display",
                                                fontSize: "30",
                                                fontWeight: "900",
                                                children: "DRY"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "255",
                                                y: "222",
                                                textAnchor: "middle",
                                                fill: "#F7EFE2",
                                                className: "font-serif-display",
                                                fontSize: "30",
                                                fontWeight: "900",
                                                children: "MEAT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: "52,390 348,390 348,422 52,422",
                                                fill: "#C9A24A"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    isDev && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-x-0 top-1/2 -translate-y-1/2 bg-[#BC5442] text-[#F7EFE2] p-4 text-center",
                                        style: {
                                            clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans-tech text-xs font-bold uppercase tracking-widest",
                                                children: "[MODO DESARROLLO · ASSET PENDIENTE]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans-tech text-xs mt-1",
                                                children: [
                                                    "Guardá el PNG transparente en:",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "underline",
                                                        children: "/public/images/pack-cutout.png"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            Object.values(callouts).map((item)=>{
                                const isVisible = activeSection === item.sectionNumber;
                                const isLeft = item.labelX < item.anchorX;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `hidden md:block absolute inset-0 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 100 100",
                                            preserveAspectRatio: "none",
                                            className: "w-full h-full overflow-visible",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: item.anchorX,
                                                    cy: item.anchorY,
                                                    r: "1.3",
                                                    fill: "#C9A24A"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: `${item.anchorX},${item.anchorY} ${(item.anchorX + item.labelX) / 2},${item.labelY} ${item.labelX},${item.labelY}`,
                                                    fill: "none",
                                                    stroke: "#F7EFE2",
                                                    strokeWidth: "0.45"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                left: `${item.labelX}%`,
                                                top: `${item.labelY}%`,
                                                transform: isLeft ? "translate(-100%, -100%)" : "translate(0%, -100%)"
                                            },
                                            className: `absolute pb-1.5 whitespace-nowrap ${isLeft ? "text-right pr-2" : "text-left pl-2"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block font-sans-tech text-[10px] tracking-[0.25em] text-[#C9A24A] font-bold uppercase",
                                                    children: item.code
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block font-sans-tech text-xs tracking-[0.16em] text-[#F7EFE2] font-bold uppercase",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/components/PersistentPackLayer.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PersistentPackLayer.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PersistentPackLayer.tsx",
                    lineNumber: 61,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PersistentPackLayer.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PersistentPackLayer.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(PersistentPackLayer, "jepOeV/tyqq/Xnqe3E/HWz85nuw=");
_c = PersistentPackLayer;
var _c;
__turbopack_context__.k.register(_c, "PersistentPackLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
   */ siteUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_1gp1vuo9cq66c._.js.map