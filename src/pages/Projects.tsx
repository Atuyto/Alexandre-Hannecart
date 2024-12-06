import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      name: "Möbius",
      Shortdescription: "Une application pour faire du tabata",
      image: "/Alexandre-Hannecart/Mobius/logo.png",
      Description: "Möbius est un projet personnel que j'ai réalisé en collaboration avec un ami. Notre objectif était de concevoir une application mobile pratique et intuitive, spécialement pensée pour simplifier la gestion des arbitrages de temps lors de séances répétitives, comme celles utilisées dans les entraînements Tabata ou les exercices fractionnés",
      objective: "L'objectif de ce projet est de proposer un outil simple et efficace pour gérer vos séances d'entraînement, en particulier celles basées sur le protocole Tabata. Cette application intuitive offre une interface conviviale qui permet de créer, configurer et suivre des cycles de temps répétitifs. Que vous soyez un sportif débutant ou confirmé, elle facilite la gestion de vos entraînements en automatisant le minutage des sessions actives et des périodes de repos. Grâce à sa simplicité d'utilisation, elle s'adapte à vos besoins et vous aide à rester concentré sur vos performances sans avoir à vous soucier des minutages manuels.",
      details: "Möbius a été conçue spécifiquement pour Android en utilisant le langage Java. Cette application intègre des fonctionnalités avancées de gestion du temps, idéales pour automatiser les cycles d'entraînement. Elle exploite également l'enchaînement fluide de fragments pour offrir une expérience utilisateur optimale et bien structurée. Grâce à cette architecture moderne, Möbius garantit une navigation intuitive entre les différentes sections de l'application, tout en assurant une transition rapide et sans accroc. Ce choix technologique permet de répondre efficacement aux besoins des utilisateurs, qu'il s'agisse de configurer des séances ou de suivre leur progression.",
      carouselImages: ["/Alexandre-Hannecart/Mobius/home.png", "/Alexandre-Hannecart/Mobius/Ready.png", "/Alexandre-Hannecart/Mobius/GO.png", "/Alexandre-Hannecart/Mobius/Pause.png", "/Alexandre-Hannecart/Mobius/Cycle.png"],
      category: "Personal",
    },
    {
      id: 2,
      name: "Arbitrhand",
      Shortdescription: "Une application pour la gestion de matchs de handball",
      image: "/Alexandre-Hannecart/Arbitrhand/logo.png",
      Description: "ARBITRHAND est un projet personnel que j'ai entrepris en collaboration avec l'un de mes amis. Notre objectif était de concevoir une application mobile destinée à faciliter la gestion des arbitrages de handball. Cette initiative a été motivée par notre passion commune pour le sport ainsi que par le désir de répondre à un besoin concret dans la communauté des arbitres et des amateurs de handball. Tout au long de ce projet, nous avons mis l'accent sur l'efficacité et la convivialité de l'application, cherchant à fournir une solution pratique et intuitive pour les arbitres, tout en offrant une expérience améliorée pour les utilisateurs. ",
      objective: "Notre objectif principal était d'offrir une personnalisation complète de la configuration des matchs à travers l'application. Grâce à ce projet, j'ai pu réaliser un travail pour un client dans des conditions optimales. Cette expérience m'a permis de développer mes compétences en front-end, en relevant de nombreux défis, notamment celui de l'affichage dynamique des pénalités. De plus, j'ai acquis une compréhension approfondie de l'architecture MVC (Modèle-Vue-Contrôleur), qui a été cruciale pour le développement de l'application. Pour garantir des mises à jour constantes et éviter toute régression de l'application, j'ai intégré des tests JUnit dans le processus de développement, assurant ainsi la qualité et la fiabilité du produit final. ",
      details: "Arbitrhand intègre des fonctionnalités avancées pour le suivi des joueurs et la gestion des sanctions.",
      carouselImages: ["/Alexandre-Hannecart/Arbitrhand/Home.png", "/Alexandre-Hannecart/Arbitrhand/Loading.png", "/Alexandre-Hannecart/Arbitrhand/horizontal.png"],
      category: "Work",
    },
    {
      id: 3,
      name: "MakeU",
      Shortdescription: "Une application permettant d'organisé ses séance de sport",
      image: "/Alexandre-Hannecart/MakeU/logo.svg",
      Description: "Make-U est un projet personnel, une application conçue pour créer et suivre des programmes d'entraînement. Cette application offre une multitude de fonctionnalités, notamment le suivi des séances de musculation, le suivi des caractéristiques physiques de l'utilisateur, ainsi qu'un calendrier intégré avec des séances prévues pour la semaine, accompagné de rappels automatiques. Dans un futur proche, Make-U inclura également un système communautaire où les utilisateurs pourront partager des astuces sportives, des actualités et d'autres contenus pertinents pour enrichir l'expérience de fitness de chacun. ",
      objective: "L'objectif principal de Make-U est de proposer une interface simple permettant à l'utilisateur d'avoir immédiatement un suivi clair de ses performances ainsi que de sa prochaine séance prévue. Cette application vise à offrir une expérience intuitive et efficace pour suivre les progrès de l'utilisateur et planifier ses entraînements en toute facilité. Par le biais de ce projet, j'ai pu approfondir ma compréhension et ma pratique du modèle MVC (Modèle-Vue-Contrôleur), ce qui a considérablement renforcé mes compétences en développement front-end. Make-U représente donc une opportunité essentielle pour perfectionner mes capacités dans ce domaine. ",
      details: "Cette application est entièrement développée en Java. Pour implémenter les différentes fonctionnalités, j'ai mis en place un serveur Spring Boot. Ce serveur me permet de stocker les informations des utilisateurs ainsi que toutes les données nécessaires pour chaque utilisateur, y compris les articles qu'ils publient ",
      carouselImages: ["/Alexandre-Hannecart/MakeU/home.png", "/Alexandre-Hannecart/MakeU/Connection.png", "/Alexandre-Hannecart/MakeU/fyp.png", "/Alexandre-Hannecart/MakeU/Seance.png", "./MakeU/Calendar.png"],
      category: "Personal",
    },
  ];

  // Filtrer les projets selon la catégorie
  const filteredProjects =
      filter === "all"
          ? projects
          : projects.filter((project) => project.category.toLowerCase() === filter.toLowerCase());

  return (
      <div className="page-transition pt-24">
        <div className="container px-6">
          <h1 className="text-4xl font-bold mb-12">My Projects</h1>

          <div className="flex gap-4 mb-8">
            {["all", "Personal", "Work"].map((category) => (
                <button
                    key={category}
                    onClick={() => setFilter(category.toLowerCase())}
                    className={`px-4 py-2 rounded-full text-sm ${
                        filter === category.toLowerCase()
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    } transition-colors`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
          </div>

          <section className="py-20">
            <div className="container px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
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
                      <div className="flex justify-between items-center">
                        <Link
                            to="/ProjectDetails"
                            state={project}
                            className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                        >
                          En savoir plus
                        </Link>
                        <span className="text-sm text-muted-foreground">{project.category}</span>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
  );
};

export default Projects;