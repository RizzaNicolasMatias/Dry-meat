import React from "react";
import type { Metadata } from "next";
import { Bodoni_Moda, Space_Grotesk } from "next/font/google";
import "./globals.css";
import {
  BRAND_CONTENT,
  PARTNER_STORES,
  SITE_SETTINGS,
  type PartnerStore,
} from "../data/content";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  // Se cargan también las cursivas: sin esto el navegador "inventa" la itálica
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

/** Convierte una ruta (/images/x.png) en URL absoluta, como exigen Open Graph y JSON-LD */
const absoluteUrl = (path: string) =>
  new URL(path, SITE_SETTINGS.siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_SETTINGS.siteUrl),
  title: "DRY•MEAT | Snack Proteico de Carne Vacuna · Sabor Clásico 30 g",
  description:
    "Presentación oficial de DRY•MEAT (@drymeat.arg). Snack proteico 100% carne vacuna, 50% proteína, 0% TACC, fuente de BCAA y aminoácidos esenciales. Hecho en Argentina. Encontralo en gimnasios y comercios aliados.",
  openGraph: {
    title: "DRY•MEAT | Snack Proteico de Carne Vacuna (30 g)",
    description:
      "100% Carne Vacuna · 50% Proteína · 0% TACC · Fuente de BCAA y aminoácidos esenciales. Conocé todos los puntos de venta oficiales.",
    type: "website",
    locale: "es_AR",
    images: [
      {
        // CORRECCIÓN: antes usaba assets.packHero, que no existe (rompía el build)
        url: BRAND_CONTENT.assets.packHeroReference,
        alt: "Envase DRY•MEAT Snack Proteico Sabor Clásico 30 g",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "DRY•MEAT",
        sameAs: [BRAND_CONTENT.instagramUrl],
        logo: absoluteUrl(BRAND_CONTENT.assets.logo),
        areaServed: "AR",
      },
      {
        "@type": "Product",
        name: "DRY•MEAT Snack Proteico de Carne Vacuna - Sabor Clásico (30 g)",
        brand: {
          "@type": "Brand",
          name: "DRY•MEAT",
        },
        description:
          "Snack proteico de carne vacuna, sabor Clásico, bolsa de 30 g. 100% carne vacuna, 50% proteína, 0% TACC, fuente de BCAA y aminoácidos esenciales. Hecho en Argentina.",
        image: [absoluteUrl(BRAND_CONTENT.assets.packHeroReference)],
        countryOfOrigin: "Argentina",
        weight: {
          "@type": "QuantitativeValue",
          value: "30",
          unitCode: "GRM",
        },
        availableAtOrFrom: PARTNER_STORES.map((store: PartnerStore) => ({
          "@type": "Place",
          name: store.name,
        })),
      },
    ],
  };

  return (
    <html
      lang="es-AR"
      className={`${bodoniModa.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased selection:bg-[#BC5442] selection:text-[#F7EFE2]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
