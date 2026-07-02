
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGithub,
  FaDocker,
  FaBootstrap,
  FaTools,
  FaDatabase
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiPostgresql,
  SiMysql,
  SiVite,
  SiPostman,
  SiDocker,
  SiMongoose,
  SiJavascript
} from "react-icons/si";
import { 
  BsPerson, 
  BsLightbulb, 
  BsPeople, 
  BsChatDots, 
  BsClock, 
  BsLightning,
  BsShieldCheck,
  BsLayers
} from "react-icons/bs";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-blue-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-200" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
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
      { name: "Mongoose", icon: FaDatabase, color: "text-emerald-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500" },
      { name: "MySQL", icon: SiMysql, color: "text-orange-400" },
      { name: "Neon DB", icon: FaDatabase, color: "text-fuchsia-500" },
      { name: "Git & GitHub", icon: FaGithub, color: "text-gray-200" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Docker", icon: FaDocker, color: "text-sky-500" },
      { name: "Vite", icon: SiVite, color: "text-violet-400" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "VS Code", icon: FaTools, color: "text-blue-400" },
      { name: "Git", icon: FaGithub, color: "text-gray-200" },
      { name: "Beekeeper Studio", icon: BsLayers, color: "text-cyan-400" }
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
      { name: "Adaptability", icon: BsLightning, color: "text-yellow-500" },
      { name: "MVC / RBAC / JWT", icon: BsShieldCheck, color: "text-emerald-400" }
    ]
  }
];

const TechSkills = () => {
  return (
    <section className="relative my-32 overflow-hidden lg:px-12 px-4" id="techskills">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/60 via-bg-primary to-slate-950/40" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="section-shell">
        <div className="mb-16 text-center">
         
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary/90">
            Technical Expertise
          </p>
       
          <h2 className="mb-5 text-4xl font-bold text-text-primary md:text-5xl">
            Technical Expertise
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary">
            A comprehensive overview of my technical skills and professional competencies 
            gained through education, hands-on projects, and industry experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="surface-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl"
            >
              <h3 className="mb-7 border-b border-white/10 pb-4 text-center text-2xl font-bold text-text-primary">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skillIndex}
                      className="group flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                      <div className={`mb-3 text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                        <IconComponent />
                      </div>
                      <span className="text-sm font-medium text-text-primary transition-colors duration-300 group-hover:text-primary">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
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
    </section>
  );
};

export default TechSkills;
