import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function CardDemo() {
  return (
    <Card className="dark:bg-black bg-white w-full max-w-7xl rounded-none border-none p-0">
      <CardContent className="p-0">
        <div className="flex flex-row gap-8 md:gap-0 flex-wrap  p-2   ">
          <div className="md:w-1/2 w-full flex justify-evenly md:items-start items-center md:gap-0 gap-6  p-1 flex-col ">
            <h1 className="lg:text-3xl md:text-2xl text-xl -mb-2 md:font-extrabold font-normal">
              Hi, I&apos;m Saksham Shukla👋
            </h1>
            <p className="text-center md:text-lg text-sm md:text-left font-semibold">
              A passionate Full Stack Developer from India{" "}
            </p>
            <p className="text-center md:text-left">
              I specialize in building modern, scalable web apps with MERN stack
              and TypeScript.
            </p>
            <div className="items-start w-fit  flex gap-3 ">
              <Button className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-white">
                Download Resume
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-white">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 justify-center w-full gap-2 flex p-1 ">
            <Image
              className="rounded-2xl mix-blend-soft-light"
              src={"/avataaars (1).png"}
              alt="saksham"
              width={280}
              height={170}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
