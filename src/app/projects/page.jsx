import { ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";

export default function ProjectsPage() {
    const projects = [
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

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-poppins">
      <div className="max-w-4xl mx-auto animate-fade-down">
        <h1 className="text-5xl font-bold mb-2">Projects</h1>
        <p className="text-gray-400 mb-10">
          Lihat project yang saya sudah buat selama berada di dunia teknologi ini.
        </p>

        <div className="space-y-4">
          {projects.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="block group border border-gray-800 p-6 rounded-lg hover:border-gray-600 hover:bg-gray-900/30 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <ArrowRight
                  className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                  size={20}
                />
              </div>
            </a>
          ))}
        </div>

        <Footer/>
      </div>
    </div>
  );
}
