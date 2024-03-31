import { Box } from "@mui/material";
import Header from "./Header";
import Details from "./Details";
import FifeDay from "./FifeDay";
import PropTypes from "prop-types";
const CityWeatherDetails = ({city}) => {
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
    {city.name}
      <Header />
      <Details />
      <FifeDay />
    </Box>
  );
};

export default CityWeatherDetails;
CityWeatherDetails.propTypes={
  city:PropTypes.object.isRequired
}