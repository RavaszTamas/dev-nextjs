import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import HeroImage from "@/assets/images/png/hero-graphics.png";
import AboutUsTeaser from "@/components/AboutUsTeaser";
import TechnologyPart from "@/components/TechnologyPart";
import NftProjectDescription from "@/components/NftProjectDescription";
import MainContactUs from "@/components/MainContactUs";
import FeaturesZigZag from "@/components/FeaturesZigZag";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative 2xl:container 2xl:mx-auto">
        <Image src={HeroImage} alt={"hero-image"} className="absolute w-screen -z-10 left-0s -top-[5%]"/>
        <Hero/>
        <AboutUsTeaser/>
        <TechnologyPart/>
        <NftProjectDescription/>
        <MainContactUs/>
        <FeaturesZigZag/>
    </main>
  )
}
