import React from "react";
import {Visby} from "@/assets/fonts";
import ArrowRight from "../assets/images/svg/arrow-right-large.svg"
import Image from "next/image";
import TextButton from "@/components/buttons/TextButton";
import SecondaryHero from "../assets/images/png/secondary-hero-graphics.png"
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import Link from "next/link";
export default function AboutUsTeaser() {


    return <div className="w-full px-20 relative mb-60">
        <div className="w-full flex flex-row-reverse ">
            <SecondaryTitle>
                we are
                passionate about leveraging cutting-edge technology to innovate and shape the future.
            </SecondaryTitle>
        </div>
        <div className="flex flex-row mt-12 gap-12">
            <Image src={SecondaryHero} alt={"second-hero"} className="absolute w-full left-0 -z-10"/>
            <Image src={ArrowRight} alt={"arrow-right-large"} className="w-20 h-20"/>
            <p className={`text-primaryWhite ${Visby.className} font-normal text-3xl leading-[46px] w-[70%]`}>
                With a forward<span className="font-serif">-</span>thinking approach and a commitment to staying ahead
                of the curve in the rapidly evolving
                tech industry, we are dedicated to providing the best possible solutions to our clients<span
                className="font-serif">&apos;</span> needs.
            </p>
        </div>
        <div className="flex flex-row-reverse items-center gap-4">
            <Image src={ArrowRight} alt={"arrow-right-large"}
                   className="w-6 h-6 relative bottom-[2px]"/>
           <Link href={'/about'}> <TextButton color="secondary">ABOUT US</TextButton> </Link>

        </div>
    </div>
}
