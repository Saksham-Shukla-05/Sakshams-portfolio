"use client";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  GitFork,
  GitPullRequest,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="p-5 py-8 mt-20 border-t w-full flex flex-col gap-12 bg-gray-200 dark:bg-black dark:text-gray-300 relative">
      <div className="flex flex-col mt-10 md:flex-row justify-between items-center gap-16">
        {/* Summary */}
        <div className="text-center md:border-r-4 px-4 border-none md:w-1/2 w-full lg:text-justify max-w-md">
          <h3 className="text-xl font-mono font-bold text-purple-500 tracking-wide dark:text-white">
            &lt;/Saksham&gt;
          </h3>
          <p className="text-sm text-gray-600 dark:text-purple-400 mt-2 mb-2">
            ~ Coding with purpose.
          </p>
          <p className="md:text-base text-sm mt-2 leading-loose">
            Full-stack developer passionate about building scalable and
            user-friendly web applications with <strong>MERN</strong> and{" "}
            <strong>Next.js</strong>. Always learning, improving, and exploring
            modern tech stacks.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-row flex-wrap  items-start gap-12 lg:w-1/2 w-full justify-around">
          {/* Socials */}
          <div className="flex text-center text-sm mt-0 items-center flex-col gap-5">
            <p className="font-medium dark:text-purple-500">Let’s connect</p>
            <Link
              href="https://github.com/Saksham-Shukla-05"
              target="_blank"
              className="hover:text-purple-500 transition"
            >
              <Github size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/saksham-shukla-9758602a6"
              target="_blank"
              className="hover:text-purple-500 transition"
            >
              <Linkedin size={22} />
            </Link>
            <Link
              href="mailto:shuklasaksham729@gmail.com"
              className="hover:text-purple-500 transition"
            >
              <Mail size={22} />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex text-center text-sm flex-col gap-5">
            <p className="font-medium dark:text-purple-500">Find Your Way</p>
            <Link href="/" className="hover:text-purple-500 transition">
              Home
            </Link>
            <Link href="/About" className="hover:text-purple-500 transition">
              About
            </Link>
            <Link href="/projects" className="hover:text-purple-500 transition">
              Projects
            </Link>
          </div>

          {/* More Links */}
          <div className="flex text-center text-sm flex-col gap-5">
            <p className="font-medium dark:text-purple-500"> Build with Me</p>

            <Link
              href="mailto:saksham@example.com"
              className="hover:text-purple-500 transition"
            >
              Send Feedback
            </Link>

            <Link
              href="https://github.com/Saksham-Shukla-05/your-portfolio-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <p className="flex flex-row gap-3 justify-center">
                <GitFork /> Fork this Project
              </p>
            </Link>

            <Link
              href="https://github.com/Saksham-Shukla-05/your-portfolio-repo/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <p className="flex flex-row gap-3 justify-center">
                <GitPullRequest /> Contribute on GitHub
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm pt-4">
        © {new Date().getFullYear()} Saksham Shukla. All rights reserved.
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-0 bottom-0 p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
