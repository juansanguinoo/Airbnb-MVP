import React from 'react';
import '../../assets/styles/DescriptionStyles/AsideDescriptionCards.css';

const AsideDescriptionCards = () => {
  return (
    <aside className="aside__description__cards">
      <div className="aside__description__cards__container">
        <div className="aside__description__price">
          <h2>$ 2,712,545 CLP night</h2>
        </div>

        <div className="aside__description__reserver"></div>

        <div className="aside__description__button">
          <button>Reserver</button>
        </div>
      </div>
    </aside>
  );
};

export default AsideDescriptionCards;
