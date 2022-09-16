import React from 'react';
import '../../assets/styles/DescriptionStyles/HeaderDescription.css';

import HeaderSearchBar from '../Home/HeaderSearchBar';
import HeaderUserOptions from '../Home/HeaderUserOptions';

const HeaderDescription = () => {
  return (
    <header className="header__description">
      <div className="header__description__logo"></div>

      <HeaderSearchBar />

      <HeaderUserOptions />
    </header>
  );
};

export default HeaderDescription;
