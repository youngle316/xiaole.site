import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import MotionDiv from "~/components/Motion/MotionDiv";

function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <MotionDiv
      classname="col-span-1 bg-gray-100 dark:bg-gray-900 flex items-center justify-center"
      isSquare
    >
      <div
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`flex h-10 w-16 cursor-pointer rounded-full border-transparent p-1 transition-colors focus:outline-none ${
          theme === "light"
            ? "justify-start bg-slate-300"
            : "justify-end bg-gray-800"
        }`}
      >
        <motion.div
          layout
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-gray-900"
        >
          <motion.div>
            {theme === "light" ? (
              <Sun className="h-6 w-6 fill-yellow-400 stroke-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 fill-sky-900 stroke-sky-900" />
            )}
          </motion.div>
        </motion.div>
      </div>
    </MotionDiv>
  );
}

export default ThemeSwitcher;
