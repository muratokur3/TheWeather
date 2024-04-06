import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import SearchCity from "../components/SearchCity";
import { Typography,Avatar } from "@mui/material";
import background from "../assets/Background/Background.svg";
import logo from "../assets/logo/marca.svg";
const style = {
  width:"auto",
  height:"60%",
  display: "flex",
  flexDirection: "column",
  justifyContent:"space-evenly",
  alignItems: "center",
  gap: "20%",
  bgcolor: "none",
  p: 4,
  backgroundColor:"none"
};


const AddCity = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button variant="outlined" size="large" onClick={handleOpen}>
      Yeni Şehir Ekle
      </Button>
    
      <Modal open={open} onClose={handleClose} sx={{
             background: `url(${background})`,
             backgroundSize: "cover",
             display:"flex",
              justifyContent:"center",
      }}>
        <Box sx={style}>
         
            {/* <Avatar src={logo} sx={{width:"186px",height:"32px"}}/> */}
            <Avatar src={logo} sx={{width:"300px",height:"50px"}}/>
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

            <SearchCity closeModal={handleClose}/>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
export default AddCity;
