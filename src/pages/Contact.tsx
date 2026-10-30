import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message envoyé avec succès !");
        return;
      }

      setStatus("error");
      setErrorMessage(
        "L'envoi a échoué. Réessayez dans un instant ou écrivez-moi directement par email."
      );
      toast.error("Échec de l'envoi du message");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Connexion impossible. Vérifiez votre réseau ou contactez-moi par email ci-contre."
      );
      toast.error("Échec de l'envoi du message");
    }
  };

  return (
    <div className="page-transition pt-10 pb-24">
      <div className="site-shell-wide max-w-4xl">
        <Reveal className="mb-12">
          <PageHeader
            title="Contactez-moi"
            description="Je suis toujours intéressé par de nouveaux projets et de nouvelles opportabilités. N'hésitez pas à me contacter !"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal variant="fade" className="space-y-6">
            {[
              { icon: Mail, title: "Email", href: "mailto:Alexandresoune@gmail.com", text: "Alexandresoune@gmail.com" },
              { icon: Phone, title: "Téléphone", text: "+33 6 10 58 55 48" },
              { icon: MapPin, title: "Localisation", text: "Fourmies, France" },
            ].map(({ icon: Icon, title, href, text }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0 border border-border">
                  <Icon className="w-5 h-5 text-foreground" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  {href ? (
                    <a
                      href={href}
                      className="text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {text}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{text}</p>
                  )}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal variant="rise">
            <form
              onSubmit={handleSubmit}
              className="surface-card p-6 sm:p-8 space-y-4"
              action="https://formspree.io/f/mbjnaqey"
              method="post"
            >
              <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="min-h-[1.25rem] text-sm"
              >
                {status === "success" && (
                  <p className="text-primary font-medium">Message envoyé. Je vous répondrai dès que possible.</p>
                )}
                {status === "error" && errorMessage && (
                  <p className="text-destructive font-medium">{errorMessage}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={status === "loading"}
                  className="bg-card border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={status === "loading"}
                  className="bg-card border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                  disabled={status === "loading"}
                  className="bg-card border-border resize-none"
                />
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={status === "loading"}>
                {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
