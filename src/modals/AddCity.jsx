import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import background from "../assets/Background/Background.svg";
import NewLocation from "../components/search/NewLocation";

const AddCity = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button variant="outlined" size="large" onClick={handleOpen}>
        Yeni Şehir Ekle
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          background: `url(${background})`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <NewLocation />
      </Modal>
    </Box>
  );
};
export default AddCity;
