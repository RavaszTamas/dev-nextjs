import Image from "next/image";
import React from "react";
import SecondaryHeroImage from "../assets/images/png/secondary-hero-graphics.png";
import { cn } from "@/lib/utils";

const SecondaryHero = ({ className }: { className?: string }) => (
  <Image
    src={SecondaryHeroImage}
    alt={"second-hero"}
    className={cn("absolute left-0 top-2/3 -z-10 h-full object-cover md:top-auto md:w-full", className)}
  />
);

export default SecondaryHero;
