import {useMemo} from "react";
import Paolo from "@/assets/images/png/team/pal.png";
import Feco from "@/assets/images/png/team/ferenc.png";
import Matteo from "@/assets/images/png/team/mate.png";
import WellOfCourseIKnowHimItsMe from "@/assets/images/png/team/tamas.png";
import Image from "next/image";
import {NewAlenia} from "@/assets/fonts";

const teamMembers = [
    {
        name: <>JUHASZ-BOYLAN<br/>PAL</>,
        image: Paolo
    },
    {
        name: <>DEMETER <br/> FERENC</>,
        image: Feco
    },
    {
        name: <>ANTAL <br/> MATE</>,
        image: Matteo
    },
    {
        name: <> RAVASZ <br/> TAMAS</>,
        image: WellOfCourseIKnowHimItsMe
    },
]
export default function TeamMembers() {

    const members = useMemo(() => {
        return teamMembers.map((item) => <div key={item.name}>
                <Image src={item.image} alt={`${item.name}`} className="mx-auto"/>
                <p className={`${NewAlenia.className} text-primaryWhite text-4xl text-center capitalize `}>{item.name}</p>
            </div>
        )
    }, [])
    return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-8">
        {members}
    </div>
}
