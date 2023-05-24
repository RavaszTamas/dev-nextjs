import React from "react";
import {NewAlenia, Visby} from "@/assets/fonts";
import OutlinedButton from "@/components/buttons/OutlinedButton";

export default function Hero() {


    return <div className="w-full px-20 flex flex-col gap-8 relative my-[5%]">

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
        <h6 className={`text-primaryWhite leading-7 ${Visby.className} text-xl max-w-4xl font-medium`}>
            Our expertise in
            blockchain, React, and other modern frameworks enables us to develop innovative solutions that drive growth
            and efficiency for our clients.
        </h6>
        <div>
            <OutlinedButton>Find out more</OutlinedButton>
        </div>

    </div>
}
