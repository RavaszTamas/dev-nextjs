import SecondaryTitle from "@/components/texts/SecondaryTitle";
import SubTitleText from "@/components/texts/SubTitleText";
import "../styles/GradientBorder.css";

export default function FeatureCell({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-gradient-square-to-br group flex flex-col justify-center">
      <section className="flex relative h-full w-full flex-1 flex-col justify-center px-4 py-2 transition-all duration-100 md:pb-12">
        <div className="absolute left-0 bottom-0 w-full h-full -z-10 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity from-[#411D0A] from-20% to-secondary to-70%"/>
        <div className=" mb-4 mt-4 w-full md:mb-8 md:mt-14">
          <SecondaryTitle align="center">{title}</SecondaryTitle>
        </div>
        <div className="mx-auto mb-4 md:w-3/4">
          <SubTitleText align="center">{text}</SubTitleText>
        </div>
      </section>
    </div>
  );
}
