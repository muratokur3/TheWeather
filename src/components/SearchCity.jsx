import { useEffect, useState, useCallback } from "react";
import { Box, Typography, InputBase } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { getName } from "country-list";
import axios from "../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/actions/Cities";
// import { useNavigate } from "react-router-dom";

const SearchCity = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [citys, setCitys] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = useSelector((state) => state.weatherData.cities);
  const citiesStatus = useSelector((state) => state.weatherData.status);
  const getMyLocation = useCallback(async () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios(
            `geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1`
          );
        setLoading(false);
        setSearchInput(response.data[0].name)
        const cityName = response.data[0].name;
          dispatch(fetchWeatherData(cityName));
        } catch (error) {
          console.error("Konumdan şehir adı alınamadı:", error);
        } finally {
          setLoading(false);
          // closeModal();
        }
      },
      (error) => {
        console.error("Konum alınamadı:", error);
        setLoading(false);
      }
    );
  }, [dispatch]);

  useEffect(() => {
    if (cities.length === 0) {
      getMyLocation();
    }
  }, [searchInput, cities, getMyLocation]);

  const handleSearch =async (searchTerm) => {
      try {
        const response = await axios(`geo/1.0/direct?q=${searchTerm}&limit=4`);
        setCitys(response.data);
      } catch (error) {
        console.error("Arama sırasında hata oluştu:", error);
      } 
    };

  const handleCitySelection = async (city) => {
    try {
      // fetchWeatherData işlemi tamamlanana kadar bekler
      await dispatch(fetchWeatherData(city.name));
      setSearchInput(city.name);
      if (citiesStatus === "succeeded") {
        // closeModal();
      }
    } catch (error) {
      console.error("Hava durumu verisi alınırken hata oluştu:", error);
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
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: loading ? "#ABABC4" : "#13131A",
          borderRadius: ".5rem",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: "#BFBFD4" }}
          placeholder={loading ? "Konum alınıyor..." : "Şehir Ara..."}
          inputProps={{ "aria-label": "Şehir ara" }}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            handleSearch(e.target.value);
          }}
          disabled={loading}
        />
        {(loading || citiesStatus === "loading") && (
          <CircularProgress
            size={24}
            sx={{
              color: loading ? "#3B3B54" : "#BFBFD4",
              position: "absolute",
              top: "50%",
              right: "10px",
              marginTop: "-12px",
            }}
          />
        )}
      </Box>
      {citys.length > 0 && (
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
            backgroundColor: "none",
            display: "flex",
            flexDirection: "column",
            gap: ".1rem",
            position: "absolute",
            zIndex: 1,
            top: "111%",
            left: 0,
          }}
        >
          {citys.map((city, index) => (
            <Typography
              key={index}
              sx={{
                backgroundColor: "#3B3B54",
                border: "none",
                padding: "1rem 1.5rem",
                cursor: "pointer",
                color: "#BFBFD4",
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
              onClick={() => handleCitySelection(city)}
            >
              {city.name} - {getName(city.country)}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};
export default SearchCity;
