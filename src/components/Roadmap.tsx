import React from "react";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import { Typography } from "@material-ui/core";
import Image from "next/image";
import RoadmapCover from "@/assets/images/png/roadmap-graphics.png";
import Ellipse from "@/assets/images/png/ellipse.png";
import HorizontalZigZagSplitter from "@/components/HorizontalZigZagSplitter/HorizontalZigZagSplitter";
import { cn } from "@/lib/utils";

interface ElementWithChild {
  children: React.ReactNode;
}

const TypographySecondaryLightArticle = ({ children }: ElementWithChild) => (
  <Typography color="secondary" component="article">
    {children}
  </Typography>
);

const RoadmapHeader = ({ children }: ElementWithChild) => <h1 className="pb-4 font-roboto text-3xl">{children}</h1>;
const RoadmapSubtitle = ({ children }: ElementWithChild) => (
  <h2 className="pb-4 font-roboto text-base font-bold md:text-3xl">{children}</h2>
);
const RoadmapUnit = ({
  title,
  contentUnits,
}: {
  title: string | React.ReactNode;
  contentUnits: {
    subtitle: string;
    description: string;
  }[];
}) => (
  <section className="md:pb-16">
    <RoadmapHeader>{title}</RoadmapHeader>
    {contentUnits.map((item, index) => {
      return (
        <section key={item.subtitle}>
          <RoadmapSubtitle>{item.subtitle}</RoadmapSubtitle>
          <p className={cn(`pb-4 font-roboto text-base md:text-2xl`, index === contentUnits.length - 1 ? "pb-0" : "")}>
            {item.description}
          </p>
        </section>
      );
    })}
  </section>
);

export default function Roadmap() {
  return (
    <div className="relative">
      <Image src={Ellipse} alt="ellipse" className="absolute" />
      <SecondaryTitle className="text-center md:text-left">Roadmap</SecondaryTitle>
      <section className="relative grid grid-cols-1 gap-4 px-8 pb-12 pt-12 sm:grid-cols-2 md:pb-0 md:pt-48">
        <TypographySecondaryLightArticle>
          <RoadmapUnit
            title="Q4 2022"
            contentUnits={[
              {
                subtitle: "Creation of 1000 unique procedurally generated Contamy Nation designs",
                description: "Creation, design and deployment on the blockchain done by our amazing team.",
              },
              {
                subtitle: "Launch Website",
                description:
                  "The artist behind the design of the fish and other sea critters also contributed a lot to the creation of the website! If you see this, it means we're done with this step! Hooray!",
              },
              {
                subtitle: "Launch a Discord server & Build a community!",
                description:
                  "Elevate your love for the planet by joining our eco-friendly NFT collection's Discord community. Connect with like-minded individuals, share your green initiatives, and expand your NFT collection sustainably.",
              },
            ]}
          />
          <HorizontalZigZagSplitter
            centerPoint={{ left: 6, center: 1, right: 6 }}
            className="my-8 flex h-6 -scale-x-100 justify-end md:hidden"
          />
          <RoadmapUnit
            title="Q1 2023"
            contentUnits={[
              {
                subtitle: "Creating a Twitter account",
                description:
                  "Be sure to follow the project's Twitter account (and Discord too, obviously), as all important information will be shared here, as well as upcoming partnerships, projects and other news! Twitter Spaces podcasts are also planned in the near future!",
              },
              {
                subtitle: "Launch of the minting process for the Contamy Nation NFT collection",
                description:
                  "Contamy Nation uses Solana blockchain technology because it is environmentally friendly. The starting price will be 2 SOL for each NFT. Verified members of our Discord community will have priority, so don't forget to join as soon as possible!",
              },
              {
                subtitle: "Partnerships",
                description:
                  "Part of our team is working intensively on estabilishing direct partnerships with charities and other philanthropic crypto projects.",
              },
            ]}
          />
        </TypographySecondaryLightArticle>
        <TypographySecondaryLightArticle>
          <HorizontalZigZagSplitter
            centerPoint={{ left: 6, center: 1, right: 6 }}
            className="my-8 flex h-6 justify-end md:hidden"
          />
          <RoadmapUnit
            title="Q2 2023"
            contentUnits={[
              {
                subtitle: "Launching the Contamy Nation collection on OpenSea",
                description:
                  "At the end of the minting process, the remaining NFTs will be deployed on OpenSea for wider distribution. However, it's worth getting your NFTs as soon as possible, as the quicker you buy, the more value you can get – the starting price on OpenSea will be higher, than the minting price!",
              },
              {
                subtitle: "Benefits for Contamy Nation NFT owners",
                description:
                  "Owners of our NFTs will have voting power on all major decisions concerning the project, they can participate in community events, and they wil be rewarded with exclusive airdrops based on their NFTs tier, including additional NFTs and SOL.",
              },
              {
                subtitle: "Creating stickers for Telegram and Discord",
                description: "Because they will look good and you can show off to your friends!",
              },
              {
                subtitle: "Donation to help clean up the Oceans",
                description:
                  "Proceeds from the sale of the Contamy Nation collection and part of the revenue from royalties received from NFTs' transactions will be donated to partnered charities. Contamy Nation owners will have a say in selecting which charities and organisations will be considered.",
              },
            ]}
          />
          <HorizontalZigZagSplitter
            centerPoint={{ left: 6, center: 1, right: 6 }}
            className="my-8 flex h-6 -scale-x-100 justify-end md:hidden"
          />
          <RoadmapUnit
            title="Q3 2023"
            contentUnits={[
              {
                subtitle: "Continue to build the Discord Community",
                description:
                  "You can chat, discuss, and network with other NFT owners as well as with the creators and participate in community programs. We will randomly give away NFTs and special roles to early adopters and supporters in our Discord server.",
              },
              {
                subtitle: "Be among the first to hear about upcoming AQELA projects",
                description:
                  "Contamy Nation may be our first project, but it certainly won't be our last! Our team is young and enthusiastic, so we have lots of projects planned for the future, which means that if you're a Contamy Nation NFT owner, you'll be among the first to hear about them, and oh boy, do you have a lot to look forward to!",
              },
            ]}
          />
        </TypographySecondaryLightArticle>
        <Image
          src={RoadmapCover}
          alt={"roadmap-cover"}
          className="absolute bottom-0 left-[50%] -z-10 w-full -translate-x-1/2"
        />
      </section>
    </div>
  );
}
