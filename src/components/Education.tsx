import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "Since August 2023",
      grade: "CGPA: 6.35",
      current: true,
    },
    {
      degree: "Intermediate",
      field: "",
      institution: "S B S Inter College",
      location: "Siwan, Bihar",
      period: "April 2021 - March 2022",
      grade: "Percentage: 62%",
      current: false,
    },
    {
      degree: "Matriculation",
      field: "",
      institution: "S R Public School",
      location: "Patna, Bihar",
      period: "April 2019 - March 2020",
      grade: "Percentage: 69.4%",
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="code-font text-primary text-sm mb-3">{"// academic background"}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex shrink-0 w-16 justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-4 ${
                        edu.current
                          ? "bg-primary border-primary/30"
                          : "bg-secondary border-border"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card rounded-2xl p-6 hover-glow">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {edu.degree}
                          {edu.field && (
                            <span className="text-primary"> - {edu.field}</span>
                          )}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 flex-wrap">
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <GraduationCap className="w-4 h-4" />
                            {edu.institution}
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      {edu.current && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-2 text-sm">
                      <span className="text-muted-foreground">{edu.period}</span>
                      <span className="font-medium text-primary">{edu.grade}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
