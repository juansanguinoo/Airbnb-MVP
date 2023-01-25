import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/HostLocationStyles/FooterPropertyLocation.css';

import hostContext from '../../context/host/hostContext';

const FooterPropertyLocation = () => {
  const HostContext = useContext(hostContext);
  const { host } = HostContext;

  const [location, setLocation] = useState('');

  useEffect(() => {
    const locationSelected = host.location;
    if (locationSelected) {
      setLocation(locationSelected);
    }
  }, [host, location]);

  return (
    <footer className="footer__propertylocation">
      <div className="rigthbutton__container">
        <div className="button-back">
          <Link to="/become-host/privacy-type">
            <button>Back</button>
          </Link>
        </div>
      </div>
      <div className="leftbutton__container">
        <div className="button-next">
          {location ? (
            <Link to="/become-host/floor-plan">
              <button>Next</button>
            </Link>
          ) : (
            <button disabled>Next</button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default FooterPropertyLocation;
