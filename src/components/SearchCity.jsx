import { Box, Typography, InputBase } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { getName } from "country-list";
import axios from "../../axiosConfig";
import { useEffect, useState } from "react";
// import { setCity } from "../redux/slices/CitySlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/actions/Cities";
import { useNavigate } from "react-router-dom";
const SearchCity = () => {
  const dispatch = useDispatch();
  const stateStatus = useSelector((state) => state.weatherData.status);
  const weatherData = useSelector((state) => state.weatherData.cities);

  const navigate = useNavigate();
  const [citys, setCitys] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const getCityNameAndFetchWeather = async () => {
    if (location && location.lat && location.lon) {
      try {
        const response = await axios(
          `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.lon}&limit=1&appid=86b64ed4b41660da65c6a57d3e975798`
        );
        setSearchInput(await response.data[0].name);
        // alert("Şehir adı geldi:", searchInput);
        setLoading(false);
      } catch (error) {
        console.error("Şehir adı alınamadı:", error);
        setLoading(false);
      }
    }
  };

  const getMyLocation = async () => {
    // Kullanıcının konumunu alma
    try {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          console.log("Konum geldi:", location);
        },
        (error) => {
          console.error("Konum alınamadı:", error);
          console.log("Konum alınamadı:", error);
          alert("Konum alınamadı");
          setLoading(false);
        }
      );
    } catch (error) {
      console.error("Konum alınamadı:", error);
      console.log("Konum alınamadı:", error);
    }
  };

  useEffect(() => {
    if (weatherData.length === 0 && location == null) {
      localStorage.clear();
      getMyLocation();
      setLoading(true);
    }
    location !== null && getCityNameAndFetchWeather();
    // weatherData.length === 0? getMyLocation():setLoading(false);
  }, [location]);

  useEffect(() => {
    if (searchInput.length !== 0) {
      handleSearch();
    }
  }, [searchInput]);

  const handleSearch = async () => {
    const response = await axios(`geo/1.0/direct?q=${searchInput}&limit=4`);
    if (response.status === 200) {
      setCitys(response.data);
    }
  };

  const handleCity = async (value) => {
    if (value.length !== 0) {
      try {
        dispatch(fetchWeatherData(value?.name));
        setCitys([]);
      } catch (error) {
        console.error(error);
      } finally {
        navigate("/");
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
        background: "none",
        position: "relative",
        
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "auto",
          position: "relative",
          background:"none"
        }}
      >
        <Box
          sx={{
            padding: ".5rem 1.5rem",
            display: "flex",
            flexDirection: "row",
            borderRadius: "1rem",
            alignItems: "center",
            backgroundColor:loading? "white":"#1E1E29",
          }}
        >
          <InputBase
            sx={{
              width: "100%",
              color: "#BFBFD4",
            }}
            value={searchInput}
            disabled={loading}
            placeholder={loading ? "Konumunuz alınıyor...": "Konum ara"}
            placeholderTextColor={"#BFBFD4"}
            onChange={(e) => setSearchInput(e.target.value)}
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
export default SearchCity;
