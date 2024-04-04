import { Box, Button } from "@mui/material";
import AddCity from "../modals/AddCity";
import { useState } from "react";
import CityList from "./city/CityList";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        width: "auto",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1c1c27",
      }}
    >
      <Box
        sx={{
          display: open ? "flex" : "none",
          width: "20vw",
          height: "100%",
          maxHeight:"100%",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "0 1rem",
          overflow: "auto",
          position: "relative",
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent', // Scroll bar track'ın rengini ayarlar
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#3b3b54', // Scroll bar thumb'ın rengini ayarlar
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#22222f', // Scroll bar thumb'ın hover rengini ayarlar
          },
        }}
      >
        <Box sx={{
        width:"100%",
        position:"sticky",
        left:"0",
        top: 0,
        backgroundColor: "#1c1c27",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"1rem 0",
        zIndex:"1",
        }}>
        <AddCity />
        </Box>
        <CityList/>
      </Box>

      <Box
        sx={{
          position: "relative",
        }}
      >
        <Button
          sx={{
            width: "50px",
            height: "80px",
            position: "absolute",
            top: "0",
            right: "-65px",
          }}
          onClick={handleOpen}
        >
          {open ? "<" : ">"}
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
