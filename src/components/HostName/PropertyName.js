import React, { useContext, useState, useEffect } from 'react';

import '../../assets/styles/HostNameStyles/PropertyName.css';

import hostContext from '../../context/host/hostContext';

import ClipLoader from 'react-spinners/ClipLoader';

const PropertyName = () => {
  const [loading, setLoading] = useState(false);

  const HostContext = useContext(hostContext);
  const { addTitle, addDescription, addPrice } = HostContext;

  const [propertyName, setPropertyName] = useState('');
  const [propertyDescription, setPropertyDescription] = useState('');
  const [propertyPrice, setPropertyPrice] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'propertyname') {
      setPropertyName(e.target.value);
    } else if (e.target.name === 'propertydescription') {
      setPropertyDescription(e.target.value);
    } else if (e.target.name === 'propertyprice') {
      setPropertyPrice(e.target.value);
    }
  };

  const handleClick = () => {
    addTitle(propertyName);
    addDescription(propertyDescription);
    addPrice(propertyPrice);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const localData = localStorage.getItem('host');
    if (localData) {
      const { title, description, price } = JSON.parse(localData);
      setPropertyName(title);
      setPropertyDescription(description);
      setPropertyPrice(price);
    }
  }, []);

  return (
    <div className="propertyname__container">
      <div className="propertyname__title">
        <h1>Add the motherfuckin data!!!</h1>
      </div>
      <div className="propertyname__name">
        <div className="name__container">
          <label>
            Create your title
            <input
              type="text"
              name="propertyname"
              onChange={handleChange}
              value={propertyName}
            />
          </label>
        </div>
        <div className="name__container">
          <label>
            Create your description
            <input
              type="text"
              name="propertydescription"
              onChange={handleChange}
              value={propertyDescription}
            />
          </label>
        </div>
        <div className="name__container">
          <label>
            Create your price
            <input
              type="text"
              name="propertyprice"
              onChange={handleChange}
              value={propertyPrice}
            />
          </label>
        </div>
        <div className="name__container">
          <button onClick={handleClick}>Verify</button>
          {loading ? (
            <div className="loading__container">
              <ClipLoader color={'#123abc'} loading={loading} size={150} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PropertyName;
