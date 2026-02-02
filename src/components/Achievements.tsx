import { motion } from "framer-motion";
import { Trophy, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Outstanding Grade - Code-Smart Training",
      date: "August 2025",
      description:
        "Completed Code Smart: Foundations and Data Structures in C, C++, Java with Outstanding grade, specializing in Data Structures and Algorithms.",
    },
    {
      icon: Users,
      title: "Code-A-Haunt Hackathon - Top 10",
      date: "",
      description:
        "Participated in the 'Code-A-Haunt' Hackathon and achieved a Top 10 team ranking among all participants.",
    },
  ];

  return (
    <section id="achievements" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="code-font text-primary text-sm mb-3">{"// recognition"}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover-glow flex gap-5"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <achievement.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  {achievement.date && (
                    <span className="text-xs text-muted-foreground">{achievement.date}</span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
