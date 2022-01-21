import { Routes, Route } from "react-router-dom";

import { ThemeTypes } from "./common";
import { Home, Login, Signup, Main } from "./pages";
import { Start, Lobby, LeaderBoard, NotFound, ExitModal } from "./components";
import { PrivateRoute, LevelRoute, GamePlayRoute } from "./helpers";

function AppRoutes({ mode, setMode }: ThemeTypes) {
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
      <Route path="/play/:level/quiz" element={<GamePlayRoute />}>
        <Route path="/play/:level/quiz/exit" element={<ExitModal />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
