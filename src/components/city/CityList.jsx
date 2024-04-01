import { Box } from "@mui/material";
import CityCard from "./CityCard";
import { useSelector } from "react-redux";

const CityList = () => {
  const weatherData = useSelector(state => state.citys.cities);
  console.log(weatherData);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {weatherData.map((city, index) => (
        <CityCard city={city?.currentWeather} key={index} />
      ))}
    </Box>
  );
};

export default CityList;
