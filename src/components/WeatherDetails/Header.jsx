import {
  Avatar,
  Box,
  Typography as styledTypography,
  useMediaQuery,
} from "@mui/material";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Background } from "../../utils/getBackground";
import { getIcon } from "../../utils/getIcons";

const Typography = styled(styledTypography)({
  color: "white",
});

const Header = ({ detail }) => {
  const isPhone = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#16161F",
        borderRadius: ".75rem",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          width: "100%",
          height: "35vh",
          minHeight: "300px",
          padding: "1rem",
          position: "relative",
          backgroundImage: `url(${Background(detail.icon)})`,
          backgroundSize: "cover",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      >
        <Box>
          <Typography variant={isPhone ? "h5" : "h4"}>
            {detail.name} - {detail?.country}
          </Typography>
          <Typography
            variant={!isPhone && "body2"}
            sx={{
              fontSize: "0.75rem", // 12px
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            {new Date(detail.date * 1000).toLocaleDateString("tr-TR", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant={isPhone && "h2"}
            sx={!isPhone&&{
              fontSize: "4.5rem", // 48px
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {detail.temp}°c
          </Typography>
          <Typography variant={isPhone ? "h5" : "h4"}>
            {detail.minTemp}°c / {detail.maxTemp}°c
          </Typography>
          <Typography variant="body2">
            {" "}
            Hava {detail.description}
          </Typography>
        </Box>

        <Avatar
          variant="rounded"
          sx={{
            width: "150px",
            height: "150px",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
          src={getIcon(detail.icon)}
        />
      </Box>
    </Box>
  );
};

export default Header;
Header.propTypes = {
  detail: PropTypes.object.isRequired,
};
