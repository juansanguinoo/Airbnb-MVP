import React from 'react';

import '../../assets/styles/HomeStyles/HeaderHome.css';
import HeaderUserOptions from './HeaderUserOptions';

const HeaderHome = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="https://i.postimg.cc/fR46ZWgG/unsplash-O453-M2-Liufs.png"
          alt="Airbnb"
        />
      </div>
      <div className="header__menu">
        <div className="airbnb-logo">
          <img
            src="https://i.postimg.cc/LsLQX0N0/airbnb-1.png"
            alt="Airbnb logo"
          />
        </div>
        <div className="header__modal">
          <HeaderUserOptions />
        </div>
      </div>
      <div className="header__section">
        <div className="section__container">
          <div className="items-text">
            <input
              type="text"
              name="search"
              placeholder="What will be your next adventure?"
            />
          </div>
          <div className="items-button">
            <button>
              Search
              <img
                src="https://i.postimg.cc/5trWThDy/buscar.png"
                alt="search"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="header__text">
        <div className="text__container">
          <div className="text">
            <h2>Live new adventures</h2>
          </div>
          <div className="text-button">
            <button>Discover it here</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
