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
    title: "ERP system",
    text: "Streamline your business operations with a fully integrated ERP system. Tailored to meet the demands of modern enterprises, it ensures efficient workflow and centralized data management.",
  },
  {
    title: "Versatility",
    text: "Maximize your potential with versatile solutions that adapt to your unique business needs, empowering you to tackle challenges with ease and flexibility.",
  },
  {
    title: "Ease of management",
    text: "Simplify complex processes with intuitive management tools that offer clear insights and easy control over your operations.",
  },
  {
    title: "Accuracy",
    text: "Achieve precision in every aspect of your business with solutions designed to eliminate errors and ensure reliable information for decision-making.",
  },
]
;
export default function Odoo() {
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
        <MainTitle className="mb-8">Odoo solutions</MainTitle>
        <SecondaryTitle className="w-full max-w-full" align="left">
          Simplify and optimize operations
        </SecondaryTitle>
        <SubTitleText className="w-full max-w-full md:mb-32 md:w-[60%]" align="left">
          At AQELA, we believe that businesses thrive when solutions are tailored to their unique needs. That’s why we
          specialize in Custom Odoo Solutions—designed to transform your business processes with precision and
          efficiency. Whether you need advanced inventory management, personalized CRM features, or seamless
          integrations with third-party tools, our expertise ensures a solution built around your goals. We&apos;re not
          just customizing software; we&apos;re empowering businesses to achieve their full potential.
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
              We had our first client in 2022 and were able to deliver a integrated solution for a construction company.
            </SubTitleText>
            <div className="absolute w-full -scale-x-100">
              <HorizontalZigZagSplitter centerPoint={6} className="mt-4 h-8 md:mt-0 md:h-16" />
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
              <HorizontalZigZagSplitter centerPoint={6} className="mt-4 h-8 md:mt-0 md:h-16" />
            </div>
          </div>
          <div>
            <SecondaryTitle>Future</SecondaryTitle>
            <SubTitleText className="mb-8">
              Creating a highly customizable application for your business - We&apos;re creating a customizable Odoo
              solution that allows you to tailor your business processes to your needs. We&apos;re also working on
              creating a customizable CRM solution for your business.
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
