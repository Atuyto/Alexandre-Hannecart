import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    { id: 1, title: "E-commerce Platform", category: "web" },
    { id: 2, title: "Mobile App", category: "mobile" },
    { id: 3, title: "Dashboard Design", category: "design" },
    { id: 4, title: "Portfolio Website", category: "web" },
    { id: 5, title: "Social Media App", category: "mobile" },
    { id: 6, title: "Brand Identity", category: "design" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="page-transition pt-24">
      <div className="container px-6">
        <h1 className="text-4xl font-bold mb-12">My Projects</h1>
        
        <div className="flex gap-4 mb-8">
          {["all", "web", "mobile", "design"].map((category) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass-card rounded-lg p-6"
            >
              <div className="aspect-video bg-secondary rounded-md mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;