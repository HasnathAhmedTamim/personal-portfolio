import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TechSkills from "./components/TechSkills";

function App() {
  return (
    <>
      {/* <h1 className="font-roboto text-5xl font-bold text-start text-primary">
        Hasnath Ahmed says hello
      </h1> */}
      <Navbar></Navbar>
      <Home></Home>
      <TechSkills></TechSkills>
      <About></About>
    </>
  );
}

export default App;
