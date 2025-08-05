import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PortfolioProjects from "./components/PortfolioProjects";
import TechSkills from "./components/TechSkills";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="dark bg-bg-primary min-h-screen text-text-primary font-sans">
      <Navbar />
      <Home />
      <TechSkills />
      <About />
      <PortfolioProjects />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
