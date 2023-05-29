import React from "react";
import {NewAlenia} from "@/assets/fonts";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import HeroImage from "@/components/HeroImage";
import SubTitleText from "@/components/texts/SubTitleText";
import Link from "next/link";

export default function Hero() {


    return <div className="w-full px-20 flex flex-col gap-8 relative my-[5%]">
        <HeroImage/>
        <div>
            <h1 className={`text-primaryWhite ${NewAlenia.className} uppercase text-8xl max-w-4xl font-bold`}>
                Transforming
            </h1>
            <h1 className={`text-primaryWhite ${NewAlenia.className} uppercase text-8xl max-w-4xl font-bold`}>
                the future with
            </h1>
            <h1 className={`text-primaryWhite ${NewAlenia.className} uppercase text-8xl max-w-4xl font-bold`}>
                blockchain
            </h1>
            <h1 className={`text-primaryWhite ${NewAlenia.className} uppercase text-8xl max-w-4xl font-bold`}>
                technology
            </h1>
        </div>
        <SubTitleText>
            Our expertise in
            blockchain, React, and other modern frameworks enables us to develop innovative solutions that drive growth
            and efficiency for our clients.
        </SubTitleText>
        <div>
           <Link href={"/blockchain-projects"}> <OutlinedButton>Find out more</OutlinedButton></Link>
        </div>

    </div>
}
