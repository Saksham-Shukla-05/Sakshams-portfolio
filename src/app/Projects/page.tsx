"use client";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="md:p-8 p-4 flex flex-col items-center gap-5 justify-center   md:mt-4 mt-8  dark:bg-black bg-white w-full rounded-none shadow-none  ">
      <p>Working on it!!</p>
      <div className="flex items-center gap-3">
        <p>Have a question? </p>

        <p>
          <Link
            className="underline decoration-purple-500"
            href="mailto:shuklasaksham729@gmail.com"
          >
            Email me
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
