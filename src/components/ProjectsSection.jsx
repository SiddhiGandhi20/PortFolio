import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Smartphone,
  Target,
  Database,
} from "lucide-react";
import "../Portfoliostyle.css";

const projects = [
  {
    title: "AI-Powered Substitute Teacher Hiring Application",
    period: "Dec 2024 - April 2025",
    highlight: "AI-driven platform to connect schools with ideal substitute teachers.",
    description:
      "Designed and developed a full-stack mobile app using Flutter and Python Flask for seamless teacher-school job matching with AI-based KNN algorithms.",
    tech: ["Flutter", "Python Flask", "MongoDB", "Machine Learning", "KNN"],
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Salon Website",
    period: "December 2024",
    highlight: "Modern responsive web design for booking salon services.",
    description:
      "Built a responsive salon website using React.js, HTML, and CSS with elegant UI for service booking.",
    tech: ["React.js", "Flask", "HTML", "CSS"],
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Perfume Website",
    period: "December 2024",
    highlight: "Stylish web interface with backend for perfume inventory.",
    description:
      "Created a perfume product site with full CRUD operations using React and Flask backend.",
    tech: ["React.js", "Flask", "HTML", "CSS"],
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Expense Tracker App",
    period: "October 2024",
    highlight: "Track your daily expenses with real-time Firebase sync.",
    description:
      "Tracked real-time expenses and budget using Android, Firebase, and secure login.",
    tech: ["Android", "Firebase", "Java", "XML"],
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "Task Management System",
    period: "April 2024",
    highlight: "Web-based task allocation with admin/user roles.",
    description:
      "Full-stack app with admin/user login for assigning and tracking tasks.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Hotel Management System",
    period: "2022-2023",
    highlight: "Desktop app for hotel operations using Java Swing.",
    description:
      "Desktop Java app using AWT and Swing for managing hotel operations.",
    tech: ["Core Java", "MySQL", "AWT", "Swing"],
    icon: <Database className="w-6 h-6" />,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-period">{project.period}</p>
              </div>
            </div>
            
            <p className="project-highlight">{project.highlight}</p>

            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="project-tag"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
