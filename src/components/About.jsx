import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaDownload,
  FaHandshake,
  FaEye,
} from "react-icons/fa";

const resumeViewUrl =
  "https://drive.google.com/file/d/1r_Ke-2wmxo3O-nGkdhmx-woqUvYiS-Co/view?usp=sharing";

const resumeDownloadUrl =
  "https://drive.google.com/uc?export=download&id=1r_Ke-2wmxo3O-nGkdhmx-woqUvYiS-Co";

const About = () => {
  return (
    <div className="section-shell" id="about">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-full max-w-5xl">
          {/* <p className="text-xl font-semibold mb-5 text-primary text-center">About Me</p> */}
          <h2 className="md:text-3xl text-4xl font-bold mb-5 text-text-primary text-center">
            About Me
          </h2>
          <p className="mt-8 md:p-2 p-6  text-justify leading-relaxed text-sm">
            I&apos;m a Junior Software Engineer with hands-on experience building
            modern full-stack web applications using React.js, Next.js,
            Node.js, TypeScript, and MongoDB. I completed my Bachelor of Science
            in Computer Science and Engineering from East West University and
            am currently pursuing my Professional Masters in Information
            Technology at Jahangirnagar University. I also work on responsive
            frontend, backend, and Android features at
            <span className="font-semibold text-primary"> Fiber@Home</span>.
          </p>

          <p className="mt-8 md:p-2 p-6  text-justify leading-relaxed text-sm">
            My work focuses on responsive frontend development, REST API
            integration, authentication flows, database design, and maintainable
            application architecture. I have built full-stack applications for
            live bidding, task tracking, bookstore management, portfolio
            showcase, and sports prediction workflows. I care about writing
            clean, usable software that feels reliable to the end user.
          </p>

          <p className="mt-8 md:p-2 p-6 text-justify leading-relaxed text-sm">
            Outside of coding, I enjoy following football, watching great UI
            / UX work, and learning how small details make digital products feel
            more human. I like work that is thoughtful, useful, and visually
            clean. I usually bring a calm, curious, and practical mindset to the
            projects I work on.
          </p>

          {/* Education & Experience */}
          <div className="mb-8 p-8">
            <h3 className="text-lg font-semibold mb-3 text-text-primary flex items-center gap-2">
              <FaGraduationCap className="text-primary" />
              Education & Experience
            </h3>
            <div className="space-y-4 text-sm">
              <div className="surface-card flex items-start gap-3 p-4">
                <FaBriefcase className="text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium text-text-primary">
                      Junior Software Engineer - Fiber@Home Ltd.
                    </p>
                    <span className="text-primary font-medium flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      Dec 2025 - Jun 2026
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    Developed responsive frontend and backend features using
                    Next.js, React.js, TypeScript, and Node.js while
                    contributing to Android development with Kotlin and Jetpack
                    Compose.
                  </p>
                </div>
              </div>
              <div className="surface-card flex items-start gap-3 p-4">
                <FaBriefcase className="text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium text-text-primary">
                      Intern Developer - Itransition Group
                    </p>
                    <span className="text-primary font-medium flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      Apr 2025 - Aug 2025
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    Built mini projects with React.js, solved JavaScript tasks,
                    and gained experience in frontend, backend, database design,
                    and API integration.
                  </p>
                </div>
              </div>
              <div className="surface-card flex items-start gap-3 p-4">
                <FaGraduationCap className="text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium text-text-primary">
                      BSc in Computer Science & Engineering - East West University
                    </p>
                    <span className="text-primary font-medium flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      Jan 2019 - Dec 2023
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    Specialization in Web Application, thesis on automated toll
                    collection and stolen vehicle detection.
                  </p>
                  <p className="text-text-secondary mt-1">CGPA: 3.23/4.00</p>
                </div>
              </div>
              <div className="surface-card flex items-start gap-3 p-4">
                <FaGraduationCap className="text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium text-text-primary">
                      Professional Masters in Information Technology - Jahangirnagar University
                    </p>
                    <span className="text-primary font-medium flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      May 2024 - Present
                    </span>
                  </div>
                  <p className="text-text-secondary">CGPA: 3.94</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-6 justify-center">
            <a
              href="https://www.linkedin.com/in/hasnath-ahmed-tamim/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-secondary hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                <FaHandshake />
                Hire Me
              </button>
            </a>
            <a
              href={resumeViewUrl}
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-secondary hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                <FaEye />
                View Resume
              </button>
            </a>
            <a
              href={resumeDownloadUrl}
              download
            >
              <button className="btn-secondary hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                <FaDownload />
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
