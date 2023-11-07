import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { Exo, NewAlenia, Visby } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import Script from "next/script";
import Head from "next/head";
import { TheScript, NoScript } from "@/components/scripts/the-script";
import { FB_PIXEL } from "@/assets/constants/other";

export const metadata = {
  title: "Aqela Technologies",
  description: "Aqela Technologies Website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <TheScript />
      <body className={cn("bg-primary-black", Exo.variable, NewAlenia.variable, Visby.variable)}>
        <Header />
        <NoScript />
        <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden 2xl:container lg:p-4 2xl:mx-auto 2xl:p-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
