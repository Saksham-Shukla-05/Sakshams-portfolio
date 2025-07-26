"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Glimse from "@/components/Glimse";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className=" dark:bg-black  bg-white flex flex-col w-full  md:gap-0  items-center  ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=""
      >
        <Navbar />
        <HeroSection />
        <Glimse />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
}
