import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaEye } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import heroPhoto from "../assets/photograph.jpg";

const resumeViewUrl =
  "https://drive.google.com/file/d/1VkHVZnFERZsfu9xPQLwBniRTFycPM6CN/view?usp=sharing";
const resumeDownloadUrl =
  "https://drive.google.com/uc?export=download&id=1VkHVZnFERZsfu9xPQLwBniRTFycPM6CN";

const Home = () => {
  return (
    <section className="relative mt-20 overflow-hidden text-balance" id="home">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-bg-primary" />
      <div className="absolute left-0 top-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="lg:mx-12 mx-4 grid grid-cols-1 gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="w-full max-w-4xl order-2 mx-auto text-center animate-fade-in-left lg:order-1 lg:mx-0 lg:text-left">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Junior Software Engineer
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-200">
              React.js · Next.js · Node.js · MongoDB
            </span>
          </div>

          <h3 className="mb-5 animate-slide-up text-xl font-semibold text-gray-200">
            👋 Hey! I am Hasnath Ahmed Tamim
          </h3>

          <h1 className="mb-5 animate-slide-up-delay-1 text-4xl font-bold leading-snug text-gray-100 md:text-6xl md:leading-[76px]">
            I am a{" "}
            <span className="text-secondary animate-pulse">
              Junior Software Engineer
            </span>{" "}
            and{" "}
            <span className="text-primary animate-pulse">
              Full Stack Developer
            </span>{" "}
            focused on scalable web products
          </h1>

          <p className="animate-slide-up-delay-2 text-lg leading-8 text-gray-300 md:text-xl md:leading-9">
            Junior Software Engineer building modern full-stack applications
            with React.js, Next.js, Node.js, TypeScript, and MongoDB. I enjoy
            designing clean, reliable products, improving user experiences, and
            solving practical engineering problems. Outside programming, I like
            following sports, exploring UI details, and learning new tools.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 animate-slide-up-delay-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Focus</p>
              <p className="mt-2 text-sm font-semibold text-gray-100">Scalable full-stack apps</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Current Role</p>
              <p className="mt-2 text-sm font-semibold text-gray-100">Fiber@Home Ltd.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Build Style</p>
              <p className="mt-2 text-sm font-semibold text-gray-100">Fast, clean, responsive</p>
            </div>
          </div>

          <div className="mb-6 mt-8 flex flex-wrap justify-center gap-4 animate-slide-up-delay-3 lg:justify-start">
            <a
              href="mailto:hasnath.tamim333@gmail.com?subject=Let's Work Together&body=Hi Hasnath,%0D%0A%0D%0AI would like to discuss a project opportunity with you."
              className="btn-secondary flex items-center gap-2 text-white transition-colors duration-300 hover:bg-gray-300"
            >
              <FaEnvelope className="w-4 h-4" />
              Get In Touch
            </a>
            <a
              href={resumeViewUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary flex items-center gap-2 text-white transition-colors duration-300 hover:bg-gray-300"
            >
              <FaEye className="w-4 h-4" />
              View Resume
            </a>
            <a
              href={resumeDownloadUrl}
              download
              className="btn-secondary flex items-center gap-2 text-white transition-colors duration-300 hover:bg-gray-300"
            >
              <HiDownload className="w-5 h-5 " />
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up-delay-4 lg:justify-start">
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

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end animate-fade-in-right">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm" />
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] border border-white/10 bg-white/5" />
            <img
              src={heroPhoto}
              alt="Hasnath Ahmed Tamim"
              className="relative z-10 w-full max-h-[540px] rounded-[2rem] border border-white/10 object-cover shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 z-20 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-xl backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.28em] text-primary">Available for</p>
              <p className="mt-1 text-sm font-semibold text-white">Web development projects & collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
