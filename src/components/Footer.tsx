"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="p-8 mt-20 border-t  w-full flex flex-col gap-12 bg-gray-200 dark:bg-black dark:text-gray-300 relative">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Summary */}
        <div className="text-center md:border-r-4 px-4 border-none  md:w-1/2 w-full md:text-justify max-w-md">
          <h3 className="text-lg font-bold text-purple-600">Saksham Shukla</h3>
          <p className="md:text-base text-sm mt-2 py-3 tracking-wider">
            Full-stack developer passionate about building scalable and
            user-friendly web applications with <strong>MERN</strong> and{" "}
            <strong>Next.js</strong>. Always learning, improving, and exploring
            modern tech stacks.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-row items-center gap-4 md:w-1/2 w-full justify-around">
          <div className="flex items-center flex-col gap-5">
            <p>Socials</p>
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

          <div className="flex items-center flex-col gap-5">
            <p>Quick Links</p>
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

          {/* Social Icons */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" text-center text-sm pt-4">
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
