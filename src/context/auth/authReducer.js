import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CLEAN_ALERT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTHENTICATED_USER,
  LOGOUT,
} from '../../types';

export const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAN_ALERT:
      return {
        ...state,
        message: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        authenticated: true,
      };
    case AUTHENTICATED_USER:
      return {
        ...state,
        //authenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: null,
        user: null,
      };
    default:
      return state;
  }
};
