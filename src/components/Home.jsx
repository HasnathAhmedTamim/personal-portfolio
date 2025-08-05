import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Home = () => {
  return (
    <div className="mt-20 bg-gray-800 text-balance" id="home">
      <div className="lg:mx-12 mx-4 flex flex-col justify-center py-24 gap-5 items-center">
        <div className="w-full max-w-4xl text-center animate-fade-in-left">
          <h3 className="text-xl text-gray-200 font-semibold mb-5 animate-slide-up">
            👋 Hey! I am Hasnath Ahmed Tamim
          </h3>
          <h1 className="md:text-6xl text-4xl font-bold text-gray-100 leading-snug md:leading-[76px] mb-5 animate-slide-up-delay-1">
            I am a{" "}
            <span className="text-primary animate-pulse">
              Full Stack Developer
            </span>{" "}
            and
            <span className="text-secondary animate-pulse">
              {" "}
              Problem Solver
            </span>
          </h1>
          <p className="text-gray-300 text-xl leading-9 mb-7 animate-slide-up-delay-2 ">
            Full Stack Developer with expertise in React.js, Node.js, and modern
            web technologies. Experienced in building scalable applications from
            real-time chat systems to e-commerce platforms. Currently pursuing
            Professional Masters in IT while contributing to innovative software
            solutions. Let&apos;s build something amazing together!
          </p>
          <div className="flex flex-wrap gap-4 mb-6 animate-slide-up-delay-3 item-center  justify-center">
            <a
              href="mailto:hasnath.tamim@gmail.com?subject=Let's Work Together&body=Hi Hasnath,%0D%0A%0D%0AI would like to discuss a project opportunity with you."
              className="btn-secondary flex text-white items-center gap-2 hover:bg-gray-300 transition-colors duration-300"
            >
              <FaEnvelope className="w-4 h-4" />
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1epkD9Cnnq0mWAOfkxuKc40a0Hd_Ry31O/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary flex text-white items-center gap-2 hover:bg-gray-300 transition-colors duration-300"
            >
              <HiDownload className="w-5 h-5 " />
              Download CV
            </a>
          </div>
          <div className="flex items-center gap-4 animate-slide-up-delay-4 item-center justify-center">
            <span className="text-gray-200 font-medium">Follow me:</span>
            <a
              href="https://www.linkedin.com/in/hasnath-ahmed-tamim/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-2xl hover:text-primary text-gray-200" />
            </a>
            <a
              href="https://www.facebook.com/HasnathAhmedTamim/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Profile"
            >
              <FaFacebookF className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-2xl hover:text-primary text-gray-300" />
            </a>
            <a
              href="https://twitter.com/the_soldierboy"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter Profile"
            >
              <FaTwitter className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-2xl hover:text-primary text-gray-300" />
            </a>
            <a
              href="https://github.com/HasnathAhmedTamim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-2xl hover:text-primary text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
