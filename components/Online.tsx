"use client";

import { useMemo } from "react";
import useSWR from "swr";
import MotionDiv from "./Motion/MotionDiv";

type OnlineType = {
  data: {
    discord_status: string;
  };
  success: boolean;
};

const Online = () => {
  async function fetcher(
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<JSON> {
    const res = await fetch(input, init);
    return res.json();
  }

  const { data, isLoading } = useSWR("/api/online", fetcher, {
    refreshInterval: 1000 * 60,
  });

  const [status, bgClass] = useMemo(() => {
    const discordData = data as unknown as OnlineType;
    if (isLoading) return ["loading", "bg-gray-400"];
    switch (discordData?.data?.discord_status) {
      case "online":
        return ["online", "bg-emerald-400 dark:bg-emerald-600"];
      default:
        return ["offline", "bg-pink-400 dark:bg-pink-600"];
    }
  }, [data]);

  return (
    <MotionDiv
      classname={`text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm cursor-pointer ${bgClass}`}
    >
      <div className="absolute inset-0 flex items-center justify-center text-base font-bold md:text-2xl xl:text-3xl">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 md:h-5 md:w-5">
            <span className="absolute h-2 w-2 rounded-full bg-white md:h-5 md:w-5" />
          </span>
          <p>{status}</p>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Online;
