import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import background from "../assets/Background/Background.svg";
import Welcome from "../pages/Welcome";

const Layout = () => {
  const isPhone = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1234px)");

  const weatherData = useSelector((state) => state.weatherData.cities);

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
    paddingBottom: `${(isPhone||isTablet)?"40px":"20px"}`,
    overflowX: "hidden",
  });

  return (
    <Container>
      {!isPhone && !isTablet && <Sidebar />}
      {weatherData.length === 0 && <Welcome />}
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
