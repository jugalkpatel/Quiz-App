import { Routes, Route } from "react-router-dom";

import { Home, Login, Signup, Main } from "./pages/";
import { Start, Lobby, LeaderBoard, NotFound } from "./components";
import { ThemeProps } from "./hooks/useDarkMode.hook";
import { PrivateRoute, LevelRoute } from "./helpers";

function AppRoutes({ mode, setMode }: ThemeProps) {
  return (
    <Routes>
      <Route path="/" element={<Home mode={mode} setMode={setMode} />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
        <Route
          path="/play/:level"
          element={
            <LevelRoute>
              <Start />
            </LevelRoute>
          }
        >
          <Route index element={<Lobby />} />
          <Route path="/play/:level/leaderboard" element={<LeaderBoard />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
