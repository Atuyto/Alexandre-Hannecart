import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { getAssetUrl } from "@/lib/utils";

const categories = ["all", "Web", "Mobile", "Jeux"] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.35, ease: "easeOut" },
  }),
  exit: { opacity: 0, scale: 0.98 },
};

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="page-transition pt-8">
      <div className="container px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold mb-12 font-display"
        >
          Mes projets
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category.toLowerCase())}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                filter === category.toLowerCase()
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category === "all" ? "Tous" : category}
            </button>
          ))}
        </motion.div>

        <section className="pb-20">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgb(0 0 0 / 0.25)" }}
                  className="glass-card rounded-xl p-6 group relative flex flex-col"
                >
                  <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden flex items-center justify-center relative">
                    {/\.(mp4|webm)(\?|$)/i.test(project.image) ? (
                      <video
                        src={getAssetUrl(project.image)}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <img
                        src={getAssetUrl(project.image)}
                        alt={`Image de ${project.name}`}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute top-3 right-3 text-white text-xs bg-black/60 px-2 py-1 rounded-md">
                      {project.date}
                    </div>
                    {project.inDevelopment && (
                      <span className="absolute top-3 left-3 text-xs font-medium bg-amber-500/90 text-amber-950 px-2 py-1 rounded-md">
                        En cours de développement
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.Shortdescription}</p>
                  <div className="flex items-center justify-between gap-2 mt-auto pt-2">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      En savoir plus
                    </Link>
                    <span className="text-xs text-muted-foreground bg-secondary/80 px-2 py-1 rounded-md shrink-0">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
