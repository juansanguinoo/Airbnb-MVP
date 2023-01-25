import React, { useReducer } from 'react';
import authContext from './authContext';
import { authReducer } from './authReducer';

import instance from '../../config/axios';
import authToken from '../../config/authToken';

import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CLEAN_ALERT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTHENTICATED_USER,
  LOGOUT,
} from '../../types';

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register a new user
  const registerUser = async (data) => {
    try {
      const response = await instance.post('/api/users', data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data.msg,
      });

      setTimeout(() => {
        dispatch({
          type: CLEAN_ALERT,
        });
      }, 3000);
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data.msg,
      });

      setTimeout(() => {
        dispatch({
          type: CLEAN_ALERT,
        });
      }, 3000);
    }
  };

  // Auth user
  const login = async (data) => {
    console.log(data);

    try {
      const response = await instance.post('/api/auth', data);
      localStorage.setItem('token', response.data.token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.token,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });

      setTimeout(() => {
        dispatch({
          type: CLEAN_ALERT,
        });
      }, 3000);
    }
  };

  const authUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      authToken(token);

      try {
        const response = await instance.get('/api/auth');
        dispatch({
          type: AUTHENTICATED_USER,
          payload: response.data.user,
        });
      } catch (error) {
        console.log(error.response);
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response.data.msg,
        });

        setTimeout(() => {
          dispatch({
            type: CLEAN_ALERT,
          });
        }, 3000);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        registerUser,
        login,
        authUser,
        logout,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
