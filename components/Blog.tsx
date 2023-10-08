import React from "react";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import MotionDiv from "./Motion/MotionDiv";

function Blog() {
  return (
    <MotionDiv classname="col-span-2 bg-gray-100 dark:bg-gray-800 p-5">
      <Link
        href="https://xlog.xiaole.site"
        target="_blank"
        className="flex h-full w-full w-full flex-col justify-center"
      >
        <div className="rounded-3xl text-2xl font-bold text-gray-600 dark:text-gray-300 xl:text-4xl">
          <div className="flex items-center gap-3">
            Blog
            <Newspaper className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />
          </div>

          <div className="font-base mt-1 text-xs text-gray-600 dark:text-gray-300 md:text-base xl:text-2xl">
            This is my blog and weekly on the xlog platform
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}

export default Blog;
