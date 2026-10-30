import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

const queryClient = new QueryClient();

function PageFallback() {
  return (
    <div
      className="flex flex-1 items-center justify-center py-24 site-shell"
      aria-busy="true"
      aria-live="polite"
    >
      <p className="text-sm text-muted-foreground">Chargement…</p>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const reduced = usePrefersReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduced ? undefined : { opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col"
      >
        <Suspense fallback={<PageFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
        <div className="relative min-h-screen flex flex-col scrollbar-thin bg-background">
          <a href="#main-content" className="skip-link">
            Aller au contenu principal
          </a>
          <div
            className="pointer-events-none fixed inset-x-0 top-0 h-32 bg-gradient-to-b from-foreground/[0.03] to-transparent"
            aria-hidden
          />
          <Navbar />
          <main id="main-content" className="flex-grow w-full flex flex-col pt-14">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
