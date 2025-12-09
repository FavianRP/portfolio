import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../../components/Footer";

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "writeups", "contact"];
      const current = sections.find(section => {
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
      description: "Projek ini dibuat untuk memenuhi tugas Sains Data – Natural Language Processing berbasis Chatbot. Chatbot ini melayani pertanyaan seputar Universitas Gunadarma.",
      category: "Project",
      url: "https://github.com/FavianRP/chatbot-gunadarma" 
    },
    {
      title: "Passwd Checker",
      description: "Sebuah tool untuk mengetahui seberapa kuat password kita.",
      category: "Project",
      url: "https://github.com/FavianRP/passwd-checker" 
    },
    {
      title: "InfoKelas",
      description: "Website App yang saya buat untuk menyelesaikan masalah yang ada di kelas.",
      category: "Project"
    },
    {
      title: "LandingPage CARKAS",
      description: "Sebuah landingpage yang berguna untuk berjualan mobil second atau bekas.",
      category: "Project",
      url: "https://favianrp.github.io/carkas.github.io/"
    }
  ];

  const writeup = [
    {
      title: "PatriotCTF 2025",
      description: "Writeup CTF yang telah saya kerjakan dari event di CTFtime",
      category: "WriteUp",
      url: "https://hackmd.io/@dre4mer/patriotctf"
    },
    {
      title: "Hackfest0x08",
      description: "WriteUp CTF dari event CTF open recruitment Cyber Community Universitas Gunadarma (CCUG)",
      category: "WriteUp"
    }
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
              <div className="text-xs text-gray-400 animate-fade-down">Web Developer & Cyber Security Enthusiast</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Projects", "Writeups", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
            {["Projects", "Writeups", "Contact"].map((item) => (
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
            Hii, saya{' '}
            <span style={{ color: '#8a9ba7ff', fontWeight: 'bold' }}>
              <Typewriter
                words={['Favian Rafi Pratama 👋', 'Cyber Security Enthusiast', 'Web Developer']}
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
            Saya seorang <span className="text-white italic">Mahasiswa Informatika</span> yang di siang hari menjadi <span className="text-cyan-400 font-semibold">Web Developer</span>, dan di malam hari menjadi 
            <span className="text-gray-200 font-semibold"> Cyber Security Enthusiast.</span>
          </p>
          <p className="text-xl text-gray-400 mb-4 leading-relaxed">
            Di situs ini, kalian dapat melihat beberapa Project dan WriteUp CTF yang telah saya kerjakan! Yuk kenal lebih dalam tentang saya.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed">
            Kadang main CTF di weekend, Kadang juga suka main valorant dan cs kok kalo lagi gabut, hehe. 😅
          </p>
        </div>
      </section>

      {/* Recent Project Section */}
      <section id="projects" className="py-20 px-6 animate-fade-down">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Project Saya</h2>
            <Link
              to="/projects"
              className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
            >
              Lihat Semua Project yang telah saya buat
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
              Lihat Semua Write-Up CTF yang telah saya mainkan
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

      {/* Connect Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/30 animate-fade-down">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-8">
            Jika kalian ingin menghubungi saya atau ingin hanya mengajak main <span className="italic">Valorant</span>, temukan saya di media sosial atau email saya.
          </p>
          
          <div className="flex items-center gap-6 mb-8">
            <a href="https://github.com/FavianRP" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">GitHub</a>
            <span className="text-gray-600">|</span>
            <a href="https://www.linkedin.com/in/favianrafipratama" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a>
            <span className="text-gray-600">|</span>
            <a href="mailto:favfianrafi@gmail.com" className="text-gray-400 hover:text-white underline">Email Me</a>
          </div>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/favianrafipratama" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/favianskii_" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all"><Instagram size={20} /></a>
            <a href="https://github.com/FavianRP" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all"><Github size={20} /></a>
            <a href="mailto:favfianrafi@gmail.com" className="p-3 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all"><Mail size={20} /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
