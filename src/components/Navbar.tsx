import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-foreground">
          Hannecart Alexandre
        </Link>

        {/* Burger Icon (Visible uniquement en mobile) */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menu Links */}
        <div
          className={`absolute md:static top-16 left-0 right-0 bg-background md:bg-transparent border-b md:border-none border-border p-4 md:p-0 md:flex md:items-center md:gap-8 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "text-foreground" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isActive("/projects") ? "text-foreground" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Projets
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "text-foreground" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            A propos
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "text-foreground" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;