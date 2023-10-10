import React from "react";

type MotionDivType = {
  children: React.ReactNode;
  classname?: string;
  isSquare?: boolean;
};

function MotionDiv({ children, classname, isSquare }: MotionDivType) {
  return (
    <div
      className={`common_bento duration-300 hover:scale-[1.01] ${classname} ${
        isSquare ? "aspect-square" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default MotionDiv;
