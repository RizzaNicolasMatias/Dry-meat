"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface BullSvgProps {
  className?: string;
  assembled?: boolean;
  fillColor?: string;
  strokeColor?: string;
}

/**
 * Toro geométrico facetado en SVG.
 * CORRECCIÓN: transformBox: "fill-box" en cada polígono.
 * Usa exclusivamente la paleta cerrada.
 */
export function GeometricBullSvg({
  className = "w-28 h-24",
  assembled = true,
  fillColor = "#BC5442",
  strokeColor = "#120808",
}: BullSvgProps) {
  const facets = [
    { points: "22,18 32,36 25,40", tx: -22, ty: -16, rot: -14 },
    { points: "46,20 55,34 45,36", tx: -10, ty: -20, rot: 12 },
    { points: "25,40 45,36 38,56 18,54", tx: -18, ty: -8, rot: -10 },
    { points: "45,36 78,33 98,46 62,58", tx: 8, ty: -18, rot: 9 },
    { points: "38,56 62,58 55,82 36,75", tx: -12, ty: 10, rot: -8 },
    { points: "62,58 98,46 112,62 78,80", tx: 16, ty: -10, rot: 8 },
    { points: "36,75 55,82 62,102 48,104", tx: -14, ty: 18, rot: -12 },
    { points: "62,58 78,80 86,112 74,114 68,88", tx: 6, ty: 20, rot: 7 },
    { points: "98,46 126,56 132,78 112,62", tx: 20, ty: -6, rot: 13 },
    { points: "112,62 132,78 128,106 118,106 114,82", tx: 22, ty: 16, rot: -11 },
    { points: "126,56 142,42 136,30 146,42 132,64", tx: 26, ty: -16, rot: 16 },
  ];

  return (
    <svg
      viewBox="0 0 160 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Toro geométrico emblema de DRY•MEAT"
    >
      <g>
        {facets.map((f, idx) => (
          <polygon
            key={idx}
            points={f.points}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="1.2"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              transform: assembled
                ? "translate3d(0px, 0px, 0px) rotate(0deg) scale(1)"
                : `translate3d(${f.tx}px, ${f.ty}px, 0px) rotate(${f.rot}deg) scale(0.75)`,
              opacity: assembled ? 1 : 0,
              transition: `transform 850ms cubic-bezier(0.22, 1, 0.36, 1) ${
                idx * 40
              }ms, opacity 650ms ease ${idx * 40}ms`,
            }}
          />
        ))}
        <polygon
          points="29,45 35,43 32,47"
          fill="#F7EFE2"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            opacity: assembled ? 1 : 0,
            transition: "opacity 600ms ease 500ms",
          }}
        />
      </g>
    </svg>
  );
}

/**
 * Facetas angulares de la misma familia geométrica del toro que vuelan
 * alrededor del producto y se ensamblan con el scroll.
 */
export function AngularShardsOverlay({
  shardsContainerRef,
}: {
  shardsContainerRef: React.RefObject<SVGSVGElement | null>;
}) {
  const shards = [
    {
      id: "shard-1",
      points: "120,180 185,140 160,225",
      fill: "#BC5442",
      fromX: -180,
      fromY: -120,
      fromRot: -35,
    },
    {
      id: "shard-2",
      points: "820,150 890,195 835,245 795,190",
      fill: "#C9A24A",
      fromX: 190,
      fromY: -110,
      fromRot: 42,
    },
    {
      id: "shard-3",
      points: "150,520 215,490 190,565",
      fill: "#F7EFE2",
      fromX: -210,
      fromY: 140,
      fromRot: 28,
    },
    {
      id: "shard-4",
      points: "810,510 875,475 860,555 795,540",
      fill: "#BC5442",
      fromX: 200,
      fromY: 130,
      fromRot: -30,
    },
    {
      id: "shard-5",
      points: "290,110 340,85 325,135",
      fill: "#C9A24A",
      fromX: -90,
      fromY: -160,
      fromRot: -22,
    },
    {
      id: "shard-6",
      points: "690,585 745,560 725,620",
      fill: "#BC5442",
      fromX: 120,
      fromY: 170,
      fromRot: 25,
    },
  ];

  return (
    <svg
      ref={shardsContainerRef}
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className="pointer-events-none absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {shards.map((s) => (
        <polygon
          key={s.id}
          data-shard="true"
          data-from-x={s.fromX}
          data-from-y={s.fromY}
          data-from-rot={s.fromRot}
          points={s.points}
          fill={s.fill}
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            opacity: 0,
          }}
        />
      ))}
    </svg>
  );
}

