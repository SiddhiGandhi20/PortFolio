import React from "react"
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import "../Portfoliostyle.css"

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Vidya  Pratishthan's Institute of Information Technology, Baramati",
    period: "2023- 2025",
    grade: "CGPA: 8.77/10.00",
  },
  {
    degree: "Bachelor of Computer Science (BCS)",
    institution: "Tuljaram Chaturchand College, Baramati",
    period: "2020 - 2023",
    grade: "CGPA: 8.66/10.00",
  },
  {
    degree: "Higher Secondary - Science",
    institution: "Shri Narayandas Ramdas Highschool & Junior College, Indapur",
    period: "2018 - 2020",
    grade: "Percentage: 64.00",
  },
  {
    degree: "Secondary School",
    institution: "Bharat Children's Academy & Junior College, Walchandnagar",
    period: "2017 - 2020",
    grade: "Percentage: 68.20",
  },
]

const EducationSection = () => {
  return (
    <section id="education" className="education-section">
      <motion.h2
        className="education-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="education-wrapper">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="education-card-content">
              <div className="education-icon">
                <GraduationCap />
              </div>
              <div className="education-info">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-meta">
                  <span className="education-period">{edu.period}</span>
                  <span className="education-badge">{edu.grade}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
