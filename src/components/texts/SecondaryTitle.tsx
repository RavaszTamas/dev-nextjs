import React from "react";
import { cn } from "@/lib/utils";

export default function SecondaryTitle({
  children,
  align = "left",
  textTransform = "uppercase",
  className = "",
}: {
  children: any;
  align?: "left" | "right" | "center";
  textTransform?: string;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        `text-primary font-new-alenia ${textTransform} max-w-4xl text-2xl font-bold md:text-6xl md:leading-[74px] ${
          align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left"
        } `,
        className,
      )}
    >
      {children}
    </h2>
  );
}
