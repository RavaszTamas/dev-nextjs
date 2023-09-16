import React from "react";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import HeroImage from "@/components/HeroImage";
import SubTitleText from "@/components/texts/SubTitleText";
import FeatureCellContainer from "@/components/layout/FeatureCellContainer";
import TeamMembers from "@/components/layout/TeamMembers";
import MainTitle from "@/components/texts/MainTitle";
import HorizontalZigZagSplitter from "@/components/HorizontalZigZagSplitter/HorizontalZigZagSplitter";
import SecondaryHero from "@/components/SecondaryHero";

const featureCells = [
  {
    title: "Vision",
    text: "At Aqela Technologies, we envision ourselves as a standardized, local tech hub brand that resonates with youngsters interested in innovation & technology. We aim to create spaces and programs where young minds can explore the rapidly evolving technological landscape.",
  },
  {
    title: "Mission",
    text: "Our mission is twofold. We seek to create products and services that have a positive societal and economic impact on local and EU communities. At the same time, we're dedicated to fostering an environment that educates and encourages the youth to engage with technology.",
  },
];
export default function About() {
  return (
    <div className="relative mt-12 flex w-full flex-col gap-8 md:my-[5%]">
      <section className="relative flex w-full flex-col gap-8 px-4">
        <HeroImage />
        <MainTitle className="">About Us</MainTitle>
        <SecondaryTitle align="left">OUR STORY</SecondaryTitle>
        <div className="md-12 relative md:left-[10%] md:mb-48">
          <SubTitleText align="left">
            In 2022, a group of diverse individuals with a shared passion for societal change and technological
            innovation came together to establish Aqela Technologies, LLP. As a Romanian tech development company,
            we&apos;re driven by the ambition to become a leading local tech hub and community builder. We&apos;ve
            always been intrigued by highly innovative and, at times, controversial technologies like blockchain. Our
            journey took a significant turn when we won an EU tender at our launch, confirming the wider interest in our
            resourceful ideas.
          </SubTitleText>
        </div>
      </section>
      <FeatureCellContainer featureCells={featureCells} />
      <div className="relative mt-20 w-full px-4 md:mt-40">
        <SecondaryHero className="-top-1/4 block md:hidden" />
        <SecondaryTitle className="relative mb-28 w-full max-w-full pb-6 md:pb-16" align="right">
          developing a secure and user friendly voting system
          <div className="absolute bottom-0 -z-10 w-full">
            <HorizontalZigZagSplitter centerPoint={2} />
          </div>
        </SecondaryTitle>
        <SubTitleText align="left">
          Our primary goal is to develop a secure and user-friendly voting system that offers an alternative to current
          democratic practices. This system respects personal privacy while allowing for weighted voting. We aim to
          increase participation in public decision-making within the EU and enhance the societal benefits of democratic
          decisions. We&apos;ve outlined several key milestones to guide our journey, each marking a significant step
          towards our ambitious objectives.
        </SubTitleText>
      </div>
      <div className="mb-8 px-4">
        <SecondaryTitle className="mb-8 mt-8 w-full max-w-full md:mt-40" align="center">
          Our team
        </SecondaryTitle>
        <SubTitleText className="mx-auto w-full max-w-full md:w-3/4" align="center">
          AQELA is a small but very enthusiastic Romanian company passionate not only about blockchain-based software
          solutions, but also about all other cutting edge technologies. Our software engineers are proficient and
          passionate and our goal is to achieve visionary things in the technology and IT industry.
        </SubTitleText>
      </div>
      <TeamMembers />
    </div>
  );
}
