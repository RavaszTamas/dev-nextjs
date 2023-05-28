import {useMemo} from "react";
import Paolo from "@/assets/images/png/team/pal.png";
import Feco from "@/assets/images/png/team/ferenc.png";
import Matteo from "@/assets/images/png/team/mate.png";
import WellOfCourseIKnowHimItsMe from "@/assets/images/png/team/tamas.png";
import Image from "next/image";
import {NewAlenia} from "@/assets/fonts";

const teamMembers = [
    {
        name: "Juhasz Boylan Pal",
        image: Paolo
    },
    {
        name: "DEMETER FERENC",
        image: Feco
    },
    {
        name: "ANTAL MATE",
        image: Matteo
    },
    {
        name: "RAVASZ TAMAS",
        image: WellOfCourseIKnowHimItsMe
    },
]
export default function TeamMembers() {

    const members = useMemo(() => {
        return teamMembers.map((item) => <div key={item.name}>
                <Image src={item.image} alt={`${item.name}`}/>
                <p className={`${NewAlenia.className} text-primaryWhite text-4xl`}>{item.name}</p>
            </div>
        )
    }, [])
    return <div className="flex flex-row justify-between">
        {members}
    </div>
}
