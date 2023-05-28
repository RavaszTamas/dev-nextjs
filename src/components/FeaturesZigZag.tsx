import SecondaryTitle from "@/components/texts/SecondaryTitle";
import {Visby} from "@/assets/fonts";
import Image from "next/image";
import CoverTop from "../assets/images/png/top-zig-zag-cover.png"
import CoverBottom from "../assets/images/png/bottom-zig-zag-cover.png"
export default function FeaturesZigZag() {
    return <div className="grid gap-20 relative overflow-hidden pt-[200px]">
        <Image src={CoverTop} alt={"top-right-cover"} className="absolute right-0 -z-10 max-w-[50%] -top-[7.5%]"/>
        <Image src={CoverBottom} alt={"bottom-left-cover"} className="absolute left-0 bottom-0 -z-10 max-w-[50%] -bottom-[10.5%]"/>
        <div className="w-[2px] hidden lg:block h-full bg-gradient-to-b from-primaryPurple top-[200px]  to-primaryOrange absolute left-1/2"/>
        {/* 1st item */}
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center mt-16">
            {/* Image */}
            <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
            >
            </div>
            {/* Content */}
            <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
            >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className={`font-architects-daughter text-xl text-primaryOrange mb-2 text-right font-medium ${Visby.className}`}>
                        More speed. Less spend
                    </div>
Imag                    <SecondaryTitle align="right" className="mb-8">Organization</SecondaryTitle>
                    <p className="text-xl text-primaryWhite mb-4 text-right lg:w-9/12 lg:ml-auto font-medium">
                        Proper planning and organization are the foundation for successful project execution and timely
                        delivery of exceptional results.
                    </p>
                    <ul className="text-lg text-primaryWhite -mb-2">
                        <li className="flex flex-row-reverse items-center mb-2 gap-2">
                            <svg
                                className="w-5 h-5 fill-current text-green-500 mr-2 shrink-0 rotate-180"
                                viewBox="0 0 78 78"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.4519 17.2019C47.7211 15.9327 49.7789 15.9327 51.0481 17.2019L70.5481 36.7019C71.8173 37.9711 71.8173 40.0289 70.5481 41.2981L51.0481 60.7981C49.7789 62.0673 47.7211 62.0673 46.4519 60.7981C45.1827 59.5289 45.1827 57.4711 46.4519 56.2019L60.4038 42.25H9.75C7.95507 42.25 6.5 40.7949 6.5 39C6.5 37.2051 7.95507 35.75 9.75 35.75H60.4038L46.4519 21.7981C45.1827 20.5289 45.1827 18.4711 46.4519 17.2019Z" fill="#F15A08"/>
                            </svg>
                            <span className={`${Visby.className}`}>Clear project objectives</span>
                        </li>
                        <li className="flex flex-row-reverse items-center mb-2 gap-2">
                            <svg
                                className="w-5 h-5 fill-current text-green-500 mr-2 shrink-0 rotate-180"
                                viewBox="0 0 78 78"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.4519 17.2019C47.7211 15.9327 49.7789 15.9327 51.0481 17.2019L70.5481 36.7019C71.8173 37.9711 71.8173 40.0289 70.5481 41.2981L51.0481 60.7981C49.7789 62.0673 47.7211 62.0673 46.4519 60.7981C45.1827 59.5289 45.1827 57.4711 46.4519 56.2019L60.4038 42.25H9.75C7.95507 42.25 6.5 40.7949 6.5 39C6.5 37.2051 7.95507 35.75 9.75 35.75H60.4038L46.4519 21.7981C45.1827 20.5289 45.1827 18.4711 46.4519 17.2019Z" fill="#F15A08"/>
                            </svg>
                            <span className={`${Visby.className}`}>Strategic foresight and intentional execution</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* 2nd item */}
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
            >
            </div>
            {/* Content */}
            <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
            >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <div className={`font-architects-daughter text-xl text-primaryOrange mb-2 font-medium ${Visby.className}`}>
                        More speed. Less spend
                    </div>
                    <SecondaryTitle align="left" className="mb-8">Cutting edge technologies</SecondaryTitle>
                    <p className="text-xl text-primaryWhite mb-4 text-left lg:w-9/12 lg:mr-auto font-medium">
                        By leveraging cutting<span className="font-serif">-</span>edge technologies, we empower businesses to stay ahead of the curve and
                        drive
                        innovation, growth, and success in today&apos;s rapidly evolving digital landscape.
                    </p>
                    <ul className="text-lg text-primaryWhite -mb-2">
                        <li className="flex items-center mb-2">
                            <svg
                                className="w-5 h-5 fill-current text-green-500 mr-2 shrink-0"
                                viewBox="0 0 78 78"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.4519 17.2019C47.7211 15.9327 49.7789 15.9327 51.0481 17.2019L70.5481 36.7019C71.8173 37.9711 71.8173 40.0289 70.5481 41.2981L51.0481 60.7981C49.7789 62.0673 47.7211 62.0673 46.4519 60.7981C45.1827 59.5289 45.1827 57.4711 46.4519 56.2019L60.4038 42.25H9.75C7.95507 42.25 6.5 40.7949 6.5 39C6.5 37.2051 7.95507 35.75 9.75 35.75H60.4038L46.4519 21.7981C45.1827 20.5289 45.1827 18.4711 46.4519 17.2019Z" fill="#F15A08"/>
                            </svg>
                            <span className={`${Visby.className}`}>React<span className="font-serif">/</span>Next.js</span>
                        </li>
                        <li className="flex items-center mb-2">
                            <svg
                                className="w-5 h-5 fill-current text-green-500 mr-2 shrink-0"
                                viewBox="0 0 78 78"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.4519 17.2019C47.7211 15.9327 49.7789 15.9327 51.0481 17.2019L70.5481 36.7019C71.8173 37.9711 71.8173 40.0289 70.5481 41.2981L51.0481 60.7981C49.7789 62.0673 47.7211 62.0673 46.4519 60.7981C45.1827 59.5289 45.1827 57.4711 46.4519 56.2019L60.4038 42.25H9.75C7.95507 42.25 6.5 40.7949 6.5 39C6.5 37.2051 7.95507 35.75 9.75 35.75H60.4038L46.4519 21.7981C45.1827 20.5289 45.1827 18.4711 46.4519 17.2019Z" fill="#F15A08"/>
                            </svg>
                            <span className={`${Visby.className}`}>Odoo</span>
                        </li>
                        <li className="flex items-center">
                            <svg
                                className="w-5 h-5 fill-current text-green-500 mr-2 shrink-0"
                                viewBox="0 0 78 78"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.4519 17.2019C47.7211 15.9327 49.7789 15.9327 51.0481 17.2019L70.5481 36.7019C71.8173 37.9711 71.8173 40.0289 70.5481 41.2981L51.0481 60.7981C49.7789 62.0673 47.7211 62.0673 46.4519 60.7981C45.1827 59.5289 45.1827 57.4711 46.4519 56.2019L60.4038 42.25H9.75C7.95507 42.25 6.5 40.7949 6.5 39C6.5 37.2051 7.95507 35.75 9.75 35.75H60.4038L46.4519 21.7981C45.1827 20.5289 45.1827 18.4711 46.4519 17.2019Z" fill="#F15A08"/>
                            </svg>
                            <span className={`${Visby.className}`}>Solana</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* 3rd item */}
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center mb-8">
            {/* Image */}
            <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
            >
            </div>
            {/* Content */}
            <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
            >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className={`font-architects-daughter text-xl text-primaryOrange mb-2 text-right font-medium ${Visby.className}`}>More speed. Less
                        spend
                    </div>
                    <SecondaryTitle align="right" className="mb-8">Projects</SecondaryTitle>
                    <p className="text-xl text-primaryWhite mb-4 text-right lg:w-9/12 lg:ml-auto font-medium">
                        From concept to completion, we approach every project with a focus on delivering exceptional
                        results that exceed our clients&apos; expectations.
                    </p>
                </div>
            </div>
        </div>
    </div>

}
