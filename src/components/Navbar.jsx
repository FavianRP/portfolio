import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";

export default function Navbar() {
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
          <span className="text-red-400">favianrp</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-red-400 transition-colors duration-200 text-lg relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA & Hamburger */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 bg-red-500 hover:bg-red-600 text-slate-900 px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-red
            -500/50 transition-all duration-300 hover:scale-105"
          >
            <Mail size={18} />
            Email Me
          </a>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-slate-300 hover:text-red-400 transition-colors p-2"
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
          className="absolute top-6 right-6 text-slate-300 hover:text-red-400 transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        {/* Mobile Logo */}
        <div className="px-6 pt-6 pb-8 border-b border-slate-800">
          <span className="text-2xl font-bold italic text-red-400">favianrp</span>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col mt-8 space-y-2 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-red-400 hover:bg-slate-800 px-4 py-3 rounded-lg transition-all duration-200 text-lg"
            >
              {link.name}
            </a>
          ))}
          
          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-slate-900 px-4 py-3 rounded-lg font-semibold shadow-lg mt-6 transition-all duration-300"
          >
            <Mail size={18} />
            Email Me
          </a>
        </div>
      </div>

      {/* Demo Content */}
      <div className="pt-20 min-h-screen bg-slate-950 text-white">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-red-400">Favian</span>
            </h1>
            <p className="text-xl text-slate-400">Web Developer & Cyber Security Enthusiast</p>
          </div>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center px-6">
            <h2 className="text-4xl font-bold mb-4 text-red-400">Skills</h2>
            <p className="text-slate-400">My technical expertise</p>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center bg-slate-950">
          <div className="text-center px-6">
            <h2 className="text-4xl font-bold mb-4 text-red-400">Projects</h2>
            <p className="text-slate-400">Things I've built</p>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center px-6">
            <h2 className="text-4xl font-bold mb-4 text-red-400">Contact</h2>
            <p className="text-slate-400">Let's work together</p>
          </div>
        </section>
      </div>
    </>
  );
}