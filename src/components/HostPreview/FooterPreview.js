import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../assets/styles/HostPreviewStyles/FooterPropertyPreview.css';

import hostContext from '../../context/host/hostContext';

const FooterPreview = () => {
  const HostContext = useContext(hostContext);
  const { createHost } = HostContext;

  const navigate = useNavigate();

  const handleClick = () => {
    const host = JSON.parse(localStorage.getItem('host'));
    if (host) {
      createHost(host);
      navigate('/');
    }
  };

  return (
    <footer className="footer__propertypreview">
      <div className="rigthbutton__container">
        <div className="button-back">
          <Link to="/become-host/privacy-type">
            <button>Back</button>
          </Link>
        </div>
      </div>
      <div className="leftbutton__container">
        <div className="button-next">
          <button onClick={handleClick}>Create</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterPreview;
