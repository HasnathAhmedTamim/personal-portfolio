import {
  FaFacebookF,
  FaGithub,
  
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-bgShade py-28 md:px-12 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
        <a href="#" className="h-10">
          <button className="px-4 py-2 font-extrabold hover:bg-slate-100 text-xl text-blue-900">
            {" "}
            Hasnath Ahmed
          </button>
        </a>
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-wrap">
          <Link
            to="home"
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-100}
          >
            <a
              href="#"
              className="block text-primary hover:text-gray-400 py-2 px-4"
            >
              Home
            </a>
          </Link>

          <Link
            to="projects"
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-100}
          >
            <a href="#" className="block hover:text-gray-400 py-2 px-4">
              Portfolio
            </a>
          </Link>
          <Link
            to="about"
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-100}
          >
            <a href="#" className="block  hover:text-gray-400 py-2 px-4">
              About me
            </a>
          </Link>
          <Link
            to="testimonials"
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-100}
          >
            <a href="#" className="block  hover:text-gray-400 py-2 px-4">
              Testimonials
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-4 ml-4">
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
      <hr />
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-8">
        <div className="space-x-6">
          <a href="/" className="hover:text-slate-400">
            Privacy Policy
          </a>
          <a href="/" className="hover:text-slate-400">
            Terms of Service
          </a>
          <a href="/" className="hover:text-slate-400">
            Cookies Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
