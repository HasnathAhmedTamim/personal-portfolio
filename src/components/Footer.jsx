import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-bg-secondary text-text-secondary py-16 md:px-12 px-4 border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Hasnath Ahmed Tamim
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative web
              solutions. Experienced in React.js, Node.js, and modern web
              technologies. Let&apos;s build something amazing together!
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/hasnath-ahmed-tamim/"
                target="_blank"
                rel="noreferrer"
                className="bg-primary/20 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/HasnathAhmedTamim"
                target="_blank"
                rel="noreferrer"
                className="bg-primary/20 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/HasnathAhmedTamim/"
                target="_blank"
                rel="noreferrer"
                className="bg-primary/20 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook Profile"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/the_soldierboy"
                target="_blank"
                rel="noreferrer"
                className="bg-primary/20 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                to="home"
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-100}
                className="block text-text-secondary hover:text-primary cursor-pointer transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-100}
                className="block text-text-secondary hover:text-primary cursor-pointer transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="projects"
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-100}
                className="block text-text-secondary hover:text-primary cursor-pointer transition-colors duration-300"
              >
                Explore Projects
              </Link>
              <Link
                to="techskills"
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-100}
                className="block text-text-secondary hover:text-primary cursor-pointer transition-colors duration-300"
              >
                TechSkills
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaPhone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+8801756401520"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  +880 1756401520
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-4 h-4 text-primary" />
                <a
                  href="mailto:hasnath.tamim@gmail.com"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  hasnath.tamim@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-primary mt-1" />
                <span className="text-text-secondary">
                  13/27B Khilgaon Shipahibag
                  <br />
                  Dhaka-1214, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Research */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary">
                Education
              </h4>
              <div className="space-y-2 text-sm text-text-secondary">
                <p>
                  <span className="font-medium">
                    BSc in Computer Science & Engineering
                  </span>{" "}
                  - East West University (CGPA: 3.23/4.00)
                </p>
                <p>
                  <span className="font-medium">
                    Professional Masters in IT
                  </span>{" "}
                  - Jahangirnagar University (Ongoing)
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary">
                Research
              </h4>
              <div className="text-sm text-text-secondary">
                <p className="font-medium mb-1">ICO2023 Published Research:</p>
                <p>
                  &quot;Effective Fault Prediction Techniques for Green Cloud
                  Computing Environments Using Machine Learning&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} Hasnath Ahmed Tamim. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-tertiary">
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
