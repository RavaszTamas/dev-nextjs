import React from "react";
import {NewAlenia} from "@/assets/fonts";

export default function TechCell({number, title}: { number: string; title: string }) {

    return <div className="w-[410px] h-[400px] p-[1px] bg-gradient-to-br from-primaryOrange to-primaryPurple">
        <div className="bg-primaryBlack w-full h-full flex flex-col justify-between p-8">
            <div className="text-primaryWhite bg-primaryPurple w-fit px-4 text-xl">{number}</div>
            <div className={`text-primaryWhite ${NewAlenia.className} text-4xl`}>
                {title}
            </div>
        </div>
    </div>
}
