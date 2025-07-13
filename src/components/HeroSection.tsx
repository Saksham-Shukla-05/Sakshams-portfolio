import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function CardDemo() {
  return (
    <Card className="md:mt-0 mt-20 h-screen dark:bg-black bg-white w-full rounded-none border-none shadow-none  p-0">
      <CardContent className="h-full   p-0 md:bg-none bg-[url('/wave-haikei3.png')] bg-cover bg-top   ">
        <div className="h-full flex  flex-col md:flex-row items-center  justify-between gap-10 md:gap-0 ">
          {/* Left Section */}
          <div className="w-full h-full justify-center gap-10 md:w-1/2 flex p-1 flex-col   text-center md:text-left  items-center md:items-start">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
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
              <Button className="bg-purple-700 cursor-pointer  text-white w-full sm:w-auto">
                Download Resume
              </Button>
              <Button className="bg-purple-700 cursor-pointer text-white w-full sm:w-auto">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2   flex justify-around">
            <img
              className="rounded-2xl w-48  sm:w-52  md:w-56 lg:w-72 xl:w-80 h-auto"
              src="/avataaars (2).png"
              alt="saksham"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
