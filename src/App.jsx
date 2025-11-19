import { useState, useEffect } from "react";
import { Menu, X, Mail, Instagram, Github, Linkedin, ExternalLink } from "lucide-react";
import profile from "./img/profile.png";
import "./App.css";
import CARKASimg from "./img/carkas.png";
import JAVAimg from "./img/java.png";
import TOPUPimg from "./img/topup.jpg";

// Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav
        className={`flex justify-between items-center px-6 md:px-[7%] py-4 fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-700" 
            : "bg-slate-900 border-b border-slate-800"
        }`}
      >
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-bold italic hover:scale-105 transition-transform"
        >
          <span className="text-red-600">favianrp</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-red-600 transition-colors duration-200 text-lg relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA & Hamburger */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-red-700/50 transition-all duration-300 hover:scale-105"
          >
            <Mail size={18} />
            Email Me
          </a>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-slate-300 hover:text-red-600 transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-slate-300 hover:text-red-600 transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        {/* Mobile Logo */}
        <div className="px-6 pt-6 pb-8 border-b border-slate-800">
          <span className="text-2xl font-bold italic text-red-600">favianrp</span>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col mt-8 space-y-2 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-red-600 hover:bg-slate-800 px-4 py-3 rounded-lg transition-all duration-200 text-lg"
            >
              {link.name}
            </a>
          ))}
          
          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg mt-6 transition-all duration-300"
          >
            <Mail size={18} />
            Email Me
          </a>
        </div>
      </div>
    </>
  );
}

// Main App Component
export default function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML", level: 90, color: "bg-orange-500" },
    { name: "CSS", level: 85, color: "bg-blue-500" },
    { name: "JavaScript", level: 80, color: "bg-yellow-500" },
    { name: "React", level: 60, color: "bg-blue-400" },
    { name: "Tailwind CSS", level: 60, color: "bg-cyan-500" },
    { name: "Python", level: 75, color: "bg-green-500" },
    { name: "Cyber Security", level: 70, color: "bg-red-800" }
  ];

  const projects = [
    {
      title: "Landing Page CARKAS",
      description: "An landing page about selling used luxury cars which contains the latest luxury cars, car specifications and etc. (School project)",
      tech: ["HTML", "CSS", "Javascript"],
      link: "https://favianrp.github.io/carkas.github.io/",
      image: CARKASimg
    },
    {
      title: "Landing Page JokiPedia",
      description: "An landing page containing promotions for a game boosting shop.",
      tech: ["HTML", "CSS", "Javascript"],
      link: "#",
      image: TOPUPimg
    },
    {
      title: "Landing Page JAVA",
      description: "An landing page about the island of Java which contains history, traditional houses, food & drinks, and destinations in each province. (School project)",
      tech: ["HTML", "CSS", "Javascript"],
      link: "https://favianrp.github.io/java.github.io/",
      image: JAVAimg
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      {/* Hero/About Section */}
      <section 
        id="home" 
        className="min-h-screen pt-24 pb-16 px-6 md:px-[7%] flex items-center bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
            
            {/* Profile Image */}
            <div
              className={`w-full md:w-[500px] transition-all duration-1000 ${
                isVisible.home ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-700 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={profile}
                    className="w-full h-auto object-cover"
                    alt="Favian Rafi Pratama"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div
              className={`flex-1 max-w-2xl transition-all duration-1000 delay-200 ${
                isVisible.home ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h4 className="text-xl md:text-2xl font-medium text-red-600 mb-2">
                Hi, I'm
              </h4>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent typing">
                Favian Rafi Pratama
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-slate-400 mb-8">
                I am a <span className="text-red-600 font-semibold">Front End Web Developer</span>, <span className="text-red-600 font-semibold">Cyber Enthusiast</span>, and want to become a <span className="text-red-600 font-semibold">Fullstack Web Developer</span>.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-red-700 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-red-700/50 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className="min-h-screen py-20 px-6 md:px-[7%] bg-slate-900"
      >
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-red-600">Skills</span>
            </h2>
            <p className="text-slate-400 text-lg">Some Technologies I work with</p>
          </div>

          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-1000 ${
                  isVisible.skills 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible.skills ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100 + 300}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="min-h-screen py-20 px-6 md:px-[7%] bg-slate-950"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-red-600">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg">Some things I've built</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-700/20 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible.projects 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-red-700/20 to-red-600/20 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-red-700/10 text-red-500 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="min-h-screen py-20 px-6 md:px-[7%] bg-slate-900 flex items-center"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible.contact ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-red-600">Touch</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. 
              Feel free to reach out if you want to work together!
            </p>

            <a
              href="mailto:favianrp@example.com"
              className="inline-flex items-center gap-3 bg-red-700 hover:bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-red-700/50 transition-all duration-300 hover:scale-105 mb-12"
            >
              <Mail size={24} />
              Send Me an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 px-6 border-t border-slate-800 bg-slate-950">
        <p className="font-bold text-xl mb-6">
          Let's connect on social media
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            className="text-slate-400 hover:text-red-600 transition-all duration-300 hover:scale-110"
            href="https://instagram.com/favianskii_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </a>

          <a
            className="text-slate-400 hover:text-red-600 transition-all duration-300 hover:scale-110"
            href="https://github.com/FavianRP"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>

          <a
            className="text-slate-400 hover:text-red-600 transition-all duration-300 hover:scale-110"
            href="www.linkedin.com/in/favianrafipratama"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
        </div>

        <p className="text-slate-500 text-sm">
          © 2024 Favian Rafi Pratama. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
