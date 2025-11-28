import { ArrowRight } from "lucide-react";

export default function WriteupsPage() {
  const writeups = [
    {
      title: "PatriotCTF 2025",
      description: "Writeup CTF yang telah saya kerjakan dari event di CTFtime.",
      url: "#",
    },
    {
      title: "Perjalanan Menuju OSCP",
      description:
        "Pengalaman saya meraih sertifikasi OSCP. Sebuah perjalanan yang seru dan penuh tantangan.",
      url: "#",
    },
    {
      title: "Hackfest0x08",
      description:
        "WriteUp CTF dari event CTF open recruitment Cyber Community Universitas Gunadarma (CCUG).",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-poppins">
      <div className="max-w-4xl mx-auto animate-fade-down">
        <h1 className="text-5xl font-bold mb-2">Writeups</h1>
        <p className="text-gray-400 mb-10">
          Bagaimana cara saya memecahkan solusi Cyber Security, biasanya dari Lab atau
          kasus nyata.
        </p>

        <div className="space-y-4">
          {writeups.map((item, index) => (
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

        <footer className="mt-20 py-8 border-t border-gray-800 text-sm text-gray-500">
          © 2025 • FavianRP
        </footer>
      </div>
    </div>
  );
}
