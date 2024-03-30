import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import { sessionService } from "redux-react-session";
// import { useTheme } from "@mui/material/styles";

import Sidebar from "../components/Sidebar";
import MobileNavigate from "../components/menu/MobileNavigate";
import RightMenu from "../components/menu/RightMenu";
import { useEffect } from "react";
const Layout = () => {
  //rakamlardan random bir id değeri oluşturur
  const randomId = async () => {
    return Math.random().toString(36);
  };
  const loggined = async () => {
    await sessionService.saveSession({
      userId: await randomId() + "_" + Date.now(),
    });
    await sessionService.saveUser({userId:"1"});
  };
  useEffect(() => {
    loggined();
  });
  // const theme = useTheme();
  const isPhone = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1234px)");

  const Container = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "black",
    position: "relative",
  });

  const Content = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: isPhone ? "100%" : isTablet ? "80%" : "50%",
    minHeight: "100vh",
    // border: "1px solid grey",
  });

  return (
    <Container>
      {!isPhone && !isTablet && <Sidebar />}
      <Content>
        <Outlet />
      </Content>
      {(isPhone || isTablet) && <MobileNavigate />}

      {!isPhone && !isTablet && (
        <Box
          sx={{
            position: "fixed",
            top: 10,
            right: 10,
            zIndex: 0.5,
          }}
        >
          <RightMenu />
        </Box>
      )}
    </Container>
  );
};

export default Layout;
