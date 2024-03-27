import React from 'react';
import './Logo.css';
// import LogoPath from "@assets/novac.jfif";
import LogoPath from "../../assets/novac.jfif";

const Logo = () => (
    <div className="image">
        <img alt="logo" src={LogoPath} className="image"/>
    </div>
);

export default Logo;
