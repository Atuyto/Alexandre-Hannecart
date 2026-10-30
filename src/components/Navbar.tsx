import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/projects", label: "Projets" },
  { to: "/about", label: "À propos" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-border bg-background/95 backdrop-blur-sm">
      <nav
        className="site-shell h-14 flex items-center justify-between"
        aria-label="Navigation principale"
      >
        <Link
          to="/"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary font-display text-sm font-bold text-foreground">
            AH
          </span>
          <span className="hidden sm:block font-display text-base font-semibold tracking-tight text-foreground">
            Alexandre Hannecart
          </span>
        </Link>

        <button
          type="button"
          className="md:hidden flex h-11 w-11 items-center justify-center -mr-1 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden>
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "nav-link rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive(to) && "nav-link-active"
              )}
              aria-current={isActive(to) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary ml-3 !py-2.5 !px-5 text-xs sm:text-sm">
            Contact
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduced ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
            className="md:hidden overflow-hidden border-b border-border bg-card"
          >
            <div className="site-shell py-4 flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "px-3 py-3 rounded-lg text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive(to) ? "text-foreground bg-secondary" : "text-muted-foreground hover:bg-secondary/50"
                  )}
                  aria-current={isActive(to) ? "page" : undefined}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                className={cn(
                  "px-3 py-3 rounded-lg text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive("/contact") ? "text-foreground bg-secondary" : "text-muted-foreground hover:bg-secondary/50"
                )}
                aria-current={isActive("/contact") ? "page" : undefined}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
