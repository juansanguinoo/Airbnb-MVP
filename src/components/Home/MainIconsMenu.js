import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/HomeStyles/MainIconsMenu.css';

const MainIconsMenu = ({ icon, text }) => {
  return (
    <div className="main__menu__items">
      <Link to={`/home/category?q=${text}`}>
        <img src={icon} alt="" />
      </Link>
      <h6>{text}</h6>
    </div>
  );
};

export default MainIconsMenu;
