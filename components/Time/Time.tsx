"use client";

import React, { useMemo } from "react";
import useSWR from "swr";
import MotionDiv from "../Motion/MotionDiv";
import { isAfter, add } from "date-fns";
import Day from "./Day";
import Night from "./Night";

type TimeInfoType = {
  results: {
    sunrise: string;
    sunset: string;
  };
};

function Time() {
  async function fetcher(
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<JSON> {
    const res = await fetch(input, init);
    return res.json();
  }

  const { data } = useSWR("/api/time", fetcher);

  console.log("data", data);

  const [sunriseTime, sunsetTime] = useMemo(() => {
    const timeInfo = data as unknown as TimeInfoType;
    if (!data) return [null, null];

    return [
      new Date(timeInfo.results.sunrise),
      new Date(timeInfo.results.sunset),
    ];
  }, [data]);

  const timeComponent = useMemo(() => {
    if (!sunriseTime || !sunsetTime) return null;

    if (isAfter(new Date(), add(sunsetTime, { hours: 1 }))) {
      return <Night />;
    }

    if (isAfter(new Date(), sunriseTime)) {
      return <Day />;
    }

    return <Night />;
  }, [data]);

  return (
    <MotionDiv
      classname={`relative flex aspect-square overflow-hidden rounded-3xl text-white`}
    >
      {timeComponent}
    </MotionDiv>
  );
}

export default Time;
