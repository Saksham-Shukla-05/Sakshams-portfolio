const About = () => {
  return (
    <section className="w-full min-h-screen px-6 border md:px-8 py-10 md:py-20 flex flex-col items-center gap-12">
      {/* Header */}
      <div className="w-full border flex flex-col py-10 items-center gap-4 md:gap-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-loose">
          Meet the <span className="text-purple-500">Developer</span>
        </h2>
        <div className="w-12 md:w-16 h-1 bg-purple-500 rounded-full" />

        {/* Paragraphs */}
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base max-w-4xl leading-relaxed">
          I'm{" "}
          <span className="font-semibold text-purple-500">Saksham Shukla</span>,
          a full-stack developer passionate about creating fast, scalable, and
          user-friendly web experiences. I primarily work with the{" "}
          <span className="font-semibold">MERN stack</span> and{" "}
          <span className="font-semibold">Next.js</span>, always eager to learn
          more.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base w-full md:max-w-3xl leading-relaxed">
          From sleek user interfaces to robust backend systems, I turn ideas
          into performant, real-world solutions — with clean code and keen
          attention to detail.
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-4xl flex flex-col items-center gap-5">
        <h3 className="text-lg md:text-3xl font-semibold text-purple-500">
          Tech Stack
        </h3>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
