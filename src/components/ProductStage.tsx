"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BRAND_CONTENT,
  HEXAGON_OVERLAY_BOX,
  SITE_SETTINGS,
  getActiveNutrition,
} from "@/data/content";
import { GeometricBullSvg } from "./BullLogoAssembly";

interface ProductStageProps {
  /** Referencia al contenedor que recibe scale, xPercent, yPercent y transformOrigin de GSAP */
  packTransformRef: React.RefObject<HTMLDivElement | null>;
  /** Referencia al barrido de luz roja sobre el pack */
  lightSweepRef: React.RefObject<HTMLDivElement | null>;
  /** Capítulo activo (1 a 10) para destacar overlays contextuales */
  activeChapter: number;
  /** Progreso de conteo de los hexágonos en el Capítulo 4 (0 a 1) */
  hexagonCountProgress: number;
}

export function ProductStage({
  packTransformRef,
  lightSweepRef,
  activeChapter,
  hexagonCountProgress,
}: ProductStageProps) {
  const [packImgError, setPackImgError] = useState(false);
  const [mouseTilt, setMouseTilt] = useState({ rx: 0, ry: 0 });

  const nutritionItems = getActiveNutrition();
  const imageSrc = SITE_SETTINGS.useCutoutImage
    ? BRAND_CONTENT.assets.packCutout
    : BRAND_CONTENT.assets.packHero;

  // Inclinación 2.5D ligera con el mouse (solo en Desktop >= 1024px; NO es rotación 3D real)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({
      rx: Number((-ny * 5).toFixed(2)),
      ry: Number((nx * 6).toFixed(2)),
    });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ rx: 0, ry: 0 });
  };

  const formatAnimatedNumber = (target: number, decimals: number, progress: number) => {
    const val = target * progress;
    if (decimals === 0) {
      return Math.round(val).toString();
    }
    return val.toFixed(decimals).replace(".", ",");
  };

  const showHexagonsHighlight = activeChapter === 4;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center select-none overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Wrapper de inclinación 2.5D al mouse (independiente del transform de GSAP) */}
      <div
        className="relative flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${mouseTilt.rx}deg) rotateY(${mouseTilt.ry}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* =====================================================================
            CONTENEDOR TRANSFORMADO MAESTRO (packTransformRef)
            GSAP ScrollTrigger anima scale, xPercent, yPercent y transformOrigin aquí.
            Tanto la foto pack-hero.png como los 4 hexágonos son hijos directos de
            este div para mantener alineación 1:1 en cualquier resolución o zoom.
            ===================================================================== */}
        <div
          ref={packTransformRef}
          className="relative w-[275px] sm:w-[340px] md:w-[390px] lg:w-[430px] aspect-[731/1080] rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] will-change-transform"
        >
          {/* 1. IMAGEN PRINCIPAL DEL ENVASE (/public/images/pack-hero.png) */}
          {!packImgError ? (
            <Image
              src={imageSrc}
              alt="Envase de DRY•MEAT Snack Proteico de Carne Vacuna Sabor Clásico 30 g"
              fill
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 390px, 430px"
              className="object-cover object-center select-none pointer-events-none"
              onError={() => setPackImgError(true)}
            />
          ) : (
            /* Respaldo visual en caso de que aún no hayas copiado pack-hero.png a /public/images/ */
            <div className="w-full h-full bg-[#151212] border border-[#F7EFE2]/15 flex flex-col items-center justify-between p-6 text-center">
              <div className="w-full border border-[#F7EFE2]/40 rounded-xl p-3 flex items-center justify-around">
                <GeometricBullSvg assembled className="w-16 h-14" />
                <div className="font-serif-display text-xl font-bold tracking-wider text-[#F7EFE2]">
                  DRY
                  <br />
                  MEAT
                </div>
              </div>
              <div className="font-sans-tech text-sm tracking-widest uppercase text-[#F7EFE2]">
                SNACK PROTÉICO
                <br />
                <strong className="text-base">SABOR CLÁSICO</strong>
              </div>
              <div className="w-full py-1.5 bg-[#C9A24A]/20 text-[10px] font-bold tracking-wider uppercase text-[#F7EFE2]">
                FUENTE DE BCAA Y AMINOÁCIDOS ESENCIALES
              </div>
              <div className="text-[10px] text-[#F7EFE2]/70">
                Coloca tu archivo en <code>/public/images/pack-hero.png</code>
              </div>
            </div>
          )}

          {/* 2. MÁSCARA DE BORDES Y OCULTACIÓN DE TEXTOS INCRUSTADOS / FECHA DE VENCIMIENTO
                 - Funde el borde exterior de la bolsa con la oscuridad del escenario.
                 - Enmascara el lateral derecho si la foto trajera texto incrustado.
                 - Cubre suavemente el sello inferior derecho "VTO.: 08.08.2025" de la foto original. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 48%, transparent 58%, rgba(18, 8, 8, 0.85) 96%), linear-gradient(90deg, rgba(18,8,8,0.55) 0%, transparent 10%, transparent 90%, rgba(18,8,8,0.65) 100%)",
            }}
          />
          {/* Parche oscuro sutil sobre la esquina inferior derecha donde dice VTO.: 08.08.2025 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[6.2%] right-[11%] w-[33%] h-[4.5%] rounded-full bg-[#171415]/95 blur-[1px]"
          />

          {/* 3. LOS 4 HEXÁGONOS HTML/SVG ANIMADOS (HIJOS DEL CONTENEDOR TRANSFORMADO)
                 Se ubican exactamente sobre la fila de hexágonos de pack-hero.png */}
          <div
            style={{
              top: `${HEXAGON_OVERLAY_BOX.topPercent}%`,
              left: `${HEXAGON_OVERLAY_BOX.leftPercent}%`,
              width: `${HEXAGON_OVERLAY_BOX.widthPercent}%`,
              height: `${HEXAGON_OVERLAY_BOX.heightPercent}%`,
            }}
            className={`absolute z-20 grid grid-cols-4 gap-1 sm:gap-1.5 items-center transition-opacity duration-500 ${
              showHexagonsHighlight ? "opacity-100 scale-[1.03]" : "opacity-95"
            }`}
          >
            {nutritionItems.map((item, idx) => {
              const displayNum = showHexagonsHighlight
                ? formatAnimatedNumber(item.numericValue, item.decimals, hexagonCountProgress)
                : item.displayValue.replace(/[a-zA-Z]/g, "");

              return (
                <div
                  key={item.id}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Silueta Hexagonal SVG */}
                  <svg
                    viewBox="0 0 100 112"
                    className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
                    aria-hidden="true"
                  >
                    <polygon
                      points="50,3 96,28 96,84 50,109 4,84 4,28"
                      fill={item.isPrimary ? "#8B1E1B" : "#5D1514"}
                      stroke={showHexagonsHighlight ? "#C9A24A" : "#8F2926"}
                      strokeWidth={showHexagonsHighlight ? "3.5" : "2"}
                    />
                  </svg>

                  {/* Contenido numérico animado dentro del hexágono */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-0.5 leading-none"
                    style={{
                      transitionDelay: `${idx * 60}ms`,
                    }}
                  >
                    <span className="font-sans-tech font-bold text-[#F7EFE2] tabular-nums text-[10px] sm:text-xs md:text-sm tracking-tight">
                      {displayNum}
                      {item.unit && (
                        <span className="text-[8px] sm:text-[10px] uppercase ml-0.5">
                          {item.unit}
                        </span>
                      )}
                    </span>
                    <span className="font-sans-tech text-[6px] sm:text-[7px] md:text-[8px] uppercase tracking-wider text-[#F7EFE2]/90 mt-0.5">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4. REALCE DORADO EN EL CAPÍTULO 6 (Franja de BCAA) */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute left-[12%] right-[12%] top-[68%] h-[6.5%] rounded-sm border border-[#C9A24A]/60 bg-gradient-to-r from-transparent via-[#C9A24A]/25 to-transparent transition-opacity duration-500 ${
              activeChapter === 6 ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* 5. REALCE CELESTE EN EL CAPÍTULO 7 (Franja Hecho en Argentina) */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute left-[12%] width-[38%] bottom-[5.8%] h-[5%] w-[40%] rounded-sm border border-[#75AADB]/70 bg-gradient-to-r from-[#75AADB]/25 via-white/15 to-transparent transition-opacity duration-500 ${
              activeChapter === 7 ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* 6. CAPA DE BARRIDO DE LUZ ROJA Y SHIMMER (Ajuste 6: plus-lighter desactivado en móvil) */}
          <div
            ref={lightSweepRef}
            aria-hidden="true"
            className="hidden lg:block pointer-events-none absolute -inset-full z-30 opacity-45"
            style={{
              background:
                "linear-gradient(115deg, transparent 35%, rgba(188, 84, 66, 0.38) 48%, rgba(247, 239, 226, 0.22) 51%, transparent 65%)",
              mixBlendMode: "plus-lighter",
              transform: "translate3d(-35%, -10%, 0)",
            }}
          />
        </div>
      </div>
    </div>
  );
}