import React, { useContext, useState } from "react";
import { weatherContext } from "../../Context/context";
import { SELECT_CITY } from "../../Context/actionTypes";
import styles from "./SelectCity.module.css";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../Redux/store";
import { setCity } from "../../Redux/Api/ApiTypes";

function SelectCity() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.apiData.cities);
  console.log(cities);
  const cityHandler = (e) => {
    e.preventDefault();
    dispatch(setCity(e.target.value));
  };

  return (
    <div className={styles.top}>
      <p className={styles.head}>Weather Forecast</p>
      <select className={styles.selectCity} onChange={(e) => cityHandler(e)}>
        <option>Select City</option>
        {Object.entries(cities).map(([key, value]) => (
          <option value={key}>{value}</option>
        ))}
      </select>
    </div>
  );
}
export default SelectCity;

//   const { state, dispatch } = useContext(weatherContext);

//

//   return (
//     <div className={styles.top}>
//       <p className={styles.head}>Weather Forecast</p>
//       <select className={styles.selectCity} onChange={(e) => cityHandler(e)}>
//         <option>Select City</option>
//         {Object.entries(state.Cities).map(([key, value]) => (
//           <option value={key}>{value}</option>
//         ))}
//       </select>
//     </div>
//   );
// }
