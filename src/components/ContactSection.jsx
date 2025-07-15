import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import "../Portfoliostyle.css"; // create this file for styles

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-heading"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-description"
          >
            I'm always open to discussing new opportunities and interesting projects.
          </motion.p>

          <motion.div
            className="contact-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=siddhigandhi20021@gmail.com&su=Let's%20Connect&body=Hi%20Siddhi,"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button gradient"
            >
              <Mail className="icon" />
              siddhigandhi20021@gmail.com
            </a>
            </motion.div>



            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <a
    href="tel:9307792877"
    className="contact-button outline"
  >
    <Phone className="icon" />
    9307792877
  </a>
</motion.div>

          </motion.div>
        </div>
      </section>

      
    </>
  );
};

export default ContactSection;
