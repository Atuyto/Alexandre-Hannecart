import { getAssetUrl } from "@/lib/utils";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const skillGroups: { label: string; skills: string[] }[] = [
  { label: "Backend", skills: ["Java", "Java Spring", "Node.js", "Python", "PHP", "Scala", "SQL", "C", "C++", "C#"] },
  { label: "Frontend", skills: ["JavaScript", "TypeScript", "HTML/CSS", "Figma"] },
  { label: "Mobile", skills: ["Android Java/Kotlin"] },
  {
    label: "IA & automatisation",
    skills: ["LLM & APIs", "Agents", "RAG", "Prompt engineering", "Ollama / modèles locaux"],
  },
  { label: "Outils & DevOps", skills: ["Git", "Docker", "Linux", "Windows Server", "VirtualBox", "WireShark", "Fiddler"] },
  { label: "Autres", skills: ["WLangage", "PC Soft", "Unity"] },
];

const education = [
  {
    period: "2025 — aujourd'hui",
    diploma: "Master of Science",
    school: "Epitech · Lille",
    note: "Spécialisation IA · en cours",
  },
  {
    period: "2025",
    diploma: "Diplôme BUT Informatique",
    school: "UPHF · Maubeuge",
  },
  {
    period: "2022",
    diploma: "Baccalauréat STI2D",
    school: "Lycée Pierre Forest · Maubeuge",
    note: "Mention Bien",
  },
];

const experiences = [
  { role: "Analyste programmeur technicien sup réseau", company: "ACE Electronic", period: "2025 - aujourd'hui" },
  { role: "Analyste programmeur technicien sup réseau", company: "ACE Electronic", period: "2024 - 2025" },
  { role: "Stage Analyste programmeur", company: "GeniLogic", period: "2024 - 8 semaines" },
  { role: "Stage", company: "Fablab à la gare numérique, Jeumont", period: "2019 - 1 semaine" },
];

const About = () => {
  return (
    <div className="page-transition pt-10 pb-24">
      <div className="site-shell-wide">
        <Reveal className="mb-16 max-w-3xl">
          <PageHeader
            title="À propos"
            description="Étudiant en MSc IA (Epitech), analyste programmeur — applications web, mobile et produits augmentés par l’intelligence artificielle."
          />
        </Reveal>

        <Reveal className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 surface-card overflow-hidden">
            <img
              src={getAssetUrl("moi.png")}
              alt="Alexandre Hannecart"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 surface-card p-8 sm:p-10 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-6">Qui suis-je</h2>
            <p className="text-readable text-muted-foreground mb-8 max-w-prose">
              Je suis Alexandre, étudiant en Master of Science à Epitech (IA) et analyste programmeur.
              Je conçois des applications web et mobile, et j&apos;intègre l&apos;IA lorsque cela simplifie
              un parcours, automatise une tâche ou enrichit un produit — toujours avec un code maintenable
              et une vraie utilité pour l&apos;utilisateur.
            </p>
            <dl className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="font-semibold text-foreground mb-1">Localisation</dt>
                <dd className="text-muted-foreground">Fourmies, France</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground mb-1">Email</dt>
                <dd>
                  <a
                    href="mailto:Alexandresoune@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    Alexandresoune@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal className="mb-20">
          <h2 className="text-xl font-semibold mb-8 pb-3 border-b border-border">Stack technique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.label} className="surface-card p-6">
                <h3 className="text-xs font-medium text-muted-foreground mb-4">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md bg-secondary px-3 py-1 text-sm text-foreground/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mb-20">
          <h2 className="text-xl font-semibold mb-10 pb-3 border-b border-border">Scolarité</h2>
          <div className="relative space-y-0">
            {education.map((item, index) => (
              <div
                key={`${item.school}-${item.period}`}
                className={cn("relative grid grid-cols-1 md:grid-cols-12 gap-4 pb-10 last:pb-0")}
              >
                {index < education.length - 1 && (
                  <div className="absolute left-[7px] top-8 bottom-0 w-px bg-border md:left-[calc(33.333%-4px)]" aria-hidden />
                )}
                <div className="md:col-span-4 flex md:justify-end md:pr-8">
                  <time className="text-sm font-mono text-muted-foreground pt-1">{item.period}</time>
                </div>
                <div className="md:col-span-8 relative pl-8 md:pl-0">
                  <span
                    className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background md:-left-[calc(50%+6px)] md:left-auto md:right-full md:mr-6"
                    aria-hidden
                  />
                  <div className="surface-card p-6">
                    <h3 className="text-lg font-semibold">{item.diploma}</h3>
                    <p className="text-primary font-medium mt-1">{item.school}</p>
                    {item.note ? (
                      <p className="text-sm text-muted-foreground mt-2">{item.note}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h2 className="text-xl font-semibold mb-10 pb-3 border-b border-border">Parcours professionnel</h2>
          <div className="relative space-y-0">
            {experiences.map((job, index) => (
              <div
                key={`${job.company}-${job.period}`}
                className={cn("relative grid grid-cols-1 md:grid-cols-12 gap-4 pb-10 last:pb-0")}
              >
                {index < experiences.length - 1 && (
                  <div className="absolute left-[7px] top-8 bottom-0 w-px bg-border md:left-[calc(33.333%-4px)]" aria-hidden />
                )}
                <div className="md:col-span-4 flex md:justify-end md:pr-8">
                  <time className="text-sm font-mono text-muted-foreground pt-1">{job.period}</time>
                </div>
                <div className="md:col-span-8 relative pl-8 md:pl-0">
                  <span
                    className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background md:-left-[calc(50%+6px)] md:left-auto md:right-full md:mr-6"
                    aria-hidden
                  />
                  <div className="surface-card p-6">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-primary font-medium mt-1">{job.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
