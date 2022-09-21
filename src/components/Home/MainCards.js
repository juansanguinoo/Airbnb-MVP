import React from 'react';
import '../../assets/styles/HomeStyles/MainCards.css';

const MainCards = ({ image, name, price, location }) => {
  return (
    <div className="main__cards">
      <div className="main__cards__image">
        {/* <Link to="/description-cards"> */}
        <a href="/#">
          <img src={image} alt={name} />
        </a>
        {/* </Link> */}
      </div>
      <div className="main__cards__description">
        <div className="main__cards__description__name">
          <h3>{location}</h3>
        </div>
        <div className="main__cards__description__price">
          {/* <Link to="/description-cards">{price}</Link> */}
          <a href="/#">{price}</a>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
