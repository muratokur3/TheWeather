import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import AppBar from "../components/appBar";
const Layout = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1234px)");

  const Container = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "black",
  });

  const Content = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: isPhone ? "100%": isTablet ? "80%" : "60%",
    minHeight: "90vh",
    backgroundColor: "wheat",
  });

  return (
      <Container>
        <Content>
       <AppBar/>
          <Outlet />
        </Content>
      </Container>
  );
};

export default Layout;
