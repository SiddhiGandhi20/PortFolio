import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import "../Portfoliostyle.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm an MCA graduate with a passion for building beautiful, responsive web and mobile applications. I specialize in React, Flask, and Flutter — blending frontend finesse with backend logic.
            </p>
            <p>
              From real-time features with Firebase to full-stack solutions with MongoDB and MySQL, I love solving complex problems with clean, maintainable code.
            </p>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: MapPin, text: "A/P Nimgaon Ketaki, Tal-Indapur, Dist-Pune, 413120" },
              { icon: Mail, text: "siddhigandhi20021@gmail.com" },
              { icon: Phone, text: "9307792877" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="about-info-item"
                whileHover={{ scale: 1.02, x: 6 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <item.icon className="info-icon" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
