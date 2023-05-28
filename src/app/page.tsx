import React from "react";
import Hero from "@/components/Hero";
import AboutUsTeaser from "@/components/AboutUsTeaser";
import TechnologyPart from "@/components/TechnologyPart";
import NftProjectDescription from "@/components/NftProjectDescription";
import MainContactUs from "@/components/MainContactUs";
import FeaturesZigZag from "@/components/FeaturesZigZag";

export default function Home() {
    return (
        <>
            <Hero/>
            <AboutUsTeaser/>
            <TechnologyPart/>
            <NftProjectDescription/>
            <MainContactUs/>
            <FeaturesZigZag/>
        </>
    )
}
