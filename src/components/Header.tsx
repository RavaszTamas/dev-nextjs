import Image from "next/image";
import AqelaLogo from "../assets/images/svg/aqela.svg";
import Search from "../assets/images/svg/search.svg";
import TextButton from "@/components/buttons/TextButton";
import Link from "next/link";

export default function Header() {


    return <header
        className="px-20 py-5 flex flex-row items-center justify-between 2xl:container 2xl:mx-auto bg-primaryBlack">
        <Link href={"/"}><Image className="" src={AqelaLogo} alt={"aqela-logo"}/></Link>
        <div className="flex flex-row items-center justify-between w-1/2">
            <Link href={"/about"}> <TextButton>About us</TextButton></Link>
            <Link href={"/voting-app"}>  <TextButton>Services</TextButton> </Link>
            <a href={"#contact-us"}><TextButton>Contact us</TextButton></a>
            <Image src={Search} alt={"search"}/>
        </div>
    </header>
}

