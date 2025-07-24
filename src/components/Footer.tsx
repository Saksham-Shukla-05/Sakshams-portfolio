"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="p-4 mt-20 border-t w-full flex flex-col gap-12 bg-gray-200 dark:bg-black dark:text-gray-300 relative">
      <div className="flex flex-col mt-10 md:flex-row justify-between items-center gap-12">
        {/* Summary */}
        <div className="text-center md:border-r-4 px-4 border-none md:w-1/2 w-full md:text-justify max-w-md">
          <h3 className="text-xl font-bold text-black dark:text-white">
            &lt;/Saksham&gt;
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-2">
            Coding with purpose.
          </p>
          <p className="md:text-base text-sm mt-2 leading-loose">
            Full-stack developer passionate about building scalable and
            user-friendly web applications with <strong>MERN</strong> and{" "}
            <strong>Next.js</strong>. Always learning, improving, and exploring
            modern tech stacks.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-row flex-wrap items-start gap-12 md:w-1/2 w-full justify-around">
          {/* Socials */}
          <div className="flex text-center items-center flex-col gap-5">
            <p className="font-medium">Socials</p>
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
          <div className="flex text-center flex-col gap-5">
            <p className="font-medium">Quick Links</p>
            <Link href="/" className="hover:text-purple-500 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-purple-500 transition">
              About
            </Link>
            <Link href="/projects" className="hover:text-purple-500 transition">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-purple-500 transition">
              Contact
            </Link>
          </div>

          {/* More Links */}
          <div className="flex text-center flex-col gap-5">
            <p className="font-medium">Resources</p>
            <Link
              href="/text-vault"
              className="hover:text-purple-500 transition"
            >
              Text Vault
            </Link>
            <Link href="/anon-msg" className="hover:text-purple-500 transition">
              Anon Messenger
            </Link>
            <Link
              href="/project-graph"
              className="hover:text-purple-500 transition"
            >
              Project Graph
            </Link>
            <Link
              href="/board-buddy"
              className="hover:text-purple-500 transition"
            >
              Board Buddy
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
