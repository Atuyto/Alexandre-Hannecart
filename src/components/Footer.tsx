import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { href: "https://github.com/Atuyto", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/alexandre-hannecart", icon: Linkedin, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Contact</h3>
            <a
              href="mailto:Alexandresoune@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              Alexandresoune@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Réseaux sociaux</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-base text-muted-foreground hover:text-primary transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                Accueil
              </Link>
              <Link to="/projects" className="text-base text-muted-foreground hover:text-primary transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                Projets
              </Link>
              <Link to="/about" className="text-base text-muted-foreground hover:text-primary transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                À propos
              </Link>
              <Link to="/contact" className="text-base text-muted-foreground hover:text-primary transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-base sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Alexandre Hannecart. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
