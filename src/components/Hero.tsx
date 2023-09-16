import React from "react";
import HeroImage from "@/components/HeroImage";
import SubTitleText from "@/components/texts/SubTitleText";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const heroTexts = ["Transforming", "the future with", "blockchain", "technology"];
export default function Hero() {
  return (
    <div className="relative my-[5%] flex w-full flex-col gap-8 px-4 lg:container lg:px-0">
      <HeroImage />
      <div>
        {heroTexts.map((item) => (
          <h1 key={item} className="text-primary max-w-4xl font-new-alenia text-2xl font-bold uppercase md:text-8xl">
            {item}
          </h1>
        ))}
      </div>
      <SubTitleText>
        Our expertise in blockchain, React, and other modern frameworks enables us to develop innovative solutions that
        drive growth and efficiency for our clients.
      </SubTitleText>
      <div>
        <Link href={"/blockchain-projects"}>
          <Button className="px-14 py-7">Find out more</Button>
        </Link>
      </div>
    </div>
  );
}
