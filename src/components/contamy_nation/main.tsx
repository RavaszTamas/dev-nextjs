'use client';
import HeroImage from "@/components/HeroImage";
import React, {useMemo} from "react";
import MainTitle from "@/components/texts/MainTitle";
import SubTitleText from "@/components/texts/SubTitleText";
import {AppInitializer, MintZone} from "@/components/contamy_nation";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SafePalWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    SolongWalletAdapter,
    BraveWalletAdapter,
    ExodusWalletAdapter,
    CloverWalletAdapter,
    MathWalletAdapter
} from "@solana/wallet-adapter-wallets";
import {rpcHost, candyMachineId, network} from "@/components/contamy_nation/config";
import {createTheme, ThemeProvider} from "@material-ui/core";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import {Exo, Visby} from "@/assets/fonts";
import HorizontalZigZagSplitter from "@/components/HorizontalZigZagSplitter/HorizontalZigZagSplitter";
import CardCarousel from "@/components/contamy_nation/CardCarousel";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import InstagramIcon from "@/components/InstagramIcon";
import Button from "@material-ui/core/Button";
import Roadmap from "@/components/Roadmap";

export function ContamyNationApp() {

    return <div className="w-full flex flex-col gap-8 relative mt-[5%]">
        <HeroImage/>
        <MainTitle className="mb-8">
            Contamy
            <br/>
            Nation
        </MainTitle>
        <SubTitleText className="mb-60">Walking amongst our once beautiful forests, rivers and the skeletal concrete remnants of the great
            outdoors, it feels almost post-apocalyptic. As all living things on Earth, fishes and other sea-creatures
            are also capable of surviving and adapting. But what mutations did the radiation cause in their bodies? How
            have they evolved over the last few decades as humanity has done nothing but continue to pollute and destroy
            their natural habitat? What exactly was the biological response of these organisms to the toxic pollutants
            in the water? We want to bring awareness to the pollution of the oceans by creating these sea creatures that
            are (and will be) doomed due to humanity&apos;s irresponsible and inconsiderate behavior.
        </SubTitleText>
        <section
            className="mt-32 bg-minting flex flex-col justify-center min-h-[400px] bg-center bg-cover items-center">
            <SecondaryTitle>BE PART OF THE CHANGE</SecondaryTitle>
            <MintZone candyMachineId={candyMachineId}/>
        </section>
        <section className="w-full">
            <SecondaryTitle align="right" className="relative w-full max-w-full mb-16 xl:mb-8">Join us in making <br/> a
                difference.
                <div className="absolute w-9/12 -bottom-[20px] right-0">
                    <HorizontalZigZagSplitter height={"h-12"} centerPoint={{left: 0, center: 1, right: 6}}
                                              className="justify-end"/>
                </div>
            </SecondaryTitle>
            <SubTitleText>With every Contamy<span className="font-serif">-</span>Nation NFT purchase, you aren&apos;t
                just owning a piece of art;
                you&apos;re taking a
                stand against ocean pollution. W<span className="font-serif">e&apos;</span>re committed to donating
                10<span className="font-serif">%</span>
                of our earnings to NGOs fighting for
                cleaner oceans. By having a Contamy<span className="font-serif">-</span>Nation NFT in your wallet,
                you&apos;re actively showing your support
                for
                a cleaner, more sustainable future.</SubTitleText>
        </section>
        <section>
            <CardCarousel/>
        </section>
        <section className="bg-artist bg-center bg-cover flex flex-col gap-8 p-16">
            <SecondaryTitle align="center" className="max-w-full w-full">The Artist</SecondaryTitle>
            <SubTitleText align="center" className="max-w-full w-7/12 mx-auto">Kiora is the wonderful artist we had the
                pleasure to work with. She is always full of creative
                and ground<span className="font-serif">-</span>breaking ideas, and her enthusiasm for our project is
                immeasurable. If you like the design of
                our Contamy<span className="font-serif">-</span>nation sea critters, be sure to check out her Instagram
                page, and support her on Patreon,
                because this is just the tip of the iceberg <span className="font-serif">-</span> she is working on
                many, many more interesting
                projects!</SubTitleText>
            <div className="mx-auto">
                <a href={"https://www.instagram.com/_kiora_2.0_/"}>
                    <Button className="cursor-pointer">
                        <InstagramIcon/>
                        <label className={`${Visby.className} text-primaryWhite cursor-pointer ml-2`}><span
                            className="font-serif">_</span>KIORA<span className="font-serif">_</span>2.0<span
                            className="font-serif">_</span></label>
                    </Button>
                </a>

            </div>
        </section>
        <section>
            <Roadmap/>
        </section>
    </div>
}

const theme = createTheme({
    palette: {
        type: "dark",
        secondary: {
            main: "#FFF",
        },
    },
    typography: {
        fontFamily: `${Exo.style.fontFamily}`,
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: "flex-start",
            },
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: "12px 16px",
            },
            startIcon: {
                marginRight: 8,
            },
            endIcon: {
                marginLeft: 8,
            },
            contained: {
                backgroundColor: "#512A9E",
                "&:hover": {
                    backgroundColor: "#745F9E",
                }
            }
        },
    },
});

export default function ContamyNationWrapper() {

    // Custom RPC endpoint.
    const endpoint = useMemo(() => rpcHost, []);

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(
        () => [
            new LedgerWalletAdapter(),
            new PhantomWalletAdapter(),
            new SafePalWalletAdapter(),
            new SlopeWalletAdapter({network}),
            new SolflareWalletAdapter({network}),
            new SolletExtensionWalletAdapter(),
            new SolletWalletAdapter(),
            new SolongWalletAdapter(),
            new BraveWalletAdapter(),
            new ExodusWalletAdapter(),
            new CloverWalletAdapter(),
            new MathWalletAdapter()
        ],
        []
    );

    return <AppInitializer>
        <ThemeProvider theme={theme}>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect={true}>
                    <WalletModalProvider>
                        <ContamyNationApp/>
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </ThemeProvider>
    </AppInitializer>
}
