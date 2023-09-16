import "./HorizontalZigZag.css";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

export default function HorizontalZigZagSplitter({
  centerPoint = 2,
  className = "",
}: {
  centerPoint: number | { left: number; center: number; right: number };
  className?: string;
}) {
  const splitValue = useMemo(() => {
    if (typeof centerPoint !== "number") return centerPoint;
    let _val: number;
    if (centerPoint > 13) {
      _val = 12;
    } else if (centerPoint < 1) {
      _val = 1;
    } else {
      _val = centerPoint;
    }
    const value = 13 - _val - 1;
    return {
      left: 13 - value - 1,
      center: 1,
      right: 13 - _val - 1,
    };
  }, [centerPoint]);

  return (
    <div className={cn("relative flex h-10 w-full flex-row md:h-28", className)}>
      <div
        className={`border-t-secondary relative left-[0px] h-full border-t-4`}
        style={{ width: `${(100 / 13) * splitValue.left}%` }}
      >
        <div className="bg-secondary absolute -left-[2px] -top-[6px] h-2 w-2 rounded-[50%]  md:-left-[12px] md:-top-[12px] md:h-5 md:w-5" />
      </div>
      <div className={`crossed h-full`} style={{ width: `${(100 / 13) * splitValue.center}%` }} />
      <div
        className={`border-b-secondary relative right-[0px] h-full border-b-4`}
        style={{ width: `${(100 / 13) * splitValue.right}%` }}
      >
        <div className="bg-secondary absolute -bottom-[6px] -right-[4px] h-2 w-2 rounded-[50%] md:-bottom-[12px] md:-right-[14px] md:h-5 md:w-5" />
      </div>
    </div>
  );
}
