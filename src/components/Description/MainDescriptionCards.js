import '../../assets/styles/DescriptionStyles/MainDescriptionCards.css';

import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import AsideDescriptionCards from './AsideDescriptionCards';
import MainDescriptionImages from './MainDescriptionImages';

import hostContext from '../../context/host/hostContext';

const MainDescriptionCards = () => {
  const HostContext = useContext(hostContext);
  const { lodgingById, getHostById } = HostContext;

  const params = useLocation();
  const parsedDescription = queryString.parse(params.search);
  const hostId = parsedDescription['q'];

  useEffect(() => {
    getHostById(hostId);

    // eslint-disable-next-line
  }, [hostId]);

  return (
    <main className="description__cards">
      <div className="description__host">
        <div className="host__name">
          {lodgingById && (
            <>
              <div className="name">
                <h1>{lodgingById.host.title}</h1>
              </div>

              <div className="host__location">
                <p>
                  {lodgingById.host.location.city},{' '}
                  {lodgingById.host.location.country}
                </p>
              </div>
            </>
          )}
        </div>

        {lodgingById && (
          <MainDescriptionImages photos={lodgingById.host.photos} />
        )}

        <div className="description__content">
          <div className="content__information">
            {lodgingById && (
              <div className="information">
                <div className="information-elements">
                  <p>{lodgingById.host.typeGroup}</p>
                </div>
                <div className="information-elements">
                  <p>{lodgingById.host.privacyType}</p>
                </div>
                <div className="information-elements">
                  <p>
                    Guest: {lodgingById.host.floorPlan.guest} - Beds:{' '}
                    {lodgingById.host.floorPlan.beds} - Bathroom:{' '}
                    {lodgingById.host.floorPlan.bathrooms} - Bedrooms:{' '}
                    {lodgingById.host.floorPlan.bedrooms}
                  </p>
                </div>
              </div>
            )}

            {lodgingById && (
              <div className="information__description">
                <div className="description__text">
                  <h2>About this place</h2>
                </div>
                <div className="description-about">
                  <p>{lodgingById.host.description}</p>
                </div>
              </div>
            )}
          </div>
          {lodgingById && (
            <AsideDescriptionCards host={lodgingById.host.price} />
          )}
        </div>
      </div>
    </main>
  );
};

export default MainDescriptionCards;
