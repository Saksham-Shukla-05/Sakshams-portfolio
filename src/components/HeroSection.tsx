import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function CardDemo() {
  return (
    <Card className=" h-screen dark:bg-black bg-white w-full rounded-none border-none shadow-none  p-4">
      <CardContent className="h-full  md:bg-none p-0 bg-[url('/wave-haikei3.png')] bg-cover bg-bottom   ">
        <div className="h-full flex flex-col md:flex-row items-center  justify-between gap-10 md:gap-0 ">
          {/* Left Section */}
          <div className="w-full h-full justify-center gap-10  flex flex-col   text-center md:text-left  items-center ">
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
          <div className="md:hidden w-full md:w-1/2 relative ">
            <div className="relative z-20 flex justify-around">
              <Image
                className="rounded-2xl w-48 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-auto"
                src="/avataaars.png"
                width={270}
                height={180}
                alt="saksham"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
