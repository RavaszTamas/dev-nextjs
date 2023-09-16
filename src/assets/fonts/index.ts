import localFont from 'next/font/local';

export const Visby = localFont({
    src: [
        {
            path: "./visby/VisbyCF-Heavy.woff",
            weight: "900",
            style: "normal"
        },
        {
            path: "./visby/VisbyCF-HeavyOblique.woff",
            weight: "900",
            style: "italic"
        },
        {
            path: "./visby/VisbyCF-ExtraBold.woff",
            weight: "800",
            style: "normal"
        },
        {
            path: "./visby/VisbyCF-ExtraBoldOblique.woff",
            weight: "800",
            style: "italic"
        },
        {
            path: "./visby/VisbyCF-Bold.woff",
            weight: "700",
            style: "normal"
        },
        {
            path: "./visby/VisbyCF-BoldOblique.woff",
            weight: "700",
            style: "italic"
        },
        {
            path: "./visby/VisbyCF-DemiBold.woff",
            weight: "600",
            style: "normal"
        },
        {
            path: "./visby/VisbyCF-DemiBoldOblique.woff",
            weight: "600",
            style: "italic"
        },
        {
            path: "./visby/VisbyCF-Medium.woff",
            weight: "500",
            style: "normal"
        },
        {
            path: "./visby/VisbyCF-MediumOblique.woff",
            weight: "500",
            style: "italic"
        },
        {
            path: "./visby/VisbyCF-Medium.woff",
            weight: "500",
            style: "normal"
        },
        {
            path: "./visby/VisbyCF-MediumOblique.woff",
            weight: "500",
            style: "italic"
        },
        {
            path: "./visby/VisbyCF-Regular.woff",
            weight: "400",
            style: "normal"
        },
        {
            path: "./visby/VisbyCF-RegularOblique.woff",
            weight: "400",
            style: "italic"
        },
        {
            path: "./visby/VisbyCF-Light.woff",
            weight: "300",
            style: "normal"
        },
        {
            path: "./visby/VisbyCF-LightOblique.woff",
            weight: "300",
            style: "italic"
        },
        {
            path: "./visby/VisbyCF-Thin.woff",
            weight: "100",
            style: "normal"
        },
        {
            path: "./visby/VisbyCF-ThinOblique.woff",
            weight: "100",
            style: "italic"
        },
    ],
    variable:"--font-visby"

});
export const NewAlenia = localFont({
    src:[
        {
            path:"./new_alenia/New Alenia Thin.ttf",
            weight:"100",
            style:"normal"
        },
        {
            path:"./new_alenia/New Alenia.ttf",
            weight:"400",
            style:"normal"
        },
        {
            path:"./new_alenia/New Alenia Bold.ttf",
            weight:"700",
            style:"normal"
        },
    ],
    variable:"--font-new-alenia"
})
export const Exo = localFont({
    src:"./exo/Exo-VariableFont_wght.ttf",
    variable:"--exo"
})
