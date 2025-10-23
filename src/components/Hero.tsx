import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Node.js", icon: "🟢" },
    { name: "React", icon: "⚛️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Subhash_Yadav_Resume.pdf";
    link.download = "Subhash_Yadav_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      <div className="container relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src={profileImage}
            alt="Subhash Yadav"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-primary shadow-glow"
          />

          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Subhash Yadav
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Backend & Full Stack Developer
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable APIs & full-stack solutions
          </p>

          <div className="flex flex-wrap gap-2 justify-center items-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-4 py-2 bg-secondary rounded-full text-sm flex items-center gap-2"
              >
                <span className="text-lg">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </Button>
            <Button variant="outline" size="lg" onClick={handleDownloadResume}>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-4">
            <a
              href="https://linkedin.com/in/subhash-yadav-7536651b7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:scale-110 transition-all flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Acrto3Hil3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:scale-110 transition-all flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:subhashyadav98146@gmail.com"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:scale-110 transition-all flex items-center justify-center"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
