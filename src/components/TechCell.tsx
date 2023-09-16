import React from "react";

export default function TechCell({
  number,
  title,
  description,
}: {
  number: string;
  title: string | React.ReactNode;
  description?: string;
}) {
  return (
    <div className="group group mx-auto aspect-square w-full max-w-full bg-gradient-to-br from-primary-orange to-secondary p-0.5 sm:w-[410px] lg:mx-0 lg:h-[410px]">
      <div className="h-full w-full bg-primary-black from-[#411D0A] from-20% to-secondary to-70% transition-all duration-100 group-hover:bg-gradient-to-br">
        <div className="flex h-full w-full flex-col justify-between gap-2 p-6 sm:p-8">
          <p className="w-fit bg-secondary px-4 text-xl text-primary">{number}</p>
          <p className="overflow-y-auto text-primary opacity-0 transition-all group-hover:opacity-100">{description}</p>
          <p className="font-new-alenia text-xl uppercase text-primary md:text-4xl">{title}</p>
        </div>
      </div>
    </div>
  );
}
