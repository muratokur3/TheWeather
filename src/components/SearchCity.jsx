import { Box, Typography, InputBase } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { getName } from "country-list";
import axios from "../../axiosConfig";
import PropTypes from "prop-types";
import { useState } from "react";
// import { setCity } from "../redux/slices/CitySlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/actions/Cities";
import { useTheme } from "@mui/material/styles";
const SearchBar = ({ closeModal }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const stateStatus = useSelector((state) => state.weatherData.status);

  const [citys, setCitys] = useState([]);

  const search = async (text) => {
    const response = await axios(`geo/1.0/direct?q=${text}&limit=4`);
    if (response.status === 200) {
      setCitys(response.data);
    }
  };
  const handleCity = async (value) => {
    if (value.length !== 0) {
      try {
        dispatch(fetchWeatherData(value.name));
        setCitys([]);
      } catch (error) {
        console.error(error);
      } finally {
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
        background: "#1E1E29",
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
            borderRadius: ".7rem",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{
              width: "100%",
              color: "#BFBFD4",
              fontSize: "1.2rem",
            }}
            placeholder="Konum ara"
            onChange={(e) => search(e.target.value)}
          />
          {stateStatus == "loading" && (
            <CircularProgress size={"2rem"} sx={{ color: "white" }} />
          )}
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
            color: "#BFBFD4",
            gap: ".2rem",
            fontSize: "1.2rem",
            position: "absolute",
            top: "120%",
            left: 0,
            zIndex: 223323,
          }}
        >
          {citys.map((item, index) => {
            return (
              <Typography
                key={index}
                sx={{
                  width: "100%",
                  backgroundColor: "#3B3B54",
                  border: "none",
                  padding: "1rem 1.5rem",
                  cursor: "pointer",
                  borderRadius:
                    index === 0
                      ? citys.length === 1
                        ? ".5rem"
                        : ".5rem .5rem 0 0"
                      : index === citys.length - 1
                      ? "0 0 .5rem .5rem"
                      : "0",
                  "&:hover": {
                    backgroundColor: "#4B4B64",
                  },
                }}
                onClick={() => handleCity(item)}
              >
                {item.name} - {getName(item.country)}
              </Typography>
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
