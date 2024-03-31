import { Box } from "@mui/material";
import CityCard from "./CityCard";
import { useSelector } from "react-redux";

const CityList = () => {
  const citys = useSelector((state) => state.citys);
  console.log(citys);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {citys.map((city, index) => (
        <CityCard city={city} key={index} />
      ))}
    </Box>
  );
};

export default CityList;
