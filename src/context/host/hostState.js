import React, { useEffect, useReducer } from 'react';

import hostContext from './hostContext';
import { hostReducer } from './hostReducer';

import instance from '../../config/axios';

import {
  LOAD_LOCAL_DATA,
  CLEAR_DATA,
  SELECT_TYPE_GROUP,
  SELECT_PRIVACY_TYPE,
  SELECT_LOCATION,
  SELECT_FLOOR_PLAN,
  ADD_PHOTOS,
  ADD_TITLE,
  ADD_DESCRIPTION,
  ADD_PRICE,
  CREATE_HOST,
  GET_ALL_HOST,
  GET_HOST_BY_ID,
} from '../../types';

const HostState = ({ children }) => {
  const initialState = {
    lodgingById: null,
    lodging: null,
    title: null,
    description: null,
    price: null,
    typeGroup: null,
    privacyType: null,
    location: null,
    floorPlan: null,
    photos: [],
    hasData: false,
  };

  const [state, dispatch] = useReducer(hostReducer, initialState);

  useEffect(() => {
    if (state.hasData) {
      localStorage.setItem('host', JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    const localData = localStorage.getItem('host');
    if (localData) {
      dispatch({
        type: LOAD_LOCAL_DATA,
        payload: JSON.parse(localData),
      });
    }
  }, []);

  const clearData = () => {
    localStorage.removeItem('host');
    dispatch({
      type: CLEAR_DATA,
    });
  };

  const selectTypeGroup = (selected) => {
    dispatch({
      type: SELECT_TYPE_GROUP,
      payload: selected,
    });
  };

  const selectPrivacyType = (selected) => {
    dispatch({
      type: SELECT_PRIVACY_TYPE,
      payload: selected,
    });
  };

  const selectLocation = (data) => {
    dispatch({
      type: SELECT_LOCATION,
      payload: data,
    });
  };

  const selectFloorPlan = (data) => {
    dispatch({
      type: SELECT_FLOOR_PLAN,
      payload: data,
    });
  };

  const addPhotos = (data) => {
    dispatch({
      type: ADD_PHOTOS,
      payload: data,
    });
  };

  const addTitle = (data) => {
    dispatch({
      type: ADD_TITLE,
      payload: data,
    });
  };

  const addDescription = (data) => {
    dispatch({
      type: ADD_DESCRIPTION,
      payload: data,
    });
  };

  const addPrice = (data) => {
    dispatch({
      type: ADD_PRICE,
      payload: data,
    });
  };

  const createHost = async (host) => {
    try {
      const response = await instance.post('/api/host', host);
      localStorage.removeItem('host');
      dispatch({
        type: CREATE_HOST,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllHost = async () => {
    try {
      const response = await instance.get('/api/host');
      dispatch({
        type: GET_ALL_HOST,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getHostById = async (id) => {
    try {
      const response = await instance.get(`/api/host/${id}`);
      dispatch({
        type: GET_HOST_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <hostContext.Provider
      value={{
        host: state,
        lodging: state.lodging,
        lodgingById: state.lodgingById,
        selectTypeGroup,
        selectPrivacyType,
        selectLocation,
        selectFloorPlan,
        addPhotos,
        addTitle,
        addDescription,
        addPrice,
        clearData,
        createHost,
        getAllHost,
        getHostById,
      }}>
      {children}
    </hostContext.Provider>
  );
};

export default HostState;
