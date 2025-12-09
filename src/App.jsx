import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./app/portfolio/page.jsx";
import WriteupsPage from "./app/writeups/page.jsx";
import ProjectsPage from "./app/projects/page.jsx";

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/writeups" element={<WriteupsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
