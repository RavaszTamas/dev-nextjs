import React from "react";
import Image from "next/image";
import ContactUsBackground from "../assets/images/png/contact-us-background.png";
import MailForm from "@/components/MailForm";
import AqelaWhiteLogo from "../assets/images/svg/aqela-logo-white.svg"
import TextButton from "@/components/buttons/TextButton";
import FacebookIcon from "../assets/images/svg/facebook.svg";
import InstagramIcon from "../assets/images/svg/instagram.svg";
import TwitterIcon from "../assets/images/svg/twitter.svg";

export default function Footer() {

    return <div id="contact-us" className="2xl:container 2xl:mx-auto relative pb-36 relative">
        <div className="w-full relative">
            <Image src={ContactUsBackground} alt={"contact-us-background"} className="w-full"/>
            <div className="absolute top-1/2 -translate-y-1/2 w-full">
                <MailForm/>
            </div>
        </div>
        <div className="flex flex-row justify-between border-b-2 pb-8 mx-16">
            <Image src={AqelaWhiteLogo} alt={"aqela-white-logo"}/>
            <div className="w-1/2 flex flex-row justify-between mr-8">
                <div className="grid grid-cols-2 gap-2 justify-start">
                    <div>
                        <TextButton>HOME</TextButton>
                    </div>
                    <div>
                        <TextButton>Blockchain development</TextButton>
                    </div>
                    <div>
                        <TextButton>ABOUT US</TextButton>
                    </div>
                    <div>
                        <TextButton>ERP Development</TextButton>
                    </div>
                    <div>
                        <TextButton>SERVICES</TextButton>
                    </div>
                    <div>
                        <TextButton>Frontend Development</TextButton>
                    </div>
                </div>
                <div className="flex flex-row gap-8 mb-5">
                    <div className="flex flex-row gap-8 items-end">
                        <Image src={FacebookIcon} alt={"facebook icon"}/>
                        <Image src={InstagramIcon} alt={"instagram icon"}/>
                        <Image src={TwitterIcon} alt={"twitter icon"}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row mt-8 justify-between mx-16">
            <p className="text-primaryWhite">©Aqela Technologies. All rights reserved.</p>
            <div className="flex flex-row text-primaryWhite gap-6 mr-8">
                <p>Terms and conditions</p>
                <p>Privacy</p>
            </div>
        </div>
        <div className="bg-gradient-to-t from-primaryBlack to-transparent w-full h-1/3 absolute bottom-0"/>
    </div>
}
