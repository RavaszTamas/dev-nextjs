import {Visby} from "@/assets/fonts";

export default function OutlinedButton({
                                           children,
                                           variant = "filled",
    disabled=false,
                                           type
                                       }: {
    children: string, variant?: "filled" | "transparent", type?: 'submit' | 'reset' | 'button' | undefined, disabled?:boolean
}) {

    return <button
        type={type}
        disabled={disabled}
        className={`${variant === "filled" ? "bg-primaryPurple" : "bg-transparent"} text-primaryWhite text-xl py-[18px] px-14 ${Visby.className} font-bold leading-7 ${variant === "filled" ? "border-0" : "border-[1px] border-primaryWhite"}`}>
        {children}
    </button>

}
