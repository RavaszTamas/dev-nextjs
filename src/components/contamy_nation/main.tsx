'use client';
import HeroImage from "@/components/HeroImage";
import React, {useMemo} from "react";
import MainTitle from "@/components/texts/MainTitle";
import SubTitleText from "@/components/texts/SubTitleText";
import OutlinedButton from "@/components/buttons/OutlinedButton";
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
import {alpha, createTheme, ThemeProvider} from "@material-ui/core";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import {Exo, Visby} from "@/assets/fonts";
import HorizontalZigZagSplitter from "@/components/HorizontalZigZagSplitter/HorizontalZigZagSplitter";
import CardCarousel from "@/components/contamy_nation/CardCarousel";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function ContamyNationApp() {

    return <div className="w-full flex flex-col gap-8 relative my-[5%]">
        <HeroImage/>
        <MainTitle className="mb-8">
            Contamy
            <br/>
            Nation
        </MainTitle>
        <SubTitleText>Dive into the depths of the Polluted Shoal with Contamy-Nation, a unique NFT collection on the
            Solana blockchain. We&apos;ve crafted this collection inspired by the mythical sea creatures of the fallout
            zone,
            revealing the harsh reality of their survival and mutation amidst rampant pollution. Explore this strange
            world of odd creatures and unique flora—it&apos;s not science fiction, it&apos;s our reality.</SubTitleText>
        <div className="mb-60">
            <OutlinedButton>FIND OUT MORE</OutlinedButton>
        </div>
        <div className="mt-32 bg-minting flex flex-col justify-center min-h-[400px] bg-center bg-cover items-center">
            <SecondaryTitle>BE PART OF THE CHANGE</SecondaryTitle>
            <MintZone candyMachineId={candyMachineId}/>
        </div>
        <div className="w-full">
            <SecondaryTitle align="right" className="relative w-full max-w-full">Join us in making <br/> a difference.
                <div className="absolute w-9/12 -bottom-[20px] right-0">
                    <HorizontalZigZagSplitter height={"h-12"} centerPoint={{left: 0, center: 1, right: 6}}
                                              className="justify-end"/>
                </div>
            </SecondaryTitle>
            <SubTitleText>With every Contamy-Nation NFT purchase, you aren&apos;t just owning a piece of art;
                you&apos;re taking a
                stand against ocean pollution. We&apos;re committed to donating 10% of our earnings to NGOs fighting for
                cleaner oceans. By having a Contamy-Nation NFT in your wallet, you&apos;re actively showing your support
                for
                a cleaner, more sustainable future.</SubTitleText>
        </div>
        <div>
            <CardCarousel/>
        </div>
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
