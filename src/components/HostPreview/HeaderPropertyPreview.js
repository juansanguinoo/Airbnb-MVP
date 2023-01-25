import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/HostPreviewStyles/HeaderPropertyPreview.css';

const HeaderPropertyPreview = () => {
  return (
    <header className="header__propertypreview">
      <div className="logo__container">
        <div className="propertypreview__logo">
          <Link to="/">
            <img
              src="https://i.postimg.cc/LsLQX0N0/airbnb-1.png"
              alt="airbnb-logo"
            />
          </Link>
        </div>
      </div>
      <div className="button__container">
        <div className="propertypreview__button-exit">
          <Link to="/">
            <button>Exit</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderPropertyPreview;
