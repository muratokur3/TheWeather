import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layout";
import Welcome from "../pages/Welcome";

function LayoutRoute() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default LayoutRoute;
