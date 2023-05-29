import React from "react";
import Image from "next/image";
import MailForm from "@/components/MailForm";
import AqelaWhiteLogo from "../assets/images/svg/aqela-logo-white.svg"
import TextButton from "@/components/buttons/TextButton";
import FacebookIcon from "../assets/images/svg/facebook.svg";
import InstagramIcon from "../assets/images/svg/instagram.svg";
import Link from "next/link";

export default function Footer() {

    return <div id="contact-us" className="2xl:container 2xl:mx-auto relative pb-36 relative">
        <div className="w-full relative">
            <div className="w-full bg-contact-us bg-cover bg-center py-20">
                <MailForm/>
            </div>
        </div>
        <div className="flex flex-row justify-between border-b-2 pb-8 mx-16">
            <Image src={AqelaWhiteLogo} alt={"aqela-white-logo"}/>
            <div className="w-1/2 flex flex-row justify-between mr-8">
                <div className="grid grid-cols-2 gap-8 gap-x-16 justify-start">
                    <div/>
                    <div/>
                    <div>
                        <Link href="/"><TextButton>HOME</TextButton> </Link>
                    </div>
                    <div>
                       <a href="https://anpc.ro/"> <TextButton>ANPC </TextButton> </a>
                    </div>
                    <div>
                       <Link href="/about"> <TextButton>ABOUT US</TextButton></Link>
                    </div>
                    <div>
                        <a href="https://anpc.ro/ce-este-sal/"> <TextButton>ANPC SAL</TextButton> </a>
                    </div>
                    <div>
                        <Link href="/blockchain-projects"> <TextButton>Blockchain Projects</TextButton> </Link>
                    </div>
                    <div>
                        <Link href="/contamy-nation"> <TextButton>ContamyNation</TextButton> </Link>
                    </div>
                </div>
                <div className="flex flex-row gap-8 mb-5">
                    <div className="flex flex-row gap-8 items-end">
                        <a href="https://www.facebook.com/profile.php?id=100091977457554"> <Image src={FacebookIcon} alt={"facebook icon"}/> </a>
                        <a href="https://www.instagram.com/aqelatechnologies/"><Image src={InstagramIcon} alt={"instagram icon"}/></a>
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
        <div className="bg-gradient-to-t from-primaryBlack to-transparent w-full h-1/3 absolute bottom-0 pointer-events-none"/>
    </div>
}
