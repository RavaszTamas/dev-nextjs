import Image from "next/image";
import AqelaLogo from "../assets/images/svg/aqela.svg";
import Search from "../assets/images/svg/search.svg";
import TextButton from "@/components/buttons/TextButton";
export default function Header() {


    return <header className="px-20 py-5 flex flex-row items-center justify-between 2xl:container 2xl:mx-auto bg-primaryBlack">
        <Image  className="" src={AqelaLogo} alt={"aqela-logo"}/>
        <div className="flex flex-row items-center justify-between w-1/2">
            <TextButton>About us</TextButton>
            <TextButton>Services</TextButton>
            <TextButton>Contact us</TextButton>
            <Image src={Search} alt={"search"}/>
        </div>
    </header>
}
