import "./HorizontalZigZag.css"
import {useMemo} from "react";

export default function HorizontalZigZagSplitter({centerPoint = 2, height, className=""}: { centerPoint: number | {left: number, center: number, right: number}, height?: string, className?:string }) {
    const splitValue = useMemo(() => {
        if(typeof centerPoint !== "number") return centerPoint;
        let _val: number
        if (centerPoint > 13) {
            _val = 12
        } else if (centerPoint < 1) {
            _val = 1
        } else {
            _val = centerPoint;
        }
        const value = 13 - _val - 1;
        return {
            left: 13 - value - 1,
            center: 1,
            right: 13 - _val - 1
        }
    }, [centerPoint])

    return <div className={`${height ? height : "h-28"} flex flex-row relative w-full ${className}`}>
        <div className={`border-t-4 border-t-primaryPurple h-full relative left-[4px]`}
             style={{width: `${100 / 13 * splitValue.left}%`}}>
            <div className="w-6 h-[18px] bg-primaryPurple rounded-[50%] absolute -top-[12px] -left-[12px]"/>
        </div>
        <div className={`h-full crossed`} style={{width: `${100 / 13 * splitValue.center}%`}}/>
        <div className={`border-b-4 border-b-primaryPurple h-full relative right-[4px]`}
             style={{width: `${100 / 13 * splitValue.right}%`}}>
            <div className="w-6 h-[18px] bg-primaryPurple rounded-[50%] absolute -right-[14px] -bottom-[12px]"/>
        </div>
    </div>
}
