import { CREATE_PAYMENT, GET_PAYMENTS_BY_USER_ID } from '../../types';

export const paymentReducer = (state, action) => {
  switch (action.type) {
    case CREATE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case GET_PAYMENTS_BY_USER_ID:
      return {
        ...state,
        paymentById: action.payload,
      };
    default:
      return state;
  }
};
