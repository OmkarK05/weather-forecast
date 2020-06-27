import {
  GET_DATA_FALIURE,
  GET_DATA_SUCCESS,
  SET_LOADER,
  SELECT_CITY,
  GET_CITIES,
} from "./Actions";
import Axios from "axios";

export const getDataSuccess = (data) => {
  return {
    type: GET_DATA_SUCCESS,
    payload: data,
  };
};
export const getDataFailure = (error) => {
  return {
    type: GET_DATA_FALIURE,
    payload: error,
  };
};
export const setLoader = () => {
  return {
    type: SET_LOADER,
  };
};

export const setCity = (city) => {
  return {
    type: SELECT_CITY,
    payload: city,
  };
};

export const getCities = (cities) => {
  return {
    type: GET_CITIES,
    payload: cities,
  };
};

export const fetchData = (city) => {
  let proxy = "https://cors-anywhere.herokuapp.com/";
  return (dispatch) => {
    dispatch(setLoader());
    Axios.get(
      `${proxy}http://api.openweathermap.org/data/2.5/weather?q=${city},mh,in&appid=e85f12ec97bc367ae2d3cec2c693d22e`
    )
      .then(({ data }) => dispatch(getDataSuccess(data)))
      .catch((error) => dispatch(getDataFailure(error)));
  };
};
