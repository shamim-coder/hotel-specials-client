import React from "react";
import { useLocation } from "react-router-dom";
import HeaderContents from "../HeaderContents/HeaderContents";
import NavBar from "../NavBar/NavBar";
import SearchBooking from "../SearchBooking/SearchBooking";
import "./Header.css";

const Header = () => {
    const root = useLocation().pathname === "/";
    const home = useLocation().pathname === "/home";

    return (
        <header className={`${root || home ? "header bg-black/50 flex flex-col justify-between" : null} `}>
            <NavBar root={root} home={home} />
            {root || home ? <HeaderContents /> : null}
            {root || home ? <SearchBooking /> : null}
        </header>
    );
};

export default Header;
