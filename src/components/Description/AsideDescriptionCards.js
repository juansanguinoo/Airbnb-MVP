import React from "react";
import "../../assets/styles/DescriptionStyles/AsideDescriptionCards.css";

const AsideDescriptionCards = () => {
  return (
    <aside className="aside__description">
      <div className="aside__container">
        <header className="header__aside__container">
          <div className="header__aside">
            <h2>$ 2,712,545 CLP</h2>
            <p>night</p>
          </div>
        </header>

        <main className="main__aside">
          <div className="aside__inputs__container">
            <div className="aside__inputs">
              <div className="description-inputs__container">
                <div className="description-schedule-left">
                  <input type="date" placeholder="LLEGADA" />
                </div>
                <div className="description-schedule-right">
                  <input type="date" placeholder="SALIDA" />
                </div>
                <div className="description-schedule-down">
                  <input type="text" placeholder="HUESPEDES" />
                </div>
              </div>
            </div>
          </div>

          <div className="aside__button__container">
            <div className="aside__button">
              <button>Reserver</button>
            </div>
          </div>

          <footer className="footer__aside__text__container">
            <div className="footer__aside__text">
              <p>No se hara ningun cargo por el momento</p>
            </div>
          </footer>
        </main>
      </div>
    </aside>
  );
};

export default AsideDescriptionCards;
