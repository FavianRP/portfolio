import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    // Jika saat ini bukan di halaman home
    if (location.pathname !== "/") {
      // Navigasi ke home, lalu scroll setelah render
      navigate("/", { replace: false });
      // Beri sedikit delay agar DOM render dulu
      setTimeout(() => {
        const homeSection = document.getElementById("home");
        if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      // Jika sudah di home, scroll ke atas
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-10 py-8 px-6 border-t border-gray-800 animate-fade-up">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-gray-400 text-sm">© 2025 • FavianRP</span>

        <button
          className="group px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded-lg transition-all flex items-center gap-2"
          onClick={goHome}
        >
          <span className="transform transition-transform duration-300 group-hover:-translate-y-1">↑</span>
          <span className="transition-colors group-hover:text-white">Ke home</span>
        </button>
      </div>
    </footer>
  );
}
