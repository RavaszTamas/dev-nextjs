import React, { useMemo } from "react";

export default function TextButton({
  children,
  color = "primary",
}: {
  children: string;
  color?: "primary" | "secondary" | "black";
}) {
  const classname = useMemo(() => {
    if (color === "primary") {
      return `leading-6 font-bold font-roboto text-primary`;
    } else if (color === "secondary") {
      return `leading-[32px] inline-flex items-center font-bold font-roboto text-primary-orange`;
    } else if (color === "black") {
      return `leading-[32px] inline-flex items-center font-bold font-roboto text-black`;
    }
    return "";
  }, [color]);

  return <button className={`text-base md:text-lg ${classname}`}>{children}</button>;
}
