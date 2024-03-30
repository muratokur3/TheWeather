import { Avatar, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledTypography = styled(Typography)({
  color: "white",
  fontFamily: "monospace",
  fontSize: "1.5rem",
});

const Items = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

const FifeDay = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        backgroundColor: "#3333",
        borderRadius: "2rem",
        padding: "2rem",
      }}
    >
      <Items>
        <StyledTypography>Pzt</StyledTypography>
        <Avatar src="https://www.weather2umbrella.com/wp-content/themes/w2u/image/svg/weather-icons/n04.svg" />
        <StyledTypography>28°C</StyledTypography>
        <Typography
          sx={{
            color: "gray",
            fontFamily: "monospace",
            fontSize: "1.3rem",
          }}
        >
          28°C
        </Typography>
      </Items>
      <Items>
        <StyledTypography>sal</StyledTypography>
        <Avatar src="https://www.weather2umbrella.com/wp-content/themes/w2u/image/svg/weather-icons/n04.svg" />
        <StyledTypography>28°C</StyledTypography>
        <Typography
          sx={{
            color: "gray",
            fontFamily: "monospace",
            fontSize: "1.3rem",
          }}
        >
          28°C
        </Typography>
      </Items>
      <Items>
        <StyledTypography>Çar</StyledTypography>
        <Avatar src="https://www.weather2umbrella.com/wp-content/themes/w2u/image/svg/weather-icons/n04.svg" />
        <StyledTypography>28°C</StyledTypography>
        <Typography
          sx={{
            color: "gray",
            fontFamily: "monospace",
            fontSize: "1.3rem",
          }}
        >
          28°C
        </Typography>
      </Items>
      <Items>
        <StyledTypography>Perş</StyledTypography>
        <Avatar src="https://www.weather2umbrella.com/wp-content/themes/w2u/image/svg/weather-icons/n04.svg" />
        <StyledTypography>28°C</StyledTypography>
        <Typography
          sx={{
            color: "gray",
            fontFamily: "monospace",
            fontSize: "1.3rem",
          }}
        >
          28°C
        </Typography>
      </Items>
      <Items>
        <StyledTypography>Cuma</StyledTypography>
        <Avatar src="https://www.weather2umbrella.com/wp-content/themes/w2u/image/svg/weather-icons/n04.svg" />
        <StyledTypography>28°C</StyledTypography>
        <Typography
          sx={{
            color: "gray",
            fontFamily: "monospace",
            fontSize: "1.3rem",
          }}
        >
          28°C
        </Typography>
      </Items>
    </Box>
  );
};

export default FifeDay;
