import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/DescriptionStyles/HeaderDescription.css';
import HeaderUserOptions from '../Home/HeaderUserOptions';

const HeaderDescription = () => {
  return (
    <header className="header__description">
      <div className="description__logo">
        <Link to="/">
          <img src="https://i.postimg.cc/9FhfzZZ7/Captura.png" alt="logo" />
        </Link>
      </div>
      <HeaderUserOptions />
    </header>
  );
};

export default HeaderDescription;
