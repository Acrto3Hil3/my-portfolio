import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 border-border hover:shadow-glow transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold">
                    Bachelor of Technology in Computer Science & Engineering
                  </h3>
                </div>
                
                <div className="space-y-2">
                  <p className="text-primary font-medium text-lg">
                    CT University, Ludhiana
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Duration:</span> 2020 – 2024
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium">CGPA:</span> 7.51 / 10
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Focused on software engineering, data structures, algorithms, 
                    database management systems, and web technologies. Completed multiple 
                    projects in full-stack development and participated in coding competitions.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
