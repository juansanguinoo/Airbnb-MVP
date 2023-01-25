import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/HostPhotosStyles/FooterPropertyPhotos.css';

import hostContext from '../../context/host/hostContext';

const FooterPropertyPhotos = () => {
  const HostContext = useContext(hostContext);
  const { host } = HostContext;

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const photosSelected = host.photos;
    if (photosSelected) {
      setPhotos(photosSelected);
    }
  }, [host, photos]);

  return (
    <footer className="footer__propertyphotos">
      <div className="rigthbutton__container">
        <div className="button-back">
          <Link to="/become-host/floor-plan">
            <button>Back</button>
          </Link>
        </div>
      </div>
      <div className="leftbutton__container">
        <div className="button-next">
          {photos.length > 0 ? (
            <Link to="/become-host/title">
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

export default FooterPropertyPhotos;
