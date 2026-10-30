import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { getAssetUrl } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function HeroScene() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      className="relative min-h-[min(72vh,calc(100dvh-3.5rem))] flex items-center overflow-hidden py-16 sm:py-20 border-b border-border"
      aria-labelledby="hero-title"
    >
      <div className="site-shell-wide w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              id="hero-title"
              className="font-display font-bold tracking-tight text-balance-display"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95]">
                Alexandre
              </span>
              <span className="block text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] text-muted-foreground/90">
                Hannecart
              </span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-xl text-lg sm:text-xl text-foreground/90 text-readable"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reduced ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Analyste programmeur · Fourmies, France — développeur full-stack et intégration IA
              (applications web, mobile Android et outils sur mesure), de la conception à la livraison.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/projects" className="btn-primary group">
                Explorer les projets
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link to="/contact" className="btn-ghost group">
                Discuter d&apos;un projet
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="surface-elevated overflow-hidden p-1">
              <img
                src={getAssetUrl("moi.png")}
                alt="Alexandre Hannecart"
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full rounded-md object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
