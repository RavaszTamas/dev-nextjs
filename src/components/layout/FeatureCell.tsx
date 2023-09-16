import SecondaryTitle from "@/components/texts/SecondaryTitle";
import SubTitleText from "@/components/texts/SubTitleText";
import "../styles/GradientBorder.css";

export default function FeatureCell({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-gradient-square-to-br group flex flex-col justify-center">
      <section className="flex h-full w-full flex-1 flex-col justify-center from-[#411D0A] from-20% to-secondary to-70% transition-all duration-100 group-hover:bg-gradient-to-br">
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
