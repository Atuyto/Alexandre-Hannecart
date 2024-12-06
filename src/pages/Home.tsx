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
    carouselImages: ["./Mobius/home.png", "./Mobius/Mobius/Ready.png", "./Mobius/Mobius/GO.png", "./Mobius/Mobius/Pause.png", "./Mobius/Mobius/Cycle.png"],
  },
  {
    id: 2,
    name: "Arbitrhand",
    Shortdescription: "Une application pour la gestion de matchs de handball",
    image: "https://cdn.discordapp.com/attachments/837411218976931860/1313959137566261268/ic_launcher-playstore.png?ex=6752074e&is=6750b5ce&hm=d07c6c53327fc3302078ff00bf5d04a421e2564b3b4e238fd69f68816997d080&",
    Description: "ARBITRHAND est un projet personnel que j'ai entrepris en collaboration avec l'un de mes amis. Notre objectif était de concevoir une application mobile destinée à faciliter la gestion des arbitrages de handball. Cette initiative a été motivée par notre passion commune pour le sport ainsi que par le désir de répondre à un besoin concret dans la communauté des arbitres et des amateurs de handball. Tout au long de ce projet, nous avons mis l'accent sur l'efficacité et la convivialité de l'application, cherchant à fournir une solution pratique et intuitive pour les arbitres, tout en offrant une expérience améliorée pour les utilisateurs. ",
    objective: "Notre objectif principal était d'offrir une personnalisation complète de la configuration des matchs à travers l'application. Grâce à ce projet, j'ai pu réaliser un travail pour un client dans des conditions optimales. Cette expérience m'a permis de développer mes compétences en front-end, en relevant de nombreux défis, notamment celui de l'affichage dynamique des pénalités. De plus, j'ai acquis une compréhension approfondie de l'architecture MVC (Modèle-Vue-Contrôleur), qui a été cruciale pour le développement de l'application. Pour garantir des mises à jour constantes et éviter toute régression de l'application, j'ai intégré des tests JUnit dans le processus de développement, assurant ainsi la qualité et la fiabilité du produit final. ",
    details: "Arbitrhand intègre des fonctionnalités avancées pour le suivi des joueurs et la gestion des sanctions.",
    carouselImages: ["https://cdn.discordapp.com/attachments/837411218976931860/1313968205609439333/home.png?ex=67520fc0&is=6750be40&hm=8482f841f756e82e8430600a3207be6394e4084d1e59ba9f8c563c9b73756fd7&", "https://cdn.discordapp.com/attachments/837411218976931860/1313968250375114772/login.png?ex=67520fcb&is=6750be4b&hm=e3054f7b64f75003195a4b0e38c755fd56376a76d6c88102cfcd724df439ca3e&", "https://cdn.discordapp.com/attachments/837411218976931860/1313968826488066088/home.png?ex=67521054&is=6750bed4&hm=ee3bc5702653ab19a7db8560f153450eb38b99ba3d3162901c9971efedd3fc2b&"],
  },
  {
    id: 3,
    name: "The Rift",
    Shortdescription: "Un jeu en réalité augmentée",
    image: "https://cdn.discordapp.com/attachments/837411218976931860/1313959358245109821/ic_launcher-playstore.png?ex=67520783&is=6750b603&hm=66075588155d619c2a382e6ff3ee13fbc346c623011c3c53335e8fc63c1b2656&",
    Description: "",
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