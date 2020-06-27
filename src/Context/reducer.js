import { SELECT_CITY, GET_DATA, SET_DATA } from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return { ...state, city: action.payload };
    case GET_DATA:
      return { ...state, Cities: action.payload };
    case SET_DATA:
      return {
        ...state,
        description: action.payload.weather[0].description,
        icon: action.payload.weather[0].icon,
        temp: action.payload.main.temp,
        tempMin: action.payload.main.temp_min,
        tempMax: action.payload.main.temp_max,
        humidity: action.payload.main.humidity,
        pressure: action.payload.main.pressure,
        wind: action.payload.wind.speed,
      };
    default:
      return state;
  }
};

export default reducer;
