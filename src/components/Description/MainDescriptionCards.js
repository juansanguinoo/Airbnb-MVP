import React, { useMemo } from 'react';
import '../../assets/styles/DescriptionStyles/MainDescriptionCards.css';

import { Modal } from '@mantine/core';
import { useState } from 'react';

import AsideDescriptionCards from './AsideDescriptionCards';
import MainDescriptionImages from './MainDescriptionImages';
import MainDescriptionModal from './MainDescriptionModal';
import { useParams } from 'react-router-dom';
import { data } from '../../assets/Mockup/data';

const MainDescriptionCards = () => {
  const [opened, setOpened] = useState(false);

  const params = useParams();
  console.log(params);
  const hostName = useMemo(
    () => data.filter((host) => host.name === params),
    [params]
  );
  console.log(hostName);

  return (
    <main className="main__description__cards">
      <div className="main__description__host">
        <div className="main__host__name">
          <div className="host__name">
            <h1>4BR Stunning Island in Blue Sea with Pool KALUAa</h1>
          </div>

          <div className="host__location">
            <a href="/">Provincia de Cartagena, Bolívar, Colombia</a>
          </div>
        </div>

        <MainDescriptionImages />

        <div className="main__description__content">
          <div className="content__host__information">
            <div className="anfitrion__information">
              <h2>Anfitrión: Ana</h2>
            </div>

            <div className="host__information">
              <div className="information">
                <img src="https://i.postimg.cc/XY6Rrh10/location.png" alt="" />
                <h2>Fantastic ubication</h2>
              </div>

              <div className="information">
                <img src="https://i.postimg.cc/8cftmRP6/key.png" alt="" />
                <h2>Fascinating arrival experience</h2>
              </div>

              <div className="information">
                <img src="https://i.postimg.cc/L6ww1FmT/calendar.png" alt="" />
                <h2>Free cancellation for 48 hours</h2>
              </div>
            </div>

            <div className="host__information__text">
              <p>
                All reservations include free protection in case the host
                cancels, there are inaccuracies in the listing or other issues
                such as check-in problems.
              </p>
            </div>

            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              size={'small'}>
              <MainDescriptionModal />
            </Modal>

            <div className="host__information__modal">
              <h2>About this place</h2>

              <div className="host__information__button">
                <div onClick={() => setOpened(true)}>Watch more</div>
              </div>
            </div>
          </div>

          <AsideDescriptionCards />
        </div>
      </div>

      <div className="main__description__location">
        <div className="main__description__location__container">
          <div className="description__location">
            <h2>Provincia de Cartagena, Bolívar, Colombia</h2>
          </div>
          <div className="description__map"></div>
        </div>
      </div>
    </main>
  );
};

export default MainDescriptionCards;
