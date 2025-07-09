import { NavigationMenu } from "@/components/ui/navigation-menu";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <div className="w-full border-b-2 p-3 flex justify-between items-center ">
        <p className="text-purple-500">Saksham Shukla</p>
        <Navbar />
      </div>
    </>
  );
}
