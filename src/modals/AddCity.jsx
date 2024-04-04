import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import SearchCity from "../components/SearchCity";
import { Typography } from "@mui/material";
import background from "../assets/Background/Background.svg";
const style = {
  width:"100%",
  height:"50%",
  display: "flex",
  flexDirection: "column",
  justifyContent:"space-between",
  alignItems: "center",
  gap: "20%",
  bgcolor: "none",

  p: 4,
};


const AddCity = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button variant="outlined" size="large" onClick={handleOpen}
          
     >
      Yeni Şehir Ekle
      </Button>
    
      <Modal open={open} onClose={handleClose} sx={{
             background: `url(${background})`,
             backgroundSize: "cover",
             backgroundRepeat:"repeat"
      }}>
        <Box sx={style}>
          <Box
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
          

            <Typography fontSize={"1rem"} color="#7F7F98">
              Hava tahminini görmek için bir konum seçin
            </Typography>

            <SearchCity closeModal={handleClose} />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
export default AddCity;
