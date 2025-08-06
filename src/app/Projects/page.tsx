"use client";
import Link from "next/link";
import React from "react";
// import axios from "axios";

function page() {
  return (
    <div className="md:p-8 p-4 flex flex-col items-center gap-5 justify-center   md:mt-4 mt-8  dark:bg-black bg-white w-full rounded-none shadow-none  ">
      <p className="uppercase">under construction!!</p>
      <div className="flex items-center gap-2">
        <p>You can visit my github to see all projects I made! </p>

        <p>
          <Link
            className="underline decoration-purple-500"
            href="https://github.com/Saksham-Shukla-05"
          >
            GitHub
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
