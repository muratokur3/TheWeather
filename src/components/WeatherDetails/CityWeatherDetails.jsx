import { Box } from "@mui/material";
import Header from "./Header";
import Details from "./Details";
import FifeDay from "./FifeDay";

const CityWeatherDetails = () => {
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
      <Header />
      <Details />
      <FifeDay />
    </Box>
  );
};

export default CityWeatherDetails;
