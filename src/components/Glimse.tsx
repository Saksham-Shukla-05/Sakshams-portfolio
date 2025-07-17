export default function Glimse() {
  return (
    <section className="w-full px-5 py-10 dark:bg-black bg-white text-black dark:text-white">
      <div className="flex flex-col gap-10 items-center justify-center text-center w-full">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          About <span className="text-purple-500">Me</span>
        </h2>

        {/* Description */}
        <div className="flex flex-col gap-4 text-sm sm:text-base max-w-4xl text-gray-800 dark:text-gray-300">
          <p>
            I'm a full stack developer currently exploring and building projects
            using the MERN stack and TypeScript.
          </p>
          <p>
            I started my journey with{" "}
            <span className="text-purple-700 bolder ">Java</span> and gradually
            moved into web development. Over time, I’ve built real projects that
            are deployed and being used.
          </p>
          <p>
            I enjoy writing clean code, learning new tools, and turning ideas
            into simple, functional interfaces.
          </p>
          <p>
            Right now, I’m focused on sharpening my DSA skills, contributing to
            projects, and preparing for a web development internship.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="flex items-center flex-wrap justify-center gap-12 w-full ">
          <div className="border border-purple-500 p-4 rounded-xl flex flex-col items-center bg-purple-900/20">
            <h3 className="text-lg font-semibold">🧑‍💻 Stack</h3>
            <p className="text-sm text-gray-800 dark:text-gray-300 mt-2">
              MERN + TypeScript
            </p>
          </div>
          <div className="border border-purple-500 p-4 rounded-xl flex flex-col items-center bg-purple-900/20">
            <h3 className="text-lg font-semibold">📦 Projects</h3>
            <p className="text-sm text-gray-800 dark:text-gray-300 mt-2">
              Deployed & Working
            </p>
          </div>
          <div className="border border-purple-500 p-4 rounded-xl flex flex-col items-center bg-purple-900/20">
            <h3 className="text-lg font-semibold">📚 DSA</h3>
            <p className="text-sm text-gray-800 dark:text-gray-300 mt-2">
              300+ LeetCode Problems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
