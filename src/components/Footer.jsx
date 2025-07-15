import React from "react";
import { motion } from "framer-motion";
import "../Portfoliostyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="footer-text"
        >
          © 2025 Siddhi Gandhi. Built with React.js and lots of ❤️
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
