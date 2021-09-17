import { Routes, Route } from "react-router-dom";

import { Home, GamePlay, Login, Signup, Main } from "./pages/";
import { ThemeProps } from "./hooks/useDarkMode.hook";

function AppRoutes({ mode, setMode }: ThemeProps): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home mode={mode} setMode={setMode} />}>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/play" element={<GamePlay />} />
    </Routes>
  );
}

export { AppRoutes };
