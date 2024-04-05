import {  Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layout";
import Welcome from "../pages/Welcome";

function LayoutRoute() {
  return (
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Routes>
  );
}

export default LayoutRoute;
