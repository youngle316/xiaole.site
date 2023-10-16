import { NextResponse } from "next/server";
import { getAccessToken } from "~/lib/spotify";
import { Client, Player } from "spotify-api.js";

export async function GET() {
  try {
    const { access_token } = await getAccessToken();
    const client = new Client({ token: access_token });

    const player = new Player(client);
    const currentPlayback = await player.getCurrentlyPlaying("track");
    return NextResponse.json(currentPlayback);
  } catch (e) {
    console.log("Something went wrong!", e);
  }

  // if (currentPlayback) {
  //   const { isPlaying, item } = currentPlayback;
  //   const info = item as Track;
  //   const { name, artists, album } = info;
  //   const { images } = album as Album;
  //   const tmpPlayInfo: playInfoType = {
  //     name,
  //     author: artists[0].name,
  //     img: images[1].url,
  //   };
  // }
}
