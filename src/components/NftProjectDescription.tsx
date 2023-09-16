import React from "react";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import Image from "next/image";
import NftGradientPhoto from "../assets/images/png/nft-gradient-photo.png";
import Link from "next/link";

export default function NftProjectDescription() {
  return (
    <div className="mt-12 flex flex-col items-center md:mt-0 md:flex-row md:pl-20">
      <div className="flex w-full flex-col gap-9 px-4 md:w-1/3 md:px-0">
        <SecondaryTitle align="left">
          <span className="text-2xl md:text-9xl"> NFT </span> <br /> project
        </SecondaryTitle>
        <p className="text-primary w-full font-visby text-base md:w-11/12 md:text-xl">
          Explore the Contamy<span className="font-serif">-</span>Nation: an NFT collection on the Solana blockchain
          showcasing the mutated marine life surviving in our polluted oceans. Join our growing community committed to
          raising awareness about ocean pollution and contributing to a cleaner environment. By owning a Contamy
          <span className="font-serif">-</span>Nation NFT, you<span className="font-serif">&apos;</span>re actively
          supporting our cause, with 10<span className="font-serif">%</span> of earnings donated to NGOs fighting
          against ocean pollution.
        </p>
        <Link href={"/contamy-nation"}>
          <OutlinedButton>CHECK OUT</OutlinedButton>
        </Link>
      </div>
      <Image src={NftGradientPhoto} alt={"nft-gradient-photo"} className="w-full md:w-2/3" />
    </div>
  );
}
