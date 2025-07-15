import React from "react";
import { motion } from "framer-motion";
import { Mail, FolderOpen } from "lucide-react";
import "../Portfoliostyle.css";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Split text into animated spans
const splitText = (text) =>
  text.split("").map((char, i) => (
    <motion.span key={i} variants={letterVariants}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Decorative Blobs */}
      <div className="blob blob-left" />
      <div className="blob blob-right" />

      <div className="hero-container">
          {/* Left: Content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
          <motion.h1
            className="hero-title"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            Hi, I’m {splitText("Siddhi Gandhi")}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {splitText("MCA Graduate & Full Stack Developer")}
          </motion.p>

          <motion.p
            className="hero-subtitle"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {splitText("Turning ideas into beautiful, functional web experiences.")}
          </motion.p>
          <div className="hero-buttons">
          <div className="hero-buttons-top">
            <a href="#contact">
              <motion.button
                className="button-primary glow-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} style={{ marginRight: "0.5rem" }} />
                Let’s Connect
              </motion.button>
            </a>

          <a href="#projects">
            <motion.button
              className="button-outline glow-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FolderOpen size={18} style={{ marginRight: "0.5rem" }} />
              View Projects
            </motion.button>
          </a>
          <div className="hero-bubbles">
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      className="h-bubble"
      initial={{ opacity: 0, y: 50, scale: 0.6 }}
      animate={{
        opacity: [0, 0.4, 0.8, 0.4, 0],
        y: [-10, -20, -10],
        scale: [0.8, 1.1, 0.9],
      }}
      transition={{
        duration: 8 + i,
        repeat: Infinity,
        repeatType: "loop",
        delay: i * 0.5,
        ease: "easeInOut",
      }}
      style={{
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 80}%`,
      }}
    />
  ))}
</div>

        </div>

  <div className="hero-buttons-bottom">
    <a
      href="/Siddhi_Resume.pdf"
      download
    >
      <motion.button
        className="button-primary glow-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FolderOpen size={18} style={{ marginRight: "0.5rem" }} />
        Download Resume
      </motion.button>
    </a>
  </div>
</div>

        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="hero-image animated-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/assets/profile.jpg" alt="Siddhi Gandhi" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
