import { Outlet } from "react-router-dom";
import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import { sessionService } from "redux-react-session";
// import { useTheme } from "@mui/material/styles";

import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../redux/slices/CitySlice";
import axios from "axios";
const Layout = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Oturum işlemleri
    const initializeSession = async () => {
      const sessionId = Math.random().toString(36) + "_" + Date.now();
      await sessionService.saveSession({ sessionId });
      await sessionService.saveUser({ userId: "1" });
    };
    initializeSession();

    // Kullanıcının konumunu alma
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
      },
      (error) => {
        console.error("Konum alınamadı:", error);
        setLoading(false); // Konum alınamazsa yükleme ekranını kapat
      }
    );
  }, []);

  useEffect(() => {
    const getCityNameAndFetchWeather = async () => {
      if (location && location.lat && location.lon) {
        try {
          const response = await axios(
            `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.lon}&limit=1&appid=3a624872bbe7babf701dee83da65a57c`
          );
          const cityName = response.data[0].name;
          dispatch(fetchWeatherData(cityName));
        } catch (error) {
          console.error("Şehir adı alınamadı:", error);
        } finally {
          setLoading(false); // Veri çekme işlemi tamamlandıktan sonra yükleme ekranını kapat
        }
      }
    };

    getCityNameAndFetchWeather();
  }, [location, dispatch]);

  const isPhone = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1234px)");

  const Container = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    position: "relative",
    backgroundColor:"rgba(3, 4, 12, 0.894)"
  });

  const Content = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: isPhone ? "100%" : isTablet ? "80%" : "50%",
    minHeight: "100vh",
  });
 
  return (
    <Container>
      {loading && (
        <Box  sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          background: " rgba(0, 0, 0, 0.372)",
          position: "absolute",
          zIndex: 100,
        }}>
          <CircularProgress />
        </Box>
      )}
      {!isPhone && !isTablet && <Sidebar />}
      <Content>
        <Outlet />
      </Content>
      
    </Container>
  );
};


export default Layout;
