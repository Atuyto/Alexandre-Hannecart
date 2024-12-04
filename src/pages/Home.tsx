import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-transition">
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Creating Digital Experiences That
              <span className="text-primary"> Matter</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Frontend developer passionate about building beautiful and functional web applications
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card rounded-lg p-6 group hover:scale-105 transition-transform duration-300">
                <div className="aspect-video bg-secondary rounded-md mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                <p className="text-muted-foreground mb-4">
                  A brief description of the project and the technologies used.
                </p>
                <Link
                  to={`/projects/${i}`}
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                >
                  Learn More
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