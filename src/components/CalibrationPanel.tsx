"use client";

import React, { useState } from "react";
import {
  HERO_HOOK_OPTIONS,
  type DetailCalloutConfig,
  type SectionProductPath,
} from "@/data/content";

interface CalibrationPanelProps {
  paths: Record<string, SectionProductPath>;
  onChangePaths: (next: Record<string, SectionProductPath>) => void;
  callouts: Record<string, DetailCalloutConfig>;
  onChangeCallouts: (next: Record<string, DetailCalloutConfig>) => void;
  selectedHookIndex: number;
  onChangeHookIndex: (idx: number) => void;
}

export function CalibrationPanel({
  paths,
  onChangePaths,
  callouts,
  onChangeCallouts,
  selectedHookIndex,
  onChangeHookIndex,
}: CalibrationPanelProps) {
  const [open, setOpen] = useState(false);
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [selectedSectionKey, setSelectedSectionKey] =
    useState<string>("section1_hero");
  const [selectedCalloutKey, setSelectedCalloutKey] =
    useState<string>("callout_bull");
  const [copied, setCopied] = useState(false);

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const currentSection = paths[selectedSectionKey];
  const currentPose = currentSection[deviceMode];
  const currentCallout = callouts[selectedCalloutKey];

  const updatePoseField = (field: keyof typeof currentPose, val: number) => {
    onChangePaths({
      ...paths,
      [selectedSectionKey]: {
        ...currentSection,
        [deviceMode]: {
          ...currentPose,
          [field]: val,
        },
      },
    });
  };

  const updateCalloutField = (
    field: "anchorX" | "anchorY" | "labelX" | "labelY",
    val: number
  ) => {
    onChangeCallouts({
      ...callouts,
      [selectedCalloutKey]: {
        ...currentCallout,
        [field]: val,
      },
    });
  };

  const exportSnippet = `// Pegar en src/data/content.ts
export const PRODUCT_PATH = ${JSON.stringify(paths, null, 2)};

export const DETAIL_CALLOUTS = ${JSON.stringify(callouts, null, 2)};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(exportSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <aside className="fixed bottom-4 left-4 z-50 font-sans-tech text-xs text-[#F7EFE2]">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="bg-[#1B1B19] border-2 border-[#C9A24A] text-[#C9A24A] px-3.5 py-2 font-bold uppercase tracking-widest"
      >
        {open ? "CERRAR CALIBRADOR [DEV]" : "CALIBRAR POSES [DEV]"}
      </button>

      {open && (
        <div className="mt-2 w-80 sm:w-96 max-h-[78vh] overflow-y-auto bg-[#120808] border-2 border-[#BC5442] p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-[#F7EFE2]/20 pb-2">
            <span className="font-bold uppercase tracking-wider text-[#C9A24A]">
              CALIBRADOR CORTE PREMIUM
            </span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setDeviceMode("desktop")}
                className={`px-2 py-0.5 uppercase font-bold ${
                  deviceMode === "desktop"
                    ? "bg-[#BC5442] text-[#F7EFE2]"
                    : "bg-[#1B1B19] text-[#F7EFE2]/60"
                }`}
              >
                Desktop
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode("mobile")}
                className={`px-2 py-0.5 uppercase font-bold ${
                  deviceMode === "mobile"
                    ? "bg-[#BC5442] text-[#F7EFE2]"
                    : "bg-[#1B1B19] text-[#F7EFE2]/60"
                }`}
              >
                Mobile
              </button>
            </div>
          </div>

          {/* Selector de Frase Gancho del Hero */}
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#C9A24A] mb-1">
              Frase Gancho del Hero (Elegí 1 de las 3)
            </label>
            <select
              value={selectedHookIndex}
              onChange={(e) => onChangeHookIndex(Number(e.target.value))}
              className="w-full bg-[#1B1B19] border border-[#F7EFE2]/30 text-[#F7EFE2] p-1.5 text-xs"
            >
              {HERO_HOOK_OPTIONS.map((opt, idx) => (
                <option key={opt.id} value={idx}>
                  Opción {idx + 1}: {opt.text.slice(0, 38)}...
                </option>
              ))}
            </select>
          </div>

          {/* Selector de Sección */}
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#C9A24A] mb-1">
              Pose de Bolsa por Sección ({deviceMode})
            </label>
            <select
              value={selectedSectionKey}
              onChange={(e) => setSelectedSectionKey(e.target.value)}
              className="w-full bg-[#1B1B19] border border-[#F7EFE2]/30 text-[#F7EFE2] p-1.5 text-xs mb-2"
            >
              {Object.entries(paths).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.name}
                </option>
              ))}
            </select>

            <div className="space-y-2">
              <label className="flex justify-between">
                <span>X (vw): {currentPose.x}</span>
                <input
                  type="range"
                  min={-40}
                  max={40}
                  step={1}
                  value={currentPose.x}
                  onChange={(e) =>
                    updatePoseField("x", parseFloat(e.target.value))
                  }
                />
              </label>
              <label className="flex justify-between">
                <span>Y (vh): {currentPose.y}</span>
                <input
                  type="range"
                  min={-45}
                  max={35}
                  step={1}
                  value={currentPose.y}
                  onChange={(e) =>
                    updatePoseField("y", parseFloat(e.target.value))
                  }
                />
              </label>
              <label className="flex justify-between">
                <span>Rotate (°): {currentPose.rotate}</span>
                <input
                  type="range"
                  min={-18}
                  max={18}
                  step={0.5}
                  value={currentPose.rotate}
                  onChange={(e) =>
                    updatePoseField("rotate", parseFloat(e.target.value))
                  }
                />
              </label>
              <label className="flex justify-between">
                <span>Scale: {currentPose.scale}</span>
                <input
                  type="range"
                  min={0.35}
                  max={1.35}
                  step={0.02}
                  value={currentPose.scale}
                  onChange={(e) =>
                    updatePoseField("scale", parseFloat(e.target.value))
                  }
                />
              </label>
            </div>
          </div>

          {/* Calibrador de Línea Técnica */}
          <div className="border-t border-[#F7EFE2]/20 pt-3">
            <label className="block text-[10px] uppercase tracking-widest text-[#C9A24A] mb-1">
              Línea de Detalle (% sobre PNG)
            </label>
            <select
              value={selectedCalloutKey}
              onChange={(e) => setSelectedCalloutKey(e.target.value)}
              className="w-full bg-[#1B1B19] border border-[#F7EFE2]/30 text-[#F7EFE2] p-1.5 text-xs mb-2"
            >
              {Object.entries(callouts).map(([key, c]) => (
                <option key={key} value={key}>
                  Sec {c.sectionNumber}: {c.label}
                </option>
              ))}
            </select>

            <div className="space-y-1.5">
              <label className="flex justify-between">
                <span>Anchor X (%): {currentCallout.anchorX}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={currentCallout.anchorX}
                  onChange={(e) =>
                    updateCalloutField("anchorX", parseFloat(e.target.value))
                  }
                />
              </label>
              <label className="flex justify-between">
                <span>Anchor Y (%): {currentCallout.anchorY}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={currentCallout.anchorY}
                  onChange={(e) =>
                    updateCalloutField("anchorY", parseFloat(e.target.value))
                  }
                />
              </label>
              <label className="flex justify-between">
                <span>Label X (%): {currentCallout.labelX}</span>
                <input
                  type="range"
                  min={-35}
                  max={135}
                  step={1}
                  value={currentCallout.labelX}
                  onChange={(e) =>
                    updateCalloutField("labelX", parseFloat(e.target.value))
                  }
                />
              </label>
              <label className="flex justify-between">
                <span>Label Y (%): {currentCallout.labelY}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={currentCallout.labelY}
                  onChange={(e) =>
                    updateCalloutField("labelY", parseFloat(e.target.value))
                  }
                />
              </label>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full py-2 bg-[#BC5442] text-[#F7EFE2] font-bold uppercase tracking-widest"
          >
            {copied ? "¡OBJETO COPIADO!" : "COPIAR OBJETO PARA CONTENT.TS"}
          </button>

          <pre className="bg-[#1B1B19] p-2 text-[10px] overflow-x-auto max-h-32 text-[#F7EFE2]/80">
            {exportSnippet}
          </pre>
        </div>
      )}
    </aside>
  );
}