import { Outlet, useNavigate } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";

import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/actions/Cities";
import background from "../assets/Background/Background.svg";
import axios from "axios";
import Loading from "../components/Loading";
import Welcome from "../pages/Welcome";
const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const weatherData = useSelector((state) => state.weatherData.cities);
  console.log(weatherData);
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(fetchWeatherData());
    }, 3600000 * 2); // 2 saat

    return () => clearInterval(intervalId);
  }, [dispatch]);

  useEffect(() => {
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
          setLoading(false);
        }
      }
    };
    getCityNameAndFetchWeather();
  }, [location, dispatch]);

  const isPhone = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1234px)");

  const Container = styled(Box)({
    width: "100%",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    position: "relative",
    background: "#1a1a1c",
    backgroundImage: `url(${background})`,
    overflow: "hidden",
  });

  const Content = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: isPhone ? "100%" : isTablet ? "80%" : "50%",
    minHeight: "100vh",
    backgroundColor: "none",
    padding: "1rem 0",
    overflowX: "hidden",
  });

  return (
    <Container>
      {loading && <Loading />}
      {weatherData.length === 0 && <Welcome />}
      {!isPhone && !isTablet && <Sidebar />}
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
