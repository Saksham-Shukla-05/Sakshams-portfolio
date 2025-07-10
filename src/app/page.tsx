import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <div className="flex flex-col w-full h-fit  items-center gap-2 ">
      {" "}
      <nav className="w-full h-fit  p-2   flex  justify-between items-center">
        <div className="font-mono md:text-2xl  text-[15px]  dark:text-purple-500 font-extrabold">
          &lt;/Saksham&gt;
        </div>
        <Navbar />
      </nav>
      <HeroSection />
    </div>
  );
}
