import React from "react";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import {Visby} from "@/assets/fonts";
import OutlinedButton from "@/components/buttons/OutlinedButton";

export default function MainContactUs() {
    return <div className="bg-gardient-background-contact-us bg-cover w-full">
        <div className="flex flex-col items-center w-7/12 mx-auto mb-8 mt-16">
            <SecondaryTitle align="center">ONE PRODUCT</SecondaryTitle>
            <SecondaryTitle align="center">UNLIMITED SOLUTIONS</SecondaryTitle>
            <p className={`${Visby.className} text-xl text-primaryWhite text-center mt-6 mb-12`}>
                Whether you need to streamline your business processes, increase efficiency, or enhance customer
                experience,
                our versatile product provides unlimited solutions tailored to your unique needs.
            </p>
            <a href={"#contact-us"}> <OutlinedButton variant="transparent">CONTACT US</OutlinedButton> </a>
        </div>
    </div>
}
