import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layout";

function LayoutRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Home />} />
        </Route>
    </Routes>
  );
}

export default LayoutRoute;
