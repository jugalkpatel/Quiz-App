import { Routes, Route } from "react-router-dom";

import { ThemeTypes } from "./common";
import { Login, Signup, Main, Profile, LandingPage } from "./pages";
import {
  Start,
  Lobby,
  LeaderBoard,
  ExitModal,
  FinishModal,
  History,
  NotAvailable,
  PageLayout,
  Navbar,
} from "./components";
import { PrivateRoute, LevelRoute, GamePlayRoute } from "./helpers";

function AppRoutes({ mode, setMode }: ThemeTypes) {
  return (
    <Routes>
      <Route path="/" element={<LandingPage mode={mode} />} />
      <Route
        element={
          <PageLayout>
            <Navbar mode={mode} setMode={setMode} />
          </PageLayout>
        }
      >
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/home"
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

        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />


        <Route
          path="*"
          element={<NotAvailable message="404! oops...page not found" />}
        />
      </Route>

      <Route path="/play/:level/quiz" element={<GamePlayRoute />}>
        <Route path="/play/:level/quiz/exit" element={<ExitModal />} />
        <Route path="/play/:level/quiz/finish" element={<FinishModal />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
