import { Outlet, useNavigate } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import background from "../assets/Background/Background.svg";

const Layout = () => {

  const navigate = useNavigate();
  const weatherData = useSelector((state) => state.weatherData.cities);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     dispatch(fetchWeatherData());
  //   }, 3600000 * 2); // 2 saat

  //   return () => clearInterval(intervalId);
  // }, [dispatch]);

  useEffect(() => {
    if (weatherData.length === 0) {
      navigate("/welcome");
      console.log("Şehir verisi boş, welcome sayfasına yönlendiriliyor");
    }
  }, [weatherData, navigate]);

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
      {!isPhone && !isTablet && <Sidebar />}
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
