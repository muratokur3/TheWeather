import Box from "@mui/material/Box";
import SearchCity from "../components/SearchCity";
import { Avatar, Typography } from "@mui/material";
import background from "../assets/Background/Background.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const style = {
  width:"100%",
  height:"80%",
  background:"none",
  display: "flex",
  flexDirection: "column",
  justifyContent:"space-evenly",
  alignItems: "center",
  border: "none",
};

const Welcome = () => {
    const navigate=useNavigate()
  const handleClose = () => navigate("/");
  useEffect(() => {
   localStorage.clear();
  })
  return (
    <Box sx={{
        position:"absolute",
        top:0,
        left:0,
        zIndex:2,
        width:"100vw",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat:"repeat",
        backgroundColor:"none"
  }}>
    
        <Box sx={style}>
          <Box
            // margin={"10vw 0"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* <Avatar src={logo} /> */}
            <Typography variant="h3" color="#BFBFD4">TheWeather </Typography>{" "}
          </Box>

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
              <Typography variant="h4" color="#BFBFD4">Hoş Geldiniz</Typography>
            </Box>

            <Typography fontSize={"1rem"} color="#7F7F98">
              Hava tahminini görmek için bir konum seçin
            </Typography>

            <SearchCity closeModal={handleClose} />
          </Box>
        </Box>
   
    </Box>
  );
};
export default Welcome;
