import React, { useState, useEffect } from 'react';

import '../../assets/styles/HostPreviewStyles/PropertyPreview.css';

const PropertyPreview = () => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('host'));
    if (local.photos) {
      setPhoto(local.photos[0]);
    }
    if (local.title) {
      setName(local.title);
    }
    if (local.description) {
      setDescription(local.description);
    }
    if (local.price) {
      setPrice(local.price);
    }
  }, []);

  return (
    <div className="propertypreview__container">
      <div className="propertypreview__title">
        <h1>Check your fuckin awesome worked!!!</h1>
      </div>
      <div className="propertypreview__lodging">
        <div className="lodging__container">
          <div className="lodging__image">
            <img src={photo} alt="lodging" />
          </div>
          <div className="lodging__name">
            <h2>{name}</h2>
          </div>
          <div className="lodging__description">
            <p>{description.substring(0, 200)}</p>
          </div>
          <div className="lodging__price">
            <p>{price} COP Nigth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPreview;
