import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { getAssetUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
  recent?: boolean;
}

export function ProjectCard({ project, className, index = 0, recent }: ProjectCardProps) {
  const reduced = usePrefersReducedMotion();
  const isVideo = /\.(mp4|webm)(\?|$)/i.test(project.image);

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "surface-elevated card-interactive group relative flex h-full flex-col p-5 sm:p-6 hover:bg-card",
        className
      )}
    >
      <Link
        to={`/projects/${project.id}`}
        className="absolute inset-0 z-[1] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`Voir le projet ${project.name}`}
      />
      <div className="relative z-0 pointer-events-none flex h-full flex-col">
        <div className="relative aspect-video overflow-hidden rounded-md bg-secondary/50">
          {isVideo ? (
            reduced ? (
              <div className="flex h-full w-full items-center justify-center bg-secondary text-xs font-medium text-muted-foreground">
                Aperçu vidéo — {project.name}
              </div>
            ) : (
              <video
                src={getAssetUrl(project.image)}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            )
          ) : (
            <img
              src={getAssetUrl(project.image)}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          )}
          {recent && (
            <span className="absolute top-3 left-3 text-xs font-medium bg-secondary border border-border text-foreground px-2 py-1 rounded-md">
              Récent
            </span>
          )}
          {project.inDevelopment && (
            <span className="absolute top-3 right-3 badge-in-development">En cours de développement</span>
          )}
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>{project.category}</span>
            <span>{project.date}</span>
          </div>
          <h3 className="mt-2 font-display font-semibold text-lg text-foreground">{project.name}</h3>
          <p className="mt-2 flex-grow text-readable text-muted-foreground line-clamp-3">
            {project.Shortdescription}
          </p>
          {project.technologies && project.technologies.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
              {project.technologies.slice(0, 4).map((tech) => (
                <li key={tech} className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                  {tech}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/90">
            En savoir plus
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </p>
        </div>
      </div>
    </motion.article>
  );
}
