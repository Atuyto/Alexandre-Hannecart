const About = () => {
  return (
    <div className="page-transition pt-24">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">A propos de moi</h1>
          
          <div className="glass-card rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="aspect-square bg-secondary rounded-lg">
                  <img
                      src="/Alexandre-Hannecart/moi.png"
                      alt="photo"/>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Qui suis-je</h2>
                <p className="text-muted-foreground mb-6">
                  Je suis Alexandre, un étudiant dévoué en informatique qui se passionne pour le développement d’applications.
                  j’aime transformer les idées en réalités, une ligne de code à la fois. Ensemble, façonnons l’avenir du numérique.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">Jeumont, France</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">Alexandresoune@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Java", "Java spring", "JavaScript", "Node.js", "Python", "PHP", "SQL", "HTML/CSS", "Figma", "WLangage", "PC soft", "Java spring", "C++", "C#", "C", "Android Java/Kotlin", "Window serveur", "Linux", "Docker", "Type script", "Git", "Virtual box"].map((skill) => (
                  <div key={skill} className="glass-card rounded-lg p-4 text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Experience</h2>
              <div className="space-y-6">
                {[
                  {
                    role: "Analyste programmeur technicien sup reseau",
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
                    company: "Fablab à la gare numérique, Jeumont ",
                    period: "2019 - 1 semaine",
                  },
                ].map((job) => (
                  <div key={job.role} className="glass-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{job.role}</h3>
                    <p className="text-primary mb-1">{job.company}</p>
                    <p className="text-muted-foreground">{job.period}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;