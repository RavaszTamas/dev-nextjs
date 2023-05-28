import {Visby} from "@/assets/fonts";

export default function SubTitleText({children, align = "left", className=""}: { children: any, align?: "left" | "right" | "center",className?:string }) {

    return <h6
        className={`text-primaryWhite leading-7 ${Visby.className} text-xl max-w-4xl font-medium ${align === "right" ? "text-right" : align === "center"? "text-center" : "text-left"} ${className}`}>{children}</h6>
}
