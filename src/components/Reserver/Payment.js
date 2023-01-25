import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import hostContext from '../../context/host/hostContext';
import authContext from '../../context/auth/authContext';
import paymentContext from '../../context/payment/paymentContext';

const Payment = () => {
  const navigate = useNavigate();

  const HostContext = useContext(hostContext);
  const { lodgingById } = HostContext;

  const AuthContext = useContext(authContext);
  const { user } = AuthContext;

  const PaymentContext = useContext(paymentContext);
  const { createPayment } = PaymentContext;

  const [confirmation, setConfirmation] = useState('');

  const params = window.location.search.replace('?ref_payco=', '');

  useEffect(() => {
    axios
      .get(`https://secure.epayco.co/validation/v1/reference/${params}`)
      .then(({ data }) => {
        setConfirmation(data.data.x_response);
      });

    if (confirmation === 'Rechazada') {
      navigate('/');
    } else if (confirmation === 'Aceptada') {
      if (user && lodgingById) {
        const data = {
          userId: user.id,
          hostId: lodgingById.host._id,
          hostName: lodgingById.host.title,
          hostPhoto: lodgingById.host.photos[0],
          hostDescription: lodgingById.host.description,
          hostPrice: lodgingById.host.price,
        };
        createPayment(data);
        navigate('/');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, user, lodgingById, confirmation]);

  return (
    <div>
      <h1>Processing the payment...</h1>
    </div>
  );
};

export default Payment;
