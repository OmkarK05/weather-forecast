(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{10:function(e,t,a){e.exports={top:"SelectCity_top__344vZ",head:"SelectCity_head__1Zvhd",selectCity:"SelectCity_selectCity__aJUWL"}},17:function(e,t,a){e.exports={city:"CityandDate_city__EFFN0",date:"CityandDate_date__3oZUC"}},35:function(e,t,a){e.exports=a(64)},4:function(e,t,a){e.exports={weatherCard:"WeatherData_weatherCard__jBhH3",tempContainer:"WeatherData_tempContainer__Br36c",city:"WeatherData_city__pXj78",temp:"WeatherData_temp__2o5Ql",clouds:"WeatherData_clouds__3n61y",tempCon:"WeatherData_tempCon__14Qbr",subTemp:"WeatherData_subTemp__3M1PY",min:"WeatherData_min__1qXNw",humAirWind:"WeatherData_humAirWind__3cFbf",tempType:"WeatherData_tempType__1zqP1"}},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=(a(40),a(2)),i=a(8),u=a.n(i),s=function(){var e=Object(o.c)((function(e){return e.apiData.selectedCity})),t=(Object(o.c)((function(e){return e.apiData.data})),Object(o.c)((function(e){return e.apiData.loader})));console.log(t);var a=Object(o.b)();return Object(n.useEffect)((function(){a(function(e){return function(t){t({type:"SET_LOADER"}),u.a.get("".concat("https://cors-anywhere.herokuapp.com/","http://api.openweathermap.org/data/2.5/weather?q=").concat(e,",mh,in&appid=e85f12ec97bc367ae2d3cec2c693d22e")).then((function(e){var a=e.data;return t(function(e){return{type:"GET_DATA_SUCCESS",payload:e}}(a))})).catch((function(e){return t(function(e){return{type:"GET_DATA",payload:e}}(e))}))}}(e))}),[a,e]),c.a.createElement("div",null,t?c.a.createElement("h1",null,"Loading..."):null)},p=a(1),m=(Object(n.createContext)(),a(16)),d=a.n(m),E=(a(62),a(9)),h=a(10),b=a.n(h),f=a(5),_=a(32),y=a(33),v=a.n(y),g=a(34),C={data:null,error:"",loader:!1,cities:[],selectedCity:""},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{data:t.payload,loader:!1});case"GET_DATA":return Object(p.a)(Object(p.a)({},e),{},{error:t.payload,loader:!1});case"SET_LOADER":return Object(p.a)(Object(p.a)({},e),{},{loader:!0});case"SELECT_CITY":return Object(p.a)(Object(p.a)({},e),{},{selectedCity:t.payload});case"GET_CITIES":return Object(p.a)(Object(p.a)({},e),{},{cities:t.payload});default:return e}},j=Object(f.combineReducers)({apiData:D}),O=Object(f.createStore)(j,Object(g.composeWithDevTools)(Object(f.applyMiddleware)(v.a,_.a)));var T=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.apiData.cities}));return console.log(t),c.a.createElement("div",{className:b.a.top},c.a.createElement("p",{className:b.a.head},"Weather Forecast"),c.a.createElement("select",{className:b.a.selectCity,onChange:function(t){return function(t){t.preventDefault(),e({type:"SELECT_CITY",payload:t.target.value})}(t)}},c.a.createElement("option",null,"Select City"),Object.entries(t).map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return c.a.createElement("option",{value:a},n)}))))},S=a(17),w=a.n(S);var N=function(e){var t=Object(o.c)((function(e){return e.apiData.selectedCity})),a=new Date,n=a.getDay(),r=a.getDate(),l=a.getFullYear(),i=a.getMonth();return console.log(n),c.a.createElement("div",null,c.a.createElement("p",{className:w.a.city},t),c.a.createElement("p",{className:w.a.date}," ".concat(["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"][n],"\n        ").concat(r,"\n        ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"][i],"\n        ").concat(l)))},W=a(4),A=a.n(W),I=function(){var e=Object(o.c)((function(e){return e.apiData.data}));return console.log(e),c.a.createElement("div",{className:A.a.weatherCard},null!==e?c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:A.a.tempContainer},c.a.createElement("div",{className:A.a.tempCon},c.a.createElement("p",{className:A.a.clouds},e.weather[0].description),c.a.createElement("p",{className:A.a.temp},e.main.temp,c.a.createElement("sup",null,"o"))),c.a.createElement("div",{className:A.a.subTemp},c.a.createElement("div",{className:A.a.min},c.a.createElement("p",null,"Min/Max"),c.a.createElement("p",null,e.main.temp_min," ",c.a.createElement("sup",null,"o")," /"," ",e.main.temp_max,c.a.createElement("sup",null,"o"))))),c.a.createElement("div",{className:A.a.humAirWind},c.a.createElement("p",null,"Humidity : ",e.main.humidity," %"),c.a.createElement("p",null,"Air Pressure : ",e.main.pressure," mb"),c.a.createElement("p",null,"Wind speed : ",e.wind.speed),c.a.createElement("p",null,"Wind direction : ",e.wind.deg,c.a.createElement("sup",null,"o"))),c.a.createElement("div",{className:A.a.tempType},c.a.createElement("span",null,"Temperature type: "),c.a.createElement("span",null,c.a.createElement("button",null,c.a.createElement("sup",null,"o"),"C")),c.a.createElement("button",null,c.a.createElement("sup",null,"o"),"K"),c.a.createElement("button",null,c.a.createElement("sup",null,"o"),"F"))):null)};var M=function(){var e=Object(n.useState)(),t=Object(E.a)(e,2),a=t[0],r=t[1];function l(e){var t=e.coords.latitude,a=e.coords.longitude;console.log("called : "+t,a),i(t,a)}var o=function(e){e.preventDefault(),navigator.geolocation?(console.log("called Searchlocation"),navigator.geolocation.getCurrentPosition(l)):console.log("Geolocation is not supported by this browser.")},i=function(e,t){console.log(),u.a.get("http://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=e85f12ec97bc367ae2d3cec2c693d22e")).then((function(e){var t=e.data;console.log(t.name),r(t.name)})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:a}),c.a.createElement("button",{onClick:function(e){return o(e)}},"Detect"))};d.a.initializeApp({apiKey:"AIzaSyBvq_bbMMmpfekSTvctI3b4WvEzPYbOY8g",authDomain:"weatherforecast-f0104.firebaseapp.com",databaseURL:"https://weatherforecast-f0104.firebaseio.com",projectId:"weatherforecast-f0104",storageBucket:"weatherforecast-f0104.appspot.com",messagingSenderId:"705027654240",appId:"1:705027654240:web:fe5ebd27d5bfc69bdaf905",measurementId:"G-65P9SQH9JP"});var G=function(){var e=Object(o.b)();return console.log(),Object(n.useState)((function(){!function(){console.log("GET CITITESS");try{d.a.database().ref("/Cities").on("value",(function(t){e({type:"GET_CITIES",payload:t.val()}),console.log("Get citites Success")}))}catch(t){console.log(t)}}()}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"Container"},c.a.createElement(M,null),c.a.createElement(T,null),c.a.createElement(s,null),c.a.createElement("div",{className:"data"},c.a.createElement(N,null),c.a.createElement(I,null))))};l.a.hydrate(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,{store:O},c.a.createElement(G,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.33f7844a.chunk.js.map