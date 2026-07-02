import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PortfolioProjects from "./components/PortfolioProjects";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import TechSkills from "./components/TechSkills";

const HomePage = () => (
  <>
    <Home />
    <TechSkills />
    <About />
    <PortfolioProjects />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="page-shell">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_24%),linear-gradient(to_bottom,rgba(15,23,42,0.98),rgba(3,7,18,1))]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
