import React, { useState, useEffect, useContext } from 'react';

import '../../assets/styles/HostPrivacyStyles/PropertyPrivacy.css';

import hostContext from '../../context/host/hostContext';

const data = [
  {
    name: 'An entire place',
    selected: false,
  },
  {
    name: 'A private room',
    selected: false,
  },
  {
    name: 'A shared room',
    selected: false,
  },
];

const PropertyPrivacy = () => {
  const [privacyType, setPrivacyType] = useState(data);

  const HostContext = useContext(hostContext);
  const { selectPrivacyType } = HostContext;

  const handleClick = (e) => {
    setPrivacyType(
      privacyType.map((item) =>
        item.name === e
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  };

  useEffect(() => {
    const selected = privacyType.find((item) => item.selected === true)?.name;
    if (selected) {
      selectPrivacyType(selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [privacyType]);

  useEffect(() => {
    const localPrivacy = JSON.parse(localStorage.getItem('host'));
    if (localPrivacy.privacyType) {
      setPrivacyType(
        privacyType.map((item) =>
          item.name === localPrivacy.privacyType
            ? { ...item, selected: true }
            : { ...item, selected: false }
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="propertyprivacy__container">
        <div className="propertyprivacy__title">
          <h1>What type of accommodation will the guests have?</h1>
        </div>
        <div className="propertyprivacy__privacies">
          <div className="privacies__container">
            {privacyType.map((item) => (
              <div
                className={`privacies__item ${
                  item.selected && 'privacies__item-buttonSelected'
                }`}
                key={item.name}>
                <button onClick={() => handleClick(item.name)} name={item.name}>
                  <p>{item.name}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default PropertyPrivacy;
