"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BRAND_CONTENT,
  DETAIL_CALLOUTS,
  SITE_SETTINGS,
  type DetailCalloutConfig,
} from "@/data/content";

interface PersistentPackLayerProps {
  /** Envoltorio SOLO para la animación de aterrizaje (no lo toca el scroll) */
  introRef: React.RefObject<HTMLDivElement | null>;
  /** Contenedor que mueve el timeline maestro con el scroll */
  packContainerRef: React.RefObject<HTMLDivElement | null>;
  floorShadowRef: React.RefObject<HTMLDivElement | null>;
  activeSection: number;
  calloutsOverride?: Record<string, DetailCalloutConfig>;
  /** Se llama cuando la imagen de la bolsa cargó (o falló), para cerrar el preloader */
  onPackSettled?: () => void;
}

export function PersistentPackLayer({
  introRef,
  packContainerRef,
  floorShadowRef,
  activeSection,
  calloutsOverride,
  onPackSettled,
}: PersistentPackLayerProps) {
  const [cutoutMissing, setCutoutMissing] = useState(false);
  const isDev = process.env.NODE_ENV === "development";
  const callouts = calloutsOverride || DETAIL_CALLOUTS;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-visible"
      style={{ perspective: "1400px" }}
    >
      {/* Sombra proyectada en el piso debajo de la bolsa */}
      <div
        ref={floorShadowRef}
        aria-hidden="true"
        className="absolute w-[42vw] max-w-[360px] h-[28px] opacity-80"
        style={{
          bottom: "8vh",
          background:
            "radial-gradient(50% 50% at 50% 50%, #120808 0%, transparent 100%)",
          filter: "blur(10px)",
        }}
      />

      {/* ENVOLTORIO DE ATERRIZAJE (solo la animación de entrada, separado del scroll) */}
      <div
        ref={introRef}
        className="relative flex items-center justify-center"
        style={{ transformStyle: "preserve-3d", opacity: 0 }}
      >
      {/* CONTENEDOR MAESTRO CONTROLADO POR EL TIMELINE DE GSAP SCROLLTRIGGER */}
      <div
        ref={packContainerRef}
        className="relative h-[62vh] lg:h-[74vh] will-change-transform"
        style={{
          aspectRatio: SITE_SETTINGS.packAspect,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Contenedor hijo para flotación suave continua sin interferir con GSAP scrub */}
        <div className="relative w-full h-full animate-pack-float">
          {!cutoutMissing ? (
            <Image
              src={BRAND_CONTENT.assets.packCutout}
              alt="Bolsa DRY•MEAT Snack Proteico de Carne Vacuna Sabor Clásico 30 g"
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 620px"
              className="object-contain select-none drop-shadow-[0_28px_45px_rgba(18,8,8,0.85)]"
              onLoad={() => onPackSettled?.()}
              onError={() => {
                setCutoutMissing(true);
                onPackSettled?.();
              }}
            />
          ) : (
            /* Aviso claro en desarrollo cuando falta /public/images/pack-cutout.png
               (Sin usar pack-hero.png dentro de una caja) */
            <div className="w-full h-full flex flex-col items-center justify-center relative">
              <svg
                viewBox="0 0 400 590"
                className="w-full h-full drop-shadow-[0_24px_40px_rgba(18,8,8,0.9)]"
                aria-label="Silueta técnica del envase DRY•MEAT"
              >
                <polygon
                  points="36,18 364,18 382,85 362,568 38,568 18,85"
                  fill="#1B1B19"
                  stroke="#BC5442"
                  strokeWidth="3"
                />
                <line
                  x1="28"
                  y1="78"
                  x2="372"
                  y2="78"
                  stroke="#C9A24A"
                  strokeWidth="1.5"
                />
                <polygon
                  points="75,135 325,135 325,245 75,245"
                  fill="#120808"
                  stroke="#F7EFE2"
                  strokeWidth="2"
                />
                <polygon
                  points="115,190 145,165 178,185 162,218 122,212"
                  fill="#BC5442"
                />
                <text
                  x="255"
                  y="185"
                  textAnchor="middle"
                  fill="#F7EFE2"
                  className="font-serif-display"
                  fontSize="30"
                  fontWeight="900"
                >
                  DRY
                </text>
                <text
                  x="255"
                  y="222"
                  textAnchor="middle"
                  fill="#F7EFE2"
                  className="font-serif-display"
                  fontSize="30"
                  fontWeight="900"
                >
                  MEAT
                </text>
                <polygon
                  points="52,390 348,390 348,422 52,422"
                  fill="#C9A24A"
                />
              </svg>

              {isDev && (
                <div
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-[#BC5442] text-[#F7EFE2] p-4 text-center"
                  style={{
                    clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)",
                  }}
                >
                  <p className="font-sans-tech text-xs font-bold uppercase tracking-widest">
                    [MODO DESARROLLO · ASSET PENDIENTE]
                  </p>
                  <p className="font-sans-tech text-xs mt-1">
                    Guardá el PNG transparente en:{" "}
                    <strong className="underline">
                      /public/images/pack-cutout.png
                    </strong>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* LÍNEAS TÉCNICAS DE DETALLE (Posiciones en % sobre el PNG desde content.ts) */}
          {Object.values(callouts).map((item) => {
            const isVisible = activeSection === item.sectionNumber;
            const isLeft = item.labelX < item.anchorX;

            return (
              <div
                key={item.id}
                className={`hidden md:block absolute inset-0 transition-opacity duration-300 ${
                  isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="w-full h-full overflow-visible"
                  aria-hidden="true"
                >
                  {/* Punto de anclaje sobre la zona exacta del pack */}
                  <circle
                    cx={item.anchorX}
                    cy={item.anchorY}
                    r="1.3"
                    fill="#C9A24A"
                  />
                  {/* Línea quebrada técnica */}
                  <polyline
                    points={`${item.anchorX},${item.anchorY} ${
                      (item.anchorX + item.labelX) / 2
                    },${item.labelY} ${item.labelX},${item.labelY}`}
                    fill="none"
                    stroke="#F7EFE2"
                    strokeWidth="0.45"
                  />
                </svg>

                {/* Rótulo técnico sin cajas ni bordes redondeados */}
                <div
                  style={{
                    left: `${item.labelX}%`,
                    top: `${item.labelY}%`,
                    transform: isLeft
                      ? "translate(-100%, -100%)"
                      : "translate(0%, -100%)",
                  }}
                  className={`absolute pb-1.5 whitespace-nowrap ${
                    isLeft ? "text-right pr-2" : "text-left pl-2"
                  }`}
                >
                  <span className="block font-sans-tech text-[10px] tracking-[0.25em] text-[#C9A24A] font-bold uppercase">
                    {item.code}
                  </span>
                  <span className="block font-sans-tech text-xs tracking-[0.16em] text-[#F7EFE2] font-bold uppercase">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}