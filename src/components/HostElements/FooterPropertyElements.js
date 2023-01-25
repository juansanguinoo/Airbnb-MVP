import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/HostElementsStyles/FooterPropertyElements.css';

import hostContext from '../../context/host/hostContext';

const FooterPropertyElements = () => {
  const [elements, setElements] = useState('');

  const HostContext = useContext(hostContext);
  const { host } = HostContext;

  useEffect(() => {
    const elementsSelected = host.floorPlan;
    if (elementsSelected) {
      setElements(elementsSelected);
    }
  }, [host, elements]);

  console.log(elements);

  return (
    <footer className="footer__propertyelements">
      <div className="rigthbutton__container">
        <div className="button-back">
          <Link to="/become-host/location">
            <button>Back</button>
          </Link>
        </div>
      </div>
      <div className="leftbutton__container">
        <div className="button-next">
          {elements.guest !== 0 &&
          elements.beds !== 0 &&
          elements.bedrooms !== 0 &&
          elements.bathrooms !== 0 ? (
            <Link to="/become-host/photos">
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

export default FooterPropertyElements;
