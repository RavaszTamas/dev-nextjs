"use client";
import { FB_PIXEL } from "@/assets/constants/other";
import Script from "next/script";
import { useLocalStorage } from "usehooks-ts";
import Image from "next/image";

const TheScript = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useLocalStorage("COOKIE-ACCEPTED", "NOT_DECIDED");
  if (isCookieAccepted !== "ACCEPTED") return null;
  return (
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
  );
};

const NoScript = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useLocalStorage("COOKIE-ACCEPTED", "NOT_DECIDED");
  if (isCookieAccepted !== "ACCEPTED") return null;
  return (
    <noscript>
      <Image
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${FB_PIXEL}&ev=PageView&noscript=1`}
        alt="no-script"
      />
    </noscript>
  );
};

export { TheScript, NoScript };
