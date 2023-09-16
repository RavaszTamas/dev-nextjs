import React from "react";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import TechCell from "@/components/TechCell";

export default function TechnologyPart() {
  return (
    <div className="w-full md:px-20">
      <SecondaryTitle align="left" className="pl-4 md:pl-0">
        Innovating the future with cutting-edge technology
      </SecondaryTitle>
      <div className="mt-16 grid w-full grid-cols-1 items-center justify-between  gap-8 px-4 lg:grid-cols-2 xl:grid-cols-3">
        <TechCell
          title="Blockchain Development"
          number="01"
          description="Revolutionize your business with blockchain technology. Enhance security, transparency, and streamline operations across industries. Our expert team offers tailored solutions to unlock the full potential of blockchain for your organization. Embark on an innovative journey and seize endless opportunities today."
        />
        <TechCell
          title={
            <span>
              Cloud
              <br /> development
            </span>
          }
          number="02"
          description="Embrace the power of cloud development and revolutionize your operations. Gain enhanced scalability, flexibility, and cost optimization tailored to your needs. Experience seamless access to applications and data anytime, anywhere, securely and reliably. With our expertise, we turn this vision into your reality."
        />
        <TechCell
          title="NFT Enabled Solutions"
          number="03"
          description="Unlock endless possibilities with NFTs beyond digital art at AQELA. Our expertise lies in creating transformative software solutions using non-fungible tokens. Revolutionize supply chain management, tokenize real estate, enable fractional ownership, and seamless transactions."
        />
      </div>
    </div>
  );
}
