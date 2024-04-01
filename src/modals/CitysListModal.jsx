import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddCity from "./AddCity";
import CityList from "../components/city/CityList";
import ListIcon from "@mui/icons-material/List";

const CitysListModal = () => {

  const style = {
    width: "100%",
    height:"100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20%",
    transform: "translate(-50%, -50%)",
    bgcolor: "rgba(0, 0, 0, 0.753)",
    // bgcolor: "red",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    padding: "10vw 20vw",
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button variant="text" size="large" onClick={handleOpen}>
        <ListIcon />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <AddCity />
          <CityList />
        </Box>
      </Modal>
    </Box>
  );
};
export default CitysListModal;
