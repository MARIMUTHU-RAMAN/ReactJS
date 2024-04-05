import React from "react";
import "./Banner.css";
// import LogoPath from "@assets/banner.jpg";
import LogoPath from "../../assets/banner.jpg";

const Banner = () => (
  <div className="banner-container">
    <img alt="logo" src={LogoPath} className="Banner" />
  </div>
);

export default Banner;
