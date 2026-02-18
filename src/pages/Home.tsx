import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getRecentProjects } from "@/data/projects";
import { getAssetUrl } from "@/lib/utils";

const recentProjects = getRecentProjects();

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const Home = () => {
  return (
    <div className="page-transition">
      <section className="min-h-screen flex items-center justify-center pt-14 hero-gradient">
        <div className="container px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={item}
              className="text-3xl md:text-5xl font-bold mb-6 font-display leading-snug"
            >
              Je suis Alexandre, un étudiant dévoué en informatique qui se passionne pour le
              développement d'applications.
              <br />
              <span className="text-muted-foreground font-normal text-2xl md:text-4xl">
                J'aime transformer les idées en réalités, une ligne de code à la fois.
              </span>
              <br />
              <span className="text-primary">Ensemble, façonnons l'avenir du numérique.</span>
            </motion.h1>
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted-foreground mb-10"
            >
              Développeur passionné par la construction d'applications esthétiques et fonctionnelles
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
              >
                Voir mes projets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg text-foreground hover:bg-secondary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Me contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold text-center mb-14 font-display"
          >
            Projets récents
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgb(0 0 0 / 0.25)" }}
                className="glass-card rounded-xl p-6 group relative"
              >
                <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden relative">
                  {/\.(mp4|webm)(\?|$)/i.test(project.image) ? (
                    <video
                      src={getAssetUrl(project.image)}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={getAssetUrl(project.image)}
                      alt={`Image de ${project.name}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  {project.inDevelopment && (
                    <span className="absolute top-3 left-3 text-xs font-medium bg-amber-500/90 text-amber-950 px-2 py-1 rounded-md">
                      En cours de développement
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">{project.Shortdescription}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded group/link"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
