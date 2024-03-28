import axios from "axios";

const getCity = () => async () => {
  const resposne = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=3f48b6c7109d2"
  );
  console.log(resposne.data);
};

export { getCity };
