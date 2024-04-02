import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import SearchBar from "../components/SearchBar";
import { Avatar, Typography } from "@mui/material";
import logo from "../../public/simbolo.svg";
const style = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10%",
  transform: "translate(-50%, -50%)",
  bgcolor: "rgba(0, 0, 0, 0.753)",
  // bgcolor: "red",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddCity = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button variant="outlined" size="large" onClick={handleOpen}>
        Şehir Ekle
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            margin={"20% 0"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Avatar src={logo} />
            <Typography color="white">TheWeather </Typography>{" "}
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
            <Box display={"flex"} gap={2}>
              <Typography variant="h5" color={"blueviolet"}>
                TypeWeather
              </Typography>
              <Typography variant="h5" color="white">Hoş Geldiniz</Typography>
            </Box>

            <Typography fontSize={12} color="white">
              Hava tahminini görmek için bir konum seçin
            </Typography>

            <SearchBar closeModal={handleClose} />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
export default AddCity;
