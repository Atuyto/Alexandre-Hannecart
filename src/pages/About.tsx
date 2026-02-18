import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { getAssetUrl } from "@/lib/utils";

const skillGroups: { label: string; skills: string[] }[] = [
  { label: "Backend", skills: ["Java", "Java Spring", "Node.js", "Python", "PHP", "Scala", "SQL", "C", "C++", "C#"] },
  { label: "Frontend", skills: ["JavaScript", "TypeScript", "HTML/CSS", "Figma"] },
  { label: "Mobile", skills: ["Android Java/Kotlin"] },
  { label: "Outils & DevOps", skills: ["Git", "Docker", "Linux", "Windows Server", "VirtualBox", "WireShark", "Fiddler"] },
  { label: "Autres", skills: ["WLangage", "PC Soft", "Unity"] },
];

const experiences = [
  {
    role: "Analyste programmeur technicien sup réseau",
    company: "ACE Electronic",
    period: "2025 - aujourd'hui",
  },
  {
    role: "Analyste programmeur technicien sup réseau",
    company: "ACE Electronic",
    period: "2024 - 2025",
  },
  {
    role: "Stage Analyste programmeur",
    company: "GeniLogic",
    period: "2024 - 8 semaines",
  },
  {
    role: "Stage",
    company: "Fablab à la gare numérique, Jeumont",
    period: "2019 - 1 semaine",
  },
];

const About = () => {
  return (
    <div className="page-transition pt-8">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-bold mb-12 font-display"
          >
            À propos de moi
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card rounded-xl p-6 sm:p-8 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-square bg-secondary rounded-xl overflow-hidden">
                <img
                  src={getAssetUrl("moi.png")}
                  alt="Alexandre Hannecart"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-display">Qui suis-je</h2>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  Je suis Alexandre, un étudiant dévoué en informatique qui se passionne pour le
                  développement d'applications. J'aime transformer les idées en réalités, une ligne
                  de code à la fois. Ensemble, façonnons l'avenir du numérique.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">Localisation</h3>
                    <p className="text-muted-foreground">Jeumont, France</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:Alexandresoune@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      Alexandresoune@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-6 font-display">Compétences</h2>
              <div className="space-y-8">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-base sm:text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                      {group.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm font-normal py-1 px-3"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-8 font-display">Expérience</h2>
              <div className="relative pl-8 md:pl-10 space-y-0">
                <div
                  className="absolute left-[11px] top-2 bottom-2 w-px bg-border"
                  aria-hidden
                />
                {experiences.map((job, index) => (
                  <motion.div
                    key={job.role}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="relative pb-10 last:pb-0"
                  >
                    <span
                      className="absolute left-[11px] top-1.5 w-3 h-3 rounded-full bg-primary -translate-x-1/2"
                      aria-hidden
                    />
                    <div className="glass-card rounded-xl p-6 ml-2">
                      <h3 className="text-xl font-semibold mb-1">{job.role}</h3>
                      <p className="text-primary font-medium mb-1">{job.company}</p>
                      <p className="text-muted-foreground text-base sm:text-sm">{job.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
