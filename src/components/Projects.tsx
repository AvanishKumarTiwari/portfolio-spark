import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Missing Person Identifier",
      date: "July 2025",
      description:
        "Developed a system to identify missing persons by matching images using perceptual hash functions and tree-based search algorithms for fast and accurate retrieval.",
      highlights: [
        "Designed efficient lookup mechanisms using hash tables and KD-Trees",
        "Built a REST API and a web dashboard for image uploads",
        "Result visualization and database management",
      ],
      tech: ["Python", "OpenCV", "pHash", "KD-Tree", "Flask", "MySQL", "Bootstrap"],
      github: "https://github.com/AvanishKumarTiwari",
    },
    {
      title: "Climate Change Tracker Chat-bot",
      date: "April 2025",
      description:
        "Developed an intelligent chat-bot system to track climate change patterns by analyzing real-time environmental data and historical climate records.",
      highlights: [
        "Implemented automated data ingestion and trend detection using APIs",
        "Statistical models and rule-based alerts for weather events",
        "Conversational interface with interactive dashboards",
      ],
      tech: ["Python", "Flask", "NLP", "OpenWeather API", "Pandas", "Matplotlib", "SQLite"],
      github: "https://github.com/AvanishKumarTiwari",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="code-font text-primary text-sm mb-3">{"// featured work"}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass-card rounded-2xl overflow-hidden hover-glow group"
            >
              {/* Gradient top border */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
