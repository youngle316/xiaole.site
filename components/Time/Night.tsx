"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Night() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    // set canvas dimensions
    const isMobile = window.innerWidth < 768;
    canvas.width = isMobile ? window.innerWidth : window.innerWidth / 3;
    canvas.height = isMobile ? window.innerHeight : window.innerHeight / 3;

    // draw some stars
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 2,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }
  }, []);

  return (
    <div className="col-span-1 row-span-1 w-full overflow-hidden bg-[#001324] bg-clip-padding">
      <canvas
        className="absolute inset-0 h-full w-full opacity-70 md:opacity-100"
        ref={canvasRef}
      />
      <div className="m-2 mt-3 justify-end md:m-5 md:mt-5">
        <div className="opacity-85 flex items-baseline space-x-1 md:space-x-2">
          <div className="h-2 w-2 rounded-full bg-white md:h-5 md:w-5"></div>
          <div className="flex flex-col">
            <div className="text-sm font-bold text-white md:text-2xl xl:text-4xl">
              {time}
            </div>
            <div className="-mt-1 text-sm font-thin text-white md:text-lg xl:text-2xl">
              in the uk
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
                className="relative h-12 w-12 rounded-tl-full bg-[#DFDFDF] lg:h-24 lg:w-24 xl:h-56 xl:w-56"
              />
              <div className="absolute left-12 top-14 h-2 w-2 rounded-full bg-[#C2C2C2] md:left-28 md:top-16  md:h-4 md:w-4 xl:left-56 xl:top-20 xl:h-12 xl:w-12" />
              <div className="absolute left-14 top-10 h-4 w-4 rounded-full bg-[#C2C2C2] md:left-[115px] md:top-24 xl:left-[230px] xl:top-36 xl:h-8 xl:w-8" />
              <div className="absolute left-10 top-10 h-2 w-2 rounded-full bg-[#C2C2C2] md:left-20 md:top-20 md:h-8 md:w-8 xl:left-36 xl:top-32 xl:h-16 xl:w-16" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Night;
