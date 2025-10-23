import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      role: "Lead Backend Developer",
      company: "Digital Engineering Excellence Programming",
      period: "Jul 2025 – Present",
      achievements: [
        "Leading backend architecture and development initiatives",
        "Mentoring junior developers and conducting code reviews",
        "Implementing scalable microservices architecture",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "eQuasar Solutions",
      period: "Jan 2025 – Jun 2025",
      achievements: [
        "Led multiple full-stack projects from conception to deployment",
        "Designed and implemented RESTful APIs serving 10K+ users",
        "Optimized database queries reducing response time by 40%",
      ],
    },
    {
      role: "Java Full Stack Developer & Mentor",
      company: "Naresh i Technologies",
      period: "Jan 2024 – Dec 2024",
      achievements: [
        "Developed enterprise applications using Spring Boot and React",
        "Mentored 50+ students in full-stack development",
        "Created comprehensive training materials and curriculum",
      ],
    },
    {
      role: "Geo Data Sharing & Cyber Security Intern",
      company: "ISRO (Remote)",
      period: "Dec 2024 – Jan 2025",
      achievements: [
        "Worked on geo-spatial data management systems",
        "Implemented security protocols for sensitive data",
        "Collaborated with remote teams on national projects",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and contributions to various organizations.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 border-border hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <span className="text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-3">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
