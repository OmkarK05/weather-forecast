import React, { useContext } from "react";
import styles from "./CityandDate.module.css";
import { weatherContext } from "../../Context/context";
import { useSelector } from "react-redux";

function CityandDate(props) {
  const city = useSelector((state) => state.apiData.selectedCity);
  let days = [
    "Sunday",

    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
  ];
  let d = new Date();
  let day = d.getDay();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.getMonth();
  console.log(day);
  return (
    <div>
      <p className={styles.city}>{city}</p>
      <p className={styles.date}>
        {` ${days[day]}
        ${date}
        ${months[month]}
        ${year}`}
      </p>
    </div>
  );
}

export default CityandDate;
