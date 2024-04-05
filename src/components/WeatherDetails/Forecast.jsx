import { Avatar, Box, Typography } from "@mui/material";
import { getIcon } from "../../utils/getIcons";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";


const Items = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
});

const Forecast = ({forecast}) => {
  const isPhone = useMediaQuery("(max-width: 600px)");

  return (
    <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#16161F",
      borderRadius:".75rem",
      padding: ".75rem",
    }}
  >
  {forecast.map(({ dt_txt, main, weather }, index) => (
  <Items key={index}>
    <Typography color={"#BFBFD4"} variant={isPhone?"h6":"h5"}>{new Date(dt_txt).toLocaleDateString('tr-TR', { weekday: 'short' })}</Typography>
    <Avatar src={getIcon(weather[0].icon)} />
   <Box>
   <Typography color={"#FAFAFA"} variant={isPhone?"h6":"h5"}>{Math.round(main.temp_max)}°c</Typography>
    <Typography color={"#7F7F98"} variant={isPhone?"h6":"h5"}>
      {Math.round(main.temp_min)}°c
    </Typography>
   </Box>
  </Items>
))}
</Box>
  );
};

export default Forecast;
Forecast.propTypes={
  forecast:PropTypes.array
}