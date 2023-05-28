import React from "react";
import {NewAlenia} from "@/assets/fonts";

export default function SecondaryTitle({children, align = "left", textTransform="uppercase", className=""}: { children: any, align?: "left" | "right" | "center",textTransform?:string, className?:string }) {

    return(
        <h2 className={`text-primaryWhite ${NewAlenia.className} ${textTransform} text-[64px] leading-[74px] max-w-4xl font-bold ${align === "right" ? "text-right" : align === "center"? "text-center" : "text-left"} ${className}`}>
            {children}
        </h2>
    )

}
