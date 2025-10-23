import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AutoProof24",
      description:
        "Comprehensive vehicle insurance management system with real-time policy tracking and claims processing",
      tech: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "JWT",
        "Twilio",
        "AI-powered Inspection Module",
      ],
    },
    {
      title: "FieldSathi",
      description:
        "Field service management platform enabling seamless coordination between field agents and operations",
      tech: [
        "Node.js",
        "Express.js",
        "MOngoDB",
        "PostgreSQL",
        "Google & Microsoft OAuth",
        "Google Calendar",
        "JWT",
        "SMS wala",
        "Twilio",
      ],
    },
    {
      title: "FiloFax",
      description:
        "Document management system with secure file storage and intelligent categorization",
      tech: ["Node.js", "Express.js", "JWT", "Twilio", "MySQL"],
    },
    {
      title: "Malik Printers ERP",
      description:
        "Complete ERP solution for printing business including inventory, orders, and accounting",
      tech: ["ReactJS", "Node.js", "Express.js", "JWT", "Twilio", "MySQL"],
    },
    {
      title: "Pupping",
      description:
        "Pet care and adoption platform connecting pet owners with services and adoption centers",
      tech: ["Node.js", "Express.js", "ReactJs", "MongoDB", "JWT", "Twilio"],
    },
    {
      title: "Real-Time Video Chat App",
      description:
        "WebRTC-based video conferencing application with screen sharing and chat features",
      tech: ["WebRTC", "Node.js", "Socket.io", "React", "Express.js", "JWT"],
    },
    {
      title: "Smart Contact",
      description:
        "WebRTC-based video conferencing application with screen sharing and chat features",
      tech: [
        "Java",
        "React",
        "Tailwind CSS",
        "Spring Boot",
        "Spring Security",
        "Spring AOP",
        "JWT",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group overflow-hidden border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="h-2 bg-gradient-primary" />

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-secondary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
