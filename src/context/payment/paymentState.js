import React, { useReducer } from 'react';

import paymentContext from './paymentContext';
import { paymentReducer } from './paymentReducer';

import instance from '../../config/axios';

import { CREATE_PAYMENT, GET_PAYMENTS_BY_USER_ID } from '../../types';

const PaymentState = ({ children }) => {
  const initialState = {
    payment: null,
    paymentById: null,
  };

  const [state, dispatch] = useReducer(paymentReducer, initialState);

  const createPayment = async (data) => {
    try {
      const res = await instance.post('/api/payment', data);
      dispatch({
        type: CREATE_PAYMENT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getPaymentsByUserId = async (id) => {
    try {
      const res = await instance.get(`/api/payment/${id}`);
      dispatch({
        type: GET_PAYMENTS_BY_USER_ID,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <paymentContext.Provider
      value={{
        payment: state.payment,
        paymentById: state.paymentById,
        createPayment,
        getPaymentsByUserId,
      }}>
      {children}
    </paymentContext.Provider>
  );
};

export default PaymentState;
