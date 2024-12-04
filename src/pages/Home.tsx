import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Möbius",
    description: "Une application pour faire du tabata",
    image: "https://cdn.discordapp.com/attachments/837411218976931860/1313958823416954910/ic_launcher-playstore.png?ex=67520703&is=6750b583&hm=c3ae6fc04b2ea4e5658049f9486bca8e0fdab4c9c4d796edee8eb11031b59ac6&",
    objective: "L'objectif est de fournir un outil simple pour gérer ses séances d'entraînement.",
    details: "Möbius permet de configurer des exercices avec des temps de travail et de repos personnalisés.",
    carouselImages: ["/images/mobius-1.jpg", "/images/mobius-2.jpg", "/images/mobius-3.jpg"],
  },
  {
    id: 2,
    name: "Arbitrhand",
    description: "Une application pour la gestion de matchs de handball",
    image: "https://cdn.discordapp.com/attachments/837411218976931860/1313959137566261268/ic_launcher-playstore.png?ex=6752074e&is=6750b5ce&hm=d07c6c53327fc3302078ff00bf5d04a421e2564b3b4e238fd69f68816997d080&",
    objective: "Faciliter le suivi des scores et des statistiques en temps réel pour les arbitres.",
    details: "Arbitrhand intègre des fonctionnalités avancées pour le suivi des joueurs et la gestion des sanctions.",
    carouselImages: ["/images/arbitrhand-1.jpg", "/images/arbitrhand-2.jpg", "/images/arbitrhand-3.jpg"],
  },
  {
    id: 3,
    name: "The Rift",
    description: "Un jeu en réalité augmentée",
    image: "https://cdn.discordapp.com/attachments/837411218976931860/1313959358245109821/ic_launcher-playstore.png?ex=67520783&is=6750b603&hm=66075588155d619c2a382e6ff3ee13fbc346c623011c3c53335e8fc63c1b2656&",
    objective: "Créer une expérience immersive mêlant réalité et virtuel.",
    details: "The Rift utilise des technologies avancées pour transformer votre environnement en terrain de jeu.",
    carouselImages: ["/images/rift-1.jpg", "/images/rift-2.jpg", "/images/rift-3.jpg"],
  },
];

const Home = () => {
  return (
    <div className="page-transition">
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
              Je suis Alexandre, un étudiant dévoué en informatique qui se passionne pour le développement d’applications.
              j’aime transformer les idées en réalités, une ligne de code à la fois. Ensemble,
              <span className="text-primary"> façonnons l’avenir du numérique</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Développeur passionné par la construction d'applications esthétiques et fonctionnelles
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
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="glass-card rounded-lg p-6 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="aspect-video bg-secondary rounded-md mb-4 overflow-hidden">
                    <img
                        src={project.image}
                        alt={`Image de ${project.name}`}
                        className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Link
                      to="/project"
                      state={project} // Passe toutes les données ici
                      className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                  >
                    En savoir plus
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