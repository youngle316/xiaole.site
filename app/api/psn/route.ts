import { NextResponse } from "next/server";

import {
  exchangeCodeForAccessToken,
  exchangeNpssoForCode,
  exchangeRefreshTokenForAuthTokens,
  getUserTitles,
} from "psn-api";

export async function GET() {
  const psnToken = process.env.NEXT_PUBLIC_PSN_NPSSO as string;
  if (!psnToken) {
    return NextResponse.error();
  }
  const accessCode = await exchangeNpssoForCode(psnToken);
  let accessToken = await exchangeCodeForAccessToken(accessCode);

  const now = new Date();
  const expirationDate = new Date(
    now.getTime() + accessToken.expiresIn * 1000,
  ).toISOString();

  const isAccessTokenExpired =
    new Date(expirationDate).getTime() < now.getTime();

  if (isAccessTokenExpired) {
    accessToken = await exchangeRefreshTokenForAuthTokens(
      accessToken.refreshToken,
    );
  }

  const psnInfo = await getUserTitles(
    { accessToken: accessToken.accessToken },
    "me",
  );
  return NextResponse.json(psnInfo);
}
