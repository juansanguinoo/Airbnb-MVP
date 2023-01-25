import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/ShoppingStyles/UserShopping.css';

import authContext from '../../context/auth/authContext';
import paymenrContext from '../../context/payment/paymentContext';

const UserShopping = () => {
  const AuthContext = useContext(authContext);
  const { user } = AuthContext;

  const PaymentContext = useContext(paymenrContext);
  const { getPaymentsByUserId, paymentById } = PaymentContext;

  useEffect(() => {
    if (user) {
      getPaymentsByUserId(user.id);
    }
    if (paymentById) {
      console.log(paymentById);
    }
    // eslint-disable-next-line
  }, [user]);

  const navigate = useNavigate();

  const handleClick = (payment) => {
    navigate(`/description-host?q=${payment.hostId}`);
  };

  return (
    <main className="shopping">
      <div className="shopping__container">
        <div className="shopping__title">
          <h1>My Shoppings</h1>
        </div>
        <div className="shopping__content">
          {paymentById &&
            paymentById.payments.map((payment) => {
              return (
                <div
                  className="content"
                  key={payment._id}
                  onClick={() => handleClick(payment)}>
                  <div className="content__image">
                    <img src={payment.hostPhoto[0]} alt="logo" />
                  </div>
                  <div className="content__info">
                    <div className="content-name">
                      <p>{payment.hostName}</p>
                    </div>
                    <div className="content-description">
                      <p>{payment.hostDescription.substring(0, 70)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default UserShopping;
