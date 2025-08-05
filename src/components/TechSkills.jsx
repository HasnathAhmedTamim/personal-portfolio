
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGithub
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb,
  SiFirebase
} from "react-icons/si";
import { 
  BsPerson, 
  BsLightbulb, 
  BsPeople, 
  BsChatDots, 
  BsClock, 
  BsLightning 
} from "react-icons/bs";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-blue-500" },
      { name: "Next.js 14", icon: SiNextdotjs, color: "text-gray-200" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-200" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
      { name: "Git & GitHub", icon: FaGithub, color: "text-gray-200" }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Leadership", icon: BsPerson, color: "text-purple-500" },
      { name: "Problem Solving", icon: BsLightbulb, color: "text-pink-500" },
      { name: "Teamwork", icon: BsPeople, color: "text-indigo-500" },
      { name: "Communication", icon: BsChatDots, color: "text-blue-500" },
      { name: "Time Management", icon: BsClock, color: "text-green-500" },
      { name: "Adaptability", icon: BsLightning, color: "text-yellow-500" }
    ]
  }
];

const TechSkills = () => {
  return (
    <div className="lg:px-12 px-4 my-32 bg-bg-primary" id="techskills">
      <div className="mb-20 text-center">
       
        <h2 className="md:text-5xl text-4xl text-text-primary font-bold mb-5">
          Technical Expertise
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mx-auto">
          A comprehensive overview of my technical skills and professional competencies 
          gained through education, hands-on projects, and industry experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex}
            className="bg-bg-secondary rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center border-b border-gray-700 pb-4">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skillIndex}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-bg-tertiary transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent />
                    </div>
                    <span className="text-sm font-medium text-center text-text-primary group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Experience Highlight */}
      {/* <div className="mt-20 bg-gradient-to-r from-dark-surface to-dark-card rounded-xl p-8 text-center border border-dark-border">
        <h3 className="text-2xl font-bold text-dark-text mb-4">
          Professional Experience
        </h3>
        <p className="text-dark-textSecondary text-lg mb-6 max-w-3xl mx-auto">
          <span className="font-semibold text-primary">Intern Developer at Itransition Group</span> (Jul-Sep 2024) - 
          Gained hands-on experience in software development lifecycle, solving complex programming tasks, 
          and collaborating with development teams in an enterprise environment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-dark-surface p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-dark-border">
            <h4 className="font-bold text-primary text-lg mb-2">Education</h4>
            <p className="text-sm text-dark-textSecondary">BSc Computer Science & Engineering<br />East West University</p>
          </div>
          <div className="bg-dark-surface p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-dark-border">
            <h4 className="font-bold text-primary text-lg mb-2">Current Study</h4>
            <p className="text-sm text-dark-textSecondary">Professional Masters in IT<br />Jahangirnagar University</p>
          </div>
          <div className="bg-dark-surface p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-dark-border">
            <h4 className="font-bold text-primary text-lg mb-2">Research</h4>
            <p className="text-sm text-dark-textSecondary">Published in ICO2023<br />Machine Learning in Cloud Computing</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TechSkills;
