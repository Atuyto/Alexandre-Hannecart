# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite, React 18, TypeScript, React Router, Tailwind CSS, shadcn/ui, Framer Motion, TanStack Query. Package manager : pnpm. Hébergement / déploiement : non spécifié dans le dépôt.

## Users

- **Recruteurs et clients potentiels** évaluant compétences full-stack et sérieux de livraison.
- **Pairs techniques** parcourant études de cas (mobile, web, jeux).

## Product Purpose

Site portfolio personnel d’**Alexandre Hannecart** : présenter projets, parcours et moyens de contact pour déclencher une prise de relation professionnelle.

Succès = visiteur comprend le profil, explore des projets pertinents et peut contacter facilement.

## Positioning

Mise en avant **produit / livraison** (contexte, choix techniques, démos) plutôt qu’un portfolio purement décoratif — crédibilité studio sombre, contenu structuré.

## Operating Context

- Langue UI : français.
- Routes : Accueil, Projets (+ détail par id), À propos, Contact.
- Contact : formulaire Formspree (`formspree.io`) + coordonnées affichées (email, téléphone, Fourmies).

## Capabilities and Constraints

- Catalogue projets filtrable (Web, Mobile, Jeux).
- Fiches projet : galerie, layout « étapes », comparateur avant/après, iframe démo locale quand applicable.
- Thème **sombre uniquement** (v1).
- Contenu projet issu de `src/data/projects` — ne pas inventer de clients ou métriques non présents.

## Brand Commitments

- Nom : Alexandre Hannecart.
- Monogramme « AH » dans la barre de navigation.
- Direction visuelle approuvée : studio produit dark, teal atténué (spec `docs/superpowers/specs/2026-10-30-portfolio-style-redesign-design.md`).

## Evidence on Hand

- Assets projet dans le dépôt (images, vidéos, GIFs selon projets).
- Photo profil `moi.png`.
- Pas de témoignages clients versionnés dans le repo — ne pas en fabriquer.

## Product Principles

1. Clarté avant effet — l’interface s’efface, les projets mènent.
2. Honnêteté sur l’état (badges « en cours de développement »).
3. Accessibilité et performance traitées comme partie de la qualité livrée.
4. Cohérence des surfaces (tokens, composants partagés).

## Accessibility & Inclusion

- Cible WCAG 2.1 AA sur parcours publics.
- Respect de `prefers-reduced-motion` sur animations non essentielles.
- Navigation clavier, skip link, formulaires labellisés.
