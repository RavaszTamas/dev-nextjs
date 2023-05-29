import React from "react";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import {Visby} from "@/assets/fonts";
import Image from "next/image";
import NftGradientPhoto from "../assets/images/png/nft-gradient-photo.png";
import Link from "next/link";

export default function NftProjectDescription() {
    return <div className="flex flex-row pl-20 items-center">
        <div className="flex flex-col w-1/3  gap-9">
            <SecondaryTitle align="left">
                <span className="text-9xl"> NFT </span> <br/> project
            </SecondaryTitle>
            <p className={`text-primaryWhite ${Visby.className} text-xl w-11/12`}>
                Explore the Contamy<span className="font-serif">-</span>Nation:
                an NFT collection on the Solana blockchain showcasing the mutated marine life surviving in our polluted
                oceans. Join our growing community committed to raising awareness about ocean pollution and contributing
                to
                a cleaner environment. By owning a Contamy<span className="font-serif">-</span>Nation NFT, you<span
                className="font-serif">&apos;</span>re actively supporting our cause, with 10<span
                className="font-serif">%</span> of earnings donated to NGOs fighting against ocean pollution.
            </p>
            <Link href={"/contamy-nation"}><OutlinedButton>CHECK OUT</OutlinedButton></Link>
        </div>
        <Image src={NftGradientPhoto} alt={"nft-gradient-photo"} className="w-2/3"/>

    </div>
}
