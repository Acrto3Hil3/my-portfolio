import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Backend",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 90 },
        { name: "Hibernate", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "ReactJS", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
        { name: "Postman", level: 92 },
        { name: "OAuth2 & JWT", level: 85 },
        { name: "Twilio & Google APIs", level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 1 }}
                        className="h-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
