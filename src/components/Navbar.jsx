import { useEffect } from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
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
    <header className="w-full fixed top-0 left-0 right-0 items-center justify-between">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-slate-100" : ""
        }`}
      >
        {/* for lg */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className=" cursor-pointer">
            <a href="#" className="h-10">
              <button className="px-4 py-2 font-extrabold hover:bg-slate-100 text-xl text-blue-900">
                {" "}
                Hasnath Ahmed
              </button>
            </a>
          </div>
          {/* menu item */}
          <div className="lg:flex item-center gap-3 hidden text-body font-semibold">
            <Link
              to="home"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block cursor-pointer outlineBtn "
            >
              Home
            </Link>
            <Link
              to="techskills"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block cursor-pointer outlineBtn "
            >
              Tech Skills
            </Link>
            <Link
              to="about"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block cursor-pointer outlineBtn "
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
            <Link
              to="testimonials"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block cursor-pointer outlineBtn"
            >
              Testimonials
            </Link>
          </div>
          {/* contact */}
          <div className=" lg:block hidden">
            <Link
              to="contact"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
            >
              <button className="px-4 py-3 bg-primary text-white text-xl rounded-md hover:bg-body transition-all duration-300 hover:translate-y-5">
                Contact Me
              </button>
            </Link>
          </div>

          {/* menu btn for mobile */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-2xl">
            <IoMenu></IoMenu>
          </button>
        </div>
        {/* menu item */}
        {isMenuOpen && (
          <div className="mt-4 bg-white rounded-lg text-body p-4">
            <a href="/home" className="block cursor-pointer outlineBtn2 ">
              Home
            </a>
            <a href="/techskills" className="block cursor-pointer outlineBtn2 ">
              Tech Skills
            </a>
            <a href="/about" className="block cursor-pointer outlineBtn2 ">
              About Me
            </a>
            <a href="/projects" className="block cursor-pointer outlineBtn2">
              Projects
            </a>
            <a
              href="/testimonials"
              className="block cursor-pointer outlineBtn2"
            >
              Testimonials
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
