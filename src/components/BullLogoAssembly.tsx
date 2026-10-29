"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BRAND_CONTENT } from "@/data/content";

interface BullSvgProps {
  className?: string;
  assembled?: boolean;
  highlightColor?: string;
}

/**
 * Versión aproximada en polígonos SVG del toro geométrico de DRY•MEAT.
 * Cada polígono tiene un desplazamiento inicial para ensamblarse suavemente
 * usando solo transform y opacity (60 fps).
 * NOTA: Reemplazar por las curvas exactas del vector original de la marca cuando lo entreguen.
 */
export function GeometricBullSvg({
  className = "w-28 h-24",
  assembled = true,
  highlightColor = "#BC5442",
}: BullSvgProps) {
  const facets = [
    // Cuernos y cabeza
    { points: "22,18 32,36 25,40", fill: "#A24333", tx: -18, ty: -14, rot: -12 },
    { points: "46,20 55,34 45,36", fill: "#C95E4B", tx: -8, ty: -18, rot: 10 },
    { points: "25,40 45,36 38,56 18,54", fill: highlightColor, tx: -15, ty: -6, rot: -8 },
    // Lomo y morrillo (volumen principal)
    { points: "45,36 78,33 98,46 62,58", fill: "#C55A47", tx: 6, ty: -16, rot: 8 },
    { points: "38,56 62,58 55,82 36,75", fill: "#B34B3A", tx: -10, ty: 8, rot: -6 },
    { points: "62,58 98,46 112,62 78,80", fill: highlightColor, tx: 14, ty: -8, rot: 7 },
    // Pecho y patas delanteras
    { points: "36,75 55,82 62,102 48,104", fill: "#9E3E2E", tx: -12, ty: 16, rot: -10 },
    { points: "62,58 78,80 86,112 74,114 68,88", fill: "#B84F3E", tx: 4, ty: 18, rot: 6 },
    // Cuarto trasero y patas traseras
    { points: "98,46 126,56 132,78 112,62", fill: "#C95E4B", tx: 18, ty: -4, rot: 11 },
    { points: "112,62 132,78 128,106 118,106 114,82", fill: "#A44131", tx: 20, ty: 14, rot: -9 },
    // Cola facetada
    { points: "126,56 142,42 136,30 146,42 132,64", fill: highlightColor, tx: 24, ty: -14, rot: 15 },
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
            fill={f.fill}
            stroke="#120808"
            strokeWidth="0.6"
            style={{
              transform: assembled
                ? "translate3d(0px, 0px, 0px) rotate(0deg) scale(1)"
                : `translate3d(${f.tx}px, ${f.ty}px, 0px) rotate(${f.rot}deg) scale(0.84)`,
              opacity: assembled ? 1 : 0.15,
              transformOrigin: "center",
              transition: `transform 900ms cubic-bezier(0.22, 1, 0.36, 1) ${
                idx * 45
              }ms, opacity 700ms ease ${idx * 45}ms`,
            }}
          />
        ))}
        {/* Ojo geométrico */}
        <polygon
          points="29,45 35,43 32,47"
          fill="#F7EFE2"
          style={{
            opacity: assembled ? 1 : 0,
            transition: "opacity 600ms ease 550ms",
          }}
        />
      </g>
    </svg>
  );
}

/**
 * Componente de marca que combina el revelado de /public/images/logo.png
 * con el toro facetado en SVG.
 */
export function BrandLogoBadge({
  assembled = true,
  size = "md",
}: {
  assembled?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const [logoImgError, setLogoImgError] = useState(false);

  const dimensions =
    size === "lg"
      ? "w-28 h-28 sm:w-36 sm:h-36"
      : size === "sm"
      ? "w-11 h-11"
      : "w-20 h-20 sm:w-24 sm:h-24";

  return (
    <div className="inline-flex flex-col items-center select-none">
      {!logoImgError ? (
        <div
          className={`relative ${dimensions} rounded-2xl overflow-hidden border border-[#F7EFE2]/15 shadow-xl bg-[#F7EFE2] transition-all duration-700`}
          style={{
            transform: assembled ? "translate3d(0,0,0) scale(1)" : "translate3d(0,12px,0) scale(0.92)",
            opacity: assembled ? 1 : 0,
          }}
        >
          <Image
            src={BRAND_CONTENT.assets.logo}
            alt="Logo oficial DRY•MEAT"
            fill
            sizes="160px"
            priority
            className="object-contain p-1.5"
            onError={() => setLogoImgError(true)}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <GeometricBullSvg
            assembled={assembled}
            className={size === "sm" ? "w-12 h-10" : "w-28 h-24"}
          />
          {size !== "sm" && (
            <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-wider text-[#F7EFE2] mt-1">
              DRY<span className="text-[#BC5442] mx-0.5">•</span>MEAT
            </span>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Pantalla de carga inicial con progreso de 0% a 100% mientras se preparan los assets.
 */
export function PreloaderScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let rafId: number;
    let current = 0;

    // Precarga de las dos imágenes clave del proyecto
    const preloadPaths = [BRAND_CONTENT.assets.logo, BRAND_CONTENT.assets.packHero];
    preloadPaths.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    const step = () => {
      current += (100 - current) * 0.14 + 1.8;
      if (current >= 99.5) {
        setProgress(100);
        setExiting(true);
        const timer = setTimeout(() => {
          onComplete();
        }, 420);
        return () => clearTimeout(timer);
      } else {
        setProgress(Math.floor(current));
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  return (
    <div
      aria-live="polite"
      aria-label="Cargando presentación de DRY MEAT"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#120808] text-[#F7EFE2] transition-opacity duration-500 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center max-w-xs w-full px-6">
        <GeometricBullSvg assembled={progress > 25} className="w-28 h-24 mb-4" />

        <div className="font-serif-display text-2xl tracking-[0.2em] font-bold mb-2">
          DRY<span className="text-[#BC5442] mx-1">•</span>MEAT
        </div>

        <p className="text-[11px] uppercase tracking-[0.25em] text-[#F7EFE2]/60 mb-6">
          Preparando presentación
        </p>

        {/* Barra de progreso */}
        <div className="w-full h-1 bg-[#F7EFE2]/10 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-[#BC5442] transition-transform duration-150 origin-left"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>

        <span className="font-sans-tech text-xs font-semibold tabular-nums text-[#C9A24A]">
          {progress}%
        </span>
      </div>
    </div>
  );
}