import { useState } from "react";
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
            category: "Mobile",
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
            category: "Mobile",
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
            category: "Mobile",
        },
        {
            id: 4,
            name: "The Rift",
            Shortdescription: "Créer un jeu en réalité augmentée (RA) entre un Oculus Quest (casque VR) et un appareil Android (appareil mobile)",
            image: "/Alexandre-Hannecart/TheRift/logo.jpg",
            Description: "Créer un jeu en réalité augmentée (RA) entre un Oculus Quest (casque VR) et un appareil Android (appareil mobile) implique plusieurs défis techniques et logistiques. Voici un aperçu du processus et des étapes clés pour y parvenir, notamment l'intégration de la réalité augmentée et la communication en temps réel entre les deux plateformes.",
            objective: "L'objectif était de créer un jeu collaboratif en respectant plusieurs contraintes, dont l'utilisation de deux technologies différentes. Nous avons opté pour la réalité augmentée et les téléphones mobiles. Le principe du jeu était que le joueur, équipé du casque, résolve diverses énigmes, tandis que le téléphone recevait toutes les informations nécessaires pour aider le joueur du casque à résoudre les défis.",
            details: "Dans ce projet, nous avons dû développer une API REST et un WebSocket en utilisant le framework Spring. Du côté Android, nous avons utilisé le langage Java accompagné des bibliothèques Android. Pour la création du jeu en réalité augmentée, nous avons opté pour Unity.",
            carouselImages: ["https://www.youtube.com/watch?v=pW262cIVAPI", "https://www.youtube.com/watch?v=reIQdYcaWUI"],
            category: "Jeux",
        },
      {
        id: 5,
        name: "NotePad--",
        Shortdescription: "Une application pour la gestion de notes.",
        image: "/Alexandre-Hannecart/NotePad/logo.png",
        Description: "Une application permettant de prendre des notes rapidement, avec plusieurs fonctionnalités telles que l'enregistrement, la modification, l'ajout aux favoris, la recherche et le tri des notes. Elle offre également la possibilité d'enregistrer les notes localement et de les supprimer.",
        objective: "Cette application de prise de notes a été développée dans le cadre d'un projet d'étude, réalisé en 28 heures de travail. Son objectif est d'offrir une solution simple et rapide pour enregistrer, modifier, organiser et rechercher des notes. Elle permet également de gérer les notes avec des fonctionnalités comme l'ajout aux favoris, le tri et la possibilité d'enregistrer localement ou de supprimer les notes.",
        details: "Le développement de cette application a impliqué l'utilisation de plusieurs technologies pour offrir une expérience fluide et fonctionnelle. Nous avons utilisé Room Database pour la gestion locale des notes, permettant un stockage efficace et sécurisé des données sur l'appareil. L'application est construite avec des fragments Android, offrant une interface modulaire et réactive, facilitant la gestion des différentes vues, comme la création et la modification des notes. Le développement a été réalisé en Java, avec des bibliothèques Android, garantissant ainsi une compatibilité optimale avec les appareils et une gestion simplifiée de l'interface utilisateur. Ces choix techniques ont permis de créer une application performante et intuitive dans un délai de 28 heures de travail.",
        carouselImages: ["/Alexandre-Hannecart/NotePad/home.png", "/Alexandre-Hannecart/NotePad/favorite.png", "/Alexandre-Hannecart/NotePad/note.png"],
        category: "Mobile",
      },
      {
        id: 6,
        name: "Attrape moi si tu peux",
        Shortdescription: "Le jeu met en scène un mouton et un loup, où l'objectif principal est de survivre le plus longtemps possible",
        image: "/Alexandre-Hannecart/AMSTP/logo.png",
        Description: "Attrape-moi si tu peux est un jeu que j'ai développé avec une équipe de deux personnes. Ce projet consistait à créer un jeu où un loup et un mouton se baladent dans un labyrinthe. L'objectif principal était de permettre au mouton de survivre le plus longtemps possible dans le labyrinthe sans se faire attraper par le loup. Pour rendre le jeu plus dynamique et captivant, nous avons intégré des éléments de gameplay tels que des malus et des bonus dispersés dans le labyrinthe, ajoutant ainsi une dimension stratégique et excitante à l'expérience de jeu. ",
        objective: "Notre objectif principal était de concevoir une interface simple permettant la génération, la modification et la simulation de labyrinthes, ainsi que l'ajout d'animaux tels que le loup et le mouton. Ce projet nous a offert une opportunité précieuse de nous initier au modèle MVC (Modèle-Vue-Contrôleur), une architecture de conception largement utilisée dans le développement logiciel. Grâce à cette expérience, nous avons pu comprendre et appliquer les principes fondamentaux du MVC pour organiser efficacement le code et rendre notre application plus modulaire et facile à maintenir. ",
        details: "Ce projet a été entièrement développé en Java, avec l'utilisation de JavaFX pour la partie Front-end. Il nous a offert une opportunité unique de développer nos compétences dans l'implémentation de fonctionnalités complexes. Par exemple, nous avons intégré avec succès des algorithmes avancés tels que l'algorithme de Dijkstra et l'algorithme A* pour la résolution efficace de labyrinthes. Cette expérience nous a permis de maîtriser des concepts algorithmiques puissants et de les appliquer de manière concrète dans le développement de notre application. ",
        carouselImages: ["/Alexandre-Hannecart/AMSTP/jeux.png", "/Alexandre-Hannecart/AMSTP/plateau.png", "/Alexandre-Hannecart/AMSTP/parametre.png"],
        category: "Jeux",
      },
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter((project) => project.category.toLowerCase() === filter.toLowerCase());

    return (
        <div className="page-transition pt-24">
            <div className="container px-6">
                <h1 className="text-4xl font-bold mb-12">Mes projets</h1>

                <div className="flex gap-4 mb-8">
                    {["all", "Mobile", "Divers", "Jeux"].map((category) => (
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
                                    <div className="aspect-video bg-secondary rounded-md mb-4 overflow-hidden flex items-center justify-center relative group">
                                        <img
                                            src={project.image}
                                            alt={`Image de ${project.name}`}
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                    <p className="text-muted-foreground mb-4">{project.Shortdescription}</p>
                                    <Link
                                        to="/ProjectDetails"
                                        state={project}
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
        </div>
    );
};

export default Projects;
