import React from "react";
import { cn } from "@/lib/utils";

export default function MainTitle({ children, className = "" }: { children: any; className?: string }) {
  return (
    <h1
      className={cn(
        "text-primary my-0 w-full text-left font-new-alenia text-4xl font-bold uppercase md:my-36 md:text-9xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
