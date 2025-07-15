import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Mic } from "lucide-react";
import "../Portfoliostyle.css";

const experienceData = [
  {
    title: "Full Stack Developer Intern",
    company: "Cybexonics IT Consultants, Baramati",
    period: "December 2024 - March 2025",
    icon: Briefcase,
    gradient: "linear-gradient(to right, #8b5cf6, #a855f7)",
    points: [
      "Developed responsive and interactive front-end interfaces using React.js for various client projects.",
      "Built and maintained robust back-end systems with Python Flask, focusing on performance and scalability.",
      "Collaborated with a team to integrate APIs and manage database interactions.",
      "Gained hands-on experience in full-stack development, optimizing workflows for efficient project delivery.",
    ],
  },
  {
    title: "Anchor & Event Coordinator",
    company: "College Events",
    period: "Aug 2024 – Oct 2024",
    icon: Mic,
    gradient: "linear-gradient(to right, #a855f7, #8b5cf6)",
    points: [
      "Successfully organized and anchored multiple college events with engaging stage presence.",
      "Effectively handled event flow and audience interaction, ensuring a seamless experience.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2
        className="experience-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>

      <div>
        {experienceData.map((job, index) => {
          const Icon = job.icon;

          return (
            <motion.div
              className="experience-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.015 }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="experience-content">
                <motion.div
                  className="experience-icon"
                  style={{ background: job.gradient }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="icon-white" />
                </motion.div>

                <div className="experience-info">
                  <h3 className="experience-title">{job.title}</h3>
                  <p className="experience-company">{job.company}</p>
                  <p className="experience-period">{job.period}</p>
                  <ul className="experience-points">
                    {job.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
