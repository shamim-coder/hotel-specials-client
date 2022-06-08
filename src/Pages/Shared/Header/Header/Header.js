import React from "react";
import { useLocation } from "react-router-dom";
import HeaderContents from "../HeaderContents/HeaderContents";
import NavBar from "../NavBar/NavBar";
import SearchBooking from "../SearchBooking/SearchBooking";
import "./Header.css";

const Header = () => {
    const homePath = useLocation().pathname === "/";

    return (
        <header className={`${homePath ? "header bg-black/50 flex flex-col justify-between" : null} `}>
            <NavBar />
            {homePath ? <HeaderContents /> : null}
            {homePath ? <SearchBooking /> : null}
        </header>
    );
};

export default Header;
