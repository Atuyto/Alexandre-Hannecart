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
      Description: "Möbius est un projet personnel...",
      objective: "L'objectif de ce projet est de proposer...",
      details: "Möbius a été conçue spécifiquement...",
      carouselImages: ["/Alexandre-Hannecart/Mobius/home.png", "/Alexandre-Hannecart/Mobius/Ready.png", "/Alexandre-Hannecart/Mobius/GO.png", "/Alexandre-Hannecart/Mobius/Pause.png", "/Alexandre-Hannecart/Mobius/Cycle.png"],
      category: "Mobile",
    },
    {
      id: 2,
      name: "Arbitrhand",
      Shortdescription: "Une application pour la gestion de matchs de handball",
      image: "/Alexandre-Hannecart/Arbitrhand/logo.png",
      Description: "ARBITRHAND est un projet personnel...",
      objective: "Notre objectif principal était d'offrir...",
      details: "Arbitrhand intègre des fonctionnalités...",
      carouselImages: ["/Alexandre-Hannecart/Arbitrhand/Home.png", "/Alexandre-Hannecart/Arbitrhand/Loading.png", "/Alexandre-Hannecart/Arbitrhand/horizontal.png"],
      category: "Mobile",
    },
    {
      id: 3,
      name: "MakeU",
      Shortdescription: "Une application permettant d'organiser ses séances de sport",
      image: "/Alexandre-Hannecart/MakeU/logo.svg",
      Description: "Make-U est un projet personnel...",
      objective: "L'objectif principal de Make-U est de proposer...",
      details: "Cette application est entièrement développée...",
      carouselImages: ["/Alexandre-Hannecart/MakeU/home.png", "/Alexandre-Hannecart/MakeU/Connection.png", "/Alexandre-Hannecart/MakeU/fyp.png", "/Alexandre-Hannecart/MakeU/Seance.png", "./MakeU/Calendar.png"],
      category: "Mobile",
    },
  ];

  // Filtrer les projets selon la catégorie
  const filteredProjects =
      filter === "all"
          ? projects
          : projects.filter((project) => project.category.toLowerCase() === filter);

  return (
      <div className="page-transition pt-24">
        <div className="container px-6">
          <h1 className="text-4xl font-bold mb-12">My Projects</h1>

          <div className="flex gap-4 mb-8">
            {["all", "mobile", "web", "design"].map((category) => (
                <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm ${
                        filter === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    } transition-colors`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
          </div>

          {/* Affichage des projets filtrés */}
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
      </div>
  );
};

export default Projects;
