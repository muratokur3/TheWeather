import { Box } from "@mui/material";
import CityCard from "./CityCard";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
const CityList = ({onClose}) => {
  const weatherData = useSelector((state) => state?.weatherData?.cities);
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        maxHeight:"100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",

      }}
    >
      {weatherData.map((city, index) => (
        <CityCard
          city={city?.currentWeather}
          onClose={onClose}
          key={index}
        />
      ))}
    </Box>
  );
};

export default CityList;
CityList.defaultProps = {
  onClose: () => {},
};
CityList.propTypes={
  onClose:PropTypes.func
}
