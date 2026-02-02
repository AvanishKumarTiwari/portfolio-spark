import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const Experience = () => {
  const training = {
    title: "Code-Smart: Foundations and Data Structure in C, C++, Java",
    date: "August 2025",
    highlights: [
      "Completed with specialization in Data Structures and Algorithms",
      "Strong hands-on experience in C, C++, and Java",
      "Developed the 'Missing Person Identifier' project",
      "Earned Outstanding certification grade",
    ],
  };

  const certificates = [
    { name: "Privacy and Security in Online Social Media", issuer: "NPTEL", date: "" },
    { name: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI and LLM", issuer: "Infosys", date: "August 2025" },
    { name: "Computational Theory: Language Principle & Finite Automata", issuer: "Infosys", date: "August 2025" },
    { name: "Fundamentals of Computer Networks", issuer: "University of Colorado | Coursera", date: "December 2024" },
    { name: "Introduction to Hardware and Operating System", issuer: "IBM | Coursera", date: "September 2024" },
    { name: "Bits and Bytes of Computer Networking", issuer: "Google", date: "September 2024" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Training Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <p className="code-font text-primary text-sm mb-3">{"// continuous learning"}</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Training & <span className="gradient-text">Certifications</span>
            </h2>
          </div>

          {/* Training Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card rounded-2xl p-8 glow-effect mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h3 className="text-xl font-bold">{training.title}</h3>
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
                    Outstanding
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{training.date}</p>
                <ul className="space-y-2">
                  {training.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                className="glass-card rounded-xl p-5 hover-glow group cursor-default"
              >
                <h4 className="font-medium text-sm mb-2 group-hover:text-primary transition-colors leading-snug">
                  {cert.name}
                </h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                {cert.date && (
                  <p className="text-xs text-primary/70 mt-1">{cert.date}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
