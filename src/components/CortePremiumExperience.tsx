"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  BRAND_CONTENT,
  CHAPTERS_COPY,
  DETAIL_CALLOUTS,
  HERO_HOOK_OPTIONS,
  PRODUCT_PATH,
  SITE_SETTINGS,
  type DetailCalloutConfig,
  type ProductPose,
  type SectionProductPath,
} from "@/data/content";
import {
  AngularPreloader,
  AngularShardsOverlay,
  GeometricBullSvg,
} from "./BullLogoAssembly";
import { PersistentPackLayer } from "./PersistentPackLayer";
import { CalibrationPanel } from "./CalibrationPanel";

/** Corte diagonal cerrado (Sección 2 oculta) y abierto (Sección 2 completa) */
const HIDDEN_CLIP = "polygon(0% 100%, 100% 125%, 100% 125%, 0% 100%)";
const FULL_CLIP = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

/**
 * ORDEN DE CAPAS (todo vive dentro de UN mismo escenario con isolation: isolate,
 * por eso los z-index sí se comparan entre sí):
 *   10  Sec 1 · fondo
 *   20  Sec 1 · texto gigante TRASERO
 *   25  Sec 2 · fondo terracota (con corte diagonal)
 *   26  Sec 2 · "100%" gigante TRASERO (con corte diagonal)
 *   30  BOLSA (PersistentPackLayer)
 *   32  Sec 1 · facetas + h1 DELANTEROS
 *   35  Sec 2 · "CARNE VACUNA" DELANTERO (con corte diagonal)
 */
