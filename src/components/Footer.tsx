import React from "react";
import Image from "next/image";
import MailForm from "@/components/MailForm";
import AqelaWhiteLogo from "../assets/images/svg/aqela-logo-white.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export default function Footer() {
  return (
    <div id="contact-us" className="relative pb-36 2xl:container 2xl:mx-auto">
      <div className="relative w-full">
        <div className="w-full bg-contact-us bg-cover bg-center py-20">
          <MailForm />
        </div>
      </div>
      <div className="mx-6 flex flex-col gap-8 border-b-2 pb-8 md:mx-8 md:flex-row md:justify-between md:gap-0">
        <Image src={AqelaWhiteLogo} alt={"aqela-white-logo"} />
        <div className="flex w-full flex-col justify-between md:mr-8 md:w-2/3 md:flex-row lg:w-1/2">
          <div className="grid grid-cols-2 justify-start gap-x-1 gap-y-2 md:gap-8 md:gap-x-16 md:gap-y-12">
            <div>
              <Link href="/">
                <Button className="p-0" variant="ghost">
                  HOME
                </Button>
              </Link>
            </div>
            <div>
              <a href="https://anpc.ro/">
                <Button className="p-0" variant="ghost">
                  ANPC{" "}
                </Button>
              </a>
            </div>
            <div>
              <Link href="/about">
                <Button className="p-0" variant="ghost">
                  ABOUT US
                </Button>
              </Link>
            </div>
            <div>
              <a href="https://anpc.ro/ce-este-sal/">
                <Button className="p-0" variant="ghost">
                  ANPC SAL
                </Button>
              </a>
            </div>
            <div>
              <Link href="/blockchain-projects">
                <Button className="p-0 text-xs md:text-sm" variant="ghost">
                  Blockchain Projects
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/contamy-nation">
                <Button className="p-0" variant="ghost">
                  ContamyNation
                </Button>
              </Link>
            </div>
          </div>
          <div className="mb-5 mt-5 flex flex-row gap-8 md:mt-0 ">
            <div className="flex flex-row items-end gap-8 md:flex-col lg:flex-row">
              <a href="https://www.facebook.com/profile.php?id=100091977457554">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/aqelatechnologies/">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-16 mt-8 flex flex-col justify-between gap-8 text-center md:flex-row md:gap-0 md:text-start">
        <p className="text-primary">©Aqela Technologies. All rights reserved.</p>
        <div className="flex flex-row justify-center gap-6  text-primary md:mr-8  md:justify-start ">
          <Link href={"terms-and-conditions"}>
            <p>Terms and conditions</p>
          </Link>
          <Link href={"/privacy-policy"} className="text-white">
            <p>Privacy</p>
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-primary-black to-transparent" />
    </div>
  );
}
