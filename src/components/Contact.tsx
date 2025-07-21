export default function Contact() {
  return (
    <section className="mt-15 p-8 md:gap-22 gap-12 w-full justify-around flex flex-col items-center dark:bg-black bg-white text-black dark:text-white">
      {/* Heading */}
      <div className="w-full text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Contact <span className="text-purple-500">Me</span>
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl">
          Have a question, an opportunity, or just want to say hi? I'd love to
          hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col border md:flex-row h-full md:gap-12 gap-8 items-center justify-between w-full ">
        {/* Left Section */}
        <div className="md:w-1/2 w-full text-center md:text-left flex flex-col gap-4 text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
          <p>
            Feel free to reach out through the form or drop me an email
            directly. I'm open to freelance projects, collaborations, or simply
            chatting about tech.
          </p>
          <p>
            <span className="font-semibold text-purple-500">Email:</span>{" "}
            <a
              href="mailto:saksham.shukla@example.com"
              className="underline hover:text-purple-400"
            >
              saksham.shukla@example.com
            </a>
          </p>
          <p className="flex gap-4">
            {/* Example social links */}
            <a
              href="https://github.com/saksham729"
              target="_blank"
              className="hover:text-purple-500"
            >
              GitHub →
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              className="hover:text-purple-500"
            >
              LinkedIn →
            </a>
          </p>
        </div>

        {/* Right Section (Form Placeholder) */}
        <div className="md:w-1/2 w-full bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <p className="text-center text-gray-600 dark:text-gray-300">
            [Contact Form Coming Soon]
          </p>
        </div>
      </div>
    </section>
  );
}
