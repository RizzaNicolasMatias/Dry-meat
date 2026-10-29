"use client";

import React, { useEffect, useRef } from "react";
import { SITE_SETTINGS } from "@/data/content";

/**
 * Canvas ligero de polvo en suspensión.
 * AJUSTE 6: En móvil (< 768px) o con prefers-reduced-motion no se monta ni consume GPU/CPU.
 */
export function DustParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReduced || isMobile) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isTablet = window.innerWidth < 1024;
    const particleCount = isTablet ? 14 : 32;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.35 - 0.1,
      alpha: Math.random() * 0.45 + 0.1,
      tint: Math.random() > 0.5 ? "201, 162, 74" : "188, 84, 66",
    }));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.tint}, ${p.alpha})`;
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Oculto en móvil (<768px) mediante hidden md:block
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="hidden md:block pointer-events-none fixed inset-0 z-10 opacity-70"
    />
  );
}

/**
 * TÉCNICA B (DEJADA PREPARADA): Secuencia de imágenes en <canvas> controlada por el scroll.
 * Se activa únicamente si SITE_SETTINGS.useCanvasSequence = true en src/data/content.ts
 * y colocas los frames en /public/frames/frame_0001.webp ... frame_0072.webp
 */
export function CanvasSequence({ progress }: { progress: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (!SITE_SETTINGS.useCanvasSequence) return;

    const total = SITE_SETTINGS.canvasFrameCount;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= total; i++) {
      const img = new window.Image();
      const padded = String(i).padStart(4, "0");
      img.src = `/frames/frame_${padded}.webp`;
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  useEffect(() => {
    if (!SITE_SETTINGS.useCanvasSequence) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const total = SITE_SETTINGS.canvasFrameCount;
    const frameIndex = Math.min(
      total - 1,
      Math.max(0, Math.floor(progress * (total - 1)))
    );

    const img = imagesRef.current[frameIndex];
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, [progress]);

  if (!SITE_SETTINGS.useCanvasSequence) return null;

  return (
    <canvas
      ref={canvasRef}
      width={900}
      height={1200}
      className="w-full h-full object-contain pointer-events-none"
      aria-label="Secuencia animada del envase DRY•MEAT"
    />
  );
}