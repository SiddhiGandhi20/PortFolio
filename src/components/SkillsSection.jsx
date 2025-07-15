import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Smartphone,
  Users,
  Monitor
} from "lucide-react";
import "../Portfoliostyle.css";

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
  backend: ["Python", "Python - Flask", "Core Java"],
  databases: ["MongoDB", "Firebase", "MySQL"],
  mobile: ["Flutter", "Dart", "Android (Java, XML)"],
  desktop: ["Electron Framework"],
  soft: ["Teamwork", "Communication", "Problem-Solving","Adaptability" ,"Time Management","Creativity","Leadership"]

 
};

const categories = [
  [
    { title: "Frontend", icon: Code, items: skills.frontend },
    { title: "Backend", icon: Server, items: skills.backend },
    { title: "Databases", icon: Database, items: skills.databases }
  ],
  [
    { title: "Mobile App Development", icon: Smartphone, items: skills.mobile },
    { title: "Desktop Applications", icon: Monitor, items: skills.desktop },
    { title: "Soft Skills", icon: Users, items: skills.soft }
    
  ]
];

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      {/* Animated Decorative Bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>

      <motion.h2
        className="skills-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Two separate rows */}
      {categories.map((row, rowIndex) => (
        <div className="skills-row" key={rowIndex}>
          {row.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={index}
                className="skill-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-header">
                  <motion.div
                    className="skill-icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={20} />
                  </motion.div>
                  <h3 className="skill-title">{cat.title}</h3>
                </div>
                <div className="skill-tags">
                  {cat.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      className={`skill-tag pastel-${(i % 6) + 1}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
