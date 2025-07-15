// components/Navbar.jsx
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import scrollToSection from "../utils/scrollToSection"
import "../Portfoliostyle.css"
import {
  Home,
  User,
  GraduationCap,
  Wrench,
  Briefcase,
  FolderOpen,
  Award,
  MessageCircle,
} from "lucide-react"

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: MessageCircle },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      const sections = navItems.map((item) => document.getElementById(item.id))
      for (const section of sections) {
        if (section && section.offsetTop - 100 <= scrollPos) {
          setActiveSection(section.id)
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileNavClick = (id) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      scrollToSection(id)
    }, 300) // delay scroll to match closing animation
  }

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="navbar-container">
        <motion.div
          className="sg-logo"
          whileHover={{ scale: 1.15, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          SG
        </motion.div>

        {/* Desktop Menu */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`navbar-link ${activeSection === item.id ? "active" : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="nav-icon" size={18} />
              <span>{item.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleMobileNavClick(item.id)}
                className={`mobile-link ${activeSection === item.id ? "active" : ""}`}
                whileHover={{ x: 10 }}
              >
                <item.icon className="nav-icon" size={18} />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
