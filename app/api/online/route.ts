import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const userId = process.env.NEXT_PUBLIC_DISCORD_USER_ID as string;
    const response = await fetch(
      `https://api.lanyard.rest/v1/users/${userId}`,
    ).then((res) => res.json());

    return NextResponse.json(response);
  } catch (e) {
    console.log("Something went wrong!", e);
  }
}
