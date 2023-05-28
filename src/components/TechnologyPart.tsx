import React from "react";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import TechCell from "@/components/TechCell";

export default function TechnologyPart(){

    return <div className="w-full px-20">
        <SecondaryTitle align="left">
            Innovating the future with cutting-edge technology
        </SecondaryTitle>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between mt-16">
            <TechCell title="Blockchain Development" number="01"/>
            <TechCell title="Cloud Development" number="02"/>
            <TechCell title="NFT Enabled Solutions" number="03"/>
        </div>
    </div>
}
