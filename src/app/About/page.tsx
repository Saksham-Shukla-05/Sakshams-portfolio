import Footer from "@/components/Footer";
import React from "react";
import Navbar from "@/components/Navbar";
const About = () => {
  return (
    <div className="dark:bg-black  bg-white flex flex-col w-full  md:gap-0  items-center ">
      <Navbar />
      <div>About</div>
      <Footer />
    </div>
  );
};

export default About;
