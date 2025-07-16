export default function Glimse() {
  return (
    <section className="w-full md:h-screen  py-12 px-6 bg-gray-50 dark:bg-black text-black dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-8">Quick Highlights</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="border border-purple-500 p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">🧑‍💻 Full Stack Developer</h3>
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
            MERN Stack | TypeScript
          </p>
        </div>
        <div className="border border-purple-500 p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">🚀 2+ Projects Live</h3>
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
            Built using React & Tailwind
          </p>
        </div>
        <div className="border border-purple-500 p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">📚 80+ DSA Problems</h3>
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
            <a
              href="https://leetcode.com/u/saksham729/"
              target="_blank"
              className="text-purple-500 underline"
            >
              View my LeetCode
            </a>
          </p>
        </div>
        <div className="border border-purple-500 p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">💼 Internship Ready</h3>
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
            Open to Web Dev Roles (Remote/Onsite)
          </p>
        </div>
      </div>
    </section>
  );
}
