import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/";

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export { AppRoutes };
