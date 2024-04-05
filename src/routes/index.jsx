import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layout";
import Welcome from "../pages/Welcome";
import { Router } from "express";

function LayoutRoute() {
  return (
    <Router basename="/TheWeather">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default LayoutRoute;
