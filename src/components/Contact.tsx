import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "avanishtiwari1226@gmail.com",
      href: "mailto:avanishtiwari1226@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-6204563852",
      href: "tel:+916204563852",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/avanish-tiwari-",
      href: "https://www.linkedin.com/in/avanish-tiwari-",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/AvanishKumarTiwari",
      href: "https://github.com/AvanishKumarTiwari",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="code-font text-primary text-sm mb-3">{"// let's connect"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label !== "Email" && contact.label !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-xl p-5 hover-glow group flex items-center gap-4"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-muted-foreground mb-0.5">{contact.label}</p>
                  <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="mailto:avanishtiwari1226@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25 group"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Send Me a Message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
