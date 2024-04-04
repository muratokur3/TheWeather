import { Box } from "@mui/material";

import Header from "./Header";
import Details from "./Details";
import PropTypes from "prop-types";
import Forecast from "./Forecast";


const CityWeatherDetails = ({city}) => {
  const { name, currentWeather, forecast } = city;
  const headerDetail = {
    name: name,
    date: currentWeather?.dt,
    temp: Math.floor(Number(currentWeather?.main.temp)),
    minTemp: Math.floor(Number(currentWeather?.main.temp_min)),
    maxTemp: Math.floor(Number(currentWeather?.main.temp_max)),
    description: currentWeather?.weather[0].description,
    icon: currentWeather?.weather[0].icon,
    country: currentWeather?.sys.country,
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
        overflow:"hidden",
        minHeight: "100%",
        display: "flex",
        width: "100%",
        gap: "1rem",
        backgroundColor:"#13131A",
        padding: "1rem",
      }}
    >
      <Header detail={headerDetail} />

      <Details detail={detailDetail} />

      <Forecast forecast={forecast} />

   
    </Box>
  );
};

export default CityWeatherDetails;
CityWeatherDetails.propTypes = {
  city: PropTypes.object,
};
