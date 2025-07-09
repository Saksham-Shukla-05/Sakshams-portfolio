import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <div className="w-full border-b-2 p-3 flex justify-between items-center ">
        <div className="font-mono md:text-xl text-lg animate-pulse dark:text-purple-500 font-extrabold">
          &lt;/Saksham&gt;
        </div>
        <Navbar />
      </div>
    </>
  );
}
