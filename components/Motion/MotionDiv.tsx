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
      whileHover={{ scale: 1.01 }}
      className={`common_bento ${classname} ${isSquare ? "aspect-square" : ""}`}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
