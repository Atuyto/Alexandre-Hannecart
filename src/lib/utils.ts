import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** URL pour les assets (images) : fonctionne en racine (Vercel) ou en sous-dossier (GitHub Pages). */
export function getAssetUrl(path: string): string {
  if (!path) return ""
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "") || ""
  const cleanPath = path.startsWith("/") ? path.slice(1) : path
  return `${base}/${cleanPath}`
}
