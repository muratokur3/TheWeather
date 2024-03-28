import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layout";
import AppBar from "../components/appBar";

function LayoutRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bar" element={<AppBar />} />
        </Route>
    </Routes>
  );
}

export default LayoutRoute;
