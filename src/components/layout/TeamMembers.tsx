import { useMemo } from "react";
import TeamBG from "@/assets/images/png/team/team-bg.png";
import TeamBGVertical from "@/assets/images/png/team/team-bg-vertical.png";
import Paul from "@/assets/images/png/team/pal.png";
import Ferenc from "@/assets/images/png/team/ferenc.png";
import Mate from "@/assets/images/png/team/mate.png";
import WellOfCourseIKnowHimItsMe from "@/assets/images/png/team/tamas.png";
import Image from "next/image";

const teamMembers = [
  {
    id: "pal",
    name: (
      <>
        JUHASZ-BOYLAN
        <br />
        PAL
      </>
    ),
    image: Paul,
  },
  {
    id: "feri",
    name: (
      <>
        DEMETER <br className="hidden md:block" />
        FERENC
      </>
    ),
    image: Ferenc,
  },
  {
    id: "mate",
    name: (
      <>
        ANTAL <br className="hidden md:block" />
        MATE
      </>
    ),
    image: Mate,
  },
  {
    id: "ravasz",
    name: (
      <>
        RAVASZ <br className="hidden md:block" />
        TAMAS
      </>
    ),
    image: WellOfCourseIKnowHimItsMe,
  },
];
export default function TeamMembers() {
  const members = useMemo(() => {
    return teamMembers.map((item) => (
      <div key={item.id}>
        <Image src={item.image} alt={`${item.name}`} className="mx-auto" />
        <p className={`text-center font-new-alenia text-4xl capitalize text-primary `}>{item.name}</p>
      </div>
    ));
  }, []);
  return (
    <div className="relative grid grid-cols-1 justify-between gap-8 overflow-hidden pb-12 md:grid-cols-2 md:pb-0 xl:grid-cols-4">
      <Image
        src={TeamBG}
        alt="team-bg"
        className="absolute left-0 top-1/2 -z-10 hidden h-full -translate-y-1/2 object-cover md:block"
      />
      <Image
        src={TeamBGVertical}
        alt="team-bg-vertical"
        className="absolute bottom-0 left-0 -z-10 block h-full w-full object-cover md:hidden"
      />
      {members}
    </div>
  );
}
