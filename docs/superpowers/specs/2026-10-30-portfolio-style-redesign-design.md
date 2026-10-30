# Refonte visuelle portfolio — studio produit (dark)

**Date :** 2026-10-30  
**Statut :** Approuvé en brainstorming (sections 1–4)  
**Périmètre :** Identité visuelle et UI uniquement — contenu, routes et logique métier inchangés.

## Objectif

Remplacer l’esthétique actuelle (portfolio créatif : glass, glow, bento, grille animée) par une direction **studio produit** : sombre, sobre, crédible B2B, accent teal atténué, motion modéré.

## Décisions validées

| Dimension | Choix |
|-----------|--------|
| Portée | Refonte complète visuelle |
| Personnalité | Studio produit — structuré, pro |
| Thème | Sombre par défaut (pas de mode clair v1) |
| Accent | Teal proche de l’existant, saturation ~45 % |
| Motion | Modéré — entrées discrètes, pas de décor showcase |
| Capabilities sur À propos | Section « Ce que je livre » **supprimée** (doublon accueil) |

## Approche retenue

**Structured product dark** (option 2 du brainstorming) : charbon neutre, IBM Plex Sans + Plus Jakarta Sans, cartes plates bordure, suppression des effets glass/glow et de `DevSignalGrid`.

---

## 1. Design tokens & typographie

### Couleurs (`src/index.css`, `:root` HSL)

| Token | Valeur cible | Notes |
|-------|----------------|-------|
| `--background` | `220 10% 7%` | Charbon, moins bleu que l’actuel |
| `--foreground` | `210 15% 93%` | Texte principal |
| `--card` | ~+2–4 % L vs background | Opaque, sans blur |
| `--secondary` / `--muted` | Neutres discrets | Surfaces UI |
| `--border` | `220 8% 18%` | Bordures visibles mais sobres |
| `--primary` | `168 45% 42%` | Teal corporate |
| `--primary-foreground` | Contraste sur primary | Texte boutons |
| `--ring` | Aligné primary | Focus |
| `--radius` | `0.5rem` | Moins « pill portfolio » |

### Typographie

- **Corps / UI :** IBM Plex Sans (400, 500, 600) — conservé.
- **Display :** Plus Jakarta Sans (600, 700) — remplace Syne.
- **Mono :** métadonnées (lieu, dates, stack footer, eyebrows).

Mise à jour : `@import` Google Fonts dans `index.css`, `fontFamily.display` dans `tailwind.config.ts`, retrait de Syne.

### Surfaces & classes utilitaires

**Déprécier / retirer usages :**

- `.glass-panel`
- `.bg-grid-fade`, `.bg-accent-glow`, `.bg-primary-glow`
- `.shadow-depth-lg` (hover cartes)
- Glow sur `.filter-chip-active`, `.btn-primary` hover

**Introduire / renforcer :**

- `.surface-elevated` — `bg-card border border-border rounded-lg`
- `.surface-card` — aligner sur elevated ou alias
- Boutons `.btn-primary` / `.btn-outline` / `.btn-ghost` — `rounded-lg`, hover sans halo
- `.filter-chip` — `rounded-lg`, actif sans shadow glow
- Sections — `.section-block` : `py-16 sm:py-24`

---

## 2. Shell global

### App (`App.tsx`)

- Retirer `AmbientBackground` (fichier absent / non utilisé).
- Fond viewport : `bg-background` uni.
- Option : dégradé statique top (~120px, opacité ≤ 4 %) — pas d’animation.

### Navbar

- Fond : `bg-background/95` + `backdrop-blur-sm` léger.
- Bordure basse `border-border` permanente ; scroll sans effet dramatique.
- Liens actifs : indicateur 2px `bg-primary` sous le lien (remplace animation `scale-x`).
- CTA Contact : primaire compact `rounded-lg`.
- Mobile : `bg-card`, items `rounded-lg`, actif `bg-secondary`.
- Logo AH : `rounded-md`, `secondary`, initiales `foreground` (pas teal sur logo).

### Footer

- Supprimer gradient décoratif `via-primary/40`.
- Labels colonnes : `text-xs font-medium text-muted-foreground`.
- Icônes sociales : `rounded-lg`, hover bordure + foreground.
- Copyright + stack mono inchangés fonctionnellement.

### En-têtes

- `PageHeader` : eyebrow optionnel (`font-mono text-xs text-muted-foreground`).
- H1 : Plus Jakarta, clamp légèrement réduit vs hero accueil.

---

## 3. Pages & composants

### Accueil — Hero (`HeroScene`)

