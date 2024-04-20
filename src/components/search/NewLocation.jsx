import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import { Typography, Avatar } from "@mui/material";
import logo from "../../assets/logo/marca.svg";
import { useSelector } from "react-redux";

const style = {
  width: "auto",
  height: "65vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  backgroundColor: "none",
  alignItems: "center",
  border: "none",
};
const NewLocation = () => {
  const weatherData = useSelector((state) => state.weatherData.cities);

  return (
    <Box sx={style}>
      {/* <Avatar src={logo} sx={{width:"186px",height:"32px"}}/> */}
      <Avatar src={logo} sx={{ width: "300px", height: "50px" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {weatherData.length === 0 && (
          <Box display={"flex"} gap={2}>
            <Typography variant="h4" color={"#8FB2F5"}>
              TypeWeather
            </Typography>
            <Typography variant="h4" color="#BFBFD4">
              Hoş Geldiniz
            </Typography>
          </Box>
        )}

        <Typography fontSize={"1rem"} color="#7F7F98">
          Hava tahminini görmek için bir konum seçin
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchBar />
        </Box>
      </Box>
    </Box>
  );
};

export default NewLocation;
