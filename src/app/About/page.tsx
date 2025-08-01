import { FaNode } from "react-icons/fa";
const About = () => {
  return (
    <section className="w-full min-h-screen   justify-between   px-8 py-10 md:py-20 flex flex-col items-center gap-14">
      <div className="w-full    flex flex-col items-center gap-4 md:gap-6 text-center">
        <h2 className="text-3xl  sm:text-4xl md:text-5xl font-bold md:leading-loose leading-normal">
          Meet the <span className="text-purple-500">Developer</span>
        </h2>
        <div className="w-12 md:w-16 h-1 bg-purple-500 rounded-full" />

        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base md:max-w-5xl md:text-center text-justify leading-relaxed">
          Hi, I'm{" "}
          <span className="font-semibold text-purple-500">Saksham Shukla</span>,
          a passionate and self-driven web developer currently in my final year
          of the Integrated Master of Computer Applications (I-MCA) program at
          Institute of Integrated Management Studies (IIPS), DAVV, Indore. I
          specialize in full-stack web development with a focus on modern
          technologies like React, Node.js, and Tailwind CSS. My academic
          background, combined with hands-on project experience, reflects my
          dedication to building clean, efficient, and user-friendly web
          applications.
        </p>
      </div>

      <div className="w-full px-2 leading-loose  border-t  flex flex-col  items-center  gap-4 md:gap-6">
        <h3 className="text-2xl mt-10 md:mt-15 sm:text-3xl  text-center md:text-4xl font-semibold">
          Development <span className="text-purple-500">Stack</span>
        </h3>
        <div className="w-12 md:w-16 h-1 bg-purple-500 rounded-full" />

        <div className="md:max-w-5xl  rounded-3xl p-5 w-full flex flex-wrap flex-row md:gap-15 gap-5 items-center  justify-evenly text-sm md:text-base text-gray-600 dark:text-gray-400"></div>
      </div>
    </section>
  );
};

export default About;
