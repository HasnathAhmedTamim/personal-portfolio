import { useEffect } from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import profileAvatar from "../assets/phg.png";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Tech Skills", id: "techskills" },
  { label: "About Me", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const closeMenu = () => {
    setMenuOpen(false);
  };

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

  const renderNavItem = (item, className) => {
    if (isHomePage) {
      return (
        <ScrollLink
          to={item.id}
          spy={true}
          activeClass="active"
          smooth={true}
          offset={-100}
          className={className}
          onClick={closeMenu}
        >
          {item.label}
        </ScrollLink>
      );
    }

    return (
      <a href={`/#${item.id}`} className={className} onClick={closeMenu}>
        {item.label}
      </a>
    );
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 items-center justify-between z-50">
      <nav
        className={`py-6 md:px-12 px-4 bg-bg-secondary border-b border-gray-700 ${
          isSticky ? "sticky top-0 right-0 left-0 bg-slate-800 shadow-lg" : ""
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
            <RouterLink to="/" className="h-10 flex items-center" onClick={closeMenu}>
              <span className="block cursor-pointer outlineBtn">
                Hasnath Ahmed Tamim
              </span>
            </RouterLink>
          </div>
          {/* menu item */}
          <div className="lg:flex item-center gap-3 hidden  font-semibold">
            {navItems.map((item) =>
              renderNavItem(item, "block cursor-pointer outlineBtn")
            )}
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
              href="https://x.com/the_soldierboy"
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
            {navItems.map((item) =>
              renderNavItem(
                item,
                "block cursor-pointer outlineBtn2 text-text-primary hover:text-primary"
              )
            )}
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
