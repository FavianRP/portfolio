import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Github, Linkedin, Instagram, Mail } from "lucide-react";
import WriteupsPage from "../writeups/page.jsx";
import { Link } from "react-router-dom";

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
      description: "Sebuah landingpage yang berguna untuk berjualan mobil second atau bekas,",
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
      description: "WriteUp CTF dari event CTF open recruitmet Cyber Community Universitas Gunadarma (CCUG)",
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
          <div className="font-poppins flex items-center gap-3">
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
            {["Blog", "Notes", "Writeups"].map((item) => (
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
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-6">
            Hii, saya Favian Rafi Pratama 👋
          </h1>
          <p className="font-poppins text-xl text-gray-400 mb-4 leading-relaxed">
            Saya seorang <span className="text-white italic">Mahasiswa Informatika</span> yang di siang hari menjadi <span className="text-white font-semibold">Web Developer</span>, dan di malam hari menjadi 
            <span className="text-cyan-400 font-semibold"> Cyber Security Enthusiast.</span>
          </p>
          <p className="font-poppins text-xl text-gray-400 mb-4 leading-relaxed">
            Di situs ini, kalian dapat melihat beberapa Project dan WriteUp CTF yang telah saya kerjakan! Yuk kenal lebih dalam tentang saya.
          </p>
          <p className="font-poppins text-xl text-gray-400 leading-relaxed">
            Kadang main CTF di weekend, Kadang juga suka main valorant dan cs kok kalo lagi gabut, hehe. 😅
          </p>
        </div>
      </section>

      {/* Recent Project Section */}
      <section id="projects" className="py-20 px-6 animate-fade-down">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-poppins text-3xl font-bold">Project Saya</h2>
            <button className="font-poppins text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
              Lihat Semua Project yang telah saya buat
              <ArrowRight size={20} />
            </button>
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
            <a
              href="https://github.com/FavianRP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span>GitHub</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="https://www.linkedin.com/in/favianrafipratama"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span>LinkedIn</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="mailto:favfianrafi@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="underline">email me</span> at FavianRP
            </a>
          </div>

          {/* Social Icons */}
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
      <footer className="py-8 px-6 border-t border-gray-800 animate-fade-up">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 • FavianRP</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg border border-gray-800 hover:bg-gray-800 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            <button
              className="group px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded-lg transition-all flex items-center gap-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="transform transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
              <span className="transition-colors group-hover:text-white">Ke atas</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}