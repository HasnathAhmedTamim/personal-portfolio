import { useEffect } from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import profileAvatar from "../assets/profile3.png";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //toggle menu btn
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //function for making navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 items-center justify-between z-50">
      <nav
        className={`py-6 md:px-12 px-4 bg-bg-secondary border-b border-gray-700 ${
          isSticky ? "sticky top-0 right-0 left-0 bg-gray-700 shadow-lg" : ""
        }`}
      >
        {/* for lg */}
        <div className="flex items-center justify-between">
          {/* logo with avatar */}
          <div className="cursor-pointer flex items-center gap-3">
            <img
              src={profileAvatar}
              alt="Hasnath Ahmed Tamim"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary shadow-md hover:scale-110 transition-transform duration-300"
            />
            <a href="#" className="h-10 flex items-center">
              <button className="px-4 py-2 font-extrabold hover:bg-bg-tertiary rounded-md text-xl text-text-primary">
                Hasnath Ahmed Tamim
              </button>
            </a>
          </div>
          {/* menu item */}
          <div className="lg:flex item-center gap-3 hidden  font-semibold">
            <Link
              to="home"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block cursor-pointer outlineBtn"
            >
              Home
            </Link>
            <Link
              to="techskills"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block cursor-pointer outlineBtn"
            >
              Tech Skills
            </Link>
            <Link
              to="about"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block cursor-pointer outlineBtn"
            >
              About Me
            </Link>
            <Link
              to="projects"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block cursor-pointer outlineBtn"
            >
              Projects
            </Link>
          </div>
          {/* social links */}
          <div className="lg:flex item-center gap-4 hidden">
            <a
              href="https://github.com/HasnathAhmedTamim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hasnath-ahmed-tamim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/HasnathAhmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://facebook.com/hasnath.ahmed.tamim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1"
            >
              <FaFacebookF size={20} />
            </a>
          </div>

          {/* menu btn for mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-text-secondary text-2xl hover:text-primary transition-colors"
          >
            <IoMenu></IoMenu>
          </button>
        </div>
        {/* menu item */}
        {isMenuOpen && (
          <div className="mt-4 bg-bg-tertiary rounded-lg text-text-primary p-4 border border-gray-600">
            <a
              href="/home"
              className="block cursor-pointer outlineBtn2 text-text-primary hover:text-primary"
            >
              Home
            </a>
            <a
              href="/techskills"
              className="block cursor-pointer outlineBtn2 text-text-primary hover:text-primary"
            >
              Tech Skills
            </a>
            <a
              href="/about"
              className="block cursor-pointer outlineBtn2 text-text-primary hover:text-primary"
            >
              About Me
            </a>
            <a
              href="/projects"
              className="block cursor-pointer outlineBtn2 text-text-primary hover:text-primary"
            >
              Projects
            </a>
            <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-gray-600">
              <a
                href="https://github.com/HasnathAhmedTamim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hasnath-ahmed-tamim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/HasnathAhmed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://facebook.com/hasnath.ahmed.tamim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
