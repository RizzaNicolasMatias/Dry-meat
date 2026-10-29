import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Genera el enlace directo a Google Maps sin necesidad de API Key
 */
export function getGoogleMapsSearchUrl(address: string, zone: string): string {
  const fullQuery = `${address}, ${zone}, Argentina`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullQuery)}`;
}

/**
 * Genera el enlace a WhatsApp con mensaje prellenado.
 * Si el número aún tiene [COMPLETAR], abre WhatsApp con el texto listo.
 */
export function getWhatsAppUrl(phoneRaw: string, message: string): string {
  const cleanDigits = phoneRaw.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message);
  if (!cleanDigits) {
    return `https://api.whatsapp.com/send?text=${encodedText}`;
  }
  return `https://wa.me/${cleanDigits}?text=${encodedText}`;
}