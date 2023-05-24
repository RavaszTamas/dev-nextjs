import React, {useMemo} from "react";
import {Visby} from "@/assets/fonts";


export default function TextButton({children, color="primary"}: { children: string, color?:"primary" | "secondary" }) {
    const classname = useMemo(()=>{
        if(color === "primary"){
            return `text-lg leading-6 font-bold ${Visby.className} text-primaryWhite`
        }
        else if(color === "secondary") {
            return `text-lg leading-[32px] inline-flex items-center font-bold ${Visby.className} text-primaryOrange`

        }
        return"";
    },[color])

    return <button className={classname}>{children}</button>
}
