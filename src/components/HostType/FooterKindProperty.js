import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/HostTypeStyles/FooterKindProperty.css';
import hostContext from '../../context/host/hostContext';

const FooterKindProperty = () => {
  const HostContext = useContext(hostContext);
  const { host } = HostContext;

  const [type, setType] = useState('');

  useEffect(() => {
    const typeGroupSelected = host.typeGroup;
    if (typeGroupSelected) {
      setType(typeGroupSelected);
    }
  }, [host, type]);

  return (
    <footer className="footer__kindproperty">
      <div className="rigthbutton__container">
        <div className="button-back">
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
      <div className="leftbutton__container">
        <div className="button-next">
          {type ? (
            <Link to="/become-host/privacy-type">
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

export default FooterKindProperty;
