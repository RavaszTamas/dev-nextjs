"use client";
import React from "react";
import Image from "next/image";
import AqelaLogo from "../assets/images/svg/aqela.svg";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between bg-primary-black px-4 py-5 2xl:container md:px-20 2xl:mx-auto">
      <Link href={"/"}>
        <Image className="" src={AqelaLogo} alt={"aqela-logo"} />
      </Link>
      <div className="flex md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon className="stroke-secondary" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" className="min-w-[12rem]">
            <DropdownMenuLabel className="mb-4 hidden text-2xl font-bold">Menu</DropdownMenuLabel>
            <Link href="/">
              <DropdownMenuItem>
                <Button variant="ghost" className="px-0">
                  Home
                </Button>
              </DropdownMenuItem>
            </Link>
            <Link href="/about">
              <DropdownMenuItem>
                <Button variant="ghost" className="px-0">
                  About Us
                </Button>
              </DropdownMenuItem>
            </Link>
            <Link href="/blockchain-projects">
              <DropdownMenuItem>
                <Button variant="ghost" className="px-0">
                  Blockchain Projects
                </Button>
              </DropdownMenuItem>
            </Link>
            <Link href="/contamy-nation">
              <DropdownMenuItem>
                <Button variant="ghost" className="px-0">
                  Contamy Nation
                </Button>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden w-1/2 flex-row items-center justify-between md:flex">
        <Link href="/about">
          <Button variant="ghost" className="text-xl">
            About us
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-xl">
              SERVICES
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="text-xl">
              <Link href="/blockchain-projects">Blockchain Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-xl">
              <Link href="/contamy-nation">Contamy Nation</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <a href={"#contact-us"}>
          <Button variant="ghost" className="text-xl">
            Contact us
          </Button>
        </a>
      </div>
    </header>
  );
}
