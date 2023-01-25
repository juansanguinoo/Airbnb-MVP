import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/HostNameStyles/FooterPropertyName.css';

import hostContext from '../../context/host/hostContext';

const FooterPropertyName = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const HostContext = useContext(hostContext);
  const { host } = HostContext;

  useEffect(() => {
    const nameSelected = host;
    const { title, description, price } = nameSelected;
    if (title && description && price) {
      setName(title);
      setDescription(description);
      setPrice(price);
    }
  }, [host, name, description, price]);

  console.log(name, description, price);

  return (
    <footer className="footer__propertyname">
      <div className="rigthbutton__container">
        <div className="button-back">
          <Link to="/become-host/photos">
            <button>Back</button>
          </Link>
        </div>
      </div>
      <div className="leftbutton__container">
        <div className="button-next">
          {name && description && price ? (
            <Link to="/become-host/preview">
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

export default FooterPropertyName;
