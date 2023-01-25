import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/HomeStyles/MainCards.css';

import hostContext from '../../context/host/hostContext';

const MainCards = () => {
  const navigate = useNavigate();
  const HostContext = useContext(hostContext);
  const { lodging, getAllHost } = HostContext;

  useEffect(() => {
    getAllHost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e) => {
    navigate(`description-host?q=${e._id}`);
  };

  return (
    <main className="cards__container">
      {lodging &&
        lodging.allHost.map((host) => {
          return (
            <div
              className="cards"
              key={host._id}
              onClick={() => handleClick(host)}>
              <div className="cards__image">
                <img src={host.photos[0]} alt="host" />
              </div>
              <div className="cards__info">
                <div className="info__title">
                  <h3>{host.title}</h3>
                </div>
                <div className="info__description">
                  <p>{host.description.substring(0, 70)}</p>
                </div>
                <div className="info__price">
                  <p>$ {host.price} COP nigth</p>
                </div>
              </div>
            </div>
          );
        })}
    </main>
  );
};

export default MainCards;
