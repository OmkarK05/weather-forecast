import React, { useReducer, useEffect, useState } from "react";
import "./App.css";
import FetchApi from "./Components/FetchApi/FetchApi";
import reducer from "./Context/reducer";
import { weatherContext } from "./Context/context";
import { firebaseConfig } from "./FirebaseConfig/config";
import firebase from "firebase/app";
import "firebase/database";
import SelectCity from "./Components/SelectCity/SelectCity";
import CityandDate from "./Components/City&Date/CityandDate";
import WeatherData from "./Components/WeatherConditions/WeatherData";
import { GET_DATA } from "./Context/actionTypes";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./Redux/store";
import { getCities } from "./Redux/Api/ApiTypes";
import DetectLocation from "./Components/DetectLocation/DetectLocation";

firebase.initializeApp(firebaseConfig);

function App() {
  const dispatch = useDispatch();

  console.log();

  const getData = () => {
    console.log("GET CITITESS");
    try {
      firebase
        .database()
        .ref(`/Cities`)
        .on("value", (snapshot) => {
          dispatch(getCities(snapshot.val()));
          console.log("Get citites Success");
        });
    } catch (err) {
      console.log(err);
    }
  };
  useState(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="Container">
        <DetectLocation></DetectLocation>
        <SelectCity></SelectCity>
        <FetchApi></FetchApi>
        <div className="data">
          <CityandDate></CityandDate>
          <WeatherData></WeatherData>
        </div>
      </div>
    </div>
  );
}

export default App;
