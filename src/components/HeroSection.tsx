"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { toast } from "sonner";

export default function CardDemo() {
  return (
    <Card className="md:h-screen  border-none dark:bg-black bg-white  w-full rounded-none shadow-none  p-5">
      <CardContent className="h-full relative  border-none md:bg-[url('/blob-blob-2.png')] p-0 bg-[url('/wave-haikei3.png')] bg-cover bg-no-repeat bg-bottom   ">
        <div className="h-full flex flex-col md:flex-row items-center  justify-between gap-10 md:gap-0 ">
          {/* Left Section */}
          <div className="w-full h-full justify-center gap-8  flex flex-col text-center items-center ">
            <h1 className="md:text-5xl text-2xl font-bold">
              Hi, I&apos;m Saksham Shukla
            </h1>
            <p className="text-base sm:text-lg font-semibold">
              A passionate Full Stack Developer from India
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              I specialize in building modern, scalable web apps with the MERN
              stack and TypeScript.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto justify-center md:justify-start">
              <Button
                onClick={() => toast("Event has been created")}
                className="bg-purple-700 cursor-pointer  text-white w-full sm:w-auto"
              >
                Download Resume
              </Button>
              <Button className="bg-purple-700 cursor-pointer text-white w-full sm:w-auto">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full  md:hidden   flex justify-center">
            <Image
              className="rounded-2xl  -mt-5 w-48  sm:w-52  md:w-64 lg:w-72 xl:w-80 h-auto"
              src="/saksham_shukla.png"
              width={270}
              height={180}
              alt="saksham"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
