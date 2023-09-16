import Image from "next/image";
import React from "react";
import HeroImageFile from "@/assets/images/png/hero-cropped.png";
import Radiant from "@/assets/images/png/radiant.png";
import { cn } from "@/lib/utils";
export default function HeroImage({ className }: { className?: string }) {
  return (
    <section className={cn("absolute right-0 -z-10 h-full max-h-[22.5rem] w-full md:h-auto", className)}>
      <section className="relative flex h-full flex-row justify-end md:h-min">
        <Image src={HeroImageFile} alt="hero-image" className="-z-10 object-cover" />
        <Image
          src={Radiant}
          alt="radiant"
          className="absolute right-0 top-1/2 -z-20 w-1/2 -translate-y-1/2 object-cover md:w-1/4"
        />
      </section>
    </section>
  );
}
