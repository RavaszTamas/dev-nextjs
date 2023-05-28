import React from "react";
import Hero from "@/components/Hero";
import AboutUsTeaser from "@/components/AboutUsTeaser";
import TechnologyPart from "@/components/TechnologyPart";
import NftProjectDescription from "@/components/NftProjectDescription";
import MainContactUs from "@/components/MainContactUs";
import FeaturesZigZag from "@/components/FeaturesZigZag";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative 2xl:container 2xl:mx-auto">
        <Hero/>
        <AboutUsTeaser/>
        <TechnologyPart/>
        <NftProjectDescription/>
        <MainContactUs/>
        <FeaturesZigZag/>
    </main>
  )
}
