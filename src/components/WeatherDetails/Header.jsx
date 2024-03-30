import { Avatar, Box, Typography as styledTypography} from "@mui/material";
import styled from "@emotion/styled";
import weatherlogo from "../../assets/cloudy.png";

const Typography = styled(styledTypography)({
  color: "white",
})
const Hitem=styled(Box)({
  position: "absolute",
  margin:"1rem",
});

const Header = () => {
  return (
    <Box
    sx={{
      width: "100%",
      height: "40vh",
      border: "1px solid black",
      position:"relative",
      backgroundImage:"url('https://img.pixers.pics/pho_wat(s3:700/FO/57/83/09/14/700_FO57830914_28e5c3b283666491a3be47e74034a985.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/cikartmalar-gece-gokyuzu-vector-illustration.jpg.jpg')",
      backgroundSize:"cover",
      borderRadius:"2rem",
    }}
  >
    <Hitem
      sx={{
        top: 0,
        left: 0,
      }}
    >
      <Typography variant="h5">İstanbul, TR</Typography>
      <Typography variant="body2">Monday, May 15,2023</Typography>
    </Hitem>

    <Hitem
      sx={{
        bottom: 0,
        left: 0,
      }}
    >
      <Typography variant="h2" >28°C</Typography>
      <Typography variant="body2">22°C / 35°C</Typography>
      <Typography variant="body2">hava Güzel</Typography>
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
        width:"150px",
        height:"150px",
      }} src={weatherlogo} />
    </Hitem>
  </Box>
  )
}

export default Header