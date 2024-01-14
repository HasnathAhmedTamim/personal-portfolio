import { useEffect } from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
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
    <header className="w-full items-center justify-between">
      <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky?"sticky top-0 right-0 left-0 bg-white":""}`}>
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
            <a href="/" className="block cursor-pointer outlineBtn ">
              Home
            </a>
            <a href="/" className="block cursor-pointer outlineBtn ">
              Tech Skills
            </a>
            <a href="/" className="block cursor-pointer outlineBtn ">
              About Me
            </a>
            <a href="/" className="block cursor-pointer outlineBtn">
              Projects
            </a>
            <a href="/" className="block cursor-pointer outlineBtn">
              Testimonials
            </a>
          </div>
          {/* contact */}
          <div className=" lg:block hidden">
            <button className="px-2 py-2 bg-transparent border border-body text-primary rounded hover:bg-cyan-700 hover:text-white transition-all duration-300 font-semibold">
              Contact Me
            </button>
          </div>

          {/* menu btn for mobile */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-2xl">
            <IoMenu></IoMenu>
          </button>
        </div>
        {/* menu item */}
        {isMenuOpen && (
          <div className="mt-4 bg-white rounded-lg text-body p-4">
            <a href="/" className="block cursor-pointer outlineBtn2 ">
              Home
            </a>
            <a href="/" className="block cursor-pointer outlineBtn2 ">
              Tech Skills
            </a>
            <a href="/" className="block cursor-pointer outlineBtn2 ">
              About Me
            </a>
            <a href="/" className="block cursor-pointer outlineBtn2">
              Projects
            </a>
            <a href="/" className="block cursor-pointer outlineBtn2">
              Testimonials
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
