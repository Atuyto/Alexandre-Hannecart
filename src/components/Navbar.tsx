import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-foreground">
          Portfolio
        </Link>
        <div className="flex gap-8">
          <Link to="/" className={`nav-link ${isActive("/") ? "text-foreground" : ""}`}>
            Home
          </Link>
          <Link to="/projects" className={`nav-link ${isActive("/projects") ? "text-foreground" : ""}`}>
            Projects
          </Link>
          <Link to="/about" className={`nav-link ${isActive("/about") ? "text-foreground" : ""}`}>
            About
          </Link>
          <Link to="/contact" className={`nav-link ${isActive("/contact") ? "text-foreground" : ""}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;