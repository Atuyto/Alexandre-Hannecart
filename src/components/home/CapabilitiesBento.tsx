import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";

export function CapabilitiesBento() {
  return (
    <section className="section-block border-t border-border" aria-labelledby="capabilities-title">
      <div className="site-shell-wide">
        <Reveal className="mb-14">
          <SectionHeading
            id="capabilities-title"
            title="De l'idée à la mise en ligne"
            description="Je conçois, développe et fais évoluer des produits complets — web, mobile et intégration IA, pas seulement une liste de technologies."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                variant="rise"
                delay={index * 0.05}
                className="surface-elevated p-6 sm:p-8"
              >
                <Icon className="h-7 w-7 text-primary mb-5" strokeWidth={1.5} aria-hidden />
                <h3 className="font-display font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="mt-3 text-readable text-muted-foreground max-w-prose">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
