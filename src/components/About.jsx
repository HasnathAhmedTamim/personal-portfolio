import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCalendarAlt,
  FaDownload,
  FaHandshake
} from "react-icons/fa";

const About = () => {
  return (
    <div className="lg:mx-12 mx-4 my-32 bg-bg-secondary rounded-xl" id="about">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-full max-w-4xl">
          {/* <p className="text-xl font-semibold mb-5 text-primary text-center">About Me</p> */}
          <h2 className="md:text-5xl text-4xl font-bold mb-5 text-text-primary text-center">
            Full Stack Developer & Problem Solver
          </h2>
          <p className="mt-8 md:pr-8 mb-6 text-justify text-text-secondary leading-relaxed">
            I&apos;m a passionate Full Stack Developer with a BSc in Computer Science and Engineering from 
            East West University (CGPA 3.23/4.00) and currently pursuing a Professional Masters in IT 
            from Jahangirnagar University. With hands-on experience as an Intern Developer at 
            <span className="font-semibold text-primary"> Itransition Group</span>, I&apos;ve worked on 
            solving complex programming tasks and executing full software development lifecycles.
          </p>
          
          <p className="md:pr-8 mb-6 text-justify text-text-secondary leading-relaxed">
            My expertise spans modern web technologies including React.js, Node.js, MongoDB, and more. 
            I&apos;ve successfully developed real-time chat applications, user management systems, and 
            e-commerce solutions. I&apos;m also actively involved in research, having published a paper 
            on &quot;Effective Fault Prediction Techniques for Green Cloud Computing Environments using 
            Machine Learning&quot; at ICO2023.
          </p>

          {/* Education & Experience */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-text-primary flex items-center gap-2">
              <FaGraduationCap className="text-primary" />
              Education & Experience
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 p-4 bg-bg-tertiary rounded-lg shadow-sm border border-gray-700">
                <FaBriefcase className="text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium text-text-primary">Intern Developer - Itransition Group</p>
                    <span className="text-primary font-medium flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      Jul-Sep 2024
                    </span>
                  </div>
                  <p className="text-text-secondary">Software development lifecycle & programming tasks</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-bg-tertiary rounded-lg shadow-sm border border-gray-700">
                <FaGraduationCap className="text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium text-text-primary">BSc Computer Science - East West University</p>
                    <span className="text-primary font-medium flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      2019-2023
                    </span>
                  </div>
                  <p className="text-text-secondary">CGPA: 3.23/4.00</p>
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
              <button className="btn-primary hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2">
                <FaHandshake />
                Hire Me
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1KKocP4Ov8dk-tTmpELKFAWxMQpFpfHhT/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              download
            >
              <button className="btn-secondary hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                <FaDownload />
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
