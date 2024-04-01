import { Avatar, Box, Typography as styledTypography } from "@mui/material";
import styled from "@emotion/styled";
import weatherlogo from "../../assets/cloudy.png";
import PropTypes from "prop-types";
const Typography = styled(styledTypography)({
  color: "white",
});
const Hitem = styled(Box)({
  position: "absolute",
  margin: "1rem",
});

const Header = ({ detail }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("tr-TR");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "40vh",
        padding: "1rem",
        bgcolor: "#5572",
        borderRadius: "1rem",
      }}
    >
      <Box
        sx={{
          height: "100%",
          position: "relative",
          backgroundImage:
            "url('https://img.pixers.pics/pho_wat(s3:700/FO/57/83/09/14/700_FO57830914_28e5c3b283666491a3be47e74034a985.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/cikartmalar-gece-gokyuzu-vector-illustration.jpg.jpg')",
          backgroundSize: "cover",
          borderRadius: "1rem",
        }}
      >
        <Hitem
          sx={{
            top: 0,
            left: 0,
          }}
        >
          <Typography variant="h5">{detail.name}</Typography>
          <Typography variant="body2">{formatDate(detail.date)}</Typography>
        </Hitem>

        <Hitem
          sx={{
            bottom: 0,
            left: 0,
          }}
        >
          <Typography variant="h2">{detail.temp}</Typography>
          <Typography variant="body2">
            {detail.minTemp}°C / {detail.maxTemp}
          </Typography>
          <Typography variant="body3">{detail.description}</Typography>
        </Hitem>

        <Hitem
          sx={{
            bottom: 0,
            right: 0,
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              width: "150px",
              height: "150px",
            }}
            src={weatherlogo}
          />
        </Hitem>
      </Box>
    </Box>
  );
};

export default Header;
Header.propTypes = {
  detail: PropTypes.object.isRequired,
};
