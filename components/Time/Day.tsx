"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Day() {
  const [time, setTime] = useState("");

  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Shanghai",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatter.format(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-1 row-span-1 w-full overflow-hidden bg-gradient-to-br from-[#0A8DFF] to-[#98CFFF]">
      <div className="m-2 mt-3 justify-end md:m-5  md:mt-5">
        <div className="opacity-85 flex items-baseline space-x-1 md:space-x-2">
          <div className="h-2 w-2 rounded-full bg-white md:h-5 md:w-5"></div>
          <div className="flex flex-col">
            <div className="text-sm font-bold text-white md:text-2xl xl:text-4xl">
              {time}
            </div>
            <div className="-mt-1 text-sm font-thin text-white md:text-lg xl:text-2xl">
              in the China
            </div>
          </div>
        </div>
      </div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-0 right-0 rounded-tl-full bg-white/10 pl-2 pt-2 md:pl-4 md:pt-4"
      >
        <motion.div>
          <div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-2 pt-2 md:pl-4 md:pt-4">
            <div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-2 pt-2 md:pl-4 md:pt-4">
              <motion.div
                initial={false}
                animate={{
                  scale: [1, 0.9, 0.9, 1, 1],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative h-12 w-12 rounded-tl-full bg-[#FEEA9A] lg:h-32 lg:w-32 xl:h-56 xl:w-56"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Day;
