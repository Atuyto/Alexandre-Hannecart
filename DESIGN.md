---
name: Alexandre Hannecart — Portfolio
description: Studio produit dark, teal atténué, IBM Plex Sans
colors:
  background: "hsl(220 10% 7%)"
  foreground: "hsl(210 15% 93%)"
  card: "hsl(220 10% 10%)"
  primary: "hsl(168 45% 42%)"
  primary-foreground: "hsl(220 10% 7%)"
  secondary: "hsl(220 8% 14%)"
  muted-foreground: "hsl(215 12% 58%)"
  border: "hsl(220 8% 18%)"
  warning: "hsl(38 92% 50%)"
typography:
  display:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontWeight: 700
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  md: "0.5rem"
  full: "9999px"
spacing:
  section-y: "4rem"
  section-y-sm: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  surface-elevated:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
---

## Overview

Identité **structured product dark** : fond charbon neutre, cartes opaques à bordure, accent teal corporate (~45 % saturation). Pas de glass, glow décoratif, ni grilles animées showcase. Mode clair hors scope v1.

## Colors

Tokens CSS dans `src/index.css` (`:root`, HSL sans fonction). Utiliser `bg-background`, `text-foreground`, `border-border`, `text-primary`, etc. — pas de hex/rgb ad hoc sauf médias.

Badge « en cours » : `--warning` / `--warning-foreground` (`.badge-in-development`).

## Typography

- **Sans + display :** IBM Plex Sans (Google Fonts).
- **Display :** titres `font-display`, `tracking-tight`, clamp sur hero.
- **Corps :** `text-readable`, interligne ~1.65.
- Pas de kickers / eyebrows au-dessus des H1.

## Layout

- Coques : `.site-shell` (max-w-6xl), `.site-shell-wide` (max-w ~88rem), largeur fluide 92vw.
- Sections : `.section-block` (`py-16 sm:py-24`).
- Grille projets : 1 / 2 / 3 colonnes selon breakpoint.

## Elevation & Depth

Surfaces plates : `.surface-elevated`, `.surface-card` — bordure `border-border`, hover `border-primary/30`. Ombres légères sur poignées/contrôles uniquement ; pas de halo coloré.

## Shapes

`--radius: 0.5rem` (`rounded-lg` sur cartes et boutons). Chips filtres `rounded-lg`.

## Components

- **Nav :** barre fixe h-14, liens `.nav-link` min 44px, CTA `.btn-primary`.
- **Boutons :** `.btn-primary`, `.btn-outline`, `.btn-ghost`.
- **Cartes projet :** `.surface-elevated.card-interactive`, lien overlay + `aria-label`.
- **PageHeader :** `.page-header` + `.page-lead` (sans eyebrow).
- **Motion :** Framer sur entrées ; désactivé si `prefers-reduced-motion`.

## Do's and Don'ts

**Do :** tokens HSL, focus `ring`, skip link, lazy-load médias, code-split routes.

**Don't :** gradient text, glass/blur décoratif, bento hero metrics, eyebrows, Plus Jakarta / Syne (display = IBM Plex), couleurs hard-codées sur UI chrome.
