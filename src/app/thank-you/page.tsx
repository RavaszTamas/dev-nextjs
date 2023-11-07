import React from "react";
import HeroImage from "@/components/HeroImage";
import MainTitle from "@/components/texts/MainTitle";

export default function ThankYou() {
  return (
    <div className="relative mt-12 flex w-full flex-col gap-8 md:my-[5%]">
      <section className="relative flex w-full flex-col gap-8 px-4">
        <HeroImage />
        <MainTitle className="text-center">Thank you for writing to us!</MainTitle>
      </section>
    </div>
  );
}
