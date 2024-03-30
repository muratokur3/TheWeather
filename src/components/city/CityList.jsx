import { Box } from "@mui/material";
import CityCard from "./CityCard";

const CityList = () => {
  return (
    <Box sx={{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        gap:"1rem",
    }}>
      <CityCard />
      <CityCard />
      <CityCard />
      <CityCard />
    </Box>
  );
};

export default CityList;
