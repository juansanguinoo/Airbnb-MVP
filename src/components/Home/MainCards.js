import React from 'react';
import '../../assets/styles/HomeStyles/MainCards.css';
import { Link } from 'react-router-dom';

const MainCards = ({ id, image, name, price, location }) => {
  return (
    <div className="main__cards">
      <div className="main__cards__image">
        <Link to={`/description-host?q=${id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className="main__cards__description">
        <div className="main__cards__description__name">
          <h3>{location}</h3>
        </div>
        <div className="main__cards__description__price">
          <Link to={`/description-host?q=${id}`}>{price}</Link>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
