import Box from "@mui/material/Box";
import SearchCity from "../components/SearchCity";
import { Typography,Avatar } from "@mui/material";
import background from "../assets/Background/Background.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../assets/logo/marca.svg";

const style = {
  width: "100vw",
  height: "65vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  border: "none",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: 2,
};

const Welcome = () => {
  const weatherData = useSelector((state) => state.weatherData.cities);

  const navigate = useNavigate();

  useEffect(() => {
    // weatherData.length === 0?  localStorage.clear():navigate("/TheWeather/");
    weatherData.length === 0 ? localStorage.clear() : null;
    // weatherData.length === 0? getMyLocation():setLoading(false);
  }, [weatherData, navigate]);
  return (
    <Box sx={style}>
            {/* <Avatar src={logo} sx={{width:"186px",height:"32px"}}/> */}
            <Avatar src={logo} sx={{width:"300px",height:"50px"}}/>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box display={"flex"} gap={2}>
          <Typography variant="h4" color={"#8FB2F5"}>
            TypeWeather
          </Typography>
          <Typography variant="h4" color="#BFBFD4">
            Hoş Geldiniz
          </Typography>
        </Box>

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
          <SearchCity />
        </Box>
      </Box>
    </Box>
  );
};
export default Welcome;
