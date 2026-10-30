import { Boxes, BrainCircuit, Layers, Rocket, Smartphone, Server, Sparkles, type LucideIcon } from "lucide-react";

export type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    icon: Sparkles,
    title: "Conception & expérience",
    description:
      "Structurer un besoin, clarifier les parcours et traduire une idée en interface utilisable.",
  },
  {
    icon: Layers,
    title: "Interfaces web",
    description: "React, TypeScript, accessibilité et performances perçues.",
  },
  {
    icon: Server,
    title: "APIs & backend",
    description: "Spring Boot, Node, persistance et auth (JWT).",
  },
  {
    icon: Smartphone,
    title: "Mobile Android",
    description: "Applications natives, fragments, Room, tests JUnit.",
  },
  {
    icon: Boxes,
    title: "Architecture",
    description: "MVC, REST, WebSocket, modèles maintenables.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence artificielle",
    description:
      "Intégration de LLM et d’agents dans des produits réels : APIs, RAG, automatisation et outils sur mesure.",
  },
  {
    icon: Rocket,
    title: "Livraison",
    description: "Docker, CI/CD, qualité et mise en production.",
  },
];
