import Image from "next/image";
import React from "react";
import HeroImageFile from "@/assets/images/png/hero-cropped.png";

export default function HeroImage() {
    return <Image src={HeroImageFile} alt={"hero-image"} className="absolute w-screen -z-10 left-0 top-0"/>

}
