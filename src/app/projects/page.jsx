import { ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";

export default function ProjectsPage() {
    const projects = [
    {
      title: "chatbot-gunadarma",
      description: "This project was created as part of a Data Science – Natural Language Processing assignment based on a chatbot. This chatbot is designed to answer questions related to Universitas Gunadarma.",
      category: "Project",
      url: "https://github.com/FavianRP/chatbot-gunadarma" 
    },
    {
      title: "Passwd Checker",
      description: "A tool to check how strong your password is.",
      category: "Project",
      url: "https://github.com/FavianRP/passwd-checker" 
    },
    {
      title: "InfoKelas",
      description: "A web application that I built to solve problems in my classroom.",
      category: "Project",
      url: "https://github.com/FavianRP/InfoKelas"
    },
    {
      title: "LandingPage CARKAS",
      description: "A landing page designed for selling used or second-hand cars.",
      category: "Project",
      url: "https://favianrp.github.io/carkas.github.io/"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-poppins">
      <div className="max-w-4xl mx-auto animate-fade-down">
        <h1 className="text-5xl font-bold mb-2">Projects</h1>
        <p className="text-gray-400 mb-10">
          View the projects I’ve built throughout my journey in the tech world.
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
