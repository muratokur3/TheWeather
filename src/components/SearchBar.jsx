import { Box, Button, InputBase } from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
// import axios from "../../axiosConfig";
import PropTypes from "prop-types";
import { useState } from "react";
// import { setCity } from "../redux/slices/CitySlice";
import { useDispatch } from "react-redux";
import { getCity } from "../redux/actions/CityActions";

const SearchBar = ({closeModal}) => {
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
        await dispatch(getCity(value));
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
            placeholder="Şehir ara"
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
            backgroundColor: "gray",
            borderRadius: ".5rem",
            color: "white",
            gap: ".1rem",
            // background: "none",
            position: "absolute",
            top: "100%",
            left: 0,
          }}
        >
          {citys.map((item, index) => {
            return (
              <Button
                key={index}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  border: "none",
                  color: "black",
                  padding: "1rem",
                  borderRadius:
                    index === 0
                      ? "1rem 1rem 0 0"
                      : index === citys.length - 1
                      ? "0 0 1rem 1rem"
                      : "0",
                }}
                onClick={() => handleCity(item)}
              >
                {item.name}
              </Button>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
export default SearchBar;
SearchBar.propTypes={
  closeModal:PropTypes.func.isRequired
}
