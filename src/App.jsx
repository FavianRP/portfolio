import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./app/portfolio/page.jsx";
import WriteupsPage from "./app/writeups/page.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} /> 
      <Route path="/writeups" element={<WriteupsPage />} />
    </Routes>
  );
}
