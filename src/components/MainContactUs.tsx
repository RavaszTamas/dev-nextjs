import React from "react";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import OutlinedButton from "@/components/buttons/OutlinedButton";

export default function MainContactUs() {
  return (
    <div className="w-full bg-gardient-background-contact-us bg-[100%_100%] md:bg-cover">
      <div className="mx-auto mb-8 mt-16 flex flex-col items-center md:w-7/12">
        <SecondaryTitle align="center" className="text-3xl md:text-6xl">
          ONE PRODUCT
        </SecondaryTitle>
        <SecondaryTitle align="center" className="text-3xl md:text-6xl">
          UNLIMITED SOLUTIONS
        </SecondaryTitle>
        <p className="text-primary mb-12 mt-6 text-center font-visby text-base md:text-xl">
          Whether you need to streamline your business processes, increase efficiency, or enhance customer experience,
          our versatile product provides unlimited solutions tailored to your unique needs.
        </p>
        <a href={"#contact-us"}>
          <OutlinedButton variant="transparent">CONTACT US</OutlinedButton>
        </a>
      </div>
    </div>
  );
}
