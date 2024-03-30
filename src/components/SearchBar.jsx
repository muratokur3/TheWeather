import { Box, InputBase } from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

const SearchBar = () => {
  const [citys, setCitys] = useState([]);

  const sehir = [
    { name: "Ankara" },
    { name: "İstanbul" },
    { name: "İzmir" },
    { name: "Adana" },
    { name: "Antalya" },
    { name: "Bursa" },
    { name: "Eskişehir" },
  ];
  const search = (text) => {
    const filtered = sehir.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setCitys(filtered);
  };

  return (
    <Box  sx={{
      width: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          position:"relative"
        }}
      >
        <Box
          sx={{
            padding: ".5rem 1.5rem",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#335",
            borderRadius: ".7rem",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{
              width: "100%",
              color: "white",
            }}
            placeholder="Şehir ara"
            onChange={() => search(event.target.value)}
          />
          <CircularProgress size={40} sx={{ color: "white" }} />  
        </Box>

      </Box>
     {citys.length>0 &&<Box
        sx={{
          minWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "gray",
          borderRadius: ".5rem",
          color: "white",
          gap: ".1rem",
          // background: "none",
          position:"absolute",
          top:"100%",
          left:0,
        }}
      >
        {citys.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                padding: "1rem",
                borderRadius:
                  index === 0
                    ? "1rem 1rem 0 0"
                    : index === citys.length - 1
                    ? "0 0 1rem 1rem"
                    : "0",
              }}
            >
              {item.name}
            </Box>
          );
        })}
      </Box>}
    </Box>
  );
};
export default SearchBar;
