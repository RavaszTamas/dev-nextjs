import SecondaryTitle from "@/components/texts/SecondaryTitle";
import Image from "next/image";
import CoverTop from "../assets/images/png/top-zig-zag-cover.png";
import CoverBottom from "../assets/images/png/bottom-zig-zag-cover.png";

export default function FeaturesZigZag() {
  return (
    <div className="relative grid w-full gap-20 overflow-hidden px-4 md:px-0 md:pt-[200px]">
      <Image src={CoverTop} alt={"top-right-cover"} className="absolute -top-[7.5%] right-0 -z-10 max-w-[50%]" />
      <Image src={CoverBottom} alt={"bottom-left-cover"} className="absolute bottom-0 left-0 -z-10 max-w-[50%]" />
      <div className="from-secondary to-primary-orange absolute left-1/2 top-[200px] hidden h-full  w-[2px] bg-gradient-to-b lg:block" />
      {/* 1st item */}
      <div className="mt-16 items-center md:grid md:grid-cols-12 md:gap-6">
        {/* Image */}
        <div
          className="mx-auto mb-8 max-w-xl md:order-1 md:col-span-5 md:mb-0 md:w-full md:max-w-none lg:col-span-6"
          data-aos="fade-up"
        ></div>
        {/* Content */}
        <div className="mx-auto max-w-xl md:col-span-7 md:w-full md:max-w-none lg:col-span-6" data-aos="fade-right">
          <div className="md:pr-4 lg:pr-12 xl:pr-16">
            <div className="font-architects-daughter text-primary-orange mb-2 text-left font-roboto text-xl font-medium md:text-right">
              More speed. Less spend
            </div>
            <SecondaryTitle align="right" className="mb-8 text-left text-3xl md:text-right">
              Organization
            </SecondaryTitle>
            <p className="text-primary mb-4 text-left text-base font-medium md:text-right md:text-xl lg:ml-auto lg:w-9/12">
              Proper planning and organization are the foundation for successful project execution and timely delivery
              of exceptional results.
            </p>
            <ul className="text-primary -mb-2 text-lg">
              <li className="mb-2 flex items-center gap-2 md:flex-row-reverse">
                <svg
                  className="mr-2 h-5 w-5 shrink-0 fill-current text-green-500 md:rotate-180"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.4519 17.2019C47.7211 15.9327 49.7789 15.9327 51.0481 17.2019L70.5481 36.7019C71.8173 37.9711 71.8173 40.0289 70.5481 41.2981L51.0481 60.7981C49.7789 62.0673 47.7211 62.0673 46.4519 60.7981C45.1827 59.5289 45.1827 57.4711 46.4519 56.2019L60.4038 42.25H9.75C7.95507 42.25 6.5 40.7949 6.5 39C6.5 37.2051 7.95507 35.75 9.75 35.75H60.4038L46.4519 21.7981C45.1827 20.5289 45.1827 18.4711 46.4519 17.2019Z"
                    fill="#F15A08"
                  />
                </svg>
                <span className={`font-roboto`}>Clear project objectives</span>
              </li>
              <li className="mb-2 flex items-center gap-2 md:flex-row-reverse">
                <svg
                  className="mr-2 h-5 w-5 shrink-0 fill-current text-green-500 md:rotate-180"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.4519 17.2019C47.7211 15.9327 49.7789 15.9327 51.0481 17.2019L70.5481 36.7019C71.8173 37.9711 71.8173 40.0289 70.5481 41.2981L51.0481 60.7981C49.7789 62.0673 47.7211 62.0673 46.4519 60.7981C45.1827 59.5289 45.1827 57.4711 46.4519 56.2019L60.4038 42.25H9.75C7.95507 42.25 6.5 40.7949 6.5 39C6.5 37.2051 7.95507 35.75 9.75 35.75H60.4038L46.4519 21.7981C45.1827 20.5289 45.1827 18.4711 46.4519 17.2019Z"
                    fill="#F15A08"
                  />
                </svg>
                <span className={`font-roboto`}>Strategic foresight and intentional execution</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2nd item */}
      <div className="items-center md:grid md:grid-cols-12 md:gap-6">
        {/* Image */}
        <div
          className="rtl mx-auto mb-8 max-w-xl md:col-span-5 md:mb-0 md:w-full md:max-w-none lg:col-span-6"
          data-aos="fade-up"
        ></div>
        {/* Content */}
        <div className="mx-auto max-w-xl md:col-span-7 md:w-full md:max-w-none lg:col-span-6" data-aos="fade-left">
          <div className="md:pl-4 lg:pl-12 xl:pl-16">
            <div className={`font-architects-daughter text-primary-orange mb-2 font-roboto text-xl font-medium`}>
              More speed. Less spend
            </div>
            <SecondaryTitle align="left" className="mb-8">
              Cutting edge technologies
            </SecondaryTitle>
            <p className="text-primary mb-4 text-left text-xl font-medium lg:mr-auto lg:w-9/12">
              By leveraging cutting<span className="font-serif">-</span>edge technologies, we empower businesses to stay
              ahead of the curve and drive innovation, growth, and success in today&apos;s rapidly evolving digital
              landscape.
            </p>
            <ul className="text-primary -mb-2 text-lg">
              <li className="mb-2 flex items-center">
                <svg
                  className="mr-2 h-5 w-5 shrink-0 fill-current text-green-500"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.4519 17.2019C47.7211 15.9327 49.7789 15.9327 51.0481 17.2019L70.5481 36.7019C71.8173 37.9711 71.8173 40.0289 70.5481 41.2981L51.0481 60.7981C49.7789 62.0673 47.7211 62.0673 46.4519 60.7981C45.1827 59.5289 45.1827 57.4711 46.4519 56.2019L60.4038 42.25H9.75C7.95507 42.25 6.5 40.7949 6.5 39C6.5 37.2051 7.95507 35.75 9.75 35.75H60.4038L46.4519 21.7981C45.1827 20.5289 45.1827 18.4711 46.4519 17.2019Z"
                    fill="#F15A08"
                  />
                </svg>
                <span className={`font-roboto`}>
                  React<span className="font-serif">/</span>Next.js
                </span>
              </li>
              <li className="mb-2 flex items-center">
                <svg
                  className="mr-2 h-5 w-5 shrink-0 fill-current text-green-500"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.4519 17.2019C47.7211 15.9327 49.7789 15.9327 51.0481 17.2019L70.5481 36.7019C71.8173 37.9711 71.8173 40.0289 70.5481 41.2981L51.0481 60.7981C49.7789 62.0673 47.7211 62.0673 46.4519 60.7981C45.1827 59.5289 45.1827 57.4711 46.4519 56.2019L60.4038 42.25H9.75C7.95507 42.25 6.5 40.7949 6.5 39C6.5 37.2051 7.95507 35.75 9.75 35.75H60.4038L46.4519 21.7981C45.1827 20.5289 45.1827 18.4711 46.4519 17.2019Z"
                    fill="#F15A08"
                  />
                </svg>
                <span className={`font-roboto`}>Odoo</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 shrink-0 fill-current text-green-500"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.4519 17.2019C47.7211 15.9327 49.7789 15.9327 51.0481 17.2019L70.5481 36.7019C71.8173 37.9711 71.8173 40.0289 70.5481 41.2981L51.0481 60.7981C49.7789 62.0673 47.7211 62.0673 46.4519 60.7981C45.1827 59.5289 45.1827 57.4711 46.4519 56.2019L60.4038 42.25H9.75C7.95507 42.25 6.5 40.7949 6.5 39C6.5 37.2051 7.95507 35.75 9.75 35.75H60.4038L46.4519 21.7981C45.1827 20.5289 45.1827 18.4711 46.4519 17.2019Z"
                    fill="#F15A08"
                  />
                </svg>
                <span className={`font-roboto`}>Solana</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3rd item */}
      <div className="mb-8 items-center md:grid md:grid-cols-12 md:gap-6">
        {/* Image */}
        <div
          className="mx-auto mb-8 max-w-xl md:order-1 md:col-span-5 md:mb-0 md:w-full md:max-w-none lg:col-span-6"
          data-aos="fade-up"
        ></div>
        {/* Content */}
        <div className="mx-auto max-w-xl md:col-span-7 md:w-full md:max-w-none lg:col-span-6" data-aos="fade-right">
          <div className="md:pr-4 lg:pr-12 xl:pr-16">
            <div className="font-architects-daughter text-primary-orange mb-2 font-roboto text-xl font-medium md:text-right">
              More speed. Less spend
            </div>
            <SecondaryTitle align="right" className="mb-8 text-left md:text-right">
              Projects
            </SecondaryTitle>
            <p className="text-primary mb-4 text-xl font-medium md:text-right lg:ml-auto lg:w-9/12">
              From concept to completion, we approach every project with a focus on delivering exceptional results that
              exceed our clients&apos; expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
