"use client";
import HeroSection from "@/components/HeroSection";
import Glimse from "@/components/Glimse";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <HeroSection />
      <Glimse />
      <Contact />
    </motion.div>
  );
}
