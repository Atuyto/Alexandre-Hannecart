import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-transition">
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              Je suis Alexandre, un étudiant dévoué en informatique qui se passionne pour le développement d’applications.
              j’aime transformer les idées en réalités, une ligne de code à la fois. Ensemble,
              <span className="text-primary"> façonnons l’avenir du numérique</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Développeur Frontend passionné par la construction d'applications esthétiques et fonctionnelles
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Voir mes projets
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Projets récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, name: "Möbius", description: "Un application pour faire du tabata" },
              { id: 2, name: "Arbitrhand", description: "Une application qui permet la gestion de match de handball" },
              { id: 3, name: "The rift", description: "Un jeux en réalité augmenté" },
            ].map((project) => (
                <div key={project.id} className="glass-card rounded-lg p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="aspect-video bg-secondary rounded-md mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Link
                      to={`/projects/${project.id}`}
                      className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;