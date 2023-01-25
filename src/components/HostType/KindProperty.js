import React, { useContext, useEffect, useState } from 'react';
import '../../assets/styles/HostTypeStyles/KindProperty.css';
import hostContext from '../../context/host/hostContext';

const data = [
  {
    name: 'House',
    img: 'https://i.postimg.cc/3NnXSKCK/tiny-house.png',
    selected: false,
  },
  {
    name: 'Mansion',
    img: 'https://i.postimg.cc/XYwwmcgH/mansion.png',
    selected: false,
  },
  {
    name: 'Apartment',
    img: 'https://i.postimg.cc/vBfZBMVx/office.png',
    selected: false,
  },
  {
    name: 'Ranch',
    img: 'https://i.postimg.cc/FFDCnmKd/cabin.png',
    selected: false,
  },
];

const KindProperty = () => {
  const [typeGroup, setTypeGroup] = useState(data);

  const HostContext = useContext(hostContext);
  const { selectTypeGroup } = HostContext;

  const handleClick = (e) => {
    setTypeGroup(
      typeGroup.map((item) =>
        item.name === e
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  };

  useEffect(() => {
    const selected = typeGroup.find((item) => item.selected === true)?.name;
    if (selected) {
      selectTypeGroup(selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeGroup]);

  useEffect(() => {
    const localType = JSON.parse(localStorage.getItem('host'));
    if (localType) {
      setTypeGroup(
        typeGroup.map((item) =>
          item.name === localType.typeGroup
            ? { ...item, selected: true }
            : { ...item, selected: false }
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="kindproperty__container">
        <div className="kindproperty__title">
          <h1>What kind of property do you have?</h1>
        </div>
        <div className="kindproperty__categories">
          <div className="categories__container">
            {typeGroup.map((item) => (
              <div
                className={`categories__item ${
                  item.selected && 'categories__item-buttonSelected'
                }`}
                key={item.name}>
                <button onClick={() => handleClick(item.name)} name={item.name}>
                  <img src={item.img} alt={item.name} />
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

export default KindProperty;
