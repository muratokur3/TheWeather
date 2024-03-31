import axios from "axios";
import { setCity } from "../slices/CitySlice";

const getCity = (value) => async (dispatch) => {
  console.log(value);
  const resposne = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lon}&appid=3a624872bbe7babf701dee83da65a57c`
  );
  if (resposne.status === 200) {
    dispatch(setCity(resposne.data));
  }
};

export { getCity };
