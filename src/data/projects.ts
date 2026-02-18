export interface Project {
  id: number;
  name: string;
  Shortdescription: string;
  image: string;
  Description: string;
  objective: string;
  details: string;
  carouselImages: string[];
  category: string;
  date: string;
  DesignByURL: string;
  DesignBy: string;
  /** Layout "steps" : présentation étape par étape (problème, solutions, technos, démo) */
  layout?: "default" | "steps";
  problem?: string;
  solutions?: string[];
  technologies?: string[];
  demoLink?: string;
  demoCredentials?: { login: string; password: string };
  /** Affiche "En cours de développement" sur les cartes et la page détail */
  inDevelopment?: boolean;
  /** Galerie en slider avant/après (2 images : avant, après) */
  carouselLayout?: "default" | "beforeAfter";
  /** Optionnel : 2 vidéos [avant, après] (MP4/WebM) pour un slider qui ne se fige pas (remplace carouselImages pour le slider) */
  carouselVideos?: [string, string];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Möbius",
    Shortdescription: "Une application pour faire du tabata",
    image: "Mobius/logo.png",
    Description: "Möbius est un projet personnel que j'ai réalisé en collaboration avec un ami. Notre objectif était de concevoir une application mobile pratique et intuitive, spécialement pensée pour simplifier la gestion des arbitrages de temps lors de séances répétitives, comme celles utilisées dans les entraînements Tabata ou les exercices fractionnés",
    objective: "L'objectif de ce projet est de proposer un outil simple et efficace pour gérer vos séances d'entraînement, en particulier celles basées sur le protocole Tabata. Cette application intuitive offre une interface conviviale qui permet de créer, configurer et suivre des cycles de temps répétitifs. Que vous soyez un sportif débutant ou confirmé, elle facilite la gestion de vos entraînements en automatisant le minutage des sessions actives et des périodes de repos. Grâce à sa simplicité d'utilisation, elle s'adapte à vos besoins et vous aide à rester concentré sur vos performances sans avoir à vous soucier des minutages manuels.",
    details: "Möbius a été conçue spécifiquement pour Android en utilisant le langage Java. Cette application intègre des fonctionnalités avancées de gestion du temps, idéales pour automatiser les cycles d'entraînement. Elle exploite également l'enchaînement fluide de fragments pour offrir une expérience utilisateur optimale et bien structurée. Grâce à cette architecture moderne, Möbius garantit une navigation intuitive entre les différentes sections de l'application, tout en assurant une transition rapide et sans accroc. Ce choix technologique permet de répondre efficacement aux besoins des utilisateurs, qu'il s'agisse de configurer des séances ou de suivre leur progression.",
    carouselImages: ["Mobius/home.png", "Mobius/Ready.png", "Mobius/GO.png", "Mobius/Pause.png", "Mobius/Cycle.png"],
    category: "Mobile",
    date: "2024",
    DesignByURL: "https://antoine-carrere.fr/",
    DesignBy: "Design réalisé par Antoine Carrere",
    layout: "steps",
    problem: "Les sportifs ont besoin de gérer simplement des séances type Tabata (cycles travail/repos) sans se soucier du minutage manuel.",
    solutions: [
      "Application mobile Android dédiée aux séances répétitives (Tabata, fractionné).",
      "Cycles de temps configurables (durées travail/repos, nombre de cycles).",
      "Navigation fluide avec fragments pour une expérience utilisateur claire.",
      "Interface intuitive pour lancer, suivre et terminer une séance.",
    ],
    technologies: ["Java", "Android"],
  },
  {
    id: 2,
    name: "Arbitrhand",
    Shortdescription: "Une application pour la gestion de matchs de handball",
    image: "Arbitrhand/logo.png",
    Description: "ARBITRHAND est un projet personnel que j'ai entrepris en collaboration avec l'un de mes amis. Notre objectif était de concevoir une application mobile destinée à faciliter la gestion des arbitrages de handball. Cette initiative a été motivée par notre passion commune pour le sport ainsi que par le désir de répondre à un besoin concret dans la communauté des arbitres et des amateurs de handball. Tout au long de ce projet, nous avons mis l'accent sur l'efficacité et la convivialité de l'application, cherchant à fournir une solution pratique et intuitive pour les arbitres, tout en offrant une expérience améliorée pour les utilisateurs.",
    objective: "Notre objectif principal était d'offrir une personnalisation complète de la configuration des matchs à travers l'application. Grâce à ce projet, j'ai pu réaliser un travail pour un client dans des conditions optimales. Cette expérience m'a permis de développer mes compétences en front-end, en relevant de nombreux défis, notamment celui de l'affichage dynamique des pénalités. De plus, j'ai acquis une compréhension approfondie de l'architecture MVC (Modèle-Vue-Contrôleur), qui a été cruciale pour le développement de l'application. Pour garantir des mises à jour constantes et éviter toute régression de l'application, j'ai intégré des tests JUnit dans le processus de développement, assurant ainsi la qualité et la fiabilité du produit final.",
    details: "Arbitrhand intègre des fonctionnalités avancées pour le suivi des joueurs et la gestion des sanctions.",
    carouselImages: ["Arbitrhand/Home.png", "Arbitrhand/Loading.png", "Arbitrhand/horizontal.png"],
    category: "Mobile",
    date: "2023 - 2024",
    DesignByURL: "https://antoine-carrere.fr/",
    DesignBy: "Design réalisé par Antoine Carrere",
    layout: "steps",
    problem: "Les arbitres et organisateurs de handball ont besoin d’un outil pour gérer les matchs, les équipes et les pénalités de façon fiable et claire.",
    solutions: [
      "Application mobile pour la configuration des matchs et la gestion des équipes.",
      "Affichage dynamique des pénalités et suivi des joueurs en temps réel.",
      "Architecture MVC pour un code modulaire et maintenable.",
      "Tests JUnit pour limiter les régressions et garantir la qualité.",
    ],
    technologies: ["Java", "Android", "JUnit"],
  },
  {
    id: 3,
    name: "MakeU",
    Shortdescription: "Une application permettant d'organiser ses séances de sport",
    image: "MakeU/logo.svg",
    Description: "Make-U est un projet personnel, une application conçue pour créer et suivre des programmes d'entraînement. Cette application offre une multitude de fonctionnalités, notamment le suivi des séances de musculation, le suivi des caractéristiques physiques de l'utilisateur, ainsi qu'un calendrier intégré avec des séances prévues pour la semaine, accompagné de rappels automatiques. Dans un futur proche, Make-U inclura également un système communautaire où les utilisateurs pourront partager des astuces sportives, des actualités et d'autres contenus pertinents pour enrichir l'expérience de fitness de chacun.",
    objective: "L'objectif principal de Make-U est de proposer une interface simple permettant à l'utilisateur d'avoir immédiatement un suivi clair de ses performances ainsi que de sa prochaine séance prévue. Cette application vise à offrir une expérience intuitive et efficace pour suivre les progrès de l'utilisateur et planifier ses entraînements en toute facilité. Par le biais de ce projet, j'ai pu approfondir ma compréhension et ma pratique du modèle MVC (Modèle-Vue-Contrôleur), ce qui a considérablement renforcé mes compétences en développement front-end. Make-U représente donc une opportunité essentielle pour perfectionner mes capacités dans ce domaine.",
    details: "Cette application est entièrement développée en Java. Pour implémenter les différentes fonctionnalités, j'ai mis en place un serveur Spring Boot. Ce serveur me permet de stocker les informations des utilisateurs ainsi que toutes les données nécessaires pour chaque utilisateur, y compris les articles qu'ils publient ",
    carouselImages: ["MakeU/home.png", "MakeU/Connection.png", "MakeU/fyp.png", "MakeU/Seance.png", "MakeU/Calendar.png"],
    category: "Mobile",
    date: "2020 - 2024",
    DesignByURL: "https://antoine-carrere.fr/",
    DesignBy: "Design réalisé par Antoine Carrere",
    layout: "steps",
    problem: "Suivre ses entraînements, sa progression et planifier ses séances de musculation de façon simple et centralisée.",
    solutions: [
      "Suivi des séances de musculation et des caractéristiques physiques.",
      "Calendrier avec séances prévues et rappels automatiques.",
      "Architecture MVC et serveur Spring Boot pour la persistance des données.",
      "Préparation d’un volet communautaire (partage d’astuces, actualités).",
    ],
    technologies: ["Java", "Spring Boot", "Android"],
    inDevelopment: true,
  },
  {
    id: 4,
    name: "The Rift",
    Shortdescription: "Créer un jeu en réalité augmentée (RA) entre un Oculus Quest (casque VR) et un appareil Android (appareil mobile)",
    image: "TheRift/logo.jpg",
    Description: "The Rift est un jeu coopératif où un joueur utilise un Oculus Quest et un autre un téléphone. L'objectif est de résoudre des énigmes à travers l'Oculus Quest, en utilisant les informations obtenues sur le téléphone. Les joueurs peuvent communiquer entre eux grâce à un chat en temps réel.",
    objective: "L'objectif était de créer un jeu collaboratif en respectant plusieurs contraintes, dont l'utilisation de deux technologies différentes. Nous avons opté pour la réalité augmentée et les téléphones mobiles. Le principe du jeu était que le joueur, équipé du casque, résolve diverses énigmes, tandis que le téléphone recevait toutes les informations nécessaires pour aider le joueur du casque à résoudre les défis.",
    details: "Dans ce projet, nous avons dû développer une API REST et un WebSocket en utilisant le framework Spring. Du côté Android, nous avons utilisé le langage Java accompagné des bibliothèques Android. Pour la création du jeu en réalité augmentée, nous avons opté pour Unity.",
    carouselImages: ["https://www.youtube.com/watch?v=pW262cIVAPI", "https://www.youtube.com/watch?v=reIQdYcaWUI"],
    category: "Jeux",
    date: "2024",
    DesignByURL: "https://antoine-carrere.fr/",
    DesignBy: "Design réalisé par Antoine Carrere",
    layout: "steps",
    problem: "Créer un jeu coopératif entre un joueur en VR (Oculus Quest) et un joueur sur mobile, avec des énigmes et une communication en temps réel.",
    solutions: [
      "API REST et WebSocket (Spring) pour la communication entre les deux plateformes.",
      "Côté Android : réception des informations et aide à la résolution des énigmes.",
      "Côté VR : jeu en réalité augmentée développé avec Unity.",
      "Chat en temps réel pour la coordination entre les deux joueurs.",
    ],
    technologies: ["Spring", "Java", "Android", "Unity"],
  },
  {
    id: 5,
    name: "NotePad--",
    Shortdescription: "Une application pour la gestion de notes.",
    image: "NotePad/logo.png",
    Description: "Une application permettant de prendre des notes rapidement, avec plusieurs fonctionnalités telles que l'enregistrement, la modification, l'ajout aux favoris, la recherche et le tri des notes. Elle offre également la possibilité d'enregistrer les notes localement et de les supprimer.",
    objective: "Cette application de prise de notes a été développée dans le cadre d'un projet d'étude, réalisé en 28 heures de travail. Son objectif est d'offrir une solution simple et rapide pour enregistrer, modifier, organiser et rechercher des notes. Elle permet également de gérer les notes avec des fonctionnalités comme l'ajout aux favoris, le tri et la possibilité d'enregistrer localement ou de supprimer les notes.",
    details: "Le développement de cette application a impliqué l'utilisation de plusieurs technologies pour offrir une expérience fluide et fonctionnelle. Nous avons utilisé Room Database pour la gestion locale des notes, permettant un stockage efficace et sécurisé des données sur l'appareil. L'application est construite avec des fragments Android, offrant une interface modulaire et réactive, facilitant la gestion des différentes vues, comme la création et la modification des notes. Le développement a été réalisé en Java, avec des bibliothèques Android, garantissant ainsi une compatibilité optimale avec les appareils et une gestion simplifiée de l'interface utilisateur. Ces choix techniques ont permis de créer une application performante et intuitive dans un délai de 28 heures de travail.",
    carouselImages: ["NotePad/home.png", "NotePad/favorite.png", "NotePad/note.png"],
    category: "Mobile",
    date: "2023",
    DesignByURL: "",
    DesignBy: "",
    layout: "steps",
    problem: "Besoin d’une application de prise de notes rapide, avec recherche, tri, favoris et stockage local fiable (projet réalisé en 28 h).",
    solutions: [
      "CRUD complet : création, modification, suppression et liste des notes.",
      "Favoris, recherche et tri pour retrouver rapidement une note.",
      "Stockage local avec Room Database pour des données persistantes et sécurisées.",
      "Interface modulaire avec fragments Android (création, édition, liste).",
    ],
    technologies: ["Java", "Android", "Room"],
  },
  {
    id: 6,
    name: "Attrape moi si tu peux",
    Shortdescription: "Le jeu met en scène un mouton et un loup, où l'objectif principal est de survivre le plus longtemps possible",
    image: "AMSTP/logo.png",
    Description: "Attrape-moi si tu peux est un jeu que j'ai développé avec une équipe de deux personnes. Ce projet consistait à créer un jeu où un loup et un mouton se baladent dans un labyrinthe. L'objectif principal était de permettre au mouton de survivre le plus longtemps possible dans le labyrinthe sans se faire attraper par le loup. Pour rendre le jeu plus dynamique et captivant, nous avons intégré des éléments de gameplay tels que des malus et des bonus dispersés dans le labyrinthe, ajoutant ainsi une dimension stratégique et excitante à l'expérience de jeu.",
    objective: "Notre objectif principal était de concevoir une interface simple permettant la génération, la modification et la simulation de labyrinthes, ainsi que l'ajout d'animaux tels que le loup et le mouton. Ce projet nous a offert une opportunité précieuse de nous initier au modèle MVC (Modèle-Vue-Contrôleur), une architecture de conception largement utilisée dans le développement logiciel. Grâce à cette expérience, nous avons pu comprendre et appliquer les principes fondamentaux du MVC pour organiser efficacement le code et rendre notre application plus modulaire et facile à maintenir.",
    details: "Ce projet a été entièrement développé en Java, avec l'utilisation de JavaFX pour la partie Front-end. Il nous a offert une opportunité unique de développer nos compétences dans l'implémentation de fonctionnalités complexes. Par exemple, nous avons intégré avec succès des algorithmes avancés tels que l'algorithme de Dijkstra et l'algorithme A* pour la résolution efficace de labyrinthes. Cette expérience nous a permis de maîtriser des concepts algorithmiques puissants et de les appliquer de manière concrète dans le développement de notre application.",
    carouselImages: ["AMSTP/jeux.png", "AMSTP/plateau.png", "AMSTP/parametre.png"],
    category: "Jeux",
    date: "2022",
    DesignByURL: "",
    DesignBy: "",
    layout: "steps",
    problem: "Concevoir un jeu de labyrinthe où un mouton doit survivre le plus longtemps possible face à un loup, avec génération et simulation du plateau.",
    solutions: [
      "Interface de génération, modification et simulation de labyrinthes.",
      "Gestion des acteurs (loup, mouton) et des bonus/malus dans le labyrinthe.",
      "Architecture MVC pour séparer logique métier et interface.",
      "Algorithmes de pathfinding (Dijkstra, A*) pour la résolution des labyrinthes.",
    ],
    technologies: ["Java", "JavaFX"],
  },
  {
    id: 7,
    name: "MasterMind",
    Shortdescription: "Un jeu où l'ordinateur doit deviner une séquence de couleurs en un minimum d'essais.",
    image: "MasterMind/logo.png",
    Description: "MasterMind est un projet demandé par l'IUT et réalisé en équipe. Le but de ce jeu était de proposer une combinaison de cinq couleurs, que l'ordinateur devait trouver en un minimum d'essais possibles. Ce projet nous a permis de mettre en pratique nos connaissances en programmation et en résolution de problèmes, tout en collaborant efficacement en équipe pour atteindre notre objectif commun.",
    objective: "Notre objectif était de simplifier l'interface graphique pour une utilisation intuitive. Au lancement de l'application, nous avons conçu un système permettant à l'utilisateur de saisir la combinaison de couleurs. Ce jeu nous a initiés aux bases du front-end en adoptant une approche minimaliste, privilégiant le moins de composants possible pour une expérience utilisateur fluide et efficace.",
    details: "Cette application a été réalisée en Python. Ce jeu nous a offert une occasion unique de nous initier à l'implémentation de fonctionnalités complexes et de comprendre la complexité de certains algorithmes. Par exemple, nous avons implémenté trois algorithmes différents pour résoudre le jeu, incluant un algorithme aléatoire, un naïf et un algorithme plus intelligent. Cette expérience nous a permis d'approfondir notre compréhension des algorithmes et de développer nos compétences en programmation.",
    carouselImages: ["MasterMind/jeux.png", "MasterMind/plateauxRempli.png", "MasterMind/menu.png"],
    category: "Jeux",
    date: "2022",
    DesignByURL: "",
    DesignBy: "",
    layout: "steps",
    problem: "Jeu de combinaison : l’utilisateur choisit une séquence de couleurs que l’ordinateur doit deviner en un minimum d’essais (projet IUT).",
    solutions: [
      "Interface graphique minimaliste pour saisir la combinaison et afficher les résultats.",
      "Trois algorithmes de résolution : aléatoire, naïf et un algorithme plus intelligent.",
      "Approche pédagogique pour comprendre la complexité algorithmique.",
      "Travail en équipe et respect des contraintes du sujet.",
    ],
    technologies: ["Python"],
  },
  {
    id: 8,
    name: "Nut and Feather",
    Shortdescription: "Un jeu entièrement réalisé avec Unity, comportant une IA de déplacement",
    image: "Nut&Feather/Start.png",
    Description: "Nut and Feather est un jeu entièrement réalisé avec Unity, utilisant des assets d'IA. Le but du jeu est d'incarner un écureuil qui a perdu sa famille et se retrouve dans différents biomes. Il doit affronter des ennemis et collecter des fruits pour gagner des points. Il peut également ramasser des noisettes pour les utiliser comme projectiles et vaincre le boss afin d'obtenir la clé de la cage.",
    objective: "Notre objectif était d'apprendre à utiliser Unity et ses dépendances tout en apprenant la programmation avec C#. Le but était donc de concevoir un jeu fonctionnel avant le design, en 40 heures de travail réparties sur 2 mois. Grâce à mes connaissances en 3D, j'ai pu améliorer l'aspect design.",
    details: "",
    carouselImages: ["Nut&Feather/Start.png", "Nut&Feather/Pomme.png", "Nut&Feather/GameOver.png"],
    category: "Jeux",
    date: "2024",
    DesignByURL: "",
    DesignBy: "",
    layout: "steps",
    problem: "Créer un jeu 3D avec Unity : un écureuil doit retrouver sa famille en traversant des biomes, en affrontant des ennemis et un boss (projet en 40 h).",
    solutions: [
      "Gameplay : déplacement, collecte de fruits, noisettes en projectiles.",
      "Utilisation d’Unity et de la programmation C# pour la logique de jeu.",
      "Intégration d’assets et d’IA pour les déplacements des ennemis.",
      "Amélioration du design grâce à des compétences en 3D.",
    ],
    technologies: ["Unity", "C#"],
  },
  {
    id: 9,
    name: "TimeManager",
    Shortdescription: "Application de gestion des horaires et des équipes réalisée à Epitech (projet Trinity).",
    image: "TimeManagr/cover.svg",
    Description: "TimeManagr permet aux employés de pointer leurs arrivées et départs, et aux managers de gérer les équipes et de consulter les KPIs.",
    objective: "Projet full-stack suivant la philosophie DevOps : API REST, rôles employé/manager, Docker et CI/CD.",
    details: "Architecture 3 tiers, API REST (users, teams, clocks, reports), authentification JWT, pipeline GitHub Actions.",
    carouselImages: [],
    category: "Web",
    date: "2025",
    DesignByURL: "",
    DesignBy: "",
    layout: "steps",
    problem: "Les entreprises ont besoin de suivre les horaires des employés (arrivées et départs), de gérer les équipes et de suivre des indicateurs (KPIs). Mettre en place une solution fiable, sécurisée et prête pour la production demande une API structurée, une gestion des rôles et une approche DevOps (Docker, CI/CD, tests).",
    solutions: [
      "API REST complète : utilisateurs, équipes, pointages (clocks) et rapports avec au moins 2 KPIs.",
      "Authentification JWT avec refresh token ; inscription des utilisateurs par les managers.",
      "Deux rôles : employé (pointer, dashboard) et manager (gestion des équipes, heures et KPIs par période).",
      "Frontend avec vues Login, Users, Teams, Time management et KPI ; UX et accessibilité (a11y) intégrées.",
      "DevOps : Docker Compose (backend, frontend, BDD, reverse proxy), pipeline GitHub Actions (build, tests, couverture), environnements dev et production.",
    ],
    technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "JWT", "Docker", "Docker Compose", "GitHub Actions", "Swagger"],
    demoLink: "http://localhost",
    demoCredentials: { login: "admin@admin.admin", password: "admin" },
  },
  {
    id: 10,
    name: "Collisions-quadtree",
    Shortdescription: "Simulation de milliers d'astéroïdes avec détection de collisions optimisée par quadtree pour maximiser les FPS.",
    image: "Collisions/collisions_quadtree.mp4",
    Description: "Projet réalisé dans le cadre du cours de Programmation Avancée (IUT BUT3). L'objectif était d'afficher une simulation de milliers de météorites avec détection de collisions en temps réel, en évitant le test naïf en O(n²) grâce à une structure de données spatiale.",
    objective: "Implémenter un quadtree pour optimiser les déplacements et la détection des collisions entre astéroïdes, afin d'atteindre le meilleur débit d'images possible (FPS) tout en simulant 10 000 objets.",
    details: "Développé en Java avec Swing pour l'affichage. Structure quadtree (QuadTree, QuadTreeNode, QuadTreeLeaf) avec interface WithBB (bounding box). Liste d'astéroïdes gérée avec LList, détection des intersections via le quadtree puis test de collision sur les candidats proches. Rebonds et régénération des astéroïdes sortis de l'écran.",
    carouselImages: ["Collisions/collisions_bruteforce.gif", "Collisions/collisions_quadtree.gif"],
    category: "Jeux",
    date: "2024 - 2025",
    DesignByURL: "",
    DesignBy: "",
    layout: "steps",
    problem: "Afficher des milliers de météorites avec détection de collisions en temps réel tout en gardant un maximum de FPS.",
    solutions: [
      "Utilisation d'un quadtree pour ne tester les collisions qu'entre objets proches (évite le O(n²) du brute force).",
      "Simulation et rendu avec Swing (Board, Timer, repaint).",
      "Gestion des BoundingBox et des listes (LList) pour les intersections.",
    ],
    technologies: ["Java", "Swing"],
    carouselLayout: "beforeAfter",
    carouselVideos: ["Collisions/collisions_bruteforce.mp4", "Collisions/collisions_quadtree.mp4"],
  }
];

export function getProjectById(id: string | undefined): Project | undefined {
  if (id == null) return undefined;
  const numId = parseInt(id, 10);
  if (Number.isNaN(numId)) return undefined;
  return projects.find((p) => p.id === numId);
}

/** IDs des projets affichés dans "Projets récents" (ordre d'affichage). */
const RECENT_PROJECT_IDS = [9, 2, 1] as const; // Collisions, TimeManagr, Arbitrhand, Möbius

export function getRecentProjects(_limit?: number): Project[] {
  return RECENT_PROJECT_IDS.map((id) => projects.find((p) => p.id === id)).filter(
    (p): p is Project => p != null
  );
}
