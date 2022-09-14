import React from "react";

import "../../assets/styles/HomeStyles/HeaderModalOptions.css";

const HeaderModalOptions = () => {
  return (
    <div className="header__modal__options">
      <div className="header__modal__user__options">
        <ul>
          {/* <li><Link to="/register">Register</Link></li> */}
          <li>
            <a href="/#">Register</a>
          </li>
          <li>
            <a href="/#">Log In</a>
          </li>
          {/* <li><Link to="/login">Log in</Link></li> */}
        </ul>
      </div>
      <div className="header__modal__user__options">
        <ul>
          {/* <li><Link to="/hosting">Recieve guests in your home</Link></li> */}
          <li>
            <a href="/#">Recieve guest in your home</a>
          </li>
          <li>
            <a href="/#">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderModalOptions;
