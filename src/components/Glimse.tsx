"use client";
import { cn } from "@/lib/utils";
import { CardStack } from "./ui/card-stack";
import { CircuitBoard, Github, Layers2 } from "lucide-react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Tech Stack",
    designation: <Layers2 color="#9421ca" />,
    content: (
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-purple-400">
          Tech Stack
        </h3>
        <p className="text-sm sm:text-base dark:text-gray-200 text-black">
          I use the MERN stack & TypeScript.
          <span
            className="block mt-1 text-black dark:text-purple-300 underline cursor-pointer hover:text-purple-400 transition"
            onClick={() => (window.location.href = "/About")}
          >
            See my complete stack →
          </span>
        </p>
      </div>
    ),
  },
  {
    id: 1,
    name: "DSA",
    designation: <CircuitBoard color="#9421ca" />,
    content: (
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-purple-400">DSA</h3>
        <p className="text-sm sm:text-base dark:text-gray-200 text-black">
          Solved 300+ LeetCode problems.
          <a
            href="https://leetcode.com/u/saksham729/"
            target="_blank"
            className="block mt-1 text-black dark:text-purple-300 underline hover:text-purple-400 transition"
          >
            View my profile →
          </a>
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Projects",
    designation: <Github color="#9421ca" />,
    content: (
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-purple-400">
          Projects
        </h3>
        <p className="text-sm sm:text-base dark:text-gray-200 text-black">
          Check out my GitHub for real-world apps.
          <a
            href="https://github.com/Saksham-Shukla-05"
            target="_blank"
            className="block mt-1 text-black dark:text-purple-300 underline hover:text-purple-400 transition"
          >
            Visit GitHub →
          </a>
        </p>
      </div>
    ),
  },
];

export default function Glimse() {
  return (
    <section className="border-b md:min-h-screen mt-20 p-8  gap-12 w-full justify-around flex flex-col items-center dark:bg-black bg-white text-black dark:text-white">
      {/* Heading */}
      <div className="w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Know Me <span className="text-purple-500">Better</span>
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
          Here’s a quick glimpse of what I do and the technologies I work with.
        </p>
      </div>

      <div className="flex flex-row h-full md:gap-0 gap-24 items-center flex-wrap md:justify-center justify-between text-center w-full">
        {/* Right Cards (should come first on small screens) */}
        <div className="flex md:w-1/2 w-full items-center flex-wrap justify-around gap-12 order-1 md:order-2">
          <CardStack items={CARDS} />
        </div>

        <div className="flex md:w-1/2 w-full text-justify flex-col gap-4 text-sm sm:text-base md:text-lg max-w-5xl text-gray-800 dark:text-gray-300 leading-relaxed order-2 md:order-1">
          <p>
            I’m a full stack developer currently exploring and building projects
            using the MERN stack and TypeScript.
          </p>
          <p>
            I started my journey with{" "}
            <span className="text-purple-700 font-semibold">Java</span> and
            gradually moved into web development. Over time, I’ve built real
            projects that are deployed.
          </p>
          <p>
            I enjoy writing clean code, learning new tools, and turning ideas
            into simple, functional interfaces.
          </p>
          <p>
            As of now, I’m focused on sharpening my DSA skills and contributing
            to projects.
          </p>
        </div>
      </div>
    </section>
  );
}
