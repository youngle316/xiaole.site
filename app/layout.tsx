import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "~/provider/ThemeProvider";
import "./globals.css";

const nunito = localFont({ src: "../public/fonts/Exo2.ttf" });

const ogImage =
  "https://tohvlvtcdfndxfxeeeaa.supabase.co/storage/v1/object/public/my-website/assets/SCR-20231008-oush.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://xiaole.site"),
  title: "XiaoLe Site",
  description: "XiaoLe Site - Developer, gamer, and creator",
  authors: [{ url: "https://xiaole.site", name: "xiaole" }],
  keywords: "youngle, xiaole, developer, gamer, creator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: {
      default: "XiaoLe Site",
      template: "%s | xiaole",
    },
    description: "XiaoLe Site - Developer, gamer, and creator",
    siteName: "XiaoLe Site",
    locale: "en",
    type: "website",
    url: "https://xiaole.site",
    images: [
      {
        url: ogImage,
        width: 1920,
        height: 1440,
      },
    ],
  },
  twitter: {
    site: "https://twitter.com/youngle316",
    card: "summary_large_image",
    title: "XiaoLe Site",
    description: "XiaoLe Site - Developer, gamer, and creator",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className}`}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <main className="m-5 flex flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
