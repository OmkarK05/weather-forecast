import React, { useContext, useState, Fragment } from "react";
import styles from "./WeatherData.module.css";
import { weatherContext } from "../../Context/context";
import { useSelector } from "react-redux";

const WeatherData = () => {
  const weactherData = useSelector((state) => state.apiData.data);
  console.log(weactherData);
  return (
    <div className={styles.weatherCard}>
      {weactherData !== null ? (
        <Fragment>
          <div className={styles.tempContainer}>
            <div className={styles.tempCon}>
              <p className={styles.clouds}>
                {weactherData.weather[0].description}
              </p>
              <p className={styles.temp}>
                {weactherData.main.temp}
                <sup>o</sup>
              </p>
            </div>
            <div className={styles.subTemp}>
              <div className={styles.min}>
                <p>Min/Max</p>
                <p>
                  {weactherData.main.temp_min} <sup>o</sup> /{" "}
                  {weactherData.main.temp_max}
                  <sup>o</sup>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.humAirWind}>
            <p>Humidity : {weactherData.main.humidity} %</p>
            <p>Air Pressure : {weactherData.main.pressure} mb</p>
            <p>Wind speed : {weactherData.wind.speed}</p>
            <p>
              Wind direction : {weactherData.wind.deg}
              <sup>o</sup>
            </p>
          </div>
          <div className={styles.tempType}>
            <span>Temperature type: </span>
            <span>
              <button>
                <sup>o</sup>C
              </button>
            </span>
            <button>
              <sup>o</sup>K
            </button>
            <button>
              <sup>o</sup>F
            </button>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default WeatherData;
