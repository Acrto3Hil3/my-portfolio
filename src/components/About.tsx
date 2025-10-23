import { Card } from "@/components/ui/card";
import { Code2, Server, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building complete web applications with modern frameworks and best practices",
    },
    {
      icon: Server,
      title: "Backend Architecture",
      description: "Designing secure, scalable APIs and microservices with Java & Node.js",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Deploying and managing applications on cloud platforms with Docker",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Results-driven developer skilled in <span className="text-primary font-semibold">Java, Spring Boot, Node.js, and ReactJS</span>. 
            Experienced in designing secure, scalable APIs, microservices, and cloud deployments. 
            Passionate about turning complex problems into elegant, efficient solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card 
                className="p-6 border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2 h-full"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
