import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** URL pour les assets (images) : fonctionne en dev (/) et sur GitHub Pages (/Alexandre-Hannecart/) */
export function getAssetUrl(path: string): string {
  if (!path) return ""
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "") || ""
  const cleanPath = path.startsWith("/") ? path.slice(1) : path
  return `${base}/${cleanPath}`
}
