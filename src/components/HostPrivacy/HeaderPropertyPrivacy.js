import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/HostPrivacyStyles/HeaderPropertyPrivacy.css';

const HeaderPropertyPrivacy = () => {
  return (
    <header className="header__propertyprivacy">
      <div className="logo__container">
        <div className="propertyprivacy__logo">
          <Link to="/">
            <img
              src="https://i.postimg.cc/LsLQX0N0/airbnb-1.png"
              alt="airbnb-logo"
            />
          </Link>
        </div>
      </div>
      <div className="button__container">
        <div className="propertyprivacy__button-exit">
          <Link to="/">
            <button>Exit</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderPropertyPrivacy;
