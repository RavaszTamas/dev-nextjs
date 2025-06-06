import localFont from 'next/font/local';

export const Roboto = localFont({
    src: [
        {
            path: "./roboto/Roboto-VariableFont_wdth,wght.ttf",
            weight: "100 900",
            style: "normal"
        },
        {
            path: "./roboto/Roboto-Italic-VariableFont_wdth,wght.ttf",
            weight: "100 900",
            style: "italic"
        }
    ],
    variable: "--font-roboto"
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
