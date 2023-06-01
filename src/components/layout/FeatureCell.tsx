import SecondaryTitle from "@/components/texts/SecondaryTitle";
import SubTitleText from "@/components/texts/SubTitleText";
import '../styles/GradientBorder.css';

export default function FeatureCell({title, text}: { title: string, text: string }) {

    return <div
        className="border-gradient-square-to-br flex flex-col justify-center hover:bg-gradient-to-br hover:from-primaryOrange hover:to-primaryPurple">
        <div className="w-full mt-14 mb-8">
            <SecondaryTitle align="center">{title}</SecondaryTitle>
        </div>
        <div className="w-3/4 mx-auto mb-8">
            <SubTitleText align="center">{text}</SubTitleText>
        </div>
    </div>
}
