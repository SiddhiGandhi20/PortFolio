import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import "../Portfoliostyle.css";

const certifications = [
  {
    title: "PHP & MySQL Training",
    sponsor: "Sponsored by IIT Bombay",
  },
  {
    title: "Java Programming Training",
    sponsor: "Sponsored by IIT Bombay",
  },
  {
    title: "Corporate Mentorship Program (CMP)",
    sponsor: "Sponsored by VIOSA Learning",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="certifications-section">
      <motion.h2
        className="certifications-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      <div className="certification-list">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="cert-icon">
              <Award className="w-5 h-5" />
            </div>
            <div className="cert-texts">
              <p className="cert-title">{cert.title}</p>
              <p className="cert-sponsor">{cert.sponsor}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
