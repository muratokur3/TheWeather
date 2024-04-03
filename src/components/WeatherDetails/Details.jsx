import { Avatar, Box, Typography as styledTypography } from "@mui/material";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import humidity from "../../assets/Icons/air_humidity.svg";
import eye from "../../assets/Icons/eye.svg";
import wind from "../../assets/Icons/wind_speed.svg";
import thermalSensation from "../../assets/Icons/thermal_sensation.svg";
const Typography = styled(styledTypography)({
  color: "white",
  fontSize: "1.5rem",
});
const Item = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "1rem",
  borderBottom: "1px solid rgba(71, 69, 69, 0.259)",
  padding: ".6rem",
  alignItems: "center",
});

const TexIcon = styled(Box)({
  width: "auto",
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
});

const Details = ({ detail }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#3333",
        borderRadius: "2rem",
        padding: ".7rem",
      }}
    >
      <Item>
        <TexIcon>
          <Avatar src={thermalSensation} />
          <Typography>Sıcaklık</Typography>
        </TexIcon>
        <Typography>{detail.temp}°C</Typography>
      </Item>
      <Item>
        <TexIcon>
          <Avatar src={wind} />
          <Typography>Rüzgar hızı</Typography>
        </TexIcon>
        <Typography>{detail.windSpeed} km/s</Typography>
      </Item>
      <Item>
        <TexIcon>
          <Avatar src={humidity} />
          <Typography>Nem oranı</Typography>
        </TexIcon>
        <Typography>{detail.humidity}%</Typography>
      </Item>
      <Item>
        <TexIcon>
          <Avatar src={eye} />
          <Typography>Görüş mesafesi</Typography>
        </TexIcon>
        <Typography>{detail.visibility}%</Typography>
      </Item>
    </Box>
  );
};

export default Details;
Details.propTypes = {
  detail: PropTypes.object,
};
