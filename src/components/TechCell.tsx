import React from "react";
import {NewAlenia} from "@/assets/fonts";

export default function TechCell({number, title, description}: { number: string; title: string | React.ReactNode, description?:string }) {

    return <div className="group w-[410px] h-[400px] p-[1px] bg-gradient-to-br from-primaryOrange to-primaryPurple">
        <div className="bg-primaryBlack w-full h-full flex flex-col justify-between p-8">
            <p className="text-primaryWhite bg-primaryPurple w-fit px-4 text-xl">{number}</p>
            <p className="opacity-0 group-hover:opacity-100 text-primaryWhite transition transition-opacity">
                {description}
            </p>
            <p className={`text-primaryWhite ${NewAlenia.className} text-4xl`}>
                {title}
            </p>
        </div>
    </div>
}
