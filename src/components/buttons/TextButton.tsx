'use client';
import React, {useMemo} from "react";
import {Visby} from "@/assets/fonts";


export default function TextButton({children, color="primary", onClick=()=>{}}: { children: string, color?:"primary" | "secondary"|"black", onClick?:(event: React.MouseEvent<HTMLButtonElement>)=>void }) {
    const classname = useMemo(()=>{
        if(color === "primary"){
            return `px-6 pb-3 pt-4 text-lg leading-6 font-bold ${Visby.className} text-primaryWhite hover:bg-primaryPurple hover:text-primaryWhite transition-all`
        }
        else if(color === "secondary") {
            return `px-6 pb-3 pt-4 text-lg leading-[32px] inline-flex items-center font-bold ${Visby.className} text-primaryOrange hover:bg-primaryOrange hover:text-primaryWhite transition-all`

        }
        else if(color === "black") {
            return `px-6 pb-3 pt-4 text-lg leading-[32px] inline-flex items-center font-bold ${Visby.className} text-black`

        }
        return"";
    },[color])

    return <button className={classname} onClick={onClick}>{children}</button>
}
