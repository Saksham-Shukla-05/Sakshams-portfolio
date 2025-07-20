export default function Contact() {
  return (
    <section className="mt-15 p-8 md:gap-22 gap-12 w-full justify-around flex flex-col items-center dark:bg-black bg-white text-black dark:text-white">
      {/* Heading */}
      <div className="w-full text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Contact <span className="text-purple-500">Me</span>
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl">
          Here’s a quick glimpse of what I do and the technologies I work with.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-row h-full md:gap-0 gap-22 items-center flex-wrap md:justify-center justify-between text-center w-full">
        {/* Left Text */}
        <div className="flex md:w-1/2 w-full text-justify flex-col gap-4 text-base sm:text-lg md:text-xl max-w-4xl text-gray-800 dark:text-gray-300 leading-relaxed"></div>

        {/* Right Cards */}
        <div className="flex md:w-1/2 w-full items-center flex-wrap justify-around gap-12"></div>
      </div>
    </section>
  );
}
