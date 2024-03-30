import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CityCard from "../components/CityCard";
import CityList from "../components/CityList";
import SearchBar from "../components/SearchBar";

const CitysList = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Tüm Şehirler
      </Button>
      <BootstrapDialog
        maxWidth="sm"
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: "0 auto", p: 2 }} id="customized-dialog-title">
          Şehirler
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          <SearchBar/>
          <CityList/>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};
export default CitysList;
