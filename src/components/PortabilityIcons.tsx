import React from "react";

/**
 * Sello vectorial minimalista para el Capítulo 5 ("0% TACC")
 */
export function ZeroTaccSealSvg({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="70"
        cy="70"
        r="62"
        stroke="#1B1B19"
        strokeWidth="2.5"
        strokeDasharray="6 4"
      />
      <circle cx="70" cy="70" r="52" stroke="#BC5442" strokeWidth="2" />
      {/* Espiga estilizada cruzada */}
      <path
        d="M70 36V104M70 46L58 38M70 46L82 38M70 62L56 52M70 62L84 52M70 78L58 68M70 78L82 68"
        stroke="#1B1B19"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="100"
        x2="100"
        y2="40"
        stroke="#BC5442"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Ilustraciones SVG a medida para el Capítulo 8 ("30 G EN TU BOLSILLO")
 * Sin fotos de stock inventadas.
 */
export function MomentIllustrationSvg({
  type,
  className = "w-12 h-12",
}: {
  type: string;
  className?: string;
}) {
  switch (type) {
    case "gym":
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <rect x="8" y="22" width="6" height="20" rx="2" stroke="#BC5442" strokeWidth="2.5" />
          <rect x="16" y="16" width="6" height="32" rx="2" stroke="#F7EFE2" strokeWidth="2.5" />
          <line x1="22" y1="32" x2="42" y2="32" stroke="#C9A24A" strokeWidth="3" />
          <rect x="42" y="16" width="6" height="32" rx="2" stroke="#F7EFE2" strokeWidth="2.5" />
          <rect x="50" y="22" width="6" height="20" rx="2" stroke="#BC5442" strokeWidth="2.5" />
        </svg>
      );
    case "ruta":
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <path
            d="M22 54L28 12H36L42 54"
            stroke="#F7EFE2"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="32"
            y1="18"
            x2="32"
            y2="50"
            stroke="#C9A24A"
            strokeWidth="2.5"
            strokeDasharray="5 5"
          />
          <circle cx="32" cy="12" r="3" fill="#BC5442" />
        </svg>
      );
    case "camping":
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <path
            d="M10 50L32 14L54 50H10Z"
            stroke="#F7EFE2"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M24 50L32 34L40 50"
            stroke="#BC5442"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="46" cy="18" r="4" stroke="#C9A24A" strokeWidth="2" />
        </svg>
      );
    case "oficina":
    default:
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          <rect
            x="12"
            y="22"
            width="40"
            height="28"
            rx="4"
            stroke="#F7EFE2"
            strokeWidth="2.5"
          />
          <path
            d="M24 22V17C24 14.7909 25.7909 13 28 13H36C38.2091 13 40 14.7909 40 17V22"
            stroke="#BC5442"
            strokeWidth="2.5"
          />
          <line x1="12" y1="34" x2="52" y2="34" stroke="#C9A24A" strokeWidth="2" />
        </svg>
      );
  }
}