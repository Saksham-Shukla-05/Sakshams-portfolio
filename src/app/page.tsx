import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <main className=" dark:bg-black bg-white flex flex-col w-full md:p-5 p-2 md:gap-10 gap-5 items-center  ">
      <Navbar />
      <HeroSection />
    </main>
  );
}
