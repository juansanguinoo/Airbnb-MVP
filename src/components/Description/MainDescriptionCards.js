import React from "react";
import "../../assets/styles/DescriptionStyles/MainDescriptionCards.css";

import { Modal } from "@mantine/core";
import { useState } from "react";
import AsideDescriptionCards from "./AsideDescriptionCards";
import MainDescriptionImages from "./MainDescriptionImages";
import MainDescriptionModal from "./MainDescriptionModal";

const MainDescriptionCards = () => {
  const [opened, setOpened] = useState(false);

  return (
    <main className="main__description__cards">
      <div className="main__description__host">
        <div className="main__host__name">
          <div className="host__name">
            <h1>Cayo redondo de lujo en Cayos Cochinos, Islas de la Bahía</h1>
          </div>

          <div className="host__location">
            <a href="/">Cayos Cochinos, Bay Islands Department, Honduras</a>
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
              size={"medium"}
            >
              {/* Modal content */}
              <MainDescriptionModal />
            </Modal>

            <div className="host__information__modal">
              <p>About this place</p>

              <div className="host__information__button">
                <div onClick={() => setOpened(true)}>Watch more</div>
              </div>
            </div>
          </div>

          <AsideDescriptionCards />
        </div>
      </div>

      <div className="description__ubication__map__container">
        <div className="description__ubication__map">
          <div className="description__ubication__map__title">
            <h2>Where you´ll go</h2>
          </div>
          <div className="description__ubication__map__location">
            <p>Cayos Cochinos, Bay Islands Department, Honduras</p>
          </div>
          <div className="description__ubication__map__map"></div>
        </div>
      </div>
    </main>
  );
};

export default MainDescriptionCards;
