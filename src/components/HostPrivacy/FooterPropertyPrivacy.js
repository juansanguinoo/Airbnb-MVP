import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/HostPrivacyStyles/FooterPropertyPrivacy.css';

import hostContext from '../../context/host/hostContext';

const FooterPropertyPrivacy = () => {
  const HostContext = useContext(hostContext);
  const { host } = HostContext;

  const [privacy, setPrivacy] = useState('');

  useEffect(() => {
    const privacySelected = host.privacyType;
    if (privacySelected) {
      setPrivacy(privacySelected);
    }
  }, [host, privacy]);

  return (
    <footer className="footer__propertyprivacy">
      <div className="rigthbutton__container">
        <div className="button-back">
          <Link to="/become-host">
            <button>Back</button>
          </Link>
        </div>
      </div>
      <div className="leftbutton__container">
        <div className="button-next">
          {privacy ? (
            <Link to="/become-host/location">
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

export default FooterPropertyPrivacy;
