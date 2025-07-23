"use client";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" p-8 w-full bg-gray-100 dark:bg-black  dark:text-gray-300">
      <div className="flex flex-col  md:flex-row justify-between items-center gap-6">
        {/* Left Summary */}
        <div className="text-center  md:w-1/2 w-full md:text-left max-w-md">
          <h3 className="text-lg font-bold text-purple-600">Saksham Shukla</h3>
          <p className="text-sm mt-2">
            Passionate full-stack developer crafting modern web applications
            with MERN and Next.js.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-12 md:w-1/2     w-full  justify-center ">
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 text-center py-3 text-sm">
        © {new Date().getFullYear()} Saksham Shukla. All rights reserved.
      </div>
    </footer>
  );
}
