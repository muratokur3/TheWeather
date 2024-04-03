import { Avatar, Box, Typography as styledTypography, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Background } from "../../utils/getBackground";
import { getIcon } from "../../utils/getIcons";
import {getName} from "country-list";

const Typography = styled(styledTypography)({
  color: "white",
});

const Header = ({ detail }) => {
  const isPhone = useMediaQuery("(max-width: 600px)");

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("tr-TR");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: "30vh",
        minHeight:"200px",
        padding: "1rem",
        position: "relative",
          backgroundImage: `url(${Background(detail.icon)})`,
          backgroundSize: "cover",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
     
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant={isPhone?"h6":"h4"}>{detail.name} - {getName(detail?.country)}</Typography>
          <Typography variant="body2">{formatDate(detail.date)}</Typography>
        </Box>

        <Box>
          <Typography variant="h3">{detail.temp}°C</Typography>
          <Typography variant={isPhone?"body2":"body1"}>
            {detail.minTemp}°C / {detail.maxTemp}°C
          </Typography>
          <Typography variant="body1">{detail.description}</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "end",
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: "150px",
            height: "150px",
          }}
          src={getIcon(detail.icon)}
        />

        <Box />
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default Header;
Header.propTypes = {
  detail: PropTypes.object.isRequired,
};
