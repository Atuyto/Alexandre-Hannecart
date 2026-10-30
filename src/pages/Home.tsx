import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getRecentProjects } from "@/data/projects";
import { HeroScene } from "@/components/home/HeroScene";
import { CapabilitiesBento } from "@/components/home/CapabilitiesBento";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const recentProjects = getRecentProjects();

const Home = () => {
  return (
    <div className="page-transition">
      <HeroScene />
      <CapabilitiesBento />

      <section className="section-block" aria-labelledby="recent-projects">
        <div className="site-shell-wide">
          <Reveal className="mb-14">
            <SectionHeading
              id="recent-projects"
              align="center"
              title="Projets récents"
              description="Une sélection de réalisations récentes — mobile, web et expériences interactives."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
            {recentProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                recent={index === 0}
              />
            ))}
          </div>

          <Reveal variant="fade" className="mt-14 text-center">
            <Link to="/projects" className="btn-outline inline-flex">
              Voir tous les projets
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
