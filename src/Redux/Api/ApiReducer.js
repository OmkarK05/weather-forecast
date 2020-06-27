import {
  GET_DATA_SUCCESS,
  GET_DATA_FALIURE,
  SET_LOADER,
  SELECT_CITY,
  GET_CITIES,
} from "./Actions";

const initialState = {
  data: null,
  error: "",
  loader: false,
  cities: [],
  selectedCity: "",
};

const ApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loader: false,
      };
    case GET_DATA_FALIURE:
      return {
        ...state,
        error: action.payload,
        loader: false,
      };
    case SET_LOADER:
      return {
        ...state,
        loader: true,
      };
    case SELECT_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };

    default:
      return state;
  }
};
export default ApiReducer;
