import HeroImage from "@/components/HeroImage";
import MainTitle from "@/components/texts/MainTitle";
import React from "react";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import SubTitleText from "@/components/texts/SubTitleText";
import FeatureCellContainer from "@/components/layout/FeatureCellContainer";
import BottomGlow from "@/assets/images/png/bottom-glow.png";
import BottomGlowPhone from "@/assets/images/png/bottom-glow-phone.png";
import Image from "next/image";
import HorizontalZigZagSplitter from "@/components/HorizontalZigZagSplitter/HorizontalZigZagSplitter";

const featureCells = [
  {
    title: "Easy Voting and Registered Entity",
    text: "Our easy voting function enables quick poll creation. Specifically designed for groups like companies, our registered entity feature streamlines member preregistration, vote weighting, and decision tracking in a simplified dashboard.",
  },
  {
    title: "Customizable Weighted Voting",
    text: "We recognize the unique needs of each poll and offer you a user-friendly system to weigh the voting power of users. Explore the potential of weighted voting and contribute towards refining our democratic system.",
  },
  {
    title: "Security",
    text: "We prioritize your security. Our application not only ensures safe and encrypted voting experiences but is also tested and reviewed extensively to uphold the highest standards of safety.",
  },
  {
    title: "Sociological Studies",
    text: "We take our voting application beyond technology, linking it to sociological studies that enrich the context and understanding of voting behaviors and patterns.",
  },
];
export default function VotingApp() {
  return (
    <div className="relative mt-12 flex flex-col gap-8">
      <Image
        src={BottomGlow}
        alt={"bottomglow"}
        className="absolute bottom-0 left-1/2 -z-10 hidden -translate-x-1/2 md:block"
      />
      <Image
        src={BottomGlowPhone}
        alt={"bottomglow-phone"}
        className="absolute bottom-0 left-1/2 -z-10 block -translate-x-1/2 md:hidden"
      />
      <section className="relative flex flex-col gap-8 px-4">
        <HeroImage className="h-full max-h-none" />
        <MainTitle className="mb-8">AQELA Voting Application</MainTitle>
        <SecondaryTitle className="w-full max-w-full" align="left">
          Democratizing Decision Making
        </SecondaryTitle>
        <SubTitleText className="w-full max-w-full md:mb-32 md:w-[60%]" align="left">
          At AQELA, we believe that all voices matter. That&apos;s why we&apos;ve developed our groundbreaking Voting
          Application - a tool designed to ensure fair, equitable and customizable voting for a variety of use-cases.
          Whether it&apos;s a company decision where votes are weighted differently or local events that require
          socio-economic considerations, our application is built to adapt to your needs. We&apos;re not just
          innovating; we&apos;re redefining what it means to have your say.
        </SubTitleText>
      </section>
      <section className="relative flex flex-col gap-8 px-4">
        <SecondaryTitle>Features</SecondaryTitle>
        <FeatureCellContainer featureCells={featureCells} />
        <SecondaryTitle className="my-8 w-full max-w-full md:my-32" align="center">
          Our Journey and Future Aspirations
        </SecondaryTitle>
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-12">
          <div>
            <SecondaryTitle>Done</SecondaryTitle>
            <SubTitleText>
              Company Launch - AQELA Technologies took flight on 16.06.2022, marking our first step towards
              revolutionizing the voting process.
            </SubTitleText>
            <div className="absolute w-full -scale-x-100">
              <HorizontalZigZagSplitter centerPoint={6} className="h-8 md:h-16" />
            </div>
          </div>
          <div className="hidden md:block" />
          <div className="hidden md:block" />
          <div>
            <SecondaryTitle>In Progress</SecondaryTitle>
            <SubTitleText className="mb-8">
              Income Stabilization Mechanism - We&apos;re ensuring the systematic and elastic flow of our outsourcing
              projects to maintain stability.
            </SubTitleText>
            <SubTitleText>
              Sustainable Upscaling Mechanism - Our growth strategy is centered on flexibility, allowing us to navigate
              and thrive in the current tech climate as a micro-enterprise.
            </SubTitleText>
            <div className="absolute left-0 w-full">
              <HorizontalZigZagSplitter centerPoint={6} className="h-8 md:h-16" />
            </div>
          </div>
          <div>
            <SecondaryTitle>Future</SecondaryTitle>
            <SubTitleText className="mb-8">
              Product Launch - Launching products that we can claim full ownership of is a key element of our growth
              strategy.
            </SubTitleText>
            <SubTitleText className="mb-32">
              Aqela Community Center - We&apos;re planning to establish a physical hub where the youth can learn,
              create, and develop in a modern cyber-environment.
            </SubTitleText>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>
    </div>
  );
}
