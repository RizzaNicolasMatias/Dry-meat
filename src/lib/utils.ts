import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Limpia paréntesis y comillas de la calle y construye el link a Google Maps
 * usando cityProvince sin requerir API Key.
 */
export function getGoogleMapsSearchUrl(address: string, cityProvince: string): string {
  const cleanAddress = address
    .replace(/\([^)]*\)/g, "")
    .replace(/["“”']/g, "")
    .replace(/,\s*$/, "")
    .trim();

  const fullQuery = `${cleanAddress}, ${cityProvince}, Argentina`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullQuery)}`;
}

/**
 * Genera el enlace a WhatsApp con mensaje prellenado.
 */
export function getWhatsAppUrl(phoneRaw: string, message: string): string {
  const cleanDigits = phoneRaw.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message);
  if (!cleanDigits) {
    return `https://api.whatsapp.com/send?text=${encodedText}`;
  }
  return `https://wa.me/${cleanDigits}?text=${encodedText}`;
}