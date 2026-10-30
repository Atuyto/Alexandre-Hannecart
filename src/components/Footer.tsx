import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { href: "https://github.com/Atuyto", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/alexandre-hannecart", icon: Linkedin, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="site-shell py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl font-bold tracking-tight">Alexandre Hannecart</p>
            <p className="mt-4 max-w-sm text-muted-foreground text-readable">
              Développeur full-stack — conception, développement, intégration IA et livraison de produits web et
              mobile.
            </p>
            <a
              href="mailto:Alexandresoune@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Alexandresoune@gmail.com
            </a>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-medium text-muted-foreground mb-4">Navigation</h3>
            <nav className="flex flex-col gap-3" aria-label="Pied de page">
              {[
                { to: "/", label: "Accueil" },
                { to: "/projects", label: "Projets" },
                { to: "/about", label: "À propos" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-foreground/80 hover:text-primary transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-medium text-muted-foreground mb-4">Réseaux</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">Fourmies, France</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alexandre Hannecart</p>
          <p className="font-mono text-xs">Built with React · TypeScript · Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
