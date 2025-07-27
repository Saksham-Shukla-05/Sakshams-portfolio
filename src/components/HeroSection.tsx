"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

export default function CardDemo() {
  return (
    <main className="md:h-screen md:p-8 p-4  border-b md:mt-4 mt-8  dark:bg-black bg-white w-full rounded-none shadow-none  ">
      <div className="h-full  relative border-none md:bg-[url('/blob-blob-2.png')] p-0 bg-[url('/wave-haikei3.png')] bg-cover bg-no-repeat bg-bottom">
        <div className="h-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          {/* Left Section */}
          <div className=" w-full h-full justify-center gap-6 flex flex-col text-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
              Hi, I&apos;m{" "}
              <p className="text-purple-500 md:inline block">Saksham Shukla</p>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              A passionate Full Stack Developer from India
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              I specialize in building modern, scalable web apps with the MERN
              stack and TypeScript.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto justify-center md:justify-start">
              <Button
                onClick={() =>
                  toast("Downloading Resume", {
                    description: "You are downloading Saksham Shukla's resume.",
                  })
                }
                className="bg-purple-700 cursor-pointer text-white w-full sm:w-auto"
              >
                Download Resume
              </Button>
              <Button className="bg-purple-700 cursor-pointer text-white w-full sm:w-auto">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:hidden flex justify-center">
            <Image
              className="rounded-2xl -mt-5 w-48 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-auto"
              src="/saksham_shukla.png"
              width={270}
              height={180}
              alt="saksham"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
