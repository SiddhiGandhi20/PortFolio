// utils/scrollToSection.js
export default function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80, // Adjust offset if you have a fixed navbar
      behavior: "smooth",
    });
  }
}
