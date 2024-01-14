// const techSkills = [
//   {
//     id: 1,
//     name: "Strategy & Direction",
//     description:
//       "sadsdsdwnjsnd ansjdnasjdajsdbasbdjabsjdabsdjasdbajskdbasjd??????sdasdasdasdsadas",
//     image: "src/assets/skills-1.png",
//   },
//   {
//     id: 2,
//     name: "Branding & Logo",
//     description:
//       "sadsdsdwnjsnd ansjdnasjdajsdbasbdjabsjdabsdjasdbajskdbasjd??????sdasdasdasdsadas",
//     image: "src/assets/skills-2.png",
//   },
//   {
//     id: 3,
//     name: "UI & UX",
//     description:
//       "sadsdsdwnjsnd ansjdnasjdajsdbasbdjabsjdabsdjasdbajskdbasjd??????sdasdasdasdsadas",
//     image: "src/assets/skills-3.png",
//   },
//   {
//     id: 4,
//     name: "Webflow & Development",
//     description:
//       "sadsdsdwnjsnd ansjdnasjdajsdbasbdjabsjdabsdjasdbajskdbasjd??????sdasdasdasdsadas",
//     image: "src/assets/skills-4.png",
//   },
// ];
const techSkills = [
  {
    id: 1,
    name: "HTML5 & Semantic Markup",
    description:
      "Proficient in creating structured and semantic HTML5 markup for modern web applications.",
    image: "src/assets/skills-1.png",
  },
  {
    id: 2,
    name: "CSS3 & Responsive Design",
    description:
      "Skilled in styling web applications using CSS3, including responsive design techniques for various screen sizes.",
    image: "src/assets/skills-2.png",
  },
  {
    id: 3,
    name: "JavaScript & ES6+",
    description:
      "Experienced in writing JavaScript code, utilizing ES6+ features for building interactive and dynamic user interfaces.",
    image: "src/assets/skills-3.png",
  },
  {
    id: 4,
    name: "Frontend Frameworks (e.g., React)",
    description:
      "Proficient in using frontend frameworks such as React.js to build scalable and maintainable single-page applications.",
    image: "src/assets/skills-4.png",
  },
  {
    id: 5,
    name: "Backend Development (e.g., Node.js)",
    description:
      "Familiar with backend development using technologies like Node.js, Express.js, and databases such as MongoDB for building server-side logic.",
    image: "src/assets/skills-4.png",
  },
  {
    id: 6,
    name: "APIs & RESTful Services",
    description:
      "Skilled in designing, developing, and consuming APIs, including RESTful services, to enable seamless communication between different parts of a web application.",
    image: "src/assets/skills-3.png",
  },
  {
    id: 7,
    name: "Responsive Web Design",
    description:
      "Knowledgeable in creating responsive web designs that ensure optimal user experience across various devices and screen sizes.",
    image: "src/assets/skills-2.png",
  },
  {
    id: 8,
    name: "Version Control (e.g., Git)",
    description:
      "Proficient in using version control systems, such as Git, to track changes, collaborate with team members, and manage code repositories effectively.",
    image: "src/assets/skills-1.png",
  },
];

const TechSkills = () => {
  return (
    <div className="lg:mx-12 mx-4 py-32 ">
      <div className="text-blue-900">
        <p className="text-xl font-semibold mb-5">What can I do with </p>
        <h2 className="md:text-5xl text-4xl font-bold mb-5">My Tech Skills</h2>
      </div>
      {/* skill card */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 text-bgShade">
        {techSkills.map((skill) => (
          <div
            key={skill.id}
            className="bg-body p-8 rounded-lg cursor-pointer hover:-translate-y-4 transition-all duration-300 skillCard "
          >
            <img
              src={skill.image}
              alt=""
              className="w-14 h-13 bg-white rounded-lg shadow-md mb-7"
            />
            <h1 className="text-xl font-bold mb-4"> {skill.name} </h1>
            <p> {skill.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
