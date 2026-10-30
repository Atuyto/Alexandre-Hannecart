import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const categories = ["all", "Web", "Mobile", "Jeux"] as const;

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const reduced = usePrefersReducedMotion();

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="page-transition pt-10 pb-24">
      <div className="site-shell-wide">
        <Reveal className="mb-14 max-w-3xl">
          <PageHeader
            title="Mes projets"
            description="Mobile, web et jeux — avec le contexte et les choix techniques de chaque réalisation."
          />
        </Reveal>

        <Reveal variant="fade" className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => {
            const value = category.toLowerCase();
            const active = filter === value;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(value)}
                className={cn("filter-chip", active ? "filter-chip-active" : "filter-chip-idle")}
                aria-pressed={active}
              >
                {category === "all" ? "Tous" : category}
              </button>
            );
          })}
        </Reveal>

        {reduced ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