- Colonne gauche : eyebrow, H1 deux lignes, pitch, CTA — conservés.
- Colonne droite : **supprimer `DevSignalGrid`** et panneau glass/blur.
- Remplacer par carte profil statique : photo `moi.png` `rounded-lg` + encadré bio (`surface-elevated`).
- `min-h` hero réduit (~80vh max).
- Motion : fade + y ≤ 16px, durée ≤ 0.5s.

### Accueil — Capabilities (`CapabilitiesBento`)

- Grille uniforme (2×2 desktop, 1 col mobile) — retirer spans bento dans `capabilities.ts` si présents.
- Cartes `surface-elevated`, pas de blob blur au hover.
- `Reveal` : `fade` ou `rise` léger uniquement.

### Accueil — Projets récents (`Home`)

- Grille 3 colonnes égales (fin bento 7/5/5).
- `ProjectCard` sans traitement `featured` oversized ; badge « Récent » optionnel sur index 0.

### `ProjectCard`

- `surface-elevated`, hover bordure `primary/30` + fond card — sans `translateY` hover.
- Image : `aspect-video`, `rounded-md`, scale hover ≤ 1.02 ou aucun.
- Lien détail : texte + flèche.

### Projets (`Projects`)

- Eyebrow « Portfolio » sur header.
- Filtres : chips `rounded-lg`, actif secondary + bordure primary, sans glow.
- Animation filtre : opacity only (pas de scale layout marqué).

### Détail projet (`ProjectDetails`)

- Pas de changement fonctionnel.
- Styles : badges secondary par défaut, médias `rounded-lg border`, H2 sections `text-xl font-semibold`.
- `BeforeAfterSlider` : tokens border/ring alignés.

### À propos (`About`)

- Photo + bio : `surface-elevated`, layout 5/7 conservé.
- **Supprimer** bloc « Ce que je livre » (capabilities).
- Stack : tags `rounded-md bg-secondary text-sm`.
- Parcours : ligne 1px `border`, points `bg-primary`.

### Contact

- Formulaire `surface-elevated rounded-lg`.
- Icônes : carrés `rounded-lg bg-secondary`.
- Inputs via tokens shadcn opaques.

### Transverse

- `SectionHeading` : H2 `text-2xl sm:text-3xl`, description `text-base`.
- `Reveal` : défaut 0.45s ; usages pages sans `blur` / `slide`.

---

## 4. Motion & accessibilité

### Motion

| Contexte | Comportement |
|----------|----------------|
| Changement de route | Fade 0.25s |
| Hero | Entrées ≤ 0.5s, y 12–16px |
| Scroll reveal | `rise` y 16 ou `fade`, 0.45s |
| Cartes | Hover CSS only |
| Filtres projets | Opacity transition |

`prefers-reduced-motion` : désactiver animations et `scroll-behavior: smooth` (existant).

### Accessibilité

- Contraste AA visé pour texte ≥ sm sur background/card avec primary désaturé.
- `:focus-visible` ring teal, offset 3px.
- `aria-current` nav conservé.
- Alt portrait : « Alexandre Hannecart » où pertinent.

---

## 5. Périmètre fichiers

| Fichier | Action |
|---------|--------|
| `src/index.css` | Tokens + utilitaires |
| `tailwind.config.ts` | Fonts display |
| `index.html` | Fonts si chargées ici |
| `src/App.tsx` | Retrait AmbientBackground |
| `Navbar.tsx`, `Footer.tsx` | Styles shell |
| `HeroScene.tsx` | Refonte colonne droite |
| `DevSignalGrid.tsx` | Supprimer fichier + imports |
| `CapabilitiesBento.tsx`, `data/capabilities.ts` | Grille uniforme |
| `Home.tsx` | Grille projets |
| `ProjectCard.tsx`, `Projects.tsx` | Cartes + filtres |
| `About.tsx`, `Contact.tsx`, `ProjectDetails.tsx` | Harmonisation styles |
| `PageHeader.tsx`, `SectionHeading.tsx`, `Reveal.tsx` | Typo + motion |

**Hors scope :** textes, `projects.ts`, routes, Formspree, refonte exhaustive `ui/*`.

---

## 6. Vérifications

1. `pnpm build` OK.
2. Parcours : `/`, `/projects` + filtres, détail projet (layouts steps + default), `/about`, `/contact`.
3. Viewports : 375px, 768px, 1280px.
4. Reduced motion OS activé.
5. Carousel / YouTube détail projet OK.

---

## Prochaine étape

Plan d’implémentation détaillé via skill **writing-plans**, après relecture et approbation explicite de ce document.
