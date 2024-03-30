import { Box, Typography as styledTypography } from "@mui/material";
import Battery20Icon from "@mui/icons-material/Battery20";
import LightModeIcon from "@mui/icons-material/LightMode";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import FloodIcon from "@mui/icons-material/Flood";
import styled from "@emotion/styled";

const Typography = styled(styledTypography)({
  color: "white",
  fontSize:"1.5rem"
});
const Item = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "1rem",
  borderBottom: "1px solid rgba(71, 69, 69, 0.259)",
  padding:"1rem",
  alignItems:"center",
});

const TexIcon = styled(Box)({
  width:"auto",
 display:"flex",
 flexDirection:"row",
  gap:"2rem",

});

const Details = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#3333",
        borderRadius:"2rem",
        padding:"2rem",
      }}
    >
      <Item>
        <TexIcon>
          <Battery20Icon />
          <Typography>Sıcaklık</Typography>
        </TexIcon>
        <Typography>28°C</Typography>
      </Item>
      <Item>
        <TexIcon>
          <LightModeIcon />
          <Typography>Yağış ihtimali</Typography>
        </TexIcon>
        <Typography>20%</Typography>
      </Item>
      <Item>
        <TexIcon>
          <LineAxisIcon />
          <Typography>Rüzgar hızı</Typography>
        </TexIcon>
        <Typography>10 Km/s</Typography>
      </Item>
      <Item>
        <TexIcon>
        <FloodIcon />
        <Typography>Nem oranı</Typography>
        </TexIcon>
        <Typography>40%</Typography>
      </Item>
    </Box>
  );
};

export default Details;
