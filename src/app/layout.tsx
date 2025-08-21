import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NE ZHA — LOTUS PRINCE",
  description: "Born of chaos, forged in fire, and reborn to defy the heavens. Discover the myth of Ne Zha, the Rebel God and Lotus Prince who dared to challenge fate itself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <html lang="en">
                          <body
                      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
                    >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
