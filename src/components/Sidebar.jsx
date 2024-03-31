import { Box, Button } from "@mui/material";
import AddCity from "../modals/AddCity";
import { useState } from "react";
import CityList from "./city/CityList";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
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
        backgroundColor: "rgba(71, 69, 69, 0.259)",
      }}
    >
      <Box
        sx={{
          display: open ? "flex" : "none",
          width: "20vw",
          height:"100%",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <AddCity />
        <CityList />
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
