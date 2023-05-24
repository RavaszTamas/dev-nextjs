import {NewAlenia} from "@/assets/fonts";
import React from "react";

export default function SecondaryTitle({children, align = "right", textTransform="uppercase"}: { children: string, align?: "left" | "right" | "center",textTransform?:string }) {

    return(
        <h2 className={`text-primaryWhite ${NewAlenia.className} ${textTransform} text-[64px] leading-[74px] max-w-4xl font-bold ${align === "right" ? "text-right" : align === "center"? "text-center" : "text-left"}`}>
            {children}
        </h2>
    )

}
