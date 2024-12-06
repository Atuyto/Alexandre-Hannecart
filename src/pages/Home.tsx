import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Möbius",
    Shortdescription: "Une application pour faire du tabata",
    image: "./Mobius/logo.png",
    Description: "Möbius est un projet personnel que j'ai réalisé en collaboration avec un ami. Notre objectif était de concevoir une application mobile pratique et intuitive, spécialement pensée pour simplifier la gestion des arbitrages de temps lors de séances répétitives, comme celles utilisées dans les entraînements Tabata ou les exercices fractionnés",
    objective: "L'objectif de ce projet est de proposer un outil simple et efficace pour gérer vos séances d'entraînement, en particulier celles basées sur le protocole Tabata. Cette application intuitive offre une interface conviviale qui permet de créer, configurer et suivre des cycles de temps répétitifs. Que vous soyez un sportif débutant ou confirmé, elle facilite la gestion de vos entraînements en automatisant le minutage des sessions actives et des périodes de repos. Grâce à sa simplicité d'utilisation, elle s'adapte à vos besoins et vous aide à rester concentré sur vos performances sans avoir à vous soucier des minutages manuels.",
    details: "Möbius a été conçue spécifiquement pour Android en utilisant le langage Java. Cette application intègre des fonctionnalités avancées de gestion du temps, idéales pour automatiser les cycles d'entraînement. Elle exploite également l'enchaînement fluide de fragments pour offrir une expérience utilisateur optimale et bien structurée. Grâce à cette architecture moderne, Möbius garantit une navigation intuitive entre les différentes sections de l'application, tout en assurant une transition rapide et sans accroc. Ce choix technologique permet de répondre efficacement aux besoins des utilisateurs, qu'il s'agisse de configurer des séances ou de suivre leur progression.",
    carouselImages: ["./Mobius/home.png", "./Mobius/Ready.png", "./Mobius/GO.png", "./Mobius/Pause.png", "./Mobius/Cycle.png"],
  },
  {
    id: 2,
    name: "Arbitrhand",
    Shortdescription: "Une application pour la gestion de matchs de handball",
    image: "./Arbitrhand/logo.png",
    Description: "ARBITRHAND est un projet personnel que j'ai entrepris en collaboration avec l'un de mes amis. Notre objectif était de concevoir une application mobile destinée à faciliter la gestion des arbitrages de handball. Cette initiative a été motivée par notre passion commune pour le sport ainsi que par le désir de répondre à un besoin concret dans la communauté des arbitres et des amateurs de handball. Tout au long de ce projet, nous avons mis l'accent sur l'efficacité et la convivialité de l'application, cherchant à fournir une solution pratique et intuitive pour les arbitres, tout en offrant une expérience améliorée pour les utilisateurs. ",
    objective: "Notre objectif principal était d'offrir une personnalisation complète de la configuration des matchs à travers l'application. Grâce à ce projet, j'ai pu réaliser un travail pour un client dans des conditions optimales. Cette expérience m'a permis de développer mes compétences en front-end, en relevant de nombreux défis, notamment celui de l'affichage dynamique des pénalités. De plus, j'ai acquis une compréhension approfondie de l'architecture MVC (Modèle-Vue-Contrôleur), qui a été cruciale pour le développement de l'application. Pour garantir des mises à jour constantes et éviter toute régression de l'application, j'ai intégré des tests JUnit dans le processus de développement, assurant ainsi la qualité et la fiabilité du produit final. ",
    details: "Arbitrhand intègre des fonctionnalités avancées pour le suivi des joueurs et la gestion des sanctions.",
    carouselImages: ["./Arbitrhand/Home.png", "./Arbitrhand/Loading.png", "./Arbitrhand/horizontal.png"],
  },
  {
    id: 3,
    name: "MakeU",
    Shortdescription: "Un jeu en réalité augmentée",
    image: "./MakeU/logo.svg",
    Description: "Make-U est un projet personnel, une application conçue pour créer et suivre des programmes d'entraînement. Cette application offre une multitude de fonctionnalités, notamment le suivi des séances de musculation, le suivi des caractéristiques physiques de l'utilisateur, ainsi qu'un calendrier intégré avec des séances prévues pour la semaine, accompagné de rappels automatiques. Dans un futur proche, Make-U inclura également un système communautaire où les utilisateurs pourront partager des astuces sportives, des actualités et d'autres contenus pertinents pour enrichir l'expérience de fitness de chacun. ",
    objective: "L'objectif principal de Make-U est de proposer une interface simple permettant à l'utilisateur d'avoir immédiatement un suivi clair de ses performances ainsi que de sa prochaine séance prévue. Cette application vise à offrir une expérience intuitive et efficace pour suivre les progrès de l'utilisateur et planifier ses entraînements en toute facilité. Par le biais de ce projet, j'ai pu approfondir ma compréhension et ma pratique du modèle MVC (Modèle-Vue-Contrôleur), ce qui a considérablement renforcé mes compétences en développement front-end. Make-U représente donc une opportunité essentielle pour perfectionner mes capacités dans ce domaine. ",
    details: "Cette application est entièrement développée en Java. Pour implémenter les différentes fonctionnalités, j'ai mis en place un serveur Spring Boot. Ce serveur me permet de stocker les informations des utilisateurs ainsi que toutes les données nécessaires pour chaque utilisateur, y compris les articles qu'ils publient ",
    carouselImages: ["./MakeU/home.png", "./MakeU/Connection.png", "./MakeU/fyp.png", "./MakeU/Seance.png", "./MakeU/Calendar.png"],
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
                  <p className="text-muted-foreground mb-4">{project.Shortdescription}</p>
                  <Link
                      to="/ProjectDetails"
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