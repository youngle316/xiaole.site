import React from "react";
import Link from "next/link";
import MotionDiv from "./Motion/MotionDiv";

function Weekly() {
  return (
    <MotionDiv classname="col-span-1 bg-gray-100 dark:bg-gray-800 p-5">
      <Link
        href="https://weekly.xiaole.site"
        target="_blank"
        className="flex h-full w-full flex-col justify-center"
      >
        <div className="rounded-3xl text-2xl font-bold text-gray-600 dark:text-gray-300 xl:text-4xl">
          <div className="flex items-center justify-center gap-3">Weekly</div>
        </div>
      </Link>
    </MotionDiv>
  );
}

export default Weekly;
