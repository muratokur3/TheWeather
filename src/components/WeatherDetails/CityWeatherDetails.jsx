import { Box } from "@mui/material";

import Header from "./Header";
import Details from "./Details";
import PropTypes from "prop-types";
import FifeDay from "./FifeDay";


const CityWeatherDetails = ({city}) => {
  const { name, currentWeather, forecast } = city;
  const headerDetail = {
    name: name,
    date: currentWeather?.dt,
    temp: Math.floor(Number(currentWeather?.main.temp)),
    minTemp: Math.floor(Number(currentWeather?.main.temp_min)),
    maxTemp: Math.floor(Number(currentWeather?.main.temp_max)),
    description: currentWeather?.weather[0].description,
  };
  const detailDetail = {
    temp: Math.floor(Number(currentWeather?.main.temp)),
    visibility: currentWeather?.visibility / 1000,
    windSpeed: currentWeather?.wind.speed,
    humidity: currentWeather?.main.humidity,
  };

  return (
    <Box
      sx={{
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "1rem",
        display: "flex",
        width: "100%",
        gap: "1rem",
      }}
    >
      <Header detail={headerDetail} />

      <Details detail={detailDetail} />

      <FifeDay forecast={forecast} />

   
    </Box>
  );
};

export default CityWeatherDetails;
CityWeatherDetails.propTypes = {
  city: PropTypes.object,
};
