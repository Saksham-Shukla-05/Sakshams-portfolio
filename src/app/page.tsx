import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Glimse from "@/components/Glimse";
export default function Home() {
  return (
    <main className=" dark:bg-black bg-white flex flex-col w-full  md:gap-0 gap-5 items-center  ">
      <Navbar />
      <HeroSection />
      <Glimse />
    </main>
  );
}
