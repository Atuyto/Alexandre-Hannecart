import { useParams, useNavigate } from "react-router-dom";
import { getProjectById } from "@/data/projects";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { getAssetUrl } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const splitTextOnDot = (text: string) => {
  return text.split(".").map((sentence, index) => {
    return sentence ? (
      <p key={index}>
        {sentence.trim()}. <br />
      </p>
    ) : null;
  });
};

const isYoutubeUrl = (url: string): boolean => {
  return url.includes("youtube.com") || url.includes("youtu.be");
};

const getYoutubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
};

const renderCarouselItem = (item: string) => {
  if (isYoutubeUrl(item)) {
    const videoId = getYoutubeVideoId(item);
    return (
      <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }
  return (
    <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-secondary/30 group">
      <img
        src={getAssetUrl(item)}
        alt="Project media"
        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
};

function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id);

  useEffect(() => {
    if (id != null && project == null) {
      navigate("/", { replace: true });
    }
  }, [id, project, navigate]);

  if (!project) {
    return null;
  }

  const isStepsLayout = project.layout === "steps";

  const copyCredentials = () => {
    if (!project.demoCredentials) return;
    const text = `Identifiant : ${project.demoCredentials.login}\nMot de passe : ${project.demoCredentials.password}`;
    navigator.clipboard.writeText(text).then(() => toast.success("Identifiants copiés dans le presse-papier"));
  };

  if (isStepsLayout && project.problem != null) {
    const resultStepNumber = project.technologies && project.technologies.length > 0 ? 4 : 3;
    const hasGallery = project.carouselImages && project.carouselImages.length > 0;
    const hasDemo = !!project.demoLink;
    const hasResultContent = hasGallery || hasDemo;

    return (
      <div className="container mx-auto px-4 sm:px-6 py-12 pt-8">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 font-display"
        >
          {project.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto"
        >
          {project.Shortdescription}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-16"
        >
          {project.inDevelopment && (
            <span className="text-sm font-medium bg-amber-500/90 text-amber-950 px-3 py-1.5 rounded-md">
              En cours de développement
            </span>
          )}
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-24">
          {/* Étape 1 – Problématique */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Étape 1</span>
            <h2 className="text-2xl font-bold mt-2 mb-4 font-display">Problématique</h2>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </motion.section>

          {/* Étape 2 – Solutions */}
          {project.solutions && project.solutions.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Étape 2</span>
              <h2 className="text-2xl font-bold mt-2 mb-6 font-display">Solutions</h2>
              <ul className="space-y-4">
                {project.solutions.map((solution, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Étape 3 – Technologies (optionnelle) */}
          {project.technologies && project.technologies.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Étape 3</span>
              <h2 className="text-2xl font-bold mt-2 mb-6 font-display">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Badge variant="secondary" className="text-xs font-normal py-1.5 px-3">
                      {tech}
                    </Badge>
                  </motion.span>
                ))}
              </div>
            </motion.section>
          )}

          {/* Dernière étape – Résultat (galerie + démo web si présent) */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Étape {resultStepNumber}</span>
            <h2 className="text-2xl font-bold mt-2 mb-6 font-display">Résultat</h2>

            {hasGallery && (
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-foreground">Captures et visuels</h3>
                {                project.carouselLayout === "beforeAfter" &&
                project.carouselImages &&
                project.carouselImages.length === 2 ? (
                  <BeforeAfterSlider
                    beforeImageUrl={getAssetUrl(
                      project.carouselVideos?.[0] ?? project.carouselImages[0]
                    )}
                    afterImageUrl={getAssetUrl(
                      project.carouselVideos?.[1] ?? project.carouselImages[1]
                    )}
                    beforeLabel="AVANT"
                    afterLabel="APRÈS"
                  />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.carouselImages!.map((item: string, index: number) => (
                      <div key={index} className="rounded-xl overflow-hidden border border-border">
                        {renderCarouselItem(item)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {hasDemo && (
              <>
                <p className="text-muted-foreground mb-4">
                  L'application est disponible en local. Lancez le projet pour la voir ci-dessous.
                </p>
                {project.demoCredentials && (
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm">
                      <span className="text-muted-foreground">Identifiants de test :</span>
                      <code className="text-foreground font-mono text-xs">
                        {project.demoCredentials.login} / {project.demoCredentials.password}
                      </code>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 shrink-0"
                        onClick={copyCredentials}
                        aria-label="Copier les identifiants"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
                <p className="text-muted-foreground text-sm mb-3">
                  Si la barre de navigation ne s'affiche pas dans l'aperçu, ouvrez l'application dans un nouvel onglet pour une vue complète.
                </p>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Ouvrir l'application dans un nouvel onglet
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="rounded-xl overflow-hidden border border-border bg-background w-full min-h-[520px] md:min-h-[680px]">
                  <iframe
                    title={`Démonstration ${project.name}`}
                    src={project.demoLink}
                    className="w-full h-[520px] md:h-[680px] border-0"
                    allow="fullscreen"
                  />
                </div>
              </>
            )}

            {!hasResultContent && (
              <p className="text-muted-foreground">Aucune capture ou démo disponible pour ce projet.</p>
            )}
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/projects")}
              className="focus-visible:ring-2 focus-visible:ring-ring"
            >
              Retour aux projets
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  /* Layout par défaut */
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 pt-8">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 font-display"
      >
        {project.name}
      </motion.h1>
      {project.inDevelopment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <span className="text-sm font-medium bg-amber-500/90 text-amber-950 px-3 py-1.5 rounded-md">
            En cours de développement
          </span>
        </motion.div>
      )}
      {!project.inDevelopment && <div className="mb-12" />}

      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-full md:w-1/2 glass-card p-4 rounded-xl">
            {project.carouselImages?.length > 0 &&
              renderCarouselItem(project.carouselImages[0])}
          </div>
          <div className="w-full md:w-1/2 glass-card p-6 rounded-xl">
            <div className="text-lg leading-relaxed">
              {splitTextOnDot(project.Description)}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col-reverse md:flex-row items-center gap-8"
        >
          <div className="w-full md:w-1/2 glass-card p-6 rounded-xl">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-primary">Objectif: </span>
              {splitTextOnDot(project.objective)}
            </p>
            <p className="text-lg leading-relaxed mt-4">
              {splitTextOnDot(project.details)}
            </p>
          </div>
          <div className="w-full md:w-1/2 glass-card p-4 rounded-xl">
            {project.carouselImages?.length > 1 &&
              renderCarouselItem(project.carouselImages[1])}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-primary">Galerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.carouselImages?.map((item: string, index: number) => (
              <div key={index} className="glass-card p-4 rounded-xl">
                {renderCarouselItem(item)}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-left pt-8"
        >
          {project.DesignBy !== "" && (
            <a
              href={project.DesignByURL}
              className="text-primary font-semibold hover:text-primary/80 hover:underline transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              {project.DesignBy}
            </a>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-center pt-8"
        >
          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="bg-primary/90 hover:bg-primary text-primary-foreground px-6 py-3 rounded-lg transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Retour aux projets
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetails;
