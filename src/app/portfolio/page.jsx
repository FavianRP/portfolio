import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../../components/Footer";

const base = import.meta.env.BASE_URL;

const educationData = [
  {
    icon: `${base}logo-ccug.png`,
    name: "CCUG – Cyber Community Universitas Gunadarma",
    type: "Organization",
    sub: "Core Team",
    year: "2025 – Present",
    tags: ["Hackfest0x08", "GEMASTIK 2025", "PatriotCTF 2025", "Capture The Flag", "Web Hacking", "Forensics", "OSINT"],
  },
  {
    icon: `${base}logo-gunadarma.png`,
    name: "Universitas Gunadarma",
    type: "Education",
    sub: "S1 Informatics",
    year: "2024 – Present",
    tags: ["Lembaga Pengembangan Komputerisasi", "Cyber Community Universitas Gunadarma", "Gunadarma Esports", "Data Science – NLP", "Algoritma & Pemrograman", "Rekayasa Perangkat Lunak", "Jaringan Komputer", "Sistem Operasi"],
  },
  {
    icon: "💻",
    name: "Web Developer",
    type: "Experience",
    sub: "Freelance",
    year: "2024 – Present",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Go", "Python", "MySQL"],
  },
  {
    icon: `${base}logo-pesat.png`,
    name: "SMA PLUS PGRI Cibinong",
    type: "Education",
    sub: "IPA",
    year: "2021 – 2024",
    tags: ["IPA", "Web Design"],
  },
];

function EduCard({ icon, name, type, sub, year, tags }) {
  const [hovered, setHovered] = useState(false);
  const repeated = [...tags, ...tags];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-lg border transition-all overflow-hidden ${
        hovered ? "border-gray-600 bg-gray-900/30" : "border-gray-800"
      }`}
    >
      {/* Cover row */}
      <div className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
        <div className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img
            src={icon}
            alt={name}
            className="w-8 h-8 object-contain"
          />
        </div>
          <div>
            <div className="font-semibold text-white text-lg">{name}</div>
            <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-2">
              <span className="inline-block px-2 py-0.5 bg-gray-800 rounded-full text-gray-400">
                {type}
              </span>
              {sub}
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 flex-shrink-0">{year}</div>
      </div>

      {/* Running text strip — visible on hover */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          hovered ? "max-h-12 border-t border-gray-800" : "max-h-0"
        }`}
      >
        <div className="flex overflow-hidden py-3">
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: hovered ? "marquee 18s linear infinite" : "none",
            }}
          >
            {repeated.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center px-5 text-sm text-gray-400"
              >
                {tag}
                {i < repeated.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-700 ml-4 flex-shrink-0" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "writeups", "education", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const posts = [
    {
      title: "chatbot-gunadarma",
      description:
        "This project was created as part of a Data Science – Natural Language Processing assignment based on a chatbot. This chatbot is designed to answer questions related to Universitas Gunadarma.",
      category: "Project",
      url: "https://github.com/FavianRP/chatbot-gunadarma",
    },
    {
      title: "Passwd Checker",
      description: "A tool to check how strong your password is.",
      category: "Project",
      url: "https://github.com/FavianRP/passwd-checker",
    },
    {
      title: "InfoKelas",
      description:
        "A web application that I built to solve problems in my classroom.",
      category: "Project",
      url: "https://github.com/FavianRP/InfoKelas",
    },
  ];

  const writeup = [
    {
      title: "PatriotCTF 2025",
      description:
        "CTF write-ups I've completed from Capture The Flag events listed on CTFtime.",
      category: "WriteUp",
      url: "https://hackmd.io/@dre4mer/patriotctf",
    },
    {
      title: "Hackfest0x08",
      description:
        "CTF write-ups from the Cyber Community Universitas Gunadarma (CCUG) open recruitment event.",
      category: "WriteUp",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Marquee keyframe injected globally */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="font-poppins fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 animate-fade-down">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black text-xl">👤</span>
            </div>
            <div>
              <div className="font-bold text-lg animate-fade-down">FavianRP</div>
              <div className="text-xs text-gray-400 animate-fade-down">
                Web Developer & Cyber Security Enthusiast
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Projects", "Writeups", "Education", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            {["Projects", "Writeups", "Education", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-6 py-3 hover:bg-gray-900 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 animate-fade-down">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span style={{ color: "#8a9ba7ff", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "Favian Rafi Pratama 👋",
                  "Cyber Security Enthusiast",
                  "Web Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-4 leading-relaxed">
            I am an{" "}
            <span className="text-white italic">Informatics Student</span> who
            works as a{" "}
            <span className="text-cyan-400 font-semibold">Web Developer</span>{" "}
            during the day, and a{" "}
            <span className="text-gray-200 font-semibold">
              {" "}
              Cyber Security Enthusiast
            </span>{" "}
            at night.
          </p>
          <p className="text-xl text-gray-400 mb-4 leading-relaxed">
            On this site, you can explore some of the projects and CTF
            write-ups I've worked on. Feel free to get to know me better!
          </p>
        </div>
      </section>

      {/* Recent Project Section */}
      <section id="projects" className="py-20 px-6 animate-fade-down">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">My Projects</h2>
            <Link
              to="/projects"
              className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
            >
              View All the Projects I've Created
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="space-y-4">
            {posts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="p-6 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-900/30 transition-all cursor-pointer">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                    <ArrowRight
                      className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                      size={20}
                    />
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-xs bg-gray-800 rounded-full text-gray-300">
                      {post.category}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Writeup Posts Section */}
      <section id="writeups" className="py-20 px-6 animate-fade-down">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">WriteUp CTF</h2>
            <Link
              to="/writeups"
              className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
            >
              View All the CTF Write-Ups I've Completed
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="space-y-4">
            {writeup.map((writeups, index) => (
              <a
                key={index}
                href={writeups.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="p-6 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-900/30 transition-all cursor-pointer">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        {writeups.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {writeups.description}
                      </p>
                    </div>
                    <ArrowRight
                      className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                      size={20}
                    />
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-xs bg-gray-800 rounded-full text-gray-300">
                      {writeups.category}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Education & Experience Section ───── */}
      <section id="education" className="py-20 px-6 animate-fade-down">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Education & Experience</h2>
          <div className="space-y-4">
            {educationData.map((item, i) => (
              <EduCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gray-900/30 animate-fade-down"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-8">
            If you'd like to get in touch with me, you can find me on social
            media or reach me via email.
          </p>

          <div className="flex items-center gap-6 mb-8">
            <a
              href="https://github.com/FavianRP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="https://www.linkedin.com/in/favianrafipratama"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="mailto:favfianrafi@gmail.com"
              className="text-gray-400 hover:text-white underline"
            >
              Email Me
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/favianrafipratama"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/favianskii_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://github.com/FavianRP"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:favfianrafi@gmail.com"
              className="p-3 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}