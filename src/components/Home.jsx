import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import bannerImg from "../assets/tamim2.png";

const Home = () => {
  return (
    <div className="mt-20 bg-bgShade text-balance" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse justify-between  py-24 gap-5 items-center">
        <div className="md:w-1/2 w-full">
          <img className="w-full" src={bannerImg} alt="" />
        </div>
        <div className="w-1/2">
          <h3 className="text-xl text-headingColor font-semibold mb-5">
            Hey! I am Hasnath Ahmed Tamim
          </h3>
          <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-snug md:leading-snug-[76px] mb-5">
            I am a <span className="text-primary">Web Developer</span> and also
            a <span className="text-primary">Programer</span>{" "}
          </h1>
          <p className="text-body text-xl leading-9 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            velit explicabo minima quam totam quod sit commodi ipsa. Quia itaque
            quibusdam soluta rerum in eaque pariatur provident incidunt
            molestias distinctio?
          </p>
          <button className="btn-primary">Get In Touch</button>
          <div className="flex items-center py-6 gap-4 ml-4">
            <a
              href="https://www.linkedin.com/in/hasnath-ahmed-tamim/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
            </a>
            <a
              href="https://www.facebook.com/HasnathAhmedTamim/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
            </a>
            <a
              href="https://twitter.com/the_soldierboy"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
            </a>
            <a
              href="https://github.com/HasnathAhmedTamim"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