export function CortePremiumExperience() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [packReady, setPackReady] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const [pathsState, setPathsState] =
    useState<Record<string, SectionProductPath>>(PRODUCT_PATH);
  const [calloutsState, setCalloutsState] =
    useState<Record<string, DetailCalloutConfig>>(DETAIL_CALLOUTS);
  const [hookIndex, setHookIndex] = useState<number>(
    SITE_SETTINGS.activeHeroHookIndex
  );

  // Referencias DOM para GSAP (sin useState por frame)
  const lenisRef = useRef<Lenis | null>(null);
  const stageWrapperRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const packContainerRef = useRef<HTMLDivElement | null>(null);
  const floorShadowRef = useRef<HTMLDivElement | null>(null);
  const shardsContainerRef = useRef<SVGSVGElement | null>(null);
  const sec1BehindTextRef = useRef<HTMLDivElement | null>(null);
  const sec1FrontRef = useRef<HTMLElement | null>(null);
  const sec2BgRef = useRef<HTMLDivElement | null>(null);
  const sec2BackRef = useRef<HTMLDivElement | null>(null);
  const sec2NumberRef = useRef<HTMLDivElement | null>(null);
  const sec2FrontRef = useRef<HTMLElement | null>(null);
  const sec2TextRef = useRef<HTMLDivElement | null>(null);

  // El preloader se cierra cuando la bolsa y las fuentes están listas
  // (o a los 6 s como máximo, para no quedar trabado nunca).
  const preloaderReady = (packReady && fontsReady) || timedOut;

  /* ---------------------------------------------------------------------
     0. Fuentes listas + tiempo máximo de espera
     --------------------------------------------------------------------- */
  useEffect(() => {
    let cancelled = false;
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) setFontsReady(true);
      });
    } else {
      setFontsReady(true);
    }
    const timer = window.setTimeout(() => {
      if (!cancelled) setTimedOut(true);
    }, 6000);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  /* ---------------------------------------------------------------------
     1. Scroll suave (Lenis): se crea UNA sola vez, ya no se destruye
        cada vez que se mueve un slider del calibrador.
     --------------------------------------------------------------------- */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.stop(); // bloqueado mientras carga el preloader

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  /* ---------------------------------------------------------------------
     2. Bloqueo de scroll durante el preloader y desbloqueo al terminar
     --------------------------------------------------------------------- */
  useEffect(() => {
    const html = document.documentElement;
    if (!preloaderDone) {
      html.style.overflow = "hidden";
      return () => {
        html.style.overflow = "";
      };
    }
    html.style.overflow = "";
    lenisRef.current?.start();
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(raf);
  }, [preloaderDone]);

  /* ---------------------------------------------------------------------
     3. Aterrizaje de la bolsa y ensamblado de facetas (SOLO una vez, al
        terminar el preloader). Usa un envoltorio propio (introRef), así
        no pelea con el timeline del scroll.
     --------------------------------------------------------------------- */
  useEffect(() => {
    if (!preloaderDone) return;

    const intro = introRef.current;
    const shardsRoot = shardsContainerRef.current;
    const polygons = shardsRoot
      ? Array.from(
          shardsRoot.querySelectorAll<SVGPolygonElement>("[data-shard='true']")
        )
      : [];
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      if (intro) gsap.set(intro, { opacity: 1 });
      if (polygons.length) gsap.set(polygons, { opacity: 0.9 });
      return;
    }

    const ctx = gsap.context(() => {
      if (intro) {
        gsap.fromTo(
          intro,
          { y: "28vh", scale: 0.88, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 1.0, ease: "power3.out" }
        );
      }
      polygons.forEach((poly) => {
        const fx = Number(poly.getAttribute("data-from-x") || 0);
        const fy = Number(poly.getAttribute("data-from-y") || 0);
        const fr = Number(poly.getAttribute("data-from-rot") || 0);
        gsap.fromTo(
          poly,
          { x: fx, y: fy, rotation: fr, opacity: 0 },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 0.9,
            duration: 1.1,
            ease: "power3.out",
          }
        );
      });
    });

    return () => ctx.revert();
  }, [preloaderDone]);

  /* ---------------------------------------------------------------------
     4. TIMELINE MAESTRO (scrub) · se reconstruye solo si cambian las poses
        desde el calibrador (en producción nunca cambian).
        Recorrido total = 4 unidades:  1 pausa en Hero · 2 corte · 1 pausa en Sec 2
     --------------------------------------------------------------------- */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    if (
      !wrapper ||
      !stage ||
      !packEl ||
      !sec1Back ||
      !sec1Front ||
      !sec2Bg ||
      !sec2Back ||
      !sec2Number ||
      !sec2Front ||
      !sec2Text
    ) {
      return;
    }

    const sec2Layers = [sec2Bg, sec2Back, sec2Front];
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions as {
          isDesktop: boolean;
          reduceMotion: boolean;
        };

        const mode = isDesktop ? "desktop" : "mobile";
        const p1: ProductPose = pathsState.section1_hero[mode];
        const p2: ProductPose = pathsState.section2_beef[mode];

        const poseVars = (p: ProductPose) => ({
          x: `${p.x}vw`,
          y: `${p.y}vh`,
          rotation: p.rotate,
          scale: p.scale,
          rotationX: p.rotateX,
          rotationY: p.rotateY,
        });

        // Estado inicial (Sección 1)
        gsap.set(packEl, poseVars(p1));
        if (shadowEl) gsap.set(shadowEl, { x: `${p1.x}vw`, scale: 1 });
        gsap.set(sec2Layers, { clipPath: HIDDEN_CLIP });

        /* --- Movimiento reducido: sin animación, cambio directo a mitad de recorrido --- */
        if (reduceMotion) {
          let current = 0;
          const apply = (sec: 1 | 2) => {
            if (sec === current) return;
            current = sec;
            gsap.set(sec2Layers, {
              clipPath: sec === 2 ? FULL_CLIP : HIDDEN_CLIP,
            });
            gsap.set(packEl, poseVars(sec === 2 ? p2 : p1));
            if (shadowEl) {
              gsap.set(shadowEl, { x: `${(sec === 2 ? p2 : p1).x}vw` });
            }
            gsap.set([sec1Back, sec1Front], { opacity: sec === 2 ? 0 : 1 });
            gsap.set(sec2Number, { opacity: 1, xPercent: 0 });
            gsap.set(sec2Text, { opacity: 1, yPercent: 0 });
            setActiveSection(sec);
          };
          ScrollTrigger.create({
            trigger: wrapper,
            start: "top top",
            end: "+=150%",
            pin: stage,
            onUpdate: (self) => apply(self.progress >= 0.5 ? 2 : 1),
          });
          return;
        }

        /* --- Versión animada con scrub --- */
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "+=300%",
            pin: stage,
            anticipatePin: 1,
            scrub: 0.6,
            onUpdate: (self) => {
              const next = self.progress < 0.5 ? 1 : 2;
              setActiveSection((prev) => (prev !== next ? next : prev));
            },
          },
        });

        // 1. Corte diagonal: las 3 capas de la Sección 2 comparten el mismo recorte
        tl.fromTo(
          sec2Layers,
          { clipPath: HIDDEN_CLIP },
          { clipPath: FULL_CLIP, duration: 2 },
          1
        );

        // 2. Bolsa: Hero -> Sección 2 (derecha inclinada)
        tl.fromTo(
          packEl,
          poseVars(p1),
          { ...poseVars(p2), ease: "power1.inOut", duration: 2 },
          1
        );

        // 3. Sombra en el piso acompaña a la bolsa
        if (shadowEl) {
          tl.fromTo(
            shadowEl,
            { x: `${p1.x}vw`, scale: 1 },
            { x: `${p2.x}vw`, scale: 0.85, ease: "power1.inOut", duration: 2 },
            1
          );
        }

        // 4. Texto trasero del Hero sube y se desvanece; facetas/h1 delanteros se van
        tl.fromTo(
          sec1Back,
          { yPercent: 0, opacity: 1 },
          { yPercent: -25, opacity: 0, duration: 1.3 },
          1
        );
        tl.fromTo(sec1Front, { opacity: 1 }, { opacity: 0, duration: 0.8 }, 1);

        // 5. "100%" entra por detrás de la bolsa y "CARNE VACUNA" por delante
        tl.fromTo(
          sec2Number,
          { xPercent: -18, opacity: 0 },
          { xPercent: 0, opacity: 1, ease: "power2.out", duration: 1.6 },
          1.4
        );
        tl.fromTo(
          sec2Text,
          { yPercent: 25, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: "power2.out", duration: 1.5 },
          1.5
        );

        // 6. Pausa final en la Sección 2 (completa la duración total en 4)
        tl.to({}, { duration: 1 }, 3);
      }
    );

    return () => {
      mm.revert();
    };
  }, [pathsState]);

  const activeHook = HERO_HOOK_OPTIONS[hookIndex] || HERO_HOOK_OPTIONS[0];

  return (
    <>
      <AngularPreloader
        ready={preloaderReady}
        onComplete={() => setPreloaderDone(true)}
      />

      {/* Cabecera editorial mínima (sin cajas ni pastillas redondeadas) */}
      <header className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-10 py-5 flex items-center justify-between pointer-events-none">
        <a
          href="#top"
          className="pointer-events-auto inline-flex items-center gap-3 text-[#F7EFE2] focus:outline-none"
        >
          <GeometricBullSvg
            assembled
            className="w-10 h-8"
            fillColor={activeSection === 2 ? "#F7EFE2" : "#BC5442"}
            strokeColor="#120808"
          />
          <span className="font-serif-display font-black text-lg sm:text-xl tracking-widest uppercase">
            DRY<span className="text-[#C9A24A]">•</span>MEAT
          </span>
        </a>

        <div className="pointer-events-auto flex items-center gap-6 font-sans-tech text-xs font-bold uppercase tracking-[0.22em]">
          <span className="hidden sm:inline text-[#C9A24A]">
            {activeSection === 1
              ? CHAPTERS_COPY.section1.code
              : CHAPTERS_COPY.section2.code}
          </span>
          <a
            href={BRAND_CONTENT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7EFE2] hover:text-[#C9A24A] transition-colors"
          >
            {BRAND_CONTENT.instagramHandle}
          </a>
        </div>
      </header>

      {/* Contenedor del recorrido: ScrollTrigger fija (pin) el escenario y agrega
          el espacio de scroll necesario. */}
      <div id="top" ref={stageWrapperRef}>
        <div
          ref={stageRef}
          className="relative w-full overflow-hidden isolate"
          style={{ height: "100svh" }}
        >
          {/* ===== SECCIÓN 1 · FONDO (z-10) ===== */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 bg-[#120808]"
          >
            {/* Foco de luz dramático y piso angular */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(45% 52% at 50% 48%, rgba(188, 84, 66, 0.34) 0%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[18vh] bg-[#1B1B19]"
              style={{ clipPath: "polygon(0% 38%, 100% 0%, 100% 100%, 0% 100%)" }}
            />
          </div>

          {/* ===== SECCIÓN 1 · TEXTO GIGANTE TRASERO (z-20) ===== */}
          <div
            ref={sec1BehindTextRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center select-none leading-[0.82]"
          >
            <span className="font-serif-display font-black uppercase text-[24vw] sm:text-[21vw] tracking-tighter text-[#F7EFE2]">
              {CHAPTERS_COPY.section1.behindWordTop}
              <span className="text-[#BC5442]">•</span>
            </span>
            <span className="font-serif-display font-black italic uppercase text-[23vw] sm:text-[20vw] tracking-tighter text-[#BC5442]/90 -mt-[2vw]">
              {CHAPTERS_COPY.section1.behindWordBottom}
            </span>
          </div>

          {/* ===== SECCIÓN 2 · FONDO TERRACOTA con corte diagonal (z-25) ===== */}
          <div
            ref={sec2BgRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[25] bg-[#BC5442] will-change-[clip-path]"
            style={{ clipPath: HIDDEN_CLIP }}
          >
            {/* Plano geométrico secundario en carbón */}
            <div
              className="absolute inset-0 bg-[#1B1B19]"
              style={{
                clipPath: "polygon(68% 0%, 100% 0%, 100% 100%, 46% 100%)",
              }}
            />
          </div>

          {/* ===== SECCIÓN 2 · "100%" GIGANTE TRASERO (z-26) ===== */}
          <div
            ref={sec2BackRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[26] will-change-[clip-path]"
            style={{ clipPath: HIDDEN_CLIP }}
          >
            <div
              ref={sec2NumberRef}
              className="absolute inset-y-0 left-4 sm:left-8 flex items-center select-none"
            >
              <span className="font-serif-display font-black uppercase text-[28vw] sm:text-[24vw] leading-[0.8] tracking-tighter text-[#F7EFE2]">
                {CHAPTERS_COPY.section2.giantNumber}
              </span>
            </div>
          </div>

          {/* ===== BOLSA PERSISTENTE (z-30, dentro del mismo escenario) ===== */}
          <PersistentPackLayer
            introRef={introRef}
            packContainerRef={packContainerRef}
            floorShadowRef={floorShadowRef}
            activeSection={activeSection}
            calloutsOverride={calloutsState}
            onPackSettled={() => setPackReady(true)}
          />

          {/* ===== SECCIÓN 1 · FACETAS Y H1 DELANTEROS (z-32) ===== */}
          <section
            ref={sec1FrontRef}
            aria-label="Presentación DRY•MEAT"
            className="pointer-events-none absolute inset-0 z-[32] flex flex-col justify-end px-5 sm:px-10 pt-20 pb-8"
          >
            <AngularShardsOverlay shardsContainerRef={shardsContainerRef} />

            <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-[#F7EFE2]/25 pt-4">
              {/* Único H1 de la página */}
              <h1 className="font-sans-tech text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.22em] text-[#F7EFE2] max-w-2xl">
                {activeHook.text}
              </h1>

              <div className="flex items-center gap-3 font-sans-tech text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A24A]">
                <span>{CHAPTERS_COPY.section1.scrollLabel}</span>
                <span
                  aria-hidden="true"
                  className="inline-block w-8 h-[2px] bg-[#BC5442]"
                />
              </div>
            </div>
          </section>

          {/* ===== SECCIÓN 2 · TEXTO DELANTERO con corte diagonal (z-35) ===== */}
          <section
            ref={sec2FrontRef}
            aria-label="100% Carne Vacuna"
            className="pointer-events-none absolute inset-0 z-[35] flex flex-col justify-between px-5 sm:px-10 pt-24 pb-10 text-[#F7EFE2] will-change-[clip-path]"
            style={{ clipPath: HIDDEN_CLIP }}
          >
            {/* Fila superior técnica */}
            <div className="flex items-center justify-between border-b border-[#F7EFE2]/35 pb-3">
              <span className="font-sans-tech text-xs font-bold uppercase tracking-[0.25em] text-[#F7EFE2]">
                {CHAPTERS_COPY.section2.code}
              </span>
              <span className="font-sans-tech text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24A]">
                {BRAND_CONTENT.flavor} · {BRAND_CONTENT.netWeight}
              </span>
            </div>

            {/* Texto gigante delantero (pasa por delante de parte de la bolsa) */}
            <div ref={sec2TextRef}>
              <h2 className="font-serif-display uppercase leading-[0.84] tracking-tighter">
                <span className="block font-black text-[16vw] sm:text-[13vw] text-[#120808]">
                  {CHAPTERS_COPY.section2.titleMain}
                </span>
                <span className="block font-black italic text-[17vw] sm:text-[14vw] text-[#F7EFE2] -mt-[1.5vw]">
                  {CHAPTERS_COPY.section2.titleItalic}
                </span>
              </h2>

              <p className="mt-4 font-sans-tech text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#F7EFE2]">
                {CHAPTERS_COPY.section2.metaLine}
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* PANEL DE CALIBRACIÓN EN VIVO (solo visible en NODE_ENV === "development") */}
      <CalibrationPanel
        paths={pathsState}
        onChangePaths={setPathsState}
        callouts={calloutsState}
        onChangeCallouts={setCalloutsState}
        selectedHookIndex={hookIndex}
        onChangeHookIndex={setHookIndex}
      />
    </>
  );
}
