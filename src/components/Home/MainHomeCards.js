import React from 'react';
import '../../assets/styles/HomeStyles/MainHomeCards.css';
import MainCards from './MainCards';

import { data } from '../../assets/Mockup/data';

const MainHomeCards = () => {
  return (
    <div className="main__home__cards">
      <div className="main__cards__container">
        {data.map((card) => (
          <MainCards
            key={card.id}
            name={card.name}
            location={card.location}
            image={card.image}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MainHomeCards;
