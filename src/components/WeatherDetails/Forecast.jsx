import { Avatar, Box, Typography } from "@mui/material";
import { getIcon } from "../../utils/getIcons";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const StyledTypography = styled(Typography)({
  color: "white",
  fontSize: "1.5rem",
});

const Items = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

const Forecast = ({forecast}) => {
  return (
    <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#3333",
      borderRadius: "2rem",
      padding: "1rem",
    }}
  >
  {forecast.map(({ dt_txt, main, weather }, index) => (
  <Items key={index}>
    <StyledTypography>{new Date(dt_txt).toLocaleDateString('tr-TR', { weekday: 'short' })}</StyledTypography>
    <Avatar src={getIcon(weather[0].icon)} />
    <StyledTypography>{Math.round(main.temp_max)}°C</StyledTypography>
    <Typography sx={{ color: "gray", fontSize: "1.3rem" }}>
      {Math.round(main.temp_min)}°C
    </Typography>
  </Items>
))}
</Box>
  );
};

export default Forecast;
Forecast.propTypes={
  forecast:PropTypes.array
}