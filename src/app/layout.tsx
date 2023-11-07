import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { Exo, NewAlenia, Visby } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import Script from 'next/script'
import Head from "next/head";

export const metadata = {
  title: "Aqela Technologies",
  description: "Aqela Technologies Website",
  icons: {
    icon: "/favicon.ico",
  },
};

const FB_PIXEL = "1060872222024072"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL}');
            fbq('track', 'PageView');
            `,
        }}
      />
      <Head>
        <noscript><img height="1" width="1" style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL}&ev=PageView&noscript=1`}
        /></noscript>

      </Head>
      <body className={cn("bg-primary-black", Exo.variable, NewAlenia.variable, Visby.variable)}>
        <Header />
        <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden 2xl:container lg:p-4 2xl:mx-auto 2xl:p-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
