import { useEffect, useState } from "react";
import { IoLogoGithub } from "react-icons/io5";


const PortfolioProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="lg:mx-12 mx-4 my-32 bg-bgShade p-4">
      <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 md:items-center">
        <div className="text-blue-900 ">
          <p className="text-xl font-semibold mb-5">Portfolio </p>
          <h2 className="md:text-5xl text-4xl font-bold mb-5">
            My Recent Projects
          </h2>
        </div>

        <button className="px-8 py-5">
          <a href="#" className="gap-2 items-center flex btn-primary">
            My Github <IoLogoGithub className="w-6 h-6"></IoLogoGithub>
          </a>
        </button>
      </div>

      {/* project card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="shadow-xl rounded-lg cursor-pointer hover:scale-90 transition-all duration-300"
          >
            <img src={project.image} alt="" />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2 text-headingColor">
                {" "}
                {project.name}{" "}
              </h3>
              <p className="text-body"> {project.description} </p>
              <div className="flex gap-4 justify-around  font-semibold">
                <a
                  className="underline underline-offset-8  hover:text-primary"
                  href="/"
                >
                  View In Dribble{" "}
                  <img
                    src="/src/assets/arrow.png"
                    alt=""
                    className="w-3 inline-block ml-3 "
                  />
                </a>{" "}
                <br />
                <a
                  className="underline underline-offset-8 hover:text-primary"
                  href="/"
                >
                  Live Link{" "}
                  <img
                    src="/src/assets/arrow.png"
                    alt=""
                    className="w-3 inline-block ml-3"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioProjects;
