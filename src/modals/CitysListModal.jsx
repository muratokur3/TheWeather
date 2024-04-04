import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddCity from "./AddCity";
import CityList from "../components/city/CityList";
import ListIcon from "@mui/icons-material/List";
import { useMediaQuery } from "@mui/material";

const CitysListModal = () => {
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1234px)");

  const style = {
    width: isTablet?"70%":"100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5%",
    // bgcolor: "rgba(0, 0, 0, 0.753)",
    background:"#13131A",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow:"auto",
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button variant="text" size="large" onClick={handleOpen}>
        <ListIcon/>
      </Button>
      <Modal open={open} onClose={handleClose} sx={{
        backgroundColor:"#13131A",

        display: "flex",
    justifyContent: "center",
      }}>
        <Box sx={style}>
          <AddCity />
          <CityList onClose={handleClose}/>
        </Box>
      </Modal>
    </Box>
  );
};
export default CitysListModal;
