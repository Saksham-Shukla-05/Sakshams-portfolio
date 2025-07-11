import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <div className="flex flex-col w-full h-fit md:p-4 p-2 gap-5 items-center  ">
      {" "}
      <nav className="w-full h-fit    flex  justify-between items-center">
        <div className="font-mono md:text-2xl  text-[15px]  dark:text-purple-500 font-extrabold">
          &lt;/Saksham&gt;
        </div>
        <Navbar />
      </nav>
      <HeroSection />
    </div>
  );
}
