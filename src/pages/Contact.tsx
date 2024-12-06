import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault(); // Pour empêcher le rechargement de la page
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    const form = e.target;
    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
    })
        .then((response) => {
          if (response.ok) {
            alert('Message envoyé avec succès !');
          } else {
            alert('Erreur lors de l\'envoi du message.');
          }
        })
        .catch((error) => {
          alert('Erreur lors de l\'envoi du message.');
        });
  };
  return (
    <div className="page-transition pt-24">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Contacter moi</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground mb-8">
                Je suis toujours intéressée par de nouveaux projets et de nouvelles opportunités.
                N'hésitez pas à me contacter si vous souhaitez entrer en contact avec moi !
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">Alexandresoune@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+33 06 10 58 55 48</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Jeumont, France</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-card rounded-lg p-6" action="https://formspree.io/f/mbjnaqey" method="post">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="name"  // Important pour Formspree
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-md bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"  // Important pour Formspree
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-md bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                      id="message"
                      name="message"  // Important pour Formspree
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-2 rounded-md bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                  ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;