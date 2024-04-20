import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import NewLocation from "./NewLocation";
import background from "../../assets/Background/Background.svg";

const style = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  background: `url(${background})`,
  backgroundSize: "cover",
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
         <NewLocation/>
    </Box>
  );
};
export default Welcome;
