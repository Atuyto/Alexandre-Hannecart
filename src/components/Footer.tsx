import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">Alexandresoune@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Atuyto" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hannecart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;