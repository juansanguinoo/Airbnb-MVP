import React from "react";

import "../../assets/styles/HomeStyles/HeaderHome.css";

import HeaderUserOptions from "./HeaderUserOptions";
import HeaderSearchBar from "./HeaderSearchBar";

const HeaderHome = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo"></div>

        <HeaderSearchBar />
        <HeaderUserOptions />
      </div>
    </header>
  );
};

export default HeaderHome;