/**
 * Preloader: la barra avanza de forma optimista hasta 85% y salta a 100% cuando
 * `ready` es true (bolsa cargada + fuentes listas). Luego abre la cortina angular.
 * - onComplete se guarda en un ref: ya no se reinicia en cada render del padre.
 * - Solo se completa una vez (doneRef).
 */
export function AngularPreloader({
  ready,
  onComplete,
}: {
  ready: boolean;
  onComplete: () => void;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const topBladeRef = useRef<HTMLDivElement | null>(null);
  const bottomBladeRef = useRef<HTMLDivElement | null>(null);
  const centerContentRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef({ value: 0 });
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const paint = () => {
    const v = progressRef.current.value;
    if (numberRef.current) numberRef.current.textContent = `${Math.round(v)}%`;
    if (barRef.current) barRef.current.style.transform = `scaleX(${v / 100})`;
  };

  // Avance optimista mientras carga todo
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(progressRef.current, {
        value: 85,
        duration: 2.4,
        ease: "power1.out",
        onUpdate: paint,
      });
    });
    return () => ctx.revert();
  }, []);

  // Cierre cuando todo está listo
  useEffect(() => {
    if (!ready || doneRef.current) return;
    doneRef.current = true;

    gsap.context(() => {
      gsap.to(progressRef.current, {
        value: 100,
        duration: 0.45,
        ease: "power2.out",
        overwrite: true,
        onUpdate: paint,
        onComplete: () => {
          const tl = gsap.timeline({
            onComplete: () => {
              if (rootRef.current) {
                rootRef.current.style.display = "none";
                rootRef.current.setAttribute("aria-hidden", "true");
              }
              onCompleteRef.current();
            },
          });

          tl.to(centerContentRef.current, {
            opacity: 0,
            scale: 0.94,
            duration: 0.25,
            ease: "power2.in",
          })
            .to(
              topBladeRef.current,
              {
                yPercent: -105,
                xPercent: -12,
                duration: 0.75,
                ease: "power4.inOut",
              },
              "-=0.05"
            )
            .to(
              bottomBladeRef.current,
              {
                yPercent: 105,
                xPercent: 12,
                duration: 0.75,
                ease: "power4.inOut",
              },
              "<"
            );
        },
      });
    });
    // Sin cleanup a propósito: la animación de salida debe terminar sola
  }, [ready]);

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Cargando presentación DRY•MEAT"
      className="fixed inset-0 z-[60] overflow-hidden pointer-events-auto"
    >
      {/* Hoja superior de la cortina diagonal */}
      <div
        ref={topBladeRef}
        className="absolute inset-0 bg-[#120808]"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 42%, 0% 62%)",
        }}
      />

      {/* Hoja inferior de la cortina diagonal */}
      <div
        ref={bottomBladeRef}
        className="absolute inset-0 bg-[#1B1B19]"
        style={{
          clipPath: "polygon(0% 61.5%, 100% 41.5%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Contenido central del cargador (sin cajas ni bordes redondeados) */}
      <div
        ref={centerContentRef}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-[#F7EFE2]"
      >
        <GeometricBullSvg assembled className="w-24 h-20 mb-4" />
        <div className="font-serif-display text-4xl sm:text-6xl font-black tracking-tight uppercase">
          DRY<span className="text-[#BC5442]">•</span>MEAT
        </div>
        <div className="w-56 h-[2px] bg-[#F7EFE2]/20 mt-6 overflow-hidden">
          <div
            ref={barRef}
            className="w-full h-full bg-[#BC5442] origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        <span
          ref={numberRef}
          className="mt-3 font-serif-display text-2xl font-bold tabular-nums text-[#C9A24A]"
        >
          0%
        </span>
      </div>
    </div>
  );
}
