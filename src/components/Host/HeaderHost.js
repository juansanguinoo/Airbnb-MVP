import React from 'react';
import '../../assets/styles/HostStyles/HeaderHost.css';

const HeaderHost = () => {
  return (
    <header className="header__host">
      <div className="header__host__container">
        <div className="header__host__logo">
          <img
            src="https://i.postimg.cc/dt1KQc9g/logo-1.png"
            alt="Airbnb logo"
          />
        </div>

        <div className="header__host__options">
          <div className="header__host__menu">
            <p>Home</p>
            <p>Help</p>
          </div>

          <div className="header__host__user">
            <div className="header__host__user__icon">
              <img
                src="https://i.postimg.cc/9Q73bPPx/user-1.png"
                alt="User icon"></img>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHost;
