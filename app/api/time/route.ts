import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=34.26316100&lng=108.948024&formatted=0`,
    ).then((res) => res.json());

    return NextResponse.json(response);
  } catch (e) {
    console.log("Something went wrong!", e);
  }
}
