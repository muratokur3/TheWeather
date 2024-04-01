import { Box, Button, InputBase } from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
// import axios from "../../axiosConfig";
import PropTypes from "prop-types";
import { useState } from "react";
// import { setCity } from "../redux/slices/CitySlice";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../redux/slices/CitySlice";

const SearchBar = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [isProgses, setIsProgses] = useState(false);
  const [citys, setCitys] = useState([]);

  const search = async (text) => {
    const response = await axios(
      `http://api.openweathermap.org/geo/1.0/direct?q=${text},tr&limit=4&appid=3a624872bbe7babf701dee83da65a57c`
    );
    if (response.status === 200) {
      setCitys(response.data);
    }
  };
  const handleCity = async (value) => {
    if (value.length !== 0) {
      setIsProgses(true);
      try {
        dispatch(fetchWeatherData(value.name));
        setCitys([]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsProgses(false);
        closeModal();
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "auto",
          position: "relative",
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
            placeholder="Konum ara"
            onChange={(e) => search(e.target.value)}
          />
          {isProgses && <CircularProgress size={40} sx={{ color: "white" }} />}
        </Box>
      </Box>
      {citys.length > 0 && (
        <Box
          sx={{
            minWidth: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "none",
            borderRadius: ".5rem",
            color: "white",
            gap: ".2rem",
            position: "absolute",
            top: "120%",
            left: 0,
            zIndex: 223323,
          }}
        >
          {citys.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  backgroundColor: "#557",
                  border: "none",
                  color: "black",
                  padding: "1rem 1.5rem",
                  cursor: "pointer",
                  borderRadius:
                    index === 0
                      ? citys.length === 1
                        ? "1rem"
                        : "1rem 1rem 0 0"
                      : index === citys.length - 1
                      ? "0 0 1rem 1rem"
                      : "0",
                }}
                onClick={() => handleCity(item)}
              >
                {item.name}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
export default SearchBar;
SearchBar.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
