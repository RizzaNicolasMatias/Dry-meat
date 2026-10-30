"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Search,
  ExternalLink,
  Store,
  MessageCircle,
  Info,
  X,
  Pause,
  Play,
} from "lucide-react";
import {
  BRAND_CONTENT,
  CHAPTERS_COPY,
  PARTNER_STORES,
  SITE_SETTINGS,
} from "../data/content";
import { getGoogleMapsSearchUrl, getWhatsAppUrl } from "../lib/utils";

interface FlattenedBranch {
  branchId: string;
  storeId: string;
  storeName: string;
  category: string;
  categoryNeedsVerify?: boolean;
  logoFilename: string;
  address: string;
  zone: string;
  cityProvince: string;
  verifyNote?: string;
}

/**
 * Tarjeta individual de logo para el Marquee superior y para las tarjetas de sucursal.
 * Si la imagen en /public/images/stores/<logo>.png no carga, muestra respaldo en texto.
 */
function StoreLogoCard({
  name,
  logoFilename,
  category,
  compact = false,
}: {
  name: string;
  logoFilename: string;
  category: string;
  compact?: boolean;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  if (compact) {
    return (
      <div className="relative w-12 h-12 rounded-xl bg-[#F7EFE2] border border-[#1B1B19]/10 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
        {!imgFailed ? (
          <Image
            src={logoFilename}
            alt={`Logo de ${name}`}
            fill
            loading="lazy"
            sizes="48px"
            className="object-contain p-1.5"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span className="font-serif-display font-bold text-xs text-[#1B1B19] text-center leading-tight px-1">
            {name.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="group relative w-44 sm:w-52 h-24 rounded-2xl bg-[#F7EFE2] text-[#1B1B19] border border-[#1B1B19]/10 shadow-md px-4 py-3 flex flex-col items-center justify-center shrink-0 mx-2.5 transition-transform duration-300 hover:-translate-y-1">
      {!imgFailed ? (
        <div className="relative w-full h-12">
          <Image
            src={logoFilename}
            alt={`Logo de ${name}`}
            fill
            loading="lazy"
            sizes="208px"
            className="object-contain"
            onError={() => setImgFailed(true)}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-serif-display font-bold text-base sm:text-lg text-[#1B1B19] tracking-tight leading-tight">
            {name}
          </span>
          <span className="font-sans-tech text-[10px] uppercase tracking-widest text-[#BC5442] font-semibold mt-0.5">
            {category}
          </span>
        </div>
      )}
    </div>
  );
}

export function WhereToBuySection() {
  const [selectedZone, setSelectedZone] = useState<string>("Todas");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [marqueePaused, setMarqueePaused] = useState<boolean>(false);

  // Aplanamos todas las sucursales desde PARTNER_STORES para calcular contadores y filtros
  const allBranches = useMemo<FlattenedBranch[]>(() => {
    const list: FlattenedBranch[] = [];
    for (const store of PARTNER_STORES) {
      for (const b of store.branches) {
        list.push({
          branchId: b.id,
          storeId: store.id,
          storeName: store.name,
          category: store.category,
          categoryNeedsVerify: store.categoryNeedsVerify,
          logoFilename: store.logoFilename,
          address: b.address,
          zone: b.zone,
          cityProvince: b.cityProvince,
          verifyNote: b.verifyNote,
        });
      }
    }
    return list;
  }, []);

  // Zonas únicas derivadas dinámicamente de los datos
  const zonesWithCount = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of allBranches) {
      counts.set(item.zone, (counts.get(item.zone) ?? 0) + 1);
    }
    return [
      { name: "Todas", count: allBranches.length },
      ...Array.from(counts.entries()).map(([name, count]) => ({ name, count })),
    ];
  }, [allBranches]);

  // Categorías únicas derivadas dinámicamente de los datos
  const categoriesWithCount = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of allBranches) {
      counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
    }
    return [
      { name: "Todos", count: allBranches.length },
      ...Array.from(counts.entries()).map(([name, count]) => ({ name, count })),
    ];
  }, [allBranches]);

  // Sucursales filtradas según Zona, Categoría y Buscador
  const filteredBranches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allBranches.filter((item) => {
      const matchesZone = selectedZone === "Todas" || item.zone === selectedZone;
      const matchesCategory =
        selectedCategory === "Todos" || item.category === selectedCategory;
      const matchesQuery =
        !q ||
        item.storeName.toLowerCase().includes(q) ||
        item.address.toLowerCase().includes(q) ||
        item.zone.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesZone && matchesCategory && matchesQuery;
    });
  }, [allBranches, selectedZone, selectedCategory, searchQuery]);

  const totalStoresCount = PARTNER_STORES.length;
  const totalBranchesCount = allBranches.length;

  const whatsappDirectUrl = getWhatsAppUrl(
    BRAND_CONTENT.whatsappNumber,
    BRAND_CONTENT.whatsappPrefilledMessage
  );

  return (
    <section
      id="donde-comprar"
      aria-labelledby="where-to-buy-heading"
      className="relative z-20 bg-[#120808] text-[#F7EFE2] py-20 sm:py-28 border-t border-[#F7EFE2]/10"
    >
      {/* Cabecera del Capítulo 9 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block font-sans-tech text-xs uppercase tracking-[0.25em] text-[#BC5442] font-semibold mb-3">
              {CHAPTERS_COPY.section9.code}
            </span>
            <h2
              id="where-to-buy-heading"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7EFE2]"
            >
              {CHAPTERS_COPY.section9.titleMain} {CHAPTERS_COPY.section9.titleItalic}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#F7EFE2]/75 max-w-2xl">
              {CHAPTERS_COPY.section9.subtitle}
            </p>
          </div>

          {/* Contadores calculados automáticamente desde content.ts */}
          <div className="flex items-center gap-4 sm:gap-6 bg-[#1B1B19]/90 border border-[#F7EFE2]/10 rounded-2xl px-5 py-4 self-start md:self-auto">
            <div>
              <div className="font-sans-tech text-2xl sm:text-3xl font-bold tabular-nums text-[#C9A24A]">
                {totalStoresCount}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#F7EFE2]/70">
                Comercios aliados
              </div>
            </div>
            <div className="h-9 w-px bg-[#F7EFE2]/15" />
            <div>
              <div className="font-sans-tech text-2xl sm:text-3xl font-bold tabular-nums text-[#BC5442]">
                {totalBranchesCount}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#F7EFE2]/70">
                Puntos de venta
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PARTE 1: Cinta horizontal infinita (Marquee) de logos sobre tarjetas claras */}
      <div className="relative w-full overflow-hidden py-6 bg-[#180B0B] border-y border-[#F7EFE2]/10 mb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#F7EFE2]/60">
            Red oficial de gimnasios y comercios adheridos
          </span>
          <button
            type="button"
            onClick={() => setMarqueePaused((prev) => !prev)}
            className="inline-flex items-center gap-1.5 text-xs text-[#F7EFE2]/75 hover:text-[#F7EFE2] bg-[#F7EFE2]/10 px-3 py-1 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#BC5442]"
            aria-label={
              marqueePaused
                ? "Reanudar carrusel de logos aliados"
                : "Pausar carrusel de logos aliados"
            }
          >
            {marqueePaused ? (
              <>
                <Play className="w-3.5 h-3.5 text-[#C9A24A]" />
                <span>Reanudar</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-[#C9A24A]" />
                <span>Pausar</span>
              </>
            )}
          </button>
        </div>

        {/* Track duplicado para loop continuo sin cortes */}
        <div
          className="animate-marquee-track"
          style={{
            animationPlayState: marqueePaused ? "paused" : undefined,
          }}
        >
          {[...PARTNER_STORES, ...PARTNER_STORES].map((store, index) => (
            <StoreLogoCard
              key={`${store.id}-${index}`}
              name={store.name}
              logoFilename={store.logoFilename}
              category={store.category}
            />
          ))}
        </div>
      </div>

      {/* PARTE 2: Buscador y Filtros Interactivos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B1B19]/90 border border-[#F7EFE2]/12 rounded-3xl p-5 sm:p-7 mb-8 shadow-xl">
          {/* Fila superior: Buscador por nombre o calle + contador de resultados */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="relative flex-1">
              <label htmlFor="store-search-input" className="sr-only">
                Buscar punto de venta por nombre o calle
              </label>
              <Search className="w-5 h-5 text-[#F7EFE2]/50 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="store-search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por gimnasio, comercio o calle (ej. Octaviano, Perón, Aconquija)..."
                className="w-full bg-[#120808] text-[#F7EFE2] placeholder-[#F7EFE2]/45 pl-12 pr-10 py-3.5 rounded-2xl border border-[#F7EFE2]/15 focus:outline-none focus:border-[#BC5442] focus:ring-1 focus:ring-[#BC5442] text-sm sm:text-base transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#F7EFE2]/60 hover:text-[#F7EFE2] p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div
              aria-live="polite"
              className="font-sans-tech text-xs sm:text-sm text-[#F7EFE2]/80 tabular-nums shrink-0"
            >
              Mostrando{" "}
              <strong className="text-[#C9A24A] font-bold">
                {filteredBranches.length}
              </strong>{" "}
              de {totalBranchesCount} puntos de venta
            </div>
          </div>

          {/* Filtro por Zona */}
          <div className="mb-5">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#F7EFE2]/55 mb-2.5">
              Filtrar por zona
            </span>
            <div
              role="group"
              aria-label="Filtrar sucursales por zona"
              className="flex flex-wrap gap-2"
            >
              {zonesWithCount.map((z) => {
                const active = selectedZone === z.name;
                return (
                  <button
                    key={z.name}
                    type="button"
                    onClick={() => setSelectedZone(z.name)}
                    aria-pressed={active}
                    className={`px-3.5 py-2 rounded-xl font-sans-tech text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#BC5442] ${
                      active
                        ? "bg-[#BC5442] text-[#F7EFE2] shadow-md"
                        : "bg-[#120808] text-[#F7EFE2]/75 hover:text-[#F7EFE2] border border-[#F7EFE2]/10"
                    }`}
                  >
                    {z.name}{" "}
                    <span className="opacity-75 tabular-nums ml-1">({z.count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtro por Categoría (con Gimnasio y Gimnasio/Entrenamiento unificados) */}
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#F7EFE2]/55 mb-2.5">
              Filtrar por tipo de comercio
            </span>
            <div
              role="group"
              aria-label="Filtrar sucursales por tipo de negocio"
              className="flex flex-wrap gap-2"
            >
              {categoriesWithCount.map((cat) => {
                const active = selectedCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setSelectedCategory(cat.name)}
                    aria-pressed={active}
                    className={`px-3.5 py-2 rounded-xl font-sans-tech text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A24A] ${
                      active
                        ? "bg-[#F7EFE2] text-[#1B1B19] font-semibold shadow-md"
                        : "bg-[#120808] text-[#F7EFE2]/75 hover:text-[#F7EFE2] border border-[#F7EFE2]/10"
                    }`}
                  >
                    {cat.name}{" "}
                    <span className="opacity-70 tabular-nums ml-1">({cat.count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Nota obligatoria de disponibilidad */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6 px-1">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#C9A24A]">
            <Info className="w-4 h-4 shrink-0" />
            <span>{CHAPTERS_COPY.section9.availabilityNote}.</span>
          </p>
          {(selectedZone !== "Todas" ||
            selectedCategory !== "Todos" ||
            searchQuery.trim() !== "") && (
            <button
              type="button"
              onClick={() => {
                setSelectedZone("Todas");
                setSelectedCategory("Todos");
                setSearchQuery("");
              }}
              className="text-xs underline text-[#F7EFE2]/75 hover:text-[#F7EFE2]"
            >
              Restablecer todos los filtros
            </button>
          )}
        </div>

        {/* Grilla de Tarjetas de Sucursales animada con Motion */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredBranches.map((branch) => {
              const mapsUrl = getGoogleMapsSearchUrl(
                branch.address,
                branch.cityProvince
              );

              return (
                <motion.article
                  layout
                  key={branch.branchId}
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -8 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  tabIndex={0}
                  className="group bg-[#191010] hover:bg-[#211414] border border-[#F7EFE2]/12 hover:border-[#BC5442]/60 rounded-2xl p-5 flex flex-col justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-[#BC5442]"
                >
                  <div>
                    {/* Cabecera de la tarjeta: Logo + Nombre + Categoría */}
                    <div className="flex items-start gap-3.5 mb-4">
                      <StoreLogoCard
                        name={branch.storeName}
                        logoFilename={branch.logoFilename}
                        category={branch.category}
                        compact
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif-display text-lg font-bold text-[#F7EFE2] leading-snug truncate">
                          {branch.storeName}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1">
                          <span className="inline-flex items-center gap-1 text-[11px] font-sans-tech uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#F7EFE2]/10 text-[#F7EFE2]/85">
                            <Store className="w-3 h-3 text-[#BC5442]" />
                            {branch.category}
                          </span>

                          {SITE_SETTINGS.showVerifyTags &&
                            branch.categoryNeedsVerify && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                [verificar categoría]
                              </span>
                            )}
                        </div>
                      </div>
                    </div>

                    {/* Dirección y Zona */}
                    <div className="space-y-1.5 text-sm text-[#F7EFE2]/90 mb-5">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#BC5442] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-[#F7EFE2]">
                            {branch.address}
                          </p>
                          <p className="text-xs text-[#F7EFE2]/65">{branch.zone}</p>
                        </div>
                      </div>

                      {SITE_SETTINGS.showVerifyTags && branch.verifyNote && (
                        <p className="text-[11px] font-mono text-amber-300 bg-amber-500/15 border border-amber-500/30 rounded-lg px-2.5 py-1.5 mt-2">
                          [{branch.verifyNote}]
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Botón Cómo llegar (Google Maps Search URL sin API Key) */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Cómo llegar a ${branch.storeName} en ${branch.address}, ${branch.zone} (abre Google Maps en una nueva pestaña)`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F7EFE2]/10 group-hover:bg-[#BC5442] text-[#F7EFE2] font-sans-tech text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#F7EFE2]"
                  >
                    <span>Cómo llegar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Estado vacío si la búsqueda no arroja coincidencias */}
        {filteredBranches.length === 0 && (
          <div className="text-center py-12 bg-[#1B1B19]/60 rounded-2xl border border-[#F7EFE2]/10 my-4">
            <p className="text-base text-[#F7EFE2]/80 mb-3">
              No encontramos locales que coincidan con &ldquo;{searchQuery}&rdquo; en
              esa zona o categoría.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedZone("Todas");
                setSelectedCategory("Todos");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-[#BC5442] text-[#F7EFE2] text-xs font-semibold uppercase tracking-wider"
            >
              Ver los {totalBranchesCount} puntos de venta
            </button>
          </div>
        )}

        {/* Banner de respaldo por WhatsApp antes del cierre */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#260D0B] via-[#1B1B19] to-[#260D0B] border border-[#BC5442]/35 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#F7EFE2]">
              ¿No tenés un punto de venta cerca?
            </h3>
            <p className="text-sm sm:text-base text-[#F7EFE2]/75 mt-1">
              Escribinos directo por WhatsApp para coordinar tu compra o consultar por
              nuevos comercios aliados en tu zona.
            </p>
          </div>

          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-[#BC5442] hover:bg-[#a64635] text-[#F7EFE2] font-sans-tech font-bold text-sm sm:text-base tracking-wide shadow-lg shrink-0 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F7EFE2]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}