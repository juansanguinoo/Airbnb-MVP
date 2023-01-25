import React, { useContext, useEffect } from 'react';
import '../../assets/styles/DescriptionStyles/AsideDescriptionCards.css';

import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import { Calendar } from '@mantine/dates';

import hostContext from '../../context/host/hostContext';
import authContext from '../../context/auth/authContext';

const AsideDescriptionCards = (host) => {
  const [value, setValue] = useState([]);

  const HostContext = useContext(hostContext);
  const { lodgingById } = HostContext;

  const AuthContext = useContext(authContext);
  const { user } = AuthContext;

  useEffect(() => {
    if (lodgingById) {
      localStorage.setItem('lodging', lodgingById.host._id);
    }
  }, [lodgingById]);

  const handler = window.ePayco.checkout.configure({
    key: 'bd3d5476d7d7ede5d607dc61cc45b9d3',
    test: true,
  });

  const invoiceId = uuidv4();

  const handleClick = () => {
    handler.open({
      external: 'false',

      //Parametros compra (obligatorio)
      name: `Alquiler de ${lodgingById.host.title}`,
      description: `${lodgingById.host._id}`,
      invoice: invoiceId,
      currency: 'cop',
      amount: `10000`,
      tax_base: '0',
      tax: '0',
      country: 'co',
      lang: 'es',

      // confirmation: `${process.env.REACT_APP_BASE_URL}`,
      response: `${'http://localhost:3000'}/payment`,

      //Atributos cliente
      name_billing: `${user.username}`,
    });
  };

  return (
    <aside className="aside__cards">
      <div className="aside__cards__container">
        <div className="price">
          <h2>{host.host} COP Nigth</h2>
        </div>

        <div className="calendar">
          <Calendar multiple value={value} onChange={setValue} />;
        </div>
        <div className="button-reserver">
          {value.length > 0 && <button onClick={handleClick}>Reservar</button>}
        </div>
      </div>
    </aside>
  );
};

export default AsideDescriptionCards;
