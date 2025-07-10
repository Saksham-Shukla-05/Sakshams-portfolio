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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardDemo() {
  return (
    // understand why is it getting space from left and right
    <Card className="w-full max-w-7xl rounded-none border-none p-0">
      <CardContent className="p-0">
        <div className="flex flex-row flex-wrap  p-2   ">
          <div className="md:w-1/2 w-full flex gap-5  flex-col ">
            <h1 className="md:text-4xl text-2xl">
              Hi, I&apos;m Saksham Shukla 👋
            </h1>
            <p>A passionate Full Stack Developer from India </p>
            <p>
              I specialize in building modern, scalable web apps with MERN stack
              and TypeScript.
            </p>
          </div>
          <div className="md:w-1/2 w-full gap-2 flex  justify-center ">
            Card
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
