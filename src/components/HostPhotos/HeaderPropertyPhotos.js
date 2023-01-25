import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/HostPhotosStyles/HeaderPropertyPhotos.css';

const HeaderPropertyPhotos = () => {
  return (
    <header className="header__propertyphotos">
      <div className="logo__container">
        <div className="propertyphotos__logo">
          <Link to="/">
            <img
              src="https://i.postimg.cc/LsLQX0N0/airbnb-1.png"
              alt="airbnb-logo"
            />
          </Link>
        </div>
      </div>
      <div className="button__container">
        <div className="propertyphotos__button-exit">
          <Link to="/">
            <button>Exit</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderPropertyPhotos;
