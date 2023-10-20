"use client";

import React from "react";
import { Album, CurrentPlayback, Track } from "spotify-api.js";
import useSWR from "swr";

type playInfoType = {
  name: string;
  author: string;
  img: string;
  isPlaying: boolean;
};

function Spotify() {
  async function fetcher(
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<JSON> {
    const res = await fetch(input, init);
    return res.json();
  }

  const { data } = useSWR("/api/spotify", fetcher, {
    refreshInterval: 1000 * 60,
  });

  let playInfo = {
    name: "歌謠",
    author: "李榮浩",
    img: "https://i.scdn.co/image/ab67616d00001e025e612ee6e4ad129abe910a53",
    isPlaying: false,
  };

  const getPlayInfo = (data: CurrentPlayback): playInfoType => {
    const { isPlaying, item, currentPlayingType } = data;
    if (currentPlayingType === "track") {
      const info = item as Track;
      const { name, artists, album } = info;
      const { images } = album as Album;
      return {
        name,
        author: artists[0].name,
        img: images[1].url,
        isPlaying,
      };
    }
    return playInfo;
  };

  if (data) {
    playInfo = getPlayInfo(data as unknown as CurrentPlayback);
  }

  return (
    <div
      className="common_bento relative col-span-2 flex aspect-[2/1] cursor-pointer overflow-hidden
    rounded-3xl bg-gray-100 duration-300 hover:scale-[1.01] dark:bg-gray-900 md:col-span-1 md:aspect-square"
    >
      <div
        className={`rotate absolute left-0 top-0 m-2
      h-8 w-8 fill-current text-[#2DBD59] transition dark:text-[#2DBD59] md:m-5 lg:h-16 lg:w-16 ${
        playInfo.isPlaying ? "animate-spin-slow" : ""
      }`}
      >
        <SpotifySVG />
      </div>
      <div className="xl:mt-none ml-4 mt-5 flex flex-col justify-center text-gray-900 dark:text-gray-100 md:ml-5 xl:ml-7">
        <div className="text-sm font-bold text-green-700 dark:text-green-200 lg:text-lg xl:text-3xl">
          Currently Listening
        </div>
        <div className="w-52 items-center justify-center truncate text-xs font-semibold md:w-40 lg:text-lg xl:w-56 xl:text-2xl">
          {playInfo.name}
        </div>
        <div className="items-center justify-center text-xs font-light lg:text-lg xl:text-2xl">
          {playInfo.author}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 overflow-hidden rounded-tl-full dark:brightness-95">
        <img
          src={playInfo.img}
          className="h-24 md:block lg:h-28 lg:w-28 xl:h-36 xl:w-36"
          alt="game"
        />
      </div>
    </div>
  );
}

const SpotifySVG = () => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2931 2931"
    >
      <path
        className="st0"
        d="M1465.5 0C656.1 0 0 656.1 0 1465.5S656.1 2931 1465.5 2931 2931 2274.9 2931 1465.5C2931 656.2 2274.9.1 1465.5 0zm672.1 2113.6c-26.3 43.2-82.6 56.7-125.6 30.4-344.1-210.3-777.3-257.8-1287.4-141.3-49.2 11.3-98.2-19.5-109.4-68.7-11.3-49.2 19.4-98.2 68.7-109.4C1242.1 1697.1 1721 1752 2107.3 1988c43 26.5 56.7 82.6 30.3 125.6zm179.3-398.9c-33.1 53.8-103.5 70.6-157.2 37.6-393.8-242.1-994.4-312.2-1460.3-170.8-60.4 18.3-124.2-15.8-142.6-76.1-18.2-60.4 15.9-124.1 76.2-142.5 532.2-161.5 1193.9-83.3 1646.2 194.7 53.8 33.1 70.8 103.4 37.7 157.1zm15.4-415.6c-472.4-280.5-1251.6-306.3-1702.6-169.5-72.4 22-149-18.9-170.9-91.3-21.9-72.4 18.9-149 91.4-171 517.7-157.1 1378.2-126.8 1922 196 65.1 38.7 86.5 122.8 47.9 187.8-38.5 65.2-122.8 86.7-187.8 48z"
      />
    </svg>
  );
};

export default Spotify;
