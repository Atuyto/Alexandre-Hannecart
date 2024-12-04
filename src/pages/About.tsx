const About = () => {
  return (
    <div className="page-transition pt-24">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">About Me</h1>
          
          <div className="glass-card rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="aspect-square bg-secondary rounded-lg"></div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
                <p className="text-muted-foreground mb-6">
                  I'm a passionate frontend developer with a keen eye for design and a love for creating
                  seamless user experiences. With years of experience in web development, I specialize
                  in building modern, responsive, and accessible websites.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Experience</h3>
                    <p className="text-muted-foreground">5+ years</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">hello@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "GraphQL", "Git", "Figma"].map((skill) => (
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
                    role: "Senior Frontend Developer",
                    company: "Tech Corp",
                    period: "2020 - Present",
                  },
                  {
                    role: "Frontend Developer",
                    company: "Digital Agency",
                    period: "2018 - 2020",
                  },
                  {
                    role: "Junior Developer",
                    company: "Startup Inc",
                    period: "2016 - 2018",
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