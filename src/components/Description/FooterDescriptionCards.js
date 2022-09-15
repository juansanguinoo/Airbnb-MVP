import React from "react";
import "../../assets/styles/DescriptionStyles/FooterDescriptionCards.css";

import FooterHome from "../Home/FooterHome";

const FooterDescriptionCards = () => {
  return (
    <footer className="footer__description__cards">
      <div className="footer__description__cards__container">
        <div className="footer__description__content">
          <div className="footer__description__content__title">
            <h2>Attendance</h2>
          </div>
          <div className="footer__description__content__list">
            <ul>
              <li>Help center</li>
              <li>AirCover</li>
              <li>security information</li>
              <li>Cancellation options</li>
              <li>Report a problem</li>
            </ul>
          </div>
        </div>
        <div className="footer__description__content">
          <div className="footer__description__content__title">
            <h2>Community</h2>
          </div>
          <div className="footer__description__content__list">
            <ul>
              <li>Airbnb.org</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="footer__description__content">
          <div className="footer__description__content__title">
            <h2>Anfitrion mode</h2>
          </div>
          <div className="footer__description__content__list">
            <ul>
              <li>Share your space</li>
              <li>AirCover for host</li>
              <li>Means</li>
              <li>Visit the community forum</li>
              <li>How to provide host services</li>
            </ul>
          </div>
        </div>
        <div className="footer__description__content">
          <div className="footer__description__content__title">
            <h2>Airbnb</h2>
          </div>
          <div className="footer__description__content__list">
            <ul>
              <li>Press conference</li>
              <li>More information</li>
              <li>Carrers</li>
              <li>Investors</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterHome />
    </footer>
  );
};

export default FooterDescriptionCards;
