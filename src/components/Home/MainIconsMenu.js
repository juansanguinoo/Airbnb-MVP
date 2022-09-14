import React from "react";
import "../../assets/styles/HomeStyles/MainIconsMenu.css";

const MainIconsMenu = ({ icon, text }) => {
  return (
    <div className="main__menu__items">
      <a href="/#">
        <img src={icon} alt="" />
      </a>
      <h6>{text}</h6>
    </div>
  );
};

export default MainIconsMenu;
