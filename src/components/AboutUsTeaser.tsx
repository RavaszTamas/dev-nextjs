import React from "react";
import ArrowRight from "../assets/images/svg/arrow-right-large.svg";
import Image from "next/image";
import TextButton from "@/components/buttons/TextButton";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import Link from "next/link";
import SecondaryHero from "@/components/SecondaryHero";

export default function AboutUsTeaser() {
  return (
    <div className="relative mb-60 mt-24 w-full px-4 lg:container md:mt-0 lg:px-0">
      <div className="flex w-full flex-row-reverse ">
        <SecondaryTitle align="right">
          we are passionate about leveraging cutting-edge technology to innovate and shape the future.
        </SecondaryTitle>
      </div>
      <div className="mt-12 flex flex-row gap-3 md:gap-12">
        <SecondaryHero />
        <Image src={ArrowRight} alt={"arrow-right-large"} className="h-7 w-7 md:h-20 md:w-20" />
        <p className="text-primary pr-12 font-roboto text-base font-normal md:w-[70%] md:text-3xl md:leading-[46px]">
          With a forward-thinking approach and a commitment to staying ahead of the curve in the rapidly evolving tech
          industry, we are dedicated to providing the best possible solutions to our clients&apos; needs.
        </p>
      </div>
      <div className="mt-8 flex flex-row-reverse items-center justify-end gap-4 md:mt-0 md:justify-start">
        <Image src={ArrowRight} alt={"arrow-right-large"} className="relative bottom-[2px] h-6 w-6" />
        <Link href={"/about"}>
          <TextButton color="secondary">ABOUT US</TextButton>{" "}
        </Link>
      </div>
    </div>
  );
}
