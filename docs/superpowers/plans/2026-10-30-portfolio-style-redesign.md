# Portfolio style redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Apply studio-product dark visual system per `docs/superpowers/specs/2026-10-30-portfolio-style-redesign-design.md`.

**Architecture:** Centralize tokens/utilities in `index.css` + `tailwind.config.ts`, then update shell, home, shared components, and pages. Remove `DevSignalGrid` and `AmbientBackground`.

**Tech Stack:** React, Vite, Tailwind 3, shadcn/ui, Framer Motion.

## Global Constraints

- Dark theme only; `--primary: 168 45% 42%`; `--radius: 0.5rem`; Plus Jakarta display; motion moderate; no glass/glow/bento hero grid.

---

See spec sections 1–6 for file list and verification (`pnpm build`, manual routes).
