import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/HostLocationStyles/HeaderPropertyLocation.css';

const HeaderPropertyLocation = () => {
  return (
    <header className="header__propertylocation">
      <div className="logo__container">
        <div className="propertylocation__logo">
          <Link to="/">
            <img
              src="https://i.postimg.cc/LsLQX0N0/airbnb-1.png"
              alt="airbnb-logo"
            />
          </Link>
        </div>
      </div>
      <div className="button__container">
        <div className="propertylocation__button-exit">
          <Link to="/">
            <button>Exit</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderPropertyLocation;
