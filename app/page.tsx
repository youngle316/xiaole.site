"use client";

import ThemeSwitcher from "~/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="container mx-auto mt-5 grid grid-cols-3 gap-2 p-0 md:grid-cols-4 md:gap-4 xl:px-20">
      <ThemeSwitcher />
    </div>
  );
}
