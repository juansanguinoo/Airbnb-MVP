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

export const hostReducer = (state, action) => {
  switch (action.type) {
    case SELECT_TYPE_GROUP:
      return {
        ...state,
        typeGroup: action.payload,
        hasData: true,
      };
    case SELECT_PRIVACY_TYPE:
      return {
        ...state,
        privacyType: action.payload,
        hasData: true,
      };
    case SELECT_LOCATION:
      return {
        ...state,
        location: action.payload,
        hasData: true,
      };
    case SELECT_FLOOR_PLAN:
      return {
        ...state,
        floorPlan: action.payload,
        hasData: true,
      };
    case ADD_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        hasData: true,
      };
    case LOAD_LOCAL_DATA:
      return {
        ...state,
        ...action.payload,
        hasData: true,
      };
    case CLEAR_DATA:
      return {
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
    case ADD_TITLE:
      return {
        ...state,
        title: action.payload,
        hasData: true,
      };
    case ADD_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
        hasData: true,
      };
    case ADD_PRICE:
      return {
        ...state,
        price: action.payload,
        hasData: true,
      };
    case CREATE_HOST:
      return {
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
    case GET_ALL_HOST:
      return {
        ...state,
        lodging: action.payload,
      };
    case GET_HOST_BY_ID:
      return {
        ...state,
        lodgingById: action.payload,
      };
    default:
      return state;
  }
};
