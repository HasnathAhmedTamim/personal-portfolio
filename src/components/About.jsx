import profilePic from "../assets/profile3.png";
// import Resume from "./resume.pdf";
const About = () => {
  return (
    <div className="lg:mx-12 mx-4 my-32 bg-bgShade" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-10">
        <div className="sm:w-1/2">
          <img src={profilePic} alt="" className=" w-full sm:w-4/6" />
        </div>
        <div className=" sm:w-1/2 ">
          <p className="text-xl font-semibold mb-5">Hasnath </p>
          <h2 className="md:text-5xl text-4xl font-bold mb-5">About Myself</h2>
          <p className="mt-8 md:pr-8 mb-8 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum
            consequatur aut at, <br />
            ab accusantium sequi nihil ratione temporibus. Voluptatibus esse
            aliquam maxime, architecto <br />
            commodi consectetur nam praesentium dolore rem.
          </p>
          <div className="flex gap-5 mt-4 justify-center">
            <a
              href="https://www.linkedin.com/in/hasnath-ahmed-tamim/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-primary">Hire me</button>
            </a>
            <a
              href="https://drive.google.com/file/d/1KKocP4Ov8dk-tTmpELKFAWxMQpFpfHhT/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              download
            >
              <button className="btn-primary">View CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
