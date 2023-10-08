import React from "react";
import { motion } from "framer-motion";

type MotionDivType = {
  children: React.ReactNode;
  classname?: string;
  isSquare?: boolean;
};

function MotionDiv({ children, classname, isSquare }: MotionDivType) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`common_bento flex items-center justify-center ${classname} ${
        isSquare ? "aspect-square" : ""
      }`}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
