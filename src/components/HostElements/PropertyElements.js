import React, { useState, useEffect, useContext } from 'react';

import '../../assets/styles/HostElementsStyles/PropertyElements.css';

import hostContext from '../../context/host/hostContext';

const PropertyElements = () => {
  const HostContext = useContext(hostContext);
  const { selectFloorPlan } = HostContext;

  const [guest, setGuest] = useState(0);
  const [beds, setBeds] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  const [elements, setElements] = useState({
    guest: 0,
    beds: 0,
    bedrooms: 0,
    bathrooms: 0,
  });

  const handleGuest = (e) => {
    if (e.target.name === '+') {
      setGuest(guest + 1);
    } else if (e.target.name === '-' && guest > 0) {
      setGuest(guest - 1);
    }
  };

  const handleBeds = (e) => {
    if (e.target.name === '+') {
      setBeds(beds + 1);
    } else if (e.target.name === '-' && beds > 0) {
      setBeds(beds - 1);
    }
  };

  const handleBedrooms = (e) => {
    if (e.target.name === '+') {
      setBedrooms(bedrooms + 1);
    } else if (e.target.name === '-' && bedrooms > 0) {
      setBedrooms(bedrooms - 1);
    }
  };

  const handleBathrooms = (e) => {
    if (e.target.name === '+') {
      setBathrooms(bathrooms + 1);
    } else if (e.target.name === '-' && bathrooms > 0) {
      setBathrooms(bathrooms - 1);
    }
  };

  useEffect(() => {
    setElements({
      guest: guest,
      beds: beds,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
    });
  }, [guest, beds, bedrooms, bathrooms]);

  useEffect(() => {
    selectFloorPlan(elements);
    //  eslint-disable-next-line
  }, [elements]);

  useEffect(() => {
    const localFloorPlan = JSON.parse(localStorage.getItem('host'));
    if (localFloorPlan.floorPlan) {
      setGuest(localFloorPlan.floorPlan.guest);
      setBeds(localFloorPlan.floorPlan.beds);
      setBedrooms(localFloorPlan.floorPlan.bedrooms);
      setBathrooms(localFloorPlan.floorPlan.bathrooms);
    }
  }, []);

  return (
    <div className="propertyelements__container">
      <div className="propertyelements__title">
        <h1>Add some basic information about your space</h1>
      </div>
      <div className="propertyelements__elements">
        <div className="elements__container">
          <div className="counter">
            <div className="info">
              <p>Guest</p>
            </div>
            <div className="counters__container">
              <div className="increment">
                <button onClick={handleGuest} name="+">
                  +
                </button>
              </div>
              <div className="quantity">
                <p>{guest}</p>
              </div>
              <div className="decrement">
                <button onClick={handleGuest} name="-">
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="info">
              <p>Beds</p>
            </div>
            <div className="counters__container">
              <div className="increment">
                <button name="+" onClick={handleBeds}>
                  +
                </button>
              </div>
              <div className="quantity">
                <p>{beds}</p>
              </div>
              <div className="decrement">
                <button name="-" onClick={handleBeds}>
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="info">
              <p>Bedrooms</p>
            </div>
            <div className="counters__container">
              <div className="increment">
                <button name="+" onClick={handleBedrooms}>
                  +
                </button>
              </div>
              <div className="quantity">
                <p>{bedrooms}</p>
              </div>
              <div className="decrement">
                <button name="-" onClick={handleBedrooms}>
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="info">
              <p>Bathrooms</p>
            </div>
            <div className="counters__container">
              <div className="increment">
                <button name="+" onClick={handleBathrooms}>
                  +
                </button>
              </div>
              <div className="quantity">
                <p>{bathrooms}</p>
              </div>
              <div className="decrement">
                <button name="-" onClick={handleBathrooms}>
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyElements;
