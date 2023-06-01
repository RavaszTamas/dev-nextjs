'use client';
import React from 'react';
import Image from "next/image";
import AqelaLogo from "../assets/images/svg/aqela.svg";
import Search from "../assets/images/svg/search.svg";
import TextButton from "@/components/buttons/TextButton";
import Link from "next/link";
import { createTheme, Menu, MenuItem, ThemeProvider} from "@material-ui/core";
import {Exo, Visby} from "@/assets/fonts";

const theme = createTheme({
    palette: {
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

function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return <header
        className="px-20 py-5 flex flex-row items-center justify-between 2xl:container 2xl:mx-auto bg-primaryBlack">
        <Link href={"/"}><Image className="" src={AqelaLogo} alt={"aqela-logo"}/></Link>
        <div className="flex flex-row items-center justify-between w-1/2">
            <Link href={"/about"}> <TextButton>About us</TextButton></Link>
            <TextButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{padding: 0, fontSize: "18px", fontWeight: 700}}
                className="px-6 pb-3 pt-4"
            >
                <span className={`text-primaryWhite  ${Visby.className} `}>
                SERVICES
                </span>
            </TextButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>
                    <Link href={"/blockchain-projects"} onClick={handleClose}>
                        <TextButton color="black">
                            Blockchain Projects
                        </TextButton>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href={"/contamy-nation"} onClick={handleClose}>
                        <TextButton color="black">
                            Contamy-Nation
                        </TextButton>
                    </Link>
                </MenuItem>
            </Menu>
            <a href={"#contact-us"}><TextButton>Contact us</TextButton></a>
            <Image src={Search} alt={"search"}/>
        </div>
    </header>
}


export default function HeaderWrapper() {
    return <ThemeProvider theme={theme}>
        <Header/>
    </ThemeProvider>
}
