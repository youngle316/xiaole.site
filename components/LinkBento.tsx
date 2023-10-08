import React from "react";
import Link from "next/link";
import MotionDiv from "./Motion/MotionDiv";

type LinkBentoProps = {
  icon?: React.ReactNode;
  url: string;
  classname?: string;
};

function LinkBento({ url, icon, classname }: LinkBentoProps) {
  return (
    <MotionDiv classname={`col-span-1 cursor-pointer ${classname}`} isSquare>
      <Link
        target="_blank"
        href={url}
        className="relative flex h-full w-full items-center justify-center"
      >
        {icon}
      </Link>
    </MotionDiv>
  );
}

export default LinkBento;
