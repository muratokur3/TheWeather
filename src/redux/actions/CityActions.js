// import axios from "axios";
// import { setCity, setForecast } from "../slices/CitySlice";

// const getCityName = async (value) => {
//   const response = await axios(
//     `http://api.openweathermap.org/geo/1.0/reverse?lat=${value.lat}&lon=${value.lon}&limit=1&appid=3a624872bbe7babf701dee83da65a57c`
//   );
//   console.log(response.data[0]);
//   return response.data[0];
// };

// const getCityForecast = async (value) => {
//   const response = await axios(
//     `https://api.openweathermap.org/data/2.5/forecast?q=${value.name}&lang=tr&units=metric&appid=3a624872bbe7babf701dee83da65a57c`
//   );
//   if (response.status === 200) {
//     setForecast(response.data);
//   }
//   console.log(response.data);
//   return response.data;
// };

// const getCity = (value) => async (dispatch) => {
//   console.log(value);
//   if (!value.name) {
//     value = await getCityName(value);
//   }
//   if (value.name) {
//     const resposne = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${value.name}&lang=tr&units=metric&appid=3a624872bbe7babf701dee83da65a57c`
//     );
//     if (resposne.status === 200) {
//       dispatch(setCity({ name: value.name, currentWeather: resposne.data }));
//       getCityForecast(value);
//     }
//   }
// };

// export { getCity };
