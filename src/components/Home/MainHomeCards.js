import React, { useMemo } from 'react';
import '../../assets/styles/HomeStyles/MainHomeCards.css';
import MainCards from './MainCards';

import { data } from '../../assets/Mockup/data';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const MainHomeCards = () => {
  const params = useLocation();
  const parsed = queryString.parse(params.search);
  const hostCategory = useMemo(
    () => data.filter((host) => host.category === parsed['q']),
    [parsed]
  );

  return (
    <div className="main__home__cards">
      <div className="main__cards__container">
        {
          hostCategory.map((card) => (
          <MainCards
            key={card.id}
            name={card.name}
            location={card.location}
            image={card.image}
            price={card.price}
            id={card.id}
          />
          ))
        }
      </div>
    </div>
  );
};

export default MainHomeCards;
