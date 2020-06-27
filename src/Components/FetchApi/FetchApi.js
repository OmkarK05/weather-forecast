import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  getDataSuccess,
  getDataFailure,
  setLoader,
} from "../../Redux";

const FetchApi = () => {
  const city = useSelector((state) => state.apiData.selectedCity);
  const data = useSelector((state) => state.apiData.data);
  const loader = useSelector((state) => state.apiData.loader);
  console.log(loader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(city));
  }, [dispatch, city]);

  return <div>{loader ? <h1>Loading...</h1> : null}</div>;
};

export default FetchApi;

// import React, { useEffect, useState, useContext } from "react";
// import Axios from "axios";
// import firebase from "firebase/app";
// import { weatherContext } from "../../Context/context";
// import { SET_DATA } from "../../Context/actionTypes";

// const FetchApi = (props) => {
//   const [data, setData] = useState({});
//   const { state, dispatch } = useContext(weatherContext);

//   useEffect(() => {
//     const fetchApiData = async () => {
//       if (state.city !== " " || null) {
//         try {
//           await Axios.get(
//             `http://api.openweathermap.org/data/2.5/weather?q=${state.city},mh,in&appid=e85f12ec97bc367ae2d3cec2c693d22e`
//           )
//             .then(({ data }) => {
//               dispatch({
//                 type: SET_DATA,
//                 payload: data,
//               });
//             })
//             .catch((err) => console.log(err));
//         } catch (err) {
//           console.log(err);
//         }
//       }
//     };
//     fetchApiData();
//   });
//   return <div></div>;
// };

// export default FetchApi;
