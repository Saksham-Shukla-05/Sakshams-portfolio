import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Glimse from "@/components/Glimse";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className=" dark:bg-black  bg-white flex flex-col w-full  md:gap-0  items-center  ">
      <Navbar />
      <HeroSection />
      <Glimse />
      <Contact />
      <Footer />
    </main>
  );
}
