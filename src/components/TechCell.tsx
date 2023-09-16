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
    <div className="to-secondary from-primary-orange group group mx-auto aspect-square w-[300px] max-w-full bg-gradient-to-br p-0.5 sm:w-[410px] lg:mx-0 lg:h-[400px]">
      <div className="bg-primary-black to-secondary h-full w-full from-[#411D0A] from-20% to-70% transition-all duration-100 group-hover:bg-gradient-to-br">
        <div className="flex h-full w-full flex-col justify-between gap-2 p-6 sm:p-8">
          <p className="text-primary bg-secondary w-fit px-4 text-xl">{number}</p>
          <p className="text-primary overflow-y-auto opacity-0 transition-all group-hover:opacity-100">{description}</p>
          <p className="text-primary font-new-alenia text-xl uppercase md:text-4xl">{title}</p>
        </div>
      </div>
    </div>
  );
}
