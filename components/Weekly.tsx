import React from "react";
import Link from "next/link";
import { Satellite } from "lucide-react";
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
          <div className="flex items-center gap-3">
            Weekly
            <Satellite className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />
          </div>

          <div className="font-base mt-3 text-xs text-gray-600 dark:text-gray-300 md:text-base xl:text-2xl">
            This is my weekly called '心迹逐影'
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}

export default Weekly;
